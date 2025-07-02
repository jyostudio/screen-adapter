function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var o = function () {
    function n() {}
    return ["none", "cover", "contain", "fill", "fixedWidth"].forEach(function (s) {
      n[s] = new n();
    }), n;
  }(),
  g = function (_n, s) {
    var d = "[sa-cloak]{display:none !important;}",
      y = !!s;
    typeof Symbol == "function" && !Symbol.dispose && (Symbol.dispose = Symbol["for"]("Symbol.dispose"));
    var b = 0;
    function c(t) {
      if (this.r = !1, this.o = "sa-" + ++b, this.i = null, this.t = null, this.e = null, this.s = null, this.mode = o.none, this.sourceWidth = 0, this.sourceHeight = 0, this.scaleVector = {
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
        this.t = s.getElementById(r), this.t || (this.t = s.createElement("style"), this.t.id = r, this.t.innerHTML = d, s.head.appendChild(this.t));
      }
    }
    return c.prototype = {
      n: function n() {
        if (this.r || this.mode === o.none) return;
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
          case o.cover:
            a = Math.max(e.x, e.y), e.x = e.y = a;
            break;
          case o.contain:
            a = Math.min(e.x, e.y), e.x = e.y = a;
            break;
          case o.fixedWidth:
            e.y = e.x;
            break;
        }
        var x = (m - r) / 2,
          E = (v - h) / 2,
          l = this.mode === o.fixedWidth;
        function p(u) {
          return "-webkit-" + u + " -moz-" + u + " -ms-" + u + " " + u;
        }
        var w = "transform-origin: center " + (l ? "top;" : "center;"),
          S = ["left:" + x + "px", "top:" + (l ? 0 : E) + "px", "width:" + r + "px", "height:" + (h || l ? h + "px" : "auto"), "min-height:" + (l ? 1 / e.y * 100 + "%" : h ? "auto" : "100%"), p(w)].join("; "),
          M = p("transform: scale(" + e.x + ", " + e.y + ");");
        this.t.innerHTML = d + "[" + this.o + "]{position:absolute;display:block;" + S + M + "}", this.scaleVector = {
          x: e.x,
          y: e.y
        }, setTimeout(function () {
          t.i && t.i.removeAttribute("sa-cloak");
        }, 33.33), this.e || (this.e = function () {
          clearTimeout(t.s), t.s = setTimeout(function () {
            t.n();
          }, 33.33);
        }, _n.addEventListener("resize", this.e));
      },
      setMode: function setMode(t, i) {
        if (this.r) throw new Error("Adapter has been disposed");
        if (i = i || {}, this.reset(), t === o.none) {
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
        this.mode = o.none, this.sourceWidth = 0, this.sourceHeight = 0, this.scaleVector = {
          x: 1,
          y: 1
        }, this.e && (_n.removeEventListener("resize", this.e), this.e = null), this.s && (clearTimeout(this.s), this.s = null), this.t && (this.t.innerHTML = d);
      },
      dispose: function dispose() {
        this.r || (this.r = !0, this.mode = null, this.i && (this.i.removeAttribute(this.o), this.i = null), this.t && (this.t.remove(), this.t = null), this.e && (_n.removeEventListener("resize", this.e), this.e = null), this.s && (clearTimeout(this.s), this.s = null));
      }
    }, typeof Symbol == "function" && Symbol.dispose && (c.prototype[Symbol.dispose] = function () {
      this.dispose();
    }), c;
  }(window, document);
export { g as ScreenAdapter, o as ScreenAdapterMode };
