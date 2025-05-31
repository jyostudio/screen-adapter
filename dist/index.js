var _t2, _t3, _s, _e, _Class, _Symbol$dispose, _t$t, _t4, _s2, _e2, _h, _i, _l, _n, _c, _o, _r, _t4_brand, _t5, _u;
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var I = Object.defineProperty;
var f = function f(t, e) {
  return I(t, "name", {
    value: e,
    configurable: !0
  });
};
var w = "*",
  p = "...",
  O = "\u21C4",
  R = "##INNER_TYPE##",
  $ = "@@INNER_TYPE@@",
  N = "##INNER_THROW_FN##",
  k = "##INNER_TYPE_FN##";
function T(t, e) {
  var _e$k, _t;
  if (Array.isArray(e)) {
    for (var n = 0; n < e.length; n++) if (T(t, e[n])) return !0;
    return !1;
  }
  if (e !== null && e !== void 0 && (_e$k = e[k]) !== null && _e$k !== void 0 && _e$k.call(e, t)) return !0;
  if (typeof e != "function") return e === w && t !== null || e === p || e === null && t === null || e === _typeof(t);
  switch (_typeof(t)) {
    case "function":
    case "object":
      break;
    case "string":
      t = String;
      break;
    case "number":
      t = Number;
      break;
    case "boolean":
      t = Boolean;
      break;
    case "symbol":
      t = Symbol;
      break;
    case "bigint":
      t = BigInt;
      break;
    default:
      t = Object(t);
      break;
  }
  return t === e || t instanceof e ? !0 : (_t = t) !== null && _t !== void 0 && _t[$] ? t[$] === (e === null || e === void 0 ? void 0 : e[R]) : !1;
}
f(T, "matchType");
function S(t) {
  var _t$constructor;
  if (t === null) return "null";
  if (t === w) return "(\u4EFB\u610F)";
  var e = _typeof(t);
  if (!["function", "object"].includes(e)) return e[0].toUpperCase() + e.slice(1);
  var n = ((t === null || t === void 0 ? void 0 : t.name) || (t === null || t === void 0 || (_t$constructor = t.constructor) === null || _t$constructor === void 0 ? void 0 : _t$constructor.name) || "(\u672A\u77E5)").split(" ").pop();
  return [R, $].forEach(function (r) {
    (t === null || t === void 0 ? void 0 : t[r]) && (n += "<".concat(S(t === null || t === void 0 ? void 0 : t[r]), ">"));
  }), e === "function" && n === "anonymous" ? "(\u533F\u540D)" : n;
}
f(S, "getTypeName");
function L(t, e, n) {
  var r = t.stack.split("\n").splice(3),
    i = "",
    h = "\n",
    o = "";
  r.forEach(function (s, c, y) {
    var a = s.trim().split(" "),
      g = a.length === 3 ? a[1] : "(\u533F\u540D)",
      m = g.split(".").pop();
    y[c] = {
      fullMethodName: g,
      methodName: m,
      link: a.length === 3 ? a[2] : a[1]
    }, c ? h += "".concat(m, "\t").concat(y[c].link, "\n") : o = m;
  });
  var d = e.find(function (s) {
    return s.length === n.length;
  });
  if (!d) throw i += "\u65B9\u6CD5 ".concat(o, " \u4E0D\u5B58\u5728 ").concat(n.length, " \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002"), i += h, new Error(i);
  var l = !1;
  if (d.forEach(function (s, c) {
    if (!T(n[c], s)) {
      var _s$N;
      var y = Array.isArray(s) ? s.map(S).join("\u3001") : S(s);
      i += "".concat(l ? "\n" : "", "\u53C2\u6570").concat(c + 1, "\uFF1A\u9884\u671F ").concat(y, " \u4F46\u5F97\u5230 ").concat(S(n[c]), "\u3002"), Array.isArray(s) ? s.forEach(function (a, g) {
        var _a$N;
        typeof (a === null || a === void 0 ? void 0 : a[N]) == "function" && (i += "".concat(g === 0 ? "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n" : "", "\u5C1D\u8BD5\u65B9\u6848").concat(c + 1, " - ").concat((_a$N = a[N]) === null || _a$N === void 0 ? void 0 : _a$N.call(a, n[c])));
      }) : typeof (s === null || s === void 0 ? void 0 : s[N]) == "function" && (i += "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n\u5C1D\u8BD5\u65B9\u6848".concat(c + 1, " - ").concat((_s$N = s[N]) === null || _s$N === void 0 ? void 0 : _s$N.call(s, n[c]))), l = !0;
    }
  }), l) throw i = "\u65B9\u6CD5 ".concat(o, " \u8C03\u7528\u9519\u8BEF\n").concat(i), i += h, new Error(i);
}
f(L, "throwStackInfo");
function v() {
  var t = [],
    e = [],
    n = [],
    r = null;
  function i() {
    for (var _len = arguments.length, o = new Array(_len), _key = 0; _key < _len; _key++) {
      o[_key] = arguments[_key];
    }
    if (r) return r.apply(this, o);
    L(new Error(), t, o);
  }
  f(i, "runAny");
  function h() {
    for (var _len2 = arguments.length, o = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      o[_key2] = arguments[_key2];
    }
    if (!t.length) return i.apply(this, o);
    var d = o.length;
    t: for (var l = 0; l < t.length; l++) {
      var s = t[l],
        c = n[l],
        y = s.length;
      if (!(c.length !== d && !c.rest || d === 0 && y && s[0] !== p)) {
        for (var a = 0; a < d; a++) {
          var g = s[a] || s[y - 1];
          if (!T(o[a], g)) {
            try {
              var _g$O;
              var m = g === null || g === void 0 || (_g$O = g[O]) === null || _g$O === void 0 ? void 0 : _g$O.call(g, o[a]);
              if (T(m, g)) {
                o[a] = m;
                continue;
              }
            } catch (_unused) {}
            continue t;
          }
        }
        return e[l].apply(this, o);
      }
    }
    return i.apply(this, o);
  }
  return f(h, "overload"), h.add = function (o, d) {
    if (!Array.isArray(t)) throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");
    if (typeof d != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    for (var l = 0; l < o.length; l++) if (o[l] === p && l !== o.length - 1) throw new SyntaxError("".concat(p, " \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002"));
    return t.forEach(function (l) {
      if (l.length === o.length) {
        for (var s = 0; s < l.length; s++) if (l[s] !== o[s]) return;
        throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002");
      }
    }), t.forEach(function (l) {
      var s = Array.isArray(l);
      if (typeof l != "function" && !s && l !== w && l !== p) throw new TypeError("\u671F\u671B\u7C7B\u578B\u4E3A Class\u3001Array\u3001".concat(w, " \u6216\u672B\u5C3E\u53C2\u6570\u4E5F\u53EF\u4EE5\u662F ").concat(p, "\u3002"));
      if (s) for (var c = 0; c < l.length; c++) {
        var _l$c;
        var y = _typeof(l[c]);
        if (y !== "function" && !(y === "object" && typeof ((_l$c = l[c]) === null || _l$c === void 0 ? void 0 : _l$c.constructor) == "function") && l[c] !== null && l[c] !== w) throw new TypeError("\u7C7B\u578B\u5FC5\u987B\u4E3A Class\u3001null \u6216 ".concat(w, "\u3002"));
      }
    }), t.push(o), e.push(d), n.push({
      length: o.length,
      rest: o[o.length - 1] === p
    }), h;
  }, h.any = function (o) {
    if (r) throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");
    if (typeof o != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    return r = o, h;
  }, h;
}
f(v, "createOverload");
var E = v().add([], function () {
  return v();
}).add([Array, Function], function (t, e) {
  var n = v();
  return n.add(t, e), n;
});
var b = (_t3 = /*#__PURE__*/new WeakMap(), _s = /*#__PURE__*/new WeakMap(), _t2 = /*#__PURE__*/function () {
  function t() {
    _classCallCheck(this, t);
    _classPrivateFieldInitSpec(this, _t3, void 0);
    _classPrivateFieldInitSpec(this, _s, "");
    _defineProperty(this, Symbol.iterator, /*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _classPrivateFieldGet(_t3, this);
          case 1:
            return _context.a(2);
        }
      }, _callee, this);
    }));
    for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      e[_key3] = arguments[_key3];
    }
    return _assertClassBrand(_t2, t, _e)._.apply(this, e);
  }
  return _createClass(t, [{
    key: "description",
    get: function get() {
      return _classPrivateFieldGet(_s, this);
    }
  }, {
    key: "valNumber",
    get: function get() {
      return Number(_classPrivateFieldGet(_t3, this));
    }
  }, {
    key: "valString",
    get: function get() {
      return "" + (_classPrivateFieldGet(_t3, this) || "");
    }
  }, {
    key: "valBoolean",
    get: function get() {
      return !!_classPrivateFieldGet(_t3, this);
    }
  }, {
    key: "valObject",
    get: function get() {
      return Object(_classPrivateFieldGet(_t3, this));
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return _classPrivateFieldGet(_t3, this);
    }
  }], [{
    key: "getAll",
    value: function getAll() {
      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }
      return t.getAll = E().add([], function () {
        var n = [],
          r = Object.getOwnPropertyNames(this);
        for (var i = 0; i < r.length; i++) {
          if (r[i] === "prototype") continue;
          var h = this[r[i]];
          _typeof(h) == "object" && h instanceof t && n.push(h);
        }
        return n;
      }), t.getAll.apply(this, e);
    }
  }, {
    key: "getByValue",
    value: function getByValue() {
      function n(r, i) {
        var h = this.getAll();
        for (var o = h.length; o--;) if (h[o][i] === r) return h[o];
        return null;
      }
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }
      return f(n, "getFn"), t.getByValue = E().add([Number], function (r) {
        return n.call(this, r, "valNumber");
      }).add([String], function (r) {
        return n.call(this, r, "valString");
      }).add([Boolean], function (r) {
        return n.call(this, r, "valBoolean");
      }).add([t], function (r) {
        return this.getByValue(r.valNumber);
      }).add([Object], function (r) {
        return n.call(this, r, "valObject");
      }), t.getByValue.apply(this, e);
    }
  }, {
    key: "getByDescription",
    value: function getByDescription() {
      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }
      return t.getByDescription = E().add([String], function (n) {
        var r = this.getAll();
        for (var i = r.length; i--;) if (r[i].description === n) return r[i];
        return null;
      }), t.getByDescription.apply(this, e);
    }
  }, {
    key: "set",
    value: function set() {
      for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        e[_key7] = arguments[_key7];
      }
      return t.set = E().add([Object], function (n) {
        for (var r in n) {
          var i = new this(n[r], r);
          Reflect.defineProperty(this, r, {
            writable: !1,
            enumerable: !0,
            configurable: !1,
            value: i
          });
        }
        Object.freeze(this);
      }), t.set.apply(this, e);
    }
  }]);
}(), f(_t2, "Enum"), _e = {
  _: f(function () {
    for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      e[_key8] = arguments[_key8];
    }
    return _e._ = _assertClassBrand(_t2, _t2, E().add([], function () {
      _classPrivateFieldSet(_t3, this, Symbol());
    }).add([_t2], function (n) {
      _classPrivateFieldSet(_t3, this, _classPrivateFieldGet(_t3, n));
    }).add(["*"], function (n) {
      _classPrivateFieldSet(_t3, this, n);
    }).add([_t2, String], function (n, r) {
      _classPrivateFieldSet(_t3, this, _classPrivateFieldGet(_t3, n)), _classPrivateFieldSet(_s, this, r);
    }).add(["*", String], function (n, r) {
      _classPrivateFieldSet(_t3, this, n), _classPrivateFieldSet(_s, this, r);
    })), _assertClassBrand(_t2, _t2, _e)._.apply(this, e);
  }, "#_constructor")
}, _t2);
var u = (_Class = /*#__PURE__*/function (_b) {
  function u() {
    _classCallCheck(this, u);
    return _callSuper(this, u, arguments);
  }
  _inherits(u, _b);
  return _createClass(u);
}(b), f(_Class, "Mode"), _Class.set({
  none: 0,
  cover: 1,
  contain: 2,
  fill: 3,
  fixedWidth: 4
}), _Class);
var x = "\n[sa-cloak] {\n    display: none !important;\n}\n",
  M = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" && _typeof(document.documentElement) < "u";
(_Symbol$dispose = Symbol.dispose) !== null && _Symbol$dispose !== void 0 ? _Symbol$dispose : Symbol.dispose = Symbol["for"]("Symbol.dispose");
var A = (_s2 = /*#__PURE__*/new WeakMap(), _e2 = /*#__PURE__*/new WeakMap(), _h = /*#__PURE__*/new WeakMap(), _i = /*#__PURE__*/new WeakMap(), _l = /*#__PURE__*/new WeakMap(), _n = /*#__PURE__*/new WeakMap(), _c = /*#__PURE__*/new WeakMap(), _o = /*#__PURE__*/new WeakMap(), _r = /*#__PURE__*/new WeakMap(), _t4_brand = /*#__PURE__*/new WeakSet(), _t4 = /*#__PURE__*/function () {
  function t() {
    _classCallCheck(this, t);
    _classPrivateMethodInitSpec(this, _t4_brand);
    _classPrivateFieldInitSpec(this, _s2, !1);
    _classPrivateFieldInitSpec(this, _e2, !1);
    _classPrivateFieldInitSpec(this, _h, "sa-".concat(_t5._ = _assertClassBrand(_t4, t, (_t$t = _assertClassBrand(_t4, t, _t5)._, ++_t$t))));
    _classPrivateFieldInitSpec(this, _i, void 0);
    _classPrivateFieldInitSpec(this, _l, u.none);
    _classPrivateFieldInitSpec(this, _n, void 0);
    _classPrivateFieldInitSpec(this, _c, 0);
    _classPrivateFieldInitSpec(this, _o, 0);
    _classPrivateFieldInitSpec(this, _r, void 0);
    for (var _len9 = arguments.length, _e3 = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      _e3[_key9] = arguments[_key9];
    }
    _assertClassBrand(_t4_brand, this, _f).call(this) || _assertClassBrand(_t4, t, _u)._.apply(this, _e3);
  }
  return _createClass(t, [{
    key: "setMode",
    value: function setMode() {
      for (var _len0 = arguments.length, e = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
        e[_key0] = arguments[_key0];
      }
      return t.prototype.setMode = E([u, Object], function (n, r) {
        var _this = this;
        if (_classPrivateFieldGet(_e2, this)) throw new Error("\u9002\u914D\u5668\u5DF2\u88AB\u9500\u6BC1\uFF0C\u65E0\u6CD5\u8BBE\u7F6E\u6A21\u5F0F\u3002");
        if (_assertClassBrand(_t4_brand, this, _f).call(this)) return;
        if (this.reset(), n === u.none) {
          requestAnimationFrame(function () {
            _classPrivateFieldGet(_i, _this).removeAttribute("sa-cloak");
          });
          return;
        }
        _classPrivateFieldSet(_l, this, n);
        var i = n.description;
        switch (n) {
          case u.fill:
          case u.cover:
          case u.contain:
            if (!r.width || !r.height) throw new Error("".concat(i, " \u6A21\u5F0F\u9700\u8981\u540C\u65F6\u6307\u5B9A\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002"));
            if (r.width <= 0 || r.height <= 0) throw new Error("".concat(i, " \u6A21\u5F0F\u7684\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5FC5\u987B\u5927\u4E8E0\u3002"));
            break;
          case u.fixedWidth:
            if (!r.width) throw new Error("".concat(i, " \u6A21\u5F0F\u9700\u8981\u6307\u5B9A\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6\u3002"));
            if (r.width <= 0) throw new Error("".concat(i, " \u6A21\u5F0F\u7684\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6\u5FC5\u987B\u5927\u4E8E0\u3002"));
            break;
          default:
            throw new Error("\u4E0D\u652F\u6301\u7684\u6A21\u5F0F: ".concat(i, "\u3002"));
        }
        _classPrivateFieldSet(_c, this, r.width || 0), _classPrivateFieldSet(_o, this, r.height || 0), _assertClassBrand(_t4_brand, this, _a).call(this);
      }), t.prototype.setMode.apply(this, e);
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var _len1 = arguments.length, e = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
        e[_key1] = arguments[_key1];
      }
      return t.prototype.reset = E([], function () {
        if (_classPrivateFieldGet(_e2, this)) throw new Error("\u9002\u914D\u5668\u5DF2\u88AB\u9500\u6BC1\uFF0C\u65E0\u6CD5\u91CD\u7F6E\u3002");
        _assertClassBrand(_t4_brand, this, _f).call(this) || (_classPrivateFieldSet(_l, this, u.none), _classPrivateFieldSet(_c, this, 0), _classPrivateFieldSet(_o, this, 0), _classPrivateFieldGet(_r, this) && (window.removeEventListener("resize", _classPrivateFieldGet(_r, this)), _classPrivateFieldSet(_r, this, null)), _classPrivateFieldGet(_n, this).innerHTML = x);
      }), t.prototype.reset.apply(this, e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        e[_key10] = arguments[_key10];
      }
      return t.prototype.dispose = E([], function () {
        _classPrivateFieldGet(_e2, this) || (_classPrivateFieldSet(_e2, this, !0), !_assertClassBrand(_t4_brand, this, _f).call(this) && (_classPrivateFieldSet(_l, this, null), _classPrivateFieldGet(_i, this).removeAttribute("".concat(_classPrivateFieldGet(_h, this))), _classPrivateFieldSet(_i, this, null), _classPrivateFieldGet(_n, this) && (_classPrivateFieldGet(_n, this).remove(), _classPrivateFieldSet(_n, this, null)), _classPrivateFieldGet(_r, this) && (window.removeEventListener("resize", _classPrivateFieldGet(_r, this)), _classPrivateFieldSet(_r, this, null))));
      }), t.prototype.dispose.apply(this, e);
    }
  }, {
    key: Symbol.dispose,
    value: function value() {
      this.dispose();
    }
  }]);
}(), f(_t4, "Adapter"), _t5 = {
  _: 0
}, _u = {
  _: f(function () {
    for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      e[_key11] = arguments[_key11];
    }
    return _u._ = _assertClassBrand(_t4, _t4, E().add([String], function (n) {
      if (!n.trim()) throw new Error("\u9009\u62E9\u5668\u4E0D\u80FD\u4E3A\u7A7A");
      var r = document.querySelector(n);
      if (!r) throw new Error("\u672A\u627E\u5230\u9009\u62E9\u5668\u4E3A \"".concat(n, "\" \u7684\u5143\u7D20"));
      return _assertClassBrand(_t4, _t4, _u)._.call(this, r);
    }).add([HTMLElement], function (n) {
      _classPrivateFieldSet(_i, this, n), n.setAttribute("".concat(_classPrivateFieldGet(_h, this)), "");
      var r = "style-".concat(_classPrivateFieldGet(_h, this));
      if (_classPrivateFieldSet(_n, this, document.getElementById(r) || document.createElement("style")), _classPrivateFieldGet(_n, this).id = r, _classPrivateFieldGet(_n, this).innerHTML = x, document.head.appendChild(_classPrivateFieldGet(_n, this)), _classPrivateFieldGet(_i, this).parentNode === document.body) throw new Error("\u5C4F\u5E55\u9002\u914D\u5668\u7684\u7236\u5143\u7D20\u4E0D\u80FD\u662F body \u5143\u7D20\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6\u5143\u7D20\u4F5C\u4E3A\u7236\u5143\u7D20\u3002");
    })), _assertClassBrand(_t4, _t4, _u)._.apply(this, e);
  }, "#_constructor")
}, _t4);
function _f() {
  if (_classPrivateFieldGet(_s2, this)) return !0;
  M || (console.error("\u5C4F\u5E55\u9002\u914D\u5668\u65E0\u6CD5\u4F7F\u7528\uFF0C\u8BF7\u786E\u4FDD\u5728\u5BA2\u6237\u7AEF\u73AF\u5883\u4E2D\u4F7F\u7528\u3002"), _classPrivateFieldSet(_s2, this, !0));
}
function _a() {
  var _document,
    _this2 = this;
  if (_classPrivateFieldGet(_e2, this) || _classPrivateFieldGet(_l, this) === u.none) return;
  if (!((_document = document) !== null && _document !== void 0 && _document.body)) {
    var _document2;
    (_document2 = document) === null || _document2 === void 0 || _document2.addEventListener("DOMContentLoaded", function () {
      _classPrivateFieldGet(_e2, _this2) || _assertClassBrand(_t4_brand, _this2, _a).call(_this2);
    }, {
      once: !0
    });
    return;
  }
  var e = {
      x: 1,
      y: 1
    },
    _ref = [document.documentElement.clientWidth, document.documentElement.clientHeight],
    n = _ref[0],
    r = _ref[1],
    i = (n - _classPrivateFieldGet(_c, this)) / 2,
    h = (r - _classPrivateFieldGet(_o, this)) / 2;
  e.x = n / _classPrivateFieldGet(_c, this), e.y = r / _classPrivateFieldGet(_o, this);
  var o = document.defaultView.getComputedStyle(_classPrivateFieldGet(_i, this).parentNode).overflow;
  switch (_classPrivateFieldGet(_l, this)) {
    case u.cover:
      {
        var s = Math.max(e.x, e.y);
        e.x = e.y = s, o !== "hidden" && console.error("\u5728 cover \u9002\u914D\u6A21\u5F0F\u4E0B\uFF0C\u7236\u5143\u7D20\u7684 overflow \u6837\u5F0F\u5982\u679C\u4E0D\u4E3A hidden \u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761\u3002");
      }
      break;
    case u.contain:
      {
        var _s3 = Math.min(e.x, e.y);
        e.x = e.y = _s3;
      }
      break;
    case u.fixedWidth:
      e.y = e.x, o === "hidden" && console.error("\u5728 fixedWidth \u9002\u914D\u6A21\u5F0F\u4E0B\uFF0C\u7236\u5143\u7D20\u7684 overflow \u6837\u5F0F\u5982\u679C\u4E3A hidden \u4F1A\u5BFC\u81F4\u5185\u5BB9\u88AB\u88C1\u526A\u3002");
      break;
  }
  var d = f(function (s) {
      return "-moz-".concat(s, " -webkit-").concat(s, " -ms-").concat(s, " ").concat(s);
    }, "addPrefix"),
    l = "\n            left: ".concat(i, "px;\n            top: ").concat(h, "px;\n            width: ").concat(_classPrivateFieldGet(_c, this), "px;\n            height: ").concat(_classPrivateFieldGet(_o, this) ? "".concat(_classPrivateFieldGet(_o, this), "px") : "auto", ";\n            min-height: ").concat(_classPrivateFieldGet(_o, this) ? "auto" : "100%", ";\n            ").concat(d("transform-origin: center center;"), "\n        ");
  _classPrivateFieldGet(_l, this) === u.fixedWidth && (l = "\n                left: ".concat(i, "px;\n                top: 0;\n                width: ").concat(_classPrivateFieldGet(_c, this), "px;\n                height: auto;\n                min-height: ").concat(1 / e.y * 100, "%;\n                ").concat(d("transform-origin: center top;"), "\n            ")), _classPrivateFieldGet(_n, this).innerHTML = "\n            ".concat(x, "\n\n            [").concat(_classPrivateFieldGet(_h, this), "] {\n                position: absolute;\n                display: block;\n                ").concat(l, "\n                ").concat(d("transform: scale(".concat(e.x, ", ").concat(e.y, ");")), "\n            }\n        "), requestAnimationFrame(function () {
    _classPrivateFieldGet(_i, _this2).removeAttribute("sa-cloak");
  }), _classPrivateFieldGet(_r, this) || (_classPrivateFieldSet(_r, this, function () {
    _assertClassBrand(_t4_brand, _this2, _a).call(_this2);
  }), window.addEventListener("resize", _classPrivateFieldGet(_r, this), {
    passive: !0
  }));
}
export { A as ScreenAdapter, u as ScreenAdapterMode };
