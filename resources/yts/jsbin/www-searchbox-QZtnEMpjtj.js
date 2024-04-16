(function() {
    var ka = void 0,
        j = !0,
        l = null,
        r = !1,
        pa = this;

    function va(a) {
        var c = typeof a;
        if ("object" == c)
            if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return c; var b = Object.prototype.toString.call(a); if ("[object Window]" == b) return "object"; if ("[object Array]" == b || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == b || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
        else if ("function" == c && "undefined" == typeof a.call) return "object";
        return c
    }
    Math.floor(2147483648 * Math.random()).toString(36);
    var za = Date.now || function() { return +new Date };

    function Aa(a, c) {
        var b = a.split("."),
            e = pa;
        !(b[0] in e) && e.execScript && e.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) !b.length && c !== ka ? e[d] = c : e = e[d] ? e[d] : e[d] = {}
    };
    var Ba, Ea, Fa, Ga, Ha, Ja, Ka, C, La, Qa, Ra, Sa, Ta, Va, Wa, Xa, Ya, bb, cb, db, eb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, S, vb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic = /^[6-9]$/,
        jc = { lj: 0, of: 1, kj: 2, Ab: 3 },
        kc = { EMPTY: 0, di: 1, Se: 2 },
        lc = { Yh: 1, Zh: 2, yk: 3, Xh: 4, $h: 5, Jk: 6, wk: 7 },
        mc = { DONT_CARE: 1, kd: 2, bi: 3 },
        nc = { nf: 0, mj: 1, Ab: 2 },
        oc = [23, 24],
        X = {
            Mk: 0,
            tk: 114,
            te: 115,
            ue: 116,
            jh: 117,
            ve: 118,
            we: 119,
            xe: 374,
            ye: 120,
            Be: 121,
            vh: 122,
            Ce: 123,
            Ee: 124,
            xh: 125,
            Ek: 230,
            Fe: 126,
            Ge: 127,
            He: 128,
            Bh: 343,
            Ie: 129,
            sk: 231,
            fh: 130,
            gh: 131,
            uk: 237,
            zk: 132,
            rh: 134,
            Ak: 189,
            Ck: 246,
            Dk: 264,
            uh: 133,
            Fk: 184,
            Kk: 419,
            Eh: 173,
            kh: 135,
            mh: 136,
            ph: 137,
            zh: 138,
            Ch: 139,
            lh: 140,
            nh: 141,
            qh: 142,
            sh: 240,
            Ah: 143,
            Dh: 144,
            pk: 347,
            qk: 191,
            rk: 150,
            hh: 145,
            vk: 146,
            ze: 147,
            Lk: 148,
            Hk: 245,
            pe: 155,
            re: 149,
            ih: 154,
            oh: 311,
            Ae: 153,
            RENDERER: 152,
            th: 156,
            wh: 151,
            De: 158,
            yh: 294,
            Gk: 157,
            Je: 160,
            oe: 159,
            Bk: 256,
            xk: 328
        },
        pc = { se: 161, Ke: 162 };
    Ba = function(a) {
        var c = {};
        if (a)
            for (var b = 0; b < a.length; ++b) c[a[b]] = j;
        return c
    };
    Ea = function(a) { for (var c = a.T(), b = [], e = 0, d; d = c[e++];) b.push(d.api || { a: d.Ea, b: d.K, c: d.ua, d: d.getType, e: d.yb, f: d.wj, g: d.vj, i: d.Cc, j: d.D, k: d.Mb, l: d.uj }); return a.api || { a: a.N, b: function() { return b } } };
    Fa = function(a) { return a ? (a = a.toLowerCase(), "zh-tw" == a || "zh-cn" == a || "ja" == a || "ko" == a) : r };
    Ga = function() { return (new Date).getTime() };
    Ha = function(a, c, b) {
        c in a || (a[c] = [162]);
        a[c].push(b)
    };
    Ja = function(a) { return "string" == typeof a };
    Ka = function(a) { return "number" == typeof a };
    var qc = /<\/?(?:b|em)>/gi,
        rc = { zi: 8, Ue: 9, Te: 13, Oc: 27, Ik: 32, wi: 37, yi: 38, xi: 39, vi: 40, DELETE: 46 };
    var Y, vc = C,
        wc = 0,
        xc = {},
        zc = {},
        Ac = {},
        Bc = {},
        Cc = {};
    Y = {
        Hh: function() { return wc++ },
        xf: function(a, c, b) {
            zc[a] = b;
            Cc[a] = [c]
        },
        register: function(a, c, b) {
            var e = Bc[a];
            e ? e != vc && (Bc[a] = vc) : Bc[a] = b;
            (e = Cc[a]) ? e.push(c): Cc[a] = [c];
            Ac[c] = b
        },
        Gh: function() { return Cc },
        getInstance: function(a, c) { var b = xc[a]; return b ? b : (b = zc[a]) ? xc[a] = b() : !c ? (b = Bc[a], !b || b == vc ? l : b()) : (b = Ac[c]) ? b() : l }
    };

    function Dc(a, c, b) {
        function e() { return a }

        function d() { return s }

        function f() { return n }

        function g() { return c }

        function i() { return b || "" }

        function h(a, b) { q(a, b) }

        function k(a, b) { q(a, b, j) }

        function p() { m || (B = t = j) }

        function q(a, b, c) { m || (B = j, y[a] = b, c && (w[a] = b)) }
        var v = Sa(),
            s, n, y = {},
            w = {},
            D, A, m = r,
            B = r,
            t = r,
            G = r,
            O = {
                getId: function() { return v },
                Xe: function() { var a = parseInt(v, 36); return isNaN(a) ? -1 : a },
                N: e,
                gf: d,
                la: f,
                Ga: g,
                D: function() { return y },
                jf: function() { return D },
                Cd: i,
                getTimestamp: function() { return A },
                fe: function() {
                    return {
                        N: e,
                        gf: d,
                        la: f,
                        Ga: g,
                        Cd: i,
                        setParameter: h,
                        Pc: k,
                        F: p
                    }
                },
                setParameter: h,
                Pc: k,
                F: p,
                Ii: function() { return t },
                Hi: function() { B = G = j },
                Rh: function(d, e, f) { return !B && a == d && c.equals(e) && b == f },
                Ye: function() { return G },
                Gi: function() { m || (A = Ga(), "cp" in w || k("cp", c.getPosition()), q("gs_id", v), D = Qa(w) + ":" + a, B = m = j) }
            };
        s = a.toLowerCase();
        n = Ra(s);
        return O
    };

    function Ec(a, c, b, e, d, f, g, i) {
        function h() { return c }

        function k() { return b }

        function p() { return !!b && !!b[0] }
        var q = j,
            v, s = { ja: function() { return a }, N: h, Qb: function() { return p() ? b[0] : l }, T: k, ea: p, D: function() { return e }, Ub: function() { return d }, ib: function() { return f }, Ed: function() { return g }, hf: function() { return i }, We: function() { g = j }, getType: function() { return q }, ge: function() { v || (v = { N: h, T: k }); return v } };
        b ? b.length && 33 == b[0].getType() && (f = q = r) : b = [];
        e || (e = Fc);
        return s
    };

    function Gc(a, c, b, e, d, f) {
        function g(a) {
            if (d)
                for (var b = 0, c; c = a[b++];)
                    if (-1 != La(c, d)) return j;
            return r
        }
        var i = r,
            h = { Ea: function() { return a }, K: function() { return c }, ua: function() { return b }, getType: function() { return e }, Mb: function() { return f.getString("za") }, uj: function() { return f.getString("zb") }, yb: function() { return d || [] }, wj: function(a) { return !!d && g([a]) }, vj: g, D: function() { return f }, Cc: function() { return i } };
        switch (e) {
            case 0:
            case 32:
            case 38:
            case 39:
            case 400:
            case 407:
            case 35:
            case 33:
            case 41:
            case 34:
            case 44:
            case 45:
            case 40:
            case 46:
            case 56:
            case 30:
                i =
                    j
        }
        f || (f = Fc);
        return h
    };
    var Hc = /\s/g,
        Ic = /\u3000/g,
        Jc = /^\s/,
        Kc = /\s+/,
        Lc = /\s+/g,
        Mc = /^\s+|\s+$/g,
        Nc = /^\s+$/,
        Oc = /<[^>]*>/g,
        Pc = /&nbsp;/g,
        Qc = /&#x3000;/g,
        Rc = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g],
        Sc = document.getElementsByTagName("head")[0],
        Tc = 0;
    Va = function(a, c) {
        function b() { return c }
        c === ka && (c = a);
        return { getPosition: b, Re: function() { return a }, yj: b, F: function() { return a < c }, equals: function(b) { return b && a == b.Re() && c == b.yj() } }
    };
    Ta = function(a, c, b, e) {
        if (c == l || "" === c) {
            if (!e) return;
            c = ""
        }
        b.push(a + "=" + encodeURIComponent(String(c)))
    };
    Qa = function(a) {
        var c = [],
            b;
        for (b in a) Ta(b, a[b], c);
        return c.join("&")
    };
    Wa = function(a) {
        var c = {},
            b = Math.max(a.indexOf("?"), a.indexOf("#"));
        a = a.substr(b + 1);
        if (0 <= b && a) {
            b = a.split("&");
            a = 0;
            for (var e; a < b.length; ++a)
                if (e = b[a]) e = e.split("="), c[e[0]] = e[1] || ""
        }
        return c
    };
    Xa = function(a) { return !!a && !Nc.test(a) };
    Ya = function(a) { for (var c = Rc.length, b = 0; b < c; b += 2) a = a.replace(Rc[b], Rc[b + 1].source); return a };
    bb = function(a) {
        for (var c = Rc.length, b = 0; b < c; b += 2) a = a.replace(Rc[b + 1], Rc[b].source);
        a = a.replace(Pc, " ");
        return a.replace(Qc, "\u3000")
    };
    cb = function(a) { return a.replace(qc, "") };
    db = function(a) { return a.replace(Oc, "") };
    eb = function(a) { return a && (-1 < a.indexOf(" ") || Kc.test(a)) ? (a = a.replace(Ic, "&#x3000;"), a.replace(Hc, "&nbsp;")) : a };
    Ra = function(a, c) { return a && (-1 < a.indexOf(" ") || Kc.test(a)) ? (a = a.replace(Lc, " "), a.replace(c ? Mc : Jc, "")) : a };
    kb = function(a, c, b) { b && (a = a.toLowerCase(), c = c.toLowerCase()); return c.length <= a.length && a.substring(0, c.length) == c };
    lb = function(a, c) { return !a && !c ? j : !!a && !!c && a.toLowerCase() == c.toLowerCase() };
    mb = function(a) { window.clearTimeout(a) };
    C = function() {};
    nb = function() { return Sc };
    Sa = function() { return (Tc++).toString(36) };
    ob = function(a) { return ic.test(a) };
    pb = function(a, c) { return Gc(a.Ea(), a.K(), c, a.getType(), a.yb(), a.D()) };
    La = function(a, c) {
        if (c.indexOf) return c.indexOf(a);
        for (var b = 0, e = c.length; b < e; ++b)
            if (c[b] === a) return b;
        return -1
    };
    qb = function(a, c) { return a.M() - c.M() };
    rb = function(a, c) { return c.M() - a.M() };
    sb = function(a) {
        var c = {},
            b;
        for (b in a) c[b] = a[b];
        return c
    };

    function Uc(a) { return { contains: function(c) { return c in a }, F: function(c) { return !!a[c] }, ka: function(c) { return a[c] || 0 }, getString: function(c) { return a[c] || "" }, R: function(c) { return a[c] || l } } }
    var Fc = Uc({});

    function Vc(a, c) {
        var b = document.createElement(a);
        c && (b.className = c);
        return b
    }

    function Wc(a) { return Vc("div", a) }

    function Xc(a, c) {
        var b = a.getElementsByTagName("input");
        if (b)
            for (var e = 0, d; d = b[e++];)
                if (d.name == c && "submit" != d.type.toLowerCase()) return d;
        return l
    }

    function Yc(a) { a && (a.preventDefault && a.preventDefault(), a.returnValue = r); return r }

    function Zc(a) { return a ? a.ownerDocument || a.document : window.document }

    function $c(a) { return a ? (a = Zc(a), a.defaultView || a.parentWindow) : window }
    var ad = document.documentElement.style.opacity != ka,
        bd = { rtl: "right", ltr: "left" };
    yb = function(a, c) {
        if (a.setSelectionRange) a.setSelectionRange(c, c);
        else if (a.createTextRange) try {
            var b = a.createTextRange();
            b.collapse(j);
            b.moveStart("character", c);
            b.select()
        } catch (e) {}
    };
    zb = function(a) {
        try {
            var c, b;
            if ("selectionStart" in a) c = a.selectionStart, b = a.selectionEnd;
            else {
                var e = a.createTextRange(),
                    d = Zc(a).selection.createRange();
                e.inRange(d) && (e.setEndPoint("EndToStart", d), c = e.text.length, e.setEndPoint("EndToEnd", d), b = e.text.length)
            }
            if (c !== ka) return Va(c, b)
        } catch (f) {}
        return l
    };
    Ab = function(a, c) {
        for (var b = 0, e = 0; a && !(c && a == c);) {
            b += a.offsetTop;
            e += a.offsetLeft;
            try { a = a.offsetParent } catch (d) { a = l }
        }
        return { Zi: b, zb: e }
    };
    Bb = function(a) { try { return Zc(a).activeElement == a } catch (c) {} return r };
    Cb = function(a) { return 38 == a || 40 == a };
    S = Vc;
    Db = function() {
        var a = Vc("table");
        a.cellPadding = a.cellSpacing = 0;
        a.style.width = "100%";
        return a
    };
    Eb = Wc;
    Fb = function(a, c) {
        var b = Wc(a),
            e = b.style;
        e.background = "transparent";
        e.color = "#000";
        e.padding = 0;
        e.position = "absolute";
        c && (e.zIndex = c);
        e.whiteSpace = "pre";
        return b
    };
    Gb = function(a, c) { a.innerHTML != c && (c && (tb ? c = eb(c) : ub && (c = ['<pre style="font:inherit;margin:0">', c, "</pre>"].join(""))), a.innerHTML = c) };
    Hb = function(a, c, b) {
        var e = a.style;
        "INPUT" != a.nodeName && (b += 1);
        e.left = e.right = "";
        e[c] = b + "px"
    };
    Ib = function(a) { return "rtl" == a ? "right" : "left" };
    Jb = function(a, c) { a.dir != c && (a.dir = c, a.style.textAlign = bd[c]) };
    Kb = function(a, c, b) {
        if (Xc(a, c)) return l;
        var e = Vc("input");
        e.type = "hidden";
        e.name = c;
        b && (e.value = b);
        return a.appendChild(e)
    };
    Lb = function(a) {
        var c = document.createEvent("KeyboardEvent");
        c.initKeyEvent("keypress", j, j, l, r, r, j, r, 27, 0);
        a.dispatchEvent(c)
    };
    Mb = function(a) { if (a = a || window.event) a.stopPropagation && a.stopPropagation(), a.cancelBubble = a.cancel = j; return Yc(a) };
    Nb = function(a, c) { c.parentNode.insertBefore(a, c.nextSibling) };
    Pb = function(a) {
        a = a.insertCell(-1);
        var c = S("a");
        c.href = "#ifl";
        c.className = "gssb_j gss_ifl";
        a.appendChild(c);
        return c
    };
    Qb = function(a, c) { var b = $c(a); return (b = b.getComputedStyle ? b.getComputedStyle(a, "") : a.currentStyle) ? b[c] : l };
    Rb = function(a) {
        var c = a || window;
        a = c.document;
        var b = c.innerWidth,
            c = c.innerHeight;
        if (!b) {
            var e = a.documentElement;
            e && (b = e.clientWidth, c = e.clientHeight);
            b || (b = a.body.clientWidth, c = a.body.clientHeight)
        }
        return { ne: b, me: c }
    };
    Sb = function(a) { return (a || window).document.documentElement.clientWidth };
    Tb = function(a) {
        a = a.style;
        a.border = "none";
        a.padding = vb || xb ? "0 1px" : "0";
        a.margin = "0";
        a.height = "auto";
        a.width = "100%"
    };
    Ub = function(a) { return (ad ? "opacity" : "filter") + ":" + (ad ? a + "" : [tb ? "progid:DXImageTransform.Microsoft.Alpha(" : "alpha(", "opacity=", Math.floor(100 * a), ")"].join("")) + ";" };
    Vb = function(a, c) {
        a.innerHTML = "";
        a.appendChild(document.createTextNode(c))
    };
    Wb = function(a) {
        var c = {};
        if (a)
            for (var b = 0, e; e = a[b++];) c[e.ra()] = e;
        return c
    };
    Xb = $c;
    Y.xf(191, 192, function() {
        function a(a) {
            Ja(a) && (a = e(a));
            var b = "";
            if (a) {
                for (var c = a.length, d = 0, f = 0, i = 0; c--;) {
                    f <<= 8;
                    f |= a[i++];
                    for (d += 8; 6 <= d;) var g = f >> d - 6 & 63,
                        b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(g),
                        d = d - 6
                }
                d && (g = f << 8 >> d + 8 - 6 & 63, b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(g))
            }
            return b
        }

        function c(a) {
            var b = [];
            if (a)
                for (var c = 0, d = 0, e = 0; e < a.length; ++e) {
                    var f = a.charCodeAt(e);
                    if (32 > f || 127 < f || !h[f - 32]) return [];
                    c <<= 6;
                    c |= h[f - 32] - 1;
                    d += 6;
                    8 <= d &&
                        (b.push(c >> d - 8 & 255), d -= 8)
                }
            return b
        }

        function b(a, b) {
            var c = {};
            c.O = Array(4);
            c.buffer = Array(4);
            c.tj = Array(4);
            c.padding = Array(64);
            c.padding[0] = 128;
            for (var h = 1; 64 > h; ++h) c.padding[h] = 0;
            d(c);
            var h = Array(64),
                y;
            64 < b.length ? (d(c), g(c, b), y = i(c)) : y = b;
            for (var w = 0; w < y.length; ++w) h[w] = y[w] ^ 92;
            for (w = y.length; 64 > w; ++w) h[w] = 92;
            d(c);
            for (w = 0; 64 > w; ++w) c.buffer[w] = h[w] ^ 106;
            f(c, c.buffer);
            c.total = 64;
            g(c, e(a));
            y = i(c);
            d(c);
            f(c, h);
            c.total = 64;
            g(c, y);
            return i(c)
        }

        function e(a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            return b
        }

        function d(a) {
            a.O[0] = 1732584193;
            a.O[1] = 4023233417;
            a.O[2] = 2562383102;
            a.O[3] = 271733878;
            a.Fb = a.total = 0
        }

        function f(a, b) {
            for (var c = a.tj, d = 0; 64 > d; d += 4) c[d / 4] = b[d] | b[d + 1] << 8 | b[d + 2] << 16 | b[d + 3] << 24;
            for (var d = a.O[0], e = a.O[1], f = a.O[2], i = a.O[3], g, m, h, t = 0; 64 > t; ++t) 16 > t ? (g = i ^ e & (f ^ i), m = t) : 32 > t ? (g = f ^ i & (e ^ f), m = 5 * t + 1 & 15) : 48 > t ? (g = e ^ f ^ i, m = 3 * t + 5 & 15) : (g = f ^ (e | ~i), m = 7 * t & 15), h = i, i = f, f = e, e = e + (((d + g + p[t] + c[m] & 4294967295) <<
                k[t] | (d + g + p[t] + c[m] & 4294967295) >>> 32 - k[t]) & 4294967295) & 4294967295, d = h;
            a.O[0] = a.O[0] + d & 4294967295;
            a.O[1] = a.O[1] + e & 4294967295;
            a.O[2] = a.O[2] + f & 4294967295;
            a.O[3] = a.O[3] + i & 4294967295
        }

        function g(a, b, c) {
            c || (c = b.length);
            a.total += c;
            for (var d = 0; d < c; ++d) a.buffer[a.Fb++] = b[d], 64 == a.Fb && (f(a, a.buffer), a.Fb = 0)
        }

        function i(a) {
            var b = Array(16),
                c = 8 * a.total,
                d = a.Fb;
            g(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
            for (var e = 56; 64 > e; ++e) a.buffer[e] = c & 255, c >>>= 8;
            f(a, a.buffer);
            for (e = d = 0; 4 > e; ++e)
                for (c = 0; 32 > c; c += 8) b[d++] = a.O[e] >> c & 255;
            return b
        }
        var h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0],
            k = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21],
            p = [3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955,
                4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690,
                4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745
            ];
        return { getType: function() { return 191 }, B: function() { return 192 }, A: function() { return { Sc: a, ef: c, ff: b } } }
    });
    Y.xf(150, 95, function() {
        function a(a, b) {
            b = Ya(cb(b));
            a = Ya(Ra(a, j));
            if (kb(b, a)) return [a, "<b>", b.substr(a.length), "</b>"].join("");
            for (var e = [], d = [], f = b.length - 1, g = 0, i = -1, h; h = b.charAt(g); ++g) " " == h || "\t" == h ? e.length && (d.push({ rf: e.join(""), Ra: i, Qa: g + 1 }), e = [], i = -1) : (e.push(h), -1 == i ? i = g : g == f && d.push({ rf: e.join(""), Ra: i, Qa: g + 1 }));
            e = a.split(/\s+/);
            g = {};
            for (f = 0; i = e[f++];) g[i] = 1;
            h = -1;
            for (var e = [], k = d.length - 1, f = 0; i = d[f]; ++f) g[i.rf] ? (i = -1 == h, f == k ? e.push({ Ra: i ? f : h, Qa: f }) : i && (h = f)) : -1 < h && (e.push({ Ra: h, Qa: f - 1 }),
                h = -1);
            if (!e.length) return ["<b>", b, "</b>"].join("");
            f = [];
            for (g = i = 0; h = e[g]; ++g)(k = d[h.Ra].Ra) && f.push("<b>", b.substring(i, k - 1), "</b> "), i = d[h.Qa].Qa, f.push(b.substring(k, i));
            i < b.length && f.push("<b>", b.substring(i), "</b> ");
            return f.join("")
        }
        return { getType: function() { return 150 }, B: function() { return 95 }, A: function() { return { bold: a } } }
    });
    Y.register(146, 12, function() {
        function a(a) {
            a = c(a, q, b);
            a = c(a, v, e);
            return c(a, n, d)
        }

        function c(a, b, c) {
            for (var d, e, f = 0;
                (d = b.exec(a)) != l;) e || (e = []), f < d.index && e.push(a.substring(f, d.index)), e.push(c(d[0])), f = b.lastIndex;
            if (!e) return a;
            f < a.length && e.push(a.substring(f));
            return e.join("")
        }

        function b(a) { return String.fromCharCode(a.charCodeAt(0) - 65248) }

        function e(a) { var b = a.charCodeAt(0); return 1 == a.length ? g.charAt(b - 65377) : 65438 == a.charCodeAt(1) ? i.charAt(b - 65395) : h.charAt(b - 65418) }

        function d(a) {
            var b = a.charCodeAt(0);
            return 12443 == a.charCodeAt(1) ? k.charAt(b - 12454) : p.charAt(b - 12495)
        }

        function f(a) { return eval('"\\u30' + a.split(",").join("\\u30") + '"') }
        var g = f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"),
            i = f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC"),
            h = f("D1,D4,D7,DA,DD"),
            k = f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"),
            p = f("D1__,D4__,D7__,DA__,DD"),
            q = /[\uFF01-\uFF5E]/g,
            v = RegExp("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])", "g"),
            s = "([" + f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB") + "]\u309b)|([" + f("CF,D2,D5,D8,DB") + "]\u309c)",
            n = RegExp(s, "g");
        return { getType: function() { return 146 }, B: function() { return 12 }, A: function() { return { F: a } } }
    });
    Y.register(147, 10, function() {
        function a(a) {
            var c = 0;
            a && (g || b(), e(), a in i ? c = i[a] : (Gb(g, Ya(a)), i[a] = c = g.offsetWidth, Gb(g, "")));
            return c
        }

        function c() {
            g || b();
            e();
            h || (Gb(g, "|"), h = g.offsetHeight);
            return h
        }

        function b() {
            g = Fb(d.Sb);
            g.style.visibility = "hidden";
            f.appendChild(g)
        }

        function e() {
            var a = Ga();
            if (!p || p + 3E3 < a)
                if (p = a, a = Qb(g, "fontSize"), !k || a != k) i = {}, h = l, k = a
        }
        var d, f, g, i, h, k, p;
        return {
            G: function(a) { f = a.he() || document.body },
            H: function(a) { d = a },
            getType: function() { return 147 },
            B: function() { return 10 },
            A: function() {
                return {
                    getWidth: a,
                    getHeight: c
                }
            }
        }
    });
    Y.register(149, 6, function() {
        function a(a, b, c, e) {
            var f = a.getId(),
                g = a.N();
            y.Qd || d();
            b = [p, q, v, "?", s ? s + "&" : "", b ? b + "&" : ""].join("");
            var h = Ta;
            a = [];
            h("q", g, a, j);
            y.Rd || h("callback", "google.sbox.p" + k, a);
            if (n) {
                for (var g = [], A = 4 + Math.floor(32 * Math.random()), E = 0, K; E < A; ++E) K = 0.3 > Math.random() ? 48 + Math.floor(10 * Math.random()) : (0.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random()), g.push(String.fromCharCode(K));
                h("gs_gbg", g.join(""), a)
            }
            h = S("script");
            h.src = b + a.join("&");
            h.charset = "utf-8";
            w[f] = h;
            D = y.Qd ? e : c;
            i.appendChild(h);
            return j
        }

        function c() { return 0 }

        function b() { return 0 }

        function e(a) {
            var b = w[a];
            b && (i.removeChild(b), delete w[a])
        }

        function d() {
            for (var a in w) i.removeChild(w[a]);
            w = {};
            D = l
        }

        function f(a) { D && D(a, r) }

        function g(a) {
            a || (a = C);
            var b = window.google;
            y.Rd ? b.ac.h = a : b.sbox["p" + k] = a
        }
        var i = nb(),
            h, k, p, q, v, s, n, y, w = {},
            D, A = {
                C: function(a) {
                    h = a.get(127, A);
                    k = a.Ba().getId()
                },
                activate: function(a) {
                    y = a;
                    0 == a.ec && (a = h.aj(), p = a.protocol, q = a.host, v = a.fc, s = a.bj, n = "https:" == document.location.protocol, g(f), (new Image).src = p + q + "/generate_204")
                },
                getType: function() { return 149 },
                B: function() { return 6 },
                A: function() { return { Pi: a, Oi: e, Ta: C, kf: c, $e: b } },
                L: function() {
                    g(l);
                    d()
                }
            };
        return A
    });
    Y.register(145, 1, function() {
        function a(a) {
            if (!i) return j;
            for (var b = r, c = r, f = 0, g; f < a.length; ++f)
                if (g = a.charAt(f), !e.test(g) && (d.test(g) ? c = j : b = j, c && b)) return j;
            return r
        }

        function c(a, b, c) {
            if (!i) return j;
            var d = f.test(c),
                h = g.test(b);
            return "ltr" == a ? d || h || e.test(c) || e.test(b) : !d || !h
        }

        function b(a) {
            var b = h;
            i && (d.test(a) ? b = "ltr" : e.test(a) || (b = "rtl"));
            return b
        }
        var e = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
            d = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
            f = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
            g = RegExp("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
            i = d.test("x"),
            h;
        return {
            G: function(a) { h = a.Ca() },
            getType: function() { return 145 },
            B: function() { return 1 },
            A: function() {
                return {
                    U: a,
                    Wh: c,
                    qb: b
                }
            }
        }
    });
    Y.register(117, 2, function() {
        function a(a, b, c, d, e) {
            var f = k(a);
            f || (f = {}, s.push({ element: a, ej: f }));
            var g = f[b];
            if (!g) {
                var g = f[b] = [],
                    i = a.cj ? window : Xb(a),
                    h = g,
                    f = function(a, c) {
                        if (h.length) {
                            var d;
                            if (!(d = a)) {
                                d = {};
                                var e = i.event;
                                e && (e.keyCode && (d.keyCode = e.keyCode), d.fj = j)
                            }
                            d.Ka = c || b;
                            for (var e = d, f, g, w = 0, k; k = h[w++];) k.Tc ? g = j : f || (k.gj ? p(k, e) : f = k.va(e));
                            if (g)
                                for (w = 0; k = h[w];) k.Tc ? h.splice(w, 1) : ++w;
                            if (d.xb) return delete d.xb, d.fj && (d = i.event || d), Mb(d), d.returnValue = r
                        }
                    };
                Ja(b) ? a.addEventListener ? a.addEventListener(b,
                    f, r) : a["on" + b] = f : a[b] = f
            }
            g.push({ gj: !!e, Tc: r, lf: d || 0, va: c });
            g.sort(q);
            c.dj = b
        }

        function c(a, b) {
            var c = k(a);
            if (c && (c = c[b.dj]))
                for (var d = 0, e; e = c[d++];)
                    if (e.va == b) { e.Tc = j; break }
        }

        function b(b, c, d, e) { a(n, b, c, d, e) }

        function e(a) { c(n, a) }

        function d(a, b) {
            var c = b || {},
                d = n[a];
            d && d(c, c.Ka)
        }

        function f(a, b, c) { a.addEventListener ? a.addEventListener(b, c, r) : a.attachEvent("on" + b, c) }

        function g(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, r) : a.detachEvent("on" + b, c) }

        function i(a) {
            v ? (y || (y = [], f(window, "message", h)),
                y.push(a), a = window.location.href, window.postMessage("sbox.df", /HTTPS?:\/\//i.test(a) ? a : "*")) : window.setTimeout(a, 0)
        }

        function h(a) { y && (a && (a.source == window && "sbox.df" == a.data) && y.length) && (y.shift()(), y && y.length && window.postMessage("sbox.df", window.location.href)) }

        function k(a) {
            for (var b = 0, c; b < s.length; ++b)
                if (c = s[b], c.element == a) return c.ej;
            return l
        }

        function p(a, b) { i(function() { a.va(b) }) }

        function q(a, b) { return b.lf - a.lf }
        var v = window.postMessage && !(xb || $b || vb),
            s = [],
            n = { cj: 1 },
            y;
        return {
            getType: function() { return 117 },
            B: function() { return 2 },
            A: function() { return { S: a, Mc: c, oa: b, R: e, P: d, mb: f, F: g, defer: i } },
            L: function() { y = l }
        }
    });
    Y.register(118, 3, function() {
        function a() {
            var a = {};
            ca.P(13, a);
            !a.cancel && oa.jd && ca.defer(Z.hb);
            sa.mc()
        }

        function c() {
            ca.P(12);
            sa.nc()
        }

        function b() { wa("rtl") }

        function e() { wa("ltr") }

        function d() { Z.Pg() }

        function f(a) { Z.ea() ? Z.Og() : Z.Sa(a) }

        function g() {
            if (0 == oa.eb) return r;
            if (4 == oa.eb) return sa.tc(), r;
            var a = xa();
            if (a) switch (oa.eb) {
                case 1:
                    return ma(a, j);
                case 3:
                    return Z.Fa(a)
            }
            return r
        }

        function i() { oa.Hf ? R(5) : (Z.isVisible() ? Z.hb() : y(), G()) }

        function h(a) { ba && a.Re() == ba.length && (qa && qa.clear(), oa.Gf && R(2), sa.lc(ba)) }

        function k(a) { ha && 0 == a.getPosition() && ha.Oe() }

        function p(a, b, c, d) {
            oa.Ff && !a && Z.fb(j);
            oa.Ef && (!Z.isVisible() && "mousedown" == c) && Z.Sa(b);
            var e;
            Ua && Ua.Rh(a, b, c) ? e = Ua : Ua = e = Dc(a, b, c);
            var f = b = r;
            if (a != ba || "onremovechip" == c) kb(c, "key") ? ia.add(aa.Yh) : "paste" == c && ia.add(aa.Zh), b = j, ba = ua = a || "", fa(), ca.P(1, { Ka: c, ta: Ca }), sa.lb(a), f = Ga(), Na || (Na = f), $a = f, Xa(a) && (d = j), f = j;
            a = la.DONT_CARE;
            var x = e.fe(),
                g = Oa.da();
            if (da)
                for (var i = 0, h; h = da[i++];) h = h.xa(x, g), h > a && (a = h);
            switch (a) {
                case la.kd:
                    d = j;
                    break;
                case la.bi:
                    d = r
            }
            d ? (b &&
                Z.Qg(), Da && e.setParameter("gs_is", 1), sa.oc(Da), ea.ce(e), Ua = l) : f && (Z.clear(), ea.hc());
            ca.P(2, { Ka: c })
        }

        function q(a) {
            (Da = a) && ia.add(aa.Xh)
        }

        function v(a) { Pa != a && ((Pa = a) ? sa.kc() : sa.jc()) }

        function s(a) { na(a) }

        function n() { F.focus() }

        function y() { F.blur() }

        function w() { return F.Hb() }

        function D(a, b) {
            kb(a, ba, j) && (a = ba + a.substr(ba.length));
            var c = Va(a.length);
            p(a, c, "", b);
            na(a, j)
        }

        function A(a) {
            D(a, j);
            gb = Ga();
            ia.add(aa.$h)
        }

        function m() { p(ba, K(), "onremovechip") }

        function B(a) {
            ba = ua = a || "";
            fa();
            F.refresh();
            ca.P(4, {
                ta: Ca,
                input: a
            })
        }

        function t() { F.select() }

        function G() {
            ba != ua && (ba = ua = ua || "", fa());
            ca.P(5, { input: ua, Th: Z.T(), ta: Ca });
            F.refresh();
            sa.qc(ua)
        }

        function O() { ua = ba }

        function J() { return F.Ec() }

        function M() { return ua }

        function z() { return ba }

        function E() { return Ca }

        function K() { return F.Ga() }

        function P() { return F.Dc() }

        function Q() { return F.getHeight() }

        function H() { return F.getWidth() }

        function W() { return F.ie() }

        function I() { return Na }

        function U() { return $a }

        function $() { return gb }

        function u() { return 0 != hb }

        function T() {
            if (ib) {
                if (oa.Ob) return j;
                for (var a = 0, b; b = jb[a++];)
                    if (b.isEnabled()) return j
            }
            return r
        }

        function ja(a) { if (a == ba) return j; var b = ba.length; return a.substr(0, b) == ba ? ta.Wh(Ca, ba, a.substr(b)) : r }

        function L() { F.zc() }

        function R(a) { ya.search(ba, a) }

        function ga(a) {
            ba && (ba = ua = "", F.clear(), ca.P(1), Z.clear(), sa.lb(ba));
            a && sa.ic()
        }

        function N() { gb = $a = Na = 0 }

        function V(a) { F.le(a) }

        function x() {
            var a = xa();
            a && ma(a)
        }

        function wa(a) {
            var b = K().getPosition();
            Ca == a ? Z.ea() && b == ba.length && (Z.wa() ? oa.ld && (a = Z.fa(), ya.search(a.K(), 6)) : oa.md && g()) : ha && 0 == b &&
                ha.Oe()
        }

        function xa() { if (Z.ea()) { var a = Z.wa() ? Z.fa() : Z.Qb(); if (a.Cc()) return a } return l }

        function ma(a, b) { var c = a.K(); return !lb(ua, c) ? (O(), b ? D(c, j) : B(c), j) : r }

        function na(a, b) {
            ba = a || "";
            fa();
            F.refresh();
            b || (ca.P(4, { ta: Ca, input: ba }), sa.pc(ba))
        }

        function fa() {
            var a = ta.qb(ba);
            a != Ca && (F.Bc(a), Ca = a)
        }
        var la = mc,
            aa = lc,
            F, ha, ta, ca, ea, ia, ya, da, Oa, Z, qa, ib, jb, sa, ua, ba, Ca, hb, Na, $a, gb, Da, Pa, Ua, oa, ra = {
                C: function(a) {
                    F = a.get(119, ra);
                    ha = a.get(130, ra);
                    ta = a.get(145, ra);
                    ca = a.get(117, ra);
                    ea = a.get(123, ra);
                    ia = a.get(374, ra);
                    ya =
                        a.get(121, ra);
                    da = a.Q(156, ra);
                    Oa = a.get(126, ra);
                    Z = a.get(128, ra);
                    qa = a.get(139, ra);
                    ib = a.get(173, ra);
                    jb = a.Q(160, ra);
                    sa = a.ia();
                    hb = a.Ba().Gb()
                },
                H: function(a) {
                    oa = a;
                    da.sort(qb);
                    ba = ua = F.Rg() || ""
                },
                activate: function(a) {
                    oa = a;
                    Pa = Da = r;
                    fa()
                },
                getType: function() { return 118 },
                B: function() { return 3 },
                A: function() {
                    return {
                        je: a,
                        Wg: c,
                        Yg: b,
                        Zg: e,
                        $g: d,
                        Ug: f,
                        Fa: g,
                        Vg: i,
                        Tg: h,
                        Sg: k,
                        Xg: p,
                        dh: q,
                        ke: v,
                        nb: s,
                        Ha: n,
                        pb: y,
                        Qh: w,
                        cd: D,
                        F: A,
                        Lh: m,
                        Ib: B,
                        $c: t,
                        ee: G,
                        Sh: O,
                        Ec: J,
                        W: M,
                        ca: z,
                        qb: E,
                        Ga: K,
                        Dc: P,
                        getHeight: Q,
                        getWidth: H,
                        ie: W,
                        Ih: I,
                        Jh: U,
                        Kh: $,
                        bh: u,
                        Gc: T,
                        R: ja,
                        zc: L,
                        search: R,
                        clear: ga,
                        na: N,
                        le: V,
                        Zc: x
                    }
                }
            };
        return ra
    });
    Y.register(374, 375, function() {
        function a(a) {
            d[a] = j;
            f = a
        }

        function c() {
            var a = [],
                b;
            for (b in d) a.push(parseInt(b, 10));
            return a
        }

        function b() { return f }

        function e() {
            d = {};
            f = l
        }
        var d, f;
        return { activate: function() { e() }, getType: function() { return 374 }, B: function() { return 375 }, A: function() { return { add: a, Xi: c, eh: b, reset: e } } }
    });
    Y.register(120, 9, function() {
        function a(a) {
            var b = p.W(),
                c;
            c = [];
            c[0] = e(y.Da);
            c[1] = a == ka ? "" : a + "";
            c[26] = q.Xi().join("j");
            a = "";
            v.Nc() ? a = "o" : s.wa() && (a = s.Ne() + "");
            c[2] = a;
            a = "";
            var g = s.T();
            if (g) {
                for (var m, M = 0, z = 0, E; E = g[z++];) {
                    var K = E;
                    E = K.getType() + "";
                    K = K.yb();
                    K.length && (E += "i" + K.join("i"));
                    E != m && (1 < M && (a += "l" + M), a += (m ? "j" : "") + E, M = 0, m = E);
                    ++M
                }
                1 < M && (a += "l" + M)
            }
            c[3] = a;
            c[4] = d(p.Ih());
            c[5] = d(p.Jh());
            c[6] = w;
            c[7] = Ga() - D;
            c[18] = d(p.Kh());
            c[8] = k.ni();
            if (m = k.hi()) c[25] = m.qi ? ["1", y.eg ? "a" : "", y.vd ? "c" : ""].join("") : "", c[10] =
                m.pi, c[21] = m.gi;
            c[11] = k.Lc();
            c[12] = k.ki();
            if (m = k.ji()) c[9] = m.si, c[22] = m.ri, c[17] = m.ti;
            c[13] = k.mi();
            c[14] = k.li();
            c[15] = k.oi();
            c[16] = k.ii();
            c[19] = e(y.Yb);
            m = (m = v.da()) ? m.D().getString("e") ? "1" : "" : "";
            c[20] = m;
            for (m = 0; a = n[m++];) g = a.ua(), i[g] && (c[g] = c[g] == ka ? e(a.getValue()) : "");
            c = c.join(".").replace(f, "");
            h && A ? (m = b + c, a = h.ef(A), m = h.ff(m, a), m = m.slice(0, 8), m = h.Sc(m)) : m = "";
            return { oq: b, gs_l: [c, m].join(".") }
        }

        function c() {
            D = Ga();
            ++w;
            p.na();
            q.reset();
            k.na();
            for (var a = 0, b; b = n[a++];) b.reset()
        }

        function b(a) { A = a }

        function e(a) {
            return a ?
                a.replace(g, "-") : ""
        }

        function d(a) { return Math.max(a - D, 0) }
        var f = /\.+$/,
            g = /\./g,
            i = Ba(oc),
            h, k, p, q, v, s, n, y, w = -1,
            D, A, m = {
                C: function(a) {
                    h = a.get(191, m);
                    k = a.get(123, m);
                    p = a.get(118, m);
                    q = a.get(374, m);
                    v = a.get(126, m);
                    s = a.get(128, m);
                    n = a.Q(311, m);
                    Wb(a.Q(152, m))
                },
                H: function(a) { A = a.fg },
                activate: function(a) {
                    y = a;
                    c()
                },
                getType: function() { return 120 },
                B: function() { return 9 },
                A: function() { return { D: a, reset: c, ui: b } }
            };
        return m
    });
    Y.register(121, 11, function() {
        function a(a, b) { if (s) { for (var c = r, d = 0, e; e = s[d++];) 2 == e.xa(a, b) && (c = j); if (c) return } if (Xa(a) || B.X || h && h.X()) ob(b) ? m && !A && (A = Kb(m, "btnI", "1")) : A && (m.removeChild(A), A = l), g(b), D.search(a, b), f(), k.P(14, { query: a }) }

        function c(a) {
            g();
            D.vb(a);
            f()
        }

        function b(a) {
            g();
            D.ha(a);
            f()
        }

        function e(a) {
            g(1);
            D.tb(a);
            f()
        }

        function d(a) { return D.ub(a) }

        function f() {
            p.hc();
            p.Ai();
            v.reset();
            y ? y.clear() : n.clear();
            q.W() != q.ca() && q.Sh();
            w && w.clear()
        }

        function g(a) { i && B.Bd && i.Nb(a) }
        var i, h, k, p, q, v, s, n,
            y, w, D, A, m, B, t = {
                G: function(a) { m = a.he() },
                C: function(a) {
                    i = a.get(347, t);
                    h = a.get(130, t);
                    k = a.get(117, t);
                    p = a.get(123, t);
                    q = a.get(118, t);
                    v = a.get(120, t);
                    n = a.get(128, t);
                    y = a.get(343, t);
                    w = a.get(139, t);
                    D = a.ia();
                    s = a.Q(294, t)
                },
                activate: function(a) { B = a },
                getType: function() { return 121 },
                B: function() { return 11 },
                A: function() { return { search: a, vb: c, ha: b, tb: e, ub: d } }
            };
        return t
    });
    Y.register(124, 14, function() {
        function a(a) { return (a[d.Ab] || {}).j }

        function c(a) { return a[d.nf] }

        function b(a, b) {
            var c = a[d.nf],
                p = a[d.mj],
                y = {},
                w = a[d.Ab];
            if (w)
                for (var D in w) {
                    var A = w[D];
                    D in k && (A = k[D].parse(A));
                    y[D] = A
                }
            var m = A = r,
                w = r;
            D = 0;
            for (var B; B = p[D++];)
                if (33 == (B[f.of] || 0) ? m = j : A = j, m && A) { w = j; break }
            A = 0;
            m = [];
            for (D = 0; B = p[D++];) {
                var t = B[f.of] || 0;
                if (g[t] && (!w || 33 != t)) {
                    var G;
                    G = B[f.lj];
                    h && (G = i.bold(c.toLowerCase(), db(bb(G))));
                    m.push(Gc(G, db(bb(G)), A++, t, B[f.kj] || [], e(B)))
                }
            }
            return Ec(b, c, m, Uc(y), r, j, r, r)
        }

        function e(a) {
            return (a =
                a[f.Ab]) ? Uc(a) : Fc
        }
        var d = nc,
            f = jc,
            g, i, h, k = {},
            p = {
                C: function(a) {
                    i = a.get(150, p);
                    if (a = a.Q(158, p))
                        for (var b = 0, c; c = a[b++];) k[c.ok()] = c
                },
                activate: function(a) {
                    g = a.ya;
                    h = a.Zb
                },
                getType: function() { return 124 },
                B: function() { return 14 },
                A: function() { return { Ji: a, F: c, Qc: b } }
            };
        return p
    });
    Y.register(125, 15, function() {
        function a(a) {
            var e = c(a);
            if (e) {
                d && !a.hf() && (a = d.hg(a));
                f.$i(a);
                var h = a,
                    v = h.ja().N(),
                    s = h.T();
                g.isEnabled() && (s.length ? (h = h.getType() == r, g.Jb(v, s, h)) : g.clear());
                b.P(3, { input: v, Th: s })
            }
            i.Fc(a, e);
            return e
        }

        function c(a) {
            var b = e.ca(),
                c = f.da(),
                b = b.toLowerCase(),
                d = a.N().toLowerCase();
            b == d ? c = j : (b = Ra(b), a = (d = a.ja()) ? d.la() : Ra(a.N().toLowerCase()), c = c ? c.ja().la() : "", c = 0 == b.indexOf(a) ? 0 == b.indexOf(c) ? a.length >= c.length : j : r);
            return c
        }
        var b, e, d, f, g, i, h = {
            C: function(a) {
                b = a.get(117, h);
                e = a.get(118, h);
                d = a.get(122, h);
                f = a.get(126, h);
                g = a.get(128, h);
                i = a.ia()
            },
            getType: function() { return 125 },
            B: function() { return 15 },
            A: function() { return { va: a, Ua: c } }
        };
        return h
    });
    Y.register(123, 13, function() {
        function a(a, b) {
            if (u && !(ta || E && E.Pb())) {
                a.Pc("ds", ia.Wb);
                a.Pc("pq", ya);
                a.Gi();
                var c = j,
                    d = a.Xe();
                d > ja && (ja = d);
                ++R;
                var d = Ga(),
                    e;
                for (e in L) {
                    var f = L[e].getTimestamp();
                    2500 < d - f && t(e)
                }
                if (ea && (e = z.get(a)))(c = ha || a.Ii()) && ia.$f && a.Hi(), W.va(e), e.Ub() && ++V, T = l;
                c && (T = a, (!F || b) && B())
            }
        }

        function c() { return 10 <= ga || 3 <= K.$e() ? j : r }

        function b() { ca = ja }

        function e() { return ja <= ca }

        function d() { T = l }

        function f() { return R }

        function g() { return { qi: ea, pi: ea ? z.Fi() : 0, gi: N } }

        function i() {
            return ea ?
                z.Lc() : 0
        }

        function h() { return V }

        function k() { return { si: x, ri: wa, ti: xa } }

        function p() { return ma }

        function q() { return na }

        function v(a) { a = H.Qc(a, l); return W.Ua(a) }

        function s() { return fa }

        function n() { for (var a = [], b = 0, c, d = 0; d <= J; ++d) c = la[d], 0 == c ? b++ : (b = 1 == b ? "0j" : 1 < b ? d + "-" : "", a.push(b + c), b = 0); return a.join("j") }

        function y() { ea && z.Di() }

        function w(a) { ea && z.Ei(a) }

        function D(a, b) { return H.Qc(a, b) }

        function A() {
            ea && z.na();
            fa = na = ma = xa = wa = x = V = N = ga = R = 0;
            la = [];
            for (var a = 0; a <= J; ++a) la[a] = 0
        }

        function m(a) { ya = a }

        function B() {
            mb(F);
            F = l;
            if (!(2 < K.$e()) && T) {
                var a = [],
                    b = T.D();
                if (b)
                    for (var c in b) Ta(c, b[c], a);
                $.Ac();
                var d = T,
                    a = K.Pi(T, a.join("&"), function(a, b) { G(a, b, d) }, G);
                T.Ye() || (++x, a ? (a = T, L[a.getId()] = a, ++ga) : ++wa);
                T = l;
                a = 100;
                b = (ga - 2) / 2;
                for (c = 1; c++ <= b;) a *= 2;
                a < aa && (a = aa);
                F = window.setTimeout(B, a)
            }
        }

        function t(a) {
            K.Oi(a);
            delete L[a];
            ga && --ga
        }

        function G(a, b, c) {
            if (u) {
                if (!c && (c = H.Ji(a), c = L[c], !c)) return;
                if (!c.Ye()) {
                    b && ++N;
                    a = H.Qc(a, c);
                    if (I) {
                        var d = P.ca();
                        a = I.nk(a, d)
                    }
                    b && a.We();
                    ea && z.put(a);
                    c.Xe() <= ca || (++xa, W.va(a) || ++ma, b = c, aa = a.D().ka("d"),
                        b && (t(b.getId()), b = b.getTimestamp(), b = Ga() - b, fa += b, na = Math.max(b, na), ++la[b > M ? J : O[Math.floor(b / 100)]]));
                    a && (a = a.D().getString("q")) && Q.ui(a)
                }
            }
        }
        var O = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
            J = O[O.length - 1] + 1,
            M = 100 * O.length - 1,
            z, E, K, P, Q, H, W, I, U, $, u = r,
            T, ja = -1,
            L, R, ga, N, V, x, wa, xa, ma, na, fa, la, aa, F, ha, ta, ca, ea, ia, ya, da = {
                C: function(a) {
                    z = a.get(133, da);
                    E = a.get(130, da);
                    a.get(117, da);
                    P = a.get(118, da);
                    Q = a.get(120, da);
                    H = a.get(124, da);
                    W = a.get(125, da);
                    I = a.get(230, da);
                    a.get(126, da);
                    U = a.get(127, da);
                    a.get(128, da);
                    $ =
                        a.ia()
                },
                activate: function(a) {
                    K = U.Ki();
                    ia = a;
                    u = j;
                    L = {};
                    aa = 0;
                    ha = a.Zf;
                    ta = a.Xb;
                    ca = -1;
                    ea = ia.Yf && !!z;
                    ya = a.bg
                },
                getType: function() { return 123 },
                B: function() { return 13 },
                A: function() { return { ce: a, Nc: c, hc: b, ed: e, Ai: d, ni: f, hi: g, Lc: i, ki: h, ji: k, mi: p, li: q, Ua: v, oi: s, ii: n, Ta: y, fi: w, fd: D, na: A, gd: m } },
                L: function() {
                    u = r;
                    mb(F);
                    L = T = F = l;
                    b()
                }
            };
        return da
    });
    Y.register(126, 5, function() {
        function a() { return d.Nc() }

        function c(a) {
            g = a;
            ++i;
            a.Ed() && ++h;
            f.wb && f.wb(h / i)
        }

        function b() { return g }

        function e() { g = l }
        var d, f, g, i, h, k = {
            C: function(a) {
                d = a.get(123, k);
                f = a.ia()
            },
            activate: function() {
                h = i = 0;
                g = l
            },
            getType: function() { return 126 },
            B: function() { return 5 },
            A: function() { return { Nc: a, $i: c, da: b, F: e } }
        };
        return k
    });
    Y.register(127, 16, function() {
        function a() { return d }

        function c() { return f }

        function b() { d && d.Ta() }
        var e = {},
            d, f, g = {
                C: function(a) { a = a.Q(149, g); for (var b = 0, c; c = a[b++];) e[c.kf()] = c },
                activate: function(a) {
                    var b = "https:" == document.location.protocol || a.Fd,
                        c = Ta,
                        g = [];
                    c("client", a.Da, g);
                    c("hl", a.Va, g);
                    c("gl", a.Md, g);
                    c("sugexp", a.Yb, g);
                    c("gs_nf", 3, g);
                    a.kb && c("authuser", a.kb, g);
                    f = { protocol: "http" + (b ? "s" : "") + "://", host: a.Gd || "clients1." + a.dc, fc: a.fc || "/complete/search", bj: g.length ? g.join("&") : "" };
                    if (!d || d.kf() !=
                        a.ec) d = e[a.ec]
                },
                getType: function() { return 127 },
                B: function() { return 16 },
                A: function(d) { return { Ki: 123 == d ? a : C, aj: c, Qi: b } }
            };
        return g
    });
    Y.register(128, 17, function() {
        function a(a) {
            a.ta = Oa;
            a.marginWidth = da;
            var b = Z.Kf;
            b || (b = "rtl" == Oa ? "right" : "left");
            a.Jc = b
        }

        function c(a, c, d) {
            a = na && na.ik(c);
            G();
            if ((aa = c) && c.length) {
                var e = c[0].K();
                Oa = R.qb(e);
                e = r;
                d ? (ta = ja.di, e = L.Nh(c, Oa), c = c[0].D().getString("a"), c = bb(c), da = x.getWidth(c)) : (ta = ja.Se, e = L.I(I(), Oa), da = 0);
                a && (ha = na.hk(), b(na.gk()));
                e ? B() : G()
            }
        }

        function b(a) {
            T();
            if (F != a) {
                var b = F;
                F = a;
                u(b)
            }
        }

        function e() {
            if (D())
                if (ca) {
                    var a = F;
                    F == aa.length - 1 ? ha = F = l : F == l ? F = 0 : ++F;
                    ha = F;
                    $(a, e)
                } else B()
        }

        function d() {
            if (D())
                if (ca) {
                    var a =
                        F;
                    !aa || 0 == F ? ha = F = l : F == l ? F = aa.length - 1 : --F;
                    ha = F;
                    $(a, d)
                } else B()
        }

        function f(a) {
            var b = a ? 4 : 3;
            A() ? (a = y(), L.rb(a) || V.search(b), b = V.W(), la.ob(b, a)) : V.search(b)
        }

        function g(a) { return L.Fa(a) }

        function i(a) {
            ha = F = a;
            a = aa[a];
            var b = V.W();
            la.ob(b, a)
        }

        function h() { return ca }

        function k() { return ea }

        function p(a) {
            ea && !a && G();
            ea = a
        }

        function q() { return ta }

        function v() { return aa }

        function s() { return D() ? aa[0] : l }

        function n() { return F }

        function y() { return A() ? aa[ha] : l }

        function w() { return ha }

        function D() { return !(!aa || !aa.length) }

        function A() { return ha != l }

        function m() { ca && !ia && (ia = window.setTimeout(G, Z.Jf)) }

        function B() { ca || (ga.setPanel(17), ga.show(), ca = j, la.wc()) }

        function t() { ca && (ia && (mb(ia), ia = l), ga.La(), ca = r, la.xc()) }

        function G() {
            t();
            aa = l;
            ta = ja.EMPTY;
            F != l && L.V(F);
            ha = F = l;
            L.clear()
        }

        function O() {
            N.hc();
            t()
        }

        function J() {
            F != l && L.V(F);
            ha = F = l
        }

        function M() {
            T();
            ya = window.setTimeout(J, 0)
        }

        function z() { T() }

        function E(a) {
            if (D()) B();
            else {
                var b = V.W();
                if (b) {
                    a = a || V.Ga();
                    b = Dc(b, a);
                    if (xa) {
                        a = b.fe();
                        for (var c = ma.da(), d = 0, e; e = xa[d++];) e.xa(a,
                            c)
                    }
                    N.ce(b)
                }
            }
        }

        function K() { return L.J() }

        function P() { return L.sb() }

        function Q() { ca = r }

        function H() { L.Ja() }

        function W() { return 17 }

        function I() {
            if (D() && ta == ja.Se) {
                for (var a = [], b = [], c = 0, d;
                    (d = wa[c++]) && !d.getMessage(V.W(), aa, b););
                (c = b ? b.length : 0) && (c -= U(b, a, 0));
                for (d = 0; d < aa.length; ++d) a.push(aa[d]);
                c && (c -= U(b, a, 1));
                Z.If && a.push(1);
                c && U(b, a, 2);
                Z.nd && a.push(2);
                fa && fa.ci(a);
                return a
            }
            return l
        }

        function U(a, b, c) {
            for (var d = 0, e = 0, f; e < a.length; ++e)
                if ((f = a[e]) && f.position == c) b.push(f), ++d;
            return d
        }

        function $(a, b) {
            if (F !=
                l && !L.Y(F)) L.V(a), b();
            else if (u(a), F == l) V.ee();
            else {
                var c = L.Ma(aa[F]);
                V.nb(c);
                la.yc(c)
            }
        }

        function u(a) {
            T();
            a != l && L.V(a);
            F != l && L.Ia(F)
        }

        function T() { ya && (mb(ya), ya = l) }
        var ja = kc,
            L, R, ga, N, V, x, wa, xa, ma, na, fa, la, aa, F, ha, ta, ca, ea, ia, ya, da, Oa, Z, qa = {
                C: function(a) {
                    L = a.get(129, qa);
                    R = a.get(145, qa);
                    ga = a.get(115, qa);
                    N = a.get(123, qa);
                    V = a.get(118, qa);
                    x = a.get(147, qa);
                    wa = a.Q(153, qa);
                    xa = a.Q(156, qa);
                    ma = a.get(126, qa);
                    na = a.get(184, qa);
                    fa = a.get(157, qa);
                    la = a.ia()
                },
                H: function() {
                    xa.sort(qb);
                    wa.sort(rb)
                },
                activate: function(a) {
                    Z =
                        a;
                    ha = F = l;
                    ta = ja.EMPTY;
                    ca = r;
                    ea = j;
                    Oa = "";
                    da = 0
                },
                getType: function() { return 128 },
                B: function() { return 17 },
                A: function() { return { Jb: c, Ph: b, Og: e, Pg: d, rb: f, Fa: g, Mh: i, isVisible: h, isEnabled: k, fb: p, Ng: q, T: v, Qb: s, Uh: n, fa: y, Ne: w, ea: D, wa: A, Qg: m, show: B, La: t, clear: G, hb: O, Vh: J, Oh: M, F: z, Sa: E } },
                ga: function() { var b = { Pe: a, J: K, sb: P, Qe: Q, Ja: H, Kc: W }; return [{ G: C, C: C, H: C, activate: C, getType: function() { return 154 }, B: function() { return 17 }, A: function() { return b }, ga: C, L: C }] },
                L: function() {
                    ia && (mb(ia), ia = l);
                    aa = l;
                    t()
                }
            };
        return qa
    });
    Y.register(115, 7, function() {
        function a(a) { h.Wa(a) }

        function c() { return k }

        function b(a) {
            if (a in p) {
                if (q) {
                    if (a == q.Kc()) return;
                    f();
                    q.Qe()
                }
                q = p[a];
                h.setPanel(q)
            }
        }

        function e() { return k ? h.getHeight() : 0 }

        function d() { k || (h.show(g()), k = j) }

        function f() { k && (h.La(), k = r) }

        function g() {
            var a = sb(i);
            q.Pe(a);
            return a
        }
        var i = { Wi: r, Jc: "left", Ve: j, ta: l, marginWidth: 0 },
            h, k, p = {},
            q, v = {
                C: function(a) {
                    h = a.get(116, v);
                    a.ia();
                    if (a = a.Q(154, v))
                        for (var b = 0, c; c = a[b++];) p[c.Kc()] = c
                },
                activate: function() { k = r },
                getType: function() { return 115 },
                B: function() { return 7 },
                A: function() { return { isVisible: c, setPanel: b, getHeight: e, show: d, La: f, Wa: a } },
                L: function() { f() }
            };
        return v
    });
    Y.register(119, 4, function() {
        function a(a, b) {
            ga && (ga = r, I.Mc(u, G), I.Mc(u, O));
            b || (b = a);
            u.parentNode.replaceChild(a, u);
            b.appendChild(u);
            R && L.Pf && (xb || Yb ? I.defer(function() {
                u.focus();
                yb(u, x.getPosition())
            }) : u.focus());
            J()
        }

        function c() { return fa }

        function b(a) {
            var b = "rtl" == a == ("rtl" == ca);
            u.dir = a;
            if (la) {
                U.Bc(a);
                var c = ma.parentNode;
                c.removeChild(la);
                b ? Nb(la, ma) : c.insertBefore(la, ma)
            }
            fa && (fa.dir = a, c = fa.parentNode, c.removeChild(fa), b ? c.insertBefore(fa, ma) : Nb(fa, ma));
            0 != T && (a = Ib(a), Hb(u, a, 0))
        }

        function e() { return x }

        function d() { return Ab(na) }

        function f() {
            var a = na ? na.offsetHeight : 0;
            ia > a && (a = ia);
            return a
        }

        function g() { return na ? na.offsetWidth : 0 }

        function i() {
            var a = u.offsetWidth;
            L.dd && (a -= u.offsetHeight);
            return a
        }

        function h() { return u.value }

        function k(a) {
            (L.Mf ? u : ma || ya || u).style.background = a || "transparent"
        }

        function p() { xa = j }

        function q() {
            u.select();
            P()
        }

        function v() {
            ac && (u.value = "");
            u.value = H.ca();
            ac && (u.value = u.value);
            D()
        }

        function s() { if (!R) try { u.focus(), R = j, D() } catch (a) {} }

        function n() { R && (u.blur(), R = r) }

        function y() { return R }

        function w() { u.value = "" }

        function D() {
            if (R) {
                var a = u.value.length;
                x = Va(a);
                yb(u, a)
            }
        }

        function A(a) { a = a.type; "compositionstart" == a ? H.ke(j) : "compositionend" == a && H.ke(r) }

        function m(a) {
            var b = a.keyCode;
            wa = b;
            var c = Zb && Cb(b) && W.ea(),
                d = b == Q.Te,
                e = b == Q.Oc;
            F = r;
            b == Q.Ue && (F = H.Fa());
            if (d) {
                var b = W.fa(),
                    f;
                if (f = b) f = (b = $[b.getType()].jk) && b();
                f ? W.rb(a.shiftKey) : I.defer(function() { W.rb(a.shiftKey) })
            }
            if (c || d || e || F) a.xb = j
        }

        function B(a) {
            var b = a.keyCode,
                c = b == Q.Oc,
                d = b == Q.Ue && F;
            if (b == Q.Te || c || d) a.xb = j
        }

        function t(a) {
            if (!ha) {
                var b =
                    a.Ka;
                if (!b.indexOf("key") && !a.ctrlKey && !a.altKey && !a.shiftKey && !a.metaKey) a: if (a = a.keyCode, "keypress" != b) {
                        var c = Cb(a),
                            d;
                        if ("keydown" == b) { if (H.dh(229 == a), c) break a } else if (d = a != wa, wa = -1, !c || d) break a;
                        switch (a) {
                            case Q.Oc:
                                H.Vg();
                                break;
                            case Q.wi:
                                H.Yg();
                                break;
                            case Q.xi:
                                H.Zg();
                                break;
                            case Q.yi:
                                H.$g();
                                break;
                            case Q.vi:
                                H.Ug(x);
                                break;
                            case Q.DELETE:
                                H.Tg(x);
                                break;
                            case Q.zi:
                                H.Sg(x)
                        }
                    }
                P();
                H.Xg(u.value, x, b)
            }
        }

        function G() {
            R = j;
            H.Wg()
        }

        function O() {
            R = r;
            H.je()
        }

        function J() {
            ga || (ga = j, I.S(u, "focus", G, 99), I.S(u, "blur", O,
                99))
        }

        function M() { V || (V = window.setInterval(E, L.Of || 50)) }

        function z() { V && (mb(V), V = l) }

        function E() { t({ Ka: "polling" }) }

        function K() { Yb && Lb(u) }

        function P() {
            if (R) {
                var a = zb(u);
                a && (x = a)
            }
        }
        var Q = rc,
            H, W, I, U, $, u, T, ja, L, R, ga = r,
            N, V, x = Va(0),
            wa = -1,
            xa = r,
            ma, na, fa, la, aa, F, ha, ta, ca, ea, ia, ya, da = {
                G: function(a, b) {
                    ea = a;
                    u = a.$d();
                    ca = a.Ca();
                    a.$b() || (b.addRule(".gsib_a", "width:100%;padding:4px 6px 0"), b.addRule(".gsib_a,.gsib_b", "vertical-align:top"))
                },
                C: function(a) {
                    H = a.get(118, da);
                    I = a.get(117, da);
                    W = a.get(128, da);
                    U = a.get(173,
                        da);
                    $ = Wb(a.Q(152, da));
                    a = a.Ba();
                    T = a.Gb();
                    ja = a.getId()
                },
                H: function(b) {
                    function c(a) { I.S(u, a, t, 10, h) }
                    L = b;
                    ia = b.cb;
                    R = Bb(u);
                    P();
                    xb && I.S(u, "beforedeactivate", function(a) { xa && (xa = r, a.xb = j) }, 10);
                    if (Yb) {
                        var d;
                        I.mb(window, "pagehide", function() {
                            ha = j;
                            d = u.value
                        });
                        I.mb(window, "pageshow", function(a) {
                            ha = r;
                            a.persisted && H.Ib(d)
                        })
                    }
                    na = u;
                    ta = !!b.ma[130];
                    if (H.bh() || H.Gc() || ta || b.qd) {
                        var e = ea.get("gs_id");
                        if (e) fa = ea.get("gs_ttc"), ma = ea.get("gs_tti"), H.Gc() && U && (aa = U.J(), la = aa.parentNode);
                        else {
                            e = Db();
                            e.id = ea.getId("gs_id");
                            e.className = "gstl_" + ja + " " + (L.Kb || u.className);
                            var f = e.insertRow(-1),
                                g = e.style,
                                x = u.style;
                            g.width = x.width;
                            g.height = ia ? ia + "px" : x.height;
                            g.padding = "0";
                            Tb(u);
                            u.className = L.Sb;
                            ta && (fa = f.insertCell(-1), fa.id = ea.getId("gs_ttc"), fa.style.whiteSpace = "nowrap");
                            ma = f.insertCell(-1);
                            ma.id = ea.getId("gs_tti");
                            ma.className = "gsib_a";
                            H.Gc() && U && (aa = U.J(), la = f.insertCell(-1), la.className = "gsib_b", la.appendChild(aa));
                            a(e, ma)
                        }
                        bc && Zb && (u.style.height = "1.25em", u.style.marginTop = "-0.0625em");
                        I.S(e, "mouseup", function() { u.focus() });
                        na = e
                    }
                    u.nfd = j;
                    b.pd && (I.S(u, "blur", z, 10), I.S(u, "focus", M, 10), N = j);
                    I.oa(8, K);
                    I.S(u, "keydown", m);
                    (vb || L.Lf) && I.S(u, "keypress", B);
                    I.S(u, "select", P, 10);
                    var h = r;
                    c("mousedown");
                    c("keyup");
                    c("keypress");
                    h = j;
                    c("mouseup");
                    c("keydown");
                    c("focus");
                    c("blur");
                    c("cut");
                    c("paste");
                    c("input");
                    I.S(u, "compositionstart", A);
                    I.S(u, "compositionend", A);
                    J()
                },
                activate: function(a) {
                    L = a;
                    var b = a.Nf;
                    b && (ya = ea.gb(b));
                    u.setAttribute("autocomplete", "off");
                    u.setAttribute("spellcheck", a.spellcheck);
                    u.style.outline = a.rd ? "" : "none";
                    N &&
                        M()
                },
                getType: function() { return 119 },
                B: function() { return 4 },
                A: function() { return { F: a, Ec: c, Bc: b, Ga: e, Dc: d, getHeight: f, getWidth: g, ie: i, Rg: h, le: k, zc: p, select: q, refresh: v, focus: s, blur: n, Hb: y, clear: w } },
                L: function() {
                    N && z();
                    L.jd && I.Mc(u, H.je)
                }
            };
        return da
    });
    Y.register(129, 18, function() {
        function a(a, b) {
            if (!I) return r;
            H = b;
            D();
            for (var c = r, d = 0, e; e = a[d++];) v(e) && (c = j);
            return c
        }

        function c(a) { var b = t[a.getType()]; return b && b.Bi ? b.Bi(a) : r }

        function b(a) { return t[a.getType()].qa(l, a, G) }

        function e(a) { var b = t[a.getType()]; if (b && b.Ma) { var c = B.W(); return b.Ma(a, c) } return a.K() }

        function d(a, b) {
            if (!I) return r;
            H = b;
            D();
            for (var c = r, d = 0, e; e = a[d++];)
                if (1 == e)
                    if ($) U.appendChild($);
                    else {
                        e = n();
                        var f = e.style;
                        f.textAlign = "center";
                        f.whiteSpace = "nowrap";
                        e.dir = W;
                        f = Eb();
                        f.style.position =
                            "relative";
                        u = Eb();
                        u.className = "gssb_g";
                        J.nd && (u.style.paddingBottom = "1px");
                        s(J.Uf, u, 13);
                        J.Rf ? s(J.Tb, u, 8) : J.Sf && s(J.Vf, u, 14);
                        f.appendChild(u);
                        e.appendChild(f);
                        $ = e.parentNode
                    }
            else 2 == e ? T ? U.appendChild(T) : (e = n(), f = e.style, f.padding = "1px 4px 2px 0", f.fontSize = "11px", f.textAlign = "right", f = S("a"), f.id = "gssb_b", f.href = "http://www.google.com/support/websearch/bin/answer.py?hl=" + J.Va + "&answer=106230", f.innerHTML = J.Tf, e.appendChild(f), T = e.parentNode) : 3 == e ? (e = K.pop()) ? U.appendChild(e) : (e = I.insertRow(-1), e.Ci =
                j, e = e.insertCell(-1), f = S("div", "gssb_l"), e.appendChild(f)) : v(e) && (c = j);
            return c
        }

        function f(a) {
            y(a, ja);
            var b = A.T();
            b && m.P(9, { index: a, kk: b[a], lk: P[a] })
        }

        function g(a) {
            y(a, "");
            m.P(10)
        }

        function i() {
            for (var a, b, c; c = z.pop();) a = c.getType(), (b = M[a]) || (b = M[a] = []), b.push(c), a = c.J(), a.parentNode.removeChild(a);
            for (; a = U.firstChild;) a = U.removeChild(a), a.Ci ? K.push(a) : a != $ && a != T && E.push(a);
            P = []
        }

        function h(a) { return (a = P[a]) ? a.Y() : r }

        function k() { D() }

        function p() { return I }

        function q() { return J.od || W == H ? Q : l }

        function v(a) {
            var b =
                a.getType(),
                c = t[b];
            if (!c) return r;
            var d = (b = M[b]) && b.pop();
            d || (d = c.pa(G));
            c.I(a, d);
            z.push(d);
            var e = d.J(),
                b = n();
            b.className = "gssb_a " + J.Vb;
            b.appendChild(e);
            if (a.ua !== ka) {
                P.push(d);
                var d = H,
                    f = a.ua();
                e.onmouseover = function() { A.Ph(f) };
                e.onmouseout = function() { A.Oh() };
                e.onclick = function(b) {
                    B.pb();
                    a.Cc() && B.nb(a.K());
                    A.Mh(f);
                    b = b || Xb(e).event;
                    c.Z(b, a, G)
                }
            } else d = W;
            Jb(b, d);
            return j
        }

        function s(a, b, c) {
            var d = S("input");
            d.type = "button";
            d.value = bb(a);
            d.onclick = function() { G.search(B.ca(), c) };
            var e;
            if (J.Qf) {
                a = "lsb";
                e = S("span");
                var f = S("span");
                e.className = "ds";
                f.className = "lsbb";
                e.appendChild(f);
                f.appendChild(d)
            } else a = "gssb_h", e = d;
            d.className = a;
            b.appendChild(e)
        }

        function n() {
            var a = E.pop();
            if (a) return U.appendChild(a), a.firstChild;
            a = I.insertRow(-1);
            a = a.insertCell(-1);
            a.className = J.Vb;
            a.onmousedown = w;
            return a
        }

        function y(a, b) {
            var c = P[a];
            c && c.Y() && (c.J().parentNode.parentNode.className = b)
        }

        function w(a) {
            a = a || Xb(I).event;
            a.stopPropagation ? a.stopPropagation() : vb || xb && B.zc();
            return r
        }

        function D() {
            if (u) {
                var a = J.ud ? J.ud :
                    B.getWidth() - 3;
                0 < a && (u.style.width = a + "px")
            }
        }
        var A, m, B, t, G, O, J, M = {},
            z = [],
            E = [],
            K = [],
            P = [],
            Q, H, W, I, U, $, u, T, ja, L = {
                G: function(a, b) {
                    O = a;
                    W = a.Ca();
                    b.addRule(".gssb_a", "padding:0 7px");
                    b.addRule(".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
                    b.addRule("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
                    b.addRule("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
                    b.addRule(".gssb_m", "color:#000;background:#fff");
                    b.addRule(".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
                    b.addRule(".gssb_h", ["font-size:15px;height:28px;margin:0.2em", Zb ? ";-webkit-appearance:button" : ""].join(""));
                    b.addRule(".gssb_i", "background:#eee");
                    b.addRule(".gss_ifl", "visibility:hidden;padding-left:5px");
                    b.addRule(".gssb_i .gss_ifl", "visibility:visible");
                    b.addRule("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
                    b.addRule("a.gssb_j:hover", "text-decoration:underline");
                    b.addRule(".gssb_l", "height:1px;background-color:#e5e5e5")
                },
                C: function(a) {
                    A = a.get(128, L);
                    m = a.get(117,
                        L);
                    B = a.get(118, L);
                    G = a.get(121, L);
                    t = Wb(a.Q(152, L))
                },
                H: function(a) {
                    J = a;
                    I = Db();
                    a = S("tbody");
                    I.appendChild(a);
                    U = I.getElementsByTagName("tbody")[0]
                },
                activate: function(a) {
                    J = a;
                    var b = a.Rb;
                    b && (Q = O.gb(b));
                    I.className = a.Xf || "gssb_m";
                    ja = a.Wf || "gssb_i"
                },
                getType: function() { return 129 },
                B: function() { return 18 },
                A: function() { return { Nh: a, Ma: e, rb: b, Fa: c, I: d, Ia: f, V: g, clear: i, Y: h, Ja: k, J: p, sb: q } }
            };
        return L
    });
    Y.register(116, 8, function() {
        function a(a) { a != t && (t = a, a = a.J(), G ? a != G && m.replaceChild(a, G) : m.appendChild(a), G = a) }

        function c() { B || (B = m ? Math.max(m.offsetHeight, 0) : 0); return B }

        function b(a) {
            m.className = a.Wi ? "gssb_e gsdd_a" : "gssb_e";
            var b = a.ta || E;
            y != b && (y = b, Jb(n, b));
            b = a.marginWidth;
            if (A != b) {
                var c = D.style;
                b ? (w.hasChildNodes() || w.appendChild(D), c.width = b + "px", Yb && (c.paddingLeft = "1px")) : (w.hasChildNodes() && w.removeChild(D), c.paddingLeft = "");
                A = b
            }
            P = a.Ve;
            Q = a.Jc;
            h(O, j);
            h(z, j);
            q.P(16);
            d()
        }

        function e() {
            B = 0;
            h(O,
                r);
            h(z, r);
            q.P(11)
        }

        function d() {
            B = 0;
            g();
            if (z) {
                var a = v.xd[0],
                    b = z.style;
                "relative" != v.cc && (b.top = n.style.top, b.left = n.offsetLeft + w.offsetWidth + "px");
                a = c() + a;
                z.style.height = Math.max(a, 0) + "px";
                i(z, m.offsetWidth)
            }
            t && t.Ja()
        }

        function f(a) {
            if (J) M != a && J.replaceChild(a, M);
            else {
                var b = n.insertRow(-1);
                b.style.height = "0";
                b.insertCell(-1);
                J = b.insertCell(-1);
                k.isVisible() || (h(m, r), h(n, j), d());
                O = m;
                J.appendChild(a)
            }
            M = a
        }

        function g() {
            var a, b, c;
            a = (b = t && t.sb()) ? b.offsetWidth : p.getWidth();
            (c = K) ? Ja(c) && (c = l): A || !P ? (m.style.width =
                "", n.style.width = "") : (m.style.width = "100%", c = a + v.jb[2], i(n, c));
            if ("relative" != v.cc) {
                var d = p.Dc();
                b && (d.zb = Ab(b).zb);
                b = v.jb;
                var e = b[1];
                b = b[0];
                b = d.Zi + p.getHeight() + b;
                "right" == Q ? (c = Xb(n), a = Sb(c) - (d.zb - e + a), c = ka) : (d = d.zb + e, "center" == Q && c && (d += (a - c) / 2), c = d, a = ka);
                d = n.style;
                d.top = b + "px";
                d.left = d.right = "";
                c != ka ? d.left = c + "px" : d.right = a + "px"
            }
            tb && (d.zoom = "normal", d.zoom = 1)
        }

        function i(a, b) { Ka(b) ? 0 < b && (a.style.width = b + "px") : a.style.width = b }

        function h(a, b) { a && (a.style.display = b ? "" : "none") }
        var k, p, q, v, s, n, y, w, D,
            A, m, B, t, G, O, J, M, z, E, K, P = j,
            Q, H = {
                G: function(a, b) {
                    E = a.Ca();
                    b.addRule(".gssb_c", "border:0;position:absolute;z-index:989");
                    b.addRule(".gssb_e", ["border:1px solid #ccc;border-top-color:#d9d9d9;", b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);"), "cursor:default"].join(""));
                    b.addRule(".gssb_f", "visibility:hidden;white-space:nowrap");
                    b.addRule(".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
                    b.addRule(".gsdd_a", "border:none!important")
                },
                C: function(a) {
                    k = a.get(115, H);
                    p = a.get(118, H);
                    q =
                        a.get(117, H);
                    s = a.Ba().getId()
                },
                H: function(a) {
                    v = a;
                    n = Db();
                    n.className = "gstl_" + s + " gssb_c";
                    h(n, r);
                    O = n;
                    var b = n.insertRow(-1);
                    w = b.insertCell(-1);
                    w.className = "gssb_f";
                    D = Eb();
                    m = b.insertCell(-1);
                    m.className = "gssb_e";
                    m.style.width = "100%";
                    v.zd && (z = S("iframe", "gstl_" + s + " gssb_k"), h(z, r), (v.yd || document.body).appendChild(z));
                    if (K = v.gg) Ka(K) && (K += v.jb[2]), i(n, K);
                    g();
                    (a.yd || document.body).appendChild(n);
                    q.oa(8, d)
                },
                activate: function(a) {
                    v = a;
                    n.style.position = a.cc
                },
                getType: function() { return 116 },
                B: function() { return 8 },
                A: function() { return { setPanel: a, getHeight: c, Wa: f, show: b, La: e, Ja: d } }
            };
        return H
    });
    Y.register(347, 346, function() {
        function a(a) {
            a = c.D(a);
            for (var g in f) g in a || (a[g] = f[g]);
            g = b + Qa(a);
            a = new Image;
            var k = d;
            a.onerror = a.onload = a.onabort = function() { try { delete e[k] } catch (a) {} };
            e[d] = a;
            a.src = g;
            d++
        }
        var c, b, e = [],
            d = 0,
            f, g = {
                C: function(a) { c = a.get(120, g) },
                activate: function(a) {
                    b = "//" + (a.mg || "www." + a.dc) + "/gen_204?";
                    f = a.ng || {}
                },
                getType: function() { return 347 },
                B: function() { return 346 },
                A: function() { return { Nb: a } }
            };
        return g
    });
    Y.register(133, 21, function() {
        function a(a) {
            i(a);
            if (q)
                for (var b = 0; b < q.length; ++b) q[b].update(a)
        }

        function c(a) {
            var b = p[a.jf()] || l,
                c = r;
            if (b) ++v, c = j;
            else if (q)
                for (var d = 0; d < q.length; ++d)
                    if (b = q[d].get(a)) { i(b);++s; break }
            b && (d = a.N(), d != b.N() ? b = Ec(a, d, b.T(), b.D(), b.Ub(), b.ib(), c, b.hf()) : c && b.We());
            return b
        }

        function b() { return v }

        function e() { return s }

        function d() { s = v = 0 }

        function f(a) {
            var b, c, d, e;
            for (e in p) {
                b = p[e];
                b = b.T();
                for (d = 0; c = b[d++];)
                    if (c.getType() == a) { delete p[e]; break }
            }
            h()
        }

        function g() {
            p = {};
            h()
        }

        function i(a) {
            a &&
                a.ib() && (p[a.ja().jf()] = a)
        }

        function h() {
            if (q)
                for (var a = 0; a < q.length; ++a) q[a].reset()
        }

        function k(a, b) { return b.M() - a.M() }
        var p = {},
            q, v, s, n = {
                C: function(a) {
                    q = a.Q(151, n);
                    q.sort(k)
                },
                activate: function() { d() },
                getType: function() { return 133 },
                B: function() { return 21 },
                A: function() { return { put: a, get: c, Fi: b, Lc: e, na: d, Ei: f, Di: g } }
            };
        return n
    });
    Y.register(159, 190, function() {
        function a() { p && h.Uc(i) }

        function c() { p && h.Bb(i) }

        function b() { p && k.Uc(i) }

        function e() { p && k.Bb(i) }
        var d, f, g, i, h, k, p = r,
            q = {
                G: function(a, b) {
                    function c(a) { return ["box-shadow:", a, "-moz-box-shadow:", a, "-webkit-box-shadow:", a].join("") }
                    g = a;
                    b.addRule(".gsfe_a", ["border:1px solid #b9b9b9;border-top-color:#a0a0a0;", c("inset 0px 1px 2px rgba(0,0,0,0.1);")].join(""));
                    b.addRule(".gsfe_b", ["border:1px solid #4d90fe;outline:none;", c("inset 0px 1px 2px rgba(0,0,0,0.3);")].join(""))
                },
                C: function(a) {
                    d =
                        a.get(117, q);
                    f = a.get(118, q)
                },
                H: function(f) { var s = f.Nd; if (i = s ? g.gb(s) : l) d.oa(12, b), d.oa(13, e), d.S(i, "mouseover", a), d.S(i, "mouseout", c), h = cd(f.kg || "gsfe_a"), k = cd(f.jg || "gsfe_b") },
                activate: function() {
                    p = j;
                    i && f.Qh() && k.Uc(i)
                },
                getType: function() { return 159 },
                B: function() { return 190 },
                L: function() {
                    p = r;
                    i && (h.Bb(i), k.Bb(i))
                }
            };
        return q
    });

    function cd(a) { var c = RegExp("(?:^|\\s+)" + a + "(?:$|\\s+)"); return { Uc: function(b) { b && !c.test(b.className) && (b.className += " " + a) }, Bb: function(a) { a && (a.className = a.className.replace(c, " ")) } } };
    Y.register(152, 33, function() {
        function a(a) {
            p = a.ig;
            q = a.Id;
            v = a.Hd;
            s = a.Dd ? a.Tb : ""
        }

        function c(a) {
            function b() { $ && (s.fi(35), d.Qi(), M.onmouseover = M.onmouseout = M.onclick = l, z.style.display = "none", E.style.display = "", q.Ne() == I && n.ee(), q.Uh() == I && (q.Vh(), n.Ha()), U = r) }

            function c(a) {
                $ = j;
                e.de(W, b);
                return Mb(a)
            }
            var d = f,
                e = g,
                s = i,
                n = h,
                q = k,
                O = p,
                J = v,
                M, z, E, K, P, Q, H, W, I, U = j,
                $ = r;
            M = Eb();
            M.className = "gsq_a";
            H = Db();
            M.appendChild(H);
            z = H.insertRow(-1);
            var u = z.insertCell(-1);
            K = S("span");
            K.style.color = "#52188c";
            u.appendChild(K);
            if (0 != O) {
                Q = S("a");
                Q.href = "#ps";
                Q.className = "gspqs_a gssb_j";
                var T = z.insertCell(-1);
                T.appendChild(Q);
                (2 == O ? T : u).style.width = "100%";
                E = H.insertRow(-1);
                H = E.insertCell(-1);
                H.className = "gspqs_b";
                H.innerHTML = J;
                H.colSpan = "2"
            }
            return {
                J: function() { return M },
                getType: function() { return 35 },
                Y: function() { return U },
                I: function(b, d, e, f, g) {
                    $ = r;
                    U = j;
                    W = d;
                    I = e;
                    z.style.display = "";
                    K.innerHTML = b;
                    0 != O && (E.style.display = "none", Q.innerHTML = f, Q.onclick = c);
                    g && !P && (P = Pb(z), P.onclick = function(b) {
                        n.pb();
                        n.nb(W);
                        a.search(W, 9);
                        return Mb(b)
                    });
                    g ? (P.innerHTML = g + " &raquo;", P.style.display = "") : P && (P.style.display = "none")
                }
            }
        }

        function b(a, b) { b.I(a.Ea(), a.K(), a.ua(), q, s) }

        function e(a, b, c) { c.search(b.K(), 1) }

        function d() { return 35 }
        var f, g, i, h, k, p, q, v, s, n = {
            G: function(a, b) {
                b.addRule("a.gspqs_a", "padding:0 3px 0 8px");
                b.addRule(".gspqs_b", "color:#666;line-height:22px")
            },
            C: function(a) {
                i = a.get(123, n);
                h = a.get(118, n);
                g = a.get(189, n);
                f = a.get(127, n);
                k = a.get(128, n)
            },
            H: a,
            activate: a,
            getType: function() { return 152 },
            B: function() { return 33 },
            A: function() {
                return {
                    pa: c,
                    I: b,
                    Z: e,
                    qa: C,
                    ra: d
                }
            }
        };
        return n
    });
    Y.register(189, 188, function() {
        function a(a) {
            var b = {};
            if (g)
                if (f) b.tok = d;
                else if (q && k) {
                var c = q.Sc(a),
                    v = q.ef(k);
                a = q.ff(a, v);
                a = q.Sc(a);
                b.qe = c;
                b.qesig = a;
                b.pkc = p;
                g && (i && h && 828E5 < Ga() - h) && e.mf()
            }
            return b
        }

        function c(a, b) { e.hj(a, b) }

        function b(a) {
            k = a.websafe_signing_key;
            p = a.pkc;
            h = Ga()
        }
        var e, d, f, g, i, h, k, p, q, v = {
            C: function(a) {
                e = a.get(134, v);
                q = a.get(191, v)
            },
            activate: function(a) {
                f = "https:" == document.location.protocol || a.Fd;
                d = a.Za;
                a = !!a.ya[35];
                g = !(!e || !d || !a);
                i = !f;
                g && i && e.mf()
            },
            getType: function() { return 189 },
            B: function() { return 188 },
            A: function() { return { jj: a, de: c, ij: b } }
        };
        return v
    });
    Y.register(134, 186, function() {
        function a() {
            var a = [];
            Ta("callback", "google.sbox.hi" + h, a);
            b(k, a)
        }

        function c(a, c) {
            y[a] = c;
            var d = [];
            Ta("delq", a, d);
            Ta("client", s, d);
            Ta("callback", "google.sbox.d" + h, d);
            b(p, d)
        }

        function b(a, b) {
            Ta("tok", q, b);
            v && Ta("authuser", v, b);
            n = S("script");
            n.src = a + b.join("&");
            g.appendChild(n)
        }

        function e() { n && (g.removeChild(n), n = l) }

        function d(a) {
            e();
            i.ij(a)
        }

        function f(a) {
            e();
            a = a[0];
            var b = y[a];
            b && (delete y[a], b())
        }
        var g = nb(),
            i, h, k, p, q, v, s, n, y = {},
            w = {
                C: function(a) {
                    i = a.get(189, w);
                    h = a.Ba().getId()
                },
                H: function() {
                    var a = window.google.sbox;
                    a["hi" + h] = d;
                    a["d" + h] = f
                },
                activate: function(a) {
                    var b = a.Gd || "clients1." + a.dc;
                    k = "https://" + b + "/complete/init?";
                    p = "https://" + b + "/complete/deleteitems?";
                    q = a.Za;
                    v = a.kb;
                    s = a.Da
                },
                getType: function() { return 134 },
                B: function() { return 186 },
                A: function() { return { mf: a, hj: c } },
                L: function() { e() }
            };
        return w
    });
    Y.register(156, 187, function() {
        function a(a) {
            var c = b.jj(a.N()),
                e;
            for (e in c) a.setParameter(e, c[e]);
            return 1
        }

        function c() { return 12 }
        var b, e = { C: function(a) { b = a.get(189, e) }, getType: function() { return 156 }, B: function() { return 187 }, A: function() { return { xa: a, M: c } } };
        return e
    });
    Y.register(130, 22, function() {
        function a(a) {
            if (f(a)) return r;
            var b = z[E];
            k(b);
            z.push(a);
            z.sort(m);
            var c = B(a);
            G.Ui(a, c);
            b && h(b);
            t();
            return j
        }

        function c(b) {
            b = Wa(b || window.location.href);
            for (var c = z.length, d; d = z[--c];) d.dg(b) || p(d, r);
            for (c = 0; d = M[c++];)
                if (d = d.cg(b))
                    for (var e = 0, f; f = d[e++];) a(f)
        }

        function b() {
            for (var a = z.length, b; b = z[--a];)
                if (b = b.wd()) return b;
            return ""
        }

        function e() { return !!z.length }

        function d() { return -1 != E }

        function f(a) { return -1 != B(a) }

        function g(a) { return d() && B(a) == E }

        function i() {
            e() && h(z[z.length -
                1])
        }

        function h(a) {
            a = B(a);
            a != E && (d() && G.V(E), O.pb(), E = a, d() && G.Ia(E))
        }

        function k(a) { d() && (a = B(a), G.V(a), a == E && (E = -1)) }

        function p(a, b) {
            var c = B(a);
            if (-1 == c) return r;
            var d = z[E];
            k(d);
            z.splice(c, 1);
            G.Rc(c);
            d && h(d);
            t();
            a.remove(!!b);
            O.Ha();
            b && O.Lh();
            return j
        }

        function q() { 0 < E && (G.V(E), --E, G.Ia(E)) }

        function v() { d() && (E + 1 == z.length ? (G.V(E), E = -1, O.Ha()) : (G.V(E), ++E, G.Ia(E))) }

        function s() { p(z[E], j) }

        function n() { d() && (k(z[E]), O.Ha()) }

        function y() { return K }

        function w() {
            for (var a = 0, b; b = z[a++];)
                if (b.X()) return j;
            return r
        }

        function D() {
            for (var a = z.length, b; b = z[--a];)
                if (b = b.Ya()) return b;
            return ""
        }

        function A() { return z.slice(0) }

        function m(a, b) { return a.M() - b.M() }

        function B(a) {
            for (var b = 0, c = z.length; b < c; ++b)
                if (z[b].equals(a)) return b;
            return -1
        }

        function t() {
            for (var a = 0, b; b = z[a++];)
                if (b.Pb()) {
                    J.fb(r);
                    K = j;
                    return
                }
            J.fb(j);
            K = r
        }
        var G, O, J, M, z = [],
            E = -1,
            K = r,
            P = {
                C: function(a) {
                    G = a.get(131, P);
                    O = a.get(118, P);
                    J = a.get(128, P);
                    M = a.Q(155, P)
                },
                activate: function() { c() },
                getType: function() { return 130 },
                B: function() { return 22 },
                A: function() {
                    return {
                        F: a,
                        Xa: c,
                        wd: b,
                        R: e,
                        U: d,
                        Lb: f,
                        $: g,
                        Oe: i,
                        select: h,
                        Si: k,
                        Rc: p,
                        df: q,
                        cf: v,
                        Ti: s,
                        Ri: n,
                        Pb: y,
                        X: w,
                        Ya: D,
                        Yi: A
                    }
                }
            };
        return P
    });
    Y.register(156, 112, function() {
        function a() { for (var a = b.DONT_CARE, c = e.Yi(), d = 0; c[d++];); return a }

        function c() { return 11 }
        var b = mc,
            e, d = { C: function(a) { e = a.get(130, d) }, activate: function() {}, getType: function() { return 156 }, B: function() { return 112 }, A: function() { return { xa: a, M: c } } };
        return d
    });
    Y.register(131, 23, function() {
        function a(a, b) {
            function c() {
                var a = S("span", "gscp_e");
                g.appendChild(a)
            }
            var e, g = S("a", "gscp_a");
            p && (g.style.margin = p + "px");
            k && (g.style.height = g.style.lineHeight = k + "px");
            g.href = "#";
            g.onclick = function() { i.defer(function() { f.select(a) }); return r };
            g.onfocus = function() { f.select(a) };
            g.onblur = function() { f.Si(a) };
            g.onkeydown = d;
            var q = a.Ld();
            q && (e = S("img", "gscp_f"), e.src = q, e.width = 24, e.height = 24, 24 < k && (e.style.marginBottom = (k - 24) / 2 + "px"), g.appendChild(e));
            c();
            e = S("span", "gscp_c");
            Vb(e, a.Kd());
            g.appendChild(e);
            a.gc() ? (e = S("span", "gscp_d"), e.innerHTML = "&times;", e.onclick = function(b) { f.Rc(a, j); return Mb(b) }, g.appendChild(e)) : c();
            h && (b >= h.childNodes.length ? h.appendChild(g) : h.insertBefore(g, h.childNodes[b]))
        }

        function c(a) { if (a = h.childNodes[a]) a.className = "gscp_a gscp_b", a.focus() }

        function b(a) { if (a = h.childNodes[a]) a.className = "gscp_a" }

        function e(a) { h.removeChild(h.childNodes[a]) }

        function d(a) {
            a = a || window.event;
            var b = a.keyCode,
                c = "rtl" == g.qb();
            switch (b) {
                case 37:
                    c ? f.cf() : f.df();
                    break;
                case 39:
                    c ? f.df() : f.cf();
                    break;
                case 46:
                case 8:
                    f.Ti();
                    break;
                case 27:
                case 32:
                    f.Ri();
                default:
                    return
            }
            Mb(a)
        }
        var f, g, i, h, k, p, q = {
            G: function(a, b) {
                b.addRule(".gscp_a,.gscp_c,.gscp_d,.gscp_e,.gscp_f", "display:inline-block;vertical-align:bottom");
                b.addRule(".gscp_f", "border:none");
                b.addRule(".gscp_a", ["background:#d9e7fe;border:1px solid #9cb0d8;cursor:default;outline:none;text-decoration:none!important;", b.prefix("user-select:none;")].join(""));
                b.addRule(".gscp_a:hover", "border-color:#869ec9");
                b.addRule(".gscp_a.gscp_b",
                    "background:#4787ec;border-color:#3967bf");
                b.addRule(".gscp_c", "color:#444;font-size:13px;font-weight:bold");
                b.addRule(".gscp_d", "color:#aeb8cb;cursor:pointer;font:21px arial,sans-serif;line-height:inherit;padding:0 7px");
                if (cc || dc && ec) b.addRule(".gscp_d", "position:relative;top:1px"), xb && b.addRule(".gscp_c", "position:relative;top:1px");
                b.addRule(".gscp_a:hover .gscp_d", "color:#575b66");
                b.addRule(".gscp_c:hover,.gscp_a .gscp_d:hover", "color:#222");
                b.addRule(".gscp_a.gscp_b .gscp_c,.gscp_a.gscp_b .gscp_d",
                    "color:#fff");
                b.addRule(".gscp_e", "height:100%;padding:0 4px")
            },
            C: function(a) {
                f = a.get(130, q);
                g = a.get(118, q);
                i = a.get(117, q)
            },
            H: function(a) { a.ma[130] && (p = a.Jd, h = g.Ec(), (a = a.cb) && (k = a - 2 * (p + 1))) },
            getType: function() { return 131 },
            B: function() { return 23 },
            A: function() { return { Ui: a, Ia: c, V: b, Rc: e } }
        };
        return q
    });
    Y.register(151, 98, function() {
        function a() { return 3 }

        function c(a) {
            if (d) {
                var b = a.ja(),
                    c = a.T();
                if (c.length) {
                    var e = b.la();
                    a: for (var b = Number.MAX_VALUE, h, i = 0; h = c[i++];) {
                        if (!f[h.getType()]) { b = -1; break a }
                        h = h.K();
                        b = Math.min(h.length, b)
                    }
                    if (-1 != b) {
                        var k = c[0].K();
                        if (kb(k, e, j))
                            for (i = e.length + 1; i <= b;) {
                                e = l;
                                for (h = 0; k = c[h++];) {
                                    k = k.K();
                                    if (i > k.length) return;
                                    k = k.substr(0, i);
                                    if (e) { if (e != k) return } else e = k
                                }
                                g[e] = a;
                                ++i
                            }
                    }
                }
            }
        }

        function b(a) {
            if (d) {
                var b = g[a.la()];
                if (b) {
                    var c = a.gf(),
                        e = a.la();
                    b.ja().la();
                    for (var f = b.D(), k = h || !f.ka("k"),
                            w = [], D, A, m = b.T(), B = 0, t; t = m[B++];) A = t.K(), D = k ? i.bold(c, A) : Ya(A), w.push(Gc(D, A, t.ua(), t.getType(), t.yb(), t.D()));
                    delete g[e];
                    return Ec(a, a.N(), w, f, j, b.ib(), j, r)
                }
            }
            return l
        }

        function e() { g = {} }
        var d = j,
            f, g = {},
            i, h, k = {
                C: function(a) { i = a.get(150, k) },
                H: function() { f = Ba([0]) },
                activate: function(a) {
                    h = a.Zb;
                    d = a.vd
                },
                getType: function() { return 151 },
                B: function() { return 98 },
                A: function() { return { M: a, update: c, get: b, reset: e } },
                L: function() { d = r }
            };
        return k
    });
    Y.register(152, 31, function() {
        function a() {
            var a;
            a = Eb();
            a.className = "gspr_a";
            return { getType: function() { return 33 }, J: function() { return a }, Y: function() { return j }, I: function(b, c) { a.innerHTML = c } }
        }

        function c(a, b) {
            var c = a.D(),
                e = c.getString("a"),
                c = c.getString("b"),
                h = a.K();
            b.I(e, c, h)
        }

        function b(a, b, c) { c.search(b.K(), 1) }

        function e() { return 33 }
        return { G: function(a, b) { b.addRule(".gspr_a", "padding-right:1px") }, getType: function() { return 152 }, B: function() { return 31 }, A: function() { return { pa: a, I: c, Z: b, qa: C, ra: e } } }
    });
    Y.register(152, 20, function() {
        function a(a) {
            var b = d,
                c, e, f, g, s;
            c = Eb();
            c.className = "gsq_a";
            var n = Db();
            c.appendChild(n);
            e = n.insertRow(-1);
            n = e.insertCell(-1);
            n.style.width = "100%";
            f = S("span");
            n.appendChild(f);
            return {
                J: function() { return c },
                getType: function() { return 0 },
                Y: function() { return j },
                I: function(c, d, k) {
                    f.innerHTML = c;
                    s = d;
                    k && !g && (g = Pb(e), g.onclick = function(c) {
                        b.pb();
                        b.nb(s);
                        a.search(s, 9);
                        return Mb(c)
                    });
                    k ? (g.innerHTML = k + " &raquo;", g.style.display = "") : g && (g.style.display = "none")
                }
            }
        }

        function c(a, b) {
            b.I(a.Ea(),
                a.K(), f)
        }

        function b(a, b, c) { c.search(b.K(), 1) }

        function e() { return 0 }
        var d, f, g = { G: function(a, b) { b.addRule(".gsq_a", "padding:0") }, C: function(a) { d = a.get(118, g) }, activate: function(a) { f = a.Dd ? a.Tb : "" }, getType: function() { return 152 }, B: function() { return 20 }, A: function() { return { pa: a, I: c, Z: b, qa: C, ra: e } } };
        return g
    });
    Y.register(157, 342, function() {
        function a(a) {
            for (var b = 0, e; e = a[b]; ++b)
                if (51 == e.getType()) { a.splice(b, 0, 3); return }
            1 < a.length && 408 == a[0].getType() && a.splice(1, 0, 3)
        }
        return { getType: function() { return 157 }, B: function() { return 342 }, A: function() { return { ci: a } } }
    });
    Y.register(160, 78, function() {
        function a() { return s }

        function c() { return 78 }

        function b() { return 1 }

        function e() { return A }

        function d(a) { if (B) { if (n.onclick) n.onclick(a) } else a = document.createElement("script"), a.src = ["//www.google.com/textinputassistant/", D, "/", w, "_tia.js"].join(""), document.body.appendChild(a), B = j, p.add(3) }

        function f() { q.hb() }

        function g() { v.Li() }

        function i(a) { v.Mi(78, a) }

        function h(a) { v.Ni(78, a) }

        function k(a) { A.className = "gsok_a gsst_e " + a }
        var p, q, v, s, n, y, w, D, A, m, B, t = {
            G: function(a, b) {
                m =
                    a;
                a.$b() || (b.addRule(".gsok_a", "background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"), b.addRule(".gsok_a img", "border:none;visibility:hidden"))
            },
            C: function(a) {
                p = a.get(374, t);
                q = a.get(128, t);
                v = a.get(173, t)
            },
            H: function(a) {
                s = !!a.za;
                y = a.Od;
                w = a.$a;
                D = a.lg;
                (A = m.get("gs_ok")) ? n = A.firstChild: (n = S("img"), n.src = y + "/tia.png", A = S("span", "gsok_a gsst_e"),
                    A.id = m.getId("gs_ok"), A.appendChild(n));
                n.ds = f;
                n.hd = g;
                n.sc = k;
                n.sd = i;
                n.td = h;
                n.setAttribute("tia_field_name", m.$d().name);
                n.setAttribute("tia_disable_swap", j)
            },
            activate: function(a) {
                a.Ob && (s = !!a.za);
                n.setAttribute("tia_property", a.Pd)
            },
            getType: function() { return 160 },
            B: function() { return 78 },
            A: function() { return { isEnabled: a, Ze: c, M: b, J: e, Z: d } }
        };
        return t
    });
    Y.register(173, 174, function() {
        function a() { return 174 }

        function c(a) { W != a && (J.dir = W = a, f()) }

        function b() { return J }

        function e(a) { if ((a = z[a]) && a.style) a.style.display = "" }

        function d(a) { if ((a = z[a]) && a.style) a.style.display = "none" }

        function f() { E && (z[E].className = "gsst_a", m.La(), E = l) }

        function g(a, b) {
            E = a;
            var c = z[a];
            c.className = "gsst_a gsst_g";
            var d = K.lastChild;
            d != b && (d == P ? K.appendChild(b) : K.replaceChild(b, d));
            m.setPanel(174);
            m.show();
            c = c.clientWidth;
            P.style.width = c + "px";
            P.style.left = "rtl" == W ? "0" : K.clientWidth -
                c + "px"
        }

        function i(a, b) { E == a ? f() : g(a, b) }

        function h(a) {
            a.Jc = "rtl" == W ? "left" : "right";
            a.Ve = r
        }

        function k() { return K }

        function p() { return O.od || H == W ? I : l }

        function q() { f() }

        function v() { return 174 }

        function s(a, b) { return b.M() - a.M() }

        function n() { Q != E && f() }

        function y() {
            for (var a, b = 0, c; c = G[b++];)
                if (c.isEnabled()) {
                    a = j;
                    var d = S("a", "gsst_a");
                    A(d, c);
                    d.appendChild(c.J());
                    J.appendChild(d)
                }
            J.style.display = a ? "" : "none"
        }

        function w() { Q = l }

        function D() {
            z = {};
            for (var a = 0, b; b = G[a++];)
                if (b.isEnabled()) {
                    var c = b.Ze(),
                        e = b.J().parentNode;
                    e.onclick = b.Z;
                    e.onmouseover = function() { Q = c };
                    e.onmouseout = w;
                    z[c] = e;
                    b.Vi && b.Vi().mk && d(c)
                }
        }

        function A(a, b) {
            a.href = "javascript:void(0)";
            a.onkeydown = function(a) { a = a || window.event; var c = a.keyCode; if (13 == c || 32 == c) b.Z(a), t.Ha(), Mb(a) }
        }
        var m, B, t, G, O, J, M, z = {},
            E, K, P, Q, H, W, I, U, $ = {
                G: function(a, b) {
                    M = a;
                    H = a.Ca();
                    a.$b() || (b.addRule(".gsst_a", "display:inline-block"), b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"), b.addRule(".gsst_a:hover", "text-decoration:none!important"), b.addRule(".gsst_b", ["font-size:16px;padding:0 2px;",
                        b.prefix("user-select:none;"), "white-space:nowrap"
                    ].join("")), b.addRule(".gsst_e", Ub(0.55)), b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", Ub(0.72)), b.addRule(".gsst_a:active .gsst_e", Ub(1)), b.addRule(".gsst_f", "background:white;text-align:left"), b.addRule(".gsst_g", ["background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;", b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);"), "margin:-1px -3px;padding:0 6px"].join("")), b.addRule(".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))
                },
                C: function(a) {
                    m = a.get(115, $);
                    B = a.get(117, $);
                    t = a.get(118, $);
                    G = a.Q(160, $)
                },
                H: function(a) {
                    U = a.Ob;
                    G.sort(s);
                    J = M.get("gs_st");
                    if (!J) {
                        J = Eb("gsst_b");
                        J.id = M.getId("gs_st");
                        if (a = a.cb) J.style.lineHeight = a + "px";
                        y()
                    }
                    D()
                },
                activate: function(a) {
                    O = a;
                    (a = a.Rb) && (I = M.gb(a));
                    if (U) {
                        a = 0;
                        for (var b; b = G[a++];) {
                            var c = !!z[b.Ze()];
                            if (b.isEnabled() != c) {
                                J.innerHTML = "";
                                y();
                                D();
                                break
                            }
                        }
                    }
                    P = Eb("gsst_h");
                    K = Eb("gsst_f");
                    K.dir = "ltr";
                    K.appendChild(P);
                    B.oa(13, n)
                },
                getType: function() { return 173 },
                B: a,
                A: function() {
                    return {
                        Bc: c,
                        J: b,
                        R: e,
                        F: d,
                        Li: f,
                        Mi: g,
                        Ni: i
                    }
                },
                ga: function() { var b = { Pe: h, J: k, sb: p, Qe: q, Ja: C, Kc: v }; return [{ G: C, C: C, H: C, activate: C, getType: function() { return 154 }, B: a, A: function() { return b }, ga: C, L: C }] }
            };
        return $
    });
    var dd = {
        AED: [2, "dh", "\u062f.\u0625.", "DH"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [0, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [2, "K\u010d", "K\u010d"],
        DKK: [18, "kr", "kr"],
        DOP: [2, "$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        EUR: [18, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        ILS: [2, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [18, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "Php"],
        PKR: [0, "Rs", "PKRs."],
        RUB: [2, "Rup", "Rup"],
        SAR: [2, "Rial", "Rial"],
        SEK: [2, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "TL", "YTL"],
        TWD: [2, "NT$", "NT$"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "UY$"],
        VND: [0, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var ed = { sf: ".", tf: ",", vf: "%", Yc: "0", Aj: "+", zj: "-", uf: "E", wf: "\u2030", Xc: "\u221e", xj: "NaN", pj: "#,##0.###", sj: "#E0", rj: "#,##0%", oj: "\u00a4#,##0.00;(\u00a4#,##0.00)", qj: "USD" },
        fd = ed,
        fd = ed;

    function gd(a, c, b) {
        this.sa = c || fd.qj;
        this.nj = b || 0;
        this.Db = 40;
        this.F = 1;
        this.Wc = 3;
        this.Cb = this.Oa = 0;
        this.qf = r;
        this.Na = this.U = "";
        this.R = "-";
        this.$ = "";
        this.Pa = 1;
        this.Vc = 3;
        this.Eb = this.pf = r;
        if ("number" == typeof a) switch (a) {
            case 1:
                hd(this, fd.pj);
                break;
            case 2:
                hd(this, fd.sj);
                break;
            case 3:
                hd(this, fd.rj);
                break;
            case 4:
                a = fd.oj;
                c = ["0"];
                b = dd[this.sa][0] & 7;
                if (0 < b) { c.push("."); for (var e = 0; e < b; e++) c.push("0") }
                a = a.replace(/0.00/g, c.join(""));
                hd(this, a);
                break;
            default:
                throw Error("Unsupported pattern type.");
        } else hd(this,
            a)
    }

    function hd(a, c) {
        c.replace(/ /g, "\u00a0");
        var b = [0];
        a.U = id(a, c, b);
        for (var e = b[0], d = -1, f = 0, g = 0, i = 0, h = -1, k = c.length, p = j; b[0] < k && p; b[0]++) switch (c.charAt(b[0])) {
            case "#":
                0 < g ? i++ : f++;
                0 <= h && 0 > d && h++;
                break;
            case "0":
                if (0 < i) throw Error('Unexpected "0" in pattern "' + c + '"');
                g++;
                0 <= h && 0 > d && h++;
                break;
            case ",":
                h = 0;
                break;
            case ".":
                if (0 <= d) throw Error('Multiple decimal separators in pattern "' + c + '"');
                d = f + g + i;
                break;
            case "E":
                if (a.Eb) throw Error('Multiple exponential symbols in pattern "' + c + '"');
                a.Eb = j;
                a.Cb = 0;
                b[0] + 1 <
                    k && "+" == c.charAt(b[0] + 1) && (b[0]++, a.qf = j);
                for (; b[0] + 1 < k && "0" == c.charAt(b[0] + 1);) b[0]++, a.Cb++;
                if (1 > f + g || 1 > a.Cb) throw Error('Malformed exponential pattern "' + c + '"');
                p = r;
                break;
            default:
                b[0]--, p = r
        }
        0 == g && (0 < f && 0 <= d) && (g = d, 0 == g && g++, i = f - g, f = g - 1, g = 1);
        if (0 > d && 0 < i || 0 <= d && (d < f || d > f + g) || 0 == h) throw Error('Malformed pattern "' + c + '"');
        i = f + g + i;
        a.Wc = 0 <= d ? i - d : 0;
        0 <= d && (a.Oa = f + g - d, 0 > a.Oa && (a.Oa = 0));
        a.F = (0 <= d ? d : i) - f;
        a.Eb && (a.Db = f + a.F, 0 == a.Wc && 0 == a.F && (a.F = 1));
        a.Vc = Math.max(0, h);
        a.pf = 0 == d || d == i;
        e = b[0] - e;
        a.Na = id(a, c, b);
        b[0] < c.length && ";" == c.charAt(b[0]) ? (b[0]++, a.R = id(a, c, b), b[0] += e, a.$ = id(a, c, b)) : (a.R = a.U + a.R, a.$ += a.Na)
    }
    gd.prototype.parse = function(a, c) {
        var b = c || [0],
            e = NaN;
        a = a.replace(/ /g, "\u00a0");
        var d = a.indexOf(this.U, b[0]) == b[0],
            f = a.indexOf(this.R, b[0]) == b[0];
        d && f && (this.U.length > this.R.length ? f = r : this.U.length < this.R.length && (d = r));
        d ? b[0] += this.U.length : f && (b[0] += this.R.length);
        if (a.indexOf(fd.Xc, b[0]) == b[0]) b[0] += fd.Xc.length, e = Infinity;
        else {
            for (var e = a, g = r, i = r, h = r, k = 1, p = fd.sf, q = fd.tf, v = fd.uf, s = ""; b[0] < e.length; b[0]++) {
                var n = e.charAt(b[0]),
                    y = jd(n);
                if (0 <= y && 9 >= y) s += y, h = j;
                else if (n == p.charAt(0)) {
                    if (g || i) break;
                    s += ".";
                    g = j
                } else if (n == q.charAt(0) && ("\u00a0" != q.charAt(0) || b[0] + 1 < e.length && 0 <= jd(e.charAt(b[0] + 1)))) { if (g || i) break } else if (n == v.charAt(0)) {
                    if (i) break;
                    s += "E";
                    i = j
                } else if ("+" == n || "-" == n) s += n;
                else if (n == fd.vf.charAt(0)) {
                    if (1 != k) break;
                    k = 100;
                    if (h) { b[0]++; break }
                } else if (n == fd.wf.charAt(0)) {
                    if (1 != k) break;
                    k = 1E3;
                    if (h) { b[0]++; break }
                } else break
            }
            e = parseFloat(s) / k
        }
        if (d) {
            if (a.indexOf(this.Na, b[0]) != b[0]) return NaN;
            b[0] += this.Na.length
        } else if (f) {
            if (a.indexOf(this.$, b[0]) != b[0]) return NaN;
            b[0] += this.$.length
        }
        return f ?
            -e : e
    };

    function kd(a, c) {
        if (isNaN(c)) return fd.xj;
        var b = [],
            e = 0 > c || 0 == c && 0 > 1 / c;
        b.push(e ? a.R : a.U);
        if (isFinite(c))
            if (c = c * (e ? -1 : 1) * a.Pa, a.Eb) {
                var d = c;
                if (0 == d) ld(a, d, a.F, b), md(a, 0, b);
                else {
                    var f = Math.floor(Math.log(d) / Math.log(10)),
                        d = d / Math.pow(10, f),
                        g = a.F;
                    if (1 < a.Db && a.Db > a.F) {
                        for (; 0 != f % a.Db;) d *= 10, f--;
                        g = 1
                    } else 1 > a.F ? (f++, d /= 10) : (f -= a.F - 1, d *= Math.pow(10, a.F - 1));
                    ld(a, d, g, b);
                    md(a, f, b)
                }
            } else ld(a, c, a.F, b);
        else b.push(fd.Xc);
        b.push(e ? a.$ : a.Na);
        return b.join("")
    }

    function ld(a, c, b, e) {
        var d = Math.pow(10, a.Wc),
            f = Math.round(c * d),
            g;
        isFinite(f) ? (c = Math.floor(f / d), g = Math.floor(f - c * d)) : g = 0;
        for (var i = 0 < a.Oa || 0 < g, h = "", f = c; 1E20 < f;) h = "0" + h, f = Math.round(f / 10);
        var h = f + h,
            k = fd.sf,
            p = fd.tf,
            f = fd.Yc.charCodeAt(0),
            q = h.length;
        if (0 < c || 0 < b) { for (c = q; c < b; c++) e.push(String.fromCharCode(f)); for (c = 0; c < q; c++) e.push(String.fromCharCode(f + 1 * h.charAt(c))), 1 < q - c && (0 < a.Vc && 1 == (q - c) % a.Vc) && e.push(p) } else i || e.push(String.fromCharCode(f));
        (a.pf || i) && e.push(k);
        b = "" + (g + d);
        for (d = b.length;
            "0" == b.charAt(d -
                1) && d > a.Oa + 1;) d--;
        for (c = 1; c < d; c++) e.push(String.fromCharCode(f + 1 * b.charAt(c)))
    }

    function md(a, c, b) {
        b.push(fd.uf);
        0 > c ? (c = -c, b.push(fd.zj)) : a.qf && b.push(fd.Aj);
        c = "" + c;
        for (var e = fd.Yc, d = c.length; d < a.Cb; d++) b.push(e);
        b.push(c)
    }

    function jd(a) { a = a.charCodeAt(0); if (48 <= a && 58 > a) return a - 48; var c = fd.Yc.charCodeAt(0); return c <= a && a < c + 10 ? a - c : -1 }

    function id(a, c, b) {
        for (var e = "", d = r, f = c.length; b[0] < f; b[0]++) {
            var g = c.charAt(b[0]);
            if ("'" == g) b[0] + 1 < f && "'" == c.charAt(b[0] + 1) ? (b[0]++, e += "'") : d = !d;
            else if (d) e += g;
            else switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return e;
                case "\u00a4":
                    if (b[0] + 1 < f && "\u00a4" == c.charAt(b[0] + 1)) b[0]++, e += a.sa;
                    else switch (a.nj) {
                        case 0:
                            e += dd[a.sa][1];
                            break;
                        case 2:
                            var g = a.sa,
                                i = dd[g],
                                e = e + (g == i[1] ? g : g + " " + i[1]);
                            break;
                        case 1:
                            e += dd[a.sa][2]
                    }
                    break;
                case "%":
                    if (1 != a.Pa) throw Error("Too many percent/permill");
                    a.Pa = 100;
                    e += fd.vf;
                    break;
                case "\u2030":
                    if (1 != a.Pa) throw Error("Too many percent/permill");
                    a.Pa = 1E3;
                    e += fd.wf;
                    break;
                default:
                    e += g
            }
        }
        return e
    };

    function nd(a) { var c = arguments.length; if (1 == c && "array" == va(arguments[0])) return nd.apply(l, arguments[0]); if (c % 2) throw Error("Uneven number of arguments"); for (var b = {}, e = 0; e < c; e += 2) b[arguments[e]] = arguments[e + 1]; return b };
    hc = function(a, c, b, e) {
        b || (b = "/channel/" + c);
        a = b + "/videos?query=" + a;
        e && (e = Qa(e)) && (a += "&" + e);
        return a
    };
    gc = function(a, c) {
        switch (c) {
            case 0:
                return "/channel/UC" + a;
            case 1:
                return "/topic/" + a
        }
    };
    fc = function(a, c) {
        switch (c) {
            case 0:
                return "http://i4.ytimg.com/i/" + a + "/1.jpg";
            case 1:
                return "http://i4.ytimg.com/li/" + a + "/default.jpg"
        }
    };
    window.google || (window.google = {});
    window.google.sbox = function(a, c, b, e) {
        function d(a) { return ga[a] || f }

        function f() {}

        function g() { m.L() }

        function i(a) { M.Ib(a || "") }

        function h() { return T }

        function k() { return u }

        function p() { return M.ca() }

        function q() { return I.fa() }

        function v() { O.P(8) }

        function s(a) { return K.D(a) }

        function n() { return L || !!t && t.X() }

        function y() { return E.eh() }

        function w(a) {
            a = sb(a);
            a.ya[35] || (a.Za = "");
            var b = a.$a;
            b ? a.$a = b.toLowerCase() : a.za = r;
            dc || (a.dd = r);
            return a
        }

        function D(a) {
            var b = a.ma,
                c = b[135],
                d = b[137],
                e = b[240],
                f = b[138],
                g =
                b[139],
                e = d || f || e;
            b[136] || g || c || e ? (a.ma[136] = j, a.ma[141] = j, e ? (a = Fa(a.Va), !d || Yb && (bc || a) || xb && a ? (T = 3, b[137] = r, b[142] = r) : T = 2) : T = 1) : T = 0
        }
        var A, m, B, t, G, O, J, M, z, E, K, P, Q, H, W, I, U, $, u, T, ja = r,
            L, R = {
                a: function(b) {
                    if (!ja) {
                        b = w(b);
                        var d = Zc(a),
                            e;
                        a: {
                            if (a)
                                for (var f = a; f = f.parentNode;) { var g = f.dir; if (g) { e = g; break a } }
                            e = "ltr"
                        }
                        var h = !!d.getElementById("gs_id" + u),
                            f = ["gssb_c", "gssb_k"];
                        b.Kb && f.push(b.Kb);
                        var i, k = b.Df,
                            n = b.Bf,
                            p = b.Af,
                            q = Yb ? "-moz-" : xb ? "-ms-" : vb ? "-o-" : Zb ? "-webkit-" : "",
                            s = ".gstl_" + u,
                            y = RegExp("(\\.(" + f.join("|") +
                                ")\\b)"),
                            N = [];
                        i = {
                            addRule: function(a, b) {
                                if (n) {
                                    if (p) {
                                        for (var c = a.split(","), d = [], e = 0, f; f = c[e++];) f = y.test(f) ? f.replace(y, s + "$1") : s + " " + f, d.push(f);
                                        a = d.join(",")
                                    }
                                    N.push(a, "{", b, "}")
                                }
                            },
                            Fh: function() {
                                if (n && N.length) {
                                    n = r;
                                    var a = S("style");
                                    a.setAttribute("type", "text/css");
                                    (k || nb()).appendChild(a);
                                    var b = N.join("");
                                    N = l;
                                    a.styleSheet ? a.styleSheet.cssText = b : a.appendChild(document.createTextNode(b))
                                }
                            },
                            prefix: function(a, b) {
                                var c = [a, b || ""];
                                q && (c = c.concat(b ? [a, q, b] : [q, a]));
                                return c.join("")
                            }
                        };
                        D(b);
                        L = b.X;
                        var T = A,
                            f = b.Aa || {},
                            V = { $b: function() { return h }, get: function(a) { return d.getElementById(a + u) }, gb: function(a) { return d.getElementById(a) }, he: function() { return c }, Ca: function() { return e }, getId: function(a) { return a + u }, $d: function() { return a } },
                            ga = R,
                            Z = function() {
                                if (Pa) {
                                    for (var a = 0, b; b = Da[a++];) b.L && b.L();
                                    Pa = r
                                }
                            },
                            qa = function(a) {
                                for (var b in a) {
                                    var c = b,
                                        d = a[c];
                                    if (d != sa.se)
                                        if (ua[c]) {
                                            for (var e = Na[c] || [], f = 0, g = ka; f < d.length; ++f)(g = ib(c, d[f])) && e.push(g);
                                            Na[c] = e
                                        } else(d = ib(c, d)) && (hb[c] = d)
                                }
                            },
                            ib = function(a, b) {
                                var c;
                                if (b &&
                                    b instanceof Object) c = b;
                                else if (c = Ua.getInstance(a, b), !c) return l;
                                if (c.ga) {
                                    var d = c.ga();
                                    if (d)
                                        for (var e = 0, f, g, h; f = d[e++];) {
                                            h = r;
                                            g = f.getType();
                                            if (ua[g]) {
                                                if (h = $a[g]) { h.push(f); continue }
                                                h = j
                                            }
                                            $a[g] = h ? [f] : f
                                        }
                                }
                                gb.push([c, a]);
                                Da.push(c);
                                c.G && c.G(V, i);
                                return c
                            },
                            jb = function(a) { for (var b = 0, c = 0, d; d = gb[c++];) d[0] == a && (b = d[1]); return b },
                            sa = pc,
                            ua = Ba([X.oe, X.pe, X.re, X.Ae, X.ih, X.oh, X.RENDERER, X.th, X.wh, X.De, X.yh, X.Je]),
                            ba = [X.hh, X.jh, X.ve, X.we, X.xe, X.Fe, X.te, X.ue, X.ye, X.ze, X.Be, X.uh, X.vh, X.Ce, X.Ee, X.xh, X.Ge, X.He, X.Bh,
                                X.Ie
                            ],
                            Ca = [X.Ge, X.re, X.rh, X.Ce, X.Be, X.Fe, X.ve, X.te, X.He, X.Je, X.Eh, X.we, X.ue, X.RENDERER, X.Ae, X.Ie, X.ye, X.xe, X.Ee, X.De, X.pe, X.gh, X.fh, X.ze, X.nh, X.qh, X.ph, X.sh, X.Ah, X.zh, X.Dh, X.Ch, X.lh, X.kh, X.mh],
                            hb = {},
                            Na = {},
                            $a = {},
                            gb = [],
                            Da = [],
                            Pa = r,
                            Ua = Y,
                            g = {
                                activate: function(a) {
                                    Z();
                                    for (var b = 0, c; c = Da[b++];) c.activate && c.activate(a);
                                    Pa = j
                                },
                                L: Z,
                                Lb: function() { return Pa },
                                get: function(a, b) { var c = hb[a]; if (c) return c.A ? c.A(jb(b)) : {} },
                                Q: function(a, b) { var c = Na[a]; if (c) { for (var d = [], e = jb(b), f = 0, g; g = c[f++];) d.push(g.A ? g.A(e) : {}); return d } return [] },
                                ia: function() { return T },
                                Ba: function() { return ga },
                                F: function(a, b) {
                                    var c = Na[X.oe];
                                    if (c)
                                        for (var d = 0, e; e = c[d++];)
                                            if (e.B() == a) return e.A ? e.A(jb(b)) : {};
                                    return l
                                }
                            };
                        if (b.yf) {
                            var oa = Ua.Gh(),
                                ra, Za, Ma, Ia;
                            for (Ia in oa) {
                                var wb = Ia;
                                ra = oa[wb];
                                Za = ua[wb];
                                if (Ma = f[wb]) {
                                    if (Ma != sa.se && Za && Ma.length) {
                                        Za = f;
                                        Ma = Ma.slice(0);
                                        for (var sc = [], tc = {}, ab = 0, fb = ka, Ob = ka; Ob = Ma[ab++];) Ob instanceof Object && (fb = Ob.B(), tc[fb] || (sc.push(Ob), tc[fb] = 1), Ma.splice(--ab, 1));
                                        ab = Ba(Ma);
                                        ab[sa.Ke] && (ab = Ba(Ma.concat(ra)), delete ab[sa.Ke]);
                                        for (fb in ab) tc[fb] ||
                                            sc.push(parseInt(fb, 10));
                                        Za[wb] = sc
                                    }
                                } else f[wb] = Za ? ra : ra[0]
                            }
                        }
                        qa(f);
                        for (Ia = 0; oa = ba[Ia++];) f[oa] || (Za = ib(oa, ka)) && (hb[oa] = Za);
                        qa($a);
                        Da.sort(function(a, b) {
                            var c = La(a.getType(), Ca),
                                d = La(b.getType(), Ca);
                            return 0 > c ? 1 : 0 > d ? -1 : c - d
                        });
                        for (Ia = 0; f = Da[Ia++];) f.C && f.C(g);
                        for (Ia = 0; f = Da[Ia++];) f.H && f.H(b);
                        for (Ia = 0; f = Da[Ia++];) f.activate && f.activate(b);
                        Pa = j;
                        m = g;
                        A.Ic(i, h);
                        i.Fh();
                        B = m.get(347, R);
                        t = m.get(130, R);
                        G = m.get(115, R);
                        O = m.get(117, R);
                        J = m.get(123, R);
                        M = m.get(118, R);
                        z = m.get(119, R);
                        E = m.get(374, R);
                        K = m.get(120, R);
                        P = m.get(189,
                            R);
                        Q = m.get(246, R);
                        H = m.get(419, R);
                        W = m.get(126, R);
                        I = m.get(128, R);
                        U = m.get(139, R);
                        $ = m.get(121, R);
                        var uc = Xb(a),
                            yc = Rb(uc);
                        O.mb(uc, "resize", function() { var a = Rb(uc); if (a.ne != yc.ne || a.me != yc.me) yc = a, v() });
                        ja = j
                    }
                },
                b: function(a) {
                    g();
                    a = w(a);
                    D(a);
                    L = a.X;
                    m.activate(a)
                },
                c: g,
                d: function() { return c },
                e: function(a, b) { return Kb(a, b) },
                f: function() { return M.W() },
                g: p,
                h: function() { return I.ea() },
                i: function() { return I.wa() },
                j: s,
                k: function(a, b) { a || (a = K.D(b)); return Qa(a) },
                l: function() { return I.isVisible() },
                m: function() { return I.Ng() },
                n: function(a, b) { O.mb(a, "click", function(a) { $.search(p(), b); return Yc(a) }) },
                o: function() { J.Ta() },
                p: function() { I.hb() },
                q: function(a) { M.cd(a || "") },
                r: function() { return G.getHeight() },
                s: function() { M.clear() },
                t: function(a) { return J.Ua(a) },
                u: function() { M.$c() },
                v: function() { z.focus() },
                w: function() { z.blur() },
                x: function() { return J.ed() },
                y: function() { var a = W.da(); return a ? Ea(a.ge()) : l },
                z: i,
                aa: function(a) { a = J.fd(a, l); return Ea(a.ge()) },
                ab: function() { K.reset() },
                ad: function(a, b) { $.search(a, b) },
                ae: function() {
                    U &&
                        U.refresh()
                },
                af: function(a) { I.fb(a) },
                ag: function() { I.Sa() },
                ah: q,
                ai: v,
                al: function() { M.Zc() },
                am: function() { return m && m.Lb() },
                an: function(a) { t && t.Xa(a) },
                ao: n,
                ap: function() { return n() && t ? t.Ya() : "" },
                aq: function(a, b) { return Xc(a, b) },
                ar: h,
                as: k,
                at: function() { U && U.clear() },
                au: function(a, b) {
                    i(a);
                    I.isEnabled() && I.Jb(a, b, r)
                },
                av: function(a) { O.P(15, { query: a }) },
                aw: function() { return z.Hb() },
                ax: function(a) { J.gd(a) },
                ay: function(a) { G.Wa(a) },
                az: function(a) { return !!Q && Q.Cf(a) },
                ba: function() {
                    var a, b = W.da();
                    if (b) {
                        var c =
                            b.Qb();
                        c && ((a = c.Mb()) || (a = b.D().getString("o")))
                    }
                    return a || ""
                },
                bb: function(a, b) { return P ? (P.de(a, b), j) : r },
                bc: function(a, b) {
                    switch (a) {
                        case "oq":
                        case "gs_l":
                            return s(b)[a] || l;
                        case "gs_ssp":
                            var c;
                            a: {
                                if ((c = q()) && 46 == c.getType())
                                    if (c = c.D().getString("g")) break a;c = l
                            }
                            return c;
                        default:
                            return l
                    }
                },
                bd: function(a) { B && B.Nb(a) },
                be: y,
                bf: function(a) { return 6 == y() && !!H && H.zf(a) },
                getId: k,
                Gb: h
            };
        u = e == l ? Y.Hh() : e;
        var ga = b,
            N;
        ga || (ga = {});
        N = {
            Hc: d("a"),
            search: d("b"),
            vb: d("c"),
            ha: d("d"),
            ub: d("e"),
            lb: d("f"),
            pc: d("g"),
            qc: d("h"),
            lc: d("i"),
            Fc: d("j"),
            ob: d("k"),
            Ac: d("l"),
            oc: d("m"),
            wb: d("n"),
            wc: d("o"),
            xc: d("p"),
            tb: d("q"),
            Ic: d("r"),
            Le: d("s"),
            Me: d("t"),
            nc: d("u"),
            yc: d("w"),
            ic: d("x"),
            mc: d("y"),
            kc: d("z"),
            jc: d("aa"),
            tc: d("ab")
        };
        A = {
            Hc: function() { return N.Hc() },
            search: function(a, b) { N.search(a, b) },
            vb: function(a) { N.vb(a) },
            ha: function(a) { N.ha(a) },
            ub: function(a) { return N.ub(a) },
            lb: function(a) { N.lb(a) },
            pc: function(a) { N.pc(a) },
            qc: function(a) { N.qc(a) },
            lc: function(a) { N.lc(a) },
            Fc: function(a, b) { N.Fc(a, b) },
            ob: function(a, b) { N.ob(a, b) },
            Ac: function() { N.Ac() },
            oc: function(a) { N.oc(a) },
            wb: function(a) { N.wb(a) },
            wc: function() { N.wc() },
            xc: function() { N.xc() },
            tb: function(a) { N.tb(a) },
            Ic: function(a, b) { N.Ic(a, b) },
            Le: function(a) { N.Le(a) },
            Me: function() { N.Me() },
            nc: function() { N.nc() },
            mc: function() { N.mc() },
            yc: function(a) { N.yc(a) },
            ic: function() { N.ic() },
            kc: function() { N.kc() },
            jc: function() { N.jc() },
            tc: function() { N.tc() }
        };
        e = window.navigator.userAgent;
        b = A.Hc();
        var V = /Version\/(\d+)/.exec(e),
            V = V && V[1];
        V || (V = (V = /(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/.exec(e)) && V[1]);
        e = parseInt(V, 10) || 0;
        ub = (xb = b[0]) && 8 >= e;
        tb = xb && 7 >= e;
        Yb = b[1];
        vb = b[2];
        Zb = b[5];
        $b = b[4];
        dc = b[3];
        ac = b[7];
        b = navigator && (navigator.platform || navigator.appVersion) || "";
        ec = /Linux/.test(b);
        bc = /Mac/.test(b);
        cc = /Win/.test(b);
        return R
    };

    function od(a) {
        var c = pd.fa(),
            b;
        c && 408 == c.getType() ? b = "swc-suggest" : qd && qd.Ud() ? b = "swc-chip" : c && 51 == c.getType() && (b = "channel-suggest");
        rd(sd(a), b)
    }

    function sd(a) {
        var c = 0 <= a.indexOf("?") ? "&" : "?",
            b = pd.Td();
        return a + c + pd.pg(b)
    }

    function td(a, c) {
        var b;
        if (c) {
            var e = function() {
                    var a, b, c, d, e;
                    a = Eb();
                    a.className = "gsyc_a";
                    var f = Db();
                    a.appendChild(f);
                    var f = f.insertRow(-1),
                        g = f.insertCell(-1);
                    g.className = "gsyc_b";
                    b = S("span");
                    g.appendChild(b);
                    c = S("span", "gsyc_c");
                    g.appendChild(c);
                    g = f.insertCell(-1);
                    g.className = "gsyc_d";
                    d = S("span");
                    g.appendChild(d);
                    f = f.insertCell(-1);
                    g = S("span", "yt-badge-std");
                    g.innerHTML = "CHANNEL";
                    f.appendChild(g);
                    return {
                        J: function() { return a },
                        getType: function() { return 51 },
                        Y: function() { return j },
                        I: function(a, f, g, h) {
                            b.innerHTML = ["<b>", a, "</b>"].join("");
                            c.innerHTML = f ? [" (", f, ")"].join("") : "";
                            e || (e = new gd(1));
                            switch (h) {
                                case 1:
                                    d.innerHTML = "by YouTube";
                                    break;
                                case 0:
                                    d.innerHTML = kd(e, g) + " subscribers";
                                    break;
                                default:
                                    d.innerHTML = ""
                            }
                        }
                    }
                },
                d = function(a, b) {
                    var c = a.D();
                    b.I(c.getString("b"), c.getString("c"), c.getString("e"), c.ka("f"))
                },
                f = function(a) { return a.D().getString("b") },
                g = function(a, b, c) { k(b, c) },
                i = function(a, b, c) { k(b, c); return j },
                h = function() { return 51 },
                k = function(a, b) {
                    var c = a.D(),
                        d = c.getString("a");
                    a: {
                        switch (c.ka("f")) {
                            case 0:
                                c =
                                    "/channel/UC" + d;
                                break a;
                            case 1:
                                c = "/topic/" + d;
                                break a
                        }
                        c = ka
                    }
                    b.ha(c)
                };
            b = {
                G: function(a, b) {
                    b.addRule(".gsyc_a", "padding:3px 0");
                    b.addRule(".gsyc_a tr", "vertical-align:baseline");
                    b.addRule(".gsyc_a td", "line-height:18px");
                    b.addRule(".gsyc_b", "width:100%");
                    b.addRule(".gsyc_c", "color:#666");
                    b.addRule(".gsyc_d", "color:#666;font-size:11px;padding-right:5px")
                },
                getType: function() { return 152 },
                B: function() { return 345 },
                A: function() { return { pa: e, I: d, Ma: f, Z: g, qa: i, ra: h } }
            }
        } else {
            var p = function() {
                    var a, b, c, d, e, f;
                    a = Eb();
                    a.className = "gsyc_a";
                    var g = Db();
                    a.appendChild(g);
                    var h = g.insertRow(-1),
                        i = h.insertCell(-1);
                    i.className = "gsyc_b";
                    i.rowSpan = 2;
                    b = S("img");
                    b.className = "gsyc_c";
                    i.appendChild(b);
                    i = h.insertCell(-1);
                    i.rowSpan = 2;
                    var k = Eb("gsyc_d");
                    i.appendChild(k);
                    h = h.insertCell(-1);
                    h.className = "gsyc_e";
                    c = S("span");
                    h.appendChild(c);
                    d = S("span", "gsyc_g");
                    h.appendChild(d);
                    h = g.insertRow(-1);
                    g = h.insertCell(-1);
                    g.className = "gsyc_f";
                    e = S("span");
                    g.appendChild(e);
                    return {
                        J: function() { return a },
                        getType: function() { return 51 },
                        Y: function() { return j },
                        I: function(a, g, h, i, k, n) {
                            b.src = g;
                            c.innerHTML = ["<b>", a, "</b>"].join("");
                            d.innerHTML = h ? [" (", h, ")"].join("") : "";
                            f || (f = new gd(1));
                            a = 1 == n ? ["Auto-generated by YouTube &middot; ", kd(f, i), " videos"].join("") : 0 == n ? kd(f, k) + " subscribers" : "";
                            e.innerHTML = a
                        }
                    }
                },
                q = function(a, b) {
                    var c = a.D(),
                        d = fc(c.getString("a"), c.ka("f"));
                    b.I(c.getString("b"), d, c.getString("c"), c.getString("d"), c.getString("e"), c.ka("f"))
                },
                v = function(a) { return a.D().getString("b") },
                s = function(a, b, c) { w(b, c) },
                n = function(a, b, c) { w(b, c); return j },
                y =
                function() { return 51 },
                w = function(a, b) {
                    var c = a.D(),
                        d = c.getString("a"),
                        c = c.ka("f");
                    b.ha(gc(d, c))
                };
            b = {
                G: function(a, b) {
                    b.addRule(".gsyc_a", "padding:0");
                    b.addRule(".gsyc_a td", "line-height:18px");
                    b.addRule(".gsyc_b", "width:36px");
                    b.addRule(".gsyc_c", "vertical-align:middle;width:36px");
                    b.addRule(".gsyc_d", "width:7px");
                    b.addRule(".gsyc_e", "width:100%");
                    b.addRule(".gsyc_f", "color:#666;font-size:11px;padding-bottom:2px");
                    b.addRule(".gsyc_g", "color:#666;font-size:13px")
                },
                getType: function() { return 152 },
                B: function() { return 236 },
                A: function() { return { pa: p, I: q, Ma: v, Z: s, qa: n, ra: y } }
            }
        }
        Ha(a.Aa, 152, b)
    }
    var ud = { Vd: "oq", Wd: "gs_l" },
        vd = { vg: 3, wg: 4, Yd: 5, Zd: 6, zg: 7, Fg: 8 },
        wd = /MSIE\s+(\S+)/,
        xd = /Version\/(\S+)/,
        yd = /\/(movie|show)s?($|[?#/])/i,
        zd = /\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i,
        Ad = nd(vd.Yd, "echs", vd.Zd, "echs"),
        Bd = { qg: "CHIP_PARAMETERS", rg: "CLOSE_ICON_URL", sg: "EXPERIMENT_ID", tg: "HAS_ON_SCREEN_KEYBOARD", xg: "PSUGGEST_TOKEN", ug: "IS_HH", yg: "REQUEST_DOMAIN", uc: "REQUEST_LANGUAGE", Ag: "SESSION_INDEX", Bg: "SHOW_CHIP", Cg: "SUGGESTIONS_FOR_EMPTY_QUERY" },
        Cd = { Eg: "SUGGESTION_DISMISS_LABEL", Dg: "SUGGESTION_DISMISSED_LABEL" },
        pd, Dd, Ed = {},
        Fd, Gd, Hd, Id, Jd, qd, Kd, rd, Ld, Md, Nd = {
            a: function() { return Fd },
            b: function(a, c) {
                if (qd && qd.Ud()) {
                    var b = qd.og();
                    od(hc(a, b.id, b["base-url"]))
                } else {
                    var b = pd.Td(c),
                        e = ud.Vd;
                    Ed[e] && (Ed[e].value = b[e]);
                    e = ud.Wd;
                    Ed[e] && (Ed[e].value = b[e]);
                    Dd.submit()
                }
            },
            d: od,
            e: sd,
            h: function() { qd && (qd.Sd(), pd.Xa()) },
            r: function(a) {
                a.addRule(".gsfi", "font-size:16px");
                a.addRule(".gsfs", "font-size:16px");
                a.addRule("a.gssb_j", "font-size:12px;color:#03c");
                a.addRule(".gssb_a,.gssb_a td", "line-height:20px");
                a.addRule(".gssb_a", "padding:0 6px");
                a.addRule(".gssb_c", "z-index:3000001");
                a.addRule(".gssb_i td", "background:#eee");
                a.addRule(".gssb_k", "z-index:3000000");
                a.addRule(".gssb_l", "margin:2px 0");
                a.addRule(".gsib_a", "padding:0 4px");
                a.addRule(".gsok_a", "padding:0");
                a.addRule(".gsok_a img", "display:block");
                a.addRule(".gsfe_b", ["border:1px solid #1c62b9;", a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);"), "outline:none;"].join(""));
                Fd[0] && 7 == Jd && (a.addRule(".gsib_a", "padding:2px 10px 5px 2px"), a.addRule("body.rtl .gsib_a", "padding:2px 6px 5px"));
                a.addRule("a.gscp_a", "position:relative;background:#e2e2e2;border:1px solid #bbb;border-radius:3px");
                a.addRule(".gsfe_a a.gscp_a", "border-width:1px;border-style:solid;border-color:#bbb");
                a.addRule("a.gscp_a.gscp_b", "border-color:#777!important;background:#999;outline:none");
                a.addRule(".gscp_c", 'color:#666;font-size:11px;font-weight:bold;padding-right:20px;text-shadow:0 1px 0 rgba(255, 255, 255, 0.5);-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#80ffffff,Positive=true)";zoom:1;filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#80ffffff,Positive=true)');
                a.addRule(".gsfe_a a.gscp_a .gscp_c", "color:#444");
                a.addRule("a.gscp_a.gscp_b .gscp_c,.gsfe_a a.gscp_a.gscp_b .gscp_c", 'color:#fff;text-shadow:0 1px 0 rgba(100, 100, 100, 0.5);-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#80646464,Positive=true)";zoom:1;filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#80646464,Positive=true)');
                a.addRule(".gscp_d", ["position:absolute;padding:0;background:url(", Ld, ");background-repeat:no-repeat;background-position-y:0;right:3px;top:6px;font-size:0;width:13px;height:13px"].join(""));
                a.addRule(".gscp_d:hover", "background-position-y:-13px");
                a.addRule("a.gscp_a.gscp_b .gscp_d", "background-position-y:-26px");
                a.addRule(".gsfe_a a.gscp_a.gscp_b .gscp_d:hover", "background-position-y:-39px");
                a.addRule(".gscp_f", "background:#000")
            },
            w: function() {
                if (qd) {
                    var a = pd.fa();
                    408 == a.getType() ? (a = a.D(), qd.Xd(a.getString("a"), a.getString("b"), a.getString("c"), a.getString("d"))) : qd.Sd();
                    pd.Xa()
                }
            }
        },
        Od = window.navigator.userAgent;

    function Pd(a) { return (a = Od.match(a)) ? parseInt(a[1], 10) : NaN }
    var Qd = window.navigator.userAgent;

    function Rd(a) { return 0 <= Qd.indexOf(a) }
    var Sd = {};
    window.opera ? Sd[2] = j : Rd("MSIE") ? Sd[0] = j : Rd("WebKit") ? (Sd[5] = j, Rd("Chrome") ? Sd[3] = j : Rd("Android") ? Sd[7] = j : Rd("Safari") && (Sd[4] = j), Rd("iPad") && (Sd[6] = j)) : Rd("Gecko") && (Sd[1] = j);
    Fd = Sd;
    Fd[2] ? Jd = Pd(xd) : Fd[0] && (Jd = Pd(wd));
    Gd = 0 <= Od.indexOf("Windows");
    Hd = 0 <= Od.indexOf("Macintosh");
    Id = 0 <= Od.indexOf("Linux");
    var Td, Ud, Vd, Wd;

    function Xd() { return pa.navigator ? pa.navigator.userAgent : l }
    Wd = Vd = Ud = Td = r;
    var Yd;
    if (Yd = Xd()) {
        var Zd = pa.navigator;
        Td = 0 == Yd.indexOf("Opera");
        Ud = !Td && -1 != Yd.indexOf("MSIE");
        Vd = !Td && -1 != Yd.indexOf("WebKit");
        Wd = !Td && !Vd && "Gecko" == Zd.product
    }
    var $d = Ud,
        ae = Wd,
        be = Vd;
    var ce;
    if (Td && pa.opera) { var de = pa.opera.version; "function" == typeof de && de() } else ae ? ce = /rv\:([^\);]+)(\)|;)/ : $d ? ce = /MSIE\s+([^\);]+)(\)|;)/ : be && (ce = /WebKit\/(\S+)/), ce && ce.exec(Xd());
    var ee = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function fe(a) { if (ge) { ge = r; var c = pa.location; if (c) { var b = c.href; if (b && (b = he(fe(b)[3] || l)) && b != c.hostname) throw ge = j, Error(); } } return a.match(ee) }
    var ge = be;

    function he(a) { return a && decodeURIComponent(a) }

    function ie(a, c, b) {
        if ("array" == va(c))
            for (var e = 0; e < c.length; e++) ie(a, String(c[e]), b);
        else c != l && b.push("&", a, "" === c ? "" : "=", encodeURIComponent(String(c)))
    };

    function je(a) { this.F = a }
    var ke = /\s*;\s*/;
    je.prototype.isEnabled = function() { return navigator.cookieEnabled };

    function le(a, c, b, e, d, f) {
        if (/[;=\s]/.test(c)) throw Error('Invalid cookie name "' + c + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        e !== ka || (e = -1);
        f = f ? ";domain=" + f : "";
        d = d ? ";path=" + d : "";
        e = 0 > e ? "" : 0 == e ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(za() + 1E3 * e)).toUTCString();
        a.F.cookie = c + "=" + b + f + d + e + ""
    }
    je.prototype.get = function(a, c) { for (var b = a + "=", e = (this.F.cookie || "").split(ke), d = 0, f; f = e[d]; d++) { if (0 == f.lastIndexOf(b, 0)) return f.substr(b.length); if (f == a) return "" } return c };
    je.prototype.remove = function(a, c, b) {
        var e;
        e = this.get(a) !== ka;
        le(this, a, "", 0, c, b);
        return e
    };
    je.prototype.clear = function() { for (var a = (this.F.cookie || "").split(ke), c = [], b = [], e, d, f = 0; d = a[f]; f++) e = d.indexOf("="), -1 == e ? (c.push(""), b.push(d)) : (c.push(d.substring(0, e)), b.push(d.substring(e + 1))); for (a = c.length - 1; 0 <= a; a--) this.remove(c[a]) };
    var me = new je(document);
    me.R = 3950;
    var ne = window.yt && window.yt.config_ || {};
    Aa("yt.config_", ne);
    Aa("yt.tokens_", window.yt && window.yt.tokens_ || {});
    Aa("yt.globals_", window.yt && window.yt.globals_ || {});
    Aa("yt.msgs_", window.yt && window.yt.msgs_ || {});
    Aa("yt.timeouts_", window.yt && window.yt.timeouts_ || []);
    Aa("yt.intervals_", window.yt && window.yt.intervals_ || []);

    function oe(a) { return a in ne ? ne[a] : ka };

    function pe(a, c) {
        var b = oe("EVENT_ID");
        if (b) {
            b = { ei: b };
            c && (b.feature = c);
            var e = he(fe(a)[3] || l);
            if (e == he(fe(window.location.href)[3] || l) || !e && 0 == a.lastIndexOf("/", 0)) {
                var d = fe(a),
                    e = d[5],
                    f = d[6],
                    d = d[7],
                    g = "";
                e && (g += e);
                f && (g += "?" + f);
                d && (g += "#" + d);
                e = g;
                f = e.indexOf("#");
                if (e = 0 > f ? e : e.substr(0, f)) {
                    for (d = f = 0; d < e.length; ++d) f = 31 * f + e.charCodeAt(d), f %= 4294967296;
                    var e = "s_tempdata-" + f,
                        i;
                    if (b) {
                        f = [];
                        for (i in b) ie(i, b[i], f);
                        f[0] = "";
                        i = f.join("")
                    } else i = "";
                    b = "" + e;
                    le(me, b, i, 5, "/", "youtube.com")
                }
            }
        }
        window.location = a
    };
    Aa("searchbox.yt.install", function(a, c, b, e, d) {
        Dd = a;
        rd = d;
        Kd = b[Bd.sg];
        Ld = b[Bd.rg];
        Md = b[Bd.Cg];
        d = {
            Da: "hp",
            dc: "google.com",
            Md: "",
            Va: "en",
            Wb: "",
            bg: "",
            Za: "",
            kb: 0,
            fg: "",
            Yb: "",
            Qd: r,
            Gd: "",
            fc: "",
            ec: 0,
            ek: l,
            Rd: r,
            Fd: r,
            Zj: r,
            Xb: r,
            ya: Ba([19, 5, 0]),
            Pj: r,
            Yf: j,
            Ig: 10,
            eg: j,
            vd: j,
            Gj: r,
            Zf: r,
            Lg: r,
            jd: j,
            Ef: r,
            Jf: 500,
            Ob: r,
            gc: j,
            Sj: j,
            za: r,
            $a: "",
            Od: "//www.google.com/textinputassistant",
            Pd: "",
            lg: 7,
            Qj: r,
            If: r,
            Rf: j,
            Sf: r,
            nd: r,
            dd: r,
            Hf: r,
            Gf: r,
            eb: 1,
            md: j,
            ld: j,
            Dd: r,
            pd: r,
            Of: 10,
            Zb: r,
            Cj: 0,
            Rj: r,
            Pf: j,
            Ff: r,
            yd: document.body,
            Bf: j,
            Df: l,
            ma: {},
            Ij: {},
            Wj: 0,
            qd: r,
            $f: j,
            X: r,
            bk: l,
            Af: r,
            mg: l,
            ng: l,
            Bd: r,
            Lf: r,
            dk: 1,
            Bj: 1,
            spellcheck: r,
            rd: r,
            Uf: "Search",
            Tb: "I'm  Feeling Lucky",
            Vf: "",
            Tf: "Learn more",
            Id: "Remove",
            Hd: "This search was removed from your Web History",
            Tj: "",
            Fj: "Did you mean:",
            Mf: r,
            Nf: l,
            cb: 0,
            Sb: "",
            Vb: "",
            Uj: r,
            cc: "absolute",
            Qf: r,
            zd: r,
            Rb: l,
            od: j,
            ck: 0,
            jb: [0, 0, 0],
            gg: l,
            Kf: l,
            xd: [0],
            ud: 0,
            ig: 1,
            Kb: "",
            Xf: "",
            Wf: "",
            Nd: l,
            kg: "",
            jg: "",
            Jd: 1,
            Aa: {},
            yf: j,
            Da: "youtube",
            Wb: "yt"
        };
        d.Va = b[Bd.uc];
        d.Md = b[Bd.yg];
        d.gc = r;
        d.eb = 0;
        d.md = r;
        d.ld = r;
        d.rd = r;
        d.Zb = j;
        d.Sb = "gsfi";
        d.Vb = "gsfs";
        d.Lg =
            j;
        var f;
        f = window.location.href;
        f = yd.test(f) || zd.test(f);
        d.Xb = f;
        d.za = b[Bd.tg];
        d.$a = b[Bd.uc];
        d.Od = "//www.gstatic.com/inputtools/images";
        d.Pd = "youtube";
        d.Bd = j;
        d.Za = b[Bd.xg];
        d.kb = b[Bd.Ag];
        d.Hd = e[Cd.Dg];
        d.Id = e[Cd.Eg];
        d.ya = Ba([0, 33, 35, 51]);
        d.Nd = "masthead-search-terms";
        d.cb = 30;
        d.Jd = 2;
        d.Aa = {};
        Fd[2] || (d.zd = j);
        e = Fd[3];
        f = Fd[1];
        var g = Fd[0],
            i = Fd[2],
            h = Fd[5];
        if (-1 != window.location.href.indexOf("/watch?") && (i || Gd && (f || h || g) || Hd && (f || e) || Id && e)) d.Da = "youtube-reduced", d.Ig = 4;
        Fd[0] && 7 == Jd ? d.qd = j : d.Rb = "masthead-search-terms";
        e = 1;
        g = f = 0;
        b[Bd.ug] ? (e = -3, Gd && (Fd[0] && 8 == Jd) && (e = -5)) : Gd && (Fd[0] ? (g = -1, 7 == Jd ? (e = -2, g = 2) : 8 == Jd && (e = d.za ? 0 : -3)) : Fd[1] && (e = 2, f = 1, g = -1));
        d.jb = [e, f, g];
        e = [0];
        Fd[0] && 8 == Jd && (e[0] = -1);
        d.xd = e;
        Fa(b[Bd.uc]) && (d.pd = j);
        if (Kd)
            if (Kd in Ad && (d.Yb = Ad[Kd]), Kd == vd.Yd) td(d, r);
            else if (Kd == vd.Zd) td(d, j);
        else if (Kd == vd.zg) {
            d.ya[408] = j;
            d.ma[130] = j;
            e = b[Bd.qg];
            var k = e.id,
                p = e.name,
                q = e.base_url,
                v = e.thumbnail_url,
                s = function() { O = G = t = B = m = l },
                n = function() { return B != l && m != l },
                y = function() {
                    if (!n()) return [];
                    var a = {};
                    a.id = m;
                    a.name = B;
                    a["base-url"] =
                        t;
                    a["thumbnail-url"] = G;
                    var b = B,
                        c = G,
                        d = B,
                        e = D,
                        f = w,
                        g = { Kd: function() { return b }, M: function() { return 0 }, Ld: function() { return c }, R: function() { return "" }, $: function() { return 24 }, U: function() { return 24 }, wd: function() { return "" }, sa: function() { return r }, Pb: function() { return r }, gc: function() { return j }, X: function() { return r }, Ya: function() { return d }, dg: function(a) { return e ? e(g, a) : j }, remove: function(a) { f && f(g, a) }, Jg: function() { return a }, equals: function(a) { return g == a || a && a.Kd() == b && 0 == a.M() && a.Ld() == c } };
                    O = g;
                    return [O]
                },
                w = function() { s() },
                D = function() { return n() },
                A, m = l,
                B = l,
                t = l,
                G = l,
                O;
            A = { activate: C, L: C, H: C, getType: function() { return 155 }, B: function() { return 235 }, A: function() { return { cg: y } }, ga: C, G: C, C: function(a) { a.get(128, J) } };
            var J = {
                Sd: s,
                vc: function() { return A },
                og: function() { return !O ? [] : O.Jg() },
                Ud: n,
                Xd: function(a, b, c, d) {
                    m = a;
                    B = b;
                    t = c;
                    G = d
                }
            };
            qd = J;
            b[Bd.Bg] && qd.Xd(k, p, q, v);
            b = d.Aa;
            b[155] = [qd.vc()];
            if (k && p) {
                var M = function(a) {
                    var b = a.T(),
                        c = [],
                        d = {};
                    d.a = k;
                    d.b = p;
                    d.c = q;
                    d.d = v;
                    c.push(Gc(a.N(), a.N(), 0, 408, [], Uc(d)));
                    for (var d = b.length,
                            e = 0; e < d; e++) c.push(pb(b[e], e + 1));
                    return Ec(a.ja(), a.N(), c, a.D(), a.Ub(), a.ib(), a.Ed(), j)
                };
                b[122] = { getType: function() { return 122 }, B: function() { return 357 }, A: function() { return { hg: M } } };
                var z = function() {
                        var a, b, c, d;
                        a = Eb();
                        var e = Db();
                        a.appendChild(e);
                        var e = e.insertRow(-1),
                            f = e.insertCell(-1);
                        f.className = "ysswc_a";
                        d = S("img", "ysswc_d");
                        d.width = 24;
                        d.height = 24;
                        f.appendChild(d);
                        c = S("span", "ysswc_e");
                        f.appendChild(c);
                        f = e.insertCell(-1);
                        f.className = "ysswc_b";
                        b = S("span");
                        f.appendChild(b);
                        e = e.insertCell(-1);
                        e.className =
                            "ysswc_c";
                        f = S("span");
                        f.innerHTML = "(search within this channel)";
                        e.appendChild(f);
                        return {
                            J: function() { return a },
                            getType: function() { return 408 },
                            Y: function() { return j },
                            I: function(a, e, f) {
                                b.innerHTML = a;
                                c.innerHTML = e;
                                d.src = f
                            }
                        }
                    },
                    E = function(a, b) {
                        var c = a.D(),
                            d = c.getString("b"),
                            c = c.getString("d");
                        b.I(a.Ea(), d, c)
                    },
                    K = function(a, b, c) { H(b, c) },
                    P = function(a, b, c) { H(b, c); return j },
                    Q = function() { return 408 },
                    H = function(a, b) {
                        var c = a.D();
                        b.ha(hc(a.K(), c.getString("a"), c.getString("c"), { chip: 1 }))
                    };
                Ha(b, 152, {
                    G: function(a,
                        b) {
                        b.addRule(".gssb_a .ysswc_a", ['font-size:11px;font-weight:bold;color:#666;text-shadow:0 1px 0 rgba(255,255,255,0.5);-ms-filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#80ffffff,Positive=true)";zoom:1;filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=0,OffY=1,Color=#80ffffff,Positive=true);vertical-align:baseline;background:#e2e2e2!important;border:1px solid #bbb;border-radius:3px;display:inline-block;line-height:24px;margin:3px 0 1px -3px;padding:0;outline:none;',
                            b.prefix("user-select:none;")
                        ].join(""));
                        b.addRule(".gssb_a .ysswc_b,.gssb_a .ysswc_c", "line-height:30px;vertical-align:bottom");
                        b.addRule(".gssb_a .ysswc_b", "padding:0 5px;width:100%");
                        b.addRule(".gssb_a .ysswc_c", "color:#888;font-size:11px;");
                        b.addRule(".ysswc_d", "background:#000;display:inline-block;vertical-align:top");
                        b.addRule(".ysswc_e", "padding:0 8px")
                    },
                    getType: function() { return 152 },
                    B: function() { return 358 },
                    A: function() { return { pa: z, I: E, Z: K, qa: P, ra: Q } }
                })
            }
        } else if (Kd == vd.vg || Kd == vd.wg) d.Wb =
            "yt_mv", d.Xb = r;
        else if (Kd == vd.Fg && Md && 0 != Md.length) {
            b = d.Aa;
            var W = function(a) {
                    var b = $.DONT_CARE,
                        c = a.Cd();
                    if (T[c] && !Xa(a.N()) && ("keydown" != c || ja)) b = $.kd;
                    ja = r;
                    return b
                },
                I = function() { return 18 },
                U = function() { ja = j },
                $ = mc,
                u, T = Ba(["focus", "mousedown", "keydown"]),
                ja = r,
                L = { C: function(a) { u = a.get(117, L) }, H: function() { u.oa(1, U) }, getType: function() { return 156 }, B: function() { return 414 }, A: function() { return { xa: W, M: I } } };
            Ha(b, 156, L);
            var R = function() { return 7 },
                ga = function(a) {
                    var b = a.N();
                    if (!V || 0 == V.length || Xa(b)) return l;
                    for (var b = [], c = 0, d; d = V[c]; ++c) b.push(Gc(d, d, c, 0, []));
                    return Ec(a, "", b, l, j, r, r, r)
                },
                N, V;
            N = { activate: C, L: C, H: C, getType: function() { return 151 }, B: function() { return 415 }, A: function() { return { M: R, update: C, get: ga, reset: C } }, ga: C, G: C, C: C };
            e = { vc: function() { return N }, Mg: function(a) { V = a } };
            e.Mg(Md);
            Ha(b, 151, e.vc())
        }
        try {
            var x = window.google.sbox(c, a, Nd, ka);
            pd = {
                api: x,
                Kg: x.a,
                activate: x.b,
                L: x.c,
                Kj: x.d,
                Gg: x.e,
                W: x.f,
                ca: x.g,
                ea: x.h,
                wa: x.i,
                Td: x.j,
                pg: x.k,
                Vj: x.l,
                Oj: x.m,
                Hg: x.n,
                Ta: x.o,
                Hj: x.p,
                cd: x.q,
                Jj: x.r,
                Dj: x.s,
                Ua: x.t,
                $c: x.u,
                focus: x.v,
                blur: x.w,
                ed: x.x,
                da: x.y,
                Ib: x.z,
                fd: x.aa,
                na: x.ab,
                search: x.ad,
                Xj: x.ae,
                ak: x.af,
                Sa: x.ag,
                fa: x.ah,
                fk: x.ai,
                Zc: x.al,
                Lb: x.am,
                Xa: x.an,
                X: x.ao,
                Ya: x.ap,
                Lj: x.aq,
                Gb: x.ar,
                getId: x.as,
                Ej: x.at,
                Jb: x.au,
                $j: x.av,
                Hb: x.aw,
                gd: x.ax,
                Wa: x.ay,
                Cf: x.az,
                Mb: x.ba,
                Yj: x.bb,
                Nj: x.bc,
                Nb: x.bd,
                Mj: x.be,
                zf: x.bf
            }
        } catch (wa) { pd = l }
        pd.Kg(d);
        if (a = document.getElementById("search-btn")) pd.Hg(a, 12), a.onclick = l;
        a = [ud.Vd, ud.Wd];
        for (c = 0; x = a[c++];) Ed[x] = pd.Gg(Dd, x);
        (new Image).src = Ld
    });
    Aa("yt.www.masthead.searchbox.init", function() {
        var a = document.getElementById("masthead-search");
        a && (oe("SBOX_SETTINGS") && oe("SBOX_LABELS")) && window.setTimeout(function() {
            var c;
            a: {
                c = ["searchbox", "yt", "install"];
                for (var b = pa, e; e = c.shift();)
                    if (b[e] != l) b = b[e];
                    else { c = l; break a }
                c = b
            }
            c(a, a.search_query, oe("SBOX_SETTINGS"), oe("SBOX_LABELS"), pe)
        }, 100)
    });
    yt.www.masthead.searchbox.init()
})();