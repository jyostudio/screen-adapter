function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _n = function () {
    function o() {}
    return ["none", "cover", "contain", "fill", "fixedWidth"].forEach(function (s) {
      o[s] = new o();
    }), o;
  }(),
  g = function () {
    var o = (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : void 0,
      s = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document : void 0,
      l = "[sa-cloak]{display:none !important;}",
      y = !!o || !!s;
    typeof Symbol == "function" && !Symbol.dispose && (Symbol.dispose = Symbol["for"]("Symbol.dispose"));
    var b = 0;
    function c(t) {
      if (this.r = !1, this.o = "sa-" + ++b, this.i = null, this.t = null, this.e = null, this.s = null, this.mode = _n.none, this.sourceWidth = 0, this.sourceHeight = 0, this.scaleVector = {
        x: 1,
        y: 1
      }, !t) throw new Error("Selector parameter is required");
      if (y) {
        var i;
        if (typeof t == "string") {
          if (i = s.querySelector(t), !i) throw new Error("Element not found for selector: " + t);
        } else if (_typeof(t) == "object" && t instanceof HTMLElement) i = t;else throw new Error("Invalid selector type. Expected string or HTMLElement");
        this.i = i, i.setAttribute(this.o, "");
        var r = "style-" + this.o;
        this.t = s.getElementById(r), this.t || (this.t = s.createElement("style"), this.t.id = r, this.t.innerHTML = l, s.head.appendChild(this.t));
      }
    }
    return c.prototype = {
      n: function n() {
        if (this.r || this.mode === _n.none) return;
        var t = this;
        if (!s.body) {
          var _i = function i() {
            t.r || t.n(), s.removeEventListener("DOMContentLoaded", _i);
          };
          s.addEventListener("DOMContentLoaded", _i);
          return;
        }
        var r = this.sourceWidth,
          h = this.sourceHeight,
          f = s.documentElement,
          m = f.clientWidth,
          v = f.clientHeight,
          e = {
            x: m / r,
            y: v / h
          },
          a;
        switch (this.mode) {
          case _n.cover:
            a = Math.max(e.x, e.y), e.x = e.y = a;
            break;
          case _n.contain:
            a = Math.min(e.x, e.y), e.x = e.y = a;
            break;
          case _n.fixedWidth:
            e.y = e.x;
            break;
        }
        var w = (m - r) / 2,
          x = (v - h) / 2,
          d = this.mode === _n.fixedWidth;
        function p(u) {
          return "-webkit-" + u + " -moz-" + u + " -ms-" + u + " " + u;
        }
        var E = "transform-origin: center " + (d ? "top;" : "center;"),
          S = ["left:" + w + "px", "top:" + (d ? 0 : x) + "px", "width:" + r + "px", "height:" + (h || d ? h + "px" : "auto"), "min-height:" + (d ? 1 / e.y * 100 + "%" : h ? "auto" : "100%"), p(E)].join("; "),
          M = p("transform: scale(" + e.x + ", " + e.y + ");");
        this.t.innerHTML = l + "[" + this.o + "]{position:absolute;display:block;" + S + M + "}", this.scaleVector = {
          x: e.x,
          y: e.y
        }, setTimeout(function () {
          t.i && t.i.removeAttribute("sa-cloak");
        }, 33.33), this.e || (this.e = function () {
          clearTimeout(t.s), t.s = setTimeout(function () {
            t.n();
          }, 33.33);
        }, o.addEventListener("resize", this.e));
      },
      setMode: function setMode(t, i) {
        if (this.r) throw new Error("Adapter has been disposed");
        if (i = i || {}, this.reset(), t === _n.none) {
          var r = this;
          setTimeout(function () {
            r.i && r.i.removeAttribute("sa-cloak");
          }, 33.33);
          return;
        }
        this.mode = t, this.sourceWidth = i.width || 0, this.sourceHeight = i.height || 0, this.n();
      },
      reset: function reset() {
        if (this.r) throw new Error("Adapter has been disposed");
        this.mode = _n.none, this.sourceWidth = 0, this.sourceHeight = 0, this.scaleVector = {
          x: 1,
          y: 1
        }, this.e && (o.removeEventListener("resize", this.e), this.e = null), this.s && (clearTimeout(this.s), this.s = null), this.t && (this.t.innerHTML = l);
      },
      dispose: function dispose() {
        this.r || (this.r = !0, this.mode = null, this.i && (this.i.removeAttribute(this.o), this.i = null), this.t && (this.t.remove(), this.t = null), this.e && (o.removeEventListener("resize", this.e), this.e = null), this.s && (clearTimeout(this.s), this.s = null));
      }
    }, typeof Symbol == "function" && Symbol.dispose && (c.prototype[Symbol.dispose] = function () {
      this.dispose();
    }), c;
  }();
export { g as ScreenAdapter, _n as ScreenAdapterMode };
