(function() {
    /**
     * @param {Object} value
     * @return {?}
     */
    function log(value) {
        throw value;
    }
    /**
     * @param {string} params
     * @return {?}
     */
    function apply(params) {
        params = params.split(".");
        var root = global;
        var part;
        for (; part = params.shift();) {
            if (root[part] != value) {
                root = root[part];
            } else {
                return value;
            }
        }
        return root;
    }
    /**
     * @return {undefined}
     */
    function modId() {}
    /**
     * @param {Function} obj
     * @return {undefined}
     */
    function has(obj) {
        /**
         * @return {?}
         */
        obj.getInstance = function() {
            return obj.fe ? obj.fe : obj.fe = new obj;
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function typeOf(value) {
        /** @type {string} */
        var type = typeof value;
        if ("object" == type) {
            if (value) {
                if (value instanceof Array) {
                    return "array";
                }
                if (value instanceof Object) {
                    return type;
                }
                /** @type {string} */
                var isFunction = Object.prototype.toString.call(value);
                if ("[object Window]" == isFunction) {
                    return "object";
                }
                if ("[object Array]" == isFunction || "number" == typeof value.length && ("undefined" != typeof value.splice && ("undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("splice")))) {
                    return "array";
                }
                if ("[object Function]" == isFunction || "undefined" != typeof value.call && ("undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("call"))) {
                    return "function";
                }
            } else {
                return "null";
            }
        } else {
            if ("function" == type && "undefined" == typeof value.call) {
                return "object";
            }
        }
        return type;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function isFunction(value) {
        return value !== element;
    }
    /**
     * @param {?} object
     * @return {?}
     */
    function isArray(object) {
        return "array" == typeOf(object);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isObject(value) {
        var type = typeOf(value);
        return "array" == type || "object" == type && "number" == typeof value.length;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    function isString(val) {
        return "string" == typeof val;
    }
    /**
     * @param {Object} fn
     * @return {?}
     */
    function proxy(fn) {
        return "function" == typeOf(fn);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    function isRegExp(val) {
        /** @type {string} */
        var type = typeof val;
        return "object" == type && val != value || "function" == type;
    }
    /**
     * @param {Object} s
     * @return {?}
     */
    function unescape(s) {
        return s[wc] || (s[wc] = ++dictSize);
    }
    /**
     * @param {Function} fn
     * @param {Object} obj
     * @param {?} _xhr
     * @return {?}
     */
    function defer(fn, obj, _xhr) {
        return fn.call.apply(fn.bind, arguments);
    }
    /**
     * @param {Function} fn
     * @param {Object} obj
     * @param {?} _xhr
     * @return {?}
     */
    function $goog$bindJs_$(fn, obj, _xhr) {
        if (!fn) {
            log(Error());
        }
        if (2 < arguments.length) {
            /** @type {Array.<?>} */
            var args = Array.prototype.slice.call(arguments, 2);
            return function() {
                /** @type {Array.<?>} */
                var newArgs = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(newArgs, args);
                return fn.apply(obj, newArgs);
            };
        }
        return function() {
            return fn.apply(obj, arguments);
        };
    }
    /**
     * @param {Function} fn
     * @param {Object} obj
     * @param {?} _xhr
     * @return {?}
     */
    function bind(fn, obj, _xhr) {
        /** @type {function (Function, Object, ?): ?} */
        bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? defer : $goog$bindJs_$;
        return bind.apply(value, arguments);
    }
    /**
     * @param {Function} fn
     * @param {Object} checkElement
     * @return {?}
     */
    function $goog$partial$(fn, checkElement) {
        /** @type {Array.<?>} */
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            /** @type {Array.<?>} */
            var newArgs = Array.prototype.slice.call(arguments);
            newArgs.unshift.apply(newArgs, args);
            return fn.apply(this, newArgs);
        };
    }
    /**
     * @param {string} css
     * @param {Object} files
     * @return {?}
     */
    function minify(css, files) {
        var map = files || {};
        var letter;
        for (letter in map) {
            var replacement = ("" + map[letter]).replace(/\$/g, "$$$$");
            css = css.replace(RegExp("\\{\\$" + letter + "\\}", "gi"), replacement);
        }
        return css;
    }
    /**
     * @param {string} param
     * @param {Function} name
     * @return {undefined}
     */
    function run(param, name) {
        var pathConfig = param.split(".");
        var pxs = global;
        if (!(pathConfig[0] in pxs)) {
            if (pxs.execScript) {
                pxs.execScript("var " + pathConfig[0]);
            }
        }
        var i;
        for (; pathConfig.length && (i = pathConfig.shift());) {
            if (!pathConfig.length && isFunction(name)) {
                /** @type {Function} */
                pxs[i] = name;
            } else {
                pxs = pxs[i] ? pxs[i] : pxs[i] = {};
            }
        }
    }
    /**
     * @param {Function} obj
     * @param {Function} type
     * @return {undefined}
     */
    function factory(obj, type) {
        /**
         * @return {undefined}
         */
        function F() {}
        F.prototype = type.prototype;
        obj.J = type.prototype;
        obj.prototype = new F;
    }
    /**
     * @param {string} string
     * @param {string} str
     * @return {?}
     */
    function stringToArray(string, str) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
            /** @type {string} */
            var value = String(arguments[i]).replace(/\$/g, "$$$$");
            string = string.replace(/\%s/, value);
        }
        return string;
    }
    /**
     * @param {?} qualifier
     * @return {?}
     */
    function interpret(qualifier) {
        return /^[\s\xa0]*$/.test(qualifier);
    }
    /**
     * @param {string} className
     * @return {?}
     */
    function mark(className) {
        return className.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    }
    /**
     * @param {?} str
     * @param {?} value
     * @return {?}
     */
    function slugify(str, value) {
        /** @type {string} */
        var left = String(str).toLowerCase();
        /** @type {string} */
        var right = String(value).toLowerCase();
        return left < right ? -1 : left == right ? 0 : 1;
    }
    /**
     * @param {string} string
     * @return {?}
     */
    function _decode(string) {
        return decodeURIComponent(string.replace(/\+/g, " "));
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function encode(value) {
        if (!rchecked.test(value)) {
            return value;
        }
        if (-1 != value.indexOf("&")) {
            value = value.replace(rxhtmlTag, "&amp;");
        }
        if (-1 != value.indexOf("<")) {
            value = value.replace(reChars, "&lt;");
        }
        if (-1 != value.indexOf(">")) {
            value = value.replace(r20, "&gt;");
        }
        if (-1 != value.indexOf('"')) {
            value = value.replace(rreturn, "&quot;");
        }
        return value;
    }
    /**
     * @param {?} a
     * @return {?}
     */
    function download(a) {
        if (-1 != a.indexOf("&")) {
            if ("document" in global) {
                var values = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                };
                /** @type {Element} */
                var div = document.createElement("div");
                a = a.replace(q, function(s, entity) {
                    var value = values[s];
                    if (value) {
                        return value;
                    }
                    if ("#" == entity.charAt(0)) {
                        /** @type {number} */
                        var b = Number("0" + entity.substr(1));
                        if (!isNaN(b)) {
                            /** @type {string} */
                            value = String.fromCharCode(b);
                        }
                    }
                    if (!value) {
                        /** @type {string} */
                        div.innerHTML = s + " ";
                        /** @type {string} */
                        value = div.firstChild.nodeValue.slice(0, -1);
                    }
                    return values[s] = value;
                });
            } else {
                a = a.replace(/&([^;]+);/g, function(file, entity) {
                    switch (entity) {
                        case "amp":
                            return "&";
                        case "lt":
                            return "<";
                        case "gt":
                            return ">";
                        case "quot":
                            return '"';
                        default:
                            if ("#" == entity.charAt(0)) {
                                /** @type {number} */
                                var b = Number("0" + entity.substr(1));
                                if (!isNaN(b)) {
                                    return String.fromCharCode(b);
                                }
                            }
                            return file;
                    }
                });
            }
        }
        return a;
    }
    /**
     * @param {?} values
     * @param {string} style
     * @return {?}
     */
    function normalize(values, style) {
        /** @type {number} */
        var normalized = 0;
        var v1Subs = mark(String(values)).split(".");
        var v2Subs = mark(String(style)).split(".");
        /** @type {number} */
        var subCount = Math.max(v1Subs.length, v2Subs.length);
        /** @type {number} */
        var subIdx = 0;
        for (; 0 == normalized && subIdx < subCount; subIdx++) {
            var value = v1Subs[subIdx] || "";
            var v2Sub = v2Subs[subIdx] || "";
            /** @type {RegExp} */
            var re = RegExp("(\\d*)(\\D*)", "g");
            /** @type {RegExp} */
            var regex = RegExp("(\\d*)(\\D*)", "g");
            do {
                /** @type {Array} */
                var a = re.exec(value) || ["", "", ""];
                /** @type {Array} */
                var b = regex.exec(v2Sub) || ["", "", ""];
                if (0 == a[0].length && 0 == b[0].length) {
                    break;
                }
                /** @type {number} */
                normalized = ((0 == a[1].length ? 0 : parseInt(a[1], 10)) < (0 == b[1].length ? 0 : parseInt(b[1], 10)) ? -1 : (0 == a[1].length ? 0 : parseInt(a[1], 10)) > (0 == b[1].length ? 0 : parseInt(b[1], 10)) ? 1 : 0) || (((0 == a[2].length) < (0 == b[2].length) ? -1 : (0 == a[2].length) > (0 == b[2].length) ? 1 : 0) || (a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0));
            } while (0 == normalized);
        }
        return normalized;
    }
    /**
     * @param {string} arr
     * @param {Function} obj
     * @return {?}
     */
    function method(arr, obj) {
        var i = some(arr, obj, element);
        return 0 > i ? value : isString(arr) ? arr.charAt(i) : arr[i];
    }
    /**
     * @param {string} arr
     * @param {Function} f
     * @param {?} opt_obj
     * @return {?}
     */
    function some(arr, f, opt_obj) {
        var e = arr.length;
        var arr2 = isString(arr) ? arr.split("") : arr;
        /** @type {number} */
        var i = 0;
        for (; i < e; i++) {
            if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @param {?} obj
     * @param {?} value
     * @return {?}
     */
    function copy(obj, value) {
        return 0 <= assert(obj, value);
    }
    /**
     * @param {Array} act
     * @return {undefined}
     */
    function matchArray(act) {
        if (!isArray(act)) {
            /** @type {number} */
            var prop = act.length - 1;
            for (; 0 <= prop; prop--) {
                delete act[prop];
            }
        }
        /** @type {number} */
        act.length = 0;
    }
    /**
     * @param {?} val
     * @param {?} actual
     * @return {undefined}
     */
    function assertEqual(val, actual) {
        var suiteView = assert(val, actual);
        if (0 <= suiteView) {
            isKind(val, suiteView);
        }
    }
    /**
     * @param {?} elems
     * @param {number} obj
     * @return {undefined}
     */
    function isKind(elems, obj) {
        proto.splice.call(elems, obj, 1);
    }
    /**
     * @param {(Array|NodeList)} object
     * @return {?}
     */
    function deepEqual(object) {
        var length = object.length;
        if (0 < length) {
            /** @type {Array} */
            var result = Array(length);
            /** @type {number} */
            var i = 0;
            for (; i < length; i++) {
                result[i] = object[i];
            }
            return result;
        }
        return [];
    }
    /**
     * @param {Array} data
     * @param {Array} target
     * @return {undefined}
     */
    function deepMatches(data, target) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
            var c = arguments[i];
            var func;
            if (isArray(c) || (func = isObject(c)) && c.hasOwnProperty("callee")) {
                data.push.apply(data, c);
            } else {
                if (func) {
                    var offset = data.length;
                    var cl = c.length;
                    /** @type {number} */
                    var j = 0;
                    for (; j < cl; j++) {
                        data[offset + j] = c[j];
                    }
                } else {
                    data.push(c);
                }
            }
        }
    }
    /**
     * @param {?} v
     * @param {number} obj
     * @param {number} recurring
     * @param {?} object
     * @return {undefined}
     */
    function toArray(v, obj, recurring, object) {
        proto.splice.apply(v, makeArray(arguments, 1));
    }
    /**
     * @param {Object} array
     * @param {number} recurring
     * @param {number} size
     * @return {?}
     */
    function makeArray(array, recurring, size) {
        return 2 >= arguments.length ? proto.slice.call(array, recurring) : proto.slice.call(array, recurring, size);
    }
    /**
     * @param {(boolean|number|string)} a
     * @param {(boolean|number|string)} b
     * @return {?}
     */
    function comparator(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
    }
    /**
     * @param {Object} x
     * @return {?}
     */
    function $(x) {
        x = x.className;
        return isString(x) && x.match(/\S+/g) || [];
    }
    /**
     * @param {?} obj
     * @param {string} name
     * @return {?}
     */
    function end(obj, name) {
        var c = $(obj);
        var args = makeArray(arguments, 1);
        var maxPerRow = c.length + args.length;
        isEmpty(c, args);
        obj.className = c.join(" ");
        return c.length == maxPerRow;
    }
    /**
     * @param {?} elem
     * @param {string} name
     * @return {?}
     */
    function removeClass(elem, name) {
        var item = $(elem);
        var args = makeArray(arguments, 1);
        var params = str(item, args);
        elem.className = params.join(" ");
        return params.length == item.length - args.length;
    }
    /**
     * @param {Array} str
     * @param {Array} arr
     * @return {undefined}
     */
    function isEmpty(str, arr) {
        /** @type {number} */
        var i = 0;
        for (; i < arr.length; i++) {
            if (!copy(str, arr[i])) {
                str.push(arr[i]);
            }
        }
    }
    /**
     * @param {?} a
     * @param {?} val
     * @return {?}
     */
    function str(a, val) {
        return md5_gg(a, function(isXML) {
            return !copy(val, isXML);
        });
    }
    /**
     * @param {Element} target
     * @param {string} b
     * @param {string} next_scope
     * @return {undefined}
     */
    function onEnd(target, b, next_scope) {
        var a = $(target);
        /** @type {boolean} */
        var block = t;
        /** @type {number} */
        var i = 0;
        for (; i < a.length; i++) {
            if (a[i] == b) {
                toArray(a, i--, 1);
                /** @type {boolean} */
                block = TRUE;
            }
        }
        if (block) {
            a.push(next_scope);
            target.className = a.join(" ");
        }
    }
    /**
     * @param {?} c
     * @param {?} name
     * @param {string} obj
     * @return {undefined}
     */
    function addClass(c, name, obj) {
        var a = $(c);
        if (isString(name)) {
            assertEqual(a, name);
        } else {
            if (isArray(name)) {
                a = str(a, name);
            }
        }
        if (isString(obj) && !copy(a, obj)) {
            a.push(obj);
        } else {
            if (isArray(obj)) {
                isEmpty(a, obj);
            }
        }
        c.className = a.join(" ");
    }
    /**
     * @param {?} value
     * @param {string} name
     * @return {?}
     */
    function same(value, name) {
        return copy($(value), name);
    }
    /**
     * @param {?} e
     * @param {string} name
     * @param {boolean} type
     * @return {undefined}
     */
    function done(e, name, type) {
        if (type) {
            end(e, name);
        } else {
            removeClass(e, name);
        }
    }
    /**
     * @param {?} data
     * @param {string} name
     * @return {?}
     */
    function validate(data, name) {
        /** @type {boolean} */
        var e = !same(data, name);
        done(data, name, e);
        return e;
    }
    /**
     * @param {Object} x
     * @param {Object} w
     * @return {undefined}
     */
    function Rect(x, w) {
        this.x = isFunction(x) ? x : 0;
        this.y = isFunction(w) ? w : 0;
    }
    /**
     * @param {number} a
     * @param {Object} b
     * @return {?}
     */
    function walk(a, b) {
        return new Rect(a.x - b.x, a.y - b.y);
    }
    /**
     * @param {number} width
     * @param {?} height
     * @return {undefined}
     */
    function Grid(width, height) {
        /** @type {number} */
        this.width = width;
        this.height = height;
    }
    /**
     * @param {Object} object
     * @param {Function} fn
     * @return {undefined}
     */
    function keys(object, fn) {
        var key;
        for (key in object) {
            fn.call(element, object[key], key, object);
        }
    }
    /**
     * @param {?} map
     * @return {?}
     */
    function dataURLToBlob(map) {
        var letter;
        for (letter in map) {
            return map[letter];
        }
    }
    /**
     * @param {Object} key
     * @return {?}
     */
    function pad(key) {
        /** @type {Array} */
        var temp = [];
        /** @type {number} */
        var pos = 0;
        var i;
        for (i in key) {
            /** @type {string} */
            temp[pos++] = i;
        }
        return temp;
    }
    /**
     * @param {Object} obj
     * @param {Function} f
     * @param {?} element
     * @return {?}
     */
    function attach(obj, f, element) {
        var key;
        for (key in obj) {
            if (f.call(element, obj[key], key, obj)) {
                return key;
            }
        }
    }
    /**
     * @param {?} el
     * @return {?}
     */
    function attrs(el) {
        var internalValues = {};
        var key;
        for (key in el) {
            internalValues[key] = el[key];
        }
        return internalValues;
    }
    /**
     * @param {Object} obj
     * @param {?} src
     * @return {undefined}
     */
    function warn(obj, src) {
        var key;
        var mixin;
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
            mixin = arguments[i];
            for (key in mixin) {
                obj[key] = mixin[key];
            }
            /** @type {number} */
            var j = 0;
            for (; j < desc.length; j++) {
                /** @type {string} */
                key = desc[j];
                if (Object.prototype.hasOwnProperty.call(mixin, key)) {
                    obj[key] = mixin[key];
                }
            }
        }
    }
    /**
     * @return {?}
     */
    function iter() {
        return global.navigator ? global.navigator.userAgent : value;
    }
    /**
     * @return {?}
     */
    function toVLQSigned() {
        return global.navigator;
    }
    /**
     * @return {?}
     */
    function iframeCssFixes() {
        var doc = global.document;
        return doc ? doc.documentMode : element;
    }
    /**
     * @param {string} p
     * @return {?}
     */
    function css(p) {
        return paramNames[p] || (paramNames[p] = 0 <= normalize(cDigit, p));
    }
    /**
     * @param {Object} elem
     * @return {?}
     */
    function getter(elem) {
        return elem ? new Data(getAttribute(elem)) : data_user || (data_user = new Data);
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function require(name) {
        return isString(name) ? document.getElementById(name) : name;
    }
    /**
     * @param {?} pdataOld
     * @param {Node} value
     * @return {?}
     */
    function expect(pdataOld, value) {
        var parent = value || document;
        return parent.querySelectorAll && parent.querySelector ? parent.querySelectorAll("." + pdataOld) : parent.getElementsByClassName ? parent.getElementsByClassName(pdataOld) : add("*", pdataOld, value);
    }
    /**
     * @param {string} name
     * @param {?} obj
     * @return {?}
     */
    function callback(name, obj) {
        var parent = obj || document;
        /** @type {null} */
        var color = value;
        return (color = parent.querySelectorAll && parent.querySelector ? parent.querySelector("." + name) : expect(name, obj)[0]) || value;
    }
    /**
     * @param {string} tag
     * @param {?} pdataOld
     * @param {Node} element
     * @return {?}
     */
    function add(tag, pdataOld, element) {
        /** @type {HTMLDocument} */
        var context = document;
        element = element || context;
        tag = tag && "*" != tag ? tag.toUpperCase() : "";
        if (element.querySelectorAll && (element.querySelector && (tag || pdataOld))) {
            return element.querySelectorAll(tag + (pdataOld ? "." + pdataOld : ""));
        }
        if (pdataOld && element.getElementsByClassName) {
            element = element.getElementsByClassName(pdataOld);
            if (tag) {
                context = {};
                /** @type {number} */
                var position = 0;
                /** @type {number} */
                var name = 0;
                var parent;
                for (; parent = element[name]; name++) {
                    if (tag == parent.nodeName) {
                        context[position++] = parent;
                    }
                }
                /** @type {number} */
                context.length = position;
                return context;
            }
            return element;
        }
        element = element.getElementsByTagName(tag || "*");
        if (pdataOld) {
            context = {};
            /** @type {number} */
            name = position = 0;
            for (; parent = element[name]; name++) {
                tag = parent.className;
                if ("function" == typeof tag.split) {
                    if (copy(tag.split(/\s+/), pdataOld)) {
                        context[position++] = parent;
                    }
                }
            }
            /** @type {number} */
            context.length = position;
            return context;
        }
        return element;
    }
    /**
     * @param {Object} doc
     * @return {?}
     */
    function getWindowSize(doc) {
        doc = doc.document;
        doc = getWindow(doc) ? doc.documentElement : doc.body;
        return new Grid(doc.clientWidth, doc.clientHeight);
    }
    /**
     * @return {?}
     */
    function onIframeLoad() {
        /** @type {Window} */
        var vh = window;
        /** @type {Document} */
        var doc = vh.document;
        /** @type {number} */
        var node = 0;
        if (doc) {
            vh = getWindowSize(vh).height;
            /** @type {(HTMLBodyElement|null)} */
            node = doc.body;
            /** @type {Element} */
            var docEl = doc.documentElement;
            if (getWindow(doc) && docEl.scrollHeight) {
                node = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight;
            } else {
                /** @type {number} */
                doc = docEl.scrollHeight;
                var oh = docEl.offsetHeight;
                if (docEl.clientHeight != oh) {
                    /** @type {number} */
                    doc = node.scrollHeight;
                    /** @type {number} */
                    oh = node.offsetHeight;
                }
                node = doc > vh ? doc > oh ? doc : oh : doc < oh ? doc : oh;
            }
        }
        return node;
    }
    /**
     * @param {Object} doc
     * @return {?}
     */
    function offset(doc) {
        var body = !ie && getWindow(doc) ? doc.documentElement : doc.body;
        doc = doc.parentWindow || doc.defaultView;
        return new Rect(doc.pageXOffset || body.scrollLeft, doc.pageYOffset || body.scrollTop);
    }
    /**
     * @param {string} selector
     * @param {string} opt_attributes
     * @param {?} context
     * @return {?}
     */
    function jQuery(selector, opt_attributes, context) {
        return put(document, arguments);
    }
    /**
     * @param {Document} doc
     * @param {Arguments} args
     * @return {?}
     */
    function put(doc, args) {
        var a = args[0];
        var type = args[1];
        if (!dot && (type && (type.name || type.type))) {
            /** @type {Array} */
            a = ["<", a];
            if (type.name) {
                a.push(' name="', encode(type.name), '"');
            }
            if (type.type) {
                a.push(' type="', encode(type.type), '"');
                var e = {};
                warn(e, type);
                delete e.type;
                type = e;
            }
            a.push(">");
            /** @type {string} */
            a = a.join("");
        }
        var element = doc.createElement(a);
        if (type) {
            if (isString(type)) {
                element.className = type;
            } else {
                if (isArray(type)) {
                    end.apply(value, [element].concat(type));
                } else {
                    keys(type, function(val, name) {
                        if ("style" == name) {
                            element.style.cssText = val;
                        } else {
                            if ("class" == name) {
                                element.className = val;
                            } else {
                                if ("for" == name) {
                                    element.htmlFor = val;
                                } else {
                                    if (name in props) {
                                        element.setAttribute(props[name], val);
                                    } else {
                                        if (0 == name.lastIndexOf("aria-", 0) || 0 == name.lastIndexOf("data-", 0)) {
                                            element.setAttribute(name, val);
                                        } else {
                                            element[name] = val;
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        }
        if (2 < args.length) {
            setValue(doc, element, args, 2);
        }
        return element;
    }
    /**
     * @param {Document} doc
     * @param {Object} element
     * @param {Object} args
     * @param {?} n
     * @return {undefined}
     */
    function setValue(doc, element, args, n) {
        /**
         * @param {?} val
         * @return {undefined}
         */
        function update(val) {
            if (val) {
                element.appendChild(isString(val) ? doc.createTextNode(val) : val);
            }
        }
        for (; n < args.length; n++) {
            var actual = args[n];
            if (isObject(actual) && !(isRegExp(actual) && 0 < actual.nodeType)) {
                /** @type {function (Object, Function, Object): undefined} */
                var callback = slice;
                var value;
                a: {
                    if ((value = actual) && "number" == typeof value.length) {
                        if (isRegExp(value)) {
                            /** @type {boolean} */
                            value = "function" == typeof value.item || "string" == typeof value.item;
                            break a;
                        }
                        if (proxy(value)) {
                            /** @type {boolean} */
                            value = "function" == typeof value.item;
                            break a;
                        }
                    }
                    /** @type {boolean} */
                    value = t;
                }
                callback(value ? deepEqual(actual) : actual, update);
            } else {
                update(actual);
            }
        }
    }
    /**
     * @param {Object} html
     * @return {?}
     */
    function toDom(html) {
        /** @type {HTMLDocument} */
        var doc = document;
        /** @type {Element} */
        var el = doc.createElement("div");
        if (documentElement) {
            /** @type {string} */
            el.innerHTML = "<br>" + html;
            el.removeChild(el.firstChild);
        } else {
            /** @type {Object} */
            el.innerHTML = html;
        }
        if (1 == el.childNodes.length) {
            return el.removeChild(el.firstChild);
        }
        /** @type {DocumentFragment} */
        html = doc.createDocumentFragment();
        for (; el.firstChild;) {
            html.appendChild(el.firstChild);
        }
        return html;
    }
    /**
     * @param {Document} doc
     * @return {?}
     */
    function getWindow(doc) {
        return "CSS1Compat" == doc.compatMode;
    }
    /**
     * @param {Object} element
     * @param {DocumentFragment} e
     * @return {undefined}
     */
    function fail(element, e) {
        setValue(getAttribute(element), element, arguments, 1);
    }
    /**
     * @param {?} node
     * @return {undefined}
     */
    function clearElement(node) {
        var child;
        for (; child = node.firstChild;) {
            node.removeChild(child);
        }
    }
    /**
     * @param {?} obj
     * @return {undefined}
     */
    function join(obj) {
        if (obj) {
            if (obj.parentNode) {
                obj.parentNode.removeChild(obj);
            }
        }
    }
    /**
     * @param {Node} s
     * @return {?}
     */
    function res(s) {
        return s.firstElementChild != element ? s.firstElementChild : sibling(s.firstChild);
    }
    /**
     * @param {Object} cur
     * @return {?}
     */
    function sibling(cur) {
        for (; cur && 1 != cur.nodeType;) {
            cur = cur.nextSibling;
        }
        return cur;
    }
    /**
     * @param {Object} node
     * @return {?}
     */
    function nextnode(node) {
        if (!node) {
            return value;
        }
        if (node.firstChild) {
            return node.firstChild;
        }
        for (; node && !node.nextSibling;) {
            node = node.parentNode;
        }
        return node ? node.nextSibling : value;
    }
    /**
     * @param {Element} el
     * @return {?}
     */
    function lastChild(el) {
        if (!el) {
            return value;
        }
        if (!el.previousSibling) {
            return el.parentNode;
        }
        el = el.previousSibling;
        for (; el && el.lastChild;) {
            el = el.lastChild;
        }
        return el;
    }
    /**
     * @param {Object} parent
     * @param {Object} descendant
     * @return {?}
     */
    function isAncestor(parent, descendant) {
        if (parent.contains && 1 == descendant.nodeType) {
            return parent == descendant || parent.contains(descendant);
        }
        if ("undefined" != typeof parent.compareDocumentPosition) {
            return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16);
        }
        for (; descendant && parent != descendant;) {
            descendant = descendant.parentNode;
        }
        return descendant == parent;
    }
    /**
     * @param {Object} elem
     * @return {?}
     */
    function getAttribute(elem) {
        return 9 == elem.nodeType ? elem : elem.ownerDocument || elem.document;
    }
    /**
     * @param {HTMLElement} element
     * @param {?} text
     * @return {undefined}
     */
    function text(element, text) {
        if ("textContent" in element) {
            element.textContent = text;
        } else {
            if (element.firstChild && 3 == element.firstChild.nodeType) {
                for (; element.lastChild != element.firstChild;) {
                    element.removeChild(element.lastChild);
                }
                element.firstChild.data = text;
            } else {
                clearElement(element);
                element.appendChild(getAttribute(element).createTextNode(text));
            }
        }
    }
    /**
     * @param {Object} node
     * @param {Function} fun
     * @param {Array} a
     * @param {boolean} deepDataAndEvents
     * @return {?}
     */
    function textContent(node, fun, a, deepDataAndEvents) {
        if (node != value) {
            node = node.firstChild;
            for (; node;) {
                if (fun(node) && (a.push(node), deepDataAndEvents) || textContent(node, fun, a, deepDataAndEvents)) {
                    return TRUE;
                }
                node = node.nextSibling;
            }
        }
        return t;
    }
    /**
     * @param {string} el
     * @return {?}
     */
    function getElement(el) {
        if (innerText && "innerText" in el) {
            el = el.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        } else {
            /** @type {Array} */
            var UNICODE_SPACES = [];
            replaceElement(el, UNICODE_SPACES, TRUE);
            /** @type {string} */
            el = UNICODE_SPACES.join("");
        }
        el = el.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        el = el.replace(/\u200B/g, "");
        if (!innerText) {
            el = el.replace(/ +/g, " ");
        }
        if (" " != el) {
            el = el.replace(/^\s*/, "");
        }
        return el;
    }
    /**
     * @param {Node} el
     * @param {Array} S
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */
    function replaceElement(el, S, deepDataAndEvents) {
        if (!(el.nodeName in condition)) {
            if (3 == el.nodeType) {
                if (deepDataAndEvents) {
                    S.push(String(el.nodeValue).replace(/(\r\n|\r|\n)/g, ""));
                } else {
                    S.push(el.nodeValue);
                }
            } else {
                if (el.nodeName in indices) {
                    S.push(indices[el.nodeName]);
                } else {
                    el = el.firstChild;
                    for (; el;) {
                        replaceElement(el, S, deepDataAndEvents);
                        el = el.nextSibling;
                    }
                }
            }
        }
    }
    /**
     * @param {?} parent
     * @param {string} tag
     * @param {string} name
     * @return {?}
     */
    function contains(parent, tag, name) {
        if (!tag && !name) {
            return value;
        }
        var nodeName = tag ? tag.toUpperCase() : value;
        return parentIfText(parent, function(v) {
            return (!nodeName || v.nodeName == nodeName) && (!name || same(v, name));
        }, TRUE);
    }
    /**
     * @param {?} obj
     * @param {string} data
     * @return {?}
     */
    function index(obj, data) {
        return contains(obj, value, data);
    }
    /**
     * @param {Object} node
     * @param {Function} pred
     * @param {boolean} duration
     * @param {(Object|string)} opt_attributes
     * @return {?}
     */
    function parentIfText(node, pred, duration, opt_attributes) {
        if (!duration) {
            node = node.parentNode;
        }
        /** @type {boolean} */
        duration = opt_attributes == value;
        /** @type {number} */
        var e = 0;
        for (; node && (duration || e <= opt_attributes);) {
            if (pred(node)) {
                return node;
            }
            node = node.parentNode;
            e++;
        }
        return value;
    }
    /**
     * @param {(Document|string)} b
     * @return {undefined}
     */
    function Data(b) {
        this.b = b || (global.document || document);
    }
    /**
     * @param {Object} obj
     * @return {?}
     */
    function max(obj) {
        return getWindow(obj.b);
    }
    /**
     * @param {Object} obj
     * @return {?}
     */
    function min(obj) {
        return offset(obj.b);
    }
    /**
     * @return {undefined}
     */
    function Collection() {}
    /**
     * @param {?} data
     * @return {?}
     */
    function parseJSON(data) {
        if (data instanceof Collection) {
            return data;
        }
        if ("function" == typeof data.jb) {
            return data.jb(t);
        }
        if (isObject(data)) {
            /** @type {number} */
            var pos = 0;
            var obj = new Collection;
            /**
             * @return {?}
             */
            obj.b = function() {
                for (;;) {
                    if (pos >= data.length) {
                        log(udataCur);
                    }
                    if (pos in data) {
                        return data[pos++];
                    }
                    pos++;
                }
            };
            return obj;
        }
        log(Error("Not implemented"));
    }
    /**
     * @param {Object} data
     * @param {Function} fn
     * @return {undefined}
     */
    function param(data, fn) {
        if (isObject(data)) {
            try {
                slice(data, fn, element);
            } catch (pdataOld) {
                if (pdataOld !== udataCur) {
                    log(pdataOld);
                }
            }
        } else {
            data = parseJSON(data);
            try {
                for (;;) {
                    fn.call(element, data.b(), element, data);
                }
            } catch (pdataCur) {
                if (pdataCur !== udataCur) {
                    log(pdataCur);
                }
            }
        }
    }
    /**
     * @param {Object} b
     * @param {?} ll
     * @return {undefined}
     */
    function E(b, ll) {
        this.c = {};
        /** @type {Array} */
        this.b = [];
        /** @type {number} */
        var m = arguments.length;
        if (1 < m) {
            if (m % 2) {
                log(Error("Uneven number of arguments"));
            }
            /** @type {number} */
            var i = 0;
            for (; i < m; i += 2) {
                intersect(this, arguments[i], arguments[i + 1]);
            }
        } else {
            if (b) {
                if (b instanceof E) {
                    m = b.md();
                    i = b.nd();
                } else {
                    m = pad(b);
                    /** @type {Array} */
                    var a = [];
                    /** @type {number} */
                    var ia = 0;
                    for (i in b) {
                        a[ia++] = b[i];
                    }
                    /** @type {Array} */
                    i = a;
                }
                /** @type {number} */
                a = 0;
                for (; a < m.length; a++) {
                    intersect(this, m[a], i[a]);
                }
            }
        }
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function setOptions(e) {
        if (e.N != e.b.length) {
            /** @type {number} */
            var i = 0;
            /** @type {number} */
            var len = 0;
            for (; i < e.b.length;) {
                var sel = e.b[i];
                if (Object.prototype.hasOwnProperty.call(e.c, sel)) {
                    e.b[len++] = sel;
                }
                i++;
            }
            /** @type {number} */
            e.b.length = len;
        }
        if (e.N != e.b.length) {
            var matches = {};
            /** @type {number} */
            len = i = 0;
            for (; i < e.b.length;) {
                sel = e.b[i];
                if (!Object.prototype.hasOwnProperty.call(matches, sel)) {
                    e.b[len++] = sel;
                    /** @type {number} */
                    matches[sel] = 1;
                }
                i++;
            }
            /** @type {number} */
            e.b.length = len;
        }
    }
    /**
     * @param {Object} node
     * @param {string} key
     * @param {?} array
     * @return {undefined}
     */
    function intersect(node, key, array) {
        if (!Object.prototype.hasOwnProperty.call(node.c, key)) {
            node.N++;
            node.b.push(key);
            node.xb++;
        }
        node.c[key] = array;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function MAP(obj) {
        /** @type {Array} */
        var errmsg = [];
        _setForm(obj, errmsg, qs);
        return errmsg.join("&");
    }
    /**
     * @param {Node} form
     * @param {Array} msg
     * @param {Function} debug
     * @return {undefined}
     */
    function _setForm(form, msg, debug) {
        var els = form.elements;
        var el;
        /** @type {number} */
        var i = 0;
        for (; el = els[i]; i++) {
            if (!(el.form != form || (el.disabled || "fieldset" == el.tagName.toLowerCase()))) {
                var n = el.name;
                switch (el.type.toLowerCase()) {
                    case "file":
                        ;
                    case "submit":
                        ;
                    case "reset":
                        ;
                    case "button":
                        break;
                    case "select-multiple":
                        el = setElementValue(el);
                        if (el != value) {
                            var val;
                            /** @type {number} */
                            var attr = 0;
                            for (; val = el[attr]; attr++) {
                                debug(msg, n, val);
                            }
                        }
                        break;
                    default:
                        val = setElementValue(el);
                        if (val != value) {
                            debug(msg, n, val);
                        };
                }
            }
        }
        els = form.getElementsByTagName("input");
        /** @type {number} */
        i = 0;
        for (; el = els[i]; i++) {
            if (el.form == form) {
                if ("image" == el.type.toLowerCase()) {
                    n = el.name;
                    debug(msg, n, el.value);
                    debug(msg, n + ".x", "0");
                    debug(msg, n + ".y", "0");
                }
            }
        }
    }
    /**
     * @param {Object} keys
     * @param {string} key
     * @param {?} value
     * @return {undefined}
     */
    function extract(keys, key, value) {
        var values = keys.get(key);
        if (!values) {
            /** @type {Array} */
            values = [];
            intersect(keys, key, values);
        }
        values.push(value);
    }
    /**
     * @param {Array} del
     * @param {?} q
     * @param {?} val
     * @return {undefined}
     */
    function qs(del, q, val) {
        del.push(encodeURIComponent(q) + "=" + encodeURIComponent(val));
    }
    /**
     * @param {Element} el
     * @return {?}
     */
    function setElementValue(el) {
        var c = el.type;
        if (!isFunction(c)) {
            return value;
        }
        switch (c.toLowerCase()) {
            case "checkbox":
                ;
            case "radio":
                return el.checked ? el.value : value;
            case "select-one":
                return c = el.selectedIndex, 0 <= c ? el.options[c].value : value;
            case "select-multiple":
                /** @type {Array} */
                c = [];
                var option;
                /** @type {number} */
                var i = 0;
                for (; option = el.options[i]; i++) {
                    if (option.selected) {
                        c.push(option.value);
                    }
                }
                return c.length ? c : value;
            default:
                return isFunction(el.value) ? el.value : value;
        }
    }
    /**
     * @param {Element} element
     * @return {?}
     */
    function unwrap(element) {
        element = element.elements.is_private;
        if (element.type) {
            return setElementValue(element);
        }
        /** @type {number} */
        var i = 0;
        for (; i < element.length; i++) {
            var obj = setElementValue(element[i]);
            if (obj) {
                return obj;
            }
        }
        return value;
    }
    /**
     * @param {string} content
     * @param {?} strip
     * @return {?}
     */
    function strip(content, strip) {
        return RE_SIMPLE_SELECTOR.test(strip ? content.replace(badChars, " ") : content);
    }
    /**
     * @param {string} opt_attributes
     * @return {undefined}
     */
    function expected(opt_attributes) {
        getType(defined, arguments);
    }
    /**
     * @param {string} depName
     * @param {?} view
     * @return {?}
     */
    function push(depName, view) {
        return depName in defined ? defined[depName] : view;
    }
    /**
     * @param {string} name
     * @return {undefined}
     */
    function label(name) {
        getType(items, arguments);
    }
    /**
     * @param {string} key
     * @return {?}
     */
    function reset(key) {
        return key in items ? items[key] : element;
    }
    /**
     * @param {string} row_id
     * @return {undefined}
     */
    function item(row_id) {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var argLength = arguments.length;
        for (; i < argLength; ++i) {
            /** @type {number} */
            rv[arguments[i]] = 1;
        }
    }
    /**
     * @param {Function} callback
     * @param {number} expectedHashCode
     * @return {?}
     */
    function attr(callback, expectedHashCode) {
        /** @type {number} */
        var copies = window.setTimeout(callback, expectedHashCode);
        out.push(copies);
        return copies;
    }
    /**
     * @param {Function} callback
     * @param {number} opt_attributes
     * @return {?}
     */
    function play(callback, opt_attributes) {
        /** @type {number} */
        var id = window.setInterval(callback, opt_attributes);
        ids.push(id);
        return id;
    }
    /**
     * @param {number} value
     * @return {undefined}
     */
    function _(value) {
        window.clearTimeout(value);
    }
    /**
     * @param {?} interval
     * @return {undefined}
     */
    function readdir(interval) {
        window.clearInterval(interval);
    }
    /**
     * @param {string} $1
     * @param {Object} opt_attributes
     * @param {string} $0
     * @return {?}
     */
    function replace($1, opt_attributes, $0) {
        var map = opt_attributes || {};
        if ($1 = $1 in flags ? flags[$1] : $0) {
            var letter;
            for (letter in map) {
                $1 = $1.replace(RegExp("\\$" + letter, "gi"), function() {
                    return map[letter];
                });
            }
        }
        return $1;
    }
    /**
     * @param {?} obj
     * @param {Arguments} value
     * @return {undefined}
     */
    function getType(obj, value) {
        if (1 < value.length) {
            var key = value[0];
            obj[key] = value[1];
        } else {
            var iterable = value[0];
            for (key in iterable) {
                obj[key] = iterable[key];
            }
        }
    }
    /**
     * @param {string} obj
     * @param {?} elem
     * @param {(Document|string)} el
     * @param {(Document|string)} opts
     * @return {undefined}
     */
    function children(obj, elem, el, opts) {
        if (push("EVENTS_TRACKER_INSTALLED")) {
            var base = RandomPeople[obj];
            if (!base) {
                var readyList = window._gaq._getAsyncTracker("eventsPageTracker");
                if (!readyList) {
                    return;
                }
                window._gaq.push(function() {
                    base = readyList._createEventTracker(obj);
                    RandomPeople[obj] = base;
                });
            }
            var action = el || element;
            var options = opts || element;
            window._gaq.push(function() {
                base._trackEvent(elem, action, options);
            });
        }
    }
    /**
     * @param {?} element
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    function data(element, name, value) {
        if (element.dataset) {
            /** @type {string} */
            element.dataset[camelize(name)] = value;
        } else {
            element.setAttribute("data-" + name, value);
        }
    }
    /**
     * @param {?} element
     * @param {string} name
     * @return {?}
     */
    function equal(element, name) {
        return element.dataset ? element.dataset[camelize(name)] : element.getAttribute("data-" + name);
    }
    /**
     * @param {Element} element
     * @param {string} name
     * @return {undefined}
     */
    function getAll(element, name) {
        if (element.dataset) {
            delete element.dataset[camelize(name)];
        } else {
            element.removeAttribute("data-" + name);
        }
    }
    /**
     * @param {Element} element
     * @param {string} name
     * @return {?}
     */
    function getParams(element, name) {
        return element.dataset ? camelize(name) in element.dataset : element.hasAttribute ? !!element.hasAttribute("data-" + name) : !!element.getAttribute("data-" + name);
    }
    /**
     * @param {string} prop
     * @return {?}
     */
    function camelize(prop) {
        return originalEvent[prop] || (originalEvent[prop] = String(prop).replace(/\-([a-z])/g, function(dataAndEvents, letter) {
            return letter.toUpperCase();
        }));
    }
    /**
     * @param {?} element
     * @return {?}
     */
    function matches(element) {
        var className = element.__yt_uid_key;
        if (!className) {
            className = tail();
            element.__yt_uid_key = className;
        }
        return className;
    }
    /**
     * @param {Node} o
     * @return {?}
     */
    function template(o) {
        var el = o.cloneNode(t);
        if ("TR" == el.tagName || "SELECT" == el.tagName) {
            slice(o.childNodes, function(context) {
                el.appendChild(template(context));
            });
        } else {
            el.innerHTML = o.innerHTML;
        }
        return el;
    }
    /**
     * @param {Object} node
     * @return {?}
     */
    function when(node) {
        node = template(require(node));
        node.removeAttribute("id");
        return node;
    }
    /**
     * @param {?} config
     * @param {Text} app
     * @param {(Object|string)} opt_attributes
     * @return {?}
     */
    function bootstrap(config, app, opt_attributes) {
        config = require(config);
        app = require(app);
        return !!parentIfText(config, function(module) {
            return module === app;
        }, TRUE, opt_attributes);
    }
    /**
     * @param {string} el
     * @param {string} name
     * @param {string} html
     * @return {?}
     */
    function createElement(el, name, html) {
        el = add(el, name, html);
        return el.length ? el[0] : value;
    }
    /**
     * @param {Object} element
     * @param {boolean} state
     * @return {undefined}
     */
    function parseChildren(element, state) {
        if ("disabled" in element) {
            /** @type {boolean} */
            element.disabled = !state;
        }
        if (1 == element.nodeType) {
            done(element, "disabled", !state);
        }
        if (element.hasChildNodes()) {
            /** @type {number} */
            var STATUS = 0;
            var activeClassName;
            for (; activeClassName = element.childNodes[STATUS]; ++STATUS) {
                parseChildren(activeClassName, state);
            }
        }
    }
    /**
     * @return {?}
     */
    function reposition() {
        /** @type {HTMLDocument} */
        var doc = document;
        if ("fullScreenElement" in doc) {
            return doc.fullScreenElement;
        }
        if ("mozFullScreenElement" in doc) {
            return doc.mozFullScreenElement;
        }
        if ("msFullScreenElement" in doc) {
            return doc.msFullScreenElement;
        }
        if ("oFullScreenElement" in doc) {
            return doc.oFullScreenElement;
        }
        if ("webkitFullScreenElement" in doc) {
            return doc.webkitFullScreenElement;
        }
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function handler(e) {
        if (e = e || window.event) {
            var relatedTarget;
            for (relatedTarget in e) {
                if (!(relatedTarget in additionalMethods)) {
                    this[relatedTarget] = e[relatedTarget];
                }
            }
            this.scale = e.scale;
            this.rotation = e.rotation;
            /** @type {Object} */
            this.Qa = e;
            if ((relatedTarget = e.target || e.srcElement) && 3 == relatedTarget.nodeType) {
                relatedTarget = relatedTarget.parentNode;
            }
            this.target = relatedTarget;
            if (relatedTarget = e.relatedTarget) {
                try {
                    relatedTarget = relatedTarget.nodeName && relatedTarget;
                } catch (c) {
                    /** @type {null} */
                    relatedTarget = value;
                }
            } else {
                if ("mouseover" == this.type) {
                    relatedTarget = e.fromElement;
                } else {
                    if ("mouseout" == this.type) {
                        relatedTarget = e.toElement;
                    }
                }
            }
            this.relatedTarget = relatedTarget;
            this.clientX = e.clientX != element ? e.clientX : e.pageX;
            this.clientY = e.clientY != element ? e.clientY : e.pageY;
            if (document.body && document.documentElement) {
                /** @type {number} */
                relatedTarget = document.body.scrollLeft + document.documentElement.scrollLeft;
                /** @type {number} */
                var h = document.body.scrollTop + document.documentElement.scrollTop;
                this.pageX = e.pageX != element ? e.pageX : e.clientX + relatedTarget;
                this.pageY = e.pageY != element ? e.pageY : e.clientY + h;
            }
            this.keyCode = e.keyCode ? e.keyCode : e.which;
            this.charCode = e.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = e.altKey;
            this.ctrlKey = e.ctrlKey;
            this.shiftKey = e.shiftKey;
            if ("MozMousePixelScroll" == this.type) {
                this.wheelDeltaX = e.axis == e.HORIZONTAL_AXIS ? e.detail : 0;
                this.wheelDeltaY = e.axis == e.HORIZONTAL_AXIS ? 0 : e.detail;
            } else {
                if (window.opera) {
                    /** @type {number} */
                    this.wheelDeltaX = 0;
                    this.wheelDeltaY = e.detail;
                } else {
                    if (0 == e.wheelDelta % 120) {
                        if ("WebkitTransform" in document.documentElement.style) {
                            if (window.b && 0 == navigator.platform.indexOf("Mac")) {
                                /** @type {number} */
                                this.wheelDeltaX = e.wheelDeltaX / -30;
                                /** @type {number} */
                                this.wheelDeltaY = e.wheelDeltaY / -30;
                            } else {
                                /** @type {number} */
                                this.wheelDeltaX = e.wheelDeltaX / -1.2;
                                /** @type {number} */
                                this.wheelDeltaY = e.wheelDeltaY / -1.2;
                            }
                        } else {
                            /** @type {number} */
                            this.wheelDeltaX = 0;
                            /** @type {number} */
                            this.wheelDeltaY = e.wheelDelta / -1.6;
                        }
                    } else {
                        /** @type {number} */
                        this.wheelDeltaX = e.wheelDeltaX / -3;
                        /** @type {number} */
                        this.wheelDeltaY = e.wheelDeltaY / -3;
                    }
                }
            }
        }
    }
    /**
     * @param {(RegExp|string)} el
     * @param {string} num
     * @param {?} object
     * @param {boolean} fn
     * @return {?}
     */
    function addListener(el, num, object, fn) {
        return attach(meta, function(expr) {
            return expr[0] == el && (expr[1] == num && (expr[2] == object && expr[4] == !!fn));
        });
    }
    /**
     * @param {?} element
     * @param {string} type
     * @param {?} callback
     * @param {boolean} capture
     * @return {?}
     */
    function addEvent(element, type, callback, capture) {
        if (!element || !element.addEventListener && !element.attachEvent) {
            return "";
        }
        /** @type {boolean} */
        capture = !!capture;
        var name = addListener(element, type, callback, capture);
        if (name) {
            return name;
        }
        /** @type {string} */
        name = ++chain.count + "";
        /** @type {boolean} */
        var mouseenter = !(!("mouseenter" == type || "mouseleave" == type) || (!element.addEventListener || "onmouseenter" in document));
        var show;
        /** @type {function (Object): ?} */
        show = mouseenter ? function(e) {
            e = new handler(e);
            if (!parentIfText(e.relatedTarget, function(dataAndEvents) {
                    return dataAndEvents == element;
                }, TRUE)) {
                return e.currentTarget = element, e.type = type, callback.call(element, e);
            }
        } : function(e) {
            e = new handler(e);
            e.currentTarget = element;
            return callback.call(element, e);
        };
        /** @type {Array} */
        meta[name] = [element, type, callback, show, capture];
        if (element.addEventListener) {
            if ("mouseenter" == type && mouseenter) {
                element.addEventListener("mouseover", show, capture);
            } else {
                if ("mouseleave" == type && mouseenter) {
                    element.addEventListener("mouseout", show, capture);
                } else {
                    if ("mousewheel" == type && "MozBoxSizing" in document.documentElement.style) {
                        element.addEventListener("MozMousePixelScroll", show, capture);
                    } else {
                        element.addEventListener(type, show, capture);
                    }
                }
            }
        } else {
            element.attachEvent("on" + type, show);
        }
        return name;
    }
    /**
     * @param {?} target
     * @param {string} type
     * @param {Function} action
     * @param {boolean} capture
     * @return {undefined}
     */
    function emit(target, type, action, capture) {
        var result;
        result = addEvent(target, type, function() {
            off(result);
            action.apply(target, arguments);
        }, capture);
    }
    /**
     * @param {?} fun
     * @param {string} type
     * @param {?} callback
     * @param {string} name
     * @return {?}
     */
    function unbind(fun, type, callback, name) {
        return listen(fun, type, callback, function(isXML) {
            return same(isXML, name);
        });
    }
    /**
     * @param {Node} listener
     * @param {string} type
     * @param {Function} callback
     * @param {Function} fn
     * @return {?}
     */
    function listen(listener, type, callback, fn) {
        var target = listener || document;
        return addEvent(target, type, function(e) {
            var element = parentIfText(e.target, function(container) {
                return container === target || fn(container);
            }, TRUE);
            if (element) {
                if (element !== target) {
                    e.currentTarget = element;
                    callback.call(element, e);
                }
            }
        });
    }
    /**
     * @param {(Node|string)} listener
     * @param {string} type
     * @param {?} func
     * @param {?} opt_connectCb
     * @return {undefined}
     */
    function connect(listener, type, func, opt_connectCb) {
        if (listener = addListener(listener, type, func, !!opt_connectCb)) {
            off(listener);
        }
    }
    /**
     * @param {?} fn
     * @return {undefined}
     */
    function off(fn) {
        if ("string" == typeof fn) {
            /** @type {Array} */
            fn = [fn];
        }
        slice(fn, function(a) {
            if (a in meta) {
                var c = meta[a];
                var o = c[0];
                var evtName = c[1];
                var b = c[3];
                c = c[4];
                if (o.removeEventListener) {
                    o.removeEventListener(evtName, b, c);
                } else {
                    o.detachEvent("on" + evtName, b);
                }
                delete meta[a];
            }
        });
    }
    /**
     * @param {Node} e
     * @return {?}
     */
    function handleEvent(e) {
        e = e || window.event;
        e = e.target || e.srcElement;
        if (3 == e.nodeType) {
            e = e.parentNode;
        }
        return e;
    }
    /**
     * @param {Node} e
     * @return {undefined}
     */
    function stopEvent(e) {
        e = e || window.event;
        /** @type {boolean} */
        e.cancelBubble = TRUE;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
    }
    /**
     * @param {?} node
     * @return {undefined}
     */
    function fireOnClick(node) {
        if (document.createEvent) {
            /** @type {(Event|null)} */
            var event = document.createEvent("HTMLEvents");
            event.initEvent("click", TRUE, TRUE);
            node.dispatchEvent(event);
        } else {
            event = document.createEventObject();
            node.fireEvent("onclick", event);
        }
    }
    /**
     * @param {?} b
     * @return {undefined}
     */
    function array(b) {
        this.b = b;
    }
    /**
     * @param {?} self
     * @param {string} name
     * @param {string} val
     * @param {number} value
     * @param {boolean} key
     * @param {boolean} i
     * @return {undefined}
     */
    function cookie(self, name, val, value, key, i) {
        if (/[;=\s]/.test(name)) {
            log(Error('Invalid cookie name "' + name + '"'));
        }
        if (/[;\r\n]/.test(val)) {
            log(Error('Invalid cookie value "' + val + '"'));
        }
        if (!isFunction(value)) {
            /** @type {number} */
            value = -1;
        }
        /** @type {string} */
        i = i ? ";domain=" + i : "";
        /** @type {string} */
        key = key ? ";path=" + key : "";
        /** @type {string} */
        value = 0 > value ? "" : 0 == value ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(setAttribute() + 1E3 * value)).toUTCString();
        /** @type {string} */
        self.b.cookie = name + "=" + val + i + key + value + "";
    }
    /**
     * @param {Object} event
     * @return {?}
     */
    function animation(event) {
        event = (event.b.cookie || "").split(opening);
        /** @type {Array} */
        var keys = [];
        /** @type {Array} */
        var curr = [];
        var index;
        var part;
        /** @type {number} */
        var i = 0;
        for (; part = event[i]; i++) {
            index = part.indexOf("=");
            if (-1 == index) {
                keys.push("");
                curr.push(part);
            } else {
                keys.push(part.substring(0, index));
                curr.push(part.substring(index + 1));
            }
        }
        return {
            keys: keys,
            Lf: curr
        };
    }
    /**
     * @param {string} x
     * @param {string} object
     * @param {number} opt_attributes
     * @param {string} a
     * @param {string} b
     * @return {undefined}
     */
    function cmp(x, object, opt_attributes, a, b) {
        cookie(tree, "" + x, object, opt_attributes, a || "/", b || "youtube.com");
    }
    /**
     * @param {string} n
     * @param {string} name
     * @return {?}
     */
    function read(n, name) {
        return tree.get("" + n, name);
    }
    /**
     * @param {string} prop
     * @param {string} filter
     * @param {string} options
     * @return {?}
     */
    function cleanup(prop, filter, options) {
        return tree.remove("" + prop, filter || "/", options || "youtube.com");
    }
    /**
     * @return {undefined}
     */
    function editor() {
        var text = read("PREF");
        if (text) {
            /** @type {Array.<string>} */
            text = unescape(text).split("&");
            /** @type {number} */
            var i = 0;
            for (; i < text.length; i++) {
                /** @type {Array.<string>} */
                var def = text[i].split("=");
                /** @type {string} */
                var name = def[0];
                if (def = def[1]) {
                    /** @type {string} */
                    values[name] = def.toString();
                }
            }
        }
    }
    /**
     * @param {string} url
     * @return {undefined}
     */
    function ajax(url) {
        if (/^f([1-9][0-9]*)$/.test(url)) {
            log("ExpectedRegexMatch: " + url);
        }
    }
    /**
     * @param {string} url
     * @return {undefined}
     */
    function open(url) {
        if (!/^\w+$/.test(url)) {
            log("ExpectedRegexMismatch: " + url);
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    function decode(key) {
        key = values[key] !== element ? values[key].toString() : value;
        return key != value && /^[A-Fa-f0-9]+$/.test(key) ? parseInt(key, 16) : value;
    }
    /**
     * @param {string} url
     * @param {(Object|string)} i
     * @return {undefined}
     */
    function sendMessage(url, i) {
        open(url);
        ajax(url);
        if (i == value) {
            log("ExpectedNotNull");
        }
        values[url] = i.toString();
    }
    /**
     * @param {number} recurring
     * @param {number} o
     * @return {?}
     */
    function indexOf(recurring, o) {
        return !!((decode("f" + (Math.floor(o / 31) + 1)) || 0) & 1 << o % 31);
    }
    /**
     * @param {number} data
     * @param {boolean} val
     * @return {undefined}
     */
    function substitute(data, val) {
        /** @type {string} */
        var name = "f" + (Math.floor(data / 31) + 1);
        /** @type {number} */
        var dstUri = 1 << data % 31;
        var replacement = decode(name) || 0;
        /** @type {number} */
        replacement = val ? replacement | dstUri : replacement & ~dstUri;
        if (0 == replacement) {
            delete values[name];
        } else {
            /** @type {string} */
            dstUri = replacement.toString(16);
            /** @type {string} */
            values[name] = dstUri.toString();
        }
    }
    /**
     * @return {undefined}
     */
    function compare() {
        /** @type {Array} */
        var tagNameArr = [];
        var key;
        for (key in values) {
            tagNameArr.push(key + "=" + escape(values[key]));
        }
        cmp("PREF", tagNameArr.join("&"), 31536E4);
    }
    /**
     * @param {?} tabCtrl
     * @param {?} scope
     * @param {number} attrs
     * @param {string} l
     * @return {undefined}
     */
    function link(tabCtrl, scope, attrs, l) {
        this.top = tabCtrl;
        this.right = scope;
        /** @type {number} */
        this.bottom = attrs;
        /** @type {string} */
        this.left = l;
    }
    /**
     * @param {?} w
     * @param {?} t
     * @param {?} val
     * @param {?} h
     * @return {undefined}
     */
    function Node(w, t, val, h) {
        this.left = w;
        this.top = t;
        this.width = val;
        this.height = h;
    }
    /**
     * @param {Object} element
     * @param {string} prop
     * @param {string} completeEvent
     * @return {undefined}
     */
    function setStyleImportant(element, prop, completeEvent) {
        if (isString(prop)) {
            getStyle(element, completeEvent, prop);
        } else {
            keys(prop, $goog$partial$(getStyle, element));
        }
    }
    /**
     * @param {Node} element
     * @param {string} e
     * @param {string} obj
     * @return {undefined}
     */
    function getStyle(element, e, obj) {
        /** @type {string} */
        element.style[String(obj).replace(/\-([a-z])/g, function(dataAndEvents, letter) {
            return letter.toUpperCase();
        })] = e;
    }
    /**
     * @param {?} pdataCur
     * @param {string} property
     * @return {?}
     */
    function _getStyle(pdataCur, property) {
        var el = getAttribute(pdataCur);
        return el.defaultView && (el.defaultView.getComputedStyle && (el = el.defaultView.getComputedStyle(pdataCur, value))) ? el[property] || (el.getPropertyValue(property) || "") : "";
    }
    /**
     * @param {Object} element
     * @param {string} style
     * @return {?}
     */
    function num(element, style) {
        return element.currentStyle ? element.currentStyle[style] : value;
    }
    /**
     * @param {Object} element
     * @param {string} style
     * @return {?}
     */
    function getCSS(element, style) {
        return _getStyle(element, style) || (num(element, style) || element.style && element.style[style]);
    }
    /**
     * @param {Object} element
     * @return {?}
     */
    function getOffset(element) {
        var offset = element.getBoundingClientRect();
        if (documentElement) {
            element = element.ownerDocument;
            offset.left -= element.documentElement.clientLeft + element.body.clientLeft;
            offset.top -= element.documentElement.clientTop + element.body.clientTop;
        }
        return offset;
    }
    /**
     * @param {Object} parent
     * @return {?}
     */
    function getOffsetParent(parent) {
        if (documentElement && !(documentElement && 8 <= $Q)) {
            return parent.offsetParent;
        }
        var doc = getAttribute(parent);
        var position = getCSS(parent, "position");
        /** @type {boolean} */
        var x = "fixed" == position || "absolute" == position;
        parent = parent.parentNode;
        for (; parent && parent != doc; parent = parent.parentNode) {
            if (position = getCSS(parent, "position"), x = x && ("static" == position && (parent != doc.documentElement && parent != doc.body)), !x && (parent.scrollWidth > parent.clientWidth || (parent.scrollHeight > parent.clientHeight || ("fixed" == position || ("absolute" == position || "relative" == position))))) {
                return parent;
            }
        }
        return value;
    }
    /**
     * @param {Object} el
     * @return {?}
     */
    function getVisibleRectForElement(el) {
        var visibleRect = new link(0, Infinity, Infinity, 0);
        var node = getter(el);
        var scrollX = node.b.body;
        var docEl = node.b.documentElement;
        var top = !ie && getWindow(node.b) ? node.b.documentElement : node.b.body;
        for (; el = getOffsetParent(el);) {
            if ((!documentElement || 0 != el.clientWidth) && ((!ie || (0 != el.clientHeight || el != scrollX)) && (el != scrollX && (el != docEl && "visible" != getCSS(el, "overflow"))))) {
                var pos = scroll(el);
                var element;
                /** @type {Object} */
                element = el;
                if (firefox && !css("1.9")) {
                    /** @type {number} */
                    var left = parseFloat(_getStyle(element, "borderLeftWidth"));
                    if ($$(element)) {
                        /** @type {number} */
                        var width = element.offsetWidth - element.clientWidth - left - parseFloat(_getStyle(element, "borderRightWidth"));
                        /** @type {number} */
                        left = left + width;
                    }
                    element = new Rect(left, parseFloat(_getStyle(element, "borderTopWidth")));
                } else {
                    element = new Rect(element.clientLeft, element.clientTop);
                }
                pos.x += element.x;
                pos.y += element.y;
                /** @type {number} */
                visibleRect.top = Math.max(visibleRect.top, pos.y);
                /** @type {number} */
                visibleRect.right = Math.min(visibleRect.right, pos.x + el.clientWidth);
                /** @type {number} */
                visibleRect.bottom = Math.min(visibleRect.bottom, pos.y + el.clientHeight);
                /** @type {number} */
                visibleRect.left = Math.max(visibleRect.left, pos.x);
            }
        }
        scrollX = top.scrollLeft;
        top = top.scrollTop;
        /** @type {number} */
        visibleRect.left = Math.max(visibleRect.left, scrollX);
        /** @type {number} */
        visibleRect.top = Math.max(visibleRect.top, top);
        node = getWindowSize(node.b.parentWindow || (node.b.defaultView || window));
        /** @type {number} */
        visibleRect.right = Math.min(visibleRect.right, scrollX + node.width);
        /** @type {number} */
        visibleRect.bottom = Math.min(visibleRect.bottom, top + node.height);
        return 0 <= visibleRect.top && (0 <= visibleRect.left && (visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left)) ? visibleRect : value;
    }
    /**
     * @param {Object} pdataCur
     * @return {?}
     */
    function scroll(pdataCur) {
        var el;
        var self = getAttribute(pdataCur);
        var cssPosition = getCSS(pdataCur, "position");
        var isDead = firefox && (self.getBoxObjectFor && (!pdataCur.getBoundingClientRect && ("absolute" == cssPosition && ((el = self.getBoxObjectFor(pdataCur)) && (0 > el.screenX || 0 > el.screenY)))));
        var pos = new Rect(0, 0);
        var udataCur;
        el = self ? getAttribute(self) : document;
        udataCur = documentElement && (!(documentElement && 9 <= $Q) && !max(getter(el))) ? el.body : el.documentElement;
        if (pdataCur == udataCur) {
            return pos;
        }
        if (pdataCur.getBoundingClientRect) {
            el = getOffset(pdataCur);
            pdataCur = min(getter(self));
            pos.x = el.left + pdataCur.x;
            pos.y = el.top + pdataCur.y;
        } else {
            if (self.getBoxObjectFor && !isDead) {
                el = self.getBoxObjectFor(pdataCur);
                pdataCur = self.getBoxObjectFor(udataCur);
                /** @type {number} */
                pos.x = el.screenX - pdataCur.screenX;
                /** @type {number} */
                pos.y = el.screenY - pdataCur.screenY;
            } else {
                /** @type {Object} */
                el = pdataCur;
                do {
                    pos.x += el.offsetLeft;
                    pos.y += el.offsetTop;
                    if (el != pdataCur) {
                        pos.x += el.clientLeft || 0;
                        pos.y += el.clientTop || 0;
                    }
                    if (ie && "fixed" == getCSS(el, "position")) {
                        pos.x += self.body.scrollLeft;
                        pos.y += self.body.scrollTop;
                        break;
                    }
                    el = el.offsetParent;
                } while (el && el != pdataCur);
                if (gecko || ie && "absolute" == cssPosition) {
                    pos.y -= self.body.offsetTop;
                }
                /** @type {Object} */
                el = pdataCur;
                for (;
                    (el = getOffsetParent(el)) && (el != self.body && el != udataCur);) {
                    if (pos.x -= el.scrollLeft, !gecko || "TR" != el.tagName) {
                        pos.y -= el.scrollTop;
                    }
                }
            }
        }
        return pos;
    }
    /**
     * @param {Object} el
     * @return {?}
     */
    function applyTransform(el) {
        var pos = new Rect;
        if (1 == el.nodeType) {
            if (el.getBoundingClientRect) {
                var box = getOffset(el);
                pos.x = box.left;
                pos.y = box.top;
            } else {
                box = min(getter(el));
                var coord = scroll(el);
                /** @type {number} */
                pos.x = coord.x - box.x;
                /** @type {number} */
                pos.y = coord.y - box.y;
            }
            if (firefox && !css(12)) {
                var property;
                if (documentElement) {
                    /** @type {string} */
                    property = "-ms-transform";
                } else {
                    if (ie) {
                        /** @type {string} */
                        property = "-webkit-transform";
                    } else {
                        if (gecko) {
                            /** @type {string} */
                            property = "-o-transform";
                        } else {
                            if (firefox) {
                                /** @type {string} */
                                property = "-moz-transform";
                            }
                        }
                    }
                }
                var value;
                if (property) {
                    value = getCSS(el, property);
                }
                if (!value) {
                    value = getCSS(el, "transform");
                }
                if (value) {
                    el = value.match(core_rnotwhite);
                    el = !el ? new Rect(0, 0) : new Rect(parseFloat(el[1]), parseFloat(el[2]));
                } else {
                    el = new Rect(0, 0);
                }
                pos = new Rect(pos.x + el.x, pos.y + el.y);
            }
        } else {
            property = proxy(el.Cg);
            /** @type {Object} */
            value = el;
            if (el.targetTouches) {
                value = el.targetTouches[0];
            } else {
                if (property) {
                    if (el.Ea.targetTouches) {
                        value = el.Ea.targetTouches[0];
                    }
                }
            }
            pos.x = value.clientX;
            pos.y = value.clientY;
        }
        return pos;
    }
    /**
     * @param {(number|string)} value
     * @param {boolean} round
     * @return {?}
     */
    function px(value, round) {
        if ("number" == typeof value) {
            /** @type {string} */
            value = (round ? Math.round(value) : value) + "px";
        }
        return value;
    }
    /**
     * @param {Object} node
     * @return {?}
     */
    function append(node) {
        if ("none" != getCSS(node, "display")) {
            return rect(node);
        }
        var style = node.style;
        var originalDisplay = style.display;
        var originalVisibility = style.visibility;
        var originalPosition = style.position;
        /** @type {string} */
        style.visibility = "hidden";
        /** @type {string} */
        style.position = "absolute";
        /** @type {string} */
        style.display = "inline";
        node = rect(node);
        style.display = originalDisplay;
        style.position = originalPosition;
        style.visibility = originalVisibility;
        return node;
    }
    /**
     * @param {Object} parent
     * @return {?}
     */
    function rect(parent) {
        var width = parent.offsetWidth;
        var height = parent.offsetHeight;
        /** @type {boolean} */
        var webkitOffsetsZero = ie && (!width && !height);
        return (!isFunction(width) || webkitOffsetsZero) && parent.getBoundingClientRect ? (parent = getOffset(parent), new Grid(parent.right - parent.left, parent.bottom - parent.top)) : new Grid(width, height);
    }
    /**
     * @param {Object} s
     * @return {?}
     */
    function onclick(s) {
        var n = scroll(s);
        s = append(s);
        return new Node(n.x, n.y, s.width, s.height);
    }
    /**
     * @param {Object} el
     * @return {?}
     */
    function $$(el) {
        return "rtl" == getCSS(el, "direction");
    }
    /**
     * @param {Node} element
     * @param {?} value
     * @return {?}
     */
    function getPixelValue(element, value) {
        if (/^\d+px?$/.test(value)) {
            return parseInt(value, 10);
        }
        var rsLeft = element.style.left;
        var runtimeStyle = element.runtimeStyle.left;
        element.runtimeStyle.left = element.currentStyle.left;
        element.style.left = value;
        var ret = element.style.pixelLeft;
        element.style.left = rsLeft;
        element.runtimeStyle.left = runtimeStyle;
        return ret;
    }
    /**
     * @param {Object} child
     * @param {string} prop
     * @return {?}
     */
    function getParent(child, prop) {
        if ("none" == num(child, prop + "Style")) {
            return 0;
        }
        var name = num(child, prop + "Width");
        return name in attrVals ? attrVals[name] : getPixelValue(child, name);
    }
    /**
     * @param {string} q
     * @param {boolean} val
     * @return {undefined}
     */
    function func(q, val) {
        if ((q = require(q)) && q.style) {
            /** @type {string} */
            q.style.display = val ? "" : "none";
            done(q, "hid", !val);
        }
    }
    /**
     * @param {?} object
     * @return {?}
     */
    function getSize(object) {
        object = require(object);
        return !object ? t : !("none" == object.style.display || same(object, "hid"));
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    function layout(node) {
        if (node = require(node)) {
            if (getSize(node)) {
                /** @type {string} */
                node.style.display = "none";
                end(node, "hid");
            } else {
                /** @type {string} */
                node.style.display = "";
                removeClass(node, "hid");
            }
        }
    }
    /**
     * @param {Object} h
     * @param {boolean} show
     * @return {undefined}
     */
    function startGame(h, show) {
        if (h = require(h)) {
            /** @type {string} */
            h.style.visibility = show ? "visible" : "hidden";
        }
    }
    /**
     * @param {Object} object
     * @return {?}
     */
    function traverse(object) {
        object = require(object);
        if (!object) {
            return value;
        }
        /** @type {number} */
        var left = 0;
        /** @type {number} */
        var top = 0;
        if (object.offsetParent) {
            do {
                left += object.offsetLeft;
                top += object.offsetTop;
            } while (object = object.offsetParent);
        }
        return new Rect(left, top);
    }
    /**
     * @param {string} value
     * @return {undefined}
     */
    function call(value) {
        slice(arguments, function(name) {
            func(name, TRUE);
        });
    }
    /**
     * @param {string} node
     * @return {undefined}
     */
    function split(node) {
        slice(arguments, function(name) {
            func(name, t);
        });
    }
    /**
     * @param {string} key
     * @return {undefined}
     */
    function line(key) {
        slice(arguments, layout);
    }
    /**
     * @param {string} val
     * @param {string} value
     * @param {string} k
     * @param {string} v
     * @param {string} vcards
     * @param {string} id
     * @param {string} x
     * @return {?}
     */
    function setVal(val, value, k, v, vcards, id, x) {
        /** @type {string} */
        var str = "";
        if (val) {
            str += val + ":";
        }
        if (k) {
            str += "//";
            if (value) {
                str += value + "@";
            }
            str += k;
            if (v) {
                str += ":" + v;
            }
        }
        if (vcards) {
            str += vcards;
        }
        if (id) {
            str += "?" + id;
        }
        if (x) {
            str += "#" + x;
        }
        return str;
    }
    /**
     * @param {string} url
     * @return {?}
     */
    function redirect(url) {
        if (found) {
            /** @type {boolean} */
            found = t;
            var link = global.location;
            if (link) {
                var src = link.href;
                if (src && ((src = parseURL(src)) && src != link.hostname)) {
                    /** @type {boolean} */
                    found = TRUE;
                    log(Error());
                }
            }
        }
        return url.match(typePattern);
    }
    /**
     * @param {(Object|string)} url
     * @return {?}
     */
    function parseURL(url) {
        return (url = redirect(url)[3] || value) && decodeURIComponent(url);
    }
    /**
     * @return {?}
     */
    function onResponse() {
        var styles = redirect(document.location.href);
        return setVal(styles[1], styles[2], styles[3], styles[4]);
    }
    /**
     * @param {(number|string)} val
     * @return {?}
     */
    function isBoolean(val) {
        val = redirect(val);
        return setVal(value, value, value, value, val[5], val[6], val[7]);
    }
    /**
     * @param {string} item
     * @return {?}
     */
    function _find(item) {
        var position = item.indexOf("#");
        return 0 > position ? item : item.substr(0, position);
    }
    /**
     * @param {Array} map
     * @return {?}
     */
    function insert(map) {
        if (map[1]) {
            var val = map[0];
            var i = val.indexOf("#");
            if (0 <= i) {
                map.push(val.substr(i));
                map[0] = val = val.substr(0, i);
            }
            i = val.indexOf("?");
            if (0 > i) {
                /** @type {string} */
                map[1] = "?";
            } else {
                if (i == val.length - 1) {
                    map[1] = element;
                }
            }
        }
        return map.join("");
    }
    /**
     * @param {string} property
     * @param {?} data
     * @param {Array} traditional
     * @return {undefined}
     */
    function serialize(property, data, traditional) {
        if (isArray(data)) {
            /** @type {number} */
            var i = 0;
            for (; i < data.length; i++) {
                serialize(property, String(data[i]), traditional);
            }
        } else {
            if (data != value) {
                traditional.push("&", property, "" === data ? "" : "=", encodeURIComponent(String(data)));
            }
        }
    }
    /**
     * @param {Array} object
     * @param {Object} value
     * @param {number} j
     * @return {?}
     */
    function freeze(object, value, j) {
        Math.max(value.length - (j || 0), 0);
        j = j || 0;
        for (; j < value.length; j += 2) {
            serialize(value[j], value[j + 1], object);
        }
        return object;
    }
    /**
     * @param {Array} traditional
     * @param {Object} object
     * @return {?}
     */
    function getName(traditional, object) {
        var property;
        for (property in object) {
            serialize(property, object[property], traditional);
        }
        return traditional;
    }
    /**
     * @param {string} value
     * @param {string} d
     * @return {?}
     */
    function isDate(value, d) {
        return insert(2 == arguments.length ? freeze([value], arguments[1], 0) : freeze([value], arguments, 1));
    }
    /**
     * @param {string} str
     * @param {string} s
     * @return {?}
     */
    function getValue(str, s) {
        var i = str.search(re);
        var pos;
        a: {
            /** @type {number} */
            pos = 0;
            var n = s.length;
            for (; 0 <= (pos = str.indexOf(s, pos)) && pos < i;) {
                var zeroQuoted = str.charCodeAt(pos - 1);
                if (38 == zeroQuoted || 63 == zeroQuoted) {
                    if (zeroQuoted = str.charCodeAt(pos + n), !zeroQuoted || (61 == zeroQuoted || (38 == zeroQuoted || 35 == zeroQuoted))) {
                        break a;
                    }
                }
                pos += n + 1;
            }
            /** @type {number} */
            pos = -1;
        }
        if (0 > pos) {
            return value;
        }
        n = str.indexOf("&", pos);
        if (0 > n || n > i) {
            n = i;
        }
        pos += s.length + 1;
        return _decode(str.substr(pos, n - pos));
    }
    /**
     * @param {string} str
     * @return {?}
     */
    function endsWith(str) {
        if ("?" == str.charAt(0)) {
            str = str.substr(1);
        }
        str = str.split("&");
        var obj = {};
        /** @type {number} */
        var i = 0;
        var len = str.length;
        for (; i < len; i++) {
            var val = str[i].split("=");
            if (1 == val.length && val[0] || 2 == val.length) {
                var key = _decode(val[0] || "");
                val = _decode(val[1] || "");
                if (key in obj) {
                    if (isArray(obj[key])) {
                        deepMatches(obj[key], val);
                    } else {
                        /** @type {Array} */
                        obj[key] = [obj[key], val];
                    }
                } else {
                    obj[key] = val;
                }
            }
        }
        return obj;
    }
    /**
     * @param {string} classNames
     * @return {?}
     */
    function combine(classNames) {
        return -1 != classNames.indexOf("?") ? (classNames = (classNames || "").split("#")[0], classNames = classNames.split("?", 2), endsWith(1 < classNames.length ? classNames[1] : classNames[0])) : {};
    }
    /**
     * @param {string} str
     * @return {?}
     */
    function guid(str) {
        if ("#" == str.charAt(0)) {
            str = "!" == str.charAt(1) ? str.substr(2) : str.substr(1);
        }
        return endsWith(str);
    }
    /**
     * @param {Object} name
     * @return {?}
     */
    function key(name) {
        name = getName([], name);
        /** @type {string} */
        name[0] = "";
        return name.join("");
    }
    /**
     * @param {string} str
     * @param {Object} replacementHash
     * @return {?}
     */
    function applyReplacement(str, replacementHash) {
        return insert(getName([str], replacementHash));
    }
    /**
     * @param {string} str
     * @param {?} o
     * @return {?}
     */
    function trim(str, o) {
        var options = str.split("?", 2);
        str = options[0];
        options = endsWith(options[1] || "");
        var prop;
        for (prop in o) {
            options[prop] = o[prop];
        }
        return applyReplacement(str, options);
    }
    /**
     * @param {string} val
     * @return {?}
     */
    function include(val) {
        return val === value ? t : "com" == val[0] && val[1].match(/^youtube(?:-nocookie)?$/) ? TRUE : t;
    }
    /**
     * @param {string} item
     * @return {?}
     */
    function arrayIndexOf(item) {
        return item === value ? t : "google" == item[1] ? TRUE : "google" == item[2] ? "au" == item[0] && "com" == item[1] ? TRUE : "uk" == item[0] && "co" == item[1] ? TRUE : t : t;
    }
    /**
     * @param {string} key
     * @return {?}
     */
    function siblings(key) {
        key = sha1(key);
        return key === value ? value : key.split(".").reverse();
    }
    /**
     * @param {Object} options
     * @return {undefined}
     */
    function Buffer(options) {
        options = options || {};
        this.url = options.url || this.url;
        this.urlV8 = options.url_v8 || this.urlV8;
        this.urlV9As2 = options.url_v9as2 || this.urlV9As2;
        this.minVersion = options.min_version || this.minVersion;
        this.args = options.args || attrs(failuresLink);
        this.assets = options.assets || {};
        this.attrs = options.attrs || attrs(passesLink);
        this.params = options.params || attrs(params);
        this.fallback = options.fallback || this.fallback;
        this.fallbackMessage = options.fallbackMessage || this.fallbackMessage;
        this.html5 = options.html5 || this.html5;
        this.disable = options.disable || {};
    }
    /**
     * @return {undefined}
     */
    function term() {
        /** @type {Array} */
        this.b = [];
        parse(this);
    }
    /**
     * @param {?} target
     * @param {Array} opt_attributes
     * @param {number} expectedNumberOfNonCommentArgs
     * @param {number} lastArrayIdSentFromServer
     * @return {?}
     */
    function parseData(target, opt_attributes, expectedNumberOfNonCommentArgs, lastArrayIdSentFromServer) {
        /** @type {Array} */
        opt_attributes = "string" == typeof opt_attributes ? opt_attributes.split(".") : [opt_attributes, expectedNumberOfNonCommentArgs, lastArrayIdSentFromServer];
        /** @type {number} */
        opt_attributes[0] = parseInt(opt_attributes[0], 10) || 0;
        /** @type {number} */
        opt_attributes[1] = parseInt(opt_attributes[1], 10) || 0;
        /** @type {number} */
        opt_attributes[2] = parseInt(opt_attributes[2], 10) || 0;
        return target.T > opt_attributes[0] || (target.T == opt_attributes[0] && target.Ua > opt_attributes[1] || target.T == opt_attributes[0] && (target.Ua == opt_attributes[1] && target.Db >= opt_attributes[2]));
    }
    /**
     * @param {string} item
     * @return {?}
     */
    function hasClass(item) {
        return -1 < item.Mc.indexOf("Gnash") && -1 == item.Mc.indexOf("AVM2") || (9 == item.T && 1 == item.Ua || 9 == item.T && (0 == item.Ua && 1 == item.Db)) ? t : 9 <= item.T;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    function ajaxSuccess(data) {
        return -1 < navigator.userAgent.indexOf("Sony/COM2") && !parseData(data, 9, 1, 58) ? t : TRUE;
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function parse(self) {
        if (3 > self.Aa) {
            if (1 > self.Aa) {
                var query = apply("window.navigator.plugins");
                var data = apply("window.navigator.mimeTypes");
                query = query && query["Shockwave Flash"];
                data = data && data["application/x-shockwave-flash"];
                data = query && (data && (data.enabledPlugin && query.description)) || "";
                if (query = data) {
                    var pos = query.indexOf("Shockwave Flash");
                    if (0 <= pos) {
                        query = query.substr(pos + 15);
                    }
                    pos = query.split(" ");
                    /** @type {string} */
                    var row = "";
                    /** @type {string} */
                    query = "";
                    /** @type {number} */
                    var x = 0;
                    var col = pos.length;
                    for (; x < col; x++) {
                        if (row) {
                            if (query) {
                                break;
                            } else {
                                query = pos[x];
                            }
                        } else {
                            row = pos[x];
                        }
                    }
                    row = row.split(".");
                    /** @type {number} */
                    pos = parseInt(row[0], 10) || 0;
                    /** @type {number} */
                    row = parseInt(row[1], 10) || 0;
                    /** @type {number} */
                    x = 0;
                    if ("r" == query.charAt(0) || "d" == query.charAt(0)) {
                        /** @type {number} */
                        x = parseInt(query.substr(1), 10) || 0;
                    }
                    /** @type {Array} */
                    query = [pos, row, x];
                } else {
                    /** @type {Array} */
                    query = [0, 0, 0];
                }
                self.Mc = data;
                /** @type {Array} */
                data = query;
                self.T = data[0];
                self.Ua = data[1];
                self.Db = data[2];
                /** @type {number} */
                self.Aa = 1;
                if (0 < self.T) {
                    parseObject(self);
                } else {
                    parse(self);
                }
            } else {
                if (2 > self.Aa) {
                    var flash;
                    var events;
                    var head;
                    var obj;
                    if (ignoreEmpty) {
                        try {
                            flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        } catch (F) {
                            /** @type {null} */
                            flash = value;
                        }
                        if (!flash) {
                            self.Qd("");
                        }
                    } else {
                        head = document.getElementsByTagName("body")[0];
                        /** @type {Element} */
                        obj = document.createElement("object");
                        obj.setAttribute("type", "application/x-shockwave-flash");
                        flash = head.appendChild(obj);
                    }
                    var eachEvent = bind(self.Qd, self);
                    /** @type {number} */
                    var O = 0;
                    /**
                     * @return {undefined}
                     */
                    var remove = function() {
                        if (flash && "GetVariable" in flash) {
                            try {
                                events = flash.GetVariable("$version");
                            } catch (a) {
                                /** @type {string} */
                                events = "";
                            }
                        }
                        if (events || 10 <= O) {
                            if (head) {
                                if (obj) {
                                    head.removeChild(obj);
                                }
                            }
                            eachEvent(events || "");
                        } else {
                            O++;
                            attr(remove, 10);
                        }
                    };
                    attr(remove, 0);
                } else {
                    parseObject(self);
                }
            }
        }
    }
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    function parseObject(obj) {
        if (3 > obj.Aa) {
            /** @type {number} */
            obj.Aa = 3;
            /** @type {number} */
            var i = 0;
            var valuesLen = obj.b.length;
            for (; i < valuesLen; i++) {
                obj.b[i](obj);
            }
            /** @type {Array} */
            obj.b = [];
        }
    }
    /**
     * @param {string} a
     * @param {Object} path
     * @param {Object} data
     * @return {undefined}
     */
    function createMovie(a, path, data) {
        if ((a = require(a)) && (path && data)) {
            if (!(data instanceof Buffer)) {
                data = new Buffer(data);
            }
            var el = attrs(data.attrs);
            /** @type {number} */
            el.tabindex = 0;
            var obj = attrs(data.params);
            obj.flashvars = key(data.args);
            if (ignoreEmpty) {
                /** @type {string} */
                el.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                /** @type {Object} */
                obj.movie = path;
                /** @type {Element} */
                path = document.createElement("object");
                var k;
                for (k in el) {
                    path.setAttribute(k, el[k]);
                }
                for (k in obj) {
                    /** @type {Element} */
                    el = document.createElement("param");
                    el.setAttribute("name", k);
                    el.setAttribute("value", obj[k]);
                    path.appendChild(el);
                }
            } else {
                /** @type {string} */
                el.type = "application/x-shockwave-flash";
                /** @type {Object} */
                el.src = path;
                /** @type {Element} */
                path = document.createElement("embed");
                for (k in el) {
                    path.setAttribute(k, el[k]);
                }
                for (k in obj) {
                    path.setAttribute(k, obj[k]);
                }
            }
            /** @type {Element} */
            obj = document.createElement("div");
            obj.appendChild(path);
            /** @type {string} */
            a.innerHTML = obj.innerHTML;
        }
    }
    /**
     * @param {Text} v
     * @param {?} data
     * @return {undefined}
     */
    function e(v, data) {
        v = require(v);
        if (!(data instanceof Buffer)) {
            data = new Buffer(data);
        }
        if (window != window.top) {
            /** @type {null} */
            var color = value;
            if (document.referrer) {
                /** @type {string} */
                color = document.referrer.substring(0, 128);
            }
            /** @type {(null|string)} */
            data.args.framer = color;
        }
        regexpForDateFormat(function(target) {
            if (parseData(target, data.minVersion) || push("IS_OPERA_MINI")) {
                target = hasClass(target) && data.url || (ajaxSuccess(target) && data.urlV9As2 || (data.urlV8 || data.url));
                createMovie(v, target, data);
            } else {
                if (0 == target.T && data.fallback) {
                    data.fallback();
                } else {
                    if (0 == target.T && data.fallbackMessage) {
                        data.fallbackMessage();
                    } else {
                        /** @type {string} */
                        v.innerHTML = '<div id="flash-upgrade">' + replace("FLASH_UPGRADE", element, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>";
                    }
                }
            }
        });
    }
    /**
     * @param {Object} o
     * @param {string} element
     * @param {?} $timeout
     * @return {undefined}
     */
    function postLink(o, element, $timeout) {
        if (o) {
            if (!(o instanceof Buffer)) {
                o = new Buffer(o);
            }
            /** @type {boolean} */
            var block = !!element;
            var a = require(o.attrs.id);
            var b = a ? a.parentNode : value;
            if (!a || !b) {
                attr(function() {
                    postLink(o);
                }, 50);
            } else {
                if (window != window.top) {
                    /** @type {null} */
                    element = value;
                    if (document.referrer) {
                        /** @type {string} */
                        var input = document.referrer.substring(0, 128);
                        var result = siblings(input);
                        if (!include(result)) {
                            if (!arrayIndexOf(result)) {
                                /** @type {string} */
                                element = input;
                            }
                        }
                    } else {
                        /** @type {string} */
                        element = "unknown";
                    }
                    if (element) {
                        /** @type {boolean} */
                        block = TRUE;
                        /** @type {string} */
                        o.args.framer = element;
                    }
                }
                regexpForDateFormat(function(data) {
                    if (parseData(data, o.minVersion)) {
                        /** @type {string} */
                        var index = "";
                        if (!(-1 < navigator.userAgent.indexOf("Sony/COM2"))) {
                            index = a.getAttribute("src") || a.movie;
                        }
                        if (hasClass(data)) {
                            if (index != o.url || block) {
                                createMovie(b, o.url, o);
                            }
                        } else {
                            if (ajaxSuccess(data)) {
                                if (index != o.urlV9As2 || block) {
                                    createMovie(b, o.urlV9As2, o);
                                }
                            } else {
                                if (index != o.urlV8 || block) {
                                    createMovie(b, o.urlV8, o);
                                }
                            }
                        }
                        if (retry ? !parseData(data, 11, 2) : err ? !parseData(data, 11, 3) : !hasClass(data)) {
                            data = require("flash10-promo-div");
                            index = indexOf(editor.getInstance(), tok.Xd);
                            if (data) {
                                if (!index) {
                                    call(data);
                                }
                            }
                        }
                    } else {
                        if (ignoreEmpty && parseData(data, 6, 0, 65)) {
                            data = new Buffer({
                                url: "/swf/expressInstall.swf",
                                args: {
                                    MMredirectURL: window.location,
                                    MMplayerType: "ActiveX",
                                    MMdoctitle: document.title
                                }
                            });
                            createMovie(b, data.url, data);
                        } else {
                            if (0 == data.T && o.fallback) {
                                o.fallback();
                            } else {
                                if (0 == data.T && o.fallbackMessage) {
                                    o.fallbackMessage();
                                } else {
                                    /** @type {string} */
                                    b.innerHTML = '<div id="flash-upgrade">' + replace("FLASH_UPGRADE") + "</div>";
                                }
                            }
                        }
                    }
                    if ($timeout) {
                        $timeout();
                    }
                });
            }
        }
    }
    /**
     * @param {Function} format
     * @return {undefined}
     */
    function regexpForDateFormat(format) {
        term.getInstance().load(function(browser) {
            editor.getInstance();
            sendMessage("fv", browser.getVersion().join("."));
            compare();
            format(browser);
        });
    }
    /**
     * @return {undefined}
     */
    function recordType() {}
    /**
     * @param {?} eventName
     * @return {undefined}
     */
    function ret(eventName) {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var argLength = arguments.length;
        for (; i < argLength; ++i) {
            var target = arguments[i];
            if (isObject(target)) {
                ret.apply(value, target);
            } else {
                if (target) {
                    if ("function" == typeof target.la) {
                        target.la();
                    }
                }
            }
        }
    }
    /**
     * @return {undefined}
     */
    function _this() {
        /** @type {Array} */
        this.b = [];
        this.V = {};
    }
    /**
     * @param {string} command
     * @param {Function} fn
     * @param {(Document|string)} scope
     * @return {?}
     */
    function create(command, fn, scope) {
        var me = apply("yt.pubsub.instance_");
        return me ? me.subscribe(command, function() {
            /** @type {Arguments} */
            var newArgs = arguments;
            attr(function() {
                fn.apply(scope || global, newArgs);
            }, 0);
        }, scope) : 0;
    }
    /**
     * @param {Object} array
     * @return {undefined}
     */
    function flatten(array) {
        var selfObj = apply("yt.pubsub.instance_");
        if (selfObj) {
            if ("number" == typeof array) {
                /** @type {Array} */
                array = [array];
            }
            slice(array, function(key) {
                selfObj.unsubscribeByKey(key);
            });
        }
    }
    /**
     * @param {string} event
     * @param {boolean} b
     * @return {?}
     */
    function extend(event, b) {
        var self = apply("yt.pubsub.instance_");
        return self ? self.publish.apply(self, arguments) : t;
    }
    /**
     * @param {?} c
     * @param {string} var_args
     * @param {(Document|string)} container
     * @return {undefined}
     */
    function Map(c, var_args, container) {
        this.c = c;
        if (of) {
            /** @type {string} */
            this.j = var_args;
        }
        this.K = container || window;
        this.e = this.K.location;
        this.Q = this.e.href.split("#")[0];
        this.C = bind(this.ca, this);
    }
    /**
     * @param {(Function|string)} s
     * @return {?}
     */
    function getHash(s) {
        s = s.e.href;
        var r = s.indexOf("#");
        return 0 > r ? "" : s.substring(r + 1);
    }
    /**
     * @param {Object} s
     * @param {RegExp} value
     * @return {undefined}
     */
    function regExpEscape(s, value) {
        /** @type {string} */
        var tval = s.Q + "#" + value;
        var pageUrl = s.e.href;
        if (!(pageUrl == tval)) {
            if (!(pageUrl + "#" == tval)) {
                /** @type {string} */
                s.e.href = tval;
            }
        }
    }
    /**
     * @param {Object} container
     * @param {RegExp} value
     * @return {undefined}
     */
    function save(container, value) {
        var doc = container.j.contentWindow.document;
        /** @type {string} */
        var num = "#" + encodeURIComponent(String(value));
        if ((doc.body ? doc.body.innerHTML : "") != num) {
            /** @type {Array} */
            num = ["<title>", encode(window.document.title || ""), "</title><body>", num, "</body>"];
            doc.open("text/html");
            doc.write(num.join(""));
            doc.close();
        }
    }
    /**
     * @return {undefined}
     */
    function $Node() {
        /** @type {number} */
        this.b = setAttribute();
    }
    /**
     * @param {?} e
     * @param {(Document|string)} element
     * @return {undefined}
     */
    function Element(e, element) {
        this.e = e;
        this.f = element || window;
        this.c = this.f.location;
        this.C = bind(this.K, this);
    }
    /**
     * @param {string} start
     * @return {?}
     */
    function Set(start) {
        start = start || "hash";
        var ref = apply("yt.history.instance_");
        if (!ref) {
            if ("state" == start) {
                ref = new Element(ContextMenu);
                /** @type {function (?, string): undefined} */
                Element.prototype.setEnabled = Element.prototype.Q;
                /** @type {function (?, string, ?): undefined} */
                Element.prototype.add = Element.prototype.add;
                /** @type {function (?, string, ?): undefined} */
                Element.prototype.replace = Element.prototype.replace;
            } else {
                ref = new Map(ContextMenu, require("legacy-history-iframe"));
                /** @type {function (?, string): undefined} */
                Map.prototype.setEnabled = Map.prototype.X;
                /** @type {function (RegExp, string, ?): undefined} */
                Map.prototype.add = Map.prototype.add;
                /** @type {function (RegExp, string, ?): undefined} */
                Map.prototype.replace = Map.prototype.add;
            }
            vvar = ref;
            run("yt.history.instance_", vvar);
        }
        return ref;
    }
    /**
     * @param {boolean} options
     * @param {?} actions
     * @return {undefined}
     */
    function ContextMenu(options, actions) {
        extend("navigate", options, actions);
    }
    /**
     * @param {string} str
     * @return {?}
     */
    function parseQuery(str) {
        /** @type {string} */
        str = String(str);
        if (/^\s*$/.test(str) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
            try {
                return eval("(" + str + ")");
            } catch (b) {}
        }
        log(Error("Invalid JSON string: " + str));
    }
    /**
     * @param {string} data
     * @return {?}
     */
    function _eval(data) {
        return eval("(" + data + ")");
    }
    /**
     * @param {?} b
     * @return {undefined}
     */
    function getColorIndex(b) {
        this.b = b;
    }
    /**
     * @param {?} d
     * @param {string} t
     * @return {?}
     */
    function h(d, t) {
        /** @type {Array} */
        var paths = [];
        l(d, t, paths);
        return paths.join("");
    }
    /**
     * @param {?} d
     * @param {string} val
     * @param {Array} ctx
     * @return {undefined}
     */
    function l(d, val, ctx) {
        switch (typeof val) {
            case "string":
                inspect(val, ctx);
                break;
            case "number":
                ctx.push(isFinite(val) && !isNaN(val) ? val : "null");
                break;
            case "boolean":
                ctx.push(val);
                break;
            case "undefined":
                ctx.push("null");
                break;
            case "object":
                if (val == value) {
                    ctx.push("null");
                    break;
                }
                if (isArray(val)) {
                    var cl = val.length;
                    ctx.push("[");
                    /** @type {string} */
                    var b = "";
                    /** @type {number} */
                    var e = 0;
                    for (; e < cl; e++) {
                        ctx.push(b);
                        b = val[e];
                        l(d, d.b ? d.b.call(val, String(e), b) : b, ctx);
                        /** @type {string} */
                        b = ",";
                    }
                    ctx.push("]");
                    break;
                }
                ctx.push("{");
                /** @type {string} */
                cl = "";
                for (e in val) {
                    if (Object.prototype.hasOwnProperty.call(val, e)) {
                        b = val[e];
                        if ("function" != typeof b) {
                            ctx.push(cl);
                            inspect(e, ctx);
                            ctx.push(":");
                            l(d, d.b ? d.b.call(val, e, b) : b, ctx);
                            /** @type {string} */
                            cl = ",";
                        }
                    }
                }
                ctx.push("}");
                break;
            case "function":
                break;
            default:
                log(Error("Unknown type: " + typeof val));
        }
    }
    /**
     * @param {string} string
     * @param {Array} s
     * @return {undefined}
     */
    function inspect(string, s) {
        s.push('"', string.replace(trimEndRegexp, function(key) {
            if (key in internalValues) {
                return internalValues[key];
            }
            var dstUri = key.charCodeAt(0);
            /** @type {string} */
            var val1 = "\\u";
            if (16 > dstUri) {
                val1 += "000";
            } else {
                if (256 > dstUri) {
                    val1 += "00";
                } else {
                    if (4096 > dstUri) {
                        val1 += "0";
                    }
                }
            }
            return internalValues[key] = val1 + dstUri.toString(16);
        }), '"');
    }
    /**
     * @param {Object} data
     * @return {?}
     */
    function transform(data) {
        switch (data && "status" in data ? data.status : -1) {
            case 0:
                ;
            case 200:
                ;
            case 204:
                ;
            case 304:
                return TRUE;
            default:
                return t;
        }
    }
    /**
     * @param {string} walkers
     * @param {Function} error
     * @param {?} pdataCur
     * @param {string} url
     * @param {Object} headers
     * @param {?} params
     * @return {?}
     */
    function req(walkers, error, pdataCur, url, headers, params, body) {
        var req = NewXMLHttpRequest && NewXMLHttpRequest();
        let postBody = JSON.stringify(body)
        if ("open" in req) {
            /**
             * @return {undefined}
             */
            req.onreadystatechange = function() {
                if (4 == (req && "readyState" in req ? req.readyState : 0)) {
                    if (error) {
                        error(req);
                    }
                }
            };
            pdataCur = (pdataCur || "GET").toUpperCase();
            url = url || "";
            if (params) {
                req.responseType = params;
            }
            req.open(pdataCur, walkers, TRUE);
            /** @type {boolean} */
            walkers = "POST" == pdataCur;
            if (headers) {
                var headerName;
                for (headerName in headers) {
                    req.setRequestHeader(headerName, headers[headerName]);
                    if ("content-type" == headerName.toLowerCase()) {
                        /** @type {boolean} */
                        walkers = t;
                    }
                }
            }


            if (pdataCur === "POST" && postBody !== '') {
                req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                req.send(postBody);
            } else {
                if (walkers) {
                    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                }
                req.send(url);
            }

            return req;
        }
    }
    /**
     * @param {string} type
     * @param {?} opt_attributes
     * @return {undefined}
     */
    function i(type, opt_attributes) {
        var dataType = opt_attributes.format || "JSON";
        if (opt_attributes.qb) {
            /** @type {string} */
            type = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + type;
        }
        var e = opt_attributes.urlParams;
        if (e) {
            type = trim(type, e);
        }
        var value = opt_attributes.oa || "";
        if (e = opt_attributes.B) {
            value = endsWith(value);
            warn(value, e);
            value = key(value);
        }
        /** @type {boolean} */
        var block = t;
        var udataCur;
        var request = req(type, function(response) {
            if (!block) {
                /** @type {boolean} */
                block = TRUE;
                if (udataCur) {
                    _(udataCur);
                }
                var code = transform(response);
                /** @type {null} */
                var data = value;
                if (code || 400 <= response.status && 500 > response.status) {
                    /** @type {null} */
                    var obj = value;
                    switch (dataType) {
                        case "JSON":
                            data = response.responseText;
                            var scope = response.getResponseHeader("Content-Type") || "";
                            if (data) {
                                if (0 <= scope.indexOf("json")) {
                                    obj = _eval(data);
                                }
                            }
                            break;
                        case "XML":
                            if (data = (data = response.responseXML) ? error(data) : value) {
                                obj = {};
                                slice(data.getElementsByTagName("*"), function(a) {
                                    obj[a.tagName] = every(a);
                                });
                            };
                    }
                    data = obj;
                }
                if (code) {
                    a: {
                        switch (dataType) {
                            case "XML":
                                /** @type {boolean} */
                                code = 0 == parseInt(data && data.return_code, 10);
                                break a;
                            case "RAW":
                                /** @type {boolean} */
                                code = TRUE;
                                break a;
                        }
                        /** @type {boolean} */
                        code = !!data;
                    }
                }
                data = data || {};
                scope = opt_attributes.z || global;
                if (code) {
                    if (opt_attributes.i) {
                        opt_attributes.i.call(scope, response, data);
                    }
                } else {
                    if (opt_attributes.onError) {
                        opt_attributes.onError.call(scope, response, data);
                    }
                }
                if (opt_attributes.R) {
                    opt_attributes.R.call(scope, response, data);
                }
            }
        }, opt_attributes.method, value, opt_attributes.headers, opt_attributes.responseType, opt_attributes.postBody);
        if (opt_attributes.Uf) {
            if (0 < opt_attributes.timeout) {
                udataCur = attr(function() {
                    if (!block) {
                        /** @type {boolean} */
                        block = TRUE;
                        request.abort();
                        _(udataCur);
                        opt_attributes.Uf.call(opt_attributes.z || global, request);
                    }
                }, opt_attributes.timeout);
            }
        }
    }
    /**
     * @param {Object} obj
     * @param {Object} opt_attributes
     * @return {undefined}
     */
    function format(obj, opt_attributes) {
        var m = opt_attributes || {};
        m.method = obj.method.toUpperCase();
        if ("POST" == m.method) {
            m.oa = MAP(obj);
        } else {
            var e = new E;
            _setForm(obj, e, extract);
            setOptions(e);
            var old = {};
            /** @type {number} */
            var k = 0;
            for (; k < e.b.length; k++) {
                var name = e.b[k];
                old[name] = e.c[name];
            }
            e = m.n || {};
            warn(e, old);
            m.n = e;
        }
        i(obj.action, m);
    }
    /**
     * @param {string} config
     * @param {Object} opts
     * @return {?}
     */
    function request(config, opts) {
        var c = opts.onComplete || value;
        var defaultAction = opts.onException || value;
        var callOnError = opts.onError || value;
        var path = opts.update || value;
        var _eval = opts.json || t;
        return req(config, function(pdataCur) {
            if (transform(pdataCur)) {
                var data = pdataCur.responseXML;
                var r = data ? error(data) : value;
                /** @type {boolean} */
                data = !(!data || !r);
                var result;
                var n;
                if (data && (result = each(r, "return_code"), n = each(r, "html_content"), 0 == result)) {
                    if (path) {
                        if (n) {
                            require(path).innerHTML = n;
                        }
                    }
                    var code = each(r, "js_content");
                    if (code) {
                        /** @type {Element} */
                        var script = document.createElement("script");
                        script.text = code;
                        document.getElementsByTagName("head")[0].appendChild(script);
                    }
                }
                if (c) {
                    if (data) {
                        data = each(r, "redirect_on_success");
                        if (result && data) {
                            window.location = data;
                        } else {
                            if (r = each(r, 0 == result ? "success_message" : "error_message")) {
                                alert(r);
                            }
                            /** @type {*} */
                            pdataCur = _eval ? eval("(" + n + ")") : pdataCur;
                            if (0 == result) {
                                c(pdataCur);
                            } else {
                                if (defaultAction) {
                                    defaultAction(pdataCur);
                                }
                            }
                        }
                    } else {
                        if (pdataCur.responseText) {
                            c(pdataCur);
                        }
                    }
                }
            } else {
                if (callOnError) {
                    callOnError(pdataCur);
                }
            }
        }, opts.method || "POST", opts.postBody || value, opts.headers || value);
    }
    /**
     * @param {Object} e
     * @return {?}
     */
    function error(e) {
        return !e ? value : (e = ("responseXML" in e ? e.responseXML : e).getElementsByTagName("root")) && 0 < e.length ? e[0] : value;
    }
    /**
     * @param {?} fn
     * @param {string} context
     * @return {?}
     */
    function each(fn, context) {
        if (!fn) {
            return value;
        }
        var key = fn.getElementsByTagName(context);
        return key && 0 < key.length ? every(key[0]) : value;
    }
    /**
     * @param {Node} thisObj
     * @return {?}
     */
    function every(thisObj) {
        /** @type {string} */
        var ret = "";
        slice(thisObj.childNodes, function(node) {
            ret += node.nodeValue;
        });
        return ret;
    }
    /**
     * @param {string} type
     * @param {?} next
     * @param {Function} cb
     * @return {undefined}
     */
    function onError(type, next, cb) {
        if (reset(type)) {
            if (next) {
                window.setTimeout(next, 0);
            }
        } else {
            /** @type {string} */
            var key = onResponse() + "/token_ajax";
            var node = {};
            /** @type {number} */
            node[rule[type]] = 1;
            i(key, {
                format: "RAW",
                method: "GET",
                n: node,
                /**
                 * @param {XMLHttpRequest} r
                 * @return {undefined}
                 */
                R: function(r) {
                    var dirs = endsWith(r.responseText);
                    var dir = dirs[special[type]];
                    if (dir) {
                        label(type, dir);
                        if (next) {
                            next();
                        }
                    } else {
                        if (cb) {
                            cb(r, dirs);
                        }
                    }
                }
            });
        }
    }
    /**
     * @param {Object} v
     * @param {?} deepDataAndEvents
     * @param {?} key
     * @return {?}
     */
    function v(v, deepDataAndEvents, key) {
        v = require(v);
        key = key || unescape(v);
        if (!(key in _handlers)) {
            /** @type {Array} */
            _handlers[key] = [];
        }
        _handlers[key].push([v, deepDataAndEvents]);
        /** @type {boolean} */
        $cookies[key] = t;
        return key;
    }
    /**
     * @param {?} path
     * @param {?} key
     * @return {undefined}
     */
    function getFile(path, key) {
        path = require(path);
        var i = key || unescape(path);
        var b = _handlers[i];
        if (b) {
            _handlers[i] = md5_gg(b, function(dataAndEvents) {
                return dataAndEvents[0] != path;
            });
        }
    }
    /**
     * @param {string} key
     * @return {undefined}
     */
    function loader(key) {
        if (key in _handlers) {
            if (!$cookies[key]) {
                slice(_handlers[key], function(node) {
                    var el = node[0];
                    node = node[1];
                    if (el) {
                        if ("IMG" == el.tagName) {
                            /** @type {string} */
                            el.onload = "";
                            /** @type {Object} */
                            el.src = node;
                        }
                    }
                });
                /** @type {Array} */
                _handlers[key] = [];
                /** @type {boolean} */
                $cookies[key] = TRUE;
            }
        }
    }
    /**
     * @param {Element} node
     * @return {?}
     */
    function onSuccess(node) {
        return node.dataset ? node.dataset.loaded : node.getAttribute("data-" + "loaded".replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    /**
     * @param {string} id
     * @param {?} err
     * @return {undefined}
     */
    function _done(id, err) {
        if (id in modules) {
            var r = modules[id];
            /** @type {Array.<?>} */
            var args = Array.prototype.slice.call(arguments, 1);
            /** @type {number} */
            var i = 0;
            var l = r.length;
            for (; i < l; i++) {
                if (r[i]) {
                    r[i][0].apply(r[i][1], args);
                }
            }
        }
    }
    /**
     * @param {string} str
     * @return {?}
     */
    function loadFile(str) {
        /** @type {number} */
        var d = 0;
        /** @type {number} */
        var i = 0;
        var len = str.length;
        for (; i < len; ++i) {
            d = 31 * d + str.charCodeAt(i);
            d %= 4294967296;
        }
        return d;
    }
    /**
     * @param {string} path
     * @param {Function} callback
     * @return {?}
     */
    function onload(path, callback) {
        /** @type {string} */
        var id = "js-" + loadFile(path);
        /** @type {(HTMLElement|null)} */
        var content = document.getElementById(id);
        var isGet = content && onSuccess(content);
        /** @type {(boolean|null)} */
        var iframe = content && !isGet;
        if (isGet) {
            return callback && callback(), content;
        }
        if (callback) {
            if (!(id in modules)) {
                /** @type {Array} */
                modules[id] = [];
            }
            modules[id].push([callback, element]);
        }
        if (iframe) {
            return content;
        }
        var result;
        /** @type {Element} */
        var el = document.createElement("script");
        /** @type {string} */
        el.id = id;
        /**
         * @return {undefined}
         */
        el.onload = function() {
            if (!onSuccess(result)) {
                var node = result;
                if (node.dataset) {
                    /** @type {string} */
                    node.dataset.loaded = "true";
                } else {
                    node.setAttribute("data-" + "loaded".replace(/([A-Z])/g, "-$1").toLowerCase(), "true");
                }
                _done(id);
                if (id) {
                    if (id in modules) {
                        delete modules[id];
                    }
                } else {
                    modules = {};
                }
            }
        };
        /**
         * @return {undefined}
         */
        el.onreadystatechange = function() {
            switch (el.readyState) {
                case "loaded":
                    ;
                case "complete":
                    el.onload(value);
            }
        };
        /** @type {string} */
        el.src = path;
        content = document.getElementsByTagName("head")[0];
        content.insertBefore(el, content.firstChild);
        return result = el;
    }
    /**
     * @param {string} data
     * @param {?} next_callback
     * @return {?}
     */
    function poll(data, next_callback) {
        return onload(data, next_callback);
    }
    /**
     * @param {string} path
     * @return {?}
     */
    function loadCSS(path) {
        /** @type {string} */
        var id = "css-" + loadFile(path);
        /** @type {(HTMLElement|null)} */
        var el = document.getElementById(id);
        if (el) {
            return el;
        }
        /** @type {Element} */
        el = document.createElement("link");
        /** @type {string} */
        el.id = id;
        /** @type {string} */
        el.rel = "stylesheet";
        /** @type {string} */
        el.href = path;
        document.getElementsByTagName("head")[0].appendChild(el);
        return el;
    }
    /**
     * @param {string} src
     * @param {boolean} value
     * @return {undefined}
     */
    function url(src, value) {
        var from = parseURL(src);
        if (from == parseURL(window.location.href) || !from && 0 == src.lastIndexOf("/", 0)) {
            if (from = isBoolean(src), from = _find(from)) {
                /** @type {number} */
                var s = 0;
                /** @type {number} */
                var i = 0;
                for (; i < from.length; ++i) {
                    s = 31 * s + from.charCodeAt(i);
                    s %= 4294967296;
                }
                /** @type {string} */
                from = "s_tempdata-" + s;
                s = value ? key(value) : "";
                cmp(from, s, 5);
            }
        }
    }
    /**
     * @param {string} src
     * @param {?} cb
     * @return {undefined}
     */
    function loadImage(src, cb) {
        if (src) {
            /** @type {Image} */
            var source = new Image;
            /** @type {string} */
            var key = "" + nextGuid++;
            /** @type {Image} */
            headers[key] = source;
            /** @type {function (): undefined} */
            source.onload = source.onerror = function() {
                if (cb) {
                    if (headers[key]) {
                        cb();
                    }
                }
                delete headers[key];
            };
            /** @type {string} */
            source.src = src;
            /** @type {*} */
            source = eval("null");
        }
    }
    /**
     * @param {string} initial
     * @param {string} arr
     * @param {?} obj
     * @return {undefined}
     */
    function clear(initial, arr, obj) {
        children(initial, arr || "null");
        /** @type {string} */
        initial = "a=" + initial + (arr ? "&" + arr : "").replace(/\//g, "&");
        loadImage("/gen_204?" + initial, obj);
    }
    /**
     * @param {Object} options
     * @param {Object} attrs
     * @param {string} deepDataAndEvents
     * @param {Object} obj
     * @return {undefined}
     */
    function S(options, attrs, deepDataAndEvents, obj) {
        options = {
            name: options,
            locale: deepDataAndEvents,
            feature: obj
        };
        var attr;
        for (attr in attrs) {
            options[attr] = attrs[attr];
        }
        attrs = applyReplacement("/sharing_services", options);
        loadImage(attrs);
    }
    /**
     * @param {string} removed
     * @param {Object} val
     * @param {string} deepDataAndEvents
     * @param {Object} walkers
     * @return {undefined}
     */
    function removeChild(removed, val, deepDataAndEvents, walkers) {
        S(removed, {
            v: val
        }, deepDataAndEvents, walkers);
    }
    /**
     * @param {Object} selector
     * @param {Array} arr
     * @param {boolean} v
     * @param {string} deepDataAndEvents
     * @param {Object} array
     * @return {undefined}
     */
    function last(selector, arr, v, deepDataAndEvents, array) {
        S(selector, {
            list: arr,
            v: v
        }, deepDataAndEvents, array);
    }
    /**
     * @param {number} node
     * @param {number} left
     * @param {Object} elem
     * @param {number} callback
     * @param {Object} relative
     * @param {number} obj
     * @param {Date} x
     * @return {?}
     */
    function position(node, left, elem, callback, relative, obj, x) {
        var el;
        var bounds;
        if (el = elem.offsetParent) {
            /** @type {boolean} */
            var b = "HTML" == el.tagName || "BODY" == el.tagName;
            if (!b || "static" != getCSS(el, "position")) {
                bounds = scroll(el);
                if (!b) {
                    b = (b = $$(el)) && firefox ? -el.scrollLeft : b && (!documentElement || !css("8")) ? el.scrollWidth - el.clientWidth - el.scrollLeft : el.scrollLeft;
                    bounds = walk(bounds, new Rect(b, el.scrollTop));
                }
            }
        }
        el = bounds || new Rect;
        bounds = onclick(node);
        if (b = getVisibleRectForElement(node)) {
            var p = new Node(b.left, b.top, b.right - b.left, b.bottom - b.top);
            /** @type {number} */
            b = Math.max(bounds.left, p.left);
            /** @type {number} */
            var t = Math.min(bounds.left + bounds.width, p.left + p.width);
            if (b <= t) {
                /** @type {number} */
                var ret = Math.max(bounds.top, p.top);
                /** @type {number} */
                p = Math.min(bounds.top + bounds.height, p.top + p.height);
                if (ret <= p) {
                    /** @type {number} */
                    bounds.left = b;
                    /** @type {number} */
                    bounds.top = ret;
                    /** @type {number} */
                    bounds.width = t - b;
                    /** @type {number} */
                    bounds.height = p - ret;
                }
            }
        }
        b = getter(node);
        ret = getter(elem);
        if (b.b != ret.b) {
            t = b.b.body;
            ret = ret.b.parentWindow || ret.b.defaultView;
            p = new Rect(0, 0);
            var currentWin = getAttribute(t) ? getAttribute(t).parentWindow || getAttribute(t).defaultView : window;
            var currentEl = t;
            do {
                var v = currentWin == ret ? scroll(currentEl) : applyTransform(currentEl);
                p.x += v.x;
                p.y += v.y;
            } while (currentWin && (currentWin != ret && ((currentEl = currentWin.frameElement) && (currentWin = currentWin.parent))));
            t = walk(p, scroll(t));
            if (documentElement) {
                if (!max(b)) {
                    t = walk(t, min(b));
                }
            }
            bounds.left += t.x;
            bounds.top += t.y;
        }
        /** @type {number} */
        node = (left & 4 && $$(node) ? left ^ 2 : left) & -5;
        left = new Rect(node & 2 ? bounds.left + bounds.width : bounds.left, node & 1 ? bounds.top + bounds.height : bounds.top);
        left = walk(left, el);
        if (relative) {
            left.x += (node & 2 ? -1 : 1) * relative.x;
            left.y += (node & 1 ? -1 : 1) * relative.y;
        }
        var rect;
        if (x && (rect = getVisibleRectForElement(elem))) {
            rect.top -= el.y;
            rect.right -= el.x;
            rect.bottom -= el.y;
            rect.left -= el.x;
        }
        return drag(left, elem, callback, obj, rect, x, element);
    }
    /**
     * @param {number} value
     * @param {Object} elem
     * @param {Object} style
     * @param {number} opt_margin
     * @param {Object} b
     * @param {number} e
     * @param {Object} size
     * @return {?}
     */
    function drag(value, elem, style, opt_margin, b, e, size) {
        value = value.fa();
        /** @type {number} */
        var pos = 0;
        /** @type {number} */
        var s = (style & 4 && $$(elem) ? style ^ 2 : style) & -5;
        style = append(elem);
        size = size ? size.fa() : style.fa();
        if (opt_margin || 0 != s) {
            if (s & 2) {
                value.x -= size.width + (opt_margin ? opt_margin.right : 0);
            } else {
                if (opt_margin) {
                    value.x += opt_margin.left;
                }
            }
            if (s & 1) {
                value.y -= size.height + (opt_margin ? opt_margin.bottom : 0);
            } else {
                if (opt_margin) {
                    value.y += opt_margin.top;
                }
            }
        }
        if (e) {
            if (b) {
                /** @type {number} */
                pos = value;
                /** @type {number} */
                opt_margin = 0;
                if (65 == (e & 65) && (pos.x < b.left || pos.x >= b.right)) {
                    e &= -2;
                }
                if (132 == (e & 132) && (pos.y < b.top || pos.y >= b.bottom)) {
                    e &= -5;
                }
                if (pos.x < b.left) {
                    if (e & 1) {
                        pos.x = b.left;
                        opt_margin |= 1;
                    }
                }
                if (pos.x < b.left) {
                    if (pos.x + size.width > b.right && e & 16) {
                        /** @type {number} */
                        size.width = Math.max(size.width - (pos.x + size.width - b.right), 0);
                        opt_margin |= 4;
                    }
                }
                if (pos.x + size.width > b.right) {
                    if (e & 1) {
                        /** @type {number} */
                        pos.x = Math.max(b.right - size.width, b.left);
                        opt_margin |= 1;
                    }
                }
                if (e & 2) {
                    opt_margin |= (pos.x < b.left ? 16 : 0) | (pos.x + size.width > b.right ? 32 : 0);
                }
                if (pos.y < b.top) {
                    if (e & 4) {
                        pos.y = b.top;
                        opt_margin |= 2;
                    }
                }
                if (pos.y >= b.top) {
                    if (pos.y + size.height > b.bottom && e & 32) {
                        /** @type {number} */
                        size.height = Math.max(size.height - (pos.y + size.height - b.bottom), 0);
                        opt_margin |= 8;
                    }
                }
                if (pos.y + size.height > b.bottom) {
                    if (e & 4) {
                        /** @type {number} */
                        pos.y = Math.max(b.bottom - size.height, b.top);
                        opt_margin |= 2;
                    }
                }
                if (e & 8) {
                    opt_margin |= (pos.y < b.top ? 64 : 0) | (pos.y + size.height > b.bottom ? 128 : 0);
                }
                /** @type {number} */
                pos = opt_margin;
            } else {
                /** @type {number} */
                pos = 256;
            }
            if (pos & 496) {
                return pos;
            }
        }
        /** @type {number} */
        e = value;
        b = firefox && ((err || err2) && css("1.9"));
        if (e instanceof Rect) {
            value = e.x;
            e = e.y;
        } else {
            /** @type {number} */
            value = e;
            e = element;
        }
        elem.style.left = px(value, b);
        elem.style.top = px(e, b);
        if (!(style == size || (!style || !size ? 0 : style.width == size.width && style.height == size.height))) {
            value = max(getter(getAttribute(elem)));
            if (documentElement && (!value || !css("8"))) {
                style = elem.style;
                if (value) {
                    if (documentElement) {
                        value = getPixelValue(elem, num(elem, "paddingLeft"));
                        b = getPixelValue(elem, num(elem, "paddingRight"));
                        e = getPixelValue(elem, num(elem, "paddingTop"));
                        opt_margin = getPixelValue(elem, num(elem, "paddingBottom"));
                        value = new link(e, b, opt_margin, value);
                    } else {
                        value = _getStyle(elem, "paddingLeft");
                        b = _getStyle(elem, "paddingRight");
                        e = _getStyle(elem, "paddingTop");
                        opt_margin = _getStyle(elem, "paddingBottom");
                        value = new link(parseFloat(e), parseFloat(b), parseFloat(opt_margin), parseFloat(value));
                    }
                    if (documentElement) {
                        b = getParent(elem, "borderLeft");
                        e = getParent(elem, "borderRight");
                        opt_margin = getParent(elem, "borderTop");
                        elem = getParent(elem, "borderBottom");
                        elem = new link(opt_margin, e, elem, b);
                    } else {
                        b = _getStyle(elem, "borderLeftWidth");
                        e = _getStyle(elem, "borderRightWidth");
                        opt_margin = _getStyle(elem, "borderTopWidth");
                        elem = _getStyle(elem, "borderBottomWidth");
                        elem = new link(parseFloat(opt_margin), parseFloat(e), parseFloat(elem), parseFloat(b));
                    }
                    /** @type {number} */
                    style.pixelWidth = size.width - elem.left - value.left - value.right - elem.right;
                    /** @type {number} */
                    style.pixelHeight = size.height - elem.top - value.top - value.bottom - elem.bottom;
                } else {
                    style.pixelWidth = size.width;
                    style.pixelHeight = size.height;
                }
            } else {
                elem = elem.style;
                if (firefox) {
                    /** @type {string} */
                    elem.MozBoxSizing = "border-box";
                } else {
                    if (ie) {
                        /** @type {string} */
                        elem.WebkitBoxSizing = "border-box";
                    } else {
                        /** @type {string} */
                        elem.boxSizing = "border-box";
                    }
                }
                /** @type {string} */
                elem.width = Math.max(size.width, 0) + "px";
                /** @type {string} */
                elem.height = Math.max(size.height, 0) + "px";
            }
        }
        return pos;
    }
    /**
     * @param {string} type
     * @param {string} event
     * @param {Function} value
     * @return {undefined}
     */
    function fireEvent(type, event, value) {
        if (!(event in handlers)) {
            handlers[event] = new _this;
        }
        handlers[event].wa(type, value);
    }
    /**
     * @param {boolean} type
     * @param {string} set
     * @param {?} input
     * @return {?}
     */
    function doSteps(type, set, input) {
        var attributes;
        switch (type) {
            case "mouseover":
                ;
            case "mouseout":
                /** @type {number} */
                attributes = 3;
                break;
            case "mouseenter":
                ;
            case "mouseleave":
                /** @type {number} */
                attributes = 9;
        }
        return parentIfText(input, function(isXML) {
            return same(isXML, set);
        }, TRUE, attributes);
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function nativeHandler(e) {
        /** @type {boolean} */
        var name = "mouseover" == e.type && "mouseenter" in handlers || "mouseout" == e.type && "mouseleave" in handlers;
        /** @type {boolean} */
        var hooks = e.type in handlers || name;
        if ("HTML" != e.target.tagName && hooks) {
            if (name) {
                /** @type {string} */
                name = "mouseover" == e.type ? "mouseenter" : "mouseleave";
                hooks = handlers[name];
                var key;
                for (key in hooks.V) {
                    var value = doSteps(name, key, e.target);
                    if (value) {
                        if (!parentIfText(e.relatedTarget, function(el) {
                                return el == value;
                            }, TRUE)) {
                            hooks.xa(key, value, name, e);
                        }
                    }
                }
            }
            if (name = handlers[e.type]) {
                for (key in name.V) {
                    if (value = doSteps(e.type, key, e.target)) {
                        name.xa(key, value, e.type, e);
                    }
                }
            }
        }
    }
    /**
     * @param {Function} obj
     * @return {undefined}
     */
    function isUndefined(obj) {
        obj = obj.getInstance();
        var id = get(obj);
        if (!(id in entities)) {
            if (obj.Tc()) {
                obj.register();
                /** @type {Function} */
                entities[id] = obj;
            }
        }
    }
    /**
     * @return {undefined}
     */
    function orig() {
        this.b = {};
    }
    /**
     * @param {Object} obj
     * @param {string} event
     * @param {?} fn
     * @param {string} type
     * @return {undefined}
     */
    function removeEvent(obj, event, fn, type) {
        type = get(obj, type);
        var i = bind(fn, obj);
        fireEvent(type, event, i);
        obj.b[fn] = i;
    }
    /**
     * @param {Object} obj
     * @param {string} name
     * @return {?}
     */
    function get(obj, name) {
        return "yt-uix" + (obj.H ? "-" + obj.H : "") + (name ? "-" + name : "");
    }
    /**
     * @return {undefined}
     */
    function target() {
        this.b = {};
    }
    /**
     * @param {Object} element
     * @param {?} value
     * @return {?}
     */
    function activate(element, value) {
        var source = get(element, "menu-item-highlight");
        var key = callback(source, value);
        if (key) {
            removeClass(key, source);
        }
        return key;
    }
    /**
     * @param {Object} self
     * @param {Element} menu
     * @param {Element} e
     * @return {undefined}
     */
    function onConnect(self, menu, e) {
        end(e, get(self, "menu-item-highlight"));
        menu.setAttribute("aria-activedescendant", e.getAttribute("id"));
    }
    /**
     * @param {number} n
     * @param {?} obj
     * @param {number} i
     * @param {Object} e
     * @return {?}
     */
    function number(n, obj, i, e) {
        var l = obj.length;
        n = assert(obj, n);
        if (-1 == n) {
            if (38 == e.keyCode) {
                /** @type {number} */
                n = l - i;
            } else {
                if (37 == e.keyCode || (38 == e.keyCode || 40 == e.keyCode)) {
                    /** @type {number} */
                    n = 0;
                }
            }
        } else {
            if (39 == e.keyCode) {
                if (n % i == i - 1) {
                    n -= i;
                }
                n += 1;
            } else {
                if (37 == e.keyCode) {
                    if (0 == n % i) {
                        n += i;
                    }
                    n -= 1;
                } else {
                    if (38 == e.keyCode) {
                        if (n < i) {
                            n += l;
                        }
                        n -= i;
                    } else {
                        if (40 == e.keyCode) {
                            if (n >= l - i) {
                                n -= l;
                            }
                            n += i;
                        }
                    }
                }
            }
        }
        return n;
    }
    /**
     * @param {Object} name
     * @param {?} data
     * @return {?}
     */
    function createFrame(name, data) {
        var node = data.iframeMask;
        if (!node) {
            /** @type {Element} */
            node = document.createElement("iframe");
            /** @type {string} */
            node.src = 'javascript:""';
            node.className = get(name, "menu-mask");
            /** @type {Element} */
            data.iframeMask = node;
        }
        return node;
    }
    /**
     * @param {Object} e
     * @param {?} s
     * @return {?}
     */
    function getIndex(e, s) {
        if (e.getData(s, "button-menu-root-container")) {
            var pdataCur = e.getData(s, "button-menu-root-container");
            return index(s, pdataCur);
        }
        return document.body;
    }
    /**
     * @param {Object} item
     * @param {?} node
     * @return {undefined}
     */
    function click(item, node) {
        if (node) {
            var text = map(item, node);
            if (text) {
                node.setAttribute("aria-pressed", "false");
                node.setAttribute("aria-expanded", "false");
                split(text);
                item.ga(node, "button-menu-action", t);
                var result = createFrame(item, node);
                attr(function() {
                    if (result) {
                        if (result.parentNode) {
                            result.parentNode.removeChild(result);
                        }
                    }
                    if (text.originalParentNode) {
                        text.parentNode.removeChild(text);
                        text.originalParentNode.appendChild(text);
                        /** @type {null} */
                        text.originalParentNode = value;
                        /** @type {null} */
                        text.activeButtonNode = value;
                    }
                }, 1);
            }
            var next = index(node, get(item, "group"));
            removeClass(node, get(item, "active"));
            if (next) {
                removeClass(next, get(item, "group-active"));
            }
            if (next = item.getData(node, "button-listener")) {
                off(next);
                getAll(node, "button-listener");
            }
            if (next = item.getData(node, "button-context-menu-listener")) {
                off(next);
                getAll(node, "button-context-menu-listener");
            }
        }
    }
    /**
     * @param {?} name
     * @param {Element} node
     * @return {?}
     */
    function removeNode(name, node) {
        return index(node.activeButtonNode || node.parentNode, get(name));
    }
    /**
     * @param {Object} item
     * @param {?} data
     * @return {?}
     */
    function map(item, data) {
        if (!data.widgetMenu) {
            var res = item.getData(data, "button-menu-id");
            res = res && require(res);
            var content = get(item, "menu");
            if (res) {
                end(res, content);
                end(res, get(item, "menu-external"));
            } else {
                res = callback(content, data);
            }
            data.widgetMenu = res;
        }
        return data.widgetMenu;
    }
    /**
     * @return {undefined}
     */
    function defs() {
        this.b = {};
    }
    /**
     * @param {Object} options
     * @param {?} key
     * @return {undefined}
     */
    function toJSON(options, key) {
        var camelKey = options.L(key);
        if (camelKey) {
            validate(camelKey, get(options, "collapsed"));
            options.ga(camelKey, "expander-action");
        }
    }
    /**
     * @param {Object} node
     * @param {?} data
     * @return {undefined}
     */
    function requestData(node, data) {
        var length = node.L(data);
        if (length) {
            end(length, get(node, "collapsed"));
            node.ga(length, "expander-action");
        }
    }
    /**
     * @return {undefined}
     */
    function OBJ2() {
        this.b = {};
    }
    /**
     * @param {Object} node
     * @param {Element} data
     * @param {?} count
     * @param {boolean} params
     * @return {undefined}
     */
    function getData(node, data, count, params) {
        node.setData(data, "tooltip-text", count);
        var p = node.getData(data, "content-id");
        if (p = require(p)) {
            p.innerHTML = count;
            if (params) {
                evalScript(node, data);
            }
        }
    }
    /**
     * @param {Object} item
     * @param {Element} data
     * @return {undefined}
     */
    function show(item, data) {
        if (data) {
            var width = item.getData(data, "tooltip-text") || data.title;
            if (width) {
                var b = require(store(item, data));
                if (!b) {
                    /** @type {Element} */
                    b = document.createElement("div");
                    b.id = store(item, data);
                    b.className = get(item, "tip");
                    /** @type {Element} */
                    var div = document.createElement("div");
                    div.className = get(item, "tip-body");
                    /** @type {Element} */
                    var a = document.createElement("div");
                    a.className = get(item, "tip-arrow");
                    /** @type {Element} */
                    var e = document.createElement("div");
                    e.className = get(item, "tip-content");
                    var node;
                    /** @type {null} */
                    node = value;
                    if (retry) {
                        if (same(data, get(item, "masked"))) {
                            if (node = require("yt-uix-tooltip-shared-mask")) {
                                node.parentNode.removeChild(node);
                                call(node);
                            } else {
                                /** @type {Element} */
                                node = document.createElement("iframe");
                                /** @type {string} */
                                node.src = 'javascript:""';
                                /** @type {string} */
                                node.id = "yt-uix-tooltip-shared-mask";
                                node.className = get(item, "tip-mask");
                            }
                        }
                    }
                    var element = store(item, data, "content");
                    e.id = element;
                    item.setData(data, "content-id", element);
                    div.appendChild(e);
                    if (node) {
                        b.appendChild(node);
                    }
                    b.appendChild(div);
                    b.appendChild(a);
                    (reposition() || document.body).appendChild(b);
                    getData(item, data, width);
                    if ((width = parseInt(item.getData(data, "tooltip-max-width"), 10)) && div.offsetWidth > width) {
                        /** @type {string} */
                        div.style.width = width + "px";
                        end(e, get(item, "normal-wrap"));
                    }
                    e = same(data, get(item, "reverse"));
                    if (!scale(item, data, b, div, node, e)) {
                        scale(item, data, b, div, node, !e);
                    }
                    var view = get(item, "tip-visible");
                    attr(function() {
                        end(b, view);
                    }, 0);
                }
            }
        }
    }
    /**
     * @param {string} str
     * @param {?} s
     * @param {Object} e
     * @param {Element} el
     * @param {boolean} elem
     * @param {boolean} v
     * @return {?}
     */
    function scale(str, s, e, el, elem, v) {
        done(e, get(str, "tip-reverse"), v);
        /** @type {number} */
        var fn = 0;
        if (v) {
            /** @type {number} */
            fn = 1;
        }
        var obj = append(s);
        v = new Rect((obj.width - 10) / 2, v ? obj.height : 0);
        var pos = scroll(s);
        drag(new Rect(pos.x + v.x, pos.y + v.y), e, fn);
        fn = getWindowSize(window);
        pos = applyTransform(e);
        e = append(el);
        /** @type {number} */
        var width = e.width / 2;
        if (elem) {
            /** @type {string} */
            elem.style.left = "3px";
            /** @type {string} */
            elem.style.height = e.height + "px";
            /** @type {string} */
            elem.style.width = e.width + "px";
        }
        /** @type {boolean} */
        elem = !!(fn.height < pos.y + obj.height);
        /** @type {boolean} */
        obj = !!(pos.y < obj.height);
        /** @type {boolean} */
        v = !!(pos.x < width);
        /** @type {boolean} */
        fn = !!(fn.width < pos.x + width);
        /** @type {number} */
        pos = (e.width + 3) / -2 - -5;
        str = str.getData(s, "force-tooltip-direction");
        if ("left" == str || v) {
            /** @type {number} */
            pos = -5;
        } else {
            if ("right" == str || fn) {
                /** @type {number} */
                pos = 20 - e.width - 3;
            }
        }
        /** @type {string} */
        el.style.left = pos + "px";
        return !(elem || obj);
    }
    /**
     * @param {string} key
     * @param {?} str
     * @return {undefined}
     */
    function evalScript(key, str) {
        if (str) {
            var ret = require(store(key, str));
            if (ret) {
                var item = require("yt-uix-tooltip-shared-mask");
                var handler = item && parentIfText(item, function(dataAndEvents) {
                    return dataAndEvents == ret;
                }, t, 2);
                if (item) {
                    if (handler) {
                        item.parentNode.removeChild(item);
                        split(item);
                        document.body.appendChild(item);
                    }
                }
                join(ret);
                getAll(str, "content-id");
            }
        }
    }
    /**
     * @param {string} key
     * @param {?} element
     * @param {string} property
     * @return {?}
     */
    function store(key, element, property) {
        key = get(key) + matches(element);
        if (property) {
            key += "-" + property;
        }
        return key;
    }
    /**
     * @param {string} value
     * @param {Object} f
     * @param {string} obj
     * @return {undefined}
     */
    function visit(value, f, obj) {
        window.location = applyReplacement(value, f || {}) + (obj || "");
    }
    /**
     * @param {(Object|string)} target
     * @param {Object} opt_options
     * @return {?}
     */
    function send(target, opt_options) {
        if (!opt_options) {
            opt_options = {};
        }
        /** @type {Window} */
        var self = window;
        var pdataCur = "undefined" != typeof target.href ? target.href : String(target);
        var suiteView = opt_options.target || target.target;
        /** @type {Array} */
        var options = [];
        var option;
        for (option in opt_options) {
            switch (option) {
                case "width":
                    ;
                case "height":
                    ;
                case "top":
                    ;
                case "left":
                    options.push(option + "=" + opt_options[option]);
                    break;
                case "target":
                    ;
                case "noreferrer":
                    break;
                default:
                    options.push(option + "=" + (opt_options[option] ? 1 : 0));
            }
        }
        /** @type {string} */
        options = options.join(",");
        if (opt_options.noreferrer) {
            if (self = self.open("", suiteView, options)) {
                if (documentElement) {
                    if (-1 != pdataCur.indexOf(";")) {
                        /** @type {string} */
                        pdataCur = "'" + pdataCur.replace(/'/g, "%27") + "'";
                    }
                }
                /** @type {null} */
                self.opener = value;
                if (ie) {
                    self.location.href = pdataCur;
                } else {
                    pdataCur = encode(pdataCur);
                    self.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + pdataCur + '">');
                    self.document.close();
                }
            }
        } else {
            /** @type {(Window|null)} */
            self = self.open(pdataCur, suiteView, options);
        }
        return self;
    }
    /**
     * @param {(Object|string)} obj
     * @param {Object} opt_attributes
     * @return {?}
     */
    function popup(obj, opt_attributes) {
        var options = opt_attributes || {};
        options.target = options.target || (obj.target || "YouTube");
        options.width = options.width || 600;
        options.height = options.height || 600;
        options = send(obj, options);
        if (!options) {
            return value;
        }
        if (!options.opener) {
            /** @type {Window} */
            options.opener = window;
        }
        options.focus();
        return options;
    }
    /**
     * @param {(Object|string)} opt_obj2
     * @param {Object} opt_attributes
     * @return {?}
     */
    function insertBefore(opt_obj2, opt_attributes) {
        return !popup(opt_obj2, opt_attributes);
    }
    /**
     * @param {string} name
     * @return {undefined}
     */
    function update(name) {
        var options = push("CONVERSION_CONFIG_DICT");
        if (options) {
            /** @type {string} */
            var result = "followon_" + name;
            if (!options.baseUrl || !options.uid) {
                /** @type {null} */
                name = value;
            } else {
                var params = options.rmktEnabled;
                var valid = options.focEnabled && !options.isAd;
                if (!params && !valid) {
                    /** @type {null} */
                    name = value;
                } else {
                    result = {
                        label: valid ? result : "default"
                    };
                    if (params) {
                        params = {
                            utuid: options.uid,
                            type: name
                        };
                        if (options.vid) {
                            params.utvid = options.vid;
                        }
                        if (options.eventLabel) {
                            params.el = options.eventLabel;
                        }
                        if (options.playerStyle) {
                            params.ps = options.playerStyle;
                        }
                        if (options.feature) {
                            params.feature = options.feature;
                        }
                        if (options.ppe) {
                            params.ppe = options.ppe;
                        }
                        /** @type {Array} */
                        var tagNameArr = [];
                        var key;
                        for (key in params) {
                            tagNameArr.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
                        }
                        /** @type {string} */
                        result.data = tagNameArr.join(";");
                    }
                    if (valid && ("view" == name && (options.vid && (options.uid && (options.oeid || options.ieid))))) {
                        if (options.oeid) {
                            result.oeid = options.oeid;
                        }
                        if (options.ieid) {
                            result.ieid = options.ieid;
                        }
                        result.evid = options.vid;
                    }
                    if (valid) {
                        result.foc_id = options.uid;
                    }
                    name = applyReplacement(options.baseUrl, result);
                }
            }
            if (name) {
                loadImage(name);
            }
        }
    }
    /**
     * @return {undefined}
     */
    function curValue() {
        this.b = {};
    }
    /**
     * @return {?}
     */
    function then() {
        var url = curValue.getInstance();
        var image = require(get(url, "fg"));
        return !image ? value : callback(get(url, "fg-content"), image);
    }
    /**
     * @return {undefined}
     */
    function hasOwnProperty() {
        curValue.getInstance().cc();
    }
    /**
     * @return {undefined}
     */
    function loginSuccess() {
        var suiteView = curValue.getInstance();
        var nodes = require(get(suiteView, "fg"));
        if (nodes) {
            end(nodes, get(suiteView, "unclosable"));
        }
    }
    /**
     * @return {undefined}
     */
    function Init() {
        var suiteView = curValue.getInstance();
        var header = require(get(suiteView, "fg"));
        if (header) {
            removeClass(header, get(suiteView, "unclosable"));
        }
    }
    /**
     * @return {?}
     */
    function parser() {
        return parseInt(push("SHUFFLE_VALUE"), 10) || 0;
    }
    /**
     * @return {?}
     */
    function evaluate() {
        var text = read("watch_queue_new");
        return text ? text.split(",") : [];
    }
    /**
     * @param {?} elems
     * @return {undefined}
     */
    function kindOf(elems) {
        elems = makeArray(elems, 0, 100);
        if (elems = elems.join(",")) {
            cmp("watch_queue_new", elems);
        } else {
            cleanup("watch_queue_new");
        }
    }
    /**
     * @param {?} el
     * @param {?} u
     * @param {Node} dx
     * @param {number} p
     * @return {undefined}
     */
    function s(el, u, dx, p) {
        this.e = el;
        this.P = u;
        /** @type {boolean} */
        this.ma = this.Za = t;
        this.ia = new _this;
        this.M = dx || [];
        this.Gb = p || 0;
        this.ob = {};
        /** @type {boolean} */
        this.f = !dx;
        /** @type {string} */
        this.nb = "";
        /** @type {number} */
        this.b = -1;
        /** @type {number} */
        this.$a = 1;
        /** @type {number} */
        this.Fb = this.ka = 0;
        /** @type {string} */
        this.lb = this.mb = "";
        /** @type {null} */
        this.c = this.Wa = this.Fa = value;
    }
    /**
     * @param {?} i
     * @return {undefined}
     */
    function splice(i) {
        i.ia.xa("LIST_UPDATED");
    }
    /**
     * @param {Object} a
     * @return {?}
     */
    function eq(a) {
        return a.Y() ? isNumber(a, "shuffled_ids", function() {
            return _keys(partial(this), function(ignores) {
                return ignores.id;
            });
        }) : a.za();
    }
    /**
     * @param {Object} a
     * @param {?} results
     * @return {?}
     */
    function loadPlugins(a, results) {
        var arr = eq(a);
        return _keys(results, function(b) {
            var f;
            a: {
                /**
                 * @param {?} a
                 * @return {?}
                 */
                f = function(a) {
                    return a == b;
                };
                var arr2 = isString(arr) ? arr.split("") : arr;
                /** @type {number} */
                var i = arr.length - 1;
                for (; 0 <= i; i--) {
                    if (i in arr2 && f.call(element, arr2[i])) {
                        /** @type {number} */
                        f = i;
                        break a;
                    }
                }
                /** @type {number} */
                f = -1;
            }
            return f;
        });
    }
    /**
     * @param {Object} fn
     * @return {?}
     */
    function partial(fn) {
        return isNumber(fn, "shuffled_videos", function() {
            /**
             * @param {string} val
             * @return {?}
             */
            function ondata(val) {
                /** @type {number} */
                var method = 1;
                /** @type {Array} */
                var spec = [];
                val = val.split("");
                for (; val.length;) {
                    /** @type {number} */
                    method = (offset + method) % val.length;
                    var func = val[method];
                    isKind(val, method);
                    spec.push(func);
                }
                return spec.join("");
            }
            var results = this.za();
            var offset = parser();
            /** @type {Array} */
            var values = [];
            slice(results, function(name, idx) {
                values.push({
                    id: name,
                    key: ondata(name),
                    index: idx
                });
            });
            proto.sort.call(values, function(entry, keyOrObj) {
                return comparator(entry.key, keyOrObj.key);
            } || comparator);
            /** @type {number} */
            var i = offset >> 8;
            some(values, function(o) {
                return i == o.index;
            });
            results = makeArray(values, i).concat(makeArray(values, 0, i));
            return _keys(results, function(worker) {
                return {
                    id: worker.id,
                    Ec: worker.index
                };
            });
        });
    }
    /**
     * @param {Object} a
     * @param {number} x
     * @param {boolean} type
     * @param {Object} what
     * @return {?}
     */
    function find(a, x, type, what) {
        var i = eq(a)[x];
        if (!i) {
            return value;
        }
        var o = {
            v: i
        };
        if (1 < (isNumber(a, "occurrences", function() {
                var buf = {};
                slice(this.za(), function(off) {
                    buf[off] = (buf[off] || 0) + 1;
                });
                return buf;
            })[i] || 0)) {
            i = x + 1 + a.Fb;
            if (a.Y()) {
                i = partial(a)[x].Ec + 1;
            }
            o.index = i;
        }
        if (type) {
            o.playnext = a.$a;
        }
        if (a.Y()) {
            o.shuffle = a.ka;
        }
        if (what) {
            /** @type {Object} */
            o.feature = what;
        }
        return trim(a.nb, o);
    }
    /**
     * @param {Object} a
     * @param {Function} callback
     * @return {undefined}
     */
    function listener(a, callback) {
        var c = eq(a);
        c = md5_gg(c, function(dataAndEvents) {
            return !(dataAndEvents in this.ob);
        }, a);
        slice(c, function(timeoutKey) {
            this.ob[timeoutKey] = {};
        }, a);
        var cb = bind(function(helper) {
            var key;
            for (key in helper) {
                this.ob[key] = helper[key];
            }
            splice(this);
            if (callback) {
                callback();
            }
        }, a);
        if (c.length) {
            i("/video_info_ajax", {
                method: "POST",
                n: {
                    action_get_videos_data: 1,
                    count: c.length
                },
                B: {
                    video_ids: c.join(",")
                },
                /**
                 * @param {?} value
                 * @param {string} obj
                 * @return {undefined}
                 */
                i: function(value, obj) {
                    if (obj.data) {
                        cb(obj.data);
                    }
                }
            });
        }
    }
    /**
     * @param {?} a
     * @param {Array} end
     * @param {?} b
     * @return {undefined}
     */
    function val(a, end, b) {
        /** @type {boolean} */
        a.Za = TRUE;
        /** @type {boolean} */
        a.f = t;
        var suiteView = {
            style: "bottomfeedr_json",
            action_get_list: 1,
            list: a.Na()
        };
        if (b) {
            warn(suiteView, b);
        }
        i("/list_ajax", {
            n: suiteView,
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                var attrs = obj.data;
                this.M = deepEqual(attrs.videos);
                this.P = attrs.list_id;
                /** @type {boolean} */
                this.ma = !!attrs.editable;
                this.nb = attrs.video_url || "";
                this.mb = attrs.menu_title_html;
                this.lb = attrs.menu_html;
                this.Gb = attrs.video_count;
                this.Fb = attrs.index_offset;
                attrs = attrs.video_data;
                var attr;
                for (attr in attrs) {
                    this.ob[attr] = attrs[attr];
                }
            },
            /**
             * @return {undefined}
             */
            onError: function() {},
            /**
             * @return {undefined}
             */
            R: function() {
                /** @type {boolean} */
                this.Za = t;
                listener(this);
                splice(this);
                if (end) {
                    end();
                }
            },
            z: a
        });
    }
    /**
     * @param {Object} object
     * @param {string} name
     * @param {Function} content
     * @return {?}
     */
    function isNumber(object, name, content) {
        if (object.c && name in object.c) {
            return object.c[name];
        }
        content = content.call(object);
        if (object.c) {
            /** @type {Function} */
            object.c[name] = content;
        }
        return content;
    }
    /**
     * @param {?} x
     * @param {?} a
     * @param {?} next
     * @return {undefined}
     */
    function ext(x, a, next) {
        s.call(this, "FL", x, a, next);
    }
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} x
     * @return {undefined}
     */
    function Renderer(width, height, x) {
        s.call(this, "LL", width, height, x);
    }
    /**
     * @param {?} callback
     * @param {?} array
     * @param {?} n
     * @return {undefined}
     */
    function initial(callback, array, n) {
        s.call(this, "ML", callback, array, n);
    }
    /**
     * @param {?} req
     * @param {?} resp
     * @param {?} offset
     * @param {?} height
     * @return {undefined}
     */
    function exports(req, resp, offset, height) {
        s.call(this, req, resp, offset, height);
    }
    /**
     * @param {?} f
     * @return {undefined}
     */
    function Test(f) {
        s.call(this, "QL", value);
        /** @type {boolean} */
        this.ma = TRUE;
        /** @type {boolean} */
        this.f = !f;
    }
    /**
     * @param {?} callback
     * @param {?} opt
     * @param {?} wrapped
     * @return {undefined}
     */
    function plugin(callback, opt, wrapped) {
        s.call(this, "SV", callback, opt, wrapped);
        /** @type {boolean} */
        this.ma = TRUE;
    }
    /**
     * @param {string} _xhr
     * @param {string} str
     * @param {string} options
     * @param {string} event
     * @return {?}
     */
    function pred(_xhr, str, options, event) {
        /** @type {null} */
        var data = value;
        switch (_xhr) {
            case "PL":
                ;
            case "SP":
                ;
            case "BP":
                ;
            case "WL":
                data = new exports(_xhr, str, options, event);
                break;
            case "FL":
                data = new ext(str, options, event);
                break;
            case "LL":
                data = new Renderer(str, options, event);
                break;
            case "AV":
                ;
            case "BB":
                ;
            case "ML":
                ;
            case "MC":
                data = new initial(str, options, event);
                break;
            case "QL":
                data = new Test;
                break;
            case "SV":
                data = new plugin(str, options, event);
                break;
            default:
                data = new s(_xhr, str, options, event);
        }
        return data;
    }
    /**
     * @return {undefined}
     */
    function name() {
        fireEvent("addto-watch-later-button", "click", property);
        fireEvent("addto-watch-later-button-success", "click", event);
        fireEvent("addto-watch-later-button-sign-in", "click", pp);
        unbind(require("shared-addto-watch-later-login"), "click", submit, "sign-in-link");
    }
    /**
     * @param {?} str
     * @return {undefined}
     */
    function pp(str) {
        token = equal(str, "video-ids");
    }
    /**
     * @param {?} $event
     * @return {undefined}
     */
    function submit($event) {
        var title = trim("/addto_ajax", {
            action_redirect_to_signin_with_add: 1,
            list_type: "WL",
            video_ids: token,
            next_url: document.location
        });
        /** @type {Element} */
        var form = document.createElement("form");
        form.action = title;
        /** @type {string} */
        form.method = "POST";
        /** @type {Element} */
        title = document.createElement("input");
        /** @type {string} */
        title.type = "hidden";
        /** @type {string} */
        title.name = "session_token";
        title.value = reset("addto_ajax_logged_out");
        form.appendChild(title);
        document.body.appendChild(form);
        form.submit();
        $event.preventDefault();
    }
    /**
     * @param {Element} key
     * @return {undefined}
     */
    function property(key) {
        onEnd(key, "addto-watch-later-button", "addto-watch-later-button-loading");
        var camelKey = equal(key, "video-ids");
        i("/addto_ajax", {
            method: "POST",
            format: "XML",
            n: {
                action_add_to_watch_later_list: 1
            },
            B: {
                session_token: reset("addto_ajax"),
                video_ids: camelKey
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                stringify(obj.list_id, camelKey, key);
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                if (6 == obj.return_code) {
                    stringify(obj.list_id, camelKey, key);
                } else {
                    _getPathValue(key, obj);
                }
            }
        });
    }
    /**
     * @param {Element} el
     * @return {undefined}
     */
    function event(el) {
        onEnd(el, "addto-watch-later-button-success", "addto-watch-later-button-loading");
        var fontSize = equal(el, "video-ids");
        i("/addto_ajax", {
            method: "POST",
            format: "XML",
            n: {
                action_delete_from_watch_later_list: 1
            },
            B: {
                session_token: reset("addto_ajax"),
                video_ids: fontSize
            },
            /**
             * @return {undefined}
             */
            i: function() {
                onEnd(el, "addto-watch-later-button-loading", "addto-watch-later-button");
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                _getPathValue(el, obj);
            }
        });
    }
    /**
     * @param {boolean} params
     * @param {string} value
     * @param {Element} query
     * @return {undefined}
     */
    function stringify(params, value, query) {
        onEnd(query, "addto-watch-later-button-loading", "addto-watch-later-button-success");
        var PAGESIZE = replace("ADDTO_WATCH_LATER_ADDED");
        getData(OBJ2.getInstance(), query, PAGESIZE);
        extend("WATCH_LATER_UPDATED", params, value.split(","));
    }
    /**
     * @param {Element} query
     * @param {string} obj
     * @return {undefined}
     */
    function _getPathValue(query, obj) {
        onEnd(query, "addto-watch-later-button-loading", "addto-watch-later-button-error");
        var PAGESIZE = obj.error_message || replace("ADDTO_WATCH_LATER_ERROR");
        getData(OBJ2.getInstance(), query, PAGESIZE);
    }
    /**
     * @param {Object} data
     * @return {?}
     */
    function complete(data) {
        var image;
        /** @type {string} */
        var href = window.location.href;
        /** @type {boolean} */
        var type = t;
        var text;
        var info;
        var result = require("page");
        var dependentResult = same(result, "watch");
        var node = data || value;
        if (!node && !dependentResult) {
            return value;
        }
        var val;
        if (node) {
            val = index(node, "context-data-container");
        }
        if (val) {
            /** @type {boolean} */
            type = "true" == equal(val, "context-open");
        } else {
            if (dependentResult && (val = require("watch-context-item-list")), !val) {
                return value;
            }
        }
        data = expect("context-data-item", val);
        if (!data || !data.length) {
            return value;
        }
        if (dependentResult) {
            if (result = require("watch-context-container"), info = equal(result, "context-type"), result = callback("context-back-link", result)) {
                href = result.href;
            }
        } else {
            if (same(result, "search-base") || require("search-base-div")) {
                /** @type {string} */
                info = "search";
            } else {
                if (same(result, "channel")) {
                    /** @type {string} */
                    info = "channel";
                } else {
                    if (same(result, "home")) {
                        /** @type {string} */
                        info = "home";
                    }
                }
            }
        }
        if (result = callback("context-source-container")) {
            text = equal(result, "context-source");
            image = equal(result, "context-image");
        }
        /** @type {Array} */
        var items = [];
        /** @type {number} */
        var error = 0;
        slice(data, function(element, err) {
            var name;
            switch (equal(element, "context-item-type")) {
                case "playlist":
                    var data = {
                        type: "playlist"
                    };
                    keys(htmlEscapes, function(index, value) {
                        data[index] = equal(element, value);
                    });
                    name = data;
                    break;
                case "video":
                    var animation = {
                        type: "video"
                    };
                    keys(which, function(i, model) {
                        animation[i] = equal(element, model);
                    });
                    name = animation;
            }
            if (name) {
                items.push(name);
                if (node) {
                    if (isAncestor(element, node)) {
                        /** @type {number} */
                        error = err;
                    }
                }
            }
        });
        data = {};
        data.clickindex = error;
        /** @type {Array} */
        data.items = items;
        data.image = image;
        data.link = href;
        /** @type {boolean} */
        data.open = type;
        data.source = text;
        data.type = info;
        return data;
    }
    /**
     * @param {?} model
     * @return {undefined}
     */
    function GameObject(model) {
        this.b = new getColorIndex(model);
    }
    /**
     * @param {?} b
     * @return {undefined}
     */
    function _overlap_interval(b) {
        this.b = b;
    }
    /**
     * @return {undefined}
     */
    function async() {}
    /**
     * @return {undefined}
     */
    function instance() {}
    /**
     * @param {?} b
     * @return {undefined}
     */
    function rgb(b) {
        this.b = b;
    }
    /**
     * @return {undefined}
     */
    function reversed() {
        /** @type {null} */
        var newValue = value;
        try {
            /** @type {(Storage|null)} */
            newValue = window.localStorage || value;
        } catch (b) {}
        /** @type {(Storage|null)} */
        this.b = newValue;
    }
    /**
     * @param {?} selection
     * @return {undefined}
     */
    function tooltip(selection) {
        this.zb = selection;
        this.Bd = new getColorIndex;
    }
    /**
     * @param {?} e
     * @return {undefined}
     */
    function c(e) {
        tooltip.call(this, e);
    }
    /**
     * @param {?} data
     * @return {undefined}
     */
    function Item(data) {
        this.data = data;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    function _error(item) {
        return !isFunction(item) || item instanceof Item ? item : new Item(item);
    }
    /**
     * @param {?} v
     * @return {undefined}
     */
    function m(v) {
        tooltip.call(this, v);
    }
    /**
     * @param {?} callback
     * @return {undefined}
     */
    function rest(callback) {
        tooltip.call(this, callback);
    }
    /**
     * @return {?}
     */
    function Class() {
        return child.be.y + child.ce.height + fi;
    }
    /**
     * @param {?} obj
     * @param {?} node
     * @return {undefined}
     */
    function type(obj, node) {
        /** @type {boolean} */
        readyListenedTo = TRUE;
        child.be = node;
        child.ce = obj;
        minus = Class();
        increment();
        if (push("MEASURE_THUMBNAIL_DELAY_LOAD")) {
            context.Rc("tdl");
        }
    }
    /**
     * @param {?} index
     * @return {undefined}
     */
    function left(index) {
        child.ce = index;
        abs();
    }
    /**
     * @param {?} index
     * @return {undefined}
     */
    function right(index) {
        child.be = index;
        abs();
    }
    /**
     * @return {undefined}
     */
    function abs() {
        var now = Class();
        var val1 = previous;
        /** @type {number} */
        var val2 = Math.abs(val1 - now);
        if (!val1 || 400 <= val2) {
            val2 = appendModelPrefix(now);
            val1 = appendModelPrefix(val1);
            for (; val1 < val2;) {
                loader("thumb-group-" + val2);
                val2--;
            }
            previous = now;
        }
    }
    /**
     * @param {?} value
     * @return {undefined}
     */
    function pass(value) {
        delegate(function(node, contents) {
            var camelKey = equal(node, "group-key");
            if (camelKey) {
                getFile(node, camelKey);
                getAll(node, "group-key");
            }
            node.src = contents;
        }, value);
    }
    /**
     * @param {Element} value
     * @param {boolean} val
     * @return {undefined}
     */
    function increment(value, val) {
        if (readyListenedTo) {
            delegate(function(el, deepDataAndEvents) {
                var camelKey = equal(el, "group-key");
                if (!equal(el, "thumb-manual")) {
                    if (!(camelKey && !val)) {
                        if (camelKey) {
                            getFile(el, camelKey);
                        }
                        /** @type {string} */
                        camelKey = "thumb-group-" + appendModelPrefix(traverse(el).y);
                        v(el, deepDataAndEvents, camelKey);
                        data(el, "group-key", camelKey);
                    }
                }
            }, value);
        }
        var fullOtherName = appendModelPrefix(Class());
        for (; 0 <= fullOtherName; fullOtherName--) {
            loader("thumb-group-" + fullOtherName);
        }
    }
    /**
     * @param {Function} fn
     * @param {Element} callback
     * @return {undefined}
     */
    function delegate(fn, callback) {
        var res = add("img", value, callback);
        slice(res, function(val) {
            var i = equal(val, "thumb");
            if (i) {
                fn.call(global, val, i);
            }
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function appendModelPrefix(value) {
        return Math.ceil(Math.max(0, value - minus) / 400);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    function fix(event) {
        fix[" "](event);
        return event;
    }
    /**
     * @param {?} type
     * @param {Object} opt_target
     * @return {undefined}
     */
    function Event(type, opt_target) {
        this.type = type;
        this.currentTarget = this.target = opt_target;
    }
    /**
     * @param {Event} type
     * @param {undefined} element
     * @return {undefined}
     */
    function events(type, element) {
        if (type) {
            this.init(type, element);
        }
    }
    /**
     * @return {undefined}
     */
    function SourceMap() {}
    /**
     * @param {string} target
     * @param {string} type
     * @param {Object} id
     * @param {boolean} capture
     * @param {?} func
     * @return {?}
     */
    function addEventListener(target, type, id, capture, func) {
        if (type) {
            if (isArray(type)) {
                /** @type {number} */
                var i = 0;
                for (; i < type.length; i++) {
                    addEventListener(target, type[i], id, capture, func);
                }
                return value;
            }
            /** @type {boolean} */
            capture = !!capture;
            var map = chars;
            if (!(type in map)) {
                map[type] = {
                    N: 0,
                    ba: 0
                };
            }
            map = map[type];
            if (!(capture in map)) {
                map[capture] = {
                    N: 0,
                    ba: 0
                };
                map.N++;
            }
            map = map[capture];
            var path = unescape(target);
            var list;
            map.ba++;
            if (map[path]) {
                list = map[path];
                /** @type {number} */
                i = 0;
                for (; i < list.length; i++) {
                    if (map = list[i], map.ib == id && map.Sb == func) {
                        if (map.Ma) {
                            break;
                        }
                        return list[i].key;
                    }
                }
            } else {
                /** @type {Array} */
                list = map[path] = [];
                map.N++;
            }
            /** @type {function (?, string): ?} */
            var test = onClick;
            /** @type {function (?): ?} */
            var e = forward ? function(key) {
                return test.call(e.src, e.key, key);
            } : function(key) {
                key = test.call(e.src, e.key, key);
                if (!key) {
                    return key;
                }
            };
            /** @type {function (?): ?} */
            i = e;
            /** @type {string} */
            i.src = target;
            map = new SourceMap;
            map.init(id, i, target, type, capture, func);
            id = map.key;
            /** @type {Object} */
            i.key = id;
            list.push(map);
            clients[id] = map;
            if (!variables[path]) {
                /** @type {Array} */
                variables[path] = [];
            }
            variables[path].push(map);
            if (target.addEventListener) {
                if (target == global || !target.Id) {
                    target.addEventListener(type, i, capture);
                }
            } else {
                target.attachEvent(type in appenderMap ? appenderMap[type] : appenderMap[type] = "on" + type, i);
            }
            return id;
        }
        log(Error("Invalid event type"));
    }
    /**
     * @param {Object} events
     * @param {?} type
     * @param {?} func
     * @param {boolean} capture
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    function removeListener(events, type, func, capture, deepDataAndEvents) {
        if (isArray(type)) {
            /** @type {number} */
            var i = 0;
            for (; i < type.length; i++) {
                removeListener(events, type[i], func, capture, deepDataAndEvents);
            }
        } else {
            if (capture = !!capture, events = del(events, type, capture)) {
                /** @type {number} */
                i = 0;
                for (; i < events.length; i++) {
                    if (events[i].ib == func && (events[i].capture == capture && events[i].Sb == deepDataAndEvents)) {
                        removeEventListener(events[i].key);
                        break;
                    }
                }
            }
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function removeEventListener(name) {
        if (!clients[name]) {
            return t;
        }
        var data = clients[name];
        if (data.Ma) {
            return t;
        }
        var s = data.src;
        var type = data.type;
        var f = data.c;
        var capture = data.capture;
        if (s.removeEventListener) {
            if (s == global || !s.Id) {
                s.removeEventListener(type, f, capture);
            }
        } else {
            if (s.detachEvent) {
                s.detachEvent(type in appenderMap ? appenderMap[type] : appenderMap[type] = "on" + type, f);
            }
        }
        s = unescape(s);
        if (variables[s]) {
            f = variables[s];
            assertEqual(f, data);
            if (0 == f.length) {
                delete variables[s];
            }
        }
        /** @type {boolean} */
        data.Ma = TRUE;
        if (data = chars[type][capture][s]) {
            /** @type {boolean} */
            data.Kd = TRUE;
            findAll(type, capture, s, data);
        }
        delete clients[name];
        return TRUE;
    }
    /**
     * @param {?} type
     * @param {boolean} index
     * @param {string} selector
     * @param {Object} data
     * @return {undefined}
     */
    function findAll(type, index, selector, data) {
        if (!data.Xb && data.Kd) {
            /** @type {number} */
            var j = 0;
            /** @type {number} */
            var i = 0;
            for (; j < data.length; j++) {
                if (data[j].Ma) {
                    /** @type {null} */
                    data[j].c.src = value;
                } else {
                    if (j != i) {
                        data[i] = data[j];
                    }
                    i++;
                }
            }
            /** @type {number} */
            data.length = i;
            /** @type {boolean} */
            data.Kd = t;
            if (0 == i) {
                delete chars[type][index][selector];
                chars[type][index].N--;
                if (0 == chars[type][index].N) {
                    delete chars[type][index];
                    chars[type].N--;
                }
                if (0 == chars[type].N) {
                    delete chars[type];
                }
            }
        }
    }
    /**
     * @param {Object} key
     * @param {?} type
     * @param {boolean} capture
     * @return {?}
     */
    function del(key, type, capture) {
        var map = chars;
        return type in map && (map = map[type], capture in map && (map = map[capture], key = unescape(key), map[key])) ? map[key] : value;
    }
    /**
     * @param {Object} args
     * @param {string} target
     * @param {?} type
     * @param {boolean} state
     * @param {boolean} event
     * @return {?}
     */
    function dispatchEvent(args, target, type, state, event) {
        /** @type {number} */
        var retval = 1;
        target = unescape(target);
        if (args[target]) {
            args.ba--;
            args = args[target];
            if (args.Xb) {
                args.Xb++;
            } else {
                /** @type {number} */
                args.Xb = 1;
            }
            try {
                var argLength = args.length;
                /** @type {number} */
                var i = 0;
                for (; i < argLength; i++) {
                    var actual = args[i];
                    if (actual) {
                        if (!actual.Ma) {
                            retval &= createEvent(actual, event) !== t;
                        }
                    }
                }
            } finally {
                args.Xb--;
                findAll(type, state, target, args);
            }
        }
        return Boolean(retval);
    }
    /**
     * @param {Object} obj
     * @param {boolean} event
     * @return {?}
     */
    function createEvent(obj, event) {
        if (obj.ld) {
            removeEventListener(obj.key);
        }
        return obj.handleEvent(event);
    }
    /**
     * @param {?} alias
     * @param {string} e
     * @return {?}
     */
    function onClick(alias, e) {
        if (!clients[alias]) {
            return TRUE;
        }
        var opts = clients[alias];
        var type = opts.type;
        var map = chars;
        if (!(type in map)) {
            return TRUE;
        }
        map = map[type];
        var event;
        var node;
        if (!forward) {
            event = e || apply("window.event");
            /** @type {boolean} */
            var hasCapture = TRUE in map;
            /** @type {boolean} */
            var hasBubble = t in map;
            if (hasCapture) {
                if (0 > event.keyCode || event.returnValue != element) {
                    return TRUE;
                }
                a: {
                    /** @type {boolean} */
                    var data = t;
                    if (0 == event.keyCode) {
                        try {
                            /** @type {number} */
                            event.keyCode = -1;
                            break a;
                        } catch (G) {
                            /** @type {boolean} */
                            data = TRUE;
                        }
                    }
                    if (data || event.returnValue == element) {
                        /** @type {boolean} */
                        event.returnValue = TRUE;
                    }
                }
            }
            data = new events;
            data.init(event, this);
            /** @type {boolean} */
            event = TRUE;
            try {
                if (hasCapture) {
                    /** @type {Array} */
                    var pos = [];
                    var cur = data.currentTarget;
                    for (; cur; cur = cur.parentNode) {
                        pos.push(cur);
                    }
                    node = map[TRUE];
                    node.ba = node.N;
                    /** @type {number} */
                    var i = pos.length - 1;
                    for (; !data.Ta && (0 <= i && node.ba); i--) {
                        data.currentTarget = pos[i];
                        event &= dispatchEvent(node, pos[i], type, TRUE, data);
                    }
                    if (hasBubble) {
                        node = map[t];
                        node.ba = node.N;
                        /** @type {number} */
                        i = 0;
                        for (; !data.Ta && (i < pos.length && node.ba); i++) {
                            data.currentTarget = pos[i];
                            event &= dispatchEvent(node, pos[i], type, t, data);
                        }
                    }
                } else {
                    event = createEvent(opts, data);
                }
            } finally {
                if (pos) {
                    /** @type {number} */
                    pos.length = 0;
                }
            }
            return event;
        }
        type = new events(e, this);
        return event = createEvent(opts, type);
    }
    /**
     * @return {undefined}
     */
    function game() {}
    /**
     * @param {?} c
     * @return {undefined}
     */
    function Matrix(c) {
        this.c = c;
        /** @type {Array} */
        this.b = [];
    }
    /**
     * @param {Object} obj
     * @param {string} eventName
     * @param {Array} name
     * @param {boolean} prop
     * @return {undefined}
     */
    function define(obj, eventName, name, prop) {
        if (!isArray(name)) {
            /** @type {Array} */
            klass[0] = name;
            /** @type {Array} */
            name = klass;
        }
        /** @type {number} */
        var c = 0;
        for (; c < name.length; c++) {
            var copies = addEventListener(eventName, name[c], prop || obj, t, obj.c || obj);
            obj.b.push(copies);
        }
    }
    /**
     * @param {Object} p
     * @param {Object} items
     * @param {?} index
     * @param {boolean} made
     * @param {boolean} capture
     * @param {Node} until
     * @return {undefined}
     */
    function completed(p, items, index, made, capture, until) {
        if (isArray(index)) {
            /** @type {number} */
            var l = 0;
            for (; l < index.length; l++) {
                completed(p, items, index[l], made, capture, until);
            }
        } else {
            a: {
                made = made || p;
                until = until || (p.c || p);
                /** @type {boolean} */
                capture = !!capture;
                if (items = del(items, index, capture)) {
                    /** @type {number} */
                    index = 0;
                    for (; index < items.length; index++) {
                        if (!items[index].Ma && (items[index].ib == made && (items[index].capture == capture && items[index].Sb == until))) {
                            items = items[index];
                            break a;
                        }
                    }
                }
                /** @type {null} */
                items = value;
            }
            if (items) {
                items = items.key;
                removeEventListener(items);
                assertEqual(p.b, items);
            }
        }
    }
    /**
     * @param {Object} fn
     * @param {Object} obj
     * @return {undefined}
     */
    function watch(fn, obj) {
        if (proxy(fn)) {
            if (obj) {
                fn = bind(fn, obj);
            }
        } else {
            if (fn && "function" == typeof fn.handleEvent) {
                fn = bind(fn.handleEvent, fn);
            } else {
                log(Error("Invalid listener argument"));
            }
        }
        win.setTimeout(fn, 10);
    }
    /**
     * @param {?} deps
     * @param {(Document|string)} method
     * @return {undefined}
     */
    function def(deps, method) {
        this.b = deps;
        var str = method || value;
        if (!str) {
            /** @type {Array} */
            var configList = [];
            var timeMap = {};
            this.b.replace(rclass, function(dataAndEvents, name) {
                if (!(name in timeMap)) {
                    /** @type {boolean} */
                    timeMap[name] = TRUE;
                    configList.push(name);
                }
            });
            /** @type {Array} */
            str = configList;
        }
        str = stringToArray("__%s__", "(" + str.join("|") + ")");
        /** @type {RegExp} */
        this.c = RegExp(str, "g");
    }
    /**
     * @param {string} str
     * @param {Array} obj
     * @return {?}
     */
    function replaceWith(str, obj) {
        var requestUrl = require(str).innerHTML;
        requestUrl = requestUrl.replace(/^\s*(<\!--\s*)?/, "");
        requestUrl = requestUrl.replace(/(\s*--\>)?\s*$/, "");
        return new def(requestUrl, obj);
    }
    /**
     * @return {undefined}
     */
    function DOT_CALL_NO_PARENS() {
        this.b = {};
    }
    /**
     * @param {string} element
     * @return {?}
     */
    function size(element) {
        if (!element.length) {
            return 0;
        }
        var node = element[0];
        var s = node.offsetHeight;
        if (1 < element.length) {
            /** @type {number} */
            s = element[1].offsetTop - node.offsetTop;
        }
        return s;
    }
    /**
     * @param {Object} source
     * @param {?} data
     * @param {(number|string)} val
     * @return {undefined}
     */
    function parseNumber(source, data, val) {
        if (data) {
            if (!isNaN(val)) {
                if (0 > val) {
                    /** @type {number} */
                    val = 0;
                }
                /** @type {(number|string)} */
                data.scrollTop = val;
                source.setData(data, "scroller-offset", val + "");
            }
        }
    }
    /**
     * @return {undefined}
     */
    function SPLICE_NEEDS_BRACKETS() {
        this.b = {};
    }
    /**
     * @param {Object} v
     * @param {?} data
     * @param {?} success
     * @return {undefined}
     */
    function onData(v, data, success) {
        var key = v.getData(data, "slider-ajax-url");
        if (key) {
            if (!v.getData(data, "slider-loaded")) {
                v.setData(data, "slider-loaded", "true");
                i(key, {
                    z: v,
                    /**
                     * @param {?} value
                     * @param {string} obj
                     * @return {undefined}
                     */
                    i: function(value, obj) {
                        var e = toDom(obj.slides_html);
                        var error = callback(get(this, "slides"), data);
                        if (error) {
                            if (e) {
                                fail(error, e);
                            }
                        }
                        if (success) {
                            success();
                        }
                    }
                });
            }
        }
    }
    /**
     * @param {boolean} parent
     * @param {Object} data
     * @return {?}
     */
    function move(parent, data) {
        return same(data, get(parent, "vertical"));
    }
    /**
     * @param {boolean} target
     * @param {Object} data
     * @return {?}
     */
    function _insert(target, data) {
        var source = target.getBodyElement(data);
        return move(target, data) ? source.offsetHeight : source.offsetWidth;
    }
    /**
     * @param {Object} elem
     * @param {?} data
     * @param {(number|string)} s
     * @return {undefined}
     */
    function style(elem, data, s) {
        if (data) {
            if (isNaN(s)) {
                /** @type {number} */
                s = 0;
            }
            var ret = elem.getBodyElement(data);
            ret = equals(elem, ret);
            var values = add(value, get(elem, "title"), ret);
            /** @type {string} */
            var d = $$(data) ? "right" : "left";
            /** @type {string} */
            ret.style[d] = s + "px";
            slice(values, function(node) {
                /** @type {string} */
                node.style[d] = -1 * s + "px";
            });
            elem.setData(data, "slider-offset", s + "");
        }
    }
    /**
     * @param {Object} b
     * @param {?} value
     * @return {?}
     */
    function equals(b, value) {
        return callback(get(b, "slide"), value);
    }
    /**
     * @param {Object} obj
     * @param {number} type
     * @return {?}
     */
    function sequence(obj, type) {
        return add(value, get(obj, "slide-unit"), type);
    }
    /**
     * @param {boolean} name
     * @param {Object} node
     * @param {Object} e
     * @return {?}
     */
    function getPosition(name, node, e) {
        if (0 == e.length) {
            return 0;
        }
        name = move(name, node);
        node = e[0];
        var nameSuffix = name ? node.offsetHeight : node.offsetWidth;
        if (1 < e.length) {
            e = e[1];
            /** @type {number} */
            nameSuffix = name ? e.offsetTop - node.offsetHeight : $$(node) ? node.offsetLeft - e.offsetLeft : e.offsetLeft - node.offsetLeft;
        }
        return nameSuffix;
    }
    /**
     * @param {string} str
     * @return {undefined}
     */
    function d(str) {
        /** @type {string} */
        this.D = str;
        var b;
        var app;
        if (cancelAnimationFrame()) {
            b = require("watch7-playlist-tray");
            app = require("watch7-playlist-bar-title");
            str = require("watch7-playlist-tray-item-template");
        } else {
            b = require("playlist-bar-tray");
            app = require("playlist-bar-title");
            str = require("playlist-bar-template");
        }
        this.b = b;
        this.j = app;
        this.ha = createElement("ol", value, this.b);
        this.c = require("playlist-bar-extras-menu");
        b = pad(j);
        this.e = replaceWith(str, b);
        str = equal(str, "video-thumb-url") || "";
        this.f = new def(str, b);
        unbind(this.b, "click", bind(function() {
            attr(bind(this.uc, this), 0);
        }, this), "playlist-bar-tray-button");
    }
    /**
     * @param {Object} node
     * @param {Object} item
     * @param {(Object|string)} idx
     * @param {boolean} obj
     * @return {?}
     */
    function select(node, item, idx, obj) {
        /**
         * @param {?} i
         * @return {?}
         */
        function evalScript(i) {
            return j[i];
        }
        /** @type {(Object|string)} */
        item.index = idx;
        item.thumb_url = node.f.eb(item, evalScript);
        /** @type {Array} */
        idx = [];
        if (item.unviewable) {
            idx.push("playlist-bar-item-unviewable");
            /** @type {string} */
            item.thumb_url = "//s.ytimg.com/yts/img/meh_mini-vfl0Ugnu3.png";
        } else {
            if (!item.title) {
                idx.push("loading");
            }
        }
        if (obj) {
            idx.push("playlist-bar-item-playing");
        }
        /** @type {string} */
        item.classes = idx.join(" ");
        return node.e.eb(item, evalScript);
    }
    /**
     * @return {?}
     */
    function cancelAnimationFrame() {
        return require("watch7-playlist-container") != value;
    }
    /**
     * @param {?} onComplete
     * @param {?} e
     * @return {undefined}
     */
    function finish(onComplete, e) {
        this.D = onComplete;
        this.K = require("page");
        this.ua = new d(this.D);
        this.e = e;
        /** @type {boolean} */
        this.tc = this.l = t;
        this.j = require("playlist-bar-bar");
        addEvent(this.j, "click", bind(this.Ne, this));
        this.Ga = require("playlist-bar-play-button");
        addEvent(this.Ga, "click", bind(this.Te, this));
        this.Va = require("playlist-bar-prev-button") || require("watch7-playlist-bar-prev-button");
        this.C = require("playlist-bar-next-button") || require("watch7-playlist-bar-next-button");
        addEvent(this.Va, "click", bind(this.Ue, this));
        addEvent(this.C, "click", bind(this.Re, this));
        this.c = require("playlist-bar-autoplay-button");
        addEvent(this.c, "click", bind(this.Me, this));
        this.Q = require("playlist-bar-shuffle-button") || require("watch7-playlist-bar-shuffle-button");
        addEvent(this.Q, "click", bind(this.Ve, this));
        this.X = require("playlist-bar-toggle-button") || require("watch7-playlist-bar-toggle-button");
        addEvent(this.X, "click", bind(this.We, this));
        this.f = require("playlist-bar-options-menu");
        unbind(this.f, "click", bind(this.Se, this), "yt-uix-button-menu-item");
        this.ha = require("playlist-bar-tray-content");
        unbind(this.ha, "click", bind(this.Oe, this), "delete");
        unbind(this.ha, "click", bind(this.Pe, this), "load-lists");
        unbind(this.ha, "click", bind(this.Qe, this), "load-more");
        this.ca = replaceWith(require("playlist-bar-next-up-template") || require("watch7-playlist-bar-next-up-template"), ["video_encrypted_id"]);
        close(this, e, function() {
            call("watch7-playlist-tray");
            split("watch7-playlist-loading");
        });
        if (this.g.Z()) {
            hasKey(this);
        } else {
            addClass(this.D, ["min", "max"], "hid");
        }
        if (equal(this.D, "masked")) {
            /** @type {Element} */
            var ifr = document.createElement("iframe");
            /** @type {string} */
            ifr.id = "playlist-bar-mask";
            /** @type {string} */
            ifr.frameBorder = "0";
            /** @type {string} */
            ifr.src = 'javascript:""';
            this.D.insertBefore(ifr, this.D.firstChild);
        }
    }
    /**
     * @param {Object} t
     * @param {?} element
     * @param {Function} callback
     * @param {boolean} elem
     * @return {undefined}
     */
    function close(t, element, callback, elem) {
        if (t.g && (t.g.ia.clear("LIST_UPDATED"), t.e.isEqual(element) || elem)) {
            element.Fc(t.e);
            t.e = element;
        }
        t.g = element;
        t.g.ia.wa("LIST_UPDATED", t.gb, t);
        t.g.load(callback);
        t.gb(TRUE);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function cloneNode(obj) {
        return obj.va() && same(obj.D, "autoplay-on");
    }
    /**
     * @param {?} e
     * @param {boolean} result
     * @return {undefined}
     */
    function checkResults(e, result) {
        if (result) {
            addClass(e.D, "autoplay-off", "autoplay-on");
        } else {
            addClass(e.D, "autoplay-on", "autoplay-off");
        }
        editor.getInstance();
        substitute(tok.mg, !result);
        compare();
        expected("LIST_AUTO_PLAY_ON", result);
    }
    /**
     * @param {Object} object
     * @return {undefined}
     */
    function hasKey(object) {
        if (indexOf(editor.getInstance(), tok.Ud)) {
            getOwnPropertyNames(object);
        } else {
            configureDatePicker(object);
        }
    }
    /**
     * @param {Object} s
     * @return {undefined}
     */
    function getOwnPropertyNames(s) {
        addClass(s.D, ["hid", "max"], "min");
        clean(s, TRUE);
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function configureDatePicker(self) {
        addClass(self.D, ["hid", "min"], "max");
        clean(self, TRUE);
        attr(bind(self.ua.uc, self.ua), 300);
    }
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    function wrapper(obj) {
        var found;
        if (same(obj.D, "min")) {
            configureDatePicker(obj);
            /** @type {boolean} */
            found = t;
        } else {
            getOwnPropertyNames(obj);
            /** @type {boolean} */
            found = TRUE;
        }
        clear("bf", "toggleBar=1&collapsed=" + found, element);
        editor.getInstance();
        substitute(tok.Ud, found);
        compare();
        execute(obj, TRUE);
    }
    /**
     * @param {string} node
     * @param {string} value
     * @return {undefined}
     */
    function publish(node, value) {
        var start;
        start = node.g;
        /** @type {number} */
        var x = start.da() - 1;
        if (0 > x) {
            /** @type {number} */
            x = start.Z() - 1;
        }
        if (start = find(start, x, t, value)) {
            setData(node, start, value);
            visit(start);
        }
    }
    /**
     * @param {string} node
     * @param {boolean} state
     * @param {string} value
     * @return {undefined}
     */
    function setState(node, state, value) {
        if (!state) {
            clear("bf", "autoplay=1&playcount=" + node.g.$a, element);
        }
        var start;
        start = node.g;
        var x = start.da() + 1;
        if (x >= start.Z()) {
            /** @type {number} */
            x = 0;
        }
        if (start = find(start, x, !state, value)) {
            setData(node, start, value, !state);
            visit(start);
        }
    }
    /**
     * @param {Object} item
     * @param {number} callback
     * @return {undefined}
     */
    function errorCallback(item, callback) {
        if (!(1 > callback || 5 < callback)) {
            clear("bf", "delayedautoplay=" + callback, element);
            if (item.c) {
                show(OBJ2.getInstance(), item.c);
            }
            var rvar = replace("AUTOPLAY_WARNING" + callback);
            if (rvar) {
                hide(item, rvar, t, TRUE, require("watch7-playlist-container") != value);
            }
        }
    }
    /**
     * @param {Object} item
     * @param {boolean} next
     * @return {undefined}
     */
    function clean(item, next) {
        var PAGESIZE = replace("AUTOPLAY_OFF_TOOLTIP");
        if (cloneNode(item)) {
            PAGESIZE = replace("AUTOPLAY_ON_TOOLTIP");
        }
        var ix = replace("SHUFFLE_OFF_TOOLTIP");
        if (item.Y()) {
            ix = replace("SHUFFLE_ON_TOOLTIP");
        }
        var callCount = replace("NEXT_VIDEO_NOTHUMB_TOOLTIP");
        if (item.g.va()) {
            var text = eq(item.g);
            var c = item.g.da();
            if ((text = (c = text[text.length == c + 1 ? 0 : c + 1]) && item.g.getVideoData(c)) && text.title) {
                callCount = item.ca.eb({
                    video_encrypted_id: c
                });
                /** @type {string} */
                callCount = item.j ? replace("NEXT_VIDEO_TOOLTIP", {
                    "{next_video_title}": text.title
                }) + " " + callCount : '<div class="playlist-bar-next-tip">' + callCount + " " + replace("NEXT_VIDEO_TOOLTIP", {
                    "{next_video_title}": text.title
                }) + "</div>";
            }
        }
        /** @type {string} */
        text = "";
        text = item.j ? same(item.D, "min") ? replace("SHOW_PLAYLIST_TOOLTIP") : replace("HIDE_PLAYLIST_TOOLTIP") : same(item.K, "watch-playlist-collapsed") ? replace("SHOW_PLAYLIST_TOOLTIP") : replace("HIDE_PLAYLIST_TOOLTIP");
        c = OBJ2.getInstance();
        getData(c, item.C, callCount);
        if (item.c) {
            getData(c, item.c, PAGESIZE);
        }
        getData(c, item.Q, ix);
        getData(c, item.X, text, next);
    }
    /**
     * @param {Object} self
     * @param {(Object|string)} name
     * @param {Object} val
     * @param {boolean} duration
     * @param {boolean} b
     * @param {boolean} event
     * @return {undefined}
     */
    function hide(self, name, val, duration, b, event) {
        if (name) {
            if (!self.b) {
                self.b = require("playlist-bar-notifications");
                unbind(self.b, "click", bind(self.If, self), "playlist-bar-undo");
            }
            self.Vb = event || value;
            if (self.Vb) {
                name += ' <a class="playlist-bar-undo">' + replace("UNDO_LINK") + "</a>";
            }
            /** @type {(Object|string)} */
            callback("yt-alert-content", self.b).innerHTML = name;
            name = callback("yt-alert-icon", self.b);
            func(name, !b);
            done(self.b, "yt-alert-error", !!val);
            done(self.b, "yt-alert-success", !val);
            call(self.b);
            if (self.Ba) {
                _(self.Ba);
                /** @type {null} */
                self.Ba = value;
            }
            if (duration) {
                val = bind(function() {
                    execute(this);
                }, self);
                self.Ba = attr(val, 1E4);
            }
        }
    }
    /**
     * @param {Object} target
     * @param {boolean} type
     * @return {undefined}
     */
    function execute(target, type) {
        /** @type {boolean} */
        var listener = !!target.Ba;
        if (!type || !listener) {
            split(target.b);
            /** @type {null} */
            target.Vb = value;
            if (target.Ba) {
                _(target.Ba);
                /** @type {null} */
                target.Ba = value;
            }
        }
    }
    /**
     * @param {number} fn
     * @return {undefined}
     */
    function runTests(fn) {
        if (!fn.ub()) {
            configureDatePicker(fn);
            runTest(fn, {
                n: {
                    action_get_playlists: 1
                },
                /**
                 * @param {?} value
                 * @param {string} obj
                 * @return {undefined}
                 */
                i: function(value, obj) {
                    addClass(this.D, "save", "lists");
                    this.ag = require("playlist-bar-lists-back");
                    this.Zf = addEvent(this.ag, "click", bind(this.bg, this));
                    var html = obj.html;
                    this.Bb = require("playlist-bar-lists");
                    this.Bb.innerHTML = html;
                    pass(this.Bb);
                    this.$f = unbind(this.Bb, "click", bind(this.cg, this), "playlist-bar-playlist-item");
                }
            });
        }
    }
    /**
     * @param {Date} elements
     * @return {undefined}
     */
    function onChange(elements) {
        removeClass(elements.D, "lists");
        if (elements.Bb) {
            /** @type {string} */
            elements.Bb.innerHTML = "";
        }
        off(elements.$f);
        off(elements.Zf);
    }
    /**
     * @param {number} key
     * @param {?} opt_attributes
     * @return {undefined}
     */
    function runTest(key, opt_attributes) {
        end(key.D, "loading");
        warn(opt_attributes, {
            format: "JSON",
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                var rvar = replace("ERROR_OCCURRED");
                if (obj) {
                    if (obj.errors) {
                        rvar = obj.errors[0];
                    }
                }
                this.showError(rvar, TRUE);
            },
            /**
             * @return {undefined}
             */
            R: function() {
                removeClass(this.D, "loading");
            },
            z: key
        });
        i("/playlist_bar_ajax", opt_attributes);
    }
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    function leave(obj) {
        var t = obj.g.za();
        kindOf([]);
        var val = evaluate();
        deepMatches(val, t);
        kindOf(val);
        t = new Test;
        val = obj.g.da();
        t.b = val;
        t.ka = obj.g.ka;
        close(obj, t);
    }
    /**
     * @param {string} value
     * @param {string} path
     * @param {Object} values
     * @param {boolean} redraw
     * @return {undefined}
     */
    function setData(value, path, values, redraw) {
        var event = push("EVENT_ID");
        if (event) {
            event = {
                ei: event
            };
            if (values) {
                /** @type {Object} */
                event.feature = values;
            }
            if (value.g.Y()) {
                event.shuffle = value.g.ka;
            }
            if (redraw) {
                event.playnext = value.g.$a;
            }
            url(path, event);
        }
        if (push("WATCH_CONTEXT_CLIENTSIDE") && (value = getValue(path, "v"))) {
            if (path = complete()) {
                model.Oa(value, JSON.stringify(path), setAttribute() + 6E5);
            }
        }
    }
    /**
     * @return {?}
     */
    function debug() {
        if (!encodedValue) {
            var a = require("playlist-bar") || require("watch7-playlist-bar");
            if (a) {
                var data;
                if (same(a, "active")) {
                    data = equal(a, "list-type") || "";
                    if ("QL" == data) {
                        data = new Test(TRUE);
                    } else {
                        var result = equal(a, "list-id") || "";
                        var memory = (equal(a, "video-ids") || "").split(",");
                        /** @type {number} */
                        var nDigit = 0;
                        var cDigit = equal(a, "list-length");
                        if (cDigit) {
                            /** @type {number} */
                            nDigit = parseInt(cDigit, 10);
                        }
                        data = pred(data, result, memory, nDigit);
                    }
                    /** @type {number} */
                    result = parseInt(equal(a, "index-offset"), 10) || 0;
                    /** @type {number} */
                    data.Fb = result;
                    /** @type {number} */
                    data.b = parseInt(push("PLAYLIST_BAR_PLAYING_INDEX"), 10) || 0;
                    /** @type {number} */
                    data.$a = parseInt(push("LIST_AUTO_PLAY_VALUE"), 10) || 0;
                    /** @type {number} */
                    result = 0;
                    if (push("SHUFFLE_ENABLED")) {
                        result = parser();
                    }
                    data.ka = result;
                } else {
                    data = new Test(TRUE);
                }
                result = equal(a, "video-url");
                data.nb = result || "";
                result = same(a, "editable");
                data.ma = result;
                if (result = require("playlist-bar-title") || require("watch7-playlist-bar-title")) {
                    data.mb = result.innerHTML;
                }
                if (result = require("playlist-bar-extras-menu")) {
                    data.lb = result.innerHTML;
                }
                encodedValue = new finish(a, data);
            }
        }
        return encodedValue;
    }
    /**
     * @param {number} callback
     * @param {string} opt_radix
     * @return {undefined}
     */
    function route(callback, opt_radix) {
        var self = debug();
        if (cloneNode(self)) {
            var radix = opt_radix || "mr_meh";
            if (0 < callback) {
                errorCallback(self, callback);
                attr(function() {
                    route(callback - 1, radix);
                }, 1E3);
            } else {
                setState(self, t, radix);
            }
        }
    }
    /**
     * @param {string} data
     * @param {boolean} key
     * @param {?} res
     * @param {Node} fn
     * @param {number} callback
     * @param {Array} elems
     * @return {undefined}
     */
    function access(data, key, res, fn, callback, elems) {
        if (valid) {
            var child = debug();
            if (child) {
                var expectationResult = elems || [];
                data = pred(data, key, fn || value, callback || 0);
                /** @type {boolean} */
                key = TRUE;
                if (child.va()) {
                    key = child.g.isEqual(data);
                }
                if (key) {
                    close(child, data, function() {
                        child.$b(expectationResult);
                        hide(child, res, t, TRUE);
                    });
                    hasKey(child);
                } else {
                    hide(child, res, t, TRUE);
                }
            }
        }
    }
    /**
     * @param {Object} s
     * @return {undefined}
     */
    function reject(s) {
        var i = push("LIST_END_TIME");
        if (!i) {
            i = s.getDuration();
        }
        /** @type {number} */
        var stringLength = 5;
        for (; 0 < stringLength; stringLength--) {
            s.addCueRange("NEAR_END" + stringLength, i - stringLength, i - stringLength + 1);
        }
        s.addEventListener("onCueRangeEnter", "yt.www.lists.handleNearPlaybackEnd");
    }
    /**
     * @return {?}
     */
    function getTimeout() {
        var udataCur = debug();
        if (!valid || (!udataCur || !udataCur.va())) {
            return t;
        }
        udataCur = debug().ya();
        return !copy(memory, udataCur);
    }
    /**
     * @param {boolean} t
     * @return {undefined}
     */
    function success(t) {
        /** @type {boolean} */
        t = !!t;
        var check = require("page");
        var pdataCur = require("watch-sidebar") || require("watch7-sidebar");
        var next = require("baseDiv");
        var codeSegments = push("WIDE_PLAYER_STYLES");
        /** @type {number} */
        var styles = 0;
        if ("webkitTransition" in pdataCur.style) {
            styles = document.defaultView.getComputedStyle(pdataCur, value);
            /** @type {number} */
            styles = 1E3 * parseFloat(styles["-webkit-transition-duration"]);
        } else {
            if ("MozTransition" in pdataCur.style) {
                styles = document.defaultView.getComputedStyle(pdataCur, value);
                /** @type {number} */
                styles = 1E3 * parseFloat(styles.getPropertyValue("-moz-transition-duration"));
            } else {
                if ("OTransition" in pdataCur.style) {
                    styles = document.defaultView.getComputedStyle(pdataCur, value);
                    /** @type {number} */
                    styles = 1E3 * parseFloat(styles.getPropertyValue("-o-transition-duration"));
                }
            }
        }
        if (t) {
            end(check, "watch-wide");
            attr(function() {
                redraw();
                if (next) {
                    /** @type {number} */
                    var i = 0;
                    for (; i < codeSegments.length; ++i) {
                        end(next, codeSegments[i]);
                    }
                }
            }, styles);
        } else {
            styles /= 2;
            redraw("small");
            if (next) {
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; ++i) {
                    removeClass(next, codeSegments[i]);
                }
            }
            attr(function() {
                removeClass(check, "watch-wide");
            }, styles);
            pass(pdataCur);
        }
        func("masthead-utility-menulink-short", t);
        func("masthead-utility-menulink-long", !t);
    }
    /**
     * @param {string} value
     * @return {undefined}
     */
    function redraw(value) {
        var obj = flag();
        if (!same(require("page"), "watch-wide") || "small" == value) {
            removeClass(obj, "medium", "large");
        } else {
            var $win = getWindowSize(window);
            /** @type {boolean} */
            $win = !!(1400 <= $win.width && 1040 <= $win.height);
            if (push("ENABLE_AUTO_LARGE") && ($win || "large" == value)) {
                addClass(obj, "medium", "large");
            } else {
                addClass(obj, "large", "medium");
            }
        }
    }
    /**
     * @return {?}
     */
    function request_fs() {
        return require("movie_player") && (readFile() && (ignoreEmpty && 8 >= document.documentMode));
    }
    /**
     * @return {undefined}
     */
    function appendCustomSelect() {
        if (request_fs()) {
            _(caption);
            var obj = flag();
            /** @type {string} */
            var error = "small";
            slice(["small", "medium", "large"], function(a2) {
                if (same(obj, a2)) {
                    /** @type {string} */
                    error = a2;
                }
            });
            showTooltip({
                small: 112,
                medium: 384,
                large: 597
            }[error]);
        }
    }
    /**
     * @return {undefined}
     */
    function drawGraph() {
        if (request_fs()) {
            caption = attr(function() {
                showTooltip(0);
            }, 50);
        }
    }
    /**
     * @param {number} x
     * @return {undefined}
     */
    function showTooltip(x) {
        var bar = require("movie_player");
        var input = readFile();
        if ("rtl" == document.body.getAttribute("dir")) {
            /** @type {string} */
            input.style.left = x + "px";
            /** @type {string} */
            bar.style.right = x + "px";
        } else {
            /** @type {number} */
            input.style.right = x;
            /** @type {number} */
            bar.style.left = x;
        }
    }
    /**
     * @return {?}
     */
    function forEach() {
        return push("PLAYER_REFERENCE");
    }
    /**
     * @param {Event} e
     * @return {undefined}
     */
    function handleClick(e) {
        if (!contains(e.target, "BUTTON")) {
            e.currentTarget.click();
        }
    }
    /**
     * @return {?}
     */
    function readFile() {
        return require("watch-player") || require("watch7-player");
    }
    /**
     * @return {?}
     */
    function flag() {
        return require("watch-video") || require("watch7-video");
    }
    /**
     * @param {(Function|string)} selector
     * @param {?} styles
     * @param {(Function|string)} list
     * @param {Array} result
     * @param {?} params
     * @return {undefined}
     */
    function Gallery(selector, styles, list, result, params) {
        /** @type {(Function|string)} */
        this.k = selector;
        /** @type {boolean} */
        this.vc = t;
        /** @type {string} */
        selector = onResponse() + "/share_ajax";
        list = {
            action_get_email: 1,
            video_id: list,
            list: result
        };
        if (params) {
            /** @type {number} */
            list.new_share = 1;
        }
        i(selector, {
            format: "JSON",
            n: list,
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                this.k.innerHTML = obj.email_html;
                this.Ka();
                this.focus();
                var pdataCur = obj.sharing_binary_url;
                if (pdataCur) {
                    var context = obj.contacts;
                    poll(pdataCur, bind(function() {
                        var dom = apply("yt.sharing.ContactTools");
                        if (dom) {
                            dom.createContactTools(this.sc, value, context, styles);
                        }
                    }, this));
                }
            },
            z: this
        });
    }
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    function print(obj) {
        /** @type {boolean} */
        obj.vc = t;
        /** @type {string} */
        obj.sc.value = "";
        /** @type {string} */
        obj.b.value = "";
        /** @type {string} */
        obj.c.innerHTML = "";
        split(obj.Fa);
        call(obj.u);
    }
    /**
     * @return {undefined}
     */
    function funcs() {
        this.b = {};
    }
    /**
     * @return {undefined}
     */
    function ondata() {
        var suiteView = funcs.getInstance();
        var iter = expect(get(suiteView, "radio"));
        slice(iter, suiteView.fh, suiteView);
    }
    /**
     * @return {undefined}
     */
    function app() {
        var results = funcs.getInstance();
        var iter = expect(get(results, "select-element"));
        slice(iter, function(exports) {
            results.Da(exports);
        });
    }
    /**
     * @param {(Function|string)} obj
     * @param {(Function|string)} node
     * @param {Array} nodes
     * @param {boolean} elem
     * @return {undefined}
     */
    function empty(obj, node, nodes, elem) {
        /** @type {(Function|string)} */
        this.k = obj;
        this.kb = elem || t;
        /** @type {string} */
        obj = onResponse() + "/share_ajax";
        node = {
            action_get_embed: 1,
            video_id: node,
            list: nodes
        };
        if (this.kb) {
            /** @type {number} */
            node.new_share = 1;
        }
        i(obj, {
            format: "JSON",
            n: node,
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                this.k.innerHTML = obj.embed_html;
                this.bf = obj.legacy_url;
                this.af = obj.legacy_code;
                this.$e = obj.iframe_url;
                this.Ze = obj.iframe_code;
                this.Ka();
                var r = editor.getInstance();
                if (this.Ia) {
                    /** @type {boolean} */
                    this.Ia.checked = !indexOf(0, tok.Fd);
                }
                this.Hb.checked = indexOf(0, tok.Ed);
                if (this.Ha) {
                    this.Ha.checked = indexOf(0, tok.Gd);
                }
                a: {
                    if (r = r.get("ems"), this.kb) {
                        if ("custom" == r) {
                            call(require("share-embed-customize"));
                        }
                        /** @type {number} */
                        var s = 0;
                        for (; s < this.Ja.length; s++) {
                            var self = this.Ja[s];
                            if (self.value == r) {
                                /** @type {boolean} */
                                self.selected = TRUE;
                                funcs.getInstance().Da(this.ra);
                                break a;
                            }
                        }
                        /** @type {boolean} */
                        this.Ja[0].selected = TRUE;
                        funcs.getInstance().Da(this.ra);
                    } else {
                        (r in this.ja ? this.ja[r] : dataURLToBlob(this.ja)).select();
                    }
                }
                f(this);
                this.qa();
            },
            z: this
        });
    }
    /**
     * @param {Object} item
     * @return {undefined}
     */
    function f(item) {
        var value = item.Ze;
        var name = item.$e;
        if (item.Ha) {
            if (item.Ha.checked) {
                value = item.af;
                name = item.bf;
            }
        }
        if (item.Hb.checked) {
            name = name.replace("youtube.com", "youtube-nocookie.com");
        }
        if (item.j.checked) {
            name = name.split("//");
            /** @type {string} */
            name[0] = "https:";
            name = name.join("//");
        }
        var data = {};
        if (item.Ia) {
            if (!item.Ia.checked) {
                /** @type {number} */
                data.rel = 0;
            }
        }
        name = trim(name, data);
        if (item.kb) {
            var n = item.ra.options[Math.max(item.ra.selectedIndex, 0)];
            if (n) {
                if ("custom" == n.value) {
                    data = {
                        width: item.cb,
                        height: item.tb
                    };
                } else {
                    /** @type {number} */
                    data = parseInt(equal(n, "width"), 10);
                    /** @type {number} */
                    n = parseInt(equal(n, "height"), 10);
                    data = {
                        width: data,
                        height: n
                    };
                }
            } else {
                data = {
                    width: 0,
                    height: 0
                };
            }
        } else {
            data = item.ja;
            data = (n = attach(data, function(event) {
                return event.b.checked;
            }, element)) && data[n];
            /** @type {({height: ??, width: ??}|{height: number, width: number})} */
            data = !data ? {
                width: 0,
                height: 0
            } : {
                width: data.width,
                height: data.height
            };
        }
        if (!data.width || 200 > data.width) {
            if (item.kb) {
                /** @type {number} */
                data = parseInt(equal(item.Ja[0], "width"), 10);
                /** @type {number} */
                n = parseInt(equal(item.Ja[0], "height"), 10);
                data = {
                    width: data,
                    height: n
                };
            } else {
                data = dataURLToBlob(item.ja);
            }
        }
        value = value.replace(/__url__/g, encode(name));
        value = value.replace(/__width__/g, data.width + "");
        value = value.replace(/__height__/g, data.height + "");
        value = encode(value);
        if (value != item.b.innerHTML) {
            item.b.innerHTML = value;
        }
    }
    /**
     * @param {?} name
     * @return {undefined}
     */
    function View(name) {
        this.name = name.value;
        this.b = name;
        /** @type {number} */
        this.width = parseInt(equal(this.b, "width"), 10);
        /** @type {number} */
        this.height = parseInt(equal(this.b, "height"), 10);
    }
    /**
     * @param {?} el
     * @param {?} f
     * @return {undefined}
     */
    function group(el, f) {
        View.call(this, el);
        this.f = f;
        var item = contains(el, "li");
        this.e = callback("share-embed-size-custom-width", item);
        this.c = callback("share-embed-size-custom-height", item);
        addEvent(this.e, "keyup", bind(this.l, this));
        addEvent(this.c, "keyup", bind(this.j, this));
    }
    /**
     * @param {(Function|string)} a
     * @param {Node} n
     * @param {(Document|string)} userInitiated
     * @param {?} get
     * @param {?} Var
     * @param {?} compute
     * @param {boolean} args
     * @return {undefined}
     */
    function X(a, n, userInitiated, get, Var, compute, args) {
        /** @type {(Function|string)} */
        this.k = a;
        this.f = n || value;
        this.P = userInitiated || value;
        /** @type {boolean} */
        this.X = t;
        this.C = args || t;
        /** @type {string} */
        a = onResponse() + "/share_ajax";
        n = {
            action_get_share_box: 1,
            video_id: this.f,
            list: this.P
        };
        if (this.C) {
            /** @type {number} */
            n.new_share = 1;
            if (this.P) {
                /** @type {number} */
                n.render_playlist_options = 1;
            }
        }
        i(a, {
            format: "JSON",
            n: n,
            /**
             * @param {?} data
             * @param {Object} obj
             * @return {undefined}
             */
            i: function(data, obj) {
                this.k.innerHTML = obj.share_html;
                this.qd = obj.url_short;
                this.pd = obj.url_long;
                this.mc = obj.lang;
                /** @type {null} */
                this.Xa = value;
                if ("session_index" in obj) {
                    this.Xa = obj.session_index;
                }
                this.Ka();
                if (get) {
                    get();
                }
                this.qa();
            },
            z: this
        });
    }
    /**
     * @param {Object} matrix
     * @return {undefined}
     */
    function parse3dMatrix(matrix) {
        if (matrix.b) {
            split(matrix.b);
        }
        if (matrix.c) {
            split(matrix.c);
        }
    }
    /**
     * @param {Object} args
     * @return {undefined}
     */
    function highlight(args) {
        /** @type {boolean} */
        require("share-with-playlist").checked = TRUE;
        _forEach(args);
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function _forEach(e) {
        var state = require("share-with-playlist").checked;
        callback("share-panel-start-at", e.e).disabled = state;
        callback("share-panel-start-at-time", e.e).disabled = state;
    }
    /**
     * @param {number} item
     * @param {boolean} toStart
     * @param {boolean} v11
     * @return {undefined}
     */
    function getItemSource(item, toStart, v11) {
        var that = {
            action_get_share_urls: 1,
            video_id: item.f
        };
        if (toStart) {
            that.list = item.P;
        }
        if (v11) {
            /** @type {boolean} */
            that.use_first_video = TRUE;
        }
        i("share_ajax", {
            format: "JSON",
            n: that,
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                this.qd = obj.url_short;
                this.pd = obj.url_long;
                this.Qb();
                require("share-services-container").innerHTML = obj.share_services_html;
            },
            z: item
        });
    }
    /**
     * @return {undefined}
     */
    function Comment() {}
    /**
     * @param {string} data
     * @param {Object} str
     * @param {string} opt_attributes
     * @return {?}
     */
    function message(data, str, opt_attributes) {
        if (data = require(data)) {
            str = str instanceof Buffer ? str : new Buffer(str);
            /** @type {boolean} */
            var d = !str.args.jsapicallback;
            /** @type {string} */
            var id = "player" + unescape(data);
            var view = views[id];
            if (view) {
                view.bd();
            }
            view = new next(data, id, str, opt_attributes);
            views[id] = view;
            attr(function() {
                if (d) {
                    /**
                     * @return {undefined}
                     */
                    global.onYouTubePlayerReady = function() {
                        notify(id);
                    };
                }
                view.write();
            }, 0);
            return view.b;
        }
    }
    /**
     * @param {string} value
     * @param {Object} data
     * @param {?} regex
     * @return {?}
     */
    function addToken(value, data, regex) {
        return message(value, data, {
            force: regex
        });
    }
    /**
     * @param {string} file
     * @return {undefined}
     */
    function require_(file) {
        if (file = require(file)) {
            /** @type {string} */
            file = "player" + unescape(file);
            var view = views[file];
            if (view) {
                view.la();
            }
            delete views[file];
        }
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function notify(self) {
        self = views[self];
        if (!self.yc) {
            /** @type {boolean} */
            self.yc = TRUE;
            var b = res(self.e);
            var iter = b.getApiInterface();
            slice(iter, function(i) {
                if ("addEventListener" == i) {
                    this.b.nativeAddEventListener = bind(b[i], b);
                } else {
                    if ("destroy" == i) {
                        this.b.b = bind(b[i], b);
                    } else {
                        this.b[i] = bind(b[i], b);
                    }
                }
            }, self);
            var j;
            for (j in self.f) {
                self.b.nativeAddEventListener(j, self.f[j]);
            }
            if (once(self)) {
                if (self.C) {
                    self.Lb("SHARE_CLICKED", bind(self.C.hf, self.C));
                }
            }
            self.Lb("onTabOrderChange", bind(self.ff, self));
            self.Lb("onNavigate", bind(self.gf, self));
            if (self.Ob) {
                self.Ob(self.l);
            }
        }
    }
    /**
     * @param {Object} s
     * @param {boolean} signal_eof
     * @param {string} i
     * @param {Object} element
     * @return {undefined}
     */
    function next(s, signal_eof, i, element) {
        this.e = this.c = s;
        /** @type {boolean} */
        this.l = signal_eof;
        filter(this, i, element);
        s = this.G;
        /** @type {boolean} */
        signal_eof = !!s.disable.html5;
        /** @type {boolean} */
        i = !!s.disable.flash;
        element = iter();
        if (!element ? 0 : 0 <= element.toLowerCase().indexOf("android 2.2")) {
            /** @type {boolean} */
            element = TRUE;
        } else {
            /** @type {Element} */
            element = document.createElement("video");
            /** @type {boolean} */
            element = !(!element || (!element.canPlayType || !element.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !element.canPlayType('video/webm; codecs="vp8.0, vorbis"')));
        }
        element = element && (apply("yt.player.Application") || s.assets.js);
        /** @type {boolean} */
        var array = !!s.html5;
        if (!element) {
            /** @type {string} */
            s.args.html5_unavailable = "1";
        }
        var ze = this.Kb ? this.ye : this.ze;
        if (array && element || i) {
            this.pc = this.oc;
            if (!i) {
                this.Mb = ze;
            }
        } else {
            this.pc = ze;
            if (element) {
                if (!signal_eof) {
                    this.Mb = this.oc;
                }
            }
        }
        if (this.Mb) {
            s.fallback = bind(this.xe, this);
        }
        this.b = {
            addEventListener: bind(this.Lb, this),
            destroy: bind(this.bd, this)
        };
        s = this.ia = new _this;
        if (!this.j) {
            /** @type {Array} */
            this.j = [];
        }
        this.j.push(s);
        this.f = {};
        this.C = once(this) ? new Comment : value;
    }
    /**
     * @param {Object} node
     * @param {string} id
     * @param {Node} property
     * @return {undefined}
     */
    function filter(node, id, property) {
        node.G = id.fa();
        node.X = node.G.attrs.id;
        node.Q = node.G.args.el;
        node.Kb = property || value;
        if (!node.G.args.eurl) {
            /** @type {string} */
            id = document.location.toString();
            if (-1 != id.indexOf("/embed/")) {
                /** @type {string} */
                id = "unknown";
                if (document.referrer) {
                    /** @type {string} */
                    id = document.referrer.substring(0, 128);
                }
            }
            /** @type {string} */
            node.G.args.eurl = id;
        }
        /** @type {string} */
        node.G.args.enablejsapi = "1";
        node.G.args.playerapiid = node.l;
        var l = node.c;
        var len = node.Q;
        /**
         * @return {undefined}
         */
        node.G.fallbackMessage = function() {
            var result = replace("PLAYER_FALLBACK_OVERRIDE");
            if (!result) {
                result = replace("PLAYER_FALLBACK", element, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>');
                /** @type {(Array.<string>|null)} */
                var octalLiteral = navigator.userAgent.match(/Version\/(\d).*Safari/);
                if (octalLiteral) {
                    if (5 <= parseInt(octalLiteral[1], 10)) {
                        result = replace("QUICKTIME_FALLBACK", element, 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
                    }
                }
            }
            /** @type {string} */
            l.innerHTML = '<div class="fallback-message">' + result + "</div>";
            if ("embedded" == len) {
                slice(l.getElementsByTagName("a"), function(a) {
                    a.setAttribute("target", "_blank");
                });
            }
        };
        if (!node.Ob) {
            node.Ob = node.G.args.jsapicallback ? not(node.G.args.jsapicallback) : apply("onYouTubePlayerReady");
        }
        /** @type {string} */
        node.G.args.jsapicallback = "ytPlayerOnYouTubePlayerReady";
    }
    /**
     * @param {string} f
     * @return {?}
     */
    function not(f) {
        /** @type {string} */
        var ret = f;
        if ("string" == typeof f) {
            /**
             * @return {undefined}
             */
            ret = function() {
                apply(f).apply(global, arguments);
            };
        }
        return !ret ? value : ret;
    }
    /**
     * @param {Object} key
     * @return {?}
     */
    function once(key) {
        return "embedded" == key.Q || "profilepage" == key.Q;
    }
    /**
     * @return {undefined}
     */
    function initialValue() {
        this.b = {};
    }
    /**
     * @param {?} obj
     * @param {boolean} value
     * @return {?}
     */
    function isArguments(obj, value) {
        var text = obj.value;
        return value ? unescape(encodeURIComponent(text)).length : text.length;
    }
    /**
     * @return {undefined}
     */
    function observable() {
        this.b = {};
    }
    /**
     * @param {Element} target
     * @param {string} s
     * @param {string} result
     * @return {?}
     */
    function handle(target, s, result) {
        var el = result || s;
        var c = get(target, "card");
        var test = c + matches(el);
        result = require(test);
        var actual = content(target, el);
        if (result) {
            return result;
        }
        /** @type {Element} */
        result = document.createElement("div");
        result.id = test;
        result.className = c;
        if (el = target.getData(el, "card-class")) {
            end(result, el);
        }
        /** @type {Element} */
        el = document.createElement("div");
        el.className = get(target, "card-border");
        s = target.getData(s, "orientation") || "horizontal";
        /** @type {Element} */
        c = document.createElement("div");
        /** @type {string} */
        c.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + s;
        /** @type {Element} */
        test = document.createElement("div");
        test.className = get(target, "card-body");
        /** @type {Element} */
        target = document.createElement("div");
        /** @type {string} */
        target.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + s;
        join(actual);
        test.appendChild(actual);
        el.appendChild(target);
        el.appendChild(test);
        result.appendChild(c);
        result.appendChild(el);
        document.body.appendChild(result);
        return result;
    }
    /**
     * @param {Object} item
     * @param {Object} el
     * @param {number} val
     * @return {undefined}
     */
    function render(item, el, val) {
        var i = item.getData(el, "orientation") || "horizontal";
        var offset = item.getData(el, "position");
        /** @type {boolean} */
        var html = !!item.getData(el, "force-position");
        /** @type {boolean} */
        i = "horizontal" == i;
        /** @type {boolean} */
        var state = "bottomright" == offset || "bottomleft" == offset;
        /** @type {boolean} */
        var pass = "topright" == offset || "bottomright" == offset;
        var scripts;
        var v1CompNum;
        if (pass && state) {
            /** @type {number} */
            v1CompNum = 7;
            /** @type {number} */
            scripts = 4;
        } else {
            if (pass && !state) {
                /** @type {number} */
                v1CompNum = 6;
                /** @type {number} */
                scripts = 5;
            } else {
                if (!pass && state) {
                    /** @type {number} */
                    v1CompNum = 5;
                    /** @type {number} */
                    scripts = 6;
                } else {
                    /** @type {number} */
                    v1CompNum = 4;
                    /** @type {number} */
                    scripts = 7;
                }
            }
        }
        var not = $$(document.body);
        offset = $$(el);
        if (not != offset) {
            v1CompNum ^= 2;
        }
        var relative;
        if (i) {
            /** @type {number} */
            offset = el.offsetHeight / 2 - 12;
            relative = new Rect(-12, el.offsetHeight + 6);
        } else {
            /** @type {number} */
            offset = el.offsetWidth / 2 - 6;
            relative = new Rect(el.offsetWidth + 6, -12);
        }
        var p = append(val);
        /** @type {number} */
        offset = Math.min(offset, (i ? p.height : p.width) - 24 - 6);
        if (6 > offset) {
            /** @type {number} */
            offset = 6;
            if (i) {
                relative.y += 12 - el.offsetHeight / 2;
            } else {
                relative.x += 12 - el.offsetWidth / 2;
            }
        }
        /** @type {null} */
        var ret = value;
        if (!html) {
            /** @type {number} */
            ret = 10;
        }
        p = get(item, "card-flip");
        item = get(item, "card-reverse");
        done(val, p, pass);
        done(val, item, state);
        ret = position(el, v1CompNum, val, scripts, relative, value, ret);
        if (!html) {
            if (ret) {
                if (ret & 48) {
                    /** @type {boolean} */
                    pass = !pass;
                    v1CompNum ^= 2;
                    scripts ^= 2;
                }
                if (ret & 192) {
                    /** @type {boolean} */
                    state = !state;
                    v1CompNum ^= 1;
                    scripts ^= 1;
                }
                done(val, p, pass);
                done(val, item, state);
                position(el, v1CompNum, val, scripts, relative);
            }
        }
        el = callback("yt-uix-card-body-arrow", val);
        html = callback("yt-uix-card-border-arrow", val);
        /** @type {string} */
        i = i ? state ? "top" : "bottom" : !not && pass || not && !pass ? "left" : "right";
        el.setAttribute("style", "");
        html.setAttribute("style", "");
        /** @type {string} */
        el.style[i] = offset + "px";
        /** @type {string} */
        html.style[i] = offset + "px";
        state = callback("yt-uix-card-arrow", val);
        el = callback("yt-uix-card-arrow-background", val);
        if (state) {
            if (el) {
                /** @type {number} */
                val = "right" == i ? append(val).width - offset - 13 : offset + 11;
                /** @type {number} */
                offset = val / Math.sqrt(2);
                setStyleImportant(state, "left", val + "px");
                setStyleImportant(state, "margin-left", "1px");
                setStyleImportant(el, "margin-left", -offset + "px");
                setStyleImportant(el, "margin-top", offset + "px");
            }
        }
    }
    /**
     * @param {string} target
     * @param {?} property
     * @return {undefined}
     */
    function iterate(target, property) {
        var match = target.L(property);
        if (match) {
            var element = handle(target, property, match);
            if (element) {
                removeClass(match, get(target, "active"));
                removeClass(element, get(target, "card-visible"));
                split(element);
                /** @type {null} */
                element.cardTargetNode = value;
                /** @type {null} */
                element.cardRootNode = value;
            }
        }
    }
    /**
     * @param {Element} target
     * @param {string} input
     * @param {(Object|string)} value
     * @return {undefined}
     */
    function main(target, input, value) {
        var arg = target.L(input);
        if (arg) {
            var elem = content(target, arg);
            if (elem) {
                /** @type {(Object|string)} */
                elem.innerHTML = value;
                if (same(arg, get(target, "active"))) {
                    value = handle(target, input, arg);
                    render(target, input, value);
                    call(value);
                }
            }
        }
    }
    /**
     * @param {Element} file
     * @param {?} el
     * @return {?}
     */
    function content(file, el) {
        var content = el.cardContentNode;
        if (!content) {
            var state = get(file, "content");
            var base = get(file, "card-content");
            if (!(content = callback(state, el))) {
                /** @type {Element} */
                content = document.createElement("div");
            }
            addClass(content, state, base);
            el.cardContentNode = content;
        }
        return content;
    }
    /**
     * @return {undefined}
     */
    function suiteView() {
        this.b = {};
    }
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    function getNext(obj) {
        if (obj.c) {
            iterate(obj, obj.c);
            /** @type {null} */
            obj.c = value;
            off(obj.e);
        }
    }
    /**
     * @return {undefined}
     */
    function scrubbed() {
        this.b = {};
    }
    /**
     * @return {undefined}
     */
    function cache() {
        this.b = {};
    }
    /**
     * @return {undefined}
     */
    function OBJ1() {
        this.b = {};
    }
    /**
     * @return {undefined}
     */
    function obj() {
        this.b = {};
    }
    /**
     * @return {undefined}
     */
    function query() {
        this.b = {};
    }
    /**
     * @param {Object} val
     * @return {undefined}
     */
    function encodeUriQuery(val) {
        var originalEvent = equal(val, "sessionlink-target") || val.href;
        if (originalEvent) {
            val = equal(val, "sessionlink") || "";
            val = endsWith(val);
            url(originalEvent, val);
        }
    }
    /**
     * @return {undefined}
     */
    function seen() {
        this.b = {};
    }
    /**
     * @param {?} values
     * @return {undefined}
     */
    function a(values) {
        /** @type {boolean} */
        this.Ac = t;
        /** @type {null} */
        this.zc = value;
        if (values) {
            this.b();
            this.c();
        } else {
            values = require("page");
            unbind(values, "mousedown", bind(this.b, this), "create-channel-lightbox");
            unbind(values, "click", bind(this.c, this), "create-channel-lightbox");
        }
    }
    /**
     * @param {Object} handler
     * @param {string} data
     * @return {undefined}
     */
    function Parser(handler, data) {
        if (handler.Ac) {
            var r20 = "upload" == data ? push("CREATE_CHANNEL_NEXT_URL_UPLOAD") : document.location.href;
            apply(push("HAS_GPLUS") ? "yt.www.account.CreateChannelLightboxForm.init" : "yt.www.account.CreateGplusDialog.init")(handler.e, data, r20);
        } else {
            /** @type {string} */
            handler.zc = data;
        }
    }
    /**
     * @param {?} html
     * @param {?} e
     * @return {undefined}
     */
    function escape(html, e) {
        this.fb = html;
        /** @type {boolean} */
        this.c = t;
        this.ia = new _this;
        unbind(this.fb, "click", bind(this.j, this), "yt-dialog-dismiss");
        successCallback(this, "content");
        this.e = e;
    }
    /**
     * @param {?} stream
     * @param {string} url
     * @return {undefined}
     */
    function successCallback(stream, url) {
        var new_value = callback("yt-dialog-fg-content", stream.fb);
        /** @type {Array} */
        var string = [];
        keys(object, function(json) {
            string.push("yt-dialog-show-" + json);
        });
        addClass(new_value, string, "yt-dialog-show-" + url);
    }
    /**
     * @param {Object} obj
     * @param {string} element
     * @return {undefined}
     */
    function match(obj, element) {
        split(obj.fb);
        split(obj.b);
        /** @type {NodeList} */
        var ret = document.getElementsByTagName("embed");
        /** @type {NodeList} */
        var index = document.getElementsByTagName("object");
        var i = bind(function(clone) {
            if (equal(clone, "dialog-hidden")) {
                getAll(clone, "dialog-hidden");
                var show = equal(clone, "dialog-visibility-value");
                clone.style.visibility = show ? show : "";
            }
        }, obj);
        slice(ret, i);
        slice(index, i);
        if (!obj.e) {
            connect(document, "keydown", bind(obj.f, obj));
        }
        obj.ia.xa("all");
        obj.ia.xa(element);
    }
    /**
     * @param {boolean} event
     * @return {undefined}
     */
    function w(event) {
        if (event) {
            /** @type {string} */
            document.body.style.cursor = "wait";
        } else {
            if ("wait" == document.body.style.cursor) {
                /** @type {string} */
                document.body.style.cursor = "default";
            }
        }
    }
    /**
     * @return {undefined}
     */
    function compile() {
        if (!require("link-gplus-css")) {
            onload(push("LINK_GPLUS_JS_URL"), restoreScript);
            var link = push("LINK_GPLUS_CSS_URL");
            var head = add("head", element, element)[0];
            link = jQuery("link", {
                id: "link-gplus-css",
                rel: "stylesheet",
                href: link
            });
            head.insertBefore(link, head.childNodes[0] || value);
        }
    }
    /**
     * @return {undefined}
     */
    function restoreScript() {
        /** @type {boolean} */
        removeEndNode = TRUE;
        if (isBlock) {
            if (removeEndNode) {
                upload();
            }
        }
    }
    /**
     * @param {Function} e
     * @return {undefined}
     */
    function b(e) {
        if (!acc) {
            var clone = require("link-gplus-lb");
            if (!clone) {
                return;
            }
            acc = new escape(clone, TRUE);
        }
        if (e) {
            clone = index(e.target, "link-gplus-lightbox");
            destElements = same(clone, "ignore-opt-out");
            gotErr = equal(clone, "upsell");
            e.preventDefault();
        } else {
            /** @type {boolean} */
            destElements = t;
            /** @type {string} */
            gotErr = "signin";
            if (e = push("SIGNIN_TYPE")) {
                /** @type {Function} */
                gotErr = e;
            }
        }
        /** @type {boolean} */
        isBlock = TRUE;
        w(TRUE);
        if (removeEndNode) {
            upload();
        }
    }
    /**
     * @return {undefined}
     */
    function upload() {
        /** @type {string} */
        var later = "";
        if ("upload" == gotErr) {
            /** @type {string} */
            later = "/my_videos_upload";
        } else {
            if ("active_signin" == gotErr) {
                later = push("LINK_GPLUS_NEXT_URL");
            }
        }
        apply("yt.www.account.LinkGplusDialog.fetchAndShow")(gotErr, later, destElements);
    }
    /**
     * @param {?} b
     * @param {?} compiler
     * @return {undefined}
     */
    function constructor(b, compiler) {
        this.b = b;
        this.c = compiler;
        addEvent(require("premium-yva"), "click", bind(this.od, this));
    }
    /**
     * @param {Node} obj
     * @return {undefined}
     */
    function testDone(obj) {
        editor.getInstance();
        sendMessage("HIDDEN_MASTHEAD_ID", obj.b);
        compare();
    }
    /**
     * @return {undefined}
     */
    function foo() {
        var suiteView = then();
        split(callback("flag-comment-step1", suiteView));
        call(callback("flag-comment-step2", suiteView));
        split(callback("flag-comment-step3", suiteView));
    }
    /**
     * @return {undefined}
     */
    function makeRequest() {
        var current = then();
        var defs = callback("flag-comment-form", current);
        var data = callback("flag-comment-block-user-input", current);
        var s = callback("submit-flag-comment", current);
        var key = callback("flag-comment-error-msg", current);
        split(key);
        /** @type {boolean} */
        data.disabled = TRUE;
        /** @type {boolean} */
        s.disabled = TRUE;
        i("/comment_servlet", {
            format: "XML",
            method: "POST",
            n: {
                flag_comment: 1
            },
            B: endsWith(MAP(defs)),
            /**
             * @param {?} value
             * @param {?} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                if (obj && obj.html_content) {
                    split(callback("flag-comment-step1", current));
                    split(callback("flag-comment-step2", current));
                    call(callback("flag-comment-step3", current));
                    callback("flag-comment-captcha-placeholder", current).innerHTML = obj.html_content;
                } else {
                    hasOwnProperty();
                }
            },
            /**
             * @param {?} value
             * @param {?} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                var title = obj && obj.error_message;
                if (title) {
                    var current = callback("yt-alert-message", key);
                    text(current, title);
                }
                call(key);
                /** @type {boolean} */
                data.disabled = t;
                /** @type {boolean} */
                s.disabled = t;
            }
        });
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function pause(e) {
        var index = then();
        var current = callback("abuse-type-placeholder", index);
        e = contains(e.currentTarget, "LABEL");
        text(current, getElement(e));
        /** @type {boolean} */
        callback("continue-flag-comment", index).disabled = t;
    }
    /**
     * @param {string} data
     * @param {?} opt_attributes
     * @param {?} namespaces
     * @return {undefined}
     */
    function setup(data, opt_attributes, namespaces) {
        /** @type {boolean} */
        this.j = !!namespaces;
        /** @type {string} */
        this.u = data;
        this.sa = createElement("button", value, data);
        this.U = createElement("textarea", value, data);
        /** @type {null} */
        this.La = value;
        this.c = callback("comments-remaining-count", this.u);
        /** @type {number} */
        this.f = parseInt(equal(this.c, "max-count"), 10);
        this.Ya = callback("comments-post-message", this.u);
        this.Uc = callback("yt-alert-content", this.Ya);
        this.kc = callback("comments-threshold-countdown", this.u);
        this.lc = callback("comments-threshold-count", this.kc);
        /** @type {Array} */
        this.e = [];
        /** @type {Array} */
        this.jc = [];
        /** @type {null} */
        this.b = value;
        enter(this);
        on(this, this.U, "focus", this.dd);
        on(this, this.U, "blur", this.Ie);
        on(this, this.u, "submit", this.cd);
        on(this, this.U, "change", this.ed);
        on(this, this.U, "keyup", this.ed);
        on(this, this.U, "keydown", this.Je);
        if (opt_attributes) {
            this.dd();
        }
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    function remove(node) {
        setstr(node);
        setter(node);
        removeClass(node.u, "has-focus");
        /** @type {boolean} */
        node.sa.disabled = t;
        /** @type {string} */
        node.U.value = "";
        enter(node);
        node.U.blur();
        /** @type {null} */
        node.b = value;
        off(node.e);
        /** @type {Array} */
        node.e = [];
        slice(node.jc, function(f) {
            readdir(f);
        });
        /** @type {Array} */
        node.jc = [];
        getAll(node.u, "initialized");
        extend("comment-form-reset");
    }
    /**
     * @param {Object} obj
     * @param {?} event
     * @param {string} listener
     * @param {Function} one
     * @return {undefined}
     */
    function on(obj, event, listener, one) {
        obj.e.push(addEvent(event, listener, bind(one, obj)));
    }
    /**
     * @param {Object} dataAndEvents
     * @return {undefined}
     */
    function setstr(dataAndEvents) {
        if (dataAndEvents.La) {
            /** @type {string} */
            dataAndEvents.La.innerHTML = "";
        }
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    function enter(node) {
        /** @type {number} */
        var e = node.f - node.U.value.length;
        /** @type {string} */
        node.c.innerHTML = e + "";
        /** @type {boolean} */
        e = 0 > e;
        done(node.c, "too-many", e);
        /** @type {boolean} */
        node.sa.disabled = e;
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    function setter(node) {
        split(node.kc);
        call(callback("comments-remaining"));
        /** @type {string} */
        node.lc.innerHTML = "";
        /** @type {boolean} */
        node.sa.disabled = t;
    }
    /**
     * @param {?} k
     * @return {undefined}
     */
    function Request(k) {
        this.k = k;
        this.Rb = callback("yt-uix-pager-show-more");
        /** @type {boolean} */
        this.b = !!push("ENABLE_LIVE_COMMENTS");
        /** @type {Array} */
        this.e = [];
        this.pb();
    }
    /**
     * @param {string} element
     * @param {?} other
     * @param {Object} type
     * @return {undefined}
     */
    function toggle(element, other, type) {
        element = contains(element, "form");
        if (!getParams(element, "initialized")) {
            data(element, "initialized", "true");
            current = new setup(element, !other, type);
            if (other) {
                current.focus();
            }
        }
    }
    /**
     * @param {Object} element
     * @return {undefined}
     */
    function start(element) {
        element = element.currentTarget;
        var node = contains(element, value, "comment");
        switch (equal(element, "action")) {
            case "approve":
                element = equal(node, "id");
                var test = push("VIDEO_ID");
                removeClass(node, "pending");
                i("/comment_servlet?field_approve_comment=1", {
                    format: "XML",
                    method: "POST",
                    B: {
                        comment_id: element,
                        entity_id: test,
                        session_token: reset("comment_servlet")
                    },
                    /**
                     * @return {undefined}
                     */
                    onError: function() {
                        end(node, "pending");
                    }
                });
                break;
            case "block":
                if (confirm(replace("BLOCK_USER"))) {
                    is(node, TRUE);
                    end(node, "blocked");
                }
                break;
            case "unblock":
                is(node, t);
                removeClass(node, "blocked");
                break;
            case "flag-in-place":
                if (appendChild()) {
                    var self = require("comment-flag-area");
                    element = equal(node, "id");
                    test = equal(node, "author-id");
                    var result = getElement(callback("author", node));
                    var html = callback("comment-text", node).innerHTML;
                    var intensity = push("VIDEO_ID");
                    curValue.getInstance().Ic(self);
                    self = then();
                    /** @type {Object} */
                    callback("flagged-comment-id", self).value = element;
                    callback("flagged-comment-author-id", self).value = test;
                    callback("flagged-comment-video-id", self).value = intensity;
                    text(callback("flagged-comment-author-name", self), result);
                    callback("flagged-comment-text", self).appendChild(toDom(html));
                    addEvent(callback("continue-flag-comment", self), "click", foo);
                    unbind(self, "click", makeRequest, "submit-flag-comment");
                    unbind(self, "click", pause, "abuse-type-radio-input");
                }
                break;
            case "flag":
                onComplete(node, "mark_comment_as_spam");
                break;
            case "flag-profile-pic":
                onComplete(node, "flag_profile_pic");
                break;
            case "unflag":
                element = equal(node, "id");
                i("/comment_servlet", {
                    format: "XML",
                    method: "POST",
                    B: {
                        unmark_comment_as_spam: element,
                        entity_id: push("VIDEO_ID"),
                        session_token: reset("comment_servlet")
                    }
                });
                break;
            case "hide":
                end(node, "hidden");
                break;
            case "show":
                removeClass(node, "hidden");
                break;
            case "remove":
                element = equal(node, "id");
                test = push("VIDEO_ID");
                split(node);
                i("/comment_servlet?remove_comment=1", {
                    format: "XML",
                    method: "POST",
                    B: {
                        comment_id: element,
                        entity_id: test,
                        session_token: reset("comment_servlet")
                    },
                    /**
                     * @return {undefined}
                     */
                    onError: function() {
                        call(node);
                    }
                });
                break;
            case "reply":
                ready(node);
                break;
            case "realtime-reply":
                if (appendChild()) {
                    if (!current) {
                        element = callback("comments-textarea", require("comments-view"));
                        toggle(element);
                    }
                    element = current;
                    remove(element);
                    element.focus();
                }
                break;
            case "vote-up":
                createNode(node, TRUE);
                break;
            case "vote-down":
                createNode(node, t);
                break;
            case "show-parent":
                element = equal(node, "id");
                test = push("VIDEO_ID");
                removeClass(node, "has-child");
                end(node, "child");
                if (result = require("parent-comment-loading")) {
                    var ret = when(result);
                    if (node.parentNode) {
                        node.parentNode.insertBefore(ret, node);
                    }
                    call(ret);
                }
                i("/comment_servlet?get_comment_parent=1", {
                    format: "XML",
                    method: "POST",
                    B: {
                        comment_id: element,
                        entity_id: test,
                        session_token: reset("comment_servlet")
                    },
                    /**
                     * @param {?} value
                     * @param {string} obj
                     * @return {undefined}
                     */
                    i: function(value, obj) {
                        /** @type {Element} */
                        var i = document.createElement("ul");
                        i.innerHTML = obj.html_content;
                        i = res(i);
                        if (node.parentNode) {
                            node.parentNode.insertBefore(i, node);
                        }
                        join(ret);
                        increment(i);
                    },
                    /**
                     * @param {?} value
                     * @param {?} obj
                     * @return {undefined}
                     */
                    onError: function(value, obj) {
                        end(node, "has-child");
                        removeClass(node, "child");
                        join(ret);
                        if (obj && obj.error_message) {
                            window.alert(obj.error_message);
                        } else {
                            window.alert("Request failed, please try later.");
                        }
                    }
                });
        }
    }
    /**
     * @return {?}
     */
    function appendChild() {
        return push("COMMENTS_SIGNIN_URL") ? (visit(push("COMMENTS_SIGNIN_URL")), t) : !push("COMMENTS_YPC_CAN_POST_OR_REACT_TO_COMMENT") ? t : TRUE;
    }
    /**
     * @param {?} selector
     * @param {boolean} state
     * @return {undefined}
     */
    function is(selector, state) {
        var importedContacts = {};
        /** @type {number} */
        importedContacts["action_" + (state ? "" : "un") + "block_commenter"] = 1;
        var elem = equal(selector, "id");
        i("/link_ajax", {
            format: "XML",
            method: "POST",
            n: importedContacts,
            B: {
                session_token: reset("link_ajax"),
                comment_id: elem
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                if (obj) {
                    if (obj.success_message) {
                        window.alert(obj.success_message);
                    }
                }
            }
        });
    }
    /**
     * @param {string} key
     * @param {string} name
     * @return {undefined}
     */
    function onComplete(key, name) {
        if (appendChild()) {
            var file = equal(key, "id");
            var files = push("VIDEO_ID");
            split(key);
            end(key, "flagged");
            files = {
                entity_id: files
            };
            files[name] = file;
            i("/comment_servlet", {
                format: "XML",
                method: "POST",
                n: files,
                B: {
                    session_token: reset("comment_servlet")
                },
                /**
                 * @return {undefined}
                 */
                onError: function() {
                    call(key);
                    removeClass(key, "flagged");
                }
            });
        }
    }
    /**
     * @param {Object} result
     * @return {undefined}
     */
    function ready(result) {
        if (appendChild()) {
            if (same(result, "replying")) {
                if (same(result, "replying")) {
                    removeClass(result, "replying");
                    result = callback("comments-post-container", result);
                    join(result);
                }
            } else {
                end(result, "replying");
                var item = callback("comments-post", require("watch7-discussion") || require("watch7-discussion"));
                item = when(item);
                /** @type {Element} */
                var ret = document.createElement("div");
                /** @type {string} */
                ret.className = "comments-post-container";
                result.appendChild(ret);
                ret.appendChild(item);
                item = new setup(item);
                remove(item);
                ret = equal(result, "id");
                item.u.reply_parent_id.value = ret;
                if (result = equal(result, "tag")) {
                    /** @type {Object} */
                    item.b = result;
                }
                item.focus();
            }
        }
    }
    /**
     * @param {?} element
     * @param {boolean} type
     * @return {undefined}
     */
    function createNode(element, type) {
        if (appendChild() && !equal(element, "voted")) {
            var item = equal(element, "id");
            var tag = push("VIDEO_ID");
            var old_vote = equal(element, "score") || "0";
            /** @type {number} */
            var actual = type ? 1 : -1;
            data(element, "voted", actual + "");
            if (type) {
                addClass(element, "voted-down", "voted-up");
            } else {
                addClass(element, "voted-up", "voted-down");
            }
            item = {
                a: actual,
                id: item,
                video_id: tag,
                old_vote: old_vote
            };
            if (tag = equal(element, "tag")) {
                item.tag = tag;
            }
            i("/comment_voting", {
                format: "XML",
                method: "POST",
                n: item,
                B: {
                    session_token: reset("comment_voting")
                }
            });
        }
    }
    /**
     * @param {Object} options
     * @return {undefined}
     */
    function flush(options) {
        var req = {
            video_ids: options.Xc,
            playlist_id: options.re || "",
            new_playlist_name: options.Zc || "",
            session_token: reset("addto_ajax")
        };
        var params = push("PLAYBACK_ID");
        if (params) {
            req.plid = params;
        }
        params = {};
        if (options.Yc) {
            params["private"] = options.Yc;
        }
        if (options.qc) {
            params.feature = options.qc;
        }
        /** @type {string} */
        var par = "";
        switch (options.Wc) {
            case "PL":
                /** @type {string} */
                par = options.Zc ? "action_add_to_new_playlist" : "action_add_to_playlist";
                break;
            case "FL":
                /** @type {string} */
                par = "action_add_to_favorites";
                break;
            case "WL":
                /** @type {string} */
                par = "action_add_to_watch_later_list";
        }
        /** @type {number} */
        params[par] = 1;
        i("/addto_ajax", {
            qb: TRUE,
            format: "XML",
            method: "POST",
            n: params,
            B: req,
            z: options.z,
            onError: options.onError,
            i: options.i
        });
    }
    /**
     * @return {undefined}
     */
    function ctor() {}
    /**
     * @param {(Document|string)} el
     * @return {undefined}
     */
    function Events(el) {
        this.e = el || getter();
    }
    /**
     * @param {?} dataAndEvents
     * @param {Function} x
     * @return {undefined}
     */
    function mergeSort(dataAndEvents, x) {
        if (dataAndEvents.Zb) {
            slice(dataAndEvents.Zb, x, element);
        }
    }
    /**
     * @param {string} line
     * @param {(Document|string)} _arg
     * @return {undefined}
     */
    function Text(line, _arg) {
        this.e = _arg || getter();
        this.c = line || "";
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function coerce(self) {
        if (!self.C) {
            if (self.b && self.A().form) {
                define(self.b, self.A().form, "submit", self.Gf);
                /** @type {boolean} */
                self.C = TRUE;
            }
        }
    }
    /**
     * @param {Object} obj
     * @return {?}
     */
    function mixin(obj) {
        return !!obj.A() && ("" != obj.A().value && obj.A().value != obj.c);
    }
    /**
     * @param {Object} value
     * @return {undefined}
     */
    function setWaiState(value) {
        if (PLACEHOLDER_SUPPORTED) {
            if (value.A().placeholder != value.c) {
                value.A().placeholder = value.c;
            }
        } else {
            coerce(value);
            value.A().setAttribute("aria-label", value.c);
        }
        if (mixin(value)) {
            body(value.A(), "label-input-label");
        } else {
            if (!value.Q) {
                if (!value.wb) {
                    throttledUpdate(value.A(), "label-input-label");
                }
            }
            if (!PLACEHOLDER_SUPPORTED) {
                watch(value.Qf, value);
            }
        }
    }
    /**
     * @param {?} b
     * @param {?} f
     * @param {?} a
     * @return {undefined}
     */
    function naturalSort(b, f, a) {
        this.b = b;
        this.f = f;
        i("/playlist_ajax", {
            n: {
                action_get_addto_panel: 1,
                video_id: this.f
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                init(this, obj.html);
                a();
            },
            z: this
        });
    }
    /**
     * @param {Object} node
     * @param {?} html
     * @return {undefined}
     */
    function init(node, html) {
        node.b.innerHTML = html;
        node.Ga = callback("sort-playlists", node.b);
        node.e = callback("playlist-items", node.b);
        node.Q = callback("added-to-message", node.b);
        node.K = callback("added-to-message-title", node.b);
        node.he = callback("note-added-message", node.b);
        node.ge = callback("note-added-message-title", node.b);
        node.j = callback("create-playlist", node.b);
        if (node.j) {
            node.c = callback("new-playlist-title", node.b);
            var opts = node.c.getAttribute("placeholder");
            opts = new Text(opts);
            var elem = node.c;
            if (opts.ta) {
                log(Error("Component already rendered"));
            }
            if (elem) {
                /** @type {boolean} */
                opts.Vc = TRUE;
                if (!opts.e || opts.e.b != getAttribute(elem)) {
                    opts.e = getter(elem);
                }
                opts.nc(elem);
                opts.rb();
            } else {
                log(Error("Invalid element to decorate"));
            }
            node.Ib = callback("create-new-playlist", node.b);
        }
        node.we = addEvent(node.Ga, "change", bind(node.Ae, node));
        node.ca = addEvent(node.j, "submit", bind(node.Ee, node));
        node.l = unbind(node.b, "click", bind(node.Ce, node), "playlist-item-favorite");
        node.C = unbind(node.b, "click", bind(node.De, node), "playlist-item");
        node.Va = unbind(node.b, "click", bind(node.Ge, node), "save-note");
        node.X = unbind(node.b, "click", bind(node.Be, node), "cancel-note");
        node.Jb = addEvent(node.c, "keyup", bind(node.Fe, node));
        app();
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function destroy(self) {
        off(self.we);
        off(self.ca);
        off(self.l);
        off(self.C);
        off(self.Va);
        off(self.X);
        off(self.Jb);
    }
    /**
     * @param {Node} e
     * @param {?} msg
     * @return {undefined}
     */
    function reportError(e, msg) {
        var current = callback("added-to-error-message", e.b);
        callback("yt-alert-content", current).innerHTML = msg;
        call(current);
    }
    /**
     * @param {?} value
     * @return {undefined}
     */
    function _fn(value) {
        value = callback("playlist-video-count", value);
        /** @type {number} */
        value.innerHTML = parseInt(value.innerHTML, 10) + 1;
    }
    /**
     * @param {Node} item
     * @return {undefined}
     */
    function eraseResult(item) {
        var current = callback("selected", item.b);
        if (current) {
            removeClass(current, "selected");
            /** @type {null} */
            item.kd = value;
        }
    }
    /**
     * @param {?} e
     * @param {?} o
     * @return {undefined}
     */
    function cycle(e, o) {
        e.K.innerHTML = equal(o, "title");
        var node = e.Q;
        if (e.Ab) {
            split(e.Ab);
        }
        e.Ab = node;
        call(node);
        extend("PLAYLIST_UPDATED");
    }
    /**
     * @param {string} str
     * @return {?}
     */
    function toString(str) {
        return "report-video" + (str ? "-" + str : "");
    }
    /**
     * @return {?}
     */
    function toObject() {
        return currentElement || (currentElement = callback("report-video", callback("yt-uix-overlay-fg-content")));
    }
    /**
     * @param {string} obj
     * @return {?}
     */
    function iterator(obj) {
        return callback(toString(obj), toObject());
    }
    /**
     * @param {string} elements
     * @return {undefined}
     */
    function search(elements) {
        var raw = iterator("form-element").video_id.value;
        /** @type {string} */
        elements = -1 < elements.indexOf("?") ? elements + ("&v=" + raw) : elements + ("?v=" + raw);
        send(elements);
    }
    /**
     * @param {boolean} toStart
     * @return {undefined}
     */
    function $timeout(toStart) {
        /** @type {boolean} */
        iterator("button-continue").disabled = !!toStart;
    }
    /**
     * @param {boolean} val
     * @return {undefined}
     */
    function toLowerCase(val) {
        /** @type {boolean} */
        iterator("button-submit").disabled = !!val;
    }
    /**
     * @param {Event} event
     * @return {undefined}
     */
    function onsuccess(event) {
        iterator("form-element-other")["other-report-reason"].value = event.target.value;
        $timeout();
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function errorHandler(e) {
        app();
        var rvar = toString("category-selected");
        var key = iterator("category-selected");
        if (key) {
            removeClass(key, rvar);
        }
        e = index(e.target, toString("category"));
        end(e, rvar);
        toLowerCase();
        set();
    }
    /**
     * @return {undefined}
     */
    function set() {
        var key = iterator("category-selected");
        var val = callback(toString("category-radio"), key).value;
        var response = callback(toString("category-label"), key).innerHTML;
        var tag = key.getElementsByTagName("select")[0];
        tag = (key = tag ? tag.value : value) ? tag.options[tag.selectedIndex].innerHTML : value;
        iterator("type").innerHTML = tag ? response + " &gt; " + tag : response;
        response = iterator("form-element");
        response.reason.value = val;
        response["sub-reason"].value = key;
        if ("INFRINGES_MY_RIGHTS" == val || "CAPTIONS_REPORT" == val) {
            split(iterator("addition"));
            if ("INFRINGES_MY_RIGHTS" == val) {
                if (!key) {
                    toLowerCase(TRUE);
                }
            }
        } else {
            call(iterator("addition"));
        }
    }
    /**
     * @return {undefined}
     */
    function dataAttr() {
        toLowerCase();
        set();
    }
    /**
     * @param {number} expectedNumberOfNonCommentArgs
     * @param {number} opt_attributes
     * @return {undefined}
     */
    function reduceRight(expectedNumberOfNonCommentArgs, opt_attributes) {
        var step = toString("step");
        var self = toObject();
        addClass(self, step + expectedNumberOfNonCommentArgs, step + opt_attributes);
    }
    /**
     * @return {undefined}
     */
    function setModel() {
        reduceRight(4, 2);
        set();
    }
    /**
     * @param {boolean} type
     * @return {undefined}
     */
    function fire(type) {
        if (type === t) {
            split(iterator("message-failed"));
        } else {
            call(iterator("message-failed"));
        }
    }
    /**
     * @param {Object} obj
     * @return {?}
     */
    function action(obj) {
        if (obj.currentTarget.disabled) {
            return TRUE;
        }
        fire(t);
        obj = iterator("form-element").reason.value;
        if ("INFRINGES_MY_RIGHTS" == obj) {
            obj = iterator("form-element")["sub-reason"].value;
            if ("CLIENT_OTHER_LEGAL" == obj) {
                if (!iterator("form-element-other")["category-other-radio"].value) {
                    $timeout(TRUE);
                }
                reduceRight(2, 4);
            } else {
                if (obj) {
                    search(obj);
                    hasOwnProperty();
                }
            }
        } else {
            if ("CAPTIONS_REPORT" == obj) {
                obj = require("CAPTIONS_REPORT");
                obj = obj.dataset ? obj.dataset.url : obj.getAttribute("data-" + "url".replace(/([A-Z])/g, "-$1").toLowerCase());
                search(obj);
                hasOwnProperty();
            } else {
                toLowerCase(TRUE);
                loginSuccess();
                var args = iterator("form-element");
                obj = args.action;
                args = MAP(args);
                i(obj, {
                    format: "XML",
                    method: "POST",
                    oa: args,
                    /**
                     * @return {undefined}
                     */
                    i: function() {
                        toLowerCase();
                        Init();
                        iterator("confirmation-type").innerHTML = iterator("type").innerHTML.replace("&gt;", "<br/>");
                        var key = iterator("confirmation-timestamp");
                        var value;
                        value = expect(toString("timestamp"), toObject());
                        /** @type {string} */
                        key.innerHTML = value[0].value + ":" + value[1].value;
                        iterator("confirmation-details").innerHTML = iterator("details").value;
                        $timeout();
                        reduceRight(2, 3);
                    },
                    /**
                     * @return {undefined}
                     */
                    onError: function() {
                        toLowerCase();
                        Init();
                        fire();
                    }
                });
            }
        }
    }
    /**
     * @param {boolean} val
     * @return {undefined}
     */
    function joinPath(val) {
        if (val === t) {
            split(iterator("message-captcha"));
        } else {
            call(iterator("message-captcha"));
        }
    }
    /**
     * @param {(Object|string)} obj
     * @return {?}
     */
    function post(obj) {
        if (obj.currentTarget.disabled) {
            return TRUE;
        }
        obj = toObject();
        if (same(obj, toString("step1"))) {
            joinPath(t);
            loginSuccess();
            $timeout(TRUE);
            var args = iterator("form-captcha");
            obj = args.action;
            args = MAP(args);
            i(obj, {
                method: "POST",
                oa: args,
                /**
                 * @return {undefined}
                 */
                i: function() {
                    $timeout();
                    Init();
                    reduceRight(1, 2);
                },
                /**
                 * @return {undefined}
                 */
                onError: function() {
                    $timeout();
                    Init();
                    joinPath();
                }
            });
        } else {
            if (same(obj, toString("step4"))) {
                if (obj = iterator("form-element-other")["other-report-reason"].value) {
                    search(obj);
                    hasOwnProperty();
                }
            } else {
                hasOwnProperty();
            }
        }
    }
    /**
     * @param {Event} d
     * @return {undefined}
     */
    function onTimeout(d) {
        $timeout(!d.target.value.length);
    }
    /**
     * @param {?} defaults
     * @param {?} argv
     * @param {?} element
     * @param {?} opt
     * @param {?} val
     * @param {string} defaultValues
     * @param {?} merge
     * @return {undefined}
     */
    function options(defaults, argv, element, opt, val, defaultValues, merge) {
        this.k = defaults;
        this.l = argv;
        this.C = element;
        this.mc = opt;
        /** @type {boolean} */
        this.b = !isNaN(parseInt(val, 10));
        /** @type {null} */
        this.Xa = value;
        if (this.b) {
            this.Xa = val;
        }
        this.j = defaultValues || {};
        /** @type {boolean} */
        this.c = !!merge;
        window.__GOOGLEAPIS = window.__GOOGLEAPIS || {};
        window.__GOOGLEAPIS.gwidget = window.__GOOGLEAPIS.gwidget || {};
        window.__GOOGLEAPIS.gwidget.lang = this.mc;
        if (this.b) {
            window.__GOOGLEAPIS["googleapis.config"] = window.__GOOGLEAPIS["googleapis.config"] || {};
            window.__GOOGLEAPIS["googleapis.config"].sessionIndex = this.Xa;
        }
        poll("https://apis.google.com/js/plusone.js", bind(this.f, this));
    }
    /**
     * @param {boolean} recordType
     * @return {undefined}
     */
    function fetch(recordType) {
        var nodes = require("insight-optout-form");
        if (nodes) {
            format(nodes, {
                format: "XML",
                n: {
                    opt_out: recordType
                },
                /**
                 * @return {undefined}
                 */
                i: function() {
                    var e = require("insight-public");
                    done(require("insight-private"), "selected", recordType);
                    done(e, "selected", !recordType);
                },
                /**
                 * @param {?} er
                 * @param {Object} data
                 * @return {undefined}
                 */
                R: function(er, data) {
                    require("insight-optout-response").innerHTML = "error_message" in data ? data.error_message : "";
                }
            });
        }
    }
    /**
     * @param {(Function|string)} element
     * @param {number} h
     * @param {Object} options
     * @return {undefined}
     */

    /**
     * @param {Object} callback
     * @param {?} eventSource
     * @param {?} definition
     * @param {?} e
     * @return {undefined}
     */
    function registerEvents(callback, eventSource, definition, e) {
        /** @type {Object} */
        this.u = callback;
        this.O = eventSource;
        addEvent(this.u, "submit", bind(this.c, this));
        callback = bind(this.b, this);
        listen(this.O, "click", callback, function(target) {
            return "li" === target.nodeName.toLowerCase() && TRUE;
        });
        addEvent(require("flag-video-cancel"), "click", function(types) {
            types.preventDefault();
            definition();
        });
        this.cf = e;
    }
    /**
     * @param {string} value
     * @return {undefined}
     */
    function formatError(value) {
        parseParams();
        split("flag-video-form-container");
        call("flag-video-result-" + value);
    }
    /**
     * @return {undefined}
     */
    function parseParams() {
        var iter = expect("flag-video-result", require("flag-video-results-container"));
        slice(iter, function(tag) {
            split(tag);
        });
    }
    /**
     * @return {?}
     */
    function getDeps() {

    }
    /**
     * @param {boolean} val
     * @return {undefined}
     */
    function tester(val) {

    }
    /**
     * @param {number} deepDataAndEvents
     * @return {undefined}
     */
    function exec(deepDataAndEvents) {

    }
    /**
     * @param {number} deepDataAndEvents
     * @return {undefined}
     */
    function deactivate(deepDataAndEvents) {
        var next = require("watch-like-hovercard-plusone-liked");
        var nodes = require("watch-like-hovercard-plusone-not-liked");
        if (next) {
            if (nodes) {
                if (0 === deepDataAndEvents) {
                    end(next, "hid");
                    removeClass(nodes, "hid");
                } else {
                    removeClass(next, "hid");
                    end(nodes, "hid");
                }
            }
        }
    }
    /**
     * @param {string} d
     * @param {?} v
     * @return {undefined}
     */

    /**
     * @return {?}
     */

    /**
     * @return {?}
     */

    /**
     * @param {?} event
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */

    /**
     * @param {number} ctx
     * @param {?} dataTable
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */

    /**
     * @param {?} data
     * @return {?}
     */

    /**
     * @return {undefined}
     */

    /**
     * @param {?} str
     * @return {undefined}
     */

    /**
     * @param {?} value
     * @param {?} obj
     * @return {undefined}
     */

    /**
     * @param {string} name
     * @return {?}
     */
    function html(name) {
        if (!(name in timeMap)) {
            timeMap[name] = require(name);
        }
        return timeMap[name];
    }
    /**
     * @param {string} value
     * @return {undefined}
     */

    /**
     * @return {undefined}
     */
    /**
     * @return {?}
     */

    /**
     * @param {Object} f
     * @return {undefined}
     */
    function result(f) {
        /** @type {Object} */
        this.b = f;
        this.O = require("shared-addto-menu");
        this.f = equal(this.b, "feature") || "";
        this.j = same(this.b, "watch");
        this.c = equal(this.b, "video-ids") || "";
        this.M = this.c.split(",");
        if (!isFunction(pdataCur)) {
            pdataCur = same(this.O, "lightweight-panel");
        }
        if (f = callback("sign-in", this.O)) {
            addEvent(f, "click", bind(this.He, this));
        } else {
            f = {
                action_get_dropdown: "1"
            };
            if (this.f) {
                f.feature = this.f;
            }
            i("/addto_ajax", {
                qb: TRUE,
                format: "XML",
                method: "GET",
                z: this,
                n: f,
                /**
                 * @param {?} value
                 * @param {string} obj
                 * @return {undefined}
                 */
                i: function(value, obj) {
                    this.O.innerHTML = obj.html_content || "";
                    done(this.O, "ie", documentElement);
                    this.Ka();
                    /** @type {Array} */
                    var array = [];
                    deepMatches(array, expect("playlist-name", this.o.list));
                    deepMatches(array, expect("label-name", this.o.list));
                    slice(array, function(a) {
                        /**
                         * @param {Array} pos
                         * @return {?}
                         */
                        function wrap(pos) {
                            /** @type {Array} */
                            var text = [];
                            var i;
                            /** @type {number} */
                            i = 0;
                            for (; i < pos.length; i++) {
                                text.push(pos[i]);
                                if (lines[i]) {
                                    text.push(lines[i]);
                                }
                            }
                            if (lines[i]) {
                                if (lines[i].match(/^<\s*\//)) {
                                    text.push(lines[i]);
                                }
                            }
                            /** @type {string} */
                            text = text.join("");
                            return text.length < requestUrl.length ? text + "&hellip;" : text;
                        }
                        var p = require(a);
                        var el;
                        var result = require(p);
                        el = template(result);
                        p.parentNode.appendChild(el);
                        /** @type {string} */
                        el.style.whiteSpace = "normal";
                        /** @type {string} */
                        el.style.lineHeight = "1.5em";
                        var requestUrl = equal(result, "original-html");
                        if (!requestUrl) {
                            requestUrl = result.innerHTML.replace(/^\s+|\s+$/, "");
                            data(result, "original-html", requestUrl);
                        }
                        /** @type {RegExp} */
                        result = /<[^>]+>/g;
                        var lines = requestUrl.match(result) || [];
                        result = requestUrl.replace(result, "<wbr>").split("<wbr>");
                        var left = el.innerHTML;
                        /** @type {string} */
                        var html = "";
                        /** @type {number} */
                        var right = 0;
                        for (; 1 > right; right++) {
                            html += "&nbsp;<br>";
                        }
                        /** @type {string} */
                        el.innerHTML = html;
                        html = el.clientHeight || el.offsetHeight;
                        el.innerHTML = left;
                        /** @type {number} */
                        left = 0;
                        right = result.join("").length + 1;
                        /** @type {Array} */
                        var node = [];
                        for (; left < right;) {
                            /** @type {number} */
                            var middle = left + Math.round((right - left) / 2);
                            var e;
                            /** @type {number} */
                            e = middle;
                            /** @type {Array} */
                            var tmp = [];
                            /** @type {number} */
                            var i = 0;
                            var iLength = result.length;
                            for (; i < iLength && 0 < e; i++) {
                                var word = result[i];
                                tmp.push(word.substring(0, e));
                                e -= word.length;
                            }
                            /** @type {Array} */
                            e = tmp;
                            el.innerHTML = wrap(e);
                            /** @type {boolean} */
                            tmp = (el.clientHeight || el.offsetHeight) <= html;
                            /** @type {string} */
                            el.innerHTML = "";
                            if (tmp) {
                                /** @type {Array} */
                                node = e;
                                /** @type {number} */
                                left = middle + 1;
                            } else {
                                /** @type {number} */
                                right = middle - 1;
                            }
                        }
                        join(el);
                        el = wrap(node);
                        /** @type {boolean} */
                        result = p.innerHTML != el;
                        p.innerHTML = el;
                        if (result) {
                            a = index(a, "yt-uix-button-menu-item");
                            a.title = equal(a, "possible-tooltip");
                        }
                    });
                }
            });
        }
    }
    /**
     * @param {Object} self
     * @param {?} el
     * @return {undefined}
     */
    function scrollTo(self, el) {
        callback("addto-title", self.o.Gc).innerHTML = el;
        removeClass(self.O, "lightweight-panel");
        onTouchEnd(self, self.o.Gc, TRUE);
        var udataCur = callback("close-note", self.O);
        call(udataCur);
    }
    /**
     * @param {Object} self
     * @param {string} data
     * @return {undefined}
     */
    function Editor(self, data) {
        callback("addto-title", self.o.Ca).innerHTML = encode(data);
        onTouchEnd(self, self.o.Ca, TRUE);
        var udataCur = callback("close-note", self.O);
        call(udataCur);
        var iframe = require("addto-note");
        addEvent(iframe, "keydown", bind(self.Pd, self));
        addEvent(iframe, "paste", bind(self.Pd, self));
        transitionEnd(self.o.Ca, function() {
            iframe.focus();
        });
    }
    /**
     * @param {?} evt
     * @param {Function} indexOf
     * @return {undefined}
     */
    function transitionEnd(evt, indexOf) {
        if (indexOf) {
            /** @type {(null|string)} */
            var transitionEndEvent = ie ? "webkitTransitionEnd" : gecko ? "oTransitionEnd" : firefox ? "transitionend" : documentElement && css(10) ? "MSTransitionEnd" : value;
            if (transitionEndEvent) {
                emit(evt, transitionEndEvent, function() {
                    indexOf();
                });
            } else {
                indexOf();
            }
        }
    }
    /**
     * @param {Object} self
     * @param {?} obj
     * @param {string} slide
     * @return {undefined}
     */
    function onTouchEnd(self, obj, slide) {
        /** @type {string} */
        slide = slide ? "slide" : "fade";
        /** @type {Array} */
        var rvar = ["fade", "slide"];
        addClass(self.e, rvar, slide);
        addClass(obj, rvar, slide);
        if (pdataCur) {
            if (obj == self.o.list) {
                end(self.O, "lightweight-panel");
            }
        }
        if (same(obj, "dismissed-panel")) {
            removeClass(obj, "dismissed-panel");
            removeClass(self.e, "active-panel");
        } else {
            onEnd(self.e, "active-panel", "dismissed-panel");
        }
        end(obj, "active-panel");
        self.e = obj;
    }
    /**
     * @param {Object} item
     * @return {undefined}
     */
    function addItem(item) {
        var node = target.getInstance();
        var from = removeNode(node, item.O);
        if (from) {
            if (equal(from, "video-ids") == item.c) {
                click(node, from);
            }
        }
    }
    /**
     * @param {Object} options
     * @param {(Object|string)} val
     * @param {number} callback
     * @param {boolean} data
     * @param {number} string
     * @return {undefined}
     */
    function write(options, val, callback, data, string) {
        /** @type {(Object|string)} */
        options.l = val;
        flush({
            Xc: options.c,
            Wc: options.l,
            re: callback,
            Zc: data,
            Yc: string,
            qc: options.f,
            i: options.Le,
            onError: options.Ke,
            z: options
        });
        getAll(options.O, "video-ids");
        /** @type {string} */
        val = "";
        switch (options.l) {
            case "PL":
                /** @type {string} */
                val = data ? "new_pl" : "pl";
                break;
            case "FL":
                /** @type {string} */
                val = "fav";
                break;
            case "WL":
                /** @type {string} */
                val = "wl";
        }
        data = {
            list: val,
            feature: options.f
        };
        if ((val = contains(options.b, "a", value)) && val.href) {
            val = combine(val.href);
            data.link_feature = val.feature || "";
        }
        data = key(data);
        clear("addto", data, element);
        if (options.j) {
            update("add_to_playlist");
        }
    }
    /**
     * @return {undefined}
     */
    function relativeX() {}
    /**
     * @param {Object} a
     * @param {string} x
     * @param {?} lab
     * @return {?}
     */
    function y(a, x, lab) {
        return a[x] = a[x] || lab;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function sort(obj) {
        /** @type {number} */
        var i = 0;
        for (; i < this.length; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @return {?}
     */
    function concat() {
        var source;
        if ((source = Object.create) && regExp.test(source)) {
            /** @type {Object} */
            source = source(value);
        } else {
            source = {};
            var property;
            for (property in source) {
                source[property] = element;
            }
        }
        return source;
    }
    /**
     * @return {?}
     */
    function _format() {
        /** @type {string} */
        var s = location.href;
        var value;
        if (args.dpo) {
            value = args.h;
        } else {
            value = args.h;
            /** @type {RegExp} */
            var re = RegExp("([#].*&|[#])jsh=([^&#]*)", "g");
            /** @type {RegExp} */
            var regex = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (s = s && (re.exec(s) || regex.exec(s))) {
                try {
                    /** @type {string} */
                    value = decodeURIComponent(s[2]);
                } catch (e) {}
            }
        }
        return value;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function removeAttr(value) {
        return y(y(args, "H", concat()), value, concat());
    }
    /**
     * @param {string} selector
     * @param {string} x
     * @param {string} arg
     * @return {undefined}
     */
    function clone(selector, x, arg) {
        if (x) {
            if (0 < x.length) {
                x = normalizePath(x);
                if (arg) {
                    if (0 < arg.length) {
                        x += "___" + normalizePath(arg);
                    }
                }
                if (28 < x.length) {
                    x = x.substr(0, 28) + (x.length - 28);
                }
                /** @type {string} */
                arg = x;
                x = y(dir, "_p", concat());
                /** @type {number} */
                y(x, arg, concat())[selector] = (new Date).getTime();
                x = pos.r;
                if ("function" === typeof x) {
                    x(selector, "_p", arg);
                } else {
                    x.push([selector, "_p", arg]);
                }
            }
        }
    }
    /**
     * @param {(Array|RegExp|string)} path
     * @return {?}
     */
    function normalizePath(path) {
        return path.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_");
    }
    /**
     * @param {Array} value
     * @return {?}
     */
    function formatNumber(value) {
        return value.join(",").replace(/\./g, "_").replace(/-/g, "_");
    }
    /**
     * @param {?} data
     * @param {?} obj
     * @return {?}
     */
    function buildParams(data, obj) {
        /** @type {Array} */
        var sorted = [];
        /** @type {number} */
        var byteIndex = 0;
        for (; byteIndex < data.length; ++byteIndex) {
            var records = data[byteIndex];
            if (records) {
                if (0 > sort.call(obj, records)) {
                    sorted.push(records);
                }
            }
        }
        return sorted;
    }
    /**
     * @param {?} s
     * @return {undefined}
     */
    function injectScript(s) {
        /** @type {Element} */
        var node = doc.createElement(tag);
        node.setAttribute("src", s);
        /** @type {string} */
        node.async = "true";
        s = doc.getElementsByTagName(tag)[0];
        s.parentNode.insertBefore(node, s);
    }
    /**
     * @param {string} walkers
     * @param {Object} opts
     * @return {undefined}
     */
    function check(walkers, opts) {
        var options = opts || {};
        if ("function" == typeof opts) {
            options = {};
            /** @type {Object} */
            options[cpu.gc] = opts;
        }
        var results = options;
        var matches = results && results[cpu.ug];
        if (matches) {
            /** @type {number} */
            var x = 0;
            for (; x < diffs.length; x++) {
                var sel = diffs[x][0];
                var callback = diffs[x][1];
                if (callback) {
                    if (Object.prototype.hasOwnProperty.call(matches, sel)) {
                        callback(matches[sel], walkers, results);
                    }
                }
            }
        }
        results = walkers ? walkers.split(":") : [];
        if (!(matches = options[cpu.vg])) {
            if (!(matches = _format())) {
                log("Bad hint");
            }
        }
        x = matches;
        sel = y(args, "ah", concat());
        if (!sel["::"] || !results.length) {
            process(results || [], options, x);
        } else {
            /** @type {Array} */
            matches = [];
            /** @type {null} */
            callback = value;
            for (; callback = results.shift();) {
                var video = callback.split(".");
                video = sel[callback] || (sel[video[1] && "ns:" + video[0] || ""] || x);
                var data = matches.length && matches[matches.length - 1] || value;
                var item = data;
                if (!data || data.hint != video) {
                    item = {
                        hint: video,
                        $d: []
                    };
                    matches.push(item);
                }
                item.$d.push(callback);
            }
            /** @type {number} */
            var lgth = matches.length;
            if (1 < lgth) {
                var hc = options[cpu.gc];
                if (hc) {
                    /**
                     * @return {undefined}
                     */
                    options[cpu.gc] = function() {
                        if (0 == --lgth) {
                            hc();
                        }
                    };
                }
            }
            for (; results = matches.shift();) {
                process(results.$d, options, results.hint);
            }
        }
    }
    /**
     * @param {?} pdataCur
     * @param {string} source
     * @param {string} data
     * @return {undefined}
     */
    function process(pdataCur, source, data) {
        /**
         * @param {string} options
         * @param {?} cb
         * @return {?}
         */
        function update(options, cb) {
            if (block) {
                return 0;
            }
            g.clearTimeout(p);
            v.push.apply(v, val);
            var _update = ((json || {}).config || {}).update;
            if (_update) {
                _update(udataCur);
            } else {
                if (udataCur) {
                    y(args, "cu", []).push(udataCur);
                }
            }
            if (cb) {
                clone("me0", options, ex);
                try {
                    tryIt(function() {
                        var s;
                        s = data === _format() ? y(json, "_", concat()) : concat();
                        s = y(removeAttr(data), "_", s);
                        cb(s);
                    });
                } finally {
                    clone("me1", options, ex);
                }
            }
            if (size) {
                size();
            }
            return 1;
        }
        var result = pdataCur.sort();
        /** @type {Array} */
        pdataCur = [];
        var i = element;
        /** @type {number} */
        var c = 0;
        for (; c < result.length; c++) {
            var last = result[c];
            if (last != i) {
                pdataCur.push(last);
            }
            i = last;
        }
        /** @type {Array} */
        pdataCur = pdataCur || [];
        var size = source[cpu.gc];
        var udataCur = source[cpu.yg];
        i = source[cpu.TIMEOUT];
        var next = source[cpu.zg];
        /** @type {null} */
        var p = value;
        /** @type {boolean} */
        var block = t;
        if (i && !next || !i && next) {
            log("Timeout requires both the timeout parameter and ontimeout parameter to be set");
        }
        result = y(removeAttr(data), "r", []).sort();
        var v = y(removeAttr(data), "L", []).sort();
        /** @type {Array} */
        var ex = [].concat(result);
        if (0 < i) {
            /** @type {number} */
            p = g.setTimeout(function() {
                /** @type {boolean} */
                block = TRUE;
                next();
            }, i);
        }
        var val = buildParams(pdataCur, v);
        if (val.length) {
            val = buildParams(pdataCur, result);
            var keys = y(args, "CP", []);
            var j = keys.length;
            /**
             * @param {?} obj
             * @return {?}
             */
            keys[j] = function(obj) {
                /**
                 * @return {?}
                 */
                function k() {
                    /** @type {null} */
                    keys[j] = value;
                    return update(val, obj);
                }
                if (!obj) {
                    return 0;
                }
                clone("ml1", val, ex);
                if (0 < j && keys[j - 1]) {
                    /** @type {function (): ?} */
                    keys[j] = k;
                } else {
                    k();
                    var key;
                    for (;
                        (key = keys[++j]) && key();) {}
                }
            };
            if (val.length) {
                /** @type {string} */
                var key = "loaded_" + args.I++;
                /**
                 * @param {?} val
                 * @return {undefined}
                 */
                json[key] = function(val) {
                    keys[j](val);
                    /** @type {null} */
                    json[key] = value;
                };
                pdataCur = data.split(";");
                if (!(pdataCur = (i = input[pdataCur.shift()]) && i(pdataCur))) {
                    log("Bad hint:" + data);
                }
                /** @type {string} */
                i = pdataCur = pdataCur.replace("__features__", formatNumber(val)).replace(/\/$/, "") + (result.length ? "/ed=1/exm=" + formatNumber(result) : "") + ("/cb=gapi." + key);
                /** @type {(Array.<string>|null)} */
                c = i.match(delegateEventSplitter);
                /** @type {(Array.<string>|null)} */
                last = i.match(pr_chunkPattern);
                if (!last || !(1 === last.length && (numbers.test(i) && (cx.test(i) && (c && 1 === c.length))))) {
                    log("Bad URL " + pdataCur);
                }
                result.push.apply(result, val);
                clone("ml0", val, ex);
                if (source[cpu.Ag] || g.___gapisync) {
                    /** @type {string} */
                    source = pdataCur;
                    if ("loading" != doc.readyState) {
                        injectScript(source);
                    } else {
                        doc.write("<" + tag + ' src="' + encodeURI(source) + '"></' + tag + ">");
                    }
                } else {
                    injectScript(pdataCur);
                }
            } else {
                keys[j](relativeX);
            }
        } else {
            update(val);
        }
    }
    /**
     * @param {Function} f
     * @return {?}
     */
    function tryIt(f) {
        if (args.hee && 0 < args.hel) {
            try {
                return f();
            } catch (r20) {
                args.hel--;
                check("debug_error", function() {
                    window.___jsl.hefn(r20);
                });
            }
        } else {
            return f();
        }
    }
    /**
     * @return {undefined}
     */
    function onLoad() {
        if (-2 == delta) {
            /** @type {number} */
            delta = parseInt(read("ACTIVITY", "-1"), 10);
            addEvent(document, "keypress", spyCall);
            addEvent(document, "click", scripts);
            var i = push("LIST_AUTO_PLAY_VALUE");
            if (!(i && 1 < i)) {
                table();
            }
        }
    }
    /**
     * @return {undefined}
     */
    function spyCall() {
        table();
    }
    /**
     * @return {undefined}
     */
    function scripts() {
        table();
    }
    /**
     * @return {undefined}
     */
    function table() {
        onLoad();
        /** @type {number} */
        var y = setAttribute();
        if (!(1E3 > y - delta)) {
            /** @type {number} */
            delta = y;
            cmp("ACTIVITY", "" + y);
        }
    }
    /**
     * @return {?}
     */
    function exit() {
        return -1 == delta || -2 == delta ? -1 : Math.max(setAttribute() - delta, 0);
    }
    /**
     * @param {Function} expect
     * @param {?} component
     * @param {?} async
     * @param {?} e
     * @param {?} t
     * @param {?} b
     * @return {undefined}
     */
    function test(expect, component, async, e, t, b) {
        /** @type {null} */
        this.b = value;
        this.ef = async;
        /** @type {Function} */
        this.f = expect;
        this.l = component;
        this.e = e;
        /** @type {string} */
        this.j = push("GOOGLEPLUS_HOST") + (t != value ? "/u/" + t : "") + (b != value ? "/b/" + b : "") + "/_/notifications/frame#pid=36";
        this.df = require(expect);
    }
    /**
     * @param {Object} walkers
     * @param {Function} d
     * @param {?} selectors
     * @param {boolean} val
     * @return {?}
     */
    function display(walkers, d, selectors, val) {
        return {
            onOpen: bind(function(rneedsContext) {
                return rneedsContext.openInto(selectors);
            }, walkers),
            onReady: bind(function() {
                if (d.showOnepick) {
                    if (val) {
                        d.showOnepick();
                    }
                }
            }, walkers),
            /**
             * @param {Node} desc
             * @return {undefined}
             */
            onClose: function(desc) {
                if (d.hideOnepick) {
                    if (val) {
                        d.hideOnepick();
                    }
                }
                desc.remove();
            }
        };
    }
    /**
     * @param {?} options
     * @param {string} callback
     * @param {?} value
     * @return {undefined}
     */
    function round(options, callback, value) {
        if ("undefined" === typeof value) {
            options[callback]();
        } else {
            options[callback](value);
        }
    }
    /**
     * @param {?} val
     * @param {boolean} duration
     * @return {undefined}
     */
    function slide(val, duration) {
        if (duration) {
            round(val.b, "onActive");
        } else {
            round(val.b, "onIdle");
        }
    }
    /**
     * @param {string} loadingLang
     * @param {string} opt_userInitiated
     * @param {boolean} req
     * @return {undefined}
     */
    function load(loadingLang, opt_userInitiated, req) {
        /** @type {boolean} */
        this.e = this.c = t;
        /** @type {number} */
        this.l = 0;
        this.k = require("sb-container");
        this.f = require("sb-button-notify");
        this.C = createElement("SPAN", "yt-uix-button-content", require("sb-button-notify"));
        this.j = require("sb-onepick-target");
        this.b = new test("sb-target", "sb-onepick-target", bind(this.ve, this), loadingLang, opt_userInitiated, req);
        this.b.load({
            hideNotificationWidget: bind(this.$c, this),
            showOnepick: bind(this.ue, this),
            hideOnepick: bind(this.te, this)
        });
        this.K = append(this.j);
        this.ad();
        addEvent(window, "resize", bind(this.ad, this));
        addEvent(window, "click", bind(this.$c, this));
        onLoad();
        play(bind(this.se, this), 12E4);
    }
    /**
     * @param {Object} dataAndEvents
     * @param {boolean} state
     * @param {string} klass
     * @return {undefined}
     */
    function toggleClass(dataAndEvents, state, klass) {
        /** @type {string} */
        klass = "sb-card-" + klass;
        if (state) {
            addClass(dataAndEvents.k, "sb-off", "sb-on");
            end(dataAndEvents.k, klass);
        } else {
            addClass(dataAndEvents.k, "sb-on", "sb-off");
            removeClass(dataAndEvents.k, klass);
        }
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    function traverseNode(node) {
        drawGraph();
        toggleClass(node, t, "sharebox");
        /** @type {boolean} */
        node.e = t;
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    function animationEnd(node) {
        drawGraph();
        toggleClass(node, t, "notif");
        /** @type {boolean} */
        node.c = t;
        removeClass(node.f, "sb-notif-clicked");
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function focus(e) {
        text(e.C, e.l + "");
        if (0 == e.l) {
            addClass(e.f, "sb-notif-on", "sb-notif-off");
        } else {
            addClass(e.f, "sb-notif-off", "sb-notif-on");
        }
    }
    /**
     * @param {?} a
     * @param {?} e
     * @return {undefined}
     */
    function Color(a, e) {
        /** @type {boolean} */
        this.c = TRUE;
        /** @type {null} */
        this.b = value;
        this.k = a;
        this.e = e;
    }
    /**
     * @param {Object} self
     * @return {?}
     */
    function sync(self) {
        if (!self.b) {
            var b = callback("filter-crumb-ghost", self.k);
            addEvent(b, dblclick, bind(self.Hf, self), t);
            self.b = b;
        }
        return self.b;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function closest(value) {
        return same(value, "filter-content") && (same(value, "filter-text") && !same(value, "filter-disabled"));
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function bindEvents(self) {
        unbind(self, "mouseover", bind(taskComplete, self), "group-header");
        unbind(self, "mouseout", bind(task, self), "group-header");
    }
    /**
     * @return {undefined}
     */
    function taskComplete() {
        end(this, "header-hover");
    }
    /**
     * @return {undefined}
     */
    function task() {
        removeClass(this, "header-hover");
    }
    /**
     * @param {string} str
     * @return {?}
     */
    function parseString(str) {
        var data = {
            channel: "c",
            all: "a"
        };
        return data[str] || data.channel;
    }
    /**
     * @param {?} x
     * @param {?} f
     * @param {?} e
     * @return {undefined}
     */
    function calcPoint(x, f, e) {
        this.na = x;
        this.f = f;
        /** @type {boolean} */
        this.b = !!e;
        /** @type {boolean} */
        this.c = t;
        /** @type {Array} */
        this.e = [];
        /** @type {Array} */
        this.j = [];
    }
    /**
     * @param {Element} context
     * @return {undefined}
     */
    function r(context) {
        /** @type {Element} */
        this.F = context;
        this.type = equal(context, "subscription-type") || "channel";
        this.ab = equal(context, "subscription-value") || "";
        /** @type {boolean} */
        this.c = !!equal(context, "enable-tooltip");
        this.ea = equal(context, "enable-hovercard") ? new calcPoint(this.F, this.ab) : value;
        /** @type {boolean} */
        this.sb = t;
        /** @type {Array} */
        this.e = [];
        /** @type {Array} */
        this.b = [];
        this.Nb = equal(this.F, "sessionlink") || "";
        this.pb();
    }
    /**
     * @param {Object} value
     * @return {undefined}
     */
    function build(value) {
        value = expect("yt-subscription-button-js-default", value);
        slice(value, function(element) {
            if (!equal(element, "subscription-initialized")) {
                new r(element);
                data(element, "subscription-initialized", "true");
            }
        });
    }
    /**
     * @param {Object} item
     * @param {Object} val
     * @return {undefined}
     */
    function validator(item, val) {
        if (val) {
            data(item.F, "subscription-id", val);
        } else {
            getAll(item.F, "subscription-id");
        }
        loop(item);
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function loop(self) {
        if (getParams(self.F, "subscription-button-type")) {
            /** @type {string} */
            var params = "-" + equal(self.F, "subscription-button-type");
            done(self.F, "yt-uix-button-subscribed" + params, !!self.getId());
            done(self.F, "yt-uix-button-subscribe" + params, !self.getId());
        } else {
            done(self.F, "subscribed", !!self.getId());
        }
        if (self.getId()) {
            params = index(self.F, "yt-uix-button-subscription-container");
            emit(params, "mouseleave", bind(function() {
                end(this.F, "hover-enabled");
            }, self));
        } else {
            removeClass(self.F, "hover-enabled");
        }
        if (same(self.F, "yt-uix-button-link")) {
            if (self.getId()) {
                ping(self);
            } else {
                prop(self);
            }
        }
        if (self.ea) {
            params = self.ea;
            /** @type {boolean} */
            var t = !!self.getId();
            var name = get(OBJ1.getInstance(), "target");
            done(params.na, name, t);
            params = self.ea;
            /** @type {boolean} */
            t = !!self.getId();
            if (!(params.b = t)) {
                iterate(OBJ1.getInstance(), params.na);
            }
        }
        if (self.c) {
            /** @type {string} */
            params = (self.getId() ? "un" : "") + "subscribe-tooltip";
            params = equal(self.F, params) || "";
            getData(OBJ2.getInstance(), self.F, params);
        }
    }
    /**
     * @param {(Object|string)} item
     * @param {?} v02
     * @param {Object} b
     * @param {(Object|string)} dataAndEvents
     * @return {undefined}
     */
    function md5_cmn(item, v02, b, dataAndEvents) {
        if (b != item.getId()) {
            if (item.ab == v02) {
                validator(item, b);
            }
        }
        if (dataAndEvents == item) {
            if (item.ea) {
                item = item.ea;
                iterate(OBJ1.getInstance(), item.na);
            }
        }
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function ping(self) {
        if ("BUTTON" == self.F.tagName) {
            end(self.F.parentNode, "yt-subscription-button-disabled-mask-container");
        }
        /** @type {boolean} */
        self.F.disabled = TRUE;
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    function prop(node) {
        removeClass(node.F.parentNode, "yt-subscription-button-disabled-mask-container");
        /** @type {boolean} */
        node.F.disabled = t;
    }
    /**
     * @param {boolean} value
     * @param {string} data
     * @param {Object} target
     * @param {Object} n
     * @return {undefined}
     */
    function all(value, data, target, n) {
        data = data || "channel";
        var params = {};
        var config = {
            channel: "channel",
            all: "all"
        };
        /** @type {number} */
        params["action_create_subscription_to_" + (config[data] || config.channel)] = 1;
        if (target) {
            /** @type {Object} */
            params.feature = target;
        }
        if (n) {
            if (n.Nb) {
                target = trim("/subscription_ajax", params);
                config = endsWith(n.Nb);
                url(target, config);
            }
        }
        config = parseString(data);
        target = {};
        target.session_token = reset("subscription_ajax");
        /** @type {boolean} */
        target[config] = value;
        if (config = push("PLAYBACK_ID")) {
            target.plid = config;
        }
        i("/subscription_ajax", {
            method: "POST",
            n: params,
            B: target,
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                var options = obj || {};
                var c;
                var name = data;
                c = md5_gg(existing, function(e) {
                    return e.type == name && e.ab == value;
                });
                slice(c, function(methods) {
                    extend("SUBSCRIBE", value, options, methods);
                });
            },
            /**
             * @return {undefined}
             */
            R: function() {
                if (n) {
                    /** @type {boolean} */
                    n.sb = t;
                    if (!same(n.F, "yt-uix-button-link")) {
                        prop(n);
                    }
                }
            }
        });
        update("subscribe");
    }
    /**
     * @return {undefined}
     */
    function config() {
        var elem = new reversed;
        var last;
        if (last = elem) {
            a: {
                try {
                    /** @type {boolean} */
                    last = !!elem.b && !!elem.b.getItem;
                    break a;
                } catch (c) {}
                /** @type {boolean} */
                last = t;
            }
        }
        if (last) {
            this.b = new tooltip(elem);
        }
    }
    /**
     * @param {Node} value
     * @return {?}
     */
    function step(value) {
        var settings = {
            volume: 100,
            muted: t,
            nonNormalized: 100
        };
        if (value.b) {
            var opts = {};
            try {
                opts = value.b.get("yt-player-volume") || {};
            } catch (d) {
                value.b.remove("yt-player-volume");
            }
            /** @type {number} */
            settings.volume = isNaN(opts.volume) ? 100 : Math.min(Math.max(opts.volume, 0), 100);
            settings.nonNormalized = isNaN(opts.nonNormalized) ? settings.volume : opts.nonNormalized;
            settings.muted = opts.muted == element ? t : opts.muted;
        }
        return settings;
    }
    /**
     * @param {string} el
     * @param {?} b
     * @param {string} j
     * @return {undefined}
     */
    function A(el, b, j) {
        this.K = require("watch7-playlist-tray");
        this.l = require("watch7-radio-skip-video");
        /** @type {string} */
        this.e = el;
        this.b = b;
        /** @type {string} */
        this.j = j;
        addEventListener(this.l, "click", this.C, t, this);
        i("/radio_ajax", {
            n: {
                action_render_video_list: 1,
                current_video_id: this.b,
                previous_video_ids: this.j.join(",")
            },
            i: this.f,
            z: this
        });
    }
    /**
     * @param {Object} name
     * @return {undefined}
     */
    function module(name) {
        var link = require("watch7-playlist-bar-next-button");
        var target = link.href;
        var event = push("EVENT_ID");
        if (event) {
            event = {
                ei: event
            };
            if (name) {
                /** @type {Object} */
                event.feature = name;
            }
            if (name = push("SHUFFLE_VALUE")) {
                /** @type {Object} */
                event.shuffle = name;
            }
            event.playnext = push("LIST_AUTO_PLAY_VALUE");
            url(target, event);
        }
        visit(link.href);
    }
    /**
     * @param {number} extra
     * @param {string} name
     * @return {undefined}
     */
    function trigger(extra, name) {
        var label = name || "mr_meh";
        if (0 < extra) {
            var contents = replace("AUTOPLAY_WARNING" + extra);
            if (contents) {
                if (enabled) {
                    _(enabled);
                    /** @type {null} */
                    enabled = value;
                }
                var node = require("playlist-bar-notifications");
                node.innerHTML = contents;
                call(node);
                enabled = attr(function() {
                    split(node);
                }, 1E4);
            }
            attr(function() {
                trigger(extra - 1, label);
            }, 1E3);
        } else {
            module(label);
        }
    }
    /**
     * @param {Object} value
     * @return {?}
     */
    function tick(value) {
        value = value instanceof Buffer ? value.args : value.args;
        /** @type {boolean} */
        var changed = t;
        /** @type {function (): undefined} */
        value.jsapicallback = groupBy;
        var ok;
        var options = guid(window.location.hash);
        if (ok = options.t || options.at) {
            refObj.t = options.t;
            refObj.at = options.at;
            /** @type {string} */
            options = window.location.hash.replace(/\bat=[^&]*&?/, "");
            /** @type {string} */
            window.location.hash = options && "#" != options ? options : "#!";
            ok = parseCommand(ok);
        } else {
            /** @type {number} */
            ok = 0;
        }
        if (ok) {
            value.start = ok;
            /** @type {number} */
            value.resume = 1;
            /** @type {boolean} */
            changed = TRUE;
        }
        return changed;
    }
    /**
     * @return {?}
     */
    function debouncedIncr() {
        return push("RESUME_COOKIE_NAME");
    }
    /**
     * @return {undefined}
     */
    function merge() {
        var c = forEach();
        if (c) {
            var n = c.getDuration();
            /** @type {number} */
            c = Math.floor(c.getCurrentTime());
            var i = push("VIDEO_ID");
            if (120 >= c || c + 120 >= n) {
                if (n = debouncedIncr()) {
                    c = read(n, "").split(",");
                    c = md5_gg(c, function(whitespace) {
                        return 0 != whitespace.indexOf(i);
                    });
                    if (0 == c.length) {
                        cleanup(n);
                    } else {
                        cmp(n, c.join(","), 1814400);
                    }
                }
            } else {
                if (n = Math.floor(c), c = debouncedIncr()) {
                    var a = read(c, "").split(",");
                    a = md5_gg(a, function(whitespace) {
                        return 0 != whitespace.indexOf(i) && !!whitespace.length;
                    });
                    if (4 <= a.length) {
                        a.shift();
                    }
                    a.push(i + ":" + n);
                    cmp(c, a.join(","), 1814400);
                }
            }
        }
    }
    /**
     * @return {undefined}
     */
    function repeat() {
        var player = forEach();
        if (player) {
            var v = push("VIDEO_ID");
            var c = player.getDuration();
            /** @type {number} */
            player = Math.floor(player.getCurrentTime());
            if (!(0 == c)) {
                if (!(20 >= player)) {
                    loadImage("/save_resume_204?" + key({
                        v: v,
                        t: player.toString()
                    }));
                }
            }
        }
    }
    /**
     * @return {undefined}
     */
    function groupBy() {
        /** @type {boolean} */
        RESIZE_LISTENER = TRUE;
        var e = forEach();
        if (e) {
            refresh(e);
        }
    }
    /**
     * @param {Object} p
     * @param {number} obj
     * @return {undefined}
     */
    function refresh(p, obj) {
        if (ignoreEmpty && !p.addEventListener) {
            /** @type {number} */
            var suiteView = obj ? 2 * obj : 50;
            attr(function() {
                refresh(p, suiteView);
            }, suiteView);
        } else {
            p.addEventListener("onStateChange", expand);
            p.addEventListener("onVolumeChange", change);
            p.addEventListener("RATE_SENTIMENT", _ready);
            p.addEventListener("SHARE_CLICKED", prepare);
            p.addEventListener("SIZE_CLICKED", onerror);
            p.addEventListener("onError", keyup);
            if (debouncedIncr()) {
                addEvent(window, "beforeunload", merge);
            }
            if (guid(window.location.hash).q) {
                if (push("WIDE_PLAYER_STYLES")) {
                    if (push("WATCH7_ENABLED")) {
                        extend("player-resize", t);
                    } else {
                        success(t);
                    }
                }
            }
            if (push("WATCH7_ENABLED")) {
                var olen = push("LIST_END_TIME");
                if (!olen) {
                    olen = p.getDuration();
                }
                /** @type {number} */
                var i = 5;
                for (; 0 < i; i--) {
                    p.addCueRange("NEAR_END" + i, olen - i, olen - i + 1);
                }
                p.addEventListener("onCueRangeEnter", "yt.www.watch7.lists.handleNearPlaybackEnd");
            } else {
                reject(p);
            }
            defaultValue = new config;
            Ext.xa("READY_STATE_TOPIC", p);
            extend("player-ready", p);
        }
    }
    /**
     * @param {Object} options
     * @return {undefined}
     */
    function expand(options) {
        /** @type {Object} */
        mode = options;
        switch (options) {
            case 0:
                if (push("RADIO_ENABLED")) {
                    if (push("RADIO_ENABLED")) {
                        if (!operation) {
                            options = push("RADIO_STATION_ID");
                            var a = push("VIDEO_ID");
                            var b = push("RADIO_PREVIOUS_VIDEO_IDS");
                            if (options) {
                                if (a && b) {
                                    operation = new A(options, a, b);
                                }
                            }
                        }
                        options = operation;
                    } else {
                        /** @type {null} */
                        options = value;
                    }
                    if (options) {
                        i("/radio_ajax", {
                            n: {
                                action_video_play_completed: 1,
                                station_id: options.e,
                                video_id: options.b
                            },
                            i: options.c,
                            z: options
                        });
                    }
                }
                if (push("WATCH7_ENABLED")) {
                    module("autoplay");
                } else {
                    if (cloneNode(debug())) {
                        setState(debug(), t, "autoplay");
                    }
                }
                break;
            case 1:
                extend("player-playing");
        }
    }
    /**
     * @param {?} e
     * @return {undefined}
     */
    function keyup(e) {
        switch (e) {
            case 5:
                if (push("WATCH7_ENABLED")) {
                    trigger(5, "html5_ns");
                } else {
                    route(5, "html5_ns");
                };
        }
    }
    /**
     * @param {(Object|string)} node
     * @return {undefined}
     */
    function change(node) {
        var value = defaultValue;
        if (value.b) {
            var e = {};
            e.volume = isNaN(node.volume) ? step(value).volume : Math.min(Math.max(node.volume, 0), 100);
            e.nonNormalized = node.nonNormalized;
            e.muted = node.muted == element ? step(value).muted : node.muted;
            try {
                value.b.Oa("yt-player-volume", e);
            } catch (d) {}
        }
    }
    /**
     * @param {boolean} e
     * @return {undefined}
     */
    function onerror(e) {
        if (push("FULLSCREEN_EXPAND")) {
            done(document.body, "fullscreen", e);
        } else {
            cmp("wide", e ? "1" : "0");
            if (push("WATCH7_ENABLED")) {
                extend("player-resize", e);
            } else {
                success(e);
            }
        }
    }
    /**
     * @param {boolean} e
     * @return {undefined}
     */
    function _ready(e) {
        if (push("WATCH7_ENABLED")) {
            extend("player-sentiment", e);
        }
    }
    /**
     * @return {undefined}
     */
    function prepare() {
        if (push("WATCH7_ENABLED")) {
            extend("player-share");
        } else {

        }
    }
    /**
     * @param {?} time
     * @param {?} val
     * @return {undefined}
     */
    function calc(time, val) {
        var iterator = val != value ? val : TRUE;
        var self = forEach();
        self.seekTo(time, TRUE);
        if (iterator) {
            if (require("watch-video-container")) {
                window.scroll(0, 0);
            } else {
                /** @type {string} */
                window.location.href = "#movie_player";
            }
        }
        self.playVideo();
    }
    /**
     * @return {undefined}
     */
    function writeURL() {
        if (RESIZE_LISTENER) {
            /** @type {string} */
            var params = window.location.hash;
            if (params != fn) {
                /** @type {string} */
                fn = params;
                params = guid(params);
                if ("t" in params) {
                    if (params.t != refObj.t) {
                        calc(parseCommand(params.t), t);
                    }
                }
                refObj = params;
            }
        }
    }
    /**
     * @param {number} result
     * @return {?}
     */
    function parseCommand(result) {
        /** @type {number} */
        var cmd = 0;
        if (-1 != result.indexOf("h")) {
            result = result.split("h");
            /** @type {number} */
            cmd = 3600 * result[0];
            result = result[1];
        }
        if (-1 != result.indexOf("m")) {
            result = result.split("m");
            /** @type {number} */
            cmd = 60 * result[0] + cmd;
            result = result[1];
        }
        if (-1 != result.indexOf("s")) {
            result = result.split("s");
            /** @type {number} */
            cmd = 1 * result[0] + cmd;
        } else {
            /** @type {number} */
            cmd = 1 * result + cmd;
        }
        return cmd;
    }
    /**
     * @param {HTMLElement} vid
     * @return {undefined}
     */
    function o(vid) {
        vid.addEventListener("onStateChange", force);
        vid.addEventListener("onError", fireReady);
    }
    /**
     * @param {Object} event
     * @return {undefined}
     */
    function stop(event) {
        var o = time;
        event = {
            event: event,
            aplid: pointerValue,
            abt: date,
            evtm: Math.round(setAttribute() - o)
        };
        if (o = push("PLAYER_CONFIG")) {
            if (o.args && o.args.plid) {
                event.plid = o.args.plid;
            }
        }
        if (o) {
            if (o.args && o.args.video_id) {
                event.v = o.args.video_id;
            }
        }
        loadImage("/player_204?" + key(event));
    }
    /**
     * @param {?} methods
     * @return {undefined}
     */
    function force(methods) {
        if (newValue) {
            switch (methods) {
                case 1:
                    stop("play");
                    _(newValue);
                    /** @type {null} */
                    newValue = value;
                    /** @type {boolean} */
                    t1 = t;
                    break;
                case 0:
                    stop("ended");
                    _(newValue);
                    /** @type {null} */
                    newValue = value;
                    /** @type {boolean} */
                    t1 = t;
            }
        }
    }
    /**
     * @return {undefined}
     */
    function fireReady() {
        if (newValue) {
            stop("error");
            _(newValue);
            /** @type {null} */
            newValue = value;
            /** @type {boolean} */
            t1 = t;
        }
    }
    /**
     * @return {undefined}
     */
    function el() {
        if (newValue) {
            stop("userwaiting");
        }
        /** @type {null} */
        newValue = value;
    }
    /**
     * @return {undefined}
     */
    function shutdown() {
        if (t1) {
            stop("unload");
        }
    }
    /**
     * @return {undefined}
     */
    function register() {
        var c = require("watch-video-annotation-editable");
        var m = mark(require("watch-video-annotation-content").innerHTML);
        if (m) {
            addClass(c, ["unannotated", "editing"], ["annotated", "not-editing"]);
        } else {
            addClass(c, ["annotated", "not-editing"], ["unannotated", "editing"]);
        }
        require("watch-video-annotation-textarea").value = m;
    }
    /**
     * @param {string} element
     * @return {undefined}
     */
    function step2(element) {
        if (!equal(element, "saving")) {
            data(element, "saving", "true");
            var b = require("watch-video-annotation-content");
            var a = require("watch-video-annotation-textarea");
            var m = mark(a.value);
            var node = {};
            if (!m) {
                /** @type {number} */
                node["delete"] = 1;
            }
            i(element.action, {
                format: "JSON",
                method: "POST",
                n: node,
                oa: MAP(element),
                /**
                 * @return {undefined}
                 */
                i: function() {
                    b.innerHTML = encode(m);
                },
                /**
                 * @return {undefined}
                 */
                onError: function() {
                    a.value = b.innerHTML;
                },
                /**
                 * @return {undefined}
                 */
                R: function() {
                    getAll(element, "saving");
                    register();
                }
            });
        }
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function dispatch(self) {
        if (!self.metaKey && !self.ctrlKey) {
            var current = self.target;
            if (!("INPUT" == current.tagName || ("TEXTAREA" == current.tagName || "SELECT" == current.tagName))) {
                switch (self.keyCode) {
                    case 78:
                        if (self.shiftKey) {
                            setState(debug(), TRUE, "keys");
                        }
                        break;
                    case 80:
                        if (self.shiftKey) {
                            publish(debug(), "keys");
                        }
                        break;
                    case 106:
                        if (self = forEach()) {
                            current = self.getCurrentTime();
                            self.seekTo(current - 10);
                        }
                        break;
                    case 108:
                        if (self = forEach()) {
                            current = self.getCurrentTime();
                            self.seekTo(current + 10);
                        }
                        break;
                    case 107:
                        if (self = forEach()) {
                            if (2 == mode) {
                                self.playVideo();
                            } else {
                                self.pauseVideo();
                            }
                        };
                }
            }
        }
    }
    /**
     * @return {undefined}
     */
    function node() {
        editor.getInstance();
        substitute(tok.de, TRUE);
        compare();
        split("watch_page_survey");
    }
    /**
     * @param {?} callback
     * @return {undefined}
     */
    function one(callback) {
        loadCSS(push("YPC_LOADER_CSS"));
        onload(push("YPC_LOADER_JS"), function() {
            slice(push("YPC_LOADER_CALLBACKS"), function(params) {
                if (params = apply(params)) {
                    params();
                }
            });
            if (callback) {
                callback();
            }
        });
    }
    /**
     * @param {Object} el
     * @param {?} docFrag
     * @param {?} f
     * @return {undefined}
     */
    function DomElement(el, docFrag, f) {
        this.e = equal(el, "id");
        /** @type {Object} */
        this.target = el;
        this.f = f;
        /** @type {boolean} */
        this.b = t;
    }
    /**
     * @param {Object} options
     * @param {Object} deepDataAndEvents
     * @param {(Document|string)} ctx
     * @return {undefined}
     */
    function loadScript(options, deepDataAndEvents, ctx) {
        var context = ctx || global;
        var spriteFilename = options.serverUri || "//www.google.com/tools/feedback";
        var c = context.GOOGLE_FEEDBACK_START;
        if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|windows\sphone|palm/i.test(navigator.userAgent)) {
            /** @type {(Window|null)} */
            options.mobileWindow = window.open("");
        }
        /** @type {Arguments} */
        context.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
        if (c) {
            c.apply(context, arguments);
        } else {
            context = context.document;
            c = context.createElement("script");
            /** @type {string} */
            c.src = spriteFilename + "/load.js";
            context.body.appendChild(c);
        }
    }
    /**
     * @param {string} desc
     * @return {?}
     */
    function getFlashVersion(desc) {
        desc = desc.match(/[\d]+/g);
        /** @type {number} */
        desc.length = 3;
        return desc.join(".");
    }
    /**
     * @param {RegExp} rsingleTag
     * @return {?}
     */
    function _pathSplit(rsingleTag) {
        return (rsingleTag = rsingleTag.exec(iter())) ? rsingleTag[1] : "";
    }
    /**
     * @return {undefined}
     */
    function root() {
        if (!(documentElement ? 0 <= normalize(vec, "7") && 0 <= normalize(progressValues, "9") : iteratee ? 0 <= normalize(vec, "3.5") : YYSTATE ? 0 <= normalize(vec, "5") : whole_match)) {
            split("reportbug");
        }
    }
    /**
     * @return {undefined}
     */
    function output() {
        emit(require("help-button"), "click", addLink, TRUE);
    }
    /**
     * @return {undefined}
     */
    function addLink() {
        var element = require("help-button");
        if (element) {
            var elementRect = equal(element, "iph-topic-id");
            var tabIndex = equal(element, "help-center-host");
            var translation = equal(element, "locale");
            var matches = equal(element, "iph-title-text");
            var classes = equal(element, "iph-search-button-text");
            var cacheKey = equal(element, "iph-search-input-text");
            var classNames = equal(element, "iph-anchor-text");
            /** @type {string} */
            var e = document.location.protocol + equal(element, "iph-js-url");
            /** @type {string} */
            var link = document.location.protocol + equal(element, "iph-css-url");
            if (e) {
                if (link) {
                    link = jQuery("link", {
                        href: link,
                        rel: "stylesheet"
                    });
                    document.getElementsByTagName("head")[0].appendChild(link);
                    onload(e, function() {
                        var attr = apply("yt.www.help.init");
                        var onClick = apply("yt.www.help.onButtonClick");
                        attr(elementRect, tabIndex, value, translation, matches, cacheKey, classes, classNames);
                        addEvent(element, "click", onClick);
                        onClick();
                    });
                }
            }
        }
    }
    /**
     * @return {undefined}
     */
    function after() {
        extend("page-init", getWindowSize(window), offset(document));
    }
    /**
     * @return {undefined}
     */
    function perform() {
        _(camelKey);
        camelKey = attr(function() {
            extend("page-resize", getWindowSize(window));
        }, 200);
    }
    /**
     * @return {undefined}
     */
    function pan() {
        var oldconfig = offset(document);
        if (400 <= Math.abs(newTop - oldconfig.y)) {
            extend("page-scroll", oldconfig);
        }
    }
    /**
     * @param {Object} el
     * @param {?} silent
     * @param {Object} params
     * @return {undefined}
     */
    function view(el, silent, params) {
        if (!params || !params.html) {
            split(el);
        } else {
            data(el, "loaded", 1);
            el.innerHTML = params.html;
            resume(el);
        }
    }
    /**
     * @param {Object} selector
     * @param {(Document|string)} name
     * @return {undefined}
     */
    function resume(selector, name) {
        var obj = callback("yt-picker-content", selector);
        var values = add(value, "yt-picker-section", obj);
        slice(values, bind(animate, value, Math.floor((name || obj.offsetWidth) / 180)));
    }
    /**
     * @param {number} step
     * @param {Node} el
     * @return {undefined}
     */
    function animate(step, el) {
        var values = add(value, "yt-picker-item", el);
        /** @type {number} */
        var column = Math.ceil(values.length / step);
        var html;
        /** @type {Element} */
        var d = document.createElement("div");
        /** @type {number} */
        var itemWidth = 0;
        for (; itemWidth < step; itemWidth++) {
            /** @type {Element} */
            html = document.createElement("div");
            /** @type {string} */
            html.className = "yt-picker-grid";
            /** @type {number} */
            var i = column * itemWidth;
            for (; i < column * (itemWidth + 1); i++) {
                if (values[i]) {
                    html.appendChild(values[i]);
                }
            }
            if (html.children.length) {
                d.appendChild(html);
            }
        }
        /** @type {string} */
        el.innerHTML = d.innerHTML;
    }
    /**
     * @return {undefined}
     */
    function handleLinks() {
        (function() {
            try {
                var parent = this;
                for (; parent.parent != parent;) {
                    if ("$" == parent.frameElement.src) {
                        log("odd");
                    }
                    parent = parent.parent;
                }
                if (parent.frameElement != value) {
                    log("busted");
                }
            } catch (b) {
                document.write("--\x3e<plaintext style=display:none>\x3c!--");
                window.open("/", "_top");
                /** @type {string} */
                top.location = "/";
            }
        })();
    }
    /**
     * @param {?} value
     * @return {undefined}
     */
    function openDisplay(value) {
        if ("block" == value.responseText) {
            handleLinks();
        }
    }
    /**
     * @return {undefined}
     */
    function capture() {
        context.Rc("ol");
        extend("init");
        context.Sc();
    }
    /**
     * @return {undefined}
     */
    function mouseup() {
        extend("dispose");
    }
    /**
     * @param {?} key
     * @param {?} r
     * @param {Array} msg
     * @return {undefined}
     */
    function cb(key, r, msg) {
        if (!TIME) {
            /** @type {NodeList} */
            var scriptTags = document.getElementsByTagName("script");
            /** @type {boolean} */
            var block = t;
            /** @type {number} */
            var i = 0;
            /** @type {number} */
            var valuesLen = scriptTags.length;
            for (; i < valuesLen; i++) {
                if (0 < scriptTags[i].src.indexOf("/debug-")) {
                    /** @type {boolean} */
                    block = TRUE;
                    break;
                }
            }
            if (block) {
                msg = escapeHtml(msg);
                loadImage("/js_204?" + ("error=" + encodeURIComponent(key) + "&script=" + encodeURIComponent(r) + "&linenumber=" + encodeURIComponent(msg) + "&url=" + encodeURIComponent(window.location.href)));
                /** @type {boolean} */
                TIME = TRUE;
            }
        }
    }
    /**
     * @param {Array} s
     * @return {?}
     */
    function escapeHtml(s) {
        if (firefox) {
            try {
                eval("(0)()");
            } catch (err) {
                return err.stack.replace(/(.*):/g, "").replace(/\n/g, ",");
            }
        } else {
            return s;
        }
    }
    /**
     * @return {undefined}
     */
    function tmpl() {
        split("pyv-container");
        if (require("ppv-placeholder")) {
            call("ppv-placeholder");
        } else {
            split("homepage-sidebar-ads");
        }
    }
    /**
     * @param {Object} b
     * @param {Object} t
     * @param {Object} obj
     * @param {Function} fn
     * @param {?} thisValue
     * @return {undefined}
     */
    function invoke(b, t, obj, fn, thisValue) {
        var settings = method(t.media_template_data, function(item) {
            return !!item.imageUrl;
        });
        if (settings) {
            b = {
                video_id: settings.videoId,
                ad_type: b,
                headline: download(t.line1),
                image_url: settings.imageUrl,
                description1: download(t.line2),
                description2: download(t.line3),
                channel_title: settings.channelName,
                test_mode: (!!thisValue).toString()
            };
            old = download(t.url);
            request("/pyv?" + key(b), {
                method: "GET",
                update: obj,
                /** @type {Function} */
                onComplete: fn
            });
        }
    }
    /**
     * @param {string} _value
     * @return {undefined}
     */
    function resolve(_value) {
        if (0 == _value.length) {
            reduce();
            if (push("PYV_TRACK_RELATED_CTR")) {
                delay("watch-related", t);
                delay("watch-channel-videos-panel", t);
            }
        } else {
            var nodes = require("watch-channel-videos-panel");
            if (nodes) {
                if (!push("IS_BRANDED_WATCH")) {
                    end(nodes, "yt-uix-expander-collapsed");
                }
            }
            invoke("watch_related", _value[0], value, function(item) {
                item = each(error(item.responseXML), "html_content") || "";
                var t = require(window.pyv_related_box_id || "watch-related");
                if (t) {
                    if (0 != t.innerHTML.indexOf(item)) {
                        t.insertBefore(toDom(item), t.firstChild);
                        if (push("PYV_TRACK_RELATED_CTR")) {
                            delay("watch-related", TRUE);
                            delay("watch-channel-videos-panel", TRUE);
                        }
                    }
                    if (item = require("pyv-watch-related-dest-url")) {
                        item.setAttribute("href", old);
                    }
                }
            }, window.google_adtest && "on" == window.google_adtest);
        }
    }
    /**
     * @return {undefined}
     */
    function reduce() {
        var iter = expect("related-video-featured");
        slice(iter, function(isXML) {
            call(isXML);
        });
    }
    /**
     * @param {?} text
     * @return {undefined}
     */
    function parenthesize(text) {
        if (text) {
            startGame(text, TRUE);
        }
        startGame("search-base-div", TRUE);
    }
    /**
     * @param {string} color
     * @param {Element} el
     * @param {Function} str
     * @return {undefined}
     */
    function lines(color, el, str) {
        slice(color, function(t) {
            var data = t.media_template_data[0];
            t.line1 = download(t.line1);
            t.line2 = download(t.line2);
            t.line3 = download(t.line3);
            t.url = download(t.url);
            data.imageUrl = download(data.imageUrl);
            data.channelName = download(data.channelName);
        });
        color = h(new getColorIndex(element), color);
        i("/pyv", {
            format: "XML",
            method: "POST",
            B: {
                pyv_ads: color,
                /** @type {Function} */
                ad_type: str
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                el.innerHTML = obj.html_content;
                parenthesize(el);
            }
        });
    }
    /**
     * @param {string} type
     * @param {boolean} duration
     * @return {undefined}
     */
    function delay(type, duration) {
        var items = require(type);
        if (items) {
            items = add("li", "video-list-item", items);
            slice(items, function(callback, dataAndEvents) {
                var index = add("a", value, callback);
                slice(index, function(a) {
                    var value = a.getAttribute("href");
                    if (value) {
                        if (unescape(value).match(/\/watch(\?|#!)v=/)) {
                            /** @type {string} */
                            a.href = duration ? a.href + ("&pvpos=" + dataAndEvents) : a.href + ("&pvnpos=" + dataAndEvents);
                        }
                    }
                });
            });
        }
    }
    /**
     * @param {Object} iframe
     * @return {undefined}
     */
    function loaded(iframe) {
        /** @type {string} */
        var body = window.location.href;
        if (body.indexOf("#") == body.length - 1) {
            if (ie) {
                /** @type {string} */
                window.location.hash = "#!";
            }
        }
        /** @type {(HTMLElement|null)} */
        body = document.body;
        var dom = getter(body);
        /** @type {Array} */
        var tagNameArr = [];
        tagNameArr.push("<!DOCTYPE html>");
        tagNameArr.push("<html><head>", iframe, "</head><body>", "", "</body></html>");
        iframe = dom.Md("iframe", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;display: none",
            src: 'javascript:""'
        });
        body.appendChild(iframe);
        /** @type {string} */
        body = tagNameArr.join("");
        iframe = iframe.contentDocument || iframe.contentWindow.document;
        iframe.open();
        iframe.write(body);
        iframe.close();
    }
    /**
     * @param {Object} r
     * @param {string} obj
     * @return {undefined}
     */
    function convert(r, obj) {
        var name = each(error(r.responseXML), "html_content") || "";
        var header = require(window.pyv_related_box_id || "watch-related");
        if (header) {
            if (0 != header.innerHTML.indexOf(name)) {
                header.insertBefore(toDom(name), header.firstChild);
                loadImage(obj);
            }
        }
    }
    /**
     * @param {string} y
     * @return {undefined}
     */
    function generate(y) {
        y = y.replace(";dc_seed=", ";kmyd=watch-channel-brand-div;dc_seed=");
        split("instream_google_companion_ad_div", "google_companion_ad_div");
        call("ad300x250", "watch-channel-brand-div");
        var b = require("ad300x250");
        if (b !== value) {
            /** @type {number} */
            var i = Math.round(1E4 * Math.random());
            /** @type {string} */
            b.innerHTML = ['<iframe src="', y, '" name="ifr_300x250ad', i, '" id="ifr_300x250ad', i, '" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
        }
        substring();
    }
    /**
     * @param {string} html
     * @return {undefined}
     */
    function wrap(html) {
        html = html.replace(";dc_seed=", ";kmyd=watch-longform-ad;dc_seed=");
        split("instream_google_companion_ad_div");
        call("watch-longform-ad");
        call("watch-longform-text");
        call("watch-longform-ad-placeholder");
        var tmpl = require("watch-longform-ad-placeholder");
        /** @type {number} */
        var i = Math.round(1E4 * Math.random());
        /** @type {string} */
        tmpl.innerHTML = ['<iframe src="', html, '" name="ifr_300x60ad', i, '" id="ifr_300x60ad', i, '" width="300" height="60" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
        substring();
    }
    /**
     * @param {?} code
     * @return {undefined}
     */
    function failure(code) {
        var script = require("watch-longform-ad-placeholder");
        if (code) {
            split("instream_google_companion_ad_div");
            call("watch-longform-ad");
            call("watch-longform-text");
            call("watch-longform-ad-placeholder");
            script.innerHTML = code;
        } else {
            split("watch-longform-ad");
        }
        substring();
    }
    /**
     * @param {string} contentHTML
     * @param {?} param
     * @return {undefined}
     */
    function initialize(contentHTML, param) {
        /** @type {string} */
        var path = "ad300x250";
        /** @type {number} */
        var client_pc = 300;
        /** @type {number} */
        var e = 250;
        if ("video" == contentHTML) {
            /** @type {string} */
            path = "watch-longform-ad-placeholder";
            /** @type {number} */
            client_pc = 300;
            /** @type {number} */
            e = 60;
            split("instream_google_companion_ad_div");
        }
        /** @type {string} */
        var data = decodeURIComponent(param);
        /** @type {string} */
        require(path).innerHTML = ['<iframe name="fw_ad" id="fw_ad" ', 'width="' + client_pc + '" height="' + e + '" ', 'marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("");
        var frame = require("fw_ad");
        frame = frame.contentWindow ? frame.contentWindow : frame.contentDocument.document ? frame.contentDocument.document : frame.contentDocument;
        /** @type {string} */
        client_pc = navigator.userAgent.toLowerCase();
        /** @type {boolean} */
        path = -1 != client_pc.indexOf("msie");
        /** @type {boolean} */
        client_pc = -1 != client_pc.indexOf("opera");
        frame.document.open();
        frame.document.write(data);
        if (path || client_pc) {
            attr(function() {
                frame.document.close();
            }, 7500);
        } else {
            frame.document.close();
        }
        if ("video" == contentHTML) {
            call("watch-longform-ad");
        } else {
            call("watch-channel-brand-div");
        }
        substring();
    }
    /**
     * @return {undefined}
     */
    function top() {
        call("watch-channel-brand-div");
        split("ad300x250");
        /** @type {string} */
        require("google_companion_ad_div").style.height = "250px";
        substring();
    }
    /**
     * @return {undefined}
     */
    function attributeName() {
        split("watch-longform-ad");
        substring();
    }
    /**
     * @return {undefined}
     */
    function parentName() {
        split("watch-channel-brand-div");
        substring();
    }
    /**
     * @return {undefined}
     */
    function substring() {
        extend("watchads-adLoad");
    }
    /**
     * @param {?} a
     * @return {undefined}
     */
    function ok(a) {
        expected("POPOUT_AD_SLOTS", a);
    }
    /**
     * @return {undefined}
     */
    function cmd() {
        var api = require("watch-longform-popup");
        if (api) {
            /** @type {boolean} */
            api.disabled = TRUE;
        }
    }
    /**
     * @param {?} a
     * @return {undefined}
     */
    function diff(a) {
        var input = require("watch-longform-popup");
        if (input) {
            /** @type {boolean} */
            input.disabled = t;
        }
        ok(a);
    }
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    function rvar(dataAndEvents) {
        /** @type {string} */
        window.google_ad_output = "html";
        if (dataAndEvents) {
            /** @type {string} */
            window.google_ad_height = "60";
            /** @type {string} */
            window.google_ad_format = "300x60_as";
            /** @type {string} */
            window.google_container_id = "instream_google_companion_ad_div";
        } else {
            /** @type {string} */
            window.google_ad_height = "250";
            /** @type {string} */
            window.google_ad_format = "300x250_as";
            /** @type {string} */
            window.google_container_id = "google_companion_ad_div";
        }
    }
    /**
     * @param {?} name
     * @return {undefined}
     */
    function lookup(name) {
        if (name) {
            split("watch-longform-ad-placeholder", "watch-channel-brand-div");
            call("watch-longform-text", "watch-longform-ad", "instream_google_companion_ad_div");
        } else {
            split("ad300x250", "watch-longform-ad");
            call("google_companion_ad_div", "watch-channel-brand-div");
        }
        substring();
    }
    /**
     * @return {undefined}
     */
    function translate() {
        split("instream_google_companion_ad_div", "watch-longform-text", "watch-longform-ad-placeholder");
        substring();
    }
    var element = void 0;
    /** @type {boolean} */
    var TRUE = true;
    /** @type {null} */
    var value = null;
    /** @type {boolean} */
    var t = false;
    var self;
    var global = this;
    /** @type {string} */
    var wc = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36);
    /** @type {number} */
    var dictSize = 0;
    /** @type {function (): number} */
    var setAttribute = Date.now || function() {
        return +new Date;
    };
    /** @type {function (this:Function, (Object|null|undefined), ...[*]): Function} */
    Function.prototype.bind = Function.prototype.bind || function(obj, dataAndEvents) {
        if (1 < arguments.length) {
            /** @type {Array.<?>} */
            var args = Array.prototype.slice.call(arguments, 1);
            args.unshift(this, obj);
            return bind.apply(value, args);
        }
        return bind(this, obj);
    };
    /** @type {RegExp} */
    var rxhtmlTag = /&/g;
    /** @type {RegExp} */
    var reChars = /</g;
    /** @type {RegExp} */
    var r20 = />/g;
    /** @type {RegExp} */
    var rreturn = /\"/g;
    /** @type {RegExp} */
    var rchecked = /[&<>\"]/;
    /** @type {RegExp} */
    var q = /&([^;\s<&]+);?/g;
    var proto = Array.prototype;
    /** @type {function (?, ?, ?): ?} */
    var assert = proto.indexOf ? function(o, obj, graphics) {
        return proto.indexOf.call(o, obj, graphics);
    } : function(arr, obj, i) {
        i = i == value ? 0 : 0 > i ? Math.max(0, arr.length + i) : i;
        if (isString(arr)) {
            return !isString(obj) || 1 != obj.length ? -1 : arr.indexOf(obj, i);
        }
        for (; i < arr.length; i++) {
            if (i in arr && arr[i] === obj) {
                return i;
            }
        }
        return -1;
    };
    /** @type {function (Object, Function, Object): undefined} */
    var slice = proto.forEach ? function(array, name, obj) {
        proto.forEach.call(array, name, obj);
    } : function(arr, f, obj) {
        var e = arr.length;
        var arr2 = isString(arr) ? arr.split("") : arr;
        /** @type {number} */
        var i = 0;
        for (; i < e; i++) {
            if (i in arr2) {
                f.call(obj, arr2[i], i, arr);
            }
        }
    };
    /** @type {function (?, Function, Object): ?} */
    var md5_gg = proto.filter ? function(obj, mapper, graphics) {
        return proto.filter.call(obj, mapper, graphics);
    } : function(a, fn, thisObj) {
        var aLength = a.length;
        /** @type {Array} */
        var res = [];
        /** @type {number} */
        var resLength = 0;
        var arr2 = isString(a) ? a.split("") : a;
        /** @type {number} */
        var i = 0;
        for (; i < aLength; i++) {
            if (i in arr2) {
                var val = arr2[i];
                if (fn.call(thisObj, val, i, a)) {
                    res[resLength++] = val;
                }
            }
        }
        return res;
    };
    /** @type {function (?, Function, ?): ?} */
    var _keys = proto.map ? function(arr, mapper, graphics) {
        return proto.map.call(arr, mapper, graphics);
    } : function(arr, f, opt_obj) {
        var e = arr.length;
        /** @type {Array} */
        var res = Array(e);
        var arr2 = isString(arr) ? arr.split("") : arr;
        /** @type {number} */
        var i = 0;
        for (; i < e; i++) {
            if (i in arr2) {
                res[i] = f.call(opt_obj, arr2[i], i, arr);
            }
        }
        return res;
    };
    var data_user;
    /**
     * @return {?}
     */
    Rect.prototype.fa = function() {
        return new Rect(this.x, this.y);
    };
    self = Grid.prototype;
    /**
     * @return {?}
     */
    self.fa = function() {
        return new Grid(this.width, this.height);
    };
    /**
     * @return {?}
     */
    self.ceil = function() {
        /** @type {number} */
        this.width = Math.ceil(this.width);
        /** @type {number} */
        this.height = Math.ceil(this.height);
        return this;
    };
    /**
     * @return {?}
     */
    self.floor = function() {
        /** @type {number} */
        this.width = Math.floor(this.width);
        /** @type {number} */
        this.height = Math.floor(this.height);
        return this;
    };
    /**
     * @return {?}
     */
    self.round = function() {
        /** @type {number} */
        this.width = Math.round(this.width);
        /** @type {number} */
        this.height = Math.round(this.height);
        return this;
    };
    /**
     * @param {?} sx
     * @return {?}
     */
    self.scale = function(sx) {
        this.width *= sx;
        this.height *= sx;
        return this;
    };
    /** @type {Array.<string>} */
    var desc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var green;
    var red;
    var inParens;
    var inPseudo;
    var err;
    var retry;
    /** @type {boolean} */
    inPseudo = inParens = red = green = t;
    var userAgent;
    if (userAgent = iter()) {
        var vlq = toVLQSigned();
        /** @type {boolean} */
        green = 0 == userAgent.indexOf("Opera");
        /** @type {boolean} */
        red = !green && -1 != userAgent.indexOf("MSIE");
        /** @type {boolean} */
        inParens = !green && -1 != userAgent.indexOf("WebKit");
        /** @type {boolean} */
        inPseudo = !green && (!inParens && "Gecko" == vlq.product);
    }
    /** @type {boolean} */
    var gecko = green;
    /** @type {boolean} */
    var documentElement = red;
    /** @type {boolean} */
    var firefox = inPseudo;
    /** @type {boolean} */
    var ie = inParens;
    var hash = toVLQSigned();
    var u = hash && hash.platform || "";
    /** @type {boolean} */
    err = -1 != u.indexOf("Mac");
    /** @type {boolean} */
    retry = -1 != u.indexOf("Win");
    /** @type {boolean} */
    var err2 = !!toVLQSigned() && -1 != (toVLQSigned().appVersion || "").indexOf("X11");
    var file;
    a: {
        /** @type {string} */
        var version = "";
        var rquickExpr;
        if (gecko && global.opera) {
            var operaVersion = global.opera.version;
            version = "function" == typeof operaVersion ? operaVersion() : operaVersion;
        } else {
            if (firefox ? rquickExpr = /rv\:([^\);]+)(\)|;)/ : documentElement ? rquickExpr = /MSIE\s+([^\);]+)(\)|;)/ : ie && (rquickExpr = /WebKit\/(\S+)/), rquickExpr) {
                var namespaceMatch = rquickExpr.exec(iter());
                version = namespaceMatch ? namespaceMatch[1] : "";
            }
        }
        if (documentElement) {
            var docMode = iframeCssFixes();
            if (docMode > parseFloat(version)) {
                /** @type {string} */
                file = String(docMode);
                break a;
            }
        }
        file = version;
    }
    var cDigit = file;
    var paramNames = {};
    var DOC = global.document;
    var $Q = !DOC || !documentElement ? element : iframeCssFixes() || ("CSS1Compat" == DOC.compatMode ? parseInt(cDigit, 10) : 5);
    /** @type {boolean} */
    var dot = !documentElement || documentElement && 9 <= $Q;
    if (!(!firefox && !documentElement)) {
        if (!(documentElement && (documentElement && 9 <= $Q))) {
            if (firefox) {
                css("1.9.1");
            }
        }
    }
    /** @type {boolean} */
    var innerText = documentElement && !css("9");
    var props = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    var condition = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    var indices = {
        IMG: " ",
        BR: "\n"
    };
    self = Data.prototype;
    /**
     * @param {?} a
     * @return {?}
     */
    self.A = function(a) {
        return isString(a) ? this.b.getElementById(a) : a;
    };
    /**
     * @param {string} name
     * @param {?} opt_attributes
     * @param {?} dataAndEvents
     * @return {?}
     */
    self.Md = function(name, opt_attributes, dataAndEvents) {
        return put(this.b, arguments);
    };
    /**
     * @param {string} type
     * @return {?}
     */
    self.createElement = function(type) {
        return this.b.createElement(type);
    };
    /**
     * @param {Element} obj
     * @param {Element} sprite
     * @return {undefined}
     */
    self.appendChild = function(obj, sprite) {
        obj.appendChild(sprite);
    };
    /** @type {function (Object, Object): ?} */
    self.contains = isAncestor;
    var udataCur = "StopIteration" in global ? global.StopIteration : Error("StopIteration");
    /**
     * @return {undefined}
     */
    Collection.prototype.b = function() {
        log(udataCur);
    };
    /**
     * @return {?}
     */
    Collection.prototype.jb = function() {
        return this;
    };
    self = E.prototype;
    /** @type {number} */
    self.N = 0;
    /** @type {number} */
    self.xb = 0;
    /**
     * @return {?}
     */
    self.Z = function() {
        return this.N;
    };
    /**
     * @return {?}
     */
    self.nd = function() {
        setOptions(this);
        /** @type {Array} */
        var eventPath = [];
        /** @type {number} */
        var i = 0;
        for (; i < this.b.length; i++) {
            eventPath.push(this.c[this.b[i]]);
        }
        return eventPath;
    };
    /**
     * @return {?}
     */
    self.md = function() {
        setOptions(this);
        return this.b.concat();
    };
    /**
     * @return {undefined}
     */
    self.clear = function() {
        this.c = {};
        /** @type {number} */
        this.xb = this.N = this.b.length = 0;
    };
    /**
     * @param {string} keepData
     * @return {?}
     */
    self.remove = function(keepData) {
        return Object.prototype.hasOwnProperty.call(this.c, keepData) ? (delete this.c[keepData], this.N--, this.xb++, this.b.length > 2 * this.N && setOptions(this), TRUE) : t;
    };
    /**
     * @param {string} key
     * @param {string} def
     * @return {?}
     */
    self.get = function(key, def) {
        return Object.prototype.hasOwnProperty.call(this.c, key) ? this.c[key] : def;
    };
    /**
     * @return {?}
     */
    self.fa = function() {
        return new E(this);
    };
    /**
     * @param {boolean} duration
     * @return {?}
     */
    self.jb = function(duration) {
        setOptions(this);
        /** @type {number} */
        var completed = 0;
        var arr = this.b;
        var c = this.c;
        var newStart = this.xb;
        var p = this;
        var ret = new Collection;
        /**
         * @return {?}
         */
        ret.b = function() {
            for (;;) {
                if (newStart != p.xb) {
                    log(Error("The map has changed since the iterator was created"));
                }
                if (completed >= arr.length) {
                    log(udataCur);
                }
                var o = arr[completed++];
                return duration ? o : c[o];
            }
        };
        return ret;
    };
    /** @type {RegExp} */
    var badChars = /<[^>]*>|&[^;]+;/g;
    /** @type {RegExp} */
    var rbrace = RegExp("^[^\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    /** @type {RegExp} */
    var RE_SIMPLE_SELECTOR = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]");
    var defined = window.yt && window.yt.config_ || {};
    run("yt.config_", defined);
    var items = window.yt && window.yt.tokens_ || {};
    run("yt.tokens_", items);
    var rv = window.yt && window.yt.globals_ || {};
    run("yt.globals_", rv);
    var flags = window.yt && window.yt.msgs_ || {};
    run("yt.msgs_", flags);
    var out = window.yt && window.yt.timeouts_ || [];
    run("yt.timeouts_", out);
    var ids = window.yt && window.yt.intervals_ || [];
    run("yt.intervals_", ids);
    /**
     * @param {string} $0
     * @param {Object} files
     * @return {?}
     */
    minify = function($0, files) {
        var map = files || {};
        var css = $0 in flags ? flags[$0] : $0;
        if (css) {
            var letter;
            for (letter in map) {
                var replacement = ("" + map[letter]).replace(/\$/g, "$$$$");
                css = css.replace(RegExp("\\{\\$" + letter + "\\}", "gi"), replacement);
                css = css.replace(RegExp("\\$" + letter, "gi"), replacement);
            }
        }
        return css;
    };
    /** @type {boolean} */
    var ignoreEmpty = "Microsoft Internet Explorer" == navigator.appName;
    var RandomPeople = {};
    var originalEvent = {};
    var tail = apply("yt.dom.getNextId_");
    if (!tail) {
        /**
         * @return {?}
         */
        tail = function() {
            return ++id;
        };
        run("yt.dom.getNextId_", tail);
        /** @type {number} */
        var id = 0;
    }
    self = handler.prototype;
    /** @type {null} */
    self.Qa = value;
    /** @type {string} */
    self.type = "";
    /** @type {null} */
    self.target = value;
    /** @type {null} */
    self.relatedTarget = value;
    /** @type {null} */
    self.currentTarget = value;
    /** @type {null} */
    self.data = value;
    /** @type {null} */
    self.source = value;
    /** @type {null} */
    self.state = value;
    /** @type {number} */
    self.keyCode = 0;
    /** @type {number} */
    self.charCode = 0;
    /** @type {boolean} */
    self.altKey = t;
    /** @type {boolean} */
    self.ctrlKey = t;
    /** @type {boolean} */
    self.shiftKey = t;
    /** @type {number} */
    self.clientX = 0;
    /** @type {number} */
    self.clientY = 0;
    /** @type {number} */
    self.pageX = 0;
    /** @type {number} */
    self.pageY = 0;
    /** @type {number} */
    self.wheelDeltaX = 0;
    /** @type {number} */
    self.wheelDeltaY = 0;
    /** @type {number} */
    self.rotation = 0;
    /** @type {number} */
    self.scale = 1;
    /** @type {null} */
    self.changedTouches = value;
    /**
     * @return {undefined}
     */
    self.preventDefault = function() {
        /** @type {boolean} */
        this.Qa.returnValue = t;
        if (this.Qa.preventDefault) {
            this.Qa.preventDefault();
        }
    };
    /**
     * @return {undefined}
     */
    self.stopPropagation = function() {
        /** @type {boolean} */
        this.Qa.cancelBubble = TRUE;
        if (this.Qa.stopPropagation) {
            this.Qa.stopPropagation();
        }
    };
    var additionalMethods = {
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var meta = apply("yt.events.listeners_") || {};
    run("yt.events.listeners_", meta);
    var chain = apply("yt.events.counter_") || {
        count: 0
    };
    run("yt.events.counter_", chain);
    /** @type {RegExp} */
    var opening = /\s*;\s*/;
    self = array.prototype;
    /**
     * @param {string} name
     * @param {string} req
     * @return {?}
     */
    self.get = function(name, req) {
        /** @type {string} */
        var prefix = name + "=";
        var keys = (this.b.cookie || "").split(opening);
        /** @type {number} */
        var j = 0;
        var key;
        for (; key = keys[j]; j++) {
            if (0 == key.lastIndexOf(prefix, 0)) {
                return key.substr(prefix.length);
            }
            if (key == name) {
                return "";
            }
        }
        return req;
    };
    /**
     * @param {string} key
     * @param {boolean} selection
     * @param {boolean} classNames
     * @return {?}
     */
    self.remove = function(key, selection, classNames) {
        var isRemoved = isFunction(this.get(key));
        cookie(this, key, "", 0, selection, classNames);
        return isRemoved;
    };
    /**
     * @return {?}
     */
    self.md = function() {
        return animation(this).keys;
    };
    /**
     * @return {?}
     */
    self.nd = function() {
        return animation(this).Lf;
    };
    /**
     * @return {?}
     */
    self.Z = function() {
        return !this.b.cookie ? 0 : (this.b.cookie || "").split(opening).length;
    };
    /**
     * @return {undefined}
     */
    self.clear = function() {
        var keys = animation(this).keys;
        /** @type {number} */
        var i = keys.length - 1;
        for (; 0 <= i; i--) {
            this.remove(keys[i]);
        }
    };
    var tree = new array(document);
    /** @type {number} */
    tree.c = 3950;
    has(editor);
    var values = apply("yt.prefs.UserPrefs.prefs_") || {};
    run("yt.prefs.UserPrefs.prefs_", values);
    /**
     * @param {string} url
     * @param {string} index
     * @return {?}
     */
    editor.prototype.get = function(url, index) {
        open(url);
        ajax(url);
        var val = values[url] !== element ? values[url].toString() : value;
        return val != value ? val : index ? index : "";
    };
    /**
     * @param {string} url
     * @return {undefined}
     */
    editor.prototype.remove = function(url) {
        open(url);
        ajax(url);
        delete values[url];
    };
    /**
     * @return {undefined}
     */
    editor.prototype.clear = function() {
        values = {};
    };
    var tok = {
        Ei: 0,
        zh: 1,
        Fd: 2,
        hi: 3,
        Ah: 4,
        cj: 5,
        ej: 6,
        bj: 7,
        $i: 8,
        aj: 9,
        dj: 10,
        Zi: 11,
        Li: 12,
        Ki: 13,
        Ji: 14,
        Rh: 15,
        ui: 16,
        xi: 17,
        yi: 18,
        wi: 19,
        vi: 20,
        Mi: 21,
        Dh: 22,
        Yi: 23,
        Ch: 24,
        mh: 25,
        Eh: 26,
        Ph: 27,
        Hi: 28,
        Bh: 29,
        Gi: 30,
        Ti: 31,
        Si: 32,
        Mh: 33,
        Qi: 34,
        Ni: 35,
        Oi: 36,
        Pi: 37,
        Ri: 38,
        ii: 39,
        Ai: 40,
        nh: 41,
        zi: 42,
        ph: 43,
        Ed: 44,
        Fh: 45,
        ri: 46,
        Ui: 47,
        fj: 48,
        gj: 49,
        ij: 50,
        Ii: 51,
        uh: 52,
        wh: 53,
        si: 54,
        ci: 55,
        de: 56,
        Fi: 57,
        Ci: 58,
        Oh: 59,
        oi: 60,
        di: 61,
        ji: 62,
        oh: 63,
        Xi: 64,
        rh: 65,
        qh: 66,
        ki: 67,
        yh: 68,
        Hh: 69,
        Xh: 70,
        pi: 71,
        Qh: 72,
        Di: 73,
        li: 74,
        Gd: 75,
        mg: 76,
        Ud: 77,
        Ih: 78,
        Vi: 79,
        fi: 80,
        vh: 81,
        ni: 82,
        Yh: 83,
        $h: 84,
        Zh: 85,
        ai: 86,
        bi: 87,
        sh: 88,
        lh: 89,
        th: 90,
        ti: 91,
        qi: 92,
        xh: 93,
        hj: 94,
        Lh: 95,
        Kh: 96,
        Nh: 97,
        gi: 98,
        Gh: 99,
        mi: 100,
        Th: 101,
        Sh: 102,
        Vh: 103,
        Wh: 104,
        Uh: 105,
        Wi: 106,
        Xd: 107,
        Jh: 108,
        Bi: 109,
        $g: 110
    };
    /**
     * @return {?}
     */
    link.prototype.fa = function() {
        return new link(this.top, this.right, this.bottom, this.left);
    };
    /**
     * @param {Object} rect
     * @return {?}
     */
    link.prototype.contains = function(rect) {
        return !this || !rect ? t : rect instanceof link ? rect.left >= this.left && (rect.right <= this.right && (rect.top >= this.top && rect.bottom <= this.bottom)) : rect.x >= this.left && (rect.x <= this.right && (rect.y >= this.top && rect.y <= this.bottom));
    };
    /**
     * @return {?}
     */
    Node.prototype.fa = function() {
        return new Node(this.left, this.top, this.width, this.height);
    };
    /**
     * @param {Object} rect
     * @return {?}
     */
    Node.prototype.contains = function(rect) {
        return rect instanceof Node ? this.left <= rect.left && (this.left + this.width >= rect.left + rect.width && (this.top <= rect.top && this.top + this.height >= rect.top + rect.height)) : rect.x >= this.left && (rect.x <= this.left + this.width && (rect.y >= this.top && rect.y <= this.top + this.height));
    };
    var attrVals = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    /** @type {RegExp} */
    var core_rnotwhite = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
    /** @type {RegExp} */
    var typePattern = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
    /** @type {boolean} */
    var found = ie;
    /** @type {RegExp} */
    var re = /#|$/;
    /** @type {function ((Object|string)): ?} */
    var sha1 = parseURL;
    var failuresLink = {
        enablejsapi: 1
    };
    var passesLink = {};
    var params = {
        allowscriptaccess: "always",
        allowfullscreen: "true",
        bgcolor: "#000000"
    };
    self = Buffer.prototype;
    /** @type {string} */
    self.url = "";
    /** @type {string} */
    self.urlV8 = "";
    /** @type {string} */
    self.urlV9As2 = "";
    /** @type {string} */
    self.minVersion = "8.0.0";
    /** @type {null} */
    self.fallback = value;
    /** @type {null} */
    self.fallbackMessage = value;
    /** @type {boolean} */
    self.html5 = t;
    /**
     * @return {?}
     */
    self.fa = function() {
        var value2 = new Buffer;
        var i;
        for (i in this) {
            var el = this[i];
            value2[i] = "object" == typeOf(el) ? attrs(el) : el;
        }
        return value2;
    };
    has(term);
    self = term.prototype;
    /** @type {number} */
    self.T = 0;
    /** @type {number} */
    self.Ua = 0;
    /** @type {number} */
    self.Db = 0;
    /** @type {string} */
    self.Mc = "";
    /** @type {number} */
    self.Aa = 0;
    /**
     * @param {Function} callback
     * @return {undefined}
     */
    self.load = function(callback) {
        if (3 <= this.Aa) {
            callback(this);
        } else {
            this.b.push(callback);
        }
    };
    /**
     * @return {?}
     */
    self.getVersion = function() {
        return [this.T, this.Ua, this.Db];
    };
    /**
     * @param {Array} strings
     * @return {undefined}
     */
    self.Qd = function(strings) {
        if (strings) {
            strings = strings.split(" ")[1].split(",");
            /** @type {Array} */
            strings = [parseInt(strings[0], 10) || 0, parseInt(strings[1], 10) || 0, parseInt(strings[2], 10) || 0];
        } else {
            /** @type {Array} */
            strings = [0, 0, 0];
        }
        this.T = strings[0];
        this.Ua = strings[1];
        this.Db = strings[2];
        /** @type {number} */
        this.Aa = 2;
        if (0 < this.T) {
            parseObject(this);
        } else {
            parse(this);
        }
    };
    /** @type {boolean} */
    recordType.prototype.K = t;
    /**
     * @return {undefined}
     */
    recordType.prototype.la = function() {
        if (!this.K) {
            /** @type {boolean} */
            this.K = TRUE;
            this.S();
        }
    };
    /**
     * @return {undefined}
     */
    recordType.prototype.S = function() {
        if (this.j) {
            ret.apply(value, this.j);
        }
        if (this.ca) {
            for (; this.ca.length;) {
                this.ca.shift()();
            }
        }
    };
    factory(_this, recordType);
    self = _this.prototype;
    /** @type {number} */
    self.zd = 1;
    /** @type {number} */
    self.Ub = 0;
    /**
     * @param {string} key
     * @param {Function} b
     * @param {Document} num
     * @return {?}
     */
    self.wa = function(key, b, num) {
        var vals = this.V[key];
        if (!vals) {
            /** @type {Array} */
            vals = this.V[key] = [];
        }
        var i = this.zd;
        /** @type {string} */
        this.b[i] = key;
        /** @type {Function} */
        this.b[i + 1] = b;
        /** @type {Document} */
        this.b[i + 2] = num;
        this.zd = i + 3;
        vals.push(i);
        return i;
    };
    /**
     * @param {(number|string)} message
     * @param {?} f
     * @param {?} l
     * @return {?}
     */
    self.Rd = function(message, f, l) {
        if (message = this.V[message]) {
            var b = this.b;
            if (message = method(message, function(no) {
                    return b[no + 1] == f && b[no + 2] == l;
                })) {
                return this.Tb(message);
            }
        }
        return t;
    };
    /**
     * @param {number} result
     * @return {?}
     */
    self.Tb = function(result) {
        if (0 != this.Ub) {
            return this.c || (this.c = []), this.c.push(result), t;
        }
        var unlock = this.b[result];
        if (unlock) {
            var cache = this.V[unlock];
            if (cache) {
                assertEqual(cache, result);
            }
            delete this.b[result];
            delete this.b[result + 1];
            delete this.b[result + 2];
        }
        return !!unlock;
    };
    /**
     * @param {string} item
     * @param {?} var_args
     * @return {?}
     */
    self.xa = function(item, var_args) {
        var a = this.V[item];
        if (a) {
            this.Ub++;
            var args = makeArray(arguments, 1);
            /** @type {number} */
            var j = 0;
            var al = a.length;
            for (; j < al; j++) {
                var arr = a[j];
                this.b[arr + 1].apply(this.b[arr + 2], args);
            }
            this.Ub--;
            if (this.c && 0 == this.Ub) {
                for (; a = this.c.pop();) {
                    this.Tb(a);
                }
            }
            return 0 != j;
        }
        return t;
    };
    /**
     * @param {string} key
     * @return {undefined}
     */
    self.clear = function(key) {
        if (key) {
            var iter = this.V[key];
            if (iter) {
                slice(iter, this.Tb, this);
                delete this.V[key];
            }
        } else {
            /** @type {number} */
            this.b.length = 0;
            this.V = {};
        }
    };
    /**
     * @param {(number|string)} n
     * @return {?}
     */
    self.Z = function(n) {
        if (n) {
            var c = this.V[n];
            return c ? c.length : 0;
        }
        /** @type {number} */
        n = 0;
        for (c in this.V) {
            n += this.Z(c);
        }
        return n;
    };
    /**
     * @return {undefined}
     */
    self.S = function() {
        _this.J.S.call(this);
        delete this.b;
        delete this.V;
        delete this.c;
    };
    var copies = apply("yt.pubsub.instance_") || new _this;
    /** @type {function (string, Function, Document): ?} */
    _this.prototype.subscribe = _this.prototype.wa;
    /** @type {function (number): ?} */
    _this.prototype.unsubscribeByKey = _this.prototype.Tb;
    /** @type {function (string, ?): ?} */
    _this.prototype.publish = _this.prototype.xa;
    /** @type {function (): undefined} */
    _this.prototype.clear = _this.prototype.clear;
    run("yt.pubsub.instance_", copies);
    var vvar;
    var pf = documentElement && 8 <= document.documentMode || (firefox && css("1.9.2") || ie && css("532.1"));
    /** @type {boolean} */
    var of = documentElement && !pf;
    /**
     * @param {?} value
     * @param {string} obj
     * @return {undefined}
     */
    Map.prototype.X = function(value, obj) {
        if (this.f) {
            off(this.f);
            delete this.f;
        }
        if (this.l) {
            readdir(this.l);
            delete this.l;
        }
        if (value) {
            this.b = getHash(this);
            if (of) {
                var b = this.j.contentWindow.document.body;
                if (!b || !b.innerHTML) {
                    save(this, this.b);
                }
            }
            if (!obj) {
                this.c(this.b);
            }
            if (pf) {
                this.f = addEvent(this.K, "hashchange", this.C);
            } else {
                this.l = play(this.C, 200);
            }
        }
    };
    /**
     * @return {undefined}
     */
    Map.prototype.ca = function() {
        if (of) {
            var pdataCur;
            pdataCur = (pdataCur = this.j.contentWindow.document.body) ? _decode(pdataCur.innerHTML.substring(1)) : "";
            if (pdataCur != this.b) {
                this.b = pdataCur;
                regExpEscape(this, pdataCur);
                this.c(pdataCur);
            } else {
                pdataCur = getHash(this);
                if (pdataCur != this.b) {
                    this.b = pdataCur;
                    save(this, pdataCur);
                    this.c(pdataCur);
                }
            }
        } else {
            pdataCur = getHash(this);
            if (pdataCur != this.b) {
                this.b = pdataCur;
                this.c(pdataCur);
            }
        }
    };
    /**
     * @param {RegExp} regex
     * @param {string} var_args
     * @param {?} vec0
     * @return {undefined}
     */
    Map.prototype.add = function(regex, var_args, vec0) {
        /** @type {string} */
        this.b = "" + regex;
        if (of) {
            save(this, regex);
        }
        regExpEscape(this, regex);
        if (!vec0) {
            this.c(this.b);
        }
    };
    new $Node;
    /**
     * @return {?}
     */
    $Node.prototype.get = function() {
        return this.b;
    };
    var vf = !!window.history.pushState && (!ie || ie && css("534.11"));
    /**
     * @param {?} value
     * @param {string} obj
     * @return {undefined}
     */
    Element.prototype.Q = function(value, obj) {
        if (this.j) {
            off(this.j);
            delete this.j;
        }
        if (this.l) {
            readdir(this.l);
            delete this.l;
        }
        if (value) {
            if (vf) {
                this.b = this.c.href;
                if (!obj) {
                    this.e(this.b);
                }
                this.j = addEvent(this.f, "popstate", this.C);
            }
        }
    };
    /**
     * @param {string} value
     * @return {undefined}
     */
    Element.prototype.K = function(value) {
        var pdataCur = this.c.href;
        if ((value = value.state) || pdataCur != this.b) {
            this.b = pdataCur;
            this.e(pdataCur, value);
        }
    };
    /**
     * @param {?} pdataCur
     * @param {string} walkers
     * @param {?} vec0
     * @return {undefined}
     */
    Element.prototype.add = function(pdataCur, walkers, vec0) {
        if (pdataCur || walkers) {
            pdataCur = pdataCur || this.c.href;
            this.f.history.pushState(walkers, "", pdataCur);
            this.b = pdataCur;
            if (!vec0) {
                this.e(pdataCur, walkers);
            }
        }
    };
    /**
     * @param {?} pdataCur
     * @param {string} walkers
     * @param {?} all
     * @return {undefined}
     */
    Element.prototype.replace = function(pdataCur, walkers, all) {
        if (pdataCur || walkers) {
            pdataCur = pdataCur || this.c.href;
            this.f.history.replaceState(walkers, "", pdataCur);
            this.b = pdataCur;
            if (!all) {
                this.e(pdataCur, walkers);
            }
        }
    };
    var internalValues = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    };
    /** @type {RegExp} */
    var trimEndRegexp = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    /** @type {null} */
    var NewXMLHttpRequest = value;
    if ("undefined" != typeof XMLHttpRequest) {
        /**
         * @return {?}
         */
        NewXMLHttpRequest = function() {
            return new XMLHttpRequest;
        };
    } else {
        if ("undefined" != typeof ActiveXObject) {
            /**
             * @return {?}
             */
            NewXMLHttpRequest = function() {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }
    }
    var rule = {
        html5_ajax: "action_get_html5_token",
        watch_actions_ajax: "action_get_watch_actions_token",
        addto_ajax: "action_get_wl_token"
    };
    var special = {
        html5_ajax: "html5_ajax_token",
        watch_actions_ajax: "watch_actions_ajax_token",
        addto_ajax: "addto_ajax_token"
    };
    var _handlers = {};
    var $cookies = {};
    var modules = {};
    var collection;
    var useInteractive;
    var removeLastBr;
    var removePreviousBr;
    var m2;
    var m1;
    var YY_START;
    /** @type {boolean} */
    YY_START = m1 = m2 = removePreviousBr = removeLastBr = useInteractive = collection = t;
    var ua = iter();
    if (ua) {
        if (-1 != ua.indexOf("Firefox")) {
            /** @type {boolean} */
            collection = TRUE;
        } else {
            if (-1 != ua.indexOf("Camino")) {
                /** @type {boolean} */
                useInteractive = TRUE;
            } else {
                if (-1 != ua.indexOf("iPhone") || -1 != ua.indexOf("iPod")) {
                    /** @type {boolean} */
                    removeLastBr = TRUE;
                } else {
                    if (-1 != ua.indexOf("iPad")) {
                        /** @type {boolean} */
                        removePreviousBr = TRUE;
                    } else {
                        if (-1 != ua.indexOf("Android")) {
                            /** @type {boolean} */
                            m2 = TRUE;
                        } else {
                            if (-1 != ua.indexOf("Chrome")) {
                                /** @type {boolean} */
                                m1 = TRUE;
                            } else {
                                if (-1 != ua.indexOf("Safari")) {
                                    /** @type {boolean} */
                                    YY_START = TRUE;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /** @type {boolean} */
    var iteratee = collection;
    /** @type {boolean} */
    var hasInteractive = useInteractive;
    /** @type {boolean} */
    var program = removeLastBr;
    /** @type {boolean} */
    var inverse = removePreviousBr;
    /** @type {boolean} */
    var leading_space = m2;
    /** @type {boolean} */
    var whole_match = m1;
    /** @type {boolean} */
    var YYSTATE = YY_START;
    var headers = {};
    /** @type {number} */
    var nextGuid = 0;
    var handlers = {};
    /** @type {boolean} */
    var supportsTouch = "ontouchstart" in document;
    addEvent(document, "blur", nativeHandler, TRUE);
    addEvent(document, "change", nativeHandler, TRUE);
    addEvent(document, "click", nativeHandler);
    addEvent(document, "focus", nativeHandler, TRUE);
    addEvent(document, "mouseover", nativeHandler);
    addEvent(document, "mouseout", nativeHandler);
    addEvent(document, "mousedown", nativeHandler);
    addEvent(document, "keydown", nativeHandler);
    addEvent(document, "keyup", nativeHandler);
    addEvent(document, "keypress", nativeHandler);
    addEvent(document, "cut", nativeHandler);
    addEvent(document, "paste", nativeHandler);
    if (supportsTouch) {
        addEvent(document, "touchstart", nativeHandler);
        addEvent(document, "touchend", nativeHandler);
        addEvent(document, "touchcancel", nativeHandler);
    }
    var entities = window.yt && (window.yt.uix && window.yt.uix.widgets_) || {};
    run("yt.uix.widgets_", entities);
    self = orig.prototype;
    /** @type {boolean} */
    self.Nc = !!eval("/*@cc_on!@*/false");
    /**
     * @return {?}
     */
    self.Tc = function() {
        return TRUE;
    };
    /**
     * @param {?} key
     * @param {string} optgroup
     * @param {(boolean|number|string)} val
     * @return {undefined}
     */
    self.ga = function(key, optgroup, val) {
        var self = this.getData(key, optgroup);
        if (self && (self = apply(self))) {
            var args = makeArray(arguments, 2);
            toArray(args, 0, 0, key);
            self.apply(value, args);
        }
    };
    /**
     * @param {?} data
     * @param {string} name
     * @return {?}
     */
    self.getData = function(data, name) {
        return equal(data, name);
    };
    /**
     * @param {?} packet
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    self.setData = function(packet, name, value) {
        data(packet, name, value);
    };
    /**
     * @param {?} s
     * @return {?}
     */
    self.L = function(s) {
        return index(s, get(this));
    };
    factory(target, orig);
    has(target);
    self = target.prototype;
    /** @type {string} */
    self.H = "button";
    /**
     * @return {undefined}
     */
    self.register = function() {
        removeEvent(this, "click", this.Lg);
        removeEvent(this, "keydown", this.Mg);
        removeEvent(this, "keypress", this.Ng);
    };
    /**
     * @param {Object} data
     * @return {undefined}
     */
    self.Lg = function(data) {
        if (data && !data.disabled) {
            if (this.getData(data, "button-toggle")) {
                var value = index(data, get(this, "group"));
                if (value && this.getData(value, "button-toggle-group")) {
                    var isFunction = this.getData(value, "button-toggle-group");
                    value = expect(get(this), value);
                    var rvar = get(this, "toggled");
                    var newState = same(data, rvar);
                    slice(value, function(obj) {
                        if (obj != data || "optional" == isFunction && newState) {
                            removeClass(obj, rvar);
                        } else {
                            end(data, rvar);
                        }
                    });
                } else {
                    validate(data, get(this, "toggled"));
                }
            }
            this.click(data);
        }
    };
    /**
     * @param {?} pdataCur
     * @param {string} actual
     * @param {Object} e
     * @return {undefined}
     */
    self.Mg = function(pdataCur, actual, e) {
        if (!e.altKey && (!e.ctrlKey && !e.shiftKey && (actual = map(this, pdataCur)))) {
            /**
             * @param {?} value
             * @return {?}
             */
            var select = function(value) {
                /** @type {string} */
                var optsData = "";
                if (value.tagName) {
                    optsData = value.tagName.toLowerCase();
                }
                return "ul" == optsData || "table" == optsData;
            };
            if (select(actual)) {
                /** @type {string} */
                select = actual;
            } else {
                /** @type {Array} */
                var ok = [];
                select = textContent(actual, select, ok, TRUE) ? ok[0] : element;
            }
            if (select) {
                select = select.tagName.toLowerCase();
                var taskComplete;
                if ("ul" == select) {
                    taskComplete = this.Tg;
                } else {
                    if ("table" == select) {
                        taskComplete = this.Sg;
                    }
                }
                if (taskComplete) {
                    select = bind(taskComplete, this);
                    ok = getSize(actual);
                    if ((taskComplete = 9 == e.keyCode) || (32 == e.keyCode || 13 == e.keyCode)) {
                        if (e = activate(this, actual)) {
                            pdataCur = res(e);
                            if ("a" == pdataCur.tagName.toLowerCase()) {
                                window.location = pdataCur.href;
                            } else {
                                fireOnClick(pdataCur);
                            }
                        } else {
                            if (taskComplete) {
                                click(this, pdataCur);
                            }
                        }
                    } else {
                        if (ok) {
                            if (27 == e.keyCode) {
                                activate(this, actual);
                                click(this, pdataCur);
                            } else {
                                select(pdataCur, actual, e);
                            }
                        } else {
                            /** @type {number} */
                            actual = same(pdataCur, get(this, "reverse")) ? 38 : 40;
                            if (e.keyCode == actual) {
                                fireOnClick(pdataCur);
                                e.preventDefault();
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} x
     * @param {?} dataAndEvents
     * @param {Event} evt
     * @return {undefined}
     */
    self.Ng = function(x, dataAndEvents, evt) {
        if (!evt.altKey) {
            if (!evt.ctrlKey && !evt.shiftKey) {
                x = map(this, x);
                if (getSize(x)) {
                    evt.preventDefault();
                }
            }
        }
    };
    /**
     * @param {Element} opt_menu
     * @param {string} el
     * @param {Object} types
     * @return {undefined}
     */
    self.Sg = function(opt_menu, el, types) {
        var a = activate(this, el);
        el = createElement("table", value, el);
        var index = createElement("tr", value, el);
        index = add("td", value, index).length;
        el = add("td", value, el);
        a = number(a, el, index, types);
        if (-1 != a) {
            onConnect(this, opt_menu, el[a]);
            types.preventDefault();
        }
    };
    /**
     * @param {Element} opt_menu
     * @param {Element} el
     * @param {Object} e
     * @return {undefined}
     */
    self.Tg = function(opt_menu, el, e) {
        if (40 == e.keyCode || 38 == e.keyCode) {
            var a = activate(this, el);
            el = add("li", value, el);
            a = number(a, el, 1, e);
            onConnect(this, opt_menu, el[a]);
            e.preventDefault();
        }
    };
    /**
     * @param {Object} data
     * @return {undefined}
     */
    self.Zd = function(data) {
        if (data) {
            var node = map(this, data);
            if (node) {
                data.setAttribute("aria-pressed", "true");
                data.setAttribute("aria-expanded", "true");
                node.originalParentNode = node.parentNode;
                /** @type {Object} */
                node.activeButtonNode = data;
                node.parentNode.removeChild(node);
                if (this.getData(data, "button-has-sibling-menu")) {
                    data.parentNode.appendChild(node);
                } else {
                    getIndex(this, data).appendChild(node);
                }
                /** @type {string} */
                node.style.minWidth = data.offsetWidth - 2 + "px";
                var item = createFrame(this, data);
                if (item) {
                    document.body.appendChild(item);
                }
                item = index(data, get(this, "group"));
                /** @type {boolean} */
                var v1CompNum = !!this.getData(data, "button-menu-ignore-group");
                item = item && !v1CompNum ? item : data;
                /** @type {number} */
                v1CompNum = 5;
                /** @type {number} */
                var restoreScript = 4;
                var frame = onclick(data);
                if (same(data, get(this, "reverse"))) {
                    /** @type {number} */
                    v1CompNum = 4;
                    /** @type {number} */
                    restoreScript = 5;
                    /** @type {string} */
                    frame = frame.top + "px";
                    try {
                        /** @type {string} */
                        node.style.maxHeight = frame;
                    } catch (h) {}
                }
                if (same(data, "flip")) {
                    if (same(data, get(this, "reverse"))) {
                        /** @type {number} */
                        v1CompNum = 6;
                        /** @type {number} */
                        restoreScript = 7;
                    } else {
                        /** @type {number} */
                        v1CompNum = 7;
                        /** @type {number} */
                        restoreScript = 6;
                    }
                }
                var path;
                if (this.getData(data, "button-has-sibling-menu")) {
                    path = getOffsetParent(item);
                } else {
                    if (this.getData(data, "button-menu-root-container")) {
                        path = getIndex(this, data);
                    }
                }
                if (documentElement) {
                    if (!css("8")) {
                        /** @type {null} */
                        path = value;
                    }
                }
                var result;
                if (path) {
                    result = onclick(path);
                    result = new link(-result.top, result.left, result.top, -result.left);
                }
                path = new Rect(0, 1);
                if (same(data, get(this, "center-menu"))) {
                    path.x -= Math.round((append(node).width - append(data).width) / 2);
                }
                if (frame = createFrame(this, data)) {
                    var size = append(node);
                    /** @type {string} */
                    frame.style.width = size.width + "px";
                    /** @type {string} */
                    frame.style.height = size.height + "px";
                    position(item, v1CompNum, frame, restoreScript, path, result);
                }
                position(item, v1CompNum, node, restoreScript, path, result);
                call(node);
                this.ga(data, "button-menu-action", TRUE);
                end(data, get(this, "active"));
                result = bind(this.wg, this, data);
                node = addEvent(document, "click", result);
                result = addEvent(document, "contextmenu", result);
                this.setData(data, "button-listener", node);
                this.setData(data, "button-context-menu-listener", result);
            }
        }
    };
    /**
     * @param {?} data
     * @param {Node} e
     * @return {undefined}
     */
    self.wg = function(data, e) {
        var element = handleEvent(e);
        var current = index(element, get(this));
        if (current) {
            current = map(this, current);
            var value = map(this, data);
            if (current == value) {
                return;
            }
        }
        if (!index(element, get(this, "menu")) || (same(element, get(this, "menu-item")) || same(element, get(this, "menu-close")))) {
            if (click(this, data), (current = index(element, get(this, "menu"))) && this.getData(data, "button-menu-indicate-selected")) {
                if (value = callback(get(this, "content"), data)) {
                    text(value, getElement(element));
                }
                value = get(this, "menu-item-selected");
                if (current = callback(value, current)) {
                    removeClass(current, value);
                }
                end(element.parentNode, value);
            }
        }
    };
    /**
     * @param {Object} data
     * @return {undefined}
     */
    self.click = function(data) {
        if (map(this, data)) {
            var node = map(this, data);
            var name = removeNode(this, node);
            if (name && name != data) {
                click(this, name);
                attr(bind(this.Zd, this, data), 1);
            } else {
                if (getSize(node)) {
                    click(this, data);
                } else {
                    this.Zd(data);
                }
            }
            data.focus();
        }
        this.ga(data, "button-action");
    };
    /** @type {string} */
    var dblclick = ie ? "webkitTransitionEnd" : gecko ? "oTransitionEnd" : "transitionend";
    factory(defs, orig);
    has(defs);
    self = defs.prototype;
    /** @type {string} */
    self.H = "expander";
    /**
     * @return {undefined}
     */
    self.register = function() {
        removeEvent(this, "click", this.Yg, "head");
        removeEvent(this, "keypress", this.Zg, "head");
    };
    /**
     * @param {?} subKey
     * @return {undefined}
     */
    self.Yg = function(subKey) {
        toJSON(this, subKey);
    };
    /**
     * @param {?} subKey
     * @param {?} dataAndEvents
     * @param {?} event
     * @return {undefined}
     */
    self.Zg = function(subKey, dataAndEvents, event) {
        if (event) {
            if (13 == event.keyCode) {
                toJSON(this, subKey);
            }
        }
    };
    /**
     * @param {Object} actual
     * @return {?}
     */
    self.getBodyElement = function(actual) {
        return callback(get(this, "body"), actual);
    };
    factory(OBJ2, orig);
    has(OBJ2);
    self = OBJ2.prototype;
    /** @type {string} */
    self.H = "tooltip";
    /** @type {number} */
    self.hc = 0;
    /**
     * @return {undefined}
     */
    self.register = function() {
        removeEvent(this, "mouseover", this.Wd);
        removeEvent(this, "mouseout", this.Qc);
        removeEvent(this, "click", this.Qc);
        removeEvent(this, "touchstart", this.xg);
        removeEvent(this, "touchend", this.ae);
        removeEvent(this, "touchcancel", this.ae);
    };
    /**
     * @return {?}
     */
    self.Tc = function() {
        return !(this.Nc && 0 == cDigit.indexOf("6"));
    };
    /**
     * @param {Element} data
     * @return {undefined}
     */
    self.Wd = function(data) {
        if (!(this.hc && 1E3 > setAttribute() - this.hc)) {
            /** @type {number} */
            var v = parseInt(this.getData(data, "tooltip-hide-timer"), 10);
            if (v) {
                getAll(data, "tooltip-hide-timer");
                _(v);
            }
            v = bind(function() {
                show(this, data);
                getAll(data, "tooltip-show-timer");
            }, this);
            /** @type {number} */
            var k = parseInt(this.getData(data, "tooltip-show-delay"), 10) || 0;
            v = attr(v, k);
            this.setData(data, "tooltip-show-timer", v.toString());
            if (data.title) {
                this.setData(data, "tooltip-text", data.title);
                /** @type {string} */
                data.title = "";
            }
        }
    };
    /**
     * @param {Element} data
     * @return {undefined}
     */
    self.Qc = function(data) {
        /** @type {number} */
        var val = parseInt(this.getData(data, "tooltip-show-timer"), 10);
        if (val) {
            _(val);
            getAll(data, "tooltip-show-timer");
        }
        val = bind(function() {
            evalScript(this, data);
            getAll(data, "tooltip-hide-timer");
        }, this);
        val = attr(val, 50);
        this.setData(data, "tooltip-hide-timer", val.toString());
        if (val = this.getData(data, "tooltip-text")) {
            data.title = val;
        }
    };
    /**
     * @param {Element} queue
     * @param {boolean} elem
     * @param {Event} orig
     * @return {undefined}
     */
    self.xg = function(queue, elem, orig) {
        /** @type {number} */
        this.hc = 0;
        queue = doSteps(elem, get(this), orig.changedTouches[0].target);
        this.Wd(queue);
    };
    /**
     * @param {Element} queue
     * @param {boolean} elem
     * @param {Event} orig
     * @return {undefined}
     */
    self.ae = function(queue, elem, orig) {
        /** @type {number} */
        this.hc = setAttribute();
        queue = doSteps(elem, get(this), orig.changedTouches[0].target);
        this.Qc(queue);
    };
    factory(curValue, orig);
    has(curValue);
    self = curValue.prototype;
    /** @type {string} */
    self.H = "overlay";
    /**
     * @return {undefined}
     */
    self.register = function() {
        removeEvent(this, "click", this.Ic, "target");
        removeEvent(this, "click", this.cc, "close");
    };
    /**
     * @param {?} key
     * @return {undefined}
     */
    self.Ic = function(key) {
        if (key = this.L(key)) {
            var b = get(this, "fg");
            var el = require(b);
            if (!el) {
                var ret = callback(get(this, "content"), key);
                if (ret) {
                    /** @type {Element} */
                    el = document.createElement("div");
                    el.id = b;
                    el.className = b;
                    b = this.getData(key, "overlay-hidden") || "";
                    data(el, "overlay-hidden", b);
                    b = this.getData(key, "overlay-class") || "";
                    end(el, b);
                    /** @type {Element} */
                    var element = document.createElement("div");
                    element.className = get(this, "fg-content");
                    /** @type {Element} */
                    b = document.createElement("div");
                    var tmp = get(this, "base");
                    b.id = tmp;
                    end(b, tmp);
                    var a = get(this, "bg");
                    /** @type {Element} */
                    tmp = document.createElement("div");
                    tmp.id = a;
                    tmp.className = a;
                    /** @type {string} */
                    tmp.style.height = onIframeLoad() + "px";
                    /** @type {Element} */
                    a = document.createElement("span");
                    end(a, get(this, "align"));
                    b.appendChild(a);
                    element.innerHTML = ret.innerHTML;
                    ret = add("iframe", value, element);
                    slice(ret, function(id) {
                        var callback = this.getData(id, "onload");
                        if (callback) {
                            if (callback = apply(callback)) {
                                addEvent(id, "load", callback);
                            }
                            id.src = this.getData(id, "src") || id.src;
                        }
                    }, this);
                    el.appendChild(element);
                    /** @type {NodeList} */
                    ret = document.getElementsByTagName("embed");
                    /** @type {NodeList} */
                    element = document.getElementsByTagName("object");
                    a = bind(function(data) {
                        var udataCur = data.style.visibility || "visible";
                        if ("hidden" != udataCur) {
                            this.setData(data, "overlay-hidden", "true");
                            this.setData(data, "overlay-visibility-value", udataCur);
                            /** @type {string} */
                            data.style.visibility = "hidden";
                        }
                    }, this);
                    slice(ret, a);
                    slice(element, a);
                    b.appendChild(el);
                    document.body.appendChild(tmp);
                    document.body.appendChild(b);
                    if (!this.getData(key, "disable-shortcuts")) {
                        el = bind(function(event) {
                            if (same(event.target, get(this, "base"))) {
                                this.cc();
                            }
                        }, this);
                        addEvent(b, "click", el);
                        addEvent(document, "keydown", bind(this.Sd, this));
                    }
                    this.ga(key, "overlay-shown");
                }
            }
        }
    };
    /**
     * @return {undefined}
     */
    self.cc = function() {
        var value = get(this, "bg");
        var base = require(get(this, "fg"));
        if (base) {
            if (same(base, get(this, "unclosable"))) {
                return;
            }
            split(base);
            document.body.removeChild(base.parentNode);
        }
        if (value = require(value)) {
            document.body.removeChild(value);
        }
        /** @type {NodeList} */
        value = document.getElementsByTagName("embed");
        /** @type {NodeList} */
        var index = document.getElementsByTagName("object");
        var walk = bind(function(node) {
            if (this.getData(node, "overlay-hidden")) {
                node.style.visibility = this.getData(node, "overlay-visibility-value");
                getAll(node, "overlay-hidden");
            }
        }, this);
        slice(value, walk);
        slice(index, walk);
        connect(document, "keydown", bind(this.Sd, this));
        if (base) {
            this.ga(base, "overlay-hidden");
        }
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    self.Sd = function(event) {
        if (27 == event.keyCode) {
            this.cc();
        }
    };
    /** @type {Array} */
    var memory = ["FL", "LL", "QL", "SV", "WL"];
    self = s.prototype;
    /**
     * @param {string} range
     * @return {?}
     */
    self.isEqual = function(range) {
        return this.e != range.e ? t : this.Na() == range.Na();
    };
    /**
     * @param {?} b
     * @return {undefined}
     */
    self.Fc = function(b) {
        this.nb = b.nb || "";
        this.b = b.da();
        this.ka = b.ka;
        this.$a = b.$a;
        this.mb = b.mb;
        this.lb = b.lb;
        this.Gb = b.Gb;
    };
    /**
     * @return {?}
     */
    self.ya = function() {
        return this.e;
    };
    /**
     * @return {?}
     */
    self.Na = function() {
        return this.e + (this.P || "");
    };
    /**
     * @param {string} index
     * @return {?}
     */
    self.Lc = function(index) {
        var fixture = eq(this);
        if (!fixture.length) {
            return "";
        }
        index = this.da() + index;
        if (index >= fixture.length) {
            index %= fixture.length;
        }
        return fixture[index];
    };
    /**
     * @return {?}
     */
    self.za = function() {
        return deepEqual(this.M);
    };
    /**
     * @param {?} k
     * @return {?}
     */
    self.getVideoData = function(k) {
        return this.ob[k] || {};
    };
    /**
     * @return {?}
     */
    self.Z = function() {
        return this.za().length;
    };
    /**
     * @return {?}
     */
    self.da = function() {
        return this.Y() ? some(partial(this), function(dataAndEvents) {
            return dataAndEvents.Ec == this.b;
        }, this) : this.b;
    };
    /**
     * @return {?}
     */
    self.Y = function() {
        return 0 < this.ka;
    };
    /**
     * @return {?}
     */
    self.va = function() {
        return 0 <= this.b;
    };
    /**
     * @return {?}
     */
    self.ub = function() {
        return !!this.Za;
    };
    /**
     * @return {?}
     */
    self.Bc = function() {
        return t;
    };
    /**
     * @return {?}
     */
    self.bb = function() {
        return t;
    };
    /**
     * @return {undefined}
     */
    self.clear = function() {
        this.ee();
        splice(this);
    };
    /**
     * @param {(Object|string)} key
     * @return {?}
     */
    self.removeItem = function(key) {
        if (this.Y()) {
            key = partial(this)[key].Ec;
        }
        var value = this.za()[key];
        this.yd(key);
        if (this.b > key) {
            this.b -= 1;
        } else {
            if (this.b == key) {
                /** @type {number} */
                this.b = -1;
            }
        }
        splice(this);
        return value;
    };
    /**
     * @param {number} k
     * @return {undefined}
     */
    self.yd = function(k) {
        /** @type {boolean} */
        this.Za = TRUE;
        var cs = this.M[k];
        isKind(this.M, k);
        i(this.Yb(), {
            format: "XML",
            method: "POST",
            B: {
                video_ids: cs,
                session_token: reset("addto_ajax") || "",
                playlist_id: this.P || "",
                index: k
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                this.Fa = obj.html_content;
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                this.Wa = obj.error_message || replace("ERROR_OCCURRED");
            },
            /**
             * @return {undefined}
             */
            R: function() {
                /** @type {boolean} */
                this.Za = t;
                splice(this);
            },
            z: this
        });
    };
    /**
     * @param {Function} callback
     * @return {undefined}
     */
    self.load = function(callback) {
        if (this.f) {
            if (!this.Za) {
                val(this);
            }
        }
        listener(this, callback);
    };
    factory(ext, s);
    /**
     * @return {?}
     */
    ext.prototype.Yb = function() {
        return "/addto_ajax?action_delete_from_favorites=1";
    };
    factory(Renderer, s);
    /**
     * @return {?}
     */
    Renderer.prototype.Yb = function() {
        return "/addto_ajax?action_delete_from_liked=1";
    };
    factory(initial, s);
    /**
     * @return {?}
     */
    initial.prototype.Bc = function() {
        return !!this.ma;
    };
    /**
     * @return {?}
     */
    initial.prototype.bb = function() {
        return !!this.ma;
    };
    factory(exports, s);
    self = exports.prototype;
    /**
     * @param {Array} pattern
     * @return {undefined}
     */
    self.Jc = function(pattern) {
        deepMatches(this.M, pattern);
        i("/addto_ajax", {
            format: "XML",
            method: "POST",
            n: {
                action_add_to_playlist: 1
            },
            B: {
                playlist_id: this.P,
                video_ids: pattern.join(","),
                session_token: reset("addto_ajax")
            },
            /**
             * @return {undefined}
             */
            onError: function() {
                this.Wa = replace("ERROR_OCCURRED");
                splice(this);
            },
            z: this
        });
    };
    /**
     * @return {?}
     */
    self.Yb = function() {
        return "/addto_ajax?action_delete_from_playlist=1";
    };
    /**
     * @return {undefined}
     */
    self.ee = function() {
        var cnl = this.M.length;
        matchArray(this.M);
        i("/addto_ajax", {
            format: "XML",
            method: "POST",
            n: {
                action_clear_playlist: 1,
                list_length: cnl,
                type: this.e
            },
            B: {
                playlist_id: this.P,
                session_token: reset("addto_ajax")
            },
            /**
             * @return {undefined}
             */
            onError: function() {
                this.Wa = replace("ERROR_OCCURRED");
                splice(this);
            },
            z: this
        });
    };
    /**
     * @param {number} key
     * @param {number} initial
     * @return {undefined}
     */
    self.vd = function(key, initial) {
        var act = this.M[key];
        isKind(this.M, key);
        toArray(this.M, initial, 0, act);
        var y = deepEqual(this.M);
        i("/addto_ajax?action_move_playlist_video=1", {
            format: "XML",
            method: "POST",
            B: {
                video_ids: act,
                playlist_id: this.P,
                source_index: key,
                target_index: initial,
                session_token: reset("addto_ajax")
            },
            /**
             * @return {undefined}
             */
            onError: function() {
                var x;
                a: {
                    if (x = this.M, !isObject(x) || (!isObject(y) || x.length != y.length)) {
                        /** @type {boolean} */
                        x = t;
                    } else {
                        var l = x.length;
                        /** @type {number} */
                        var i = 0;
                        for (; i < l; i++) {
                            if (x[i] !== y[i]) {
                                /** @type {boolean} */
                                x = t;
                                break a;
                            }
                        }
                        /** @type {boolean} */
                        x = TRUE;
                    }
                }
                if (x) {
                    isKind(this.M, initial);
                    toArray(this.M, key, 0, act);
                }
                this.Wa = replace("ERROR_OCCURRED");
                splice(this);
            },
            z: this
        });
    };
    /**
     * @return {?}
     */
    self.bb = function() {
        return !!this.ma;
    };
    factory(Test, s);
    self = Test.prototype;
    /**
     * @param {?} mapper
     * @return {undefined}
     */
    self.Fc = function(mapper) {
        Test.J.Fc.call(this, mapper);
        /** @type {boolean} */
        this.f = t;
    };
    /**
     * @return {?}
     */
    self.za = function() {
        return evaluate();
    };
    /**
     * @param {Array} pattern
     * @return {undefined}
     */
    self.Jc = function(pattern) {
        var val = evaluate();
        deepMatches(val, pattern);
        kindOf(val);
    };
    /**
     * @param {?} val
     * @return {undefined}
     */
    self.yd = function(val) {
        var suiteView = eq(this)[val];
        val = evaluate();
        suiteView = assert(val, suiteView);
        if (0 <= suiteView) {
            isKind(val, suiteView);
            kindOf(val);
        }
    };
    /**
     * @return {undefined}
     */
    self.ee = function() {
        kindOf([]);
    };
    /**
     * @param {number} methodName
     * @param {(Object|boolean|number|string)} initial
     * @return {undefined}
     */
    self.vd = function(methodName, initial) {
        var val = evaluate();
        var func = val[methodName];
        isKind(val, methodName);
        toArray(val, initial, 0, func);
        kindOf(val);
    };
    /**
     * @return {?}
     */
    self.bb = function() {
        return !!this.ma;
    };
    factory(plugin, s);
    /**
     * @param {string} result
     * @return {undefined}
     */
    plugin.prototype.load = function(result) {
        plugin.J.load.call(this, result);
        if (!this.ub()) {
            if (this.va()) {
                result = eq(this);
                if (this.da() >= result.length - 1) {
                    val(this, value, {
                        load_more: "1"
                    });
                }
            }
        }
    };
    /**
     * @return {?}
     */
    plugin.prototype.Yb = function() {
        return "/addto_ajax?action_delete_from_station=1";
    };
    /** @type {string} */
    var token = "";
    var htmlEscapes = {
        "context-item-actionuser": "actionuser",
        "context-item-actionverb": "actionverb",
        "context-item-count": "count",
        "context-item-id": "id",
        "context-item-title": "title",
        "context-item-user": "user",
        "context-item-videos": "videos"
    };
    var which = {
        "context-item-actionuser": "actionuser",
        "context-item-actionverb": "actionverb",
        "context-item-id": "id",
        "context-item-time": "time",
        "context-item-title": "title",
        "context-item-user": "user",
        "context-item-views": "views"
    };
    /**
     * @param {string} obj
     * @return {?}
     */
    GameObject.prototype.stringify = function(obj) {
        return h(this.b, obj);
    };
    /**
     * @param {string} obj
     * @return {?}
     */
    _overlap_interval.prototype.stringify = function(obj) {
        return global.JSON.stringify(obj, this.b);
    };
    factory(instance, async);
    /**
     * @return {?}
     */
    instance.prototype.Z = function() {
        /** @type {number} */
        var tz = 0;
        param(this.jb(TRUE), function() {
            tz++;
        });
        return tz;
    };
    /**
     * @return {undefined}
     */
    instance.prototype.clear = function() {
        var data;
        data = this.jb(TRUE);
        if (isObject(data)) {
            data = deepEqual(data);
        } else {
            data = parseJSON(data);
            /** @type {Array} */
            var arr = [];
            param(data, function(chunk) {
                arr.push(chunk);
            });
            /** @type {Array} */
            data = arr;
        }
        var selfObj = this;
        slice(data, function(key) {
            selfObj.remove(key);
        });
    };
    factory(rgb, instance);
    self = rgb.prototype;
    /**
     * @param {string} str
     * @return {?}
     */
    self.get = function(str) {
        str = this.b.getItem(str);
        if (!isString(str)) {
            if (str !== value) {
                log("Storage mechanism: Invalid value was encountered");
            }
        }
        return str;
    };
    /**
     * @param {string} keepData
     * @return {undefined}
     */
    self.remove = function(keepData) {
        this.b.removeItem(keepData);
    };
    /**
     * @return {?}
     */
    self.Z = function() {
        return this.b.length;
    };
    /**
     * @param {boolean} duration
     * @return {?}
     */
    self.jb = function(duration) {
        /** @type {number} */
        var i = 0;
        var data = this.b;
        var ret = new Collection;
        /**
         * @return {?}
         */
        ret.b = function() {
            if (i >= data.length) {
                log(udataCur);
            }
            var href;
            href = data.key(i++);
            if (duration) {
                return href;
            }
            href = data.getItem(href);
            if (!isString(href)) {
                log("Storage mechanism: Invalid value was encountered");
            }
            return href;
        };
        return ret;
    };
    /**
     * @return {undefined}
     */
    self.clear = function() {
        this.b.clear();
    };
    factory(reversed, rgb);
    self = tooltip.prototype;
    /** @type {null} */
    self.zb = value;
    /** @type {null} */
    self.Bd = value;
    /**
     * @param {string} key
     * @param {string} a
     * @return {undefined}
     */
    self.Oa = function(key, a) {
        if (isFunction(a)) {
            var str = h(this.Bd, a);
            try {
                this.zb.b.setItem(key, str);
            } catch (d) {
                log("Storage mechanism: Quota exceeded");
            }
        } else {
            this.zb.remove(key);
        }
    };
    /**
     * @param {string} k
     * @return {?}
     */
    self.get = function(k) {
        k = this.zb.get(k);
        if (k !== value) {
            try {
                return parseQuery(k);
            } catch (b) {
                log("Storage: Invalid value was encountered");
            }
        }
    };
    /**
     * @param {string} key
     * @return {undefined}
     */
    self.remove = function(key) {
        this.zb.remove(key);
    };
    factory(c, tooltip);
    /**
     * @param {string} opacity
     * @param {?} e
     * @return {undefined}
     */
    c.prototype.Oa = function(opacity, e) {
        c.J.Oa.call(this, opacity, _error(e));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    c.prototype.b = function(value) {
        value = c.J.get.call(this, value);
        if (!isFunction(value) || value instanceof Object) {
            return value;
        }
        log("Storage: Invalid value was encountered");
    };
    /**
     * @param {?} pdataCur
     * @return {?}
     */
    c.prototype.get = function(pdataCur) {
        if (pdataCur = this.b(pdataCur)) {
            pdataCur = pdataCur.data;
            if (!isFunction(pdataCur)) {
                log("Storage: Invalid value was encountered");
            }
        } else {
            pdataCur = element;
        }
        return pdataCur;
    };
    factory(m, c);
    /**
     * @param {string} opacity
     * @param {Object} data
     * @param {number} key
     * @return {undefined}
     */
    m.prototype.Oa = function(opacity, data, key) {
        if (data = _error(data)) {
            if (key) {
                if (key < setAttribute()) {
                    m.prototype.remove.call(this, opacity);
                    return;
                }
                /** @type {number} */
                data.expiration = key;
            }
            /** @type {number} */
            data.creation = setAttribute();
        }
        m.J.Oa.call(this, opacity, data);
    };
    /**
     * @param {?} value
     * @param {string} obj
     * @return {?}
     */
    m.prototype.b = function(value, obj) {
        var result = m.J.b.call(this, value);
        if (result) {
            var n;
            if (n = !obj) {
                n = result.creation;
                var expiration = result.expiration;
                /** @type {boolean} */
                n = !!expiration && expiration < setAttribute() || !!n && n > setAttribute();
            }
            if (n) {
                m.prototype.remove.call(this, value);
            } else {
                return result;
            }
        }
    };
    factory(rest, m);
    var JSON = window.JSON ? new _overlap_interval : new GameObject;
    var model = new rest(new reversed);
    var context = apply("yt.timing") || {};
    run("yt.timing", context);
    /** @type {number} */
    context.nj = 0;
    /** @type {number} */
    context.mj = 0;
    /**
     * @param {string} name
     * @param {number} value
     * @return {undefined}
     */
    context.Rc = function(name, value) {
        var old = context.timer || {};
        old[name] = value ? value : setAttribute();
        context.timer = old;
    };
    /**
     * @param {string} key
     * @param {?} t
     * @return {undefined}
     */
    context.info = function(key, t) {
        var parent = context.info_args || {};
        parent[key] = t;
        context.info_args = parent;
    };
    /**
     * @param {?} time
     * @return {undefined}
     */
    context.ic = function(time) {
        time = time || push("TIMING_ACTION");
        var item = context.timer || {};
        var query = context.info_args || {};
        var i = item.start;
        /** @type {string} */
        var expiresOutput = "";
        /** @type {Array} */
        var assigns = [];
        /** @type {Array} */
        var tagNameArr = [];
        delete item.start;
        if (context.srt) {
            /** @type {string} */
            expiresOutput = "&srt=" + context.srt;
        }
        if (item.aft) {
            if (item.plev) {
                /** @type {number} */
                item.aft = Math.min(item.aft, item.plev);
            }
        }
        var part;
        for (part in item) {
            /** @type {number} */
            var vvar = Math.max(Math.round(item[part] - i), 0);
            assigns.push(part + "." + vvar);
        }
        for (part in query) {
            tagNameArr.push(part + "=" + query[part]);
        }
        if (item.vr) {
            if (item.gv) {
                assigns.push("vl." + Math.round(item.vr - item.gv));
            }
        }
        var val;
        if (!item.aft && (item.vr && item.cl)) {
            /** @type {number} */
            val = item.cl > item.vr ? item.cl - i : item.vr - i;
        } else {
            if (!item.aft && item.vr) {
                /** @type {number} */
                val = item.vr - i;
            } else {
                if (!item.aft) {
                    /** @type {number} */
                    val = item.ol - i;
                }
            }
        }
        assigns.push("aft." + Math.max(Math.round(val), 0));
        loadImage(["https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", "?v=2&s=youtube&action=", time, expiresOutput, "&", tagNameArr.join("&"), "&rt=", assigns.join(",")].join(""));
    };
    /**
     * @return {undefined}
     */
    context.Sc = function() {
        var evtName = push("TIMING_ACTION");
        var item = context.timer || {};
        if (evtName) {
            if (item.start) {
                if (context.wff && (-1 != evtName.indexOf("ajax") && (item.vr && item.cl))) {
                    context.ic();
                } else {
                    if (context.wff && (-1 == evtName.indexOf("ajax") && item.vr)) {
                        context.ic();
                    } else {
                        if (!context.wff) {
                            if (item.ol || item.aft) {
                                context.ic();
                            }
                        }
                    }
                }
            }
        }
    };
    var child = {};
    /** @type {number} */
    var minus = 0;
    /** @type {number} */
    var fi = 0;
    /** @type {number} */
    var previous = 0;
    /** @type {boolean} */
    var readyListenedTo = t;
    /** @type {Array} */
    var aDecl = [];
    /** @type {function (): undefined} */
    fix[" "] = modId;
    /** @type {boolean} */
    var forward = !documentElement || documentElement && 9 <= $Q;
    /** @type {boolean} */
    var ui = documentElement && !css("9");
    if (!!ie) {
        css("528");
    }
    if (!(firefox && css("1.9b"))) {
        if (!(documentElement && css("8"))) {
            if (!(gecko && css("9.5"))) {
                if (ie) {
                    css("528");
                }
            }
        }
    }
    if (!(firefox && !css("8"))) {
        if (documentElement) {
            css("9");
        }
    }
    self = Event.prototype;
    /**
     * @return {undefined}
     */
    self.la = function() {};
    /** @type {boolean} */
    self.Ta = t;
    /** @type {boolean} */
    self.bc = TRUE;
    /**
     * @return {undefined}
     */
    self.stopPropagation = function() {
        /** @type {boolean} */
        this.Ta = TRUE;
    };
    /**
     * @return {undefined}
     */
    self.preventDefault = function() {
        /** @type {boolean} */
        this.bc = t;
    };
    factory(events, Event);
    self = events.prototype;
    /** @type {null} */
    self.target = value;
    /** @type {null} */
    self.relatedTarget = value;
    /** @type {number} */
    self.clientX = 0;
    /** @type {number} */
    self.clientY = 0;
    /** @type {number} */
    self.keyCode = 0;
    /** @type {number} */
    self.charCode = 0;
    /** @type {boolean} */
    self.ctrlKey = t;
    /** @type {boolean} */
    self.altKey = t;
    /** @type {boolean} */
    self.shiftKey = t;
    /** @type {null} */
    self.Ea = value;
    /**
     * @param {Event} e
     * @param {Array} first
     * @return {undefined}
     */
    self.init = function(e, first) {
        var $type$$52 = this.type = e.type;
        Event.call(this, $type$$52);
        this.target = e.target || e.srcElement;
        /** @type {Array} */
        this.currentTarget = first;
        var relatedTarget = e.relatedTarget;
        if (relatedTarget) {
            if (firefox) {
                var found;
                a: {
                    try {
                        fix(relatedTarget.nodeName);
                        /** @type {boolean} */
                        found = TRUE;
                        break a;
                    } catch (f) {}
                    /** @type {boolean} */
                    found = t;
                }
                if (!found) {
                    /** @type {null} */
                    relatedTarget = value;
                }
            }
        } else {
            if ("mouseover" == $type$$52) {
                relatedTarget = e.fromElement;
            } else {
                if ("mouseout" == $type$$52) {
                    relatedTarget = e.toElement;
                }
            }
        }
        this.relatedTarget = relatedTarget;
        this.clientX = e.clientX !== element ? e.clientX : e.pageX;
        this.clientY = e.clientY !== element ? e.clientY : e.pageY;
        this.keyCode = e.keyCode || 0;
        this.charCode = e.charCode || ("keypress" == $type$$52 ? e.keyCode : 0);
        this.ctrlKey = e.ctrlKey;
        this.altKey = e.altKey;
        this.shiftKey = e.shiftKey;
        /** @type {Event} */
        this.Ea = e;
        if (e.defaultPrevented) {
            this.preventDefault();
        }
        delete this.Ta;
    };
    /**
     * @return {undefined}
     */
    self.stopPropagation = function() {
        events.J.stopPropagation.call(this);
        if (this.Ea.stopPropagation) {
            this.Ea.stopPropagation();
        } else {
            /** @type {boolean} */
            this.Ea.cancelBubble = TRUE;
        }
    };
    /**
     * @return {undefined}
     */
    self.preventDefault = function() {
        events.J.preventDefault.call(this);
        var ev = this.Ea;
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            if (ev.returnValue = t, ui) {
                try {
                    if (ev.ctrlKey || 112 <= ev.keyCode && 123 >= ev.keyCode) {
                        /** @type {number} */
                        ev.keyCode = -1;
                    }
                } catch (b) {}
            }
        }
    };
    /**
     * @return {?}
     */
    self.Cg = function() {
        return this.Ea;
    };
    /** @type {number} */
    var nextKey = 0;
    self = SourceMap.prototype;
    /** @type {number} */
    self.key = 0;
    /** @type {boolean} */
    self.Ma = t;
    /** @type {boolean} */
    self.ld = t;
    /**
     * @param {Object} fn
     * @param {number} first
     * @param {string} src
     * @param {string} type
     * @param {boolean} capture
     * @param {?} config
     * @return {undefined}
     */
    self.init = function(fn, first, src, type, capture, config) {
        if (proxy(fn)) {
            /** @type {boolean} */
            this.b = TRUE;
        } else {
            if (fn && (fn.handleEvent && proxy(fn.handleEvent))) {
                /** @type {boolean} */
                this.b = t;
            } else {
                log(Error("Invalid listener argument"));
            }
        }
        /** @type {Object} */
        this.ib = fn;
        /** @type {number} */
        this.c = first;
        /** @type {string} */
        this.src = src;
        /** @type {string} */
        this.type = type;
        /** @type {boolean} */
        this.capture = !!capture;
        this.Sb = config;
        /** @type {boolean} */
        this.ld = t;
        /** @type {number} */
        this.key = ++nextKey;
        /** @type {boolean} */
        this.Ma = t;
    };
    /**
     * @param {boolean} event
     * @return {?}
     */
    self.handleEvent = function(event) {
        return this.b ? this.ib.call(this.Sb || this.src, event) : this.ib.handleEvent.call(this.ib, event);
    };
    var clients = {};
    var chars = {};
    var variables = {};
    var appenderMap = {};
    factory(game, recordType);
    self = game.prototype;
    /** @type {boolean} */
    self.Id = TRUE;
    /** @type {null} */
    self.ac = value;
    /**
     * @param {?} ac
     * @return {undefined}
     */
    self.Kc = function(ac) {
        this.ac = ac;
    };
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @param {boolean} capture
     * @param {?} func
     * @return {undefined}
     */
    self.addEventListener = function(eventName, listener, capture, func) {
        addEventListener(this, eventName, listener, capture, func);
    };
    /**
     * @param {?} type
     * @param {?} func
     * @param {boolean} capture
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    self.removeEventListener = function(type, func, capture, deepDataAndEvents) {
        removeListener(this, type, func, capture, deepDataAndEvents);
    };
    /**
     * @param {Object} event
     * @return {?}
     */
    self.dispatchEvent = function(event) {
        var type = event.type || event;
        var map = chars;
        if (type in map) {
            if (isString(event)) {
                event = new Event(event, this);
            } else {
                if (event instanceof Event) {
                    event.target = event.target || this;
                } else {
                    /** @type {Object} */
                    var originalEvent = event;
                    event = new Event(type, this);
                    warn(event, originalEvent);
                }
            }
            /** @type {number} */
            originalEvent = 1;
            var element;
            map = map[type];
            /** @type {boolean} */
            type = TRUE in map;
            var node;
            if (type) {
                /** @type {Array} */
                element = [];
                node = this;
                for (; node; node = node.ac) {
                    element.push(node);
                }
                node = map[TRUE];
                node.ba = node.N;
                /** @type {number} */
                var i = element.length - 1;
                for (; !event.Ta && (0 <= i && node.ba); i--) {
                    event.currentTarget = element[i];
                    originalEvent &= dispatchEvent(node, element[i], event.type, TRUE, event) && event.bc != t;
                }
            }
            if (t in map) {
                if (node = map[t], node.ba = node.N, type) {
                    /** @type {number} */
                    i = 0;
                    for (; !event.Ta && (i < element.length && node.ba); i++) {
                        event.currentTarget = element[i];
                        originalEvent &= dispatchEvent(node, element[i], event.type, t, event) && event.bc != t;
                    }
                } else {
                    element = this;
                    for (; !event.Ta && (element && node.ba); element = element.ac) {
                        event.currentTarget = element;
                        originalEvent &= dispatchEvent(node, element, event.type, t, event) && event.bc != t;
                    }
                }
            }
            /** @type {boolean} */
            event = Boolean(originalEvent);
        } else {
            /** @type {boolean} */
            event = TRUE;
        }
        return event;
    };
    /**
     * @return {undefined}
     */
    self.S = function() {
        game.J.S.call(this);
        var opt_capt;
        /** @type {number} */
        var b = 0;
        /** @type {boolean} */
        var noCapt = opt_capt == value;
        /** @type {boolean} */
        opt_capt = !!opt_capt;
        if (this == value) {
            keys(variables, function(worlds) {
                /** @type {number} */
                var i = worlds.length - 1;
                for (; 0 <= i; i--) {
                    var listener = worlds[i];
                    if (noCapt || opt_capt == listener.capture) {
                        removeEventListener(listener.key);
                        b++;
                    }
                }
            });
        } else {
            var v = unescape(this);
            if (variables[v]) {
                v = variables[v];
                /** @type {number} */
                var ii = v.length - 1;
                for (; 0 <= ii; ii--) {
                    var listener = v[ii];
                    if (noCapt || opt_capt == listener.capture) {
                        removeEventListener(listener.key);
                        b++;
                    }
                }
            }
        }
        /** @type {null} */
        this.ac = value;
    };
    factory(Matrix, recordType);
    /** @type {Array} */
    var klass = [];
    /**
     * @return {undefined}
     */
    Matrix.prototype.S = function() {
        Matrix.J.S.call(this);
        slice(this.b, removeEventListener);
        /** @type {number} */
        this.b.length = 0;
    };
    /**
     * @return {undefined}
     */
    Matrix.prototype.handleEvent = function() {
        log(Error("EventHandler.handleEvent not implemented"));
    };
    if (!documentElement) {
        if (firefox) {
            css("1.9.3");
        }
    }
    var win = global.window;
    new _this;
    /** @type {RegExp} */
    var rclass = /__([a-z]+(?:_[a-z]+)*)__/g;
    /**
     * @param {Object} obj
     * @param {Function} callback
     * @param {boolean} str
     * @return {?}
     */
    def.prototype.eb = function(obj, callback, str) {
        var fmt = bind(function(dataAndEvents, v) {
            if (callback) {
                v = callback(v);
            }
            return str ? obj[v] || "" : encode(obj[v] || "");
        }, this);
        return this.b.replace(this.c, fmt);
    };
    factory(DOT_CALL_NO_PARENS, orig);
    has(DOT_CALL_NO_PARENS);
    self = DOT_CALL_NO_PARENS.prototype;
    /** @type {string} */
    self.H = "scroller";
    /**
     * @return {undefined}
     */
    self.register = function() {
        removeEvent(this, "mouseenter", this.Ug);
        removeEvent(this, "mouseleave", this.Vg);
    };
    /**
     * @param {?} data
     * @return {undefined}
     */
    self.Ug = function(data) {
        var result = addEvent(data, "mousewheel", bind(this.Qg, this, data));
        this.setData(data, "scroller-mousewheel-listener", result);
        result = addEvent(data, "scroll", bind(this.Rg, this, data));
        this.setData(data, "scroller-scroll-listener", result);
    };
    /**
     * @param {?} data
     * @return {undefined}
     */
    self.Vg = function(data) {
        off(this.getData(data, "scroller-mousewheel-listener") || "");
        this.setData(data, "scroller-mousewheel-listener", "");
        off(this.getData(data, "scroller-scroll-listener") || "");
        this.setData(data, "scroller-scroll-listener", "");
    };
    /**
     * @param {Element} evt
     * @param {Event} e
     * @return {undefined}
     */
    self.Qg = function(evt, e) {
        e.preventDefault();
        if (e.wheelDeltaY) {
            evt.scrollTop = evt.scrollTop + e.wheelDeltaY;
        }
    };
    /**
     * @param {?} subKey
     * @return {undefined}
     */
    self.Rg = function(subKey) {
        this.ga(subKey, "scroll-action");
    };
    /**
     * @param {Object} value
     * @param {Object} key
     * @return {undefined}
     */
    self.wd = function(value, key) {
        if (value && key) {
            var index = expect(get(this, "scroll-unit"), value);
            index = assert(index, key);
            if (0 <= index) {
                this.Pa(value, index);
            }
        }
    };
    /**
     * @param {Object} o
     * @param {number} index
     * @return {undefined}
     */
    self.Pa = function(o, index) {
        if (o && !(isNaN(index) || 0 > index)) {
            var data = expect(get(this, "scroll-unit"), o);
            if (!(0 >= data.length)) {
                if (index >= data.length) {
                    /** @type {number} */
                    index = data.length - 1;
                }
                var b = size(data);
                var a = o.offsetHeight;
                /** @type {number} */
                var count = Math.max(Math.floor(o.scrollTop / b), 0);
                if (index > count - 1) {
                    /** @type {number} */
                    b = Math.floor(a / b);
                    a = data.length;
                    if (index + b > a) {
                        /** @type {number} */
                        index = a - b + 1;
                    }
                }
                if (0 > index) {
                    /** @type {number} */
                    index = 0;
                }
                parseNumber(this, o, data[index].offsetTop);
            }
        }
    };
    /**
     * @param {?} inplace
     * @return {undefined}
     */
    self.xd = function(inplace) {
        var cDigit = this.getData(inplace, "scroller-offset");
        /** @type {number} */
        cDigit = parseInt(cDigit, 10) || 0;
        parseNumber(this, inplace, cDigit);
    };
    factory(SPLICE_NEEDS_BRACKETS, orig);
    has(SPLICE_NEEDS_BRACKETS);
    self = SPLICE_NEEDS_BRACKETS.prototype;
    /** @type {string} */
    self.H = "slider";
    /**
     * @return {undefined}
     */
    self.register = function() {
        removeEvent(this, "click", this.Eg, "num");
        removeEvent(this, "click", this.Fg, "prev");
        removeEvent(this, "click", this.Dg, "next");
        removeEvent(this, "mouseover", this.Kg, "ajax-trigger");
    };
    /**
     * @param {number} key
     * @return {undefined}
     */
    self.Eg = function(key) {
        if (key) {
            var camelKey = this.L(key);
            /** @type {number} */
            key = parseInt(this.getData(key, "slider-num"), 10);
            if (isNaN(key) || 0 > key) {
                /** @type {number} */
                key = 0;
            }
            this.dc(camelKey, key);
        }
    };
    /**
     * @param {Object} data
     * @param {number} t
     * @param {?} types
     * @return {undefined}
     */
    self.Dg = function(data, t, types) {
        if (data) {
            data = this.L(data);
            if (same(data, get(this, "fluid"))) {
                if (data) {
                    var n = this.getBodyElement(data);
                    t = equals(this, n);
                    var p = sequence(this, t);
                    /** @type {boolean} */
                    var f = 0 < p.length;
                    /** @type {number} */
                    t = parseInt(this.getData(data, "slider-offset"), 10);
                    if (isNaN(t) || 0 < t) {
                        /** @type {number} */
                        t = 0;
                    }
                    var d = _insert(this, data);
                    if (f) {
                        n = getPosition(this, data, p);
                        /** @type {number} */
                        d = Math.floor(d / n);
                        /** @type {number} */
                        t = Math.abs(Math.floor(t / n)) - 1;
                        this.Pa(data, (0 <= t ? t : 0) + d);
                    } else {
                        p = move(this, data) ? n.scrollHeight : n.scrollWidth;
                        if (this.Nc && 8 > document.documentMode) {
                            if (Math.abs(t - d) < p) {
                                t -= d;
                            }
                        } else {
                            if (n.offsetWidth < p) {
                                t -= d;
                            }
                        }
                        style(this, data, t);
                    }
                }
            } else {
                if (data) {
                    /** @type {number} */
                    t = parseInt(this.getData(data, "slider-current"), 10);
                    if (isNaN(t) || 0 > t) {
                        /** @type {number} */
                        t = 0;
                    }
                    /** @type {number} */
                    n = parseInt(this.getData(data, "slider-slides"), 10);
                    if (isNaN(n) || 0 > n) {
                        /** @type {number} */
                        n = 0;
                    }
                    /** @type {number} */
                    t = Math.min(t + 1, n - 1);
                    this.dc(data, t);
                }
            }
            types.preventDefault();
        }
    };
    /**
     * @param {Object} data
     * @param {number} end
     * @param {?} types
     * @return {undefined}
     */
    self.Fg = function(data, end, types) {
        if (data) {
            data = this.L(data);
            if (same(data, get(this, "fluid"))) {
                if (data) {
                    end = this.getBodyElement(data);
                    end = equals(this, end);
                    var b = sequence(this, end);
                    /** @type {boolean} */
                    var e = 0 < b.length;
                    /** @type {number} */
                    end = parseInt(this.getData(data, "slider-offset"), 10);
                    if (isNaN(end) || 0 < end) {
                        /** @type {number} */
                        end = 0;
                    }
                    var n = _insert(this, data);
                    if (e) {
                        b = getPosition(this, data, b);
                        /** @type {number} */
                        n = Math.floor(n / b);
                        /** @type {number} */
                        end = Math.abs(Math.floor(end / b)) - 1;
                        this.Pa(data, (0 <= end ? end : 0) - n);
                    } else {
                        end += n;
                        if (0 < end) {
                            /** @type {number} */
                            end = 0;
                        }
                        style(this, data, end);
                    }
                }
            } else {
                if (data) {
                    /** @type {number} */
                    end = parseInt(this.getData(data, "slider-current"), 10);
                    if (isNaN(end) || 0 > end) {
                        /** @type {number} */
                        end = 0;
                    }
                    /** @type {number} */
                    end = Math.max(end - 1, 0);
                    this.dc(data, end);
                }
            }
            types.preventDefault();
        }
    };
    /**
     * @param {string} value
     * @return {undefined}
     */
    self.Kg = function(value) {
        if (value = this.L(value)) {
            var source = get(this, "ajax-trigger");
            var index = expect(source, value);
            slice(index, function(obj) {
                removeClass(obj, source);
            });
            onData(this, value);
        }
    };
    /**
     * @param {string} data
     * @param {number} s
     * @return {undefined}
     */
    self.dc = function(data, s) {
        if (data) {
            if (this.getData(data, "slider-ajax-url") && !this.getData(data, "slider-loaded")) {
                onData(this, data, bind(this.dc, this, data, s));
            } else {
                var result = add(value, get(this, "num"), data);
                var results = get(this, "num-current");
                var e;
                slice(result, function(data) {
                    /** @type {boolean} */
                    e = this.getData(data, "slider-num") == s;
                    done(data, results, e);
                    if (same(data, "yt-uix-button")) {
                        done(data, "yt-uix-button-toggled", e);
                    }
                }, this);
                result = callback(get(this, "slides"), data);
                var height = move(this, data);
                if (result) {
                    var target = equals(this, result);
                    if (target) {
                        /** @type {string} */
                        var w = -1 * s * (height ? target.offsetHeight : target.offsetWidth) + "px";
                        if (height) {
                            /** @type {string} */
                            result.style.top = w;
                        } else {
                            if ($$(target)) {
                                /** @type {string} */
                                result.style.right = w;
                            } else {
                                /** @type {string} */
                                result.style.left = w;
                            }
                        }
                    }
                }
                if (result = callback("yt-uix-pager-current-page", data)) {
                    result.innerHTML = s + 1;
                }
                this.setData(data, "slider-current", s + "");
                if (data) {
                    /** @type {number} */
                    result = parseInt(this.getData(data, "slider-current"), 10);
                    /** @type {number} */
                    height = parseInt(this.getData(data, "slider-slides"), 10);
                    target = expect(get(this, "next"), data);
                    w = expect(get(this, "prev"), data);
                    slice(target, function(s) {
                        /** @type {boolean} */
                        s.disabled = t;
                    });
                    slice(w, function(s) {
                        /** @type {boolean} */
                        s.disabled = t;
                    });
                    if (0 == result) {
                        slice(w, function(api) {
                            /** @type {boolean} */
                            api.disabled = TRUE;
                        });
                    }
                    if (result == height - 1) {
                        slice(target, function(api) {
                            /** @type {boolean} */
                            api.disabled = TRUE;
                        });
                    }
                }
            }
        }
    };
    /**
     * @param {Object} prop
     * @param {?} value
     * @return {undefined}
     */
    self.wd = function(prop, value) {
        if (prop) {
            var p = this.getBodyElement(prop);
            p = equals(this, p);
            p = sequence(this, p);
            p = assert(p, value);
            if (0 <= p) {
                this.Pa(prop, p);
            }
        }
    };
    /**
     * @param {Object} data
     * @param {number} x
     * @return {undefined}
     */
    self.Pa = function(data, x) {
        if (data) {
            var i = this.getBodyElement(data);
            i = equals(this, i);
            var a = sequence(this, i);
            if (!(0 >= a.length)) {
                if (x >= a.length) {
                    /** @type {number} */
                    x = a.length - 1;
                }
                /** @type {number} */
                var width = parseInt(this.getData(data, "slider-offset"), 10);
                if (isNaN(width) || 0 < width) {
                    /** @type {number} */
                    width = 0;
                }
                i = _insert(this, data);
                var count = getPosition(this, data, a);
                /** @type {number} */
                width = Math.abs(Math.floor(width / count)) - 1;
                if (x > (0 <= width ? width : 0)) {
                    /** @type {number} */
                    width = Math.floor(i / count);
                    var right = a.length;
                    if (x + width > right) {
                        /** @type {number} */
                        x = right - width + 1;
                    }
                }
                if (0 > x) {
                    /** @type {number} */
                    x = 0;
                }
                a = a[x];
                width = $$(data) ? a.offsetLeft - i + count + 10 : -1 * (a.offsetLeft - 10);
                style(this, data, width);
            }
        }
    };
    /**
     * @param {?} inplace
     * @return {undefined}
     */
    self.xd = function(inplace) {
        var cDigit = this.getData(inplace, "slider-offset");
        /** @type {number} */
        cDigit = parseInt(cDigit, 10) || 0;
        style(this, inplace, cDigit);
    };
    /**
     * @param {Object} actual
     * @return {?}
     */
    self.getBodyElement = function(actual) {
        return callback(get(this, "body"), actual);
    };
    var j = {
        classes: "classes",
        list_position: "index",
        video_encrypted_id: "id",
        video_title: "title",
        video_url: "url",
        video_display_name: "display_name",
        video_thumb_url: "thumb_url"
    };
    /**
     * @param {Object} value
     * @param {string} callback
     * @param {number} str
     * @param {Object} e
     * @param {boolean} err
     * @param {number} y
     * @return {undefined}
     */
    d.prototype.eb = function(value, callback, str, e, err, y) {
        var h = e.mb;
        if (h) {
            this.j.innerHTML = h;
            if (this.c) {
                this.c.innerHTML = e.lb;
            }
        }
        /** @type {Array} */
        var tagNameArr = [];
        slice(value, function(selector, x) {
            /** @type {boolean} */
            var suiteView = x + y == str;
            var result = e.getVideoData(selector);
            result.id = selector;
            result.url = find(e, x);
            tagNameArr.push(select(this, result, x + 1 + y, suiteView));
        }, this);
        /** @type {string} */
        this.ha.innerHTML = tagNameArr.join("");
        if (err) {
            this.scroll(3);
        } else {
            this.scroll(5);
        }
        value = expect("item-count", this.D);
        slice(value, function(f) {
            /** @type {string} */
            f.innerHTML = callback;
        });
        value = expect("playing-index", this.D);
        slice(value, function(div) {
            div.innerHTML = str + 1;
        });
    };
    /**
     * @return {undefined}
     */
    d.prototype.uc = function() {
        var result;
        if (cancelAnimationFrame()) {
            result = DOT_CALL_NO_PARENS.getInstance();
            var b = this.b;
            if (b) {
                if (result = expect(get(result, "scroll-unit"), b), 0 >= result.length) {
                    /** @type {Array} */
                    result = [];
                } else {
                    var c = b.scrollTop;
                    var n = size(result);
                    var m = b.offsetHeight;
                    /** @type {number} */
                    b = Math.max(Math.floor(c / n), 0);
                    /** @type {number} */
                    c = Math.min(Math.ceil((c + m) / n), result.length);
                    result = makeArray(result, b, c);
                }
            } else {
                /** @type {Array} */
                result = [];
            }
        } else {
            if (c = SPLICE_NEEDS_BRACKETS.getInstance(), n = this.b, result = c.getBodyElement(n), result = equals(c, result), result = sequence(c, result), result.length) {
                /** @type {number} */
                b = parseInt(c.getData(n, "slider-offset"), 10);
                if (isNaN(b) || 0 < b) {
                    /** @type {number} */
                    b = 0;
                }
                m = _insert(c, n);
                n = getPosition(c, n, result);
                /** @type {number} */
                c = Math.floor(-b / n);
                /** @type {number} */
                c = Math.max(0, c);
                /** @type {number} */
                n = Math.ceil((-b + m) / n);
                /** @type {number} */
                n = Math.min(n, result.length);
                result = makeArray(deepEqual(result), c, n);
            } else {
                /** @type {Array} */
                result = [];
            }
        }
        slice(result, function(isXML) {
            pass(isXML);
        });
    };
    /**
     * @param {number} opt_attributes
     * @param {number} el
     * @return {undefined}
     */
    d.prototype.scroll = function(opt_attributes, el) {
        var opts;
        opts = cancelAnimationFrame() ? DOT_CALL_NO_PARENS.getInstance() : SPLICE_NEEDS_BRACKETS.getInstance();
        switch (opt_attributes) {
            case 3:
                var camelKey = createElement("li", "playlist-bar-item-playing", this.ha);
                if (camelKey) {
                    opts.wd(this.b, camelKey);
                } else {
                    opts.Pa(this.b, 0);
                }
                break;
            case 4:
                if (el) {
                    opts.Pa(this.b, el);
                }
                break;
            case 5:
                opts.xd(this.b);
        }
        this.uc();
    };
    /**
     * @param {?} result
     * @return {undefined}
     */
    d.prototype.$b = function(result) {
        /** @type {number} */
        var b = 0;
        var which = bind(function() {
            var lis = add("li", "playlist-bar-item", this.ha);
            /** @type {boolean} */
            var e = !(b % 2);
            slice(result, function(i) {
                done(lis[i], "playlist-bar-item-highlight", e);
            });
            b++;
            if (6 > b) {
                attr(which, 150);
            }
        }, this);
        which();
    };
    self = finish.prototype;
    /**
     * @return {?}
     */
    self.ya = function() {
        return this.g.ya();
    };
    /**
     * @return {?}
     */
    self.Na = function() {
        return this.g.Na();
    };
    /**
     * @return {?}
     */
    self.va = function() {
        return this.g.va();
    };
    /**
     * @return {?}
     */
    self.Y = function() {
        return same(this.D, "shuffle-on");
    };
    /**
     * @return {?}
     */
    self.ub = function() {
        return same(this.D, "loading");
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    self.Ne = function(e) {
        if (!parentIfText(e.target, function(c) {
                c = c.tagName && c.tagName.toLowerCase();
                return "a" == c || "button" == c;
            }, TRUE)) {
            wrapper(this);
        }
    };
    /**
     * @param {Event} event
     * @return {undefined}
     */
    self.Se = function(event) {
        event.stopPropagation();
        switch (equal(event.currentTarget, "action")) {
            case "clear":
                this.clear();
                break;
            case "load-lists":
                runTests(this);
                break;
            case "show-active":
                if (this.e) {
                    close(this, this.e);
                }
                break;
            case "save":
                if (!this.ub()) {
                    configureDatePicker(this);
                    runTest(this, {
                        n: {
                            action_get_save_playlist_form: 1
                        },
                        /**
                         * @param {?} value
                         * @param {string} obj
                         * @return {undefined}
                         */
                        i: function(value, obj) {
                            addClass(this.D, "lists", "save");
                            var h = obj.html;
                            this.Dd = require("playlist-bar-save");
                            this.Dd.innerHTML = h;
                            h = require("playlist-bar-title-edit");
                            h.focus();
                            h.select();
                            addEvent(require("playlist-bar-save-cancel"), "click", bind(this.Of, this));
                            addEvent(require("playlist-bar-save-form"), "submit", bind(this.Pf, this));
                        }
                    });
                };
        }
    };
    /**
     * @return {undefined}
     */
    self.We = function() {
        validate(this.K, "watch-playlist-collapsed");
        wrapper(this);
    };
    /**
     * @return {undefined}
     */
    self.Me = function() {
        /** @type {boolean} */
        var expectationResult = !cloneNode(this);
        checkResults(this, expectationResult);
        clean(this);
    };
    /**
     * @return {undefined}
     */
    self.Ve = function() {
        /** @type {boolean} */
        var r20 = !this.Y();
        /** @type {number} */
        var nodes = 0;
        expected("SHUFFLE_ENABLED", r20);
        if (r20) {
            expected("SHUFFLE_VALUE", Math.max(1, 1E6 * Math.random()));
        }
        if (r20) {
            addClass(this.D, "shuffle-off", "shuffle-on");
            nodes = parser();
        } else {
            addClass(this.D, "shuffle-on", "shuffle-off");
        }
        /** @type {number} */
        this.g.ka = nodes;
        this.gb();
        this.ua.scroll(3);
    };
    /**
     * @return {undefined}
     */
    self.Te = function() {
        setState(this, TRUE, "bf_play");
    };
    /**
     * @return {undefined}
     */
    self.Ue = function() {
        publish(this, "bf_prev");
    };
    /**
     * @return {undefined}
     */
    self.Re = function() {
        setState(this, TRUE, "bf_next");
    };
    /**
     * @param {Object} e
     * @return {undefined}
     */
    self.Oe = function(e) {
        e.preventDefault();
        var name = add("li", "playlist-bar-item", this.ha);
        e = contains(e.currentTarget, "li", "playlist-bar-item");
        name = assert(name, e);
        if (this.g.Bc()) {
            e = this.g.ya();
            leave(this);
            clear("bf", "copyFrom=1&action=delete&list_type=" + e, element);
        }
        var c = this.g.ya();
        var existingNode = eq(this.g)[name];
        this.g.removeItem(name);
        hide(this, replace("PLAYLIST_VIDEO_DELETED"), t, t, t, function() {
            this.g.Jc([existingNode]);
            this.gb();
            /** @type {number} */
            var failuresLink = this.g.Z() - 1;
            this.ua.scroll(4, failuresLink);
            this.ua.$b([failuresLink]);
            clear("bf", "undo_delete=1&list_type=" + c, element);
        });
        clear("bf", "delete=1&list_type=" + c, element);
    };
    /**
     * @param {Object} p
     * @return {undefined}
     */
    self.mf = function(p) {
        var b = p.sourceIndex;
        p = p.targetIndex;
        if (!(b == p || (0 > b || 0 > p))) {
            if (this.g.Bc()) {
                var t = this.g.ya();
                leave(this);
                clear("bf", "copyFrom=1&action=drag&list_type=" + t, element);
            }
            t = this.g;
            if (!t.Y() && t.bb()) {
                var a = eq(t);
                if (a[b]) {
                    if (a[p]) {
                        t.vd(b, p);
                        a = t.b;
                        if (a == b) {
                            /** @type {Object} */
                            t.b = p;
                        } else {
                            if (a > b && a <= p) {
                                t.b -= 1;
                            } else {
                                if (a < b) {
                                    if (a >= p) {
                                        t.b += 1;
                                    }
                                }
                            }
                        }
                    }
                }
                splice(t);
            }
            b = key({
                moved_item_delta: Math.abs(p - b),
                list_type: this.g.ya()
            });
            clear("bf", b, element);
        }
    };
    /**
     * @return {undefined}
     */
    self.clear = function() {
        var cs = this.g.za();
        this.g.clear();
        hide(this, replace("LIST_CLEARED"), t, t, t, function() {
            this.g.Jc(cs);
            this.gb();
            clear("bf", "undo_clear=1&list_type=" + b, element);
        });
        var b = this.g.ya();
        clear("bf", "clear=1&list_type=" + b, element);
    };
    /**
     * @param {string} dataAndEvents
     * @return {?}
     */
    self.Lc = function(dataAndEvents) {
        return this.g.Lc(dataAndEvents);
    };
    /**
     * @param {(Function|string)} elem
     * @return {undefined}
     */
    self.gb = function(elem) {
        var val = this.g.ub();
        /** @type {boolean} */
        var expect = !val && !!this.g.ma;
        /** @type {boolean} */
        var historySensitive = !this.g.Z();
        var success = this.g.va();
        if (this.f) {
            if (success) {
                addClass(this.f, "passive", "active");
            } else {
                addClass(this.f, "active", "passive");
            }
        }
        /** @type {Array} */
        var fail = [];
        /** @type {Array} */
        var pass = [];
        (success ? pass : fail).push("active");
        (!success ? pass : fail).push("passive");
        (val ? pass : fail).push("loading");
        (expect ? pass : fail).push("editable");
        (historySensitive ? pass : fail).push("empty");
        addClass(this.D, fail, pass);
        if (!val) {
            val = this.g;
            val.c = {};
            try {
                var initial = eq(this.g);
                var restoreScript = this.g.Gb;
                var errStr = this.g.da();
                this.ua.eb(initial, restoreScript, errStr, this.g, !!elem, this.g.Fb);
                /** @type {boolean} */
                this.tc = t;
            } finally {
                /** @type {null} */
                val.c = value;
            }
        }
        elem = this.g.Wa;
        initial = this.g.Fa;
        if (elem) {
            hide(this, elem, TRUE, t);
        } else {
            if (initial) {
                hide(this, initial, t, TRUE);
            }
        }
        elem = this.g;
        /** @type {null} */
        elem.Fa = value;
        /** @type {null} */
        elem.Wa = value;
        clean(this);
        if (this.g.bb()) {
            if (this.g.Z()) {
                if (!this.l) {
                    /** @type {boolean} */
                    this.l = TRUE;
                    poll((push("DRAGDROP_BINARY_URL") || "") + "", bind(function() {
                        addEvent(this.ha, "mouseover", bind(function() {
                            if (!this.tc) {
                                /** @type {boolean} */
                                this.tc = TRUE;
                                if (this.g.bb()) {
                                    if (!this.g.Y()) {
                                        apply("yt.www.lists.dragdrop").createDraggables();
                                    }
                                }
                            }
                        }, this));
                        var left = apply("yt.www.lists.dragdrop");
                        left.init(this.ha, "playlist-bar-item");
                        left.subscribe("DROPPED_AT_INDEX", this.mf, this);
                    }, this));
                }
            }
        }
    };
    /** @type {null} */
    self.Ba = value;
    /** @type {null} */
    self.Vb = value;
    /**
     * @param {(Object|string)} name
     * @param {boolean} container
     * @return {undefined}
     */
    self.showError = function(name, container) {
        hide(this, name, TRUE, container);
    };
    /**
     * @param {Function} ev
     * @return {undefined}
     */
    self.If = function(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev = this.Vb;
        execute(this);
        ev.call(this);
    };
    /**
     * @param {?} result
     * @return {undefined}
     */
    self.$b = function(result) {
        result = loadPlugins(this.g, result);
        if (result.length) {
            this.ua.$b(result);
            this.ua.scroll(4, result[0]);
        }
    };
    /**
     * @param {?} types
     * @return {undefined}
     */
    self.Of = function(types) {
        types.preventDefault();
        removeClass(this.D, "save");
    };
    /**
     * @param {Object} args
     * @return {undefined}
     */
    self.Pf = function(args) {
        args.preventDefault();
        var b = eq(this.g).join(",");
        if (b) {
            execute(this);
            args = MAP(args.target);
            runTest(this, {
                n: {
                    action_save_playlist: 1
                },
                method: "POST",
                oa: args + ("&video_ids=" + b),
                /**
                 * @param {?} data
                 * @param {string} obj
                 * @return {undefined}
                 */
                i: function(data, obj) {
                    /** @type {string} */
                    this.Dd.innerHTML = "";
                    removeClass(this.D, "save");
                    var node = pred("PL", obj.list_id);
                    close(this, node, value, TRUE);
                    node = replace("PLAYLIST_BAR_PLAYLIST_SAVED");
                    hide(this, node, t, TRUE);
                }
            });
        }
    };
    /**
     * @param {?} types
     * @return {undefined}
     */
    self.Pe = function(types) {
        types.preventDefault();
        runTests(this);
    };
    /**
     * @return {undefined}
     */
    self.Qe = function() {
        var classNames = this.g;
        val(classNames, value, {
            load_more: "1"
        });
        splice(classNames);
    };
    /**
     * @param {Object} data
     * @return {undefined}
     */
    self.cg = function(data) {
        data.preventDefault();
        var key = data.currentTarget;
        if (key) {
            onChange(this);
            data = equal(key, "list-type") || "";
            key = equal(key, "list-id") || "";
            data = pred(data, key);
            close(this, data);
        }
    };
    /**
     * @param {?} types
     * @return {undefined}
     */
    self.bg = function(types) {
        types.preventDefault();
        onChange(this);
    };
    /**
     * @return {?}
     */
    self.da = function() {
        return this.g.da();
    };
    /** @type {null} */
    var encodedValue = value;
    /** @type {boolean} */
    var valid = t;
    /** @type {number} */
    var pdataOld = -1;
    /** @type {number} */
    var caption = -1;
    self = Gallery.prototype;
    /**
     * @return {undefined}
     */
    self.Ka = function() {
        this.u = this.k.getElementsByTagName("form")[0];
        addEvent(this.u, "submit", bind(this.Ye, this));
        callback("share-email-send", this.u);
        this.Fa = callback("share-email-success", this.k);
        this.e = callback("share-email-remail", this.Fa);
        addEvent(this.e, "click", bind(function() {
            print(this);
            this.focus();
        }, this));
        this.sc = callback("share-email-recipients", this.k);
        this.b = callback("share-email-note", this.k);
        this.c = callback("share-email-preview-note", this.k);
        addEvent(this.b, "keyup", bind(this.Xe, this));
    };
    /**
     * @return {undefined}
     */
    self.qa = function() {
        if (this.u) {
            if (this.vc) {
                print(this);
            }
            this.focus();
        }
    };
    /**
     * @return {undefined}
     */
    self.focus = function() {
        this.sc.focus();
    };
    /**
     * @return {undefined}
     */
    self.Xe = function() {
        var body = this.b.value;
        body = body.substring(0, 300);
        body = encode(body);
        body = body.replace(/\n/g, "<br>");
        this.c.innerHTML = body;
    };
    /**
     * @param {Object} key
     * @return {undefined}
     */
    self.Ye = function(key) {
        key.preventDefault();
        var data = add("button", value, this.u)[0];
        /** @type {boolean} */
        data.disabled = TRUE;
        var node = callback("share-email-captcha", this.k);
        var selector = callback("share-email-error", this.k);
        var r = callback("yt-alert-content", selector);
        key = onResponse() + isBoolean(this.u.action);
        i(key, {
            format: "JSON",
            method: "POST",
            oa: MAP(this.u),
            /**
             * @return {undefined}
             */
            i: function() {
                /** @type {boolean} */
                this.vc = TRUE;
                call(this.Fa);
                split(this.u);
                split(selector);
                split(node);
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                if (obj.captcha_html) {
                    node.innerHTML = obj.captcha_html;
                    call(node);
                }
                if (obj.errors) {
                    r.innerHTML = obj.errors.join("<br>");
                    call(selector);
                }
            },
            /**
             * @return {undefined}
             */
            R: function() {
                /** @type {boolean} */
                data.disabled = t;
            },
            z: this
        });
    };
    factory(funcs, orig);
    has(funcs);
    self = funcs.prototype;
    /** @type {string} */
    self.H = "form-input";
    /**
     * @return {undefined}
     */
    self.register = function() {
        if (documentElement) {
            if (!css(9)) {
                removeEvent(this, "click", this.fc, "checkbox");
                removeEvent(this, "keypressed", this.fc, "checkbox");
                removeEvent(this, "click", this.Vd, "radio");
                removeEvent(this, "keypressed", this.Vd, "radio");
            }
        }
        removeEvent(this, "change", this.fc, "checkbox");
        removeEvent(this, "blur", this.ng, "select-element");
        removeEvent(this, "change", this.Da, "select-element");
        removeEvent(this, "keyup", this.Da, "select-element");
        removeEvent(this, "focus", this.og, "select-element");
        removeEvent(this, "keyup", this.Oc, "text");
        removeEvent(this, "keyup", this.Oc, "textarea");
        removeEvent(this, "keyup", this.Oc, "bidi");
        removeEvent(this, "click", this.pg, "reset");
    };
    /**
     * @param {Object} a
     * @return {undefined}
     */
    self.fc = function(a) {
        var obj = index(a, get(this, "checkbox-container"));
        if (a.checked) {
            if (same(obj, "partial")) {
                /** @type {boolean} */
                a.checked = t;
                /** @type {boolean} */
                a.e = t;
                removeClass(obj, "partial");
            }
        }
        done(obj, "checked", a.checked);
    };
    /**
     * @param {Element} b
     * @return {undefined}
     */
    self.fh = function(b) {
        var i = index(b, get(this, "radio-container"));
        if (i) {
            done(i, "checked", b.checked);
        }
    };
    /**
     * @return {undefined}
     */
    self.Vd = function() {
        ondata();
    };
    /**
     * @param {Element} element
     * @return {undefined}
     */
    self.Oc = function(element) {
        var data = element.value;
        /** @type {string} */
        var dir = "";
        if (strip(data)) {
            /** @type {string} */
            dir = "rtl";
        } else {
            if (rbrace.test(data)) {
                /** @type {string} */
                dir = "ltr";
            }
        }
        /** @type {string} */
        element.dir = dir;
    };
    /**
     * @param {Element} defs
     * @return {undefined}
     */
    self.og = function(defs) {
        var suiteView = index(defs, get(this, "select"));
        end(suiteView, "focused");
        this.Da(defs);
    };
    /**
     * @param {Element} defs
     * @return {undefined}
     */
    self.ng = function(defs) {
        var later = index(defs, get(this, "select"));
        removeClass(later, "focused");
        this.Da(defs);
    };
    /**
     * @param {Element} a
     * @return {undefined}
     */
    self.Da = function(a) {
        var result = index(a, get(this, "select"));
        result = callback(get(this, "select-value"), result);
        var span = a.options[Math.max(a.selectedIndex, 0)];
        if (span) {
            if ("" != result.innerHTML) {
                if (span.innerHTML != result.innerHTML) {
                    this.ga(a, "onchange-callback");
                }
            }
            result.innerHTML = span.innerHTML;
        }
    };
    /**
     * @return {undefined}
     */
    self.pg = function() {
        var o = funcs.getInstance();
        var iter = expect(get(o, "checkbox"));
        slice(iter, o.fc);
        ondata();
        app();
    };
    self = empty.prototype;
    /** @type {number} */
    self.cb = 0;
    /** @type {number} */
    self.tb = 0;
    /**
     * @return {undefined}
     */
    self.Ka = function() {
        this.b = callback("share-embed-code", this.k);
        addEvent(this.b, "click", bind(this.je, this));
        if (this.kb) {
            this.ra = require("embed-layout-options");
            this.Ja = add("option", value, this.ra);
            /** @type {number} */
            var result = parseInt(equal(this.Ja[0], "width"), 10);
            /** @type {number} */
            var ret = parseInt(equal(this.Ja[0], "height"), 10);
            /** @type {number} */
            this.e = result / ret;
            addEvent(this.ra, "change", bind(function() {
                var selectedOption = this.ra.options[Math.max(this.ra.selectedIndex, 0)];
                selectedOption = !selectedOption ? value : selectedOption.value || selectedOption.text;
                editor.getInstance();
                sendMessage("ems", selectedOption);
                compare();
                f(this);
                var selector = require("share-embed-customize");
                if ("custom" == selectedOption) {
                    call(selector);
                } else {
                    split(selector);
                    this.focus();
                }
            }, this));
            result = require("share-embed-customize");
            this.f = callback("share-embed-size-custom-width", result);
            this.c = callback("share-embed-size-custom-height", result);
            addEvent(this.f, "keyup", bind(this.pe, this));
            addEvent(this.c, "keyup", bind(this.oe, this));
        } else {
            result = callback("share-embed-size-list", this.k);
            ret = expect("share-embed-size-radio", result);
            this.ja = {};
            slice(ret, function(key) {
                if (!same(key, "share-embed-size-radio-custom")) {
                    key = new View(key);
                    /** @type {(Error|string)} */
                    this.ja[key.name] = key;
                }
            }, this);
            /** @type {number} */
            ret = dataURLToBlob(this.ja).width / dataURLToBlob(this.ja).height;
            var id = callback("share-embed-size-radio-custom", result);
            ret = new group(id, ret);
            this.l = this.ja[ret.name] = ret;
            unbind(result, "click", bind(this.le, this), "share-embed-size");
            result = callback("share-embed-customize", result);
            addEvent(result, "keyup", bind(this.qe, this));
        }
        var map = {};
        result = expect("share-embed-option", this.k);
        slice(result, function(d) {
            /** @type {Function} */
            map[d.name] = d;
        });
        if (this.Ia = map["show-related"]) {
            addEvent(this.Ia, "click", bind(this.ke, this));
        }
        this.Hb = map["delayed-cookies"];
        addEvent(this.Hb, "click", bind(this.ie, this));
        this.j = map["use-https"];
        addEvent(this.j, "click", bind(this.ne, this));
        if (this.Ha = map["use-flash-code"] || value) {
            addEvent(this.Ha, "click", bind(this.me, this));
        }
    };
    /**
     * @return {undefined}
     */
    self.pe = function() {
        /** @type {number} */
        this.cb = parseInt(this.f.value, 10);
        /** @type {number} */
        this.tb = Math.round(this.cb / this.e) || 0;
        /** @type {string} */
        this.c.value = this.tb + "";
        f(this);
    };
    /**
     * @return {undefined}
     */
    self.oe = function() {
        /** @type {number} */
        this.tb = parseInt(this.c.value, 10);
        /** @type {number} */
        this.cb = Math.round(this.tb * this.e) || 0;
        /** @type {string} */
        this.cb.value = this.cb + "";
        f(this);
    };
    /**
     * @return {undefined}
     */
    self.qa = function() {
        this.focus();
    };
    /**
     * @return {undefined}
     */
    self.focus = function() {
        if (this.b) {
            this.b.focus();
            this.b.select();
        }
    };
    /**
     * @return {undefined}
     */
    self.ke = function() {
        var isChecked = this.Ia.checked;
        editor.getInstance();
        substitute(tok.Fd, !isChecked);
        compare();
        f(this);
    };
    /**
     * @return {undefined}
     */
    self.ie = function() {
        var indents = this.Hb.checked;
        editor.getInstance();
        substitute(tok.Ed, indents);
        compare();
        f(this);
    };
    /**
     * @return {undefined}
     */
    self.ne = function() {
        f(this);
    };
    /**
     * @return {undefined}
     */
    self.me = function() {
        var indents = this.Ha.checked;
        editor.getInstance();
        substitute(tok.Gd, indents);
        compare();
        f(this);
    };
    /**
     * @return {undefined}
     */
    self.je = function() {
        this.focus();
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    self.le = function(value) {
        value = callback("share-embed-size-radio", value.currentTarget);
        value = this.ja[value.value];
        value.select();
        editor.getInstance();
        sendMessage("ems", value.name);
        compare();
        f(this);
        if (value != this.l) {
            this.focus();
        }
    };
    /**
     * @return {undefined}
     */
    self.qe = function() {
        f(this);
    };
    /**
     * @return {undefined}
     */
    View.prototype.select = function() {
        /** @type {boolean} */
        this.b.checked = TRUE;
        var node = contains(this.b, "li");
        var element = contains(node, "ul");
        element = add("li", "selected", element);
        slice(element, function(obj) {
            removeClass(obj, "selected");
        });
        end(node, "selected");
    };
    factory(group, View);
    /**
     * @return {undefined}
     */
    group.prototype.l = function() {
        /** @type {number} */
        this.width = parseInt(this.e.value, 10);
        /** @type {number} */
        this.height = Math.round(this.width / this.f) || 0;
        /** @type {string} */
        this.c.value = this.height + "";
    };
    /**
     * @return {undefined}
     */
    group.prototype.j = function() {
        /** @type {number} */
        this.height = parseInt(this.c.value, 10);
        /** @type {number} */
        this.width = Math.round(this.height * this.f) || 0;
        /** @type {string} */
        this.e.value = this.width + "";
    };
    var _ref1 = {
        FACEBOOK: "share_facebook",
        BLOGGER: "share_blogger",
        TWITTER: "share_twitter",
        GOOGLEPLUS: "share_gplus"
    };
    self = X.prototype;
    /**
     * @return {undefined}
     */
    self.Ka = function() {
        var current = callback("share-panel-show-url-options");
        addEvent(current, "click", bind(this.zf, this));
        current = callback("share-panel-show-more");
        addEvent(current, "click", bind(this.uf, this));
        current = callback("share-panel-services", this.k);
        addEvent(current, "click", bind(this.vf, this));
        current = callback("share-panel-embed", this.k);
        addEvent(current, "click", bind(this.sf, this));
        current = callback("share-panel-email", this.k);
        addEvent(current, "click", bind(this.rf, this));
        if (current = callback("share-panel-hangout", this.k)) {
            addEvent(current, "click", bind(this.tf, this));
        }
        this.W = callback("share-panel-url", this.k);
        addEvent(this.W, "click", bind(this.Af, this));
        addEvent(this.W, "focus", bind(function() {
            end(this.W, "focused");
        }, this));
        addEvent(this.W, "blur", bind(function() {
            removeClass(this.W, "focused");
        }, this));
        this.Jb = callback("share-panel-long-url", this.k);
        this.j = callback("share-panel-start-at", this.k);
        this.aa = callback("share-panel-start-at-time", this.k);
        addEvent(this.aa, "keyup", bind(this.Bf, this));
        addEvent(this.aa, "click", bind(this.yf, this));
        addEvent(this.aa, "focus", bind(function() {
            end(this.aa, "focused");
        }, this));
        addEvent(this.aa, "blur", bind(function() {
            removeClass(this.aa, "focused");
        }, this));
        this.Va = callback("share-panel-hd", this.k);
        this.l = callback("share-panel-url-options", this.k);
        addEvent(this.l, "click", bind(this.Qb, this));
        this.K = callback("share-panel-services", this.k);
        this.Q = callback("share-panel-buttons", this.k);
        current = callback("share-panel-show-more", this.k);
        addEvent(current, "click", bind(this.xf, this));
        unbind(this.k, "click", bind(this.wf, this), "share-service-button");
        if (this.C) {
            unbind(this.k, "click", bind(this.Cf, this), "share-service-expand-arrow");
            this.e = callback("share-panel-services-container", this.k);
            addEvent(require("share-with-playlist"), "click", bind(this.Ff, this));
            addEvent(require("share-with-playlist-current"), "click", bind(this.Df, this));
            addEvent(require("share-with-playlist-first"), "click", bind(this.Ef, this));
        }
    };
    /**
     * @param {?} pdataCur
     * @return {undefined}
     */
    self.Cf = function(pdataCur) {
        var data = index(pdataCur.target, "secondary");
        pdataCur = callback("overlay", data);
        var params = same(data, "expanded");
        /** @type {number} */
        var styles = 0;
        if ("webkitTransition" in pdataCur.style) {
            styles = document.defaultView.getComputedStyle(pdataCur, value);
            /** @type {number} */
            styles = 1E3 * parseFloat(styles["-webkit-transition-duration"]);
        } else {
            if ("MozTransition" in pdataCur.style) {
                styles = document.defaultView.getComputedStyle(pdataCur, value);
                /** @type {number} */
                styles = 1E3 * parseFloat(styles.getPropertyValue("-moz-transition-duration"));
            } else {
                if ("OTransition" in pdataCur.style) {
                    styles = document.defaultView.getComputedStyle(pdataCur, value);
                    /** @type {number} */
                    styles = 1E3 * parseFloat(styles.getPropertyValue("-o-transition-duration"));
                }
            }
        }
        /** @type {string} */
        var prop = "rtl" == document.body.getAttribute("dir") ? "right" : "left";
        /** @type {string} */
        params = params ? "0px" : append(data).width + "px";
        /** @type {string} */
        pdataCur.style[prop] = params;
        attr(function() {
            validate(data, "expanded");
        }, styles);
    };
    /**
     * @return {undefined}
     */
    self.qa = function() {
        if (this.W) {
            if (!same(this.W, "focused")) {
                this.W.focus();
                this.W.select();
            }
        }
    };
    /**
     * @return {undefined}
     */
    self.Qb = function() {
        if (!same(this.W, "focused")) {
            var str = this.qd;
            if (this.Jb) {
                if (this.Jb.checked) {
                    str = this.pd;
                }
            }
            var options = {};
            if (this.Va) {
                if (this.Va.checked) {
                    /** @type {number} */
                    options.hd = 1;
                }
            }
            var result;
            if (result = !this.j.disabled) {
                if (result = this.j.checked) {
                    var a = this.aa.value;
                    /** @type {Array} */
                    result = ["h", "m", "s"];
                    var b = deepEqual(result);
                    b.reverse();
                    var obj = {};
                    a = a.toLowerCase().match(/\d+\s*[hms]?/g) || [];
                    a = md5_gg(a, function(optionsString) {
                        var propertyName = (optionsString.match(/[hms]/) || [""])[0];
                        return propertyName ? (obj[propertyName] = parseInt(optionsString.match(/\d+/)[0], 10), t) : TRUE;
                    });
                    a.reverse();
                    for (; a.length && b.length;) {
                        var name = b.shift();
                        if (!(name in obj)) {
                            /** @type {number} */
                            obj[name] = parseInt(a.shift(), 10);
                        }
                    }
                    if (a.length || (59 < obj.s || (59 < obj.m || 9 < obj.h))) {
                        /** @type {null} */
                        result = value;
                    } else {
                        /** @type {string} */
                        var err = "";
                        slice(result, function(implementation) {
                            if (obj[implementation]) {
                                err += obj[implementation] + implementation;
                            }
                        });
                        result = err || value;
                    }
                }
            }
            if (result) {
                options.t = result;
            }
            str = applyReplacement(str, options);
            if (this.W.value != str) {
                this.W.value = str;
            }
        }
    };
    /**
     * @return {undefined}
     */
    self.Bf = function() {
        /** @type {boolean} */
        this.X = TRUE;
        /** @type {boolean} */
        this.j.checked = TRUE;
        this.Qb();
    };
    /**
     * @return {undefined}
     */
    self.yf = function() {
        /** @type {boolean} */
        this.j.checked = TRUE;
        if (!this.aa.value.match(/[1-9]/)) {
            /** @type {string} */
            this.aa.value = "";
        }
    };
    /**
     * @return {undefined}
     */
    self.Af = function() {
        this.W.select();
    };
    /**
     * @return {undefined}
     */
    self.rf = function() {
        var followingChild = defs.getInstance();
        requestData(followingChild, this.Q);
        requestData(followingChild, this.l);
        requestData(followingChild, this.K);
        if (this.c) {
            split(this.c);
        }
        if (this.e) {
            split(this.e);
        }
        if (!this.b) {
            this.b = callback("share-panel-email-container", this.k);
        }
        layout(this.b);
        if (!equal(this.b, "disabled")) {
            if (getSize(this.b)) {
                if (this.ca) {
                    this.ca.qa();
                } else {
                    this.ca = new Gallery(this.b, this.Xa, this.f, this.P, this.C);
                }
            }
        }
        update("share_mail");
    };
    /**
     * @return {undefined}
     */
    self.tf = function() {
        var suiteView = forEach();
        if (suiteView) {
            if (suiteView.pauseVideo) {
                suiteView.pauseVideo();
            }
        }
        suiteView = applyReplacement("https://talkgadget.google.com/hangouts", {
            hl: this.mc,
            authuser: this.Xa,
            gid: "youtube",
            gd: this.f,
            hs: 5
        });
        /** @type {number} */
        var targetHeight = window.screen.height;
        /** @type {number} */
        var w = Math.min(0.9 * window.screen.width, 1E3);
        /** @type {number} */
        targetHeight = Math.min(0.9 * targetHeight, 800);
        removeChild("HANGOUT", this.f + "");
        popup(suiteView, {
            width: w,
            height: targetHeight
        });
    };
    /**
     * @return {undefined}
     */
    self.sf = function() {
        var followingChild = defs.getInstance();
        requestData(followingChild, this.Q);
        requestData(followingChild, this.l);
        requestData(followingChild, this.K);
        if (this.b) {
            split(this.b);
        }
        if (this.e) {
            split(this.e);
        }
        if (!this.c) {
            this.c = callback("share-panel-embed-container", this.k);
        }
        layout(this.c);
        if (!equal(this.c, "disabled")) {
            if (getSize(this.c)) {
                if (this.Ga) {
                    this.Ga.qa();
                } else {
                    this.Ga = new empty(this.c, this.f, this.P, this.C);
                }
            }
        }
        update("share_embed");
    };
    /**
     * @param {(Object|string)} event
     * @return {undefined}
     */
    self.wf = function(event) {
        event = equal(event.currentTarget, "service-name") || "";
        if (event = _ref1[event]) {
            update(event);
        }
    };
    /**
     * @return {undefined}
     */
    self.zf = function() {
        requestData(defs.getInstance(), this.K);
        if (this.b) {
            split(this.b);
        }
        if (this.c) {
            split(this.c);
        }
    };
    /**
     * @return {undefined}
     */
    self.uf = function() {
        requestData(defs.getInstance(), this.l);
        if (this.b) {
            split(this.b);
        }
        if (this.c) {
            split(this.c);
        }
    };
    /**
     * @return {undefined}
     */
    self.xf = function() {
        parse3dMatrix(this);
    };
    /**
     * @return {undefined}
     */
    self.vf = function() {
        parse3dMatrix(this);
        if (this.e) {
            call(this.e);
        }
    };
    /**
     * @param {Event} event
     * @return {undefined}
     */
    self.Ff = function(event) {
        _forEach(this);
        /** @type {boolean} */
        var y = t;
        if (event.target.checked) {
            y = contains(require("share-with-playlist-first"), "li");
            y = same(y, "yt-uix-button-menu-item-selected");
        }
        getItemSource(this, event.target.checked, y);
    };
    /**
     * @return {undefined}
     */
    self.Df = function() {
        highlight(this);
        getItemSource(this, TRUE);
    };
    /**
     * @return {undefined}
     */
    self.Ef = function() {
        highlight(this);
        getItemSource(this, TRUE, TRUE);
    };
    self = Comment.prototype;
    /** @type {boolean} */
    self.Yd = t;
    /** @type {null} */
    self.Eb = value;
    /** @type {null} */
    self.ec = value;
    /**
     * @return {undefined}
     */
    self.init = function() {
        if (!this.Yd) {
            /** @type {boolean} */
            this.Yd = TRUE;
            this.Eb = callback("player-root", element);
            this.ec = callback("player-actions-container", this.Eb);
            var error = callback("player-actions-close", this.ec);
            addEvent(error, "click", bind(this.tg, this));
        }
    };
    /**
     * @return {undefined}
     */
    self.tg = function() {
        done(this.Eb, "actions-mode", t);
    };
    /**
     * @return {undefined}
     */
    self.sg = function() {
        if (600 > this.Eb.clientWidth) {
            end(this.ec, "small-view");
        }
    };
    /** @type {null} */
    self.Pc = value;
    /**
     * @param {Array} dataAndEvents
     * @param {boolean} deepDataAndEvents
     * @return {undefined}
     */
    self.hf = function(dataAndEvents, deepDataAndEvents) {
        this.init();
        done(this.Eb, "actions-mode", TRUE);
        if (this.Pc) {
            this.Pc.qa();
        } else {
            var current = callback("player-actions-share", this.ec);
            this.Pc = new X(current, dataAndEvents, deepDataAndEvents, bind(this.sg, this));
        }
    };
    iter().match(/CPU OS (\d+)_/);
    var views = {};
    factory(next, recordType);
    self = next.prototype;
    /** @type {boolean} */
    self.yc = t;
    /** @type {null} */
    self.G = value;
    /** @type {null} */
    self.Kb = value;
    /** @type {null} */
    self.Ob = value;
    /** @type {null} */
    self.pc = value;
    /** @type {null} */
    self.Mb = value;
    /**
     * @param {Object} line
     * @return {undefined}
     */
    self.xe = function(line) {
        line = line || this.G;
        if (!(line instanceof Buffer)) {
            line = new Buffer(line);
        }
        delete line.fallback;
        if (line.html5) {
            /** @type {number} */
            line.args.autoplay = 1;
        } else {
            onError("html5_ajax", this.eg);
        }
        /** @type {boolean} */
        this.yc = t;
        filter(this, line);
        clearElement(this.e);
        this.Mb();
    };
    /**
     * @return {undefined}
     */
    self.write = function() {
        if (!this.K) {
            end(this.c, "player-root");
            var e = this.G.attrs.width;
            if (e) {
                this.c.style.width = px(Number(e) || e, TRUE);
            }
            if (e = this.G.attrs.height) {
                this.c.style.height = px(Number(e) || e, TRUE);
            }
            setStyleImportant(this.c, "overflow", "hidden");
            if (!this.Kb && (clearElement(this.e), once(this))) {
                if (e = this.G.assets.css_actions) {
                    e = jQuery("div", {
                        "class": "player-actions-loaded"
                    });
                    document.body.appendChild(e);
                    /** @type {boolean} */
                    var j = "none" == _getStyle(e, "display");
                    join(e);
                    /** @type {boolean} */
                    e = !j;
                }
                if (e) {
                    loadCSS(this.G.assets.css_actions);
                }
                e = jQuery("div", "player-container");
                if (this.G.params.bgcolor) {
                    setStyleImportant(e, "background-color", this.G.params.bgcolor);
                }
                j = jQuery("div", "player-actions-container", jQuery("div", "player-actions-share"), jQuery("div", "player-actions-close", jQuery("div", "player-actions-close-button")));
                fail(this.c, e, j);
                this.e = e;
                if (!apply("yt.tracking.shareVideo")) {
                    run("yt.tracking.shareVideo", removeChild);
                    run("yt.tracking.shareList", last);
                }
                if (!apply("yt.window.popup")) {
                    run("yt.window.popup", insertBefore);
                }
            }
            this.pc();
        }
    };
    /**
     * @return {undefined}
     */
    self.oc = function() {
        var config = this.G.fa();
        /** @type {string} */
        config.attrs.id = this.X + "-html5";
        var Manager = apply("yt.player.Application");
        if (Manager) {
            new Manager(this.e, config);
        } else {
            poll(config.assets.js, bind(this.oc, this));
        }
    };
    /**
     * @return {undefined}
     */
    self.ze = function() {
        var p = this.G.fa();
        /** @type {string} */
        p.attrs.id = this.X + "-flash";
        p.attrs.width = p.attrs.width || "100%";
        p.attrs.height = p.attrs.height || "100%";
        e(this.e, p);
    };
    /**
     * @return {undefined}
     */
    self.ye = function() {
        postLink(this.G, this.Kb.force, bind(this.Od, this));
    };
    /**
     * @return {undefined}
     */
    self.Od = function() {
        if (!this.Ga) {
            var Block = require(this.G.attrs.id);
            try {
                Block.getApiInterface();
                notify(this.l);
                return;
            } catch (b) {}
            attr(bind(this.Od, this), 50);
        }
    };
    /**
     * @param {string} name
     * @param {?} opt_obj2
     * @return {undefined}
     */
    self.Lb = function(name, opt_obj2) {
        var oldconfig = not(opt_obj2);
        if (oldconfig) {
            if (!this.f[name]) {
                /** @type {string} */
                var method = "ytPlayer" + name + this.l;
                var v = bind(function(opt_e) {
                    this.ia.xa(name, opt_e);
                }, this);
                /** @type {string} */
                this.f[name] = method;
                global[method] = v;
                if (this.b.nativeAddEventListener) {
                    this.b.nativeAddEventListener(name, method);
                }
            }
            this.ia.wa(name, oldconfig);
        }
    };
    /**
     * @param {(Function|boolean)} $
     * @return {undefined}
     */
    self.ff = function($) {
        /** @type {function (Element): ?} */
        $ = $ ? lastChild : nextnode;
        var input = $(document.activeElement);
        for (; input && !(1 == input.nodeType && (input.focus(), input == document.activeElement));) {
            input = $(input);
        }
    };
    /**
     * @param {Object} data
     * @return {undefined}
     */
    self.gf = function(data) {
        var event = push("EVENT_ID");
        if (event) {
            url(data.url, {
                ei: event,
                feature: data.feature
            });
        }
    };
    /**
     * @return {undefined}
     */
    self.eg = function() {
        i("/html5", {
            qb: TRUE,
            method: "POST",
            B: {
                prefer_html5: TRUE,
                session_token: reset("html5_ajax")
            }
        });
    };
    /**
     * @return {undefined}
     */
    self.bd = function() {
        domready(this.c);
    };
    /**
     * @return {undefined}
     */
    self.S = function() {
        if (this.b.b) {
            this.b.b();
        }
        delete this.b;
        /** @type {null} */
        this.G.fallback = value;
        /** @type {null} */
        this.G.fallbackMessage = value;
        delete this.G;
        var apiName;
        for (apiName in this.f) {
            delete global[this.f[apiName]];
        }
        clearElement(this.e);
        next.J.S.call(this);
    };
    var stringOptions = apply("yt.player.embed") || message;
    run("yt.player.embed", stringOptions);
    var utils = apply("yt.player.update") || addToken;
    run("yt.player.update", utils);
    var domready = apply("yt.player.destroy") || require_;
    run("yt.player.destroy", domready);
    if (!apply("ytPlayerOnYouTubePlayerReady")) {
        run("ytPlayerOnYouTubePlayerReady", notify);
    }
    isUndefined(target);
    isUndefined(defs);
    isUndefined(OBJ2);
    factory(initialValue, orig);
    has(initialValue);
    /** @type {string} */
    initialValue.prototype.H = "char-counter";
    /**
     * @return {undefined}
     */
    initialValue.prototype.register = function() {
        removeEvent(this, "keydown", this.c, "input");
        removeEvent(this, "paste", this.c, "input");
        removeEvent(this, "cut", this.c, "input");
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    initialValue.prototype.c = function(value) {
        var data = this.L(value);
        if (data) {
            /** @type {boolean} */
            var udataCur = "true" == this.getData(data, "count-char-by-size");
            /** @type {number} */
            var num2 = parseInt(this.getData(data, "char-limit"), 10);
            if (!isNaN(num2)) {
                if (!(0 >= num2)) {
                    attr(bind(function() {
                        /** @type {number} */
                        var b = parseInt(value.getAttribute("maxlength"), 10);
                        if (!isNaN(b)) {
                            var a = isArguments(value, udataCur);
                            if (udataCur) {
                                if (a > b) {
                                    var n = value.value;
                                    var i = n.length;
                                    /** @type {number} */
                                    var suffixLength = 0;
                                    /** @type {number} */
                                    b = a - b;
                                    /** @type {string} */
                                    a = "";
                                    /** @type {number} */
                                    var d = 0;
                                    do {
                                        a += n[i - suffixLength];
                                        /** @type {number} */
                                        d = unescape(encodeURIComponent(a)).length;
                                        suffixLength++;
                                    } while (d < b);
                                    value.value = value.value.substring(0, i - suffixLength);
                                }
                            } else {
                                if (a > b) {
                                    value.value = value.value.substring(0, b);
                                }
                            }
                        }
                        /** @type {number} */
                        n = parseInt(this.getData(data, "warn-at-chars-remaining"), 10);
                        if (isNaN(n)) {
                            /** @type {number} */
                            n = 0;
                        }
                        /** @type {number} */
                        i = num2 - isArguments(value, udataCur);
                        done(data, get(this, "maxed-out"), i < n);
                        /** @type {number} */
                        callback(get(this, "remaining"), data).innerHTML = i;
                    }, this), 0);
                }
            }
        }
    };
    factory(observable, orig);
    self = observable.prototype;
    /**
     * @return {?}
     */
    self.Tc = function() {
        return this.Nc && 0 == cDigit.indexOf("6") ? t : TRUE;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    self.L = function(str) {
        var match = orig.prototype.L.call(this, str);
        return !match ? str : match;
    };
    /**
     * @param {?} data
     * @param {string} name
     * @return {?}
     */
    self.getData = function(data, name) {
        var params = observable.J.getData.call(this, data, "card-config");
        return params && ((params = apply(params)) && params[name]) ? params[name] : observable.J.getData.call(this, data, name);
    };
    /**
     * @param {?} data
     * @return {undefined}
     */
    self.yb = function(data) {
        var result = this.L(data);
        if (result) {
            end(result, get(this, "active"));
            var item = handle(this, data, result);
            if (item) {
                item.cardTargetNode = data;
                item.cardRootNode = result;
                render(this, data, item);
                var templateName = get(this, "card-visible");
                var e = this.getData(data, "card-delegate-show") && this.getData(result, "card-action");
                this.ga(result, "card-action", data);
                split(item);
                attr(function() {
                    if (!e) {
                        call(item);
                    }
                    end(item, templateName);
                }, 10);
            }
        }
    };
    self.Td = {
        Bg: 200,
        qg: 200
    };
    factory(suiteView, observable);
    has(suiteView);
    self = suiteView.prototype;
    /** @type {string} */
    self.H = "clickcard";
    /**
     * @return {undefined}
     */
    self.register = function() {
        removeEvent(this, "click", this.Pg, "target");
        removeEvent(this, "click", this.Og, "close");
    };
    /**
     * @param {?} id
     * @return {undefined}
     */
    self.Pg = function(id) {
        var name = this.getData(id, "card-target");
        id = name ? require(name) : id;
        name = this.L(id);
        if (same(name, get(this, "active"))) {
            iterate(this, id);
            removeClass(name, get(this, "active"));
        } else {
            this.yb(id);
            end(name, get(this, "active"));
        }
    };
    /**
     * @param {?} c
     * @return {undefined}
     */
    self.yb = function(c) {
        suiteView.J.yb.call(this, c);
        var clone = this.L(c);
        getNext(this);
        if (!equal(clone, "click-outside-persists")) {
            this.c = c;
            this.e = addEvent(document, "click", bind(this.Kf, this));
        }
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    self.Kf = function(e) {
        if (!index(e.target, "yt-uix" + (this.H ? "-" + this.H : "") + "-card")) {
            getNext(this);
        }
    };
    /**
     * @param {?} qualifier
     * @return {undefined}
     */
    self.Og = function(qualifier) {
        if (qualifier = index(qualifier, get(this, "card"))) {
            iterate(this, qualifier.cardTargetNode);
        }
    };
    factory(scrubbed, orig);
    has(scrubbed);
    /** @type {string} */
    scrubbed.prototype.H = "close";
    /**
     * @return {undefined}
     */
    scrubbed.prototype.register = function() {
        removeEvent(this, "click", this.c);
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    scrubbed.prototype.c = function(value) {
        var item;
        var name = this.getData(value, "close-parent-class");
        var editor = this.getData(value, "close-parent-id");
        if (editor) {
            item = require(editor);
        } else {
            if (name) {
                item = index(value, name);
            }
        }
        if (item) {
            split(item);
        }
        this.ga(value, "close-callback", item);
    };
    factory(cache, orig);
    has(cache);
    /** @type {string} */
    cache.prototype.H = "contextlink";
    /**
     * @return {undefined}
     */
    cache.prototype.register = function() {
        removeEvent(this, "click", this.c);
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    cache.prototype.c = function(value) {
        var x = value.href;
        if (x) {
            var p = parseURL(x);
            if (p == window.location.host || !p && 0 == x.lastIndexOf("/", 0)) {
                if (p = isBoolean(x), p = _find(p)) {
                    p = getValue(x, "v");
                    if (!p) {
                        var worlds = (getValue(x, "video_ids") || "").split(",");
                        if (worlds) {
                            if (1 < worlds.length) {
                                /** @type {number} */
                                x = parseInt(getValue(x, "index"), 10);
                                p = 0 < x ? worlds[x] : worlds[0];
                            }
                        }
                        if (!p) {
                            return;
                        }
                    }
                    if (value = complete(value)) {
                        model.Oa(p, JSON.stringify(value), setAttribute() + 6E5);
                    }
                }
            }
        }
    };
    factory(OBJ1, observable);
    has(OBJ1);
    self = OBJ1.prototype;
    /** @type {string} */
    self.H = "hovercard";
    /**
     * @return {undefined}
     */
    self.register = function() {
        removeEvent(this, "mouseenter", this.Gg, "target");
        removeEvent(this, "mouseleave", this.Ig, "target");
        removeEvent(this, "mouseenter", this.Hg, "card");
        removeEvent(this, "mouseleave", this.Jg, "card");
    };
    /**
     * @param {?} data
     * @return {undefined}
     */
    self.Gg = function(data) {
        if (color != data) {
            if (color) {
                iterate(this, color);
                /** @type {null} */
                color = value;
            }
            var functionStub = bind(this.yb, this, data);
            /** @type {number} */
            var top = parseInt(this.getData(data, "delay-show"), 10);
            functionStub = attr(functionStub, -1 < top ? top : this.Td.Bg);
            this.setData(data, "card-timer", functionStub.toString());
            color = data;
            if (data.alt) {
                this.setData(data, "card-alt", data.alt);
                /** @type {string} */
                data.alt = "";
            }
            if (data.title) {
                this.setData(data, "card-title", data.title);
                /** @type {string} */
                data.title = "";
            }
        }
    };
    /**
     * @param {?} data
     * @return {undefined}
     */
    self.Ig = function(data) {
        /** @type {number} */
        var id = parseInt(this.getData(data, "card-timer"), 10);
        _(id);
        /** @type {boolean} */
        this.L(data).isCardHidable = TRUE;
        /** @type {number} */
        id = parseInt(this.getData(data, "delay-hide"), 10);
        id = -1 < id ? id : this.Td.qg;
        attr(bind(this.rg, this, data), id);
        if (id = this.getData(data, "card-alt")) {
            data.alt = id;
        }
        if (id = this.getData(data, "card-title")) {
            data.title = id;
        }
    };
    /**
     * @param {?} item
     * @return {undefined}
     */
    self.rg = function(item) {
        if (this.L(item).isCardHidable) {
            iterate(this, item);
            /** @type {null} */
            color = value;
        }
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    self.Hg = function(dataAndEvents) {
        if (dataAndEvents) {
            /** @type {boolean} */
            dataAndEvents.cardRootNode.isCardHidable = t;
        }
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    self.Jg = function(dataAndEvents) {
        if (dataAndEvents) {
            iterate(this, dataAndEvents.cardTargetNode);
        }
    };
    /** @type {null} */
    var color = value;
    factory(obj, orig);
    has(obj);
    /** @type {string} */
    obj.prototype.H = "redirect-link";
    /**
     * @return {undefined}
     */
    obj.prototype.register = function() {
        removeEvent(this, "click", this.c);
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    obj.prototype.c = function(value) {
        if (!equal(value, "redirect-href-updated")) {
            data(value, "redirect-href-updated", "true");
            var path = push("XSRF_REDIRECT_TOKEN");
            var name = push("XSRF_FIELD_NAME");
            if (path && name) {
                var options = {};
                options.q = value.href;
                options[name] = path;
                value.href = applyReplacement("/redirect", options);
            }
        }
    };
    factory(query, orig);
    has(query);
    /** @type {string} */
    query.prototype.H = "sessionlink";
    /**
     * @return {undefined}
     */
    query.prototype.register = function() {
        removeEvent(this, "click", this.c);
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    query.prototype.c = function(value) {
        encodeUriQuery(value);
    };
    factory(seen, orig);
    has(seen);
    /** @type {string} */
    seen.prototype.H = "tile";
    /**
     * @return {undefined}
     */
    seen.prototype.register = function() {
        removeEvent(this, "click", this.c);
    };
    /**
     * @param {?} value
     * @param {string} obj
     * @param {Object} e
     * @return {undefined}
     */
    seen.prototype.c = function(value, obj, e) {
        if (!contains(e.target, "a") && (!contains(e.target, "button") && (value = callback(get(this, "link"), value)))) {
            if (documentElement && !css(9)) {
                value.click();
            } else {
                if (same(value, "yt-uix-sessionlink")) {
                    encodeUriQuery(value);
                }
                visit(value.href);
            }
        }
    };
    /**
     * @return {undefined}
     */
    a.prototype.b = function() {
        if (!this.Ac) {
            loadCSS(push("CREATE_CHANNEL_CSS_URL"));
            poll(push("CREATE_CHANNEL_JS_URL"), bind(function() {
                /** @type {boolean} */
                this.Ac = TRUE;
                if (this.zc) {
                    Parser(this, this.zc);
                }
            }, this));
        }
    };
    /**
     * @return {undefined}
     */
    a.prototype.e = function() {
        var udataCur = push("CREATE_CHANNEL_NEXT_URL");
        if (udataCur) {
            if ("/" == udataCur) {
                visit(udataCur);
            } else {
                window.history.back();
            }
        }
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    a.prototype.c = function(value) {
        /** @type {string} */
        var pdataCur = "default";
        if (value && (value = equal(value.currentTarget, "upsell"), "upload" == value || ("playlist" == value || "comment" == value))) {
            pdataCur = value;
        }
        Parser(this, pdataCur);
    };
    var object = {
        LOADING: "loading",
        kh: "content",
        lj: "working"
    };
    /**
     * @param {Object} target
     * @return {undefined}
     */
    escape.prototype.j = function(target) {
        target = target.currentTarget;
        if (!target.disabled) {
            target = equal(target, "action") || "";
            match(this, target);
        }
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    escape.prototype.f = function(value) {
        if (27 == value.keyCode) {
            match(this, "cancel");
        }
    };
    run("yt.ui.Dialog", escape);
    var acc;
    var isBlock;
    var destElements;
    var gotErr;
    /** @type {boolean} */
    var removeEndNode = t;
    self = constructor.prototype;
    /**
     * @return {undefined}
     */
    self.ih = function() {
        split("ad_creative_1");
        extend("ads-masthead-hide");
        increment(require("page"), TRUE);
        if (!this.c) {
            split("ad_creative_collapse_btn_1");
        }
        call("ad_creative_expand_btn_1");
        testDone(this);
        clear("homepage_collapse_masthead_ad", element, element);
    };
    /**
     * @return {undefined}
     */
    self.od = function() {
        call("ad_creative_expand_btn_1");
        join(require("premium-yva"));
        setStyleImportant(document.getElementById("feed"), {
            "margin-top": 0
        });
        testDone(this);
    };
    /**
     * @return {undefined}
     */
    self.gh = function() {
        addClass(document.getElementById("premium-yva"), "premium-yva-unexpanded", "premium-yva-expanded");
    };
    /**
     * @return {undefined}
     */
    self.hh = function() {
        addClass(document.getElementById("premium-yva"), "premium-yva-expanded", "premium-yva-unexpanded");
    };
    /**
     * @return {undefined}
     */
    self.dh = function() {
        split("premium-yva");
        removeClass(require("premium-yva"), "premium-yva-unexpanded");
    };
    /**
     * @return {undefined}
     */
    self.jh = function() {
        editor.getInstance();
        sendMessage("HIDDEN_MASTHEAD_ID", t);
        compare();
        clear("homepage_expand_masthead_ad", element, element);
        visit(document.location.href);
    };
    var current;
    self = setup.prototype;
    /**
     * @return {undefined}
     */
    self.focus = function() {
        this.U.focus();
    };
    /**
     * @return {undefined}
     */
    self.ed = function() {
        if (!this.U.readOnly) {
            enter(this);
        }
    };
    /**
     * @param {Object} event
     * @return {undefined}
     */
    self.Je = function(event) {
        if (this.j) {
            switch (event.keyCode) {
                case 13:
                    this.cd(event);
                    break;
                case 27:
                    remove(this);
            }
        }
    };
    /**
     * @return {undefined}
     */
    self.dd = function() {
        if (!same(this.u, "has-focus")) {
            split(this.Ya);
        }
        end(this.u, "has-focus");
        extend("comments-focus", this.u);
    };
    /**
     * @return {undefined}
     */
    self.Ie = function() {
        extend("comments-blur", this.u);
    };
    /**
     * @param {Object} event
     * @return {undefined}
     */
    self.cd = function(event) {
        event.preventDefault();
        if (!this.sa.disabled) {
            /** @type {boolean} */
            this.sa.disabled = TRUE;
            /** @type {boolean} */
            this.U.readOnly = TRUE;
            event = endsWith(MAP(this.u));
            event.screen = key({
                h: window.screen.height,
                w: window.screen.width,
                d: window.screen.colorDepth
            });
            var message = event.comment;
            message = {
                return_ajax: "true",
                len: message.length,
                wc: message.split(/\s+/).length
            };
            if (this.u.reply_parent_id.value) {
                /** @type {number} */
                message.reply = 1;
            }
            if (this.b) {
                message.tag = this.b;
            }
            var elem = push("PLAYBACK_ID");
            if (elem) {
                event.plid = elem;
            }
            i(this.u.action, {
                format: "XML",
                method: "POST",
                n: message,
                B: event,
                /**
                 * @param {?} er
                 * @param {?} d
                 * @return {undefined}
                 */
                R: function(er, d) {
                    var e = d.str_code;
                    switch (e) {
                        case "OK":
                            /** @type {Element} */
                            e = document.createElement("ul");
                            e.innerHTML = d.html_content;
                            e = res(e);
                            if (this.u.reply_parent_id.value) {
                                var ret = contains(this.u, value, "comments-post-container");
                                var target = contains(ret, value, "comment");
                                join(ret);
                                addClass(target, "replying", "has-child");
                                end(e, "child");
                                done(e, "last", !(target.nextElementSibling != element ? target.nextElementSibling : sibling(target.nextSibling)));
                                if (target.parentNode) {
                                    target.parentNode.insertBefore(e, target.nextSibling);
                                }
                            } else {
                                ret = contains(this.u, value, "comments-section");
                                ret = callback("comment-list", ret);
                                ret.insertBefore(e, ret.childNodes[0] || value);
                                remove(this);
                            }
                            pass(e);
                            extend("comment-submit-success");
                            break;
                        case "PENDING":
                            setstr(this);
                            this.Uc.innerHTML = replace("COMMENT_PENDING");
                            addClass(this.Ya, "yt-alert-error", "yt-alert-info");
                            call(this.Ya);
                            break;
                        default:
                            switch (e) {
                                case "PENDING":
                                    ret = replace("COMMENT_PENDING");
                                    break;
                                case "BLOCKED":
                                    ret = replace("COMMENT_BLOCKED");
                                    break;
                                case "EMAIL":
                                    ret = replace("COMMENT_ERROR_EMAIL");
                                    break;
                                case "INLINE_CAPTCHAFAIL":
                                    ret = replace("COMMENT_CAPTCHAFAIL");
                                    break;
                                case "SHOW_COUNTDOWN":
                                    ret = replace("SHOW_COUNTDOWN");
                                    break;
                                case "FAILED_OWNER_LINKING":
                                    ret = replace("COMMENT_OWNER_LINKING");
                            }
                            ret = ret || (value || replace("COMMENT_ERROR"));
                            this.Uc.innerHTML = ret;
                            addClass(this.Ya, "yt-alert-info", "yt-alert-error");
                            call(this.Ya);
                            switch (e) {
                                case "INLINE_CAPTCHA":
                                    ;
                                case "INLINE_CAPTCHAFAIL":
                                    i("/comment_servlet?gimme_captcha=1", {
                                        format: "XML",
                                        method: "POST",
                                        B: {
                                            session_token: reset("comment_servlet")
                                        },
                                        /**
                                         * @param {?} value
                                         * @param {string} obj
                                         * @return {undefined}
                                         */
                                        i: function(value, obj) {
                                            if (!this.La) {
                                                /** @type {Element} */
                                                this.La = document.createElement("div");
                                                /** @type {string} */
                                                this.La.className = "comment-captcha";
                                                var el = this.U;
                                                if (el.parentNode) {
                                                    el.parentNode.insertBefore(this.La, el.nextSibling);
                                                }
                                            }
                                            this.La.innerHTML = obj.html_content;
                                            /** @type {boolean} */
                                            this.sa.disabled = t;
                                        },
                                        z: this
                                    });
                                    break;
                                case "SHOW_COUNTDOWN":
                                    /** @type {number} */
                                    var xhtml = parseInt(d.countdown_timer, 10) || 30;
                                    this.lc.innerHTML = xhtml;
                                    split(callback("comments-remaining"));
                                    call(this.kc);
                                    /** @type {boolean} */
                                    this.sa.disabled = TRUE;
                                    var f = play(bind(function() {
                                        if (0 == xhtml) {
                                            readdir(f);
                                            setter(this);
                                        } else {
                                            xhtml--;
                                            this.lc.innerHTML = xhtml;
                                        }
                                    }, this), 1E3);
                                    this.jc.push(f);
                                    break;
                                default:
                                    /** @type {boolean} */
                                    this.sa.disabled = t;
                                    setstr(this);
                            };
                    }
                    /** @type {boolean} */
                    this.U.readOnly = t;
                },
                z: this
            });
            update("comment");
        }
    };
    /**
     * @return {undefined}
     */
    Request.prototype.pb = function() {
        var current = callback("comments-pagination", this.k);
        if (current) {
            if (equal(current, "ajax-enabled")) {
                this.e.push(unbind(this.k, "click", bind(this.c, this), "yt-uix-pager-button"));
            }
        }
    };
    /**
     * @param {?} data
     * @return {undefined}
     */
    Request.prototype.c = function(data) {
        data.preventDefault();
        data = data.currentTarget;
        if (!same(data, "yt-uix-button-toggled")) {
            if (this.Rb == data) {
                join(this.Rb);
            }
            /** @type {number} */
            var priority = parseInt(equal(data, "page"), 10);
            call("comments-loading");
            extend("comments-page-changing");
            i("/watch_ajax?action_get_comments=1", {
                format: "XML",
                n: {
                    v: push("VIDEO_ID"),
                    p: priority,
                    commentthreshold: push("COMMENTS_THRESHHOLD"),
                    commenttype: "everything",
                    enable_live_comments: this.b ? "yes" : value,
                    page_size: push("COMMENTS_PAGE_SIZE"),
                    source: push("COMMENT_SOURCE")
                },
                /**
                 * @param {?} value
                 * @param {string} obj
                 * @return {undefined}
                 */
                i: function(value, obj) {
                    if (obj.html_content) {
                        var params = obj.html_content;
                        if (this.Rb) {
                            /** @type {Element} */
                            var key = document.createElement("div");
                            key.innerHTML = params;
                            this.k.appendChild(key);
                            this.Rb = callback("yt-uix-pager-show-more", key);
                        } else {
                            this.k.innerHTML = params;
                        }
                        pass(this.k);
                        params = callback("comment-list", this.k);
                        key = callback("live-comments-setting", this.k);
                        if (params) {
                            extend("comments-page-changed", params, key, priority);
                        }
                    }
                    split("comments-loading");
                },
                z: this
            });
        }
    };
    /** @type {Array} */
    var script = [];
    /** @type {boolean} */
    var tmp = t;
    /** @type {boolean} */
    var fun = t;
    /** @type {boolean} */
    var showMessage = !!window.DOMTokenList;
    /** @type {function (Element): ?} */
    var isNull = showMessage ? function(val) {
        return val.classList;
    } : function(val) {
        val = val.className;
        return isString(val) && val.match(/\S+/g) || [];
    };
    /** @type {function (Element, (Object|string)): ?} */
    var animateClose = showMessage ? function(element, path) {
        return element.classList.contains(path);
    } : function(x, value) {
        return copy(isNull(x), value);
    };
    /** @type {function (Element, string): undefined} */
    var throttledUpdate = showMessage ? function(targetBody, dir) {
        targetBody.classList.add(dir);
    } : function(element, className) {
        if (!animateClose(element, className)) {
            element.className += 0 < element.className.length ? " " + className : className;
        }
    };
    /** @type {function (Element, string): undefined} */
    var body = showMessage ? function(activeTab, key) {
        activeTab.classList.remove(key);
    } : function(tr, className) {
        if (animateClose(tr, className)) {
            tr.className = md5_gg(isNull(tr), function(c) {
                return c != className;
            }).join(" ");
        }
    };
    has(ctor);
    /** @type {number} */
    ctor.prototype.b = 0;
    ctor.getInstance();
    factory(Events, game);
    self = Events.prototype;
    self.Jf = ctor.getInstance();
    /** @type {null} */
    self.Cd = value;
    /** @type {boolean} */
    self.ta = t;
    /** @type {null} */
    self.$ = value;
    /** @type {null} */
    self.hb = value;
    /** @type {null} */
    self.Zb = value;
    /** @type {null} */
    self.Cb = value;
    /** @type {boolean} */
    self.Vc = t;
    /**
     * @return {?}
     */
    self.getId = function() {
        return this.Cd || (this.Cd = ":" + (this.Jf.b++).toString(36));
    };
    /**
     * @return {?}
     */
    self.A = function() {
        return this.$;
    };
    /**
     * @param {?} mapper
     * @return {undefined}
     */
    self.Kc = function(mapper) {
        if (this.hb) {
            if (this.hb != mapper) {
                log(Error("Method not supported"));
            }
        }
        Events.J.Kc.call(this, mapper);
    };
    /**
     * @return {undefined}
     */
    self.rd = function() {
        this.$ = this.e.createElement("div");
    };
    /**
     * @param {Array} obj
     * @return {undefined}
     */
    self.eb = function(obj) {
        if (this.ta) {
            log(Error("Component already rendered"));
        }
        if (!this.$) {
            this.rd();
        }
        if (obj) {
            obj.insertBefore(this.$, value);
        } else {
            this.e.b.body.appendChild(this.$);
        }
        if (!this.hb || this.hb.ta) {
            this.rb();
        }
    };
    /**
     * @param {?} text
     * @return {undefined}
     */
    self.nc = function(text) {
        this.$ = text;
    };
    /**
     * @return {undefined}
     */
    self.rb = function() {
        /** @type {boolean} */
        this.ta = TRUE;
        mergeSort(this, function(o) {
            if (!o.ta) {
                if (o.A()) {
                    o.rb();
                }
            }
        });
    };
    /**
     * @return {undefined}
     */
    self.vb = function() {
        mergeSort(this, function(a) {
            if (a.ta) {
                a.vb();
            }
        });
        if (this.l) {
            var l = this.l;
            slice(l.b, removeEventListener);
            /** @type {number} */
            l.b.length = 0;
        }
        /** @type {boolean} */
        this.ta = t;
    };
    /**
     * @return {undefined}
     */
    self.S = function() {
        Events.J.S.call(this);
        if (this.ta) {
            this.vb();
        }
        if (this.l) {
            this.l.la();
            delete this.l;
        }
        mergeSort(this, function($scope) {
            $scope.la();
        });
        if (!this.Vc) {
            if (this.$) {
                join(this.$);
            }
        }
        /** @type {null} */
        this.hb = this.$ = this.Cb = this.Zb = value;
    };
    /**
     * @param {Object} item
     * @param {?} opt_unrender
     * @return {?}
     */
    self.removeChild = function(item, opt_unrender) {
        if (item) {
            var name = isString(item) ? item : item.getId();
            item = this.Cb && name ? (name in this.Cb ? this.Cb[name] : element) || value : value;
            if (name && item) {
                var timeMap = this.Cb;
                if (name in timeMap) {
                    delete timeMap[name];
                }
                assertEqual(this.Zb, item);
                if (opt_unrender) {
                    item.vb();
                    if (item.$) {
                        join(item.$);
                    }
                }
                /** @type {Object} */
                name = item;
                if (name == value) {
                    log(Error("Unable to set parent component"));
                }
                /** @type {null} */
                name.hb = value;
                Events.J.Kc.call(name, value);
            }
        }
        if (!item) {
            log(Error("Child is not in parent component"));
        }
        return item;
    };
    factory(Text, Events);
    /** @type {null} */
    Text.prototype.f = value;
    /** @type {boolean} */
    var PLACEHOLDER_SUPPORTED = "placeholder" in document.createElement("input");
    self = Text.prototype;
    /** @type {boolean} */
    self.wb = t;
    /**
     * @return {undefined}
     */
    self.rd = function() {
        this.$ = this.e.Md("input", {
            type: "text"
        });
    };
    /**
     * @param {Object} el
     * @return {undefined}
     */
    self.nc = function(el) {
        Text.J.nc.call(this, el);
        if (!this.c) {
            this.c = el.getAttribute("label") || "";
        }
        var node;
        a: {
            var doc = getAttribute(el);
            try {
                node = doc && doc.activeElement;
                break a;
            } catch (d) {}
            /** @type {null} */
            node = value;
        }
        if (node == el) {
            /** @type {boolean} */
            this.wb = TRUE;
            body(this.A(), "label-input-label");
        }
        if (PLACEHOLDER_SUPPORTED) {
            this.A().placeholder = this.c;
        } else {
            this.A().setAttribute("aria-label", this.c);
        }
    };
    /**
     * @return {undefined}
     */
    self.rb = function() {
        Text.J.rb.call(this);
        var a = new Matrix(this);
        define(a, this.A(), "focus", this.fd);
        define(a, this.A(), "blur", this.jf);
        if (PLACEHOLDER_SUPPORTED) {
            this.b = a;
        } else {
            if (firefox) {
                define(a, this.A(), ["keypress", "keydown", "keyup"], this.kf);
            }
            define(a, getAttribute(this.A()) ? getAttribute(this.A()).parentWindow || getAttribute(this.A()).defaultView : window, "load", this.lf);
            this.b = a;
            coerce(this);
        }
        setWaiState(this);
        this.A().c = this;
    };
    /**
     * @return {undefined}
     */
    self.vb = function() {
        Text.J.vb.call(this);
        if (this.b) {
            this.b.la();
            /** @type {null} */
            this.b = value;
        }
        /** @type {null} */
        this.A().c = value;
    };
    /**
     * @return {undefined}
     */
    self.S = function() {
        Text.J.S.call(this);
        if (this.b) {
            this.b.la();
            /** @type {null} */
            this.b = value;
        }
    };
    /**
     * @return {undefined}
     */
    self.fd = function() {
        /** @type {boolean} */
        this.wb = TRUE;
        body(this.A(), "label-input-label");
        if (!PLACEHOLDER_SUPPORTED && (!mixin(this) && !this.Q)) {
            var _this = this;
            /**
             * @return {undefined}
             */
            var extend = function() {
                /** @type {string} */
                _this.A().value = "";
            };
            if (documentElement) {
                watch(extend);
            } else {
                extend();
            }
        }
    };
    /**
     * @return {undefined}
     */
    self.jf = function() {
        if (!PLACEHOLDER_SUPPORTED) {
            completed(this.b, this.A(), "click", this.fd);
            /** @type {null} */
            this.f = value;
        }
        /** @type {boolean} */
        this.wb = t;
        setWaiState(this);
    };
    /**
     * @param {Object} event
     * @return {undefined}
     */
    self.kf = function(event) {
        if (27 == event.keyCode) {
            if ("keydown" == event.type) {
                this.f = this.A().value;
            } else {
                if ("keypress" == event.type) {
                    this.A().value = this.f;
                } else {
                    if ("keyup" == event.type) {
                        /** @type {null} */
                        this.f = value;
                    }
                }
            }
            event.preventDefault();
        }
    };
    /**
     * @return {undefined}
     */
    self.Gf = function() {
        if (!mixin(this)) {
            /** @type {string} */
            this.A().value = "";
            watch(this.lg, this);
        }
    };
    /**
     * @return {undefined}
     */
    self.lg = function() {
        if (!mixin(this)) {
            this.A().value = this.c;
        }
    };
    /**
     * @return {undefined}
     */
    self.lf = function() {
        setWaiState(this);
    };
    /**
     * @return {undefined}
     */
    self.clear = function() {
        /** @type {string} */
        this.A().value = "";
        if (this.f != value) {
            /** @type {string} */
            this.f = "";
        }
    };
    /**
     * @return {undefined}
     */
    self.Qf = function() {
        if (this.A()) {
            if (!mixin(this) && !this.wb) {
                this.A().value = this.c;
            }
        }
    };
    self = naturalSort.prototype;
    /**
     * @return {undefined}
     */
    self.la = function() {
        destroy(this);
    };
    /**
     * @param {Object} data
     * @return {undefined}
     */
    self.Ae = function(data) {
        data = {
            created: this.hg,
            privacy: this.ig,
            "a-z": this.Nd,
            "z-a": this.jg
        }[data.currentTarget.value];
        var results = deepEqual(expect("playlist-item", this.e));
        var current = callback("playlist-item-favorite", this.e);
        results.push(current);
        data = results.sort(bind(data, this));
        /** @type {DocumentFragment} */
        var e = document.createDocumentFragment();
        slice(data, function(a) {
            e.appendChild(a);
        });
        clearElement(this.e);
        fail(this.e, e);
    };
    /**
     * @param {?} a
     * @param {?} element
     * @return {?}
     */
    self.ig = function(a, element) {
        var str = equal(a, "is-private") || "";
        var udataCur = equal(element, "is-private") || "";
        return slugify(str, udataCur);
    };
    /**
     * @param {Element} id
     * @param {Element} resource
     * @return {?}
     */
    self.hg = function(id, resource) {
        /**
         * @param {Element} id
         * @return {?}
         */
        function onProgress(id) {
            return getParams(id, "time-created") ? (id = equal(id, "time-created"), parseInt(id, 10)) : (new Date).getTime() / 1E3;
        }
        return onProgress(resource) - onProgress(id);
    };
    /**
     * @param {?} a
     * @param {?} element
     * @return {?}
     */
    self.Nd = function(a, element) {
        var str = equal(a, "title") || "";
        var udataCur = equal(element, "title") || "";
        return slugify(str, udataCur);
    };
    /**
     * @param {?} classesToRemove
     * @param {?} defs
     * @return {?}
     */
    self.jg = function(classesToRemove, defs) {
        return this.Nd(defs, classesToRemove);
    };
    /**
     * @param {?} types
     * @return {undefined}
     */
    self.Ee = function(types) {
        types.preventDefault();
        var key = callback("create-playlist", this.b);
        if (!interpret(this.c.value)) {
            end(key, "loading");
            format(key, {
                z: this,
                /**
                 * @param {?} value
                 * @param {string} obj
                 * @return {undefined}
                 */
                i: function(value, obj) {
                    removeClass(key, "loading");
                    if (obj.html) {
                        destroy(this);
                        init(this, obj.html);
                    } else {
                        if (obj.errors) {
                            reportError(this, obj.errors[0]);
                        }
                    }
                }
            });
        }
    };
    /**
     * @param {Event} event
     * @return {undefined}
     */
    self.Ce = function(event) {
        event.stopPropagation();
        var current = event.currentTarget;
        end(current, "loading");
        i("/addto_ajax", {
            method: "POST",
            format: "XML",
            n: {
                action_add_to_favorites: 1
            },
            B: {
                video_ids: this.f,
                session_token: reset("addto_ajax"),
                plid: push("PLAYBACK_ID")
            },
            z: this,
            /**
             * @return {undefined}
             */
            i: function() {
                removeClass(current, "loading");
                cycle(this, current);
                _fn(current);
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                removeClass(current, "loading");
                reportError(this, obj.error_message);
            }
        });
    };
    /**
     * @param {Object} e
     * @return {undefined}
     */
    self.De = function(e) {
        var key = e.currentTarget;
        if (!same(key, "selected")) {
            e.stopPropagation();
            eraseResult(this);
            e = equal(key, "playlist-id");
            /** @type {string} */
            var add_to_top = require("playlist-addto-top-checkbox").checked ? "True" : "False";
            end(key, "loading");
            i("/addto_ajax", {
                method: "POST",
                format: "XML",
                n: {
                    action_add_to_playlist: 1
                },
                B: {
                    playlist_id: e,
                    video_ids: this.f,
                    session_token: reset("addto_ajax"),
                    plid: push("PLAYBACK_ID"),
                    add_to_top: add_to_top
                },
                z: this,
                /**
                 * @param {?} value
                 * @param {string} obj
                 * @return {undefined}
                 */
                i: function(value, obj) {
                    this.kd = obj.setvideo_id;
                    removeClass(key, "loading");
                    end(key, "selected");
                    cycle(this, key);
                    _fn(key);
                }
            });
        }
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    self.Ge = function(e) {
        e.preventDefault();
        var key = index(e.currentTarget, "playlist-note-form");
        end(key, "loading");
        format(key, {
            B: {
                session_token: reset("playlist_bar_ajax"),
                setvideo_id: this.kd
            },
            z: this,
            /**
             * @return {undefined}
             */
            i: function() {
                eraseResult(this);
                removeClass(key, "loading");
                var current = callback("playlist-name", key);
                this.ge.innerHTML = current.value;
                current = this.he;
                if (this.Ab) {
                    split(this.Ab);
                }
                this.Ab = current;
                call(current);
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                removeClass(key, "loading");
                reportError(this, obj.errors[0]);
            }
        });
    };
    /**
     * @return {undefined}
     */
    self.Be = function() {
        eraseResult(this);
    };
    /**
     * @return {undefined}
     */
    self.Fe = function() {
        this.Ib.disabled = interpret(this.c.value);
    };
    var currentElement = element;
    isUndefined(initialValue);
    /**
     * @return {undefined}
     */
    options.prototype.f = function() {
        var cb = apply("gapi.plusone.render");
        if (cb) {
            /** @type {number} */
            var cache = Math.floor(1E4 * Math.random());
            /** @type {string} */
            var callbackName = "__PLUS_ONE_CALLBACK_" + cache;
            var newId = this.k.id;
            if (!newId) {
                /** @type {string} */
                newId = "plusone-button-" + cache;
                /** @type {string} */
                this.k.id = newId;
            }
            window[callbackName] = bind(this.e, this);
            cache = {
                callbackName: callbackName,
                count: "false",
                href: this.C,
                size: "medium",
                source: "google:youtube"
            };
            if (this.c) {
                /** @type {number} */
                cache.db = 1;
            }
            warn(cache, this.j);
            call(this.k);
            cb(newId, cache);
        }
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    options.prototype.e = function(value) {
        if ("off" != value.state) {
            removeChild("PLUS_ONE", this.l + "");
            if (this.c) {
                insertBefore(applyReplacement("https://plusone.google.com/_/+1/confirm", {
                    url: value.url,
                    source: "google:youtube"
                }), {
                    width: 480,
                    height: 550
                });
            }
        }
    };
    /**
     * @param {?} val
     * @return {undefined}
     */
    registerEvents.prototype.b = function(val) {
        var last;
        val = val.currentTarget;
        var value = target.getInstance();
        var html = removeNode(value, this.O);
        click(value, html);
        value = callback(get(value, "content"), html);
        html = callback("label", val);
        value.innerHTML = getElement(html);
        value = expect("selected", this.O);
        slice(value, function(obj) {
            removeClass(obj, "selected", "child-selected");
        });
        end(val, "selected");
        /** @type {string} */
        html = "";
        if (value = equal(val, "subreason") || "") {
            var a = contains(val.parentNode, "li");
            html = equal(a, "reason") || "";
            end(a, "selected", "child-selected");
        } else {
            html = equal(val, "reason") || "";
        }
        last = html;
        html = equal(val, "show-textbox-with-label");
        /** @type {boolean} */
        a = !!equal(val, "include-time");
        /** @type {boolean} */
        var val2 = !!equal(val, "show-hate-group");
        var suiteView = equal(val, "popup-url");
        var pdataOld = equal(val, "result-message") || "default";
        /** @type {boolean} */
        val = !!equal(val, "no-post");
        this.u.reason.value = last;
        this.u.sub_reason.value = value;
        value = require("flag-video-more-info-comment");
        if (html) {
            require("flag-video-more-info-textarea-label").innerHTML = html;
        }
        func(value, !!html);
        func(require("flag-video-more-info-time"), a);
        func(require("flag-video-more-info-hate-group"), val2);
        if (suiteView) {
            popup(suiteView, {
                target: "atmfc",
                width: 900,
                height: 700,
                left: 0,
                top: 0,
                status: "yes",
                toolbar: "no",
                menubar: "no",
                location: "no",
                scrollbars: "yes"
            });
        }
        if (val) {
            split(this.u);
            formatError(pdataOld);
        } else {
            data(this.u, "result-message", pdataOld);
            call(this.u);
        }
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    registerEvents.prototype.c = function(value) {
        value.preventDefault();
        var data = require("flag-video-submit");
        /** @type {boolean} */
        data.disabled = TRUE;
        var udataCur = equal(this.u, "result-message");
        i(this.u.action, {
            format: "XML",
            method: "POST",
            oa: MAP(this.u),
            /**
             * @return {undefined}
             */
            i: function() {
                formatError(udataCur);
                this.cf.call(global);
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            onError: function(value, obj) {
                parseParams();
                var nodes = require("flag-video-error");
                if (obj) {
                    if (obj.error_message) {
                        callback("yt-alert-content", nodes).innerHTML = obj.error_message;
                    }
                }
                call(nodes);
                /** @type {boolean} */
                data.disabled = t;
            },
            z: this
        });
    };
    var transformed;
    var beginsWithQuery;
    /** @type {null} */
    var currentContext = value;
    /** @type {null} */
    var retValue = value;
    var timeMap = {};
    var title;
    var inStack;
    var pdataCur;
    self = result.prototype;
    /**
     * @return {undefined}
     */
    self.Ka = function() {
        this.o = {};
        this.o.list = require("addto-list-panel");
        this.o.Gc = require("addto-list-saved-panel");
        this.o.Wb = require("addto-list-error-panel");
        this.o.Ca = require("addto-note-input-panel");
        this.o.ud = require("addto-note-saving-panel");
        this.o.Jd = require("addto-note-saved-panel");
        this.o.Hc = require("addto-note-error-panel");
        this.o.pa = require("addto-create-panel");
        this.e = this.o.list;
        unbind(this.o.list, "click", bind(this.Sf, this), "yt-uix-button-menu-item");
        this.Pb = callback("playlist-save-note", this.o.Ca);
        addEvent(this.Pb, "click", bind(this.Tf, this));
        var error = callback("close-button", this.O);
        addEvent(error, "click", bind(this.Rf, this));
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    self.Sf = function(event) {
        event.stopPropagation();
        var data = event.currentTarget;
        evalScript(OBJ2.getInstance(), data);
        /** @type {boolean} */
        this.C = t;
        event = equal(data, "list-action");
        var restoreScript = equal(data, "item-id") || "";
        data = equal(data, "item-name") || "";
        switch (event) {
            case "create-playlist":
                onTouchEnd(this, this.o.pa, TRUE);
                this.sd = callback("addto-create-playlist", this.o.pa);
                this.td = callback("addto-create-playlist-label", this.o.pa);
                this.Ib = callback("create-playlist-button", this.o.pa);
                this.Cc = callback("privacy-form", this.o.pa);
                unbind(this.Cc, "click", bind(this.Dc, this), "playlist-privacy-option");
                getAll(this.O, "video-ids");
                var iframe = require("addto-create-playlist");
                addEvent(iframe, "keydown", bind(this.Dc, this));
                addEvent(iframe, "paste", bind(this.Dc, this));
                transitionEnd(this.o.pa, function() {
                    iframe.focus();
                });
                event = callback("addto-create-cancel-button", this.o.pa);
                addEvent(event, "click", bind(function() {
                    addItem(this);
                }, this));
                event = callback("create-playlist-button", this.o.pa);
                addEvent(event, "click", bind(this.qf, this));
                break;
            case "favorites":
                /** @type {boolean} */
                this.C = TRUE;
                write(this, "FL");
                scrollTo(this, data);
                break;
            case "watch-later":
                write(this, "WL");
                scrollTo(this, data);
                break;
            case "playlist":
                write(this, "PL", restoreScript);
                if (1 < this.M.length) {
                    scrollTo(this, data);
                } else {
                    Editor(this, data);
                }
                break;
            case "label":
                i("/labels_ajax", {
                    method: "POST",
                    n: {
                        action_add_members: 1
                    },
                    B: {
                        session_token: reset("labels_ajax"),
                        label_id: restoreScript,
                        video_ids: this.c.split(",")
                    },
                    z: this
                });
                scrollTo(this, data);
        }
    };
    /**
     * @param {Event} event
     * @return {undefined}
     */
    self.Pd = function(event) {
        var cur = event.target;
        var value = callback("addto-note-label", this.o.Ca);
        attr(bind(function() {
            var updateCode = interpret(cur.value);
            if (updateCode) {
                call(value);
            } else {
                split(value);
            }
            if (!updateCode && (this.P && this.xc)) {
                parseChildren(this.Pb, TRUE);
            } else {
                parseChildren(this.Pb, t);
            }
        }, this), 0);
    };
    /**
     * @return {undefined}
     */
    self.qf = function() {
        var pdataCur = this.sd.value;
        /** @type {boolean} */
        this.Vf = TRUE;
        /** @type {number} */
        var code = parseInt(unwrap(this.Cc), 10);
        write(this, "PL", value, pdataCur, code);
        if (1 < this.M.length) {
            addItem(this);
        } else {
            Editor(this, pdataCur);
        }
    };
    /**
     * @return {undefined}
     */
    self.Dc = function() {
        attr(bind(function() {
            var rawValue = interpret(this.sd.value);
            if (rawValue) {
                call(this.td);
            } else {
                split(this.td);
            }
            var value = unwrap(this.Cc);
            if (rawValue || !value) {
                parseChildren(this.Ib, t);
            } else {
                parseChildren(this.Ib, TRUE);
            }
        }, this), 0);
    };
    /**
     * @return {undefined}
     */
    self.Rf = function() {
        addItem(this);
    };
    /**
     * @param {?} data
     * @param {string} obj
     * @return {undefined}
     */
    self.Le = function(data, obj) {
        this.P = obj.list_id || "";
        this.xc = obj.setvideo_id || "";
        var name = obj.html_content || "";
        var path = obj.list_url || "";
        if (this.P && this.xc) {
            var result = callback("addto-title", this.O);
            /** @type {Element} */
            var el = document.createElement("a");
            el.href = path;
            el.innerHTML = result.innerHTML;
            clearElement(result);
            result.appendChild(el);
            if (!interpret(require("addto-note").value)) {
                parseChildren(this.Pb, TRUE);
            }
        }
        if (!this.j && (path = index(this.b, "ux-thumb-wrap"))) {
            if (result = callback("video-in-quicklist", path)) {
                join(result);
            }
            /** @type {Element} */
            result = document.createElement("span");
            /** @type {string} */
            result.className = "video-in-quicklist";
            result.innerHTML = name;
            path.appendChild(result);
        }
        name = replace("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
        if (this.C) {
            name = replace("PLAYLIST_BAR_ADDED_TO_FAVORITES");
        }
        access(this.l, this.P, name, value, this.M.length, this.M);
    };
    /**
     * @param {?} value
     * @param {string} walkers
     * @return {undefined}
     */
    self.Ke = function(value, walkers) {
        var input = walkers && walkers.error_message;
        if (input) {
            callback("error-details", this.o.Wb).innerHTML = input;
            input = callback("show-menu-link", this.o.Wb);
            var test = addEvent(input, "click", bind(function(value) {
                value.preventDefault();
                off(test);
                removeClass(this.o.Ca, "dismissed-panel", "fade", "slide");
                removeClass(this.o.Gc, "dismissed-panel", "fade", "slide");
                value = callback("close-note", this.O);
                split(value);
                if (this.Vf) {
                    onTouchEnd(this, this.o.pa, TRUE);
                } else {
                    onTouchEnd(this, this.o.list, TRUE);
                }
            }, this));
            if (input = require("addto-create-name")) {
                /** @type {boolean} */
                input.disabled = t;
            }
            removeClass(this.o.Wb, "dismissed-panel", "fade", "slide");
            onTouchEnd(this, this.o.Wb);
        } else {
            addItem(this);
        }
        if (this.j) {

        }
    };
    /**
     * @return {undefined}
     */
    self.Tf = function() {
        i("/playlist_bar_ajax", {
            method: "POST",
            qb: TRUE,
            n: {
                action_set_playlist_item_annotation: 1
            },
            B: {
                annotation: require("addto-note").value,
                playlist_id: this.P,
                setvideo_id: this.xc,
                session_token: reset("playlist_bar_ajax")
            },
            i: this.Nf,
            onError: this.Mf,
            z: this
        });
        onTouchEnd(this, this.o.ud);
    };
    /**
     * @return {undefined}
     */
    self.Nf = function() {
        var props = callback("addto-title", this.o.Ca);
        var b = template(props);
        end(b, "yt-uix-tooltip-reverse");
        callback("panel-content", this.o.Jd).appendChild(b);
        onTouchEnd(this, this.o.Jd);
        attr(bind(function() {
            evalScript(OBJ2.getInstance(), b);
            addItem(this);
        }, this), 3E3);
    };
    /**
     * @param {?} value
     * @param {?} obj
     * @return {undefined}
     */
    self.Mf = function(value, obj) {
        var element = obj && obj.errors;
        if (element) {
            var current = callback("error-details", this.o.Hc);
            clearElement(current);
            slice(element, function(xhtml) {
                /** @type {Element} */
                var e = document.createElement("li");
                e.innerHTML = xhtml;
                current.appendChild(e);
            });
            element = callback("add-note-link", this.o.Hc);
            var events = addEvent(element, "click", bind(function(types) {
                types.preventDefault();
                off(events);
                removeClass(this.o.ud, "dismissed-panel");
                onTouchEnd(this, this.o.Ca);
            }, this));
            onTouchEnd(this, this.o.Hc);
        } else {
            addItem(this);
        }
    };
    /**
     * @return {undefined}
     */
    self.He = function() {
        var title = trim("/addto_ajax", {
            action_redirect_to_signin_with_add: 1,
            list_type: "WL",
            video_ids: this.c,
            next_url: document.location
        });
        /** @type {Element} */
        var form = document.createElement("form");
        form.action = title;
        /** @type {string} */
        form.method = "POST";
        /** @type {Element} */
        title = document.createElement("input");
        /** @type {string} */
        title.type = "hidden";
        /** @type {string} */
        title.name = "session_token";
        title.value = reset("addto_ajax_logged_out");
        form.appendChild(title);
        document.body.appendChild(form);
        form.submit();
    };
    /** @type {boolean} */
    var dest = t;
    /** @type {Window} */
    var g = window;
    /** @type {HTMLDocument} */
    var doc = document;
    /** @type {Location} */
    var location = g.location;
    /** @type {RegExp} */
    var regExp = /\[native code\]/;
    var json = y(g, "gapi", {});
    var args;
    args = y(g, "___jsl", concat());
    y(args, "I", 0);
    y(args, "hel", 10);
    var pos = y(args, "perf", concat());
    y(pos, "g", concat());
    var dir = y(pos, "i", concat());
    y(pos, "r", []);
    concat();
    concat();
    var input = concat();
    /** @type {Array} */
    var diffs = [];
    var cpu;
    cpu = {
        gc: "callback",
        Ag: "sync",
        yg: "config",
        ug: "_c",
        vg: "h",
        kj: "platform",
        ah: "jsl",
        TIMEOUT: "timeout",
        zg: "ontimeout",
        jj: "mh",
        bh: "u"
    };
    diffs.push([cpu.ah, function(vals) {
        var i;
        for (i in vals) {
            if (Object.prototype.hasOwnProperty.call(vals, i)) {
                var val = vals[i];
                if ("object" == typeof val) {
                    args[i] = y(args, i, []).concat(val);
                } else {
                    y(args, i, val);
                }
            }
        }
        if (i = vals[cpu.bh]) {
            vals = y(args, "us", []);
            vals.push(i);
            if (i = /^https:(.*)$/.exec(i)) {
                vals.push("http:" + i[1]);
            }
        }
    }]);
    /** @type {string} */
    var tag = decodeURI("%73cript");
    /**
     * @param {string} name
     * @return {?}
     */
    input.m = function(name) {
        var dir = args.ms || "https://apis.google.com";
        name = name[0];
        var _ref;
        if (!(_ref = !name)) {
            /** @type {boolean} */
            _ref = 0 <= name.indexOf("..");
        }
        if (_ref) {
            log("Bad hint");
        }
        return dir + "/" + name.replace(/^\//, "");
    };
    /** @type {RegExp} */
    var cx = /^[\/_a-zA-Z0-9,.\-!:=]+$/;
    /** @type {RegExp} */
    var numbers = /^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/;
    /** @type {RegExp} */
    var pr_chunkPattern = /\/cb=/g;
    /** @type {RegExp} */
    var delegateEventSplitter = /\/\//g;
    /**
     * @param {Function} req
     * @param {Object} callback
     * @return {?}
     */
    json.load = function(req, callback) {
        return tryIt(function() {
            return check(req, callback);
        });
    };
    /** @type {number} */
    var delta = -2;
    /**
     * @param {Function} data
     * @return {undefined}
     */
    test.prototype.load = function(data) {
        iframes.setHandler("iframe-style", display(this, data, this.f, t));
        iframes.setHandler("onepick", display(this, data, this.l, TRUE));
        var invoked = {
            setNotificationWidgetHeight: bind(function(parentHeight) {
                this.df.style.height = parentHeight;
            }, this),
            setNotificationText: bind(function(m1) {
                this.ef(parseInt(m1, 10));
            }, this),
            /**
             * @return {undefined}
             */
            hideNotificationWidget: function() {
                if (data.hideNotificationWidget) {
                    data.hideNotificationWidget();
                }
            },
            /**
             * @return {undefined}
             */
            openSharebox: function() {},
            /**
             * @return {undefined}
             */
            onError: function() {}
        };
        this.b = iframes.open(this.j, {
            style: "iframe-style"
        }, {
            origin: window.location.protocol + "//" + window.location.hostname,
            source: "yt",
            hl: this.e
        }, invoked, function() {});
    };
    /**
     * @return {undefined}
     */
    test.prototype.close = function() {
        round(this.b, "onHide");
    };
    /**
     * @return {?}
     */
    test.prototype.c = function() {
        return getWindowSize(window).height - 60 - 20;
    };
    self = load.prototype;
    /**
     * @param {Node} event
     * @return {undefined}
     */
    self.Wg = function(event) {
        if (this.c) {
            animationEnd(this);
            slide(this.b, TRUE);
        } else {
            if (this.e) {
                traverseNode(this);
            }
            this.b.close();
            toggleClass(this, TRUE, "notif");
            end(this.f, "sb-notif-clicked");
            appendCustomSelect();
            var b = this.b;
            var udataCur = {
                maxWidgetHeight: b.c()
            };
            round(b.b, "onShowNotificationsOnly", udataCur);
            /** @type {boolean} */
            this.c = TRUE;
            slide(this.b, t);
        }
        stopEvent(event);
    };
    /**
     * @param {Node} event
     * @return {undefined}
     */
    self.Xg = function(event) {
        if (this.e) {
            traverseNode(this);
        } else {
            if (this.c) {
                animationEnd(this);
            }
            this.b.close();
            toggleClass(this, TRUE, "sharebox");
            appendCustomSelect();
            var b = this.b;
            /** @type {string} */
            var url = window.location.href;
            if (-1 != url.indexOf("/watch?")) {
                round(b.b, "setPrefill", {
                    items: [{
                        type: "http://schema.org/VideoObject",
                        id: url,
                        properties: {
                            url: [url]
                        }
                    }]
                });
            }
            round(b.b, "onShowShareboxOnly", {
                maxWidgetHeight: b.c
            });
            /** @type {boolean} */
            this.e = TRUE;
        }
        stopEvent(event);
    };
    /**
     * @return {undefined}
     */
    self.$c = function() {
        if (this.c || this.e) {
            this.b.close();
            animationEnd(this);
            traverseNode(this);
            focus(this);
        }
    };
    /**
     * @param {?} l
     * @return {undefined}
     */
    self.ve = function(l) {
        this.l = l;
        focus(this);
    };
    /**
     * @return {undefined}
     */
    self.ue = function() {
        addClass(this.j, "sb-off", "sb-on");
    };
    /**
     * @return {undefined}
     */
    self.te = function() {
        addClass(this.j, "sb-on", "sb-off");
    };
    /**
     * @return {undefined}
     */
    self.ad = function() {
        /** @type {number} */
        var sf_width = Math.max((getWindowSize(window).height - this.K.height) / 2, 0);
        setStyleImportant(this.j, "top", sf_width + "px");
    };
    /**
     * @return {undefined}
     */
    self.se = function() {
        if (6E5 < exit()) {
            slide(this.b, t);
        } else {
            slide(this.b, TRUE);
        }
    };
    self = Color.prototype;
    /**
     * @return {undefined}
     */
    self.init = function() {
        var text = this.k;
        /** @type {Array} */
        var fields = ["filter-crumb", "yt-close"];
        /** @type {Array} */
        var value = [];
        /** @type {number} */
        var j = 0;
        for (; j < fields.length; ++j) {
            var field = fields[j];
            if (value.length) {
                value = expect(field, text);
            } else {
                /** @type {Array} */
                var t = [];
                /** @type {number} */
                var i = 0;
                for (; i < value.length; ++i) {
                    var expected = expect(field, value[i]);
                    /** @type {number} */
                    var x = 0;
                    for (; x < expected.length; ++x) {
                        t.push(expected[x]);
                    }
                }
                /** @type {Array} */
                value = t;
            }
        }
        slice(value, this.Wf, this);
        text = this.e;
        unbind(text, "mouseover", bind(this.Yf, this), "filter-content");
        unbind(text, "mouseout", bind(this.Xf, this), "filter-content");
    };
    /**
     * @param {?} emitter
     * @return {undefined}
     */
    self.Wf = function(emitter) {
        emit(emitter, "click", bind(this.eh, this), t);
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    self.eh = function(e) {
        end(index(e.target, "filter-crumb"), "filter-crumb-removed");
    };
    /**
     * @param {?} obj
     * @return {undefined}
     */
    self.Yf = function(obj) {
        var el = obj.target;
        if (closest(el)) {
            /** @type {boolean} */
            this.c = t;
            obj = sync(this);
            removeClass(obj, "filter-crumb-inactive");
            el = getElement(el);
            var value = callback("filter-text", obj);
            text(value, el);
            end(obj, "filter-crumb-active");
        }
    };
    /**
     * @param {Object} e
     * @return {undefined}
     */
    self.Xf = function(e) {
        if (closest(e.target)) {
            e = sync(this);
            removeClass(e, "filter-crumb-active");
            /** @type {boolean} */
            this.c = TRUE;
        }
    };
    /**
     * @return {undefined}
     */
    self.Hf = function() {
        var suiteView = sync(this);
        if (this.c) {
            var duration = callback("filter-text", suiteView);
            text(duration, "");
            end(suiteView, "filter-crumb-inactive");
        }
    };
    run("yt.pubsub.publish", extend);
    self = calcPoint.prototype;
    /**
     * @return {undefined}
     */
    self.init = function() {
        var wrapper = index(this.na, "yt-subscription-button-hovercard");
        var result = bind(this.fg, this);
        var handler = bind(this.gg, this);
        result = addEvent(wrapper, "mouseenter", result);
        this.e.push(result);
        result = addEvent(wrapper, "mouseleave", handler);
        this.e.push(result);
    };
    /**
     * @return {undefined}
     */
    self.fg = function() {
        /** @type {boolean} */
        this.c = TRUE;
        if (this.b) {
            var v = bind(this.jd, this);
            v = attr(v, 500);
            this.j.push(v);
        }
    };
    /**
     * @return {undefined}
     */
    self.gg = function() {
        /** @type {boolean} */
        this.c = t;
    };
    /**
     * @return {undefined}
     */
    self.jd = function() {
        var self = OBJ1.getInstance();
        var data;
        if (data = !this.Hd) {
            data = self.L(this.na);
            data = !data ? t : same(data, get(self, "active"));
        }
        if (data) {
            /** @type {boolean} */
            this.Hd = TRUE;
            data = {
                session_token: reset("subscription_ajax")
            };
            data[parseString()] = this.f;
            i("/subscription_ajax", {
                method: "POST",
                n: {
                    hovercard: 1,
                    action_get_subscription_form_for_channel: 1
                },
                B: data,
                z: this,
                /**
                 * @param {?} value
                 * @param {string} obj
                 * @return {undefined}
                 */
                i: function(value, obj) {
                    main(self, this.na, obj.response.html_content);
                    this.pb();
                },
                /**
                 * @return {undefined}
                 */
                onError: function() {
                    /** @type {boolean} */
                    this.Hd = t;
                }
            });
        }
    };
    /**
     * @return {undefined}
     */
    self.pb = function() {
        var parent = OBJ1.getInstance();
        var failuresLink = parent.L(this.na);
        var div = content(parent, failuresLink);
        slice(div.getElementsByTagName("input"), function(callback) {
            var restoreScript = bind(function() {
                format(div.getElementsByTagName("form")[0]);
            }, this);
            callback = addEvent(callback, "change", restoreScript);
            this.e.push(callback);
        }, this);
    };
    /** @type {Array} */
    var existing = [];
    self = r.prototype;
    /**
     * @return {?}
     */
    self.getId = function() {
        return equal(this.F, "subscription-id") || value;
    };
    /**
     * @return {undefined}
     */
    self.pb = function() {
        this.e.push(addEvent(this.F, "click", bind(this.nf, this)));
        this.b.push(create("SUBSCRIBE", this.of, this));
        this.b.push(create("UNSUBSCRIBE", this.pf, this));
        if (this.ea) {
            this.ea.init();
        }
        existing.push(this);
        loop(this);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    self.nf = function(msg) {
        if (this.sb) {
            return t;
        }
        msg.preventDefault();
        evalScript(OBJ2.getInstance(), this.F);
        if (this.getId()) {
            this.Rd();
        } else {
            this.wa();
        }
    };
    /**
     * @return {undefined}
     */
    self.wa = function() {
        var pdataCur = this.type;
        var udataCur = this.ab;
        var basePrototype = equal(this.F, "subscription-feature");
        /** @type {boolean} */
        this.sb = TRUE;
        ping(this);
        if (reset("subscription_ajax")) {
            all(udataCur, pdataCur, basePrototype, this);
        } else {
            if (!this.F.getAttribute("href")) {
                var cb = bind(this.kg, this);
                pdataCur = isDate("/signin?context=popup", "next", document.location.protocol + "//" + document.domain + "/post_login");
                pdataCur = isDate(pdataCur, "feature", "sub_button");
                if (pdataCur = window.open(pdataCur, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", TRUE)) {
                    udataCur = create("LOGGED_IN", function(outErr) {
                        var value = push("LOGGED_IN_PUBSUB_KEY", value);
                        flatten(value);
                        cb(outErr);
                    });
                    expected("LOGGED_IN_PUBSUB_KEY", udataCur);
                    pdataCur.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2);
                }
            }
        }
    };
    /**
     * @param {?} Messages
     * @return {undefined}
     */
    self.kg = function(Messages) {
        label("subscription_ajax", Messages.subscription_ajax);
        this.wa();
    };
    /**
     * @return {undefined}
     */
    self.Rd = function() {
        var args = {
            s: this.getId(),
            session_token: reset("subscription_ajax")
        };
        var params = {
            action_remove_subscriptions: 1
        };
        var target = equal(this.F, "subscription-feature");
        if (target) {
            params.feature = target;
        }
        if (target = push("PLAYBACK_ID")) {
            args.plid = target;
        }
        /** @type {boolean} */
        this.sb = TRUE;
        ping(this);
        if (this.Nb) {
            target = trim("/subscription_ajax", params);
            var udataCur = endsWith(this.Nb);
            url(target, udataCur);
        }
        i("/subscription_ajax", {
            method: "POST",
            z: this,
            n: params,
            B: args,
            /**
             * @param {?} data
             * @param {string} obj
             * @return {undefined}
             */
            i: function(data, obj) {
                validator(this, value);
                if (this.ea) {
                    var c = this.ea;
                    /** @type {boolean} */
                    c.b = t;
                    iterate(OBJ1.getInstance(), c.na);
                }
                extend("UNSUBSCRIBE", this.ab, obj, this);
            },
            /**
             * @return {undefined}
             */
            R: function() {
                /** @type {boolean} */
                this.sb = t;
                prop(this);
            }
        });
        update("unsubscribe");
    };
    /**
     * @param {(Object|string)} a
     * @param {Object} b
     * @param {(Object|string)} dataAndEvents
     * @return {undefined}
     */
    self.of = function(a, b, dataAndEvents) {
        b = b.response.id;
        md5_cmn(this, a, b, dataAndEvents);
        if (a == this.ab) {
            validator(this, b);
            if (this.ea) {
                a = this.ea;
                if (a.c) {
                    OBJ1.getInstance().yb(a.na);
                    a.jd();
                }
            }
        }
    };
    /**
     * @param {?} a
     * @param {Function} options
     * @return {undefined}
     */
    self.pf = function(a, options) {
        md5_cmn(this, a, options.response.id, this);
    };
    factory(config, recordType);
    /** @type {null} */
    config.prototype.b = value;
    /**
     * @return {undefined}
     */
    config.prototype.S = function() {
        /** @type {null} */
        this.b = value;
        config.J.S.call(this);
    };
    /**
     * @param {?} value
     * @param {string} obj
     * @return {undefined}
     */
    A.prototype.f = function(value, obj) {
        if (obj.success) {
            this.K.innerHTML = obj.html;
        } else {
            alert(obj.errors);
        }
    };
    /**
     * @return {undefined}
     */
    A.prototype.C = function() {
        i("/radio_ajax", {
            n: {
                action_skip_video: 1,
                station_id: this.e,
                video_id: this.b
            },
            i: this.c,
            z: this
        });
    };
    /**
     * @param {?} value
     * @param {string} obj
     * @return {undefined}
     */
    A.prototype.c = function(value, obj) {
        if (obj.success) {
            var udataCur = obj.next_url;
            if (udataCur) {
                visit(udataCur);
                return;
            }
        }
        alert(obj.errors);
    };
    /** @type {null} */
    var operation = value;
    /** @type {null} */
    var enabled = value;
    /** @type {boolean} */
    var RESIZE_LISTENER = t;
    /** @type {number} */
    var mode = -1;
    /** @type {string} */
    var fn = "";
    var refObj = {};
    var Ext = new _this;
    /** @type {null} */
    var defaultValue = value;
    /** @type {boolean} */
    var t1 = t;
    /** @type {null} */
    var pointerValue = value;
    /** @type {null} */
    var date = value;
    /** @type {null} */
    var newValue = value;
    /** @type {null} */
    var time = value;
    /** @type {Array} */
    var codeSegments = ["ypc-container", "ypc-unsubscribe-link", "ypc-rap-overlay-link"];
    /**
     * @return {undefined}
     */
    DomElement.prototype.j = function() {
        /** @type {boolean} */
        this.b = TRUE;
        var target = OBJ1.getInstance();
        var current = target.L(this.f || this.target);
        if (current = content(target, current).innerHTML || this.c) {
            main(target, this.target, current);
            build();
        }
    };
    /**
     * @return {undefined}
     */
    DomElement.prototype.get = function() {
        var c = {
            method: "POST",
            R: bind(this.l, this),
            B: {
                external_channel_id: this.e,
                session_token: reset("channel_details_ajax")
            }
        };
        i("/channel_details_ajax", c);
    };
    /**
     * @param {?} value
     * @param {string} obj
     * @return {undefined}
     */
    DomElement.prototype.l = function(value, obj) {
        if (obj.html) {
            this.c = obj.html;
            if (this.b) {
                this.j();
            }
        }
    };
    /** @type {Array} */
    var arr = [];
    /** @type {boolean} */
    var block = t;
    /** @type {string} */
    var flashVersion = "";
    if (navigator.plugins && navigator.plugins.length) {
        var parameter = navigator.plugins["Shockwave Flash"];
        if (parameter) {
            /** @type {boolean} */
            block = TRUE;
            if (parameter.description) {
                flashVersion = getFlashVersion(parameter.description);
            }
        }
        if (navigator.plugins["Shockwave Flash 2.0"]) {
            /** @type {boolean} */
            block = TRUE;
            /** @type {string} */
            flashVersion = "2.0.0.11";
        }
    } else {
        if (navigator.mimeTypes && navigator.mimeTypes.length) {
            var mimeType = navigator.mimeTypes["application/x-shockwave-flash"];
            if (block = mimeType && mimeType.enabledPlugin) {
                flashVersion = getFlashVersion(mimeType.enabledPlugin.description);
            }
        } else {
            try {
                var ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                /** @type {boolean} */
                block = TRUE;
                flashVersion = getFlashVersion(ax.GetVariable("$version"));
            } catch (lp) {
                try {
                    ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    /** @type {boolean} */
                    block = TRUE;
                    /** @type {string} */
                    flashVersion = "6.0.21";
                } catch (mp) {
                    try {
                        ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        /** @type {boolean} */
                        block = TRUE;
                        flashVersion = getFlashVersion(ax.GetVariable("$version"));
                    } catch (np) {}
                }
            }
        }
    }
    var progressValues = flashVersion;
    var vec = function() {
        if (iteratee) {
            return _pathSplit(/Firefox\/([0-9.]+)/);
        }
        if (documentElement || gecko) {
            return cDigit;
        }
        if (whole_match) {
            return _pathSplit(/Chrome\/([0-9.]+)/);
        }
        if (YYSTATE) {
            return _pathSplit(/Version\/([0-9.]+)/);
        }
        if (program || inverse) {
            /** @type {(Array.<string>|null)} */
            var result = /Version\/(\S+).*Mobile\/(\S+)/.exec(iter());
            if (result) {
                return result[1] + "." + result[2];
            }
        } else {
            if (leading_space) {
                return (result = _pathSplit(/Android\s+([0-9.]+)/)) ? result : _pathSplit(/Version\/([0-9.]+)/);
            }
            if (hasInteractive) {
                return _pathSplit(/Camino\/([0-9.]+)/);
            }
        }
        return "";
    }();
    /** @type {Array} */
    var actions = [];
    /** @type {number} */
    var camelKey = 0;
    /** @type {number} */
    var newTop = 0;
    var propName;
    if (window != window.top) {
        /** @type {string} */
        var referrer = document.referrer;
        if (window.parent != window.top) {
            handleLinks();
        } else {
            var indents = siblings(referrer);
            if (include(indents)) {
                handleLinks();
            } else {
                var keyword = siblings(referrer);
                if (!arrayIndexOf(keyword)) {
                    request("/roger_rabbit?" + ("location=" + encodeURIComponent(referrer) + "&self=" + encodeURIComponent(window.location.href) + "&user_agent=" + encodeURIComponent(navigator.userAgent)), {
                        /** @type {function (?): undefined} */
                        onComplete: openDisplay
                    });
                }
            }
        }
    }
    /** @type {boolean} */
    var TIME = t;
    /** @type {Array} */
    var parts = [];
    var Right = minify("You were shown...");
    var word = minify("You just watched...");
    /** @type {string} */
    var old = "";
    /** @type {null} */
    var replacement = value;
    /** @type {null} */
    var returnVal = value;
    /** @type {null} */
    var className = value;
    item("pyv_related_box_id");
    run("setCompanion", generate);
    run("setInstreamCompanion", wrap);
    run("setLongformCompanion", failure);
    run("setFreewheelCompanion", initialize);
    run("closeInPageAdIframe", top);
    run("hideInstreamCompanion", attributeName);
    run("disablePopout", cmd);
    run("enablePopout", diff);
    run("closeMpuCompanion", parentName);
    run("updatePopAds", ok);
    run("setAfvCompanionVars", rvar);
    run("showAfvCompanionAdDiv", lookup);
    run("hideAfvInstreamCompanionAdDiv", translate);
    window.yt = window.yt || {};
    run("_gel", require);
    run("_hasclass", same);
    run("_addclass", end);
    run("_removeclass", removeClass);
    run("_toggleclass", validate);
    run("_showdiv", call);
    run("_hidediv", split);
    run("_togglediv", line);
    run("_ajax", req);
    run("goog.bind", bind);
    run("goog.dom.getElementsByTagNameAndClass", function(td, v, callback) {
        return add(td, v, callback);
    });
    run("goog.dom.getFirstElementChild", res);
    run("goog.array.forEach", slice);
    run("goog.array.indexOf", assert);
    run("goog.array.contains", copy);
    run("yt.dom.hasAncestor", bootstrap);
    run("yt.setConfig", expected);
    run("yt.getConfig", push);
    run("yt.setAjaxToken", label);
    run("yt.registerGlobal", item);
    run("yt.setTimeout", attr);
    run("yt.setInterval", play);
    run("yt.clearTimeout", _);
    run("yt.clearInterval", readdir);
    run("yt.setMsg", function(dataAndEvents) {
        getType(flags, arguments);
    });
    run("yt.setGoogMsg", function(dataAndEvents) {
        getType(flags, arguments);
    });
    run("yt.getMsg", replace);
    run("yt.events.listen", addEvent);
    run("yt.events.unlisten", connect);
    run("yt.events.stopPropagation", stopEvent);
    run("yt.events.preventDefault", function(ev) {
        ev = ev || window.event;
        /** @type {boolean} */
        ev.returnValue = t;
        if (ev.preventDefault) {
            ev.preventDefault();
        }
        return t;
    });
    run("yt.events.getTarget", handleEvent);
    run("yt.events.clear", function() {
        var taskComplete;
        for (taskComplete in meta) {
            off(taskComplete);
        }
    });
    run("yt.events.Event", handler);
    /** @type {function (): undefined} */
    handler.prototype.preventDefault = handler.prototype.preventDefault;
    /** @type {function (): undefined} */
    handler.prototype.stopPropagation = handler.prototype.stopPropagation;
    run("yt.pubsub.subscribe", create);
    run("yt.pubsub.unsubscribeByKey", flatten);
    run("yt.pubsub.publish", extend);
    run("yt.www.init", capture);
    run("yt.www.dispose", mouseup);
    addEvent(window, "load", capture);
    addEvent(window, "unload", mouseup);
    run("yt.www.logError", cb);
    /** @type {function (?, ?, Array): undefined} */
    window.onerror = cb;
    create("init", function() {
        actions.push(addEvent(window, "resize", perform));
        actions.push(addEvent(window, "scroll", pan));
        attr(after, 0);
    });
    run("yt.uix.FormInput.selectOnChangeActionIE", function(defs) {
        funcs.getInstance().Da(defs);
    });
    create("init", function() {
        app();
    });
    run("goog.i18n.bidi.isRtlText", strip);
    run("goog.i18n.bidi.setDirAttribute", function(dataAndEvents, args) {
        var val = args.value;
        /** @type {string} */
        var dir = "";
        if (strip(val)) {
            /** @type {string} */
            dir = "rtl";
        } else {
            if (!strip(val)) {
                /** @type {string} */
                dir = "ltr";
            }
        }
        /** @type {string} */
        args.dir = dir;
    });
    run("yt.style.toggle", line);
    run("yt.style.setDisplayed", func);
    run("yt.style.isDisplayed", getSize);
    run("yt.style.setVisible", startGame);
    run("yt.net.ajax.sendRequest", request);
    run("yt.net.ajax.getRootNode", error);
    run("yt.net.ajax.getNodeValue", each);
    run("yt.net.delayed.register", v);
    run("yt.net.delayed.load", loader);
    run("yt.net.delayed.markAsLoaded", function(key) {
        if (key in _handlers) {
            /** @type {boolean} */
            $cookies[key] = TRUE;
        }
    });
    run("yt.net.scriptloader.load", poll);
    run("yt.net.styleloader.load", function(fileUrl) {
        return loadCSS(fileUrl);
    });
    run("goog.dom.forms.getFormDataString", MAP);
    run("yt.uri.buildQueryData", key);
    run("yt.uri.appendQueryData", applyReplacement);
    run("yt.www.feedback.start", function(options, deepDataAndEvents, url, uri) {
        try {
            /** @type {string} */
            url = (url || "59") + "";
            deepDataAndEvents = deepDataAndEvents || {};
            var dir = push("SESSION_INDEX");
            try {
                var el = forEach();
                if (el) {
                    el.pauseVideo();
                }
                var model = term.getInstance();
                deepDataAndEvents.flashVersion = model.getVersion().join(".");
            } catch (j) {}
            options = {
                productId: url,
                locale: options,
                abuseLink: "https://support.google.com/youtube/bin/answer.py?answer=140536"
            };
            if (dir) {
                /** @type {string} */
                options.authuser = dir + "";
            }
            if (uri) {
                options.bucket = uri;
            }
            loadScript(options, deepDataAndEvents);
            return t;
        } catch (s) {
            return TRUE;
        }
    });
    run("yt.www.feedback.startHelp", function(a, input, dataAndEvents, deepDataAndEvents) {
        loadScript({
            productId: (input || "59") + "",
            flow: "help",
            helpCenterPath: dataAndEvents || "/youtube",
            helpCenterContext: deepDataAndEvents,
            anchor: a
        });
    });
    run("yt.www.feedback.displayLink", root);
    create("init", root);
    run("yt.www.help.bootstrap.init", output);
    create("init", output);
    run("yt.net.cookies.set", cmp);
    run("yt.net.cookies.get", read);
    run("yt.net.cookies.remove", cleanup);
    run("yt.window.redirect", visit);
    run("yt.window.popup", insertBefore);
    create("init", function() {
        if (push("SBOX_JS_URL")) {
            onload(push("SBOX_JS_URL"), function() {
                apply("yt.www.masthead.searchbox.init")();
            });
        }
    });
    isUndefined(target);
    isUndefined(initialValue);
    isUndefined(suiteView);
    isUndefined(scrubbed);
    isUndefined(funcs);
    isUndefined(defs);
    isUndefined(OBJ1);
    isUndefined(curValue);
    isUndefined(obj);
    isUndefined(DOT_CALL_NO_PARENS);
    isUndefined(query);
    isUndefined(SPLICE_NEEDS_BRACKETS);
    isUndefined(seen);
    isUndefined(OBJ2);
    run("yt.player.update", utils);
    run("yt.player.embed", stringOptions);
    run("yt.flash.embed", e);
    run("yt.flash.dismissFlashUpgradePromo", function() {
        editor.getInstance();
        substitute(tok.Xd, TRUE);
        compare();
    });
    run("yt.www.watch.activity.getTimeSinceActive", exit);
    run("yt.www.watch.activity.setTimestamp", table);
    run("yt.www.watch.player.handleEndPreview", function(actions) {
        var oldconfig = forEach();
        if (oldconfig) {
            if (oldconfig.stopVideo) {
                oldconfig.stopVideo();
            }
        }
        if (oldconfig = require("watch-checkout-offers")) {
            extend("ypc-init-purchase", oldconfig, actions);
        }
    });
    run("yt.www.watch.player.openPopup", function(ret, w, rowHeight) {
        /** @type {null} */
        var name = value;
        var player = forEach();
        /** @type {string} */
        ret = "/watch_popup?v=" + ret;
        if (player) {
            ret += "&vq=" + player.getPlaybackQuality();
            /** @type {number} */
            name = Math.round(player.getCurrentTime());
            player.stopVideo();
        }
        if (push("POPOUT_AD_SLOTS")) {
            ret += "&pop_ads=" + push("POPOUT_AD_SLOTS");
        }
        if (name) {
            if (10 < name) {
                ret += "#t=" + name;
            }
        }
        popup(ret, {
            width: w,
            height: rowHeight,
            resizable: TRUE,
            location: t,
            statusbar: t,
            menubar: t,
            scrollbars: t,
            toolbar: t
        });
    });
    run("yt.www.watch.activity.init", onLoad);
    run("yt.www.watch.player.updateConfig", tick);
    run("yt.www.watch.player.init", function() {
        if (push("WATCH7_ENABLED")) {
            var pdataCur = apply("yt.playerConfig");
            if (!pdataCur) {
                return;
            }
            var r20 = tick(pdataCur);
            pdataCur = utils("watch7-player", pdataCur, r20);
            expected({
                PLAYER_REFERENCE: pdataCur
            });
        }
        writeURL();
        play(writeURL, 1E3);
    });

    function actionMenu(action, id) {
        function hideActionMenu() {
            document.querySelector('#watch-actions-' + id).classList.add('hid');
            document.querySelector(`[data-button-action="yt.www.watch.actions.${id}"]`).classList.remove('yt-uix-button-toggled')
            document.querySelector('#watch-actions-area-container').classList.add('hid');
        }
        if (action === 'show') {
            if (id === 'stats') {
                var Aaa = document.querySelector('#watch-actions-' + id)
                var Aab = Aaa.getAttribute('data-loaded')
                if (Aab !== "true") {
                    if (localStorage.getItem('cr-exp_flags-socialblade') === "true") {
                        Aaa.setAttribute('data-loaded', 'true')
                        console.log(Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData, 'videoSecondaryInfoRenderer'), 'videoOwnerRenderer'), 'canonicalBaseUrl')))
                        console.log(Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(ytCommand, 'watchEndpoint'), 'videoId')))
                        console.log(localStorage.getItem('SBEmail'))
                        console.log(localStorage.getItem('SBToken'))

                        i(`//api.socialblade.com/v2/youtube/statistics?query=statistics&username=${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData, 'videoSecondaryInfoRenderer'), 'videoOwnerRenderer'), 'canonicalBaseUrl'))}&videoId=${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(ytCommand, 'watchEndpoint'), 'videoId'))}&email=${localStorage.getItem('SBEmail')}&token=${localStorage.getItem('SBToken')}`, {
                            method: 'GET',
                            responseType: 'JSON',
                            i: function(response, data) {
                                console.log('Success:', data);
                                document.querySelector('#watch-actions-' + id).innerHTML = `<div id="watch-actions-stats" class="watch-actions-stats">
                                <div class="stats-header">
                            <h1>
                        Video statistics    </h1>
                          </div>
                        
                                  <div class="views">
                              <h2>Views and discovery</h2>
                              <div class="stats-box yt-uix-expander yt-uix-expander-collapsed">
                                  <div class="stats-big-chart">
                                    
                                      <iframe width="460px" src="//socialblade.com/widget?v=1&amp;u=${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(data, 'channelid'))}" height="116px"></iframe>
                                  </div>
                        
                                <div class="stats-views">
                        <h3>${Number(Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(data, 'data'), 'views'))).toLocaleString("en-US")}</h3>Views
                                </div>
                        
                                  <div class="horizontal-line hid"></div>
                                  <h4 class="hid">Key discovery events
                        </h4>
                                    <div class="stats-discovery-events hid">
                            <dl>
                                  <dt class="stats-label">A</dt>
                          <dd class="event">
                            <p>            <span>First referral from Google search:</span>
                                  <span class="extra">              <a rel="nofollow" href="http://web.archive.org/web/20120831215325mp_/http://www.google.com/search?q=gangnam%20style" dir="ltr">gangnam style</a>          </span>
                            </p>
                        
                        
                              <p class="sub-data">Jul 15, 2012 - 20,457,951 views
                              </p>
                          </dd>
                        
                                  <dt class="stats-label">B</dt>
                          <dd class="event">
                            <p>            <span>First referral from:</span>
                                  <span class="extra">              facebook.com          </span>
                            </p>
                        
                        
                              <p class="sub-data">Jul 15, 2012 - 21,579,061 views
                              </p>
                          </dd>
                        
                            </dl>
                              <dl class="extra-events">
                                    <dt class="stats-label">C</dt>
                          <dd class="event">
                            <p>            <span>First embedded on:</span>
                                  <span class="extra">              <a rel="nofollow" href="http://web.archive.org/web/20120831215325mp_/http://facebook.com" dir="ltr">facebook.com</a>          </span>
                            </p>
                        
                        
                              <p class="sub-data">Jul 15, 2012 - 23,496,353 views
                              </p>
                          </dd>
                        
                                    <dt class="stats-label">D</dt>
                          <dd class="event">
                            <p>            <span>First referral from YouTube search:</span>
                                  <span class="extra">              <a rel="nofollow" href="/web/20120831215325mp_/http://www.youtube.com/results?search_query=psy%20gangnam%20style" dir="ltr">psy gangnam style</a>          </span>
                            </p>
                        
                        
                              <p class="sub-data">Jul 15, 2012 - 32,773,879 views
                              </p>
                          </dd>
                        
                                    <dt class="stats-label">E</dt>
                          <dd class="event">
                            <p>          First referral from a subscriber module
                            </p>
                        
                        
                              <p class="sub-data">Jul 15, 2012 - 39,484,114 views
                              </p>
                          </dd>
                        
                                    <dt class="stats-label">F</dt>
                          <dd class="event">
                            <p>            <span>First referral from YouTube search:</span>
                                  <span class="extra">              <a rel="nofollow" href="/web/20120831215325mp_/http://www.youtube.com/results?search_query=gangnam%20style" dir="ltr">gangnam style</a>          </span>
                            </p>
                        
                        
                              <p class="sub-data">Jul 15, 2012 - 168,148,105 views
                              </p>
                          </dd>
                        
                                    <dt class="stats-label">G</dt>
                          <dd class="event">
                            <p>          First view from a mobile device
                            </p>
                        
                        
                              <p class="sub-data">Jul 15, 2012 - 421,084,749 views
                              </p>
                          </dd>
                        
                                    <dt class="stats-label">H</dt>
                          <dd class="event">
                            <p>            <span>First referral from YouTube search:</span>
                                  <span class="extra">              <a rel="nofollow" href="/web/20120831215325mp_/http://www.youtube.com/results?search_query=oppa%20gangnam%20style" dir="ltr">oppa gangnam style</a>          </span>
                            </p>
                        
                        
                              <p class="sub-data">Jul 22, 2012 - 22,872,446 views
                              </p>
                          </dd>
                        
                              </dl>
                              <div class="stats-discovery-toggle">
                                <a class="expand yt-uix-expander-head">
                                  Show more events
                        
                                  <img src="http://web.archive.org/web/20120831215325im_///s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">
                                </a>
                                <a class="collapse yt-uix-expander-head">
                                  Show less events
                        
                                  <img src="http://web.archive.org/web/20120831215325im_///s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">
                                </a>
                              </div>
                          </div>
                        
                             </div>
                            </div>
                            <div class="clearL"></div>
                        
                            <div class="engagement-audience">
                                <div class="stats-engagement">
                                  <h2>Engagement</h2>
                                  <div class="stats-box">
                                    <table>
                                      <tbody><tr>
                                        <td class="stats-box-top stats-box-left">
                                          <span style="font-size: x-large;">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(data, 'grade'))}</span>
                                          <span>
                        <h4>Grade</h4>
                                          </span>
                                        </td>
                                        <td class="stats-box-top stats-box-right">
                                          <img class="stats-engagement-chart" src="http://web.archive.org/web/20120831215325im_/http://chart.apis.google.com/chart?cht=ls&amp;chs=80x18&amp;chf=bg,s,F4F4F4&amp;chco=5F8FC9&amp;chls=1&amp;chm=B,DCE6EDdd,0,0,0&amp;chd=t:0.0,0.1,0.3,0.4,0.6,0.9,1.2,1.5,2.1,2.8,3.1,3.8,4.5,5.2,5.9,6.6,7.3,8.1,9.1,10.2,10.9,12.2,13.5,15.0,16.4,18.1,19.7,21.6,23.6,25.9,27.2,29.7,32.3,35.3,38.5,41.5,44.4,47.8,50.7,53.1,54.2,56.8,58.9,60.6,62.4,64.3,65.7,67.0,68.4,69.7,70.2,71.2,72.5,73.5,74.5,75.5,76.6,77.4,78.2,79.1,79.6,80.2,80.9,81.8,82.6,83.2,83.9,84.7,85.3,85.9,86.2,87.2,87.8,88.4,89.1,89.7,90.2,90.7,91.2,91.6,91.8,92.3,92.8,93.3,93.8,94.7,95.3,95.9,96.3,96.8,97.2,97.6,98.0,98.4,98.7,99.0,99.4,99.7,100.0,100.0" alt="">
                                          <span>
                        <h4>${Number(Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(data, 'avgdailysubs'))).toLocaleString('en-US')}</h4>Avg. Daily Subscribers
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td class="stats-box-bottom stats-box-left">
                                          <img class="stats-engagement-chart" src="http://web.archive.org/web/20120831215325im_/http://chart.apis.google.com/chart?cht=ls&amp;chs=80x18&amp;chf=bg,s,F4F4F4&amp;chco=5F8FC9&amp;chls=1&amp;chm=B,DCE6EDdd,0,0,0&amp;chd=t:0.0,0.1,0.3,0.3,0.4,0.6,0.7,0.9,1.1,1.4,1.6,2.0,2.3,2.7,3.1,3.5,3.9,4.4,5.0,5.6,5.9,6.7,7.5,8.4,9.4,10.6,11.8,13.2,14.8,16.4,17.4,19.2,21.0,23.2,25.5,28.0,30.3,33.8,37.1,39.8,40.9,43.6,45.7,47.5,49.4,51.3,52.9,54.3,55.8,57.8,58.4,59.5,60.9,62.1,63.2,64.2,65.4,66.3,67.2,68.3,68.8,69.6,70.4,71.5,72.5,73.3,74.1,75.0,75.8,76.5,76.9,78.6,79.6,80.4,81.4,82.1,82.7,83.4,84.3,84.8,85.1,85.9,86.6,87.8,88.9,91.7,92.8,93.7,94.5,95.3,95.8,96.5,97.1,97.7,98.1,98.6,99.1,99.6,100.0,100.0" alt="">
                                          <span>
                        <h4>${Number(Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(data, 'subs'))).toLocaleString('en-US')}</h4>Subscribers
                                          </span>
                                        </td>
                                        <td class="stats-box-bottom stats-box-right">
                                          <img class="stats-engagement-chart" src="http://web.archive.org/web/20120831215325im_/http://chart.apis.google.com/chart?cht=ls&amp;chs=80x18&amp;chf=bg,s,F4F4F4&amp;chco=5F8FC9&amp;chls=1&amp;chm=B,DCE6EDdd,0,0,0&amp;chd=t:0.0,0.0,0.0,0.0,0.0,0.1,0.1,0.2,0.2,0.3,0.4,0.5,0.7,0.8,1.1,1.3,1.5,1.8,2.1,2.4,2.5,2.9,3.3,3.8,4.4,5.0,5.8,6.5,7.3,8.3,8.8,9.7,10.7,11.9,13.2,14.4,15.8,17.9,19.7,21.3,22.0,23.8,25.3,26.6,28.0,29.5,30.7,31.8,33.2,34.5,35.3,36.5,37.9,39.2,40.3,41.5,42.9,43.9,45.0,46.2,46.9,47.9,48.9,50.2,51.4,52.4,53.4,54.8,55.8,56.8,57.4,59.7,61.2,62.3,63.8,65.0,66.0,67.2,68.8,69.9,70.5,71.8,73.3,75.2,77.3,81.8,84.1,86.0,87.7,89.3,90.3,91.9,93.3,94.7,95.8,96.8,98.0,99.1,100.0,100.0" alt="">
                                          <span>
                        <h4>${Number(Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(data, 'avgdailyviews'))).toLocaleString('en-US')}</h4>Avg. Daily Views
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody></table>
                                  </div>
                                </div>
                        
                              <div class="stats-audience">
                                <h2>Ranks</h2>
                                <div class="stats-box">
                                    <dl>
                                        <dd>
                        Views rank: ${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(data, 'rank'), 'viewsrank'))}
                                        </dd>
                                        <dd>
                        Country rank: ${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(data, 'rank'), 'countryrank'))}
                                        </dd>
                                    </dl>
                                </div>
                              </div>
                            </div>
                        
                        
                        
                            <div class="clearL"></div>
                          </div>`

                            },
                            onError: function(response, data) {
                                console.error('Error:', response.status, data);
                            },
                            timeout: 5000 // Set timeout to 5 seconds
                        });
                    }
                }
            }
            if (!document.querySelector('#watch-actions-' + id).classList.contains('hid') || document.querySelector(`[data-button-action="yt.www.watch.actions.${id}"]`).classList.contains('yt-uix-button-toggled')) {
                hideActionMenu()
            } else {
                var Aa = document.querySelectorAll('.watch-actions-panel')
                Aa.forEach(aA => {
                    aA.classList.add('hid')
                })
                var Ab = document.querySelectorAll('#watch-actions .yt-uix-action-button')
                Ab.forEach(bA => {
                    bA.classList.remove('yt-uix-button-toggled')
                })
                document.querySelector('#watch-actions-area-container').classList.remove('hid');
                document.querySelector(`[data-button-action="yt.www.watch.actions.${id}"]`).classList.add('yt-uix-button-toggled')
                document.querySelector('#watch-actions-' + id).classList.remove('hid')
                document.querySelector('#watch-actions-area-container').classList.remove('hid')
            }

        }
    }

    function closeActionMenu() {
        document.querySelector('#watch-actions-area-container').classList.add('hid');
        document.querySelectorAll('.watch-actions-panel').forEach(ba => { ba.classList.add('hid') })
            // HOLY SHIT I DONT KNOW WHY BUT WHEN IT HAPPENED I LAUNGHED LIKE CRAZY  document.querySelectorAll('.yt-uix-action-button').forEach(aa => { aa.classList.add('hid') })
        document.querySelectorAll('.yt-uix-action-button').forEach(aa => { aa.classList.remove('yt-uix-button-toggled') })
    }

    run('yt.www.watch.actions.share', function() { actionMenu('show', 'share') })
    run('yt.www.watch.actions.share.embed', function() {
        _togglediv(document.querySelector('.share-panel-embed-container'));
        _hidediv(document.querySelector('.share-panel-email-container'))
    })
    run('yt.www.watch.actions.share.email', function() {
        _togglediv(document.querySelector('.share-panel-email-container'));
        _hidediv(document.querySelector('.share-panel-embed-container'))
    })
    run('yt.www.watch.actions.addto', function() { actionMenu('show', 'addto') })
    run('yt.www.watch.actions.stats', function() { actionMenu('show', 'stats') })
    run('yt.www.watch.actions.loggedout', function() { actionMenu('show', 'logged-out') })
    run('yt.www.watch.actions.flag', function() { actionMenu('show', 'report') })
    run('yt.www.watch.actions.hide', closeActionMenu)
    run("yt.www.watch.player.seekTo", calc);
    run("openFull", function() {
        popup("/watch_popup?v=" + push("VIDEO_ID"), {
            target: "FullScreenVideo",
            width: screen.availWidth,
            height: screen.availHeight,
            resizable: TRUE,
            fullscreen: TRUE
        });
    });
    run("checkCurrentVideo", function(val, node, onlyFullWords) {
        var i = push("VIDEO_ID");
        /** @type {boolean} */
        var isDefault = i == val;
        /** @type {boolean} */
        var el = TRUE;
        if (!push("WATCH7_ENABLED")) {
            el = valid ? debug().Na() : value;
            /** @type {boolean} */
            el = !node || node == el;
        }
        if (i && (!isDefault || !el)) {
            /** @type {null} */
            node = value;
            if (el) {
                if (!push("WATCH7_ENABLED")) {
                    node = debug();
                    i = loadPlugins(node.g, [val])[0];
                    node = i === element ? "" : find(node.g, i);
                }
            }
            if (!node) {
                node = onlyFullWords ? onlyFullWords : trim(window.location.href, {
                    v: val,
                    feature: value
                });
            }
            if (node) {
                visit(node);
            }
        }
    });
    run("trackAnnotationsEvent", function(er, action, label) {
        var me = push("ANALYTICS_ANNOTATIONS_TRACKER");
        window._gaq.push(function() {
            me._trackEvent(er, action, label);
        });
    });
    run("reportFlashTiming", modId);
    run("reportTimingMaps", function(attrs, p0) {
        var attr;
        for (attr in attrs) {
            context.Rc(attr, attrs[attr]);
        }
        var i;
        for (i in p0) {
            context.info(i, p0[i]);
        }
        context.Sc();
    });
    run("yt.www.watch.playlists.editAnnotation", function() {
        addClass(require("watch-video-annotation-editable"), "not-editing", "editing");
        require("watch-video-annotation-textarea").focus();
        var element = require("watch-video-annotation-form");
        if (!equal(element, "setup")) {
            data(element, "setup", "true");
            element = callback("cancel-button", element);
            addEvent(element, "click", function(types) {
                types.preventDefault();
                register();
            });
        }
    });
    run("yt.www.watch.playlists.removeAnnotation", function() {
        var nodes = require("watch-video-annotation-form");
        /** @type {string} */
        require("watch-video-annotation-textarea").value = "";
        step2(nodes);
    });
    run("yt.www.watch.playlists.submitForm", function(classesToRemove) {
        step2(classesToRemove);
    });
    run("yt.www.watch.abandonment.init", function(dataAndEvents, max) {
        /** @type {null} */
        pointerValue = dataAndEvents;
        /** @type {number} */
        date = max;
        var chunk = push("PLAYER_CONFIG");
        chunk = new Buffer(chunk);
        regexpForDateFormat(function(value) {
            var animation = context.timer || {};
            if (animation.start) {
                if (parseData(value, chunk.minVersion)) {
                    time = animation.start;
                    if (RESIZE_LISTENER) {
                        o(forEach());
                    } else {
                        Ext.wa("READY_STATE_TOPIC", o);
                    }
                    addEvent(window, "beforeunload", shutdown);
                    /** @type {number} */
                    value = setAttribute() - time;
                    /** @type {number} */
                    value = max - value;
                    if (0 <= value) {
                        newValue = attr(el, value);
                        stop("attempt");
                    }
                }
            }
            /** @type {boolean} */
            t1 = TRUE;
        });
    });
    run("yt.www.watch.player.addSaveResumeOnUnloadListener", function() {
        addEvent(window, "unload", repeat);
    });
    run("yt.history.enable", function(graphics, index) {
        var self = Set(index);
        self.setEnabled.call(self, TRUE, graphics);
    });
    run("yt.history.disable", function() {
        var self = Set();
        self.setEnabled.call(self, t);
    });
    run("yt.www.lists.addto.toggleMenu", function(obj, dataAndEvents) {
        var hash = OBJ2.getInstance();
        var str = get(hash);
        var key = require("shared-addto-menu");
        if (dataAndEvents) {
            var current = callback("addto-menu", key);
            evalScript(hash, obj);
            inStack = removeClass(obj, str);
            if (!title) {
                title = current.innerHTML;
            }
            hash = equal(key, "video-ids");
            str = equal(obj, "video-ids");
            if (pdataCur) {
                end(key, "lightweight-panel");
            }
            if (same(obj, "flip")) {
                end(key, "flip");
            }
            if (str) {
                if (hash != str) {
                    data(key, "video-ids", str);
                    current.innerHTML = title;
                    new result(obj);
                }
            }
        } else {
            if (inStack) {
                end(obj, str);
            }
            removeClass(key, "flip");
        }
    });
    run("yt.www.lists.data.addto.saveToWatchLater", function(dataAndEvents, deepDataAndEvents) {
        flush({
            Xc: dataAndEvents,
            Wc: "WL",
            qc: deepDataAndEvents,
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                var camelKey = obj.list_id || "";
                var restoreScript = obj.video_count || 1;
                var taskComplete = obj.videos || [];
                /** @type {Array} */
                var originalEvent = [dataAndEvents];
                var rvar = replace("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
                access("WL", camelKey, rvar, taskComplete, restoreScript, originalEvent);
            },
            onError: element,
            z: element
        });
    });
    run("yt.www.lists.addtowatchlater.init", name);
    create("init", name);
    run("yt.www.watch.watch5.enableWide", success);
    run("yt.www.watch.watch5.handleResize", function() {
        _(pdataOld);
        pdataOld = attr(redraw, 200);
    });
    run("yt.www.watch.watch5.updatePlayerSize", redraw);
    run("yt.www.watch.watch5.handleLoadMoreRelated", function() {
        split("watch-more-related-button");
        call("watch-more-related", "watch-more-related-loading");
        i("/related_ajax", {
            n: {
                video_id: push("VIDEO_ID"),
                action_more_related_videos: 1
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                var result = require("watch-more-related");
                result.innerHTML = obj.html;
                pass(result);
            }
        });
    });
    run("yt.www.watch.watch5.handleYouTubeMix", function() {
        var data = require("youtube-mix-button");
        /** @type {boolean} */
        data.disabled = TRUE;
        i("/music_ajax", {
            n: {
                video_id: push("VIDEO_ID"),
                artist_id: push("ARTIST_ID"),
                action_get_mix: 1
            },
            /**
             * @param {?} value
             * @param {string} obj
             * @return {undefined}
             */
            i: function(value, obj) {
                /** @type {boolean} */
                data.disabled = t;
                if ("" != obj.list_id) {
                    var result = debug();
                    var activeClassName = new s("TL", obj.list_id);
                    close(result, activeClassName);
                    /** @type {number} */
                    activeClassName.b = 0;
                    result.gb(TRUE);
                    checkResults(result, TRUE);
                    hasKey(result);
                }
            }
        });
    });
    run("yt.www.watch.watch5.handleToggleMoreFromUser", function(key) {
        var camelKey = same(key, "yt-uix-expander-collapsed");
        var result = require("watch-more-from-user");
        if (!camelKey) {
            if ("true" != equal(result, "loaded")) {
                let headers = {}
                if (ytcfg.get('LOGGED_IN') === false) {
                    headers = {}
                } else {
                    headers = {
                        "authorization": Panda.document.Account.getSapisidhash(),
                        "x-goog-authuser": ytcfg.get('SESSION_INDEX'),
                        "x-goog-pageid": ytcfg.get('DELEGATED_SESSION_ID'),
                        "x-goog-visitor-id": ytcfg.get('VISITOR_DATA')
                    }
                }
                i("/youtubei/v1/browse", {
                    method: "POST",
                    urlParams: {
                        key: ytcfg.get('INNERTUBE_API_KEY'),
                        prettyPrint: 'false',
                    },
                    postBody: {
                        "browseId": Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(ytInitialData, 'videoSecondaryInfoRenderer'), 'videoOwnerRenderer'), 'browseId')),
                        "params": "EgZ2aWRlb3O4AQCSAwDyBgQKAjoA",
                        "context": ytcfg.get('INNERTUBE_CONTEXT'),
                    },
                    headers: headers,
                    /**
                     * @param {?} value
                     * @param {string} obj
                     * @return {undefined}
                     */
                    i: function(value, obj) {
                        function calculateNumberOfSlides(totalItems, itemsPerSlide) {
                            return Math.ceil(totalItems / itemsPerSlide);
                        }
                        let videoscount = 0
                        let itemsperslide = 6

                        function chunkArray(array, chunkSize) {
                            var chunks = [];
                            for (var i = 0; i < array.length; i += chunkSize) {
                                chunks.push(array.slice(i, i + chunkSize));
                            }
                            return chunks;
                        }

                        function wrapInSlide(items) {
                            var slideHtml = '<ul class="yt-uix-slider-slide">';
                            items.forEach(item => {
                                slideHtml += item;
                            });
                            slideHtml += '</ul>';
                            return slideHtml;
                        }

                        var videosArray = [];
                        Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(Panda.document.utils.findElement(obj, 'contents'), 'tabs'), 'content'), 'contents').contents.forEach(video => {
                            videoscount++
                            if (video.richItemRenderer) {

                                var videotitle = Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(video, 'title'), 'runs'))
                                var videoauthor = Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(obj, 'header'), 'title'))
                                var videoviews = Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(video, 'viewCountText'))
                                videosArray.push(`<li class="yt-uix-slider-slide-item ">
            
                            <div class="video-list-item  yt-tile-default ">
                              <a href="/watch?v=${video.richItemRenderer.content.videoRenderer.videoId}" class="related-video yt-uix-contextlink  yt-uix-sessionlink" data-sessionlink="feature=channel&amp;ei=CLTR1ez43LQCFVKDIQodUzEL0Q%3D%3D"><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-120 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="PSY - VH1 Morning Buzz Live with Carrie and Jason" src="//i.ytimg.com/vi/${video.richItemRenderer.content.videoRenderer.videoId}/default.jpg" width="120" data-group-key="thumb-group-0"><span class="vertical-align"></span></span></span></span><span class="video-time">4:06</span>
                          
                          
                            <button onclick=";return false;" type="button" title="Watch Later" class="addto-button video-actions spf-nolink addto-watch-later-button yt-uix-button yt-uix-button-default yt-uix-button-short yt-uix-tooltip" data-video-ids="M6Y_gfyeFLA" role="button"><span class="yt-uix-button-content">  <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">
                           </span></button>
                          </span><span dir="ltr" class="title" >${videotitle}</span><span class="stat attribution">by <span class="yt-user-name " dir="ltr">${videoauthor}</span></span><span class="stat view-count">${videoviews}</span></a>
                            </div>
                          
                                    </li>`)
                            }
                        })
                        var chunks = chunkArray(videosArray, 6); // Divide videosArray into chunks of 6 items each
                        var slidesnum = chunks.length.toString(); // Calculate the number of slides

                        var slidesbuttons = ``
                        for (var i = 0; i < chunks.length; i++) {
                            let Aa
                            if (i < 1) {
                                Aa = `yt-uix-slider-num-current yt-uix-button-toggled`
                            }
                            slidesbuttons += `  <button onclick=";return false;" class="yt-uix-slider-num yt-uix-button yt-uix-button-default ${Aa}" type="button" data-slider-num="${i}" role="button"><span class="yt-uix-button-content">${Number(i) + 1} </span></button>`
                        }

                        var videoshtml = ''; // Variable to store final HTML
                        // Wrap each chunk in a <ul class="yt-uix-slider-slide"> element
                        chunks.forEach(chunk => {
                            videoshtml += wrapInSlide(chunk);
                        });
                        //let slidesnum = (calculateNumberOfSlides(videoscount, itemsperslide) - 1).toString()

                        result.innerHTML = `<div class="yt-uix-slider yt-rounded" id="watch-channel-discoverbox" data-slider-slides="${slidesnum}" data-slider-slide-selected="0" data-slider-current="0">
                        <button class="yt-uix-button yt-uix-button-default yt-uix-slider-prev" rel="prev" disabled=""><img class="yt-uix-slider-prev-arrow" src="http://web.archive.org/web/20120831215325im_///s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="previous"></button>
                    <button class="yt-uix-button yt-uix-button-default yt-uix-slider-next" rel="next"><img class="yt-uix-slider-next-arrow" src="http://web.archive.org/web/20120831215325im_///s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="next"></button>
                  
                      <div class="yt-uix-slider-head">
                          <span class="yt-uix-slider-nums yt-uix-pager">
                        
                        ${slidesbuttons}
                        
                        
                    </span>
                  
                        <div class="yt-uix-slider-title"><h2><a href="${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(obj, 'header'), 'canonicalBaseUrl'))}/videos">${Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(Panda.document.utils.findElement(obj, 'header'), 'videosCountText'))}
                   »</a></h2></div>
                      </div>
                      <div class="yt-uix-slider-body">
                        <div class="yt-uix-slider-slides" style="left: 0px;">
                          
                  
                      
                  
                      
                        ${videoshtml}
                      
                  
                      
                  
                        </div>
                      </div>
                    </div>`;
                        data(result, "loaded", "true");
                        pass(result);
                        /** @type {number} */

                    }
                });
            }
        }
        done(result, "collapsed", camelKey);
    });
    run("yt.www.watch.watch5.handleToggleDescription", function(result) {
        if (same(result, "yt-uix-expander-collapsed")) {
            clear("descriptionClosed", element, element);
        } else {
            if ((result = require("watch-source-videos-list")) && "true" != equal(result, "loaded")) {
                data(result, "loaded", "true");
                var url = applyReplacement("/watch_ajax", {
                    action_get_video_attributions_component: 1,
                    v: push("VIDEO_ID")
                });
                request(url, {
                    method: "GET",
                    update: result
                });
            }
            clear("descriptionOpened", element, element);
        }
    });
    run("yt.www.watch.watch5.purchaseComplete", function() {
        call(require("watch-player-rental-play-button"));
        var udataCur = require("watch-player-rental-still-frame");
        split(readFile());
        call(udataCur);
    });
    run("yt.www.watch.shortcuts.init", function() {
        addEvent(document, "keypress", dispatch);
    });

    run("yt.www.comments.init", function() {
        var data = require("comments-view");
        new Request(data);
        script.push(unbind(data, "click", start, "comment-action"));
        if (data = require("comments-textarea")) {
            /** @type {boolean} */
            data.disabled = t;
            /** @type {string} */
            data.id = "";
        }
        if (push("COMMENT_OPEN_REPLY_BOX")) {
            data = expect("comment", require("linked-comments-header"));
            ready(data[data.length - 1]);
        }
    });
    run("yt.www.comments.initForm", toggle);
    run("yt.www.lists.init", function() {
        if (-1 < parseInt(push("PLAYLIST_BAR_PLAYING_INDEX"), 10)) {
            debug();
            var restoreScript = push("AUTOPLAY_DELAY");
            if (restoreScript) {
                route(restoreScript);
            }
        }
        create("WATCH_LATER_UPDATED", function(subKey, elements) {
            var rvar = replace("PLAYLIST_BAR_ADDED_TO_PLAYLIST");
            access("WL", subKey, rvar, value, 0, elements);
        });
        /** @type {boolean} */
        valid = TRUE;
    });
    run("yt.www.lists.getState", function() {
        var obj = debug();
        /** @type {null} */
        var ret = value;
        if (obj) {
            ret = eq(obj.g);
            var employees = {};
            slice(ret, function(i) {
                employees[i] = this.g.getVideoData(i);
            }, obj);
            var idx = obj.da();
            var root = cloneNode(obj);
            var shuffle = obj.Y() ? obj.g.ka : 0;
            /** @type {Array} */
            var animations = [];
            /** @type {number} */
            var i = 0;
            for (; i < ret.length; i++) {
                var args = equal(obj.D, "start-time" + i) || "";
                var hash = equal(obj.D, "end-time" + i) || "";
                animations[i] = {
                    start: args,
                    end: hash
                };
            }
            ret = {
                autoPlay: root,
                clipRanges: animations,
                index: idx,
                shuffle: shuffle,
                videoData: employees,
                videoIds: ret || []
            };
            ret.autoPlayMax = push("PLAY_ALL_MAX");
        }
        return ret;
    });
    run("yt.www.lists.registerNearEndEventsWithPlayer", reject);
    run("yt.www.lists.handleNearPlaybackEnd", function(type) {
        if (valid) {
            if (cloneNode(debug())) {
                if ("NEAR_END" == type.slice(0, -1)) {
                    /** @type {number} */
                    type = parseInt(type.slice(-1), 10);
                    errorCallback(debug(), type);
                }
            }
        }
    });
    run("yt.dom.datasets.get", equal);
    run("yt.dom.datasets.set", data);
    item("openFull", "checkCurrentVideo", "trackAnnotationsEvent", "reportFlashTiming", "shareVideoFromFlash", "setCompanion", "setInstreamCompanion", "setLongformCompanion", "setFreewheelCompanion", "closeInPageAdIframe", "hideInstreamCompanion", "disablePopout", "enablePopout", "closeMpuCompanion", "updatePopAds", "setAfvCompanionVars", "showAfvCompanionAdDiv", "hideAfvInstreamCompanionAdDiv", "showGutCompanion");
    run("yt.www.picker.load", function(name) {
        var code = equal(name, "picker-key");
        var event = equal(name, "picker-position");
        /** @type {string} */
        event = "yt-picker-" + code + "-" + event;
        /** @type {boolean} */
        name = equal(name, "button-menu-id") == event;
        var data = require(event);
        if (data) {
            if (!name) {
                if (propName) {
                    if (propName != data) {
                        split(propName);
                    }
                }
                propName = data;
                line(data);
            }
            if (!equal(data, "loaded")) {
                name = {};
                /** @type {number} */
                name["action_" + code] = 1;
                name.base_url = push("CURRENT_URL");
                i("/picker_ajax", {
                    format: "JSON",
                    method: "GET",
                    n: name,
                    i: bind(view, value, data),
                    /**
                     * @return {undefined}
                     */
                    onError: function() {
                        split(data);
                    }
                });
            }
        }
    });
    run("yt.www.picker.applyGrid", resume);
    run("yt.www.search.init", function() {
        var value = expect("group-container");
        slice(value, bindEvents);
        value = callback("search-header");
        var dom = require("filter-dropdown");
        if (value) {
            if (dom) {
                (new Color(value, dom)).init();
            }
        }
    });
    create("init", function() {
        fi = push("THUMB_DELAY_LOAD_BUFFER") || 0;
        aDecl.push(create("page-init", type));
        aDecl.push(create("page-resize", left));
        aDecl.push(create("page-scroll", right));
    });
    create("init", function() {
        /** @type {number} */
        var i = 0;
        for (; i < document.forms.length; i++) {
            /** @type {boolean} */
            var y = t;
            /** @type {number} */
            var p = 0;
            for (; p < parts.length; p++) {
                if (document.forms[i].name == parts[p]) {
                    /** @type {boolean} */
                    y = TRUE;
                }
            }
            p = document.forms[i];
            if ("post" == p.method.toLowerCase() && y == t) {
                /** @type {boolean} */
                y = t;
                /** @type {number} */
                var e = 0;
                for (; e < p.elements.length; e++) {
                    if (p.elements[e].name == push("XSRF_FIELD_NAME")) {
                        /** @type {boolean} */
                        y = TRUE;
                    }
                }
                if (!y) {
                    y = element;
                    y = push("XSRF_TOKEN");
                    /** @type {Element} */
                    e = document.createElement("input");
                    e.setAttribute("name", push("XSRF_FIELD_NAME"));
                    e.setAttribute("type", "hidden");
                    e.setAttribute("value", y);
                    p.appendChild(e);
                }
            }
        }
    });
    run("yt.www.masthead.performSearch", function(name, el) {
        var result = require("masthead-search");
        var val = equal(el, name) || "";
        if ("rentals" == val) {
            /** @type {number} */
            result.rental.value = 1;
            /** @type {string} */
            result.search_type.value = "";
        } else {
            result.search_type.value = val;
            /** @type {number} */
            result.rental.value = 0;
        }
        if (result.search_query.value) {
            result.submit();
        } else {
            result = el.innerHTML;
            var element = require("search-btn");
            var html = element.innerHTML;
            var udataCur = equal(element, name) || "";
            element.innerHTML = result;
            data(element, name, val);
            el.innerHTML = html;
            data(el, name, udataCur);
        }
        return t;
    });
    run("yt.www.masthead.dismissGAPlusMessage", function() {
        var reqVerArray = read("FML", "").split(",");
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        /** @type {number} */
        defaultCenturyStart = Math.round(defaultCenturyStart.getTime() / 1E3);
        /** @type {string} */
        var s = "";
        /** @type {string} */
        s = 2 != reqVerArray.length ? "1," + defaultCenturyStart : parseInt(reqVerArray[0], 10) + 1 + "," + defaultCenturyStart;
        cmp("FML", s, 31536E4);
    });
    run("yt.www.masthead.dismissPostLinkingMessage", function() {
        cleanup("FML");
    });
    run("yt.www.masthead.dismissCookieAlert", function() {
        clear("GC_OK", element, element);
        editor.getInstance();
        substitute(tok.$g, TRUE);
        compare();
    });
    run("yt.www.masthead.toggleExpandedMasthead", function() {
        var element = require("masthead-expanded");
        layout(element);
        extend("masthead-mastfeedr-toggle");
        func("masthead-expanded-menu", TRUE);
        func("masthead-expanded-acct-sw-container", t);
        if (!dest) {
            removeClass(require("masthead-expanded-container"), "accountswitch");
        }
        if (!equal(element, "loaded")) {
            var img = require("masthead-expanded-menu-gaia-photo");
            if (img) {
                if (!img.src) {
                    img.src = equal(img, "src");
                }
            }
        }
    });
    run("yt.www.masthead.accountswitch.init", function(vec) {
        /** @type {boolean} */
        dest = vec;
    });
    run("yt.www.masthead.accountswitch.toggle", function() {
        layout("masthead-expanded-acct-sw-container");
        var b = require("masthead-expanded-container");
        var a = require("masthead-expanded-acct-sw-container");
        if (getSize(a)) {
            /** @type {string} */
            a.style.top = b.offsetTop + "px";
            if (documentElement) {
                if (css("7") && !css("8")) {
                    /** @type {string} */
                    a.style.top = b.offsetTop - (a.offsetTop - b.offsetTop) + "px";
                }
            }
            a = require("masthead-expanded-menu-acct-sw-list");
            if (a.offsetHeight < b.offsetHeight) {
                /** @type {string} */
                a.style.height = b.offsetHeight - 11 + "px";
            }
            var iframe = require("masthead-expanded-acct-sw-iframe");
            if (!iframe) {
                var insertAt = require("masthead-expanded-menu-acct-sw-list");
                iframe = jQuery("iframe", {
                    id: "masthead-expanded-acct-sw-iframe",
                    frameborder: 0,
                    src: 'javascript:""'
                });
                if (insertAt.parentNode) {
                    insertAt.parentNode.insertBefore(iframe, insertAt);
                }
            }
            /** @type {string} */
            iframe.style.height = a.offsetHeight - 11 + "px";
            if (!dest) {
                end(b, "accountswitch");
            }
        } else {
            if (!dest) {
                removeClass(b, "accountswitch");
            }
        }
    });
    create("init", function() {
        if (push("SANDBAR_ENABLED")) {
            check("iframes", {
                /**
                 * @return {undefined}
                 */
                callback: function() {
                    var global = require("sb-button-notify");
                    var b = require("sb-button-share");
                    var suiteView = new load(push("SANDBAR_LOCALE"), push("SESSION_INDEX"), push("SANDBAR_DELEGATED_SESSION_ID"));
                    addEvent(global, "click", bind(suiteView.Wg, suiteView));
                    addEvent(b, "click", bind(suiteView.Xg, suiteView));
                    extend("sandbar-init");
                },
                _c: {
                    jsl: {
                        h: push("GAPI_HINT_PARAMS")
                    }
                }
            });
        }
    });
    run("yt.www.ads.MastheadAd", constructor);
    /** @type {function (): undefined} */
    constructor.prototype.autoCollapsePremiumYva = constructor.prototype.dh;
    /** @type {function (): undefined} */
    constructor.prototype.collapse_ad = constructor.prototype.ih;
    /** @type {function (): undefined} */
    constructor.prototype.expand_ad = constructor.prototype.jh;
    /** @type {function (): undefined} */
    constructor.prototype.userCollapsePremiumYva = constructor.prototype.od;
    /** @type {function (): undefined} */
    constructor.prototype.userExpandPremiumYva = constructor.prototype.gh;
    /** @type {function (): undefined} */
    constructor.prototype.userUnexpandPremiumYva = constructor.prototype.hh;
    run("yt.www.home.ads.workaroundIE", function(submenu) {
        if (!fun) {
            if (tmp) {
                /** @type {boolean} */
                fun = TRUE;
                attr(function() {
                    submenu.focus();
                }, 0);
            }
        }
    });
    run("yt.www.home.ads.workaroundLoad", function() {
        /** @type {boolean} */
        tmp = TRUE;
    });
    run("yt.www.home.ads.workaroundReset", function() {
        /** @type {boolean} */
        fun = t;
    });
    run("yt.www.home.ads.writeAdsContentToIframe", function(fname, dataAndEvents) {
        var gridStore = require(fname).contentDocument || require(fname).contentWindow.document;
        gridStore.open();
        gridStore.write("<!DOCTYPE html><html><head></head><body>" + dataAndEvents + "</body></html>");
        if (!documentElement) {
            gridStore.close();
        }
    });
    run("yt.www.channelcard.show", function(a, element) {
        var fn;
        var target;
        var scroll = equal(element, "id");
        slice(arr, function(opts) {
            if (!target) {
                if (opts.e == scroll) {
                    target = opts.target;
                }
            }
            if (!fn) {
                if (opts.target == element) {
                    /** @type {Object} */
                    fn = opts;
                }
            }
        });
        if (!fn) {
            fn = new DomElement(a, 0, target);
            arr.push(fn);
        }
        var obj = fn;
        /** @type {boolean} */
        obj.b = t;
        attr(bind(obj.j, obj), 1E3);
        if (!obj.c) {
            if (!obj.f) {
                obj.get();
            }
        }
    });
    run("yt.www.channelcard.config", {
        "card-action": "yt.www.channelcard.show",
        "card-class": "yt-channel-card",
        "card-delay-show": 200,
        "card-delegate-show": TRUE,
        orientation: "vertical",
        position: "topright"
    });
    run("yt.tracking.doubleclick.trackActivity", function(s, value, node) {
        /** @type {string} */
        s = ("https:" == document.location.protocol ? "https://" : "http://") + "fls.doubleclick.net/activityi;src=" + encodeURIComponent(String(push("DBLCLK_ADVERTISER_ID"))) + ";type=" + encodeURIComponent(String(s)) + ";cat=" + encodeURIComponent(String(value));
        if (node) {
            if (!node.ord) {
                s += ";ord=1";
            }
        }
        var i;
        for (i in node) {
            s += ";" + encodeURIComponent(String(i)) + "=" + encodeURIComponent(String(node[i]));
        }
        s += ";num=" + setAttribute();
        /** @type {Element} */
        node = document.createElement("iframe");
        /** @type {string} */
        node.src = s;
        /** @type {string} */
        node.style.display = "none";
        document.body.appendChild(node);
    });
    run("yt.tracking.track", function(initial, exp, walkers) {
        clear(initial, exp, walkers);
    });
    run("yt.tracking.resolution", function() {
        /** @type {(Element|null)} */
        var viewport = "CSS1Compat" == document.compatMode ? document.documentElement : document.body;
        viewport = {
            a: "resolution",
            width: screen.width,
            height: screen.height,
            depth: screen.colorDepth,
            win_width: viewport.clientWidth,
            win_height: viewport.clientHeight
        };
        if (window.devicePixelRatio) {
            /** @type {number} */
            viewport.pixel_ratio = window.devicePixelRatio;
        }
        viewport = key(viewport);
        loadImage("/gen_204?" + viewport, element);
    });
    run("yt.tracking.shareList", last);
    run("yt.tracking.shareVideo", removeChild);
    run("yt.tracking.shareUrl", function(removed, requestUrl, deepDataAndEvents, walkers) {
        S(removed, {
            url: requestUrl
        }, deepDataAndEvents, walkers);
    });
    run("yt.analytics.urchinTracker", function() {});
    run("yt.analytics.trackEvent", children);
    run("yt.timing.report", context.ic);
    run("yt.timing.maybeReport", context.Sc);
    if (ignoreEmpty) {
        if (!document.documentMode || 8 > document.documentMode) {
            unbind(require("ie"), "click", handleClick, "video-thumb");
        }
    }
    run("yt.www.subscriptions.edit.onUpdateSubscription", function(dataAndEvents, item, path, done) {
        path = path || "";
        /** @type {boolean} */
        var block = t;
        if (item = require("subscription_level_unsubscribe")) {
            if (item.checked) {
                /** @type {boolean} */
                block = TRUE;
            }
        }
        item = MAP(require("subscription_level_uploads" + path).form);
        request("/ajax_subscriptions?" + item, {
            postBody: "session_token=" + dataAndEvents,
            /**
             * @param {?} value
             * @return {undefined}
             */
            onComplete: function(value) {
                require("subscribeMessage" + path).innerHTML = each(error(value), "html_content");
                split("edit_subscription_wrapper" + path);
                split("edit_subscription_arrow" + path);
                call("subscribeMessage" + path);
                if (path) {
                    /** @type {string} */
                    require("edit_subscription_opener" + path).style.visibility = "";
                    attr(function() {
                        split("subscribeMessage" + path);
                    }, 5E3);
                }
                if (block) {
                    var index = require("channel-body");
                    value = add("div", "subscribe-div", index);
                    index = add("div", "unsubscribe-div", index);
                    slice(value, function(subKey) {
                        line(subKey);
                    });
                    slice(index, function(subKey) {
                        line(subKey);
                    });
                    done();
                }
            }
        });
    });
    run("yt.www.subscriptions.edit.onCancelUpdateSubscription", function(path) {
        path = path || "";
        split("edit_subscription_wrapper" + path);
        split("edit_subscription_arrow" + path);
        if (path) {
            /** @type {string} */
            require("edit_subscription_opener" + path).style.visibility = "";
        }
        split("alerts");
    });
    run("yt.www.subscriptions.edit.onEditSubscriptionFromRecentActivity", function(pack, dataAndEvents, name, s) {
        if (window["edit_subscription_download_" + name]) {
            split("subscribeMessage" + name);
            line("edit_subscription_wrapper" + name);
            line("edit_subscription_arrow" + name);
            pack = require("edit_subscription_opener" + name);
            /** @type {string} */
            pack.style.visibility = "visible" == pack.style.visibility ? "" : "visible";
        } else {
            /** @type {boolean} */
            window["edit_subscription_download_" + name] = TRUE;
            request("/ajax_subscriptions?get_edit_subscription_form=" + dataAndEvents + "&i=" + name, {
                postBody: "session_token=" + pack,
                /**
                 * @param {?} value
                 * @return {undefined}
                 */
                onComplete: function(value) {
                    /** @type {string} */
                    require("edit_subscription_opener" + name).style.visibility = "visible";
                    /** @type {Element} */
                    var msgElm = document.createElement("div");
                    msgElm.innerHTML = each(value.responseXML, "html_content");
                    s.parentNode.insertBefore(msgElm, s);
                    call("edit_subscription_wrapper" + name);
                    call("edit_subscription_arrow" + name);
                }
            });
        }
    });
    run("yt.www.subscriptions.SubscriptionButton.init", build);
    run("yt.www.subscriptions.SubscriptionButton.delayedSubscribe", function(isXML, l) {
        all(isXML, l, "delayed-sub", value);
    });
    run("yt.www.account.Lightbox.init", function() {
        new a;
    });
    run("yt.www.account.Lightbox.show", function() {
        new a(TRUE);
    });
    run("yt.www.account.linkgplusloader.init", function() {
        var range = require("page");
        unbind(range, "mousedown", compile, "link-gplus-lightbox");
        unbind(range, "click", b, "link-gplus-lightbox");
    });
    run("yt.www.account.linkgplusloader.dismiss", function() {
        match(acc, "cancel");
    });
    run("yt.www.account.linkgplusloader.gotoContentState", function() {
        successCallback(acc, "content");
    });
    run("yt.www.account.linkgplusloader.gotoWorkingState", function() {
        successCallback(acc, "working");
    });
    run("yt.www.account.linkgplusloader.show", function() {
        compile();
        b(value);
    });
    run("yt.www.account.linkgplusloader.showDialog", function() {
        successCallback(acc, "content");
        var self = acc;
        if (!self.c) {
            var node = target.getInstance();
            var cur = expect(get(node, "menu"), self.fb);
            slice(cur, function(parent) {
                parent = removeNode(node, parent);
                data(parent, "button-menu-root-container", "yt-dialog-base");
            });
            /** @type {boolean} */
            self.c = TRUE;
        }
        if (document.activeElement) {
            if (document.activeElement != document.body) {
                document.activeElement.blur();
            }
        }
        if (!self.b) {
            self.b = require("yt-dialog-bg");
            if (!self.b) {
                /** @type {Element} */
                self.b = document.createElement("div");
                /** @type {string} */
                self.b.id = "yt-dialog-bg";
                /** @type {string} */
                self.b.className = "yt-dialog-bg";
                document.body.appendChild(self.b);
            }
        }
        /** @type {string} */
        self.b.style.height = onIframeLoad() + "px";
        call(self.b);
        /** @type {NodeList} */
        cur = document.getElementsByTagName("embed");
        /** @type {NodeList} */
        var index = document.getElementsByTagName("object");
        var result = bind(function(el) {
            var udataCur = el.style.visibility;
            if (!bootstrap(el, this.fb)) {
                if ("hidden" != udataCur) {
                    data(el, "dialog-hidden", "true");
                    if (udataCur) {
                        data(el, "dialog-visibility-value", udataCur);
                    }
                    /** @type {string} */
                    el.style.visibility = "hidden";
                }
            }
        }, self);
        slice(cur, result);
        slice(index, result);
        if (!self.e) {
            addEvent(document, "keydown", bind(self.f, self));
        }
        call(self.fb);
        self = callback("yt-dialog-fg", require("link-gplus-lb"));
        cur = traverse(self);
        /** @type {string} */
        self.style.position = "fixed";
        /** @type {string} */
        self.style.top = "95px";
        if (cur.x) {
            /** @type {string} */
            self.style.left = cur.x + "px";
        }
    });
    run("yt.www.account.linkgplusloader.setWaitCursor", w);
    create("init", function() {
        if (push("YPC_LOADER_ENABLED")) {
            /** @type {number} */
            var i = 0;
            for (; i < codeSegments.length; i++) {
                if (callback(codeSegments[i])) {
                    one();
                    break;
                }
            }
            create("ypc-delayedloader-load", one);
        }
    });
    item("yt", "goog", "_gel", "googleapisv0", "_hasclass", "_addclass", "_removeclass", "_showdiv", "_hidediv", "_ajax");
    run("yt.www.masthead.extended.redirectWithNewParam", function(val, prop) {
        var result;
        var suiteView;
        var obj;
        /** @type {string} */
        result = window.location.href;
        /** @type {Array.<string>} */
        result = result.split("#");
        /** @type {string} */
        suiteView = 2 == result.length ? "#" + result[1] : "";
        /** @type {string} */
        result = result[0];
        obj = combine(result);
        obj[prop] = val;
        /** @type {string} */
        obj["persist_" + prop] = "1";
        /** @type {Array.<string>} */
        result = result.split("?");
        /** @type {string} */
        result = result[0];
        visit(result, obj, suiteView);
    });
    run("yt.www.insight.setOptOut", fetch);
    run("yt.www.watch.survey.takeWatchPageSurvey", function() {
        node();
        window.open("/watch_page_survey?r2=" + push("SURVEY_REFERER") + "&r1=" + push("SURVEY_SERVLET_NAME") + "&name=" + push("SURVEY_TYPE"), "YouTube_User_Happiness_Survey", "toolbar=no,width=800,height=768,status=no,resizable=yes,fullscreen=no,scrollbars=yes").focus();
    });
    run("yt.www.watch.survey.watchPageSurveyGoAway", node);
    run("yt.www.watch.survey.checkSurveyCompletedAndShow", function() {
        if (!indexOf(editor.getInstance(), tok.de)) {
            call("watch_page_survey");
        }
    });
    run("yt.www.user.unblockUserLinkByExternalId", function(dataAndEvents, deepDataAndEvents) {
        if (confirm(replace("UNBLOCK_USER"))) {
            i("/link_ajax?action_unblock_user=1", {
                format: "XML",
                method: "POST",
                oa: push("BLOCK_USER_AJAX_XSRF") + "&uid=" + dataAndEvents,
                /**
                 * @return {undefined}
                 */
                i: function() {
                    if (deepDataAndEvents) {
                        window.location.reload();
                    }
                }
            });
        }
    });
    run("yt.www.user.blockUserLinkByExternalId", function(dataAndEvents, deepDataAndEvents) {
        if (confirm(replace("BLOCK_USER"))) {
            i("/link_ajax?action_block_user=1", {
                format: "XML",
                method: "POST",
                oa: push("BLOCK_USER_AJAX_XSRF") + "&uid=" + dataAndEvents,
                /**
                 * @return {undefined}
                 */
                i: function() {
                    if (deepDataAndEvents) {
                        window.location.reload();
                    }
                }
            });
        }
    });
    run("getNextVideoId", function(node) {
        var self = debug();
        var callback = cloneNode(self);
        /** @type {boolean} */
        var jsonp = node <= push("PLAY_ALL_MAX");
        return callback && jsonp ? self.Lc(node) : "";
    });
    item("getNextVideoId");
    create("init", function() {
        if (push("WATCH_CONTEXT_CLIENTSIDE")) {
            isUndefined(cache);
        }
    });
})();
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}

function _panda_toggleDebugger() {
    var debuggerElem = document.getElementById("panda-debugger");
    debuggerElem.classList.toggle("expanded");
}

function _panda_showPage(pageId) {
    var pages = document.querySelectorAll('.debugger-page');
    var tabs = document.querySelectorAll('.tab-button');

    pages.forEach(function(page) {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    tabs.forEach(function(tab) {
        if (tab.dataset.page === pageId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function _panda_togglePlaylist() {
    var t = document.querySelector("#playlist-bar");
    t.classList.toggle("min");
    t.classList.toggle("max")
}
waitForElm('#playlist-bar-toggle-button').then(elm => {
    var a = document.querySelector("#playlist-bar-toggle-button").onclick = _panda_togglePlaylist
})


var errorCount = 0;
var consoleErrors = [];
var errorsList = document.getElementById('errors-list');
var errorsCountElm = document.getElementById('error-count');

function checkConsoleErrors() {
    errorCount = 0;
    consoleErrors = [];
    errorsList = document.getElementById('errors-list');
    errorsCountElm = document.getElementById('error-count');

    // Monitor for errors in the console
    window.addEventListener('error', function(event) {
        // Extract error details
        var errorMessage = event.message;
        var scriptURL = event.filename || '[unknown]';
        var lineNumber = event.lineno || '[unknown]';

        // Increment error count
        errorCount++;

        // Construct error message with location
        var errorMessageWithLocation = `<span class="error-message">${errorMessage} (at ${scriptURL}:${lineNumber})</span>`;

        // Add error message to the list
        consoleErrors.push(errorMessageWithLocation);
        errorsList.innerHTML = consoleErrors.join('<br>')
        if (!errorsCountElm.classList.contains('error')) errorsCountElm.classList.add('error')
        var debuggerElem = document.getElementById("panda-debugger");
        if (!debuggerElem.classList.contains('expanded')) debuggerElem.classList.add('expanded')
        _panda_showPage('errors')
        errorsCountElm.textContent = errorCount.toString()

    });

    // Function to clear errors in the debugger
    /*document.getElementById("clear-errors").addEventListener('click', function () {
      errorCount = 0;
      consoleErrors = [];
      document.getElementById("error-count").innerText = errorCount;
      document.getElementById("debugger-content").innerHTML = "";
    }); */
}

// Call the function to start monitoring console errors


function createCheckboxes() {
    // Make a request to the API endpoint
    fetch('https://api.cr-img.ct8.pl/v1/config')
        .then(response => response.json())
        .then(data => {
            // Retrieve the exp_flags array from the JSON data
            const expFlags = data.exp_flags;
            const container = document.getElementById('config-list');

            // Loop through the exp_flags array
            expFlags.forEach(flag => {
                // Create checkbox element
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = "flag-checkbox";
                checkbox.id = flag.id;

                // Check local storage for the state of the checkbox
                const storedValue = localStorage.getItem('cr-exp_flags-' + flag.id);
                if (storedValue === 'true') {
                    checkbox.checked = true;
                } else if (storedValue === 'false') {
                    checkbox.checked = false;
                } else if (storedValue === null) {
                    localStorage.setItem('cr-exp_flags-' + flag.id, flag.default_state)
                    checkbox.checked = flag.default_state;
                }

                // Create title element
                const title = document.createElement('p');
                title.className = "flag-title";
                title.textContent = flag.title.toUpperCase();
                const desc = document.createElement('p');
                desc.className = "flag-desc";
                desc.style.color = "gray";
                desc.textContent = flag.description;

                // Create div element to contain checkbox and title
                const flagDiv = document.createElement('div');
                flagDiv.id = 'flag';
                flagDiv.appendChild(checkbox);
                flagDiv.appendChild(title);
                flagDiv.appendChild(desc);
                // Append div to container
                container.appendChild(flagDiv);

                // Add event listener to update local storage when checkbox state changes
                checkbox.addEventListener('change', function() {
                    localStorage.setItem('cr-exp_flags-' + flag.id, this.checked.toString());
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to create checkboxes


function sha256(str) {
    function utf8Encode(str) {
        return unescape(encodeURIComponent(str));
    }
    const charSize = 8; // Character size in bits
    const blockSize = 512; // Block size in bits
    const hashSize = 256; // Hash size in bits

    // SHA-256 constants
    const constants = [];
    for (let i = 0; i < 64; i++) {
        constants[i] = Math.floor(Math.abs(Math.sin(i + 1)) * Math.pow(2, 32));
    }

    // Initial hash values
    const initialHashValues = [
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
        0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ];

    // Pre-processing: Padding the message
    let paddedMessage = utf8Encode(str);
    paddedMessage += String.fromCharCode(0x80); // Append single '1' bit
    while ((paddedMessage.length * charSize) % blockSize !== (blockSize - 64)) {
        paddedMessage += String.fromCharCode(0x00); // Append '0' bits
    }
    const messageLengthBits = str.length * charSize; // Message length in bits
    paddedMessage += String.fromCharCode((messageLengthBits >>> 56) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 48) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 40) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 32) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 24) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 16) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits >>> 8) & 0xff);
    paddedMessage += String.fromCharCode((messageLengthBits) & 0xff);

    // Initialize hash values
    let hashValues = initialHashValues.slice();

    // Main loop
    for (let chunkIndex = 0; chunkIndex < paddedMessage.length / (blockSize / charSize); chunkIndex++) {
        const chunkStart = chunkIndex * (blockSize / charSize);
        const chunkEnd = (chunkIndex + 1) * (blockSize / charSize);
        const chunk = paddedMessage.slice(chunkStart, chunkEnd);
        const chunkWords = [];
        for (let i = 0; i < chunk.length / 4; i++) {
            const wordStart = i * 4;
            chunkWords[i] = (
                (chunk.charCodeAt(wordStart) & 0xff) << 24 |
                (chunk.charCodeAt(wordStart + 1) & 0xff) << 16 |
                (chunk.charCodeAt(wordStart + 2) & 0xff) << 8 |
                (chunk.charCodeAt(wordStart + 3) & 0xff)
            ) >>> 0;
        }
        for (let i = 16; i < 64; i++) {
            const s0 = (chunkWords[i - 15] >>> 7 | chunkWords[i - 15] << 25) ^
                (chunkWords[i - 15] >>> 18 | chunkWords[i - 15] << 14) ^
                (chunkWords[i - 15] >>> 3);
            const s1 = (chunkWords[i - 2] >>> 17 | chunkWords[i - 2] << 15) ^
                (chunkWords[i - 2] >>> 19 | chunkWords[i - 2] << 13) ^
                (chunkWords[i - 2] >>> 10);
            chunkWords[i] = (
                chunkWords[i - 16] +
                s0 +
                chunkWords[i - 7] +
                s1
            ) >>> 0;
        }
        let [a, b, c, d, e, f, g, h] = hashValues;
        for (let i = 0; i < 64; i++) {
            const s1 = (e >>> 6 | e << 26) ^
                (e >>> 11 | e << 21) ^
                (e >>> 25 | e << 7);
            const ch = (e & f) ^ (~e & g);
            const temp1 = (h >>> 14 | h << 18) ^
                (h >>> 18 | h << 14) ^
                (h >>> 41 | h << 23);
            const temp2 = temp1 + ch;
            const s0 = (a >>> 2 | a << 30) ^
                (a >>> 13 | a << 19) ^
                (a >>> 22 | a << 10);
            const maj = (a & b) ^ (a & c) ^ (b & c);
            const temp3 = s0 + maj;
            h = g;
            g = f;
            f = e;
            e = (d + temp2) >>> 0;
            d = c;
            c = b;
            b = a;
            a = (temp2 + temp3) >>> 0;
        }
        hashValues[0] += a;
        hashValues[1] += b;
        hashValues[2] += c;
        hashValues[3] += d;
        hashValues[4] += e;
        hashValues[5] += f;
        hashValues[6] += g;
        hashValues[7] += h;
        for (let i = 0; i < hashValues.length; i++) {
            hashValues[i] >>>= 0;
        }
    }

    // Convert hash values to hex string
    let hashHex = '';
    for (let i = 0; i < hashValues.length; i++) {
        let hex = (hashValues[i] >>> 0).toString(16);
        while (hex.length < 8) {
            hex = '0' + hex;
        }
        hashHex += hex;
    }
    return hashHex;
}
console.log('WORK IM GETTING FUCKING DRUNK DOING THIS SHIT')

// Define the function to add event listeners
function addClickEventListeners() {
    const guideItems = document.querySelectorAll('.guide-item');

    // Remove existing event listeners before adding new ones
    guideItems.forEach(guideItem => {
        guideItem.removeEventListener('click', handleClick); // Remove existing event listener
        guideItem.addEventListener('click', handleClick); // Add new event listener
    });
}

function handleClick() {
    const feedName = this.getAttribute('data-feed-name');
    const feedtype = this.getAttribute('data-feed-type');
    const dataFunction = this.getAttribute('data-function');
    const dataFunctionremoveable = this.getAttribute('data-function-removeable');

    if (dataFunction) {
        // Check if the function exists in the global scope
        if (window[dataFunction] && typeof window[dataFunction] === 'function') {
            // Execute the function directly
            window[dataFunction]();
        } else {
            // Split the function path using dot notation
            const functionPath = dataFunction.split('.');

            // Get the function by traversing the object structure
            let func = window;
            for (const prop of functionPath) {
                func = func[prop];
            }

            // Check if the function exists and execute it
            if (typeof func === 'function') {
                func();
            } else {
                console.error('Function not found:', dataFunction);
            }
        }

        // Optionally remove the data-function attribute
        if (dataFunctionremoveable === "true") {
            this.removeAttribute('data-function');
        }
    }

    Panda.document.utils.toggleTab(feedName, feedtype);
}

// Define the function to run whenever a DOM mutation occurs
function handleMutations(mutationsList) {
    // Check if any mutation is a childList mutation
    const hasChildListMutation = mutationsList.some(mutation => mutation.type === 'childList');

    // If there's a childList mutation, run the function to add event listeners
    if (hasChildListMutation) {
        addClickEventListeners();
    }
}

// Create a new MutationObserver
const observer = new MutationObserver(handleMutations);

// Start observing changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });

// Call the function initially to add event listeners to existing elements
addClickEventListeners();

function DDDscreen() {
    window.addEventListener('error', function(event) {
            document.querySelector('.ddd_err').textContent = errorCount + 1
        })
        // Initialize a variable to count the number of elements and their descendants created
    let elementCount = 0;

    // Callback function to handle mutations
    const mutationCallback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Iterate over added nodes
                for (let node of mutation.addedNodes) {
                    // Check if the added node is an element
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Count the added element and all its descendants
                        elementCount += countDescendants(node);
                    }
                }
            }
        }
        // Output the total number of elements and their descendants created
        document.querySelector('.element_bld_count').textContent = elementCount
    };

    // Function to count an element and all its descendants
    function countDescendants(element) {
        // Initialize count to 1 for the current element
        let count = 1;

        // Iterate over child nodes
        for (let child of element.childNodes) {
            // If the child node is an element, recursively count its descendants
            if (child.nodeType === Node.ELEMENT_NODE) {
                count += countDescendants(child);
            }
        }

        return count;
    }

    // Create a new observer instance
    const mutationObserver = new MutationObserver(mutationCallback);

    // Start observing the document for changes
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    var videoid = Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(ytCommand, 'videoId'))
    if (videoid === '') {
        videoid = '0'
    }
    var searchid = Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(ytCommand, 'query'))
    if (searchid === '') {
        searchid = '0'
    }
    var feedid = Panda.document.utils.createStringFromObject(Panda.document.utils.findElement(ytCommand, 'browseId'))
    if (feedid === '') {
        feedid = '0'
    }
    var dddinithtml = `
    <style>
    .ddd-screen {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 2147483647;
        padding: 10px;
    }
    .yellow-text {
        color: yellow;
        font-size: 15px;
        font-weight: bold;
    }
    .ddd-screen.shadow_text span {
        text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black;
    }
    .ddd-screen span:after {
        content: ' ';
    }
    .ddd-screen span p {
        display: inline-block;
    }
    </style>
    
    
    
    <div class="ddd-screen yellow-text shadow_text"><div class="ddd_second_line"><span class="feed_id_cont">FeedID: <p class="feed_id">${feedid}</p></span><span class="search_id_cont">SearchID: <p class="search_id">${searchid}</p></span><span class="video_id_cont">VideoID: <p class="video_id">${videoid}</p></span><span class="ddd_nav_info&quot;">NavigationCount: <p class="ddd_nav_count">0</p>, Errors: <p class="ddd_err">0</p></span><span>ElementBuilder: <p class="element_bld_count">${elementCount}</p></span></div></div>`
    document.body.innerHTML += dddinithtml
}
Panda.document.utils.waitForElm('#panda-debugger').then(a => {
    if (localStorage.getItem('cr-exp_flags-ddd') === "true") {
        DDDscreen()
    }
})


var spl = {
    navigate: function(newPath) {
        var newURL = window.location.origin + newPath;

        // Construct the new URL
        var newURL = newPath;

        history.pushState(null, null, newURL);
        var spfDoneEvent = new CustomEvent('spfdone', { detail: { newURL: newURL } });
        document.dispatchEvent(spfDoneEvent);
        document.querySelector('#page').className = ''
        spl.handle(newURL)
    },
    handle: function() {
        console.log('worky')
        document.querySelector('#content-container').innerHTML = ``
        Panda.resolve_url()
    },
    init: function() {
        // Function to update content based on the URL (replace this with your own logic)
        function updateContentBasedOnURL(newURL) {
            console.log('Content updated based on URL:', newURL);
        }

        function attachClickEventToLinks() {
            var links = document.querySelectorAll('.spf-link');

            links.forEach(function(link) {
                // Check if the click event has already been attached to the link
                if (!link.hasAttribute('data-click-event-attached')) {
                    link.addEventListener('click', function(event) {
                        event.preventDefault(); // Prevent the default link behavior (navigation)
                        var newURL = link.getAttribute('href');
                        spl.navigate(newURL); // Call the custom function to change the URL
                    });

                    // Mark the link to indicate that the click event has been attached
                    link.setAttribute('data-click-event-attached', 'true');
                }
            });
        }

        // Run the function initially
        attachClickEventToLinks();

        // Run the function every second
        setInterval(attachClickEventToLinks, 100);

        function checkHashChange() {
            var currentHash = window.location.hash;

            // Check if the hash has changed
            if (currentHash !== checkHashChange.lastHash) {
                // Update lastHash for the next iteration
                checkHashChange.lastHash = currentHash;

                // Trigger your desired action when the URL changes
                console.log("URL has changed:", currentHash);
                spl.handle()
            }

            // Schedule the next check
            setTimeout(checkHashChange, 100); // You can adjust the interval as needed
        }


        // Initial setup
        checkHashChange();

        // You can also use the popstate event to detect changes in the URL
        window.addEventListener('popstate', function(event) {
            // Trigger your desired action when the URL changes
            console.log("URL has changed:", window.location.href);
            spl.handle()
        });
    }
}