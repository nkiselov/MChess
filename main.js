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
const Stockfish = require("stockfish.wasm");
Stockfish().then((sf) => {
    sf.addMessageListener((line) => {
      console.log(line);
    });

    sf.postMessage("uci");
  });