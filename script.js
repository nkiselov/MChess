function calculateArrowLength({from: e, to: t}) {
  return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2)
}
function calculateArrowSlope({from: e, to: t}) {
  const n = (e.y - t.y) / (e.x - t.x);
  return Number(n.toFixed(1))
}
const Ji = {
  a1: {
      x: 6.25,
      y: 93.75
  },
  a2: {
      x: 6.25,
      y: 81.25
  },
  a3: {
      x: 6.25,
      y: 68.75
  },
  a4: {
      x: 6.25,
      y: 56.25
  },
  a5: {
      x: 6.25,
      y: 43.75
  },
  a6: {
      x: 6.25,
      y: 31.25
  },
  a7: {
      x: 6.25,
      y: 18.75
  },
  a8: {
      x: 6.25,
      y: 6.25
  },
  b1: {
      x: 18.75,
      y: 93.75
  },
  b2: {
      x: 18.75,
      y: 81.25
  },
  b3: {
      x: 18.75,
      y: 68.75
  },
  b4: {
      x: 18.75,
      y: 56.25
  },
  b5: {
      x: 18.75,
      y: 43.75
  },
  b6: {
      x: 18.75,
      y: 31.25
  },
  b7: {
      x: 18.75,
      y: 18.75
  },
  b8: {
      x: 18.75,
      y: 6.25
  },
  c1: {
      x: 31.25,
      y: 93.75
  },
  c2: {
      x: 31.25,
      y: 81.25
  },
  c3: {
      x: 31.25,
      y: 68.75
  },
  c4: {
      x: 31.25,
      y: 56.25
  },
  c5: {
      x: 31.25,
      y: 43.75
  },
  c6: {
      x: 31.25,
      y: 31.25
  },
  c7: {
      x: 31.25,
      y: 18.75
  },
  c8: {
      x: 31.25,
      y: 6.25
  },
  d1: {
      x: 43.75,
      y: 93.75
  },
  d2: {
      x: 43.75,
      y: 81.25
  },
  d3: {
      x: 43.75,
      y: 68.75
  },
  d4: {
      x: 43.75,
      y: 56.25
  },
  d5: {
      x: 43.75,
      y: 43.75
  },
  d6: {
      x: 43.75,
      y: 31.25
  },
  d7: {
      x: 43.75,
      y: 18.75
  },
  d8: {
      x: 43.75,
      y: 6.25
  },
  e1: {
      x: 56.25,
      y: 93.75
  },
  e2: {
      x: 56.25,
      y: 81.25
  },
  e3: {
      x: 56.25,
      y: 68.75
  },
  e4: {
      x: 56.25,
      y: 56.25
  },
  e5: {
      x: 56.25,
      y: 43.75
  },
  e6: {
      x: 56.25,
      y: 31.25
  },
  e7: {
      x: 56.25,
      y: 18.75
  },
  e8: {
      x: 56.25,
      y: 6.25
  },
  f1: {
      x: 68.75,
      y: 93.75
  },
  f2: {
      x: 68.75,
      y: 81.25
  },
  f3: {
      x: 68.75,
      y: 68.75
  },
  f4: {
      x: 68.75,
      y: 56.25
  },
  f5: {
      x: 68.75,
      y: 43.75
  },
  f6: {
      x: 68.75,
      y: 31.25
  },
  f7: {
      x: 68.75,
      y: 18.75
  },
  f8: {
      x: 68.75,
      y: 6.25
  },
  g1: {
      x: 81.25,
      y: 93.75
  },
  g2: {
      x: 81.25,
      y: 81.25
  },
  g3: {
      x: 81.25,
      y: 68.75
  },
  g4: {
      x: 81.25,
      y: 56.25
  },
  g5: {
      x: 81.25,
      y: 43.75
  },
  g6: {
      x: 81.25,
      y: 31.25
  },
  g7: {
      x: 81.25,
      y: 18.75
  },
  g8: {
      x: 81.25,
      y: 6.25
  },
  h1: {
      x: 93.75,
      y: 93.75
  },
  h2: {
      x: 93.75,
      y: 81.25
  },
  h3: {
      x: 93.75,
      y: 68.75
  },
  h4: {
      x: 93.75,
      y: 56.25
  },
  h5: {
      x: 93.75,
      y: 43.75
  },
  h6: {
      x: 93.75,
      y: 31.25
  },
  h7: {
      x: 93.75,
      y: 18.75
  },
  h8: {
      x: 93.75,
      y: 6.25
  }
}
, eo = 4.5
, to = 6.5
, ro = 4.5
, io = 2.75
, oo = [.5, -2]
, ao = [2, .5, -.5, -2];
function calculateArrowRotation({from: e, to: t}) {
  const n = calculateArrowLength({
      from: e,
      to: t
  })
    , a = e.x
    , l = e.y + n
    , h = e.x - a
    , p = e.y - l
    , f = e.x - t.x
    , m = e.y - t.y
    , g = Math.acos((h * f + p * m) / n ** 2)
    , y = Math.floor(g * (180 / Math.PI) * 100) / 100;
  return e.x < t.x ? 360 - y : y
}
const so = io / 2
, co = eo
, lo = ro
, uo = to / 2;
function createStraightArrow({from: e, polygon: t, to: n}) {
  const a = calculateArrowRotation({
      from: e,
      to: n
  });
  return t.setAttribute("transform", `rotate(${a} ${e.x} ${e.y})`),
  t.setAttribute("points", function getStraightArrowPoints({from: e, to: t}) {
      const n = calculateArrowLength({
          from: e,
          to: t
      });
      return `\n    ${e.x - so} ${e.y + lo},\n    ${e.x - so} ${e.y + n - co},\n    ${e.x - uo} ${e.y + n - co},\n    ${e.x} ${e.y + n},\n    ${e.x + uo} ${e.y + n - co},\n    ${e.x + so} ${e.y + n - co},\n    ${e.x + so} ${e.y + lo}\n  `.trim()
  }({
      from: e,
      to: n
  })),
  t
}
const ho = io / 2
, po = eo
, fo = ro
, mo = to / 2;
function getKnightArrowRotation({from: e, slope: t, to: n}) {
  switch (t) {
  case 2:
      return e.x > n.x ? 180 : 0;
  case -2:
      return e.x > n.x ? 0 : 180;
  case .5:
  case -.5:
      return e.x > n.x ? 90 : 270;
  default:
      return 0
  }
}
function createKnightArrow({from: e, polygon: t, slope: n, to: a}) {
  let l = `rotate(${getKnightArrowRotation({
      from: e,
      slope: n,
      to: a
  })} ${e.x} ${e.y})`;
  return oo.includes(n) && (l += ` scale(-1, 1) translate(-${2 * e.x}, 0)`),
  t.setAttribute("transform", l),
  t.setAttribute("points", function getKnightArrowPoints({from: e}) {
      return `\n    ${e.x - ho} ${e.y + fo},\n    ${e.x - ho} ${e.y + 25 + ho},\n    ${e.x + 12.5 - po} ${e.y + 25 + ho},\n    ${e.x + 12.5 - po} ${e.y + 25 + mo},\n    ${e.x + 12.5} ${e.y + 25},\n    ${e.x + 12.5 - po} ${e.y + 25 - mo},\n    ${e.x + 12.5 - po} ${e.y + 25 - ho},\n    ${e.x + ho} ${e.y + 25 - ho},\n    ${e.x + ho} ${e.y + fo}\n  `.trim()
  }({
      from: e
  })),
  t
}
function getArrowColor(e, t) {
  var n, a;
  return null != (a = null != (n = e && t[P.Node.Marking.JCEColorsMap[e]]) ? n : e) ? a : t.default
}
  const n = new Map;
 function addArrows2(e, a) {
          e.forEach((e=>{
              const l = function createArrow(e, t) {
                  if (!e.key)
                      return;
                  const {color: n, from: a, opacity: l, to: h} = e.data
                    , p = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                  p.setAttribute("id", `arrow-${a}${h}`),
                  p.setAttribute("data-arrow", `${a}${h}`),
                  p.setAttribute("class", "arrow");
                  p.style.fill = n,
                  l && (p.style.opacity = String(l));
                  const m = Ji[a]
                    , g = Ji[h];
                  if (!m || !g)
                      return;
                  const y = calculateArrowLength({
                      from: m,
                      to: g
                  })
                    , b = calculateArrowSlope({
                      from: m,
                      to: g
                  });
                  return ao.includes(b) && 27.95084971874737 === y ? createKnightArrow({
                      from: m,
                      polygon: p,
                      slope: b,
                      to: g
                  }) : createStraightArrow({
                      from: m,
                      polygon: p,
                      to: g
                  })
              }(e, a);
              l && (a.appendChild(l),
              n.set(e.key, l))
          }
          ))
      }
  function removeArrows2(e,t) {
          e.forEach((e=>{
              const {key: a} = e
                , l = n.get(a);
                l && (l.remove(),
              //l && (t.removeChild(l),
              n.delete(a))
          }
          ))
      }

var soc = new WebSocket("ws://localhost:12343")
soc.onmessage = function(evt){
  let dt = JSON.parse(evt.safedata)
  console.log(dt)
  if(dt.dp == 1){
    removeArrows2([{key: "3-cur"},{key: "3-nxt"},{key: "cur"},{key: "nxt"}],arr)
  }
  if(dt.dp == 2){
    drawArrow("3-cur",dt.cur.substr(0,2),dt.cur.substr(2,2),"rgba(139, 152, 252, 0.8)",0.8)
    drawArrow("3-nxt",dt.nxt.substr(0,2),dt.nxt.substr(2,2),"rgba(139, 152, 252, 0.4)",0.8)
  }
  drawArrow("cur",dt.cur.substr(0,2),dt.cur.substr(2,2),"rgba(255, 170, 0, 0.8)",0.8)
  drawArrow("nxt",dt.nxt.substr(0,2),dt.nxt.substr(2,2),"rgba(255, 170, 0, 0.4)",0.8)
}

function drawArrow(key,from,to,color,opacity){
  let arr = document.getElementsByTagName("chess-board")[0].getElementsByTagName("svg")[1]
  removeArrows2([{key}],arr)
  addArrows2([{key:key,data:{opacity:opacity,from:from,to:to,color:color}}],arr)
}
function listen(fn){
    fn=fn||console.log
    let property=Object.getOwnPropertyDescriptor
    (MessageEvent.prototype,"data")
    const data=property.get
    function lookAtMessage(){ //to replace get function
      let socket=this.currentTarget instanceof WebSocket
      if(!socket){return data.call(this)}
      let msg=data.call(this)
      Object.defineProperty(this,"data",{value:msg}) //anti-loop
      fn({data:msg,socket:this.currentTarget,event:this})
      return msg
    }
    Object.defineProperty
    (MessageEvent.prototype,"safedata",{
      get:function(){return data.call(this)}
    })
    property.get=lookAtMessage
    Object.defineProperty
    (MessageEvent.prototype,"data",property)
  }
  listen( ({data})=>
  {
    let dat = JSON.parse(data)
      if(dat[0].channel.startsWith("/game")){
        let gd = dat[0].data
        console.log(gd)
        soc.send(JSON.stringify(gd))
      } 
  })
