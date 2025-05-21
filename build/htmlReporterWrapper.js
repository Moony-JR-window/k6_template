var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ejs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/ejs/lib/utils.js"(exports) {
    "use strict";
    var regExpChars = /[|\\{}()[\]^$+*?.]/g;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasOwn = function(obj, key) {
      return hasOwnProperty.apply(obj, [key]);
    };
    exports.escapeRegExpChars = function(string) {
      if (!string) {
        return "";
      }
      return String(string).replace(regExpChars, "\\$&");
    };
    var _ENCODE_HTML_RULES = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&#34;",
      "'": "&#39;"
    };
    var _MATCH_HTML = /[&<>'"]/g;
    function encode_char(c) {
      return _ENCODE_HTML_RULES[c] || c;
    }
    var escapeFuncStr = `var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;
    exports.escapeXML = function(markup) {
      return markup == void 0 ? "" : String(markup).replace(_MATCH_HTML, encode_char);
    };
    function escapeXMLToString() {
      return Function.prototype.toString.call(this) + ";\n" + escapeFuncStr;
    }
    try {
      if (typeof Object.defineProperty === "function") {
        Object.defineProperty(exports.escapeXML, "toString", { value: escapeXMLToString });
      } else {
        exports.escapeXML.toString = escapeXMLToString;
      }
    } catch (err) {
      console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");
    }
    exports.shallowCopy = function(to, from) {
      from = from || {};
      if (to !== null && to !== void 0) {
        for (var p in from) {
          if (!hasOwn(from, p)) {
            continue;
          }
          if (p === "__proto__" || p === "constructor") {
            continue;
          }
          to[p] = from[p];
        }
      }
      return to;
    };
    exports.shallowCopyFromList = function(to, from, list) {
      list = list || [];
      from = from || {};
      if (to !== null && to !== void 0) {
        for (var i = 0; i < list.length; i++) {
          var p = list[i];
          if (typeof from[p] != "undefined") {
            if (!hasOwn(from, p)) {
              continue;
            }
            if (p === "__proto__" || p === "constructor") {
              continue;
            }
            to[p] = from[p];
          }
        }
      }
      return to;
    };
    exports.cache = {
      _data: {},
      set: function(key, val) {
        this._data[key] = val;
      },
      get: function(key) {
        return this._data[key];
      },
      remove: function(key) {
        delete this._data[key];
      },
      reset: function() {
        this._data = {};
      }
    };
    exports.hyphenToCamel = function(str) {
      return str.replace(/-[a-z]/g, function(match) {
        return match[1].toUpperCase();
      });
    };
    exports.createNullProtoObjWherePossible = function() {
      if (typeof Object.create == "function") {
        return function() {
          return /* @__PURE__ */ Object.create(null);
        };
      }
      if (!({ __proto__: null } instanceof Object)) {
        return function() {
          return { __proto__: null };
        };
      }
      return function() {
        return {};
      };
    }();
    exports.hasOwnOnlyObject = function(obj) {
      var o = exports.createNullProtoObjWherePossible();
      for (var p in obj) {
        if (hasOwn(obj, p)) {
          o[p] = obj[p];
        }
      }
      return o;
    };
  }
});

// node_modules/ejs/package.json
var require_package = __commonJS({
  "node_modules/ejs/package.json"(exports, module) {
    module.exports = {
      name: "ejs",
      description: "Embedded JavaScript templates",
      keywords: [
        "template",
        "engine",
        "ejs"
      ],
      version: "3.1.10",
      author: "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
      license: "Apache-2.0",
      bin: {
        ejs: "./bin/cli.js"
      },
      main: "./lib/ejs.js",
      jsdelivr: "ejs.min.js",
      unpkg: "ejs.min.js",
      repository: {
        type: "git",
        url: "git://github.com/mde/ejs.git"
      },
      bugs: "https://github.com/mde/ejs/issues",
      homepage: "https://github.com/mde/ejs",
      dependencies: {
        jake: "^10.8.5"
      },
      devDependencies: {
        browserify: "^16.5.1",
        eslint: "^6.8.0",
        "git-directory-deploy": "^1.5.1",
        jsdoc: "^4.0.2",
        "lru-cache": "^4.0.1",
        mocha: "^10.2.0",
        "uglify-js": "^3.3.16"
      },
      engines: {
        node: ">=0.10.0"
      },
      scripts: {
        test: "npx jake test"
      }
    };
  }
});

// node_modules/ejs/lib/ejs.js
var require_ejs = __commonJS({
  "node_modules/ejs/lib/ejs.js"(exports) {
    "use strict";
    var fs = __require("fs");
    var path = __require("path");
    var utils = require_utils();
    var scopeOptionWarned = false;
    var _VERSION_STRING = require_package().version;
    var _DEFAULT_OPEN_DELIMITER = "<";
    var _DEFAULT_CLOSE_DELIMITER = ">";
    var _DEFAULT_DELIMITER = "%";
    var _DEFAULT_LOCALS_NAME = "locals";
    var _NAME = "ejs";
    var _REGEX_STRING = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";
    var _OPTS_PASSABLE_WITH_DATA = [
      "delimiter",
      "scope",
      "context",
      "debug",
      "compileDebug",
      "client",
      "_with",
      "rmWhitespace",
      "strict",
      "filename",
      "async"
    ];
    var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat("cache");
    var _BOM = /^\uFEFF/;
    var _JS_IDENTIFIER = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
    exports.cache = utils.cache;
    exports.fileLoader = fs.readFileSync;
    exports.localsName = _DEFAULT_LOCALS_NAME;
    exports.promiseImpl = new Function("return this;")().Promise;
    exports.resolveInclude = function(name, filename, isDir) {
      var dirname = path.dirname;
      var extname = path.extname;
      var resolve = path.resolve;
      var includePath = resolve(isDir ? filename : dirname(filename), name);
      var ext = extname(name);
      if (!ext) {
        includePath += ".ejs";
      }
      return includePath;
    };
    function resolvePaths(name, paths) {
      var filePath;
      if (paths.some(function(v) {
        filePath = exports.resolveInclude(name, v, true);
        return fs.existsSync(filePath);
      })) {
        return filePath;
      }
    }
    function getIncludePath(path2, options) {
      var includePath;
      var filePath;
      var views = options.views;
      var match = /^[A-Za-z]+:\\|^\//.exec(path2);
      if (match && match.length) {
        path2 = path2.replace(/^\/*/, "");
        if (Array.isArray(options.root)) {
          includePath = resolvePaths(path2, options.root);
        } else {
          includePath = exports.resolveInclude(path2, options.root || "/", true);
        }
      } else {
        if (options.filename) {
          filePath = exports.resolveInclude(path2, options.filename);
          if (fs.existsSync(filePath)) {
            includePath = filePath;
          }
        }
        if (!includePath && Array.isArray(views)) {
          includePath = resolvePaths(path2, views);
        }
        if (!includePath && typeof options.includer !== "function") {
          throw new Error('Could not find the include file "' + options.escapeFunction(path2) + '"');
        }
      }
      return includePath;
    }
    function handleCache(options, template) {
      var func;
      var filename = options.filename;
      var hasTemplate = arguments.length > 1;
      if (options.cache) {
        if (!filename) {
          throw new Error("cache option requires a filename");
        }
        func = exports.cache.get(filename);
        if (func) {
          return func;
        }
        if (!hasTemplate) {
          template = fileLoader(filename).toString().replace(_BOM, "");
        }
      } else if (!hasTemplate) {
        if (!filename) {
          throw new Error("Internal EJS error: no file name or template provided");
        }
        template = fileLoader(filename).toString().replace(_BOM, "");
      }
      func = exports.compile(template, options);
      if (options.cache) {
        exports.cache.set(filename, func);
      }
      return func;
    }
    function tryHandleCache(options, data, cb) {
      var result;
      if (!cb) {
        if (typeof exports.promiseImpl == "function") {
          return new exports.promiseImpl(function(resolve, reject) {
            try {
              result = handleCache(options)(data);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          });
        } else {
          throw new Error("Please provide a callback function");
        }
      } else {
        try {
          result = handleCache(options)(data);
        } catch (err) {
          return cb(err);
        }
        cb(null, result);
      }
    }
    function fileLoader(filePath) {
      return exports.fileLoader(filePath);
    }
    function includeFile(path2, options) {
      var opts = utils.shallowCopy(utils.createNullProtoObjWherePossible(), options);
      opts.filename = getIncludePath(path2, opts);
      if (typeof options.includer === "function") {
        var includerResult = options.includer(path2, opts.filename);
        if (includerResult) {
          if (includerResult.filename) {
            opts.filename = includerResult.filename;
          }
          if (includerResult.template) {
            return handleCache(opts, includerResult.template);
          }
        }
      }
      return handleCache(opts);
    }
    function rethrow(err, str, flnm, lineno, esc) {
      var lines = str.split("\n");
      var start = Math.max(lineno - 3, 0);
      var end = Math.min(lines.length, lineno + 3);
      var filename = esc(flnm);
      var context = lines.slice(start, end).map(function(line, i) {
        var curr = i + start + 1;
        return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
      }).join("\n");
      err.path = filename;
      err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
      throw err;
    }
    function stripSemi(str) {
      return str.replace(/;(\s*$)/, "$1");
    }
    exports.compile = function compile(template, opts) {
      var templ;
      if (opts && opts.scope) {
        if (!scopeOptionWarned) {
          console.warn("`scope` option is deprecated and will be removed in EJS 3");
          scopeOptionWarned = true;
        }
        if (!opts.context) {
          opts.context = opts.scope;
        }
        delete opts.scope;
      }
      templ = new Template(template, opts);
      return templ.compile();
    };
    exports.render = function(template, d, o) {
      var data = d || utils.createNullProtoObjWherePossible();
      var opts = o || utils.createNullProtoObjWherePossible();
      if (arguments.length == 2) {
        utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
      }
      return handleCache(opts, template)(data);
    };
    exports.renderFile = function() {
      var args = Array.prototype.slice.call(arguments);
      var filename = args.shift();
      var cb;
      var opts = { filename };
      var data;
      var viewOpts;
      if (typeof arguments[arguments.length - 1] == "function") {
        cb = args.pop();
      }
      if (args.length) {
        data = args.shift();
        if (args.length) {
          utils.shallowCopy(opts, args.pop());
        } else {
          if (data.settings) {
            if (data.settings.views) {
              opts.views = data.settings.views;
            }
            if (data.settings["view cache"]) {
              opts.cache = true;
            }
            viewOpts = data.settings["view options"];
            if (viewOpts) {
              utils.shallowCopy(opts, viewOpts);
            }
          }
          utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
        }
        opts.filename = filename;
      } else {
        data = utils.createNullProtoObjWherePossible();
      }
      return tryHandleCache(opts, data, cb);
    };
    exports.Template = Template;
    exports.clearCache = function() {
      exports.cache.reset();
    };
    function Template(text, optsParam) {
      var opts = utils.hasOwnOnlyObject(optsParam);
      var options = utils.createNullProtoObjWherePossible();
      this.templateText = text;
      this.mode = null;
      this.truncate = false;
      this.currentLine = 1;
      this.source = "";
      options.client = opts.client || false;
      options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
      options.compileDebug = opts.compileDebug !== false;
      options.debug = !!opts.debug;
      options.filename = opts.filename;
      options.openDelimiter = opts.openDelimiter || exports.openDelimiter || _DEFAULT_OPEN_DELIMITER;
      options.closeDelimiter = opts.closeDelimiter || exports.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
      options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
      options.strict = opts.strict || false;
      options.context = opts.context;
      options.cache = opts.cache || false;
      options.rmWhitespace = opts.rmWhitespace;
      options.root = opts.root;
      options.includer = opts.includer;
      options.outputFunctionName = opts.outputFunctionName;
      options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
      options.views = opts.views;
      options.async = opts.async;
      options.destructuredLocals = opts.destructuredLocals;
      options.legacyInclude = typeof opts.legacyInclude != "undefined" ? !!opts.legacyInclude : true;
      if (options.strict) {
        options._with = false;
      } else {
        options._with = typeof opts._with != "undefined" ? opts._with : true;
      }
      this.opts = options;
      this.regex = this.createRegex();
    }
    Template.modes = {
      EVAL: "eval",
      ESCAPED: "escaped",
      RAW: "raw",
      COMMENT: "comment",
      LITERAL: "literal"
    };
    Template.prototype = {
      createRegex: function() {
        var str = _REGEX_STRING;
        var delim = utils.escapeRegExpChars(this.opts.delimiter);
        var open = utils.escapeRegExpChars(this.opts.openDelimiter);
        var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
        str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
        return new RegExp(str);
      },
      compile: function() {
        var src;
        var fn;
        var opts = this.opts;
        var prepended = "";
        var appended = "";
        var escapeFn = opts.escapeFunction;
        var ctor;
        var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : "undefined";
        if (!this.source) {
          this.generateSource();
          prepended += '  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n';
          if (opts.outputFunctionName) {
            if (!_JS_IDENTIFIER.test(opts.outputFunctionName)) {
              throw new Error("outputFunctionName is not a valid JS identifier.");
            }
            prepended += "  var " + opts.outputFunctionName + " = __append;\n";
          }
          if (opts.localsName && !_JS_IDENTIFIER.test(opts.localsName)) {
            throw new Error("localsName is not a valid JS identifier.");
          }
          if (opts.destructuredLocals && opts.destructuredLocals.length) {
            var destructuring = "  var __locals = (" + opts.localsName + " || {}),\n";
            for (var i = 0; i < opts.destructuredLocals.length; i++) {
              var name = opts.destructuredLocals[i];
              if (!_JS_IDENTIFIER.test(name)) {
                throw new Error("destructuredLocals[" + i + "] is not a valid JS identifier.");
              }
              if (i > 0) {
                destructuring += ",\n  ";
              }
              destructuring += name + " = __locals." + name;
            }
            prepended += destructuring + ";\n";
          }
          if (opts._with !== false) {
            prepended += "  with (" + opts.localsName + " || {}) {\n";
            appended += "  }\n";
          }
          appended += "  return __output;\n";
          this.source = prepended + this.source + appended;
        }
        if (opts.compileDebug) {
          src = "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + "\n  , __filename = " + sanitizedFilename + ";\ntry {\n" + this.source + "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n";
        } else {
          src = this.source;
        }
        if (opts.client) {
          src = "escapeFn = escapeFn || " + escapeFn.toString() + ";\n" + src;
          if (opts.compileDebug) {
            src = "rethrow = rethrow || " + rethrow.toString() + ";\n" + src;
          }
        }
        if (opts.strict) {
          src = '"use strict";\n' + src;
        }
        if (opts.debug) {
          console.log(src);
        }
        if (opts.compileDebug && opts.filename) {
          src = src + "\n//# sourceURL=" + sanitizedFilename + "\n";
        }
        try {
          if (opts.async) {
            try {
              ctor = new Function("return (async function(){}).constructor;")();
            } catch (e) {
              if (e instanceof SyntaxError) {
                throw new Error("This environment does not support async/await");
              } else {
                throw e;
              }
            }
          } else {
            ctor = Function;
          }
          fn = new ctor(opts.localsName + ", escapeFn, include, rethrow", src);
        } catch (e) {
          if (e instanceof SyntaxError) {
            if (opts.filename) {
              e.message += " in " + opts.filename;
            }
            e.message += " while compiling ejs\n\n";
            e.message += "If the above error is not helpful, you may want to try EJS-Lint:\n";
            e.message += "https://github.com/RyanZim/EJS-Lint";
            if (!opts.async) {
              e.message += "\n";
              e.message += "Or, if you meant to create an async function, pass `async: true` as an option.";
            }
          }
          throw e;
        }
        var returnedFn = opts.client ? fn : function anonymous(data) {
          var include = function(path2, includeData) {
            var d = utils.shallowCopy(utils.createNullProtoObjWherePossible(), data);
            if (includeData) {
              d = utils.shallowCopy(d, includeData);
            }
            return includeFile(path2, opts)(d);
          };
          return fn.apply(
            opts.context,
            [data || utils.createNullProtoObjWherePossible(), escapeFn, include, rethrow]
          );
        };
        if (opts.filename && typeof Object.defineProperty === "function") {
          var filename = opts.filename;
          var basename = path.basename(filename, path.extname(filename));
          try {
            Object.defineProperty(returnedFn, "name", {
              value: basename,
              writable: false,
              enumerable: false,
              configurable: true
            });
          } catch (e) {
          }
        }
        return returnedFn;
      },
      generateSource: function() {
        var opts = this.opts;
        if (opts.rmWhitespace) {
          this.templateText = this.templateText.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
        }
        this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
        var self = this;
        var matches = this.parseTemplateText();
        var d = this.opts.delimiter;
        var o = this.opts.openDelimiter;
        var c = this.opts.closeDelimiter;
        if (matches && matches.length) {
          matches.forEach(function(line, index) {
            var closing;
            if (line.indexOf(o + d) === 0 && line.indexOf(o + d + d) !== 0) {
              closing = matches[index + 2];
              if (!(closing == d + c || closing == "-" + d + c || closing == "_" + d + c)) {
                throw new Error('Could not find matching close tag for "' + line + '".');
              }
            }
            self.scanLine(line);
          });
        }
      },
      parseTemplateText: function() {
        var str = this.templateText;
        var pat = this.regex;
        var result = pat.exec(str);
        var arr = [];
        var firstPos;
        while (result) {
          firstPos = result.index;
          if (firstPos !== 0) {
            arr.push(str.substring(0, firstPos));
            str = str.slice(firstPos);
          }
          arr.push(result[0]);
          str = str.slice(result[0].length);
          result = pat.exec(str);
        }
        if (str) {
          arr.push(str);
        }
        return arr;
      },
      _addOutput: function(line) {
        if (this.truncate) {
          line = line.replace(/^(?:\r\n|\r|\n)/, "");
          this.truncate = false;
        }
        if (!line) {
          return line;
        }
        line = line.replace(/\\/g, "\\\\");
        line = line.replace(/\n/g, "\\n");
        line = line.replace(/\r/g, "\\r");
        line = line.replace(/"/g, '\\"');
        this.source += '    ; __append("' + line + '")\n';
      },
      scanLine: function(line) {
        var self = this;
        var d = this.opts.delimiter;
        var o = this.opts.openDelimiter;
        var c = this.opts.closeDelimiter;
        var newLineCount = 0;
        newLineCount = line.split("\n").length - 1;
        switch (line) {
          case o + d:
          case o + d + "_":
            this.mode = Template.modes.EVAL;
            break;
          case o + d + "=":
            this.mode = Template.modes.ESCAPED;
            break;
          case o + d + "-":
            this.mode = Template.modes.RAW;
            break;
          case o + d + "#":
            this.mode = Template.modes.COMMENT;
            break;
          case o + d + d:
            this.mode = Template.modes.LITERAL;
            this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")\n';
            break;
          case d + d + c:
            this.mode = Template.modes.LITERAL;
            this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")\n';
            break;
          case d + c:
          case "-" + d + c:
          case "_" + d + c:
            if (this.mode == Template.modes.LITERAL) {
              this._addOutput(line);
            }
            this.mode = null;
            this.truncate = line.indexOf("-") === 0 || line.indexOf("_") === 0;
            break;
          default:
            if (this.mode) {
              switch (this.mode) {
                case Template.modes.EVAL:
                case Template.modes.ESCAPED:
                case Template.modes.RAW:
                  if (line.lastIndexOf("//") > line.lastIndexOf("\n")) {
                    line += "\n";
                  }
              }
              switch (this.mode) {
                // Just executing code
                case Template.modes.EVAL:
                  this.source += "    ; " + line + "\n";
                  break;
                // Exec, esc, and output
                case Template.modes.ESCAPED:
                  this.source += "    ; __append(escapeFn(" + stripSemi(line) + "))\n";
                  break;
                // Exec and output
                case Template.modes.RAW:
                  this.source += "    ; __append(" + stripSemi(line) + ")\n";
                  break;
                case Template.modes.COMMENT:
                  break;
                // Literal <%% mode, append as raw output
                case Template.modes.LITERAL:
                  this._addOutput(line);
                  break;
              }
            } else {
              this._addOutput(line);
            }
        }
        if (self.opts.compileDebug && newLineCount) {
          this.currentLine += newLineCount;
          this.source += "    ; __line = " + this.currentLine + "\n";
        }
      }
    };
    exports.escapeXML = utils.escapeXML;
    exports.__express = exports.renderFile;
    exports.VERSION = _VERSION_STRING;
    exports.name = _NAME;
    if (typeof window != "undefined") {
      window.ejs = exports;
    }
  }
});

// node_modules/k6-html-reporter/dist/types.js
var require_types = __commonJS({
  "node_modules/k6-html-reporter/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetricsType = void 0;
    var MetricsType;
    (function(MetricsType2) {
      MetricsType2["GAUGE"] = "gauge";
      MetricsType2["RATE"] = "rate";
      MetricsType2["TREND"] = "trend";
      MetricsType2["COUNTER"] = "counter";
    })(MetricsType = exports.MetricsType || (exports.MetricsType = {}));
  }
});

// node_modules/k6-html-reporter/dist/util.js
var require_util = __commonJS({
  "node_modules/k6-html-reporter/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compareNameAscending = void 0;
    var compareNameAscending = (a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    };
    exports.compareNameAscending = compareNameAscending;
  }
});

// node_modules/k6-html-reporter/dist/reporter.js
var require_reporter = __commonJS({
  "node_modules/k6-html-reporter/dist/reporter.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generate = void 0;
    var fs_1 = __importDefault(__require("fs"));
    var path_1 = __importDefault(__require("path"));
    var ejs_1 = __importDefault(require_ejs());
    var types_1 = require_types();
    var util_1 = require_util();
    function generate(options) {
      const resolvedInputPath = path_1.default.resolve(process.cwd(), options.jsonFile);
      const resolvedOutputPath = path_1.default.resolve(process.cwd(), options.output);
      const jsonReport = readJsonReport(resolvedInputPath);
      writeHtmlReport(jsonReport, resolvedOutputPath);
    }
    exports.generate = generate;
    function readJsonReport(filePath) {
      const resolvedPath = path_1.default.resolve(__dirname, filePath);
      const rawData = fs_1.default.readFileSync(resolvedPath);
      return JSON.parse(rawData.toString());
    }
    function writeHtmlReport(content, filePath) {
      const time = (/* @__PURE__ */ new Date()).toLocaleString();
      const templatePath = path_1.default.resolve(__dirname, "../templates/template.ejs");
      const checkRootGroupData = content["root_group"];
      const metricsData = content["metrics"];
      const { checkMetric, counterMetrics, trendMetrics, gaugeMetrics, rateMetrics, allThresholds, totalThresholdResult } = mapMetrics(metricsData);
      const checks = getChecks(checkRootGroupData).map((data) => {
        const splitedPath = data.path.split("::");
        splitedPath.shift();
        return {
          ...data,
          pathArray: splitedPath.join(" \u21C0 ")
        };
      });
      ejs_1.default.renderFile(templatePath, {
        checks,
        rateMetrics: rateMetrics.sort(util_1.compareNameAscending),
        checkMetric,
        counterMetrics: counterMetrics.sort(util_1.compareNameAscending),
        trendMetrics: trendMetrics.sort(util_1.compareNameAscending),
        gaugeMetrics: gaugeMetrics.sort(util_1.compareNameAscending),
        allThresholds,
        totalThresholdResult,
        time
      }, {}, function(err, str) {
        if (err) {
          console.error(err);
        }
        let html = ejs_1.default.render(str);
        if (!fs_1.default.existsSync(filePath)) {
          fs_1.default.mkdirSync(filePath, { recursive: true });
        }
        fs_1.default.writeFileSync(`${filePath}/report.html`, html);
        console.log(`Report is created at ${filePath}`);
      });
    }
    function mapMetrics(data) {
      let checkMetric = {};
      const counterMetrics = [];
      const trendMetrics = [];
      const gaugeMetrics = [];
      const rateMetrics = [];
      const allThresholds = [];
      let totalThresholdResult = {
        passes: 0,
        fails: 0,
        failedMetricsNum: 0
      };
      Object.entries(data).forEach(([key, value]) => {
        if (value.type === types_1.MetricsType.COUNTER) {
          const { updatedThresholdResult, displayThreshold, metric } = handleMetricValues(key, value, totalThresholdResult);
          totalThresholdResult = {
            ...totalThresholdResult,
            ...updatedThresholdResult
          };
          if (displayThreshold) {
            allThresholds.push(displayThreshold);
          }
          counterMetrics.push(metric);
        } else if (value.type === types_1.MetricsType.TREND) {
          const { updatedThresholdResult, displayThreshold, metric } = handleMetricValues(key, value, totalThresholdResult);
          totalThresholdResult = {
            ...totalThresholdResult,
            ...updatedThresholdResult
          };
          if (displayThreshold) {
            allThresholds.push(displayThreshold);
          }
          trendMetrics.push(metric);
        } else if (key === "checks") {
          const { updatedThresholdResult, displayThreshold, metric } = handleMetricValues(key, value, totalThresholdResult);
          totalThresholdResult = {
            ...totalThresholdResult,
            ...updatedThresholdResult
          };
          if (displayThreshold) {
            allThresholds.push(displayThreshold);
          }
          checkMetric = metric;
        } else if (value.type === types_1.MetricsType.GAUGE) {
          const { updatedThresholdResult, displayThreshold, metric } = handleMetricValues(key, value, totalThresholdResult);
          totalThresholdResult = {
            ...totalThresholdResult,
            ...updatedThresholdResult
          };
          if (displayThreshold) {
            allThresholds.push(displayThreshold);
          }
          gaugeMetrics.push(metric);
        } else if (value.type === types_1.MetricsType.RATE && key !== "checks") {
          const { updatedThresholdResult, displayThreshold, metric } = handleMetricValues(key, value, totalThresholdResult);
          totalThresholdResult = {
            ...totalThresholdResult,
            ...updatedThresholdResult
          };
          if (displayThreshold) {
            allThresholds.push(displayThreshold);
          }
          rateMetrics.push(metric);
        }
      });
      return {
        checkMetric,
        counterMetrics,
        trendMetrics,
        gaugeMetrics,
        rateMetrics,
        allThresholds,
        totalThresholdResult
      };
    }
    function handleMetricValues(key, value, currentTotalThresholdResult) {
      const metric = {
        name: key,
        ...value,
        thresholdFailed: void 0
      };
      const updatedThresholdResult = { ...currentTotalThresholdResult };
      if (value.thresholds) {
        const [passes, fails] = thresholdResult(value.thresholds);
        if (fails > 0 && key !== "checks") {
          updatedThresholdResult.failedMetricsNum++;
        }
        updatedThresholdResult.passes += passes;
        updatedThresholdResult.fails += fails;
        metric.thresholdFailed = fails > 0;
        return {
          displayThreshold: {
            name: key,
            thresholds: value.thresholds
          },
          updatedThresholdResult,
          metric
        };
      }
      return { updatedThresholdResult, metric };
    }
    function thresholdResult(thresholds) {
      if (thresholds) {
        const thresholdArr = Object.values(thresholds);
        const passes = thresholdArr.filter((value) => value.ok === true).length;
        const fails = thresholdArr.length - passes;
        return [passes, fails];
      }
    }
    function getChecks(data) {
      let checksOutput = [];
      findChecksRecursively(data);
      function findChecksRecursively(data2) {
        if (data2.groups.length === 0 && data2.checks.length === 0) {
          return;
        }
        if (data2.checks.length > 0) {
          Object.values(data2.checks).forEach((value) => {
            checksOutput.push(value);
          });
        }
        for (let item in data2.groups) {
          findChecksRecursively(data2.groups[item]);
        }
      }
      return checksOutput;
    }
  }
});

// node_modules/k6-html-reporter/dist/index.js
var require_dist = __commonJS({
  "node_modules/k6-html-reporter/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateSummaryReport = void 0;
    var reporter_1 = require_reporter();
    function generateSummaryReport2(options) {
      reporter_1.generate(options);
    }
    exports.generateSummaryReport = generateSummaryReport2;
  }
});

// library/htmlReporterWrapper.js
var import_k6_html_reporter = __toESM(require_dist());
function htmlReporter(data) {
  return (0, import_k6_html_reporter.generateSummaryReport)(data);
}
export {
  htmlReporter
};
/*! Bundled license information:

ejs/lib/ejs.js:
  (**
   * @file Embedded JavaScript templating engine. {@link http://ejs.co}
   * @author Matthew Eernisse <mde@fleegix.org>
   * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
   * @project EJS
   * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
   *)
*/
//# sourceMappingURL=htmlReporterWrapper.js.map
