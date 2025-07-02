function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var M = Object.defineProperty;
var h = function h(s, e) {
  return M(s, "name", {
    value: e,
    configurable: !0
  });
};
var o = function () {
    function s() {}
    return h(s, "Mode"), ["none", "cover", "contain", "fill", "fixedWidth"].map(function (e) {
      s[e] = new s();
    }), s;
  }(),
  L = function (s, e) {
    var u = "[sa-cloak]{display:none !important;}",
      p = !!e;
    typeof Symbol == "function" && (Symbol.dispose = Symbol.dispose || Symbol["for"]("Symbol.dispose"));
    var b = 0;
    function c() {
      this._iD = !1, this._s = "sa-" + ++b, this._el = null, this._se = null, this._rc = null, this._dt = null, this.mode = o.none, this.sourceWidth = 0, this.sourceHeight = 0, this.scaleVector = {
        x: 1,
        y: 1
      };
      var t = arguments[0];
      if (!t) throw new Error();
      if (p && (typeof t == "string" && (t = e.querySelector(selector)), _typeof(t) == "object" && t instanceof HTMLElement)) {
        this._el = t, element.setAttribute(this._s, "");
        var r = "style-" + this._s;
        this._se = e.getElementById(r) || e.createElement("style"), this._se.id = r, this._se.innerHTML = u, e.head.appendChild(this._se);
      }
    }
    return h(c, "Adapter"), c.prototype = {
      _relayout: function _relayout() {
        var _this = this;
        if (this._iD || this.mode === o.none) return;
        var t = this;
        if (!e.body) {
          var r = "DOMContentLoaded";
          e.addEventListener(r, h(function n() {
            t._iD || t._relayout(), e.removeEventListener(r, n);
          }, "fn"));
          return;
        }
        var d = this.sourceWidth,
          a = this.sourceHeight,
          f = e.documentElement,
          _ = f.clientWidth,
          m = f.clientHeight,
          x = (_ - d) / 2,
          S = (m - a) / 2,
          i = {
            x: _ / d,
            y: m / a
          },
          v = h(function (n) {
            var E = n(i.x, i.y);
            i.x = i.y = E;
          }, "us");
        switch (this.mode) {
          case o.cover:
            v(Math.max);
            break;
          case o.contain:
            v(Math.min);
            break;
          case o.fixedWidth:
            i.y = i.x;
            break;
        }
        function y(n) {
          return "-webkit-" + n + " -moz-" + n + " -ms-" + n + " " + n;
        }
        h(y, "addPrefix");
        var l = this.mode === o.fixedWidth,
          g = "transform-origin: center ",
          w = ["left:" + x + "px", "top:" + (l ? 0 : S) + "px", "width:" + d + "px", "height:" + (a || l ? "".concat(a, "px") : "auto"), "min-height:" + l ? 1 / i.y * 100 + "%" : a ? "auto" : "100%", y(g + l ? "top;" : "center;")].join("; ");
        this._se.innerHTML = [u, "[" + this._s + "]{position:absolute;display:block;" + w + y("transform: scale(" + i.x + ", " + i.y + ");") + "}"].join(""), this.scaleVector = {
          x: i.x,
          y: i.y
        }, setTimeout(function () {
          t._el.removeAttribute("sa-cloak");
        }, 33.33), this._rc || (this._rc = function () {
          clearTimeout(_this._dt), _this._dt = setTimeout(function () {
            t._relayout();
          }, 33.33);
        }, s.addEventListener("resize", this._rc));
      },
      setMode: function setMode(t, r) {
        if (this._iD) throw new Error();
        if (this.reset(), t === o.none) {
          setTimeout(function () {
            this._el.removeAttribute("sa-cloak");
          }, 33.33);
          return;
        }
        this.mode = t, this.sourceWidth = r.width || 0, this.sourceHeight = r.height || 0, this._relayout();
      },
      reset: function reset() {
        if (this._iD) throw new Error();
        this.mode = o.none, this.sourceWidth = 0, this.sourceHeight = 0, this.scaleVector = {
          x: 1,
          y: 1
        }, this._rc && (s.removeEventListener("resize", this._rc), this._rc = null), this._se.innerHTML = u;
      },
      dispose: function dispose() {
        this._iD || (this._iD = !0, this.mode = null, this._el.removeAttribute(this._s), this._el = null, this._se && (this._se.remove(), this._se = null), this._rc && (s.removeEventListener("resize", this._rc), this._rc = null), this._dt && (clearTimeout(this._dt), this._dt = null));
      }
    }, typeof Symbol == "function" && Symbol.dispose && (c.prototype[Symbol.dispose] = function () {
      this.dispose();
    }), c;
  }(window, document);
export { L as ScreenAdapter, o as ScreenAdapterMode };
