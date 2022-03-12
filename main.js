// var fs = require('fs');

// // file is included here:
// eval(fs.readFileSync('garb.js')+'');

// ResetGame()
// InitializeFromFen("5rk1/p1p1qppp/5n2/3P4/3n1B2/2NP2P1/Pr5P/R2Q1RK1 w - - 0 16")
// function call(move,value){
//     console.log(GetMoveSAN(move)+": "+value)
// }
// Search(call,200,null)
// // let moves = new Array();
// // GenerateAllMoves(moves)
// // var i = 0;
// // for(;i<moves.length; i++){
// //     console.log(i+": "+GetMoveSAN(moves[i]))
// // }
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
const {WebSocket, WebSocketServer} = require("ws");
const Stockfish = require("stockfish.wasm");
g = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?{~}(^)[_]@#$,./&-*++=", b = "qnrbkp";
function decodeTCN(e) {
    var t, n, a, l, h = e.length, p = [];
    for (t = 0; t < h; t += 2)
        l = {},
        n = g.indexOf(e[t]),
        (a = g.indexOf(e[t + 1])) > 63 && (l.promotion = b[Math.floor((a - 64) / 3)],
        a = n + (n < 16 ? -8 : 8) + (a - 1) % 3 - 1),
        n > 75 ? l.drop = b[n - 79] : l.from = g[n % 8] + (Math.floor(n / 8) + 1),
        l.to = g[a % 8] + (Math.floor(a / 8) + 1),
        p.push(l);
    return p
}

var server = new WebSocketServer({port:12343})
server.on('connection', function connection(ws) {
    Stockfish().then((sf) => {  
        rl.on('line', (input) => {
          sf.postMessage(input)
        });
        sf.addMessageListener((line) => {
          //console.log(line)
          if(line.startsWith("info")){
            var sp = line.split(" ")
            var cp;
            var mt;
            var dp;
            for(var i = 0; i<sp.length; i++){
              if(sp[i] == "pv"){
                if(i<sp.length-2){
                  if(dp>20){
                    sf.postMessage("stop")
                  }
                  console.log("    "+sp[i+1]+" "+sp[i+2]+": "+dp+" - "+cp+" ("+mt+")")
                  ws.send(JSON.stringify({cur:sp[i+1], nxt:sp[i+2], dp:dp, cp:cp, mt:mt}))
                  break;
                }
              }
              if(sp[i] == "depth"){
                dp = parseInt(sp[i+1])
              }
              if(sp[i] == "cp"){
                cp = parseInt(sp[i+1])
              }
              if(sp[i] == "mate"){
                mt = parseInt(sp[i+1])
              }
            }
          }
        });
        var fen;
        ws.on('message', function message(dt) {
          let data = JSON.parse(dt)
          switch(data.tid){
            case "FullGame":
                sf.postMessage("ucinewgame")
                if(data.game.gametype == "chess960"){
                  sf.postMessage("setoption name UCI_Chess960 value true")
                }
                if(data.game.initpos === undefined){
                  fen = "startpos"
                }else{
                  fen = data.game.initpos
                }
                break;
            case "GameState":
                var mv = "";
                for(var m of decodeTCN(data.game.moves)){
                  mv+=m.from+m.to+" ";
                }
                console.log("position "+fen+" moves "+mv)
                sf.postMessage("position "+fen+" moves "+mv)
                sf.postMessage("stop")
                sf.postMessage("go")
                break;
          }
        });
        ws.on('close', function(e){
          console.log("stopped")
          sf.postMessage("stop")
        })
        sf.postMessage("uci");
    })
});
