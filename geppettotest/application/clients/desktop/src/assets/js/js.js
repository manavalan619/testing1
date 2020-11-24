// Copyright 2012 Google Inc. All rights reserved.
(function () {

  var data = {
    "resource": {
      "version": "1",
      "macros": [],
      "tags": [],
      "predicates": [],
      "rules": []
    },
    "runtime": [
      [],
      []
    ]
  };
  var f, aa = this,
    fa = function () {
      if (null === ba) a: {
        var a = aa.document,
          b = a.querySelector && a.querySelector("script[nonce]");
        if (b) {
          var c = b.nonce || b.getAttribute("nonce");
          if (c && ea.test(c)) {
            ba = c;
            break a
          }
        }
        ba = ""
      }
      return ba
    },
    ea = /^[\w+/_-]+[=]{0,2}$/,
    ba = null,
    ha = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    },
    ia = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.$g = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.Jg = function (a, c, g) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e -
          2] = arguments[e];
        return b.prototype[c].apply(a, d)
      }
    };
  var ja = function (a, b) {
    this.C = a;
    this.cf = b
  };
  ja.prototype.uf = function () {
    return this.C
  };
  ja.prototype.getData = function () {
    return this.cf
  };
  ja.prototype.getData = ja.prototype.getData;
  ja.prototype.getType = ja.prototype.uf;
  var ka = function (a) {
      return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    },
    la = function () {
      this.Ca = {};
      this.Wa = !1
    };
  la.prototype.get = function (a) {
    return this.Ca["dust." + a]
  };
  la.prototype.set = function (a, b) {
    !this.Wa && (this.Ca["dust." + a] = b)
  };
  la.prototype.has = function (a) {
    return this.Ca.hasOwnProperty("dust." + a)
  };
  var ma = function (a) {
    var b = [],
      c;
    for (c in a.Ca) a.Ca.hasOwnProperty(c) && b.push(c.substr(5));
    return b
  };
  la.prototype.remove = function (a) {
    !this.Wa && delete this.Ca["dust." + a]
  };
  la.prototype.N = function () {
    this.Wa = !0
  };
  var n = function (a) {
    this.Ha = new la;
    this.m = [];
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && (ka(b) ? this.m[Number(b)] = a[Number(b)] : this.Ha.set(b, a[b]))
  };
  f = n.prototype;
  f.toString = function () {
    for (var a = [], b = 0; b < this.m.length; b++) {
      var c = this.m[b];
      null === c || void 0 === c ? a.push("") : a.push(c.toString())
    }
    return a.join(",")
  };
  f.set = function (a, b) {
    if ("length" == a) {
      if (!ka(b)) throw Error("RangeError: Length property must be a valid integer.");
      this.m.length = Number(b)
    } else ka(a) ? this.m[Number(a)] = b : this.Ha.set(a, b)
  };
  f.get = function (a) {
    return "length" == a ? this.length() : ka(a) ? this.m[Number(a)] : this.Ha.get(a)
  };
  f.length = function () {
    return this.m.length
  };
  f.da = function () {
    for (var a = ma(this.Ha), b = 0; b < this.m.length; b++) a.push(b + "");
    return new n(a)
  };
  f.remove = function (a) {
    ka(a) ? delete this.m[Number(a)] : this.Ha.remove(a)
  };
  f.pop = function () {
    return this.m.pop()
  };
  f.push = function (a) {
    return this.m.push.apply(this.m, Array.prototype.slice.call(arguments))
  };
  f.shift = function () {
    return this.m.shift()
  };
  f.splice = function (a, b, c) {
    return new n(this.m.splice.apply(this.m, arguments))
  };
  f.unshift = function (a) {
    return this.m.unshift.apply(this.m, Array.prototype.slice.call(arguments))
  };
  f.has = function (a) {
    return ka(a) && this.m.hasOwnProperty(a) || this.Ha.has(a)
  };
  n.prototype.unshift = n.prototype.unshift;
  n.prototype.splice = n.prototype.splice;
  n.prototype.shift = n.prototype.shift;
  n.prototype.push = n.prototype.push;
  n.prototype.pop = n.prototype.pop;
  n.prototype.remove = n.prototype.remove;
  n.prototype.getKeys = n.prototype.da;
  n.prototype.get = n.prototype.get;
  n.prototype.set = n.prototype.set;
  var na = function () {
    function a(a, b) {
      c[a] = b
    }

    function b() {
      c = {};
      h = !1
    }
    var c = {},
      d, e, g = {},
      h = !1,
      k = {
        add: a,
        gd: function (a, b, c) {
          g[a] || (g[a] = {});
          g[a][b] = c
        },
        create: function (g) {
          var k = {
            add: a,
            assert: function (a, b) {
              if (!h) {
                var k = c[a] || d;
                k && k.apply(g, Array.prototype.slice.call(arguments, 0));
                e && e.apply(g, Array.prototype.slice.call(arguments, 0))
              }
            },
            reset: b
          };
          k.add = k.add;
          k.assert = k.assert;
          k.reset = k.reset;
          return k
        },
        Ed: function (a) {
          return g[a] ? (b(), c = g[a], !0) : !1
        },
        Ia: function (a) {
          d = a
        },
        Ja: function (a) {
          e = a
        },
        reset: b,
        Pd: function (a) {
          h =
            a
        }
      };
    k.add = k.add;
    k.addToCache = k.gd;
    k.loadFromCache = k.Ed;
    k.registerDefaultPermission = k.Ia;
    k.registerGlobalPermission = k.Ja;
    k.reset = k.reset;
    k.setPermitAllAsserts = k.Pd;
    return k
  };
  var oa = function () {
    function a(a, c) {
      if (b[a]) {
        if (b[a].xb + c > b[a].max) throw Error("Quota exceeded");
        b[a].xb += c
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        Wf: function (a) {
          c = a
        },
        hd: function () {
          c && a(c, 1)
        },
        Xf: function (a) {
          d = a
        },
        ca: function (b) {
          d && a(d, b)
        },
        rg: function (a, c) {
          b[a] = b[a] || {
            xb: 0
          };
          b[a].max = c
        },
        tf: function (a) {
          return b[a] && b[a].xb || 0
        },
        reset: function () {
          b = {}
        },
        Xe: a
      };
    e.onFnConsume = e.Wf;
    e.consumeFn = e.hd;
    e.onStorageConsume = e.Xf;
    e.consumeStorage = e.ca;
    e.setMax = e.rg;
    e.getConsumed = e.tf;
    e.reset = e.reset;
    e.consume = e.Xe;
    return e
  };
  var ra = function (a, b, c) {
    this.O = a;
    this.I = b;
    this.ja = c;
    this.m = new la;
    this.Bb = void 0
  };
  f = ra.prototype;
  f.add = function (a, b) {
    this.m.Wa || (this.O.ca(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.m.set(a, b))
  };
  f.set = function (a, b) {
    this.m.Wa || (this.ja && this.ja.has(a) ? this.ja.set(a, b) : (this.O.ca(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.m.set(a, b)))
  };
  f.get = function (a) {
    return this.m.has(a) ? this.m.get(a) : this.ja ? this.ja.get(a) : void 0
  };
  f.has = function (a) {
    return !!this.m.has(a) || !(!this.ja || !this.ja.has(a))
  };
  f.L = function () {
    return this.O
  };
  f.S = function (a) {
    this.Bb = a
  };
  f.N = function () {
    this.m.N()
  };
  ra.prototype.has = ra.prototype.has;
  ra.prototype.get = ra.prototype.get;
  ra.prototype.set = ra.prototype.set;
  ra.prototype.add = ra.prototype.add;
  var sa = function () {},
    ta = function (a) {
      return "function" == typeof a
    },
    t = function (a) {
      return "string" == typeof a
    },
    va = function (a) {
      return "number" == typeof a && !isNaN(a)
    },
    wa = function (a) {
      return "[object Array]" == Object.prototype.toString.call(Object(a))
    },
    xa = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1
      }
      for (var d = 0; d < a.length; d++)
        if (a[d] === b) return d;
      return -1
    },
    ya = function (a, b) {
      if (a && wa(a))
        for (var c = 0; c < a.length; c++)
          if (a[c] && b(a[c])) return a[c]
    },
    za = function (a, b) {
      if (!va(a) ||
        !va(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a)
    },
    Aa = function (a) {
      return Math.round(Number(a)) || 0
    },
    Ba = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a
    },
    Da = function (a) {
      var b = [];
      if (wa(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b
    },
    Ea = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : ""
    },
    Fa = function () {
      return (new Date).getTime()
    },
    Ga = function () {
      this.prefix = "gtm.";
      this.values = {}
    };
  Ga.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b
  };
  Ga.prototype.get = function (a) {
    return this.values[this.prefix + a]
  };
  Ga.prototype.contains = function (a) {
    return void 0 !== this.get(a)
  };
  var Ha = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c
    },
    Ia = function (a) {
      var b = !1;
      return function () {
        if (!b) try {
          a()
        } catch (c) {}
        b = !0
      }
    },
    Ja = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    },
    Ka = function (a) {
      for (var b in a)
        if (a.hasOwnProperty(b)) return !0;
      return !1
    },
    La = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c
    };
  var x = function (a, b) {
    la.call(this);
    this.Fd = a;
    this.qf = b
  };
  ia(x, la);
  var Na = function (a, b) {
      for (var c, d = 0; d < b.length && !(c = Ma(a, b[d]), c instanceof ja); d++);
      return c
    },
    Ma = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof x)) throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.B.apply(c, [a].concat(b.slice(1)))
      } catch (e) {
        var d = a.Bb;
        d && d(e);
        throw e;
      }
    };
  x.prototype.toString = function () {
    return this.Fd
  };
  x.prototype.getName = function () {
    return this.Fd
  };
  x.prototype.getName = x.prototype.getName;
  x.prototype.da = function () {
    return new n(ma(this))
  };
  x.prototype.getKeys = x.prototype.da;
  x.prototype.B = function (a, b) {
    var c, d = {
      H: function () {
        return a
      },
      evaluate: function (b) {
        var c = a;
        return wa(b) ? Ma(c, b) : b
      },
      Ua: function (b) {
        return Na(a, b)
      },
      L: function () {
        return a.L()
      },
      F: function () {
        c || (c = a.I.create(d));
        return c
      }
    };
    a.L().hd();
    return this.qf.apply(d, Array.prototype.slice.call(arguments, 1))
  };
  x.prototype.invoke = x.prototype.B;
  x.prototype.ka = function (a, b) {
    try {
      return this.B.apply(this, Array.prototype.slice.call(arguments, 0))
    } catch (c) {}
  };
  x.prototype.safeInvoke = x.prototype.ka;
  var Oa = function () {
    la.call(this)
  };
  ia(Oa, la);
  Oa.prototype.da = function () {
    return new n(ma(this))
  };
  Oa.prototype.getKeys = Oa.prototype.da;
  var Pa = /^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,
    Qa = {
      Fn: "function",
      Map: "Object",
      List: "Array"
    },
    Ra = function (a, b) {
      for (var c = 0; c < a.length; c++) {
        var d = Pa.exec(a[c]);
        if (!d) throw Error("Internal Error");
        var e = d[1],
          g = "!" === d[2],
          h = d[3],
          k = b[c],
          l = typeof k;
        if (null === k || "undefined" === l) {
          if (g) throw Error("Required argument " + e + " not supplied.");
        } else if ("*" !== h) {
          var m = typeof k;
          k instanceof x ? m = "Fn" : k instanceof n ? m = "List" : k instanceof Oa && (m = "Map");
          if (m != h) throw Error("Argument " + e + " does not match required type " +
            (Qa[h] || h) + ".");
        }
      }
    };
  /*
       jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Sa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ta = function (a) {
      if (null == a) return String(a);
      var b = Sa.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object"
    },
    Ua = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    Va = function (a) {
      if (!a || "object" != Ta(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Ua(a, "constructor") && !Ua(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      for (var b in a);
      return void 0 ===
        b || Ua(a, b)
    },
    y = function (a, b) {
      var c = b || ("array" == Ta(a) ? [] : {}),
        d;
      for (d in a)
        if (Ua(a, d)) {
          var e = a[d];
          "array" == Ta(e) ? ("array" != Ta(c[d]) && (c[d] = []), c[d] = y(e, c[d])) : Va(e) ? (Va(c[d]) || (c[d] = {}), c[d] = y(e, c[d])) : c[d] = e
        } return c
    };
  var Wa = function (a) {
      if (a instanceof n) {
        for (var b = [], c = a.length(), d = 0; d < c; d++) a.has(d) && (b[d] = Wa(a.get(d)));
        return b
      }
      if (a instanceof Oa) {
        for (var e = {}, g = a.da(), h = g.length(), k = 0; k < h; k++) e[g.get(k)] = Wa(a.get(g.get(k)));
        return e
      }
      return a instanceof x ? function () {
        for (var b = Array.prototype.slice.call(arguments, 0), c = 0; c < b.length; c++) b[c] = Xa(b[c]);
        var d = new ra(oa(), na());
        return Wa(a.B.apply(a, [d].concat(b)))
      } : a
    },
    Xa = function (a) {
      if (wa(a)) {
        for (var b = [], c = 0; c < a.length; c++) a.hasOwnProperty(c) && (b[c] = Xa(a[c]));
        return new n(b)
      }
      if (Va(a)) {
        var d =
          new Oa,
          e;
        for (e in a) a.hasOwnProperty(e) && d.set(e, Xa(a[e]));
        return d
      }
      if ("function" === typeof a) return new x("", function (b) {
        for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; d++) c[d] = Wa(this.evaluate(c[d]));
        return Xa(a.apply(a, c))
      });
      var g = typeof a;
      if (null === a || "string" === g || "number" === g || "boolean" === g) return a
    };
  var Ya = {
    control: function (a, b) {
      return new ja(a, this.evaluate(b))
    },
    fn: function (a, b, c) {
      var d = this.H(),
        e = this.evaluate(b);
      if (!(e instanceof n)) throw Error("Error: non-List value given for Fn argument names.");
      var g = Array.prototype.slice.call(arguments, 2);
      this.L().ca(a.length + g.length);
      return new x(a, function () {
        return function (a) {
          var b = new ra(d.O, d.I, d);
          d.Bb && b.S(d.Bb);
          for (var c = Array.prototype.slice.call(arguments, 0), h = 0; h < c.length; h++)
            if (c[h] = this.evaluate(c[h]), c[h] instanceof ja) return c[h];
          for (var p =
              e.get("length"), q = 0; q < p; q++) q < c.length ? b.set(e.get(q), c[q]) : b.set(e.get(q), void 0);
          b.set("arguments", new n(c));
          var r = Na(b, g);
          if (r instanceof ja) return "return" === r.C ? r.getData() : r
        }
      }())
    },
    list: function (a) {
      var b = this.L();
      b.ca(arguments.length);
      for (var c = new n, d = 0; d < arguments.length; d++) {
        var e = this.evaluate(arguments[d]);
        "string" === typeof e && b.ca(e.length ? e.length - 1 : 0);
        c.push(e)
      }
      return c
    },
    map: function (a) {
      for (var b = this.L(), c = new Oa, d = 0; d < arguments.length - 1; d += 2) {
        var e = this.evaluate(arguments[d]) + "",
          g =
          this.evaluate(arguments[d + 1]),
          h = e.length;
        h += "string" === typeof g ? g.length : 1;
        b.ca(h);
        c.set(e, g)
      }
      return c
    },
    undefined: function () {}
  };
  var Za = function () {
    this.O = oa();
    this.I = na();
    this.Ba = new ra(this.O, this.I)
  };
  f = Za.prototype;
  f.ba = function (a, b) {
    var c = new x(a, b);
    c.N();
    this.Ba.set(a, c)
  };
  f.fd = function (a, b) {
    Ya.hasOwnProperty(a) && this.ba(b || a, Ya[a])
  };
  f.L = function () {
    return this.O
  };
  f.Fb = function () {
    this.O = oa();
    this.Ba.O = this.O
  };
  f.og = function () {
    this.I = na();
    this.Ba.I = this.I
  };
  f.S = function (a) {
    this.Ba.S(a)
  };
  f.M = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.xc(c)
  };
  f.xc = function (a) {
    for (var b, c = 0; c < arguments.length; c++) {
      var d = Ma(this.Ba, arguments[c]);
      b = d instanceof ja || d instanceof x || d instanceof n || d instanceof Oa || null === d || void 0 === d || "string" === typeof d || "number" === typeof d || "boolean" === typeof d ? d : void 0
    }
    return b
  };
  f.N = function () {
    this.Ba.N()
  };
  Za.prototype.makeImmutable = Za.prototype.N;
  Za.prototype.run = Za.prototype.xc;
  Za.prototype.execute = Za.prototype.M;
  Za.prototype.resetPermissions = Za.prototype.og;
  Za.prototype.resetQuota = Za.prototype.Fb;
  Za.prototype.getQuota = Za.prototype.L;
  Za.prototype.addNativeInstruction = Za.prototype.fd;
  Za.prototype.addInstruction = Za.prototype.ba;
  var $a = function (a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b
  };
  var ab = {
    wg: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof n)
          for (var g = arguments[e], h = 0; h < g.length(); h++) c.push(g.get(h));
        else c.push(arguments[e]);
      return new n(c)
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) &&
          !b.B(a, this.get(d), d, this)) return !1;
      return !0
    },
    filter: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.B(a, this.get(e), e, this) && d.push(this.get(e));
      return new n(d)
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.B(a, this.get(d), d, this)
    },
    hasOwnProperty: function (a, b) {
      return this.has(b)
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var g = e; g < d; g++)
        if (this.has(g) && this.get(g) ===
          b) return g;
      return -1
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b)
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var g = e; 0 <= g; g--)
        if (this.has(g) && this.get(g) === b) return g;
      return -1
    },
    map: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.B(a, this.get(e), e, this));
      return new n(d)
    },
    pop: function () {
      return this.pop()
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments,
        1))
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e, g;
      if (void 0 !== c) e = c, g = 0;
      else {
        if (0 == d) throw Error("TypeError: Reduce on List with no elements.");
        var h;
        for (h = 0; h < d; h++)
          if (this.has(h)) {
            e = this.get(h);
            g = h + 1;
            break
          } if (h == d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = g; k < d; k++) this.has(k) && (e = b.B(a, e, this.get(k), k, this));
      return e
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e, g;
      if (void 0 !== c) e = c, g = d - 1;
      else {
        if (0 == d) throw Error("TypeError: ReduceRight on List with no elements.");
        var h;
        for (h = 1; h <= d; h++)
          if (this.has(d - h)) {
            e = this.get(d - h);
            g = d - (h + 1);
            break
          } if (h > d) throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = g; 0 <= k; k--) this.has(k) && (e = b.B(a, e, this.get(k), k, this));
      return e
    },
    reverse: function () {
      for (var a = $a(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this
    },
    shift: function () {
      return this.shift()
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ?
        d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], g = b; g < c; g++) e.push(this.get(g));
      return new n(e)
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.B(a, this.get(d), d, this)) return !0;
      return !1
    },
    sort: function (a, b) {
      var c = $a(this);
      void 0 === b ? c.sort() : c.sort(function (c, d) {
        return Number(b.B(a, c, d))
      });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d)
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(this, Array.prototype.splice.call(arguments,
        1, arguments.length - 1))
    },
    toString: function () {
      return this.toString()
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
    }
  };
  var z = {
      yd: {
        ADD: 0,
        AND: 1,
        APPLY: 2,
        ASSIGN: 3,
        BREAK: 4,
        CASE: 5,
        CONTINUE: 6,
        CONTROL: 49,
        CREATE_ARRAY: 7,
        CREATE_OBJECT: 8,
        DEFAULT: 9,
        DEFN: 50,
        DIVIDE: 10,
        DO: 11,
        EQUALS: 12,
        EXPRESSION_LIST: 13,
        FN: 51,
        FOR: 14,
        FOR_IN: 47,
        GET: 15,
        GET_CONTAINER_VARIABLE: 48,
        GET_INDEX: 16,
        GET_PROPERTY: 17,
        GREATER_THAN: 18,
        GREATER_THAN_EQUALS: 19,
        IDENTITY_EQUALS: 20,
        IDENTITY_NOT_EQUALS: 21,
        IF: 22,
        LESS_THAN: 23,
        LESS_THAN_EQUALS: 24,
        MODULUS: 25,
        MULTIPLY: 26,
        NEGATE: 27,
        NOT: 28,
        NOT_EQUALS: 29,
        NULL: 45,
        OR: 30,
        PLUS_EQUALS: 31,
        POST_DECREMENT: 32,
        POST_INCREMENT: 33,
        PRE_DECREMENT: 34,
        PRE_INCREMENT: 35,
        QUOTE: 46,
        RETURN: 36,
        SET_PROPERTY: 43,
        SUBTRACT: 37,
        SWITCH: 38,
        TERNARY: 39,
        TYPEOF: 40,
        UNDEFINED: 44,
        VAR: 41,
        WHILE: 42
      }
    },
    bb = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
    cb = new ja("break"),
    db = new ja("continue");
  z.add = function (a, b) {
    return this.evaluate(a) + this.evaluate(b)
  };
  z.and = function (a, b) {
    return this.evaluate(a) && this.evaluate(b)
  };
  z.apply = function (a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof n)) throw Error("Error: Non-List argument given to Apply instruction.");
    if (null === a || void 0 === a) throw Error("TypeError: Can't read property " + b + " of " + a + ".");
    if ("boolean" == typeof a || "number" == typeof a) {
      if ("toString" == b) return a.toString();
      throw Error("TypeError: " + a + "." + b + " is not a function.");
    }
    if ("string" == typeof a) {
      if (0 <= xa(bb, b)) return Xa(a[b].apply(a, $a(c)));
      throw Error("TypeError: " + b + " is not a function");
    }
    if (a instanceof n) {
      if (a.has(b)) {
        var d = a.get(b);
        if (d instanceof x) {
          var e = $a(c);
          e.unshift(this.H());
          return d.B.apply(d, e)
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (0 <= xa(ab.wg, b)) {
        var g = $a(c);
        g.unshift(this.H());
        return ab[b].apply(a, g)
      }
    }
    if (a instanceof x || a instanceof Oa) {
      if (a.has(b)) {
        var h = a.get(b);
        if (h instanceof x) {
          var k = $a(c);
          k.unshift(this.H());
          return h.B.apply(h, k)
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if ("toString" == b) return a instanceof x ? a.getName() : a.toString();
      if ("hasOwnProperty" ==
        b) return a.has.apply(a, $a(c))
    }
    throw Error("TypeError: Object has no '" + b + "' property.");
  };
  z.assign = function (a, b) {
    a = this.evaluate(a);
    if ("string" != typeof a) throw Error("Invalid key name given for assignment.");
    var c = this.H();
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d
  };
  z["break"] = function () {
    return cb
  };
  z["case"] = function (a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof ja) return d
    }
  };
  z["continue"] = function () {
    return db
  };
  z.df = function (a, b, c) {
    var d = new n;
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var g = [z.yd.FN, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
    this.H().set(a, this.evaluate(g))
  };
  z.hf = function (a, b) {
    return this.evaluate(a) / this.evaluate(b)
  };
  z.lf = function (a, b) {
    return this.evaluate(a) == this.evaluate(b)
  };
  z.nf = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = this.evaluate(arguments[c]);
    return b
  };
  z.rf = function (a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H();
    if ("string" == typeof b)
      for (var e = 0; e < b.length; e++) {
        d.set(a, e);
        var g = this.Ua(c);
        if (g instanceof ja) {
          if ("break" == g.C) break;
          if ("return" == g.C) return g
        }
      } else if (b instanceof Oa || b instanceof n || b instanceof x)
        for (var h = b.da(), k = h.length(), l = 0; l < k; l++) {
          d.set(a, h.get(l));
          var m = this.Ua(c);
          if (m instanceof ja) {
            if ("break" == m.C) break;
            if ("return" == m.C) return m
          }
        }
  };
  z.get = function (a) {
    return this.H().get(this.evaluate(a))
  };
  z.sd = function (a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
    a instanceof Oa || a instanceof n || a instanceof x ? c = a.get(b) : "string" == typeof a && ("length" == b ? c = a.length : ka(b) && (c = a[b]));
    return c
  };
  z.vf = function (a, b) {
    return this.evaluate(a) > this.evaluate(b)
  };
  z.wf = function (a, b) {
    return this.evaluate(a) >= this.evaluate(b)
  };
  z.Df = function (a, b) {
    return this.evaluate(a) === this.evaluate(b)
  };
  z.Ef = function (a, b) {
    return this.evaluate(a) !== this.evaluate(b)
  };
  z["if"] = function (a, b, c) {
    var d = [];
    this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
    var e = this.Ua(d);
    if (e instanceof ja) return e
  };
  z.Mf = function (a, b) {
    return this.evaluate(a) < this.evaluate(b)
  };
  z.Nf = function (a, b) {
    return this.evaluate(a) <= this.evaluate(b)
  };
  z.Rf = function (a, b) {
    return this.evaluate(a) % this.evaluate(b)
  };
  z.multiply = function (a, b) {
    return this.evaluate(a) * this.evaluate(b)
  };
  z.Sf = function (a) {
    return -this.evaluate(a)
  };
  z.Tf = function (a) {
    return !this.evaluate(a)
  };
  z.Uf = function (a, b) {
    return this.evaluate(a) != this.evaluate(b)
  };
  z["null"] = function () {
    return null
  };
  z.or = function (a, b) {
    return this.evaluate(a) || this.evaluate(b)
  };
  z.Ld = function (a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c
  };
  z.Md = function (a) {
    return this.evaluate(a)
  };
  z.quote = function (a) {
    return Array.prototype.slice.apply(arguments)
  };
  z["return"] = function (a) {
    return new ja("return", this.evaluate(a))
  };
  z.setProperty = function (a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
    (a instanceof x || a instanceof n || a instanceof Oa) && a.set(b, c);
    return c
  };
  z.vg = function (a, b) {
    return this.evaluate(a) - this.evaluate(b)
  };
  z["switch"] = function (a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!wa(b) || !wa(c)) throw Error("Error: Malformed switch instruction.");
    for (var d, e = !1, g = 0; g < b.length; g++)
      if (e || a === this.evaluate(b[g]))
        if (d = this.evaluate(c[g]), d instanceof ja) {
          var h = d.C;
          if ("break" == h) return;
          if ("return" == h || "continue" == h) return d
        } else e = !0;
    if (c.length == b.length + 1 && (d = this.evaluate(c[c.length - 1]), d instanceof ja && ("return" == d.C || "continue" == d.C))) return d
  };
  z.xg = function (a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
  };
  z["typeof"] = function (a) {
    a = this.evaluate(a);
    return a instanceof x ? "function" : typeof a
  };
  z.undefined = function () {};
  z["var"] = function (a) {
    for (var b = this.H(), c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      "string" != typeof d || b.add(d, void 0)
    }
  };
  z["while"] = function (a, b, c, d) {
    var e, g = this.evaluate(d);
    if (this.evaluate(c) && (e = this.Ua(g), e instanceof ja)) {
      if ("break" == e.C) return;
      if ("return" == e.C) return e
    }
    for (; this.evaluate(a);) {
      e = this.Ua(g);
      if (e instanceof ja) {
        if ("break" == e.C) break;
        if ("return" == e.C) return e
      }
      this.evaluate(b)
    }
  };
  var fb = function () {
    this.xd = !1;
    this.A = new Za;
    eb(this);
    this.xd = !0
  };
  fb.prototype.Jf = function () {
    return this.xd
  };
  fb.prototype.isInitialized = fb.prototype.Jf;
  fb.prototype.M = function (a) {
    this.A.I.Ed(String(a[0])) || (this.A.I.reset(), this.A.I.Pd(!0));
    return this.A.xc(a)
  };
  fb.prototype.execute = fb.prototype.M;
  fb.prototype.N = function () {
    this.A.N()
  };
  fb.prototype.makeImmutable = fb.prototype.N;
  var eb = function (a) {
    function b(a, b) {
      e.A.fd(a, String(b))
    }

    function c(a, b) {
      e.A.ba(String(d[a]), b)
    }
    var d = z.yd,
      e = a;
    b("control", d.CONTROL);
    b("fn", d.FN);
    b("list", d.CREATE_ARRAY);
    b("map", d.CREATE_OBJECT);
    b("undefined", d.UNDEFINED);
    c("ADD", z.add);
    c("AND", z.and);
    c("APPLY", z.apply);
    c("ASSIGN", z.assign);
    c("BREAK", z["break"]);
    c("CASE", z["case"]);
    c("CONTINUE", z["continue"]);
    c("DEFAULT", z["case"]);
    c("DEFN", z.df);
    c("DIVIDE", z.hf);
    c("EQUALS", z.lf);
    c("EXPRESSION_LIST", z.nf);
    c("FOR_IN", z.rf);
    c("GET", z.get);
    c("GET_INDEX",
      z.sd);
    c("GET_PROPERTY", z.sd);
    c("GREATER_THAN", z.vf);
    c("GREATER_THAN_EQUALS", z.wf);
    c("IDENTITY_EQUALS", z.Df);
    c("IDENTITY_NOT_EQUALS", z.Ef);
    c("IF", z["if"]);
    c("LESS_THAN", z.Mf);
    c("LESS_THAN_EQUALS", z.Nf);
    c("MODULUS", z.Rf);
    c("MULTIPLY", z.multiply);
    c("NEGATE", z.Sf);
    c("NOT", z.Tf);
    c("NOT_EQUALS", z.Uf);
    c("NULL", z["null"]);
    c("OR", z.or);
    c("POST_DECREMENT", z.Ld);
    c("POST_INCREMENT", z.Ld);
    c("PRE_DECREMENT", z.Md);
    c("PRE_INCREMENT", z.Md);
    c("QUOTE", z.quote);
    c("RETURN", z["return"]);
    c("SET_PROPERTY", z.setProperty);
    c("SUBTRACT", z.vg);
    c("SWITCH", z["switch"]);
    c("TERNARY", z.xg);
    c("TYPEOF", z["typeof"]);
    c("VAR", z["var"]);
    c("WHILE", z["while"])
  };
  fb.prototype.ba = function (a, b) {
    this.A.ba(a, b)
  };
  fb.prototype.addInstruction = fb.prototype.ba;
  fb.prototype.L = function () {
    return this.A.L()
  };
  fb.prototype.getQuota = fb.prototype.L;
  fb.prototype.Fb = function () {
    this.A.Fb()
  };
  fb.prototype.resetQuota = fb.prototype.Fb;
  fb.prototype.Ia = function (a) {
    this.A.I.Ia(a)
  };
  fb.prototype.Ja = function (a) {
    this.A.I.Ja(a)
  };
  fb.prototype.vb = function (a, b, c) {
    this.A.I.gd(a, b, c)
  };
  fb.prototype.S = function (a) {
    this.A.S(a)
  };
  var gb = function () {
    this.Cb = {}
  };
  gb.prototype.get = function (a) {
    return this.Cb.hasOwnProperty(a) ? this.Cb[a] : void 0
  };
  gb.prototype.add = function (a, b) {
    if (this.Cb.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
    if (!b) throw "Attempting to add an undefined function: " + a + ".";
    var c = new x(a, function () {
      for (var a = Array.prototype.slice.call(arguments, 0), c = 0; c < a.length; c++) a[c] = this.evaluate(a[c]);
      return b.apply(this, a)
    });
    c.N();
    this.Cb[a] = c
  };
  gb.prototype.addAll = function (a) {
    for (var b in a) a.hasOwnProperty(b) && this.add(b, a[b])
  };
  var B = window,
    C = document,
    hb = navigator,
    lb = C.currentScript && C.currentScript.src,
    mb = function (a, b) {
      var c = B[a];
      B[a] = void 0 === c ? b : c;
      return B[a]
    },
    nb = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b())
      })
    },
    ob = function (a, b, c) {
      var d = C.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      d.src = a;
      nb(d, b);
      c && (d.onerror = c);
      fa() && d.setAttribute("nonce", fa());
      var e = C.getElementsByTagName("script")[0] || C.body || C.head;
      e.parentNode.insertBefore(d, e);
      return d
    },
    pb = function () {
      if (lb) {
        var a = lb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3
      }
      return 1
    },
    qb = function (a, b) {
      var c = C.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = C.body && C.body.lastChild || C.body || C.head;
      d.parentNode.insertBefore(c, d);
      nb(c, b);
      void 0 !== a && (c.src = a);
      return c
    },
    rb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b()
      };
      d.onerror =
        function () {
          d.onerror = null;
          c && c()
        };
      d.src = a
    },
    sb = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    tb = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    E = function (a) {
      B.setTimeout(a, 0)
    },
    vb = function (a) {
      var b = C.getElementById(a);
      if (b && ub(b, "id") != a)
        for (var c = 1; c < document.all[a].length; c++)
          if (ub(document.all[a][c], "id") == a) return document.all[a][c];
      return b
    },
    ub = function (a, b) {
      return a && b && a.attributes &&
        a.attributes[b] ? a.attributes[b].value : null
    },
    wb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b
    },
    xb = function (a) {
      var b = C.createElement("div");
      b.innerHTML = "A<div>" + a + "</div>";
      b = b.lastChild;
      for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
      return c
    },
    yb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var g = a, h = 0; g && h <= c; h++) {
        if (d[String(g.tagName).toLowerCase()]) return g;
        g = g.parentElement
      }
      return null
    },
    Ab = function (a) {
      hb.sendBeacon && hb.sendBeacon(a) || rb(a)
    };
  var Bb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var Cb = /:[0-9]+$/,
    Db = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var g = d[e].split("=");
        if (decodeURIComponent(g[0]).replace(/\+/g, " ") == b) {
          var h = g.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
        }
      }
    },
    Fb = function (a, b, c, d, e) {
      var g, h = function (a) {
          return a ? a.replace(":", "").toLowerCase() : ""
        },
        k = h(a.protocol) || h(B.location.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          g = Eb(a);
          break;
        case "protocol":
          g = k;
          break;
        case "host":
          g = (a.hostname || B.location.hostname).replace(Cb,
            "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(g);
            l && l[0] && (g = g.substr(l[0].length))
          }
          break;
        case "port":
          g = String(Number(a.hostname ? a.port : B.location.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
          break;
        case "path":
          g = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = g.split("/");
          0 <= xa(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
          g = m.join("/");
          break;
        case "query":
          g = a.search.replace("?", "");
          e && (g = Db(g, e));
          break;
        case "extension":
          var p = a.pathname.split(".");
          g = 1 < p.length ? p[p.length - 1] : "";
          g = g.split("/")[0];
          break;
        case "fragment":
          g = a.hash.replace("#", "");
          break;
        default:
          g = a && a.href
      }
      return g
    },
    Eb = function (a) {
      var b = "";
      a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
      return b
    },
    H = function (a) {
      var b = C.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (c = "/" + c);
      var d = b.hostname.replace(Cb, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      }
    };
  var Gb = function (a, b, c) {
      for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
        var h = e[g].split("="),
          k = h[0].replace(/^\s*|\s*$/g, "");
        if (k && k == a) {
          var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
          l && c && (l = decodeURIComponent(l));
          d.push(l)
        }
      }
      return d
    },
    Jb = function (a, b, c, d) {
      var e = Hb(a, d);
      if (1 === e.length) return e[0].id;
      if (0 !== e.length) {
        e = Ib(e, function (a) {
          return a.jf
        }, b);
        if (1 === e.length) return e[0].id;
        e = Ib(e, function (a) {
          return a.$f
        }, c);
        return e[0] ? e[0].id : void 0
      }
    },
    Mb = function (a, b, c, d, e,
      g) {
      c = c || "/";
      var h = d = d || "auto",
        k = c;
      if (Kb.test(document.location.hostname) || "/" === k && Lb.test(h)) return !1;
      g && (b = encodeURIComponent(b));
      var l = b;
      l && 1200 < l.length && (l = l.substring(0, 1200));
      b = l;
      var m = a + "=" + b + "; path=" + c + "; ";
      void 0 !== e && (m += "expires=" + e.toUTCString() + "; ");
      if ("auto" === d) {
        var p = !1,
          q;
        a: {
          var r = [],
            u = document.location.hostname.split(".");
          if (4 === u.length) {
            var w = u[u.length - 1];
            if (parseInt(w, 10).toString() === w) {
              q = ["none"];
              break a
            }
          }
          for (var v = u.length - 2; 0 <= v; v--) r.push(u.slice(v).join("."));r.push("none");
          q = r
        }
        for (var D = q, G = 0; G < D.length && !p; G++) p = Mb(a, b, c, D[G], e);
        return p
      }
      d && "none" !== d && (m += "domain=" + d + ";");
      var A = document.cookie;
      document.cookie = m;
      return A != document.cookie || 0 <= Gb(a).indexOf(b)
    };

  function Ib(a, b, c) {
    for (var d = [], e = [], g, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
    }
    return 0 < d.length ? d : e
  }

  function Hb(a, b) {
    for (var c = [], d = Gb(a), e = 0; e < d.length; e++) {
      var g = d[e].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k && (k = k.split("-"), c.push({
          id: g.join("."),
          jf: 1 * k[0] || 1,
          $f: 1 * k[1] || 1
        }))
      }
    }
    return c
  }
  var Lb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Kb = /(^|\.)doubleclick\.net$/i;
  var Pb = function () {
      this.Fa = new fb;
      var a = new gb;
      a.addAll(Nb());
      Ob(this, function (b) {
        return a.get(b)
      })
    },
    Nb = function () {
      return {
        callInWindow: Qb,
        callLater: Rb,
        copyFromWindow: Sb,
        createQueue: Tb,
        createArgumentsQueue: Ub,
        encodeURI: Vb,
        encodeURIComponent: Wb,
        getCookieValues: Xb,
        getReferrer: Yb,
        getUrl: Zb,
        getUrlFragment: $b,
        isPlainObject: ac,
        injectHiddenIframe: bc,
        injectScript: cc,
        logToConsole: ec,
        queryPermission: fc,
        removeUrlFragment: gc,
        replaceAll: hc,
        sendPixel: ic,
        setInWindow: jc
      }
    };
  Pb.prototype.M = function (a) {
    return this.Fa.M(a)
  };
  Pb.prototype.execute = Pb.prototype.M;
  var Ob = function (a, b) {
    a.Fa.ba("require", b)
  };
  Pb.prototype.Ia = function (a) {
    this.Fa.Ia(a)
  };
  Pb.prototype.Ja = function (a) {
    this.Fa.Ja(a)
  };
  Pb.prototype.vb = function (a, b, c) {
    this.Fa.vb(a, b, c)
  };
  Pb.prototype.S = function (a) {
    this.Fa.S(a)
  };

  function Qb(a, b) {
    Ra(["path:!string"], [a]);
    for (var c = a.split("."), d = B, e = d[c[0]], g = 1; e && g < c.length; g++) d = e, e = e[c[g]];
    if ("function" == Ta(e)) {
      for (var h = [], k = 1; k < arguments.length; k++) h.push(Wa(arguments[k]));
      e.apply(d, h)
    }
  }

  function Rb(a) {
    Ra(["fn:!Fn"], arguments);
    var b = this.H();
    E(function () {
      a instanceof x && a.ka(b)
    })
  }

  function Sb(a) {
    Ra(["path:!string"], arguments);
    this.F().assert("access_globals", "read", a);
    var b = a.split("."),
      c = B,
      d;
    for (d = 0; d < b.length - 1; d++)
      if (c = c[b[d]], void 0 === c || null === c) return;
    return Xa(c[b[d]])
  }

  function Xb(a) {
    Ra(["name:!string"], arguments);
    this.F().assert("get_cookies", a);
    return Gb(a)
  }

  function Yb() {
    return C.referrer
  }

  function Zb(a, b, c, d) {
    Ra(["component:?string", "stripWww:?boolean", "defaultPages:?List", "queryKey:?string"], arguments);
    this.F().assert("get_url", a, d);
    var e = B.location.href,
      g;
    if (c) {
      g = [];
      for (var h = 0; h < c.length(); h++) {
        var k = c.get(h);
        "string" == typeof k && g.push(k)
      }
    }
    return Fb(H(e), a, b, g, d)
  }

  function $b(a) {
    Ra(["url:!string"], arguments);
    return Fb(H(a), "fragment")
  }

  function ac(a) {
    return a instanceof Oa
  }

  function bc(a, b) {
    Ra(["url:!string", "onSuccess:?Fn"], arguments);
    this.F().assert("inject_hidden_iframe", a);
    var c = this.H();
    qb(a, function () {
      b instanceof x && b.ka(c)
    })
  }
  var kc = {};

  function cc(a, b, c, d) {
    Ra(["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
    this.F().assert("inject_script", a);
    var e = this.H(),
      g = function () {
        b instanceof x && b.ka(e)
      },
      h = function () {
        c instanceof x && c.ka(e)
      };
    if (d) {
      var k = d;
      kc[k] ? (kc[k].onSuccess.push(g), kc[k].onFailure.push(h)) : (kc[k] = {
        onSuccess: [g],
        onFailure: [h]
      }, g = function () {
        for (var a = kc[k].onSuccess, b = 0; b < a.length; b++) E(a[b]);
        a.push = function (a) {
          E(a);
          return 0
        }
      }, h = function () {
        for (var a = kc[k].onFailure, b = 0; b < a.length; b++) E(a[b]);
        kc[k] = null
      }, ob(a, g, h))
    } else ob(a, g, h)
  }

  function ec() {
    try {
      this.F().assert("logging")
    } catch (c) {
      return
    }
    for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = Wa(a[b]);
    console.log.apply(console, a)
  }

  function gc(a) {
    return Eb(H(a))
  }

  function hc(a, b, c) {
    Ra(["string:!string", "regex:!string", "replacement:!string"], arguments);
    return a.replace(new RegExp(b, "g"), c)
  }

  function ic(a, b, c) {
    Ra(["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
    this.F().assert("send_pixel", a);
    var d = this.H();
    rb(a, function () {
      b instanceof x && b.ka(d)
    }, function () {
      c instanceof x && c.ka(d)
    })
  }

  function jc(a, b, c) {
    Ra(["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
    this.F().assert("access_globals", "readwrite", a);
    var d = a.split("."),
      e = B,
      g;
    for (g = 0; g < d.length - 1; g++)
      if (e = e[d[g]], void 0 === e) return !1;
    return void 0 === e[d[g]] || c ? (e[d[g]] = Wa(b), !0) : !1
  }

  function Tb(a) {
    Ra(["path:!string"], arguments);
    this.F().assert("access_globals", "readwrite", a);
    var b = lc(a),
      c = a.split(".").pop(),
      d = b[c];
    void 0 === d && (d = [], b[c] = d);
    return Xa(function () {
      if (!ta(d.push)) throw Error("Object at " + a + " in window is not an array.");
      mc(arguments);
      d.push.apply(d, Array.prototype.slice.call(arguments, 0))
    })
  }

  function Ub(a, b) {
    Ra(["functionPath:!string", "arrayPath:!string"], arguments);
    this.F().assert("access_globals", "readwrite", a);
    this.F().assert("access_globals", "readwrite", b);
    var c = lc(a),
      d = a.split(".").pop(),
      e = c[d];
    if (e && !ta(e)) return null;
    if (e) {
      var g = e;
      e = function () {
        mc(arguments);
        g.apply(g, Array.prototype.slice.call(arguments, 0))
      };
      return Xa(e)
    }
    var h;
    e = function () {
      if (!ta(h.push)) throw Error("Object at " + b + " in window is not an array.");
      h.push.call(h, arguments)
    };
    c[d] = e;
    var k = lc(b),
      l = b.split(".").pop();
    h = k[l];
    void 0 === h && (h = [], k[l] = h);
    return Xa(function () {
      mc(arguments);
      e.apply(e, Array.prototype.slice.call(arguments, 0))
    })
  }

  function mc(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      c && ha(c) && Object.defineProperty(c, "gtm", {
        value: {
          fromContainer: !0
        }
      })
    }
  }

  function lc(a) {
    for (var b = a.split("."), c = B, d = 0; d < b.length - 1; d++)
      if (c = c[b[d]], void 0 === c) throw Error("Path " + a + " does not exist.");
    return c
  }

  function fc(a, b) {
    Ra(["permission:!string"], [a]);
    try {
      return this.F().assert.apply(null, Array.prototype.slice.call(arguments, 0)), !0
    } catch (c) {
      return !1
    }
  }

  function Vb(a) {
    Ra(["uri:!string"], arguments);
    return encodeURI(a)
  }

  function Wb(a) {
    Ra(["uri:!string"], arguments);
    return encodeURIComponent(a)
  };
  var Jc, Kc = [],
    Lc = [],
    Mc = [],
    Nc = [],
    Oc = [],
    Pc = {},
    Qc, Rc, Sc, Tc = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c
    },
    Uc = function (a, b) {
      var c = a["function"];
      if (!c) throw Error("Error: No function name given for function call.");
      var d = !!Pc[c],
        e = {},
        g;
      for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g : g.substr(4)] = a[g]);
      return d ? Pc[c](e) : Jc(c, e, b)
    },
    Wc = function (a, b, c, d) {
      c = c || [];
      d = d || sa;
      var e = {},
        g;
      for (g in a) a.hasOwnProperty(g) && (e[g] = Vc(a[g], b, c, d));
      return e
    },
    Xc = function (a) {
      var b = a["function"];
      if (!b) throw "Error: No function name given for function call.";
      var c = Pc[b];
      return c ? c.b || 0 : 0
    },
    Vc = function (a, b, c, d) {
      if (wa(a)) {
        var e;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            e = [];
            for (var g = 1; g < a.length; g++) e.push(Vc(a[g], b, c, d));
            return e;
          case "macro":
            var h = a[1];
            if (c[h]) return;
            var k = Kc[h];
            if (!k || b(k)) return;
            c[h] = !0;
            try {
              var l = Wc(k, b, c, d);
              e = Uc(l);
              Sc && (e = Sc.Ze(e, l))
            } catch (G) {
              d(h, G), e = !1
            }
            c[h] = !1;
            return e;
          case "map":
            e = {};
            for (var m = 1; m < a.length; m +=
              2) e[Vc(a[m], b, c, d)] = Vc(a[m + 1], b, c, d);
            return e;
          case "template":
            e = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Vc(a[q], b, c, d);
              Rc && (p = p || r === Rc.pb);
              e.push(r)
            }
            return Rc && p ? Rc.$e(e) : e.join("");
          case "escape":
            e = Vc(a[1], b, c, d);
            if (Rc && wa(a[1]) && "macro" === a[1][0] && Rc.Kf(a)) return Rc.cg(e);
            e = String(e);
            for (var u = 2; u < a.length; u++) nc[a[u]] && (e = nc[a[u]](e));
            return e;
          case "tag":
            var w = a[1];
            if (!Nc[w]) throw Error("Unable to resolve tag reference " + w + ".");
            return e = {
              nd: a[2],
              index: w
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v["function"] = a[1];
            var D = Yc(v, b, c, d);
            a[4] && (D = !D);
            return D;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a
    },
    Yc = function (a, b, c, d) {
      try {
        return Qc(Wc(a, b, c, d))
      } catch (e) {
        JSON.stringify(a)
      }
      return null
    };
  var Zc = null,
    cd = function (a) {
      function b(a) {
        for (var b = 0; b < a.length; b++) d[a[b]] = !0
      }
      var c = [],
        d = [];
      Zc = $c(a, ad() || function () {});
      for (var e = 0; e < Lc.length; e++) {
        var g = Lc[e],
          h = bd(g);
        if (h) {
          for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
          b(g.block || [])
        } else null === h && b(g.block || [])
      }
      for (var m = [], p = 0; p < Nc.length; p++) c[p] && !d[p] && (m[p] = !0);
      return m
    },
    bd = function (a) {
      for (var b = a["if"] || [], c = 0; c < b.length; c++) {
        var d = Zc(b[c]);
        if (!d) return null === d ? null : !1
      }
      for (var e = a.unless || [], g = 0; g < e.length; g++) {
        var h = Zc(e[g]);
        if (null ===
          h) return null;
        if (h) return !1
      }
      return !0
    },
    $c = function (a, b) {
      var c = [];
      return function (d) {
        void 0 === c[d] && (c[d] = Yc(Mc[d], a, void 0, b));
        return c[d]
      }
    };
  /*
       Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
  var fd = {},
    gd = null;
  fd.o = "UA-74284223-4";
  fd.tb = "bc0";
  var hd = "www.googletagmanager.com/gtm.js";
  hd = "www.googletagmanager.com/gtag/js";
  var id = hd,
    jd = null,
    kd = null,
    ld = "//www.googletagmanager.com/a?id=" + fd.o + "&cv=1",
    md = {},
    nd = {},
    od = function () {
      var a = gd.sequence || 0;
      gd.sequence = a + 1;
      return a
    };
  var J = function (a, b, c, d) {
      return (2 === pd() || d || "http:" != B.location.protocol ? a : b) + c
    },
    pd = function () {
      var a = pb(),
        b;
      if (1 === a) a: {
        var c = id;c = c.toLowerCase();
        for (var d = "https://" + c, e = "http://" + c, g = 1, h = C.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
          var l = h[k].src;
          if (l) {
            l = l.toLowerCase();
            if (0 === l.indexOf(e)) {
              b = 3;
              break a
            }
            1 === g && 0 === l.indexOf(d) && (g = 2)
          }
        }
        b = g
      }
      else b = a;
      return b
    };
  var qd = !1;
  var rd = function (a, b, c, d) {
    if (c) {
      d = d || {};
      var e = B._googWcmImpl || function () {
        e.q = e.q || [];
        e.q.push(arguments)
      };
      B._googWcmImpl = e;
      void 0 === B._googWcmAk && (B._googWcmAk = a);
      qd ? d.Ea && E(d.Ea) : (ob(J("https://", "http://", "www.gstatic.com/wcm/loader.js"), d.Ea, d.Hd), qd = !0);
      var g = {
        ak: a,
        cl: b
      };
      void 0 === d.Td && (g.autoreplace = c);
      e(2, d.Td, g, c, 0, new Date, d.Bg)
    }
  };
  var N = function () {
    var a = function (a) {
      return {
        toString: function () {
          return a
        }
      }
    };
    return {
      Jc: a("convert_case_to"),
      Kc: a("convert_false_to"),
      Lc: a("convert_null_to"),
      Mc: a("convert_true_to"),
      Nc: a("convert_undefined_to"),
      wa: a("function"),
      qe: a("instance_name"),
      se: a("live_only"),
      te: a("malware_disabled"),
      ue: a("once_per_event"),
      ad: a("once_per_load"),
      bd: a("setup_tags"),
      ve: a("tag_id"),
      cd: a("teardown_tags")
    }
  }();
  var sd = new Ga,
    td = {},
    wd = {
      set: function (a, b) {
        y(ud(a, b), td)
      },
      get: function (a) {
        return vd(a, 2)
      },
      reset: function () {
        sd = new Ga;
        td = {}
      }
    },
    vd = function (a, b) {
      return 2 != b ? sd.get(a) : xd(a)
    },
    xd = function (a, b, c) {
      var d = a.split(".");
      var e = function (a, b) {
        for (var c = 0; void 0 !== a && c < d.length; c++) {
          if (null === a) return !1;
          a = a[d[c]]
        }
        return void 0 !== a || 1 < c ? a : b.length ? e(yd(b.pop()), b) : zd(d)
      };
      return e(td.eventModel, [b, c]);
      return zd(d)
    },
    zd = function (a) {
      for (var b = td, c = 0; c < a.length; c++) {
        if (null ===
          b) return !1;
        if (void 0 === b) break;
        b = b[a[c]]
      }
      return b
    };
  var Ad = function (a, b) {
      return xd(a, b, void 0)
    },
    yd = function (a) {
      if (a) {
        var b = zd(["gtag", "targets", a]);
        return Va(b) ? b : void 0
      }
    },
    Cd = function (a, b) {
      function c(a) {
        if (a)
          for (var b in a) a.hasOwnProperty(b) && (d[b] = null)
      }
      var d = {};
      c(td);
      delete d.eventModel;
      c(yd(a));
      c(yd(b));
      c(td.eventModel);
      var e = [],
        g;
      for (g in d) d.hasOwnProperty(g) && e.push(g);
      return e
    };
  var Dd = function (a, b) {
      sd.set(a, b);
      y(ud(a, b), td)
    },
    ud = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
      d[e[e.length - 1]] = b;
      return c
    };
  var Ed = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Fd = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    Gd = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    };
  var Hd = function (a) {
    var b = vd("gtm.whitelist");
    b = ["google", "gtagfl", "lcl", "oid", "op"];
    var c = b && La(Da(b), Fd),
      d = vd("gtm.blacklist") || vd("tagTypeBlacklist") || [];
    Ed.test(B.location && B.location.hostname) && (d = Da(d), d.push("nonGooglePixels", "nonGoogleScripts"));
    var e = d && La(Da(d), Gd),
      g = {};
    return function (h) {
      var k = h && h[N.wa];
      if (!k || "string" != typeof k) return !0;
      k = k.replace(/^_*/, "");
      if (void 0 !== g[k]) return g[k];
      var l = nd[k] || [],
        m = a(k);
      if (b) {
        var p;
        if (p = m) a: {
          if (0 > xa(c, k))
            if (l && 0 < l.length)
              for (var q = 0; q < l.length; q++) {
                if (0 > xa(c, l[q])) {
                  p = !1;
                  break a
                }
              } else {
                p = !1;
                break a
              }
          p = !0
        }
        m = p
      }
      var r = !1;
      if (d) {
        var u;
        if (!(u = 0 <= xa(e, k))) a: {
          for (var w = l || [], v = new Ga, D = 0; D < e.length; D++) v.set(e[D], !0);
          for (var G = 0; G < w.length; G++)
            if (v.get(w[G])) {
              u = !0;
              break a
            } u = !1
        }
        r = u
      }
      return g[k] = !m || r
    }
  };
  var Id = {
    Ze: function (a, b) {
      b[N.Jc] && "string" === typeof a && (a = 1 == b[N.Jc] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(N.Lc) && null === a && (a = b[N.Lc]);
      b.hasOwnProperty(N.Nc) && void 0 === a && (a = b[N.Nc]);
      b.hasOwnProperty(N.Mc) && !0 === a && (a = b[N.Mc]);
      b.hasOwnProperty(N.Kc) && !1 === a && (a = b[N.Kc]);
      return a
    }
  };
  var Jd = function (a, b, c) {
    this.ag = a;
    this.Zf = b;
    this.Qf = c
  };
  ia(Jd, Error);
  Jd.prototype.getParameters = function () {
    return this.Zf
  };
  var Kd = {
      active: !0,
      isWhitelisted: function () {
        return !0
      }
    },
    Ld = function (a) {
      var b = gd.zones;
      !b && a && (b = gd.zones = a());
      return b
    };
  var Md = !1,
    Nd = 0,
    Od = [];

  function Pd(a) {
    if (!Md) {
      var b = C.createEventObject,
        c = "complete" == C.readyState,
        d = "interactive" == C.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Md = !0;
        for (var e = 0; e < Od.length; e++) E(Od[e])
      }
      Od.push = function () {
        for (var a = 0; a < arguments.length; a++) E(arguments[a]);
        return 0
      }
    }
  }

  function Qd() {
    if (!Md && 140 > Nd) {
      Nd++;
      try {
        C.documentElement.doScroll("left"), Pd()
      } catch (a) {
        B.setTimeout(Qd, 50)
      }
    }
  }
  var Rd = function (a) {
    Md ? a() : Od.push(a)
  };
  var Sd = function () {
    function a(a) {
      return !va(a) || 0 > a ? 0 : a
    }
    if (!gd._li && B.performance && B.performance.timing) {
      var b = B.performance.timing.navigationStart,
        c = va(wd.get("gtm.start")) ? wd.get("gtm.start") : 0;
      gd._li = {
        cst: a(c - b),
        cbt: a(jd - b)
      }
    }
  };
  var Td = !1,
    Ud = function () {
      return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject]
    };
  var Vd = function (a) {
      B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
      var b = B.GoogleAnalyticsObject;
      if (!B[b]) {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments)
        };
        c.l = Number(new Date);
        B[b] = c
      }
      Sd();
      return B[b]
    },
    Wd = function (a, b, c, d) {
      b = String(b).replace(/\s+/g, "").split(",");
      var e = Ud();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d)
    };
  var Xd = !1;
  var Yd = function (a, b, c) {
    if (b) {
      c = c || {};
      var d = B._gaPhoneImpl || function () {
        d.q = d.q || [];
        d.q.push(arguments)
      };
      B._gaPhoneImpl = d;
      void 0 === B.ga_wpid && (B.ga_wpid = a);
      Xd ? c.Ea && E(c.Ea) : (ob(J("https://", "http://", "www.gstatic.com/gaphone/loader.js"), c.Ea, c.Hd), Xd = !0);
      var e = {};
      void 0 !== c.qd ? e.receiver = c.qd : e.replace = b;
      e.ga_wpid = a;
      e.destination = b;
      d(2, new Date, e)
    }
  };
  var ce = function (a) {};

  function be(a, b) {
    b.containerId = fd.o;
    return {
      type: a,
      value: b
    }
  };
  var de = function () {
      return "&tc=" + Nc.filter(function (a) {
        return a
      }).length
    },
    me = function () {
      ee && (B.clearTimeout(ee), ee = void 0);
      void 0 === fe || ge[fe] && !he || (ie[fe] || je.Lf() || 0 >= ke-- ? ie[fe] = !0 : (je.jg(), rb(le()), ge[fe] = !0, he = ""))
    },
    le = function () {
      var a = fe;
      return void 0 === a ? "" : [ne, ge[a] ? "" : "&es=1", oe[a], de(), he, "&z=0"].join("")
    },
    pe = function () {
      return [ld, "&v=3&t=t", "&pid=" + za(), "&rv=" + fd.tb].join("")
    },
    qe = "0.005000" > Math.random(),
    ne = pe(),
    re = function () {
      ne = pe()
    },
    ge = {},
    he = "",
    fe = void 0,
    oe = {},
    ie = {},
    ee =
    void 0,
    je = function (a, b) {
      var c = 0,
        d = 0;
      return {
        Lf: function () {
          if (c < a) return !1;
          Fa() - d >= b && (c = 0);
          return c >= a
        },
        jg: function () {
          Fa() - d >= b && (c = 0);
          c++;
          d = Fa()
        }
      }
    }(2, 1E3),
    ke = 1E3,
    se = function (a, b, c) {
      if (qe && !ie[a] && b) {
        a !== fe && (me(), fe = a);
        var d = c + String(b[N.wa] || "").replace(/_/g, "");
        he = he ? he + "." + d : "&tr=" + d;
        ee || (ee = B.setTimeout(me, 500));
        2022 <= le().length && me()
      }
    };

  function te(a, b, c, d, e, g) {
    var h = Nc[a],
      k = ue(a, b, c, d, e, g);
    if (!k) return null;
    var l = Vc(h[N.bd], g.ia, [], ve());
    if (l && l.length) {
      var m = l[0];
      k = te(m.index, b, k, 1 === m.nd ? e : k, e, g)
    }
    return k
  }

  function ue(a, b, c, d, e, g) {
    function h() {
      if (k[N.te]) d();
      else {
        var b = Wc(k, g.ia, [], l),
          e = !1;
        b.vtp_gtmOnSuccess = function () {
          if (!e) {
            e = !0;
            se(g.id, Nc[a], "5");
            c()
          }
        };
        b.vtp_gtmOnFailure = function () {
          if (!e) {
            e = !0;
            se(g.id, Nc[a], "6");
            d()
          }
        };
        b.vtp_gtmTagId = k.tag_id;
        se(g.id, k, "1");
        var h = function (a) {
          if (a instanceof we) throw a;
          ce(a);
          se(g.id, k, "7");
          e || (e = !0, d());
          throw new we(a);
        };
        try {
          Uc(b, h)
        } catch (I) {
          try {
            h(I)
          } catch (O) {}
        }
      }
    }
    var k = Nc[a];
    if (g.ia(k)) return null;
    var l = ve(),
      m = Vc(k[N.cd], g.ia, [], l);
    if (m && m.length) {
      var p = m[0],
        q = te(p.index, b, c, d, e, g);
      if (!q) return null;
      c = q;
      d = 2 === p.nd ? e : q
    }
    if (k[N.ad] || k[N.ue]) {
      var r = k[N.ad] ? Oc : b,
        u = c,
        w = d;
      if (!r[a]) {
        h = Ia(h);
        var v = xe(a, r, h);
        c = v.X;
        d = v.Da
      }
      return function () {
        r[a](u, w)
      }
    }
    return h
  }

  function xe(a, b, c) {
    var d = [],
      e = [];
    b[a] = ye(d, e, c);
    return {
      X: function () {
        b[a] = ze;
        for (var c = 0; c < d.length; c++) d[c]()
      },
      Da: function () {
        b[a] = Ae;
        for (var c = 0; c < e.length; c++) e[c]()
      }
    }
  }

  function ye(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c()
    }
  }

  function ze(a) {
    a()
  }

  function Ae(a, b) {
    b()
  }

  function ve() {
    return function (a, b) {
      ce(b)
    }
  }
  var we = function () {};
  ia(we, Error);

  function Be(a) {
    var b = 0,
      c = 0,
      d = !1;
    return {
      add: function () {
        c++;
        return Ia(function () {
          b++;
          d && b >= c && a()
        })
      },
      He: function () {
        d = !0;
        b >= c && a()
      }
    }
  }

  function Ce(a, b) {
    var c, d = b.b,
      e = a.b;
    c = d > e ? 1 : d < e ? -1 : 0;
    var g;
    if (0 !== c) g = c;
    else {
      var h = a.Rd,
        k = b.Rd;
      g = h > k ? 1 : h < k ? -1 : 0
    }
    return g
  }

  function De(a, b) {
    if (!qe) return;
    var c = function (a) {
      var d = b.ia(Nc[a]) ? "3" : "4",
        g = Vc(Nc[a][N.bd], b.ia, [], sa);
      g && g.length && c(g[0].index);
      se(b.id, Nc[a], d);
      var h = Vc(Nc[a][N.cd], b.ia, [], sa);
      h && h.length && c(h[0].index)
    };
    c(a);
  }
  var Ee = !1;

  function ad() {
    return function (a, b) {
      ce(b)
    }
  }
  var Fe = function (a, b) {
    var c = Tc(a, b),
      d;
    for (d in void 0)(void 0).hasOwnProperty(d) && (c[d] = (void 0)[d]);
    Nc.push(c);
    return Nc.length - 1
  };
  var T = {
    Nb: "event_callback",
    Ob: "event_timeout"
  };
  T.Y = "gtag.config", T.Kb = "page_view", T.Ud = "user_engagement", T.Z = "allow_ad_personalization_signals", T.Vd = "allow_custom_scripts", T.Wd = "allow_display_features", T.fb = "client_id", T.oa = "cookie_domain", T.gb = "cookie_expires", T.qa = "cookie_name", T.ra = "cookie_path", T.sa = "currency", T.hb = "custom_params", T.Zd = "custom_map", T.Pb = "groups", T.ib = "language", T.Yd = "country", T.Fg = "non_interaction", T.mb = "page_location", T.nb = "page_referrer", T.Wc = "page_title", T.Oa = "send_page_view", T.va = "send_to", T.Tb = "session_duration", T.Ub =
    "session_engaged", T.ob = "session_id", T.Vb = "session_number", T.oe = "tracking_id", T.Wb = "user_properties", T.Na = "linker", T.jb = "accept_incoming", T.J = "domains", T.lb = "url_position", T.kb = "decorate_forms", T.Sb = "phone_conversion_number", T.Qb = "phone_conversion_callback", T.Rb = "phone_conversion_css_class", T.Xc = "phone_conversion_options", T.Oc = "aw_remarketing", T.Pc = "aw_remarketing_only", T.aa = "value", T.me = "quantity", T.be = "affiliation", T.fe = "tax", T.ee = "shipping", T.Mb = "list_name", T.Vc = "checkout_step", T.Uc = "checkout_option",
    T.ce = "coupon", T.de = "promotions", T.Pa = "transaction_id", T.Yc = "user_id", T.Ma = "conversion_linker", T.La = "conversion_cookie_prefix", T.T = "items", T.Lb = "aw_merchant_id", T.Rc = "aw_feed_country", T.Sc = "aw_feed_language", T.Qc = "discount", T.Tc = "disable_merchant_reported_purchases", T.ae = "dc_natural_search", T.$d = "dc_custom_params", T.pe = "trip_type", T.ke = "passengers", T.ie = "method", T.ne = "search_term", T.Xd = "content_type", T.je = "optimize_id", T.he = "experiments", T.Zc = [T.Z, T.oa, T.gb, T.qa, T.ra, T.hb, T.Nb, T.Ob, T.Pb, T.va, T.Oa,
      T.Tb, T.Wb
    ], T.Ic = [T.va, T.Oc, T.Pc, T.hb, T.Oa, T.ib, T.aa, T.sa, T.Pa, T.Yc, T.Ma, T.La, T.mb, T.nb, T.Sb, T.Qb, T.Rb, T.Xc, T.T, T.Lb, T.Rc, T.Sc, T.Qc, T.Tc, T.Z];
  var Ge = {},
    Ie = function (a) {
      var b = fd.o;
      return function () {
        var c = arguments[0];
        if (c && (Ge[c] || Ge.all)) {
          var d = a.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Ge[c] && He(b, c, Ge[c], d);
          Ge.all && He(b, c, Ge.all, d)
        }
      }
    };

  function He(a, b, c, d) {
    for (var e = 0; e < c.length; e++) {
      var g = void 0,
        h = "An in-page policy denied the permission request";
      try {
        g = c[e].call(void 0, a, b, d), h += "."
      } catch (k) {
        h = "string" === typeof k ? h + (": " + k) : k instanceof Error ? h + (": " + k.message) : h + "."
      }
      if (!g) throw new Jd(b, {}, h);
    }
  };
  var Je = /[A-Z]+/,
    Ke = /\s/,
    Le = function (a) {
      if (t(a) && (a = a.trim(), !Ke.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Je.test(c)) {
            for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
              if (!d[e]) return;
            return {
              id: a,
              prefix: c,
              containerId: c + "-" + d[0],
              fa: d
            }
          }
        }
      }
    };
  var Me = null,
    Ne = {},
    Oe = {},
    Pe, Qe = function (a, b) {
      var c = {
        event: a
      };
      b && (c.eventModel = y(b), b[T.Nb] && (c.eventCallback = b[T.Nb]), b[T.Ob] && (c.eventTimeout = b[T.Ob]));
      return c
    };
  var Re = function () {
      Me = Me || !gd.gtagRegistered;
      gd.gtagRegistered = !0;
      return Me
    },
    Se = function (a) {
      if (void 0 === Oe[a.id]) {
        var b;
        switch (a.prefix) {
          case "UA":
            b = Fe("gtagua", {
              trackingId: a.id
            });
            break;
          case "AW":
            b = Fe("gtagaw", {
              conversionId: a
            });
            break;
          case "DC":
            b = Fe("gtagfl", {
              targetId: a.id
            });
            break;
          case "GF":
            b = Fe("gtaggf", {
              conversionId: a
            });
            break;
          case "G":
            b = Fe("get", {
              trackingId: a.id,
              isAutoTag: !0
            });
            break;
          case "HA":
            b = Fe("gtagha", {
              conversionId: a
            });
            break;
          default:
            return
        }
        if (!Pe) {
          var c = Tc("v", {
            name: "send_to",
            dataLayerVersion: 2
          });
          Kc.push(c);
          Pe = ["macro", Kc.length - 1]
        }
        var d = {
          arg0: Pe,
          arg1: a.id,
          ignore_case: !1
        };
        d[N.wa] = "_lc";
        Mc.push(d);
        var e = {
          "if": [Mc.length - 1],
          add: [b]
        };
        e["if"] && (e.add || e.block) && Lc.push(e);
        Oe[a.id] = b
      }
    },
    Te = Ia(function () {});
  var Ue = {
    config: function (a) {
      var b = a[2] || {};
      if (2 > a.length || !t(a[1]) || !Va(b)) return;
      var c = Le(a[1]);
      if (!c) return;
      Re() ? Se(c) : Te();
      var d = c.id,
        e;
      for (e in Ne)
        if (Ne.hasOwnProperty(e)) {
          var g = xa(Ne[e], d);
          0 <= g && Ne[e].splice(g, 1)
        } var h = c.id,
        k = b[T.Pb] || "default";
      k = k.toString().split(",");
      for (var l = 0; l < k.length; l++) Ne[k[l]] = Ne[k[l]] || [], Ne[k[l]].push(h);
      delete b[T.Pb];
      Dd("gtag.targets." + c.id, void 0);
      Dd("gtag.targets." + c.id, y(b));
      var m = {};
      m[T.va] = c.id;
      return Qe(T.Y, m);
    },
    event: function (a) {
      var b = a[1];
      if (t(b) && !(3 < a.length)) {
        var c;
        if (2 < a.length) {
          if (!Va(a[2])) return;
          c = a[2]
        }
        var d = Qe(b, c);
        var e;
        var g = c,
          h = vd("gtag.fields.send_to", 2);
        t(h) || (h = T.va);
        var k = g && g[h];
        void 0 === k && (k = vd(h, 2), void 0 === k && (k = "default"));
        if (t(k) || wa(k)) {
          for (var l = k.toString().replace(/\s+/g, "").split(","), m, p = [], q = 0; q < l.length; q++) 0 <= l[q].indexOf("-") ? p.push(l[q]) : p = p.concat(Ne[l[q]] || []);
          m = p;
          for (var r = {}, u = 0; u < m.length; ++u) {
            var w = Le(m[u]);
            w && (r[w.id] = w)
          }
          var v = [],
            D;
          for (D in r)
            if (r.hasOwnProperty(D)) {
              var G = r[D];
              "AW" === G.prefix && G.fa[1] && v.push(G.containerId)
            } for (var A = 0; A < v.length; ++A) delete r[v[A]];
          var I = [],
            O;
          for (O in r) r.hasOwnProperty(O) && I.push(r[O]);
          e = I
        } else e = void 0;
        var P = e;
        if (!P) return;
        var F = Re();
        F || Te();
        for (var V = [], Q = 0; F && Q < P.length; Q++) {
          var K = P[Q];
          V.push(K.id);
          Se(K)
        }
        d.eventModel = d.eventModel || {};
        0 < P.length ? d.eventModel[T.va] = V.join() : delete d.eventModel[T.va];
        return d
      }
    },
    js: function (a) {
      if (2 == a.length && a[1].getTime) return {
        event: "gtm.js",
        "gtm.start": a[1].getTime()
      }
    },
    policy: function (a) {
      if (3 === a.length) {
        var b = a[1],
          c = a[2];
        c && ha(c) && c.gtm && c.gtm.fromContainer || (Ge[b] || (Ge[b] = []), Ge[b].push(c))
      }
    },
    set: function (a) {
      var b;
      2 == a.length && Va(a[1]) ? b = y(a[1]) : 3 == a.length && t(a[1]) && (b = {}, b[a[1]] = a[2]);
      if (b) return b.eventModel = y(b), b.event = "gtag.set", b._clear = !0, b
    }
  };
  var $e = !1,
    af = [];

  function bf() {
    if (!$e) {
      $e = !0;
      for (var a = 0; a < af.length; a++) E(af[a])
    }
  };
  var cf = [],
    df = !1;

  function ef(a) {
    var b = a.eventCallback,
      c = Ia(function () {
        ta(b) && E(function () {
          b(fd.o)
        })
      }),
      d = a.eventTimeout;
    d && B.setTimeout(c, Number(d));
    return c
  }
  var ff = function () {
      for (var a = !1; !df && 0 < cf.length;) {
        df = !0;
        delete td.eventModel;
        var b = cf.shift();
        if (ta(b)) try {
          b.call(wd)
        } catch (Ve) {} else if (wa(b)) {
          var c = b;
          if (t(c[0])) {
            var d = c[0].split("."),
              e = d.pop(),
              g = c.slice(1),
              h = vd(d.join("."), 2);
            if (void 0 !== h && null !== h) try {
              h[e].apply(h, g)
            } catch (Ve) {}
          }
        } else {
          var k = b;
          if (k && ("[object Arguments]" == Object.prototype.toString.call(k) || Object.prototype.hasOwnProperty.call(k, "callee"))) {
            a: {
              if (b.length && t(b[0])) {
                var l = Ue[b[0]];
                if (l) {
                  b = l(b);
                  break a
                }
              }
              b = void 0
            }
            if (!b) {
              df = !1;
              continue
            }
          }
          var m;
          var p = void 0,
            q = b,
            r = q._clear;
          for (p in q) q.hasOwnProperty(p) && "_clear" !== p && (r && Dd(p, void 0), Dd(p, q[p]));
          var u = q.event;
          if (u) {
            var w = q["gtm.uniqueEventId"];
            w || (w = od(), q["gtm.uniqueEventId"] = w, Dd("gtm.uniqueEventId", w));
            kd = u;
            var v;
            var D, G, A = q,
              I = A.event,
              O = A["gtm.uniqueEventId"],
              P = gd.zones;
            G = P ? P.checkState(fd.o, O) : Kd;
            if (G.active) {
              var F = ef(A);
              c: {
                var V = G.isWhitelisted;
                if ("gtm.js" == I) {
                  if (Ee) {
                    D = !1;
                    break c
                  }
                  Ee = !0
                }
                var Q = O,
                  K = I;
                if (qe && !ie[Q] && fe !== Q) {
                  me();
                  fe = Q;
                  he = "";
                  var Z = Q,
                    M,
                    L = K;
                  M = 0 === L.indexOf("gtm.") ? encodeURIComponent(L) : "*";
                  oe[Z] = "&e=" + M + "&eid=" + Q;
                  ee || (ee = B.setTimeout(me, 500))
                }
                var R = Hd(V),
                  ca = {
                    id: O,
                    name: I,
                    callback: F || sa,
                    ia: R,
                    Za: []
                  };ca.Za = cd(R);
                for (var qa, Ca = ca, ib = Be(Ca.callback), jb = [], zb = [], kb = 0; kb < Nc.length; kb++)
                  if (Ca.Za[kb]) {
                    var We =
                      Nc[kb];
                    var dc = ib.add();
                    try {
                      var Xe = te(kb, jb, dc, dc, dc, Ca);
                      Xe ? zb.push({
                        Rd: kb,
                        b: Xc(We),
                        M: Xe
                      }) : (De(kb, Ca), dc())
                    } catch (Ve) {
                      dc()
                    }
                  } ib.He();zb.sort(Ce);
                for (var Bd = 0; Bd < zb.length; Bd++) zb[Bd].M();qa = 0 < zb.length;
                if ("gtm.js" === I || "gtm.sync" === I) d: {}
                if (qa) {
                  for (var nh = {
                      __cl: !0,
                      __ecl: !0,
                      __evl: !0,
                      __fsl: !0,
                      __hl: !0,
                      __jel: !0,
                      __lcl: !0,
                      __sdl: !0,
                      __tl: !0,
                      __ytl: !0
                    }, Hc = 0; Hc < ca.Za.length; Hc++)
                    if (ca.Za[Hc]) {
                      var Ze = Nc[Hc];
                      if (Ze && !nh[Ze[N.wa]]) {
                        D = !0;
                        break c
                      }
                    } D = !1
                } else D = qa
              }
              v = D ? !0 : !1
            } else v = !1;
            kd = null;
            m = v
          } else m = !1;
          a = m || a
        } df = !1
      }
      return !a
    },
    gf = function () {
      var a = ff();
      try {
        var b = B["dataLayer"].hide;
        if (b && void 0 !== b[fd.o] && b.end) {
          b[fd.o] = !1;
          var c = !0,
            d;
          for (d in b)
            if (b.hasOwnProperty(d) && !0 === b[d]) {
              c = !1;
              break
            } c && (b.end(), b.end = null)
        }
      } catch (e) {}
      return a
    },
    hf = function () {
      var a = mb("dataLayer",
          []),
        b = mb("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      Od.push(function () {
        b.gtmDom || (b.gtmDom = !0, a.push({
          event: "gtm.dom"
        }))
      });
      af.push(function () {
        b.gtmLoad || (b.gtmLoad = !0, a.push({
          event: "gtm.load"
        }))
      });
      var c = a.push;
      a.push = function () {
        var b = [].slice.call(arguments, 0);
        c.apply(a, b);
        for (cf.push.apply(cf, b); 300 < this.length;) this.shift();
        return ff()
      };
      cf.push.apply(cf, a.slice(0));
      E(gf)
    };
  var jf = {};
  jf.pb = new String("undefined");
  var kf = function (a) {
    this.resolve = function (b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === jf.pb ? b : a[d]);
      return c.join("")
    }
  };
  kf.prototype.toString = function () {
    return this.resolve("undefined")
  };
  kf.prototype.valueOf = kf.prototype.toString;
  jf.we = kf;
  jf.Yb = {};
  jf.$e = function (a) {
    return new kf(a)
  };
  var lf = {};
  jf.kg = function (a, b) {
    var c = od();
    lf[c] = [a, b];
    return c
  };
  jf.jd = function (a) {
    var b = a ? 0 : 1;
    return function (a) {
      var c = lf[a];
      if (c && "function" === typeof c[b]) c[b]();
      lf[a] = void 0
    }
  };
  jf.Kf = function (a) {
    for (var b = !1, c = !1,
        d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
    return b && c
  };
  jf.cg = function (a) {
    if (a === jf.pb) return a;
    var b = od();
    jf.Yb[b] = a;
    return 'google_tag_manager["' + fd.o + '"].macro(' + b + ")"
  };
  jf.Pf = function (a, b, c) {
    a instanceof jf.we && (a = a.resolve(jf.kg(b, c)), b = sa);
    return {
      hc: a,
      X: b
    }
  };
  var mf = new Ga;

  function nf(a, b) {
    function c(a) {
      var b = H(a),
        c = Fb(b, "protocol"),
        d = Fb(b, "host", !0),
        e = Fb(b, "port"),
        g = Fb(b, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === c || "http" == c && "80" == e || "https" == c && "443" == e) c = "web", e = "default";
      return [c, d, e, g]
    }
    for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
      if (d[g] !== e[g]) return !1;
    return !0
  }

  function of (a) {
    var b = a.arg0,
      c = a.arg1;
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var d;
        a: {
          if (b) {
            var e = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
            try {
              for (var g = 0; g < e.length; g++)
                if (b[e[g]]) {
                  d = b[e[g]](c);
                  break a
                }
            } catch (w) {}
          }
          d = !1
        }
        return d;
      case "_ew":
        var h, k;
        h = String(b);
        k = String(c);
        var l = h.length - k.length;
        return 0 <= l && h.indexOf(k, l) == l;
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var m;
        m = String(b).split(",");
        return 0 <= xa(m, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var p;
        var q = a.ignore_case ? "i" : void 0;
        try {
          var r = String(c) + q,
            u = mf.get(r);
          u || (u = new RegExp(c, q), mf.set(r, u));
          p = u.test(b)
        } catch (w) {
          p = !1
        }
        return p;
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return nf(b, c)
    }
    return !1
  };
  var pf = function () {
    return !1
  };

  function qf(a, b) {
    Ra(["key:!string", "dataLayerVersion:?number"], arguments);
    this.F().assert("read_data_layer", a);
    return Xa(vd(a, b || 2))
  }

  function rf() {
    return (new Date).getTime()
  }

  function sf(a) {
    return Aa(Wa(a))
  }

  function tf(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
  }

  function uf(a, b) {
    Ra(["min:!number", "max:!number"], arguments);
    return za(a, b)
  }

  function vf(a, b, c) {
    Ra(["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
    for (var d = new Oa, e = !1, g = 0; g < a.length(); g++) {
      var h = a.get(g);
      h instanceof Oa && h.has(b) && h.has(c) && (d.set(h.get(b), h.get(c)), e = !0)
    }
    return e ? d : null
  }
  var wf = function () {
    var a = new gb,
      b = Nb();
    pf() && (b.injectScript = sa, b.injectHiddenIframe = sa);
    a.addAll({
      callLater: b.callLater,
      copyFromDataLayer: qf,
      copyFromWindow: b.copyFromWindow,
      createQueue: b.createQueue,
      createArgumentsQueue: b.createArgumentsQueue,
      encodeUri: b.encodeURI,
      encodeUriComponent: b.encodeURIComponent,
      generateRandom: uf,
      getCookieValues: b.getCookieValues,
      getTimestamp: rf,
      getUrl: b.getUrl,
      injectHiddenIframe: b.injectHiddenIframe,
      injectScript: b.injectScript,
      logToConsole: b.logToConsole,
      makeInteger: sf,
      makeString: tf,
      makeTableMap: vf,
      queryPermission: b.queryPermission,
      sendPixel: b.sendPixel,
      setInWindow: b.setInWindow
    });
    return function (b) {
      return a.get(b)
    }
  };
  var xf;

  function yf() {
    var a = data.runtime || [];
    xf = new Pb;
    Jc = function (a, b, c) {
      zf(b);
      var d = new Oa,
        e;
      for (e in b) b.hasOwnProperty(e) && d.set(e, Xa(b[e]));
      xf.S(c);
      var g = xf.M([a, d]);
      xf.S(void 0);
      g instanceof ja && "return" === g.C && (g = g.getData());
      return Wa(g)
    };
    Qc = of ;
    Ob(xf, wf());
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (!wa(c) || 3 > c.length) {
        if (0 === c.length) continue;
        break
      }
      xf.M(c)
    }
  }

  function zf(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    ta(b) && (a.gtmOnSuccess = function () {
      E(b)
    });
    ta(c) && (a.gtmOnFailure = function () {
      E(c)
    })
  }

  function Af(a) {
    var b = {},
      c = function (a) {
        throw Bf(a, {}, "The requested permission is not configured.");
      };
    xf.Ia(c);
    xf.Ja(Ie(function () {
      var a = arguments[0];
      return a && b[a] ? b[a].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
    }));
    for (var d in a)
      if (a.hasOwnProperty(d)) {
        var e = a[d],
          g = !1,
          h;
        for (h in e)
          if (e.hasOwnProperty(h)) {
            g = !0;
            var k = Cf(h, e[h]);
            xf.vb(d, h, k.assert);
            b[h] || (b[h] = k.U)
          } g || xf.vb(d, "default", c)
      }
  }

  function Cf(a, b) {
    var c = Tc(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Bf;
    return Uc(c)
  }

  function Bf(a, b, c) {
    return new Jd(a, b, c)
  };
  var Df = function (a, b) {
    var c = function () {};
    c.prototype = a.prototype;
    var d = new c;
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d
  };
  var Ef = encodeURI,
    U = encodeURIComponent,
    Ff = function (a, b) {
      if (!a) return !1;
      var c = Fb(H(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var g = c.length - e.length;
          0 < g && "." != e.charAt(0) && (g--, e = "." + e);
          if (0 <= g && c.indexOf(e, g) == g) return !0
        }
      }
      return !1
    };
  var Gf = function (a, b, c) {
      for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
      return e ? d : null
    },
    Hf = function () {
      return !1
    };
  var If = function (a) {
      var b = {
        "gtm.element": a,
        "gtm.elementClasses": a.className,
        "gtm.elementId": a["for"] || ub(a, "id") || "",
        "gtm.elementTarget": a.formTarget || a.target || ""
      };
      b["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
      return b
    },
    Jf = function (a) {
      gd.hasOwnProperty("autoEventsSettings") || (gd.autoEventsSettings = {});
      var b = gd.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a]
    },
    Kf = function (a, b, c, d) {
      var e = Jf(a),
        g = Ha(e, b, d);
      e[b] =
        c(g)
    },
    Lf = function (a, b, c) {
      var d = Jf(a);
      return Ha(d, b, c)
    };
  var Nf = function (a, b) {
      if (!Mf) return null;
      if (Element.prototype.closest) try {
        return a.closest(b)
      } catch (e) {
        return null
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!C.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d
        } catch (e) {
          break
        }
        d = d.parentElement || d.parentNode
      } while (null !== d && 1 === d.nodeType);
      return null
    },
    Of = !1;
  if (C.querySelectorAll) try {
    var Pf = C.querySelectorAll(":root");
    Pf && 1 == Pf.length && Pf[0] == C.documentElement && (Of = !0)
  } catch (a) {}
  var Mf = Of;
  var Qf = function () {
      for (var a = hb.userAgent + (C.cookie || "") + (C.referrer || ""), b = a.length, c = B.history.length; 0 < c;) a += c-- ^ b++;
      var d = 1,
        e, g, h;
      if (a)
        for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
      return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Fa() / 1E3)].join(".")
    },
    Tf = function (a, b, c, d) {
      var e = Rf(b);
      return Jb(a, e, Sf(c), d)
    },
    Uf = function (a, b, c, d) {
      var e = "" + Rf(c),
        g = Sf(d);
      1 < g && (e += "-" + g);
      return [b, e, a].join(".")
    };

  function Rf(a) {
    if (!a) return 1;
    a = 0 === a.indexOf(".") ? a.substr(1) : a;
    return a.split(".").length
  }

  function Sf(a) {
    if (!a || "/" === a) return 1;
    "/" !== a[0] && (a = "/" + a);
    "/" !== a[a.length - 1] && (a += "/");
    return a.split("/").length - 1
  };
  var Vf = ["1"],
    Wf = {},
    Zf = function (a, b, c) {
      var d = Xf(a);
      if (!Wf[d] && !Yf(d, b, c)) {
        var e = Qf(),
          g = Uf(e, "1", b, c);
        Mb(d, g, c, b, new Date(Fa() + 7776E6));
        Yf(d, b, c)
      }
    };

  function Yf(a, b, c) {
    var d = Tf(a, b, c, Vf);
    d && (Wf[a] = d);
    return d
  }

  function Xf(a) {
    return (a || "_gcl") + "_au"
  };

  function $f() {
    for (var a = ag, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b
  }

  function bg() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + "."
  }
  var ag, cg, dg = function (a) {
      ag = ag || bg();
      cg = cg || $f();
      for (var b = [], c = 0; c < a.length; c += 3) {
        var d = c + 1 < a.length,
          e = c + 2 < a.length,
          g = a.charCodeAt(c),
          h = d ? a.charCodeAt(c + 1) : 0,
          k = e ? a.charCodeAt(c + 2) : 0,
          l = g >> 2,
          m = (g & 3) << 4 | h >> 4,
          p = (h & 15) << 2 | k >> 6,
          q = k & 63;
        e || (q = 64, d || (p = 64));
        b.push(ag[l], ag[m], ag[p], ag[q])
      }
      return b.join("")
    },
    eg = function (a) {
      function b(b) {
        for (; d < a.length;) {
          var c = a.charAt(d++),
            e = cg[c];
          if (null != e) return e;
          if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
        }
        return b
      }
      ag = ag || bg();
      cg = cg ||
        $f();
      for (var c = "", d = 0;;) {
        var e = b(-1),
          g = b(0),
          h = b(64),
          k = b(64);
        if (64 === k && -1 === e) return c;
        c += String.fromCharCode(e << 2 | g >> 4);
        64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
      }
    };
  var fg;

  function gg(a, b) {
    if (!a || b === C.location.hostname) return !1;
    for (var c = 0; c < a.length; c++)
      if (a[c] instanceof RegExp) {
        if (a[c].test(b)) return !0
      } else if (0 <= b.indexOf(a[c])) return !0;
    return !1
  }
  var hg = function () {
    var a = mb("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b
  };
  var ig = /(.*?)\*(.*?)\*(.*)/,
    jg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    kg = /^(?:www\.|m\.|amp\.)+/,
    lg = /([^?#]+)(\?[^#]*)?(#.*)?/,
    mg = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
    og = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(dg(String(d))))
        } var e = b.join("*");
      return ["1", ng(e), e].join("*")
    },
    ng = function (a, b) {
      var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
          window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
        ].join("*"),
        d;
      if (!(d = fg)) {
        for (var e = Array(256), g = 0; 256 > g; g++) {
          for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
          e[g] = h
        }
        d = e
      }
      fg = d;
      for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ fg[(l ^ c.charCodeAt(m)) & 255];
      return ((l ^ -1) >>> 0).toString(36)
    },
    qg = function () {
      return function (a) {
        var b = H(B.location.href),
          c = b.search.replace("?", ""),
          d = Db(c, "_gl", !0) || "";
        a.query = pg(d) || {};
        var e = Fb(b, "fragment").match(mg);
        a.fragment = pg(e && e[3] ||
          "") || {}
      }
    },
    pg = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var g = ig.exec(d);
              if (g) {
                c = g;
                break a
              }
              d = decodeURIComponent(d)
            }
            c = void 0
          }
          var h = c;
          if (h && "1" === h[1]) {
            var k = h[3],
              l;
            a: {
              for (var m = h[2], p = 0; p < b; ++p)
                if (m === ng(k, p)) {
                  l = !0;
                  break a
                } l = !1
            }
            if (l) {
              for (var q = {}, r = k ? k.split("*") : [], u = 0; u < r.length; u += 2) q[r[u]] = eg(r[u + 1]);
              return q
            }
          }
        }
      } catch (w) {}
    };

  function rg(a, b, c) {
    function d(a) {
      var b = a,
        c = mg.exec(b),
        d = b;
      if (c) {
        var e = c[2],
          g = c[4];
        d = c[1];
        g && (d = d + e + g)
      }
      a = d;
      var h = a.charAt(a.length - 1);
      a && "&" !== h && (a += "&");
      return a + l
    }
    c = void 0 === c ? !1 : c;
    var e = lg.exec(b);
    if (!e) return "";
    var g = e[1],
      h = e[2] || "",
      k = e[3] || "",
      l = "_gl=" + a;
    c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
    return "" + g + h + k
  }

  function sg(a, b, c) {
    for (var d = {}, e = {}, g = hg().decorators, h = 0; h < g.length; ++h) {
      var k = g[h];
      (!c || k.forms) && gg(k.domains, b) && (k.fragment ? Ja(e, k.callback()) : Ja(d, k.callback()))
    }
    if (Ka(d)) {
      var l = og(d);
      if (c) {
        if (a && a.action) {
          var m = (a.method || "").toLowerCase();
          if ("get" === m) {
            for (var p = a.childNodes || [], q = !1, r = 0; r < p.length; r++) {
              var u = p[r];
              if ("_gl" === u.name) {
                u.setAttribute("value", l);
                q = !0;
                break
              }
            }
            if (!q) {
              var w = C.createElement("input");
              w.setAttribute("type", "hidden");
              w.setAttribute("name", "_gl");
              w.setAttribute("value",
                l);
              a.appendChild(w)
            }
          } else if ("post" === m) {
            var v = rg(l, a.action);
            Bb.test(v) && (a.action = v)
          }
        }
      } else tg(l, a, !1)
    }
    if (!c && Ka(e)) {
      var D = og(e);
      tg(D, a, !0)
    }
  }

  function tg(a, b, c) {
    if (b.href) {
      var d = rg(a, b.href, void 0 === c ? !1 : c);
      Bb.test(d) && (b.href = d)
    }
  }
  var ug = function (a) {
      try {
        var b;
        a: {
          for (var c = a.target || a.srcElement || {}, d = 100; c && 0 < d;) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a
            }
            c = c.parentNode;
            d--
          }
          b = null
        }
        var e = b;
        if (e) {
          var g = e.protocol;
          "http:" !== g && "https:" !== g || sg(e, e.hostname, !1)
        }
      } catch (h) {}
    },
    vg = function (a) {
      try {
        var b = a.target || a.srcElement || {};
        if (b.action) {
          var c = Fb(H(b.action), "host");
          sg(b, c, !0)
        }
      } catch (d) {}
    },
    wg = function (a, b, c, d) {
      var e = hg();
      e.init || (sb(C, "mousedown", ug), sb(C, "keyup", ug), sb(C, "submit", vg), e.init = !0);
      var g = {
        callback: a,
        domains: b,
        fragment: "fragment" === c,
        forms: !!d
      };
      hg().decorators.push(g)
    },
    xg = function () {
      var a = C.location.hostname,
        b = jg.exec(C.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var g = c.split("/"),
          h = g[1];
        e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-")
      }
      return a.replace(kg, "") === e.replace(kg, "")
    },
    yg = function (a, b) {
      return !1 === a ? !1 : a || b || xg()
    };
  var zg = /^\w+$/,
    Ag = /^[\w-]+$/,
    Bg = /^~?[\w-]+$/,
    Cg = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha"
    },
    Eg = function (a) {
      var b = Gb(a, C.cookie),
        c = [];
      if (!b || 0 == b.length) return c;
      for (var d = 0; d < b.length; d++) {
        var e = b[d].split(".");
        3 == e.length && "GCL" == e[0] && e[1] && c.push(e[2])
      }
      return Dg(c)
    };

  function Fg(a) {
    return a && "string" == typeof a && a.match(zg) ? a : "_gcl"
  }
  var Gg = function (a) {
      if (a) {
        if ("string" == typeof a) {
          var b = Fg(a);
          return {
            dc: b,
            aw: b,
            gf: b,
            ha: b
          }
        }
        if (a && "object" == typeof a) return {
          dc: Fg(a.dc),
          aw: Fg(a.aw),
          gf: Fg(a.gf),
          ha: Fg(a.ha)
        }
      }
      return {
        dc: "_gcl",
        aw: "_gcl",
        gf: "_gcl",
        ha: "_gcl"
      }
    },
    Ig = function () {
      var a = H(B.location.href),
        b = Fb(a, "query", !1, void 0, "gclid"),
        c = Fb(a, "query", !1, void 0, "gclsrc"),
        d = Fb(a, "query", !1, void 0, "dclid");
      if (!b || !c) {
        var e = a.hash.replace("#", "");
        b = b || Db(e, "gclid");
        c = c || Db(e, "gclsrc")
      }
      return Hg(b, c, d)
    };

  function Hg(a, b, c) {
    var d = {},
      e = function (a, b) {
        d[b] || (d[b] = []);
        d[b].push(a)
      };
    if (void 0 !== a && a.match(Ag)) switch (b) {
      case void 0:
        e(a, "aw");
        break;
      case "aw.ds":
        e(a, "aw");
        e(a, "dc");
        break;
      case "ds":
        e(a, "dc");
        break;
      case "gf":
        e(a, "gf");
        break;
      case "ha":
        e(a, "ha")
    }
    c && e(c, "dc");
    return d
  }

  function Jg(a, b) {
    function c(a, b) {
      var c = Kg(a, d);
      c && Mb(c, b, g, e, k, !0)
    }
    b = b || {};
    var d = Gg(b.prefix),
      e = b.domain || "auto",
      g = b.path || "/",
      h = Fa(),
      k = new Date(h + 7776E6),
      l = Math.round(h / 1E3),
      m = function (a) {
        return ["GCL", l, a].join(".")
      };
    a.aw && (!0 === b.fh ? c("aw", m("~" + a.aw[0])) : c("aw", m(a.aw[0])));
    a.dc && c("dc", m(a.dc[0]));
    a.gf && c("gf", m(a.gf[0]));
    a.ha && c("ha", m(a.ha[0]))
  }
  var Kg = function (a, b) {
      var c = Cg[a];
      if (void 0 !== c) {
        var d = b[a];
        if (void 0 !== d) return d + c
      }
    },
    Lg = function (a) {
      var b = a.split(".");
      return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
    },
    Mg = function (a, b, c, d, e) {
      if (wa(b)) {
        var g = Gg(e);
        wg(function () {
          for (var b = {}, c = 0; c < a.length; ++c) {
            var d = Kg(a[c], g);
            if (d) {
              var e = Gb(d, C.cookie);
              e.length && (b[d] = e.sort()[e.length - 1])
            }
          }
          return b
        }, b, c, d)
      }
    },
    Dg = function (a) {
      return a.filter(function (a) {
        return Bg.test(a)
      })
    };
  var Ng = /^\d+\.fls\.doubleclick\.net$/;

  function Og(a) {
    var b = H(B.location.href),
      c = Fb(b, "host", !1);
    if (c && c.match(Ng)) {
      var d = Fb(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0]
    }
  }
  var Pg = function (a) {
      var b = Og("gclaw");
      if (b) return b.split(".");
      var c = Gg(a);
      if ("_gcl" == c.aw) {
        var d = Ig().aw || [];
        if (0 < d.length) return d
      }
      var e = Kg("aw", c);
      return e ? Eg(e) : []
    },
    Qg = function (a) {
      var b = Og("gcldc");
      if (b) return b.split(".");
      var c = Gg(a);
      if ("_gcl" == c.dc) {
        var d = Ig().dc || [];
        if (0 < d.length) return d
      }
      var e = Kg("dc", c);
      return e ? Eg(e) : []
    },
    Rg = function (a) {
      var b = Gg(a);
      if ("_gcl" == b.ha) {
        var c = Ig().ha || [];
        if (0 < c.length) return c
      }
      return Eg(b.ha + "_ha")
    },
    Sg = function () {
      var a = Og("gac");
      if (a) return decodeURIComponent(a);
      for (var b = [], c = C.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
        var g = c[e].match(d);
        g && b.push({
          Bc: g[1],
          value: g[2]
        })
      }
      var h = {};
      if (b && b.length)
        for (var k = 0; k < b.length; k++) {
          var l = b[k].value.split(".");
          "1" == l[0] && 3 == l.length && l[1] && (h[b[k].Bc] || (h[b[k].Bc] = []), h[b[k].Bc].push({
            timestamp: l[1],
            sf: l[2]
          }))
        }
      var m = [],
        p;
      for (p in h)
        if (h.hasOwnProperty(p)) {
          for (var q = [], r = h[p], u = 0; u < r.length; u++) q.push(r[u].sf);
          q = Dg(q);
          q.length && m.push(p + ":" + q.join(","))
        } return m.join(";")
    },
    Tg = function (a,
      b, c) {
      Zf(a, b, c);
      var d = Wf[Xf(a)],
        e = Ig().dc || [];
      if (d && 0 < e.length) {
        var g = gd.joined_au = gd.joined_au || {},
          h = a || "_gcl";
        if (!g[h]) {
          for (var k = !1, l = 0; l < e.length; l++) {
            var m = "https://adservice.google.com/ddm/regclk";
            m += "?gclid=" + e[l] + "&auiddc=" + d;
            Ab(m);
            k = !0
          }
          if (k) {
            var p = Xf(a);
            if (Wf[p]) {
              var q = Uf(Wf[p], "1", b, c);
              Mb(p, q, c, b, new Date(Fa() + 7776E6))
            }
            g[h] = !0
          }
        }
      }
    };
  var Vg = {
    "": "n",
    UA: "u",
    AW: "a",
    DC: "d",
    G: "e",
    GF: "f",
    HA: "h",
    GTM: Ug()
  };

  function Ug() {
    if (3 === fd.tb.length) return "g";
    return "g";
    return "G"
  }

  function Wg() {
    return pf() ? "s" : "o";
    return "w"
  }
  var Xg = function (a) {
    var b = fd.o.split("-"),
      c = b[0].toUpperCase(),
      d = Vg[c] || "i",
      e = a && "GTM" === c ? b[1] : "";
    return (3 === fd.tb.length ? "2" + Wg() : "") + d + fd.tb + e
  };
  var Yg = function (a) {
      return !(void 0 === a || null === a || 0 === (a + "").length)
    },
    Zg = function (a, b) {
      var c;
      if (2 === b.K) return a("ord", za(1E11, 1E13)), !0;
      if (3 === b.K) return a("ord", "1"), a("num", za(1E11, 1E13)), !0;
      if (4 === b.K) return Yg(b.sessionId) && a("ord", b.sessionId), !0;
      if (5 === b.K) c = "1";
      else if (6 === b.K) c = b.Nd;
      else return !1;
      Yg(c) && a("qty", c);
      Yg(b.bc) && a("cost", b.bc);
      Yg(b.Cc) && a("ord", b.Cc);
      return !0
    },
    $g = encodeURIComponent,
    ah = function (a, b) {
      function c(a, b, c) {
        g.hasOwnProperty(a) || (b += "", e += ";" + a + "=" + (c ? b : $g(b)))
      }
      var d = a.fc,
        e = a.protocol;
      e += a.Gb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
      e += ";src=" + $g(d) + (";type=" + $g(a.gc)) + (";cat=" + $g(a.Sa));
      var g = a.bf || {},
        h;
      for (h in g) g.hasOwnProperty(h) && (e += ";" + $g(h) + "=" + $g(g[h] + ""));
      if (Zg(c, a)) {
        Yg(a.Ec) && c("u", a.Ec);
        Yg(a.tran) && c("tran", a.tran);
        c("gtm", Xg());
        !1 === a.Ee && c("npa", "1");
        if (a.ac) {
          var k = Qg(a.za);
          k && k.length && c("gcldc", k.join("."));
          var l = Pg(a.za);
          l && l.length && c("gclaw", l.join("."));
          var m = Sg();
          m && c("gac", m);
          Zf(a.za);
          var p = Wf[Xf(a.za)];
          p && c("auiddc", p);
        }
        Yg(a.sc) && c("prd", a.sc, !0);
        for (var q in a.ab) a.ab.hasOwnProperty(q) && c(q, a.ab[q]);
        e += b || "";
        Yg(a.Db) && c("~oref", a.Db);
        a.Gb ? qb(e + "?", a.X) : rb(e + "?", a.X, a.Da)
      } else E(a.Da)
    };
  var ch = function (a) {
      if (a) try {
        if (a.conversion_id && a.conversion_data) {
          var b = "/pagead/conversion/" + bh(a.conversion_id) + "/?",
            c = bh(JSON.stringify(a.conversion_data)),
            d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
          if (a.conversionLinkerEnabled) {
            var e;
            a: {
              var g = Gg(a.conversionPrefix);
              if ("_gcl" == g.gf) {
                var h = Ig().gf || [];
                if (0 < h.length) {
                  e = h;
                  break a
                }
              }
              var k = Kg("gf", g);e = k ? Eg(k) : []
            }
            var l = e;
            if (l && l.length)
              for (var m = 0; m < l.length; m++) d += "&gclgf=" + bh(l[m])
          }
          rb(d, a.onSuccess, a.onFailure)
        }
      } catch (p) {}
    },
    bh = function (a) {
      return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
    };
  var dh = !!B.MutationObserver,
    eh = void 0,
    fh = function (a) {
      if (!eh) {
        var b = function () {
          var a = C.body;
          if (a)
            if (dh)(new MutationObserver(function () {
              for (var a = 0; a < eh.length; a++) E(eh[a])
            })).observe(a, {
              childList: !0,
              subtree: !0
            });
            else {
              var b = !1;
              sb(a, "DOMNodeInserted", function () {
                b || (b = !0, E(function () {
                  b = !1;
                  for (var a = 0; a < eh.length; a++) E(eh[a])
                }))
              })
            }
        };
        eh = [];
        C.body ? b() : E(b)
      }
      eh.push(a)
    };
  var gh = /\./g;
  var Ch = B.clearTimeout,
    Dh = B.setTimeout,
    W = function (a, b, c) {
      if (pf()) {
        b && E(b)
      } else return ob(a, b, c)
    },
    Eh = function () {
      return B.location.href
    },
    Fh = function (a) {
      return Fb(H(a), "fragment")
    },
    Gh = function (a, b) {
      return vd(a, b || 2)
    },
    Hh = function (a, b, c) {
      b && (a.eventCallback = b, c && (a.eventTimeout = c));
      return B["dataLayer"].push(a)
    },
    Ih = function (a, b) {
      B[a] = b
    },
    X = function (a, b, c) {
      b && (void 0 === B[a] || c && !B[a]) && (B[a] = b);
      return B[a]
    },
    Jh = function (a,
      b, c) {
      return Gb(a, b, void 0 === c ? !0 : !!c)
    },
    Kh = function (a, b, c) {
      var d = {
          prefix: a,
          path: b,
          domain: c
        },
        e = Ig();
      Jg(e, d)
    },
    Lh = function (a, b, c, d) {
      var e = qg(),
        g = hg();
      g.data || (g.data = {
        query: {},
        fragment: {}
      }, e(g.data));
      var h = {},
        k = g.data;
      k && (Ja(h, k.query), Ja(h, k.fragment));
      for (var l = Gg(b), m = 0; m < a.length; ++m) {
        var p = a[m];
        if (void 0 !== Cg[p]) {
          var q = Kg(p, l),
            r = h[q];
          if (r) {
            var u = Math.min(Lg(r), Fa()),
              w;
            b: {
              for (var v = u, D = Gb(q, C.cookie), G = 0; G < D.length; ++G)
                if (Lg(D[G]) > v) {
                  w = !0;
                  break b
                } w = !1
            }
            w ||
              Mb(q, r, c, d, new Date(u + 7776E6), !0)
          }
        }
      }
      var A = {
        prefix: b,
        path: c,
        domain: d
      };
      Jg(Hg(h.gclid, h.gclsrc), A);
    },
    Mh = function (a, b, c, d, e) {
      Mg(a, b, c, d, e);
    },
    Nh = function (a, b) {
      if (pf()) {
        b && E(b)
      } else qb(a, b)
    },
    Oh = function (a) {
      return !!Lf(a, "init", !1)
    },
    Ph = function (a) {
      Jf(a).init = !0
    },
    Qh = function (a, b, c) {
      var d = (void 0 === c ?
        0 : c) ? "www.googletagmanager.com/gtag/js" : id;
      d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
      if (b)
        for (var e in b) b[e] && b.hasOwnProperty(e) && (d += "&" + e + "=" + encodeURIComponent(b[e]));
      W(J("https://", "http://", d))
    };
  var Rh = function (a, b, c, d) {
    var e = {
      config: a,
      gtm: Xg()
    };
    c && (Zf(d), e.auiddc = Wf[Xf(d)]);
    b && (e.loadInsecure = b);
    X("__dc_ns_processor", []).push(e);
    W((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
  };
  var Sh = jf.Pf;
  var ei = function (a, b, c) {
      this.n = a;
      this.t = b;
      this.p = c
    },
    fi = function () {
      this.c = 1;
      this.e = [];
      this.p = null
    };

  function gi(a) {
    var b = gd,
      c = b.gss = b.gss || {};
    return c[a] = c[a] || new fi
  }
  var hi = function (a, b) {
      gi(a).p = b
    },
    ii = function (a, b, c) {
      var d = Math.floor(Fa() / 1E3);
      gi(a).e.push(new ei(b, d, c))
    },
    ji = function (a) {};
  var si = window,
    ti = document,
    ui = function (a) {
      var b = si._gaUserPrefs;
      if (b && b.ioo && b.ioo() || a && !0 === si["ga-disable-" + a]) return !0;
      try {
        var c = si.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
      } catch (g) {}
      for (var d = Gb("AMP_TOKEN", ti.cookie, !0), e = 0; e < d.length; e++)
        if ("$OPT_OUT" == d[e]) return !0;
      return !1
    };
  var zi = function (a) {
      if (1 === gi(a).c) {
        gi(a).c = 2;
        var b = encodeURIComponent(a);
        ob(("http:" != B.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
      }
    },
    Ai = function (a, b) {};
  var Y = {
    a: {}
  };
  Y.a.gtagha = ["google"],
    function () {
      function a(a) {
        function b(a, b) {
          void 0 !== b && c.push(a + "=" + b)
        }
        if (void 0 === a) return "";
        var c = [];
        b("hct_base_price", a.td);
        b("hct_booking_xref", a.ud);
        b("hct_checkin_date", a.zf);
        b("hct_checkout_date", a.Af);
        b("hct_currency_code", a.Bf);
        b("hct_partner_hotel_id", a.vd);
        b("hct_total_price", a.wd);
        return c.join(";")
      }

      function b(b, c, d, e) {
        var g = U(b),
          h = U(a(c)),
          k = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + g + "/?data=" + h;
        d && (k += Rg(e).map(function (a) {
          return "&gclha=" +
            U(a)
        }).join(""));
        return k
      }

      function c(a, c, d, e, g, q) {
        /^\d+$/.test(a) ? rb(b(a, c, d, e), g, q) : E(q)
      }

      function d(a, b, c, d) {
        var e = {};
        t(a) ? e.ud = a : "number" === typeof a && (e.ud = String(a));
        t(c) && (e.Bf = c);
        t(b) ? e.wd = e.td = b : "number" === typeof b && (e.wd = e.td = String(b));
        if (!wa(d) || 0 == d.length) return e;
        var g = d[0];
        if (!Va(g)) return e;
        t(g.id) ? e.vd = g.id : "number" === typeof g.id && (e.vd = String(g.id));
        t(g.start_date) && (e.zf = g.start_date);
        t(g.end_date) && (e.Af = g.end_date);
        return e
      }

      function e(a) {
        var b = kd,
          e = a.vtp_gtmOnSuccess,
          h = a.vtp_gtmOnFailure,
          p = a.vtp_conversionId,
          q = p.containerId,
          r = function (a) {
            return xd(a, q, p.id)
          },
          u = !1 !== r(T.Ma),
          w = r(T.La);
        if (b === T.Y) {
          var v = r(T.Na) || {};
          u && (yg(v[T.jb], !!v[T.J]) && Lh(g, w), Kh(w));
          v[T.J] && Mh(g, v[T.J], v[T.lb], !!v[T.kb], w);
          E(e)
        } else if ("purchase" === b) {
          var D = d(r(T.Pa), r(T.aa), r(T.sa), r(T.T));
          c(p.fa[0], D, u, w, e, h)
        } else E(h)
      }
      var g = ["ha"];
      Y.__gtagha = e;
      Y.__gtagha.g = "gtagha";
      Y.__gtagha.h = !0;
      Y.__gtagha.b = 0;
    }();
  Y.a.e = ["google"],
    function () {
      (function (a) {
        Y.__e = a;
        Y.__e.g = "e";
        Y.__e.h = !0;
        Y.__e.b = 0
      })(function () {
        return kd
      })
    }();


  Y.a.v = ["google"],
    function () {
      (function (a) {
        Y.__v = a;
        Y.__v.g = "v";
        Y.__v.h = !0;
        Y.__v.b = 0
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Gh(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue
      })
    }();







  Y.a.gtagaw = ["google"],
    function () {
      var a = !1,
        b = [],
        c = ["aw", "dc"],
        d = function (a) {
          var b = X("google_trackConversion"),
            c = a.gtm_onFailure;
          "function" == typeof b ? b(a) || c() : c()
        },
        e = function () {
          for (; 0 < b.length;) d(b.shift())
        },
        g = function () {
          a || (a = !0, Sd(), W(J("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function () {
            e();
            b = {
              push: d
            }
          }, function () {
            e();
            a = !1
          }))
        },
        h = function (a, b, c, d) {
          if (pf()) {} else {
            wa(b) || (b = [b]);
            for (var e =
                0; e < b.length; e++) 1 > e && rd(a.fa[0], a.fa[1], b[e], {
              Td: c,
              Bg: d
            })
          }
        },
        k = function (a) {
          if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
              var d = a[c];
              d && b.push({
                item_id: d.id,
                quantity: d.quantity,
                value: d.price,
                start_date: d.start_date,
                end_date: d.end_date
              })
            }
            return b
          }
        },
        l = function (a) {
          var d = a.vtp_conversionId,
            e = kd,
            l = e == T.Y,
            m = d.fa[0],
            w = d.fa[1],
            v = void 0 !== w,
            D = d.containerId,
            G = v ? d.id : void 0,
            A = function (a) {
              return xd(a, D, G)
            },
            I = !1 !== A(T.Ma),
            O = A(T.La);
          if (l) {
            var P = A(T.Na) || {};
            I && (yg(P[T.jb], !!P[T.J]) && Lh(c, O), Kh(O));
            P[T.J] && Mh(c, P[T.J], P[T.lb],
              !!P[T.kb], O);
            if (v) {
              var F = A(T.Sb),
                V = A(T.Qb),
                Q = A(T.Rb),
                K = A(T.Xc);
              h(d, F, V || Q, K)
            }
          }
          var Z = !1 === A(T.Oc) || !1 === A(T.Oa);
          if (!l || !v && !Z)
            if (!0 === A(T.Pc) && (v = !1), !1 !== A(T.Z) || v) {
              var M = {
                google_conversion_id: m,
                google_remarketing_only: !v,
                onload_callback: a.vtp_gtmOnSuccess,
                gtm_onFailure: a.vtp_gtmOnFailure,
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_domain: "",
                google_conversion_label: w,
                google_conversion_language: A(T.ib),
                google_conversion_value: A(T.aa),
                google_conversion_currency: A(T.sa),
                google_conversion_order_id: A(T.Pa),
                google_user_id: A(T.Yc),
                google_conversion_page_url: A(T.mb),
                google_conversion_referrer_url: A(T.nb),
                google_gtm: Xg()
              };
              !1 === A(T.Z) && (M.google_allow_ad_personalization_signals = !1);
              M.google_read_gcl_cookie_opt_out = !I;
              I && O && (Va(O) ? M.google_gcl_cookie_prefix = O.aw : M.google_gcl_cookie_prefix = O);
              var L = function () {
                var a = A(T.hb),
                  b = {
                    event: e
                  };
                if (wa(a)) {
                  for (var c = 0; c < a.length; ++c) {
                    var d = a[c],
                      g = A(d);
                    void 0 !== g && (b[d] = g)
                  }
                  return b
                }
                var h = A("eventModel");
                if (!h) return null;
                y(h, b);
                for (var k =
                    0; k < T.Ic.length; ++k) delete b[T.Ic[k]];
                return b
              }();
              L && (M.google_custom_params = L);
              !v && A(T.T) && (M.google_gtag_event_data = {
                items: A(T.T),
                value: A(T.aa)
              });
              if (v && "purchase" == e) {
                A(T.Lb) && (M.google_conversion_merchant_id = A(T.Lb), M.google_basket_feed_country = A(T.Rc), M.google_basket_feed_language = A(T.Sc), M.google_basket_discount = A(T.Qc), M.google_basket_transaction_type = e, M.google_disable_merchant_reported_conversions = !0 === A(T.Tc), pf() && (M.google_disable_merchant_reported_conversions = !0));
                var R = k(A(T.T));
                R && (M.google_conversion_items =
                  R)
              }
              b.push(M)
            } g()
        };
      Y.__gtagaw = l;
      Y.__gtagaw.g = "gtagaw";
      Y.__gtagaw.h = !0;
      Y.__gtagaw.b = 0
    }();

  Y.a.get = ["google"],
    function () {
      (function (a) {
        Y.__get = a;
        Y.__get.g = "get";
        Y.__get.h = !0;
        Y.__get.b = 0
      })(function (a) {
        if (a.vtp_isAutoTag) {
          for (var b = String(a.vtp_trackingId), c = kd || "", d = {}, e = T.Zc, g = 0; g < e.length; g++) {
            var h = Ad(e[g], b);
            void 0 !== h && (d[e[g]] = h)
          }
          var k = Ad(T.hb, b);
          if (wa(k))
            for (var l = 0; l < k.length; l++) {
              var m = k[l],
                p = Ad(m, b);
              void 0 !== p && (d[m] = p)
            } else {
              var q = Gh("eventModel");
              y(q, d)
            }
          var r = y(d);
          zi(b);
          ii(b, c, r);
          ji(b)
        } else {
          var u = a.vtp_settings,
            w = u.eventParameters,
            v = u.userProperties;
          y(Gf(a.vtp_eventParameters,
            "name", "value"), w);
          y(Gf(a.vtp_userProperties, "name", "value"), v);
          w.user_properties = v;
          var D = String(u.streamId),
            G = String(a.vtp_eventName);
          zi(D);
          ii(D, G, w);
          ji(D)
        }
        a.vtp_gtmOnSuccess()
      })
    }();

  Y.a.gtagfl = [],
    function () {
      function a(a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
          var c = {
            standard: 2,
            unique: 3,
            per_session: 4,
            transactions: 5,
            items_sold: 6,
            "": 1
          } [(b[5] || "").toLowerCase()];
          if (c) return {
            containerId: "DC-" + b[1],
            Sd: b[3] ? a : "",
            ze: b[1],
            ye: b[3] || "",
            Sa: b[4] || "",
            K: c
          }
        }
      }

      function b(a, b) {
        function c(b, c, e) {
          void 0 !== e && 0 !== (e + "").length && d.push(b + c + ":" + a(e + ""))
        }
        var d = [],
          e = b(T.T) || [];
        if (wa(e))
          for (var g = 0; g < e.length; g++) {
            var p = e[g],
              q = g + 1;
            c("i", q, p.id);
            c("p", q, p.price);
            c("q", q, p.quantity);
            c("c", q, b(T.Yd));
            c("l", q, b(T.ib))
          }
        return d.join("|")
      }

      function c(a, b, c) {
        var d = /^u([1-9]\d?|100)$/,
          e = a(T.Zd) || {},
          g = Cd(b, c),
          h = {},
          q = {};
        if (Va(e))
          for (var r in e)
            if (e.hasOwnProperty(r) && d.test(r)) {
              var u = e[r];
              t(u) && (h[r] = u)
            } for (var w = 0; w < g.length; w++) {
          var v = g[w];
          d.test(v) && (h[v] = v)
        }
        for (var D in h) h.hasOwnProperty(D) && (q[D] = a(h[D]));
        return q
      }
      var d = ["aw", "dc"];
      (function (a) {
        Y.__gtagfl = a;
        Y.__gtagfl.g = "gtagfl";
        Y.__gtagfl.h = !0;
        Y.__gtagfl.b = 0
      })(function (e) {
        var g = e.vtp_gtmOnSuccess,
          h = e.vtp_gtmOnFailure,
          k = a(e.vtp_targetId);
        if (k) {
          var l = function (a) {
              return xd(a, k.containerId, k.Sd || void 0)
            },
            m = !1 !== l(T.Ma),
            p = l(T.La),
            q = l(T.ae),
            r = 3 === pd();
          if (kd === T.Y) {
            var u = l(T.Na) || {};
            m && (yg(u[T.jb], !!u[T.J]) && Lh(d, p), Kh(p), Tg(p));
            u[T.J] && Mh(d, u[T.J], u[T.lb], !!u[T.kb], p);
            if (q && q.exclusion_parameters && q.engines) {}
            E(g)
          } else {
            var w = {},
              v = l(T.$d);
            if (Va(v))
              for (var D in v)
                if (v.hasOwnProperty(D)) {
                  var G = v[D];
                  void 0 !== G && null !== G && (w[D] = G)
                } var A =
              "";
            if (5 === k.K || 6 === k.K) A = b(U, l);
            var I = c(l, k.containerId, k.Sd),
              O = !0 === l(T.Vd);
            if (pf() && O) {
              O = !1
            }
            var P = {
              Sa: k.Sa,
              ac: m,
              za: p,
              bc: l(T.aa),
              K: k.K,
              bf: w,
              fc: k.ze,
              gc: k.ye,
              Da: h,
              X: g,
              Db: Eb(H(Eh())),
              sc: A,
              protocol: r ? "http:" : "https:",
              Nd: l(T.me),
              Gb: O,
              sessionId: l(T.ob),
              Cc: l(T.Pa),
              ab: I,
              Ee: !1 !== l(T.Z)
            };
            ah(P)
          }
        } else E(h)
      })
    }();
  Y.a.gtaggf = ["google"],
    function () {
      var a = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
        b = function (a) {
          if (a) {
            for (var b = [], c = 0, g = 0; g < a.length; ++g) {
              var h = a[g];
              !h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (b[c] = {
                cabin: h.travel_class,
                fare_product: h.fare_product,
                booking_code: h.booking_code,
                flight_number: h.flight_number,
                origin: h.origin,
                destination: h.destination,
                departure_date: h.start_date
              }, c++)
            }
            return b
          }
        };
      (function (a) {
        Y.__gtaggf = a;
        Y.__gtaggf.g = "gtaggf";
        Y.__gtaggf.h = !0;
        Y.__gtaggf.b =
          0
      })(function (c) {
        var d = kd,
          e = c.vtp_gtmOnSuccess,
          g = c.vtp_gtmOnFailure,
          h = c.vtp_conversionId,
          k = h.fa[0],
          l = h.containerId,
          m = function (a) {
            return xd(a, l, h.id)
          },
          p = !1 !== m(T.Ma),
          q = m(T.La);
        if (d === T.Y) p && Kh(q), E(e);
        else {
          var r = {
            conversion_id: k,
            onFailure: g,
            onSuccess: e,
            conversionLinkerEnabled: p,
            conversionPrefix: q
          };
          if ("purchase" === d) {
            var u = a.test(Eh()),
              w = {
                partner_id: k,
                trip_type: m(T.pe),
                total_price: m(T.aa),
                currency: m(T.sa),
                is_direct_booking: u,
                flight_segment: b(m(T.T))
              },
              v = m(T.ke);
            v && "object" === typeof v && (w.passengers_total =
              v.total, w.passengers_adult = v.adult, w.passengers_child = v.child, w.passengers_infant_in_seat = v.infant_in_seat, w.passengers_infant_in_lap = v.infant_in_lap);
            r.conversion_data = w
          }
          ch(r)
        }
      })
    }();

  Y.a.gtagua = ["google"],
    function () {
      var a, b = {
          client_id: 1,
          client_storage: "storage",
          cookie_name: 1,
          cookie_domain: 1,
          cookie_expires: 1,
          cookie_path: 1,
          cookie_update: 1,
          sample_rate: 1,
          site_speed_sample_rate: 1,
          use_amp_client_id: 1,
          store_gac: 1,
          conversion_linker: "storeGac"
        },
        c = {
          anonymize_ip: 1,
          app_id: 1,
          app_installer_id: 1,
          app_name: 1,
          app_version: 1,
          campaign: {
            name: "campaignName",
            source: "campaignSource",
            medium: "campaignMedium",
            term: "campaignTerm",
            content: "campaignContent",
            id: "campaignId"
          },
          currency: "currencyCode",
          description: "exDescription",
          fatal: "exFatal",
          language: 1,
          non_interaction: 1,
          page_hostname: "hostname",
          page_referrer: "referrer",
          page_path: "page",
          page_location: "location",
          page_title: "title",
          screen_name: 1,
          transport_type: "transport",
          user_id: 1
        },
        d = {
          content_id: 1,
          event_category: 1,
          event_action: 1,
          event_label: 1,
          link_attribution: 1,
          linker: 1,
          method: 1,
          name: 1,
          send_page_view: 1,
          value: 1
        },
        e = {
          cookie_name: 1,
          cookie_expires: "duration",
          levels: 1
        },
        g = {
          anonymize_ip: 1,
          fatal: 1,
          non_interaction: 1,
          use_amp_client_id: 1,
          send_page_view: 1,
          store_gac: 1,
          conversion_linker: 1
        },
        h = function (a, b, c, d) {
          if (void 0 !== c)
            if (g[b] && (c = Ba(c)), "anonymize_ip" != b || c || (c = void 0), 1 === a) d[k(b)] = c;
            else if (t(a)) d[a] = c;
          else
            for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        k = function (a) {
          return a && t(a) ? a.replace(/(_[a-z])/g, function (a) {
            return a[1].toUpperCase()
          }) : a
        },
        l = function (a, b, c) {
          a.hasOwnProperty(b) || (a[b] = c)
        },
        m = function (a, e, g) {
          var k = {},
            m = {},
            p = {},
            q;
          var r = Ad(T.he, a);
          if (wa(r)) {
            for (var v = [], u = 0; u < r.length; u++) {
              var w = r[u];
              if (void 0 != w) {
                var D = w.id,
                  Z = w.variant;
                void 0 != D && void 0 !=
                  Z && v.push(String(D) + "." + String(Z))
              }
            }
            q = 0 < v.length ? v.join("!") : void 0
          } else q = void 0;
          var M = q;
          M && l(m, "exp", M);
          var L = Ad("custom_map", a);
          if (Va(L))
            for (var R in L)
              if (L.hasOwnProperty(R) && /^(dimension|metric)\d+$/.test(R) && void 0 != L[R]) {
                var ca = Ad(String(L[R]), a);
                void 0 !== ca && l(m, R, ca)
              } for (var da = Cd(a), ua = 0; ua < da.length; ++ua) {
            var S = da[ua],
              pa = Ad(S, a);
            d.hasOwnProperty(S) ? h(d[S], S, pa, k) : c.hasOwnProperty(S) ? h(c[S], S, pa, m) : b.hasOwnProperty(S) ? h(b[S], S, pa, p) : /^(dimension|metric|content_group)\d+$/.test(S) && h(1, S,
              pa, m)
          }
          var qa = String(kd);
          l(p, "cookieDomain", "auto");
          l(m, "forceSSL", !0);
          var Ca = "general";
          0 <= xa("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), qa) ? Ca = "ecommerce" : 0 <= xa("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), qa) ? Ca = "engagement" : "exception" == qa && (Ca = "error");
          l(k, "eventCategory", Ca);
          0 <= xa(["view_item", "view_item_list",
            "view_promotion", "view_search_results"
          ], qa) && l(m, "nonInteraction", !0);
          "login" == qa || "sign_up" == qa || "share" == qa ? l(k, "eventLabel", Ad(T.ie, a)) : "search" == qa || "view_search_results" == qa ? l(k, "eventLabel", Ad(T.ne, a)) : "select_content" == qa && l(k, "eventLabel", Ad(T.Xd, a));
          var ib = k[T.Na] || {},
            jb = ib[T.jb];
          jb || 0 != jb && ib[T.J] ? p.allowLinker = !0 : !1 === jb && l(p, "useAmpClientId", !1);
          if (!1 === Ad(T.Wd, a) || !1 === Ad(T.Z, a)) m.allowAdFeatures = !1;
          p.name = e;
          m["&gtm"] = Xg(!0);
          m.hitCallback = g;
          k.W = m;
          k.ld = p;
          return k
        },
        p = function (a) {
          function b(a) {
            var b =
              y(a);
            b.list = a.list_name;
            b.listPosition = a.list_position;
            b.position = a.list_position || a.creative_slot;
            b.creative = a.creative_name;
            return b
          }

          function c(a) {
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && c.push(b(a[d]));
            return c.length ? c : void 0
          }

          function d(a) {
            return {
              id: g(e.Pa),
              affiliation: g(e.be),
              revenue: g(e.aa),
              tax: g(e.fe),
              shipping: g(e.ee),
              coupon: g(e.ce),
              list: g(e.Mb) || a
            }
          }
          for (var e = T, g = function (b) {
              return xd(b, a, void 0)
            }, h = g(e.T), k, m = 0; h && m < h.length && !(k = h[m][e.Mb]); m++);
          var p = g("custom_map");
          if (Va(p))
            for (var q =
                0; h && q < h.length; ++q) {
              var r = h[q],
                u;
              for (u in p) p.hasOwnProperty(u) && /^(dimension|metric)\d+$/.test(u) && void 0 != p[u] && l(r, u, r[p[u]])
            }
          var w = null,
            L = kd,
            R = g(e.de);
          "purchase" == L || "refund" == L ? w = {
            action: L,
            Ra: d(),
            Ga: c(h)
          } : "add_to_cart" == L ? w = {
            action: "add",
            Ga: c(h)
          } : "remove_from_cart" == L ? w = {
            action: "remove",
            Ga: c(h)
          } : "view_item" == L ? w = {
            action: "detail",
            Ra: d(k),
            Ga: c(h)
          } : "view_item_list" == L ? w = {
            action: "impressions",
            Ff: c(h)
          } : "view_promotion" == L ? w = {
            action: "promo_view",
            uc: c(R)
          } : "select_content" == L && R && 0 < R.length ? w = {
            action: "promo_click",
            uc: c(R)
          } : "select_content" == L ? w = {
            action: "click",
            Ra: {
              list: g(e.Mb) || k
            },
            Ga: c(h)
          } : "begin_checkout" == L || "checkout_progress" == L ? w = {
            action: "checkout",
            Ga: c(h),
            Ra: {
              step: "begin_checkout" == L ? 1 : g(e.Vc),
              option: g(e.Uc)
            }
          } : "set_checkout_option" == L && (w = {
            action: "checkout_option",
            Ra: {
              step: g(e.Vc),
              option: g(e.Uc)
            }
          });
          w && (w.Mg = g(e.sa));
          return w
        },
        q = {},
        r = function (a, b) {
          var c = q[a];
          q[a] = y(b);
          if (!c) return !1;
          for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
          for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
          return !1
        },
        u = function (b) {
          var c = b.vtp_trackingId,
            d = Vd(),
            g = "gtag_" + c.split("-").join("_"),
            q = function (a) {
              var b = [].slice.call(arguments, 0);
              b[0] = g + "." + b[0];
              d.apply(window, b)
            },
            u = function () {
              var a = function (a, b) {
                  for (var c = 0; b && c < b.length; c++) q(a, b[c])
                },
                b = p(c);
              if (b) {
                var d = b.action;
                if ("impressions" == d) a("ec:addImpression", b.Ff);
                else if ("promo_click" == d || "promo_view" == d) {
                  var e = b.uc;
                  a("ec:addPromo", b.uc);
                  e && 0 < e.length && "promo_click" == d && q("ec:setAction", d)
                } else a("ec:addProduct", b.Ga), q("ec:setAction", d, b.Ra)
              }
            },
            w = function () {
              if (pf()) {} else {
                var a = Ad(T.je, c);
                a && (q("require", a, {
                  dataLayer: "dataLayer"
                }), q("require", "render"))
              }
            },
            P = function () {
              if (pf()) {} else {}
            },
            F = m(c, g, b.vtp_gtmOnSuccess);
          r(g, F.ld) && d(function () {
            Ud() && Ud().remove(g)
          });
          d("create", c, F.ld);
          (function () {
            var a = Ad("custom_map", c);
            d(function () {
              if (Va(a)) {
                var b = F.W,
                  c = Ud().getByName(g),
                  d;
                for (d in a)
                  if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d) && void 0 != a[d]) {
                    var e = c.get(k(a[d]));
                    l(b, d, e)
                  }
              }
            })
          })();
          (function (a) {
            if (a) {
              var b = {};
              if (Va(a))
                for (var c in e) e.hasOwnProperty(c) && h(e[c], c, a[c], b);
              q("require", "linkid", b)
            }
          })(F.linkAttribution);
          var V = F[T.Na];
          if (V && V[T.J]) {
            var Q = V[T.lb];
            Wd(g + ".", V[T.J],
              void 0 === Q ? !!V.use_anchor : "fragment" === Q, !!V[T.kb])
          }
          var K = function (a, b, c) {
              c && (b = "" + b);
              F.W[a] = b
            },
            Z = kd;
          Z == T.Kb ? (w(), q("send", "pageview", F.W)) : Z == T.Y ? (w(), P(), 0 != F.sendPageView && q("send", "pageview", F.W)) : "screen_view" == Z ? q("send", "screenview", F.W) : "timing_complete" == Z ? (K("timingCategory", F.eventCategory, !0), K("timingVar", F.name, !0), K("timingValue", Aa(F.value)), void 0 !== F.eventLabel && K("timingLabel", F.eventLabel, !0), q("send", "timing", F.W)) : "exception" == Z ? q("send", "exception", F.W) : (0 <= xa("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "),
            Z) && (q("require", "ec", "ec.js"), u()), K("eventCategory", F.eventCategory, !0), K("eventAction", F.eventAction || Z, !0), void 0 !== F.eventLabel && K("eventLabel", F.eventLabel, !0), void 0 !== F.value && K("eventValue", Aa(F.value)), q("send", "event", F.W));
          a || (a = !0, Sd(), W("https://www.google-analytics.com/analytics.js", function () {
            Ud().loaded || b.vtp_gtmOnFailure()
          }, b.vtp_gtmOnFailure))
        };
      Y.__gtagua = u;
      Y.__gtagua.g = "gtagua";
      Y.__gtagua.h = !0;
      Y.__gtagua.b = 0
    }();


  var Bi = {};
  Bi.macro = function (a) {
    if (jf.Yb.hasOwnProperty(a)) return jf.Yb[a]
  }, Bi.onHtmlSuccess = jf.jd(!0), Bi.onHtmlFailure = jf.jd(!1);
  Bi.dataLayer = wd;
  Bi.callback = function (a) {
    md.hasOwnProperty(a) && ta(md[a]) && md[a]();
    delete md[a]
  };
  Bi.Me = function () {
    gd[fd.o] = Bi;
    nd = Y.a;
    Rc = Rc || jf;
    Sc = Id
  };
  Bi.Gf = function () {
    gd = B.google_tag_manager = B.google_tag_manager || {};
    if (gd[fd.o]) {
      var a = gd.zones;
      a && a.unregisterChild(fd.o)
    } else {
      for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Kc.push(c[d]);
      for (var e = b.tags || [], g = 0; g < e.length; g++) Nc.push(e[g]);
      for (var h = b.predicates || [], k = 0; k < h.length; k++) Mc.push(h[k]);
      for (var l = b.rules || [], m = 0; m < l.length; m++) {
        for (var p = l[m], q = {}, r = 0; r < p.length; r++) q[p[r][0]] = Array.prototype.slice.call(p[r], 1);
        Lc.push(q)
      }
      Pc = Y;
      var u = data.permissions || {};
      yf();
      Af(u);
      Bi.Me();
      hf();
      Md = !1;
      Nd = 0;
      if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Pd();
      else {
        sb(C, "DOMContentLoaded", Pd);
        sb(C, "readystatechange", Pd);
        if (C.createEventObject && C.documentElement.doScroll) {
          var w = !0;
          try {
            w = !B.frameElement
          } catch (D) {}
          w && Qd()
        }
        sb(B, "load", Pd)
      }
      $e = !1;
      "complete" === C.readyState ? bf() : sb(B, "load", bf);
      a: {
        if (!qe) break a;B.setInterval(re, 864E5);
      }
      jd = (new Date).getTime()
    }
  };
  Bi.Gf();

})()
