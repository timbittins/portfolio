/*!
 * slidr v0.5.0 - A Javascript library for adding slide effects.
 * bchanx.com/slidr
 * MIT licensed
 *
 * Copyright (c) 2014 Brian Chan (bchanx.com)
 */
console.log("test slidr");
function E() {
  function H() {}
  function K(a, b, c) {
    var d = {
      id: a,
      a: b,
      h: null,
      controls: null,
      d: c,
      u: !1,
      v: !1,
      start: null,
      c: null,
      j: { id: null, ga: 5e3, direction: "right" },
      W: {},
      K: {},
      D: {},
      i: { up: null, down: null, left: null, right: null },
    };
    return {
      start: function (a) {
        q.start(d, a);
        return this;
      },
      canSlide: function (a) {
        return q.N(d, a);
      },
      slide: function (a) {
        q.s(d, a);
        return this;
      },
      add: function (a, b, c, e) {
        q.add(d, a, b, c, e);
        return this;
      },
      auto: function (a, b, c) {
        q.start(d, c);
        q.j(d, a || d.j.ga, b || d.j.direction);
        return this;
      },
      stop: function () {
        q.stop(d);
        return this;
      },
      timing: function (a, b) {
        a && a.constructor === Object
          ? (d.d.timing = A(d.d.timing, a))
          : "string" === typeof a &&
            "string" === typeof b &&
            (d.d.timing[a] = b);
        return this;
      },
      breadcrumbs: function () {
        q.h(d);
        return this;
      },
      controls: function (a) {
        q.controls(d, a);
        return this;
      },
    };
  }
  function G(a, b) {
    var c = a,
      d;
    for (d in b) {
      if (!c || !c.hasOwnProperty(b[d])) return null;
      c = c[b[d]];
    }
    return c === a ? null : c;
  }
  function A() {
    for (var a = {}, b = 0, c; (c = arguments[b]); b++)
      for (var d in c) a[d] = c[d];
    return a;
  }
  function I(a, b) {
    return a.contains
      ? a.contains(b)
      : a.compareDocumentPosition
      ? a.compareDocumentPosition(b) & 16
      : 0;
  }
  function x(a, b) {
    if (Array.prototype.indexOf) return a.indexOf(b);
    for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
    return -1;
  }
  function J(a) {
    return "".trim ? a.trim() : a.replace(/^\s+|\s+$/g, "");
  }
  function y(a, b) {
    var c = document.createElement(a),
      d;
    for (d in b) c[d] = b[d];
    return c;
  }
  function v(a, b) {
    for (
      var c = J(a.className), c = c ? c.split(/\s+/) : [], d = 2, g, f;
      (g = arguments[d]);
      d++
    )
      (f = x(c, g)),
        "add" === b && 0 > f && c.push(g),
        "rm" === b && 0 <= f && c.splice(f, 1);
    a.className = c.join(" ");
    return a;
  }
  function C(a) {
    return a
      .replace(/[\s'"]/gi, "")
      .split("")
      .sort()
      .join("");
  }
  function D(a, b) {
    return a && a.getAttribute ? a.getAttribute(b) : null;
  }
  function h(a, b) {
    if ("string" === typeof b) {
      var c = document.defaultView
          ? document.defaultView.getComputedStyle(a)
          : a.currentStyle,
        d = c[e.q(b)];
      d ||
        "opacity" !== b ||
        (d = c.filter ? c.filter.split("=")[1].replace(")", "") : "1");
      return d
        ? ((c = d.slice(0, -2)),
          "px" === d.slice(-2) && !isNaN(parseInt(c)) && 0 >= c.search("px")
            ? parseInt(c)
            : d)
        : "none";
    }
    for (d in b) e.q(d) && (a.style[e.q(d)] = b[d]);
    return a;
  }
  function w(a, b, c, d) {
    "string" === typeof b && (b = [b]);
    for (var g = 0, f, F; (f = b[g]); g++)
      (F = 0 < x(e.M, f)),
        (f =
          "click" === f && "ontouchstart" in window
            ? "touchend"
            : a.attachEvent && !F
            ? "on" + f
            : f),
        a.attachEvent && !F
          ? d
            ? a.detachEvent(f, c)
            : a.attachEvent(f, c)
          : d
          ? a.removeEventListener(f, c)
          : a.addEventListener(f, c);
  }
  function z(a) {
    return "border-box" === h(a, "box-sizing");
  }
  var e = {
      J: ["webkit", "Moz", "ms", "O"],
      e: {},
      T: {},
      k: function () {
        e.supports("filter") && !e.supports("opacity")
          ? (e.k = function () {
              return !0;
            })
          : (e.k = function () {
              return !1;
            });
        return e.k();
      },
      ja: document.getElementsByTagName("html")[0].style,
      styleSheet: (function () {
        var a = y("style", { type: "text/css" });
        document.getElementsByTagName("head")[0].appendChild(a);
        return a.sheet || a.styleSheet;
      })(),
      cssRules: function () {
        e.cssRules = function () {
          return e.styleSheet.cssRules || e.styleSheet.rules;
        };
        return e.cssRules();
      },
      insertRule: function (a) {
        e.insertRule = e.styleSheet.insertRule
          ? function (a) {
              e.styleSheet.insertRule(a, e.cssRules().length);
            }
          : function (a) {
              var c = a.split(" {");
              2 === c.length &&
                ((a = c[0]),
                (c = J(c[1].replace(/;?\s?}$/g, ""))),
                a && c && e.styleSheet.addRule(a, c));
            };
        e.insertRule(a);
      },
      Y: function (a, b, c) {
        a = C(a);
        for (var d = 0, g, f; (g = e.cssRules()[d]); d++)
          if (
            ((f = C(
              g.name || g.selectorText || g.cssText.split(" {")[0] || ""
            )),
            f === a)
          ) {
            if (c || C(g.cssText) === C(b)) return;
            e.styleSheet.deleteRule(d);
            break;
          }
        e.insertRule(b);
      },
      aa: function (a, b) {
        var c = [a, "{"],
          d;
        for (d in b) e.q(d, !0) && c.push(e.q(d, !0) + ":" + b[d] + ";");
        c.push("}");
        return c.join(" ");
      },
      f: function (a, b, c) {
        e.Y(a, e.aa(a, b), c);
      },
      prefix: function (a) {
        return 3 === a.split("-").length ? "-" + a.split("-")[1] + "-" : "";
      },
      O: function (a, b) {
        var c = e.q("animation", !0);
        if (c && !e.T[a]) {
          var c = ["@" + e.prefix(c) + "keyframes " + a + " {"],
            d;
          for (d in b) c.push(e.aa(d + "%", b[d]));
          c.push("}");
          e.Y(a, c.join(" "));
          e.T[a] = !0;
        }
      },
      q: function (a, b) {
        if (!(a in e.e)) {
          for (var c = a.split("-"), d = 0, g; (g = c[d]); d++)
            c[d] = g[0].toUpperCase() + g.toLowerCase().slice(1);
          g = c.join("");
          g = g[0].toLowerCase() + g.slice(1);
          if (void 0 !== e.ja[g]) e.e[a] = { t: a, ca: g };
          else
            for (g = c.join(""), d = 0; d < e.J.length; d++)
              void 0 !== e.ja[e.J[d] + g] &&
                (e.e[a] = {
                  t: "-" + e.J[d].toLowerCase() + "-" + a,
                  ca: e.J[d] + g,
                });
          e.e[a] || (e.e[a] = null);
        }
        return null !== e.e[a] ? (b ? e.e[a].t : e.e[a].ca) : null;
      },
      supports: function () {
        for (var a = 0, b; (b = arguments[a]); a++) if (!e.q(b)) return !1;
        return !0;
      },
      add: {
        fade: function (a, b, c) {
          e.O(a, {
            0: { opacity: b, visibility: "visible" },
            100: { opacity: c, visibility: "hidden" },
          });
        },
        linear: function (a, b, c, d, g, f) {
          e.O(a, {
            0: {
              transform: "translate" + c[0] + "(0%)",
              opacity: "in" === b ? "0" : g,
              visibility: "visible",
            },
            1: { transform: "translate" + c + "px)", opacity: g },
            99: { transform: "translate" + d + "px)", opacity: f },
            100: {
              transform: "translate" + d[0] + "(0%)",
              opacity: "out" === b ? "0" : f,
              visibility: "hidden",
            },
          });
        },
        cube: function (a, b, c, d, g, f) {
          e.O(a, {
            0: {
              transform: "rotate" + b + "0deg) translateZ(" + d + "px)",
              opacity: g,
              visibility: "visible",
            },
            100: {
              transform: "rotate" + c + "0deg) translateZ(" + d + "px)",
              opacity: f,
              visibility: "hidden",
            },
          });
        },
      },
      $: function (a) {
        return {
          Ba: a,
          r: 'aside[id*="-' + a + '"]',
          i: "slidr-" + a,
          w: 'aside[id*="-' + a + '"] .slidr-' + a,
          data: "data-slider-" + a,
          id: function (b, c) {
            return c ? 'aside[id="' + b.id + "-" + a + '"]' : b.id + "-" + a;
          },
        };
      },
      o: function (a) {
        a = a || window.event;
        a.target || (a.target = a.srcElement);
        a.currentTarget || (a.currentTarget = a.srcElement);
        !a.which && a.keyCode && (a.which = a.keyCode);
        return a;
      },
      stop: function (a) {
        a = a || window.event;
        a.cancelBubble = !0;
        a.returnValue = !1;
        a.stopPropagation && a.stopPropagation();
        a.preventDefault && a.preventDefault();
        return !1;
      },
      M: [
        "animationend",
        "webkitAnimationEnd",
        "oanimationend",
        "MSAnimationEnd",
      ],
    },
    t = {
      Z: ["cube", "fade", "linear", "none"],
      L: function (a, b) {
        b = b || a.d.transition;
        return 0 > x(t.Z, b) || !u.ka[b] ? "none" : b;
      },
      get: function (a, b, c, d) {
        return G(a.K, [b, "in" === c ? l.I(d) : d]);
      },
      set: function (a, b, c, d) {
        d = t.L(a, d);
        a.K[b] || (a.K[b] = {});
        return (a.K[b][c] = d);
      },
      apply: function (a, b, c, d, g) {
        p.update(a, b, c);
        u.B(a, b, g, c, d);
      },
    },
    r = {
      e: {},
      hash: function (a) {
        return [
          a.id,
          a["in"].slidr,
          a["in"].trans,
          a["in"].dir,
          a.out.slidr,
          a.out.trans,
          a.out.dir,
        ].join("-");
      },
      ua: function (a, b, c, d, g, f, e) {
        return {
          id: a.id,
          in: { el: l.get(a, c).m, slidr: c, trans: e, dir: g },
          out: { el: l.get(a, b).m, slidr: b, trans: f, dir: l.I(d) },
        };
      },
      C: function (a, b) {
        var c = r.hash(b);
        r.e[c] || (r.e[c] = {});
        r.e[c].C ||
          ((r.e[c].C = !0), (c = a.d.before), "function" === typeof c && c(b));
      },
      A: function (a, b) {
        var c = r.hash(b);
        r.e[c].A ||
          ((r.e[c].A = !0),
          (c = a.d.after),
          "function" === typeof c && r.na(c, b));
      },
      na: function (a, b) {
        if (e.supports("animation") && "none" !== b["in"].trans) {
          var c = function (d) {
            e.T[d.animationName] &&
              (a(b), w(b["in"].el, e.M, c, !0), r.reset(b));
          };
          w(b["in"].el, e.M, c);
        } else a(b), r.reset(b);
      },
      reset: function (a) {
        a = r.hash(a);
        r.e[a].C = !1;
        r.e[a].A = !1;
      },
    },
    l = {
      F: "left up top right down bottom".split(" "),
      H: function (a) {
        return 0 <= x(l.F, a);
      },
      I: function (a) {
        var b = l.F.length;
        return l.H(a) ? l.F[(x(l.F, a) + b / 2) % b] : null;
      },
      get: function (a) {
        for (var b = [], c = 1, d; void 0 !== (d = arguments[c++]); b.push(d));
        return G(a.W, b);
      },
      display: function (a) {
        !a.v &&
          l.get(a, a.start) &&
          ((a.c = a.start),
          p.create(a),
          m.create(a),
          u.G(a, a.c, "fade"),
          u.B(a, a.c, "fade", "in"),
          (a.v = !0),
          q.controls(a, a.d.controls),
          a.d.breadcrumbs && q.h(a));
      },
      s: function (a, b) {
        return l.H(b) ? l.go(a, l.get(a, a.c, b), b, b) : l.ta(a, b);
      },
      ta: function (a, b) {
        if (b && b !== a.c && l.get(a, b)) {
          var c = a.D[a.c],
            d = a.D[b],
            g = c.x < d.x ? "right" : c.x > d.x ? "left" : null,
            d = c.y < d.y ? "up" : c.y > d.y ? "down" : null,
            c = t.get(a, a.c, "out", g)
              ? g
              : t.get(a, a.c, "out", d)
              ? d
              : null,
            g = t.get(a, b, "in", g) ? g : t.get(a, b, "in", d) ? d : null;
          l.go(a, b, c, g, c ? null : "fade", g ? null : "fade");
        }
      },
      go: function (a, b, c, d, g, f) {
        if (a.c && b) {
          f = f || t.get(a, b, "in", d);
          g = g || t.get(a, a.c, "out", c);
          var e = r.ua(a, a.c, b, c, d, g, f);
          r.C(a, e);
          t.apply(a, b, "in", d, f);
          t.apply(a, a.c, "out", c, g);
          r.A(a, e);
          a.c = b;
          m.update(a);
          return !0;
        }
        return !1;
      },
      find: function (a, b) {
        for (var c = b ? [] : {}, d = 0, g, f; (g = a.a.childNodes[d]); d++)
          (f = D(g, "data-slider")) &&
            (b && 0 > x(c, f) ? c.push(f) : f in c || (c[f] = g));
        return c;
      },
      L: function (a, b, c, d, g, f) {
        if (!b || b.constructor !== Array) return !1;
        for (var e = 0, n, h, k, m, p, q, r, s; (n = b[e]); e++)
          if (
            !(n in d) ||
            (l.get(a, n) &&
              ((h = b[e - 1] || null),
              (k = b[e + 1] || null),
              (m = l.get(a, n, g)),
              (p = l.get(a, n, f)),
              (q = l.get(a, k, g)),
              (r = t.get(a, n, "out", g)),
              (s = t.get(a, n, "out", f)),
              (p && k && p != k) ||
                (m && h && m != h) ||
                (q && q != n) ||
                (h && r && r != c) ||
                (k && s && s != c)))
          )
            return !1;
        return !0;
      },
      add: function (a, b, c, d, g, e) {
        for (var h = 0, n; (n = b[h]); h++) {
          a.W[n] = a.W[n] || {};
          var k = l.get(a, n);
          k.m = d[n];
          b[h - 1] && ((k[g] = b[h - 1]), t.set(a, n, g, c));
          b[h + 1] && ((k[e] = b[h + 1]), t.set(a, n, e, c));
          u.G(a, n, c);
          a.start = a.start ? a.start : n;
        }
        a.u && (a.v ? p.create(a) : l.display(a));
        return !0;
      },
    },
    m = {
      b: e.$("control"),
      types: ["border", "corner", "none"],
      valid: function (a) {
        return 0 <= x(m.types, a);
      },
      create: function (a) {
        if (a.a && !a.controls) {
          a.controls = h(v(y("aside", { id: m.b.id(a) }), "add", "disabled"), {
            opacity: "0",
            filter: "alpha(opacity=0)",
            "z-index": "0",
            visibility: "hidden",
            "pointer-events": "none",
          });
          for (var b in a.i) {
            var c = a.i,
              d = b,
              g = v(y("div"), "add", m.b.i, b);
            g && g.setAttribute && g.setAttribute(m.b.data, b);
            c[d] = g;
            a.controls.appendChild(a.i[b]);
          }
          m.t(a);
          a.a.appendChild(a.controls);
          w(a.controls, "click", m.onclick(a));
        }
      },
      t: function (a) {
        e.f(
          m.b.r,
          {
            position: "absolute",
            bottom: h(a.a, "padding-bottom") + "px",
            right: h(a.a, "padding-right") + "px",
            padding: "10px",
            "box-sizing": "border-box",
            width: "75px",
            height: "75px",
            transform: "translateZ(9998px)",
          },
          !0
        );
        e.f(
          m.b.r + ".disabled",
          { transform: "translateZ(0px) !important" },
          !0
        );
        e.f(
          m.b.r + ".breadcrumbs",
          { left: h(a.a, "padding-left") + "px", right: "auto" },
          !0
        );
        e.f(
          m.b.r + ".border",
          { bottom: "0", right: "0", left: "0", width: "100%", height: "100%" },
          !0
        );
        e.f(
          m.b.w,
          {
            position: "absolute",
            "pointer-events": "auto",
            cursor: "pointer",
            transition: "opacity 0.2s linear",
          },
          !0
        );
        var b = { opacity: "0.05", cursor: "auto" };
        e.k() && (b.display = "none");
        e.f(m.b.w + ".disabled", b, !0);
        var c, d, g, f;
        for (c in a.i)
          (d = "left" === c || "right" === c),
            (b = "up" === c ? "top" : "down" === c ? "bottom" : c),
            (g = d ? "top" : "left"),
            (f = {
              width: d ? "22px" : "16px",
              height: d ? "16px" : "22px",
              "tap-highlight-color": "rgba(0, 0, 0, 0)",
              "touch-callout": "none",
              "user-select": "none",
            }),
            (f[b] = "0"),
            (f[g] = "50%"),
            (f["margin-" + g] = "-8px"),
            e.f(m.b.w + "." + c, f, !0),
            (f = {
              width: "0",
              height: "0",
              content: '""',
              position: "absolute",
              border: "8px solid transparent",
            }),
            (f["border-" + l.I(b) + "-width"] = "12px"),
            (f["border-" + b + "-width"] = "10px"),
            (f["border-" + l.I(b) + "-color"] = a.d.theme),
            (f[b] = "0"),
            (f[g] = "50%"),
            (f["margin-" + g] = "-8px"),
            e.f(m.b.id(a, !0) + " ." + m.b.i + "." + c + ":after", f, !0),
            (f = {}),
            (f[d ? "height" : "width"] = "100%"),
            (f[g] = "0"),
            (f["margin-" + g] = "0"),
            e.f(m.b.r + ".border ." + m.b.i + "." + c, f, !0),
            (d = {}),
            (d[b] = h(a.a, "padding-" + b) + "px"),
            e.f(m.b.id(a, !0) + ".border ." + m.b.i + "." + c, d, !0);
      },
      onclick: function (a) {
        return function (b) {
          q.s(a, D(e.o(b).target, m.b.data));
        };
      },
      update: function (a) {
        for (var b in a.i) v(a.i[b], q.N(a, b) ? "rm" : "add", "disabled");
      },
    },
    p = {
      b: e.$("breadcrumbs"),
      G: function (a) {
        a.a &&
          !a.h &&
          ((a.h = h(v(y("aside", { id: p.b.id(a) }), "add", "disabled"), {
            opacity: "0",
            filter: "alpha(opacity=0)",
            "z-index": "0",
            "pointer-events": "none",
            visibility: "hidden",
          })),
          p.t(a),
          a.a.appendChild(a.h),
          w(a.h, "click", p.onclick(a)));
      },
      t: function (a) {
        e.f(
          p.b.r,
          {
            position: "absolute",
            bottom: h(a.a, "padding-bottom") + "px",
            right: h(a.a, "padding-right") + "px",
            padding: "10px",
            "box-sizing": "border-box",
            transform: "translateZ(9999px)",
          },
          !0
        );
        e.f(
          p.b.r + ".disabled",
          { transform: "translateZ(0px) !important" },
          !0
        );
        e.f(p.b.w, { padding: "0", "font-size": "0", "line-height": "0" }, !0);
        e.f(
          p.b.w + " li",
          {
            width: "10px",
            height: "10px",
            display: "inline-block",
            margin: "3px",
            "tap-highlight-color": "rgba(0, 0, 0, 0)",
            "touch-callout": "none",
            "user-select": "none",
          },
          !0
        );
        e.f(
          p.b.id(a, !0) + " ." + p.b.i + " li.normal",
          {
            "border-radius": "100%",
            border: "1px " + a.d.theme + " solid",
            cursor: "pointer",
            "pointer-events": "auto",
          },
          !0
        );
        e.f(
          p.b.id(a, !0) + " ." + p.b.i + " li.active",
          {
            width: "12px",
            height: "12px",
            margin: "2px",
            "background-color": a.d.theme,
          },
          !0
        );
      },
      onclick: function (a) {
        return function (b) {
          q.s(a, D(e.o(b).target, p.b.data));
        };
      },
      V: {
        right: { x: 1, y: 0 },
        up: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        down: { x: 0, y: -1 },
      },
      find: function (a, b, c, d, g, e) {
        if (d) {
          b[d] ||
            ((b[d] = { x: g, y: e }),
            g < c.x.min && (c.x.min = g),
            g > c.x.max && (c.x.max = g),
            e < c.y.min && (c.y.min = e),
            e > c.y.max && (c.y.max = e));
          d = l.get(a, d);
          for (var h in p.V)
            d[h] &&
              !b[d[h]] &&
              p.find(a, b, c, d[h], g + p.V[h].x, e + p.V[h].y);
        }
      },
      update: function (a, b, c) {
        v(a.D[b].m, "in" === c ? "add" : "rm", "active");
      },
      create: function (a) {
        p.G(a);
        if (a.h) {
          var b = {},
            c = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          p.find(a, b, c, a.start, 0, 0);
          c.x.U = 0 - c.x.min;
          c.y.U = 0 - c.y.min;
          var d = {},
            e;
          for (e in b)
            (b[e].x += c.x.U),
              (b[e].y += c.y.U),
              (d[b[e].x + "," + b[e].y] = e);
          for (
            var f = c.y.max - c.y.min + 1, c = c.x.max - c.x.min + 1;
            a.h.firstChild;

          )
            a.h.removeChild(a.h.firstChild);
          e = v(y("ul"), "add", p.b.i);
          for (var h = y("li"), f = f - 1, n; 0 <= f; f--) {
            n = e.cloneNode(!1);
            for (var k = 0, l, m; k < c; k++) {
              l = h.cloneNode(!1);
              if ((m = d[k + "," + f])) {
                v(l, "add", "normal", m === a.c ? "active" : null);
                var q = l;
                q && q.setAttribute && q.setAttribute(p.b.data, m);
                b[m].m = l;
              }
              n.appendChild(l);
            }
            a.h.appendChild(n);
          }
          a.D = b;
        }
      },
    },
    L = {
      none: !0,
      fade: e.supports("animation", "opacity"),
      linear: e.supports("animation", "opacity", "transform"),
      cube: e.supports(
        "animation",
        "backface-visibility",
        "opacity",
        "transform",
        "transform-style"
      ),
    };
  e.add.fade("slidr-fade-in", "0", "1");
  e.add.fade("slidr-fade-out", "1", "0");
  var u = {
      G: function (a, b) {
        var c = l.get(a, b);
        if (!c.sa) {
          var d = h(c.m, "display"),
            d = {
              display: "none" === d ? "block" : d,
              visibility: "hidden",
              position: "absolute",
              opacity: "0",
              filter: "alpha(opacity=0)",
              "z-index": "0",
              "pointer-events": "none",
              "backface-visibility": "hidden",
              "transform-style": "preserve-3d",
            };
          e.k() && (d = A(d, { display: "none", visibility: "visible" }));
          c.sa = !0;
          h(c.m, d);
        }
      },
      ka: L,
      la: {
        fade: void 0,
        linear: {
          in: {
            left: function (a, b, c) {
              e.add.linear(a, "in", "X(-" + b, "X(0", c, "1");
            },
            right: function (a, b, c) {
              e.add.linear(a, "in", "X(" + b, "X(0", c, "1");
            },
            up: function (a, b, c) {
              e.add.linear(a, "in", "Y(-" + b, "Y(0", c, "1");
            },
            down: function (a, b, c) {
              e.add.linear(a, "in", "Y(" + b, "Y(0", c, "1");
            },
          },
          out: {
            left: function (a, b, c) {
              e.add.linear(a, "out", "X(0", "X(" + b, "1", c);
            },
            right: function (a, b, c) {
              e.add.linear(a, "out", "X(0", "X(-" + b, "1", c);
            },
            up: function (a, b, c) {
              e.add.linear(a, "out", "Y(0", "Y(" + b, "1", c);
            },
            down: function (a, b, c) {
              e.add.linear(a, "out", "Y(0", "Y(-" + b, "1", c);
            },
          },
        },
        cube: {
          in: {
            left: function (a, b, c) {
              e.add.cube(a, "Y(-9", "Y(", b / 2, c, "1");
            },
            right: function (a, b, c) {
              e.add.cube(a, "Y(9", "Y(", b / 2, c, "1");
            },
            up: function (a, b, c) {
              e.add.cube(a, "X(9", "X(", b / 2, c, "1");
            },
            down: function (a, b, c) {
              e.add.cube(a, "X(-9", "X(", b / 2, c, "1");
            },
          },
          out: {
            left: function (a, b, c) {
              e.add.cube(a, "Y(", "Y(9", b / 2, "1", c);
            },
            right: function (a, b, c) {
              e.add.cube(a, "Y(", "Y(-9", b / 2, "1", c);
            },
            up: function (a, b, c) {
              e.add.cube(a, "X(", "X(-9", b / 2, "1", c);
            },
            down: function (a, b, c) {
              e.add.cube(a, "X(", "X(9", b / 2, "1", c);
            },
          },
        },
      },
      name: function (a, b, c, d, e) {
        var f = ["slidr", c, d];
        if (("linear" === c || "cube" === c) && e) {
          f.push(e);
          a = a.d.fade ? "0" : "1";
          "0" === a && f.push("fade");
          var h = "up" === e || "down" === e ? "h" : "w";
          b = "h" === h ? k.ea(b) : k.fa(b);
          f.push(h, b);
          (c = G(u.la, [c, d, e])) && c(f.join("-"), b, a);
        }
        return f.join("-");
      },
      B: function (a, b, c, d, g, f, k, n) {
        k = {
          opacity: "in" === d ? "1" : "0",
          filter: "alpha(opacity=" + ("in" === d ? "100" : "0") + ")",
          "z-index": k || ("in" === d ? "1" : "0"),
          visibility: "in" === d ? "visible" : "hidden",
          "pointer-events": n || ("in" === d ? "auto" : "none"),
        };
        e.k() &&
          (k = A(k, {
            display: "in" === d ? "block" : "none",
            visibility: "visible",
          }));
        f = f || l.get(a, b).m;
        n = a.d.timing[c];
        u.ka[c] &&
          n &&
          ((g = u.name(a, f, c, d, g)),
          (k.animation = "none" === c ? "none" : [g, n].join(" ")));
        h(f, k);
        l.get(a, b) && e.supports("transform") && u.da(a, f, d);
      },
      da: function (a, b, c) {
        b = b.getElementsByTagName("aside");
        if (b.length)
          for (var d = 0, e, f; (e = b[d]); d++)
            if (e.getAttribute("id")) {
              for (
                f = e.parentNode;
                !D(f, "data-slider") &&
                "body" !== (f.tagName ? f.tagName.toLowerCase() : null);

              )
                f = f.parentNode;
              "body" === (f.tagName ? f.tagName.toLowerCase() : null) &&
                (f = a.a);
              f = h(f, "visibility");
              (f =
                "out" === c || (!c && "hidden" === f)
                  ? "add"
                  : "visible" === f
                  ? "rm"
                  : null) && v(e, f, "disabled");
            }
      },
    },
    k = {
      l: {},
      ma: function (a) {
        k.l[a.id] = { src: a, X: 0, R: 0, ba: k.oa(a) };
      },
      oa: function (a) {
        var b = h(a.a.cloneNode(!1), {
            position: "absolute",
            opacity: "0",
            filter: "alpha(opacity=0)",
          }),
          c = h(y("div"), { width: "42px", height: "42px" });
        b.appendChild(c);
        a.a.parentNode.insertBefore(b, a.a);
        var c = (z(b) ? k.Q(a.a) : 0) + 42,
          d = (z(b) ? k.P(a.a) : 0) + 42,
          e = h(b, "width"),
          f = h(b, "height"),
          l = h(b, "min-width"),
          n = h(b, "min-height"),
          c = {
            width: "auto" === e || e === c || (0 !== l && "auto" != l),
            height: "auto" === f || f === d || (0 !== n && "auto" != n),
          };
        a.a.parentNode.removeChild(b);
        return c;
      },
      p: function () {
        for (var a = 0, b = 0, c; (c = arguments[a]); a++) b += c;
        return isNaN(b) ? 0 : b;
      },
      ya: function (a) {
        return k.p(
          Math.max(0, h(a, "margin-left")),
          Math.max(0, h(a, "margin-right"))
        );
      },
      qa: function (a) {
        return k.p(
          Math.max(0, h(a, "margin-top")),
          Math.max(0, h(a, "margin-bottom"))
        );
      },
      za: function (a) {
        return k.p(h(a, "padding-left"), h(a, "padding-right"));
      },
      ra: function (a) {
        return k.p(h(a, "padding-top"), h(a, "padding-bottom"));
      },
      xa: function (a) {
        return k.p(h(a, "border-left-width"), h(a, "border-right-width"));
      },
      pa: function (a) {
        return k.p(h(a, "border-top-width"), h(a, "border-bottom-width"));
      },
      Q: function (a) {
        return k.p(k.za(a), k.xa(a));
      },
      P: function (a) {
        return k.p(k.ra(a), k.pa(a));
      },
      fa: function (a) {
        var b = h(a, "width");
        e.k() && "auto" === b && a.clientWidth && (b = a.clientWidth);
        "auto" !== b && (b += k.ya(a) + (z(a) ? 0 : k.Q(a)));
        return b;
      },
      ea: function (a) {
        var b = h(a, "height");
        e.k() && "auto" === b && a.clientHeight && (b = a.clientHeight);
        "auto" !== b && (b += k.qa(a) + (z(a) ? 0 : k.P(a)));
        return b;
      },
      ia: function (a, b) {
        var c = b;
        "auto" !== b && "" !== b && (c = b + (z(a) ? k.Q(a) : 0) + "px");
        h(a, { width: c });
        return b;
      },
      ha: function (a, b) {
        var c = b;
        "auto" !== b && "" !== b && (c = b + (z(a) ? k.P(a) : 0) + "px");
        h(a, { height: c });
        return b;
      },
    },
    s = {
      g: {
        n: [],
        S: function (a) {
          return 0 <= x(s.g.n, a);
        },
        add: function (a) {
          s.g.S(a) || s.g.n.push(a);
        },
        remove: function (a) {
          s.g.S(a) && s.g.n.splice(x(s.g.n, a), 1);
        },
        c: function () {
          for (
            var a = s.g.n[s.g.n.length - 1],
              b = 0,
              c = s.g.n.length,
              d = s.g.n[b];
            b < c;
            b++
          )
            I(a, d) && (a = d);
          return a;
        },
        wa: function (a) {
          w(a, "mouseenter", function (a) {
            s.g.add(e.o(a).currentTarget.id);
          });
          w(a, "mouseleave", function (a) {
            s.g.remove(e.o(a).currentTarget.id);
          });
        },
      },
      Aa: (function () {
        w(document, "keydown", function (a) {
          a = e.o(a);
          if (s.g.c() && 40 >= a.which && 37 <= a.which) {
            var b = B[s.g.c()],
              c = null;
            40 === a.which && b.canSlide("down")
              ? (c = "down")
              : 39 === a.which && b.canSlide("right")
              ? (c = "right")
              : 38 === a.which && b.canSlide("up")
              ? (c = "up")
              : 37 === a.which && b.canSlide("left") && (c = "left");
            c && b.slide(c) && e.stop(a);
          }
        });
      })(),
      va: function (a) {
        var b, c, d, g, f, h;
        w(a.a, "touchstart", function (a) {
          a = e.o(a);
          b = a.touches[0].pageX;
          c = a.touches[0].pageY;
          d = +new Date();
          h = f = g = 0;
        });
        w(a.a, "touchmove", function (a) {
          a = e.o(a);
          1 < a.touches.length ||
            (a.scale && 1 !== a.scale) ||
            ((g = a.touches[0].pageX - b),
            (f = a.touches[0].pageY - c),
            (h = +new Date() - d),
            (100 < h && 0.25 > (Math.abs(g) + Math.abs(f)) / h) || e.stop(a));
        });
        w(a.a, "touchend", function (b) {
          b = e.o(b);
          if (250 > Number(+new Date() - d)) {
            var c = Math.abs(g),
              h = Math.abs(f),
              k = 20 < c,
              l = 20 < h,
              m = 0 > g ? "right" : "left",
              p = 0 > f ? "down" : "up";
            (c = k && l ? (c > h ? m : p) : k ? m : l ? p : null) && q.s(a, c);
            e.stop(b);
          }
        });
      },
    },
    q = {
      start: function (a, b) {
        if (!a.u && a.a) {
          var c = h(a.a, "display"),
            d = h(a.a, "position"),
            e = h(a.a, "opacity");
          h(a.a, {
            visibility: "visible",
            opacity: e,
            filter: "alpha(opacity=" + 100 * e + ")",
            display:
              "inline-block" === c || "inline" === c ? "inline-block" : "block",
            position: "static" === d ? "relative" : d,
            overflow: a.d.overflow ? h(a.a, "overflow") : "hidden",
            transition: "height 0.05s ease-out, width 0.05s ease-out",
            "tap-highlight-color": "rgba(0, 0, 0, 0)",
            "touch-callout": "none",
          });
          a.start || q.add(a, a.d.direction, l.find(a, !0), a.d.transition);
          l.get(a, b) && (a.start = b);
          l.display(a);
          k.ma(a);
          u.da(a, a.a);
          a.d.keyboard && s.g.wa(a.a);
          a.d.touch && s.va(a);
          a.u = !0;
          m.update(a);
        }
      },
      N: function (a, b) {
        return a.u && b && (l.H(b) ? !!l.get(a, a.c, b) : !!l.get(a, b));
      },
      s: function (a, b) {
        q.N(a, b) && l.s(a, b);
      },
      add: function (a, b, c, d, e) {
        if (a.a) {
          d = t.L(a, d);
          var f = l.find(a),
            h = "horizontal" === b || "h" === b ? "left" : "up",
            k = "horizontal" === b || "h" === b ? "right" : "down";
          l.L(a, c, d, f, h, k) || e
            ? l.add(a, c, d, f, h, k)
            : console.warn(
                "[Slidr] Error adding [" + b + "] slides for [" + a.id + "]."
              );
        }
      },
      j: function (a, b, c) {
        a.u &&
          l.H(c) &&
          (q.stop(a),
          (a.j.ga = b),
          (a.j.direction = c),
          (a.j.id = setInterval(function () {
            (a.d.pause && s.g.S(a.id)) || l.s(a, c);
          }, b)));
      },
      stop: function (a) {
        a.u && a.j.id && (clearInterval(a.j.id), (a.j.id = null));
      },
      h: function (a) {
        if (a.h && a.v) {
          var b = "0" === h(a.h, "opacity") ? "in" : "out";
          u.B(a, null, "fade", b, null, a.h, "3", "none");
          a.controls && v(a.controls, "in" === b ? "add" : "rm", "breadcrumbs");
        }
      },
      controls: function (a, b) {
        if (a.controls && a.v) {
          m.valid(b) || (b = null);
          var c = "hidden" === h(a.controls, "visibility"),
            d = b && "none" !== b ? "in" : "out";
          ("out" === d && c) ||
            ("border" === b
              ? v(a.controls, "add", "border")
              : "corner" === b && v(a.controls, "rm", "border"),
            u.B(a, null, "fade", d, null, a.controls, "2", "none"));
        }
      },
    };
  setInterval(
    (function b() {
      var c, d, g, f, m;
      for (g in k.l)
        ((d = k.l[g]), (c = d.src), e.k() || I(document, c.a))
          ? "hidden" === h(c.a, "visibility")
            ? ((k.l[g].X = k.ia(c.a, 0)), (k.l[g].R = k.ha(c.a, 0)))
            : l.get(c, c.c) &&
              ((f = l.get(c, c.c).m),
              (m = k.fa(f)),
              (f = k.ea(f)),
              d.ba.width && d.X != m && (k.l[g].X = k.ia(c.a, m)),
              d.ba.height && d.R != f && (k.l[g].R = k.ha(c.a, f)))
          : (delete k.l[g], delete B[c.id]);
      return b;
    })(),
    250
  );
  var B = {},
    M = {
      after: H,
      before: H,
      breadcrumbs: !1,
      controls: "border",
      direction: "horizontal",
      fade: !0,
      keyboard: !1,
      overflow: !1,
      pause: !1,
      theme: "#fff",
      timing: {},
      touch: !1,
      transition: "linear",
    },
    N = {
      none: "none",
      fade: "0.4s ease-out",
      linear: "0.6s ease-out",
      cube: "1s cubic-bezier(0.15, 0.9, 0.25, 1)",
    };
  return {
    version: function () {
      return "0.5.0";
    },
    transitions: function () {
      return t.Z.slice(0);
    },
    create: function (b, c) {
      var d = document.getElementById(b);
      if (d) {
        var e = A(M, c || {});
        e.timing = A(N, e.timing);
        B[b] = B[b] || new K(b, d, e);
        return B[b];
      }
      console.warn("[Slidr] Could not find element with id [" + b + "].");
    },
  };
}
"object" === typeof exports
  ? (module.exports = E())
  : "function" === typeof define && define.amd
  ? define(E)
  : (this.slidr = E());
