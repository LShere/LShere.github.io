// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var cw = canvas.width = window.innerWidth,
//   cx = cw / 2;
// var ch = canvas.height = window.innerHeight,
//   cy = ch / 2;

// ctx.fillStyle = "#000";
// var linesNum = 16;
// var linesRy = [];
// var requestId = null;

// function Line(flag) {
//   this.flag = flag;
//   this.a = {};
//   this.b = {};
//   if (flag == "v") {
//     this.a.y = 0;
//     this.b.y = ch;
//     this.a.x = randomIntFromInterval(0, ch);
//     this.b.x = randomIntFromInterval(0, ch);
//   } else if (flag == "h") {
//     this.a.x = 0;
//     this.b.x = cw;
//     this.a.y = randomIntFromInterval(0, cw);
//     this.b.y = randomIntFromInterval(0, cw);
//   }
//   this.va = randomIntFromInterval(25, 100) / 100;
//   this.vb = randomIntFromInterval(25, 100) / 100;

//   this.draw = function() {
//     ctx.strokeStyle = "#ccc";
//     ctx.beginPath();
//     ctx.moveTo(this.a.x, this.a.y);
//     ctx.lineTo(this.b.x, this.b.y);
//     ctx.stroke();
//   }

//   this.update = function() {
//     if (this.flag == "v") {
//       this.a.x += this.va;
//       this.b.x += this.vb;
//     } else if (flag == "h") {
//       this.a.y += this.va;
//       this.b.y += this.vb;
//     }

//     this.edges();
//   }

//   this.edges = function() {
//     if (this.flag == "v") {
//       if (this.a.x < 0 || this.a.x > cw) {
//         this.va *= -1;
//       }
//       if (this.b.x < 0 || this.b.x > cw) {
//         this.vb *= -1;
//       }
//     } else if (flag == "h") {
//       if (this.a.y < 0 || this.a.y > ch) {
//         this.va *= -1;
//       }
//       if (this.b.y < 0 || this.b.y > ch) {
//         this.vb *= -1;
//       }
//     }
//   }

// }

// for (var i = 0; i < linesNum; i++) {
//   var flag = i % 2 == 0 ? "h" : "v";
//   var l = new Line(flag);
//   linesRy.push(l);
// }

// function Draw() {
//   requestId = window.requestAnimationFrame(Draw);
//   ctx.clearRect(0, 0, cw, ch);

//   for (var i = 0; i < linesRy.length; i++) {
//     var l = linesRy[i];
//     l.draw();
//     l.update();
//   }
//   for (var i = 0; i < linesRy.length; i++) {
//     var l = linesRy[i];
//     for (var j = i + 1; j < linesRy.length; j++) {
//       var l1 = linesRy[j]
//       Intersect2lines(l, l1);
//     }
//   }
// }

// function Init() {
//   linesRy.length = 0;
//   for (var i = 0; i < linesNum; i++) {
//     var flag = i % 2 == 0 ? "h" : "v";
//     var l = new Line(flag);
//     linesRy.push(l);
//   }

//   if (requestId) {
//     window.cancelAnimationFrame(requestId);
//     requestId = null;
//   }

//   cw = canvas.width = window.innerWidth,
//     cx = cw / 2;
//   ch = canvas.height = window.innerHeight,
//     cy = ch / 2;

//   Draw();
// };

// setTimeout(function() {
//   Init();

//   addEventListener('resize', Init, false);
// }, 15);

// function Intersect2lines(l1, l2) {
//   var p1 = l1.a,
//     p2 = l1.b,
//     p3 = l2.a,
//     p4 = l2.b;
//   var denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
//   var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
//   var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;
//   var x = p1.x + ua * (p2.x - p1.x);
//   var y = p1.y + ua * (p2.y - p1.y);
//   if (ua > 0 && ub > 0) {
//     markPoint({
//       x: x,
//       y: y
//     })
//   }
// }

// function markPoint(p) {
//   ctx.beginPath();
//   ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
//   ctx.fill();
// }

// function randomIntFromInterval(mn, mx) {
//   return ~~(Math.random() * (mx - mn + 1) + mn);
// }
/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v1.0.1
 * GitHub: https://github.com/hustcc/canvas-nest.js
**/
!
function() {
    function n(n, e, t) {
        return n.getAttribute(e) || t
    }
    function e(n) {
        return document.getElementsByTagName(n)
    }
    function t() {
        var t = e("script"),
        o = t.length,
        i = t[o - 1];
        return {
            l: o,
            z: n(i, "zIndex", -1),
            o: n(i, "opacity", .5),
            c: n(i, "color", "0,0,0"),
            n: n(i, "count", 99)
        }
    }
    function o() {
        a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    function i() {
        r.clearRect(0, 0, a, c);
        var n, e, t, o, m, l;
        s.forEach(function(i, x) {
            for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e],
            null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
        }),
        x(i)
    }
    var a, c, u, m = document.createElement("canvas"),
    d = t(),
    l = "c_n" + d.l,
    r = m.getContext("2d"),
    x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(n) {
        window.setTimeout(n, 1e3 / 45)
    },
    w = Math.random,
    y = {
        x: null,
        y: null,
        max: 2e4
    };
    m.id = l,
    m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o,
    e("body")[0].appendChild(m),
    o(),
    window.onresize = o,
    window.onmousemove = function(n) {
        n = n || window.event,
        y.x = n.clientX,
        y.y = n.clientY
    },
    window.onmouseout = function() {
        y.x = null,
        y.y = null
    };
    for (var s = [], f = 0; d.n > f; f++) {
        var h = w() * a,
        g = w() * c,
        v = 2 * w() - 1,
        p = 2 * w() - 1;
        s.push({
            x: h,
            y: g,
            xa: v,
            ya: p,
            max: 6e3
        })
    }
    u = s.concat([y]),
    setTimeout(function() {
        i()
    },
    100)
} ();
