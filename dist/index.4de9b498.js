// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dRf9z":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4pp4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _geogebraViewJs = require("./views/GeogebraView.js");
var _geogebraViewJsDefault = parcelHelpers.interopDefault(_geogebraViewJs);
var _treeViewJs = require("./views/TreeView.js");
var _treeViewJsDefault = parcelHelpers.interopDefault(_treeViewJs);
var _utilitiesJs = require("./utilities.js");
'use strict';
const categories = document.querySelectorAll(".sidebar__list");
const ggb_element = document.querySelector('#ggb-element');
const welcome = document.querySelector('.welcome');
window.addEventListener('load', ()=>{
    _geogebraViewJsDefault.default.renderGGB(ggb_element);
});
_treeViewJsDefault.default.init();
categories.forEach((category)=>{
    category.addEventListener('click', (e)=>{
        let element = e.target;
        if (element.classList.contains('select')) {
            welcome.classList.add('hidden');
            _utilitiesJs.requestData(element);
        }
    });
});

},{"./views/GeogebraView.js":"6KJBS","./views/TreeView.js":"kj0S6","./utilities.js":"f4wib","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KJBS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
class GGBView {
    constructor(){
        this._container = document.querySelector('.app-container');
        this._WIDTH = this._container.getBoundingClientRect().width;
        this._HEIGHT = this._container.getBoundingClientRect().height;
        //'width': (Math.round(this._WIDTH)),
        //'height': (this._HEIGHT - 45),
        this._params = {
            "id": "ggbApplet",
            "appName": "graphing",
            "width": this._WIDTH,
            "height": this._HEIGHT,
            "showToolBar": true,
            "showMenuBar": true,
            "showAlgebraInput": true,
            "errorDialogsActive": true
        };
        this._applet = new GGBApplet(this._params, true);
    }
    renderGGB(element) {
        this._applet.inject(element);
    }
}
exports.default = new GGBView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kj0S6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
class TreeView {
    _menu_item;
    constructor(){
        this._menu_item = document.querySelector(".sidebar");
    }
    init() {
        this._menu_item.addEventListener('click', (e)=>{
            if (e.target.classList.contains('menu')) {
                let unit = e.target.dataset.unit;
                document.querySelector(`.sidebar__list--${unit}`).classList.toggle("hidden");
            }
        });
    }
}
exports.default = new TreeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4wib":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "requestData", ()=>requestData
);
var _iconsSvg = require("../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
'use strict';
//const URL = 'https://ans135server.herokuapp.com/ues/';
const URL = 'http://127.0.0.1:8000/ues/';
const formContainer = document.querySelector('.form-container');
const requestContainer = document.querySelector('.request-containter');
const ggb_element = document.querySelector('#ggb-element');
const clear = function() {
    let spinner = document.querySelector(".spinner");
    if (spinner) requestContainer.removeChild(spinner);
};
const renderSpinner = function() {
    let tableSummary = document.querySelector(".summary");
    if (tableSummary) {
        let parent = tableSummary.parentElement;
        parent.removeChild(tableSummary);
    }
    const markup = `
		<div class="spinner">
			<svg>
				<use href="${_iconsSvgDefault.default}#icon-loader"></use>
			</svg>
		</div>
	`;
    formContainer.parentElement.insertAdjacentHTML('beforeend', markup);
};
const get_data = function(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
const resetTable = function() {
    let spinner = document.querySelector(".spinner");
    let tableSummary = document.querySelector(".summary");
    if (tableSummary) {
        let parent = tableSummary.parentElement;
        parent.removeChild(tableSummary);
    }
    if (spinner) {
        let parent = spinner.parentElement;
        parent.removeChild(spinner);
    }
};
const generate_table = function(response) {
    resetTable();
    const keys = Object.keys(response);
    const directive = response[keys[0]];
    const table = document.createElement('table');
    const header = document.createElement('thead');
    const body = document.createElement('tbody');
    keys.forEach((key)=>{
        let head = document.createElement('th');
        head.appendChild(document.createTextNode(key));
        header.appendChild(head);
    });
    let counter = 0;
    while(counter < directive.length){
        const row = document.createElement('tr');
        let cell = null;
        keys.forEach((key)=>{
            cell = document.createElement('td');
            cell.appendChild(document.createTextNode(response[key][counter]));
            row.appendChild(cell);
            body.appendChild(row);
        });
        counter++;
    }
    table.appendChild(header);
    table.appendChild(body);
    table.classList.add('summary');
    formContainer.parentElement.appendChild(table);
};
const requestData = function(element) {
    formContainer.textContent = '';
    resetTable();
    requestContainer.classList.remove('hidden');
    if (!ggb_element.classList.contains('hidden')) ggb_element.classList.add('hidden');
    let id = element.parentElement.dataset.id;
    let name = element.dataset.name;
    let description = element.textContent;
    let html;
    switch(id){
        //================= UNIDAD 1 ====================
        case '1':
            let interval = element.dataset.interval;
            html = `
				<form id='unit1-form' method='POST'>
					<div class='method'>
						<div>
							<span>${name == 'fraccion' ? "1 / 1 - " : name}(${name == 'Ln' ? '1 +' : ''}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)
							&nbsp; ${interval ? interval : ''}</span>
							<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>
						</div>
						<button type='submit' id='btn_unit1' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>
					</div>
				</form> 
			`;
            formContainer.insertAdjacentHTML('afterbegin', html);
            let x = document.getElementById('x');
            let cifras = document.getElementById('cifras');
            x.focus();
            document.querySelector('#btn_unit1').addEventListener('click', (e)=>{
                e.preventDefault();
                clear();
                renderSpinner();
                let result = get_data(`${URL}unidad${id}/${name.replace(' ', '').toLowerCase()}/`, {
                    'x': x.value,
                    'cifras': cifras.value
                }).then((response)=>response.json()
                ).then((data)=>{
                    if (data['error']) {
                        clear();
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data['error']
                        });
                    } else generate_table(data);
                });
            });
            break;
        //=================== UNIDAD 2 =====================
        case '2':
            if (name == "Gráfico") {
                requestContainer.classList.add("hidden");
                ggb_element.classList.remove("hidden");
            } else {
                ggb_element.classList.add("hidden");
                let nparams = Number(element.dataset.params);
                html = `
					<form id='unit2-form' method='POST'>
						<div class='method'>
							<span class="label">${description}</span>
							<div style="margin-bottom: 1.5rem;">
								<label for="function" class="label">Función: </label>
								<input type="text" name="function" id="function" class="input" placeholder="sin(x) - x"/>
								<label for="cifras" class="label">Cifras: </label>
								<input type="number" name="cifras" id="cifras" class="input input_method"/>
							</div>
						</div>
					</form> 
				`;
                formContainer.insertAdjacentHTML('afterbegin', html);
                let div = document.createElement('div');
                for(let i = 0; i < nparams; i++){
                    let label = document.createElement('label');
                    label.setAttribute('for', `param${i + 1}`);
                    label.classList.add("label");
                    label.textContent = `param${i + 1}: `;
                    let input = document.createElement('input');
                    input.setAttribute('type', 'number');
                    input.setAttribute('name', `param${i + 1}`);
                    input.setAttribute('id', `params`);
                    input.classList.add("input");
                    div.appendChild(label);
                    div.appendChild(input);
                }
                document.querySelector(".method").appendChild(div);
                let button = `<button type='submit' id='btn_unit2' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>`;
                document.querySelector(".method").insertAdjacentHTML('beforeend', button);
                let funct = document.querySelector("#function");
                let cifras = document.querySelector("#cifras");
                let allParams = document.querySelectorAll("#params");
                document.querySelector("#btn_unit2").addEventListener('click', (e)=>{
                    console.log(`${URL}unidad${id}/${name.toLowerCase()}/`);
                    e.preventDefault();
                    clear();
                    renderSpinner();
                    let params = [];
                    allParams.forEach((param)=>params.push(param.value)
                    );
                    if (name.toLowerCase() !== 'bairstow') //El metodo de bairstow no requiere que los parametros viajen ordenados
                    params = params.sort(function(a, b) {
                        return a - b;
                    });
                    let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`, {
                        'funcion': funct.value,
                        'cifras': cifras.value,
                        'params': params
                    }).then((response)=>response.json()
                    ).then((data)=>{
                        if (data['error']) {
                            clear();
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: data['error']
                            });
                        } else generate_table(data);
                    });
                });
            }
            break;
        case '3':
            //========================= UNIDAD 3 ==============================
            html = `
				<form id='unit3-form' method='POST'>
					<div class='method fontvar'>
						<span class='label'>${description}</span>
						<div style="margin-top: 2rem;">
							<div>
								<label for="poly" class="label">Polinomio: </label>
								<input type="text" name="poly" id="poly" class="input" placeholder="x^2 - 5*x + 4"/>
								<label for="interpolar" class="label">Interpolar: </label>
								<input type="text" name="interpolar" id="interpolar" class="input"/>
								<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>
								<input type="checkbox" name="makeTable" id="makeTable"/>
							</div>							
							<table class="polynomial-table">
								<tbody class="body-table">
									<tr class="ptr">
										<td class="ptc init">x</td>
										<td class="ptc"><input type="text" class="axis"/></td>
										<td class="ptc"><input type="text" class="axis"/></td>
										<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>
									</tr>
								</tbody>
							</table>
							
						</div>
					</div>
				</form>
			`;
            formContainer.insertAdjacentHTML('afterbegin', html);
            let tableBody = document.querySelector(".body-table");
            let btnAdd = document.querySelector(".add-col");
            let elem = `<td class="ptc"><input type="text" class="axis"/></td>`;
            btnAdd.addEventListener('click', function() {
                this.parentElement.insertAdjacentHTML('beforebegin', elem);
                if (tableBody.childNodes.length - 2 > 1) {
                    let elem2 = `<td class="ptc"><input type="text" class="epsilon"/></td>`;
                    document.querySelectorAll(".ptr")[1].insertAdjacentHTML('beforeend', elem2);
                    if (name == "Hermite") {
                        let elem3 = `<td class="ptc"><input type="text" class="diffepsilon"></td>`;
                        document.querySelectorAll(".ptr")[2].insertAdjacentHTML('beforeend', elem3);
                    }
                }
            });
            // funcionalidad para el checkbox
            let check1 = document.querySelector("#makeTable");
            check1.addEventListener('change', function() {
                if (this.checked) {
                    document.querySelector("#poly").value = "";
                    // Si el usuario ha seleccionado introducir los datos por medio de una tabla
                    document.querySelector("#poly").disabled = true;
                    let ncolumns = document.querySelector(".ptr").childNodes.length - 7;
                    //se crea la fila
                    let row = document.createElement('tr');
                    row.setAttribute("class", "ptr");
                    // se crea el identificador de la fila
                    let init = document.createElement("td");
                    init.setAttribute("class", "ptc init");
                    init.textContent = "y";
                    row.appendChild(init);
                    for(let i = 0; i < ncolumns; i++){
                        let td = document.createElement('td');
                        td.setAttribute('class', 'ptc');
                        let input = document.createElement('input');
                        //se agregan los atributos para el input
                        input.setAttribute('type', 'text');
                        input.setAttribute('class', 'epsilon');
                        td.appendChild(input);
                        row.appendChild(td);
                    }
                    tableBody.appendChild(row);
                    if (name == "Hermite") {
                        let row2 = document.createElement('tr');
                        row2.setAttribute("class", "ptr");
                        let init2 = document.createElement('td');
                        init2.setAttribute("class", "ptc init");
                        init2.textContent = "y'";
                        row2.appendChild(init2);
                        for(let i = 0; i < ncolumns; i++){
                            let td = document.createElement('td');
                            td.setAttribute('class', "ptc");
                            let input = document.createElement('input');
                            input.setAttribute("type", 'text');
                            input.setAttribute('class', 'diffepsilon');
                            td.appendChild(input);
                            row2.appendChild(td);
                        }
                        tableBody.appendChild(row2);
                    }
                } else {
                    // Si el usuario va a ingresar la funcion polinomica
                    document.querySelector("#poly").disabled = false;
                    if (name == "Hermite") {
                        tableBody.removeChild(document.querySelectorAll(".ptr")[2]);
                        tableBody.removeChild(document.querySelectorAll(".ptr")[1]);
                    } else {
                        let child = tableBody.lastChild;
                        tableBody.removeChild(child);
                    }
                }
            });
            //creacion del boton de enviar
            let button = `<button type='submit' id='btn_unit3' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>`;
            document.querySelector(".method").insertAdjacentHTML('beforeend', button);
            //envio de la informacion al servidor y procesamiento de la respuesta
            //Accion para el boton de enviar
            document.querySelector("#btn_unit3").addEventListener('click', (e)=>{
                e.preventDefault();
                clear();
                renderSpinner();
                let polinomyal = document.querySelector('#poly')?.value;
                let xvalues = [];
                let yvalues = [];
                let ixvalues = document.querySelectorAll(".axis");
                let iyvalues = document.querySelectorAll(".epsilon");
                let interpolar = document.querySelector("#interpolar").value;
                ixvalues.forEach((ixvalue)=>xvalues.push(ixvalue.value)
                );
                if (iyvalues) iyvalues.forEach((iyvalue)=>yvalues.push(iyvalue.value)
                );
                let parametros = {};
                if (name == "Hermite") {
                    let dyvalues = [];
                    let idyvalues = document.querySelectorAll(".diffepsilon");
                    idyvalues.forEach((idyvalue)=>dyvalues.push(idyvalue.value)
                    );
                    parametros = {
                        'polinomio': polinomyal,
                        'interpolar': interpolar,
                        'xi': xvalues,
                        'fi': yvalues,
                        'dy': dyvalues
                    };
                } else parametros = {
                    'polinomio': polinomyal,
                    'interpolar': interpolar,
                    'xi': xvalues,
                    'fi': yvalues
                };
                let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`, parametros).then((response)=>response.json()
                ).then((data)=>{
                    if (data['error']) {
                        clear();
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data['error']
                        });
                    } else {
                        console.log(data);
                        generate_table(data);
                    }
                });
            });
            break;
        //========================= UNIDAD 4 ==============================
        case '4':
            if (name) html = `
					<form id='unit4-form' method='POST'>
						<div class='method fontvar'>
							<span class='label'>${description}</span>
							<div style='margin-top: 2rem;'>
								<div>
									<label for='function' class='label'>Función: </label>
									<input type="text" name="function" id="function" class="input" placeholder="cos(x)"/>
									${name == 'Derivacion' || name == 'Richardson' ? "<label for='spc' class='label'>h: </label>" : ""}
									${name == 'Derivacion' || name == 'Richardson' ? "<input type='text' name='spc' id='spc' class='input'/>" : ""}
									${name == 'Derivacion' || name == 'Richardson' ? "<label for='value' class='label'>Valor: </label>" : ""}
									${name == 'Derivacion' || name == 'Richardson' ? "<input type='text' name='value' id='value' class='input'/>" : ""}
									${name == "Integracion" || name == "Rosemberg" ? "<label for='a' class='label'>a: </label>" : ""}
									${name == "Integracion" || name == "Rosemberg" ? "<input type='text' name='a' id='a' class='input'>" : ""}
									${name == "Integracion" || name == "Rosemberg" ? "<label for='b' class='label'>b: </label>" : ""}
									${name == "Integracion" || name == "Rosemberg" ? "<input type='text' name='b' id='b' class='input'>" : ""}
									${name == 'Richardson' || name == 'Rosemberg' ? '' : '<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>'}
									${name == 'Richardson' || name == 'Rosemberg' ? '' : '<input type="checkbox" name="makeTable" id="makeTable"/>'}
								</div>
								<table class="polynomial-table hidden">
									<tbody class="body-table">
										<tr class="ptr">
											<td class="ptc init">x</td>
											<td class="ptc"><input type="text" class="axis"/></td>
											<td class="ptc"><input type="text" class="axis"/></td>
											<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>
										</tr>
										<tr class='ptr'>
										<td class="ptc init">y</td>
											<td class="ptc"><input type="text" class="epsilon"/></td>
											<td class="ptc"><input type="text" class="epsilon"/></td>
										</tr>
									</tbody>
								</table>
								<div class='options'>
									<div class='select-group' style="display: ${name == "Derivacion" || name == "Richardson" ? 'block' : 'none'}">
										<label for='order' class='label'>Orden: </label>
										<div class='select-box'>
											<select name='order' id='order' class='select-menu'>
												<option value='1'>Primer Derivada</option>
												<option value='2'>Segunda Derivada</option>
												<option value='3'>Tercer Derivada</option>
												<option value='4'>Cuarta Derivada</option>
											</select>
										</div>
									</div>
									<div class='select-group' style="display: ${name == "Derivacion" || name == "Richardson" ? 'block' : 'none'}">
										<label for='metodo' class='label'>Método: </label>
										<div class='select-box'>
											<select name='metodo' id='metodo' class='select-menu'>
												<option value='1'>Hacia adelante</option>
												<option value='2'>Hacia atrás</option>
												<option value='3'>Centrada</option>
												<option value='4'>Tres puntos</option>
												<option value='5'>Cinco puntos</option>
											</select>
										</div>
									</div>
									<div class='select-group' style="display: ${name == "Integracion" || name == "Rosemberg" ? 'block' : 'none'}">
										<label for='metodo' class='label'>Método: </label>
										<div class='select-box'>
											<select name='metodo' id='metodo' class='select-menu'>
												<option value='1'>Trapecio Compuesto</option>
												<option value='2'>Simpson 1/3</option>
												<option value='3'>Simpson 3/8</option>
											</select>
										</div>
									</div>
									<div class='select-group' style="display: ${name == "Derivacion" || name == "Richardson" ? 'block' : 'none'}">
										<label for='mode' class='label'>Modo: </label>
										<div class='select-box'>
											<select name='mode' id='mode' class='select-menu'>
												<option value='1'>Primer diferencia</option>
												<option value='2'>Segunda diferencia</option>
											</select>
										</div>
									</div>
									<div>
										${name == 'Richardson' || name == "Rosemberg" ? "<label for='level' class='label'>Nivel: </label>" : ''}
										${name == 'Richardson' || name == "Rosemberg" ? "<input type='text' name='level' id='level' class='input' placeholder='2'>" : ''}
										${name == 'Integracion' ? "<label for='invervals' class='label'>Subintervalos: </label>" : ""}
										${name == 'Integracion' ? "<input type='text' name='intervals' id='intervals' class='input' placeholder='1'>" : ""}
									</div>
								</div>
							</div>
							<button type='submit' id='btn_unit4' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>
						</div>
					</form>
				`;
            formContainer.insertAdjacentHTML('afterbegin', html);
            //Evento de tablas, solo es valida para la derivacion y la integracion
            if (name == "Derivacion" || name == "Integracion") {
                let check2 = document.querySelector('#makeTable');
                let table = document.querySelector('.polynomial-table');
                let funcion = document.querySelector('#function');
                let spc = document.querySelector('#spc');
                check2.addEventListener('change', function() {
                    if (this.checked) {
                        table.classList.remove('hidden');
                        funcion.value = '';
                        funcion.disabled = true;
                        if (name == "Derivacion") {
                            spc.value = '';
                            spc.disabled = true;
                        }
                    } else {
                        table.classList.add('hidden');
                        funcion.disabled = false;
                        if (name == "Derivacion") spc.disabled = false;
                    }
                });
                //agrega mas datos a la tabla
                let tableBody2 = document.querySelector('.body-table');
                let btnAdd2 = document.querySelector(".add-col");
                let elem2 = `<td class="ptc"><input type="text" class="axis"/></td>`;
                btnAdd2.addEventListener('click', function() {
                    this.parentElement.insertAdjacentHTML('beforebegin', elem2);
                    let elem3 = `<td class="ptc"><input type="text" class="epsilon"/></td>`;
                    tableBody2.childNodes[3].insertAdjacentHTML('beforeend', elem3);
                });
            }
            //Envio de los datos del formulario
            document.querySelector('#btn_unit4').addEventListener('click', (e)=>{
                e.preventDefault();
                clear();
                renderSpinner();
                let check2 = document.querySelector('#makeTable');
                let funcion = document.querySelector('#function') ? document.querySelector('#function').value : "";
                let metodo = document.querySelector("#metodo").value;
                let xvalues = [];
                let yvalues = [];
                if (check2 && check2?.checked) {
                    let ixvalues = document.querySelectorAll(".axis");
                    let iyvalues1 = document.querySelectorAll(".epsilon");
                    if (ixvalues) ixvalues.forEach((ixvalue)=>xvalues.push(ixvalue.value)
                    );
                    if (iyvalues1) iyvalues1.forEach((iyvalues)=>yvalues.push(iyvalues.value)
                    );
                }
                if (name == "Derivacion" || name == "Richardson") {
                    let espaciado = document.querySelector('#spc') ? document.querySelector('#spc').value : "";
                    let valor = document.querySelector("#value").value;
                    let orden = document.querySelector("#order").value;
                    let modo = document.querySelector("#mode").value;
                    let parametros;
                    if (name == 'Derivacion') parametros = {
                        'funcion': funcion,
                        'metodo': metodo,
                        'valor': valor,
                        'espaciado': espaciado,
                        'orden': orden,
                        'modo': modo,
                        'x': xvalues,
                        'y': yvalues
                    };
                    else {
                        let nivel = document.querySelector("#level").value;
                        parametros = {
                            'funcion': funcion,
                            'metodo': metodo,
                            'valor': valor,
                            'espaciado': espaciado,
                            'orden': orden,
                            'modo': modo,
                            'nivel': nivel,
                            'x': xvalues,
                            'y': yvalues
                        };
                    }
                    //Envia los datos da la derivada o Richardson
                    let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`, parametros).then((response)=>response.json()
                    ).then((data)=>{
                        if (data['error']) {
                            clear();
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: data['error']
                            });
                        } else generate_table(data);
                    });
                } else if (name == "Integracion" || name == "Rosemberg") {
                    let a = document.querySelector("#a").value;
                    let b = document.querySelector("#b").value;
                    let parametros;
                    if (name == 'Integracion') {
                        let subintervalos = document.querySelector("#intervals").value;
                        parametros = {
                            'funcion': funcion,
                            'metodo': metodo,
                            'n': subintervalos,
                            'a': a,
                            'b': b,
                            'x': xvalues,
                            'y': yvalues
                        };
                    } else {
                        let nivel = document.querySelector("#level").value;
                        parametros = {
                            'funcion': funcion,
                            'metodo': metodo,
                            'a': a,
                            'b': b,
                            'nivel': nivel
                        };
                    }
                    //Envio del formulario para Integracion y Rosemberg
                    let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`, parametros).then((response)=>response.json()
                    ).then((data)=>{
                        if (data['error']) {
                            clear();
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                custonClass: "sweet-class",
                                text: data['error']
                            });
                        } else generate_table(data);
                    });
                }
            });
            break;
        case '5':
            html = `
				<form id='unit5-form' method='POST'>
					<div class='method fontvar'>
						<span class='label'>${description}</span>
						<div style='margin-top: 2rem;'>
							<div>
								<label for='function' class='label'>Ecuación: </label>
								<input type="text" name="function" id="function" class="input" placeholder="y - x^2 + x + 1"/>
								<label for='xi' class='label'>x<sub>i</sub></label>
								<input type='text' name='xi' id='xi' class='input'>
								<label for='yi' class='label'>y<sub>i</sub></label>
								<input type='text' name='yi' id='yi' class='input'>
								${name == 'Taylor' ? '<label for="makeTable" class="label">Ingresar EDOs manualmente </label>' : ''}
								${name == 'Taylor' ? '<input type="checkbox" name="makeTable" id="makeTable"/>' : ''}
							</div>
							<table class="edos-table hidden">
								<tbody class="edos-body">
									<tr class="ptr">
										<td class="ptc init">y''</td>
										<td class="edos-function"><input type="text" class="ndiff"></td>
										<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>
									</tr>
								</tbody>
							</table>
							<div style='margin-top: 4rem;>
								<label for="value" class='label'>valor: </label>
								<input type='text' name='value' id='value' class='input'>
								<label for='h' class='label'>h: </label>
								<input type='text' name='h' id='h' class='input'>
								<label for='n' class='label'>n: </label>
								<input type='text' name='n' id='n' class='input'>
								${name == 'Taylor' || name == 'RungeKutta' ? "<labe for='grade' class='label'>Grado: </label>" : ''}
								${name == 'Taylor' || name == 'RungeKutta' ? "<input type='text' name='grade' id='grade' class='input'>" : ''}
								${name == 'Adaptativo' ? "<label for='steps' class='label'>Pasos: </label>" : ""}
								${name == 'Adaptativo' ? "<input type='text' name='steps' id='steps' class='input'>" : ""}
							</div>
						</div>
						<button type='submit' id='btn_unit5' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>
					</div>
				</form>
			`;
            //Se agrega el codigo html al contenedor
            formContainer.insertAdjacentHTML('afterbegin', html);
            //Eventos para la tabla. Solo es valido para el metodo de Taylor
            if (name == 'Taylor') {
                let check = document.querySelector("#makeTable");
                let table = document.querySelector(".edos-table");
                check.addEventListener('change', ()=>{
                    table.classList.toggle("hidden");
                });
            }
            let tableBody3 = document.querySelector(".edos-body");
            let addRow = document.querySelector(".add-col");
            //evento para agregar mas filas
            addRow.addEventListener('click', function() {
                let n = document.querySelectorAll(".ptr").length;
                const row = `
					<tr class="ptr">
						<td class="ptc init">y<sup>${n + 2}</sup></td>
						<td class="edos-function"><input type="text" class="ndiff"></td>
						<td class="ptc"><button type="button" class="del-col"><i class="fa-solid fa-trash-can"></i></button></td>
					</tr>
				`;
                tableBody3.insertAdjacentHTML('beforeend', row);
            });
            //evento para eliminar fila
            tableBody3.addEventListener('click', function(e) {
                if (e.target.parentElement.classList.contains('del-col')) tableBody3.removeChild(e.target.parentElement.parentElement.parentElement);
            });
            const btn_unit5 = document.querySelector('#btn_unit5');
            //controla el evento del boton de enviar
            btn_unit5.addEventListener('click', function(e) {
                e.preventDefault();
                clear();
                renderSpinner();
                let ecuation = document.querySelector("#function").value;
                let xi = document.querySelector("#xi").value;
                let yi = document.querySelector("#yi").value;
                let value = document.querySelector("#value").value;
                let h = document.querySelector("#h").value;
                let n = document.querySelector("#n").value;
                let parametros;
                if (name == "Taylor") {
                    let indiffs = document.querySelectorAll(".ndiff");
                    let grade = document.querySelector("#grade").value;
                    let check = document.querySelector("#makeTable");
                    let ndiffs = [];
                    if (indiffs && check.checked) indiffs.forEach((indiff)=>ndiffs.push(indiff.value)
                    );
                    parametros = {
                        'ecuation': ecuation,
                        'xi': xi,
                        'yi': yi,
                        'value': value,
                        'h': h,
                        'n': n,
                        'grade': grade,
                        'ndiffs': ndiffs
                    };
                } else if (name == 'RungeKutta') {
                    let grade = document.querySelector("#grade").value;
                    parametros = {
                        'ecuation': ecuation,
                        'xi': xi,
                        'yi': yi,
                        'value': value,
                        'h': h,
                        'n': n,
                        'grade': grade
                    };
                } else if (name == 'Adaptativo') {
                    let steps = document.querySelector("#steps").value;
                    parametros = {
                        'ecuation': ecuation,
                        'xi': xi,
                        'yi': yi,
                        'value': value,
                        'h': h,
                        'n': n,
                        'steps': steps
                    };
                } else parametros = {
                    'ecuation': ecuation,
                    'xi': xi,
                    'yi': yi,
                    'value': value,
                    'h': h,
                    'n': n
                };
                //envia el formulario
                console.log(`${URL}unidad${id}/${name.toLowerCase()}/`);
                get_data(`${URL}unidad${id}/${name.toLowerCase()}/`, parametros).then((response)=>response.json()
                ).then((data)=>{
                    if (data['error']) {
                        clear();
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            custonClass: "sweet-class",
                            text: data['error']
                        });
                    } else generate_table(data);
                });
            });
            break;
    } // Fin del switch
} // Fin de la funcion requestData
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../img/icons.svg":"jxPkr"}],"jxPkr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('3ninf') + "icons.c78699a6.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["dRf9z","4pp4s"], "4pp4s", "parcelRequirec77b")

//# sourceMappingURL=index.4de9b498.js.map
