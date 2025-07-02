var _t2, _t3, _c, _e, _Class, _Symbol$dispose, _t$t, _t4, _c2, _e2, _u, _o, _s, _n, _l, _i, _a, _r, _h, _t4_brand, _t5, _f;
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
var u = function u(t, r) {
  return I(t, "name", {
    value: r,
    configurable: !0
  });
};
var p = "*",
  m = "...",
  O = "\u21C4",
  R = "##INNER_TYPE##",
  $ = "@@INNER_TYPE@@",
  N = "##INNER_THROW_FN##",
  k = "##INNER_TYPE_FN##";
function S(t, r) {
  var _r$k, _t;
  if (Array.isArray(r)) {
    for (var e = 0; e < r.length; e++) if (S(t, r[e])) return !0;
    return !1;
  }
  if (r !== null && r !== void 0 && (_r$k = r[k]) !== null && _r$k !== void 0 && _r$k.call(r, t)) return !0;
  if (typeof r != "function") return r === p && t !== null || r === m || r === null && t === null || r === _typeof(t);
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
  return t === r || t instanceof r ? !0 : (_t = t) !== null && _t !== void 0 && _t[$] ? t[$] === (r === null || r === void 0 ? void 0 : r[R]) : !1;
}
u(S, "matchType");
function T(t) {
  var _t$constructor;
  if (t === null) return "null";
  if (t === p) return "(\u4EFB\u610F)";
  var r = _typeof(t);
  if (!["function", "object"].includes(r)) return r[0].toUpperCase() + r.slice(1);
  var e = ((t === null || t === void 0 ? void 0 : t.name) || (t === null || t === void 0 || (_t$constructor = t.constructor) === null || _t$constructor === void 0 ? void 0 : _t$constructor.name) || "(\u672A\u77E5)").split(" ").pop();
  return [R, $].forEach(function (n) {
    (t === null || t === void 0 ? void 0 : t[n]) && (e += "<".concat(T(t === null || t === void 0 ? void 0 : t[n]), ">"));
  }), r === "function" && e === "anonymous" ? "(\u533F\u540D)" : e;
}
u(T, "getTypeName");
function M(t, r, e) {
  var n = t.stack.split("\n").splice(3),
    o = "",
    h = "\n",
    i = "";
  n.forEach(function (l, c, E) {
    var a = l.trim().split(" "),
      g = a.length === 3 ? a[1] : "(\u533F\u540D)",
      w = g.split(".").pop();
    E[c] = {
      fullMethodName: g,
      methodName: w,
      link: a.length === 3 ? a[2] : a[1]
    }, c ? h += "".concat(w, "\t").concat(E[c].link, "\n") : i = w;
  });
  var d = r.find(function (l) {
    return l.length === e.length;
  });
  if (!d) throw o += "\u65B9\u6CD5 ".concat(i, " \u4E0D\u5B58\u5728 ").concat(e.length, " \u4E2A\u53C2\u6570\u7684\u91CD\u8F7D\u3002"), o += h, new Error(o);
  var s = !1;
  if (d.forEach(function (l, c) {
    if (!S(e[c], l)) {
      var _l$N;
      var E = Array.isArray(l) ? l.map(T).join("\u3001") : T(l);
      o += "".concat(s ? "\n" : "", "\u53C2\u6570").concat(c + 1, "\uFF1A\u9884\u671F ").concat(E, " \u4F46\u5F97\u5230 ").concat(T(e[c]), "\u3002"), Array.isArray(l) ? l.forEach(function (a, g) {
        var _a$N;
        typeof (a === null || a === void 0 ? void 0 : a[N]) == "function" && (o += "".concat(g === 0 ? "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n" : "", "\u5C1D\u8BD5\u65B9\u6848").concat(c + 1, " - ").concat((_a$N = a[N]) === null || _a$N === void 0 ? void 0 : _a$N.call(a, e[c])));
      }) : typeof (l === null || l === void 0 ? void 0 : l[N]) == "function" && (o += "\n\u9644\u52A0\u4FE1\u606F\uFF1A\n\u5C1D\u8BD5\u65B9\u6848".concat(c + 1, " - ").concat((_l$N = l[N]) === null || _l$N === void 0 ? void 0 : _l$N.call(l, e[c]))), s = !0;
    }
  }), s) throw o = "\u65B9\u6CD5 ".concat(i, " \u8C03\u7528\u9519\u8BEF\n").concat(o), o += h, new Error(o);
}
u(M, "throwStackInfo");
function v() {
  var t = [],
    r = [],
    e = [],
    n = null;
  function o() {
    for (var _len = arguments.length, i = new Array(_len), _key = 0; _key < _len; _key++) {
      i[_key] = arguments[_key];
    }
    if (n) return n.apply(this, i);
    M(new Error(), t, i);
  }
  u(o, "runAny");
  function h() {
    for (var _len2 = arguments.length, i = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      i[_key2] = arguments[_key2];
    }
    if (!t.length) return o.apply(this, i);
    var d = i.length;
    t: for (var s = 0; s < t.length; s++) {
      var l = t[s],
        c = e[s],
        E = l.length;
      if (!(c.length !== d && !c.rest || d === 0 && E && l[0] !== m)) {
        for (var a = 0; a < d; a++) {
          var g = l[a] || l[E - 1];
          if (!S(i[a], g)) {
            try {
              var _g$O;
              var w = g === null || g === void 0 || (_g$O = g[O]) === null || _g$O === void 0 ? void 0 : _g$O.call(g, i[a]);
              if (S(w, g)) {
                i[a] = w;
                continue;
              }
            } catch (_unused) {}
            continue t;
          }
        }
        return r[s].apply(this, i);
      }
    }
    return o.apply(this, i);
  }
  return u(h, "overload"), h.add = function (i, d) {
    if (!Array.isArray(t)) throw new TypeError("types \u5FC5\u987B\u662F\u6570\u7EC4\u3002");
    if (typeof d != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    for (var s = 0; s < i.length; s++) if (i[s] === m && s !== i.length - 1) throw new SyntaxError("".concat(m, " \u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002"));
    return t.forEach(function (s) {
      if (s.length === i.length) {
        for (var l = 0; l < s.length; l++) if (s[l] !== i[l]) return;
        throw new Error("\u5DF2\u5B58\u5728\u6B64\u7B7E\u540D\u7684\u91CD\u8F7D\u3002");
      }
    }), t.forEach(function (s) {
      var l = Array.isArray(s);
      if (typeof s != "function" && !l && s !== p && s !== m) throw new TypeError("\u671F\u671B\u7C7B\u578B\u4E3A Class\u3001Array\u3001".concat(p, " \u6216\u672B\u5C3E\u53C2\u6570\u4E5F\u53EF\u4EE5\u662F ").concat(m, "\u3002"));
      if (l) for (var c = 0; c < s.length; c++) {
        var _s$c;
        var E = _typeof(s[c]);
        if (E !== "function" && !(E === "object" && typeof ((_s$c = s[c]) === null || _s$c === void 0 ? void 0 : _s$c.constructor) == "function") && s[c] !== null && s[c] !== p) throw new TypeError("\u7C7B\u578B\u5FC5\u987B\u4E3A Class\u3001null \u6216 ".concat(p, "\u3002"));
      }
    }), t.push(i), r.push(d), e.push({
      length: i.length,
      rest: i[i.length - 1] === m
    }), h;
  }, h.any = function (i) {
    if (n) throw new Error("any \u51FD\u6570\u5DF2\u5B58\u5728\u3002");
    if (typeof i != "function") throw new TypeError("fn \u5FC5\u987B\u662F\u51FD\u6570\u3002");
    return n = i, h;
  }, h;
}
u(v, "createOverload");
var y = v().add([], function () {
  return v();
}).add([Array, Function], function (t, r) {
  var e = v();
  return e.add(t, r), e;
});
var b = (_t3 = /*#__PURE__*/new WeakMap(), _c = /*#__PURE__*/new WeakMap(), _t2 = /*#__PURE__*/function () {
  function t() {
    _classCallCheck(this, t);
    _classPrivateFieldInitSpec(this, _t3, void 0);
    _classPrivateFieldInitSpec(this, _c, "");
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
    for (var _len3 = arguments.length, r = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      r[_key3] = arguments[_key3];
    }
    return _assertClassBrand(_t2, t, _e)._.apply(this, r);
  }
  return _createClass(t, [{
    key: "description",
    get: function get() {
      return _classPrivateFieldGet(_c, this);
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
      for (var _len4 = arguments.length, r = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        r[_key4] = arguments[_key4];
      }
      return t.getAll = y().add([], function () {
        var e = [],
          n = Object.getOwnPropertyNames(this);
        for (var o = 0; o < n.length; o++) {
          if (n[o] === "prototype") continue;
          var h = this[n[o]];
          _typeof(h) == "object" && h instanceof t && e.push(h);
        }
        return e;
      }), t.getAll.apply(this, r);
    }
  }, {
    key: "getByValue",
    value: function getByValue() {
      function e(n, o) {
        var h = this.getAll();
        for (var i = h.length; i--;) if (h[i][o] === n) return h[i];
        return null;
      }
      for (var _len5 = arguments.length, r = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        r[_key5] = arguments[_key5];
      }
      return u(e, "getFn"), t.getByValue = y().add([Number], function (n) {
        return e.call(this, n, "valNumber");
      }).add([String], function (n) {
        return e.call(this, n, "valString");
      }).add([Boolean], function (n) {
        return e.call(this, n, "valBoolean");
      }).add([t], function (n) {
        return this.getByValue(n.valNumber);
      }).add([Object], function (n) {
        return e.call(this, n, "valObject");
      }), t.getByValue.apply(this, r);
    }
  }, {
    key: "getByDescription",
    value: function getByDescription() {
      for (var _len6 = arguments.length, r = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        r[_key6] = arguments[_key6];
      }
      return t.getByDescription = y().add([String], function (e) {
        var n = this.getAll();
        for (var o = n.length; o--;) if (n[o].description === e) return n[o];
        return null;
      }), t.getByDescription.apply(this, r);
    }
  }, {
    key: "set",
    value: function set() {
      for (var _len7 = arguments.length, r = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        r[_key7] = arguments[_key7];
      }
      return t.set = y().add([Object], function (e) {
        for (var n in e) {
          var o = new this(e[n], n);
          Reflect.defineProperty(this, n, {
            writable: !1,
            enumerable: !0,
            configurable: !1,
            value: o
          });
        }
        Object.freeze(this);
      }), t.set.apply(this, r);
    }
  }]);
}(), u(_t2, "Enum"), _e = {
  _: u(function () {
    for (var _len8 = arguments.length, r = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      r[_key8] = arguments[_key8];
    }
    return _e._ = _assertClassBrand(_t2, _t2, y().add([], function () {
      _classPrivateFieldSet(_t3, this, Symbol());
    }).add([_t2], function (e) {
      _classPrivateFieldSet(_t3, this, _classPrivateFieldGet(_t3, e));
    }).add(["*"], function (e) {
      _classPrivateFieldSet(_t3, this, e);
    }).add([_t2, String], function (e, n) {
      _classPrivateFieldSet(_t3, this, _classPrivateFieldGet(_t3, e)), _classPrivateFieldSet(_c, this, n);
    }).add(["*", String], function (e, n) {
      _classPrivateFieldSet(_t3, this, e), _classPrivateFieldSet(_c, this, n);
    })), _assertClassBrand(_t2, _t2, _e)._.apply(this, r);
  }, "#_constructor")
}, _t2);
var f = (_Class = /*#__PURE__*/function (_b) {
  function f() {
    _classCallCheck(this, f);
    return _callSuper(this, f, arguments);
  }
  _inherits(f, _b);
  return _createClass(f);
}(b), u(_Class, "Mode"), _Class.set({
  none: 0,
  cover: 1,
  contain: 2,
  fill: 3,
  fixedWidth: 4
}), _Class);
var x = "\n[sa-cloak] {\n    display: none !important;\n}\n",
  L = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" && _typeof(document.documentElement) < "u";
(_Symbol$dispose = Symbol.dispose) !== null && _Symbol$dispose !== void 0 ? _Symbol$dispose : Symbol.dispose = Symbol["for"]("Symbol.dispose");
var A = (_c2 = /*#__PURE__*/new WeakMap(), _e2 = /*#__PURE__*/new WeakMap(), _u = /*#__PURE__*/new WeakMap(), _o = /*#__PURE__*/new WeakMap(), _s = /*#__PURE__*/new WeakMap(), _n = /*#__PURE__*/new WeakMap(), _l = /*#__PURE__*/new WeakMap(), _i = /*#__PURE__*/new WeakMap(), _a = /*#__PURE__*/new WeakMap(), _r = /*#__PURE__*/new WeakMap(), _h = /*#__PURE__*/new WeakMap(), _t4_brand = /*#__PURE__*/new WeakSet(), _t4 = /*#__PURE__*/function () {
  function t() {
    _classCallCheck(this, t);
    _classPrivateMethodInitSpec(this, _t4_brand);
    _classPrivateFieldInitSpec(this, _c2, !1);
    _classPrivateFieldInitSpec(this, _e2, !1);
    _classPrivateFieldInitSpec(this, _u, "sa-".concat(_t5._ = _assertClassBrand(_t4, t, (_t$t = _assertClassBrand(_t4, t, _t5)._, ++_t$t))));
    _classPrivateFieldInitSpec(this, _o, void 0);
    _classPrivateFieldInitSpec(this, _s, f.none);
    _classPrivateFieldInitSpec(this, _n, void 0);
    _classPrivateFieldInitSpec(this, _l, 0);
    _classPrivateFieldInitSpec(this, _i, 0);
    _classPrivateFieldInitSpec(this, _a, {
      x: 1,
      y: 1
    });
    _classPrivateFieldInitSpec(this, _r, void 0);
    _classPrivateFieldInitSpec(this, _h, void 0);
    for (var _len9 = arguments.length, _r2 = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      _r2[_key9] = arguments[_key9];
    }
    _assertClassBrand(_t4_brand, this, _E).call(this) || _assertClassBrand(_t4, t, _f)._.apply(this, _r2);
  }
  return _createClass(t, [{
    key: "sourceWidth",
    get: function get() {
      return _classPrivateFieldGet(_l, this);
    }
  }, {
    key: "sourceHeight",
    get: function get() {
      return _classPrivateFieldGet(_i, this);
    }
  }, {
    key: "mode",
    get: function get() {
      return _classPrivateFieldGet(_s, this);
    }
  }, {
    key: "scaleVector",
    get: function get() {
      return _classPrivateFieldGet(_a, this);
    }
  }, {
    key: "setMode",
    value: function setMode() {
      for (var _len0 = arguments.length, r = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
        r[_key0] = arguments[_key0];
      }
      return t.prototype.setMode = y([f, Object], function (e, n) {
        var _this = this;
        if (_classPrivateFieldGet(_e2, this)) throw new Error("\u9002\u914D\u5668\u5DF2\u88AB\u9500\u6BC1\uFF0C\u65E0\u6CD5\u8BBE\u7F6E\u6A21\u5F0F\u3002");
        if (this.reset(), e === f.none) {
          requestAnimationFrame(function () {
            _classPrivateFieldGet(_o, _this).removeAttribute("sa-cloak");
          });
          return;
        }
        _classPrivateFieldSet(_s, this, e);
        var o = e.description;
        switch (e) {
          case f.fill:
          case f.cover:
          case f.contain:
            if (!n.width || !n.height) throw new Error("".concat(o, " \u6A21\u5F0F\u9700\u8981\u540C\u65F6\u6307\u5B9A\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002"));
            if (n.width <= 0 || n.height <= 0) throw new Error("".concat(o, " \u6A21\u5F0F\u7684\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5FC5\u987B\u5927\u4E8E0\u3002"));
            break;
          case f.fixedWidth:
            if (!n.width) throw new Error("".concat(o, " \u6A21\u5F0F\u9700\u8981\u6307\u5B9A\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6\u3002"));
            if (n.width <= 0) throw new Error("".concat(o, " \u6A21\u5F0F\u7684\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6\u5FC5\u987B\u5927\u4E8E0\u3002"));
            break;
          default:
            throw new Error("\u4E0D\u652F\u6301\u7684\u6A21\u5F0F: ".concat(o, "\u3002"));
        }
        _classPrivateFieldSet(_l, this, n.width || 0), _classPrivateFieldSet(_i, this, n.height || 0), _assertClassBrand(_t4_brand, this, _d).call(this);
      }), t.prototype.setMode.apply(this, r);
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var _len1 = arguments.length, r = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
        r[_key1] = arguments[_key1];
      }
      return t.prototype.reset = y([], function () {
        if (_classPrivateFieldGet(_e2, this)) throw new Error("\u9002\u914D\u5668\u5DF2\u88AB\u9500\u6BC1\uFF0C\u65E0\u6CD5\u91CD\u7F6E\u3002");
        _classPrivateFieldSet(_s, this, f.none), _classPrivateFieldSet(_l, this, 0), _classPrivateFieldSet(_i, this, 0), _classPrivateFieldSet(_a, this, {
          x: 1,
          y: 1
        }), _classPrivateFieldGet(_r, this) && (window.removeEventListener("resize", _classPrivateFieldGet(_r, this)), _classPrivateFieldSet(_r, this, null)), _classPrivateFieldGet(_n, this).innerHTML = x;
      }), t.prototype.reset.apply(this, r);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      for (var _len10 = arguments.length, r = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        r[_key10] = arguments[_key10];
      }
      return t.prototype.dispose = y([], function () {
        _classPrivateFieldGet(_e2, this) || (_classPrivateFieldSet(_e2, this, !0), _classPrivateFieldSet(_s, this, null), _classPrivateFieldGet(_o, this).removeAttribute(_classPrivateFieldGet(_u, this)), _classPrivateFieldSet(_o, this, null), _classPrivateFieldGet(_n, this) && (_classPrivateFieldGet(_n, this).remove(), _classPrivateFieldSet(_n, this, null)), _classPrivateFieldGet(_r, this) && (window.removeEventListener("resize", _classPrivateFieldGet(_r, this)), _classPrivateFieldSet(_r, this, null)), _classPrivateFieldGet(_h, this) && (clearTimeout(_classPrivateFieldGet(_h, this)), _classPrivateFieldSet(_h, this, null)));
      }), t.prototype.dispose.apply(this, r);
    }
  }, {
    key: Symbol.dispose,
    value: function value() {
      this.dispose();
    }
  }]);
}(), u(_t4, "Adapter"), _t5 = {
  _: 0
}, _f = {
  _: u(function () {
    for (var _len11 = arguments.length, r = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      r[_key11] = arguments[_key11];
    }
    return _f._ = _assertClassBrand(_t4, _t4, y().add([String], function (e) {
      if (!e.trim()) throw new Error("\u9009\u62E9\u5668\u4E0D\u80FD\u4E3A\u7A7A");
      var n = document.querySelector(e);
      if (!n) throw new Error("\u672A\u627E\u5230\u9009\u62E9\u5668\u4E3A \"".concat(e, "\" \u7684\u5143\u7D20"));
      return _assertClassBrand(_t4, _t4, _f)._.call(this, n);
    }).add([HTMLElement], function (e) {
      _classPrivateFieldSet(_o, this, e), e.setAttribute(_classPrivateFieldGet(_u, this), "");
      var n = "style-".concat(_classPrivateFieldGet(_u, this));
      if (_classPrivateFieldSet(_n, this, document.getElementById(n) || document.createElement("style")), _classPrivateFieldGet(_n, this).id = n, _classPrivateFieldGet(_n, this).innerHTML = x, document.head.appendChild(_classPrivateFieldGet(_n, this)), _classPrivateFieldGet(_o, this).parentNode === document.body) throw new Error("\u5C4F\u5E55\u9002\u914D\u5668\u7684\u7236\u5143\u7D20\u4E0D\u80FD\u662F body \u5143\u7D20\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6\u5143\u7D20\u4F5C\u4E3A\u7236\u5143\u7D20\u3002");
    })), _assertClassBrand(_t4, _t4, _f)._.apply(this, r);
  }, "#_constructor")
}, _t4);
function _E() {
  return L || (console.error("\u5C4F\u5E55\u9002\u914D\u5668\u65E0\u6CD5\u4F7F\u7528\uFF0C\u8BF7\u786E\u4FDD\u5728\u5BA2\u6237\u7AEF\u73AF\u5883\u4E2D\u4F7F\u7528\u3002"), _classPrivateFieldSet(_c2, this, !0)), _classPrivateFieldGet(_c2, this);
}
function _d() {
  var _document,
    _this2 = this;
  if (_classPrivateFieldGet(_e2, this) || _classPrivateFieldGet(_s, this) === f.none) return;
  if (!((_document = document) !== null && _document !== void 0 && _document.body)) {
    var _document2;
    (_document2 = document) === null || _document2 === void 0 || _document2.addEventListener("DOMContentLoaded", function () {
      _classPrivateFieldGet(_e2, _this2) || _assertClassBrand(_t4_brand, _this2, _d).call(_this2);
    }, {
      once: !0
    });
    return;
  }
  var _ref = [document.documentElement.clientWidth, document.documentElement.clientHeight],
    r = _ref[0],
    e = _ref[1],
    n = (r - _classPrivateFieldGet(_l, this)) / 2,
    o = (e - _classPrivateFieldGet(_i, this)) / 2,
    h = document.defaultView.getComputedStyle(_classPrivateFieldGet(_o, this).parentNode).overflow,
    i = {
      x: r / _classPrivateFieldGet(_l, this),
      y: e / _classPrivateFieldGet(_i, this)
    },
    d = u(function (c) {
      var E = c(i.x, i.y);
      i.x = i.y = E;
    }, "unifyScale");
  switch (_classPrivateFieldGet(_s, this)) {
    case f.cover:
      d(Math.max), h !== "hidden" && console.error("\u5728 cover \u6A21\u5F0F\u4E0B\uFF0C\u7236\u5143\u7D20\u7684 overflow \u4E0D\u662F hidden \u53EF\u80FD\u51FA\u73B0\u6EDA\u52A8\u6761\u3002");
      break;
    case f.contain:
      d(Math.min);
      break;
    case f.fixedWidth:
      i.y = i.x, h === "hidden" && console.error("\u5728 fixedWidth \u6A21\u5F0F\u4E0B\uFF0C\u7236\u5143\u7D20\u7684 overflow \u4E3A hidden \u4F1A\u5BFC\u81F4\u88C1\u526A\u3002");
      break;
  }
  var s = u(function (c) {
      return "-moz-".concat(c, " -webkit-").concat(c, " -ms-").concat(c, " ").concat(c);
    }, "addPrefix"),
    l = "\n            left: ".concat(n, "px;\n            top: ").concat(o, "px;\n            width: ").concat(_classPrivateFieldGet(_l, this), "px;\n            height: ").concat(_classPrivateFieldGet(_i, this) ? "".concat(_classPrivateFieldGet(_i, this), "px") : "auto", ";\n            min-height: ").concat(_classPrivateFieldGet(_i, this) ? "auto" : "100%", ";\n            ").concat(s("transform-origin: center center;"), "\n        ");
  _classPrivateFieldGet(_s, this) === f.fixedWidth && (l = "\n                left: ".concat(n, "px;\n                top: 0;\n                width: ").concat(_classPrivateFieldGet(_l, this), "px;\n                height: auto;\n                min-height: ").concat(1 / i.y * 100, "%;\n                ").concat(s("transform-origin: center top;"), "\n            ")), _classPrivateFieldGet(_n, this).innerHTML = "\n            ".concat(x, "\n            [").concat(_classPrivateFieldGet(_u, this), "] {\n                position: absolute;\n                display: block;\n                ").concat(l, "\n                ").concat(s("transform: scale(".concat(i.x, ", ").concat(i.y, ");")), "\n            }\n        "), _classPrivateFieldSet(_a, this, {
    x: i.x,
    y: i.y
  }), requestAnimationFrame(function () {
    return _classPrivateFieldGet(_o, _this2).removeAttribute("sa-cloak");
  }), _classPrivateFieldGet(_r, this) || (_classPrivateFieldSet(_r, this, function () {
    clearTimeout(_classPrivateFieldGet(_h, _this2)), _classPrivateFieldSet(_h, _this2, setTimeout(function () {
      return _assertClassBrand(_t4_brand, _this2, _d).call(_this2);
    }, 16));
  }), window.addEventListener("resize", _classPrivateFieldGet(_r, this), {
    passive: !0
  }));
}
export { A as ScreenAdapter, f as ScreenAdapterMode };
