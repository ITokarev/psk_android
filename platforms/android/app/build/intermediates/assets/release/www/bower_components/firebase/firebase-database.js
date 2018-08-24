!function (t, e) {
  "use strict";

  try {
    e = e && e.hasOwnProperty("default") ? e.default : e;

    var n = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    };

    function r(t, e) {
      function r() {
        this.constructor = t;
      }

      n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    function i(t, e) {
      var n,
          r,
          i,
          o,
          s = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function a(o) {
        return function (a) {
          return function (o) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; s;) try {
              if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;

              switch (r = 0, i && (o = [0, i.value]), o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;

                case 4:
                  return s.label++, {
                    value: o[1],
                    done: !1
                  };

                case 5:
                  s.label++, r = o[1], o = [0];
                  continue;

                case 7:
                  o = s.ops.pop(), s.trys.pop();
                  continue;

                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                    s = 0;
                    continue;
                  }

                  if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                    s.label = o[1];
                    break;
                  }

                  if (6 === o[0] && s.label < i[1]) {
                    s.label = i[1], i = o;
                    break;
                  }

                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(o);
                    break;
                  }

                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }

              o = e.call(t, s);
            } catch (t) {
              o = [6, t], r = 0;
            } finally {
              n = i = 0;
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, a]);
        };
      }
    }

    var o = {
      NODE_CLIENT: !1,
      NODE_ADMIN: !1,
      SDK_VERSION: "${JSCORE_VERSION}"
    },
        s = function (t, e) {
      if (!t) throw a(e);
    },
        a = function (t) {
      return new Error("Firebase Database (" + o.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t);
    },
        h = function (t) {
      for (var e = [], n = 0, r = 0; r < t.length; r++) {
        var i = t.charCodeAt(r);
        i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = 63 & i | 128) : 55296 == (64512 & i) && r + 1 < t.length && 56320 == (64512 & t.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r)), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = 63 & i | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = 63 & i | 128);
      }

      return e;
    },
        u = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",

      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },

      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },

      HAS_NATIVE_SUPPORT: "function" == typeof atob,
      encodeByteArray: function (t, e) {
        if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
        this.init_();

        for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < t.length; i += 3) {
          var o = t[i],
              s = i + 1 < t.length,
              a = s ? t[i + 1] : 0,
              h = i + 2 < t.length,
              u = h ? t[i + 2] : 0,
              l = o >> 2,
              c = (3 & o) << 4 | a >> 4,
              p = (15 & a) << 2 | u >> 6,
              d = 63 & u;
          h || (d = 64, s || (p = 64)), r.push(n[l], n[c], n[p], n[d]);
        }

        return r.join("");
      },
      encodeString: function (t, e) {
        return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(h(t), e);
      },
      decodeString: function (t, e) {
        return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function (t) {
          for (var e = [], n = 0, r = 0; n < t.length;) {
            var i = t[n++];
            if (i < 128) e[r++] = String.fromCharCode(i);else if (i > 191 && i < 224) {
              var o = t[n++];
              e[r++] = String.fromCharCode((31 & i) << 6 | 63 & o);
            } else if (i > 239 && i < 365) {
              var s = ((7 & i) << 18 | (63 & (o = t[n++])) << 12 | (63 & (a = t[n++])) << 6 | 63 & t[n++]) - 65536;
              e[r++] = String.fromCharCode(55296 + (s >> 10)), e[r++] = String.fromCharCode(56320 + (1023 & s));
            } else {
              o = t[n++];
              var a = t[n++];
              e[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & a);
            }
          }

          return e.join("");
        }(this.decodeStringToByteArray(t, e));
      },
      decodeStringToByteArray: function (t, e) {
        this.init_();

        for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < t.length;) {
          var o = n[t.charAt(i++)],
              s = i < t.length ? n[t.charAt(i)] : 0,
              a = ++i < t.length ? n[t.charAt(i)] : 64,
              h = ++i < t.length ? n[t.charAt(i)] : 64;
          if (++i, null == o || null == s || null == a || null == h) throw Error();
          var u = o << 2 | s >> 4;

          if (r.push(u), 64 != a) {
            var l = s << 4 & 240 | a >> 2;

            if (r.push(l), 64 != h) {
              var c = a << 6 & 192 | h;
              r.push(c);
            }
          }
        }

        return r;
      },
      init_: function () {
        if (!this.byteToCharMap_) {
          this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};

          for (var t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
        }
      }
    },
        l = function (t) {
      try {
        return u.decodeString(t, !0);
      } catch (t) {
        console.error("base64Decode failed: ", t);
      }

      return null;
    };

    function c(t) {
      return function t(e, n) {
        if (!(n instanceof Object)) return n;

        switch (n.constructor) {
          case Date:
            var r = n;
            return new Date(r.getTime());

          case Object:
            void 0 === e && (e = {});
            break;

          case Array:
            e = [];
            break;

          default:
            return n;
        }

        for (var i in n) n.hasOwnProperty(i) && (e[i] = t(e[i], n[i]));

        return e;
      }(void 0, t);
    }

    var p = function () {
      function t() {
        var t = this;
        this.promise = new Promise(function (e, n) {
          t.resolve = e, t.reject = n;
        });
      }

      return t.prototype.wrapCallback = function (t) {
        var e = this;
        return function (n, r) {
          n ? e.reject(n) : e.resolve(r), "function" == typeof t && (e.promise.catch(function () {}), 1 === t.length ? t(n) : t(n, r));
        };
      }, t;
    }(),
        d = function () {
      return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "");
    },
        f = function () {
      return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN;
    },
        _ = "FirebaseError",
        y = Error.captureStackTrace,
        v = function () {
      return function (t, e) {
        if (this.code = t, this.message = e, y) y(this, g.prototype.create);else {
          var n = Error.apply(this, arguments);
          this.name = _, Object.defineProperty(this, "stack", {
            get: function () {
              return n.stack;
            }
          });
        }
      };
    }();

    v.prototype = Object.create(Error.prototype), v.prototype.constructor = v, v.prototype.name = _;

    var g = function () {
      function t(t, e, n) {
        this.service = t, this.serviceName = e, this.errors = n, this.pattern = /\{\$([^}]+)}/g;
      }

      return t.prototype.create = function (t, e) {
        void 0 === e && (e = {});
        var n,
            r = this.errors[t],
            i = this.service + "/" + t;
        n = void 0 === r ? "Error" : r.replace(this.pattern, function (t, n) {
          var r = e[n];
          return void 0 !== r ? r.toString() : "<" + n + "?>";
        }), n = this.serviceName + ": " + n + " (" + i + ").";
        var o = new v(i, n);

        for (var s in e) e.hasOwnProperty(s) && "_" !== s.slice(-1) && (o[s] = e[s]);

        return o;
      }, t;
    }();

    function m(t) {
      return JSON.parse(t);
    }

    function C(t) {
      return JSON.stringify(t);
    }

    var E = function (t) {
      var e = {},
          n = {},
          r = {},
          i = "";

      try {
        var o = t.split(".");
        e = m(l(o[0]) || ""), n = m(l(o[1]) || ""), i = o[2], r = n.d || {}, delete n.d;
      } catch (t) {}

      return {
        header: e,
        claims: n,
        data: r,
        signature: i
      };
    },
        w = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    },
        b = function (t, e) {
      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    },
        S = function (t, e) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
    },
        T = function (t) {
      return e = {}, S(t, function (t, n) {
        e[t] = n;
      }), e;
      var e;
    },
        N = function (t) {
      for (var e in t) return !1;

      return !0;
    },
        I = function (t) {
      var e = 0;

      for (var n in t) e++;

      return e;
    },
        R = function (t, e, n) {
      var r = {};

      for (var i in t) r[i] = e.call(n, t[i], i, t);

      return r;
    },
        P = function (t, e, n) {
      for (var r in t) if (e.call(n, t[r], r, t)) return r;
    },
        D = function (t) {
      for (var e in t) return e;
    },
        O = function (t) {
      function e() {
        var e = t.call(this) || this;
        e.chain_ = [], e.buf_ = [], e.W_ = [], e.pad_ = [], e.inbuf_ = 0, e.total_ = 0, e.blockSize = 64, e.pad_[0] = 128;

        for (var n = 1; n < e.blockSize; ++n) e.pad_[n] = 0;

        return e.reset(), e;
      }

      return r(e, t), e.prototype.reset = function () {
        this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0;
      }, e.prototype.compress_ = function (t, e) {
        e || (e = 0);
        var n = this.W_;
        if ("string" == typeof t) for (var r = 0; r < 16; r++) n[r] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;else for (r = 0; r < 16; r++) n[r] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;

        for (r = 16; r < 80; r++) {
          var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
          n[r] = 4294967295 & (i << 1 | i >>> 31);
        }

        var o,
            s,
            a = this.chain_[0],
            h = this.chain_[1],
            u = this.chain_[2],
            l = this.chain_[3],
            c = this.chain_[4];

        for (r = 0; r < 80; r++) {
          r < 40 ? r < 20 ? (o = l ^ h & (u ^ l), s = 1518500249) : (o = h ^ u ^ l, s = 1859775393) : r < 60 ? (o = h & u | l & (h | u), s = 2400959708) : (o = h ^ u ^ l, s = 3395469782);
          i = (a << 5 | a >>> 27) + o + c + s + n[r] & 4294967295;
          c = l, l = u, u = 4294967295 & (h << 30 | h >>> 2), h = a, a = i;
        }

        this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + h & 4294967295, this.chain_[2] = this.chain_[2] + u & 4294967295, this.chain_[3] = this.chain_[3] + l & 4294967295, this.chain_[4] = this.chain_[4] + c & 4294967295;
      }, e.prototype.update = function (t, e) {
        if (null != t) {
          void 0 === e && (e = t.length);

          for (var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < e;) {
            if (0 == o) for (; r <= n;) this.compress_(t, r), r += this.blockSize;

            if ("string" == typeof t) {
              for (; r < e;) if (i[o] = t.charCodeAt(r), ++r, ++o == this.blockSize) {
                this.compress_(i), o = 0;
                break;
              }
            } else for (; r < e;) if (i[o] = t[r], ++r, ++o == this.blockSize) {
              this.compress_(i), o = 0;
              break;
            }
          }

          this.inbuf_ = o, this.total_ += e;
        }
      }, e.prototype.digest = function () {
        var t = [],
            e = 8 * this.total_;
        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));

        for (var n = this.blockSize - 1; n >= 56; n--) this.buf_[n] = 255 & e, e /= 256;

        this.compress_(this.buf_);
        var r = 0;

        for (n = 0; n < 5; n++) for (var i = 24; i >= 0; i -= 8) t[r] = this.chain_[n] >> i & 255, ++r;

        return t;
      }, e;
    }(function () {
      return function () {
        this.blockSize = -1;
      };
    }()),
        k = function (t, e, n, r) {
      var i;
      if (r < e ? i = "at least " + e : r > n && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(t + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".");
    };

    function x(t, e, n) {
      var r = "";

      switch (e) {
        case 1:
          r = n ? "first" : "First";
          break;

        case 2:
          r = n ? "second" : "Second";
          break;

        case 3:
          r = n ? "third" : "Third";
          break;

        case 4:
          r = n ? "fourth" : "Fourth";
          break;

        default:
          throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
      }

      var i = t + " failed: ";
      return i += r + " argument ";
    }

    function F(t, e, n, r) {
      if ((!r || n) && "function" != typeof n) throw new Error(x(t, e, r) + "must be a valid function.");
    }

    function A(t, e, n, r) {
      if ((!r || n) && ("object" != typeof n || null === n)) throw new Error(x(t, e, r) + "must be a valid context object.");
    }

    var L,
        M = function (t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        var r = t.charCodeAt(n);
        r < 128 ? e++ : r < 2048 ? e += 2 : r >= 55296 && r <= 56319 ? (e += 4, n++) : e += 3;
      }

      return e;
    };

    !function (t) {
      t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
    }(L || (L = {}));

    var W = L.INFO,
        q = function (t, e) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];

      if (!(e < t.logLevel)) {
        var i = new Date().toISOString();

        switch (e) {
          case L.DEBUG:
          case L.VERBOSE:
            console.log.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
            break;

          case L.INFO:
            console.info.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
            break;

          case L.WARN:
            console.warn.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
            break;

          case L.ERROR:
            console.error.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n));
            break;

          default:
            throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
        }
      }
    },
        Q = function () {
      function t(t) {
        this.name = t, this._logLevel = W, this._logHandler = q;
      }

      return Object.defineProperty(t.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (t) {
          if (!(t in L)) throw new TypeError("Invalid value assigned to `logLevel`");
          this._logLevel = t;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "logHandler", {
        get: function () {
          return this._logHandler;
        },
        set: function (t) {
          if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
          this._logHandler = t;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.debug = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        this._logHandler.apply(this, [this, L.DEBUG].concat(t));
      }, t.prototype.log = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        this._logHandler.apply(this, [this, L.VERBOSE].concat(t));
      }, t.prototype.info = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        this._logHandler.apply(this, [this, L.INFO].concat(t));
      }, t.prototype.warn = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        this._logHandler.apply(this, [this, L.WARN].concat(t));
      }, t.prototype.error = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        this._logHandler.apply(this, [this, L.ERROR].concat(t));
      }, t;
    }(),
        U = function () {
      function t(t) {
        this.domStorage_ = t, this.prefix_ = "firebase:";
      }

      return t.prototype.set = function (t, e) {
        null == e ? this.domStorage_.removeItem(this.prefixedName_(t)) : this.domStorage_.setItem(this.prefixedName_(t), C(e));
      }, t.prototype.get = function (t) {
        var e = this.domStorage_.getItem(this.prefixedName_(t));
        return null == e ? null : m(e);
      }, t.prototype.remove = function (t) {
        this.domStorage_.removeItem(this.prefixedName_(t));
      }, t.prototype.prefixedName_ = function (t) {
        return this.prefix_ + t;
      }, t.prototype.toString = function () {
        return this.domStorage_.toString();
      }, t;
    }(),
        V = function () {
      function t() {
        this.cache_ = {}, this.isInMemoryStorage = !0;
      }

      return t.prototype.set = function (t, e) {
        null == e ? delete this.cache_[t] : this.cache_[t] = e;
      }, t.prototype.get = function (t) {
        return w(this.cache_, t) ? this.cache_[t] : null;
      }, t.prototype.remove = function (t) {
        delete this.cache_[t];
      }, t;
    }(),
        H = function (t) {
      try {
        if ("undefined" != typeof window && void 0 !== window[t]) {
          var e = window[t];
          return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new U(e);
        }
      } catch (t) {}

      return new V();
    },
        B = H("localStorage"),
        j = H("sessionStorage"),
        K = new Q("@firebase/database"),
        Y = (Zn = 1, function () {
      return Zn++;
    }),
        z = function (t) {
      var e = function (t) {
        for (var e = [], n = 0, r = 0; r < t.length; r++) {
          var i = t.charCodeAt(r);

          if (i >= 55296 && i <= 56319) {
            var o = i - 55296;
            s(++r < t.length, "Surrogate pair missing trail surrogate."), i = 65536 + (o << 10) + (t.charCodeAt(r) - 56320);
          }

          i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = 63 & i | 128) : i < 65536 ? (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = 63 & i | 128) : (e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = 63 & i | 128);
        }

        return e;
      }(t),
          n = new O();

      n.update(e);
      var r = n.digest();
      return u.encodeByteArray(r);
    },
        G = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

      for (var n = "", r = 0; r < t.length; r++) Array.isArray(t[r]) || t[r] && "object" == typeof t[r] && "number" == typeof t[r].length ? n += G.apply(null, t[r]) : "object" == typeof t[r] ? n += C(t[r]) : n += t[r], n += " ";

      return n;
    },
        X = null,
        $ = !0,
        J = function (t, e) {
      s(!e || !0 === t || !1 === t, "Can't turn on custom loggers persistently."), !0 === t ? (K.logLevel = L.VERBOSE, X = K.log.bind(K), e && j.set("logging_enabled", !0)) : "function" == typeof t ? X = t : (X = null, j.remove("logging_enabled"));
    },
        Z = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

      if (!0 === $ && ($ = !1, null === X && !0 === j.get("logging_enabled") && J(!0)), X) {
        var n = G.apply(null, t);
        X(n);
      }
    },
        tt = function (t) {
      return function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];

        Z.apply(void 0, [t].concat(e));
      };
    },
        et = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

      var n = "FIREBASE INTERNAL ERROR: " + G.apply(void 0, t);
      K.error(n);
    },
        nt = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

      var n = "FIREBASE FATAL ERROR: " + G.apply(void 0, t);
      throw K.error(n), new Error(n);
    },
        rt = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

      var n = "FIREBASE WARNING: " + G.apply(void 0, t);
      K.warn(n);
    },
        it = function (t) {
      return "number" == typeof t && (t != t || t == Number.POSITIVE_INFINITY || t == Number.NEGATIVE_INFINITY);
    },
        ot = "[MIN_NAME]",
        st = "[MAX_NAME]",
        at = function (t, e) {
      if (t === e) return 0;
      if (t === ot || e === st) return -1;
      if (e === ot || t === st) return 1;

      var n = _t(t),
          r = _t(e);

      return null !== n ? null !== r ? n - r == 0 ? t.length - e.length : n - r : -1 : null !== r ? 1 : t < e ? -1 : 1;
    },
        ht = function (t, e) {
      return t === e ? 0 : t < e ? -1 : 1;
    },
        ut = function (t, e) {
      if (e && t in e) return e[t];
      throw new Error("Missing required key (" + t + ") in object: " + C(e));
    },
        lt = function (t) {
      if ("object" != typeof t || null === t) return C(t);
      var e = [];

      for (var n in t) e.push(n);

      e.sort();

      for (var r = "{", i = 0; i < e.length; i++) 0 !== i && (r += ","), r += C(e[i]), r += ":", r += lt(t[e[i]]);

      return r += "}";
    },
        ct = function (t, e) {
      var n = t.length;
      if (n <= e) return [t];

      for (var r = [], i = 0; i < n; i += e) i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));

      return r;
    },
        pt = function (t, e) {
      if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) e(n, t[n]);else S(t, function (t, n) {
        return e(n, t);
      });
    },
        dt = function (t) {
      s(!it(t), "Invalid JSON number");
      var e, n, r, i, o, a, h;

      for (0 === t ? (n = 0, r = 0, e = 1 / t == -1 / 0 ? 1 : 0) : (e = t < 0, (t = Math.abs(t)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) + 1023, r = Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, r = Math.round(t / Math.pow(2, -1074)))), a = [], o = 52; o; o -= 1) a.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);

      for (o = 11; o; o -= 1) a.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);

      a.push(e ? 1 : 0), a.reverse(), h = a.join("");
      var u = "";

      for (o = 0; o < 64; o += 8) {
        var l = parseInt(h.substr(o, 8), 2).toString(16);
        1 === l.length && (l = "0" + l), u += l;
      }

      return u.toLowerCase();
    },
        ft = new RegExp("^-?\\d{1,10}$"),
        _t = function (t) {
      if (ft.test(t)) {
        var e = Number(t);
        if (e >= -2147483648 && e <= 2147483647) return e;
      }

      return null;
    },
        yt = function (t) {
      try {
        t();
      } catch (t) {
        setTimeout(function () {
          var e = t.stack || "";
          throw rt("Exception was thrown by user callback.", e), t;
        }, Math.floor(0));
      }
    },
        vt = function () {
      return ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
    },
        gt = function (t, e) {
      var n = setTimeout(t, e);
      return "object" == typeof n && n.unref && n.unref(), n;
    },
        mt = function () {
      function t(t, e) {
        if (void 0 === e) {
          this.pieces_ = t.split("/");

          for (var n = 0, r = 0; r < this.pieces_.length; r++) this.pieces_[r].length > 0 && (this.pieces_[n] = this.pieces_[r], n++);

          this.pieces_.length = n, this.pieceNum_ = 0;
        } else this.pieces_ = t, this.pieceNum_ = e;
      }

      return Object.defineProperty(t, "Empty", {
        get: function () {
          return new t("");
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.getFront = function () {
        return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_];
      }, t.prototype.getLength = function () {
        return this.pieces_.length - this.pieceNum_;
      }, t.prototype.popFront = function () {
        var e = this.pieceNum_;
        return e < this.pieces_.length && e++, new t(this.pieces_, e);
      }, t.prototype.getBack = function () {
        return this.pieceNum_ < this.pieces_.length ? this.pieces_[this.pieces_.length - 1] : null;
      }, t.prototype.toString = function () {
        for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++) "" !== this.pieces_[e] && (t += "/" + this.pieces_[e]);

        return t || "/";
      }, t.prototype.toUrlEncodedString = function () {
        for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++) "" !== this.pieces_[e] && (t += "/" + encodeURIComponent(String(this.pieces_[e])));

        return t || "/";
      }, t.prototype.slice = function (t) {
        return void 0 === t && (t = 0), this.pieces_.slice(this.pieceNum_ + t);
      }, t.prototype.parent = function () {
        if (this.pieceNum_ >= this.pieces_.length) return null;

        for (var e = [], n = this.pieceNum_; n < this.pieces_.length - 1; n++) e.push(this.pieces_[n]);

        return new t(e, 0);
      }, t.prototype.child = function (e) {
        for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++) n.push(this.pieces_[r]);

        if (e instanceof t) for (r = e.pieceNum_; r < e.pieces_.length; r++) n.push(e.pieces_[r]);else {
          var i = e.split("/");

          for (r = 0; r < i.length; r++) i[r].length > 0 && n.push(i[r]);
        }
        return new t(n, 0);
      }, t.prototype.isEmpty = function () {
        return this.pieceNum_ >= this.pieces_.length;
      }, t.relativePath = function (e, n) {
        var r = e.getFront(),
            i = n.getFront();
        if (null === r) return n;
        if (r === i) return t.relativePath(e.popFront(), n.popFront());
        throw new Error("INTERNAL ERROR: innerPath (" + n + ") is not within outerPath (" + e + ")");
      }, t.comparePaths = function (t, e) {
        for (var n = t.slice(), r = e.slice(), i = 0; i < n.length && i < r.length; i++) {
          var o = at(n[i], r[i]);
          if (0 !== o) return o;
        }

        return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
      }, t.prototype.equals = function (t) {
        if (this.getLength() !== t.getLength()) return !1;

        for (var e = this.pieceNum_, n = t.pieceNum_; e <= this.pieces_.length; e++, n++) if (this.pieces_[e] !== t.pieces_[n]) return !1;

        return !0;
      }, t.prototype.contains = function (t) {
        var e = this.pieceNum_,
            n = t.pieceNum_;
        if (this.getLength() > t.getLength()) return !1;

        for (; e < this.pieces_.length;) {
          if (this.pieces_[e] !== t.pieces_[n]) return !1;
          ++e, ++n;
        }

        return !0;
      }, t;
    }(),
        Ct = function () {
      function t(t, e) {
        this.errorPrefix_ = e, this.parts_ = t.slice(), this.byteLength_ = Math.max(1, this.parts_.length);

        for (var n = 0; n < this.parts_.length; n++) this.byteLength_ += M(this.parts_[n]);

        this.checkValid_();
      }

      return Object.defineProperty(t, "MAX_PATH_DEPTH", {
        get: function () {
          return 32;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t, "MAX_PATH_LENGTH_BYTES", {
        get: function () {
          return 768;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.push = function (t) {
        this.parts_.length > 0 && (this.byteLength_ += 1), this.parts_.push(t), this.byteLength_ += M(t), this.checkValid_();
      }, t.prototype.pop = function () {
        var t = this.parts_.pop();
        this.byteLength_ -= M(t), this.parts_.length > 0 && (this.byteLength_ -= 1);
      }, t.prototype.checkValid_ = function () {
        if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES) throw new Error(this.errorPrefix_ + "has a key path longer than " + t.MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ + ").");
        if (this.parts_.length > t.MAX_PATH_DEPTH) throw new Error(this.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + t.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString());
      }, t.prototype.toErrorString = function () {
        return 0 == this.parts_.length ? "" : "in property '" + this.parts_.join(".") + "'";
      }, t;
    }(),
        Et = "long_polling",
        wt = function () {
      function t(t, e, n, r, i) {
        void 0 === i && (i = ""), this.secure = e, this.namespace = n, this.webSocketOnly = r, this.persistenceKey = i, this.host = t.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = B.get("host:" + t) || this.host;
      }

      return t.prototype.needsQueryParam = function () {
        return this.host !== this.internalHost || this.isCustomHost();
      }, t.prototype.isCacheableHost = function () {
        return "s-" === this.internalHost.substr(0, 2);
      }, t.prototype.isDemoHost = function () {
        return "firebaseio-demo.com" === this.domain;
      }, t.prototype.isCustomHost = function () {
        return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain;
      }, t.prototype.updateHost = function (t) {
        t !== this.internalHost && (this.internalHost = t, this.isCacheableHost() && B.set("host:" + this.host, this.internalHost));
      }, t.prototype.connectionURL = function (t, e) {
        var n;
        if (s("string" == typeof t, "typeof type must == string"), s("object" == typeof e, "typeof params must == object"), "websocket" === t) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";else {
          if (t !== Et) throw new Error("Unknown connection type: " + t);
          n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?";
        }
        this.needsQueryParam() && (e.ns = this.namespace);
        var r = [];
        return S(e, function (t, e) {
          r.push(t + "=" + e);
        }), n + r.join("&");
      }, t.prototype.toString = function () {
        var t = this.toURLString();
        return this.persistenceKey && (t += "<" + this.persistenceKey + ">"), t;
      }, t.prototype.toURLString = function () {
        return (this.secure ? "https://" : "http://") + this.host;
      }, t;
    }();

    var bt,
        St,
        Tt = function (t) {
      var e = Nt(t),
          n = e.subdomain;
      "firebase" === e.domain && nt(e.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), n && "undefined" != n || "localhost" === e.domain || nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), e.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
      var r = "ws" === e.scheme || "wss" === e.scheme;
      return {
        repoInfo: new wt(e.host, e.secure, n, r),
        path: new mt(e.pathString)
      };
    },
        Nt = function (t) {
      var e = "",
          n = "",
          r = "",
          i = "",
          o = !0,
          s = "https",
          a = 443;

      if ("string" == typeof t) {
        var h = t.indexOf("//");
        h >= 0 && (s = t.substring(0, h - 1), t = t.substring(h + 2));
        var u = t.indexOf("/");
        -1 === u && (u = t.length);
        var l = t.indexOf("?");
        -1 === l && (l = t.length), e = t.substring(0, Math.min(u, l)), u < l && (i = function (t) {
          for (var e = "", n = t.split("/"), r = 0; r < n.length; r++) if (n[r].length > 0) {
            var i = n[r];

            try {
              i = decodeURIComponent(i.replace(/\+/g, " "));
            } catch (t) {}

            e += "/" + i;
          }

          return e;
        }(t.substring(u, l)));

        var c = function (t) {
          var e = {};
          t.startsWith("?") && (t = t.substring(1));

          for (var n = 0, r = t.split("&"); n < r.length; n++) {
            var i = r[n];

            if (0 !== i.length) {
              var o = i.split("=");
              2 === o.length ? e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]) : rt("Invalid query segment '" + i + "' in query '" + t + "'");
            }
          }

          return e;
        }(t.substring(Math.min(t.length, l)));

        (h = e.indexOf(":")) >= 0 ? (o = "https" === s || "wss" === s, a = parseInt(e.substring(h + 1), 10)) : h = t.length;
        var p = e.split(".");
        3 === p.length ? (n = p[1], r = p[0].toLowerCase()) : 2 === p.length ? n = p[0] : "localhost" === p[0].slice(0, h).toLowerCase() && (n = "localhost"), "" === r && "ns" in c && (r = c.ns);
      }

      return {
        host: e,
        port: a,
        domain: n,
        subdomain: r,
        secure: o,
        scheme: s,
        pathString: i
      };
    },
        It = /[\[\].#$\/\u0000-\u001F\u007F]/,
        Rt = /[\[\].#$\u0000-\u001F\u007F]/,
        Pt = function (t) {
      return "string" == typeof t && 0 !== t.length && !It.test(t);
    },
        Dt = function (t) {
      return "string" == typeof t && 0 !== t.length && !Rt.test(t);
    },
        Ot = function (t) {
      return null === t || "string" == typeof t || "number" == typeof t && !it(t) || t && "object" == typeof t && w(t, ".sv");
    },
        kt = function (t, e, n, r, i) {
      i && void 0 === n || xt(x(t, e, i), n, r);
    },
        xt = function (t, e, n) {
      var r = n instanceof mt ? new Ct(n, t) : n;
      if (void 0 === e) throw new Error(t + "contains undefined " + r.toErrorString());
      if ("function" == typeof e) throw new Error(t + "contains a function " + r.toErrorString() + " with contents = " + e.toString());
      if (it(e)) throw new Error(t + "contains " + e.toString() + " " + r.toErrorString());
      if ("string" == typeof e && e.length > 10485760 / 3 && M(e) > 10485760) throw new Error(t + "contains a string greater than 10485760 utf8 bytes " + r.toErrorString() + " ('" + e.substring(0, 50) + "...')");

      if (e && "object" == typeof e) {
        var i = !1,
            o = !1;
        if (S(e, function (e, n) {
          if (".value" === e) i = !0;else if (".priority" !== e && ".sv" !== e && (o = !0, !Pt(e))) throw new Error(t + " contains an invalid key (" + e + ") " + r.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
          r.push(e), xt(t, n, r), r.pop();
        }), i && o) throw new Error(t + ' contains ".value" child ' + r.toErrorString() + " in addition to actual children.");
      }
    },
        Ft = function (t, e, n, r, i) {
      if (!i || void 0 !== n) {
        var o = x(t, e, i);
        if (!n || "object" != typeof n || Array.isArray(n)) throw new Error(o + " must be an object containing the children to replace.");
        var s = [];
        S(n, function (t, e) {
          var n = new mt(t);
          if (xt(o, e, r.child(n)), ".priority" === n.getBack() && !Ot(e)) throw new Error(o + "contains an invalid value for '" + n.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
          s.push(n);
        }), function (t, e) {
          var n, r;

          for (n = 0; n < e.length; n++) for (var i = (r = e[n]).slice(), o = 0; o < i.length; o++) if (".priority" === i[o] && o === i.length - 1) ;else if (!Pt(i[o])) throw new Error(t + "contains an invalid key (" + i[o] + ") in path " + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');

          e.sort(mt.comparePaths);
          var s = null;

          for (n = 0; n < e.length; n++) {
            if (r = e[n], null !== s && s.contains(r)) throw new Error(t + "contains a path " + s.toString() + " that is ancestor of another path " + r.toString());
            s = r;
          }
        }(o, s);
      }
    },
        At = function (t, e, n, r) {
      if (!r || void 0 !== n) {
        if (it(n)) throw new Error(x(t, e, r) + "is " + n.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
        if (!Ot(n)) throw new Error(x(t, e, r) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
      }
    },
        Lt = function (t, e, n, r) {
      if (!r || void 0 !== n) switch (n) {
        case "value":
        case "child_added":
        case "child_removed":
        case "child_changed":
        case "child_moved":
          break;

        default:
          throw new Error(x(t, e, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".');
      }
    },
        Mt = function (t, e, n, r) {
      if (!(r && void 0 === n || Pt(n))) throw new Error(x(t, e, r) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
    },
        Wt = function (t, e, n, r) {
      if (!(r && void 0 === n || Dt(n))) throw new Error(x(t, e, r) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
    },
        qt = function (t, e) {
      if (".info" === e.getFront()) throw new Error(t + " failed = Can't modify data under /.info/");
    },
        Qt = function (t, e, n) {
      var r = n.path.toString();
      if ("string" != typeof n.repoInfo.host || 0 === n.repoInfo.host.length || !Pt(n.repoInfo.namespace) && "localhost" !== n.repoInfo.host.split(":")[0] || 0 !== r.length && !function (t) {
        return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), Dt(t);
      }(r)) throw new Error(x(t, e, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
    },
        Ut = function () {
      function t(t, e) {
        this.repo_ = t, this.path_ = e;
      }

      return t.prototype.cancel = function (t) {
        k("OnDisconnect.cancel", 0, 1, arguments.length), F("OnDisconnect.cancel", 1, t, !0);
        var e = new p();
        return this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)), e.promise;
      }, t.prototype.remove = function (t) {
        k("OnDisconnect.remove", 0, 1, arguments.length), qt("OnDisconnect.remove", this.path_), F("OnDisconnect.remove", 1, t, !0);
        var e = new p();
        return this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)), e.promise;
      }, t.prototype.set = function (t, e) {
        k("OnDisconnect.set", 1, 2, arguments.length), qt("OnDisconnect.set", this.path_), kt("OnDisconnect.set", 1, t, this.path_, !1), F("OnDisconnect.set", 2, e, !0);
        var n = new p();
        return this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)), n.promise;
      }, t.prototype.setWithPriority = function (t, e, n) {
        k("OnDisconnect.setWithPriority", 2, 3, arguments.length), qt("OnDisconnect.setWithPriority", this.path_), kt("OnDisconnect.setWithPriority", 1, t, this.path_, !1), At("OnDisconnect.setWithPriority", 2, e, !1), F("OnDisconnect.setWithPriority", 3, n, !0);
        var r = new p();
        return this.repo_.onDisconnectSetWithPriority(this.path_, t, e, r.wrapCallback(n)), r.promise;
      }, t.prototype.update = function (t, e) {
        if (k("OnDisconnect.update", 1, 2, arguments.length), qt("OnDisconnect.update", this.path_), Array.isArray(t)) {
          for (var n = {}, r = 0; r < t.length; ++r) n["" + r] = t[r];

          t = n, rt("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
        }

        Ft("OnDisconnect.update", 1, t, this.path_, !1), F("OnDisconnect.update", 2, e, !0);
        var i = new p();
        return this.repo_.onDisconnectUpdate(this.path_, t, i.wrapCallback(e)), i.promise;
      }, t;
    }(),
        Vt = function () {
      function t(t, e) {
        this.committed = t, this.snapshot = e;
      }

      return t.prototype.toJSON = function () {
        return k("TransactionResult.toJSON", 0, 1, arguments.length), {
          committed: this.committed,
          snapshot: this.snapshot.toJSON()
        };
      }, t;
    }(),
        Ht = (Xn = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", $n = 0, Jn = [], function (t) {
      var e,
          n = t === $n;
      $n = t;
      var r = new Array(8);

      for (e = 7; e >= 0; e--) r[e] = Xn.charAt(t % 64), t = Math.floor(t / 64);

      s(0 === t, "Cannot push at time == 0");
      var i = r.join("");

      if (n) {
        for (e = 11; e >= 0 && 63 === Jn[e]; e--) Jn[e] = 0;

        Jn[e]++;
      } else for (e = 0; e < 12; e++) Jn[e] = Math.floor(64 * Math.random());

      for (e = 0; e < 12; e++) i += Xn.charAt(Jn[e]);

      return s(20 === i.length, "nextPushId: Length should be 20."), i;
    }),
        Bt = function () {
      function t(t, e) {
        this.name = t, this.node = e;
      }

      return t.Wrap = function (e, n) {
        return new t(e, n);
      }, t;
    }(),
        jt = function () {
      function t() {}

      return t.prototype.getCompare = function () {
        return this.compare.bind(this);
      }, t.prototype.indexedValueChanged = function (t, e) {
        var n = new Bt(ot, t),
            r = new Bt(ot, e);
        return 0 !== this.compare(n, r);
      }, t.prototype.minPost = function () {
        return Bt.MIN;
      }, t;
    }(),
        Kt = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return r(e, t), Object.defineProperty(e, "__EMPTY_NODE", {
        get: function () {
          return bt;
        },
        set: function (t) {
          bt = t;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.compare = function (t, e) {
        return at(t.name, e.name);
      }, e.prototype.isDefinedOn = function (t) {
        throw a("KeyIndex.isDefinedOn not expected to be called.");
      }, e.prototype.indexedValueChanged = function (t, e) {
        return !1;
      }, e.prototype.minPost = function () {
        return Bt.MIN;
      }, e.prototype.maxPost = function () {
        return new Bt(st, bt);
      }, e.prototype.makePost = function (t, e) {
        return s("string" == typeof t, "KeyIndex indexValue must always be a string."), new Bt(t, bt);
      }, e.prototype.toString = function () {
        return ".key";
      }, e;
    }(jt),
        Yt = new Kt();

    var zt,
        Gt,
        Xt,
        $t = function (t) {
      return "number" == typeof t ? "number:" + dt(t) : "string:" + t;
    },
        Jt = function (t) {
      if (t.isLeafNode()) {
        var e = t.val();
        s("string" == typeof e || "number" == typeof e || "object" == typeof e && w(e, ".sv"), "Priority must be a string or number.");
      } else s(t === St || t.isEmpty(), "priority of unexpected type.");

      s(t === St || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
    },
        Zt = function () {
      function t(e, n) {
        void 0 === n && (n = t.__childrenNodeConstructor.EMPTY_NODE), this.value_ = e, this.priorityNode_ = n, this.lazyHash_ = null, s(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), Jt(this.priorityNode_);
      }

      return Object.defineProperty(t, "__childrenNodeConstructor", {
        get: function () {
          return zt;
        },
        set: function (t) {
          zt = t;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isLeafNode = function () {
        return !0;
      }, t.prototype.getPriority = function () {
        return this.priorityNode_;
      }, t.prototype.updatePriority = function (e) {
        return new t(this.value_, e);
      }, t.prototype.getImmediateChild = function (e) {
        return ".priority" === e ? this.priorityNode_ : t.__childrenNodeConstructor.EMPTY_NODE;
      }, t.prototype.getChild = function (e) {
        return e.isEmpty() ? this : ".priority" === e.getFront() ? this.priorityNode_ : t.__childrenNodeConstructor.EMPTY_NODE;
      }, t.prototype.hasChild = function () {
        return !1;
      }, t.prototype.getPredecessorChildName = function (t, e) {
        return null;
      }, t.prototype.updateImmediateChild = function (e, n) {
        return ".priority" === e ? this.updatePriority(n) : n.isEmpty() && ".priority" !== e ? this : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_);
      }, t.prototype.updateChild = function (e, n) {
        var r = e.getFront();
        return null === r ? n : n.isEmpty() && ".priority" !== r ? this : (s(".priority" !== r || 1 === e.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(r, t.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(), n)));
      }, t.prototype.isEmpty = function () {
        return !1;
      }, t.prototype.numChildren = function () {
        return 0;
      }, t.prototype.forEachChild = function (t, e) {
        return !1;
      }, t.prototype.val = function (t) {
        return t && !this.getPriority().isEmpty() ? {
          ".value": this.getValue(),
          ".priority": this.getPriority().val()
        } : this.getValue();
      }, t.prototype.hash = function () {
        if (null === this.lazyHash_) {
          var t = "";
          this.priorityNode_.isEmpty() || (t += "priority:" + $t(this.priorityNode_.val()) + ":");
          var e = typeof this.value_;
          t += e + ":", t += "number" === e ? dt(this.value_) : this.value_, this.lazyHash_ = z(t);
        }

        return this.lazyHash_;
      }, t.prototype.getValue = function () {
        return this.value_;
      }, t.prototype.compareTo = function (e) {
        return e === t.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof t.__childrenNodeConstructor ? -1 : (s(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
      }, t.prototype.compareToLeafNode_ = function (e) {
        var n = typeof e.value_,
            r = typeof this.value_,
            i = t.VALUE_TYPE_ORDER.indexOf(n),
            o = t.VALUE_TYPE_ORDER.indexOf(r);
        return s(i >= 0, "Unknown leaf type: " + n), s(o >= 0, "Unknown leaf type: " + r), i === o ? "object" === r ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : o - i;
      }, t.prototype.withIndex = function () {
        return this;
      }, t.prototype.isIndexed = function () {
        return !0;
      }, t.prototype.equals = function (t) {
        if (t === this) return !0;

        if (t.isLeafNode()) {
          var e = t;
          return this.value_ === e.value_ && this.priorityNode_.equals(e.priorityNode_);
        }

        return !1;
      }, t.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], t;
    }();

    var te,
        ee,
        ne = new (function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return r(e, t), e.prototype.compare = function (t, e) {
        var n = t.node.getPriority(),
            r = e.node.getPriority(),
            i = n.compareTo(r);
        return 0 === i ? at(t.name, e.name) : i;
      }, e.prototype.isDefinedOn = function (t) {
        return !t.getPriority().isEmpty();
      }, e.prototype.indexedValueChanged = function (t, e) {
        return !t.getPriority().equals(e.getPriority());
      }, e.prototype.minPost = function () {
        return Bt.MIN;
      }, e.prototype.maxPost = function () {
        return new Bt(st, new Zt("[PRIORITY-POST]", Xt));
      }, e.prototype.makePost = function (t, e) {
        var n = Gt(t);
        return new Bt(e, new Zt("[PRIORITY-POST]", n));
      }, e.prototype.toString = function () {
        return ".priority";
      }, e;
    }(jt))(),
        re = function () {
      function t(t, e, n, r, i) {
        void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = [];

        for (var o = 1; !t.isEmpty();) if (t = t, o = e ? n(t.key, e) : 1, r && (o *= -1), o < 0) t = this.isReverse_ ? t.left : t.right;else {
          if (0 === o) {
            this.nodeStack_.push(t);
            break;
          }

          this.nodeStack_.push(t), t = this.isReverse_ ? t.right : t.left;
        }
      }

      return t.prototype.getNext = function () {
        if (0 === this.nodeStack_.length) return null;
        var t,
            e = this.nodeStack_.pop();
        if (t = this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
          key: e.key,
          value: e.value
        }, this.isReverse_) for (e = e.left; !e.isEmpty();) this.nodeStack_.push(e), e = e.right;else for (e = e.right; !e.isEmpty();) this.nodeStack_.push(e), e = e.left;
        return t;
      }, t.prototype.hasNext = function () {
        return this.nodeStack_.length > 0;
      }, t.prototype.peek = function () {
        if (0 === this.nodeStack_.length) return null;
        var t = this.nodeStack_[this.nodeStack_.length - 1];
        return this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
          key: t.key,
          value: t.value
        };
      }, t;
    }(),
        ie = function () {
      function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : se.EMPTY_NODE, this.right = null != o ? o : se.EMPTY_NODE;
      }

      return t.prototype.copy = function (e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
      }, t.prototype.count = function () {
        return this.left.count() + 1 + this.right.count();
      }, t.prototype.isEmpty = function () {
        return !1;
      }, t.prototype.inorderTraversal = function (t) {
        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
      }, t.prototype.reverseTraversal = function (t) {
        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
      }, t.prototype.min_ = function () {
        return this.left.isEmpty() ? this : this.left.min_();
      }, t.prototype.minKey = function () {
        return this.min_().key;
      }, t.prototype.maxKey = function () {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
      }, t.prototype.insert = function (t, e, n) {
        var r, i;
        return (i = (r = n(t, (i = this).key)) < 0 ? i.copy(null, null, null, i.left.insert(t, e, n), null) : 0 === r ? i.copy(null, e, null, null, null) : i.copy(null, null, null, null, i.right.insert(t, e, n))).fixUp_();
      }, t.prototype.removeMin_ = function () {
        if (this.left.isEmpty()) return se.EMPTY_NODE;
        var t = this;
        return t.left.isRed_() || t.left.left.isRed_() || (t = t.moveRedLeft_()), (t = t.copy(null, null, null, t.left.removeMin_(), null)).fixUp_();
      }, t.prototype.remove = function (t, e) {
        var n, r;
        if (e(t, (n = this).key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(t, e), null);else {
          if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === e(t, n.key)) {
            if (n.right.isEmpty()) return se.EMPTY_NODE;
            r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_());
          }

          n = n.copy(null, null, null, null, n.right.remove(t, e));
        }
        return n.fixUp_();
      }, t.prototype.isRed_ = function () {
        return this.color;
      }, t.prototype.fixUp_ = function () {
        var t = this;
        return t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()), t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()), t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()), t;
      }, t.prototype.moveRedLeft_ = function () {
        var t = this.colorFlip_();
        return t.right.left.isRed_() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight_())).rotateLeft_()).colorFlip_()), t;
      }, t.prototype.moveRedRight_ = function () {
        var t = this.colorFlip_();
        return t.left.left.isRed_() && (t = (t = t.rotateRight_()).colorFlip_()), t;
      }, t.prototype.rotateLeft_ = function () {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
      }, t.prototype.rotateRight_ = function () {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
      }, t.prototype.colorFlip_ = function () {
        var t = this.left.copy(null, null, !this.left.color, null, null),
            e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
      }, t.prototype.checkMaxDepth_ = function () {
        var t = this.check_();
        return Math.pow(2, t) <= this.count() + 1;
      }, t.prototype.check_ = function () {
        var t;
        if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
        if ((t = this.left.check_()) !== this.right.check_()) throw new Error("Black depths differ");
        return t + (this.isRed_() ? 0 : 1);
      }, t.RED = !0, t.BLACK = !1, t;
    }(),
        oe = function () {
      function t() {}

      return t.prototype.copy = function (t, e, n, r, i) {
        return this;
      }, t.prototype.insert = function (t, e, n) {
        return new ie(t, e, null);
      }, t.prototype.remove = function (t, e) {
        return this;
      }, t.prototype.count = function () {
        return 0;
      }, t.prototype.isEmpty = function () {
        return !0;
      }, t.prototype.inorderTraversal = function (t) {
        return !1;
      }, t.prototype.reverseTraversal = function (t) {
        return !1;
      }, t.prototype.minKey = function () {
        return null;
      }, t.prototype.maxKey = function () {
        return null;
      }, t.prototype.check_ = function () {
        return 0;
      }, t.prototype.isRed_ = function () {
        return !1;
      }, t;
    }(),
        se = function () {
      function t(e, n) {
        void 0 === n && (n = t.EMPTY_NODE), this.comparator_ = e, this.root_ = n;
      }

      return t.prototype.insert = function (e, n) {
        return new t(this.comparator_, this.root_.insert(e, n, this.comparator_).copy(null, null, ie.BLACK, null, null));
      }, t.prototype.remove = function (e) {
        return new t(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, ie.BLACK, null, null));
      }, t.prototype.get = function (t) {
        for (var e, n = this.root_; !n.isEmpty();) {
          if (0 === (e = this.comparator_(t, n.key))) return n.value;
          e < 0 ? n = n.left : e > 0 && (n = n.right);
        }

        return null;
      }, t.prototype.getPredecessorKey = function (t) {
        for (var e, n = this.root_, r = null; !n.isEmpty();) {
          if (0 === (e = this.comparator_(t, n.key))) {
            if (n.left.isEmpty()) return r ? r.key : null;

            for (n = n.left; !n.right.isEmpty();) n = n.right;

            return n.key;
          }

          e < 0 ? n = n.left : e > 0 && (r = n, n = n.right);
        }

        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
      }, t.prototype.isEmpty = function () {
        return this.root_.isEmpty();
      }, t.prototype.count = function () {
        return this.root_.count();
      }, t.prototype.minKey = function () {
        return this.root_.minKey();
      }, t.prototype.maxKey = function () {
        return this.root_.maxKey();
      }, t.prototype.inorderTraversal = function (t) {
        return this.root_.inorderTraversal(t);
      }, t.prototype.reverseTraversal = function (t) {
        return this.root_.reverseTraversal(t);
      }, t.prototype.getIterator = function (t) {
        return new re(this.root_, null, this.comparator_, !1, t);
      }, t.prototype.getIteratorFrom = function (t, e) {
        return new re(this.root_, t, this.comparator_, !1, e);
      }, t.prototype.getReverseIteratorFrom = function (t, e) {
        return new re(this.root_, t, this.comparator_, !0, e);
      }, t.prototype.getReverseIterator = function (t) {
        return new re(this.root_, null, this.comparator_, !0, t);
      }, t.EMPTY_NODE = new oe(), t;
    }(),
        ae = Math.log(2),
        he = function () {
      function t(t) {
        var e;
        this.count = (e = t + 1, parseInt(Math.log(e) / ae, 10)), this.current_ = this.count - 1;
        var n,
            r = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
        this.bits_ = t + 1 & r;
      }

      return t.prototype.nextBitIsOne = function () {
        var t = !(this.bits_ & 1 << this.current_);
        return this.current_--, t;
      }, t;
    }(),
        ue = function (t, e, n, r) {
      t.sort(e);

      var i = function (e, r) {
        var o,
            s,
            a = r - e;
        if (0 == a) return null;
        if (1 == a) return o = t[e], s = n ? n(o) : o, new ie(s, o.node, ie.BLACK, null, null);
        var h = parseInt(a / 2, 10) + e,
            u = i(e, h),
            l = i(h + 1, r);
        return o = t[h], s = n ? n(o) : o, new ie(s, o.node, ie.BLACK, u, l);
      },
          o = function (e) {
        for (var r = null, o = null, s = t.length, a = function (e, r) {
          var o = s - e,
              a = s;
          s -= e;
          var u = i(o + 1, a),
              l = t[o],
              c = n ? n(l) : l;
          h(new ie(c, l.node, r, null, u));
        }, h = function (t) {
          r ? (r.left = t, r = t) : (o = t, r = t);
        }, u = 0; u < e.count; ++u) {
          var l = e.nextBitIsOne(),
              c = Math.pow(2, e.count - (u + 1));
          l ? a(c, ie.BLACK) : (a(c, ie.BLACK), a(c, ie.RED));
        }

        return o;
      }(new he(t.length));

      return new se(r || e, o);
    },
        le = {},
        ce = function () {
      function t(t, e) {
        this.indexes_ = t, this.indexSet_ = e;
      }

      return Object.defineProperty(t, "Default", {
        get: function () {
          return s(le && ne, "ChildrenNode.ts has not been loaded"), te = te || new t({
            ".priority": le
          }, {
            ".priority": ne
          });
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function (t) {
        var e = b(this.indexes_, t);
        if (!e) throw new Error("No index defined for " + t);
        return e === le ? null : e;
      }, t.prototype.hasIndex = function (t) {
        return w(this.indexSet_, t.toString());
      }, t.prototype.addIndex = function (e, n) {
        s(e !== Yt, "KeyIndex always exists and isn't meant to be added to the IndexMap.");

        for (var r, i = [], o = !1, a = n.getIterator(Bt.Wrap), h = a.getNext(); h;) o = o || e.isDefinedOn(h.node), i.push(h), h = a.getNext();

        r = o ? ue(i, e.getCompare()) : le;
        var u = e.toString(),
            l = T(this.indexSet_);
        l[u] = e;
        var c = T(this.indexes_);
        return c[u] = r, new t(c, l);
      }, t.prototype.addToIndexes = function (e, n) {
        var r = this;
        return new t(R(this.indexes_, function (t, i) {
          var o = b(r.indexSet_, i);

          if (s(o, "Missing index implementation for " + i), t === le) {
            if (o.isDefinedOn(e.node)) {
              for (var a = [], h = n.getIterator(Bt.Wrap), u = h.getNext(); u;) u.name != e.name && a.push(u), u = h.getNext();

              return a.push(e), ue(a, o.getCompare());
            }

            return le;
          }

          var l = n.get(e.name),
              c = t;
          return l && (c = c.remove(new Bt(e.name, l))), c.insert(e, e.node);
        }), this.indexSet_);
      }, t.prototype.removeFromIndexes = function (e, n) {
        return new t(R(this.indexes_, function (t) {
          if (t === le) return t;
          var r = n.get(e.name);
          return r ? t.remove(new Bt(e.name, r)) : t;
        }), this.indexSet_);
      }, t;
    }();

    function pe(t, e) {
      return at(t.name, e.name);
    }

    function de(t, e) {
      return at(t, e);
    }

    var fe = function () {
      function t(t, e, n) {
        this.children_ = t, this.priorityNode_ = e, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && Jt(this.priorityNode_), this.children_.isEmpty() && s(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
      }

      return Object.defineProperty(t, "EMPTY_NODE", {
        get: function () {
          return ee || (ee = new t(new se(de), null, ce.Default));
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isLeafNode = function () {
        return !1;
      }, t.prototype.getPriority = function () {
        return this.priorityNode_ || ee;
      }, t.prototype.updatePriority = function (e) {
        return this.children_.isEmpty() ? this : new t(this.children_, e, this.indexMap_);
      }, t.prototype.getImmediateChild = function (t) {
        if (".priority" === t) return this.getPriority();
        var e = this.children_.get(t);
        return null === e ? ee : e;
      }, t.prototype.getChild = function (t) {
        var e = t.getFront();
        return null === e ? this : this.getImmediateChild(e).getChild(t.popFront());
      }, t.prototype.hasChild = function (t) {
        return null !== this.children_.get(t);
      }, t.prototype.updateImmediateChild = function (e, n) {
        if (s(n, "We should always be passing snapshot nodes"), ".priority" === e) return this.updatePriority(n);
        var r = new Bt(e, n),
            i = void 0,
            o = void 0;
        return n.isEmpty() ? (i = this.children_.remove(e), o = this.indexMap_.removeFromIndexes(r, this.children_)) : (i = this.children_.insert(e, n), o = this.indexMap_.addToIndexes(r, this.children_)), new t(i, i.isEmpty() ? ee : this.priorityNode_, o);
      }, t.prototype.updateChild = function (t, e) {
        var n = t.getFront();
        if (null === n) return e;
        s(".priority" !== t.getFront() || 1 === t.getLength(), ".priority must be the last token in a path");
        var r = this.getImmediateChild(n).updateChild(t.popFront(), e);
        return this.updateImmediateChild(n, r);
      }, t.prototype.isEmpty = function () {
        return this.children_.isEmpty();
      }, t.prototype.numChildren = function () {
        return this.children_.count();
      }, t.prototype.val = function (e) {
        if (this.isEmpty()) return null;
        var n = {},
            r = 0,
            i = 0,
            o = !0;

        if (this.forEachChild(ne, function (s, a) {
          n[s] = a.val(e), r++, o && t.INTEGER_REGEXP_.test(s) ? i = Math.max(i, Number(s)) : o = !1;
        }), !e && o && i < 2 * r) {
          var s = [];

          for (var a in n) s[a] = n[a];

          return s;
        }

        return e && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()), n;
      }, t.prototype.hash = function () {
        if (null === this.lazyHash_) {
          var t = "";
          this.getPriority().isEmpty() || (t += "priority:" + $t(this.getPriority().val()) + ":"), this.forEachChild(ne, function (e, n) {
            var r = n.hash();
            "" !== r && (t += ":" + e + ":" + r);
          }), this.lazyHash_ = "" === t ? "" : z(t);
        }

        return this.lazyHash_;
      }, t.prototype.getPredecessorChildName = function (t, e, n) {
        var r = this.resolveIndex_(n);

        if (r) {
          var i = r.getPredecessorKey(new Bt(t, e));
          return i ? i.name : null;
        }

        return this.children_.getPredecessorKey(t);
      }, t.prototype.getFirstChildName = function (t) {
        var e = this.resolveIndex_(t);

        if (e) {
          var n = e.minKey();
          return n && n.name;
        }

        return this.children_.minKey();
      }, t.prototype.getFirstChild = function (t) {
        var e = this.getFirstChildName(t);
        return e ? new Bt(e, this.children_.get(e)) : null;
      }, t.prototype.getLastChildName = function (t) {
        var e = this.resolveIndex_(t);

        if (e) {
          var n = e.maxKey();
          return n && n.name;
        }

        return this.children_.maxKey();
      }, t.prototype.getLastChild = function (t) {
        var e = this.getLastChildName(t);
        return e ? new Bt(e, this.children_.get(e)) : null;
      }, t.prototype.forEachChild = function (t, e) {
        var n = this.resolveIndex_(t);
        return n ? n.inorderTraversal(function (t) {
          return e(t.name, t.node);
        }) : this.children_.inorderTraversal(e);
      }, t.prototype.getIterator = function (t) {
        return this.getIteratorFrom(t.minPost(), t);
      }, t.prototype.getIteratorFrom = function (t, e) {
        var n = this.resolveIndex_(e);
        if (n) return n.getIteratorFrom(t, function (t) {
          return t;
        });

        for (var r = this.children_.getIteratorFrom(t.name, Bt.Wrap), i = r.peek(); null != i && e.compare(i, t) < 0;) r.getNext(), i = r.peek();

        return r;
      }, t.prototype.getReverseIterator = function (t) {
        return this.getReverseIteratorFrom(t.maxPost(), t);
      }, t.prototype.getReverseIteratorFrom = function (t, e) {
        var n = this.resolveIndex_(e);
        if (n) return n.getReverseIteratorFrom(t, function (t) {
          return t;
        });

        for (var r = this.children_.getReverseIteratorFrom(t.name, Bt.Wrap), i = r.peek(); null != i && e.compare(i, t) > 0;) r.getNext(), i = r.peek();

        return r;
      }, t.prototype.compareTo = function (t) {
        return this.isEmpty() ? t.isEmpty() ? 0 : -1 : t.isLeafNode() || t.isEmpty() ? 1 : t === _e ? -1 : 0;
      }, t.prototype.withIndex = function (e) {
        if (e === Yt || this.indexMap_.hasIndex(e)) return this;
        var n = this.indexMap_.addIndex(e, this.children_);
        return new t(this.children_, this.priorityNode_, n);
      }, t.prototype.isIndexed = function (t) {
        return t === Yt || this.indexMap_.hasIndex(t);
      }, t.prototype.equals = function (t) {
        if (t === this) return !0;
        if (t.isLeafNode()) return !1;
        var e = t;

        if (this.getPriority().equals(e.getPriority())) {
          if (this.children_.count() === e.children_.count()) {
            for (var n = this.getIterator(ne), r = e.getIterator(ne), i = n.getNext(), o = r.getNext(); i && o;) {
              if (i.name !== o.name || !i.node.equals(o.node)) return !1;
              i = n.getNext(), o = r.getNext();
            }

            return null === i && null === o;
          }

          return !1;
        }

        return !1;
      }, t.prototype.resolveIndex_ = function (t) {
        return t === Yt ? null : this.indexMap_.get(t.toString());
      }, t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, t;
    }(),
        _e = new (function (t) {
      function e() {
        return t.call(this, new se(de), fe.EMPTY_NODE, ce.Default) || this;
      }

      return r(e, t), e.prototype.compareTo = function (t) {
        return t === this ? 0 : 1;
      }, e.prototype.equals = function (t) {
        return t === this;
      }, e.prototype.getPriority = function () {
        return this;
      }, e.prototype.getImmediateChild = function (t) {
        return fe.EMPTY_NODE;
      }, e.prototype.isEmpty = function () {
        return !1;
      }, e;
    }(fe))();

    Object.defineProperties(Bt, {
      MIN: {
        value: new Bt(ot, fe.EMPTY_NODE)
      },
      MAX: {
        value: new Bt(st, _e)
      }
    }), Kt.__EMPTY_NODE = fe.EMPTY_NODE, Zt.__childrenNodeConstructor = fe, St = _e, function (t) {
      Xt = t;
    }(_e);
    var ye = !0;

    function ve(t, e) {
      if (void 0 === e && (e = null), null === t) return fe.EMPTY_NODE;
      if ("object" == typeof t && ".priority" in t && (e = t[".priority"]), s(null === e || "string" == typeof e || "number" == typeof e || "object" == typeof e && ".sv" in e, "Invalid priority type found: " + typeof e), "object" == typeof t && ".value" in t && null !== t[".value"] && (t = t[".value"]), "object" != typeof t || ".sv" in t) return new Zt(t, ve(e));

      if (t instanceof Array || !ye) {
        var n = fe.EMPTY_NODE,
            r = t;
        return S(r, function (t, e) {
          if (w(r, t) && "." !== t.substring(0, 1)) {
            var i = ve(e);
            !i.isLeafNode() && i.isEmpty() || (n = n.updateImmediateChild(t, i));
          }
        }), n.updatePriority(ve(e));
      }

      var i = [],
          o = !1,
          a = t;
      if (S(a, function (t, e) {
        if ("string" != typeof t || "." !== t.substring(0, 1)) {
          var n = ve(a[t]);
          n.isEmpty() || (o = o || !n.getPriority().isEmpty(), i.push(new Bt(t, n)));
        }
      }), 0 == i.length) return fe.EMPTY_NODE;
      var h = ue(i, pe, function (t) {
        return t.name;
      }, de);

      if (o) {
        var u = ue(i, ne.getCompare());
        return new fe(h, ve(e), new ce({
          ".priority": u
        }, {
          ".priority": ne
        }));
      }

      return new fe(h, ve(e), ce.Default);
    }

    !function (t) {
      Gt = t;
    }(ve);

    var ge,
        me,
        Ce = new (function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return r(e, t), e.prototype.compare = function (t, e) {
        var n = t.node.compareTo(e.node);
        return 0 === n ? at(t.name, e.name) : n;
      }, e.prototype.isDefinedOn = function (t) {
        return !0;
      }, e.prototype.indexedValueChanged = function (t, e) {
        return !t.equals(e);
      }, e.prototype.minPost = function () {
        return Bt.MIN;
      }, e.prototype.maxPost = function () {
        return Bt.MAX;
      }, e.prototype.makePost = function (t, e) {
        var n = ve(t);
        return new Bt(e, n);
      }, e.prototype.toString = function () {
        return ".value";
      }, e;
    }(jt))(),
        Ee = function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return n.indexPath_ = e, s(!e.isEmpty() && ".priority" !== e.getFront(), "Can't create PathIndex with empty path or .priority key"), n;
      }

      return r(e, t), e.prototype.extractChild = function (t) {
        return t.getChild(this.indexPath_);
      }, e.prototype.isDefinedOn = function (t) {
        return !t.getChild(this.indexPath_).isEmpty();
      }, e.prototype.compare = function (t, e) {
        var n = this.extractChild(t.node),
            r = this.extractChild(e.node),
            i = n.compareTo(r);
        return 0 === i ? at(t.name, e.name) : i;
      }, e.prototype.makePost = function (t, e) {
        var n = ve(t),
            r = fe.EMPTY_NODE.updateChild(this.indexPath_, n);
        return new Bt(e, r);
      }, e.prototype.maxPost = function () {
        var t = fe.EMPTY_NODE.updateChild(this.indexPath_, _e);
        return new Bt(st, t);
      }, e.prototype.toString = function () {
        return this.indexPath_.slice().join("/");
      }, e;
    }(jt),
        we = function () {
      function t(t, e, n) {
        this.node_ = t, this.ref_ = e, this.index_ = n;
      }

      return t.prototype.val = function () {
        return k("DataSnapshot.val", 0, 0, arguments.length), this.node_.val();
      }, t.prototype.exportVal = function () {
        return k("DataSnapshot.exportVal", 0, 0, arguments.length), this.node_.val(!0);
      }, t.prototype.toJSON = function () {
        return k("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal();
      }, t.prototype.exists = function () {
        return k("DataSnapshot.exists", 0, 0, arguments.length), !this.node_.isEmpty();
      }, t.prototype.child = function (e) {
        k("DataSnapshot.child", 0, 1, arguments.length), e = String(e), Wt("DataSnapshot.child", 1, e, !1);
        var n = new mt(e),
            r = this.ref_.child(n);
        return new t(this.node_.getChild(n), r, ne);
      }, t.prototype.hasChild = function (t) {
        k("DataSnapshot.hasChild", 1, 1, arguments.length), Wt("DataSnapshot.hasChild", 1, t, !1);
        var e = new mt(t);
        return !this.node_.getChild(e).isEmpty();
      }, t.prototype.getPriority = function () {
        return k("DataSnapshot.getPriority", 0, 0, arguments.length), this.node_.getPriority().val();
      }, t.prototype.forEach = function (e) {
        var n = this;
        return k("DataSnapshot.forEach", 1, 1, arguments.length), F("DataSnapshot.forEach", 1, e, !1), !this.node_.isLeafNode() && !!this.node_.forEachChild(this.index_, function (r, i) {
          return e(new t(i, n.ref_.child(r), ne));
        });
      }, t.prototype.hasChildren = function () {
        return k("DataSnapshot.hasChildren", 0, 0, arguments.length), !this.node_.isLeafNode() && !this.node_.isEmpty();
      }, Object.defineProperty(t.prototype, "key", {
        get: function () {
          return this.ref_.getKey();
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.numChildren = function () {
        return k("DataSnapshot.numChildren", 0, 0, arguments.length), this.node_.numChildren();
      }, t.prototype.getRef = function () {
        return k("DataSnapshot.ref", 0, 0, arguments.length), this.ref_;
      }, Object.defineProperty(t.prototype, "ref", {
        get: function () {
          return this.getRef();
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }(),
        be = function () {
      function t(t, e, n, r) {
        this.eventType = t, this.eventRegistration = e, this.snapshot = n, this.prevName = r;
      }

      return t.prototype.getPath = function () {
        var t = this.snapshot.getRef();
        return "value" === this.eventType ? t.path : t.getParent().path;
      }, t.prototype.getEventType = function () {
        return this.eventType;
      }, t.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
      }, t.prototype.toString = function () {
        return this.getPath().toString() + ":" + this.eventType + ":" + C(this.snapshot.exportVal());
      }, t;
    }(),
        Se = function () {
      function t(t, e, n) {
        this.eventRegistration = t, this.error = e, this.path = n;
      }

      return t.prototype.getPath = function () {
        return this.path;
      }, t.prototype.getEventType = function () {
        return "cancel";
      }, t.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
      }, t.prototype.toString = function () {
        return this.path.toString() + ":cancel";
      }, t;
    }(),
        Te = function () {
      function t(t, e, n) {
        this.callback_ = t, this.cancelCallback_ = e, this.context_ = n;
      }

      return t.prototype.respondsTo = function (t) {
        return "value" === t;
      }, t.prototype.createEvent = function (t, e) {
        var n = e.getQueryParams().getIndex();
        return new be("value", this, new we(t.snapshotNode, e.getRef(), n));
      }, t.prototype.getEventRunner = function (t) {
        var e = this.context_;

        if ("cancel" === t.getEventType()) {
          s(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
          var n = this.cancelCallback_;
          return function () {
            n.call(e, t.error);
          };
        }

        var r = this.callback_;
        return function () {
          r.call(e, t.snapshot);
        };
      }, t.prototype.createCancelEvent = function (t, e) {
        return this.cancelCallback_ ? new Se(this, t, e) : null;
      }, t.prototype.matches = function (e) {
        return e instanceof t && (!e.callback_ || !this.callback_ || e.callback_ === this.callback_ && e.context_ === this.context_);
      }, t.prototype.hasAnyCallback = function () {
        return null !== this.callback_;
      }, t;
    }(),
        Ne = function () {
      function t(t, e, n) {
        this.callbacks_ = t, this.cancelCallback_ = e, this.context_ = n;
      }

      return t.prototype.respondsTo = function (t) {
        var e = "children_added" === t ? "child_added" : t;
        return e = "children_removed" === e ? "child_removed" : e, w(this.callbacks_, e);
      }, t.prototype.createCancelEvent = function (t, e) {
        return this.cancelCallback_ ? new Se(this, t, e) : null;
      }, t.prototype.createEvent = function (t, e) {
        s(null != t.childName, "Child events should have a childName.");
        var n = e.getRef().child(t.childName),
            r = e.getQueryParams().getIndex();
        return new be(t.type, this, new we(t.snapshotNode, n, r), t.prevName);
      }, t.prototype.getEventRunner = function (t) {
        var e = this.context_;

        if ("cancel" === t.getEventType()) {
          s(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
          var n = this.cancelCallback_;
          return function () {
            n.call(e, t.error);
          };
        }

        var r = this.callbacks_[t.eventType];
        return function () {
          r.call(e, t.snapshot, t.prevName);
        };
      }, t.prototype.matches = function (e) {
        if (e instanceof t) {
          if (!this.callbacks_ || !e.callbacks_) return !0;

          if (this.context_ === e.context_) {
            var n = I(e.callbacks_);

            if (n === I(this.callbacks_)) {
              if (1 === n) {
                var r = D(e.callbacks_),
                    i = D(this.callbacks_);
                return !(i !== r || e.callbacks_[r] && this.callbacks_[i] && e.callbacks_[r] !== this.callbacks_[i]);
              }

              return function (t, e) {
                for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n) && !e(n, t[n])) return !1;

                return !0;
              }(this.callbacks_, function (t, n) {
                return e.callbacks_[t] === n;
              });
            }
          }
        }

        return !1;
      }, t.prototype.hasAnyCallback = function () {
        return null !== this.callbacks_;
      }, t;
    }(),
        Ie = function () {
      function t(t, e, n, r) {
        this.repo = t, this.path = e, this.queryParams_ = n, this.orderByCalled_ = r;
      }

      return Object.defineProperty(t, "__referenceConstructor", {
        get: function () {
          return s(ge, "Reference.ts has not been loaded"), ge;
        },
        set: function (t) {
          ge = t;
        },
        enumerable: !0,
        configurable: !0
      }), t.validateQueryEndpoints_ = function (t) {
        var e = null,
            n = null;

        if (t.hasStart() && (e = t.getIndexStartValue()), t.hasEnd() && (n = t.getIndexEndValue()), t.getIndex() === Yt) {
          var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
              i = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";

          if (t.hasStart()) {
            if (t.getIndexStartName() != ot) throw new Error(r);
            if ("string" != typeof e) throw new Error(i);
          }

          if (t.hasEnd()) {
            if (t.getIndexEndName() != st) throw new Error(r);
            if ("string" != typeof n) throw new Error(i);
          }
        } else if (t.getIndex() === ne) {
          if (null != e && !Ot(e) || null != n && !Ot(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
        } else if (s(t.getIndex() instanceof Ee || t.getIndex() === Ce, "unknown index type."), null != e && "object" == typeof e || null != n && "object" == typeof n) throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
      }, t.validateLimit_ = function (t) {
        if (t.hasStart() && t.hasEnd() && t.hasLimit() && !t.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
      }, t.prototype.validateNoPreviousOrderByCall_ = function (t) {
        if (!0 === this.orderByCalled_) throw new Error(t + ": You can't combine multiple orderBy calls.");
      }, t.prototype.getQueryParams = function () {
        return this.queryParams_;
      }, t.prototype.getRef = function () {
        return k("Query.ref", 0, 0, arguments.length), new t.__referenceConstructor(this.repo, this.path);
      }, t.prototype.on = function (e, n, r, i) {
        k("Query.on", 2, 4, arguments.length), Lt("Query.on", 1, e, !1), F("Query.on", 2, n, !1);
        var o = t.getCancelAndContextArgs_("Query.on", r, i);
        if ("value" === e) this.onValueEvent(n, o.cancel, o.context);else {
          var s = {};
          s[e] = n, this.onChildEvent(s, o.cancel, o.context);
        }
        return n;
      }, t.prototype.onValueEvent = function (t, e, n) {
        var r = new Te(t, e || null, n || null);
        this.repo.addEventCallbackForQuery(this, r);
      }, t.prototype.onChildEvent = function (t, e, n) {
        var r = new Ne(t, e, n);
        this.repo.addEventCallbackForQuery(this, r);
      }, t.prototype.off = function (t, e, n) {
        k("Query.off", 0, 3, arguments.length), Lt("Query.off", 1, t, !0), F("Query.off", 2, e, !0), A("Query.off", 3, n, !0);
        var r = null,
            i = null;
        "value" === t ? r = new Te(e || null, null, n || null) : t && (e && ((i = {})[t] = e), r = new Ne(i, null, n || null));
        this.repo.removeEventCallbackForQuery(this, r);
      }, t.prototype.once = function (e, n, r, i) {
        var o = this;
        k("Query.once", 1, 4, arguments.length), Lt("Query.once", 1, e, !1), F("Query.once", 2, n, !0);
        var s = t.getCancelAndContextArgs_("Query.once", r, i),
            a = !0,
            h = new p();
        h.promise.catch(function () {});

        var u = function (t) {
          a && (a = !1, o.off(e, u), n && n.bind(s.context)(t), h.resolve(t));
        };

        return this.on(e, u, function (t) {
          o.off(e, u), s.cancel && s.cancel.bind(s.context)(t), h.reject(t);
        }), h.promise;
      }, t.prototype.limitToFirst = function (e) {
        if (k("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("Query.limitToFirst: First argument must be a positive integer.");
        if (this.queryParams_.hasLimit()) throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new t(this.repo, this.path, this.queryParams_.limitToFirst(e), this.orderByCalled_);
      }, t.prototype.limitToLast = function (e) {
        if (k("Query.limitToLast", 1, 1, arguments.length), "number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("Query.limitToLast: First argument must be a positive integer.");
        if (this.queryParams_.hasLimit()) throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
        return new t(this.repo, this.path, this.queryParams_.limitToLast(e), this.orderByCalled_);
      }, t.prototype.orderByChild = function (e) {
        if (k("Query.orderByChild", 1, 1, arguments.length), "$key" === e) throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
        if ("$priority" === e) throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
        if ("$value" === e) throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
        Wt("Query.orderByChild", 1, e, !1), this.validateNoPreviousOrderByCall_("Query.orderByChild");
        var n = new mt(e);
        if (n.isEmpty()) throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
        var r = new Ee(n),
            i = this.queryParams_.orderBy(r);
        return t.validateQueryEndpoints_(i), new t(this.repo, this.path, i, !0);
      }, t.prototype.orderByKey = function () {
        k("Query.orderByKey", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByKey");
        var e = this.queryParams_.orderBy(Yt);
        return t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0);
      }, t.prototype.orderByPriority = function () {
        k("Query.orderByPriority", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByPriority");
        var e = this.queryParams_.orderBy(ne);
        return t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0);
      }, t.prototype.orderByValue = function () {
        k("Query.orderByValue", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByValue");
        var e = this.queryParams_.orderBy(Ce);
        return t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0);
      }, t.prototype.startAt = function (e, n) {
        void 0 === e && (e = null), k("Query.startAt", 0, 2, arguments.length), kt("Query.startAt", 1, e, this.path, !0), Mt("Query.startAt", 2, n, !0);
        var r = this.queryParams_.startAt(e, n);
        if (t.validateLimit_(r), t.validateQueryEndpoints_(r), this.queryParams_.hasStart()) throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
        return void 0 === e && (e = null, n = null), new t(this.repo, this.path, r, this.orderByCalled_);
      }, t.prototype.endAt = function (e, n) {
        void 0 === e && (e = null), k("Query.endAt", 0, 2, arguments.length), kt("Query.endAt", 1, e, this.path, !0), Mt("Query.endAt", 2, n, !0);
        var r = this.queryParams_.endAt(e, n);
        if (t.validateLimit_(r), t.validateQueryEndpoints_(r), this.queryParams_.hasEnd()) throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
        return new t(this.repo, this.path, r, this.orderByCalled_);
      }, t.prototype.equalTo = function (t, e) {
        if (k("Query.equalTo", 1, 2, arguments.length), kt("Query.equalTo", 1, t, this.path, !1), Mt("Query.equalTo", 2, e, !0), this.queryParams_.hasStart()) throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");
        if (this.queryParams_.hasEnd()) throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
        return this.startAt(t, e).endAt(t, e);
      }, t.prototype.toString = function () {
        return k("Query.toString", 0, 0, arguments.length), this.repo.toString() + this.path.toUrlEncodedString();
      }, t.prototype.toJSON = function () {
        return k("Query.toJSON", 0, 1, arguments.length), this.toString();
      }, t.prototype.queryObject = function () {
        return this.queryParams_.getQueryObject();
      }, t.prototype.queryIdentifier = function () {
        var t = this.queryObject(),
            e = lt(t);
        return "{}" === e ? "default" : e;
      }, t.prototype.isEqual = function (e) {
        if (k("Query.isEqual", 1, 1, arguments.length), !(e instanceof t)) {
          throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");
        }

        var n = this.repo === e.repo,
            r = this.path.equals(e.path),
            i = this.queryIdentifier() === e.queryIdentifier();
        return n && r && i;
      }, t.getCancelAndContextArgs_ = function (t, e, n) {
        var r = {
          cancel: null,
          context: null
        };
        if (e && n) r.cancel = e, F(t, 3, r.cancel, !0), r.context = n, A(t, 4, r.context, !0);else if (e) if ("object" == typeof e && null !== e) r.context = e;else {
          if ("function" != typeof e) throw new Error(x(t, 3, !0) + " must either be a cancel callback or a context object.");
          r.cancel = e;
        }
        return r;
      }, Object.defineProperty(t.prototype, "ref", {
        get: function () {
          return this.getRef();
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }(),
        Re = function () {
      function t() {
        this.set = {};
      }

      return t.prototype.add = function (t, e) {
        this.set[t] = null === e || e;
      }, t.prototype.contains = function (t) {
        return w(this.set, t);
      }, t.prototype.get = function (t) {
        return this.contains(t) ? this.set[t] : void 0;
      }, t.prototype.remove = function (t) {
        delete this.set[t];
      }, t.prototype.clear = function () {
        this.set = {};
      }, t.prototype.isEmpty = function () {
        return N(this.set);
      }, t.prototype.count = function () {
        return I(this.set);
      }, t.prototype.each = function (t) {
        S(this.set, function (e, n) {
          return t(e, n);
        });
      }, t.prototype.keys = function () {
        var t = [];
        return S(this.set, function (e) {
          t.push(e);
        }), t;
      }, t;
    }(),
        Pe = function () {
      function t() {
        this.value_ = null, this.children_ = null;
      }

      return t.prototype.find = function (t) {
        if (null != this.value_) return this.value_.getChild(t);
        if (t.isEmpty() || null == this.children_) return null;
        var e = t.getFront();
        return t = t.popFront(), this.children_.contains(e) ? this.children_.get(e).find(t) : null;
      }, t.prototype.remember = function (e, n) {
        if (e.isEmpty()) this.value_ = n, this.children_ = null;else if (null !== this.value_) this.value_ = this.value_.updateChild(e, n);else {
          null == this.children_ && (this.children_ = new Re());
          var r = e.getFront();
          this.children_.contains(r) || this.children_.add(r, new t());
          var i = this.children_.get(r);
          e = e.popFront(), i.remember(e, n);
        }
      }, t.prototype.forget = function (t) {
        if (t.isEmpty()) return this.value_ = null, this.children_ = null, !0;

        if (null !== this.value_) {
          if (this.value_.isLeafNode()) return !1;
          var e = this.value_;
          this.value_ = null;
          var n = this;
          return e.forEachChild(ne, function (t, e) {
            n.remember(new mt(t), e);
          }), this.forget(t);
        }

        if (null !== this.children_) {
          var r = t.getFront();
          if (t = t.popFront(), this.children_.contains(r)) this.children_.get(r).forget(t) && this.children_.remove(r);
          return !!this.children_.isEmpty() && (this.children_ = null, !0);
        }

        return !0;
      }, t.prototype.forEachTree = function (t, e) {
        null !== this.value_ ? e(t, this.value_) : this.forEachChild(function (n, r) {
          var i = new mt(t.toString() + "/" + n);
          r.forEachTree(i, e);
        });
      }, t.prototype.forEachChild = function (t) {
        null !== this.children_ && this.children_.each(function (e, n) {
          t(e, n);
        });
      }, t;
    }(),
        De = function (t, e) {
      return t && "object" == typeof t ? (s(".sv" in t, "Unexpected leaf node or priority contents"), e[t[".sv"]]) : t;
    },
        Oe = function (t, e) {
      var n,
          r = t.getPriority().val(),
          i = De(r, e);

      if (t.isLeafNode()) {
        var o = t,
            s = De(o.getValue(), e);
        return s !== o.getValue() || i !== o.getPriority().val() ? new Zt(s, ve(i)) : t;
      }

      var a = t;
      return n = a, i !== a.getPriority().val() && (n = n.updatePriority(new Zt(i))), a.forEachChild(ne, function (t, r) {
        var i = Oe(r, e);
        i !== r && (n = n.updateImmediateChild(t, i));
      }), n;
    };

    !function (t) {
      t[t.OVERWRITE = 0] = "OVERWRITE", t[t.MERGE = 1] = "MERGE", t[t.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", t[t.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
    }(me || (me = {}));

    var ke,
        xe,
        Fe = function () {
      function t(t, e, n, r) {
        this.fromUser = t, this.fromServer = e, this.queryId = n, this.tagged = r, s(!r || e, "Tagged queries must be from server.");
      }

      return t.User = new t(!0, !1, null, !1), t.Server = new t(!1, !0, null, !1), t.forServerTaggedQuery = function (e) {
        return new t(!1, !0, e, !0);
      }, t;
    }(),
        Ae = function () {
      function t(t, e, n) {
        this.path = t, this.affectedTree = e, this.revert = n, this.type = me.ACK_USER_WRITE, this.source = Fe.User;
      }

      return t.prototype.operationForChild = function (e) {
        if (this.path.isEmpty()) {
          if (null != this.affectedTree.value) return s(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
          var n = this.affectedTree.subtree(new mt(e));
          return new t(mt.Empty, n, this.revert);
        }

        return s(this.path.getFront() === e, "operationForChild called for unrelated child."), new t(this.path.popFront(), this.affectedTree, this.revert);
      }, t;
    }(),
        Le = function () {
      return ke || (ke = new se(ht)), ke;
    },
        Me = function () {
      function t(t, e) {
        void 0 === e && (e = Le()), this.value = t, this.children = e;
      }

      return t.fromObject = function (e) {
        var n = t.Empty;
        return S(e, function (t, e) {
          n = n.set(new mt(t), e);
        }), n;
      }, t.prototype.isEmpty = function () {
        return null === this.value && this.children.isEmpty();
      }, t.prototype.findRootMostMatchingPathAndValue = function (t, e) {
        if (null != this.value && e(this.value)) return {
          path: mt.Empty,
          value: this.value
        };
        if (t.isEmpty()) return null;
        var n = t.getFront(),
            r = this.children.get(n);

        if (null !== r) {
          var i = r.findRootMostMatchingPathAndValue(t.popFront(), e);
          return null != i ? {
            path: new mt(n).child(i.path),
            value: i.value
          } : null;
        }

        return null;
      }, t.prototype.findRootMostValueAndPath = function (t) {
        return this.findRootMostMatchingPathAndValue(t, function () {
          return !0;
        });
      }, t.prototype.subtree = function (e) {
        if (e.isEmpty()) return this;
        var n = e.getFront(),
            r = this.children.get(n);
        return null !== r ? r.subtree(e.popFront()) : t.Empty;
      }, t.prototype.set = function (e, n) {
        if (e.isEmpty()) return new t(n, this.children);
        var r = e.getFront(),
            i = (this.children.get(r) || t.Empty).set(e.popFront(), n),
            o = this.children.insert(r, i);
        return new t(this.value, o);
      }, t.prototype.remove = function (e) {
        if (e.isEmpty()) return this.children.isEmpty() ? t.Empty : new t(null, this.children);
        var n = e.getFront(),
            r = this.children.get(n);

        if (r) {
          var i = r.remove(e.popFront()),
              o = void 0;
          return o = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i), null === this.value && o.isEmpty() ? t.Empty : new t(this.value, o);
        }

        return this;
      }, t.prototype.get = function (t) {
        if (t.isEmpty()) return this.value;
        var e = t.getFront(),
            n = this.children.get(e);
        return n ? n.get(t.popFront()) : null;
      }, t.prototype.setTree = function (e, n) {
        if (e.isEmpty()) return n;
        var r = e.getFront(),
            i = (this.children.get(r) || t.Empty).setTree(e.popFront(), n),
            o = void 0;
        return o = i.isEmpty() ? this.children.remove(r) : this.children.insert(r, i), new t(this.value, o);
      }, t.prototype.fold = function (t) {
        return this.fold_(mt.Empty, t);
      }, t.prototype.fold_ = function (t, e) {
        var n = {};
        return this.children.inorderTraversal(function (r, i) {
          n[r] = i.fold_(t.child(r), e);
        }), e(t, this.value, n);
      }, t.prototype.findOnPath = function (t, e) {
        return this.findOnPath_(t, mt.Empty, e);
      }, t.prototype.findOnPath_ = function (t, e, n) {
        var r = !!this.value && n(e, this.value);
        if (r) return r;
        if (t.isEmpty()) return null;
        var i = t.getFront(),
            o = this.children.get(i);
        return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null;
      }, t.prototype.foreachOnPath = function (t, e) {
        return this.foreachOnPath_(t, mt.Empty, e);
      }, t.prototype.foreachOnPath_ = function (e, n, r) {
        if (e.isEmpty()) return this;
        this.value && r(n, this.value);
        var i = e.getFront(),
            o = this.children.get(i);
        return o ? o.foreachOnPath_(e.popFront(), n.child(i), r) : t.Empty;
      }, t.prototype.foreach = function (t) {
        this.foreach_(mt.Empty, t);
      }, t.prototype.foreach_ = function (t, e) {
        this.children.inorderTraversal(function (n, r) {
          r.foreach_(t.child(n), e);
        }), this.value && e(t, this.value);
      }, t.prototype.foreachChild = function (t) {
        this.children.inorderTraversal(function (e, n) {
          n.value && t(e, n.value);
        });
      }, t.Empty = new t(null), t;
    }(),
        We = function () {
      function t(t, e) {
        this.source = t, this.path = e, this.type = me.LISTEN_COMPLETE;
      }

      return t.prototype.operationForChild = function (e) {
        return this.path.isEmpty() ? new t(this.source, mt.Empty) : new t(this.source, this.path.popFront());
      }, t;
    }(),
        qe = function () {
      function t(t, e, n) {
        this.source = t, this.path = e, this.snap = n, this.type = me.OVERWRITE;
      }

      return t.prototype.operationForChild = function (e) {
        return this.path.isEmpty() ? new t(this.source, mt.Empty, this.snap.getImmediateChild(e)) : new t(this.source, this.path.popFront(), this.snap);
      }, t;
    }(),
        Qe = function () {
      function t(t, e, n) {
        this.source = t, this.path = e, this.children = n, this.type = me.MERGE;
      }

      return t.prototype.operationForChild = function (e) {
        if (this.path.isEmpty()) {
          var n = this.children.subtree(new mt(e));
          return n.isEmpty() ? null : n.value ? new qe(this.source, mt.Empty, n.value) : new t(this.source, mt.Empty, n);
        }

        return s(this.path.getFront() === e, "Can't get a merge for a child not on the path of the operation"), new t(this.source, this.path.popFront(), this.children);
      }, t.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
      }, t;
    }(),
        Ue = function () {
      function t(t, e, n) {
        this.node_ = t, this.fullyInitialized_ = e, this.filtered_ = n;
      }

      return t.prototype.isFullyInitialized = function () {
        return this.fullyInitialized_;
      }, t.prototype.isFiltered = function () {
        return this.filtered_;
      }, t.prototype.isCompleteForPath = function (t) {
        if (t.isEmpty()) return this.isFullyInitialized() && !this.filtered_;
        var e = t.getFront();
        return this.isCompleteForChild(e);
      }, t.prototype.isCompleteForChild = function (t) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(t);
      }, t.prototype.getNode = function () {
        return this.node_;
      }, t;
    }(),
        Ve = function () {
      function t(t, e) {
        this.eventCache_ = t, this.serverCache_ = e;
      }

      return t.prototype.updateEventSnap = function (e, n, r) {
        return new t(new Ue(e, n, r), this.serverCache_);
      }, t.prototype.updateServerSnap = function (e, n, r) {
        return new t(this.eventCache_, new Ue(e, n, r));
      }, t.prototype.getEventCache = function () {
        return this.eventCache_;
      }, t.prototype.getCompleteEventSnap = function () {
        return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null;
      }, t.prototype.getServerCache = function () {
        return this.serverCache_;
      }, t.prototype.getCompleteServerSnap = function () {
        return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null;
      }, t.Empty = new t(new Ue(fe.EMPTY_NODE, !1, !1), new Ue(fe.EMPTY_NODE, !1, !1)), t;
    }(),
        He = function () {
      function t(t, e, n, r, i) {
        this.type = t, this.snapshotNode = e, this.childName = n, this.oldSnap = r, this.prevName = i;
      }

      return t.valueChange = function (e) {
        return new t(t.VALUE, e);
      }, t.childAddedChange = function (e, n) {
        return new t(t.CHILD_ADDED, n, e);
      }, t.childRemovedChange = function (e, n) {
        return new t(t.CHILD_REMOVED, n, e);
      }, t.childChangedChange = function (e, n, r) {
        return new t(t.CHILD_CHANGED, n, e, r);
      }, t.childMovedChange = function (e, n) {
        return new t(t.CHILD_MOVED, n, e);
      }, t.CHILD_ADDED = "child_added", t.CHILD_REMOVED = "child_removed", t.CHILD_CHANGED = "child_changed", t.CHILD_MOVED = "child_moved", t.VALUE = "value", t;
    }(),
        Be = function () {
      function t(t) {
        this.index_ = t;
      }

      return t.prototype.updateChild = function (t, e, n, r, i, o) {
        s(t.isIndexed(this.index_), "A node must be indexed if only a child is updated");
        var a = t.getImmediateChild(e);
        return a.getChild(r).equals(n.getChild(r)) && a.isEmpty() == n.isEmpty() ? t : (null != o && (n.isEmpty() ? t.hasChild(e) ? o.trackChildChange(He.childRemovedChange(e, a)) : s(t.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(He.childAddedChange(e, n)) : o.trackChildChange(He.childChangedChange(e, n, a))), t.isLeafNode() && n.isEmpty() ? t : t.updateImmediateChild(e, n).withIndex(this.index_));
      }, t.prototype.updateFullNode = function (t, e, n) {
        return null != n && (t.isLeafNode() || t.forEachChild(ne, function (t, r) {
          e.hasChild(t) || n.trackChildChange(He.childRemovedChange(t, r));
        }), e.isLeafNode() || e.forEachChild(ne, function (e, r) {
          if (t.hasChild(e)) {
            var i = t.getImmediateChild(e);
            i.equals(r) || n.trackChildChange(He.childChangedChange(e, r, i));
          } else n.trackChildChange(He.childAddedChange(e, r));
        })), e.withIndex(this.index_);
      }, t.prototype.updatePriority = function (t, e) {
        return t.isEmpty() ? fe.EMPTY_NODE : t.updatePriority(e);
      }, t.prototype.filtersNodes = function () {
        return !1;
      }, t.prototype.getIndexedFilter = function () {
        return this;
      }, t.prototype.getIndex = function () {
        return this.index_;
      }, t;
    }(),
        je = function () {
      function t() {
        this.changeMap_ = {};
      }

      return t.prototype.trackChildChange = function (t) {
        var e = t.type,
            n = t.childName;
        s(e == He.CHILD_ADDED || e == He.CHILD_CHANGED || e == He.CHILD_REMOVED, "Only child changes supported for tracking"), s(".priority" !== n, "Only non-priority child changes can be tracked.");
        var r = b(this.changeMap_, n);

        if (r) {
          var i = r.type;
          if (e == He.CHILD_ADDED && i == He.CHILD_REMOVED) this.changeMap_[n] = He.childChangedChange(n, t.snapshotNode, r.snapshotNode);else if (e == He.CHILD_REMOVED && i == He.CHILD_ADDED) delete this.changeMap_[n];else if (e == He.CHILD_REMOVED && i == He.CHILD_CHANGED) this.changeMap_[n] = He.childRemovedChange(n, r.oldSnap);else if (e == He.CHILD_CHANGED && i == He.CHILD_ADDED) this.changeMap_[n] = He.childAddedChange(n, t.snapshotNode);else {
            if (e != He.CHILD_CHANGED || i != He.CHILD_CHANGED) throw a("Illegal combination of changes: " + t + " occurred after " + r);
            this.changeMap_[n] = He.childChangedChange(n, t.snapshotNode, r.oldSnap);
          }
        } else this.changeMap_[n] = t;
      }, t.prototype.getChanges = function () {
        return function (t) {
          var e = [],
              n = 0;

          for (var r in t) e[n++] = t[r];

          return e;
        }(this.changeMap_);
      }, t;
    }(),
        Ke = new (function () {
      function t() {}

      return t.prototype.getCompleteChild = function (t) {
        return null;
      }, t.prototype.getChildAfterChild = function (t, e, n) {
        return null;
      }, t;
    }())(),
        Ye = function () {
      function t(t, e, n) {
        void 0 === n && (n = null), this.writes_ = t, this.viewCache_ = e, this.optCompleteServerCache_ = n;
      }

      return t.prototype.getCompleteChild = function (t) {
        var e = this.viewCache_.getEventCache();
        if (e.isCompleteForChild(t)) return e.getNode().getImmediateChild(t);
        var n = null != this.optCompleteServerCache_ ? new Ue(this.optCompleteServerCache_, !0, !1) : this.viewCache_.getServerCache();
        return this.writes_.calcCompleteChild(t, n);
      }, t.prototype.getChildAfterChild = function (t, e, n) {
        var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap(),
            i = this.writes_.calcIndexedSlice(r, e, 1, n, t);
        return 0 === i.length ? null : i[0];
      }, t;
    }(),
        ze = function () {
      return function (t, e) {
        this.viewCache = t, this.changes = e;
      };
    }(),
        Ge = function () {
      function t(t) {
        this.filter_ = t;
      }

      return t.prototype.assertIndexed = function (t) {
        s(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()), "Event snap not indexed"), s(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()), "Server snap not indexed");
      }, t.prototype.applyOperation = function (e, n, r, i) {
        var o,
            h,
            u = new je();

        if (n.type === me.OVERWRITE) {
          var l = n;
          l.source.fromUser ? o = this.applyUserOverwrite_(e, l.path, l.snap, r, i, u) : (s(l.source.fromServer, "Unknown source."), h = l.source.tagged || e.getServerCache().isFiltered() && !l.path.isEmpty(), o = this.applyServerOverwrite_(e, l.path, l.snap, r, i, h, u));
        } else if (n.type === me.MERGE) {
          var c = n;
          c.source.fromUser ? o = this.applyUserMerge_(e, c.path, c.children, r, i, u) : (s(c.source.fromServer, "Unknown source."), h = c.source.tagged || e.getServerCache().isFiltered(), o = this.applyServerMerge_(e, c.path, c.children, r, i, h, u));
        } else if (n.type === me.ACK_USER_WRITE) {
          var p = n;
          o = p.revert ? this.revertUserWrite_(e, p.path, r, i, u) : this.ackUserWrite_(e, p.path, p.affectedTree, r, i, u);
        } else {
          if (n.type !== me.LISTEN_COMPLETE) throw a("Unknown operation type: " + n.type);
          o = this.listenComplete_(e, n.path, r, u);
        }

        var d = u.getChanges();
        return t.maybeAddValueEvent_(e, o, d), new ze(o, d);
      }, t.maybeAddValueEvent_ = function (t, e, n) {
        var r = e.getEventCache();

        if (r.isFullyInitialized()) {
          var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
              o = t.getCompleteEventSnap();
          (n.length > 0 || !t.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(He.valueChange(e.getCompleteEventSnap()));
        }
      }, t.prototype.generateEventCacheAfterServerEvent_ = function (t, e, n, r, i) {
        var o = t.getEventCache();
        if (null != n.shadowingWrite(e)) return t;
        var a = void 0,
            h = void 0;
        if (e.isEmpty()) {
          if (s(t.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"), t.getServerCache().isFiltered()) {
            var u = t.getCompleteServerSnap(),
                l = u instanceof fe ? u : fe.EMPTY_NODE,
                c = n.calcCompleteEventChildren(l);
            a = this.filter_.updateFullNode(t.getEventCache().getNode(), c, i);
          } else {
            var p = n.calcCompleteEventCache(t.getCompleteServerSnap());
            a = this.filter_.updateFullNode(t.getEventCache().getNode(), p, i);
          }
        } else {
          var d = e.getFront();

          if (".priority" == d) {
            s(1 == e.getLength(), "Can't have a priority with additional path components");
            var f = o.getNode();
            h = t.getServerCache().getNode();

            var _ = n.calcEventCacheAfterServerOverwrite(e, f, h);

            a = null != _ ? this.filter_.updatePriority(f, _) : o.getNode();
          } else {
            var y = e.popFront(),
                v = void 0;

            if (o.isCompleteForChild(d)) {
              h = t.getServerCache().getNode();
              var g = n.calcEventCacheAfterServerOverwrite(e, o.getNode(), h);
              v = null != g ? o.getNode().getImmediateChild(d).updateChild(y, g) : o.getNode().getImmediateChild(d);
            } else v = n.calcCompleteChild(d, t.getServerCache());

            a = null != v ? this.filter_.updateChild(o.getNode(), d, v, y, r, i) : o.getNode();
          }
        }
        return t.updateEventSnap(a, o.isFullyInitialized() || e.isEmpty(), this.filter_.filtersNodes());
      }, t.prototype.applyServerOverwrite_ = function (t, e, n, r, i, o, s) {
        var a,
            h = t.getServerCache(),
            u = o ? this.filter_ : this.filter_.getIndexedFilter();
        if (e.isEmpty()) a = u.updateFullNode(h.getNode(), n, null);else if (u.filtersNodes() && !h.isFiltered()) {
          var l = h.getNode().updateChild(e, n);
          a = u.updateFullNode(h.getNode(), l, null);
        } else {
          var c = e.getFront();
          if (!h.isCompleteForPath(e) && e.getLength() > 1) return t;
          var p = e.popFront(),
              d = h.getNode().getImmediateChild(c).updateChild(p, n);
          a = ".priority" == c ? u.updatePriority(h.getNode(), d) : u.updateChild(h.getNode(), c, d, p, Ke, null);
        }

        var f = t.updateServerSnap(a, h.isFullyInitialized() || e.isEmpty(), u.filtersNodes()),
            _ = new Ye(r, f, i);

        return this.generateEventCacheAfterServerEvent_(f, e, r, _, s);
      }, t.prototype.applyUserOverwrite_ = function (t, e, n, r, i, o) {
        var s,
            a,
            h = t.getEventCache(),
            u = new Ye(r, t, i);
        if (e.isEmpty()) a = this.filter_.updateFullNode(t.getEventCache().getNode(), n, o), s = t.updateEventSnap(a, !0, this.filter_.filtersNodes());else {
          var l = e.getFront();
          if (".priority" === l) a = this.filter_.updatePriority(t.getEventCache().getNode(), n), s = t.updateEventSnap(a, h.isFullyInitialized(), h.isFiltered());else {
            var c = e.popFront(),
                p = h.getNode().getImmediateChild(l),
                d = void 0;
            if (c.isEmpty()) d = n;else {
              var f = u.getCompleteChild(l);
              d = null != f ? ".priority" === c.getBack() && f.getChild(c.parent()).isEmpty() ? f : f.updateChild(c, n) : fe.EMPTY_NODE;
            }
            if (p.equals(d)) s = t;else {
              var _ = this.filter_.updateChild(h.getNode(), l, d, c, u, o);

              s = t.updateEventSnap(_, h.isFullyInitialized(), this.filter_.filtersNodes());
            }
          }
        }
        return s;
      }, t.cacheHasChild_ = function (t, e) {
        return t.getEventCache().isCompleteForChild(e);
      }, t.prototype.applyUserMerge_ = function (e, n, r, i, o, s) {
        var a = this,
            h = e;
        return r.foreach(function (r, u) {
          var l = n.child(r);
          t.cacheHasChild_(e, l.getFront()) && (h = a.applyUserOverwrite_(h, l, u, i, o, s));
        }), r.foreach(function (r, u) {
          var l = n.child(r);
          t.cacheHasChild_(e, l.getFront()) || (h = a.applyUserOverwrite_(h, l, u, i, o, s));
        }), h;
      }, t.prototype.applyMerge_ = function (t, e) {
        return e.foreach(function (e, n) {
          t = t.updateChild(e, n);
        }), t;
      }, t.prototype.applyServerMerge_ = function (t, e, n, r, i, o, s) {
        var a = this;
        if (t.getServerCache().getNode().isEmpty() && !t.getServerCache().isFullyInitialized()) return t;
        var h,
            u = t;
        h = e.isEmpty() ? n : Me.Empty.setTree(e, n);
        var l = t.getServerCache().getNode();
        return h.children.inorderTraversal(function (e, n) {
          if (l.hasChild(e)) {
            var h = t.getServerCache().getNode().getImmediateChild(e),
                c = a.applyMerge_(h, n);
            u = a.applyServerOverwrite_(u, new mt(e), c, r, i, o, s);
          }
        }), h.children.inorderTraversal(function (e, n) {
          var h = !t.getServerCache().isCompleteForChild(e) && null == n.value;

          if (!l.hasChild(e) && !h) {
            var c = t.getServerCache().getNode().getImmediateChild(e),
                p = a.applyMerge_(c, n);
            u = a.applyServerOverwrite_(u, new mt(e), p, r, i, o, s);
          }
        }), u;
      }, t.prototype.ackUserWrite_ = function (t, e, n, r, i, o) {
        if (null != r.shadowingWrite(e)) return t;
        var s = t.getServerCache().isFiltered(),
            a = t.getServerCache();

        if (null != n.value) {
          if (e.isEmpty() && a.isFullyInitialized() || a.isCompleteForPath(e)) return this.applyServerOverwrite_(t, e, a.getNode().getChild(e), r, i, s, o);

          if (e.isEmpty()) {
            var h = Me.Empty;
            return a.getNode().forEachChild(Yt, function (t, e) {
              h = h.set(new mt(t), e);
            }), this.applyServerMerge_(t, e, h, r, i, s, o);
          }

          return t;
        }

        var u = Me.Empty;
        return n.foreach(function (t, n) {
          var r = e.child(t);
          a.isCompleteForPath(r) && (u = u.set(t, a.getNode().getChild(r)));
        }), this.applyServerMerge_(t, e, u, r, i, s, o);
      }, t.prototype.listenComplete_ = function (t, e, n, r) {
        var i = t.getServerCache(),
            o = t.updateServerSnap(i.getNode(), i.isFullyInitialized() || e.isEmpty(), i.isFiltered());
        return this.generateEventCacheAfterServerEvent_(o, e, n, Ke, r);
      }, t.prototype.revertUserWrite_ = function (t, e, n, r, i) {
        var o;
        if (null != n.shadowingWrite(e)) return t;
        var a = new Ye(n, t, r),
            h = t.getEventCache().getNode(),
            u = void 0;

        if (e.isEmpty() || ".priority" === e.getFront()) {
          var l = void 0;
          if (t.getServerCache().isFullyInitialized()) l = n.calcCompleteEventCache(t.getCompleteServerSnap());else {
            var c = t.getServerCache().getNode();
            s(c instanceof fe, "serverChildren would be complete if leaf node"), l = n.calcCompleteEventChildren(c);
          }
          l = l, u = this.filter_.updateFullNode(h, l, i);
        } else {
          var p = e.getFront(),
              d = n.calcCompleteChild(p, t.getServerCache());
          null == d && t.getServerCache().isCompleteForChild(p) && (d = h.getImmediateChild(p)), (u = null != d ? this.filter_.updateChild(h, p, d, e.popFront(), a, i) : t.getEventCache().getNode().hasChild(p) ? this.filter_.updateChild(h, p, fe.EMPTY_NODE, e.popFront(), a, i) : h).isEmpty() && t.getServerCache().isFullyInitialized() && (o = n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode() && (u = this.filter_.updateFullNode(u, o, i));
        }

        return o = t.getServerCache().isFullyInitialized() || null != n.shadowingWrite(mt.Empty), t.updateEventSnap(u, o, this.filter_.filtersNodes());
      }, t;
    }(),
        Xe = function () {
      function t(t) {
        this.query_ = t, this.index_ = this.query_.getQueryParams().getIndex();
      }

      return t.prototype.generateEventsForChanges = function (t, e, n) {
        var r = this,
            i = [],
            o = [];
        return t.forEach(function (t) {
          t.type === He.CHILD_CHANGED && r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && o.push(He.childMovedChange(t.childName, t.snapshotNode));
        }), this.generateEventsForType_(i, He.CHILD_REMOVED, t, n, e), this.generateEventsForType_(i, He.CHILD_ADDED, t, n, e), this.generateEventsForType_(i, He.CHILD_MOVED, o, n, e), this.generateEventsForType_(i, He.CHILD_CHANGED, t, n, e), this.generateEventsForType_(i, He.VALUE, t, n, e), i;
      }, t.prototype.generateEventsForType_ = function (t, e, n, r, i) {
        var o = this,
            s = n.filter(function (t) {
          return t.type === e;
        });
        s.sort(this.compareChanges_.bind(this)), s.forEach(function (e) {
          var n = o.materializeSingleChange_(e, i);
          r.forEach(function (r) {
            r.respondsTo(e.type) && t.push(r.createEvent(n, o.query_));
          });
        });
      }, t.prototype.materializeSingleChange_ = function (t, e) {
        return "value" === t.type || "child_removed" === t.type ? t : (t.prevName = e.getPredecessorChildName(t.childName, t.snapshotNode, this.index_), t);
      }, t.prototype.compareChanges_ = function (t, e) {
        if (null == t.childName || null == e.childName) throw a("Should only compare child_ events.");
        var n = new Bt(t.childName, t.snapshotNode),
            r = new Bt(e.childName, e.snapshotNode);
        return this.index_.compare(n, r);
      }, t;
    }(),
        $e = function () {
      function t(t, e) {
        this.query_ = t, this.eventRegistrations_ = [];
        var n = this.query_.getQueryParams(),
            r = new Be(n.getIndex()),
            i = n.getNodeFilter();
        this.processor_ = new Ge(i);
        var o = e.getServerCache(),
            s = e.getEventCache(),
            a = r.updateFullNode(fe.EMPTY_NODE, o.getNode(), null),
            h = i.updateFullNode(fe.EMPTY_NODE, s.getNode(), null),
            u = new Ue(a, o.isFullyInitialized(), r.filtersNodes()),
            l = new Ue(h, s.isFullyInitialized(), i.filtersNodes());
        this.viewCache_ = new Ve(l, u), this.eventGenerator_ = new Xe(this.query_);
      }

      return t.prototype.getQuery = function () {
        return this.query_;
      }, t.prototype.getServerCache = function () {
        return this.viewCache_.getServerCache().getNode();
      }, t.prototype.getCompleteServerCache = function (t) {
        var e = this.viewCache_.getCompleteServerSnap();
        return e && (this.query_.getQueryParams().loadsAllData() || !t.isEmpty() && !e.getImmediateChild(t.getFront()).isEmpty()) ? e.getChild(t) : null;
      }, t.prototype.isEmpty = function () {
        return 0 === this.eventRegistrations_.length;
      }, t.prototype.addEventRegistration = function (t) {
        this.eventRegistrations_.push(t);
      }, t.prototype.removeEventRegistration = function (t, e) {
        var n = [];

        if (e) {
          s(null == t, "A cancel should cancel all event registrations.");
          var r = this.query_.path;
          this.eventRegistrations_.forEach(function (t) {
            e = e;
            var i = t.createCancelEvent(e, r);
            i && n.push(i);
          });
        }

        if (t) {
          for (var i = [], o = 0; o < this.eventRegistrations_.length; ++o) {
            var a = this.eventRegistrations_[o];

            if (a.matches(t)) {
              if (t.hasAnyCallback()) {
                i = i.concat(this.eventRegistrations_.slice(o + 1));
                break;
              }
            } else i.push(a);
          }

          this.eventRegistrations_ = i;
        } else this.eventRegistrations_ = [];

        return n;
      }, t.prototype.applyOperation = function (t, e, n) {
        t.type === me.MERGE && null !== t.source.queryId && (s(this.viewCache_.getCompleteServerSnap(), "We should always have a full cache before handling merges"), s(this.viewCache_.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));
        var r = this.viewCache_,
            i = this.processor_.applyOperation(r, t, e, n);
        return this.processor_.assertIndexed(i.viewCache), s(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.viewCache_ = i.viewCache, this.generateEventsForChanges_(i.changes, i.viewCache.getEventCache().getNode(), null);
      }, t.prototype.getInitialEvents = function (t) {
        var e = this.viewCache_.getEventCache(),
            n = [];
        e.getNode().isLeafNode() || e.getNode().forEachChild(ne, function (t, e) {
          n.push(He.childAddedChange(t, e));
        });
        return e.isFullyInitialized() && n.push(He.valueChange(e.getNode())), this.generateEventsForChanges_(n, e.getNode(), t);
      }, t.prototype.generateEventsForChanges_ = function (t, e, n) {
        var r = n ? [n] : this.eventRegistrations_;
        return this.eventGenerator_.generateEventsForChanges(t, e, r);
      }, t;
    }(),
        Je = function () {
      function t() {
        this.views_ = {};
      }

      return Object.defineProperty(t, "__referenceConstructor", {
        get: function () {
          return s(xe, "Reference.ts has not been loaded"), xe;
        },
        set: function (t) {
          s(!xe, "__referenceConstructor has already been defined"), xe = t;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isEmpty = function () {
        return N(this.views_);
      }, t.prototype.applyOperation = function (t, e, n) {
        var r = t.source.queryId;

        if (null !== r) {
          var i = b(this.views_, r);
          return s(null != i, "SyncTree gave us an op for an invalid query."), i.applyOperation(t, e, n);
        }

        var o = [];
        return S(this.views_, function (r, i) {
          o = o.concat(i.applyOperation(t, e, n));
        }), o;
      }, t.prototype.addEventRegistration = function (t, e, n, r, i) {
        var o = t.queryIdentifier(),
            s = b(this.views_, o);

        if (!s) {
          var a = n.calcCompleteEventCache(i ? r : null),
              h = !1;
          a ? h = !0 : r instanceof fe ? (a = n.calcCompleteEventChildren(r), h = !1) : (a = fe.EMPTY_NODE, h = !1);
          var u = new Ve(new Ue(a, h, !1), new Ue(r, i, !1));
          s = new $e(t, u), this.views_[o] = s;
        }

        return s.addEventRegistration(e), s.getInitialEvents(e);
      }, t.prototype.removeEventRegistration = function (e, n, r) {
        var i = e.queryIdentifier(),
            o = [],
            s = [],
            a = this.hasCompleteView();

        if ("default" === i) {
          var h = this;
          S(this.views_, function (t, e) {
            s = s.concat(e.removeEventRegistration(n, r)), e.isEmpty() && (delete h.views_[t], e.getQuery().getQueryParams().loadsAllData() || o.push(e.getQuery()));
          });
        } else {
          var u = b(this.views_, i);
          u && (s = s.concat(u.removeEventRegistration(n, r)), u.isEmpty() && (delete this.views_[i], u.getQuery().getQueryParams().loadsAllData() || o.push(u.getQuery())));
        }

        return a && !this.hasCompleteView() && o.push(new t.__referenceConstructor(e.repo, e.path)), {
          removed: o,
          events: s
        };
      }, t.prototype.getQueryViews = function () {
        var t = this;
        return Object.keys(this.views_).map(function (e) {
          return t.views_[e];
        }).filter(function (t) {
          return !t.getQuery().getQueryParams().loadsAllData();
        });
      }, t.prototype.getCompleteServerCache = function (t) {
        var e = null;
        return S(this.views_, function (n, r) {
          e = e || r.getCompleteServerCache(t);
        }), e;
      }, t.prototype.viewForQuery = function (t) {
        if (t.getQueryParams().loadsAllData()) return this.getCompleteView();
        var e = t.queryIdentifier();
        return b(this.views_, e);
      }, t.prototype.viewExistsForQuery = function (t) {
        return null != this.viewForQuery(t);
      }, t.prototype.hasCompleteView = function () {
        return null != this.getCompleteView();
      }, t.prototype.getCompleteView = function () {
        var t, e, n;
        return (t = this.views_, (n = P(t, function (t) {
          return t.getQuery().getQueryParams().loadsAllData();
        }, e)) && t[n]) || null;
      }, t;
    }(),
        Ze = function () {
      function t(t) {
        this.writeTree_ = t;
      }

      return t.prototype.addWrite = function (e, n) {
        if (e.isEmpty()) return new t(new Me(n));
        var r = this.writeTree_.findRootMostValueAndPath(e);

        if (null != r) {
          var i = r.path,
              o = r.value,
              s = mt.relativePath(i, e);
          return o = o.updateChild(s, n), new t(this.writeTree_.set(i, o));
        }

        var a = new Me(n);
        return new t(this.writeTree_.setTree(e, a));
      }, t.prototype.addWrites = function (t, e) {
        var n = this;
        return S(e, function (e, r) {
          n = n.addWrite(t.child(e), r);
        }), n;
      }, t.prototype.removeWrite = function (e) {
        return e.isEmpty() ? t.Empty : new t(this.writeTree_.setTree(e, Me.Empty));
      }, t.prototype.hasCompleteWrite = function (t) {
        return null != this.getCompleteNode(t);
      }, t.prototype.getCompleteNode = function (t) {
        var e = this.writeTree_.findRootMostValueAndPath(t);
        return null != e ? this.writeTree_.get(e.path).getChild(mt.relativePath(e.path, t)) : null;
      }, t.prototype.getCompleteChildren = function () {
        var t = [],
            e = this.writeTree_.value;
        return null != e ? e.isLeafNode() || e.forEachChild(ne, function (e, n) {
          t.push(new Bt(e, n));
        }) : this.writeTree_.children.inorderTraversal(function (e, n) {
          null != n.value && t.push(new Bt(e, n.value));
        }), t;
      }, t.prototype.childCompoundWrite = function (e) {
        if (e.isEmpty()) return this;
        var n = this.getCompleteNode(e);
        return new t(null != n ? new Me(n) : this.writeTree_.subtree(e));
      }, t.prototype.isEmpty = function () {
        return this.writeTree_.isEmpty();
      }, t.prototype.apply = function (e) {
        return t.applySubtreeWrite_(mt.Empty, this.writeTree_, e);
      }, t.Empty = new t(new Me(null)), t.applySubtreeWrite_ = function (e, n, r) {
        if (null != n.value) return r.updateChild(e, n.value);
        var i = null;
        return n.children.inorderTraversal(function (n, o) {
          ".priority" === n ? (s(null !== o.value, "Priority writes must always be leaf nodes"), i = o.value) : r = t.applySubtreeWrite_(e.child(n), o, r);
        }), r.getChild(e).isEmpty() || null === i || (r = r.updateChild(e.child(".priority"), i)), r;
      }, t;
    }(),
        tn = function () {
      function t() {
        this.visibleWrites_ = Ze.Empty, this.allWrites_ = [], this.lastWriteId_ = -1;
      }

      return t.prototype.childWrites = function (t) {
        return new en(t, this);
      }, t.prototype.addOverwrite = function (t, e, n, r) {
        s(n > this.lastWriteId_, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.allWrites_.push({
          path: t,
          snap: e,
          writeId: n,
          visible: r
        }), r && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)), this.lastWriteId_ = n;
      }, t.prototype.addMerge = function (t, e, n) {
        s(n > this.lastWriteId_, "Stacking an older merge on top of newer ones"), this.allWrites_.push({
          path: t,
          children: e,
          writeId: n,
          visible: !0
        }), this.visibleWrites_ = this.visibleWrites_.addWrites(t, e), this.lastWriteId_ = n;
      }, t.prototype.getWrite = function (t) {
        for (var e = 0; e < this.allWrites_.length; e++) {
          var n = this.allWrites_[e];
          if (n.writeId === t) return n;
        }

        return null;
      }, t.prototype.removeWrite = function (t) {
        var e = this,
            n = this.allWrites_.findIndex(function (e) {
          return e.writeId === t;
        });
        s(n >= 0, "removeWrite called with nonexistent writeId.");
        var r = this.allWrites_[n];
        this.allWrites_.splice(n, 1);

        for (var i = r.visible, o = !1, a = this.allWrites_.length - 1; i && a >= 0;) {
          var h = this.allWrites_[a];
          h.visible && (a >= n && this.recordContainsPath_(h, r.path) ? i = !1 : r.path.contains(h.path) && (o = !0)), a--;
        }

        if (i) {
          if (o) return this.resetTree_(), !0;
          if (r.snap) this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path);else {
            var u = r.children;
            S(u, function (t) {
              e.visibleWrites_ = e.visibleWrites_.removeWrite(r.path.child(t));
            });
          }
          return !0;
        }

        return !1;
      }, t.prototype.getCompleteWriteData = function (t) {
        return this.visibleWrites_.getCompleteNode(t);
      }, t.prototype.calcCompleteEventCache = function (e, n, r, i) {
        if (r || i) {
          var o = this.visibleWrites_.childCompoundWrite(e);
          if (!i && o.isEmpty()) return n;

          if (i || null != n || o.hasCompleteWrite(mt.Empty)) {
            var s = t.layerTree_(this.allWrites_, function (t) {
              return (t.visible || i) && (!r || !~r.indexOf(t.writeId)) && (t.path.contains(e) || e.contains(t.path));
            }, e);
            u = n || fe.EMPTY_NODE;
            return s.apply(u);
          }

          return null;
        }

        var a = this.visibleWrites_.getCompleteNode(e);
        if (null != a) return a;
        var h = this.visibleWrites_.childCompoundWrite(e);
        if (h.isEmpty()) return n;

        if (null != n || h.hasCompleteWrite(mt.Empty)) {
          var u = n || fe.EMPTY_NODE;
          return h.apply(u);
        }

        return null;
      }, t.prototype.calcCompleteEventChildren = function (t, e) {
        var n = fe.EMPTY_NODE,
            r = this.visibleWrites_.getCompleteNode(t);
        if (r) return r.isLeafNode() || r.forEachChild(ne, function (t, e) {
          n = n.updateImmediateChild(t, e);
        }), n;

        if (e) {
          var i = this.visibleWrites_.childCompoundWrite(t);
          return e.forEachChild(ne, function (t, e) {
            var r = i.childCompoundWrite(new mt(t)).apply(e);
            n = n.updateImmediateChild(t, r);
          }), i.getCompleteChildren().forEach(function (t) {
            n = n.updateImmediateChild(t.name, t.node);
          }), n;
        }

        return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function (t) {
          n = n.updateImmediateChild(t.name, t.node);
        }), n;
      }, t.prototype.calcEventCacheAfterServerOverwrite = function (t, e, n, r) {
        s(n || r, "Either existingEventSnap or existingServerSnap must exist");
        var i = t.child(e);
        if (this.visibleWrites_.hasCompleteWrite(i)) return null;
        var o = this.visibleWrites_.childCompoundWrite(i);
        return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e));
      }, t.prototype.calcCompleteChild = function (t, e, n) {
        var r = t.child(e),
            i = this.visibleWrites_.getCompleteNode(r);
        return null != i ? i : n.isCompleteForChild(e) ? this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)) : null;
      }, t.prototype.shadowingWrite = function (t) {
        return this.visibleWrites_.getCompleteNode(t);
      }, t.prototype.calcIndexedSlice = function (t, e, n, r, i, o) {
        var s,
            a = this.visibleWrites_.childCompoundWrite(t),
            h = a.getCompleteNode(mt.Empty);
        if (null != h) s = h;else {
          if (null == e) return [];
          s = a.apply(e);
        }
        if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode()) return [];

        for (var u = [], l = o.getCompare(), c = i ? s.getReverseIteratorFrom(n, o) : s.getIteratorFrom(n, o), p = c.getNext(); p && u.length < r;) 0 !== l(p, n) && u.push(p), p = c.getNext();

        return u;
      }, t.prototype.recordContainsPath_ = function (t, e) {
        return t.snap ? t.path.contains(e) : !!P(t.children, function (n, r) {
          return t.path.child(r).contains(e);
        });
      }, t.prototype.resetTree_ = function () {
        this.visibleWrites_ = t.layerTree_(this.allWrites_, t.DefaultFilter_, mt.Empty), this.allWrites_.length > 0 ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1;
      }, t.DefaultFilter_ = function (t) {
        return t.visible;
      }, t.layerTree_ = function (t, e, n) {
        for (var r = Ze.Empty, i = 0; i < t.length; ++i) {
          var o = t[i];

          if (e(o)) {
            var s = o.path,
                h = void 0;
            if (o.snap) n.contains(s) ? (h = mt.relativePath(n, s), r = r.addWrite(h, o.snap)) : s.contains(n) && (h = mt.relativePath(s, n), r = r.addWrite(mt.Empty, o.snap.getChild(h)));else {
              if (!o.children) throw a("WriteRecord should have .snap or .children");
              if (n.contains(s)) h = mt.relativePath(n, s), r = r.addWrites(h, o.children);else if (s.contains(n)) if ((h = mt.relativePath(s, n)).isEmpty()) r = r.addWrites(mt.Empty, o.children);else {
                var u = b(o.children, h.getFront());

                if (u) {
                  var l = u.getChild(h.popFront());
                  r = r.addWrite(mt.Empty, l);
                }
              }
            }
          }
        }

        return r;
      }, t;
    }(),
        en = function () {
      function t(t, e) {
        this.treePath_ = t, this.writeTree_ = e;
      }

      return t.prototype.calcCompleteEventCache = function (t, e, n) {
        return this.writeTree_.calcCompleteEventCache(this.treePath_, t, e, n);
      }, t.prototype.calcCompleteEventChildren = function (t) {
        return this.writeTree_.calcCompleteEventChildren(this.treePath_, t);
      }, t.prototype.calcEventCacheAfterServerOverwrite = function (t, e, n) {
        return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, t, e, n);
      }, t.prototype.shadowingWrite = function (t) {
        return this.writeTree_.shadowingWrite(this.treePath_.child(t));
      }, t.prototype.calcIndexedSlice = function (t, e, n, r, i) {
        return this.writeTree_.calcIndexedSlice(this.treePath_, t, e, n, r, i);
      }, t.prototype.calcCompleteChild = function (t, e) {
        return this.writeTree_.calcCompleteChild(this.treePath_, t, e);
      }, t.prototype.child = function (e) {
        return new t(this.treePath_.child(e), this.writeTree_);
      }, t;
    }(),
        nn = function () {
      function t(t) {
        this.listenProvider_ = t, this.syncPointTree_ = Me.Empty, this.pendingWriteTree_ = new tn(), this.tagToQueryMap_ = {}, this.queryToTagMap_ = {};
      }

      return t.prototype.applyUserOverwrite = function (t, e, n, r) {
        return this.pendingWriteTree_.addOverwrite(t, e, n, r), r ? this.applyOperationToSyncPoints_(new qe(Fe.User, t, e)) : [];
      }, t.prototype.applyUserMerge = function (t, e, n) {
        this.pendingWriteTree_.addMerge(t, e, n);
        var r = Me.fromObject(e);
        return this.applyOperationToSyncPoints_(new Qe(Fe.User, t, r));
      }, t.prototype.ackUserWrite = function (t, e) {
        void 0 === e && (e = !1);
        var n = this.pendingWriteTree_.getWrite(t);

        if (this.pendingWriteTree_.removeWrite(t)) {
          var r = Me.Empty;
          return null != n.snap ? r = r.set(mt.Empty, !0) : S(n.children, function (t, e) {
            r = r.set(new mt(t), e);
          }), this.applyOperationToSyncPoints_(new Ae(n.path, r, e));
        }

        return [];
      }, t.prototype.applyServerOverwrite = function (t, e) {
        return this.applyOperationToSyncPoints_(new qe(Fe.Server, t, e));
      }, t.prototype.applyServerMerge = function (t, e) {
        var n = Me.fromObject(e);
        return this.applyOperationToSyncPoints_(new Qe(Fe.Server, t, n));
      }, t.prototype.applyListenComplete = function (t) {
        return this.applyOperationToSyncPoints_(new We(Fe.Server, t));
      }, t.prototype.applyTaggedQueryOverwrite = function (e, n, r) {
        var i = this.queryKeyForTag_(r);

        if (null != i) {
          var o = t.parseQueryKey_(i),
              s = o.path,
              a = o.queryId,
              h = mt.relativePath(s, e),
              u = new qe(Fe.forServerTaggedQuery(a), h, n);
          return this.applyTaggedOperation_(s, u);
        }

        return [];
      }, t.prototype.applyTaggedQueryMerge = function (e, n, r) {
        var i = this.queryKeyForTag_(r);

        if (i) {
          var o = t.parseQueryKey_(i),
              s = o.path,
              a = o.queryId,
              h = mt.relativePath(s, e),
              u = Me.fromObject(n),
              l = new Qe(Fe.forServerTaggedQuery(a), h, u);
          return this.applyTaggedOperation_(s, l);
        }

        return [];
      }, t.prototype.applyTaggedListenComplete = function (e, n) {
        var r = this.queryKeyForTag_(n);

        if (r) {
          var i = t.parseQueryKey_(r),
              o = i.path,
              s = i.queryId,
              a = mt.relativePath(o, e),
              h = new We(Fe.forServerTaggedQuery(s), a);
          return this.applyTaggedOperation_(o, h);
        }

        return [];
      }, t.prototype.addEventRegistration = function (e, n) {
        var r = e.path,
            i = null,
            o = !1;
        this.syncPointTree_.foreachOnPath(r, function (t, e) {
          var n = mt.relativePath(t, r);
          i = i || e.getCompleteServerCache(n), o = o || e.hasCompleteView();
        });
        var a,
            h = this.syncPointTree_.get(r);
        (h ? (o = o || h.hasCompleteView(), i = i || h.getCompleteServerCache(mt.Empty)) : (h = new Je(), this.syncPointTree_ = this.syncPointTree_.set(r, h)), null != i) ? a = !0 : (a = !1, i = fe.EMPTY_NODE, this.syncPointTree_.subtree(r).foreachChild(function (t, e) {
          var n = e.getCompleteServerCache(mt.Empty);
          n && (i = i.updateImmediateChild(t, n));
        }));
        var u = h.viewExistsForQuery(e);

        if (!u && !e.getQueryParams().loadsAllData()) {
          var l = t.makeQueryKey_(e);
          s(!(l in this.queryToTagMap_), "View does not exist, but we have a tag");
          var c = t.getNextQueryTag_();
          this.queryToTagMap_[l] = c, this.tagToQueryMap_["_" + c] = l;
        }

        var p = this.pendingWriteTree_.childWrites(r),
            d = h.addEventRegistration(e, n, p, i, a);

        if (!u && !o) {
          var f = h.viewForQuery(e);
          d = d.concat(this.setupListener_(e, f));
        }

        return d;
      }, t.prototype.removeEventRegistration = function (e, n, r) {
        var i = this,
            o = e.path,
            s = this.syncPointTree_.get(o),
            a = [];

        if (s && ("default" === e.queryIdentifier() || s.viewExistsForQuery(e))) {
          var h = s.removeEventRegistration(e, n, r);
          s.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(o));
          var u = h.removed;
          a = h.events;
          var l = -1 !== u.findIndex(function (t) {
            return t.getQueryParams().loadsAllData();
          }),
              c = this.syncPointTree_.findOnPath(o, function (t, e) {
            return e.hasCompleteView();
          });

          if (l && !c) {
            var p = this.syncPointTree_.subtree(o);
            if (!p.isEmpty()) for (var d = this.collectDistinctViewsForSubTree_(p), f = 0; f < d.length; ++f) {
              var _ = d[f],
                  y = _.getQuery(),
                  v = this.createListenerForView_(_);

              this.listenProvider_.startListening(t.queryForListening_(y), this.tagForQuery_(y), v.hashFn, v.onComplete);
            }
          }

          if (!c && u.length > 0 && !r) if (l) {
            this.listenProvider_.stopListening(t.queryForListening_(e), null);
          } else u.forEach(function (e) {
            var n = i.queryToTagMap_[t.makeQueryKey_(e)];
            i.listenProvider_.stopListening(t.queryForListening_(e), n);
          });
          this.removeTags_(u);
        }

        return a;
      }, t.prototype.calcCompleteEventCache = function (t, e) {
        var n = this.pendingWriteTree_,
            r = this.syncPointTree_.findOnPath(t, function (e, n) {
          var r = mt.relativePath(e, t),
              i = n.getCompleteServerCache(r);
          if (i) return i;
        });
        return n.calcCompleteEventCache(t, r, e, !0);
      }, t.prototype.collectDistinctViewsForSubTree_ = function (t) {
        return t.fold(function (t, e, n) {
          if (e && e.hasCompleteView()) return [e.getCompleteView()];
          var r = [];
          return e && (r = e.getQueryViews()), S(n, function (t, e) {
            r = r.concat(e);
          }), r;
        });
      }, t.prototype.removeTags_ = function (e) {
        for (var n = 0; n < e.length; ++n) {
          var r = e[n];

          if (!r.getQueryParams().loadsAllData()) {
            var i = t.makeQueryKey_(r),
                o = this.queryToTagMap_[i];
            delete this.queryToTagMap_[i], delete this.tagToQueryMap_["_" + o];
          }
        }
      }, t.queryForListening_ = function (t) {
        return t.getQueryParams().loadsAllData() && !t.getQueryParams().isDefault() ? t.getRef() : t;
      }, t.prototype.setupListener_ = function (e, n) {
        var r = e.path,
            i = this.tagForQuery_(e),
            o = this.createListenerForView_(n),
            a = this.listenProvider_.startListening(t.queryForListening_(e), i, o.hashFn, o.onComplete),
            h = this.syncPointTree_.subtree(r);
        if (i) s(!h.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");else for (var u = h.fold(function (t, e, n) {
          if (!t.isEmpty() && e && e.hasCompleteView()) return [e.getCompleteView().getQuery()];
          var r = [];
          return e && (r = r.concat(e.getQueryViews().map(function (t) {
            return t.getQuery();
          }))), S(n, function (t, e) {
            r = r.concat(e);
          }), r;
        }), l = 0; l < u.length; ++l) {
          var c = u[l];
          this.listenProvider_.stopListening(t.queryForListening_(c), this.tagForQuery_(c));
        }
        return a;
      }, t.prototype.createListenerForView_ = function (t) {
        var e = this,
            n = t.getQuery(),
            r = this.tagForQuery_(n);
        return {
          hashFn: function () {
            return (t.getServerCache() || fe.EMPTY_NODE).hash();
          },
          onComplete: function (t) {
            if ("ok" === t) return r ? e.applyTaggedListenComplete(n.path, r) : e.applyListenComplete(n.path);

            var i = function (t, e) {
              var n = "Unknown Error";
              "too_big" === t ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == t ? n = "Client doesn't have permission to access the desired data." : "unavailable" == t && (n = "The service is unavailable");
              var r = new Error(t + " at " + e.path.toString() + ": " + n);
              return r.code = t.toUpperCase(), r;
            }(t, n);

            return e.removeEventRegistration(n, null, i);
          }
        };
      }, t.makeQueryKey_ = function (t) {
        return t.path.toString() + "$" + t.queryIdentifier();
      }, t.parseQueryKey_ = function (t) {
        var e = t.indexOf("$");
        return s(-1 !== e && e < t.length - 1, "Bad queryKey."), {
          queryId: t.substr(e + 1),
          path: new mt(t.substr(0, e))
        };
      }, t.prototype.queryKeyForTag_ = function (t) {
        return this.tagToQueryMap_["_" + t];
      }, t.prototype.tagForQuery_ = function (e) {
        var n = t.makeQueryKey_(e);
        return b(this.queryToTagMap_, n);
      }, t.getNextQueryTag_ = function () {
        return t.nextQueryTag_++;
      }, t.prototype.applyTaggedOperation_ = function (t, e) {
        var n = this.syncPointTree_.get(t);
        s(n, "Missing sync point for query tag that we're tracking");
        var r = this.pendingWriteTree_.childWrites(t);
        return n.applyOperation(e, r, null);
      }, t.prototype.applyOperationToSyncPoints_ = function (t) {
        return this.applyOperationHelper_(t, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(mt.Empty));
      }, t.prototype.applyOperationHelper_ = function (t, e, n, r) {
        if (t.path.isEmpty()) return this.applyOperationDescendantsHelper_(t, e, n, r);
        var i = e.get(mt.Empty);
        null == n && null != i && (n = i.getCompleteServerCache(mt.Empty));
        var o = [],
            s = t.path.getFront(),
            a = t.operationForChild(s),
            h = e.children.get(s);

        if (h && a) {
          var u = n ? n.getImmediateChild(s) : null,
              l = r.child(s);
          o = o.concat(this.applyOperationHelper_(a, h, u, l));
        }

        return i && (o = o.concat(i.applyOperation(t, r, n))), o;
      }, t.prototype.applyOperationDescendantsHelper_ = function (t, e, n, r) {
        var i = this,
            o = e.get(mt.Empty);
        null == n && null != o && (n = o.getCompleteServerCache(mt.Empty));
        var s = [];
        return e.children.inorderTraversal(function (e, o) {
          var a = n ? n.getImmediateChild(e) : null,
              h = r.child(e),
              u = t.operationForChild(e);
          u && (s = s.concat(i.applyOperationDescendantsHelper_(u, o, a, h)));
        }), o && (s = s.concat(o.applyOperation(t, r, n))), s;
      }, t.nextQueryTag_ = 1, t;
    }(),
        rn = function () {
      function t() {
        this.rootNode_ = fe.EMPTY_NODE;
      }

      return t.prototype.getNode = function (t) {
        return this.rootNode_.getChild(t);
      }, t.prototype.updateSnapshot = function (t, e) {
        this.rootNode_ = this.rootNode_.updateChild(t, e);
      }, t;
    }(),
        on = function () {
      function t(t) {
        this.app_ = t;
      }

      return t.prototype.getToken = function (t) {
        return this.app_.INTERNAL.getToken(t).then(null, function (t) {
          return t && "auth/token-not-initialized" === t.code ? (Z("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(t);
        });
      }, t.prototype.addTokenChangeListener = function (t) {
        this.app_.INTERNAL.addAuthTokenListener(t);
      }, t.prototype.removeTokenChangeListener = function (t) {
        this.app_.INTERNAL.removeAuthTokenListener(t);
      }, t.prototype.notifyForInvalidToken = function () {
        var t = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
        "credential" in this.app_.options ? t += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.app_.options ? t += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : t += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', rt(t);
      }, t;
    }(),
        sn = function () {
      function t() {
        this.counters_ = {};
      }

      return t.prototype.incrementCounter = function (t, e) {
        void 0 === e && (e = 1), w(this.counters_, t) || (this.counters_[t] = 0), this.counters_[t] += e;
      }, t.prototype.get = function () {
        return c(this.counters_);
      }, t;
    }(),
        an = function () {
      function t() {}

      return t.getCollection = function (t) {
        var e = t.toString();
        return this.collections_[e] || (this.collections_[e] = new sn()), this.collections_[e];
      }, t.getOrCreateReporter = function (t, e) {
        var n = t.toString();
        return this.reporters_[n] || (this.reporters_[n] = e()), this.reporters_[n];
      }, t.collections_ = {}, t.reporters_ = {}, t;
    }(),
        hn = function () {
      function t(t) {
        this.collection_ = t, this.last_ = null;
      }

      return t.prototype.get = function () {
        var t = this.collection_.get(),
            e = T(t);
        return this.last_ && S(this.last_, function (t, n) {
          e[t] = e[t] - n;
        }), this.last_ = t, e;
      }, t;
    }(),
        un = 1e4,
        ln = 3e4,
        cn = function () {
      function t(t, e) {
        this.server_ = e, this.statsToReport_ = {}, this.statsListener_ = new hn(t);
        var n = un + (ln - un) * Math.random();
        gt(this.reportStats_.bind(this), Math.floor(n));
      }

      return t.prototype.includeStat = function (t) {
        this.statsToReport_[t] = !0;
      }, t.prototype.reportStats_ = function () {
        var t = this,
            e = this.statsListener_.get(),
            n = {},
            r = !1;
        S(e, function (e, i) {
          i > 0 && w(t.statsToReport_, e) && (n[e] = i, r = !0);
        }), r && this.server_.reportStats(n), gt(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5));
      }, t;
    }(),
        pn = function () {
      function t() {
        this.eventLists_ = [], this.recursionDepth_ = 0;
      }

      return t.prototype.queueEvents = function (t) {
        for (var e = null, n = 0; n < t.length; n++) {
          var r = t[n],
              i = r.getPath();
          null === e || i.equals(e.getPath()) || (this.eventLists_.push(e), e = null), null === e && (e = new dn(i)), e.add(r);
        }

        e && this.eventLists_.push(e);
      }, t.prototype.raiseEventsAtPath = function (t, e) {
        this.queueEvents(e), this.raiseQueuedEventsMatchingPredicate_(function (e) {
          return e.equals(t);
        });
      }, t.prototype.raiseEventsForChangedPath = function (t, e) {
        this.queueEvents(e), this.raiseQueuedEventsMatchingPredicate_(function (e) {
          return e.contains(t) || t.contains(e);
        });
      }, t.prototype.raiseQueuedEventsMatchingPredicate_ = function (t) {
        this.recursionDepth_++;

        for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
          var r = this.eventLists_[n];
          if (r) t(r.getPath()) ? (this.eventLists_[n].raise(), this.eventLists_[n] = null) : e = !1;
        }

        e && (this.eventLists_ = []), this.recursionDepth_--;
      }, t;
    }(),
        dn = function () {
      function t(t) {
        this.path_ = t, this.events_ = [];
      }

      return t.prototype.add = function (t) {
        this.events_.push(t);
      }, t.prototype.raise = function () {
        for (var t = 0; t < this.events_.length; t++) {
          var e = this.events_[t];

          if (null !== e) {
            this.events_[t] = null;
            var n = e.getEventRunner();
            X && Z("event: " + e.toString()), yt(n);
          }
        }
      }, t.prototype.getPath = function () {
        return this.path_;
      }, t;
    }(),
        fn = function () {
      function t(t) {
        this.allowedEvents_ = t, this.listeners_ = {}, s(Array.isArray(t) && t.length > 0, "Requires a non-empty array");
      }

      return t.prototype.trigger = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];

        if (Array.isArray(this.listeners_[t])) for (var r = this.listeners_[t].slice(), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, e);
      }, t.prototype.on = function (t, e, n) {
        this.validateEventType_(t), this.listeners_[t] = this.listeners_[t] || [], this.listeners_[t].push({
          callback: e,
          context: n
        });
        var r = this.getInitialEvent(t);
        r && e.apply(n, r);
      }, t.prototype.off = function (t, e, n) {
        this.validateEventType_(t);

        for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++) if (r[i].callback === e && (!n || n === r[i].context)) return void r.splice(i, 1);
      }, t.prototype.validateEventType_ = function (t) {
        s(this.allowedEvents_.find(function (e) {
          return e === t;
        }), "Unknown event: " + t);
      }, t;
    }(),
        _n = function (t) {
      function e() {
        var e,
            n,
            r = t.call(this, ["visible"]) || this;
        return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (n = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (n = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (n = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (n = "webkitvisibilitychange", e = "webkitHidden")), r.visible_ = !0, n && document.addEventListener(n, function () {
          var t = !document[e];
          t !== r.visible_ && (r.visible_ = t, r.trigger("visible", t));
        }, !1), r;
      }

      return r(e, t), e.getInstance = function () {
        return new e();
      }, e.prototype.getInitialEvent = function (t) {
        return s("visible" === t, "Unknown event type: " + t), [this.visible_];
      }, e;
    }(fn),
        yn = function (t) {
      function e() {
        var e = t.call(this, ["online"]) || this;
        return e.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || d() || (window.addEventListener("online", function () {
          e.online_ || (e.online_ = !0, e.trigger("online", !0));
        }, !1), window.addEventListener("offline", function () {
          e.online_ && (e.online_ = !1, e.trigger("online", !1));
        }, !1)), e;
      }

      return r(e, t), e.getInstance = function () {
        return new e();
      }, e.prototype.getInitialEvent = function (t) {
        return s("online" === t, "Unknown event type: " + t), [this.online_];
      }, e.prototype.currentlyOnline = function () {
        return this.online_;
      }, e;
    }(fn),
        vn = function () {
      function t(t) {
        this.onMessage_ = t, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null;
      }

      return t.prototype.closeAfter = function (t, e) {
        this.closeAfterResponse = t, this.onClose = e, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null);
      }, t.prototype.handleResponse = function (t, e) {
        var n = this;
        this.pendingResponses[t] = e;

        for (var r = function () {
          var t = i.pendingResponses[i.currentResponseNum];
          delete i.pendingResponses[i.currentResponseNum];

          for (var e = function (e) {
            t[e] && yt(function () {
              n.onMessage_(t[e]);
            });
          }, r = 0; r < t.length; ++r) e(r);

          if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";
          i.currentResponseNum++;
        }, i = this; this.pendingResponses[this.currentResponseNum];) {
          if ("break" === r()) break;
        }
      }, t;
    }(),
        gn = "pLPCommand",
        mn = "pRTLPCB",
        Cn = function () {
      function t(t, e, n, r) {
        this.connId = t, this.repoInfo = e, this.transportSessionId = n, this.lastSessionId = r, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = tt(t), this.stats_ = an.getCollection(e), this.urlFn = function (t) {
          return e.connectionURL(Et, t);
        };
      }

      return t.prototype.open = function (t, e) {
        var n = this;
        this.curSegmentNum = 0, this.onDisconnect_ = e, this.myPacketOrderer = new vn(t), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function () {
          n.log_("Timed out trying to connect."), n.onClosed_(), n.connectTimeoutTimer_ = null;
        }, Math.floor(3e4)), function (t) {
          if (f() || "complete" === document.readyState) t();else {
            var e = !1,
                n = function () {
              document.body ? e || (e = !0, t()) : setTimeout(n, Math.floor(10));
            };

            document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
              "complete" === document.readyState && n();
            }), window.attachEvent("onload", n));
          }
        }(function () {
          if (!n.isClosed_) {
            n.scriptTagHolder = new En(function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

              var r = t[0],
                  i = t[1],
                  o = t[2];
              if (n.incrementIncomingBytes_(t), n.scriptTagHolder) if (n.connectTimeoutTimer_ && (clearTimeout(n.connectTimeoutTimer_), n.connectTimeoutTimer_ = null), n.everConnected_ = !0, "start" == r) n.id = i, n.password = o;else {
                if ("close" !== r) throw new Error("Unrecognized command received: " + r);
                i ? (n.scriptTagHolder.sendNewPolls = !1, n.myPacketOrderer.closeAfter(i, function () {
                  n.onClosed_();
                })) : n.onClosed_();
              }
            }, function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

              var r = t[0],
                  i = t[1];
              n.incrementIncomingBytes_(t), n.myPacketOrderer.handleResponse(r, i);
            }, function () {
              n.onClosed_();
            }, n.urlFn);
            var t = {
              start: "t"
            };
            t.ser = Math.floor(1e8 * Math.random()), n.scriptTagHolder.uniqueCallbackIdentifier && (t.cb = n.scriptTagHolder.uniqueCallbackIdentifier), t.v = "5", n.transportSessionId && (t.s = n.transportSessionId), n.lastSessionId && (t.ls = n.lastSessionId), !f() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (t.r = "f");
            var e = n.urlFn(t);
            n.log_("Connecting via long-poll to " + e), n.scriptTagHolder.addTag(e, function () {});
          }
        });
      }, t.prototype.start = function () {
        this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password);
      }, t.forceAllow = function () {
        t.forceAllow_ = !0;
      }, t.forceDisallow = function () {
        t.forceDisallow_ = !0;
      }, t.isAvailable = function () {
        return t.forceAllow_ || !t.forceDisallow_ && "undefined" != typeof document && null != document.createElement && !("object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" == typeof Windows && "object" == typeof Windows.UI) && !f();
      }, t.prototype.markConnectionHealthy = function () {}, t.prototype.shutdown_ = function () {
        this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null);
      }, t.prototype.onClosed_ = function () {
        this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null));
      }, t.prototype.close = function () {
        this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_());
      }, t.prototype.send = function (t) {
        var e = C(t);
        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);

        for (var n, r = (n = h(e), u.encodeByteArray(n, !0)), i = ct(r, 1840), o = 0; o < i.length; o++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[o]), this.curSegmentNum++;
      }, t.prototype.addDisconnectPingFrame = function (t, e) {
        if (!f()) {
          this.myDisconnFrame = document.createElement("iframe");
          var n = {
            dframe: "t"
          };
          n.id = t, n.pw = e, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
        }
      }, t.prototype.incrementIncomingBytes_ = function (t) {
        var e = C(t).length;
        this.bytesReceived += e, this.stats_.incrementCounter("bytes_received", e);
      }, t;
    }(),
        En = function () {
      function t(e, n, r, i) {
        if (this.onDisconnect = r, this.urlFn = i, this.outstandingRequests = new Re(), this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, f()) this.commandCB = e, this.onMessageCB = n;else {
          this.uniqueCallbackIdentifier = Y(), window[gn + this.uniqueCallbackIdentifier] = e, window[mn + this.uniqueCallbackIdentifier] = n, this.myIFrame = t.createIFrame_();
          var o = "";
          if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) o = '<script>document.domain="' + document.domain + '";<\/script>';
          var s = "<html><body>" + o + "</body></html>";

          try {
            this.myIFrame.doc.open(), this.myIFrame.doc.write(s), this.myIFrame.doc.close();
          } catch (t) {
            Z("frame writing exception"), t.stack && Z(t.stack), Z(t);
          }
        }
      }

      return t.createIFrame_ = function () {
        var t = document.createElement("iframe");
        if (t.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        document.body.appendChild(t);

        try {
          t.contentWindow.document || Z("No IE domain setting required");
        } catch (n) {
          var e = document.domain;
          t.src = "javascript:void((function(){document.open();document.domain='" + e + "';document.close();})())";
        }

        return t.contentDocument ? t.doc = t.contentDocument : t.contentWindow ? t.doc = t.contentWindow.document : t.document && (t.doc = t.document), t;
      }, t.prototype.close = function () {
        var e = this;

        if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function () {
          null !== e.myIFrame && (document.body.removeChild(e.myIFrame), e.myIFrame = null);
        }, Math.floor(0))), f() && this.myID) {
          var n = {
            disconn: "t"
          };
          n.id = this.myID, n.pw = this.myPW;
          var r = this.urlFn(n);
          t.nodeRestRequest(r);
        }

        var i = this.onDisconnect;
        i && (this.onDisconnect = null, i());
      }, t.prototype.startLongPoll = function (t, e) {
        for (this.myID = t, this.myPW = e, this.alive = !0; this.newRequest_(););
      }, t.prototype.newRequest_ = function () {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
          this.currentSerial++;
          var t = {};
          t.id = this.myID, t.pw = this.myPW, t.ser = this.currentSerial;

          for (var e = this.urlFn(t), n = "", r = 0; this.pendingSegs.length > 0;) {
            if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break;
            var i = this.pendingSegs.shift();
            n = n + "&seg" + r + "=" + i.seg + "&ts" + r + "=" + i.ts + "&d" + r + "=" + i.d, r++;
          }

          return e += n, this.addLongPollTag_(e, this.currentSerial), !0;
        }

        return !1;
      }, t.prototype.enqueueSegment = function (t, e, n) {
        this.pendingSegs.push({
          seg: t,
          ts: e,
          d: n
        }), this.alive && this.newRequest_();
      }, t.prototype.addLongPollTag_ = function (t, e) {
        var n = this;
        this.outstandingRequests.add(e, 1);

        var r = function () {
          n.outstandingRequests.remove(e), n.newRequest_();
        },
            i = setTimeout(r, Math.floor(25e3));

        this.addTag(t, function () {
          clearTimeout(i), r();
        });
      }, t.prototype.addTag = function (t, e) {
        var n = this;
        f() ? this.doNodeLongPoll(t, e) : setTimeout(function () {
          try {
            if (!n.sendNewPolls) return;
            var r = n.myIFrame.doc.createElement("script");
            r.type = "text/javascript", r.async = !0, r.src = t, r.onload = r.onreadystatechange = function () {
              var t = r.readyState;
              t && "loaded" !== t && "complete" !== t || (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), e());
            }, r.onerror = function () {
              Z("Long-poll script failed to load: " + t), n.sendNewPolls = !1, n.close();
            }, n.myIFrame.doc.body.appendChild(r);
          } catch (t) {}
        }, Math.floor(1));
      }, t;
    }(),
        wn = null;

    "undefined" != typeof MozWebSocket ? wn = MozWebSocket : "undefined" != typeof WebSocket && (wn = WebSocket);

    var bn = function () {
      function t(e, n, r, i) {
        this.connId = e, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = tt(this.connId), this.stats_ = an.getCollection(n), this.connURL = t.connectionURL_(n, r, i);
      }

      return t.connectionURL_ = function (t, e, n) {
        var r = {
          v: "5"
        };
        return !f() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf("firebaseio.com") && (r.r = "f"), e && (r.s = e), n && (r.ls = n), t.connectionURL("websocket", r);
      }, t.prototype.open = function (t, n) {
        var r = this;
        this.onDisconnect = n, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, B.set("previous_websocket_failure", !0);

        try {
          if (f()) {
            var i = o.NODE_ADMIN ? "AdminNode" : "Node",
                s = {
              headers: {
                "User-Agent": "Firebase/5/" + e.SDK_VERSION + "/" + process.platform + "/" + i
              }
            },
                a = process.env,
                h = 0 == this.connURL.indexOf("wss://") ? a.HTTPS_PROXY || a.https_proxy : a.HTTP_PROXY || a.http_proxy;
            h && (s.proxy = {
              origin: h
            }), this.mySock = new wn(this.connURL, [], s);
          } else this.mySock = new wn(this.connURL);
        } catch (t) {
          this.log_("Error instantiating WebSocket.");
          var u = t.message || t.data;
          return u && this.log_(u), void this.onClosed_();
        }

        this.mySock.onopen = function () {
          r.log_("Websocket connected."), r.everConnected_ = !0;
        }, this.mySock.onclose = function () {
          r.log_("Websocket connection was disconnected."), r.mySock = null, r.onClosed_();
        }, this.mySock.onmessage = function (t) {
          r.handleIncomingFrame(t);
        }, this.mySock.onerror = function (t) {
          r.log_("WebSocket error.  Closing connection.");
          var e = t.message || t.data;
          e && r.log_(e), r.onClosed_();
        };
      }, t.prototype.start = function () {}, t.forceDisallow = function () {
        t.forceDisallow_ = !0;
      }, t.isAvailable = function () {
        var e = !1;

        if ("undefined" != typeof navigator && navigator.userAgent) {
          var n = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
          n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0);
        }

        return !e && null !== wn && !t.forceDisallow_;
      }, t.previouslyFailed = function () {
        return B.isInMemoryStorage || !0 === B.get("previous_websocket_failure");
      }, t.prototype.markConnectionHealthy = function () {
        B.remove("previous_websocket_failure");
      }, t.prototype.appendFrame_ = function (t) {
        if (this.frames.push(t), this.frames.length == this.totalFrames) {
          var e = this.frames.join("");
          this.frames = null;
          var n = m(e);
          this.onMessage(n);
        }
      }, t.prototype.handleNewFrameCount_ = function (t) {
        this.totalFrames = t, this.frames = [];
      }, t.prototype.extractFrameCount_ = function (t) {
        if (s(null === this.frames, "We already have a frame buffer"), t.length <= 6) {
          var e = Number(t);
          if (!isNaN(e)) return this.handleNewFrameCount_(e), null;
        }

        return this.handleNewFrameCount_(1), t;
      }, t.prototype.handleIncomingFrame = function (t) {
        if (null !== this.mySock) {
          var e = t.data;
          if (this.bytesReceived += e.length, this.stats_.incrementCounter("bytes_received", e.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(e);else {
            var n = this.extractFrameCount_(e);
            null !== n && this.appendFrame_(n);
          }
        }
      }, t.prototype.send = function (t) {
        this.resetKeepAlive();
        var e = C(t);
        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
        var n = ct(e, 16384);
        n.length > 1 && this.sendString_(String(n.length));

        for (var r = 0; r < n.length; r++) this.sendString_(n[r]);
      }, t.prototype.shutdown_ = function () {
        this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null);
      }, t.prototype.onClosed_ = function () {
        this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null));
      }, t.prototype.close = function () {
        this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_());
      }, t.prototype.resetKeepAlive = function () {
        var t = this;
        clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function () {
          t.mySock && t.sendString_("0"), t.resetKeepAlive();
        }, Math.floor(45e3));
      }, t.prototype.sendString_ = function (t) {
        try {
          this.mySock.send(t);
        } catch (t) {
          this.log_("Exception thrown from WebSocket.send():", t.message || t.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0);
        }
      }, t.responsesRequiredToBeHealthy = 2, t.healthyTimeout = 3e4, t;
    }(),
        Sn = function () {
      function t(t) {
        this.initTransports_(t);
      }

      return Object.defineProperty(t, "ALL_TRANSPORTS", {
        get: function () {
          return [Cn, bn];
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.initTransports_ = function (e) {
        var n = bn && bn.isAvailable(),
            r = n && !bn.previouslyFailed();
        if (e.webSocketOnly && (n || rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), r = !0), r) this.transports_ = [bn];else {
          var i = this.transports_ = [];
          pt(t.ALL_TRANSPORTS, function (t, e) {
            e && e.isAvailable() && i.push(e);
          });
        }
      }, t.prototype.initialTransport = function () {
        if (this.transports_.length > 0) return this.transports_[0];
        throw new Error("No transports available");
      }, t.prototype.upgradeTransport = function () {
        return this.transports_.length > 1 ? this.transports_[1] : null;
      }, t;
    }(),
        Tn = function () {
      function t(t, e, n, r, i, o, s) {
        this.id = t, this.repoInfo_ = e, this.onMessage_ = n, this.onReady_ = r, this.onDisconnect_ = i, this.onKill_ = o, this.lastSessionId = s, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = tt("c:" + this.id + ":"), this.transportManager_ = new Sn(e), this.log_("Connection created"), this.start_();
      }

      return t.prototype.start_ = function () {
        var t = this,
            e = this.transportManager_.initialTransport();
        this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, void 0, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
        var n = this.connReceiver_(this.conn_),
            r = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function () {
          t.conn_ && t.conn_.open(n, r);
        }, Math.floor(0));
        var i = e.healthyTimeout || 0;
        i > 0 && (this.healthyTimeout_ = gt(function () {
          t.healthyTimeout_ = null, t.isHealthy_ || (t.conn_ && t.conn_.bytesReceived > 102400 ? (t.log_("Connection exceeded healthy timeout but has received " + t.conn_.bytesReceived + " bytes.  Marking connection healthy."), t.isHealthy_ = !0, t.conn_.markConnectionHealthy()) : t.conn_ && t.conn_.bytesSent > 10240 ? t.log_("Connection exceeded healthy timeout but has sent " + t.conn_.bytesSent + " bytes.  Leaving connection alive.") : (t.log_("Closing unhealthy connection after timeout."), t.close()));
        }, Math.floor(i)));
      }, t.prototype.nextTransportId_ = function () {
        return "c:" + this.id + ":" + this.connectionCount++;
      }, t.prototype.disconnReceiver_ = function (t) {
        var e = this;
        return function (n) {
          t === e.conn_ ? e.onConnectionLost_(n) : t === e.secondaryConn_ ? (e.log_("Secondary connection lost."), e.onSecondaryConnectionLost_()) : e.log_("closing an old connection");
        };
      }, t.prototype.connReceiver_ = function (t) {
        var e = this;
        return function (n) {
          2 != e.state_ && (t === e.rx_ ? e.onPrimaryMessageReceived_(n) : t === e.secondaryConn_ ? e.onSecondaryMessageReceived_(n) : e.log_("message on old connection"));
        };
      }, t.prototype.sendRequest = function (t) {
        var e = {
          t: "d",
          d: t
        };
        this.sendData_(e);
      }, t.prototype.tryCleanupConnection = function () {
        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null);
      }, t.prototype.onSecondaryControl_ = function (t) {
        if ("t" in t) {
          var e = t.t;
          "a" === e ? this.upgradeIfSecondaryHealthy_() : "r" === e ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === e && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
        }
      }, t.prototype.onSecondaryMessageReceived_ = function (t) {
        var e = ut("t", t),
            n = ut("d", t);
        if ("c" == e) this.onSecondaryControl_(n);else {
          if ("d" != e) throw new Error("Unknown protocol layer: " + e);
          this.pendingDataMessages.push(n);
        }
      }, t.prototype.upgradeIfSecondaryHealthy_ = function () {
        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
          t: "c",
          d: {
            t: "p",
            d: {}
          }
        }));
      }, t.prototype.proceedWithUpgrade_ = function () {
        this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
          t: "c",
          d: {
            t: "a",
            d: {}
          }
        }), this.log_("Ending transmission on primary"), this.conn_.send({
          t: "c",
          d: {
            t: "n",
            d: {}
          }
        }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
      }, t.prototype.onPrimaryMessageReceived_ = function (t) {
        var e = ut("t", t),
            n = ut("d", t);
        "c" == e ? this.onControl_(n) : "d" == e && this.onDataMessage_(n);
      }, t.prototype.onDataMessage_ = function (t) {
        this.onPrimaryResponse_(), this.onMessage_(t);
      }, t.prototype.onPrimaryResponse_ = function () {
        this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
      }, t.prototype.onControl_ = function (t) {
        var e = ut("t", t);

        if ("d" in t) {
          var n = t.d;
          if ("h" === e) this.onHandshake_(n);else if ("n" === e) {
            this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;

            for (var r = 0; r < this.pendingDataMessages.length; ++r) this.onDataMessage_(this.pendingDataMessages[r]);

            this.pendingDataMessages = [], this.tryCleanupConnection();
          } else "s" === e ? this.onConnectionShutdown_(n) : "r" === e ? this.onReset_(n) : "e" === e ? et("Server Error: " + n) : "o" === e ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : et("Unknown control packet command: " + e);
        }
      }, t.prototype.onHandshake_ = function (t) {
        var e = t.ts,
            n = t.v,
            r = t.h;
        this.sessionId = t.s, this.repoInfo_.updateHost(r), 0 == this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, e), "5" !== n && rt("Protocol version mismatch detected"), this.tryStartUpgrade_());
      }, t.prototype.tryStartUpgrade_ = function () {
        var t = this.transportManager_.upgradeTransport();
        t && this.startUpgrade_(t);
      }, t.prototype.startUpgrade_ = function (t) {
        var e = this;
        this.secondaryConn_ = new t(this.nextTransportId_(), this.repoInfo_, this.sessionId), this.secondaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
        var n = this.connReceiver_(this.secondaryConn_),
            r = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(n, r), gt(function () {
          e.secondaryConn_ && (e.log_("Timed out trying to upgrade."), e.secondaryConn_.close());
        }, Math.floor(6e4));
      }, t.prototype.onReset_ = function (t) {
        this.log_("Reset packet received.  New host: " + t), this.repoInfo_.updateHost(t), 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_());
      }, t.prototype.onConnectionEstablished_ = function (t, e) {
        var n = this;
        this.log_("Realtime connection established."), this.conn_ = t, this.state_ = 1, this.onReady_ && (this.onReady_(e, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : gt(function () {
          n.sendPingOnPrimaryIfNecessary_();
        }, Math.floor(5e3));
      }, t.prototype.sendPingOnPrimaryIfNecessary_ = function () {
        this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
          t: "c",
          d: {
            t: "p",
            d: {}
          }
        }));
      }, t.prototype.onSecondaryConnectionLost_ = function () {
        var t = this.secondaryConn_;
        this.secondaryConn_ = null, this.tx_ !== t && this.rx_ !== t || this.close();
      }, t.prototype.onConnectionLost_ = function (t) {
        this.conn_ = null, t || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (B.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close();
      }, t.prototype.onConnectionShutdown_ = function (t) {
        this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(t), this.onKill_ = null), this.onDisconnect_ = null, this.close();
      }, t.prototype.sendData_ = function (t) {
        if (1 !== this.state_) throw "Connection is not connected";
        this.tx_.send(t);
      }, t.prototype.close = function () {
        2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null));
      }, t.prototype.closeConnections_ = function () {
        this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null);
      }, t;
    }(),
        Nn = function () {
      function t() {}

      return t.prototype.put = function (t, e, n, r) {}, t.prototype.merge = function (t, e, n, r) {}, t.prototype.refreshAuthToken = function (t) {}, t.prototype.onDisconnectPut = function (t, e, n) {}, t.prototype.onDisconnectMerge = function (t, e, n) {}, t.prototype.onDisconnectCancel = function (t, e) {}, t.prototype.reportStats = function (t) {}, t;
    }(),
        In = 1e3,
        Rn = 3e5,
        Pn = function (t) {
      function n(e, r, i, o, s, a) {
        var h = t.call(this) || this;
        if (h.repoInfo_ = e, h.onDataUpdate_ = r, h.onConnectStatus_ = i, h.onServerInfoUpdate_ = o, h.authTokenProvider_ = s, h.authOverride_ = a, h.id = n.nextPersistentConnectionId_++, h.log_ = tt("p:" + h.id + ":"), h.interruptReasons_ = {}, h.listens_ = {}, h.outstandingPuts_ = [], h.outstandingPutCount_ = 0, h.onDisconnectRequestQueue_ = [], h.connected_ = !1, h.reconnectDelay_ = In, h.maxReconnectDelay_ = Rn, h.securityDebugCallback_ = null, h.lastSessionId = null, h.establishConnectionTimer_ = null, h.visible_ = !1, h.requestCBHash_ = {}, h.requestNumber_ = 0, h.realtime_ = null, h.authToken_ = null, h.forceTokenRefresh_ = !1, h.invalidAuthTokenCount_ = 0, h.firstConnection_ = !0, h.lastConnectionAttemptTime_ = null, h.lastConnectionEstablishedTime_ = null, a && !f()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
        return h.scheduleConnect_(0), _n.getInstance().on("visible", h.onVisible_, h), -1 === e.host.indexOf("fblocal") && yn.getInstance().on("online", h.onOnline_, h), h;
      }

      return r(n, t), n.prototype.sendRequest = function (t, e, n) {
        var r = ++this.requestNumber_,
            i = {
          r: r,
          a: t,
          b: e
        };
        this.log_(C(i)), s(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(i), n && (this.requestCBHash_[r] = n);
      }, n.prototype.listen = function (t, e, n, r) {
        var i = t.queryIdentifier(),
            o = t.path.toString();
        this.log_("Listen called for " + o + " " + i), this.listens_[o] = this.listens_[o] || {}, s(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), s(!this.listens_[o][i], "listen() called twice for same path/queryId.");
        var a = {
          onComplete: r,
          hashFn: e,
          query: t,
          tag: n
        };
        this.listens_[o][i] = a, this.connected_ && this.sendListen_(a);
      }, n.prototype.sendListen_ = function (t) {
        var e = this,
            r = t.query,
            i = r.path.toString(),
            o = r.queryIdentifier();
        this.log_("Listen on " + i + " for " + o);
        var s = {
          p: i
        };
        t.tag && (s.q = r.queryObject(), s.t = t.tag), s.h = t.hashFn(), this.sendRequest("q", s, function (s) {
          var a = s.d,
              h = s.s;
          n.warnOnListenWarnings_(a, r), (e.listens_[i] && e.listens_[i][o]) === t && (e.log_("listen response", s), "ok" !== h && e.removeListen_(i, o), t.onComplete && t.onComplete(h, a));
        });
      }, n.warnOnListenWarnings_ = function (t, e) {
        if (t && "object" == typeof t && w(t, "w")) {
          var n = b(t, "w");

          if (Array.isArray(n) && ~n.indexOf("no_index")) {
            var r = '".indexOn": "' + e.getQueryParams().getIndex().toString() + '"',
                i = e.path.toString();
            rt("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + r + " at " + i + " to your security rules for better performance.");
          }
        }
      }, n.prototype.refreshAuthToken = function (t) {
        this.authToken_ = t, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function () {}), this.reduceReconnectDelayIfAdminCredential_(t);
      }, n.prototype.reduceReconnectDelayIfAdminCredential_ = function (t) {
        var e;
        (t && 40 === t.length || "object" == typeof (e = E(t).claims) && !0 === e.admin) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4);
      }, n.prototype.tryAuth = function () {
        var t,
            e,
            n = this;

        if (this.connected_ && this.authToken_) {
          var r = this.authToken_,
              i = (t = E(r), e = t.claims, t.signature && e && "object" == typeof e && e.hasOwnProperty("iat") ? "auth" : "gauth"),
              o = {
            cred: r
          };
          null === this.authOverride_ ? o.noauth = !0 : "object" == typeof this.authOverride_ && (o.authvar = this.authOverride_), this.sendRequest(i, o, function (t) {
            var e = t.s,
                i = t.d || "error";
            n.authToken_ === r && ("ok" === e ? n.invalidAuthTokenCount_ = 0 : n.onAuthRevoked_(e, i));
          });
        }
      }, n.prototype.unlisten = function (t, e) {
        var n = t.path.toString(),
            r = t.queryIdentifier();
        this.log_("Unlisten called for " + n + " " + r), s(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, t.queryObject(), e);
      }, n.prototype.sendUnlisten_ = function (t, e, n, r) {
        this.log_("Unlisten on " + t + " for " + e);
        var i = {
          p: t
        };
        r && (i.q = n, i.t = r), this.sendRequest("n", i);
      }, n.prototype.onDisconnectPut = function (t, e, n) {
        this.connected_ ? this.sendOnDisconnect_("o", t, e, n) : this.onDisconnectRequestQueue_.push({
          pathString: t,
          action: "o",
          data: e,
          onComplete: n
        });
      }, n.prototype.onDisconnectMerge = function (t, e, n) {
        this.connected_ ? this.sendOnDisconnect_("om", t, e, n) : this.onDisconnectRequestQueue_.push({
          pathString: t,
          action: "om",
          data: e,
          onComplete: n
        });
      }, n.prototype.onDisconnectCancel = function (t, e) {
        this.connected_ ? this.sendOnDisconnect_("oc", t, null, e) : this.onDisconnectRequestQueue_.push({
          pathString: t,
          action: "oc",
          data: null,
          onComplete: e
        });
      }, n.prototype.sendOnDisconnect_ = function (t, e, n, r) {
        var i = {
          p: e,
          d: n
        };
        this.log_("onDisconnect " + t, i), this.sendRequest(t, i, function (t) {
          r && setTimeout(function () {
            r(t.s, t.d);
          }, Math.floor(0));
        });
      }, n.prototype.put = function (t, e, n, r) {
        this.putInternal("p", t, e, n, r);
      }, n.prototype.merge = function (t, e, n, r) {
        this.putInternal("m", t, e, n, r);
      }, n.prototype.putInternal = function (t, e, n, r, i) {
        var o = {
          p: e,
          d: n
        };
        void 0 !== i && (o.h = i), this.outstandingPuts_.push({
          action: t,
          request: o,
          onComplete: r
        }), this.outstandingPutCount_++;
        var s = this.outstandingPuts_.length - 1;
        this.connected_ ? this.sendPut_(s) : this.log_("Buffering put: " + e);
      }, n.prototype.sendPut_ = function (t) {
        var e = this,
            n = this.outstandingPuts_[t].action,
            r = this.outstandingPuts_[t].request,
            i = this.outstandingPuts_[t].onComplete;
        this.outstandingPuts_[t].queued = this.connected_, this.sendRequest(n, r, function (r) {
          e.log_(n + " response", r), delete e.outstandingPuts_[t], e.outstandingPutCount_--, 0 === e.outstandingPutCount_ && (e.outstandingPuts_ = []), i && i(r.s, r.d);
        });
      }, n.prototype.reportStats = function (t) {
        var e = this;

        if (this.connected_) {
          var n = {
            c: t
          };
          this.log_("reportStats", n), this.sendRequest("s", n, function (t) {
            if ("ok" !== t.s) {
              var n = t.d;
              e.log_("reportStats", "Error sending stats: " + n);
            }
          });
        }
      }, n.prototype.onDataMessage_ = function (t) {
        if ("r" in t) {
          this.log_("from server: " + C(t));
          var e = t.r,
              n = this.requestCBHash_[e];
          n && (delete this.requestCBHash_[e], n(t.b));
        } else {
          if ("error" in t) throw "A server-side error has occurred: " + t.error;
          "a" in t && this.onDataPush_(t.a, t.b);
        }
      }, n.prototype.onDataPush_ = function (t, e) {
        this.log_("handleServerMessage", t, e), "d" === t ? this.onDataUpdate_(e.p, e.d, !1, e.t) : "m" === t ? this.onDataUpdate_(e.p, e.d, !0, e.t) : "c" === t ? this.onListenRevoked_(e.p, e.q) : "ac" === t ? this.onAuthRevoked_(e.s, e.d) : "sd" === t ? this.onSecurityDebugPacket_(e) : et("Unrecognized action received from server: " + C(t) + "\nAre you using the latest client?");
      }, n.prototype.onReady_ = function (t, e) {
        this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = new Date().getTime(), this.handleTimestamp_(t), this.lastSessionId = e, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0);
      }, n.prototype.scheduleConnect_ = function (t) {
        var e = this;
        s(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function () {
          e.establishConnectionTimer_ = null, e.establishConnection_();
        }, Math.floor(t));
      }, n.prototype.onVisible_ = function (t) {
        t && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = In, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = t;
      }, n.prototype.onOnline_ = function (t) {
        t ? (this.log_("Browser went online."), this.reconnectDelay_ = In, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
      }, n.prototype.onRealtimeDisconnect_ = function () {
        if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
          if (this.visible_) {
            if (this.lastConnectionEstablishedTime_) {
              new Date().getTime() - this.lastConnectionEstablishedTime_ > 3e4 && (this.reconnectDelay_ = In), this.lastConnectionEstablishedTime_ = null;
            }
          } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = new Date().getTime();

          var t = new Date().getTime() - this.lastConnectionAttemptTime_,
              e = Math.max(0, this.reconnectDelay_ - t);
          e = Math.random() * e, this.log_("Trying to reconnect in " + e + "ms"), this.scheduleConnect_(e), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_);
        }

        this.onConnectStatus_(!1);
      }, n.prototype.establishConnection_ = function () {
        if (this.shouldReconnect_()) {
          this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = new Date().getTime(), this.lastConnectionEstablishedTime_ = null;

          var t = this.onDataMessage_.bind(this),
              e = this.onReady_.bind(this),
              r = this.onRealtimeDisconnect_.bind(this),
              i = this.id + ":" + n.nextConnectionId_++,
              a = this,
              h = this.lastSessionId,
              u = !1,
              l = null,
              c = function () {
            l ? l.close() : (u = !0, r());
          };

          this.realtime_ = {
            close: c,
            sendRequest: function (t) {
              s(l, "sendRequest call when we're not connected not allowed."), l.sendRequest(t);
            }
          };
          var p = this.forceTokenRefresh_;
          this.forceTokenRefresh_ = !1, this.authTokenProvider_.getToken(p).then(function (n) {
            u ? Z("getToken() completed but was canceled") : (Z("getToken() completed. Creating connection."), a.authToken_ = n && n.accessToken, l = new Tn(i, a.repoInfo_, t, e, r, function (t) {
              rt(t + " (" + a.repoInfo_.toString() + ")"), a.interrupt("server_kill");
            }, h));
          }).then(null, function (t) {
            a.log_("Failed to get token: " + t), u || (o.NODE_ADMIN && rt(t), c());
          });
        }
      }, n.prototype.interrupt = function (t) {
        Z("Interrupting connection for reason: " + t), this.interruptReasons_[t] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
      }, n.prototype.resume = function (t) {
        Z("Resuming connection for reason: " + t), delete this.interruptReasons_[t], N(this.interruptReasons_) && (this.reconnectDelay_ = In, this.realtime_ || this.scheduleConnect_(0));
      }, n.prototype.handleTimestamp_ = function (t) {
        var e = t - new Date().getTime();
        this.onServerInfoUpdate_({
          serverTimeOffset: e
        });
      }, n.prototype.cancelSentTransactions_ = function () {
        for (var t = 0; t < this.outstandingPuts_.length; t++) {
          var e = this.outstandingPuts_[t];
          e && "h" in e.request && e.queued && (e.onComplete && e.onComplete("disconnect"), delete this.outstandingPuts_[t], this.outstandingPutCount_--);
        }

        0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
      }, n.prototype.onListenRevoked_ = function (t, e) {
        var n;
        n = e ? e.map(function (t) {
          return lt(t);
        }).join("$") : "default";
        var r = this.removeListen_(t, n);
        r && r.onComplete && r.onComplete("permission_denied");
      }, n.prototype.removeListen_ = function (t, e) {
        var n,
            r = new mt(t).toString();
        return void 0 !== this.listens_[r] ? (n = this.listens_[r][e], delete this.listens_[r][e], 0 === I(this.listens_[r]) && delete this.listens_[r]) : n = void 0, n;
      }, n.prototype.onAuthRevoked_ = function (t, e) {
        Z("Auth token revoked: " + t + "/" + e), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== t && "permission_denied" !== t || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()));
      }, n.prototype.onSecurityDebugPacket_ = function (t) {
        this.securityDebugCallback_ ? this.securityDebugCallback_(t) : "msg" in t && console.log("FIREBASE: " + t.msg.replace("\n", "\nFIREBASE: "));
      }, n.prototype.restoreState_ = function () {
        var t = this;
        this.tryAuth(), S(this.listens_, function (e, n) {
          S(n, function (e, n) {
            t.sendListen_(n);
          });
        });

        for (var e = 0; e < this.outstandingPuts_.length; e++) this.outstandingPuts_[e] && this.sendPut_(e);

        for (; this.onDisconnectRequestQueue_.length;) {
          var n = this.onDisconnectRequestQueue_.shift();
          this.sendOnDisconnect_(n.action, n.pathString, n.data, n.onComplete);
        }
      }, n.prototype.sendConnectStats_ = function () {
        var t = {},
            n = "js";
        o.NODE_ADMIN ? n = "admin_node" : o.NODE_CLIENT && (n = "node"), t["sdk." + n + "." + e.SDK_VERSION.replace(/\./g, "-")] = 1, d() ? t["framework.cordova"] = 1 : "object" == typeof navigator && "ReactNative" === navigator.product && (t["framework.reactnative"] = 1), this.reportStats(t);
      }, n.prototype.shouldReconnect_ = function () {
        var t = yn.getInstance().currentlyOnline();
        return N(this.interruptReasons_) && t;
      }, n.nextPersistentConnectionId_ = 0, n.nextConnectionId_ = 0, n;
    }(Nn),
        Dn = function (t) {
      function e(e, n, r) {
        var i = t.call(this) || this;
        return i.repoInfo_ = e, i.onDataUpdate_ = n, i.authTokenProvider_ = r, i.log_ = tt("p:rest:"), i.listens_ = {}, i;
      }

      return r(e, t), e.prototype.reportStats = function (t) {
        throw new Error("Method not implemented.");
      }, e.getListenId_ = function (t, e) {
        return void 0 !== e ? "tag$" + e : (s(t.getQueryParams().isDefault(), "should have a tag if it's not a default query."), t.path.toString());
      }, e.prototype.listen = function (t, n, r, i) {
        var o = this,
            s = t.path.toString();
        this.log_("Listen called for " + s + " " + t.queryIdentifier());
        var a = e.getListenId_(t, r),
            h = {};
        this.listens_[a] = h;
        var u = t.getQueryParams().toRestQueryStringParameters();
        this.restRequest_(s + ".json", u, function (t, e) {
          var n = e;
          (404 === t && (n = null, t = null), null === t && o.onDataUpdate_(s, n, !1, r), b(o.listens_, a) === h) && i(t ? 401 == t ? "permission_denied" : "rest_error:" + t : "ok", null);
        });
      }, e.prototype.unlisten = function (t, n) {
        var r = e.getListenId_(t, n);
        delete this.listens_[r];
      }, e.prototype.refreshAuthToken = function (t) {}, e.prototype.restRequest_ = function (t, e, n) {
        var r = this;
        void 0 === e && (e = {}), e.format = "export", this.authTokenProvider_.getToken(!1).then(function (i) {
          var o = i && i.accessToken;
          o && (e.auth = o);
          var s,
              a = (r.repoInfo_.secure ? "https://" : "http://") + r.repoInfo_.host + t + "?" + (s = [], S(e, function (t, e) {
            Array.isArray(e) ? e.forEach(function (e) {
              s.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
            }) : s.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
          }), s.length ? "&" + s.join("&") : "");
          r.log_("Sending REST request for " + a);
          var h = new XMLHttpRequest();
          h.onreadystatechange = function () {
            if (n && 4 === h.readyState) {
              r.log_("REST Response for " + a + " received. status:", h.status, "response:", h.responseText);
              var t = null;

              if (h.status >= 200 && h.status < 300) {
                try {
                  t = m(h.responseText);
                } catch (t) {
                  rt("Failed to parse JSON response for " + a + ": " + h.responseText);
                }

                n(null, t);
              } else 401 !== h.status && 404 !== h.status && rt("Got unsuccessful REST response for " + a + " Status: " + h.status), n(h.status);

              n = null;
            }
          }, h.open("GET", a, !0), h.send();
        });
      }, e;
    }(Nn),
        On = function () {
      function t(t, e, n) {
        var r = this;
        this.repoInfo_ = t, this.app = n, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new pn(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = new Pe(), this.persistentConnection_ = null;
        var i = new on(n);
        if (this.stats_ = an.getCollection(t), e || vt()) this.server_ = new Dn(this.repoInfo_, this.onDataUpdate_.bind(this), i), setTimeout(this.onConnectStatus_.bind(this, !0), 0);else {
          var o = n.options.databaseAuthVariableOverride;

          if (void 0 !== o && null !== o) {
            if ("object" != typeof o) throw new Error("Only objects are supported for option databaseAuthVariableOverride");

            try {
              C(o);
            } catch (t) {
              throw new Error("Invalid authOverride provided: " + t);
            }
          }

          this.persistentConnection_ = new Pn(this.repoInfo_, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), i, o), this.server_ = this.persistentConnection_;
        }
        i.addTokenChangeListener(function (t) {
          r.server_.refreshAuthToken(t);
        }), this.statsReporter_ = an.getOrCreateReporter(t, function () {
          return new cn(r.stats_, r.server_);
        }), this.transactions_init_(), this.infoData_ = new rn(), this.infoSyncTree_ = new nn({
          startListening: function (t, e, n, i) {
            var o = [],
                s = r.infoData_.getNode(t.path);
            return s.isEmpty() || (o = r.infoSyncTree_.applyServerOverwrite(t.path, s), setTimeout(function () {
              i("ok");
            }, 0)), o;
          },
          stopListening: function () {}
        }), this.updateInfo_("connected", !1), this.serverSyncTree_ = new nn({
          startListening: function (t, e, n, i) {
            return r.server_.listen(t, n, e, function (e, n) {
              var o = i(e, n);
              r.eventQueue_.raiseEventsForChangedPath(t.path, o);
            }), [];
          },
          stopListening: function (t, e) {
            r.server_.unlisten(t, e);
          }
        });
      }

      return t.prototype.toString = function () {
        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
      }, t.prototype.name = function () {
        return this.repoInfo_.namespace;
      }, t.prototype.serverTime = function () {
        var t = this.infoData_.getNode(new mt(".info/serverTimeOffset")).val() || 0;
        return new Date().getTime() + t;
      }, t.prototype.generateServerValues = function () {
        return (t = (t = {
          timestamp: this.serverTime()
        }) || {}).timestamp = t.timestamp || new Date().getTime(), t;
        var t;
      }, t.prototype.onDataUpdate_ = function (t, e, n, r) {
        this.dataUpdateCount++;
        var i = new mt(t);
        e = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(t, e) : e;
        var o = [];
        if (r) {
          if (n) {
            var s = R(e, function (t) {
              return ve(t);
            });
            o = this.serverSyncTree_.applyTaggedQueryMerge(i, s, r);
          } else {
            var a = ve(e);
            o = this.serverSyncTree_.applyTaggedQueryOverwrite(i, a, r);
          }
        } else if (n) {
          var h = R(e, function (t) {
            return ve(t);
          });
          o = this.serverSyncTree_.applyServerMerge(i, h);
        } else {
          var u = ve(e);
          o = this.serverSyncTree_.applyServerOverwrite(i, u);
        }
        var l = i;
        o.length > 0 && (l = this.rerunTransactions_(i)), this.eventQueue_.raiseEventsForChangedPath(l, o);
      }, t.prototype.interceptServerData_ = function (t) {
        this.interceptServerDataCallback_ = t;
      }, t.prototype.onConnectStatus_ = function (t) {
        this.updateInfo_("connected", t), !1 === t && this.runOnDisconnectEvents_();
      }, t.prototype.onServerInfoUpdate_ = function (t) {
        var e = this;
        pt(t, function (t, n) {
          e.updateInfo_(n, t);
        });
      }, t.prototype.updateInfo_ = function (t, e) {
        var n = new mt("/.info/" + t),
            r = ve(e);
        this.infoData_.updateSnapshot(n, r);
        var i = this.infoSyncTree_.applyServerOverwrite(n, r);
        this.eventQueue_.raiseEventsForChangedPath(n, i);
      }, t.prototype.getNextWriteId_ = function () {
        return this.nextWriteId_++;
      }, t.prototype.setWithPriority = function (t, e, n, r) {
        var i = this;
        this.log_("set", {
          path: t.toString(),
          value: e,
          priority: n
        });
        var o = this.generateServerValues(),
            s = ve(e, n),
            a = Oe(s, o),
            h = this.getNextWriteId_(),
            u = this.serverSyncTree_.applyUserOverwrite(t, a, h, !0);
        this.eventQueue_.queueEvents(u), this.server_.put(t.toString(), s.val(!0), function (e, n) {
          var o = "ok" === e;
          o || rt("set at " + t + " failed: " + e);
          var s = i.serverSyncTree_.ackUserWrite(h, !o);
          i.eventQueue_.raiseEventsForChangedPath(t, s), i.callOnCompleteCallback(r, e, n);
        });
        var l = this.abortTransactions_(t);
        this.rerunTransactions_(l), this.eventQueue_.raiseEventsForChangedPath(l, []);
      }, t.prototype.update = function (t, e, n) {
        var r = this;
        this.log_("update", {
          path: t.toString(),
          value: e
        });
        var i = !0,
            o = this.generateServerValues(),
            s = {};
        if (S(e, function (t, e) {
          i = !1;
          var n = ve(e);
          s[t] = Oe(n, o);
        }), i) Z("update() called with empty data.  Don't do anything."), this.callOnCompleteCallback(n, "ok");else {
          var a = this.getNextWriteId_(),
              h = this.serverSyncTree_.applyUserMerge(t, s, a);
          this.eventQueue_.queueEvents(h), this.server_.merge(t.toString(), e, function (e, i) {
            var o = "ok" === e;
            o || rt("update at " + t + " failed: " + e);
            var s = r.serverSyncTree_.ackUserWrite(a, !o),
                h = s.length > 0 ? r.rerunTransactions_(t) : t;
            r.eventQueue_.raiseEventsForChangedPath(h, s), r.callOnCompleteCallback(n, e, i);
          }), S(e, function (e) {
            var n = r.abortTransactions_(t.child(e));
            r.rerunTransactions_(n);
          }), this.eventQueue_.raiseEventsForChangedPath(t, []);
        }
      }, t.prototype.runOnDisconnectEvents_ = function () {
        var t = this;
        this.log_("onDisconnectEvents");
        var e = this.generateServerValues(),
            n = [];
        (function (t, e) {
          var n = new Pe();
          return t.forEachTree(new mt(""), function (t, r) {
            n.remember(t, Oe(r, e));
          }), n;
        })(this.onDisconnect_, e).forEachTree(mt.Empty, function (e, r) {
          n = n.concat(t.serverSyncTree_.applyServerOverwrite(e, r));
          var i = t.abortTransactions_(e);
          t.rerunTransactions_(i);
        }), this.onDisconnect_ = new Pe(), this.eventQueue_.raiseEventsForChangedPath(mt.Empty, n);
      }, t.prototype.onDisconnectCancel = function (t, e) {
        var n = this;
        this.server_.onDisconnectCancel(t.toString(), function (r, i) {
          "ok" === r && n.onDisconnect_.forget(t), n.callOnCompleteCallback(e, r, i);
        });
      }, t.prototype.onDisconnectSet = function (t, e, n) {
        var r = this,
            i = ve(e);
        this.server_.onDisconnectPut(t.toString(), i.val(!0), function (e, o) {
          "ok" === e && r.onDisconnect_.remember(t, i), r.callOnCompleteCallback(n, e, o);
        });
      }, t.prototype.onDisconnectSetWithPriority = function (t, e, n, r) {
        var i = this,
            o = ve(e, n);
        this.server_.onDisconnectPut(t.toString(), o.val(!0), function (e, n) {
          "ok" === e && i.onDisconnect_.remember(t, o), i.callOnCompleteCallback(r, e, n);
        });
      }, t.prototype.onDisconnectUpdate = function (t, e, n) {
        var r = this;
        if (N(e)) return Z("onDisconnect().update() called with empty data.  Don't do anything."), void this.callOnCompleteCallback(n, "ok");
        this.server_.onDisconnectMerge(t.toString(), e, function (i, o) {
          "ok" === i && S(e, function (e, n) {
            var i = ve(n);
            r.onDisconnect_.remember(t.child(e), i);
          }), r.callOnCompleteCallback(n, i, o);
        });
      }, t.prototype.addEventCallbackForQuery = function (t, e) {
        var n;
        n = ".info" === t.path.getFront() ? this.infoSyncTree_.addEventRegistration(t, e) : this.serverSyncTree_.addEventRegistration(t, e), this.eventQueue_.raiseEventsAtPath(t.path, n);
      }, t.prototype.removeEventCallbackForQuery = function (t, e) {
        var n;
        n = ".info" === t.path.getFront() ? this.infoSyncTree_.removeEventRegistration(t, e) : this.serverSyncTree_.removeEventRegistration(t, e), this.eventQueue_.raiseEventsAtPath(t.path, n);
      }, t.prototype.interrupt = function () {
        this.persistentConnection_ && this.persistentConnection_.interrupt("repo_interrupt");
      }, t.prototype.resume = function () {
        this.persistentConnection_ && this.persistentConnection_.resume("repo_interrupt");
      }, t.prototype.stats = function (t) {
        if (void 0 === t && (t = !1), "undefined" != typeof console) {
          var e;
          t ? (this.statsListener_ || (this.statsListener_ = new hn(this.stats_)), e = this.statsListener_.get()) : e = this.stats_.get();
          var n = Object.keys(e).reduce(function (t, e) {
            return Math.max(e.length, t);
          }, 0);
          S(e, function (t, e) {
            for (var r = t.length; r < n + 2; r++) t += " ";

            console.log(t + e);
          });
        }
      }, t.prototype.statsIncrementCounter = function (t) {
        this.stats_.incrementCounter(t), this.statsReporter_.includeStat(t);
      }, t.prototype.log_ = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        var n = "";
        this.persistentConnection_ && (n = this.persistentConnection_.id + ":"), Z.apply(void 0, [n].concat(t));
      }, t.prototype.callOnCompleteCallback = function (t, e, n) {
        t && yt(function () {
          if ("ok" == e) t(null);else {
            var r = (e || "error").toUpperCase(),
                i = r;
            n && (i += ": " + n);
            var o = new Error(i);
            o.code = r, t(o);
          }
        });
      }, Object.defineProperty(t.prototype, "database", {
        get: function () {
          return this.__database || (this.__database = new Un(this));
        },
        enumerable: !0,
        configurable: !0
      }), t;
    }(),
        kn = function () {
      function t(e) {
        this.indexedFilter_ = new Be(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = t.getStartPost_(e), this.endPost_ = t.getEndPost_(e);
      }

      return t.prototype.getStartPost = function () {
        return this.startPost_;
      }, t.prototype.getEndPost = function () {
        return this.endPost_;
      }, t.prototype.matches = function (t) {
        return this.index_.compare(this.getStartPost(), t) <= 0 && this.index_.compare(t, this.getEndPost()) <= 0;
      }, t.prototype.updateChild = function (t, e, n, r, i, o) {
        return this.matches(new Bt(e, n)) || (n = fe.EMPTY_NODE), this.indexedFilter_.updateChild(t, e, n, r, i, o);
      }, t.prototype.updateFullNode = function (t, e, n) {
        e.isLeafNode() && (e = fe.EMPTY_NODE);
        var r = e.withIndex(this.index_);
        r = r.updatePriority(fe.EMPTY_NODE);
        var i = this;
        return e.forEachChild(ne, function (t, e) {
          i.matches(new Bt(t, e)) || (r = r.updateImmediateChild(t, fe.EMPTY_NODE));
        }), this.indexedFilter_.updateFullNode(t, r, n);
      }, t.prototype.updatePriority = function (t, e) {
        return t;
      }, t.prototype.filtersNodes = function () {
        return !0;
      }, t.prototype.getIndexedFilter = function () {
        return this.indexedFilter_;
      }, t.prototype.getIndex = function () {
        return this.index_;
      }, t.getStartPost_ = function (t) {
        if (t.hasStart()) {
          var e = t.getIndexStartName();
          return t.getIndex().makePost(t.getIndexStartValue(), e);
        }

        return t.getIndex().minPost();
      }, t.getEndPost_ = function (t) {
        if (t.hasEnd()) {
          var e = t.getIndexEndName();
          return t.getIndex().makePost(t.getIndexEndValue(), e);
        }

        return t.getIndex().maxPost();
      }, t;
    }(),
        xn = function () {
      function t(t) {
        this.rangedFilter_ = new kn(t), this.index_ = t.getIndex(), this.limit_ = t.getLimit(), this.reverse_ = !t.isViewFromLeft();
      }

      return t.prototype.updateChild = function (t, e, n, r, i, o) {
        return this.rangedFilter_.matches(new Bt(e, n)) || (n = fe.EMPTY_NODE), t.getImmediateChild(e).equals(n) ? t : t.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(t, e, n, r, i, o) : this.fullLimitUpdateChild_(t, e, n, i, o);
      }, t.prototype.updateFullNode = function (t, e, n) {
        var r;
        if (e.isLeafNode() || e.isEmpty()) r = fe.EMPTY_NODE.withIndex(this.index_);else if (2 * this.limit_ < e.numChildren() && e.isIndexed(this.index_)) {
          r = fe.EMPTY_NODE.withIndex(this.index_);
          var i = void 0;
          i = this.reverse_ ? e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : e.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);

          for (var o = 0; i.hasNext() && o < this.limit_;) {
            var s = i.getNext();
            if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <= 0 : this.index_.compare(s, this.rangedFilter_.getEndPost()) <= 0)) break;
            r = r.updateImmediateChild(s.name, s.node), o++;
          }
        } else {
          r = (r = e.withIndex(this.index_)).updatePriority(fe.EMPTY_NODE);
          var a = void 0,
              h = void 0,
              u = void 0;
          i = void 0;

          if (this.reverse_) {
            i = r.getReverseIterator(this.index_), a = this.rangedFilter_.getEndPost(), h = this.rangedFilter_.getStartPost();
            var l = this.index_.getCompare();

            u = function (t, e) {
              return l(e, t);
            };
          } else i = r.getIterator(this.index_), a = this.rangedFilter_.getStartPost(), h = this.rangedFilter_.getEndPost(), u = this.index_.getCompare();

          o = 0;

          for (var c = !1; i.hasNext();) {
            s = i.getNext();
            !c && u(a, s) <= 0 && (c = !0), c && o < this.limit_ && u(s, h) <= 0 ? o++ : r = r.updateImmediateChild(s.name, fe.EMPTY_NODE);
          }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(t, r, n);
      }, t.prototype.updatePriority = function (t, e) {
        return t;
      }, t.prototype.filtersNodes = function () {
        return !0;
      }, t.prototype.getIndexedFilter = function () {
        return this.rangedFilter_.getIndexedFilter();
      }, t.prototype.getIndex = function () {
        return this.index_;
      }, t.prototype.fullLimitUpdateChild_ = function (t, e, n, r, i) {
        var o;

        if (this.reverse_) {
          var a = this.index_.getCompare();

          o = function (t, e) {
            return a(e, t);
          };
        } else o = this.index_.getCompare();

        var h = t;
        s(h.numChildren() == this.limit_, "");
        var u = new Bt(e, n),
            l = this.reverse_ ? h.getFirstChild(this.index_) : h.getLastChild(this.index_),
            c = this.rangedFilter_.matches(u);

        if (h.hasChild(e)) {
          for (var p = h.getImmediateChild(e), d = r.getChildAfterChild(this.index_, l, this.reverse_); null != d && (d.name == e || h.hasChild(d.name));) d = r.getChildAfterChild(this.index_, d, this.reverse_);

          var f = null == d ? 1 : o(d, u);
          if (c && !n.isEmpty() && f >= 0) return null != i && i.trackChildChange(He.childChangedChange(e, n, p)), h.updateImmediateChild(e, n);
          null != i && i.trackChildChange(He.childRemovedChange(e, p));

          var _ = h.updateImmediateChild(e, fe.EMPTY_NODE);

          return null != d && this.rangedFilter_.matches(d) ? (null != i && i.trackChildChange(He.childAddedChange(d.name, d.node)), _.updateImmediateChild(d.name, d.node)) : _;
        }

        return n.isEmpty() ? t : c && o(l, u) >= 0 ? (null != i && (i.trackChildChange(He.childRemovedChange(l.name, l.node)), i.trackChildChange(He.childAddedChange(e, n))), h.updateImmediateChild(e, n).updateImmediateChild(l.name, fe.EMPTY_NODE)) : t;
      }, t;
    }(),
        Fn = function () {
      function t() {
        this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = ne;
      }

      return t.prototype.hasStart = function () {
        return this.startSet_;
      }, t.prototype.isViewFromLeft = function () {
        return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
      }, t.prototype.getIndexStartValue = function () {
        return s(this.startSet_, "Only valid if start has been set"), this.indexStartValue_;
      }, t.prototype.getIndexStartName = function () {
        return s(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : ot;
      }, t.prototype.hasEnd = function () {
        return this.endSet_;
      }, t.prototype.getIndexEndValue = function () {
        return s(this.endSet_, "Only valid if end has been set"), this.indexEndValue_;
      }, t.prototype.getIndexEndName = function () {
        return s(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : st;
      }, t.prototype.hasLimit = function () {
        return this.limitSet_;
      }, t.prototype.hasAnchoredLimit = function () {
        return this.limitSet_ && "" !== this.viewFrom_;
      }, t.prototype.getLimit = function () {
        return s(this.limitSet_, "Only valid if limit has been set"), this.limit_;
      }, t.prototype.getIndex = function () {
        return this.index_;
      }, t.prototype.copy_ = function () {
        var e = new t();
        return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
      }, t.prototype.limit = function (t) {
        var e = this.copy_();
        return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = "", e;
      }, t.prototype.limitToFirst = function (e) {
        var n = this.copy_();
        return n.limitSet_ = !0, n.limit_ = e, n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT, n;
      }, t.prototype.limitToLast = function (e) {
        var n = this.copy_();
        return n.limitSet_ = !0, n.limit_ = e, n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT, n;
      }, t.prototype.startAt = function (t, e) {
        var n = this.copy_();
        return n.startSet_ = !0, void 0 === t && (t = null), n.indexStartValue_ = t, null != e ? (n.startNameSet_ = !0, n.indexStartName_ = e) : (n.startNameSet_ = !1, n.indexStartName_ = ""), n;
      }, t.prototype.endAt = function (t, e) {
        var n = this.copy_();
        return n.endSet_ = !0, void 0 === t && (t = null), n.indexEndValue_ = t, void 0 !== e ? (n.endNameSet_ = !0, n.indexEndName_ = e) : (n.endNameSet_ = !1, n.indexEndName_ = ""), n;
      }, t.prototype.orderBy = function (t) {
        var e = this.copy_();
        return e.index_ = t, e;
      }, t.prototype.getQueryObject = function () {
        var e = t.WIRE_PROTOCOL_CONSTANTS_,
            n = {};

        if (this.startSet_ && (n[e.INDEX_START_VALUE] = this.indexStartValue_, this.startNameSet_ && (n[e.INDEX_START_NAME] = this.indexStartName_)), this.endSet_ && (n[e.INDEX_END_VALUE] = this.indexEndValue_, this.endNameSet_ && (n[e.INDEX_END_NAME] = this.indexEndName_)), this.limitSet_) {
          n[e.LIMIT] = this.limit_;
          var r = this.viewFrom_;
          "" === r && (r = this.isViewFromLeft() ? e.VIEW_FROM_LEFT : e.VIEW_FROM_RIGHT), n[e.VIEW_FROM] = r;
        }

        return this.index_ !== ne && (n[e.INDEX] = this.index_.toString()), n;
      }, t.prototype.loadsAllData = function () {
        return !(this.startSet_ || this.endSet_ || this.limitSet_);
      }, t.prototype.isDefault = function () {
        return this.loadsAllData() && this.index_ == ne;
      }, t.prototype.getNodeFilter = function () {
        return this.loadsAllData() ? new Be(this.getIndex()) : this.hasLimit() ? new xn(this) : new kn(this);
      }, t.prototype.toRestQueryStringParameters = function () {
        var e,
            n = t.REST_QUERY_CONSTANTS_,
            r = {};
        return this.isDefault() ? r : (this.index_ === ne ? e = n.PRIORITY_INDEX : this.index_ === Ce ? e = n.VALUE_INDEX : this.index_ === Yt ? e = n.KEY_INDEX : (s(this.index_ instanceof Ee, "Unrecognized index type!"), e = this.index_.toString()), r[n.ORDER_BY] = C(e), this.startSet_ && (r[n.START_AT] = C(this.indexStartValue_), this.startNameSet_ && (r[n.START_AT] += "," + C(this.indexStartName_))), this.endSet_ && (r[n.END_AT] = C(this.indexEndValue_), this.endNameSet_ && (r[n.END_AT] += "," + C(this.indexEndName_))), this.limitSet_ && (this.isViewFromLeft() ? r[n.LIMIT_TO_FIRST] = this.limit_ : r[n.LIMIT_TO_LAST] = this.limit_), r);
      }, t.WIRE_PROTOCOL_CONSTANTS_ = {
        INDEX_START_VALUE: "sp",
        INDEX_START_NAME: "sn",
        INDEX_END_VALUE: "ep",
        INDEX_END_NAME: "en",
        LIMIT: "l",
        VIEW_FROM: "vf",
        VIEW_FROM_LEFT: "l",
        VIEW_FROM_RIGHT: "r",
        INDEX: "i"
      }, t.REST_QUERY_CONSTANTS_ = {
        ORDER_BY: "orderBy",
        PRIORITY_INDEX: "$priority",
        VALUE_INDEX: "$value",
        KEY_INDEX: "$key",
        START_AT: "startAt",
        END_AT: "endAt",
        LIMIT_TO_FIRST: "limitToFirst",
        LIMIT_TO_LAST: "limitToLast"
      }, t.DEFAULT = new t(), t;
    }(),
        An = function (t) {
      function e(e, n) {
        if (!(e instanceof On)) throw new Error("new Reference() no longer supported - use app.database().");
        return t.call(this, e, n, Fn.DEFAULT, !1) || this;
      }

      return r(e, t), e.prototype.getKey = function () {
        return k("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack();
      }, e.prototype.child = function (t) {
        return k("Reference.child", 1, 1, arguments.length), "number" == typeof t ? t = String(t) : t instanceof mt || (null === this.path.getFront() ? function (t, e, n, r) {
          n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Wt(t, e, n, r);
        }("Reference.child", 1, t, !1) : Wt("Reference.child", 1, t, !1)), new e(this.repo, this.path.child(t));
      }, e.prototype.getParent = function () {
        k("Reference.parent", 0, 0, arguments.length);
        var t = this.path.parent();
        return null === t ? null : new e(this.repo, t);
      }, e.prototype.getRoot = function () {
        k("Reference.root", 0, 0, arguments.length);

        for (var t = this; null !== t.getParent();) t = t.getParent();

        return t;
      }, e.prototype.databaseProp = function () {
        return this.repo.database;
      }, e.prototype.set = function (t, e) {
        k("Reference.set", 1, 2, arguments.length), qt("Reference.set", this.path), kt("Reference.set", 1, t, this.path, !1), F("Reference.set", 2, e, !0);
        var n = new p();
        return this.repo.setWithPriority(this.path, t, null, n.wrapCallback(e)), n.promise;
      }, e.prototype.update = function (t, e) {
        if (k("Reference.update", 1, 2, arguments.length), qt("Reference.update", this.path), Array.isArray(t)) {
          for (var n = {}, r = 0; r < t.length; ++r) n["" + r] = t[r];

          t = n, rt("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
        }

        Ft("Reference.update", 1, t, this.path, !1), F("Reference.update", 2, e, !0);
        var i = new p();
        return this.repo.update(this.path, t, i.wrapCallback(e)), i.promise;
      }, e.prototype.setWithPriority = function (t, e, n) {
        if (k("Reference.setWithPriority", 2, 3, arguments.length), qt("Reference.setWithPriority", this.path), kt("Reference.setWithPriority", 1, t, this.path, !1), At("Reference.setWithPriority", 2, e, !1), F("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";
        var r = new p();
        return this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)), r.promise;
      }, e.prototype.remove = function (t) {
        return k("Reference.remove", 0, 1, arguments.length), qt("Reference.remove", this.path), F("Reference.remove", 1, t, !0), this.set(null, t);
      }, e.prototype.transaction = function (t, e, n) {
        if (k("Reference.transaction", 1, 3, arguments.length), qt("Reference.transaction", this.path), F("Reference.transaction", 1, t, !1), F("Reference.transaction", 2, e, !0), function (t, e, n, r) {
          if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(x(t, e, r) + "must be a boolean.");
        }("Reference.transaction", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
        void 0 === n && (n = !0);
        var r = new p();
        "function" == typeof e && r.promise.catch(function () {});
        return this.repo.startTransaction(this.path, t, function (t, n, i) {
          t ? r.reject(t) : r.resolve(new Vt(n, i)), "function" == typeof e && e(t, n, i);
        }, n), r.promise;
      }, e.prototype.setPriority = function (t, e) {
        k("Reference.setPriority", 1, 2, arguments.length), qt("Reference.setPriority", this.path), At("Reference.setPriority", 1, t, !1), F("Reference.setPriority", 2, e, !0);
        var n = new p();
        return this.repo.setWithPriority(this.path.child(".priority"), t, null, n.wrapCallback(e)), n.promise;
      }, e.prototype.push = function (t, e) {
        k("Reference.push", 0, 2, arguments.length), qt("Reference.push", this.path), kt("Reference.push", 1, t, this.path, !0), F("Reference.push", 2, e, !0);
        var n,
            r = this.repo.serverTime(),
            i = Ht(r),
            o = this.child(i),
            s = this.child(i);
        return n = null != t ? o.set(t, e).then(function () {
          return s;
        }) : Promise.resolve(s), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), "function" == typeof e && n.catch(function () {}), o;
      }, e.prototype.onDisconnect = function () {
        return qt("Reference.onDisconnect", this.path), new Ut(this.repo, this.path);
      }, Object.defineProperty(e.prototype, "database", {
        get: function () {
          return this.databaseProp();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "key", {
        get: function () {
          return this.getKey();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "parent", {
        get: function () {
          return this.getParent();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "root", {
        get: function () {
          return this.getRoot();
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }(Ie);

    Ie.__referenceConstructor = An, Je.__referenceConstructor = An;

    var Ln,
        Mn = function () {
      return function () {
        this.children = {}, this.childCount = 0, this.value = null;
      };
    }(),
        Wn = function () {
      function t(t, e, n) {
        void 0 === t && (t = ""), void 0 === e && (e = null), void 0 === n && (n = new Mn()), this.name_ = t, this.parent_ = e, this.node_ = n;
      }

      return t.prototype.subTree = function (e) {
        for (var n, r = e instanceof mt ? e : new mt(e), i = this; null !== (n = r.getFront());) {
          i = new t(n, i, b(i.node_.children, n) || new Mn()), r = r.popFront();
        }

        return i;
      }, t.prototype.getValue = function () {
        return this.node_.value;
      }, t.prototype.setValue = function (t) {
        s(void 0 !== t, "Cannot set value to undefined"), this.node_.value = t, this.updateParents_();
      }, t.prototype.clear = function () {
        this.node_.value = null, this.node_.children = {}, this.node_.childCount = 0, this.updateParents_();
      }, t.prototype.hasChildren = function () {
        return this.node_.childCount > 0;
      }, t.prototype.isEmpty = function () {
        return null === this.getValue() && !this.hasChildren();
      }, t.prototype.forEachChild = function (e) {
        var n = this;
        S(this.node_.children, function (r, i) {
          e(new t(r, n, i));
        });
      }, t.prototype.forEachDescendant = function (t, e, n) {
        e && !n && t(this), this.forEachChild(function (e) {
          e.forEachDescendant(t, !0, n);
        }), e && n && t(this);
      }, t.prototype.forEachAncestor = function (t, e) {
        for (var n = e ? this : this.parent(); null !== n;) {
          if (t(n)) return !0;
          n = n.parent();
        }

        return !1;
      }, t.prototype.forEachImmediateDescendantWithValue = function (t) {
        this.forEachChild(function (e) {
          null !== e.getValue() ? t(e) : e.forEachImmediateDescendantWithValue(t);
        });
      }, t.prototype.path = function () {
        return new mt(null === this.parent_ ? this.name_ : this.parent_.path() + "/" + this.name_);
      }, t.prototype.name = function () {
        return this.name_;
      }, t.prototype.parent = function () {
        return this.parent_;
      }, t.prototype.updateParents_ = function () {
        null !== this.parent_ && this.parent_.updateChild_(this.name_, this);
      }, t.prototype.updateChild_ = function (t, e) {
        var n = e.isEmpty(),
            r = w(this.node_.children, t);
        n && r ? (delete this.node_.children[t], this.node_.childCount--, this.updateParents_()) : n || r || (this.node_.children[t] = e.node_, this.node_.childCount++, this.updateParents_());
      }, t;
    }();

    !function (t) {
      t[t.RUN = 0] = "RUN", t[t.SENT = 1] = "SENT", t[t.COMPLETED = 2] = "COMPLETED", t[t.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", t[t.NEEDS_ABORT = 4] = "NEEDS_ABORT";
    }(Ln || (Ln = {})), On.MAX_TRANSACTION_RETRIES_ = 25, On.prototype.transactions_init_ = function () {
      this.transactionQueueTree_ = new Wn();
    }, On.prototype.startTransaction = function (t, e, n, r) {
      this.log_("transaction on " + t);

      var i = function () {},
          o = new An(this, t);

      o.on("value", i);
      var a = {
        path: t,
        update: e,
        onComplete: n,
        status: null,
        order: Y(),
        applyLocally: r,
        retryCount: 0,
        unwatcher: function () {
          o.off("value", i);
        },
        abortReason: null,
        currentWriteId: null,
        currentInputSnapshot: null,
        currentOutputSnapshotRaw: null,
        currentOutputSnapshotResolved: null
      },
          h = this.getLatestState_(t);
      a.currentInputSnapshot = h;
      var u = a.update(h.val());

      if (void 0 === u) {
        if (a.unwatcher(), a.currentOutputSnapshotRaw = null, a.currentOutputSnapshotResolved = null, a.onComplete) {
          var l = new we(a.currentInputSnapshot, new An(this, a.path), ne);
          a.onComplete(null, !1, l);
        }
      } else {
        xt("transaction failed: Data returned ", u, a.path), a.status = Ln.RUN;
        var c = this.transactionQueueTree_.subTree(t),
            p = c.getValue() || [];
        p.push(a), c.setValue(p);
        var d = void 0;
        if ("object" == typeof u && null !== u && w(u, ".priority")) d = b(u, ".priority"), s(Ot(d), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else d = (this.serverSyncTree_.calcCompleteEventCache(t) || fe.EMPTY_NODE).getPriority().val();
        d = d;

        var f = this.generateServerValues(),
            _ = ve(u, d),
            y = Oe(_, f);

        a.currentOutputSnapshotRaw = _, a.currentOutputSnapshotResolved = y, a.currentWriteId = this.getNextWriteId_();
        var v = this.serverSyncTree_.applyUserOverwrite(t, y, a.currentWriteId, a.applyLocally);
        this.eventQueue_.raiseEventsForChangedPath(t, v), this.sendReadyTransactions_();
      }
    }, On.prototype.getLatestState_ = function (t, e) {
      return this.serverSyncTree_.calcCompleteEventCache(t, e) || fe.EMPTY_NODE;
    }, On.prototype.sendReadyTransactions_ = function (t) {
      var e = this;

      if (void 0 === t && (t = this.transactionQueueTree_), t || this.pruneCompletedTransactionsBelowNode_(t), null !== t.getValue()) {
        var n = this.buildTransactionQueue_(t);
        s(n.length > 0, "Sending zero length transaction queue"), n.every(function (t) {
          return t.status === Ln.RUN;
        }) && this.sendTransactionQueue_(t.path(), n);
      } else t.hasChildren() && t.forEachChild(function (t) {
        e.sendReadyTransactions_(t);
      });
    }, On.prototype.sendTransactionQueue_ = function (t, e) {
      for (var n = this, r = e.map(function (t) {
        return t.currentWriteId;
      }), i = this.getLatestState_(t, r), o = i, a = i.hash(), h = 0; h < e.length; h++) {
        var u = e[h];
        s(u.status === Ln.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), u.status = Ln.SENT, u.retryCount++;
        var l = mt.relativePath(t, u.path);
        o = o.updateChild(l, u.currentOutputSnapshotRaw);
      }

      var c = o.val(!0),
          p = t;
      this.server_.put(p.toString(), c, function (r) {
        n.log_("transaction put response", {
          path: p.toString(),
          status: r
        });
        var i = [];

        if ("ok" === r) {
          for (var o = [], s = 0; s < e.length; s++) {
            if (e[s].status = Ln.COMPLETED, i = i.concat(n.serverSyncTree_.ackUserWrite(e[s].currentWriteId)), e[s].onComplete) {
              var a = e[s].currentOutputSnapshotResolved,
                  h = new An(n, e[s].path),
                  u = new we(a, h, ne);
              o.push(e[s].onComplete.bind(null, null, !0, u));
            }

            e[s].unwatcher();
          }

          n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_.subTree(t)), n.sendReadyTransactions_(), n.eventQueue_.raiseEventsForChangedPath(t, i);

          for (s = 0; s < o.length; s++) yt(o[s]);
        } else {
          if ("datastale" === r) for (s = 0; s < e.length; s++) e[s].status === Ln.SENT_NEEDS_ABORT ? e[s].status = Ln.NEEDS_ABORT : e[s].status = Ln.RUN;else {
            rt("transaction at " + p.toString() + " failed: " + r);

            for (s = 0; s < e.length; s++) e[s].status = Ln.NEEDS_ABORT, e[s].abortReason = r;
          }
          n.rerunTransactions_(t);
        }
      }, a);
    }, On.prototype.rerunTransactions_ = function (t) {
      var e = this.getAncestorTransactionNode_(t),
          n = e.path(),
          r = this.buildTransactionQueue_(e);
      return this.rerunTransactionQueue_(r, n), n;
    }, On.prototype.rerunTransactionQueue_ = function (t, e) {
      if (0 !== t.length) {
        for (var n, r = [], i = [], o = t.filter(function (t) {
          return t.status === Ln.RUN;
        }).map(function (t) {
          return t.currentWriteId;
        }), a = 0; a < t.length; a++) {
          var h = t[a],
              u = mt.relativePath(e, h.path),
              l = !1,
              c = void 0;
          if (s(null !== u, "rerunTransactionsUnderNode_: relativePath should not be null."), h.status === Ln.NEEDS_ABORT) l = !0, c = h.abortReason, i = i.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0));else if (h.status === Ln.RUN) if (h.retryCount >= On.MAX_TRANSACTION_RETRIES_) l = !0, c = "maxretry", i = i.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0));else {
            var p = this.getLatestState_(h.path, o);
            h.currentInputSnapshot = p;
            var d = t[a].update(p.val());

            if (void 0 !== d) {
              xt("transaction failed: Data returned ", d, h.path);
              var f = ve(d);
              "object" == typeof d && null != d && w(d, ".priority") || (f = f.updatePriority(p.getPriority()));
              var _ = h.currentWriteId,
                  y = this.generateServerValues(),
                  v = Oe(f, y);
              h.currentOutputSnapshotRaw = f, h.currentOutputSnapshotResolved = v, h.currentWriteId = this.getNextWriteId_(), o.splice(o.indexOf(_), 1), i = (i = i.concat(this.serverSyncTree_.applyUserOverwrite(h.path, v, h.currentWriteId, h.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(_, !0));
            } else l = !0, c = "nodata", i = i.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0));
          }
          if (this.eventQueue_.raiseEventsForChangedPath(e, i), i = [], l && (t[a].status = Ln.COMPLETED, n = t[a].unwatcher, setTimeout(n, Math.floor(0)), t[a].onComplete)) if ("nodata" === c) {
            var g = new An(this, t[a].path),
                m = t[a].currentInputSnapshot,
                C = new we(m, g, ne);
            r.push(t[a].onComplete.bind(null, null, !1, C));
          } else r.push(t[a].onComplete.bind(null, new Error(c), !1, null));
        }

        this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);

        for (a = 0; a < r.length; a++) yt(r[a]);

        this.sendReadyTransactions_();
      }
    }, On.prototype.getAncestorTransactionNode_ = function (t) {
      for (var e, n = this.transactionQueueTree_; null !== (e = t.getFront()) && null === n.getValue();) n = n.subTree(e), t = t.popFront();

      return n;
    }, On.prototype.buildTransactionQueue_ = function (t) {
      var e = [];
      return this.aggregateTransactionQueuesForNode_(t, e), e.sort(function (t, e) {
        return t.order - e.order;
      }), e;
    }, On.prototype.aggregateTransactionQueuesForNode_ = function (t, e) {
      var n = this,
          r = t.getValue();
      if (null !== r) for (var i = 0; i < r.length; i++) e.push(r[i]);
      t.forEachChild(function (t) {
        n.aggregateTransactionQueuesForNode_(t, e);
      });
    }, On.prototype.pruneCompletedTransactionsBelowNode_ = function (t) {
      var e = this,
          n = t.getValue();

      if (n) {
        for (var r = 0, i = 0; i < n.length; i++) n[i].status !== Ln.COMPLETED && (n[r] = n[i], r++);

        n.length = r, t.setValue(n.length > 0 ? n : null);
      }

      t.forEachChild(function (t) {
        e.pruneCompletedTransactionsBelowNode_(t);
      });
    }, On.prototype.abortTransactions_ = function (t) {
      var e = this,
          n = this.getAncestorTransactionNode_(t).path(),
          r = this.transactionQueueTree_.subTree(t);
      return r.forEachAncestor(function (t) {
        e.abortTransactionsOnNode_(t);
      }), this.abortTransactionsOnNode_(r), r.forEachDescendant(function (t) {
        e.abortTransactionsOnNode_(t);
      }), n;
    }, On.prototype.abortTransactionsOnNode_ = function (t) {
      var e = t.getValue();

      if (null !== e) {
        for (var n = [], r = [], i = -1, o = 0; o < e.length; o++) if (e[o].status === Ln.SENT_NEEDS_ABORT) ;else if (e[o].status === Ln.SENT) s(i === o - 1, "All SENT items should be at beginning of queue."), i = o, e[o].status = Ln.SENT_NEEDS_ABORT, e[o].abortReason = "set";else if (s(e[o].status === Ln.RUN, "Unexpected transaction status in abort"), e[o].unwatcher(), r = r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId, !0)), e[o].onComplete) {
          n.push(e[o].onComplete.bind(null, new Error("set"), !1, null));
        }

        -1 === i ? t.setValue(null) : e.length = i + 1, this.eventQueue_.raiseEventsForChangedPath(t.path(), r);

        for (o = 0; o < n.length; o++) yt(n[o]);
      }
    };

    var qn,
        Qn = function () {
      function t() {
        this.repos_ = {}, this.useRestClient_ = !1;
      }

      return t.getInstance = function () {
        return qn || (qn = new t()), qn;
      }, t.prototype.interrupt = function () {
        for (var t in this.repos_) for (var e in this.repos_[t]) this.repos_[t][e].interrupt();
      }, t.prototype.resume = function () {
        for (var t in this.repos_) for (var e in this.repos_[t]) this.repos_[t][e].resume();
      }, t.prototype.databaseFromApp = function (t, e) {
        var n = e || t.options.databaseURL;
        void 0 === n && nt("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().");
        var r = Tt(n),
            i = r.repoInfo;
        return Qt("Invalid Firebase Database URL", 1, r), r.path.isEmpty() || nt("Database URL must point to the root of a Firebase Database (not including a child path)."), this.createRepo(i, t).database;
      }, t.prototype.deleteRepo = function (t) {
        var e = b(this.repos_, t.app.name);
        e && b(e, t.repoInfo_.toURLString()) === t || nt("Database " + t.app.name + "(" + t.repoInfo_ + ") has already been deleted."), t.interrupt(), delete e[t.repoInfo_.toURLString()];
      }, t.prototype.createRepo = function (t, e) {
        var n = b(this.repos_, e.name);
        n || (n = {}, this.repos_[e.name] = n);
        var r = b(n, t.toURLString());
        return r && nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), r = new On(t, this.useRestClient_, e), n[t.toURLString()] = r, r;
      }, t.prototype.forceRestClient = function (t) {
        this.useRestClient_ = t;
      }, t;
    }(),
        Un = function () {
      function t(t) {
        this.repo_ = t, t instanceof On || nt("Don't call new Database() directly - please use firebase.database()."), this.root_ = new An(t, mt.Empty), this.INTERNAL = new Vn(this);
      }

      return Object.defineProperty(t.prototype, "app", {
        get: function () {
          return this.repo_.app;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.ref = function (t) {
        return this.checkDeleted_("ref"), k("database.ref", 0, 1, arguments.length), t instanceof An ? this.refFromURL(t.toString()) : void 0 !== t ? this.root_.child(t) : this.root_;
      }, t.prototype.refFromURL = function (t) {
        var e = "database.refFromURL";
        this.checkDeleted_(e), k(e, 1, 1, arguments.length);
        var n = Tt(t);
        Qt(e, 1, n);
        var r = n.repoInfo;
        return r.host !== this.repo_.repoInfo_.host && nt(e + ": Host name does not match the current database: (found " + r.host + " but expected " + this.repo_.repoInfo_.host + ")"), this.ref(n.path.toString());
      }, t.prototype.checkDeleted_ = function (t) {
        null === this.repo_ && nt("Cannot call " + t + " on a deleted database.");
      }, t.prototype.goOffline = function () {
        k("database.goOffline", 0, 0, arguments.length), this.checkDeleted_("goOffline"), this.repo_.interrupt();
      }, t.prototype.goOnline = function () {
        k("database.goOnline", 0, 0, arguments.length), this.checkDeleted_("goOnline"), this.repo_.resume();
      }, t.ServerValue = {
        TIMESTAMP: {
          ".sv": "timestamp"
        }
      }, t;
    }(),
        Vn = function () {
      function t(t) {
        this.database = t;
      }

      return t.prototype.delete = function () {
        return t = this, e = void 0, r = function () {
          return i(this, function (t) {
            return this.database.checkDeleted_("delete"), Qn.getInstance().deleteRepo(this.database.repo_), this.database.repo_ = null, this.database.root_ = null, this.database.INTERNAL = null, this.database = null, [2];
          });
        }, new ((n = void 0) || (n = Promise))(function (i, o) {
          function s(t) {
            try {
              h(r.next(t));
            } catch (t) {
              o(t);
            }
          }

          function a(t) {
            try {
              h(r.throw(t));
            } catch (t) {
              o(t);
            }
          }

          function h(t) {
            t.done ? i(t.value) : new n(function (e) {
              e(t.value);
            }).then(s, a);
          }

          h((r = r.apply(t, e || [])).next());
        });
        var t, e, n, r;
      }, t;
    }(),
        Hn = Object.freeze({
      forceLongPolling: function () {
        bn.forceDisallow(), Cn.forceAllow();
      },
      forceWebSockets: function () {
        Cn.forceDisallow();
      },
      isWebSocketsAvailable: function () {
        return bn.isAvailable();
      },
      setSecurityDebugCallback: function (t, e) {
        t.repo.persistentConnection_.securityDebugCallback_ = e;
      },
      stats: function (t, e) {
        t.repo.stats(e);
      },
      statsIncrementCounter: function (t, e) {
        t.repo.statsIncrementCounter(e);
      },
      dataUpdateCount: function (t) {
        return t.repo.dataUpdateCount;
      },
      interceptServerData: function (t, e) {
        return t.repo.interceptServerData_(e);
      }
    }),
        Bn = Pn;

    Pn.prototype.simpleListen = function (t, e) {
      this.sendRequest("q", {
        p: t
      }, e);
    }, Pn.prototype.echo = function (t, e) {
      this.sendRequest("echo", {
        d: t
      }, e);
    };
    var jn = Tn,
        Kn = wt,
        Yn = Object.freeze({
      DataConnection: Bn,
      RealTimeConnection: jn,
      hijackHash: function (t) {
        var e = Pn.prototype.put;
        return Pn.prototype.put = function (n, r, i, o) {
          void 0 !== o && (o = t()), e.call(this, n, r, i, o);
        }, function () {
          Pn.prototype.put = e;
        };
      },
      ConnectionTarget: Kn,
      queryIdentifier: function (t) {
        return t.queryIdentifier();
      },
      listens: function (t) {
        return t.repo.persistentConnection_.listens_;
      },
      forceRestClient: function (t) {
        Qn.getInstance().forceRestClient(t);
      }
    }),
        zn = Un.ServerValue;

    function Gn(t) {
      var e = t.INTERNAL.registerService("database", function (t, e, n) {
        return Qn.getInstance().databaseFromApp(t, n);
      }, {
        Reference: An,
        Query: Ie,
        Database: Un,
        enableLogging: J,
        INTERNAL: Hn,
        ServerValue: zn,
        TEST_ACCESS: Yn
      }, null, !0);
      f() && (module.exports = e);
    }

    return Gn(e), Object.freeze({
      registerDatabase: Gn,
      Database: Un,
      Query: Ie,
      Reference: An,
      enableLogging: J,
      ServerValue: zn,
      DataSnapshot: we,
      OnDisconnect: Ut
    });
  } catch (t) {
    throw console.error(t), new Error("Cannot instantiate firebase-database - be sure to load firebase-app.js first.");
  }

  var Xn, $n, Jn, Zn;
}(this.firebase = this.firebase || {}, firebase); //# sourceMappingURL=firebase-database.js.map