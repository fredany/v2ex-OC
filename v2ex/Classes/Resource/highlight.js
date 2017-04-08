<script>
/*! highlight.js v9.2.0 | BSD3 License | git.io/hljslicense */
!
function(e) {
    var n = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([],
    function() {
        return n.hljs
    }))
} (function(e) {
    function n(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }
    function t(e) {
        return e.nodeName.toLowerCase()
    }
    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 == t.index
    }
    function a(e) {
        return /^(no-?highlight|plain|text)$/i.test(e)
    }
    function i(e) {
        var n, t, r, i = e.className + " ";
        if (i += e.parentNode ? e.parentNode.className: "", t = /\blang(?:uage)?-([\w-]+)\b/i.exec(i)) return w(t[1]) ? t[1] : "no-highlight";
        for (i = i.split(/\s+/), n = 0, r = i.length; r > n; n++) if (w(i[n]) || a(i[n])) return i[n]
    }
    function o(e, n) {
        var t, r = {};
        for (t in e) r[t] = e[t];
        if (n) for (t in n) r[t] = n[t];
        return r
    }
    function u(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling) 3 == i.nodeType ? a += i.nodeValue.length: 1 == i.nodeType && (n.push({
                event: "start",
                offset: a,
                node: i
            }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({
                event: "stop",
                offset: a,
                node: i
            }));
            return a
        } (e, 0),
        n
    }
    function c(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e: r: "start" == r[0].event ? e: r: e.length ? e: r
        }
        function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"'
            }
            f += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
        }
        function u(e) {
            f += "</" + t(e) + ">"
        }
        function c(e) { ("start" == e.event ? o: u)(e.node)
        }
        for (var s = 0,
        f = "",
        l = []; e.length || r.length;) {
            var g = i();
            if (f += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
                l.reverse().forEach(u);
                do c(g.splice(0, 1)[0]),
                g = i();
                while (g == e && g.length && g[0].offset == s);
                l.reverse().forEach(o)
            } else "start" == g[0].event ? l.push(g[0].node) : l.pop(),
            c(g.splice(0, 1)[0])
        }
        return f + n(a.substr(s))
    }
    function s(e) {
        function n(e) {
            return e && e.source || e
        }
        function t(t, r) {
            return new RegExp(n(t), "m" + (e.cI ? "i": "") + (r ? "g": ""))
        }
        function r(a, i) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var u = {},
                    c = function(n, t) {
                        e.cI && (t = t.toLowerCase()),
                        t.split(" ").forEach(function(e) {
                            var t = e.split("|");
                            u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
                        c(e, a.k[e])
                    }),
                    a.k = u
                }
                a.lR = t(a.l || /\b\w+\b/, !0),
                i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|": "") + i.tE)),
                a.i && (a.iR = t(a.i)),
                void 0 === a.r && (a.r = 1),
                a.c || (a.c = []);
                var s = [];
                a.c.forEach(function(e) {
                    e.v ? e.v.forEach(function(n) {
                        s.push(o(e, n))
                    }) : s.push("self" == e ? a: e)
                }),
                a.c = s,
                a.c.forEach(function(e) {
                    r(e, a)
                }),
                a.starts && r(a.starts, i);
                var f = a.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?": e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = f.length ? t(f.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        r(e)
    }
    function f(e, t, a, i) {
        function o(e, n) {
            for (var t = 0; t < n.c.length; t++) if (r(n.c[t].bR, e)) return n.c[t]
        }
        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent;) e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }
        function c(e, n) {
            return ! a && r(n.iR, e)
        }
        function g(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }
        function p(e, n, t, r) {
            var a = r ? "": E.classPrefix,
            i = '<span class="' + a,
            o = t ? "": "</span>";
            return i += e + '">',
            i + n + o
        }
        function h() {
            if (!k.k) return n(M);
            var e = "",
            t = 0;
            k.lR.lastIndex = 0;
            for (var r = k.lR.exec(M); r;) {
                e += n(M.substr(t, r.index - t));
                var a = g(k, r);
                a ? (B += a[1], e += p(a[0], n(r[0]))) : e += n(r[0]),
                t = k.lR.lastIndex,
                r = k.lR.exec(M)
            }
            return e + n(M.substr(t))
        }
        function d() {
            var e = "string" == typeof k.sL;
            if (e && !R[k.sL]) return n(M);
            var t = e ? f(k.sL, M, !0, y[k.sL]) : l(M, k.sL.length ? k.sL: void 0);
            return k.r > 0 && (B += t.r),
            e && (y[k.sL] = t.top),
            p(t.language, t.value, !1, !0)
        }
        function b() {
            L += void 0 !== k.sL ? d() : h(),
            M = ""
        }
        function v(e, n) {
            L += e.cN ? p(e.cN, "", !0) : "",
            k = Object.create(e, {
                parent: {
                    value: k
                }
            })
        }
        function m(e, n) {
            if (M += e, void 0 === n) return b(),
            0;
            var t = o(n, k);
            if (t) return t.skip ? M += n: (t.eB && (M += n), b(), t.rB || t.eB || (M = n)),
            v(t, n),
            t.rB ? 0 : n.length;
            var r = u(k, n);
            if (r) {
                var a = k;
                a.skip ? M += n: (a.rE || a.eE || (M += n), b(), a.eE && (M = n));
                do k.cN && (L += "</span>"),
                k.skip || (B += k.r),
                k = k.parent;
                while (k != r.parent);
                return r.starts && v(r.starts, ""),
                a.rE ? 0 : n.length
            }
            if (c(n, k)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (k.cN || "<unnamed>") + '"');
            return M += n,
            n.length || 1
        }
        var N = w(e);
        if (!N) throw new Error('Unknown language: "' + e + '"');
        s(N);
        var x, k = i || N,
        y = {},
        L = "";
        for (x = k; x != N; x = x.parent) x.cN && (L = p(x.cN, "", !0) + L);
        var M = "",
        B = 0;
        try {
            for (var C, j, I = 0;;) {
                if (k.t.lastIndex = I, C = k.t.exec(t), !C) break;
                j = m(t.substr(I, C.index - I), C[0]),
                I = C.index + j
            }
            for (m(t.substr(I)), x = k; x.parent; x = x.parent) x.cN && (L += "</span>");
            return {
                r: B,
                value: L,
                language: e,
                top: k
            }
        } catch(O) {
            if ( - 1 != O.message.indexOf("Illegal")) return {
                r: 0,
                value: n(t)
            };
            throw O
        }
    }
    function l(e, t) {
        t = t || E.languages || Object.keys(R);
        var r = {
            r: 0,
            value: n(e)
        },
        a = r;
        return t.forEach(function(n) {
            if (w(n)) {
                var t = f(n, e, !1);
                t.language = n,
                t.r > a.r && (a = t),
                t.r > r.r && (a = r, r = t)
            }
        }),
        a.language && (r.second_best = a),
        r
    }
    function g(e) {
        return E.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm,
        function(e, n) {
            return n.replace(/\t/g, E.tabReplace)
        })),
        E.useBR && (e = e.replace(/\n/g, "<br>")),
        e
    }
    function p(e, n, t) {
        var r = n ? x[n] : t,
        a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"),
        -1 === e.indexOf(r) && a.push(r),
        a.join(" ").trim()
    }
    function h(e) {
        var n = i(e);
        if (!a(n)) {
            var t;
            E.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
            var r = t.textContent,
            o = n ? f(n, r, !0) : l(r),
            s = u(t);
            if (s.length) {
                var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                h.innerHTML = o.value,
                o.value = c(s, u(h), r)
            }
            o.value = g(o.value),
            e.innerHTML = o.value,
            e.className = p(e.className, n, o.language),
            e.result = {
                language: o.language,
                re: o.r
            },
            o.second_best && (e.second_best = {
                language: o.second_best.language,
                re: o.second_best.r
            })
        }
    }
    function d(e) {
        E = o(E, e)
    }
    function b() {
        if (!b.called) {
            b.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, h)
        }
    }
    function v() {
        addEventListener("DOMContentLoaded", b, !1),
        addEventListener("load", b, !1)
    }
    function m(n, t) {
        var r = R[n] = t(e);
        r.aliases && r.aliases.forEach(function(e) {
            x[e] = n
        })
    }
    function N() {
        return Object.keys(R)
    }
    function w(e) {
        return e = (e || "").toLowerCase(),
        R[e] || R[x[e]]
    }
    var E = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    },
    R = {},
    x = {};
    return e.highlight = f,
    e.highlightAuto = l,
    e.fixMarkup = g,
    e.highlightBlock = h,
    e.configure = d,
    e.initHighlighting = b,
    e.initHighlightingOnLoad = v,
    e.registerLanguage = m,
    e.listLanguages = N,
    e.getLanguage = w,
    e.inherit = o,
    e.IR = "[a-zA-Z]\\w*",
    e.UIR = "[a-zA-Z_]\\w*",
    e.NR = "\\b\\d+(\\.\\d+)?",
    e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    e.BNR = "\\b(0b[01]+)",
    e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    },
    e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    },
    e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    },
    e.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
    },
    e.C = function(n, t, r) {
        var a = e.inherit({
            cN: "comment",
            b: n,
            e: t,
            c: []
        },
        r || {});
        return a.c.push(e.PWM),
        a.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }),
        a
    },
    e.CLCM = e.C("//", "$"),
    e.CBCM = e.C("/\\*", "\\*/"),
    e.HCM = e.C("#", "$"),
    e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    },
    e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    },
    e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    },
    e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    },
    e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    },
    e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    },
    e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    },
    e.METHOD_GUARD = {
        b: "\\.\\s*" + e.UIR,
        r: 0
    },
    e
});
hljs.registerLanguage("cmake",
function(e) {
    return {
        aliases: ["cmake.in"],
        cI: !0,
        k: {
            keyword: "add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or equal less greater strless strgreater strequal matches"
        },
        c: [{
            cN: "variable",
            b: "\\${",
            e: "}"
        },
        e.HCM, e.QSM, e.NM]
    }
});
hljs.registerLanguage("erlang",
function(e) {
    var r = "[a-z'][a-zA-Z0-9_']*",
    c = "(" + r + ":" + r + "|" + r + ")",
    b = {
        keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
        literal: "false true"
    },
    i = e.C("%", "$"),
    n = {
        cN: "number",
        b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
        r: 0
    },
    a = {
        b: "fun\\s+" + r + "/\\d+"
    },
    d = {
        b: c + "\\(",
        e: "\\)",
        rB: !0,
        r: 0,
        c: [{
            b: c,
            r: 0
        },
        {
            b: "\\(",
            e: "\\)",
            eW: !0,
            rE: !0,
            r: 0
        }]
    },
    o = {
        b: "{",
        e: "}",
        r: 0
    },
    t = {
        b: "\\b_([A-Z][A-Za-z0-9_]*)?",
        r: 0
    },
    f = {
        b: "[A-Z][a-zA-Z0-9_]*",
        r: 0
    },
    l = {
        b: "#" + e.UIR,
        r: 0,
        rB: !0,
        c: [{
            b: "#" + e.UIR,
            r: 0
        },
        {
            b: "{",
            e: "}",
            r: 0
        }]
    },
    s = {
        bK: "fun receive if try case",
        e: "end",
        k: b
    };
    s.c = [i, a, e.inherit(e.ASM, {
        cN: ""
    }), s, d, e.QSM, n, o, t, f, l];
    var u = [i, a, s, d, e.QSM, n, o, t, f, l];
    d.c[1].c = u,
    o.c = u,
    l.c[1].c = u;
    var h = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: u
    };
    return {
        aliases: ["erl"],
        k: b,
        i: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
        c: [{
            cN: "function",
            b: "^" + r + "\\s*\\(",
            e: "->",
            rB: !0,
            i: "\\(|#|//|/\\*|\\\\|:|;",
            c: [h, e.inherit(e.TM, {
                b: r
            })],
            starts: {
                e: ";|\\.",
                k: b,
                c: u
            }
        },
        i, {
            b: "^-",
            e: "\\.",
            r: 0,
            eE: !0,
            rB: !0,
            l: "-" + e.IR,
            k: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",
            c: [h]
        },
        n, e.QSM, l, t, f, o, {
            b: /\.$/
        }]
    }
});
hljs.registerLanguage("applescript",
function(e) {
    var t = e.inherit(e.QSM, {
        i: ""
    }),
    r = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: ["self", e.CNM, t]
    },
    i = e.C("--", "$"),
    o = e.C("\\(\\*", "\\*\\)", {
        c: ["self", i]
    }),
    n = [i, o, e.HCM];
    return {
        aliases: ["osascript"],
        k: {
            keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
            literal: "AppleScript false linefeed return pi quote result space tab true",
            built_in: "alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
        },
        c: [t, e.CNM, {
            cN: "built_in",
            b: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
        },
        {
            cN: "literal",
            b: "\\b(text item delimiters|current application|missing value)\\b"
        },
        {
            cN: "keyword",
            b: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference)|POSIX file|POSIX path|(date|time) string|quoted form)\\b"
        },
        {
            bK: "on",
            i: "[${=;\\n]",
            c: [e.UTM, r]
        }].concat(n),
        i: "//|->|=>|\\[\\["
    }
});
hljs.registerLanguage("basic",
function(E) {
    return {
        cI: !0,
        i: "^.",
        l: "[a-zA-Z][a-zA-Z0-9_$%!#]*",
        k: {
            keyword: "ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"
        },
        c: [E.QSM, E.C("REM", "$", {
            r: 10
        }), E.C("'", "$", {
            r: 0
        }), {
            cN: "symbol",
            b: "^[0-9]+ ",
            r: 10
        },
        {
            cN: "number",
            b: "\\b([0-9]+[0-9edED.]*[#!]?)",
            r: 0
        },
        {
            cN: "number",
            b: "(&[hH][0-9a-fA-F]{1,4})"
        },
        {
            cN: "number",
            b: "(&[oO][0-7]{1,6})"
        }]
    }
});
hljs.registerLanguage("bash",
function(e) {
    var t = {
        cN: "variable",
        v: [{
            b: /\$[\w\d#@][\w\d_]*/
        },
        {
            b: /\$\{(.*?)}/
        }]
    },
    s = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, t, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [e.BE]
        }]
    },
    a = {
        cN: "string",
        b: /'/,
        e: /'/
    };
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            _: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "meta",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        },
        {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        },
        e.HCM, s, a, t]
    }
});
hljs.registerLanguage("javascript",
function(e) {
    return {
        aliases: ["js", "jsx"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{
            cN: "meta",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        },
        {
            cN: "meta",
            b: /^#!/,
            e: /$/
        },
        e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}"
            }]
        },
        e.CLCM, e.CBCM, {
            cN: "number",
            v: [{
                b: "\\b(0[bB][01]+)"
            },
            {
                b: "\\b(0[oO][0-7]+)"
            },
            {
                b: e.CNR
            }],
            r: 0
        },
        {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [{
                    b: /<\w+\/>/,
                    skip: !0
                },
                {
                    b: /<\w+/,
                    e: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    c: ["self"]
                }]
            }],
            r: 0
        },
        {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: [e.CLCM, e.CBCM]
            }],
            i: /\[|%/
        },
        {
            b: /\$[(.]/
        },
        e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            },
            e.UTM]
        },
        {
            bK: "constructor",
            e: /\{/,
            eE: !0
        }],
        i: /#(?!!)/
    }
});
hljs.registerLanguage("python",
function(e) {
    var r = {
        cN: "meta",
        b: /^(>>>|\.\.\.) /
    },
    b = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [r],
            r: 10
        },
        {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [r],
            r: 10
        },
        {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        },
        {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        },
        {
            b: /(b|br)'/,
            e: /'/
        },
        {
            b: /(b|br)"/,
            e: /"/
        },
        e.ASM, e.QSM]
    },
    a = {
        cN: "number",
        r: 0,
        v: [{
            b: e.BNR + "[lLjJ]?"
        },
        {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        },
        {
            b: e.CNR + "[lLjJ]?"
        }]
    },
    l = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", r, a, b]
    };
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [r, a, b, e.HCM, {
            v: [{
                cN: "function",
                bK: "def",
                r: 10
            },
            {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, l, {
                b: /->/,
                eW: !0,
                k: "None"
            }]
        },
        {
            cN: "meta",
            b: /^[\t ]*@/,
            e: /$/
        },
        {
            b: /\b(print|exec)\(/
        }]
    }
});
hljs.registerLanguage("yaml",
function(e) {
    var a = {
        literal: "{ } true false yes no Yes No True False null"
    },
    b = "^[ \\-]*",
    r = "[a-zA-Z_][\\w\\-]*",
    t = {
        cN: "attr",
        v: [{
            b: b + r + ":"
        },
        {
            b: b + '"' + r + '":'
        },
        {
            b: b + "'" + r + "':"
        }]
    },
    c = {
        cN: "template-variable",
        v: [{
            b: "{{",
            e: "}}"
        },
        {
            b: "%{",
            e: "}"
        }]
    },
    l = {
        cN: "string",
        r: 0,
        v: [{
            b: /'/,
            e: /'/
        },
        {
            b: /"/,
            e: /"/
        }],
        c: [e.BE, c]
    };
    return {
        cI: !0,
        aliases: ["yml", "YAML", "yaml"],
        c: [t, {
            cN: "meta",
            b: "^---s*$",
            r: 10
        },
        {
            cN: "string",
            b: "[\\|>] *$",
            rE: !0,
            c: l.c,
            e: t.v[0].b
        },
        {
            b: "<%[%=-]?",
            e: "[%-]?%>",
            sL: "ruby",
            eB: !0,
            eE: !0,
            r: 0
        },
        {
            cN: "type",
            b: "!!" + e.UIR
        },
        {
            cN: "meta",
            b: "&" + e.UIR + "$"
        },
        {
            cN: "meta",
            b: "\\*" + e.UIR + "$"
        },
        {
            cN: "bullet",
            b: "^ *-",
            r: 0
        },
        l, e.HCM, e.CNM],
        k: a
    }
});
hljs.registerLanguage("lua",
function(e) {
    var t = "\\[=*\\[",
    a = "\\]=*\\]",
    r = {
        b: t,
        e: a,
        c: ["self"]
    },
    n = [e.C("--(?!" + t + ")", "$"), e.C("--" + t, a, {
        c: [r],
        r: 10
    })];
    return {
        l: e.UIR,
        k: {
            keyword: "and break do else elseif end false for if in local nil not or repeat return then true until while",
            built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
        },
        c: n.concat([{
            cN: "function",
            bK: "function",
            e: "\\)",
            c: [e.inherit(e.TM, {
                b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
            }), {
                cN: "params",
                b: "\\(",
                eW: !0,
                c: n
            }].concat(n)
        },
        e.CNM, e.ASM, e.QSM, {
            cN: "string",
            b: t,
            e: a,
            c: [r],
            r: 5
        }])
    }
});
hljs.registerLanguage("puppet",
function(e) {
    var s = {
        keyword: "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
        literal: "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
        built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
    },
    r = e.C("#", "$"),
    a = "([A-Za-z_]|::)(\\w|::)*",
    i = e.inherit(e.TM, {
        b: a
    }),
    o = {
        cN: "variable",
        b: "\\$" + a
    },
    t = {
        cN: "string",
        c: [e.BE, o],
        v: [{
            b: /'/,
            e: /'/
        },
        {
            b: /"/,
            e: /"/
        }]
    };
    return {
        aliases: ["pp"],
        c: [r, o, t, {
            bK: "class",
            e: "\\{|;",
            i: /=/,
            c: [i, r]
        },
        {
            bK: "define",
            e: /\{/,
            c: [{
                cN: "section",
                b: e.IR,
                endsParent: !0
            }]
        },
        {
            b: e.IR + "\\s+\\{",
            rB: !0,
            e: /\S/,
            c: [{
                cN: "keyword",
                b: e.IR
            },
            {
                b: /\{/,
                e: /\}/,
                k: s,
                r: 0,
                c: [t, r, {
                    b: "[a-zA-Z_]+\\s*=>",
                    rB: !0,
                    e: "=>",
                    c: [{
                        cN: "attr",
                        b: e.IR
                    }]
                },
                {
                    cN: "number",
                    b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                    r: 0
                },
                o]
            }],
            r: 0
        }]
    }
});
hljs.registerLanguage("php",
function(e) {
    var c = {
        b: "\\$+[a-zA-Z_-每][a-zA-Z0-9_-每]*"
    },
    a = {
        cN: "meta",
        b: /<\?(php)?|\?>/
    },
    i = {
        cN: "string",
        c: [e.BE, a],
        v: [{
            b: 'b"',
            e: '"'
        },
        {
            b: "b'",
            e: "'"
        },
        e.inherit(e.ASM, {
            i: null
        }), e.inherit(e.QSM, {
            i: null
        })]
    },
    t = {
        v: [e.BNM, e.CNM]
    };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.HCM, e.C("//", "$", {
            c: [a]
        }), e.C("/\\*", "\\*/", {
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: e.UIR
        }), {
            cN: "string",
            b: /<<<['"]?\w+['"]?$/,
            e: /^\w+;?$/,
            c: [e.BE, {
                cN: "subst",
                v: [{
                    b: /\$\w+/
                },
                {
                    b: /\{\$/,
                    e: /\}/
                }]
            }]
        },
        a, c, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        },
        {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", c, e.CBCM, i, t]
            }]
        },
        {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements"
            },
            e.UTM]
        },
        {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [e.UTM]
        },
        {
            bK: "use",
            e: ";",
            c: [e.UTM]
        },
        {
            b: "=>"
        },
        i, t]
    }
});
hljs.registerLanguage("django",
function(e) {
    var t = {
        b: /\|[A-Za-z]+:?/,
        k: {
            name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
        },
        c: [e.QSM, e.ASM]
    };
    return {
        aliases: ["jinja"],
        cI: !0,
        sL: "xml",
        c: [e.C(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), e.C(/\{#/, /#}/), {
            cN: "template-tag",
            b: /\{%/,
            e: /%}/,
            c: [{
                cN: "name",
                b: /\w+/,
                k: {
                    name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
                },
                starts: {
                    eW: !0,
                    k: "in by as",
                    c: [t],
                    r: 0
                }
            }]
        },
        {
            cN: "template-variable",
            b: /\{\{/,
            e: /}}/,
            c: [t]
        }]
    }
});
hljs.registerLanguage("dts",
function(e) {
    var a = {
        cN: "string",
        v: [e.inherit(e.QSM, {
            b: '((u8?|U)|L)?"'
        }), {
            b: '(u8?|U)?R"',
            e: '"',
            c: [e.BE]
        },
        {
            b: "'\\\\?.",
            e: "'",
            i: "."
        }]
    },
    c = {
        cN: "number",
        v: [{
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        },
        {
            b: e.CNR
        }],
        r: 0
    },
    b = {
        cN: "meta",
        b: "#",
        e: "$",
        k: {
            "meta-keyword": "if else elif endif define undef ifdef ifndef"
        },
        c: [{
            b: /\\\n/,
            r: 0
        },
        {
            bK: "include",
            e: "$",
            k: {
                "meta-keyword": "include"
            },
            c: [e.inherit(a, {
                cN: "meta-string"
            }), {
                cN: "meta-string",
                b: "<",
                e: ">",
                i: "\\n"
            }]
        },
        a, e.CLCM, e.CBCM]
    },
    i = {
        cN: "variable",
        b: "\\&[a-z\\d_]*\\b"
    },
    r = {
        cN: "meta-keyword",
        b: "/[a-z][a-z\\d-]*/"
    },
    d = {
        cN: "symbol",
        b: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"
    },
    n = {
        cN: "params",
        b: "<",
        e: ">",
        c: [c, i]
    },
    s = {
        cN: "class",
        b: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
        e: /[{;=]/,
        rB: !0,
        eE: !0
    },
    t = {
        cN: "class",
        b: "/\\s*{",
        e: "};",
        r: 10,
        c: [i, r, d, s, n, e.CLCM, e.CBCM, c, a]
    };
    return {
        k: "",
        c: [t, i, r, d, s, n, e.CLCM, e.CBCM, c, a, b, {
            b: e.IR + "::",
            k: ""
        }]
    }
});
hljs.registerLanguage("scss",
function(e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
    i = {
        cN: "variable",
        b: "(\\$" + t + ")\\b"
    },
    r = {
        cN: "number",
        b: "#[0-9A-Fa-f]+"
    }; ({
        cN: "attribute",
        b: "[A-Z\\_\\.\\-]+",
        e: ":",
        eE: !0,
        i: "[^\\s]",
        starts: {
            eW: !0,
            eE: !0,
            c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                cN: "meta",
                b: "!important"
            }]
        }
    });
    return {
        cI: !0,
        i: "[=/|']",
        c: [e.CLCM, e.CBCM, {
            cN: "selector-id",
            b: "\\#[A-Za-z0-9_-]+",
            r: 0
        },
        {
            cN: "selector-class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        },
        {
            cN: "selector-attr",
            b: "\\[",
            e: "\\]",
            i: "$"
        },
        {
            cN: "selector-tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        },
        {
            b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
        },
        {
            b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
        },
        i, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        },
        {
            b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        },
        {
            b: ":",
            e: ";",
            c: [i, r, e.CSSNM, e.QSM, e.ASM, {
                cN: "meta",
                b: "!important"
            }]
        },
        {
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [i, e.QSM, e.ASM, r, e.CSSNM, {
                b: "\\s[A-Za-z0-9_.-]+",
                r: 0
            }]
        }]
    }
});
hljs.registerLanguage("coffeescript",
function(e) {
    var c = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        built_in: "npm require console print module global window document"
    },
    n = "[A-Za-z$_][0-9A-Za-z$_]*",
    r = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: c
    },
    s = [e.BNM, e.inherit(e.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [{
            b: /'''/,
            e: /'''/,
            c: [e.BE]
        },
        {
            b: /'/,
            e: /'/,
            c: [e.BE]
        },
        {
            b: /"""/,
            e: /"""/,
            c: [e.BE, r]
        },
        {
            b: /"/,
            e: /"/,
            c: [e.BE, r]
        }]
    },
    {
        cN: "regexp",
        v: [{
            b: "///",
            e: "///",
            c: [r, e.HCM]
        },
        {
            b: "//[gim]*",
            r: 0
        },
        {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        }]
    },
    {
        b: "@" + n
    },
    {
        b: "`",
        e: "`",
        eB: !0,
        eE: !0,
        sL: "javascript"
    }];
    r.c = s;
    var i = e.inherit(e.TM, {
        b: n
    }),
    t = "(\\(.*\\))?\\s*\\B[-=]>",
    o = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [{
            b: /\(/,
            e: /\)/,
            k: c,
            c: ["self"].concat(s)
        }]
    };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: c,
        i: /\/\*/,
        c: s.concat([e.C("###", "###"), e.HCM, {
            cN: "function",
            b: "^\\s*" + n + "\\s*=\\s*" + t,
            e: "[-=]>",
            rB: !0,
            c: [i, o]
        },
        {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [{
                cN: "function",
                b: t,
                e: "[-=]>",
                rB: !0,
                c: [o]
            }]
        },
        {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [i]
            },
            i]
        },
        {
            b: n + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        }])
    }
});
hljs.registerLanguage("java",
function(e) {
    var a = e.UIR + "(<" + e.UIR + "(\\s*,\\s*" + e.UIR + ")*>)?",
    t = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
    r = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
    c = {
        cN: "number",
        b: r,
        r: 0
    };
    return {
        aliases: ["jsp"],
        k: t,
        i: /<\/|#/,
        c: [e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [{
                b: /\w+@/,
                r: 0
            },
            {
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            },
            e.UTM]
        },
        {
            bK: "new throw return else",
            r: 0
        },
        {
            cN: "function",
            b: "(" + a + "\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [e.UTM]
            },
            {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            },
            e.CLCM, e.CBCM]
        },
        c, {
            cN: "meta",
            b: "@[A-Za-z]+"
        }]
    }
});
hljs.registerLanguage("elixir",
function(e) {
    var r = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",
    n = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    b = "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote",
    c = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        l: r,
        k: b
    },
    a = {
        cN: "string",
        c: [e.BE, c],
        v: [{
            b: /'/,
            e: /'/
        },
        {
            b: /"/,
            e: /"/
        }]
    },
    i = {
        cN: "function",
        bK: "def defp defmacro",
        e: /\B\b/,
        c: [e.inherit(e.TM, {
            b: r,
            endsParent: !0
        })]
    },
    s = e.inherit(i, {
        cN: "class",
        bK: "defmodule defrecord",
        e: /\bdo\b|$|;/
    }),
    l = [a, e.HCM, s, i, {
        cN: "symbol",
        b: ":",
        c: [a, {
            b: n
        }],
        r: 0
    },
    {
        cN: "symbol",
        b: r + ":",
        r: 0
    },
    {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    },
    {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    },
    {
        b: "->"
    },
    {
        b: "(" + e.RSR + ")\\s*",
        c: [e.HCM, {
            cN: "regexp",
            i: "\\n",
            c: [e.BE, c],
            v: [{
                b: "/",
                e: "/[a-z]*"
            },
            {
                b: "%r\\[",
                e: "\\][a-z]*"
            }]
        }],
        r: 0
    }];
    return c.c = l,
    {
        l: r,
        k: b,
        c: l
    }
});
hljs.registerLanguage("cpp",
function(t) {
    var e = {
        cN: "keyword",
        b: "\\b[a-z\\d_]*_t\\b"
    },
    r = {
        cN: "string",
        v: [t.inherit(t.QSM, {
            b: '((u8?|U)|L)?"'
        }), {
            b: '(u8?|U)?R"',
            e: '"',
            c: [t.BE]
        },
        {
            b: "'\\\\?.",
            e: "'",
            i: "."
        }]
    },
    i = {
        cN: "number",
        v: [{
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        },
        {
            b: t.CNR
        }],
        r: 0
    },
    s = {
        cN: "meta",
        b: "#",
        e: "$",
        k: {
            "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef"
        },
        c: [{
            b: /\\\n/,
            r: 0
        },
        {
            bK: "include",
            e: "$",
            k: {
                "meta-keyword": "include"
            },
            c: [t.inherit(r, {
                cN: "meta-string"
            }), {
                cN: "meta-string",
                b: "<",
                e: ">",
                i: "\\n"
            }]
        },
        r, t.CLCM, t.CBCM]
    },
    a = t.IR + "\\s*\\(",
    c = {
        keyword: "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
        built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
        literal: "true false nullptr NULL"
    };
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: c,
        i: "</",
        c: [e, t.CLCM, t.CBCM, i, r, s, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: c,
            c: ["self", e]
        },
        {
            b: t.IR + "::",
            k: c
        },
        {
            bK: "new throw return else",
            r: 0
        },
        {
            cN: "function",
            b: "(" + t.IR + "[\\*&\\s]+)+" + a,
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: c,
            i: /[^\w\s\*&]/,
            c: [{
                b: a,
                rB: !0,
                c: [t.TM],
                r: 0
            },
            {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: c,
                r: 0,
                c: [t.CLCM, t.CBCM, r, i]
            },
            t.CLCM, t.CBCM, s]
        }]
    }
});
hljs.registerLanguage("perl",
function(e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
    r = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: t
    },
    s = {
        b: "->{",
        e: "}"
    },
    n = {
        v: [{
            b: /\$\d/
        },
        {
            b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
        },
        {
            b: /[\$%@][^\s\w{]/,
            r: 0
        }]
    },
    i = [e.BE, r, n],
    o = [n, e.HCM, e.C("^\\=\\w", "\\=cut", {
        eW: !0
    }), s, {
        cN: "string",
        c: i,
        v: [{
            b: "q[qwxr]?\\s*\\(",
            e: "\\)",
            r: 5
        },
        {
            b: "q[qwxr]?\\s*\\[",
            e: "\\]",
            r: 5
        },
        {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        },
        {
            b: "q[qwxr]?\\s*\\|",
            e: "\\|",
            r: 5
        },
        {
            b: "q[qwxr]?\\s*\\<",
            e: "\\>",
            r: 5
        },
        {
            b: "qw\\s+q",
            e: "q",
            r: 5
        },
        {
            b: "'",
            e: "'",
            c: [e.BE]
        },
        {
            b: '"',
            e: '"'
        },
        {
            b: "`",
            e: "`",
            c: [e.BE]
        },
        {
            b: "{\\w+}",
            c: [],
            r: 0
        },
        {
            b: "-?\\w+\\s*\\=\\>",
            c: [],
            r: 0
        }]
    },
    {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    },
    {
        b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [e.HCM, {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            r: 10
        },
        {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [e.BE],
            r: 0
        }]
    },
    {
        cN: "function",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        eE: !0,
        r: 5,
        c: [e.TM]
    },
    {
        b: "-\\w\\b",
        r: 0
    },
    {
        b: "^__DATA__$",
        e: "^__END__$",
        sL: "mojolicious",
        c: [{
            b: "^@@.*",
            e: "$",
            cN: "comment"
        }]
    }];
    return r.c = o,
    s.c = o,
    {
        aliases: ["pl"],
        k: t,
        c: o
    }
});
hljs.registerLanguage("actionscript",
function(e) {
    var a = "[a-zA-Z_$][a-zA-Z0-9_$]*",
    t = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)",
    c = {
        cN: "rest_arg",
        b: "[.]{3}",
        e: a,
        r: 10
    };
    return {
        aliases: ["as"],
        k: {
            keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
            literal: "true false null undefined"
        },
        c: [e.ASM, e.QSM, e.CLCM, e.CBCM, e.CNM, {
            cN: "class",
            bK: "package",
            e: "{",
            c: [e.TM]
        },
        {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            c: [{
                bK: "extends implements"
            },
            e.TM]
        },
        {
            cN: "meta",
            bK: "import include",
            e: ";",
            k: {
                "meta-keyword": "import include"
            }
        },
        {
            cN: "function",
            bK: "function",
            e: "[{;]",
            eE: !0,
            i: "\\S",
            c: [e.TM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: [e.ASM, e.QSM, e.CLCM, e.CBCM, c]
            },
            {
                b: ":\\s*" + t
            }]
        },
        e.METHOD_GUARD],
        i: /#/
    }
});
hljs.registerLanguage("css",
function(e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
    t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{
                        cN: "built_in",
                        b: /[\w-]+/
                    },
                    {
                        b: /\(/,
                        e: /\)/,
                        c: [e.ASM, e.QSM]
                    }]
                },
                e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "number",
                    b: "#[0-9A-Fa-f]+"
                },
                {
                    cN: "meta",
                    b: "!important"
                }]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {
            cN: "selector-id",
            b: /#[A-Za-z0-9_-]+/
        },
        {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        },
        {
            cN: "selector-attr",
            b: /\[/,
            e: /\]/,
            i: "$"
        },
        {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        },
        {
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        },
        {
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            },
            {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [e.ASM, e.QSM, e.CSSNM]
            }]
        },
        {
            cN: "selector-tag",
            b: c,
            r: 0
        },
        {
            b: "{",
            e: "}",
            i: /\S/,
            c: [e.CBCM, t]
        }]
    }
});
hljs.registerLanguage("dockerfile",
function(e) {
    return {
        aliases: ["docker"],
        cI: !0,
        k: "from maintainer cmd expose add copy entrypoint volume user workdir onbuild run env label",
        c: [e.HCM, {
            k: "run cmd entrypoint volume add copy workdir onbuild label",
            b: /^ *(onbuild +)?(run|cmd|entrypoint|volume|add|copy|workdir|label) +/,
            starts: {
                e: /[^\\]\n/,
                sL: "bash"
            }
        },
        {
            k: "from maintainer expose env user onbuild",
            b: /^ *(onbuild +)?(from|maintainer|expose|env|user|onbuild) +/,
            e: /[^\\]\n/,
            c: [e.ASM, e.QSM, e.NM, e.HCM]
        }]
    }
});
hljs.registerLanguage("diff",
function(e) {
    return {
        aliases: ["patch"],
        c: [{
            cN: "meta",
            r: 10,
            v: [{
                b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
            },
            {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            },
            {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            }]
        },
        {
            cN: "comment",
            v: [{
                b: /Index: /,
                e: /$/
            },
            {
                b: /=====/,
                e: /=====$/
            },
            {
                b: /^\-\-\-/,
                e: /$/
            },
            {
                b: /^\*{3} /,
                e: /$/
            },
            {
                b: /^\+\+\+/,
                e: /$/
            },
            {
                b: /\*{5}/,
                e: /\*{5}$/
            }]
        },
        {
            cN: "addition",
            b: "^\\+",
            e: "$"
        },
        {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        },
        {
            cN: "addition",
            b: "^\\!",
            e: "$"
        }]
    }
});
hljs.registerLanguage("makefile",
function(e) {
    var a = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [e.BE]
    };
    return {
        aliases: ["mk", "mak"],
        c: [e.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {
                e: /\s*\W*=/,
                eE: !0,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [a]
                }
            }
        },
        {
            cN: "section",
            b: /^[\w]+:\s*$/
        },
        {
            cN: "meta",
            b: /^\.PHONY:/,
            e: /$/,
            k: {
                "meta-keyword": ".PHONY"
            },
            l: /[\.\w]+/
        },
        {
            b: /^\t+/,
            e: /$/,
            r: 0,
            c: [e.QSM, a]
        }]
    }
});
hljs.registerLanguage("processing",
function(e) {
    return {
        k: {
            keyword: "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
            literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
            title: "setup draw",
            built_in: "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"
        },
        c: [e.CLCM, e.CBCM, e.ASM, e.QSM, e.CNM]
    }
});
hljs.registerLanguage("glsl",
function(e) {
    return {
        k: {
            keyword: "break continue discard do else for if return whileattribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
            type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
            built_in: "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
            literal: "true false"
        },
        i: '"',
        c: [e.CLCM, e.CBCM, e.CNM, {
            cN: "meta",
            b: "#",
            e: "$"
        }]
    }
});
hljs.registerLanguage("ini",
function(e) {
    var b = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: "'''",
            e: "'''",
            r: 10
        },
        {
            b: '"""',
            e: '"""',
            r: 10
        },
        {
            b: '"',
            e: '"'
        },
        {
            b: "'",
            e: "'"
        }]
    };
    return {
        aliases: ["toml"],
        cI: !0,
        i: /\S/,
        c: [e.C(";", "$"), e.HCM, {
            cN: "section",
            b: /^\s*\[+/,
            e: /\]+/
        },
        {
            b: /^[a-z0-9\[\]_-]+\s*=\s*/,
            e: "$",
            rB: !0,
            c: [{
                cN: "attr",
                b: /[a-z0-9\[\]_-]+/
            },
            {
                b: /=/,
                eW: !0,
                r: 0,
                c: [{
                    cN: "literal",
                    b: /\bon|off|true|false|yes|no\b/
                },
                {
                    cN: "variable",
                    v: [{
                        b: /\$[\w\d"][\w\d_]*/
                    },
                    {
                        b: /\$\{(.*?)}/
                    }]
                },
                b, {
                    cN: "number",
                    b: /([\+\-]+)?[\d]+_[\d_]+/
                },
                e.NM]
            }]
        }]
    }
});
hljs.registerLanguage("apache",
function(e) {
    var r = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        aliases: ["apacheconf"],
        cI: !0,
        c: [e.HCM, {
            cN: "section",
            b: "</?",
            e: ">"
        },
        {
            cN: "attribute",
            b: /\w+/,
            r: 0,
            k: {
                nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [{
                    cN: "meta",
                    b: "\\s\\[",
                    e: "\\]$"
                },
                {
                    cN: "variable",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", r]
                },
                r, e.QSM]
            }
        }],
        i: /\S/
    }
});
hljs.registerLanguage("scala",
function(e) {
    var t = {
        cN: "meta",
        b: "@[A-Za-z]+"
    },
    a = {
        cN: "subst",
        v: [{
            b: "\\$[A-Za-z0-9_]+"
        },
        {
            b: "\\${",
            e: "}"
        }]
    },
    r = {
        cN: "string",
        v: [{
            b: '"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        },
        {
            b: '"""',
            e: '"""',
            r: 10
        },
        {
            b: '[a-z]+"',
            e: '"',
            i: "\\n",
            c: [e.BE, a]
        },
        {
            cN: "string",
            b: '[a-z]+"""',
            e: '"""',
            c: [a],
            r: 10
        }]
    },
    c = {
        cN: "symbol",
        b: "'\\w[\\w\\d_]*(?!')"
    },
    i = {
        cN: "type",
        b: "\\b[A-Z][A-Za-z0-9_]*",
        r: 0
    },
    s = {
        cN: "title",
        b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
        r: 0
    },
    n = {
        cN: "class",
        bK: "class object trait type",
        e: /[:={\[\n;]/,
        eE: !0,
        c: [{
            bK: "extends with",
            r: 10
        },
        {
            b: /\[/,
            e: /\]/,
            eB: !0,
            eE: !0,
            r: 0,
            c: [i]
        },
        {
            cN: "params",
            b: /\(/,
            e: /\)/,
            eB: !0,
            eE: !0,
            r: 0,
            c: [i]
        },
        s]
    },
    l = {
        cN: "function",
        bK: "def",
        e: /[:={\[(\n;]/,
        eE: !0,
        c: [s]
    };
    return {
        k: {
            literal: "true false null",
            keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
        },
        c: [e.CLCM, e.CBCM, r, c, i, l, n, e.CNM, t]
    }
});
hljs.registerLanguage("less",
function(e) {
    var r = "[\\w-]+",
    t = "(" + r + "|@{" + r + "})",
    a = [],
    c = [],
    s = function(e) {
        return {
            cN: "string",
            b: "~?" + e + ".*?" + e
        }
    },
    b = function(e, r, t) {
        return {
            cN: e,
            b: r,
            r: t
        }
    },
    i = {
        b: "\\(",
        e: "\\)",
        c: c,
        r: 0
    };
    c.push(e.CLCM, e.CBCM, s("'"), s('"'), e.CSSNM, {
        b: "(url|data-uri)\\(",
        starts: {
            cN: "string",
            e: "[\\)\\n]",
            eE: !0
        }
    },
    b("number", "#[0-9A-Fa-f]+\\b"), i, b("variable", "@@?" + r, 10), b("variable", "@{" + r + "}"), b("built_in", "~?`[^`]*?`"), {
        cN: "attribute",
        b: r + "\\s*:",
        e: ":",
        rB: !0,
        eE: !0
    },
    {
        cN: "meta",
        b: "!important"
    });
    var n = c.concat({
        b: "{",
        e: "}",
        c: a
    }),
    o = {
        bK: "when",
        eW: !0,
        c: [{
            bK: "and not"
        }].concat(c)
    },
    u = {
        cN: "attribute",
        b: t,
        e: ":",
        eE: !0,
        c: [e.CLCM, e.CBCM],
        i: /\S/,
        starts: {
            e: "[;}]",
            rE: !0,
            c: c,
            i: "[<=$]"
        }
    },
    C = {
        cN: "keyword",
        b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
            e: "[;{}]",
            rE: !0,
            c: c,
            r: 0
        }
    },
    l = {
        cN: "variable",
        v: [{
            b: "@" + r + "\\s*:",
            r: 15
        },
        {
            b: "@" + r
        }],
        starts: {
            e: "[;}]",
            rE: !0,
            c: n
        }
    },
    p = {
        v: [{
            b: "[\\.#:&\\[]",
            e: "[;{}]"
        },
        {
            b: t + "[^;]*{",
            e: "{"
        }],
        rB: !0,
        rE: !0,
        i: "[<='$\"]",
        c: [e.CLCM, e.CBCM, o, b("keyword", "all\\b"), b("variable", "@{" + r + "}"), b("selector-tag", t + "%?", 0), b("selector-id", "#" + t), b("selector-class", "\\." + t, 0), b("selector-tag", "&", 0), {
            cN: "selector-attr",
            b: "\\[",
            e: "\\]"
        },
        {
            b: "\\(",
            e: "\\)",
            c: n
        },
        {
            b: "!important"
        }]
    };
    return a.push(e.CLCM, e.CBCM, C, l, p, u),
    {
        cI: !0,
        i: "[=>'/<($\"]",
        c: a
    }
});
hljs.registerLanguage("markdown",
function(e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "section",
            v: [{
                b: "^#{1,6}",
                e: "$"
            },
            {
                b: "^.+?\\n[=-]{2,}$"
            }]
        },
        {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        },
        {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        },
        {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        },
        {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            },
            {
                b: "_.+?_",
                r: 0
            }]
        },
        {
            cN: "quote",
            b: "^>\\s+",
            e: "$"
        },
        {
            cN: "code",
            v: [{
                b: "`.+?`"
            },
            {
                b: "^( {4}| )",
                e: "$",
                r: 0
            }]
        },
        {
            b: "^[-\\*]{3,}",
            e: "$"
        },
        {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "string",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            },
            {
                cN: "link",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            },
            {
                cN: "symbol",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        },
        {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [{
                cN: "symbol",
                b: "\\[",
                e: "\\]:",
                eB: !0,
                eE: !0,
                starts: {
                    cN: "link",
                    e: "$"
                }
            }]
        }]
    }
});
hljs.registerLanguage("mel",
function(e) {
    return {
        k: "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
        i: "</",
        c: [e.CNM, e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE]
        },
        {
            b: "[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)"
        },
        e.CLCM, e.CBCM]
    }
});
hljs.registerLanguage("dart",
function(e) {
    var t = {
        cN: "subst",
        b: "\\$\\{",
        e: "}",
        k: "true false null this is new super"
    },
    r = {
        cN: "string",
        v: [{
            b: "r'''",
            e: "'''"
        },
        {
            b: 'r"""',
            e: '"""'
        },
        {
            b: "r'",
            e: "'",
            i: "\\n"
        },
        {
            b: 'r"',
            e: '"',
            i: "\\n"
        },
        {
            b: "'''",
            e: "'''",
            c: [e.BE, t]
        },
        {
            b: '"""',
            e: '"""',
            c: [e.BE, t]
        },
        {
            b: "'",
            e: "'",
            i: "\\n",
            c: [e.BE, t]
        },
        {
            b: '"',
            e: '"',
            i: "\\n",
            c: [e.BE, t]
        }]
    };
    t.c = [e.CNM, r];
    var n = {
        keyword: "assert async await break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch sync this throw true try var void while with yield abstract as dynamic export external factory get implements import library operator part set static typedef",
        built_in: "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"
    };
    return {
        k: n,
        c: [r, e.C("/\\*\\*", "\\*/", {
            sL: "markdown"
        }), e.C("///", "$", {
            sL: "markdown"
        }), e.CLCM, e.CBCM, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            c: [{
                bK: "extends implements"
            },
            e.UTM]
        },
        e.CNM, {
            cN: "meta",
            b: "@[A-Za-z]+"
        },
        {
            b: "=>"
        }]
    }
});
hljs.registerLanguage("clojure",
function(e) {
    var t = {
        "builtin-name": "def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
    },
    r = "a-zA-Z_\\-!.?+*=<>&#'",
    n = "[" + r + "][" + r + "0-9/;:]*",
    a = "[-+]?\\d+(\\.\\d+)?",
    o = {
        b: n,
        r: 0
    },
    s = {
        cN: "number",
        b: a,
        r: 0
    },
    i = e.inherit(e.QSM, {
        i: null
    }),
    c = e.C(";", "$", {
        r: 0
    }),
    d = {
        cN: "literal",
        b: /\b(true|false|nil)\b/
    },
    l = {
        b: "[\\[\\{]",
        e: "[\\]\\}]"
    },
    m = {
        cN: "comment",
        b: "\\^" + n
    },
    p = e.C("\\^\\{", "\\}"),
    u = {
        cN: "symbol",
        b: "[:]" + n
    },
    f = {
        b: "\\(",
        e: "\\)"
    },
    h = {
        eW: !0,
        r: 0
    },
    y = {
        k: t,
        l: n,
        cN: "name",
        b: n,
        starts: h
    },
    b = [f, i, m, p, c, u, l, s, d, o];
    return f.c = [e.C("comment", ""), y, h],
    h.c = b,
    l.c = b,
    {
        aliases: ["clj"],
        i: /\S/,
        c: [f, i, m, p, c, u, l, s, d]
    }
});
hljs.registerLanguage("json",
function(e) {
    var i = {
        literal: "true false null"
    },
    n = [e.QSM, e.CNM],
    r = {
        e: ",",
        eW: !0,
        eE: !0,
        c: n,
        k: i
    },
    t = {
        b: "{",
        e: "}",
        c: [{
            cN: "attr",
            b: /"/,
            e: /"/,
            c: [e.BE],
            i: "\\n"
        },
        e.inherit(r, {
            b: /:/
        })],
        i: "\\S"
    },
    c = {
        b: "\\[",
        e: "\\]",
        c: [e.inherit(r)],
        i: "\\S"
    };
    return n.splice(n.length, 0, t, c),
    {
        c: n,
        k: i,
        i: "\\S"
    }
});

hljs.registerLanguage("sql",
function(e) {
    var t = e.C("--", "$");
    return {
        cI: !0,
        i: /[<>{}*]/,
        c: [{
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
            e: /;/,
            eW: !0,
            k: {
                keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE, {
                    b: "''"
                }]
            },
            {
                cN: "string",
                b: '"',
                e: '"',
                c: [e.BE, {
                    b: '""'
                }]
            },
            {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE]
            },
            e.CNM, e.CBCM, t]
        },
        e.CBCM, t]
    }
});
hljs.registerLanguage("lisp",
function(b) {
    var e = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",
    c = "\\|[^]*?\\|",
    r = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",
    a = {
        cN: "meta",
        b: "^#!",
        e: "$"
    },
    l = {
        cN: "literal",
        b: "\\b(t{1}|nil)\\b"
    },
    n = {
        cN: "number",
        v: [{
            b: r,
            r: 0
        },
        {
            b: "#(b|B)[0-1]+(/[0-1]+)?"
        },
        {
            b: "#(o|O)[0-7]+(/[0-7]+)?"
        },
        {
            b: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"
        },
        {
            b: "#(c|C)\\(" + r + " +" + r,
            e: "\\)"
        }]
    },
    i = b.inherit(b.QSM, {
        i: null
    }),
    t = b.C(";", "$", {
        r: 0
    }),
    s = {
        b: "\\*",
        e: "\\*"
    },
    u = {
        cN: "symbol",
        b: "[:&]" + e
    },
    d = {
        b: e,
        r: 0
    },
    f = {
        b: c
    },
    m = {
        b: "\\(",
        e: "\\)",
        c: ["self", l, i, n, d]
    },
    o = {
        c: [n, i, s, u, m, d],
        v: [{
            b: "['`]\\(",
            e: "\\)"
        },
        {
            b: "\\(quote ",
            e: "\\)",
            k: {
                name: "quote"
            }
        },
        {
            b: "'" + c
        }]
    },
    v = {
        v: [{
            b: "'" + e
        },
        {
            b: "#'" + e + "(::" + e + ")*"
        }]
    },
    N = {
        b: "\\(\\s*",
        e: "\\)"
    },
    A = {
        eW: !0,
        r: 0
    };
    return N.c = [{
        cN: "name",
        v: [{
            b: e
        },
        {
            b: c
        }]
    },
    A],
    A.c = [o, v, N, l, n, i, t, s, u, f, d],
    {
        i: /\S/,
        c: [n, a, l, i, t, o, v, N, d]
    }
});
hljs.registerLanguage("cs",
function(e) {
    var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
    r = e.IR + "(<" + e.IR + ">)?";
    return {
        aliases: ["csharp"],
        k: t,
        i: /::/,
        c: [e.C("///", "$", {
            rB: !0,
            c: [{
                cN: "doctag",
                v: [{
                    b: "///",
                    r: 0
                },
                {
                    b: "<!--|-->"
                },
                {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), e.CLCM, e.CBCM, {
            cN: "meta",
            b: "#",
            e: "$",
            k: {
                "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
            }
        },
        {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{
                b: '""'
            }]
        },
        e.ASM, e.QSM, e.CNM, {
            bK: "class interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.TM, e.CLCM, e.CBCM]
        },
        {
            bK: "namespace",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.inherit(e.TM, {
                b: "[a-zA-Z](\\.?\\w)*"
            }), e.CLCM, e.CBCM]
        },
        {
            bK: "new return throw await",
            r: 0
        },
        {
            cN: "function",
            b: "(" + r + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [e.TM],
                r: 0
            },
            {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                k: t,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            },
            e.CLCM, e.CBCM]
        }]
    }
});
hljs.registerLanguage("swift",
function(e) {
    var i = {
        keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
        literal: "true false nil",
        built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
    },
    t = {
        cN: "type",
        b: "\\b[A-Z][\\w']*",
        r: 0
    },
    n = e.C("/\\*", "\\*/", {
        c: ["self"]
    }),
    r = {
        cN: "subst",
        b: /\\\(/,
        e: "\\)",
        k: i,
        c: []
    },
    a = {
        cN: "number",
        b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
        r: 0
    },
    o = e.inherit(e.QSM, {
        c: [r, e.BE]
    });
    return r.c = [a],
    {
        k: i,
        c: [o, e.CLCM, n, t, a, {
            cN: "function",
            bK: "func",
            e: "{",
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/,
                i: /\(/
            }), {
                b: /</,
                e: />/,
                i: />/
            },
            {
                cN: "params",
                b: /\(/,
                e: /\)/,
                endsParent: !0,
                k: i,
                c: ["self", a, o, e.CBCM, {
                    b: ":"
                }],
                i: /["']/
            }],
            i: /\[|%/
        },
        {
            cN: "class",
            bK: "struct protocol class extension enum",
            k: i,
            e: "\\{",
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            })]
        },
        {
            cN: "meta",
            b: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
        },
        {
            bK: "import",
            e: /$/,
            c: [e.CLCM, n]
        }]
    }
});
hljs.registerLanguage("ruby",
function(e) {
    var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    c = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
    r = {
        cN: "doctag",
        b: "@[A-Za-z]+"
    },
    a = {
        b: "#<",
        e: ">"
    },
    s = [e.C("#", "$", {
        c: [r]
    }), e.C("^\\=begin", "^\\=end", {
        c: [r],
        r: 10
    }), e.C("^__END__", "\\n$")],
    n = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: c
    },
    t = {
        cN: "string",
        c: [e.BE, n],
        v: [{
            b: /'/,
            e: /'/
        },
        {
            b: /"/,
            e: /"/
        },
        {
            b: /`/,
            e: /`/
        },
        {
            b: "%[qQwWx]?\\(",
            e: "\\)"
        },
        {
            b: "%[qQwWx]?\\[",
            e: "\\]"
        },
        {
            b: "%[qQwWx]?{",
            e: "}"
        },
        {
            b: "%[qQwWx]?<",
            e: ">"
        },
        {
            b: "%[qQwWx]?/",
            e: "/"
        },
        {
            b: "%[qQwWx]?%",
            e: "%"
        },
        {
            b: "%[qQwWx]?-",
            e: "-"
        },
        {
            b: "%[qQwWx]?\\|",
            e: "\\|"
        },
        {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        }]
    },
    i = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        endsParent: !0,
        k: c
    },
    d = [t, a, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            b: "<\\s*",
            c: [{
                b: "(" + e.IR + "::)?" + e.IR
            }]
        }].concat(s)
    },
    {
        cN: "function",
        bK: "def",
        e: "$|;",
        c: [e.inherit(e.TM, {
            b: b
        }), i].concat(s)
    },
    {
        cN: "symbol",
        b: e.UIR + "(\\!|\\?)?:",
        r: 0
    },
    {
        cN: "symbol",
        b: ":",
        c: [t, {
            b: b
        }],
        r: 0
    },
    {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    },
    {
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    },
    {
        b: "(" + e.RSR + ")\\s*",
        c: [a, {
            cN: "regexp",
            c: [e.BE, n],
            i: /\n/,
            v: [{
                b: "/",
                e: "/[a-z]*"
            },
            {
                b: "%r{",
                e: "}[a-z]*"
            },
            {
                b: "%r\\(",
                e: "\\)[a-z]*"
            },
            {
                b: "%r!",
                e: "![a-z]*"
            },
            {
                b: "%r\\[",
                e: "\\][a-z]*"
            }]
        }].concat(s),
        r: 0
    }].concat(s);
    n.c = d,
    i.c = d;
    var o = "[>?]>",
    l = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
    u = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
    w = [{
        b: /^\s*=>/,
        starts: {
            e: "$",
            c: d
        }
    },
    {
        cN: "meta",
        b: "^(" + o + "|" + l + "|" + u + ")",
        starts: {
            e: "$",
            c: d
        }
    }];
    return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        k: c,
        i: /\/\*/,
        c: s.concat(w).concat(d)
    }
});
hljs.registerLanguage("http",
function(e) {
    var t = "HTTP/[0-9\\.]+";
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{
            b: "^" + t,
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        },
        {
            b: "^[A-Z]+ (.*?) " + t + "$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            },
            {
                b: t
            },
            {
                cN: "keyword",
                b: "[A-Z]+"
            }]
        },
        {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                e: "$",
                r: 0
            }
        },
        {
            b: "\\n\\n",
            starts: {
                sL: [],
                eW: !0
            }
        }]
    }
});
hljs.registerLanguage("dns",
function(d) {
    return {
        aliases: ["bind", "zone"],
        k: {
            keyword: "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT"
        },
        c: [d.C(";", "$"), {
            cN: "meta",
            b: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
        },
        {
            cN: "number",
            b: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
        },
        {
            cN: "number",
            b: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
        },
        d.inherit(d.NM, {
            b: /\b\d+[dhwm]?/
        })]
    }
});
hljs.registerLanguage("objectivec",
function(e) {
    var t = {
        cN: "built_in",
        b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI|XC)\\w+"
    },
    i = {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    },
    n = /[a-zA-Z@][a-zA-Z0-9_]*/,
    o = "@interface @class @protocol @implementation";
    return {
        aliases: ["mm", "objc", "obj-c"],
        k: i,
        l: n,
        i: "</",
        c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
            cN: "string",
            v: [{
                b: '@"',
                e: '"',
                i: "\\n",
                c: [e.BE]
            },
            {
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            }]
        },
        {
            cN: "meta",
            b: "#",
            e: "$",
            c: [{
                cN: "meta-string",
                v: [{
                    b: '"',
                    e: '"'
                },
                {
                    b: "<",
                    e: ">"
                }]
            }]
        },
        {
            cN: "class",
            b: "(" + o.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: o,
            l: n,
            c: [e.UTM]
        },
        {
            b: "\\." + e.UIR,
            r: 0
        }]
    }
});
hljs.registerLanguage("nginx",
function(e) {
    var r = {
        cN: "variable",
        v: [{
            b: /\$\d+/
        },
        {
            b: /\$\{/,
            e: /}/
        },
        {
            b: "[\\$\\@]" + e.UIR
        }]
    },
    b = {
        eW: !0,
        l: "[a-z/_]+",
        k: {
            literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        r: 0,
        i: "=>",
        c: [e.HCM, {
            cN: "string",
            c: [e.BE, r],
            v: [{
                b: /"/,
                e: /"/
            },
            {
                b: /'/,
                e: /'/
            }]
        },
        {
            b: "([a-z]+):/",
            e: "\\s",
            eW: !0,
            eE: !0,
            c: [r]
        },
        {
            cN: "regexp",
            c: [e.BE, r],
            v: [{
                b: "\\s\\^",
                e: "\\s|{|;",
                rE: !0
            },
            {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: !0
            },
            {
                b: "\\*(\\.[a-z\\-]+)+"
            },
            {
                b: "([a-z\\-]+\\.)+\\*"
            }]
        },
        {
            cN: "number",
            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        },
        {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        },
        r]
    };
    return {
        aliases: ["nginxconf"],
        c: [e.HCM, {
            b: e.UIR + "\\s+{",
            rB: !0,
            e: "{",
            c: [{
                cN: "section",
                b: e.UIR
            }],
            r: 0
        },
        {
            b: e.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [{
                cN: "attribute",
                b: e.UIR,
                starts: b
            }],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
});
</script>