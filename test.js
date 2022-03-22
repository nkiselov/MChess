const { Chess } = require("chess.js");

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

let initfen;
let moves = "mC0Kgv5QfHWOHQZQeg9RlBKBdB=KvK1T=1891}?!=070=1RK-U3U-391BA6SAm!?nD0IcuIRDKRKbs?3uDKBmnBnfn46CK+IKTIngn2TDl"
let chess = new Chess(initfen);
console.log(decodeTCN(moves))
let decoded = decodeTCN(moves)
var i = 0;
for(var m of decoded){
    if(i==14){
        let k = 0;
    }
    if(m.from === undefined){
    chess.put({type: m.drop, color: chess.turn()}, m.to)
    chess.swap_color()
    }else{
    chess.move(m)
    }
    console.log(((i)/2+1))
    console.log(chess.ascii())
    i++;
}