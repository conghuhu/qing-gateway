import {
  logo_default
} from "./chunk-RF3W5OQH.mjs";
import {
  asideMenuConfig
} from "./chunk-IME5ISHF.mjs";
import {
  CopyrightOutlined_default,
  MenuOutlined_default,
  create
} from "./chunk-RKIYV4QL.mjs";
import {
  init,
  queryInitStatus
} from "./chunk-BN2KOWVI.mjs";
import {
  Keyframes_default,
  Link,
  Outlet,
  _asyncToGenerator,
  _classCallCheck,
  _createClass,
  _createSuper,
  _inherits,
  _regeneratorRuntime,
  _toConsumableArray,
  avatar_default,
  config_provider_default,
  createTheme,
  drawer_default,
  es_default,
  form_default,
  hooks_default,
  input_default,
  input_number_default,
  layout_default,
  menu_default,
  modal_default,
  popover_default,
  result_default,
  skeleton_default,
  space_default,
  spin_default,
  theme_default,
  useCacheToken,
  useLocation,
  useStyleRegister,
  version_default,
  zh_CN_default
} from "./chunk-IQAM3D37.mjs";
import {
  TinyColor,
  _defineProperty,
  _objectSpread2,
  _objectWithoutProperties,
  _slicedToArray,
  _typeof,
  _unsupportedIterableToArray,
  init_public_api,
  require_classnames
} from "./chunk-QYT7L57C.mjs";
import {
  __commonJS,
  __export,
  __require,
  __toESM
} from "./chunk-NISNRQWT.mjs";

// node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React6 = __require("react");
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([
                stack
              ]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState9 = React6.useState, useEffect11 = React6.useEffect, useLayoutEffect3 = React6.useLayoutEffect, useDebugValue2 = React6.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React6.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState9({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect3(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [
            subscribe,
            value,
            getSnapshot
          ]);
          useEffect11(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [
            subscribe
          ]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React6.useSyncExternalStore !== void 0 ? React6.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/arrayWithHoles.js
var require_arrayWithHoles = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/arrayWithHoles.js"(exports, module) {
    function _arrayWithHoles4(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    module.exports = _arrayWithHoles4, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
var require_iterableToArrayLimit = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"(exports, module) {
    function _iterableToArrayLimit4(arr, i) {
      var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
      if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
        try {
          if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i)
              return;
            _n = false;
          } else
            for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
              ;
        } catch (err) {
          _d = true, _e = err;
        } finally {
          try {
            if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
              return;
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
    }
    module.exports = _iterableToArrayLimit4, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
    function _arrayLikeToArray4(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    module.exports = _arrayLikeToArray4, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray5(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return arrayLikeToArray(o, minLen);
    }
    module.exports = _unsupportedIterableToArray5, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/nonIterableRest.js
var require_nonIterableRest = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/nonIterableRest.js"(exports, module) {
    function _nonIterableRest4() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableRest4, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/slicedToArray.js
var require_slicedToArray = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/slicedToArray.js"(exports, module) {
    var arrayWithHoles = require_arrayWithHoles();
    var iterableToArrayLimit = require_iterableToArrayLimit();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    var nonIterableRest = require_nonIterableRest();
    function _slicedToArray5(arr, i) {
      return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
    }
    module.exports = _slicedToArray5, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof3(obj) {
      "@babel/helpers - typeof";
      return module.exports = _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof3(obj);
    }
    module.exports = _typeof3, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/interopRequireWildcard.js
var require_interopRequireWildcard = __commonJS({
  "node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
    var _typeof3 = require_typeof()["default"];
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
        return {
          "default": obj
        };
      }
      var cache2 = _getRequireWildcardCache(nodeInterop);
      if (cache2 && cache2.has(obj)) {
        return cache2.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache2) {
        cache2.set(obj, newObj);
      }
      return newObj;
    }
    module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/hooks/useEvent.js
var require_useEvent = __commonJS({
  "node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/hooks/useEvent.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = useEvent;
    var React6 = _interopRequireWildcard(__require("react"));
    function useEvent(callback) {
      var fnRef = React6.useRef();
      fnRef.current = callback;
      var memoFn = React6.useCallback(function() {
        var _fnRef$current;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [
          fnRef
        ].concat(args));
      }, []);
      return memoFn;
    }
  }
});

// node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/Dom/canUseDom.js
var require_canUseDom = __commonJS({
  "node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/Dom/canUseDom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = canUseDom;
    function canUseDom() {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    }
  }
});

// node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/hooks/useLayoutEffect.js
var require_useLayoutEffect = __commonJS({
  "node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/hooks/useLayoutEffect.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    var _interopRequireWildcard = require_interopRequireWildcard().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useLayoutUpdateEffect = exports.default = void 0;
    var React6 = _interopRequireWildcard(__require("react"));
    var _canUseDom = _interopRequireDefault(require_canUseDom());
    var useLayoutEffect3 = (0, _canUseDom.default)() ? React6.useLayoutEffect : React6.useEffect;
    var _default = useLayoutEffect3;
    exports.default = _default;
    var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
      var firstMountRef = React6.useRef(true);
      useLayoutEffect3(function() {
        if (!firstMountRef.current) {
          return callback();
        }
      }, deps);
      useLayoutEffect3(function() {
        firstMountRef.current = false;
        return function() {
          firstMountRef.current = true;
        };
      }, []);
    };
    exports.useLayoutUpdateEffect = useLayoutUpdateEffect;
  }
});

// node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/hooks/useState.js
var require_useState = __commonJS({
  "node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/hooks/useState.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard().default;
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = useSafeState;
    var _slicedToArray22 = _interopRequireDefault(require_slicedToArray());
    var React6 = _interopRequireWildcard(__require("react"));
    function useSafeState(defaultValue) {
      var destroyRef = React6.useRef(false);
      var _React$useState = React6.useState(defaultValue), _React$useState2 = (0, _slicedToArray22.default)(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
      React6.useEffect(function() {
        destroyRef.current = false;
        return function() {
          destroyRef.current = true;
        };
      }, []);
      function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) {
          return;
        }
        setValue(updater);
      }
      return [
        value,
        safeSetState
      ];
    }
  }
});

// node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/hooks/useMergedState.js
var require_useMergedState = __commonJS({
  "node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/hooks/useMergedState.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = useMergedState3;
    var _slicedToArray22 = _interopRequireDefault(require_slicedToArray());
    var _useEvent = _interopRequireDefault(require_useEvent());
    var _useLayoutEffect = require_useLayoutEffect();
    var _useState5 = _interopRequireDefault(require_useState());
    function hasValue(value) {
      return value !== void 0;
    }
    function useMergedState3(defaultStateValue, option) {
      var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
      var _useState = (0, _useState5.default)(function() {
        if (hasValue(value)) {
          return value;
        } else if (hasValue(defaultValue)) {
          return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        } else {
          return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
        }
      }), _useState2 = (0, _slicedToArray22.default)(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
      var mergedValue = value !== void 0 ? value : innerValue;
      var postMergedValue = postState ? postState(mergedValue) : mergedValue;
      var onChangeFn = (0, _useEvent.default)(onChange);
      var _useState3 = (0, _useState5.default)([
        mergedValue
      ]), _useState4 = (0, _slicedToArray22.default)(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
      (0, _useLayoutEffect.useLayoutUpdateEffect)(function() {
        var prev = prevValue[0];
        if (innerValue !== prev) {
          onChangeFn(innerValue, prev);
        }
      }, [
        prevValue
      ]);
      (0, _useLayoutEffect.useLayoutUpdateEffect)(function() {
        if (!hasValue(value)) {
          setInnerValue(value);
        }
      }, [
        value
      ]);
      var triggerChange = (0, _useEvent.default)(function(updater, ignoreDestroy) {
        setInnerValue(updater, ignoreDestroy);
        setPrevValue([
          mergedValue
        ], ignoreDestroy);
      });
      return [
        postMergedValue,
        triggerChange
      ];
    }
  }
});

// node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/warning.js
var require_warning = __commonJS({
  "node_modules/.pnpm/rc-util@5.27.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/lib/warning.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.call = call;
    exports.default = void 0;
    exports.note = note;
    exports.noteOnce = noteOnce;
    exports.resetWarned = resetWarned;
    exports.warning = warning2;
    exports.warningOnce = warningOnce;
    var warned = {};
    function warning2(valid, message) {
      if (!valid && console !== void 0) {
        console.error("Warning: ".concat(message));
      }
    }
    function note(valid, message) {
      if (!valid && console !== void 0) {
        console.warn("Note: ".concat(message));
      }
    }
    function resetWarned() {
      warned = {};
    }
    function call(method, valid, message) {
      if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
      }
    }
    function warningOnce(valid, message) {
      call(warning2, valid, message);
    }
    function noteOnce(valid, message) {
      call(note, valid, message);
    }
    var _default = warningOnce;
    exports.default = _default;
  }
});

// node_modules/.pnpm/path-to-regexp@2.4.0/node_modules/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "node_modules/.pnpm/path-to-regexp@2.4.0/node_modules/path-to-regexp/index.js"(exports, module) {
    module.exports = pathToRegexp4;
    module.exports.parse = parse2;
    module.exports.compile = compile;
    module.exports.tokensToFunction = tokensToFunction;
    module.exports.tokensToRegExp = tokensToRegExp;
    var DEFAULT_DELIMITER = "/";
    var DEFAULT_DELIMITERS = "./";
    var PATH_REGEXP = new RegExp([
      "(\\\\.)",
      "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
    ].join("|"), "g");
    function parse2(str, options) {
      var tokens = [];
      var key = 0;
      var index = 0;
      var path = "";
      var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
      var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
      var pathEscaped = false;
      var res;
      while ((res = PATH_REGEXP.exec(str)) !== null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        if (escaped) {
          path += escaped[1];
          pathEscaped = true;
          continue;
        }
        var prev = "";
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
          var k = path.length - 1;
          if (delimiters.indexOf(path[k]) > -1) {
            prev = path[k];
            path = path.slice(0, k);
          }
        }
        if (path) {
          tokens.push(path);
          path = "";
          pathEscaped = false;
        }
        var partial = prev !== "" && next !== void 0 && next !== prev;
        var repeat = modifier === "+" || modifier === "*";
        var optional = modifier === "?" || modifier === "*";
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
          name: name || key++,
          prefix: prev,
          delimiter,
          optional,
          repeat,
          partial,
          pattern: pattern ? escapeGroup(pattern) : "[^" + escapeString2(delimiter) + "]+?"
        });
      }
      if (path || index < str.length) {
        tokens.push(path + str.substr(index));
      }
      return tokens;
    }
    function compile(str, options) {
      return tokensToFunction(parse2(str, options));
    }
    function tokensToFunction(tokens) {
      var matches = new Array(tokens.length);
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === "object") {
          matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$");
        }
      }
      return function(data, options) {
        var path = "";
        var encode = options && options.encode || encodeURIComponent;
        for (var i2 = 0; i2 < tokens.length; i2++) {
          var token2 = tokens[i2];
          if (typeof token2 === "string") {
            path += token2;
            continue;
          }
          var value = data ? data[token2.name] : void 0;
          var segment;
          if (Array.isArray(value)) {
            if (!token2.repeat) {
              throw new TypeError('Expected "' + token2.name + '" to not repeat, but got array');
            }
            if (value.length === 0) {
              if (token2.optional)
                continue;
              throw new TypeError('Expected "' + token2.name + '" to not be empty');
            }
            for (var j = 0; j < value.length; j++) {
              segment = encode(value[j], token2);
              if (!matches[i2].test(segment)) {
                throw new TypeError('Expected all "' + token2.name + '" to match "' + token2.pattern + '"');
              }
              path += (j === 0 ? token2.prefix : token2.delimiter) + segment;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
            segment = encode(String(value), token2);
            if (!matches[i2].test(segment)) {
              throw new TypeError('Expected "' + token2.name + '" to match "' + token2.pattern + '", but got "' + segment + '"');
            }
            path += token2.prefix + segment;
            continue;
          }
          if (token2.optional) {
            if (token2.partial)
              path += token2.prefix;
            continue;
          }
          throw new TypeError('Expected "' + token2.name + '" to be ' + (token2.repeat ? "an array" : "a string"));
        }
        return path;
      };
    }
    function escapeString2(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function escapeGroup(group) {
      return group.replace(/([=!:$/()])/g, "\\$1");
    }
    function flags2(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp2(path, keys) {
      if (!keys)
        return path;
      var groups = path.source.match(/\((?!\?)/g);
      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: null,
            delimiter: null,
            optional: false,
            repeat: false,
            partial: false,
            pattern: null
          });
        }
      }
      return path;
    }
    function arrayToRegexp2(path, keys, options) {
      var parts = [];
      for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp4(path[i], keys, options).source);
      }
      return new RegExp("(?:" + parts.join("|") + ")", flags2(options));
    }
    function stringToRegexp2(path, keys, options) {
      return tokensToRegExp(parse2(path, options), keys, options);
    }
    function tokensToRegExp(tokens, keys, options) {
      options = options || {};
      var strict = options.strict;
      var start = options.start !== false;
      var end = options.end !== false;
      var delimiter = escapeString2(options.delimiter || DEFAULT_DELIMITER);
      var delimiters = options.delimiters || DEFAULT_DELIMITERS;
      var endsWith = [].concat(options.endsWith || []).map(escapeString2).concat("$").join("|");
      var route = start ? "^" : "";
      var isEndDelimited = tokens.length === 0;
      for (var i = 0; i < tokens.length; i++) {
        var token2 = tokens[i];
        if (typeof token2 === "string") {
          route += escapeString2(token2);
          isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token2[token2.length - 1]) > -1;
        } else {
          var capture = token2.repeat ? "(?:" + token2.pattern + ")(?:" + escapeString2(token2.delimiter) + "(?:" + token2.pattern + "))*" : token2.pattern;
          if (keys)
            keys.push(token2);
          if (token2.optional) {
            if (token2.partial) {
              route += escapeString2(token2.prefix) + "(" + capture + ")?";
            } else {
              route += "(?:" + escapeString2(token2.prefix) + "(" + capture + "))?";
            }
          } else {
            route += escapeString2(token2.prefix) + "(" + capture + ")";
          }
        }
      }
      if (end) {
        if (!strict)
          route += "(?:" + delimiter + ")?";
        route += endsWith === "$" ? "$" : "(?=" + endsWith + ")";
      } else {
        if (!strict)
          route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        if (!isEndDelimited)
          route += "(?=" + delimiter + "|" + endsWith + ")";
      }
      return new RegExp(route, flags2(options));
    }
    function pathToRegexp4(path, keys, options) {
      if (path instanceof RegExp) {
        return regexpToRegexp2(path, keys);
      }
      if (Array.isArray(path)) {
        return arrayToRegexp2(path, keys, options);
      }
      return stringToRegexp2(path, keys, options);
    }
  }
});

// node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/react.js
var require_react = __commonJS({
  "node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/react.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          for (i of a.entries())
            if (!b.has(i[0]))
              return false;
          for (i of a.entries())
            if (!equal(i[1], b.get(i[0])))
              return false;
          return true;
        }
        if (a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          for (i of a.entries())
            if (!b.has(i[0]))
              return false;
          return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (key === "_owner" && a.$$typeof) {
            continue;
          }
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// src/pages/layout.tsx
import { jsx as _jsx23, jsxs as _jsxs15 } from "@ice/runtime/jsx-runtime";
import { useEffect as useEffect10, useState as useState8 } from "react";

// node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          if (i >= o.length)
            return {
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
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/index.js
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";

// node_modules/.pnpm/rc-picker@3.1.4_mlnkrlbros4rghcauwy625gk7y/node_modules/rc-picker/es/locale/zh_CN.js
var locale = {
  locale: "zh_CN",
  today: "\u4ECA\u5929",
  now: "\u6B64\u523B",
  backToToday: "\u8FD4\u56DE\u4ECA\u5929",
  ok: "\u786E\u5B9A",
  timeSelect: "\u9009\u62E9\u65F6\u95F4",
  dateSelect: "\u9009\u62E9\u65E5\u671F",
  weekSelect: "\u9009\u62E9\u5468",
  clear: "\u6E05\u9664",
  month: "\u6708",
  year: "\u5E74",
  previousMonth: "\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",
  nextMonth: "\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",
  monthSelect: "\u9009\u62E9\u6708\u4EFD",
  yearSelect: "\u9009\u62E9\u5E74\u4EFD",
  decadeSelect: "\u9009\u62E9\u5E74\u4EE3",
  yearFormat: "YYYY\u5E74",
  dayFormat: "D\u65E5",
  dateFormat: "YYYY\u5E74M\u6708D\u65E5",
  dateTimeFormat: "YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",
  previousYear: "\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",
  nextYear: "\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",
  previousDecade: "\u4E0A\u4E00\u5E74\u4EE3",
  nextDecade: "\u4E0B\u4E00\u5E74\u4EE3",
  previousCentury: "\u4E0A\u4E00\u4E16\u7EAA",
  nextCentury: "\u4E0B\u4E00\u4E16\u7EAA"
};
var zh_CN_default2 = locale;

// node_modules/.pnpm/antd@5.1.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/time-picker/locale/zh_CN.js
var locale2 = {
  placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
  rangePlaceholder: [
    "\u5F00\u59CB\u65F6\u95F4",
    "\u7ED3\u675F\u65F6\u95F4"
  ]
};
var zh_CN_default3 = locale2;

// node_modules/.pnpm/antd@5.1.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/date-picker/locale/zh_CN.js
var locale3 = {
  lang: Object.assign({
    placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
    yearPlaceholder: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
    quarterPlaceholder: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
    monthPlaceholder: "\u8BF7\u9009\u62E9\u6708\u4EFD",
    weekPlaceholder: "\u8BF7\u9009\u62E9\u5468",
    rangePlaceholder: [
      "\u5F00\u59CB\u65E5\u671F",
      "\u7ED3\u675F\u65E5\u671F"
    ],
    rangeYearPlaceholder: [
      "\u5F00\u59CB\u5E74\u4EFD",
      "\u7ED3\u675F\u5E74\u4EFD"
    ],
    rangeMonthPlaceholder: [
      "\u5F00\u59CB\u6708\u4EFD",
      "\u7ED3\u675F\u6708\u4EFD"
    ],
    rangeQuarterPlaceholder: [
      "\u5F00\u59CB\u5B63\u5EA6",
      "\u7ED3\u675F\u5B63\u5EA6"
    ],
    rangeWeekPlaceholder: [
      "\u5F00\u59CB\u5468",
      "\u7ED3\u675F\u5468"
    ]
  }, zh_CN_default2),
  timePickerLocale: Object.assign({}, zh_CN_default3)
};
locale3.lang.ok = "\u786E\u5B9A";
var zh_CN_default4 = locale3;

// node_modules/.pnpm/antd@5.1.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/calendar/locale/zh_CN.js
var zh_CN_default5 = zh_CN_default4;

// node_modules/.pnpm/antd@5.1.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/locale/zh_CN.js
var typeTemplate = "${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}";
var localeValues = {
  locale: "zh-cn",
  Pagination: zh_CN_default,
  DatePicker: zh_CN_default4,
  TimePicker: zh_CN_default3,
  Calendar: zh_CN_default5,
  global: {
    placeholder: "\u8BF7\u9009\u62E9"
  },
  Table: {
    filterTitle: "\u7B5B\u9009",
    filterConfirm: "\u786E\u5B9A",
    filterReset: "\u91CD\u7F6E",
    filterEmptyText: "\u65E0\u7B5B\u9009\u9879",
    filterCheckall: "\u5168\u9009",
    filterSearchPlaceholder: "\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",
    selectAll: "\u5168\u9009\u5F53\u9875",
    selectInvert: "\u53CD\u9009\u5F53\u9875",
    selectNone: "\u6E05\u7A7A\u6240\u6709",
    selectionAll: "\u5168\u9009\u6240\u6709",
    sortTitle: "\u6392\u5E8F",
    expand: "\u5C55\u5F00\u884C",
    collapse: "\u5173\u95ED\u884C",
    triggerDesc: "\u70B9\u51FB\u964D\u5E8F",
    triggerAsc: "\u70B9\u51FB\u5347\u5E8F",
    cancelSort: "\u53D6\u6D88\u6392\u5E8F"
  },
  Modal: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88",
    justOkText: "\u77E5\u9053\u4E86"
  },
  Tour: {
    Next: "\u4E0B\u4E00\u6B65",
    Previous: "\u4E0A\u4E00\u6B65",
    Finish: "\u7ED3\u675F\u5BFC\u89C8"
  },
  Popconfirm: {
    cancelText: "\u53D6\u6D88",
    okText: "\u786E\u5B9A"
  },
  Transfer: {
    titles: [
      "",
      ""
    ],
    searchPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
    itemUnit: "\u9879",
    itemsUnit: "\u9879",
    remove: "\u5220\u9664",
    selectCurrent: "\u5168\u9009\u5F53\u9875",
    removeCurrent: "\u5220\u9664\u5F53\u9875",
    selectAll: "\u5168\u9009\u6240\u6709",
    removeAll: "\u5220\u9664\u5168\u90E8",
    selectInvert: "\u53CD\u9009\u5F53\u9875"
  },
  Upload: {
    uploading: "\u6587\u4EF6\u4E0A\u4F20\u4E2D",
    removeFile: "\u5220\u9664\u6587\u4EF6",
    uploadError: "\u4E0A\u4F20\u9519\u8BEF",
    previewFile: "\u9884\u89C8\u6587\u4EF6",
    downloadFile: "\u4E0B\u8F7D\u6587\u4EF6"
  },
  Empty: {
    description: "\u6682\u65E0\u6570\u636E"
  },
  Icon: {
    icon: "\u56FE\u6807"
  },
  Text: {
    edit: "\u7F16\u8F91",
    copy: "\u590D\u5236",
    copied: "\u590D\u5236\u6210\u529F",
    expand: "\u5C55\u5F00"
  },
  PageHeader: {
    back: "\u8FD4\u56DE"
  },
  Form: {
    optional: "\uFF08\u53EF\u9009\uFF09",
    defaultValidateMessages: {
      default: "\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",
      required: "\u8BF7\u8F93\u5165${label}",
      enum: "${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",
      whitespace: "${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",
      date: {
        format: "${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",
        parse: "${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",
        invalid: "${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",
        min: "${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",
        max: "${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",
        range: "${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"
      },
      number: {
        len: "${label}\u5FC5\u987B\u7B49\u4E8E${len}",
        min: "${label}\u6700\u5C0F\u503C\u4E3A${min}",
        max: "${label}\u6700\u5927\u503C\u4E3A${max}",
        range: "${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"
      },
      array: {
        len: "\u987B\u4E3A${len}\u4E2A${label}",
        min: "\u6700\u5C11${min}\u4E2A${label}",
        max: "\u6700\u591A${max}\u4E2A${label}",
        range: "${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"
      },
      pattern: {
        mismatch: "${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"
      }
    }
  },
  Image: {
    preview: "\u9884\u89C8"
  },
  QRCode: {
    expired: "\u4E8C\u7EF4\u7801\u8FC7\u671F",
    refresh: "\u70B9\u51FB\u5237\u65B0"
  }
};
var zh_CN_default6 = localeValues;

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/index.js
import React2, { useContext as useContext3, useEffect as useEffect2, useMemo as useMemo3, useRef as useRef3 } from "react";

// node_modules/.pnpm/swr@2.0.0_react@18.2.0/node_modules/swr/core/dist/index.mjs
var import_shim = __toESM(require_shim(), 1);
import { useRef as useRef2, useMemo as useMemo2, useCallback as useCallback2, useDebugValue } from "react";

// node_modules/.pnpm/swr@2.0.0_react@18.2.0/node_modules/swr/_internal/dist/index.mjs
import React, { useEffect, useLayoutEffect, createContext, useContext, useMemo, useState, createElement, useRef, useCallback } from "react";
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var EMPTY_CACHE = {};
var noop = () => {
};
var UNDEFINED = noop();
var OBJECT = Object;
var isUndefined = (v) => v === UNDEFINED;
var isFunction = (v) => typeof v == "function";
var mergeObjects = (a, b) => ({
  ...a,
  ...b
});
var STR_UNDEFINED = "undefined";
var isWindowDefined = typeof window != STR_UNDEFINED;
var isDocumentDefined = typeof document != STR_UNDEFINED;
var hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
var createCacheHelper = (cache2, key) => {
  const state = SWRGlobalState.get(cache2);
  return [
    () => cache2.get(key) || EMPTY_CACHE,
    (info) => {
      const prev = cache2.get(key);
      state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
    },
    state[6]
  ];
};
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
var stableHash = (arg) => {
  const type = typeof arg;
  const constructor = arg && arg.constructor;
  const isDate = constructor == Date;
  let result;
  let index;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      const keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var online = true;
var isOnline = () => online;
var [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  noop,
  noop
];
var isVisible = () => {
  const visibilityState = isDocumentDefined && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = (callback) => {
  if (isDocumentDefined) {
    document.addEventListener("visibilitychange", callback);
  }
  onWindowEvent("focus", callback);
  return () => {
    if (isDocumentDefined) {
      document.removeEventListener("visibilitychange", callback);
    }
    offWindowEvent("focus", callback);
  };
};
var initReconnect = (callback) => {
  const onOnline = () => {
    online = true;
    callback();
  };
  const onOffline = () => {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return () => {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_REACT_LEGACY = !React.useId;
var IS_SERVER = !isWindowDefined || "Deno" in window;
var rAF = (f) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
var useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && ([
  "slow-2g",
  "2g"
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = (key) => {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  const args = key;
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  return [
    key,
    args
  ];
};
var __timestamp = 0;
var getTimestamp = () => ++__timestamp;
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var constants = {
  __proto__: null,
  FOCUS_EVENT,
  RECONNECT_EVENT,
  MUTATE_EVENT
};
async function internalMutate(...args) {
  const [cache2, _key, _data, _opts] = args;
  const options = mergeObjects({
    populateCache: true,
    throwOnError: true
  }, typeof _opts === "boolean" ? {
    revalidate: _opts
  } : _opts || {});
  let populateCache = options.populateCache;
  const rollbackOnErrorOption = options.rollbackOnError;
  let optimisticData = options.optimisticData;
  const revalidate = options.revalidate !== false;
  const rollbackOnError = (error) => {
    return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
  };
  const throwOnError = options.throwOnError;
  if (isFunction(_key)) {
    const keyFilter = _key;
    const matchedKeys = [];
    const it = cache2.keys();
    for (let keyIt = it.next(); !keyIt.done; keyIt = it.next()) {
      const key = keyIt.value;
      if (!key.startsWith("$inf$") && keyFilter(cache2.get(key)._k)) {
        matchedKeys.push(key);
      }
    }
    return Promise.all(matchedKeys.map(mutateByKey));
  }
  return mutateByKey(_key);
  async function mutateByKey(_k) {
    const [key] = serialize(_k);
    if (!key)
      return;
    const [get2, set] = createCacheHelper(cache2, key);
    const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
    const revalidators = EVENT_REVALIDATORS[key];
    const startRevalidate = () => {
      if (revalidate) {
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(() => get2().data);
        }
      }
      return get2().data;
    };
    if (args.length < 3) {
      return startRevalidate();
    }
    let data = _data;
    let error;
    const beforeMutationTs = getTimestamp();
    MUTATION[key] = [
      beforeMutationTs,
      0
    ];
    const hasOptimisticData = !isUndefined(optimisticData);
    const state = get2();
    const displayedData = state.data;
    const currentData = state._c;
    const committedData = isUndefined(currentData) ? displayedData : currentData;
    if (hasOptimisticData) {
      optimisticData = isFunction(optimisticData) ? optimisticData(committedData) : optimisticData;
      set({
        data: optimisticData,
        _c: committedData
      });
    }
    if (isFunction(data)) {
      try {
        data = data(committedData);
      } catch (err) {
        error = err;
      }
    }
    if (data && isFunction(data.then)) {
      data = await data.catch((err) => {
        error = err;
      });
      if (beforeMutationTs !== MUTATION[key][0]) {
        if (error)
          throw error;
        return data;
      } else if (error && hasOptimisticData && rollbackOnError(error)) {
        populateCache = true;
        data = committedData;
        set({
          data,
          _c: UNDEFINED
        });
      }
    }
    if (populateCache) {
      if (!error) {
        if (isFunction(populateCache)) {
          data = populateCache(data, committedData);
        }
        set({
          data,
          _c: UNDEFINED
        });
      }
    }
    MUTATION[key][1] = getTimestamp();
    const res = await startRevalidate();
    set({
      _c: UNDEFINED
    });
    if (error) {
      if (throwOnError)
        throw error;
      return;
    }
    return populateCache ? res : data;
  }
}
var revalidateAllKeys = (revalidators, type) => {
  for (const key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = (provider, options) => {
  if (!SWRGlobalState.has(provider)) {
    const opts = mergeObjects(defaultConfigOptions, options);
    const EVENT_REVALIDATORS = {};
    const mutate2 = internalMutate.bind(UNDEFINED, provider);
    let unmount = noop;
    const subscriptions = {};
    const subscribe = (key, callback) => {
      const subs = subscriptions[key] || [];
      subscriptions[key] = subs;
      subs.push(callback);
      return () => subs.splice(subs.indexOf(callback), 1);
    };
    const setter = (key, value, prev) => {
      provider.set(key, value);
      const subs = subscriptions[key];
      if (subs) {
        for (let i = subs.length; i--; ) {
          subs[i](prev, value);
        }
      }
    };
    const initProvider = () => {
      if (!SWRGlobalState.has(provider)) {
        SWRGlobalState.set(provider, [
          EVENT_REVALIDATORS,
          {},
          {},
          {},
          mutate2,
          setter,
          subscribe
        ]);
        if (!IS_SERVER) {
          const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
          const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
          unmount = () => {
            releaseFocus && releaseFocus();
            releaseReconnect && releaseReconnect();
            SWRGlobalState.delete(provider);
          };
        }
      }
    };
    initProvider();
    return [
      provider,
      mutate2,
      initProvider,
      unmount
    ];
  }
  return [
    provider,
    SWRGlobalState.get(provider)[4]
  ];
};
var onErrorRetry = (_, __, config, revalidate, opts) => {
  const maxRetryCount = config.errorRetryCount;
  const currentRetryCount = opts.retryCount;
  const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
var [cache, mutate] = initCache(/* @__PURE__ */ new Map());
var defaultConfig = mergeObjects({
  onLoadingSlow: noop,
  onSuccess: noop,
  onError: noop,
  onErrorRetry,
  onDiscarded: noop,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  revalidateIfStale: true,
  shouldRetryOnError: true,
  errorRetryInterval: slowConnection ? 1e4 : 5e3,
  focusThrottleInterval: 5 * 1e3,
  dedupingInterval: 2 * 1e3,
  loadingTimeout: slowConnection ? 5e3 : 3e3,
  compare,
  isPaused: () => false,
  cache,
  mutate,
  fallback: {}
}, preset);
var mergeConfigs = (a, b) => {
  const v = mergeObjects(a, b);
  if (b) {
    const { use: u1, fallback: f1 } = a;
    const { use: u2, fallback: f2 } = b;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
var SWRConfigContext = createContext({});
var SWRConfig = (props) => {
  const { value } = props;
  const parentConfig = useContext(SWRConfigContext);
  const isFunctionalConfig = isFunction(value);
  const config = useMemo(() => isFunctionalConfig ? value(parentConfig) : value, [
    isFunctionalConfig,
    parentConfig,
    value
  ]);
  const extendedConfig = useMemo(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
    isFunctionalConfig,
    parentConfig,
    config
  ]);
  const provider = config && config.provider;
  const [cacheContext] = useState(() => provider ? initCache(provider(extendedConfig.cache || cache), config) : UNDEFINED);
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(() => {
    if (cacheContext) {
      cacheContext[2] && cacheContext[2]();
      return cacheContext[3];
    }
  }, []);
  return createElement(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
var use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
var setupDevTools = () => {
  if (enableDevtools) {
    window.__SWR_DEVTOOLS_REACT__ = React;
  }
};
var normalize = (args) => {
  return isFunction(args[1]) ? [
    args[0],
    args[1],
    args[2] || {}
  ] : [
    args[0],
    null,
    (args[1] === null ? args[2] : args[1]) || {}
  ];
};
var useSWRConfig = () => {
  return mergeObjects(defaultConfig, useContext(SWRConfigContext));
};
var middleware = (useSWRNext) => (key_, fetcher_, config) => {
  const fetcher = fetcher_ && ((...args) => {
    const key = serialize(key_)[0];
    const [, , , PRELOAD] = SWRGlobalState.get(cache);
    const req = PRELOAD[key];
    if (req) {
      delete PRELOAD[key];
      return req;
    }
    return fetcher_(...args);
  });
  return useSWRNext(key_, fetcher, config);
};
var BUILT_IN_MIDDLEWARE = use.concat(middleware);
var withArgs = (hook) => {
  return function useSWRArgs(...args) {
    const fallbackConfig = useSWRConfig();
    const [key, fn, _config] = normalize(args);
    const config = mergeConfigs(fallbackConfig, _config);
    let next = hook;
    const { use: use2 } = config;
    const middleware2 = (use2 || []).concat(BUILT_IN_MIDDLEWARE);
    for (let i = middleware2.length; i--; ) {
      next = middleware2[i](next);
    }
    return next(key, fn || config.fetcher || null, config);
  };
};
var subscribeCallback = (key, callbacks, callback) => {
  const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return () => {
    const index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
setupDevTools();

// node_modules/.pnpm/swr@2.0.0_react@18.2.0/node_modules/swr/core/dist/index.mjs
var WITH_DEDUPE = {
  dedupe: true
};
var useSWRHandler = (_key, fetcher, config) => {
  const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
  const [EVENT_REVALIDATORS, MUTATION, FETCH] = SWRGlobalState.get(cache2);
  const [key, fnArg] = serialize(_key);
  const initialMountedRef = useRef2(false);
  const unmountedRef = useRef2(false);
  const keyRef = useRef2(key);
  const fetcherRef = useRef2(fetcher);
  const configRef = useRef2(config);
  const getConfig = () => configRef.current;
  const isActive = () => getConfig().isVisible() && getConfig().isOnline();
  const [getCache, setCache, subscribeCache] = createCacheHelper(cache2, key);
  const stateDependencies = useRef2({}).current;
  const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  const isEqual3 = (prev, current) => {
    let equal = true;
    for (const _ in stateDependencies) {
      const t = _;
      if (!compare2(current[t], prev[t])) {
        if (t === "data" && isUndefined(prev[t])) {
          if (!compare2(current[t], returnedData)) {
            equal = false;
          }
        } else {
          equal = false;
        }
      }
    }
    return equal;
  };
  const getSnapshot = useMemo2(() => {
    const shouldStartRequest = (() => {
      if (!key)
        return false;
      if (!fetcher)
        return false;
      if (!isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return false;
      return true;
    })();
    const getSelectedCache = () => {
      const state = getCache();
      const snapshot = mergeObjects(state);
      delete snapshot._k;
      if (!shouldStartRequest) {
        return snapshot;
      }
      return {
        isValidating: true,
        isLoading: true,
        ...snapshot
      };
    };
    let memorizedSnapshot = getSelectedCache();
    return () => {
      const snapshot = getSelectedCache();
      return isEqual3(snapshot, memorizedSnapshot) ? memorizedSnapshot : memorizedSnapshot = snapshot;
    };
  }, [
    cache2,
    key
  ]);
  const cached = (0, import_shim.useSyncExternalStore)(useCallback2((callback) => subscribeCache(key, (prev, current) => {
    if (!isEqual3(prev, current))
      callback();
  }), [
    cache2,
    key
  ]), getSnapshot, getSnapshot);
  const isInitialMount = !initialMountedRef.current;
  const cachedData = cached.data;
  const data = isUndefined(cachedData) ? fallback : cachedData;
  const error = cached.error;
  const laggyDataRef = useRef2(data);
  const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
  const shouldDoInitialRevalidation = (() => {
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    if (suspense)
      return isUndefined(data) ? false : config.revalidateIfStale;
    return isUndefined(data) || config.revalidateIfStale;
  })();
  const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
  const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
  const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
  const revalidate = useCallback2(
    async (revalidateOpts) => {
      const currentFetcher = fetcherRef.current;
      if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
        return false;
      }
      let newData;
      let startAt;
      let loading = true;
      const opts = revalidateOpts || {};
      const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
      const callbackSafeguard = () => {
        if (IS_REACT_LEGACY) {
          return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
        }
        return key === keyRef.current;
      };
      const finalState = {
        isValidating: false,
        isLoading: false
      };
      const finishRequestAndUpdateState = () => {
        setCache(finalState);
      };
      const cleanupState = () => {
        const requestInfo = FETCH[key];
        if (requestInfo && requestInfo[1] === startAt) {
          delete FETCH[key];
        }
      };
      const initialState = {
        isValidating: true
      };
      if (isUndefined(getCache().data)) {
        initialState.isLoading = true;
      }
      try {
        if (shouldStartNewRequest) {
          setCache(initialState);
          if (config.loadingTimeout && isUndefined(getCache().data)) {
            setTimeout(() => {
              if (loading && callbackSafeguard()) {
                getConfig().onLoadingSlow(key, config);
              }
            }, config.loadingTimeout);
          }
          FETCH[key] = [
            currentFetcher(fnArg),
            getTimestamp()
          ];
        }
        [newData, startAt] = FETCH[key];
        newData = await newData;
        if (shouldStartNewRequest) {
          setTimeout(cleanupState, config.dedupingInterval);
        }
        if (!FETCH[key] || FETCH[key][1] !== startAt) {
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        finalState.error = UNDEFINED;
        const mutationInfo = MUTATION[key];
        if (!isUndefined(mutationInfo) && (startAt <= mutationInfo[0] || startAt <= mutationInfo[1] || mutationInfo[1] === 0)) {
          finishRequestAndUpdateState();
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        const cacheData = getCache().data;
        finalState.data = compare2(cacheData, newData) ? cacheData : newData;
        if (shouldStartNewRequest) {
          if (callbackSafeguard()) {
            getConfig().onSuccess(newData, key, config);
          }
        }
      } catch (err) {
        cleanupState();
        const currentConfig = getConfig();
        const { shouldRetryOnError } = currentConfig;
        if (!currentConfig.isPaused()) {
          finalState.error = err;
          if (shouldStartNewRequest && callbackSafeguard()) {
            currentConfig.onError(err, key, currentConfig);
            if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
              if (isActive()) {
                currentConfig.onErrorRetry(err, key, currentConfig, revalidate, {
                  retryCount: (opts.retryCount || 0) + 1,
                  dedupe: true
                });
              }
            }
          }
        }
      }
      loading = false;
      finishRequestAndUpdateState();
      return true;
    },
    [
      key,
      cache2
    ]
  );
  const boundMutate = useCallback2((...args) => {
    return internalMutate(cache2, keyRef.current, ...args);
  }, []);
  useIsomorphicLayoutEffect(() => {
    fetcherRef.current = fetcher;
    configRef.current = config;
    if (!isUndefined(cachedData)) {
      laggyDataRef.current = cachedData;
    }
  });
  useIsomorphicLayoutEffect(() => {
    if (!key)
      return;
    const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    let nextFocusRevalidatedAt = 0;
    const onRevalidate = (type) => {
      if (type == constants.FOCUS_EVENT) {
        const now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == constants.RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == constants.MUTATE_EVENT) {
        return revalidate();
      }
      return;
    };
    const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    setCache({
      _k: fnArg
    });
    if (shouldDoInitialRevalidation) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return () => {
      unmountedRef.current = true;
      unsubEvents();
    };
  }, [
    key
  ]);
  useIsomorphicLayoutEffect(() => {
    let timer;
    function next() {
      const interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [
    refreshInterval,
    refreshWhenHidden,
    refreshWhenOffline,
    key
  ]);
  useDebugValue(returnedData);
  if (suspense && isUndefined(data) && key) {
    if (!IS_REACT_LEGACY && IS_SERVER) {
      throw new Error("Fallback data is required when using suspense in SSR.");
    }
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return returnedData;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    },
    get isLoading() {
      stateDependencies.isLoading = true;
      return isLoading;
    }
  };
};
var SWRConfig2 = OBJECT.defineProperty(SWRConfig, "defaultValue", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/ar_EG.js
var ar_EG_default = {
  moneySymbol: "$",
  form: {
    lightFilter: {
      more: "\u0627\u0644\u0645\u0632\u064A\u062F",
      clear: "\u0646\u0638\u0641",
      confirm: "\u062A\u0623\u0643\u064A\u062F",
      itemUnit: "\u0639\u0646\u0627\u0635\u0631"
    }
  },
  tableForm: {
    search: "\u0627\u0628\u062D\u062B",
    reset: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646",
    submit: "\u0627\u0631\u0633\u0627\u0644",
    collapsed: "\u0645\u064F\u0642\u0644\u0635",
    expand: "\u0645\u064F\u0648\u0633\u0639",
    inputPlaceholder: "\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0625\u062F\u062E\u0627\u0644",
    selectPlaceholder: "\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0625\u062E\u062A\u064A\u0627\u0631"
  },
  alert: {
    clear: "\u0646\u0638\u0641",
    selected: "\u0645\u062D\u062F\u062F",
    item: "\u0639\u0646\u0635\u0631"
  },
  pagination: {
    total: {
      range: " ",
      total: "\u0645\u0646",
      item: "\u0639\u0646\u0627\u0635\u0631"
    }
  },
  tableToolBar: {
    leftPin: "\u062B\u0628\u062A \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631",
    rightPin: "\u062B\u0628\u062A \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646",
    noPin: "\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062B\u0628\u064A\u062A",
    leftFixedTitle: "\u0644\u0635\u0642 \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631",
    rightFixedTitle: "\u0644\u0635\u0642 \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646",
    noFixedTitle: "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0625\u0644\u0635\u0627\u0642",
    reset: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646",
    columnDisplay: "\u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629",
    columnSetting: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
    fullScreen: "\u0648\u0636\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0627\u0634\u0629",
    exitFullScreen: "\u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0648\u0636\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0627\u0634\u0629",
    reload: "\u062A\u062D\u062F\u064A\u062B",
    density: "\u0627\u0644\u0643\u062B\u0627\u0641\u0629",
    densityDefault: "\u0627\u0641\u062A\u0631\u0627\u0636\u064A",
    densityLarger: "\u0623\u0643\u0628\u0631",
    densityMiddle: "\u0648\u0633\u0637",
    densitySmall: "\u0645\u062F\u0645\u062C"
  },
  stepsForm: {
    next: "\u0627\u0644\u062A\u0627\u0644\u064A",
    prev: "\u0627\u0644\u0633\u0627\u0628\u0642",
    submit: "\u0623\u0646\u0647\u0649"
  },
  loginForm: {
    submitText: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"
  },
  editableTable: {
    action: {
      save: "\u0623\u0646\u0642\u0630",
      cancel: "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0623\u0645\u0631",
      delete: "\u062D\u0630\u0641",
      add: "\u0625\u0636\u0627\u0641\u0629 \u0635\u0641 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"
    }
  },
  switch: {
    open: "\u0645\u0641\u062A\u0648\u062D",
    close: "\u063A\u0644\u0642"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/ca_ES.js
var ca_ES_default = {
  moneySymbol: "\u20AC",
  form: {
    lightFilter: {
      more: "M\xE9s",
      clear: "Netejar",
      confirm: "Confirmar",
      itemUnit: "Elements"
    }
  },
  tableForm: {
    search: "Cercar",
    reset: "Netejar",
    submit: "Enviar",
    collapsed: "Expandir",
    expand: "Col\xB7lapsar",
    inputPlaceholder: "Introdu\xEFu valor",
    selectPlaceholder: "Seleccioneu valor"
  },
  alert: {
    clear: "Netejar",
    selected: "Seleccionat",
    item: "Article"
  },
  pagination: {
    total: {
      range: " ",
      total: "de",
      item: "articles"
    }
  },
  tableToolBar: {
    leftPin: "Pin a l'esquerra",
    rightPin: "Pin a la dreta",
    noPin: "Sense Pin",
    leftFixedTitle: "Fixat a l'esquerra",
    rightFixedTitle: "Fixat a la dreta",
    noFixedTitle: "Sense fixar",
    reset: "Reiniciar",
    columnDisplay: "Mostrar Columna",
    columnSetting: "Configuraci\xF3",
    fullScreen: "Pantalla Completa",
    exitFullScreen: "Sortir Pantalla Completa",
    reload: "Refrescar",
    density: "Densitat",
    densityDefault: "Per Defecte",
    densityLarger: "Llarg",
    densityMiddle: "Mitj\xE0",
    densitySmall: "Compacte"
  },
  stepsForm: {
    next: "Seg\xFCent",
    prev: "Anterior",
    submit: "Finalizar"
  },
  loginForm: {
    submitText: "Entrar"
  },
  editableTable: {
    action: {
      save: "Guardar",
      cancel: "Cancel\xB7lar",
      delete: "Eliminar",
      add: "afegir una fila de dades"
    }
  },
  switch: {
    open: "obert",
    close: "tancat"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/de_DE.js
var de_DE_default = {
  moneySymbol: "\u20AC",
  form: {
    lightFilter: {
      more: "Mehr",
      clear: "Zur\xFCcksetzen",
      confirm: "Best\xE4tigen",
      itemUnit: "Eintr\xE4ge"
    }
  },
  tableForm: {
    search: "Suchen",
    reset: "Zur\xFCcksetzen",
    submit: "Absenden",
    collapsed: "Zeige mehr",
    expand: "Zeige weniger",
    inputPlaceholder: "Bitte eingeben",
    selectPlaceholder: "Bitte ausw\xE4hlen"
  },
  alert: {
    clear: "Zur\xFCcksetzen",
    selected: "Ausgew\xE4hlt",
    item: "Eintrag"
  },
  pagination: {
    total: {
      range: " ",
      total: "von",
      item: "Eintr\xE4gen"
    }
  },
  tableToolBar: {
    leftPin: "Links anheften",
    rightPin: "Rechts anheften",
    noPin: "Nicht angeheftet",
    leftFixedTitle: "Links fixiert",
    rightFixedTitle: "Rechts fixiert",
    noFixedTitle: "Nicht fixiert",
    reset: "Zur\xFCcksetzen",
    columnDisplay: "Angezeigte Reihen",
    columnSetting: "Einstellungen",
    fullScreen: "Vollbild",
    exitFullScreen: "Vollbild verlassen",
    reload: "Aktualisieren",
    density: "Abstand",
    densityDefault: "Standard",
    densityLarger: "Gr\xF6\xDFer",
    densityMiddle: "Mittel",
    densitySmall: "Kompakt"
  },
  stepsForm: {
    next: "Weiter",
    prev: "Zur\xFCck",
    submit: "Abschlie\xDFen"
  },
  loginForm: {
    submitText: "Anmelden"
  },
  editableTable: {
    action: {
      save: "Retten",
      cancel: "Abbrechen",
      delete: "L\xF6schen",
      add: "Hinzuf\xFCgen einer Datenzeile"
    }
  },
  switch: {
    open: "offen",
    close: "schlie\xDFen"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/en_GB.js
var en_GB_default = {
  moneySymbol: "\xA3",
  form: {
    lightFilter: {
      more: "More",
      clear: "Clear",
      confirm: "Confirm",
      itemUnit: "Items"
    }
  },
  tableForm: {
    search: "Query",
    reset: "Reset",
    submit: "Submit",
    collapsed: "Expand",
    expand: "Collapse",
    inputPlaceholder: "Please enter",
    selectPlaceholder: "Please select"
  },
  alert: {
    clear: "Clear",
    selected: "Selected",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "of",
      item: "items"
    }
  },
  tableToolBar: {
    leftPin: "Pin to left",
    rightPin: "Pin to right",
    noPin: "Unpinned",
    leftFixedTitle: "Fixed the left",
    rightFixedTitle: "Fixed the right",
    noFixedTitle: "Not Fixed",
    reset: "Reset",
    columnDisplay: "Column Display",
    columnSetting: "Settings",
    fullScreen: "Full Screen",
    exitFullScreen: "Exit Full Screen",
    reload: "Refresh",
    density: "Density",
    densityDefault: "Default",
    densityLarger: "Larger",
    densityMiddle: "Middle",
    densitySmall: "Compact"
  },
  stepsForm: {
    next: "Next",
    prev: "Previous",
    submit: "Finish"
  },
  loginForm: {
    submitText: "Login"
  },
  editableTable: {
    action: {
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      add: "add a row of data"
    }
  },
  switch: {
    open: "open",
    close: "close"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/en_US.js
var en_US_default = {
  moneySymbol: "$",
  deleteThisLine: "Delete this line",
  copyThisLine: "Copy this line",
  form: {
    lightFilter: {
      more: "More",
      clear: "Clear",
      confirm: "Confirm",
      itemUnit: "Items"
    }
  },
  tableForm: {
    search: "Query",
    reset: "Reset",
    submit: "Submit",
    collapsed: "Expand",
    expand: "Collapse",
    inputPlaceholder: "Please enter",
    selectPlaceholder: "Please select"
  },
  alert: {
    clear: "Clear",
    selected: "Selected",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "of",
      item: "items"
    }
  },
  tableToolBar: {
    leftPin: "Pin to left",
    rightPin: "Pin to right",
    noPin: "Unpinned",
    leftFixedTitle: "Fixed the left",
    rightFixedTitle: "Fixed the right",
    noFixedTitle: "Not Fixed",
    reset: "Reset",
    columnDisplay: "Column Display",
    columnSetting: "Settings",
    fullScreen: "Full Screen",
    exitFullScreen: "Exit Full Screen",
    reload: "Refresh",
    density: "Density",
    densityDefault: "Default",
    densityLarger: "Larger",
    densityMiddle: "Middle",
    densitySmall: "Compact"
  },
  stepsForm: {
    next: "Next",
    prev: "Previous",
    submit: "Finish"
  },
  loginForm: {
    submitText: "Login"
  },
  editableTable: {
    onlyOneLineEditor: "Only one line can be edited",
    action: {
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      add: "add a row of data"
    }
  },
  switch: {
    open: "open",
    close: "close"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/es_ES.js
var es_ES_default = {
  moneySymbol: "\u20AC",
  form: {
    lightFilter: {
      more: "M\xE1s",
      clear: "Limpiar",
      confirm: "Confirmar",
      itemUnit: "art\xEDculos"
    }
  },
  tableForm: {
    search: "Buscar",
    reset: "Limpiar",
    submit: "Submit",
    collapsed: "Expandir",
    expand: "Colapsar",
    inputPlaceholder: "Ingrese valor",
    selectPlaceholder: "Seleccione valor"
  },
  alert: {
    clear: "Limpiar",
    selected: "Seleccionado",
    item: "Articulo"
  },
  pagination: {
    total: {
      range: " ",
      total: "de",
      item: "art\xEDculos"
    }
  },
  tableToolBar: {
    leftPin: "Pin a la izquierda",
    rightPin: "Pin a la derecha",
    noPin: "Sin Pin",
    leftFixedTitle: "Fijado a la izquierda",
    rightFixedTitle: "Fijado a la derecha",
    noFixedTitle: "Sin Fijar",
    reset: "Reiniciar",
    columnDisplay: "Mostrar Columna",
    columnSetting: "Configuraci\xF3n",
    fullScreen: "Pantalla Completa",
    exitFullScreen: "Salir Pantalla Completa",
    reload: "Refrescar",
    density: "Densidad",
    densityDefault: "Por Defecto",
    densityLarger: "Largo",
    densityMiddle: "Medio",
    densitySmall: "Compacto"
  },
  stepsForm: {
    next: "Siguiente",
    prev: "Anterior",
    submit: "Finalizar"
  },
  loginForm: {
    submitText: "Entrar"
  },
  editableTable: {
    action: {
      save: "Guardar",
      cancel: "Descartar",
      delete: "Borrar",
      add: "a\xF1adir una fila de datos"
    }
  },
  switch: {
    open: "abrir",
    close: "cerrar"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/fa_IR.js
var fa_IR_default = {
  moneySymbol: "\u062A\u0648\u0645\u0627\u0646",
  form: {
    lightFilter: {
      more: "\u0628\u06CC\u0634\u062A\u0631",
      clear: "\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646",
      confirm: "\u062A\u0627\u06CC\u06CC\u062F",
      itemUnit: "\u0645\u0648\u0631\u062F"
    }
  },
  tableForm: {
    search: "\u062C\u0633\u062A\u062C\u0648",
    reset: "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC",
    submit: "\u062A\u0627\u06CC\u06CC\u062F",
    collapsed: "\u0646\u0645\u0627\u06CC\u0634 \u0628\u06CC\u0634\u062A\u0631",
    expand: "\u0646\u0645\u0627\u06CC\u0634 \u06A9\u0645\u062A\u0631",
    inputPlaceholder: "\u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u062F",
    selectPlaceholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
  },
  alert: {
    clear: "\u067E\u0627\u06A9 \u0633\u0627\u0632\u06CC",
    selected: "\u0627\u0646\u062A\u062E\u0627\u0628",
    item: "\u0645\u0648\u0631\u062F"
  },
  pagination: {
    total: {
      range: " ",
      total: "\u0627\u0632",
      item: "\u0645\u0648\u0631\u062F"
    }
  },
  tableToolBar: {
    leftPin: "\u0633\u0646\u062C\u0627\u0642 \u0628\u0647 \u0686\u067E",
    rightPin: "\u0633\u0646\u062C\u0627\u0642 \u0628\u0647 \u0631\u0627\u0633\u062A",
    noPin: "\u0633\u0646\u062C\u0627\u0642 \u0646\u0634\u062F\u0647",
    leftFixedTitle: "\u062B\u0627\u0628\u062A \u0634\u062F\u0647 \u062F\u0631 \u0686\u067E",
    rightFixedTitle: "\u062B\u0627\u0628\u062A \u0634\u062F\u0647 \u062F\u0631 \u0631\u0627\u0633\u062A",
    noFixedTitle: "\u0634\u0646\u0627\u0648\u0631",
    reset: "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC",
    columnDisplay: "\u0646\u0645\u0627\u06CC\u0634 \u0647\u0645\u0647",
    columnSetting: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
    fullScreen: "\u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647",
    exitFullScreen: "\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0627\u0644\u062A \u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647",
    reload: "\u062A\u0627\u0632\u0647 \u0633\u0627\u0632\u06CC",
    density: "\u062A\u0631\u0627\u06A9\u0645",
    densityDefault: "\u067E\u06CC\u0634 \u0641\u0631\u0636",
    densityLarger: "\u0628\u0632\u0631\u06AF",
    densityMiddle: "\u0645\u062A\u0648\u0633\u0637",
    densitySmall: "\u06A9\u0648\u0686\u06A9"
  },
  stepsForm: {
    next: "\u0628\u0639\u062F\u06CC",
    prev: "\u0642\u0628\u0644\u06CC",
    submit: "\u0627\u062A\u0645\u0627\u0645"
  },
  loginForm: {
    submitText: "\u0648\u0631\u0648\u062F"
  },
  editableTable: {
    action: {
      save: "\u0630\u062E\u06CC\u0631\u0647",
      cancel: "\u0644\u063A\u0648",
      delete: "\u062D\u0630\u0641",
      add: "\u06CC\u06A9 \u0631\u062F\u06CC\u0641 \u062F\u0627\u062F\u0647 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F"
    }
  },
  switch: {
    open: "\u0628\u0627\u0632",
    close: "\u0646\u0632\u062F\u06CC\u06A9"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/fr_FR.js
var fr_FR_default = {
  moneySymbol: "\u20AC",
  form: {
    lightFilter: {
      more: "Plus",
      clear: "Effacer",
      confirm: "Confirmer",
      itemUnit: "Items"
    }
  },
  tableForm: {
    search: "Rechercher",
    reset: "R\xE9initialiser",
    submit: "Envoyer",
    collapsed: "Agrandir",
    expand: "R\xE9duire",
    inputPlaceholder: "Entrer une valeur",
    selectPlaceholder: "S\xE9lectionner une valeur"
  },
  alert: {
    clear: "R\xE9initialiser",
    selected: "S\xE9lectionn\xE9",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "sur",
      item: "\xE9l\xE9ments"
    }
  },
  tableToolBar: {
    leftPin: "\xC9pingler \xE0 gauche",
    rightPin: "\xC9pingler \xE0 gauche",
    noPin: "Sans \xE9pingle",
    leftFixedTitle: "Fixer \xE0 gauche",
    rightFixedTitle: "Fixer \xE0 droite",
    noFixedTitle: "Non fix\xE9",
    reset: "R\xE9initialiser",
    columnDisplay: "Affichage colonne",
    columnSetting: "R\xE9glages",
    fullScreen: "Plein \xE9cran",
    exitFullScreen: "Quitter Plein \xE9cran",
    reload: "Rafraichir",
    density: "Densit\xE9",
    densityDefault: "Par d\xE9faut",
    densityLarger: "Larger",
    densityMiddle: "Moyenne",
    densitySmall: "Compacte"
  },
  stepsForm: {
    next: "Suivante",
    prev: "Pr\xE9c\xE9dente",
    submit: "Finaliser"
  },
  loginForm: {
    submitText: "Se connecter"
  },
  editableTable: {
    action: {
      save: "Sauvegarder",
      cancel: "Annuler",
      delete: "Supprimer",
      add: "ajouter une ligne de donn\xE9es"
    }
  },
  switch: {
    open: "ouvert",
    close: "pr\xE8s"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/hr_HR.js
var hr_HR_default = {
  moneySymbol: "kn",
  form: {
    lightFilter: {
      more: "Vi\u0161e",
      clear: "O\u010Disti",
      confirm: "Potvrdi",
      itemUnit: "Stavke"
    }
  },
  tableForm: {
    search: "Pretra\u017Ei",
    reset: "Poni\u0161ti",
    submit: "Potvrdi",
    collapsed: "Ra\u0161iri",
    expand: "Skupi",
    inputPlaceholder: "Unesite",
    selectPlaceholder: "Odaberite"
  },
  alert: {
    clear: "O\u010Disti",
    selected: "Odaberi",
    item: "stavke"
  },
  pagination: {
    total: {
      range: " ",
      total: "od",
      item: "stavke"
    }
  },
  tableToolBar: {
    leftPin: "Prika\u010Di lijevo",
    rightPin: "Prika\u010Di desno",
    noPin: "Bez prika\u010Denja",
    leftFixedTitle: "Fiksiraj lijevo",
    rightFixedTitle: "Fiksiraj desno",
    noFixedTitle: "Bez fiksiranja",
    reset: "Resetiraj",
    columnDisplay: "Prikaz stupaca",
    columnSetting: "Postavke",
    fullScreen: "Puni zaslon",
    exitFullScreen: "Iza\u0111i iz punog zaslona",
    reload: "Ponovno u\u010Ditaj",
    density: "Veli\u010Dina",
    densityDefault: "Zadano",
    densityLarger: "Veliko",
    densityMiddle: "Srednje",
    densitySmall: "Malo"
  },
  stepsForm: {
    next: "Sljede\u0107i",
    prev: "Prethodni",
    submit: "Kraj"
  },
  loginForm: {
    submitText: "Prijava"
  },
  editableTable: {
    action: {
      save: "Spremi",
      cancel: "Odustani",
      delete: "Obri\u0161i",
      add: "dodajte red podataka"
    }
  },
  switch: {
    open: "otvori",
    close: "zatvori"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/id_ID.js
var id_ID_default = {
  moneySymbol: "RP",
  form: {
    lightFilter: {
      more: "Lebih",
      clear: "Hapus",
      confirm: "Konfirmasi",
      itemUnit: "Unit"
    }
  },
  tableForm: {
    search: "Cari",
    reset: "Atur ulang",
    submit: "Kirim",
    collapsed: "Lebih sedikit",
    expand: "Lebih banyak",
    inputPlaceholder: "Masukkan pencarian",
    selectPlaceholder: "Pilih"
  },
  alert: {
    clear: "Hapus",
    selected: "Dipilih",
    item: "Butir"
  },
  pagination: {
    total: {
      range: " ",
      total: "Dari",
      item: "Butir"
    }
  },
  tableToolBar: {
    leftPin: "Pin kiri",
    rightPin: "Pin kanan",
    noPin: "Tidak ada pin",
    leftFixedTitle: "Rata kiri",
    rightFixedTitle: "Rata kanan",
    noFixedTitle: "Tidak tetap",
    reset: "Atur ulang",
    columnDisplay: "Tampilan kolom",
    columnSetting: "Pengaturan",
    fullScreen: "Layar penuh",
    exitFullScreen: "Keluar layar penuh",
    reload: "Atur ulang",
    density: "Kerapatan",
    densityDefault: "Standar",
    densityLarger: "Lebih besar",
    densityMiddle: "Sedang",
    densitySmall: "Rapat"
  },
  stepsForm: {
    next: "Selanjutnya",
    prev: "Sebelumnya",
    submit: "Selesai"
  },
  loginForm: {
    submitText: "Login"
  },
  editableTable: {
    action: {
      save: "simpan",
      cancel: "batal",
      delete: "hapus",
      add: "Tambahkan baris data"
    }
  },
  switch: {
    open: "buka",
    close: "tutup"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/it_IT.js
var it_IT_default = {
  moneySymbol: "\u20AC",
  form: {
    lightFilter: {
      more: "pi\xF9",
      clear: "pulisci",
      confirm: "conferma",
      itemUnit: "elementi"
    }
  },
  tableForm: {
    search: "Filtra",
    reset: "Pulisci",
    submit: "Invia",
    collapsed: "Espandi",
    expand: "Contrai",
    inputPlaceholder: "Digita",
    selectPlaceholder: "Seleziona"
  },
  alert: {
    clear: "Rimuovi",
    selected: "Selezionati",
    item: "elementi"
  },
  pagination: {
    total: {
      range: " ",
      total: "di",
      item: "elementi"
    }
  },
  tableToolBar: {
    leftPin: "Fissa a sinistra",
    rightPin: "Fissa a destra",
    noPin: "Ripristina posizione",
    leftFixedTitle: "Fissato a sinistra",
    rightFixedTitle: "Fissato a destra",
    noFixedTitle: "Non fissato",
    reset: "Ripristina",
    columnDisplay: "Disposizione colonne",
    columnSetting: "Impostazioni",
    fullScreen: "Modalit\xE0 schermo intero",
    exitFullScreen: "Esci da modalit\xE0 schermo intero",
    reload: "Ricarica",
    density: "Grandezza tabella",
    densityDefault: "predefinito",
    densityLarger: "Grande",
    densityMiddle: "Media",
    densitySmall: "Compatta"
  },
  stepsForm: {
    next: "successivo",
    prev: "precedente",
    submit: "finisci"
  },
  loginForm: {
    submitText: "Accedi"
  },
  editableTable: {
    action: {
      save: "salva",
      cancel: "annulla",
      delete: "Delete",
      add: "add a row of data"
    }
  },
  switch: {
    open: "open",
    close: "chiudi"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/ja_JP.js
var ja_JP_default = {
  moneySymbol: "\xA5",
  form: {
    lightFilter: {
      more: "\u3082\u3063\u3068",
      clear: "\u660E\u78BA",
      confirm: "\u78BA\u8A8D",
      itemUnit: "\u9805\u76EE"
    }
  },
  tableForm: {
    search: "\u691C\u7D22",
    reset: "\u30EA\u30BB\u30C3\u30C8",
    submit: "\u63D0\u4EA4",
    collapsed: "\u5C55\u958B",
    expand: "\u53CE\u7D0D",
    inputPlaceholder: "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    selectPlaceholder: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"
  },
  alert: {
    clear: "\u30AF\u30EA\u30A2",
    selected: "\u9078\u629E\u3057\u305F",
    item: "\u9805\u76EE"
  },
  pagination: {
    total: {
      range: "\u8A18\u4E8B",
      total: "/\u5408\u8A08",
      item: " "
    }
  },
  tableToolBar: {
    leftPin: "\u5DE6\u306B\u56FA\u5B9A",
    rightPin: "\u53F3\u306B\u56FA\u5B9A",
    noPin: "\u30AD\u30E3\u30F3\u30BB\u30EB",
    leftFixedTitle: "\u5DE6\u306B\u56FA\u5B9A\u3055\u308C\u305F\u9805\u76EE",
    rightFixedTitle: "\u53F3\u306B\u56FA\u5B9A\u3055\u308C\u305F\u9805\u76EE",
    noFixedTitle: "\u56FA\u5B9A\u3055\u308C\u3066\u306A\u3044\u9805\u76EE",
    reset: "\u30EA\u30BB\u30C3\u30C8",
    columnDisplay: "\u8868\u793A\u5217",
    columnSetting: "\u5217\u8868\u793A\u8A2D\u5B9A",
    fullScreen: "\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3",
    exitFullScreen: "\u7D42\u4E86",
    reload: "\u66F4\u65B0",
    density: "\u884C\u9AD8",
    densityDefault: "\u30C7\u30D5\u30A9\u30EB\u30C8",
    densityLarger: "\u9ED8\u8BA4",
    densityMiddle: "\u4E2D",
    densitySmall: "\u5C0F"
  },
  stepsForm: {
    next: "\u6B21\u306E\u30B9\u30C6\u30C3\u30D7",
    prev: "\u524D",
    submit: "\u9001\u4FE1"
  },
  loginForm: {
    submitText: "\u30ED\u30B0\u30A4\u30F3"
  },
  editableTable: {
    action: {
      save: "\u6551\u3046",
      cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
      delete: "\u524A\u9664",
      add: "1\u884C\u306E\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0\u3057\u307E\u3059"
    }
  },
  switch: {
    open: "\u30AA\u30FC\u30D7\u30F3",
    close: "\u8FD1\u3044"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/ko_KR.js
var ko_KR_default = {
  moneySymbol: "\u20A9",
  form: {
    lightFilter: {
      more: "\uB354\uBCF4\uAE30",
      clear: "\uCDE8\uC18C",
      confirm: "\uD655\uC778",
      itemUnit: "\uAC74\uC218"
    }
  },
  tableForm: {
    search: "\uC870\uD68C",
    reset: "\uCD08\uAE30\uD654",
    submit: "\uC81C\uCD9C",
    collapsed: "\uD655\uC7A5",
    expand: "\uB2EB\uAE30",
    inputPlaceholder: "\uC785\uB825\uD574 \uC8FC\uC138\uC694",
    selectPlaceholder: "\uC120\uD0DD\uD574 \uC8FC\uC138\uC694"
  },
  alert: {
    clear: "\uCDE8\uC18C",
    selected: "\uC120\uD0DD",
    item: "\uAC74"
  },
  pagination: {
    total: {
      range: " ",
      total: "/ \uCD1D",
      item: "\uAC74"
    }
  },
  tableToolBar: {
    leftPin: "\uC67C\uCABD\uC73C\uB85C \uD540",
    rightPin: "\uC624\uB978\uCABD\uC73C\uB85C \uD540",
    noPin: "\uD540 \uC81C\uAC70",
    leftFixedTitle: "\uC67C\uCABD\uC73C\uB85C \uACE0\uC815",
    rightFixedTitle: "\uC624\uB978\uCABD\uC73C\uB85C \uACE0\uC815",
    noFixedTitle: "\uBE44\uACE0\uC815",
    reset: "\uCD08\uAE30\uD654",
    columnDisplay: "\uCEEC\uB7FC \uD45C\uC2DC",
    columnSetting: "\uC124\uC815",
    fullScreen: "\uC804\uCCB4 \uD654\uBA74",
    exitFullScreen: "\uC804\uCCB4 \uD654\uBA74 \uCDE8\uC18C",
    reload: "\uB2E4\uC2DC \uC77D\uAE30",
    density: "\uC5EC\uBC31",
    densityDefault: "\uAE30\uBCF8",
    densityLarger: "\uB9CE\uC740 \uC5EC\uBC31",
    densityMiddle: "\uC911\uAC04 \uC5EC\uBC31",
    densitySmall: "\uC881\uC740 \uC5EC\uBC31"
  },
  stepsForm: {
    next: "\uB2E4\uC74C",
    prev: "\uC774\uC804",
    submit: "\uC885\uB8CC"
  },
  loginForm: {
    submitText: "\uB85C\uADF8\uC778"
  },
  editableTable: {
    action: {
      save: "\uC800\uC7A5",
      cancel: "\uCDE8\uC18C",
      delete: "\uC0AD\uC81C",
      add: "\uB370\uC774\uD130 \uD589 \uCD94\uAC00"
    }
  },
  switch: {
    open: "\uC5F4",
    close: "\uAC00\uAE4C \uC6B4"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/mn_MN.js
var mn_MN_default = {
  moneySymbol: "\u20AE",
  form: {
    lightFilter: {
      more: "\u0418\u043B\u04AF\u04AF",
      clear: "\u0426\u044D\u0432\u044D\u0440\u043B\u044D\u0445",
      confirm: "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u0445",
      itemUnit: "\u041D\u044D\u0433\u0436\u04AF\u04AF\u0434"
    }
  },
  tableForm: {
    search: "\u0425\u0430\u0439\u0445",
    reset: "\u0428\u0438\u043D\u044D\u0447\u043B\u044D\u0445",
    submit: "\u0418\u043B\u0433\u044D\u044D\u0445",
    collapsed: "\u04E8\u0440\u0433\u04E9\u0442\u0433\u04E9\u0445",
    expand: "\u0425\u0443\u0440\u0430\u0430\u0445",
    inputPlaceholder: "\u0423\u0442\u0433\u0430 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443",
    selectPlaceholder: "\u0423\u0442\u0433\u0430 \u0441\u043E\u043D\u0433\u043E\u043D\u043E \u0443\u0443"
  },
  alert: {
    clear: "\u0426\u044D\u0432\u044D\u0440\u043B\u044D\u0445",
    selected: "\u0421\u043E\u043D\u0433\u043E\u0433\u0434\u0441\u043E\u043D",
    item: "\u041D\u044D\u0433\u0436"
  },
  pagination: {
    total: {
      range: " ",
      total: "\u041D\u0438\u0439\u0442",
      item: "\u043C\u04E9\u0440"
    }
  },
  tableToolBar: {
    leftPin: "\u0417\u04AF\u04AF\u043D \u0442\u0438\u0439\u0448 \u0431\u044D\u0445\u043B\u044D\u0445",
    rightPin: "\u0411\u0430\u0440\u0443\u0443\u043D \u0442\u0438\u0439\u0448 \u0431\u044D\u0445\u043B\u044D\u0445",
    noPin: "\u0411\u044D\u0445\u043B\u044D\u0445\u0433\u04AF\u0439",
    leftFixedTitle: "\u0417\u04AF\u04AF\u043D \u0437\u044D\u0440\u044D\u0433\u0446\u04AF\u04AF\u043B\u044D\u0445",
    rightFixedTitle: "\u0411\u0430\u0440\u0443\u0443\u043D \u0437\u044D\u0440\u044D\u0433\u0446\u04AF\u04AF\u043B\u044D\u0445",
    noFixedTitle: "\u0417\u044D\u0440\u044D\u0433\u0446\u04AF\u04AF\u043B\u044D\u0445\u0433\u04AF\u0439",
    reset: "\u0428\u0438\u043D\u044D\u0447\u043B\u044D\u0445",
    columnDisplay: "\u0411\u0430\u0433\u0430\u043D\u0430\u0430\u0440 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445",
    columnSetting: "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E",
    fullScreen: "\u0411\u04AF\u0442\u044D\u043D \u0434\u044D\u043B\u0433\u044D\u0446\u044D\u044D\u0440",
    exitFullScreen: "\u0411\u04AF\u0442\u044D\u043D \u0434\u044D\u043B\u0433\u044D\u0446 \u0446\u0443\u0446\u043B\u0430\u0445",
    reload: "\u0428\u0438\u043D\u044D\u0447\u043B\u044D\u0445",
    density: "\u0425\u044D\u043C\u0436\u044D\u044D",
    densityDefault: "\u0425\u044D\u0432\u0438\u0439\u043D",
    densityLarger: "\u0422\u043E\u043C",
    densityMiddle: "\u0414\u0443\u043D\u0434",
    densitySmall: "\u0416\u0438\u0436\u0438\u0433"
  },
  stepsForm: {
    next: "\u0414\u0430\u0440\u0430\u0430\u0445",
    prev: "\u04E8\u043C\u043D\u04E9\u0445",
    submit: "\u0414\u0443\u0443\u0441\u0433\u0430\u0445"
  },
  loginForm: {
    submitText: "\u041D\u044D\u0432\u0442\u0440\u044D\u0445"
  },
  editableTable: {
    action: {
      save: "\u0425\u0430\u0434\u0433\u0430\u043B\u0430\u0445",
      cancel: "\u0426\u0443\u0446\u043B\u0430\u0445",
      delete: "\u0423\u0441\u0442\u0433\u0430\u0445",
      add: "\u041C\u04E9\u0440 \u043D\u044D\u043C\u044D\u0445"
    }
  },
  switch: {
    open: "\u041D\u044D\u044D\u0445",
    close: "\u0425\u0430\u0430\u0445"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/ms_MY.js
var ms_MY_default = {
  moneySymbol: "RM",
  form: {
    lightFilter: {
      more: "Lebih banyak",
      clear: "Jelas",
      confirm: "Mengesahkan",
      itemUnit: "Item"
    }
  },
  tableForm: {
    search: "Cari",
    reset: "Menetapkan semula",
    submit: "Hantar",
    collapsed: "Kembang",
    expand: "Kuncup",
    inputPlaceholder: "Sila masuk",
    selectPlaceholder: "Sila pilih"
  },
  alert: {
    clear: "Padam",
    selected: "Dipilih",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "daripada",
      item: "item"
    }
  },
  tableToolBar: {
    leftPin: "Pin ke kiri",
    rightPin: "Pin ke kanan",
    noPin: "Tidak pin",
    leftFixedTitle: "Tetap ke kiri",
    rightFixedTitle: "Tetap ke kanan",
    noFixedTitle: "Tidak Tetap",
    reset: "Menetapkan semula",
    columnDisplay: "Lajur",
    columnSetting: "Settings",
    fullScreen: "Full Screen",
    exitFullScreen: "Keluar Full Screen",
    reload: "Muat Semula",
    density: "Densiti",
    densityDefault: "Biasa",
    densityLarger: "Besar",
    densityMiddle: "Tengah",
    densitySmall: "Kecil"
  },
  stepsForm: {
    next: "Seterusnya",
    prev: "Sebelumnya",
    submit: "Selesai"
  },
  loginForm: {
    submitText: "Log Masuk"
  },
  editableTable: {
    action: {
      save: "Simpan",
      cancel: "Membatalkan",
      delete: "Menghapuskan",
      add: "tambah baris data"
    }
  },
  switch: {
    open: "Terbuka",
    close: "Tutup"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/pl_PL.js
var pl_PL_default = {
  moneySymbol: "z\u0142",
  form: {
    lightFilter: {
      more: "Wi\u0119cej",
      clear: "Wyczy\u015B\u0107",
      confirm: "Potwierd\u017A",
      itemUnit: "Ilo\u015B\u0107"
    }
  },
  tableForm: {
    search: "Szukaj",
    reset: "Reset",
    submit: "Zatwierd\u017A",
    collapsed: "Poka\u017C wiecej",
    expand: "Poka\u017C mniej",
    inputPlaceholder: "Prosz\u0119 poda\u0107",
    selectPlaceholder: "Prosz\u0119 wybra\u0107"
  },
  alert: {
    clear: "Wyczy\u015B\u0107",
    selected: "Wybrane",
    item: "Wpis"
  },
  pagination: {
    total: {
      range: " ",
      total: "z",
      item: "Wpis\xF3w"
    }
  },
  tableToolBar: {
    leftPin: "Przypnij do lewej",
    rightPin: "Przypnij do prawej",
    noPin: "Odepnij",
    leftFixedTitle: "Przypi\u0119te do lewej",
    rightFixedTitle: "Przypi\u0119te do prawej",
    noFixedTitle: "Nieprzypi\u0119te",
    reset: "Reset",
    columnDisplay: "Wy\u015Bwietlane wiersze",
    columnSetting: "Ustawienia",
    fullScreen: "Pe\u0142en ekran",
    exitFullScreen: "Zamknij pe\u0142en ekran",
    reload: "Od\u015Bwie\u017C",
    density: "Odst\u0119p",
    densityDefault: "Standard",
    densityLarger: "Wiekszy",
    densityMiddle: "Sredni",
    densitySmall: "Kompaktowy"
  },
  stepsForm: {
    next: "Weiter",
    prev: "Zur\xFCck",
    submit: "Abschlie\xDFen"
  },
  loginForm: {
    submitText: "Zaloguj si\u0119"
  },
  editableTable: {
    action: {
      save: "Zapisa\u0107",
      cancel: "Anuluj",
      delete: "Usun\u0105\u0107",
      add: "dodawanie wiersza danych"
    }
  },
  switch: {
    open: "otwiera\u0107",
    close: "zamyka\u0107"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/pt_BR.js
var pt_BR_default = {
  moneySymbol: "R$",
  form: {
    lightFilter: {
      more: "Mais",
      clear: "Limpar",
      confirm: "Confirmar",
      itemUnit: "Itens"
    }
  },
  tableForm: {
    search: "Filtrar",
    reset: "Limpar",
    submit: "Confirmar",
    collapsed: "Expandir",
    expand: "Colapsar",
    inputPlaceholder: "Por favor insira",
    selectPlaceholder: "Por favor selecione"
  },
  alert: {
    clear: "Limpar",
    selected: "Selecionado(s)",
    item: "Item(s)"
  },
  pagination: {
    total: {
      range: " ",
      total: "de",
      item: "itens"
    }
  },
  tableToolBar: {
    leftPin: "Fixar \xE0 esquerda",
    rightPin: "Fixar \xE0 direita",
    noPin: "Desfixado",
    leftFixedTitle: "Fixado \xE0 esquerda",
    rightFixedTitle: "Fixado \xE0 direita",
    noFixedTitle: "N\xE3o fixado",
    reset: "Limpar",
    columnDisplay: "Mostrar Coluna",
    columnSetting: "Configura\xE7\xF5es",
    fullScreen: "Tela Cheia",
    exitFullScreen: "Sair da Tela Cheia",
    reload: "Atualizar",
    density: "Densidade",
    densityDefault: "Padr\xE3o",
    densityLarger: "Largo",
    densityMiddle: "M\xE9dio",
    densitySmall: "Compacto"
  },
  stepsForm: {
    next: "Pr\xF3ximo",
    prev: "Anterior",
    submit: "Enviar"
  },
  loginForm: {
    submitText: "Entrar"
  },
  editableTable: {
    action: {
      save: "Salvar",
      cancel: "Cancelar",
      delete: "Apagar",
      add: "adicionar uma linha de dados"
    }
  },
  switch: {
    open: "abrir",
    close: "fechar"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/ru_RU.js
var ru_RU_default = {
  moneySymbol: "\u20BD",
  form: {
    lightFilter: {
      more: "\u0415\u0449\u0435",
      clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
      confirm: "\u041E\u041A",
      itemUnit: "\u041F\u043E\u0437\u0438\u0446\u0438\u0438"
    }
  },
  tableForm: {
    search: "\u041D\u0430\u0439\u0442\u0438",
    reset: "\u0421\u0431\u0440\u043E\u0441",
    submit: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
    collapsed: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    expand: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    inputPlaceholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    selectPlaceholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
  },
  alert: {
    clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
    selected: "\u0412\u044B\u0431\u0440\u0430\u043D\u043E",
    item: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
  },
  pagination: {
    total: {
      range: " ",
      total: "\u0438\u0437",
      item: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
    }
  },
  tableToolBar: {
    leftPin: "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043B\u0435\u0432\u0430",
    rightPin: "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u0430",
    noPin: "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
    leftFixedTitle: "\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u043B\u0435\u0432\u0430",
    rightFixedTitle: "\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u043F\u0440\u0430\u0432\u0430",
    noFixedTitle: "\u041D\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E",
    reset: "\u0421\u0431\u0440\u043E\u0441",
    columnDisplay: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",
    columnSetting: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    fullScreen: "\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",
    exitFullScreen: "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430",
    reload: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
    density: "\u0420\u0430\u0437\u043C\u0435\u0440",
    densityDefault: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
    densityLarger: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439",
    densityMiddle: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439",
    densitySmall: "\u0421\u0436\u0430\u0442\u044B\u0439"
  },
  stepsForm: {
    next: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439",
    prev: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439",
    submit: "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"
  },
  loginForm: {
    submitText: "\u0412\u0445\u043E\u0434"
  },
  editableTable: {
    action: {
      save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
      delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      add: "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u044F\u0434 \u0434\u0430\u043D\u043D\u044B\u0445"
    }
  },
  switch: {
    open: "\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442 \u043C\u0438\u0440\u0430 \u043F\u043E \u0442\u0435\u043D\u043D\u0438\u0441\u0443",
    close: "\u041F\u043E \u0430\u0434\u0440\u0435\u0441\u0443:"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/sr_RS.js
var sr_RS_default = {
  moneySymbol: "RSD",
  form: {
    lightFilter: {
      more: "Vi\u0161e",
      clear: "O\u010Disti",
      confirm: "Potvrdi",
      itemUnit: "Stavke"
    }
  },
  tableForm: {
    search: "Prona\u0111i",
    reset: "Resetuj",
    submit: "Po\u0161alji",
    collapsed: "Pro\u0161iri",
    expand: "Skupi",
    inputPlaceholder: "Molimo unesite",
    selectPlaceholder: "Molimo odaberite"
  },
  alert: {
    clear: "O\u010Disti",
    selected: "Odabrano",
    item: "Stavka"
  },
  pagination: {
    total: {
      range: " ",
      total: "od",
      item: "stavki"
    }
  },
  tableToolBar: {
    leftPin: "Zaka\u010Di levo",
    rightPin: "Zaka\u010Di desno",
    noPin: "Nije zaka\u010Deno",
    leftFixedTitle: "Fiksirano levo",
    rightFixedTitle: "Fiksirano desno",
    noFixedTitle: "Nije fiksirano",
    reset: "Resetuj",
    columnDisplay: "Prikaz kolona",
    columnSetting: "Pode\u0161avanja",
    fullScreen: "Pun ekran",
    exitFullScreen: "Zatvori pun ekran",
    reload: "Osve\u017Ei",
    density: "Veli\u010Dina",
    densityDefault: "Podrazumevana",
    densityLarger: "Ve\u0107a",
    densityMiddle: "Srednja",
    densitySmall: "Kompaktna"
  },
  stepsForm: {
    next: "Dalje",
    prev: "Nazad",
    submit: "Gotovo"
  },
  loginForm: {
    submitText: "Prijavi se"
  },
  editableTable: {
    action: {
      save: "Sa\u010Duvaj",
      cancel: "Poni\u0161ti",
      delete: "Obri\u0161i",
      add: "dodajte red podataka"
    }
  },
  switch: {
    open: "\u041E\u0442\u0432\u043E\u0440\u0438\u0442\u0435",
    close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438\u0442\u0435"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/tr_TR.js
var tr_TR_default = {
  moneySymbol: "\u20BA",
  form: {
    lightFilter: {
      more: "Daha Fazla",
      clear: "Temizle",
      confirm: "Onayla",
      itemUnit: "\xD6\u011Feler"
    }
  },
  tableForm: {
    search: "Filtrele",
    reset: "S\u0131f\u0131rla",
    submit: "G\xF6nder",
    collapsed: "Daha fazla",
    expand: "Daha az",
    inputPlaceholder: "Filtrelemek i\xE7in bir de\u011Fer girin",
    selectPlaceholder: "Filtrelemek i\xE7in bir de\u011Fer se\xE7in"
  },
  alert: {
    clear: "Temizle",
    selected: "Se\xE7ili",
    item: "\xD6\u011Fe"
  },
  pagination: {
    total: {
      range: " ",
      total: "Toplam",
      item: "\xD6\u011Fe"
    }
  },
  tableToolBar: {
    leftPin: "Sola sabitle",
    rightPin: "Sa\u011Fa sabitle",
    noPin: "Sabitlemeyi kald\u0131r",
    leftFixedTitle: "Sola sabitlendi",
    rightFixedTitle: "Sa\u011Fa sabitlendi",
    noFixedTitle: "Sabitlenmedi",
    reset: "S\u0131f\u0131rla",
    columnDisplay: "Kolon G\xF6r\xFCn\xFCm\xFC",
    columnSetting: "Ayarlar",
    fullScreen: "Tam Ekran",
    exitFullScreen: "Tam Ekrandan \xC7\u0131k",
    reload: "Yenile",
    density: "Kal\u0131nl\u0131k",
    densityDefault: "Varsay\u0131lan",
    densityLarger: "B\xFCy\xFCk",
    densityMiddle: "Orta",
    densitySmall: "K\xFC\xE7\xFCk"
  },
  stepsForm: {
    next: "S\u0131radaki",
    prev: "\xD6nceki",
    submit: "G\xF6nder"
  },
  loginForm: {
    submitText: "Giri\u015F Yap"
  },
  editableTable: {
    action: {
      save: "Kaydet",
      cancel: "Vazge\xE7",
      delete: "Sil",
      add: "foegje in rige gegevens ta"
    }
  },
  switch: {
    open: "a\xE7\u0131k",
    close: "kapatmak"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/vi_VN.js
var vi_VN_default = {
  moneySymbol: "\u20AB",
  form: {
    lightFilter: {
      more: "Nhi\u1EC1u h\u01A1n",
      clear: "Trong",
      confirm: "X\xE1c nh\u1EADn",
      itemUnit: "M\u1EE5c"
    }
  },
  tableForm: {
    search: "T\xECm ki\u1EBFm",
    reset: "L\xE0m l\u1EA1i",
    submit: "G\u1EEDi \u0111i",
    collapsed: "M\u1EDF r\u1ED9ng",
    expand: "Thu g\u1ECDn",
    inputPlaceholder: "nh\u1EADp d\u1EEF li\u1EC7u",
    selectPlaceholder: "Vui l\xF2ng ch\u1ECDn"
  },
  alert: {
    clear: "X\xF3a",
    selected: "\u0111\xE3 ch\u1ECDn",
    item: "m\u1EE5c"
  },
  pagination: {
    total: {
      range: " ",
      total: "tr\xEAn",
      item: "m\u1EB7t h\xE0ng"
    }
  },
  tableToolBar: {
    leftPin: "Ghim tr\xE1i",
    rightPin: "Ghim ph\u1EA3i",
    noPin: "B\u1ECF ghim",
    leftFixedTitle: "C\u1ED1 \u0111\u1ECBnh tr\xE1i",
    rightFixedTitle: "C\u1ED1 \u0111\u1ECBnh ph\u1EA3i",
    noFixedTitle: "Ch\u01B0a c\u1ED1 \u0111\u1ECBnh",
    reset: "L\xE0m l\u1EA1i",
    columnDisplay: "C\u1ED9t hi\u1EC3n th\u1ECB",
    columnSetting: "C\u1EA5u h\xECnh",
    fullScreen: "Ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh",
    exitFullScreen: "Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh",
    reload: "L\xE0m m\u1EDBi",
    density: "M\u1EADt \u0111\u1ED9 hi\u1EC3n th\u1ECB",
    densityDefault: "M\u1EB7c \u0111\u1ECBnh",
    densityLarger: "M\u1EB7c \u0111\u1ECBnh",
    densityMiddle: "Trung b\xECnh",
    densitySmall: "Ch\u1EADt"
  },
  stepsForm: {
    next: "Sau",
    prev: "Tr\u01B0\u1EDBc",
    submit: "K\u1EBFt th\xFAc"
  },
  loginForm: {
    submitText: "\u0110\u0103ng nh\u1EADp"
  },
  editableTable: {
    action: {
      save: "C\u1EE9u",
      cancel: "H\u1EE7y",
      delete: "X\xF3a",
      add: "th\xEAm m\u1ED9t h\xE0ng d\u1EEF li\u1EC7u"
    }
  },
  switch: {
    open: "m\u1EDF",
    close: "\u0111\xF3ng"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/zh_CN.js
var zh_CN_default7 = {
  moneySymbol: "\uFFE5",
  deleteThisLine: "\u5220\u9664\u6B64\u884C",
  copyThisLine: "\u590D\u5236\u6B64\u884C",
  form: {
    lightFilter: {
      more: "\u66F4\u591A\u7B5B\u9009",
      clear: "\u6E05\u9664",
      confirm: "\u786E\u8BA4",
      itemUnit: "\u9879"
    }
  },
  tableForm: {
    search: "\u67E5\u8BE2",
    reset: "\u91CD\u7F6E",
    submit: "\u63D0\u4EA4",
    collapsed: "\u5C55\u5F00",
    expand: "\u6536\u8D77",
    inputPlaceholder: "\u8BF7\u8F93\u5165",
    selectPlaceholder: "\u8BF7\u9009\u62E9"
  },
  alert: {
    clear: "\u53D6\u6D88\u9009\u62E9",
    selected: "\u5DF2\u9009\u62E9",
    item: "\u9879"
  },
  pagination: {
    total: {
      range: "\u7B2C",
      total: "\u6761/\u603B\u5171",
      item: "\u6761"
    }
  },
  tableToolBar: {
    leftPin: "\u56FA\u5B9A\u5728\u5217\u9996",
    rightPin: "\u56FA\u5B9A\u5728\u5217\u5C3E",
    noPin: "\u4E0D\u56FA\u5B9A",
    leftFixedTitle: "\u56FA\u5B9A\u5728\u5DE6\u4FA7",
    rightFixedTitle: "\u56FA\u5B9A\u5728\u53F3\u4FA7",
    noFixedTitle: "\u4E0D\u56FA\u5B9A",
    reset: "\u91CD\u7F6E",
    columnDisplay: "\u5217\u5C55\u793A",
    columnSetting: "\u5217\u8BBE\u7F6E",
    fullScreen: "\u5168\u5C4F",
    exitFullScreen: "\u9000\u51FA\u5168\u5C4F",
    reload: "\u5237\u65B0",
    density: "\u5BC6\u5EA6",
    densityDefault: "\u6B63\u5E38",
    densityLarger: "\u9ED8\u8BA4",
    densityMiddle: "\u4E2D\u7B49",
    densitySmall: "\u7D27\u51D1"
  },
  stepsForm: {
    next: "\u4E0B\u4E00\u6B65",
    prev: "\u4E0A\u4E00\u6B65",
    submit: "\u63D0\u4EA4"
  },
  loginForm: {
    submitText: "\u767B\u5F55"
  },
  editableTable: {
    onlyOneLineEditor: "\u53EA\u80FD\u540C\u65F6\u7F16\u8F91\u4E00\u884C",
    action: {
      save: "\u4FDD\u5B58",
      cancel: "\u53D6\u6D88",
      delete: "\u5220\u9664",
      add: "\u6DFB\u52A0\u4E00\u884C\u6570\u636E"
    }
  },
  switch: {
    open: "\u6253\u5F00",
    close: "\u5173\u95ED"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/locale/zh_TW.js
var zh_TW_default = {
  moneySymbol: "NT$",
  deleteThisLine: "\u522A\u9664\u6B64\u884C",
  copyThisLine: "\u8907\u88FD\u6B64\u884C",
  form: {
    lightFilter: {
      more: "\u66F4\u591A\u7BE9\u9078",
      clear: "\u6E05\u9664",
      confirm: "\u78BA\u8A8D",
      itemUnit: "\u9805"
    }
  },
  tableForm: {
    search: "\u67E5\u8A62",
    reset: "\u91CD\u7F6E",
    submit: "\u63D0\u4EA4",
    collapsed: "\u5C55\u958B",
    expand: "\u6536\u8D77",
    inputPlaceholder: "\u8ACB\u8F38\u5165",
    selectPlaceholder: "\u8ACB\u9078\u64C7"
  },
  alert: {
    clear: "\u53D6\u6D88\u9078\u64C7",
    selected: "\u5DF2\u9078\u64C7",
    item: "\u9805"
  },
  pagination: {
    total: {
      range: "\u7B2C",
      total: "\u689D/\u7E3D\u5171",
      item: "\u689D"
    }
  },
  tableToolBar: {
    leftPin: "\u56FA\u5B9A\u5230\u5DE6\u908A",
    rightPin: "\u56FA\u5B9A\u5230\u53F3\u908A",
    noPin: "\u4E0D\u56FA\u5B9A",
    leftFixedTitle: "\u56FA\u5B9A\u5728\u5DE6\u5074",
    rightFixedTitle: "\u56FA\u5B9A\u5728\u53F3\u5074",
    noFixedTitle: "\u4E0D\u56FA\u5B9A",
    reset: "\u91CD\u7F6E",
    columnDisplay: "\u5217\u5C55\u793A",
    columnSetting: "\u5217\u8A2D\u7F6E",
    fullScreen: "\u5168\u5C4F",
    exitFullScreen: "\u9000\u51FA\u5168\u5C4F",
    reload: "\u5237\u65B0",
    density: "\u5BC6\u5EA6",
    densityDefault: "\u6B63\u5E38",
    densityLarger: "\u9ED8\u8A8D",
    densityMiddle: "\u4E2D\u7B49",
    densitySmall: "\u7DCA\u6E4A"
  },
  stepsForm: {
    next: "\u4E0B\u4E00\u6B65",
    prev: "\u4E0A\u4E00\u6B65",
    submit: "\u5B8C\u6210"
  },
  loginForm: {
    submitText: "\u767B\u5165"
  },
  editableTable: {
    onlyOneLineEditor: "\u53EA\u80FD\u540C\u6642\u7DE8\u8F2F\u4E00\u884C",
    action: {
      save: "\u4FDD\u5B58",
      cancel: "\u53D6\u6D88",
      delete: "\u522A\u9664",
      add: "\u65B0\u589E\u4E00\u884C\u8CC7\u6599"
    }
  },
  switch: {
    open: "\u6253\u958B",
    close: "\u95DC\u9589"
  }
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/useStyle/index.js
init_public_api();
import { useContext as useContext2 } from "react";

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/useStyle/token.js
var token_exports = {};
__export(token_exports, {
  compactAlgorithm: () => compactAlgorithm,
  darkAlgorithm: () => darkAlgorithm,
  defaultAlgorithm: () => defaultAlgorithm,
  defaultToken: () => defaultToken,
  emptyTheme: () => emptyTheme,
  hashCode: () => hashCode,
  token: () => token,
  useToken: () => useToken
});
var _theme$defaultAlgorit;
var defaultToken = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911",
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff7875",
  colorInfo: "#1677ff",
  colorTextBase: "#000",
  colorBgBase: "#fff",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  fontSize: 14,
  lineWidth: 1,
  lineType: "solid",
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInQuint: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  borderRadius: 4,
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  controlHeight: 32,
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  opacityImage: 1,
  wireframe: false,
  "blue-1": "#e6f4ff",
  "blue-2": "#bae0ff",
  "blue-3": "#91caff",
  "blue-4": "#69b1ff",
  "blue-5": "#4096ff",
  "blue-6": "#1677ff",
  "blue-7": "#0958d9",
  "blue-8": "#003eb3",
  "blue-9": "#002c8c",
  "blue-10": "#001d66",
  "purple-1": "#f9f0ff",
  "purple-2": "#efdbff",
  "purple-3": "#d3adf7",
  "purple-4": "#b37feb",
  "purple-5": "#9254de",
  "purple-6": "#722ed1",
  "purple-7": "#531dab",
  "purple-8": "#391085",
  "purple-9": "#22075e",
  "purple-10": "#120338",
  "cyan-1": "#e6fffb",
  "cyan-2": "#b5f5ec",
  "cyan-3": "#87e8de",
  "cyan-4": "#5cdbd3",
  "cyan-5": "#36cfc9",
  "cyan-6": "#13c2c2",
  "cyan-7": "#08979c",
  "cyan-8": "#006d75",
  "cyan-9": "#00474f",
  "cyan-10": "#002329",
  "green-1": "#f6ffed",
  "green-2": "#d9f7be",
  "green-3": "#b7eb8f",
  "green-4": "#95de64",
  "green-5": "#73d13d",
  "green-6": "#52c41a",
  "green-7": "#389e0d",
  "green-8": "#237804",
  "green-9": "#135200",
  "green-10": "#092b00",
  "magenta-1": "#fff0f6",
  "magenta-2": "#ffd6e7",
  "magenta-3": "#ffadd2",
  "magenta-4": "#ff85c0",
  "magenta-5": "#f759ab",
  "magenta-6": "#eb2f96",
  "magenta-7": "#c41d7f",
  "magenta-8": "#9e1068",
  "magenta-9": "#780650",
  "magenta-10": "#520339",
  "pink-1": "#fff0f6",
  "pink-2": "#ffd6e7",
  "pink-3": "#ffadd2",
  "pink-4": "#ff85c0",
  "pink-5": "#f759ab",
  "pink-6": "#eb2f96",
  "pink-7": "#c41d7f",
  "pink-8": "#9e1068",
  "pink-9": "#780650",
  "pink-10": "#520339",
  "red-1": "#fff1f0",
  "red-2": "#ffccc7",
  "red-3": "#ffa39e",
  "red-4": "#ff7875",
  "red-5": "#ff4d4f",
  "red-6": "#f5222d",
  "red-7": "#cf1322",
  "red-8": "#a8071a",
  "red-9": "#820014",
  "red-10": "#5c0011",
  "orange-1": "#fff7e6",
  "orange-2": "#ffe7ba",
  "orange-3": "#ffd591",
  "orange-4": "#ffc069",
  "orange-5": "#ffa940",
  "orange-6": "#fa8c16",
  "orange-7": "#d46b08",
  "orange-8": "#ad4e00",
  "orange-9": "#873800",
  "orange-10": "#612500",
  "yellow-1": "#feffe6",
  "yellow-2": "#ffffb8",
  "yellow-3": "#fffb8f",
  "yellow-4": "#fff566",
  "yellow-5": "#ffec3d",
  "yellow-6": "#fadb14",
  "yellow-7": "#d4b106",
  "yellow-8": "#ad8b00",
  "yellow-9": "#876800",
  "yellow-10": "#614700",
  "volcano-1": "#fff2e8",
  "volcano-2": "#ffd8bf",
  "volcano-3": "#ffbb96",
  "volcano-4": "#ff9c6e",
  "volcano-5": "#ff7a45",
  "volcano-6": "#fa541c",
  "volcano-7": "#d4380d",
  "volcano-8": "#ad2102",
  "volcano-9": "#871400",
  "volcano-10": "#610b00",
  "geekblue-1": "#f0f5ff",
  "geekblue-2": "#d6e4ff",
  "geekblue-3": "#adc6ff",
  "geekblue-4": "#85a5ff",
  "geekblue-5": "#597ef7",
  "geekblue-6": "#2f54eb",
  "geekblue-7": "#1d39c4",
  "geekblue-8": "#10239e",
  "geekblue-9": "#061178",
  "geekblue-10": "#030852",
  "gold-1": "#fffbe6",
  "gold-2": "#fff1b8",
  "gold-3": "#ffe58f",
  "gold-4": "#ffd666",
  "gold-5": "#ffc53d",
  "gold-6": "#faad14",
  "gold-7": "#d48806",
  "gold-8": "#ad6800",
  "gold-9": "#874d00",
  "gold-10": "#613400",
  "lime-1": "#fcffe6",
  "lime-2": "#f4ffb8",
  "lime-3": "#eaff8f",
  "lime-4": "#d3f261",
  "lime-5": "#bae637",
  "lime-6": "#a0d911",
  "lime-7": "#7cb305",
  "lime-8": "#5b8c00",
  "lime-9": "#3f6600",
  "lime-10": "#254000",
  colorText: "rgba(0, 0, 0, 0.88)",
  colorTextSecondary: "rgba(0, 0, 0, 0.65)",
  colorTextTertiary: "rgba(0, 0, 0, 0.45)",
  colorTextQuaternary: "rgba(0, 0, 0, 0.25)",
  colorFill: "rgba(0, 0, 0, 0.15)",
  colorFillSecondary: "rgba(0, 0, 0, 0.06)",
  colorFillTertiary: "rgba(0, 0, 0, 0.04)",
  colorFillQuaternary: "rgba(0, 0, 0, 0.02)",
  colorBgLayout: "#f5f5f5",
  colorBgContainer: "#ffffff",
  colorBgElevated: "#ffffff",
  colorBgSpotlight: "rgba(0, 0, 0, 0.85)",
  colorBorder: "#d9d9d9",
  colorBorderSecondary: "#f0f0f0",
  colorPrimaryBg: "#e6f4ff",
  colorPrimaryBgHover: "#bae0ff",
  colorPrimaryBorder: "#91caff",
  colorPrimaryBorderHover: "#69b1ff",
  colorPrimaryHover: "#4096ff",
  colorPrimaryActive: "#0958d9",
  colorPrimaryTextHover: "#4096ff",
  colorPrimaryText: "#1677ff",
  colorPrimaryTextActive: "#0958d9",
  colorSuccessBg: "#f6ffed",
  colorSuccessBgHover: "#d9f7be",
  colorSuccessBorder: "#b7eb8f",
  colorSuccessBorderHover: "#95de64",
  colorSuccessHover: "#95de64",
  colorSuccessActive: "#389e0d",
  colorSuccessTextHover: "#73d13d",
  colorSuccessText: "#52c41a",
  colorSuccessTextActive: "#389e0d",
  colorErrorBg: "#fff2f0",
  colorErrorBgHover: "#fff1f0",
  colorErrorBorder: "#ffccc7",
  colorErrorBorderHover: "#ffa39e",
  colorErrorHover: "#ffa39e",
  colorErrorActive: "#d9363e",
  colorErrorTextHover: "#ff7875",
  colorErrorText: "#ff4d4f",
  colorErrorTextActive: "#d9363e",
  colorWarningBg: "#fffbe6",
  colorWarningBgHover: "#fff1b8",
  colorWarningBorder: "#ffe58f",
  colorWarningBorderHover: "#ffd666",
  colorWarningHover: "#ffd666",
  colorWarningActive: "#d48806",
  colorWarningTextHover: "#ffc53d",
  colorWarningText: "#faad14",
  colorWarningTextActive: "#d48806",
  colorInfoBg: "#e6f4ff",
  colorInfoBgHover: "#bae0ff",
  colorInfoBorder: "#91caff",
  colorInfoBorderHover: "#69b1ff",
  colorInfoHover: "#69b1ff",
  colorInfoActive: "#0958d9",
  colorInfoTextHover: "#4096ff",
  colorInfoText: "#1677ff",
  colorInfoTextActive: "#0958d9",
  colorBgMask: "rgba(0, 0, 0, 0.45)",
  colorWhite: "#fff",
  sizeXXL: 48,
  sizeXL: 32,
  sizeLG: 24,
  sizeMD: 20,
  sizeMS: 16,
  size: 16,
  sizeSM: 12,
  sizeXS: 8,
  sizeXXS: 4,
  controlHeightSM: 24,
  controlHeightXS: 16,
  controlHeightLG: 40,
  motionDurationFast: "0.1s",
  motionDurationMid: "0.2s",
  motionDurationSlow: "0.3s",
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    30,
    38,
    46,
    56,
    68
  ],
  lineHeights: [
    1.6666666666666667,
    1.5714285714285714,
    1.5,
    1.4,
    1.3333333333333333,
    1.2666666666666666,
    1.2105263157894737,
    1.173913043478261,
    1.1428571428571428,
    1.1176470588235294
  ],
  lineWidthBold: 2,
  borderRadiusXS: 1,
  borderRadiusSM: 4,
  borderRadiusLG: 8,
  borderRadiusOuter: 4,
  colorLink: "#1677ff",
  colorLinkHover: "#69b1ff",
  colorLinkActive: "#0958d9",
  colorFillContent: "rgba(0, 0, 0, 0.06)",
  colorFillContentHover: "rgba(0, 0, 0, 0.15)",
  colorFillAlter: "rgba(0, 0, 0, 0.02)",
  colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
  colorBorderBg: "#ffffff",
  colorSplit: "rgba(5, 5, 5, 0.06)",
  colorTextPlaceholder: "rgba(0, 0, 0, 0.25)",
  colorTextDisabled: "rgba(0, 0, 0, 0.25)",
  colorTextHeading: "rgba(0, 0, 0, 0.88)",
  colorTextLabel: "rgba(0, 0, 0, 0.65)",
  colorTextDescription: "rgba(0, 0, 0, 0.45)",
  colorTextLightSolid: "#fff",
  colorHighlight: "#ff7875",
  colorBgTextHover: "rgba(0, 0, 0, 0.06)",
  colorBgTextActive: "rgba(0, 0, 0, 0.15)",
  colorIcon: "rgba(0, 0, 0, 0.45)",
  colorIconHover: "rgba(0, 0, 0, 0.88)",
  colorErrorOutline: "rgba(255, 38, 5, 0.06)",
  colorWarningOutline: "rgba(255, 215, 5, 0.1)",
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  fontSizeIcon: 12,
  lineHeight: 1.5714285714285714,
  lineHeightLG: 1.5,
  lineHeightSM: 1.6666666666666667,
  lineHeightHeading1: 1.2105263157894737,
  lineHeightHeading2: 1.2666666666666666,
  lineHeightHeading3: 1.3333333333333333,
  lineHeightHeading4: 1.4,
  lineHeightHeading5: 1.5,
  controlOutlineWidth: 2,
  controlInteractiveSize: 16,
  controlItemBgHover: "rgba(0, 0, 0, 0.04)",
  controlItemBgActive: "#e6f4ff",
  controlItemBgActiveHover: "#bae0ff",
  controlItemBgActiveDisabled: "rgba(0, 0, 0, 0.15)",
  controlTmpOutline: "rgba(0, 0, 0, 0.02)",
  controlOutline: "rgba(5, 145, 255, 0.1)",
  fontWeightStrong: 600,
  opacityLoading: 0.65,
  linkDecoration: "none",
  linkHoverDecoration: "none",
  linkFocusDecoration: "none",
  controlPaddingHorizontal: 12,
  controlPaddingHorizontalSM: 8,
  paddingXXS: 4,
  paddingXS: 8,
  paddingSM: 12,
  padding: 16,
  paddingMD: 20,
  paddingLG: 24,
  paddingXL: 32,
  paddingContentHorizontalLG: 24,
  paddingContentVerticalLG: 16,
  paddingContentHorizontal: 16,
  paddingContentVertical: 12,
  paddingContentHorizontalSM: 16,
  paddingContentVerticalSM: 8,
  marginXXS: 4,
  marginXS: 8,
  marginSM: 12,
  margin: 16,
  marginMD: 20,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)",
  boxShadowSecondary: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  screenXS: 480,
  screenXSMin: 480,
  screenXSMax: 479,
  screenSM: 576,
  screenSMMin: 576,
  screenSMMax: 575,
  screenMD: 768,
  screenMDMin: 768,
  screenMDMax: 767,
  screenLG: 992,
  screenLGMin: 992,
  screenLGMax: 991,
  screenXL: 1200,
  screenXLMin: 1200,
  screenXLMax: 1199,
  screenXXL: 1600,
  screenXXLMin: 1600,
  screenXXLMax: 1599,
  boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
  boxShadowCard: "0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)",
  boxShadowDrawerRight: "-6px 0 16px 0 rgba(0, 0, 0, 0.08),-3px 0 6px -4px rgba(0, 0, 0, 0.12),-9px 0 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerLeft: "6px 0 16px 0 rgba(0, 0, 0, 0.08),3px 0 6px -4px rgba(0, 0, 0, 0.12),9px 0 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerUp: "0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowDrawerDown: "0 -6px 16px 0 rgba(0, 0, 0, 0.08),0 -3px 6px -4px rgba(0, 0, 0, 0.12),0 -9px 28px 8px rgba(0, 0, 0, 0.05)",
  boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
  boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
  _tokenKey: "19w80ff",
  _hashId: "css-dev-only-do-not-override-i2zu9q"
};
var hashCode = function hashCode2(str) {
  var seed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  var h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
var emptyTheme = createTheme(function(token2) {
  return token2;
});
var token = {
  theme: emptyTheme,
  token: _objectSpread2(_objectSpread2({}, defaultToken), theme_default === null || theme_default === void 0 ? void 0 : (_theme$defaultAlgorit = theme_default.defaultAlgorithm) === null || _theme$defaultAlgorit === void 0 ? void 0 : _theme$defaultAlgorit.call(theme_default, theme_default === null || theme_default === void 0 ? void 0 : theme_default.defaultSeed)),
  hashId: "pro-".concat(hashCode(JSON.stringify(defaultToken)))
};
var useToken = function useToken2() {
  return token;
};
var darkAlgorithm = function darkAlgorithm2() {
  var _theme$defaultAlgorit2;
  return _objectSpread2(_objectSpread2({}, defaultToken), theme_default === null || theme_default === void 0 ? void 0 : (_theme$defaultAlgorit2 = theme_default.defaultAlgorithm) === null || _theme$defaultAlgorit2 === void 0 ? void 0 : _theme$defaultAlgorit2.call(theme_default, theme_default === null || theme_default === void 0 ? void 0 : theme_default.defaultSeed));
};
var defaultAlgorithm = function defaultAlgorithm2() {
  var _theme$defaultAlgorit3;
  return _objectSpread2(_objectSpread2({}, defaultToken), theme_default === null || theme_default === void 0 ? void 0 : (_theme$defaultAlgorit3 = theme_default.defaultAlgorithm) === null || _theme$defaultAlgorit3 === void 0 ? void 0 : _theme$defaultAlgorit3.call(theme_default, theme_default === null || theme_default === void 0 ? void 0 : theme_default.defaultSeed));
};
var compactAlgorithm = function compactAlgorithm2() {
  var _theme$defaultAlgorit4;
  return _objectSpread2(_objectSpread2({}, defaultToken), theme_default === null || theme_default === void 0 ? void 0 : (_theme$defaultAlgorit4 = theme_default.defaultAlgorithm) === null || _theme$defaultAlgorit4 === void 0 ? void 0 : _theme$defaultAlgorit4.call(theme_default, theme_default === null || theme_default === void 0 ? void 0 : theme_default.defaultSeed));
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/useStyle/index.js
var setAlpha = function setAlpha2(baseColor, alpha) {
  return new TinyColor(baseColor).setAlpha(alpha).toRgbString();
};
var genTheme = function genTheme2() {
  if (typeof theme_default === "undefined" || !theme_default)
    return token_exports;
  return theme_default;
};
var proTheme = genTheme();
var useToken3 = proTheme.useToken;
var resetComponent = function resetComponent2(token2) {
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: token2.colorText,
    fontSize: token2.fontSize,
    lineHeight: token2.lineHeight,
    listStyle: "none"
  };
};
function useStyle(componentName, styleFn) {
  var _useContext = useContext2(ProProvider), _useContext$token = _useContext.token, token2 = _useContext$token === void 0 ? {} : _useContext$token, _useContext$hashId = _useContext.hashId, hashId = _useContext$hashId === void 0 ? "" : _useContext$hashId, theme = _useContext.theme;
  var _useContext2 = useContext2(config_provider_default.ConfigContext), getPrefixCls = _useContext2.getPrefixCls;
  token2.antCls = ".".concat(getPrefixCls());
  return {
    wrapSSR: useStyleRegister({
      theme,
      token: token2,
      hashId,
      path: [
        componentName
      ]
    }, function() {
      return styleFn(token2);
    }),
    hashId
  };
}

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/typing/layoutToken.js
var getLayoutDesignToken = function getLayoutDesignToken2(designTokens, antdToken) {
  var _finalDesignTokens$si, _finalDesignTokens$pa, _finalDesignTokens$pa2;
  var finalDesignTokens = _objectSpread2({}, designTokens);
  return _objectSpread2(_objectSpread2({
    bgLayout: "linear-gradient(".concat(antdToken.colorBgContainer, ", ").concat(antdToken.colorBgLayout, " 28%)"),
    colorTextAppListIcon: antdToken.colorTextSecondary,
    appListIconHoverBgColor: finalDesignTokens === null || finalDesignTokens === void 0 ? void 0 : (_finalDesignTokens$si = finalDesignTokens.sider) === null || _finalDesignTokens$si === void 0 ? void 0 : _finalDesignTokens$si.colorBgMenuItemSelected,
    colorBgAppListIconHover: setAlpha(antdToken.colorTextBase, 0.04),
    colorTextAppListIconHover: antdToken.colorTextBase
  }, finalDesignTokens), {}, {
    header: _objectSpread2({
      colorBgHeader: setAlpha(antdToken.colorBgElevated, 0.6),
      colorHeaderTitle: antdToken.colorText,
      colorBgMenuItemHover: setAlpha(antdToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: "transparent",
      colorTextMenuSelected: setAlpha(antdToken.colorTextBase, 0.95),
      colorBgRightActionsItemHover: setAlpha(antdToken.colorTextBase, 0.03),
      colorTextRightActionsItem: antdToken.colorTextTertiary,
      heightLayoutHeader: 56,
      colorTextMenu: antdToken.colorTextSecondary,
      colorTextMenuSecondary: antdToken.colorTextTertiary,
      colorTextMenuTitle: antdToken.colorText,
      colorTextMenuActive: antdToken.colorText
    }, finalDesignTokens.header),
    sider: _objectSpread2({
      paddingInlineLayoutMenu: 8,
      paddingBlockLayoutMenu: 0,
      colorBgCollapsedButton: antdToken.colorBgElevated,
      colorTextCollapsedButtonHover: antdToken.colorTextSecondary,
      colorTextCollapsedButton: setAlpha(antdToken.colorTextBase, 0.25),
      colorMenuBackground: "transparent",
      colorBgMenuItemCollapsedHover: "rgba(90, 75, 75, 0.03)",
      colorBgMenuItemCollapsedSelected: setAlpha(antdToken.colorTextBase, 0.04),
      colorMenuItemDivider: setAlpha(antdToken.colorTextBase, 0.06),
      colorBgMenuItemHover: setAlpha(antdToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: setAlpha(antdToken.colorTextBase, 0.04),
      colorTextMenuItemHover: antdToken.colorText,
      colorTextMenuSelected: setAlpha(antdToken.colorTextBase, 0.95),
      colorTextMenuActive: antdToken.colorText,
      colorTextMenu: antdToken.colorTextSecondary,
      colorTextMenuSecondary: antdToken.colorTextTertiary,
      colorTextMenuTitle: antdToken.colorText,
      colorTextSubMenuSelected: setAlpha(antdToken.colorTextBase, 0.95)
    }, finalDesignTokens.sider),
    pageContainer: _objectSpread2({
      colorBgPageContainer: "transparent",
      paddingInlinePageContainerContent: ((_finalDesignTokens$pa = finalDesignTokens.pageContainer) === null || _finalDesignTokens$pa === void 0 ? void 0 : _finalDesignTokens$pa.marginInlinePageContainerContent) || 40,
      paddingBlockPageContainerContent: ((_finalDesignTokens$pa2 = finalDesignTokens.pageContainer) === null || _finalDesignTokens$pa2 === void 0 ? void 0 : _finalDesignTokens$pa2.marginBlockPageContainerContent) || 24,
      colorBgPageContainerFixed: "#fff"
    }, finalDesignTokens.pageContainer)
  });
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/utils/merge.js
var merge = function merge2() {
  var obj = {};
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }
  var il = rest.length;
  var key;
  var i = 0;
  for (; i < il; i += 1) {
    for (key in rest[i]) {
      if (rest[i].hasOwnProperty(key)) {
        if (_typeof(obj[key]) === "object" && _typeof(rest[i][key]) === "object" && obj[key] !== void 0 && obj[key] !== null && !Array.isArray(obj[key]) && !Array.isArray(rest[i][key])) {
          obj[key] = _objectSpread2(_objectSpread2({}, obj[key]), rest[i][key]);
        } else {
          obj[key] = rest[i][key];
        }
      }
    }
  }
  return obj;
};

// node_modules/.pnpm/@ant-design+pro-provider@2.3.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-provider/es/index.js
var _excluded = [
  "locale",
  "getPrefixCls"
];
var _excluded2 = [
  "locale",
  "theme"
];
function get(source, path, defaultValue) {
  var paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  var result = source;
  var message = defaultValue;
  var _iterator = _createForOfIteratorHelper(paths), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var p = _step.value;
      message = Object(result)[p];
      result = Object(result)[p];
      if (message === void 0) {
        return defaultValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return message;
}
var createIntl = function createIntl2(locale4, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      return get(localeMap, id, defaultMessage) || defaultMessage;
    },
    locale: locale4
  };
};
var mnMNIntl = createIntl("mn_MN", mn_MN_default);
var arEGIntl = createIntl("ar_EG", ar_EG_default);
var zhCNIntl = createIntl("zh_CN", zh_CN_default7);
var enUSIntl = createIntl("en_US", en_US_default);
var enGBIntl = createIntl("en_GB", en_GB_default);
var viVNIntl = createIntl("vi_VN", vi_VN_default);
var itITIntl = createIntl("it_IT", it_IT_default);
var jaJPIntl = createIntl("ja_JP", ja_JP_default);
var esESIntl = createIntl("es_ES", es_ES_default);
var caESIntl = createIntl("ca_ES", ca_ES_default);
var ruRUIntl = createIntl("ru_RU", ru_RU_default);
var srRSIntl = createIntl("sr_RS", sr_RS_default);
var msMYIntl = createIntl("ms_MY", ms_MY_default);
var zhTWIntl = createIntl("zh_TW", zh_TW_default);
var frFRIntl = createIntl("fr_FR", fr_FR_default);
var ptBRIntl = createIntl("pt_BR", pt_BR_default);
var koKRIntl = createIntl("ko_KR", ko_KR_default);
var idIDIntl = createIntl("id_ID", id_ID_default);
var deDEIntl = createIntl("de_DE", de_DE_default);
var faIRIntl = createIntl("fa_IR", fa_IR_default);
var trTRIntl = createIntl("tr_TR", tr_TR_default);
var plPLIntl = createIntl("pl_PL", pl_PL_default);
var hrHRIntl = createIntl("hr_", hr_HR_default);
var intlMap = {
  "mn-MN": mnMNIntl,
  "ar-EG": arEGIntl,
  "zh-CN": zhCNIntl,
  "en-US": enUSIntl,
  "en-GB": enGBIntl,
  "vi-VN": viVNIntl,
  "it-IT": itITIntl,
  "ja-JP": jaJPIntl,
  "es-ES": esESIntl,
  "ca-ES": caESIntl,
  "ru-RU": ruRUIntl,
  "sr-RS": srRSIntl,
  "ms-MY": msMYIntl,
  "zh-TW": zhTWIntl,
  "fr-FR": frFRIntl,
  "pt-BR": ptBRIntl,
  "ko-KR": koKRIntl,
  "id-ID": idIDIntl,
  "de-DE": deDEIntl,
  "fa-IR": faIRIntl,
  "tr-TR": trTRIntl,
  "pl-PL": plPLIntl,
  "hr-HR": hrHRIntl
};
var intlMapKeys = Object.keys(intlMap);
var ProConfigContext = /* @__PURE__ */ React2.createContext({
  intl: _objectSpread2(_objectSpread2({}, zhCNIntl), {}, {
    locale: "default"
  }),
  valueTypeMap: {},
  theme: emptyTheme,
  hashed: true,
  dark: false,
  token: defaultToken
});
var ConfigConsumer = ProConfigContext.Consumer;
var findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey2(localeKey) {
  if (!localeKey) {
    return "zh-CN";
  }
  var localeName = localeKey.toLocaleLowerCase();
  return intlMapKeys.find(function(intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  });
};
var CacheClean = function CacheClean2() {
  var _useSWRConfig = useSWRConfig(), cache2 = _useSWRConfig.cache;
  useEffect2(function() {
    return function() {
      cache2.clear();
    };
  }, []);
  return null;
};
var ConfigProVidContainer = function ConfigProVidContainer2(props) {
  var _proTheme$useToken;
  var children = props.children, dark = props.dark, valueTypeMap = props.valueTypeMap, _props$autoClearCache = props.autoClearCache, autoClearCache = _props$autoClearCache === void 0 ? false : _props$autoClearCache, propsToken = props.token;
  var _useContext = useContext3(config_provider_default.ConfigContext), locale4 = _useContext.locale, getPrefixCls = _useContext.getPrefixCls, restConfig = _objectWithoutProperties(_useContext, _excluded);
  var tokenContext = (_proTheme$useToken = proTheme.useToken) === null || _proTheme$useToken === void 0 ? void 0 : _proTheme$useToken.call(proTheme);
  var containerDomRef = useRef3(null);
  var proProvide = useContext3(ProConfigContext);
  var proComponentsCls = ".".concat(getPrefixCls(), "-pro");
  var antCls = "." + getPrefixCls();
  var salt = "".concat(proComponentsCls);
  var proLayoutTokenMerge = useMemo3(function() {
    return getLayoutDesignToken(propsToken || {}, tokenContext.token || defaultToken);
  }, [
    propsToken,
    tokenContext.token
  ]);
  var proProvideValue = useMemo3(function() {
    var _proProvide$intl;
    var localeName = locale4 === null || locale4 === void 0 ? void 0 : locale4.locale;
    var key = findIntlKeyByAntdLocaleKey(localeName);
    var intl = localeName && ((_proProvide$intl = proProvide.intl) === null || _proProvide$intl === void 0 ? void 0 : _proProvide$intl.locale) === "default" ? intlMap[key] : proProvide.intl || intlMap[key];
    return _objectSpread2(_objectSpread2({}, proProvide), {}, {
      dark: dark !== null && dark !== void 0 ? dark : proProvide.dark,
      token: merge(proProvide.token, tokenContext.token, {
        proComponentsCls,
        antCls,
        themeId: tokenContext.theme.id,
        layout: proLayoutTokenMerge
      }),
      intl: intl || zhCNIntl
    });
  }, [
    locale4 === null || locale4 === void 0 ? void 0 : locale4.locale,
    proProvide,
    dark,
    tokenContext.token,
    tokenContext.theme.id,
    proComponentsCls,
    antCls,
    proLayoutTokenMerge
  ]);
  var finalToken = _objectSpread2(_objectSpread2({}, proProvideValue.token || {}), {}, {
    proComponentsCls
  });
  var _useCacheToken = useCacheToken(tokenContext.theme, [
    tokenContext.token,
    finalToken !== null && finalToken !== void 0 ? finalToken : {}
  ], {
    salt
  }), _useCacheToken2 = _slicedToArray(_useCacheToken, 2), token2 = _useCacheToken2[0], nativeHashId = _useCacheToken2[1];
  var hashId = useMemo3(function() {
    var _process$env$NODE_ENV;
    if (props.hashed === false) {
      return "";
    }
    if (proProvide.hashed === false)
      return "";
    if (((_process$env$NODE_ENV = "development") === null || _process$env$NODE_ENV === void 0 ? void 0 : _process$env$NODE_ENV.toLowerCase()) !== "test")
      return nativeHashId;
    return "";
  }, [
    nativeHashId,
    proProvide.hashed,
    props.hashed
  ]);
  var configProviderDom = useMemo3(function() {
    var _process$env$NODE_ENV2;
    var themeConfig = _objectSpread2(_objectSpread2({}, restConfig.theme), {}, {
      hashId,
      hashed: ((_process$env$NODE_ENV2 = "development") === null || _process$env$NODE_ENV2 === void 0 ? void 0 : _process$env$NODE_ENV2.toLowerCase()) !== "test" && props.hashed !== false && proProvide.hashed !== false
    });
    var provide = _jsx(config_provider_default, _objectSpread2(_objectSpread2({}, restConfig), {}, {
      theme: _objectSpread2({}, themeConfig),
      children: _jsx(ProConfigContext.Provider, {
        value: _objectSpread2(_objectSpread2({}, proProvideValue), {}, {
          valueTypeMap: valueTypeMap || (proProvideValue === null || proProvideValue === void 0 ? void 0 : proProvideValue.valueTypeMap),
          token: token2,
          containerDomRef,
          theme: tokenContext.theme,
          hashed: props.hashed,
          hashId
        }),
        children: _jsxs(_Fragment, {
          children: [
            autoClearCache && _jsx(CacheClean, {}),
            children
          ]
        })
      })
    }));
    return _jsx("div", {
      ref: containerDomRef,
      className: "".concat((getPrefixCls === null || getPrefixCls === void 0 ? void 0 : getPrefixCls("pro")) || "ant-pro").concat(hashId ? " " + hashId : ""),
      children: provide
    });
  }, [
    autoClearCache,
    children,
    getPrefixCls,
    hashId,
    locale4,
    proProvideValue,
    token2
  ]);
  if (!autoClearCache)
    return configProviderDom;
  return _jsx(SWRConfig2, {
    value: {
      provider: function provider() {
        return /* @__PURE__ */ new Map();
      }
    },
    children: configProviderDom
  });
};
var ProConfigProvider = function ProConfigProvider2(props) {
  var needDeps = props.needDeps, dark = props.dark, token2 = props.token;
  var proProvide = useContext3(ProConfigContext);
  var _useContext2 = useContext3(config_provider_default.ConfigContext), locale4 = _useContext2.locale, theme = _useContext2.theme, rest = _objectWithoutProperties(_useContext2, _excluded2);
  var isNullProvide = needDeps && proProvide.hashId !== void 0 && Object.keys(props).sort().join("-") === "children-needDeps";
  if (isNullProvide)
    return _jsx(_Fragment, {
      children: props.children
    });
  var mergeAlgorithm = function mergeAlgorithm2() {
    var isDark = dark !== null && dark !== void 0 ? dark : proProvide.dark;
    if (isDark && !Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [
        proTheme.darkAlgorithm,
        theme === null || theme === void 0 ? void 0 : theme.algorithm
      ].filter(Boolean);
    }
    if (isDark && Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [
        proTheme.darkAlgorithm
      ].concat(_toConsumableArray((theme === null || theme === void 0 ? void 0 : theme.algorithm) || [])).filter(Boolean);
    }
    return theme === null || theme === void 0 ? void 0 : theme.algorithm;
  };
  var configProvider = _objectSpread2(_objectSpread2({}, rest), {}, {
    locale: locale4 || zh_CN_default6,
    theme: _objectSpread2(_objectSpread2({}, theme), {}, {
      algorithm: mergeAlgorithm()
    })
  });
  return _jsx(config_provider_default, _objectSpread2(_objectSpread2({}, configProvider), {}, {
    children: _jsx(ConfigProVidContainer, _objectSpread2(_objectSpread2({}, props), {}, {
      token: token2
    }))
  }));
};
var ProProvider = ProConfigContext;
ProProvider.displayName = "ProProvider";

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/components/ErrorBoundary/index.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import React3 from "react";
var ErrorBoundary = /* @__PURE__ */ function(_React$Component) {
  _inherits(ErrorBoundary2, _React$Component);
  var _super = _createSuper(ErrorBoundary2);
  function ErrorBoundary2() {
    var _this;
    _classCallCheck(this, ErrorBoundary2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [
      this
    ].concat(args));
    _this.state = {
      hasError: false,
      errorInfo: ""
    };
    return _this;
  }
  _createClass(ErrorBoundary2, [
    {
      key: "componentDidCatch",
      value: function componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
      }
    },
    {
      key: "render",
      value: function render() {
        if (this.state.hasError) {
          return _jsx2(result_default, {
            status: "error",
            title: "Something went wrong.",
            extra: this.state.errorInfo
          });
        }
        return this.props.children;
      }
    }
  ], [
    {
      key: "getDerivedStateFromError",
      value: function getDerivedStateFromError(error) {
        return {
          hasError: true,
          errorInfo: error.message
        };
      }
    }
  ]);
  return ErrorBoundary2;
}(React3.Component);

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/omitUndefined/index.js
var omitUndefined = function omitUndefined2(obj) {
  var newObj = {};
  Object.keys(obj || {}).forEach(function(key) {
    if (obj[key] !== void 0) {
      newObj[key] = obj[key];
    }
  });
  if (Object.keys(newObj).length < 1) {
    return void 0;
  }
  return newObj;
};

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/compareVersions/index.js
var semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
var isWildcard = function isWildcard2(s) {
  return s === "*" || s === "x" || s === "X";
};
var tryParse = function tryParse2(v) {
  var n = parseInt(v, 10);
  return isNaN(n) ? v : n;
};
var forceType = function forceType2(a, b) {
  return _typeof(a) !== _typeof(b) ? [
    String(a),
    String(b)
  ] : [
    a,
    b
  ];
};
var compareStrings = function compareStrings2(a, b) {
  if (isWildcard(a) || isWildcard(b))
    return 0;
  var _forceType = forceType(tryParse(a), tryParse(b)), _forceType2 = _slicedToArray(_forceType, 2), ap = _forceType2[0], bp = _forceType2[1];
  if (ap > bp)
    return 1;
  if (ap < bp)
    return -1;
  return 0;
};
var compareSegments = function compareSegments2(a, b) {
  for (var i = 0; i < Math.max(a.length, b.length); i++) {
    var r = compareStrings(a[i] || "0", b[i] || "0");
    if (r !== 0)
      return r;
  }
  return 0;
};
var validateAndParse = function validateAndParse2(version) {
  var _match$shift;
  var match = version.match(semver);
  match === null || match === void 0 ? void 0 : (_match$shift = match.shift) === null || _match$shift === void 0 ? void 0 : _match$shift.call(match);
  return match;
};
var compareVersions = function compareVersions2(v1, v2) {
  var n1 = validateAndParse(v1);
  var n2 = validateAndParse(v2);
  var p1 = n1.pop();
  var p2 = n2.pop();
  var r = compareSegments(n1, n2);
  if (r !== 0)
    return r;
  if (p1 || p2) {
    return p1 ? -1 : 1;
  }
  return 0;
};

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/compareVersions/openVisibleCompatible.js
var getVersion = function getVersion2() {
  var _process, _process$env;
  if (typeof process === "undefined")
    return version_default;
  return ((_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.ANTD_VERSION) || version_default;
};
var openVisibleCompatible = function openVisibleCompatible2(open, onOpenChange) {
  var props = compareVersions(getVersion(), "4.23.0") > -1 ? {
    open,
    onOpenChange
  } : {
    visible: open,
    onVisibleChange: onOpenChange
  };
  return omitUndefined(props);
};

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/hooks/useDebounceFn/index.js
import { useCallback as useCallback4, useEffect as useEffect3, useRef as useRef5 } from "react";

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/hooks/useRefFunction/index.js
import { useCallback as useCallback3, useRef as useRef4 } from "react";
var useRefFunction = function useRefFunction2(reFunction) {
  var ref = useRef4(null);
  ref.current = reFunction;
  return useCallback3(function() {
    var _ref$current;
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }
    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.call.apply(_ref$current, [
      ref
    ].concat(rest));
  }, []);
};

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/hooks/useDebounceFn/index.js
function useDebounceFn(fn, wait) {
  var callback = useRefFunction(fn);
  var timer = useRef5();
  var cancel = useCallback4(function() {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);
  var run = useCallback4(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
    var _len, args, _key, _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args2[_key];
            }
            if (!(wait === 0 || wait === void 0)) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", callback.apply(void 0, args));
          case 3:
            cancel();
            return _context2.abrupt("return", new Promise(function(resolve) {
              timer.current = setTimeout(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1)
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (true) {
                          _context.next = 7;
                          break;
                        }
                        _context.t0 = resolve;
                        _context.next = 4;
                        return callback.apply(void 0, args);
                      case 4:
                        _context.t1 = _context.sent;
                        (0, _context.t0)(_context.t1);
                        return _context.abrupt("return");
                      case 7:
                        _context.t2 = resolve;
                        _context.next = 10;
                        return callback.apply(void 0, args);
                      case 10:
                        _context.t3 = _context.sent;
                        (0, _context.t2)(_context.t3);
                      case 12:
                      case "end":
                        return _context.stop();
                    }
                }, _callee);
              })), wait);
            }));
          case 5:
          case "end":
            return _context2.stop();
        }
    }, _callee2);
  })), [
    callback,
    cancel,
    wait
  ]);
  useEffect3(function() {
    return cancel;
  }, [
    cancel
  ]);
  return {
    run,
    cancel
  };
}

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/hooks/useDocumentTitle/index.js
import { useEffect as useEffect4 } from "react";

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/isBrowser/index.js
var isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
var isBrowser = function isBrowser2() {
  if (false) {
    return true;
  }
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.matchMedia !== "undefined" && !isNode;
};

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/hooks/useDocumentTitle/index.js
function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === "string" ? titleInfo.title : appDefaultTitle;
  useEffect4(function() {
    if (isBrowser() && titleText) {
      document.title = titleText;
    }
  }, [
    titleInfo.title,
    titleText
  ]);
}

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/isImg/index.js
function isImg(path) {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/isUrl/index.js
var isUrl = function isUrl2(path) {
  if (!path)
    return false;
  if (!path.startsWith("http")) {
    return false;
  }
  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};

// node_modules/.pnpm/@ant-design+pro-utils@2.5.2_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-utils/es/useMountMergeState/index.js
var import_useMergedState = __toESM(require_useMergedState());

// node_modules/.pnpm/omit.js@2.0.2/node_modules/omit.js/es/index.js
function omit(obj, fields) {
  var shallowCopy = Object.assign({}, obj);
  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
var es_default2 = omit;

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/context/RouteContext.js
import { createContext as createContext2 } from "react";
var RouteContext = /* @__PURE__ */ createContext2({});

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/PageLoading/index.js
import { jsx as _jsx3 } from "react/jsx-runtime";
var _excluded3 = [
  "isLoading",
  "pastDelay",
  "timedOut",
  "error",
  "retry"
];
var PageLoading = function PageLoading2(_ref) {
  var isLoading = _ref.isLoading, pastDelay = _ref.pastDelay, timedOut = _ref.timedOut, error = _ref.error, retry = _ref.retry, reset = _objectWithoutProperties(_ref, _excluded3);
  return _jsx3("div", {
    style: {
      paddingBlockStart: 100,
      textAlign: "center"
    },
    children: _jsx3(spin_default, _objectSpread2({
      size: "large"
    }, reset))
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/Footer.js
import { jsx as _jsx5, jsxs as _jsxs3 } from "react/jsx-runtime";
import { Fragment } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.js
import { jsx as _jsx4, jsxs as _jsxs2 } from "react/jsx-runtime";
var import_classnames = __toESM(require_classnames());
import { useContext as useContext4 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalFooter/style.js
var genFooterToolBarStyle = function genFooterToolBarStyle2(token2) {
  return _defineProperty({}, token2.componentCls, {
    marginBlock: 0,
    marginBlockStart: 48,
    marginBlockEnd: 24,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 16,
    textAlign: "center",
    "&-list": {
      marginBlockEnd: 8,
      color: token2.colorTextSecondary,
      "&-link": {
        color: token2.colorTextSecondary,
        textDecoration: token2.linkDecoration
      },
      "*:not(:last-child)": {
        marginInlineEnd: 8,
        "&:hover": {
          color: token2.colorText
        }
      }
    },
    "&-copyright": {
      fontSize: "14px",
      color: token2.colorText
    }
  });
};
function useStyle2(prefixCls) {
  return useStyle("ProLayoutFooter", function(token2) {
    var proCardToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genFooterToolBarStyle(proCardToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.js
var GlobalFooter = function GlobalFooter2(_ref) {
  var className = _ref.className, prefixCls = _ref.prefixCls, links = _ref.links, copyright = _ref.copyright, style = _ref.style;
  var context = useContext4(config_provider_default.ConfigContext);
  var baseClassName = context.getPrefixCls(prefixCls || "pro-global-footer");
  var _useStyle = useStyle2(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  if ((links == null || links === false || Array.isArray(links) && links.length === 0) && (copyright == null || copyright === false)) {
    return null;
  }
  return wrapSSR(_jsxs2("div", {
    className: (0, import_classnames.default)(baseClassName, hashId, className),
    style,
    children: [
      links && _jsx4("div", {
        className: "".concat(baseClassName, "-list ").concat(hashId),
        children: links.map(function(link) {
          return _jsx4("a", {
            className: "".concat(baseClassName, "-list-link ").concat(hashId),
            title: link.key,
            target: link.blankTarget ? "_blank" : "_self",
            href: link.href,
            rel: "noreferrer",
            children: link.title
          }, link.key);
        })
      }),
      copyright && _jsx4("div", {
        className: "".concat(baseClassName, "-copyright ").concat(hashId),
        children: copyright
      })
    ]
  }));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/Footer.js
var Footer = layout_default.Footer;
var DefaultFooter = function DefaultFooter2(_ref) {
  var links = _ref.links, copyright = _ref.copyright, style = _ref.style, className = _ref.className, prefixCls = _ref.prefixCls;
  return _jsx5(Footer, {
    className,
    style: _objectSpread2({
      padding: 0
    }, style),
    children: _jsx5(GlobalFooter, {
      links,
      prefixCls,
      copyright: copyright === false ? null : _jsxs3(Fragment, {
        children: [
          _jsx5(CopyrightOutlined_default, {}),
          " ",
          copyright
        ]
      })
    })
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/Header/index.js
import { jsx as _jsx17, jsxs as _jsxs12, Fragment as _Fragment5 } from "react/jsx-runtime";
var import_classnames9 = __toESM(require_classnames());
import { useCallback as useCallback6, useContext as useContext10 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/Header/style/header.js
var genProLayoutHeaderStyle = function genProLayoutHeaderStyle2(token2) {
  var _token$layout, _token$layout$header, _token$layout2, _token$layout2$header, _token$layout3, _token$layout3$header;
  return _defineProperty({}, "".concat(token2.proComponentsCls, "-layout"), _defineProperty({}, "".concat(token2.antCls, "-layout-header").concat(token2.componentCls), {
    height: (token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$header = _token$layout.header) === null || _token$layout$header === void 0 ? void 0 : _token$layout$header.heightLayoutHeader) || 56,
    lineHeight: "".concat((token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$header = _token$layout2.header) === null || _token$layout2$header === void 0 ? void 0 : _token$layout2$header.heightLayoutHeader) || 56, "px"),
    zIndex: 19,
    width: "100%",
    paddingBlock: 0,
    paddingInline: 8,
    borderBlockEnd: "1px solid ".concat(token2.colorSplit),
    backgroundColor: (token2 === null || token2 === void 0 ? void 0 : (_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : (_token$layout3$header = _token$layout3.header) === null || _token$layout3$header === void 0 ? void 0 : _token$layout3$header.colorBgHeader) || "rgba(255, 255, 255, 0.4)",
    WebkitBackdropFilter: "blur(8px)",
    backdropFilter: "blur(8px)",
    "&-fixed-header": {
      position: "fixed",
      insetBlockStart: 0,
      width: "100%",
      zIndex: 100,
      insetInlineEnd: 0
    },
    "&-header-actions": {
      display: "flex",
      alignItems: "center",
      fontSize: "16",
      cursor: "pointer",
      "& &-item": {
        paddingBlock: 0,
        paddingInline: 8,
        "&:hover": {
          color: token2.colorText
        }
      }
    },
    "&-header-realDark": {
      boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 65%)"
    },
    "&-header-actions-header-action": {
      transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
    }
  }));
};
function useStyle3(prefixCls) {
  return useStyle("ProLayoutHeader", function(token2) {
    var ProLayoutHeaderToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genProLayoutHeaderStyle(ProLayoutHeaderToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/utils/utils.js
var getOpenKeysFromMenuData = function getOpenKeysFromMenuData2(menuData) {
  return (menuData || []).reduce(function(pre, item) {
    if (item.key) {
      pre.push(item.key);
    }
    if (item.routes) {
      var newArray = pre.concat(getOpenKeysFromMenuData2(item.routes) || []);
      return newArray;
    }
    return pre;
  }, []);
};
function clearMenuItem(menusData) {
  return menusData.map(function(item) {
    var children = item.children || [];
    var finalItem = _objectSpread2({}, item);
    if (!finalItem.children && finalItem.routes) {
      finalItem.children = finalItem.routes;
    }
    if (!finalItem.name || finalItem.hideInMenu) {
      return null;
    }
    if (finalItem && (finalItem === null || finalItem === void 0 ? void 0 : finalItem.children)) {
      if (!finalItem.hideChildrenInMenu && children.some(function(child) {
        return child && child.name && !child.hideInMenu;
      })) {
        return _objectSpread2(_objectSpread2({}, item), {}, {
          children: clearMenuItem(children)
        });
      }
      delete finalItem.children;
    }
    delete finalItem.routes;
    return finalItem;
  }).filter(function(item) {
    return item;
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.js
import { jsx as _jsx16, Fragment as _Fragment4, jsxs as _jsxs11 } from "react/jsx-runtime";
var import_classnames8 = __toESM(require_classnames());
import { useContext as useContext9 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js
import { jsx as _jsx9, Fragment as _Fragment2, jsxs as _jsxs6 } from "react/jsx-runtime";
var import_classnames2 = __toESM(require_classnames());
import React4, { useCallback as useCallback5, useMemo as useMemo4, useState as useState2 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/AppsLogo.js
import { jsx as _jsx6 } from "react/jsx-runtime";
var AppsLogo = function AppsLogo2() {
  return _jsx6("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true",
    children: _jsx6("path", {
      d: "M0 0h3v3H0V0zm4.5 0h3v3h-3V0zM9 0h3v3H9V0zM0 4.5h3v3H0v-3zm4.503 0h3v3h-3v-3zM9 4.5h3v3H9v-3zM0 9h3v3H0V9zm4.503 0h3v3h-3V9zM9 9h3v3H9V9z"
    })
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/DefaultContent.js
import { jsx as _jsx7, jsxs as _jsxs4 } from "react/jsx-runtime";
var DefaultContent = function DefaultContent2(props) {
  var appList = props.appList, baseClassName = props.baseClassName, hashId = props.hashId;
  return _jsx7("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId),
    children: _jsx7("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function(app, index) {
        return _jsx7("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId),
          children: _jsxs4("a", {
            href: app.url,
            target: app.target,
            rel: "noreferrer",
            children: [
              defaultRenderLogo(app.icon),
              _jsxs4("div", {
                children: [
                  _jsx7("div", {
                    children: app.title
                  }),
                  app.desc ? _jsx7("span", {
                    children: app.desc
                  }) : null
                ]
              })
            ]
          })
        }, index);
      })
    })
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/SimpleContent.js
import { jsx as _jsx8, jsxs as _jsxs5 } from "react/jsx-runtime";
var renderLogo = function renderLogo2(logo, title) {
  if (logo && typeof logo === "string" && isUrl(logo)) {
    return _jsx8("img", {
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === "function") {
    return logo();
  }
  if (logo && typeof logo === "string") {
    return _jsx8("div", {
      id: "avatarLogo",
      children: logo
    });
  }
  if (!logo && title && typeof title === "string") {
    var symbol = title.substring(0, 1);
    return _jsx8("div", {
      id: "avatarLogo",
      children: symbol
    });
  }
  return logo;
};
var SimpleContent = function SimpleContent2(props) {
  var appList = props.appList, baseClassName = props.baseClassName, hashId = props.hashId;
  return _jsx8("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId),
    children: _jsx8("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function(app, index) {
        return _jsx8("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId),
          children: _jsxs5("a", {
            href: app.url,
            target: app.target,
            rel: "noreferrer",
            children: [
              renderLogo(app.icon, app.title),
              _jsx8("div", {
                children: _jsx8("div", {
                  children: app.title
                })
              })
            ]
          })
        }, index);
      })
    })
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/default.js
var genAppsLogoComponentsDefaultListStyle = function genAppsLogoComponentsDefaultListStyle2(token2) {
  return {
    "&-content": {
      "&-list": {
        boxSizing: "content-box",
        maxWidth: 656,
        marginBlock: 0,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 0,
        listStyle: "none",
        "> *": {
          boxSizing: "border-box",
          fontFamily: token2.fontFamily
        },
        "&-item": {
          position: "relative",
          display: "inline-block",
          width: 328,
          height: 72,
          paddingInline: 16,
          paddingBlock: 16,
          verticalAlign: "top",
          listStyleType: "none",
          transition: "transform 0.2s cubic-bezier(0.333, 0, 0, 1)",
          borderRadius: token2.borderRadius,
          "&:hover": {
            backgroundColor: token2.colorBgTextHover
          },
          "*": {
            boxSizing: "border-box",
            fontFamily: token2.fontFamily
          },
          "* div": resetComponent === null || resetComponent === void 0 ? void 0 : resetComponent(token2),
          a: {
            display: "flex",
            height: "100%",
            fontSize: 12,
            textDecoration: "none",
            "& > img": {
              width: 40,
              height: 40
            },
            "& > div": {
              marginInlineStart: 14,
              color: token2.colorTextHeading,
              fontSize: 14,
              lineHeight: "22px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            },
            "& > div > span": {
              color: token2.colorTextSecondary,
              fontSize: 12,
              lineHeight: "20px"
            }
          }
        }
      }
    }
  };
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/simple.js
var genAppsLogoComponentsSimpleListStyle = function genAppsLogoComponentsSimpleListStyle2(token2) {
  return {
    "&-content": {
      "&-list": {
        boxSizing: "border-box",
        maxWidth: 376,
        marginBlock: 0,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 0,
        listStyle: "none",
        "*": {
          boxSizing: "border-box",
          fontFamily: token2.fontFamily
        },
        "&-item": {
          position: "relative",
          display: "inline-block",
          width: 104,
          height: 104,
          marginBlock: 8,
          marginInline: 8,
          paddingInline: 24,
          paddingBlock: 24,
          verticalAlign: "top",
          listStyleType: "none",
          transition: "transform 0.2s cubic-bezier(0.333, 0, 0, 1)",
          borderRadius: token2.borderRadius,
          "&:hover": {
            backgroundColor: token2.colorBgTextHover
          },
          a: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            fontSize: 12,
            textDecoration: "none",
            "& > #avatarLogo": {
              width: 40,
              height: 40,
              margin: "0 auto",
              color: token2.colorPrimary,
              fontSize: 22,
              lineHeight: "40px",
              textAlign: "center",
              backgroundImage: "linear-gradient(180deg, #E8F0FB 0%, #F6F8FC 100%)",
              borderRadius: token2.borderRadius
            },
            "& > img": {
              width: 40,
              height: 40
            },
            "& > div": {
              marginBlockStart: 5,
              marginInlineStart: 0,
              color: token2.colorTextHeading,
              fontSize: 14,
              lineHeight: "22px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            },
            "& > div > span": {
              color: token2.colorTextSecondary,
              fontSize: 12,
              lineHeight: "20px"
            }
          }
        }
      }
    }
  };
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/index.js
var genAppsLogoComponentsStyle = function genAppsLogoComponentsStyle2(token2) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _popover;
  return _defineProperty({}, token2.componentCls, {
    "&-icon": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      paddingInline: 4,
      paddingBlock: 0,
      fontSize: 14,
      lineHeight: "14px",
      height: 28,
      width: 28,
      cursor: "pointer",
      color: token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextAppListIcon,
      "&:hover": {
        color: token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextAppListIconHover,
        backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgAppListIconHover
      },
      "&-active": {
        color: token2 === null || token2 === void 0 ? void 0 : (_token$layout4 = token2.layout) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextAppListIconHover,
        backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout5 = token2.layout) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgAppListIconHover
      }
    },
    "&-item-title": {
      margin: "16px 0 8px 12px",
      fontWeight: 600,
      color: "rgba(0, 0, 0, 0.88)",
      fontSize: 16,
      opacity: 0.85,
      lineHeight: 1.5,
      "&:first-child": {
        marginTop: 12
      }
    },
    "&-popover": (_popover = {}, _defineProperty(_popover, "".concat(token2.antCls, "-popover-arrow"), {
      display: "none"
    }), _defineProperty(_popover, "*", {
      boxSizing: "border-box",
      fontFamily: token2.fontFamily
    }), _popover),
    "&-simple": genAppsLogoComponentsSimpleListStyle(token2),
    "&-default": genAppsLogoComponentsDefaultListStyle(token2)
  });
};
function useStyle4(prefixCls) {
  return useStyle("AppsLogoComponents", function(token2) {
    var proCardToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genAppsLogoComponentsStyle(proCardToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js
var defaultRenderLogo = function defaultRenderLogo2(logo) {
  if (typeof logo === "string") {
    return _jsx9("img", {
      width: "auto",
      height: 22,
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === "function") {
    return logo();
  }
  return logo;
};
var AppsLogoComponents = function AppsLogoComponents2(props) {
  var _props$appList;
  var appList = props.appList, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "ant-pro" : _props$prefixCls;
  var ref = React4.useRef(null);
  var baseClassName = "".concat(prefixCls, "-layout-apps");
  var _useStyle = useStyle4(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var _useState = useState2(false), _useState2 = _slicedToArray(_useState, 2), open = _useState2[0], setOpen = _useState2[1];
  var itemRender = useCallback5(function(list) {
    var isSimple = list === null || list === void 0 ? void 0 : list.some(function(app) {
      return !(app === null || app === void 0 ? void 0 : app.desc);
    });
    if (isSimple) {
      return _jsx9(SimpleContent, {
        hashId,
        appList: list,
        baseClassName: "".concat(baseClassName, "-simple")
      });
    }
    return _jsx9(DefaultContent, {
      hashId,
      appList: list,
      baseClassName: "".concat(baseClassName, "-default")
    });
  }, [
    hashId,
    baseClassName
  ]);
  var popoverContent = useMemo4(function() {
    return appList === null || appList === void 0 ? void 0 : appList.map(function(app) {
      var _app$children;
      if (app === null || app === void 0 ? void 0 : (_app$children = app.children) === null || _app$children === void 0 ? void 0 : _app$children.length) {
        return _jsxs6(_Fragment2, {
          children: [
            _jsx9("div", {
              className: "".concat(baseClassName, "-item-title ").concat(hashId),
              children: app.title
            }),
            itemRender(app === null || app === void 0 ? void 0 : app.children)
          ]
        });
      }
      return itemRender([
        app
      ]);
    });
  }, [
    appList,
    baseClassName,
    hashId
  ]);
  if (!(props === null || props === void 0 ? void 0 : (_props$appList = props.appList) === null || _props$appList === void 0 ? void 0 : _props$appList.length))
    return null;
  var popoverOpenProps = openVisibleCompatible(void 0, function(openChange) {
    return setOpen(openChange);
  });
  return wrapSSR(_jsxs6(_Fragment2, {
    children: [
      _jsx9("div", {
        ref,
        onClick: function onClick(e) {
          e.stopPropagation();
          e.preventDefault();
        }
      }),
      _jsx9(popover_default, _objectSpread2(_objectSpread2({
        placement: "bottomRight",
        trigger: [
          "click"
        ],
        zIndex: 9999,
        arrowPointAtCenter: true
      }, popoverOpenProps), {}, {
        overlayClassName: "".concat(baseClassName, "-popover ").concat(hashId),
        content: popoverContent,
        getPopupContainer: function getPopupContainer() {
          return ref.current || document.body;
        },
        children: _jsx9("span", {
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          className: (0, import_classnames2.default)("".concat(baseClassName, "-icon"), hashId, _defineProperty({}, "".concat(baseClassName, "-icon-active"), open)),
          children: _jsx9(AppsLogo, {})
        })
      }))
    ]
  }));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js
import { createElement as _createElement2 } from "react";
import { jsx as _jsx13, jsxs as _jsxs8, Fragment as _Fragment3 } from "react/jsx-runtime";
var import_classnames5 = __toESM(require_classnames());
import { useContext as useContext6, useMemo as useMemo6 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/index.js
var import_classnames3 = __toESM(require_classnames());
import { jsx as _jsx11 } from "react/jsx-runtime";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/Arrow.js
import { jsx as _jsx10 } from "react/jsx-runtime";
function ArrowSvgIcon() {
  return _jsx10("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true",
    children: _jsx10("path", {
      d: "M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z"
    })
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/style.js
var genSiderMenuStyle = function genSiderMenuStyle2(token2) {
  var _token$layout, _token$layout$sider, _token$layout2, _token$layout2$sider, _token$layout3, _token$layout3$sider;
  return _defineProperty({}, token2.componentCls, {
    position: "absolute",
    insetBlockStart: "18px",
    zIndex: "101",
    width: "24px",
    height: "24px",
    fontSize: [
      "14px",
      "16px"
    ],
    textAlign: "center",
    borderRadius: "40px",
    insetInlineEnd: "-13px",
    transition: "transform 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$sider = _token$layout.sider) === null || _token$layout$sider === void 0 ? void 0 : _token$layout$sider.colorTextCollapsedButton,
    backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$sider = _token$layout2.sider) === null || _token$layout2$sider === void 0 ? void 0 : _token$layout2$sider.colorBgCollapsedButton,
    boxShadow: "0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)",
    "&:hover": {
      color: token2 === null || token2 === void 0 ? void 0 : (_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : (_token$layout3$sider = _token$layout3.sider) === null || _token$layout3$sider === void 0 ? void 0 : _token$layout3$sider.colorTextCollapsedButtonHover,
      boxShadow: "0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)"
    },
    ".anticon": {
      fontSize: "14px"
    },
    "& > svg": {
      transition: "transform  0.3s",
      transform: "rotate(90deg)"
    },
    "&-collapsed": {
      "& > svg": {
        transform: "rotate(-90deg)"
      }
    }
  });
};
function useStyle5(prefixCls) {
  return useStyle("SiderMenuCollapsedIcon", function(token2) {
    var siderMenuToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genSiderMenuStyle(siderMenuToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/index.js
var _excluded4 = [
  "isMobile",
  "collapsed"
];
var CollapsedIcon = function CollapsedIcon2(props) {
  var _classNames;
  var isMobile = props.isMobile, collapsed = props.collapsed, rest = _objectWithoutProperties(props, _excluded4);
  var _useStyle = useStyle5(props.className), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  if (isMobile && collapsed)
    return null;
  return wrapSSR(_jsx11("div", _objectSpread2(_objectSpread2({}, rest), {}, {
    className: (0, import_classnames3.default)(props.className, hashId, (_classNames = {}, _defineProperty(_classNames, "".concat(props.className, "-collapsed"), collapsed), _defineProperty(_classNames, "".concat(props.className, "-is-mobile"), isMobile), _classNames)),
    children: _jsx11(ArrowSvgIcon, {})
  })));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/BaseMenu.js
import { createElement as _createElement } from "react";
import { jsx as _jsx12, jsxs as _jsxs7 } from "react/jsx-runtime";
var import_classnames4 = __toESM(require_classnames());
import { useContext as useContext5, useEffect as useEffect5, useMemo as useMemo5, useRef as useRef6 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/defaultSettings.js
var defaultSettings = {
  navTheme: "light",
  layout: "side",
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  iconfontUrl: "",
  colorPrimary: "#1677FF",
  splitMenus: false
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/menu.js
var genProLayoutBaseMenuStyle = function genProLayoutBaseMenuStyle2(token2) {
  var _token$layout, _token$layout$sider, _collapsed, _collapsed2, _$concat3, _itemTitle, _$concat5;
  return _defineProperty({}, "".concat(token2.componentCls), (_$concat5 = {
    background: "transparent",
    border: "none"
  }, _defineProperty(_$concat5, "".concat(token2.componentCls, "-menu-item"), {
    transition: "none !important"
  }), _defineProperty(_$concat5, "".concat(token2.componentCls, "-submenu-has-icon"), _defineProperty({}, "> ".concat(token2.antCls, "-menu-sub"), {
    paddingInlineStart: 10
  })), _defineProperty(_$concat5, "&&-collapsed", (_collapsed = {}, _defineProperty(_collapsed, "".concat(token2.antCls, "-menu-item, \n        ").concat(token2.antCls, "-menu-item-group > ").concat(token2.antCls, "-menu-item-group-list > ").concat(token2.antCls, "-menu-item, \n        ").concat(token2.antCls, "-menu-item-group > ").concat(token2.antCls, "-menu-item-group-list > ").concat(token2.antCls, "-menu-submenu > ").concat(token2.antCls, "-menu-submenu-title, \n        ").concat(token2.antCls, "-menu-submenu > ").concat(token2.antCls, "-menu-submenu-title"), {
    paddingInline: "0 !important",
    marginBlock: "8px !important"
  }), _defineProperty(_collapsed, "".concat(token2.antCls, "-menu-item-group > ").concat(token2.antCls, "-menu-item-group-list > ").concat(token2.antCls, "-menu-submenu-selected > ").concat(token2.antCls, "-menu-submenu-title, \n        ").concat(token2.antCls, "-menu-submenu-selected > ").concat(token2.antCls, "-menu-submenu-title"), {
    backgroundColor: (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$sider = _token$layout.sider) === null || _token$layout$sider === void 0 ? void 0 : _token$layout$sider.colorBgMenuItemSelected,
    borderRadius: token2.borderRadius
  }), _defineProperty(_collapsed, "".concat(token2.componentCls, "-group"), _defineProperty({}, "".concat(token2.antCls, "-menu-item-group-title"), {
    paddingInline: 0
  })), _collapsed)), _defineProperty(_$concat5, "".concat(token2.componentCls, "-item-icon"), {
    height: "14px",
    width: "14px",
    opacity: "0.85",
    ".anticon": {
      lineHeight: "14px",
      height: "14px"
    }
  }), _defineProperty(_$concat5, "& &-item-title", (_itemTitle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "&-collapsed": (_collapsed2 = {
      flexDirection: "column",
      justifyContent: "center"
    }, _defineProperty(_collapsed2, "".concat(token2.componentCls, "-item-text"), {
      maxWidth: "100%"
    }), _defineProperty(_collapsed2, "".concat(token2.componentCls, "-item-text-has-icon"), {
      display: "none !important"
    }), _collapsed2)
  }, _defineProperty(_itemTitle, "&".concat(token2.componentCls, "-group-item-title"), {
    gap: 4,
    height: 18,
    overflow: "hidden"
  }), _defineProperty(_itemTitle, "&".concat(token2.componentCls, "-item-collapsed-show-title"), _defineProperty({
    lineHeight: "16px",
    height: "48px"
  }, "&".concat(token2.componentCls, "-item-title-collapsed"), (_$concat3 = {
    display: "flex"
  }, _defineProperty(_$concat3, "".concat(token2.componentCls, "-item-icon"), {
    height: "16px",
    lineHeight: "16px !important",
    ".anticon": {
      lineHeight: "16px",
      height: "16px"
    }
  }), _defineProperty(_$concat3, "".concat(token2.componentCls, "-item-text"), {
    opacity: "1 !important",
    display: "inline !important",
    textAlign: "center",
    fontSize: 12,
    height: 12,
    lineHeight: "12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    margin: 0,
    padding: 0,
    marginBlockStart: 4
  }), _$concat3))), _itemTitle)), _defineProperty(_$concat5, "&-group", _defineProperty({}, "".concat(token2.antCls, "-menu-item-group-title"), {
    fontSize: 12,
    color: token2.colorTextLabel,
    ".anticon": {
      marginInlineEnd: 8
    }
  })), _defineProperty(_$concat5, "&-group-divider", {
    color: token2.colorTextSecondary,
    fontSize: 12,
    lineHeight: 20
  }), _$concat5));
};
function useStyle6(prefixCls) {
  return useStyle("ProLayoutBaseMenu", function(token2) {
    var proLayoutMenuToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genProLayoutBaseMenuStyle(proLayoutMenuToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/BaseMenu.js
var IconFont = create({
  scriptUrl: defaultSettings.iconfontUrl
});
var getIcon = function getIcon2(icon) {
  var iconPrefixes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "icon-";
  var className = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof icon === "string" && icon !== "") {
    if (isUrl(icon) || isImg(icon)) {
      return _jsx12("img", {
        width: 16,
        src: icon,
        alt: "icon",
        className
      }, icon);
    }
    if (icon.startsWith(iconPrefixes)) {
      return _jsx12(IconFont, {
        type: icon
      });
    }
  }
  return icon;
};
var getMenuTitleSymbol = function getMenuTitleSymbol2(title) {
  if (title && typeof title === "string") {
    var symbol = title.substring(0, 1).toUpperCase();
    return symbol;
  }
  return null;
};
var MenuUtil = /* @__PURE__ */ _createClass(function MenuUtil2(props) {
  var _this = this;
  _classCallCheck(this, MenuUtil2);
  this.props = void 0;
  this.getNavMenuItems = function() {
    var menusData = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var level = arguments.length > 1 ? arguments[1] : void 0;
    return menusData.map(function(item) {
      return _this.getSubMenuOrItem(item, level);
    }).filter(function(item) {
      return item;
    }).flat(1);
  };
  this.getSubMenuOrItem = function(item, level) {
    var _this$props = _this.props, subMenuItemRender = _this$props.subMenuItemRender, baseClassName = _this$props.baseClassName, prefixCls = _this$props.prefixCls, collapsed = _this$props.collapsed, menu = _this$props.menu, iconPrefixes = _this$props.iconPrefixes, layout = _this$props.layout;
    var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === "group" && layout !== "top";
    var designToken = _this.props.token;
    var name = _this.getIntlName(item);
    var children = (item === null || item === void 0 ? void 0 : item.children) || (item === null || item === void 0 ? void 0 : item.routes);
    var menuType = isGroup && level === 0 ? "group" : void 0;
    if (Array.isArray(children) && children.length > 0) {
      var _this$props2, _this$props3, _classNames, _this$props4, _this$props5, _classNames3, _designToken$layout, _designToken$layout$s;
      var shouldHasIcon = level === 0 || isGroup && level === 1;
      var iconDom = getIcon(item.icon, iconPrefixes, "action ".concat(baseClassName, "-icon ").concat((_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.hashId));
      var defaultIcon = collapsed && shouldHasIcon ? getMenuTitleSymbol(name) : null;
      var defaultTitle = _jsxs7("div", {
        title: name,
        className: (0, import_classnames4.default)("".concat(baseClassName, "-item-title"), (_this$props3 = _this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.hashId, (_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-item-title-collapsed"), collapsed), _defineProperty(_classNames, "".concat(baseClassName, "-group-item-title"), menuType === "group"), _defineProperty(_classNames, "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed), _classNames)),
        children: [
          menuType === "group" && collapsed ? null : shouldHasIcon && iconDom ? _jsx12("span", {
            className: "anticon ".concat(baseClassName, "-item-icon ").concat((_this$props4 = _this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.hashId),
            children: iconDom
          }) : defaultIcon,
          _jsx12("span", {
            className: (0, import_classnames4.default)("".concat(baseClassName, "-item-text"), (_this$props5 = _this.props) === null || _this$props5 === void 0 ? void 0 : _this$props5.hashId, _defineProperty({}, "".concat(baseClassName, "-item-text-has-icon"), menuType !== "group" && shouldHasIcon && (iconDom || defaultIcon))),
            children: name
          })
        ]
      });
      var title = subMenuItemRender ? subMenuItemRender(_objectSpread2(_objectSpread2({}, item), {}, {
        isUrl: false
      }), defaultTitle, _this.props) : defaultTitle;
      var childrenList = _this.getNavMenuItems(children, level + 1);
      if (isGroup && level === 0 && _this.props.collapsed && !menu.collapsedShowGroupTitle) {
        return childrenList;
      }
      return [
        {
          type: menuType,
          key: item.key || item.path,
          title: item.tooltip || title,
          label: title,
          onClick: isGroup ? void 0 : item.onTitleClick,
          children: childrenList,
          className: (0, import_classnames4.default)((_classNames3 = {}, _defineProperty(_classNames3, "".concat(baseClassName, "-group"), menuType === "group"), _defineProperty(_classNames3, "".concat(baseClassName, "-submenu"), menuType !== "group"), _defineProperty(_classNames3, "".concat(baseClassName, "-submenu-has-icon"), menuType !== "group" && shouldHasIcon && iconDom), _classNames3))
        },
        isGroup && level === 0 ? {
          type: "divider",
          prefixCls,
          className: "".concat(baseClassName, "-divider"),
          key: (item.key || item.path) + "-group-divider",
          style: {
            padding: 0,
            borderBlockEnd: 0,
            margin: _this.props.collapsed ? "4px" : "6px 16px",
            marginBlockStart: _this.props.collapsed ? 4 : 8,
            borderColor: designToken === null || designToken === void 0 ? void 0 : (_designToken$layout = designToken.layout) === null || _designToken$layout === void 0 ? void 0 : (_designToken$layout$s = _designToken$layout.sider) === null || _designToken$layout$s === void 0 ? void 0 : _designToken$layout$s.colorMenuItemDivider
          }
        } : void 0
      ].filter(Boolean);
    }
    return {
      className: "".concat(baseClassName, "-menu-item"),
      title: item.tooltip || name,
      disabled: item.disabled,
      key: item.key || item.path,
      onClick: item.onTitleClick,
      label: _this.getMenuItemPath(item, level)
    };
  };
  this.getIntlName = function(item) {
    var name = item.name, locale4 = item.locale;
    var _this$props6 = _this.props, menu = _this$props6.menu, formatMessage = _this$props6.formatMessage;
    if (locale4 && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
      return formatMessage === null || formatMessage === void 0 ? void 0 : formatMessage({
        id: locale4,
        defaultMessage: name
      });
    }
    return name;
  };
  this.getMenuItemPath = function(item, level) {
    var _this$props9, _this$props10, _classNames4, _this$props11, _this$props12;
    var itemPath = _this.conversionPath(item.path || "/");
    var _this$props7 = _this.props, _this$props7$location = _this$props7.location, location = _this$props7$location === void 0 ? {
      pathname: "/"
    } : _this$props7$location, isMobile = _this$props7.isMobile, onCollapse = _this$props7.onCollapse, menuItemRender = _this$props7.menuItemRender, iconPrefixes = _this$props7.iconPrefixes;
    var name = _this.getIntlName(item);
    var _this$props8 = _this.props, baseClassName = _this$props8.baseClassName, menu = _this$props8.menu, collapsed = _this$props8.collapsed;
    var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === "group";
    var hasIcon = level === 0 || isGroup && level === 1;
    var icon = !hasIcon ? null : getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props9 = _this.props) === null || _this$props9 === void 0 ? void 0 : _this$props9.hashId));
    var defaultIcon = collapsed && hasIcon ? getMenuTitleSymbol(name) : null;
    var defaultItem = _jsxs7("div", {
      className: (0, import_classnames4.default)("".concat(baseClassName, "-item-title"), (_this$props10 = _this.props) === null || _this$props10 === void 0 ? void 0 : _this$props10.hashId, (_classNames4 = {}, _defineProperty(_classNames4, "".concat(baseClassName, "-item-title-collapsed"), collapsed), _defineProperty(_classNames4, "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed), _classNames4)),
      children: [
        icon ? _jsx12("span", {
          className: "anticon ".concat(baseClassName, "-item-icon ").concat((_this$props11 = _this.props) === null || _this$props11 === void 0 ? void 0 : _this$props11.hashId),
          children: icon
        }) : defaultIcon,
        _jsx12("span", {
          className: (0, import_classnames4.default)("".concat(baseClassName, "-item-text"), (_this$props12 = _this.props) === null || _this$props12 === void 0 ? void 0 : _this$props12.hashId, _defineProperty({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
          children: name
        })
      ]
    }, itemPath);
    var isHttpUrl = isUrl(itemPath);
    if (isHttpUrl) {
      var _this$props13, _classNames6, _this$props14, _this$props15;
      defaultItem = _jsxs7("span", {
        title: name,
        onClick: function onClick() {
          var _window, _window$open;
          (_window = window) === null || _window === void 0 ? void 0 : (_window$open = _window.open) === null || _window$open === void 0 ? void 0 : _window$open.call(_window, itemPath, "_blank");
        },
        className: (0, import_classnames4.default)("".concat(baseClassName, "-item-title"), (_this$props13 = _this.props) === null || _this$props13 === void 0 ? void 0 : _this$props13.hashId, (_classNames6 = {}, _defineProperty(_classNames6, "".concat(baseClassName, "-item-title-collapsed"), collapsed), _defineProperty(_classNames6, "".concat(baseClassName, "-item-link"), true), _defineProperty(_classNames6, "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed), _classNames6)),
        children: [
          icon ? _jsx12("span", {
            className: "anticon ".concat(baseClassName, "-item-icon ").concat((_this$props14 = _this.props) === null || _this$props14 === void 0 ? void 0 : _this$props14.hashId),
            children: icon
          }) : defaultIcon,
          _jsx12("span", {
            className: (0, import_classnames4.default)("".concat(baseClassName, "-item-text"), (_this$props15 = _this.props) === null || _this$props15 === void 0 ? void 0 : _this$props15.hashId, _defineProperty({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
            children: name
          })
        ]
      }, itemPath);
    }
    if (menuItemRender) {
      var renderItemProps = _objectSpread2(_objectSpread2({}, item), {}, {
        isUrl: isHttpUrl,
        itemPath,
        isMobile,
        replace: itemPath === location.pathname,
        onClick: function onClick() {
          return onCollapse && onCollapse(true);
        },
        children: void 0
      });
      return menuItemRender(renderItemProps, defaultItem, _this.props);
    }
    return defaultItem;
  };
  this.conversionPath = function(path) {
    if (path && path.indexOf("http") === 0) {
      return path;
    }
    return "/".concat(path || "").replace(/\/+/g, "/");
  };
  this.props = props;
});
var getOpenKeysProps = function getOpenKeysProps2(openKeys, _ref) {
  var layout = _ref.layout, collapsed = _ref.collapsed;
  var openKeysProps = {};
  if (openKeys && !collapsed && [
    "side",
    "mix"
  ].includes(layout || "mix")) {
    openKeysProps = {
      openKeys
    };
  }
  return openKeysProps;
};
var BaseMenu = function BaseMenu2(props) {
  var _classNames8;
  var mode = props.mode, className = props.className, handleOpenChange = props.handleOpenChange, style = props.style, menuData = props.menuData, prefixCls = props.prefixCls, menu = props.menu, matchMenuKeys = props.matchMenuKeys, iconfontUrl = props.iconfontUrl, propsSelectedKeys = props.selectedKeys, onSelect = props.onSelect, menuRenderType = props.menuRenderType, propsOpenKeys = props.openKeys;
  var _useContext = useContext5(ProProvider), designToken = _useContext.token;
  var baseClassName = "".concat(prefixCls, "-base-menu");
  var defaultOpenKeysRef = useRef6([]);
  var _useMountMergeState = (0, import_useMergedState.default)(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll), _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2), defaultOpenAll = _useMountMergeState2[0], setDefaultOpenAll = _useMountMergeState2[1];
  var _useMountMergeState3 = (0, import_useMergedState.default)(function() {
    if (menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) {
      return getOpenKeysFromMenuData(menuData) || [];
    }
    if (propsOpenKeys === false) {
      return false;
    }
    return [];
  }, {
    value: propsOpenKeys === false ? void 0 : propsOpenKeys,
    onChange: handleOpenChange
  }), _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2), openKeys = _useMountMergeState4[0], setOpenKeys = _useMountMergeState4[1];
  var _useMountMergeState5 = (0, import_useMergedState.default)([], {
    value: propsSelectedKeys,
    onChange: onSelect ? function(keys) {
      if (onSelect && keys) {
        onSelect(keys);
      }
    } : void 0
  }), _useMountMergeState6 = _slicedToArray(_useMountMergeState5, 2), selectedKeys = _useMountMergeState6[0], setSelectedKeys = _useMountMergeState6[1];
  useEffect5(function() {
    if ((menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) || propsOpenKeys === false) {
      return;
    }
    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    }
  }, [
    matchMenuKeys.join("-")
  ]);
  useEffect5(function() {
    if (iconfontUrl) {
      IconFont = create({
        scriptUrl: iconfontUrl
      });
    }
  }, [
    iconfontUrl
  ]);
  useEffect5(
    function() {
      if (matchMenuKeys.join("-") !== (selectedKeys || []).join("-")) {
        setSelectedKeys(matchMenuKeys);
      }
      if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join("-") !== (openKeys || []).join("-")) {
        var newKeys = matchMenuKeys;
        if ((menu === null || menu === void 0 ? void 0 : menu.autoClose) === false) {
          newKeys = Array.from(new Set([].concat(_toConsumableArray(matchMenuKeys), _toConsumableArray(openKeys || []))));
        }
        setOpenKeys(newKeys);
      } else if ((menu === null || menu === void 0 ? void 0 : menu.ignoreFlatMenu) && defaultOpenAll) {
        setOpenKeys(getOpenKeysFromMenuData(menuData));
      } else
        setDefaultOpenAll(false);
    },
    [
      matchMenuKeys.join("-")
    ]
  );
  var openKeysProps = useMemo5(
    function() {
      return getOpenKeysProps(openKeys, props);
    },
    [
      openKeys && openKeys.join(","),
      props.layout,
      props.collapsed
    ]
  );
  var _useStyle = useStyle6(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var menuUtils = useMemo5(function() {
    return new MenuUtil(_objectSpread2(_objectSpread2({}, props), {}, {
      token: designToken,
      menuRenderType,
      baseClassName,
      hashId
    }));
  }, [
    props,
    designToken,
    menuRenderType,
    baseClassName,
    hashId
  ]);
  if (menu === null || menu === void 0 ? void 0 : menu.loading) {
    return _jsx12("div", {
      style: (mode === null || mode === void 0 ? void 0 : mode.includes("inline")) ? {
        padding: 24
      } : {
        marginBlockStart: 16
      },
      children: _jsx12(skeleton_default, {
        active: true,
        title: false,
        paragraph: {
          rows: (mode === null || mode === void 0 ? void 0 : mode.includes("inline")) ? 6 : 1
        }
      })
    });
  }
  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }
  var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;
  if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) {
    return null;
  }
  return wrapSSR(/* @__PURE__ */ _createElement(menu_default, _objectSpread2(_objectSpread2({}, openKeysProps), {}, {
    key: "Menu",
    mode,
    inlineIndent: 16,
    defaultOpenKeys: defaultOpenKeysRef.current,
    theme: "light",
    selectedKeys,
    style: _objectSpread2({
      backgroundColor: "transparent",
      border: "none"
    }, style),
    className: (0, import_classnames4.default)(className, hashId, baseClassName, (_classNames8 = {}, _defineProperty(_classNames8, "".concat(baseClassName, "-horizontal"), mode === "horizontal"), _defineProperty(_classNames8, "".concat(baseClassName, "-collapsed"), props.collapsed), _classNames8)),
    items: menuUtils.getNavMenuItems(finallyData, 0),
    onOpenChange: setOpenKeys
  }, props.menuProps)));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/stylish.js
function useStylish(prefixCls, _ref) {
  var stylish = _ref.stylish, proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
  return useStyle("ProLayoutSiderMenuStylish", function(token2) {
    var siderMenuToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth
    });
    if (!stylish)
      return [];
    return [
      _defineProperty({}, token2.proComponentsCls, _defineProperty({}, "".concat(token2.proComponentsCls, "-layout"), _defineProperty({}, "".concat(siderMenuToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(siderMenuToken))))
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js
var Sider = layout_default.Sider;
var renderLogoAndTitle = function renderLogoAndTitle2(props) {
  var renderKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "menuHeaderRender";
  var logo = props.logo, title = props.title, layout = props.layout;
  var renderFunction = props[renderKey || ""];
  if (renderFunction === false) {
    return null;
  }
  var logoDom = defaultRenderLogo(logo);
  var titleDom = _jsx13("h1", {
    children: title !== null && title !== void 0 ? title : "Ant Design Pro"
  });
  if (renderFunction) {
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
  }
  if (props.isMobile) {
    return null;
  }
  if (layout === "mix" && renderKey === "menuHeaderRender")
    return false;
  if (props.collapsed) {
    return _jsx13("a", {
      children: logoDom
    }, "title");
  }
  return _jsxs8("a", {
    children: [
      logoDom,
      titleDom
    ]
  }, "title");
};
var SiderMenu = function SiderMenu2(props) {
  var _classNames, _props$menu2, _process$env$NODE_ENV, _token$layout, _token$layout$sider, _token$layout2, _token$layout2$sider, _token$layout3, _token$layout3$sider, _token$layout4, _token$layout4$sider, _token$layout5, _token$layout5$sider, _token$layout6, _token$layout6$sider;
  var collapsed = props.collapsed, originCollapsed = props.originCollapsed, fixSiderbar = props.fixSiderbar, menuFooterRender = props.menuFooterRender, _onCollapse = props.onCollapse, theme = props.theme, siderWidth = props.siderWidth, isMobile = props.isMobile, onMenuHeaderClick = props.onMenuHeaderClick, _props$breakpoint = props.breakpoint, breakpoint = _props$breakpoint === void 0 ? "lg" : _props$breakpoint, style = props.style, layout = props.layout, _props$menuExtraRende = props.menuExtraRender, menuExtraRender = _props$menuExtraRende === void 0 ? false : _props$menuExtraRende, links = props.links, menuContentRender = props.menuContentRender, collapsedButtonRender = props.collapsedButtonRender, prefixCls = props.prefixCls, avatarProps = props.avatarProps, rightContentRender = props.rightContentRender, actionsRender = props.actionsRender, onOpenChange = props.onOpenChange, stylish = props.stylish, logoStyle = props.logoStyle;
  var _useContext = useContext6(ProProvider), hashId = _useContext.hashId;
  var showSiderExtraDom = useMemo6(function() {
    if (isMobile)
      return false;
    if (layout === "mix")
      return false;
    return true;
  }, [
    isMobile,
    layout
  ]);
  var baseClassName = "".concat(prefixCls, "-sider");
  var stylishClassName = useStylish("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    stylish,
    proLayoutCollapsedWidth: 64
  });
  var siderClassName = (0, import_classnames5.default)("".concat(baseClassName), hashId, (_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-fixed"), fixSiderbar), _defineProperty(_classNames, "".concat(baseClassName, "-collapsed"), props.collapsed), _defineProperty(_classNames, "".concat(baseClassName, "-layout-").concat(layout), layout && !isMobile), _defineProperty(_classNames, "".concat(baseClassName, "-light"), theme !== "dark"), _defineProperty(_classNames, "".concat(baseClassName, "-mix"), layout === "mix" && !isMobile), _defineProperty(_classNames, "".concat(baseClassName, "-stylish"), !!stylish), _classNames));
  var headerDom = renderLogoAndTitle(props);
  var extraDom = menuExtraRender && menuExtraRender(props);
  var menuDom = useMemo6(function() {
    return menuContentRender !== false && /* @__PURE__ */ _createElement2(BaseMenu, _objectSpread2(_objectSpread2({}, props), {}, {
      key: "base-menu",
      mode: "inline",
      handleOpenChange: onOpenChange,
      style: {
        width: "100%"
      },
      className: "".concat(baseClassName, "-menu ").concat(hashId)
    }));
  }, [
    baseClassName,
    hashId,
    menuContentRender,
    onOpenChange,
    props
  ]);
  var linksMenuItems = (links || []).map(function(node, index) {
    return {
      className: "".concat(baseClassName, "-link"),
      label: node,
      key: index
    };
  });
  var menuRenderDom = useMemo6(function() {
    return menuContentRender ? menuContentRender(props, menuDom) : menuDom;
  }, [
    menuContentRender,
    menuDom,
    props
  ]);
  var avatarDom = useMemo6(function() {
    return avatarProps && _jsxs8(space_default, {
      align: "center",
      className: "".concat(baseClassName, "-actions-avatar"),
      children: [
        _jsx13(avatar_default, _objectSpread2({
          size: 28
        }, avatarProps)),
        avatarProps.title && !collapsed && _jsx13("span", {
          children: avatarProps.title
        })
      ]
    });
  }, [
    avatarProps,
    baseClassName,
    collapsed
  ]);
  var actionsDom = useMemo6(
    function() {
      if (!actionsRender)
        return null;
      return _jsx13(space_default, {
        align: "center",
        size: 4,
        direction: collapsed ? "vertical" : "horizontal",
        className: (0, import_classnames5.default)([
          "".concat(baseClassName, "-actions-list"),
          collapsed && "".concat(baseClassName, "-actions-list-collapsed"),
          hashId
        ]),
        children: actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(props).map(function(item, index) {
          return _jsx13("div", {
            className: "".concat(baseClassName, "-actions-list-item ").concat(hashId),
            children: item
          }, index);
        })
      });
    },
    [
      actionsRender,
      baseClassName,
      collapsed
    ]
  );
  var appsDom = useMemo6(function() {
    return _jsx13(AppsLogoComponents, {
      appList: props.appList,
      prefixCls: props.prefixCls
    });
  }, [
    props.appList,
    props.prefixCls
  ]);
  var collapsedDom = useMemo6(function() {
    if (collapsedButtonRender === false)
      return null;
    var dom = _jsx13(CollapsedIcon, {
      isMobile,
      collapsed: originCollapsed,
      className: "".concat(baseClassName, "-collapsed-button"),
      onClick: function onClick() {
        _onCollapse === null || _onCollapse === void 0 ? void 0 : _onCollapse(!originCollapsed);
      }
    });
    if (collapsedButtonRender)
      return collapsedButtonRender(collapsed, dom);
    return dom;
  }, [
    collapsedButtonRender,
    isMobile,
    originCollapsed,
    baseClassName,
    collapsed,
    _onCollapse
  ]);
  var actionAreaDom = useMemo6(function() {
    if (!avatarDom && !actionsDom)
      return null;
    return _jsxs8("div", {
      className: (0, import_classnames5.default)("".concat(baseClassName, "-actions"), hashId, collapsed && "".concat(baseClassName, "-actions-collapsed")),
      children: [
        avatarDom,
        actionsDom
      ]
    });
  }, [
    actionsDom,
    avatarDom,
    baseClassName,
    collapsed,
    hashId
  ]);
  var collapsedWidth = 60;
  var hideMenuWhenCollapsedClassName = useMemo6(function() {
    var _props$menu;
    if ((props === null || props === void 0 ? void 0 : (_props$menu = props.menu) === null || _props$menu === void 0 ? void 0 : _props$menu.hideMenuWhenCollapsed) && collapsed) {
      return "".concat(baseClassName, "-hide-menu-collapsed");
    }
    return null;
  }, [
    baseClassName,
    collapsed,
    props === null || props === void 0 ? void 0 : (_props$menu2 = props.menu) === null || _props$menu2 === void 0 ? void 0 : _props$menu2.hideMenuWhenCollapsed
  ]);
  var menuFooterDom = menuFooterRender && (menuFooterRender === null || menuFooterRender === void 0 ? void 0 : menuFooterRender(props));
  var menuDomItems = _jsxs8(_Fragment3, {
    children: [
      headerDom && _jsxs8("div", {
        className: (0, import_classnames5.default)([
          (0, import_classnames5.default)("".concat(baseClassName, "-logo"), hashId, _defineProperty({}, "".concat(baseClassName, "-logo-collapsed"), collapsed))
        ]),
        onClick: showSiderExtraDom ? onMenuHeaderClick : void 0,
        id: "logo",
        style: logoStyle,
        children: [
          headerDom,
          appsDom
        ]
      }),
      extraDom && _jsx13("div", {
        className: (0, import_classnames5.default)([
          "".concat(baseClassName, "-extra"),
          !headerDom && "".concat(baseClassName, "-extra-no-logo"),
          hashId
        ]),
        children: extraDom
      }),
      _jsx13("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden"
        },
        children: menuRenderDom
      }),
      links ? _jsx13("div", {
        className: "".concat(baseClassName, "-links ").concat(hashId),
        children: _jsx13(menu_default, {
          inlineIndent: 16,
          className: "".concat(baseClassName, "-link-menu ").concat(hashId),
          selectedKeys: [],
          openKeys: [],
          theme: "light",
          mode: "inline",
          items: linksMenuItems
        })
      }) : null,
      showSiderExtraDom && _jsxs8(_Fragment3, {
        children: [
          actionAreaDom,
          rightContentRender ? _jsx13("div", {
            className: (0, import_classnames5.default)("".concat(baseClassName, "-actions"), hashId, _defineProperty({}, "".concat(baseClassName, "-actions-collapsed"), collapsed)),
            children: rightContentRender === null || rightContentRender === void 0 ? void 0 : rightContentRender(props)
          }) : null
        ]
      }),
      menuFooterDom && _jsx13("div", {
        className: (0, import_classnames5.default)([
          "".concat(baseClassName, "-footer"),
          hashId,
          _defineProperty({}, "".concat(baseClassName, "-footer-collapsed"), collapsed)
        ]),
        children: menuFooterDom
      })
    ]
  });
  var _useContext2 = useContext6(ProProvider), token2 = _useContext2.token;
  return stylishClassName.wrapSSR(_jsxs8(_Fragment3, {
    children: [
      fixSiderbar && !isMobile && !hideMenuWhenCollapsedClassName && _jsx13("div", {
        style: _objectSpread2({
          width: collapsed ? collapsedWidth : siderWidth,
          overflow: "hidden",
          flex: "0 0 ".concat(collapsed ? collapsedWidth : siderWidth, "px"),
          maxWidth: collapsed ? collapsedWidth : siderWidth,
          minWidth: collapsed ? collapsedWidth : siderWidth,
          transition: "all 0.2s ease 0s"
        }, style)
      }),
      _jsxs8(Sider, {
        collapsible: true,
        trigger: null,
        collapsed,
        breakpoint: breakpoint === false ? void 0 : breakpoint,
        onCollapse: function onCollapse(collapse) {
          if (isMobile)
            return;
          _onCollapse === null || _onCollapse === void 0 ? void 0 : _onCollapse(collapse);
        },
        collapsedWidth,
        style,
        theme: "light",
        width: siderWidth,
        className: (0, import_classnames5.default)(siderClassName, hashId, hideMenuWhenCollapsedClassName),
        children: [
          _jsx13(config_provider_default, {
            theme: {
              hashed: ((_process$env$NODE_ENV = "development") === null || _process$env$NODE_ENV === void 0 ? void 0 : _process$env$NODE_ENV.toLowerCase()) !== "test",
              components: {
                Menu: {
                  radiusItem: 4,
                  colorItemBgSelected: (token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$sider = _token$layout.sider) === null || _token$layout$sider === void 0 ? void 0 : _token$layout$sider.colorBgMenuItemSelected) || "rgba(0, 0, 0, 0.04)",
                  colorItemBgActive: (token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$sider = _token$layout2.sider) === null || _token$layout2$sider === void 0 ? void 0 : _token$layout2$sider.colorBgMenuItemHover) || "rgba(0, 0, 0, 0.04)",
                  colorActiveBarWidth: 0,
                  colorActiveBarHeight: 0,
                  colorActiveBarBorderSize: 0,
                  colorItemText: (token2 === null || token2 === void 0 ? void 0 : (_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : (_token$layout3$sider = _token$layout3.sider) === null || _token$layout3$sider === void 0 ? void 0 : _token$layout3$sider.colorTextMenu) || "rgba(0, 0, 0, 0.65)",
                  colorItemTextHover: (token2 === null || token2 === void 0 ? void 0 : (_token$layout4 = token2.layout) === null || _token$layout4 === void 0 ? void 0 : (_token$layout4$sider = _token$layout4.sider) === null || _token$layout4$sider === void 0 ? void 0 : _token$layout4$sider.colorTextMenuActive) || "rgba(0, 0, 0, 0.85)",
                  colorItemTextSelected: (token2 === null || token2 === void 0 ? void 0 : (_token$layout5 = token2.layout) === null || _token$layout5 === void 0 ? void 0 : (_token$layout5$sider = _token$layout5.sider) === null || _token$layout5$sider === void 0 ? void 0 : _token$layout5$sider.colorTextMenuSelected) || "rgba(0, 0, 0, 1)",
                  colorItemBg: "transparent",
                  colorSubItemBg: "transparent",
                  colorBgElevated: (token2 === null || token2 === void 0 ? void 0 : (_token$layout6 = token2.layout) === null || _token$layout6 === void 0 ? void 0 : (_token$layout6$sider = _token$layout6.sider) === null || _token$layout6$sider === void 0 ? void 0 : _token$layout6$sider.colorBgMenuItemCollapsedElevated) || "transparent"
                }
              }
            },
            children: hideMenuWhenCollapsedClassName ? _jsx13("div", {
              className: "".concat(baseClassName, "-hide-when-collapsed ").concat(hashId),
              style: {
                height: "100%",
                width: "100%",
                opacity: hideMenuWhenCollapsedClassName ? 0 : 1
              },
              children: menuDomItems
            }) : menuDomItems
          }),
          collapsedDom
        ]
      })
    ]
  }));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js
import { jsx as _jsx15, jsxs as _jsxs10 } from "react/jsx-runtime";
var import_classnames7 = __toESM(require_classnames());
import { useContext as useContext8, useMemo as useMemo8, useRef as useRef7 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/RightContent.js
import { jsx as _jsx14, jsxs as _jsxs9 } from "react/jsx-runtime";
import { createElement as _createElement3 } from "react";
var import_classnames6 = __toESM(require_classnames());
import React5, { useContext as useContext7, useMemo as useMemo7, useState as useState3 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/rightContentStyle.js
var genTopNavHeaderStyle = function genTopNavHeaderStyle2(token2) {
  var _token$layout, _token$layout$header, _token$layout2, _token$layout2$header, _token$layout3, _token$layout3$header;
  return _defineProperty({}, token2.componentCls, {
    "&-header-actions": {
      display: "flex",
      height: "100%",
      "&-item": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBlock: 0,
        paddingInline: 2,
        color: token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$header = _token$layout.header) === null || _token$layout$header === void 0 ? void 0 : _token$layout$header.colorTextRightActionsItem,
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: token2.borderRadius,
        "> *": {
          paddingInline: 6,
          paddingBlock: 6,
          borderRadius: token2.borderRadius,
          "&:hover": {
            backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$header = _token$layout2.header) === null || _token$layout2$header === void 0 ? void 0 : _token$layout2$header.colorBgRightActionsItemHover
          }
        }
      },
      "&-avatar": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        paddingInlineStart: token2.padding,
        paddingInlineEnd: token2.padding,
        cursor: "pointer",
        color: token2.colorTextSecondary,
        "> div": {
          height: "44px",
          color: token2.colorTextSecondary,
          paddingInline: 8,
          paddingBlock: 8,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          lineHeight: "44px",
          borderRadius: token2.borderRadius,
          "&:hover": {
            backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : (_token$layout3$header = _token$layout3.header) === null || _token$layout3$header === void 0 ? void 0 : _token$layout3$header.colorBgRightActionsItemHover
          }
        }
      }
    }
  });
};
function useStyle7(prefixCls) {
  return useStyle("ProLayoutRightContent", function(token2) {
    var proToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genTopNavHeaderStyle(proToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/RightContent.js
var _excluded5 = [
  "rightContentRender",
  "avatarProps",
  "actionsRender",
  "headerContentRender"
];
var _excluded22 = [
  "title"
];
var RightContent = function RightContent2(_ref) {
  var rightContentRender = _ref.rightContentRender, avatarProps = _ref.avatarProps, actionsRender = _ref.actionsRender, headerContentRender = _ref.headerContentRender, props = _objectWithoutProperties(_ref, _excluded5);
  var _useContext = useContext7(config_provider_default.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = "".concat(getPrefixCls(), "-pro-global-header");
  var _useStyle = useStyle7(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var _useState = useState3("auto"), _useState2 = _slicedToArray(_useState, 2), rightSize = _useState2[0], setRightSize = _useState2[1];
  var avatarDom = useMemo7(function() {
    if (!avatarProps)
      return null;
    var title = avatarProps.title, rest = _objectWithoutProperties(avatarProps, _excluded22);
    return [
      /* @__PURE__ */ _createElement3(avatar_default, _objectSpread2(_objectSpread2({}, rest), {}, {
        size: 28,
        key: "avatar"
      })),
      title ? _jsx14("span", {
        style: {
          marginInlineStart: 8
        },
        children: title
      }, "name") : void 0
    ];
  }, [
    avatarProps
  ]);
  var rightActionsRender = function rightActionsRender2(restParams) {
    var doms = actionsRender && (actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(restParams));
    if (!doms && !avatarDom)
      return null;
    if (!Array.isArray(doms))
      doms = [
        doms
      ];
    return wrapSSR(_jsxs9("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId),
      children: [
        doms.filter(Boolean).map(function(dom, index) {
          var hideHover = false;
          if (/* @__PURE__ */ React5.isValidElement(dom)) {
            var _dom$props;
            hideHover = !!(dom === null || dom === void 0 ? void 0 : (_dom$props = dom.props) === null || _dom$props === void 0 ? void 0 : _dom$props["aria-hidden"]);
          }
          return _jsx14("div", {
            className: (0, import_classnames6.default)("".concat(prefixCls, "-header-actions-item ").concat(hashId), _defineProperty({}, "".concat(prefixCls, "-header-actions-hover"), !hideHover)),
            children: dom
          }, index);
        }),
        avatarDom && _jsx14("span", {
          className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId),
          children: _jsx14("div", {
            children: avatarDom
          })
        })
      ]
    }));
  };
  var setRightSizeDebounceFn = useDebounceFn(/* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(width) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              setRightSize(width);
            case 1:
            case "end":
              return _context.stop();
          }
      }, _callee);
    }));
    return function(_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 160);
  return _jsx14("div", {
    className: "".concat(prefixCls, "-right-content ").concat(hashId),
    style: {
      minWidth: rightSize,
      height: "100%"
    },
    children: _jsx14("div", {
      style: {
        height: "100%"
      },
      children: _jsx14(es_default, {
        onResize: function onResize(_ref3) {
          var width = _ref3.width;
          setRightSizeDebounceFn.run(width);
        },
        children: (rightContentRender || rightActionsRender) && _jsx14("div", {
          style: {
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end"
          },
          children: (rightContentRender || rightActionsRender)(_objectSpread2(_objectSpread2({}, props), {}, {
            rightContentSize: rightSize
          }))
        })
      })
    })
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/TopNavHeader/style.js
var genTopNavHeaderStyle3 = function genTopNavHeaderStyle4(token2) {
  var _token$layout, _token$layout$header, _token$layout2, _token$layout2$header;
  return _defineProperty({}, token2.componentCls, {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    ".anticon": {
      color: "inherit"
    },
    "&-main": {
      display: "flex",
      height: "100%",
      paddingInlineStart: "16px",
      "&-left": _defineProperty({
        display: "flex",
        alignItems: "center"
      }, "".concat(token2.proComponentsCls, "-layout-apps-icon"), {
        marginInlineEnd: 16,
        marginInlineStart: -8
      })
    },
    "&-wide": {
      maxWidth: 1152,
      margin: "0 auto"
    },
    "&-logo": {
      position: "relative",
      display: "flex",
      height: "100%",
      alignItems: "center",
      overflow: "hidden",
      "> *:first-child": {
        display: "flex",
        alignItems: "center",
        minHeight: "22px",
        fontSize: "22px"
      },
      "> *:first-child > img": {
        display: "inline-block",
        height: "32px",
        verticalAlign: "middle"
      },
      "> *:first-child > h1": {
        display: "inline-block",
        marginBlock: 0,
        marginInline: 0,
        lineHeight: "24px",
        marginInlineStart: 6,
        fontWeight: "600",
        fontSize: "16px",
        color: token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$header = _token$layout.header) === null || _token$layout$header === void 0 ? void 0 : _token$layout$header.colorHeaderTitle,
        verticalAlign: "top"
      }
    },
    "&-menu": {
      minWidth: 0,
      display: "flex",
      alignItems: "center",
      paddingInline: 6,
      paddingBlock: 6,
      lineHeight: "".concat(((token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$header = _token$layout2.header) === null || _token$layout2$header === void 0 ? void 0 : _token$layout2$header.heightLayoutHeader) || 56) - 12, "px")
    }
  });
};
function useStyle8(prefixCls) {
  return useStyle("ProLayoutTopNavHeader", function(token2) {
    var topNavHeaderToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genTopNavHeaderStyle3(topNavHeaderToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js
var TopNavHeader = function TopNavHeader2(props) {
  var _token$layout9, _token$layout9$header, _token$layout10, _token$layout10$heade, _token$layout11, _token$layout11$heade, _token$layout12, _token$layout12$heade, _token$layout13, _token$layout13$heade, _token$layout14, _token$layout14$heade;
  var ref = useRef7(null);
  var onMenuHeaderClick = props.onMenuHeaderClick, contentWidth = props.contentWidth, rightContentRender = props.rightContentRender, propsClassName = props.className, style = props.style, headerContentRender = props.headerContentRender, layout = props.layout, actionsRender = props.actionsRender;
  var _useContext = useContext8(config_provider_default.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var _useContext2 = useContext8(ProProvider), token2 = _useContext2.token;
  var prefixCls = "".concat(props.prefixCls || getPrefixCls("pro"), "-top-nav-header");
  var _useStyle = useStyle8(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var headerDom = renderLogoAndTitle(_objectSpread2(_objectSpread2({}, props), {}, {
    collapsed: false
  }), layout === "mix" ? "headerTitleRender" : void 0);
  var contentDom = useMemo8(function() {
    var _process$env$NODE_ENV, _token$layout, _token$layout$header, _token$layout2, _token$layout2$header, _token$layout3, _token$layout3$header, _token$layout4, _token$layout4$header, _token$layout5, _token$layout5$header, _token$layout6, _token$layout6$header, _token$layout7, _token$layout7$header, _token$layout8, _token$layout8$header, _props$menuProps;
    var defaultDom = _jsx15(config_provider_default, {
      theme: {
        hashed: ((_process$env$NODE_ENV = "development") === null || _process$env$NODE_ENV === void 0 ? void 0 : _process$env$NODE_ENV.toLowerCase()) !== "test",
        components: {
          Menu: {
            colorItemBg: (token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$header = _token$layout.header) === null || _token$layout$header === void 0 ? void 0 : _token$layout$header.colorBgHeader) || "transparent",
            colorSubItemBg: (token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$header = _token$layout2.header) === null || _token$layout2$header === void 0 ? void 0 : _token$layout2$header.colorBgHeader) || "transparent",
            radiusItem: 4,
            colorItemBgSelected: (token2 === null || token2 === void 0 ? void 0 : (_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : (_token$layout3$header = _token$layout3.header) === null || _token$layout3$header === void 0 ? void 0 : _token$layout3$header.colorBgMenuItemSelected) || (token2 === null || token2 === void 0 ? void 0 : token2.colorBgTextHover),
            colorItemBgActive: (token2 === null || token2 === void 0 ? void 0 : (_token$layout4 = token2.layout) === null || _token$layout4 === void 0 ? void 0 : (_token$layout4$header = _token$layout4.header) === null || _token$layout4$header === void 0 ? void 0 : _token$layout4$header.colorBgMenuItemHover) || (token2 === null || token2 === void 0 ? void 0 : token2.colorBgTextHover),
            colorItemBgSelectedHorizontal: (token2 === null || token2 === void 0 ? void 0 : (_token$layout5 = token2.layout) === null || _token$layout5 === void 0 ? void 0 : (_token$layout5$header = _token$layout5.header) === null || _token$layout5$header === void 0 ? void 0 : _token$layout5$header.colorBgMenuItemSelected) || (token2 === null || token2 === void 0 ? void 0 : token2.colorBgTextHover),
            colorActiveBarWidth: 0,
            colorActiveBarHeight: 0,
            colorActiveBarBorderSize: 0,
            colorItemText: (token2 === null || token2 === void 0 ? void 0 : (_token$layout6 = token2.layout) === null || _token$layout6 === void 0 ? void 0 : (_token$layout6$header = _token$layout6.header) === null || _token$layout6$header === void 0 ? void 0 : _token$layout6$header.colorTextMenu) || (token2 === null || token2 === void 0 ? void 0 : token2.colorTextSecondary),
            colorItemTextHover: (token2 === null || token2 === void 0 ? void 0 : (_token$layout7 = token2.layout) === null || _token$layout7 === void 0 ? void 0 : (_token$layout7$header = _token$layout7.header) === null || _token$layout7$header === void 0 ? void 0 : _token$layout7$header.colorTextMenuActive) || (token2 === null || token2 === void 0 ? void 0 : token2.colorText),
            colorItemTextSelected: (token2 === null || token2 === void 0 ? void 0 : (_token$layout8 = token2.layout) === null || _token$layout8 === void 0 ? void 0 : (_token$layout8$header = _token$layout8.header) === null || _token$layout8$header === void 0 ? void 0 : _token$layout8$header.colorTextMenuSelected) || (token2 === null || token2 === void 0 ? void 0 : token2.colorTextBase)
          }
        }
      },
      children: _jsx15(BaseMenu, _objectSpread2(_objectSpread2(_objectSpread2({
        theme: "light"
      }, props), {}, {
        className: "".concat(prefixCls, "-base-menu ").concat(hashId)
      }, props.menuProps), {}, {
        style: _objectSpread2({
          width: "100%"
        }, (_props$menuProps = props.menuProps) === null || _props$menuProps === void 0 ? void 0 : _props$menuProps.style),
        collapsed: false,
        menuRenderType: "header",
        mode: "horizontal"
      }))
    });
    if (headerContentRender) {
      return headerContentRender(props, defaultDom);
    }
    return defaultDom;
  }, [
    token2 === null || token2 === void 0 ? void 0 : (_token$layout9 = token2.layout) === null || _token$layout9 === void 0 ? void 0 : (_token$layout9$header = _token$layout9.header) === null || _token$layout9$header === void 0 ? void 0 : _token$layout9$header.colorBgHeader,
    token2 === null || token2 === void 0 ? void 0 : (_token$layout10 = token2.layout) === null || _token$layout10 === void 0 ? void 0 : (_token$layout10$heade = _token$layout10.header) === null || _token$layout10$heade === void 0 ? void 0 : _token$layout10$heade.colorBgMenuItemSelected,
    token2 === null || token2 === void 0 ? void 0 : (_token$layout11 = token2.layout) === null || _token$layout11 === void 0 ? void 0 : (_token$layout11$heade = _token$layout11.header) === null || _token$layout11$heade === void 0 ? void 0 : _token$layout11$heade.colorBgMenuItemHover,
    token2 === null || token2 === void 0 ? void 0 : (_token$layout12 = token2.layout) === null || _token$layout12 === void 0 ? void 0 : (_token$layout12$heade = _token$layout12.header) === null || _token$layout12$heade === void 0 ? void 0 : _token$layout12$heade.colorTextMenu,
    token2 === null || token2 === void 0 ? void 0 : (_token$layout13 = token2.layout) === null || _token$layout13 === void 0 ? void 0 : (_token$layout13$heade = _token$layout13.header) === null || _token$layout13$heade === void 0 ? void 0 : _token$layout13$heade.colorTextMenuActive,
    token2 === null || token2 === void 0 ? void 0 : (_token$layout14 = token2.layout) === null || _token$layout14 === void 0 ? void 0 : (_token$layout14$heade = _token$layout14.header) === null || _token$layout14$heade === void 0 ? void 0 : _token$layout14$heade.colorTextMenuSelected,
    token2 === null || token2 === void 0 ? void 0 : token2.colorBgTextHover,
    token2 === null || token2 === void 0 ? void 0 : token2.colorTextSecondary,
    token2 === null || token2 === void 0 ? void 0 : token2.colorText,
    token2 === null || token2 === void 0 ? void 0 : token2.colorTextBase,
    props,
    prefixCls,
    hashId,
    headerContentRender
  ]);
  return wrapSSR(_jsx15("div", {
    className: (0, import_classnames7.default)(prefixCls, hashId, propsClassName, _defineProperty({}, "".concat(prefixCls, "-light"), true)),
    style,
    children: _jsxs10("div", {
      ref,
      className: (0, import_classnames7.default)("".concat(prefixCls, "-main"), hashId, _defineProperty({}, "".concat(prefixCls, "-wide"), contentWidth === "Fixed")),
      children: [
        headerDom && _jsxs10("div", {
          className: (0, import_classnames7.default)("".concat(prefixCls, "-main-left ").concat(hashId)),
          onClick: onMenuHeaderClick,
          children: [
            _jsx15(AppsLogoComponents, _objectSpread2({}, props)),
            _jsx15("div", {
              className: "".concat(prefixCls, "-logo ").concat(hashId),
              id: "logo",
              children: headerDom
            }, "logo")
          ]
        }),
        _jsx15("div", {
          style: {
            flex: 1
          },
          className: "".concat(prefixCls, "-menu ").concat(hashId),
          children: contentDom
        }),
        (rightContentRender || actionsRender || props.avatarProps) && _jsx15(RightContent, _objectSpread2(_objectSpread2({
          rightContentRender
        }, props), {}, {
          prefixCls
        }))
      ]
    })
  }));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/style.js
var genGlobalHeaderStyle = function genGlobalHeaderStyle2(token2) {
  var _token$layout, _token$layout$header, _token$layout2, _token$layout2$header, _token$layout3, _token$layout3$header, _token$componentCls;
  return _defineProperty({}, token2.componentCls, (_token$componentCls = {
    position: "relative",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    marginBlock: 0,
    marginInline: 16,
    height: ((_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$header = _token$layout.header) === null || _token$layout$header === void 0 ? void 0 : _token$layout$header.heightLayoutHeader) || 56,
    boxSizing: "border-box",
    "> a": {
      height: "100%"
    }
  }, _defineProperty(_token$componentCls, "".concat(token2.proComponentsCls, "-layout-apps-icon"), {
    marginInlineEnd: 16
  }), _defineProperty(_token$componentCls, "&-collapsed-button", {
    minHeight: "22px",
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$header = _token$layout2.header) === null || _token$layout2$header === void 0 ? void 0 : _token$layout2$header.colorHeaderTitle,
    fontSize: "18px",
    marginInlineEnd: "16px"
  }), _defineProperty(_token$componentCls, "&-logo", {
    position: "relative",
    marginInlineEnd: "16px",
    a: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      minHeight: "22px",
      fontSize: "20px"
    },
    img: {
      height: "28px"
    },
    h1: {
      height: "32px",
      marginBlock: 0,
      marginInline: 0,
      marginInlineStart: 8,
      fontWeight: "600",
      color: ((_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : (_token$layout3$header = _token$layout3.header) === null || _token$layout3$header === void 0 ? void 0 : _token$layout3$header.colorHeaderTitle) || token2.colorTextHeading,
      fontSize: "18px",
      lineHeight: "32px"
    },
    "&-mix": {
      display: "flex",
      alignItems: "center"
    }
  }), _defineProperty(_token$componentCls, "&-logo-mobile", {
    minWidth: "24px",
    marginInlineEnd: 0
  }), _token$componentCls));
};
function useStyle9(prefixCls) {
  return useStyle("ProLayoutGlobalHeader", function(token2) {
    var GlobalHeaderToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genGlobalHeaderStyle(GlobalHeaderToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.js
var renderLogo3 = function renderLogo4(menuHeaderRender, logoDom) {
  if (menuHeaderRender === false) {
    return null;
  }
  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }
  return logoDom;
};
var GlobalHeader = function GlobalHeader2(props) {
  var _classNames;
  var isMobile = props.isMobile, logo = props.logo, collapsed = props.collapsed, onCollapse = props.onCollapse, rightContentRender = props.rightContentRender, menuHeaderRender = props.menuHeaderRender, onMenuHeaderClick = props.onMenuHeaderClick, propClassName = props.className, style = props.style, layout = props.layout, children = props.children, splitMenus = props.splitMenus, menuData = props.menuData, prefixCls = props.prefixCls;
  var _useContext = useContext9(config_provider_default.ConfigContext), direction = _useContext.direction;
  var _useContext2 = useContext9(config_provider_default.ConfigContext), getPrefixCls = _useContext2.getPrefixCls;
  var baseClassName = "".concat(prefixCls || getPrefixCls("pro"), "-global-header");
  var _useStyle = useStyle9(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var className = (0, import_classnames8.default)(propClassName, baseClassName, hashId);
  if (layout === "mix" && !isMobile && splitMenus) {
    var noChildrenMenuData = (menuData || []).map(function(item) {
      return _objectSpread2(_objectSpread2({}, item), {}, {
        children: void 0,
        routes: void 0
      });
    });
    var clearMenuData = clearMenuItem(noChildrenMenuData);
    return _jsx16(TopNavHeader, _objectSpread2(_objectSpread2({
      mode: "horizontal"
    }, props), {}, {
      splitMenus: false,
      menuData: clearMenuData
    }));
  }
  var logoClassNames = (0, import_classnames8.default)("".concat(baseClassName, "-logo"), hashId, (_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-logo-rtl"), direction === "rtl"), _defineProperty(_classNames, "".concat(baseClassName, "-logo-mix"), layout === "mix"), _defineProperty(_classNames, "".concat(baseClassName, "-logo-mobile"), isMobile), _classNames));
  var logoDom = _jsx16("span", {
    className: logoClassNames,
    children: _jsx16("a", {
      children: defaultRenderLogo(logo)
    })
  }, "logo");
  return wrapSSR(_jsxs11("div", {
    className,
    style: _objectSpread2({}, style),
    children: [
      isMobile && _jsx16("span", {
        className: "".concat(baseClassName, "-collapsed-button ").concat(hashId),
        onClick: function onClick() {
          onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(!collapsed);
        },
        children: _jsx16(MenuOutlined_default, {})
      }),
      isMobile && renderLogo3(menuHeaderRender, logoDom),
      layout === "mix" && !isMobile && _jsxs11(_Fragment4, {
        children: [
          _jsx16(AppsLogoComponents, _objectSpread2({}, props)),
          _jsx16("div", {
            className: logoClassNames,
            onClick: onMenuHeaderClick,
            children: renderLogoAndTitle(_objectSpread2(_objectSpread2({}, props), {}, {
              collapsed: false
            }), "headerTitleRender")
          })
        ]
      }),
      _jsx16("div", {
        style: {
          flex: 1
        },
        children
      }),
      (rightContentRender || props.actionsRender || props.avatarProps) && _jsx16(RightContent, _objectSpread2({
        rightContentRender
      }, props))
    ]
  }));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/Header/style/stylish.js
function useStylish2(prefixCls, _ref) {
  var stylish = _ref.stylish, proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
  return useStyle("ProLayoutHeaderStylish", function(token2) {
    var stylishToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth
    });
    if (!stylish)
      return [];
    return [
      _defineProperty({}, token2.proComponentsCls, _defineProperty({}, "".concat(token2.proComponentsCls, "-layout"), _defineProperty({}, "".concat(stylishToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(stylishToken))))
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/Header/index.js
var Header = layout_default.Header;
var DefaultHeader = function DefaultHeader2(props) {
  var _classNames, _process$env$NODE_ENV, _token$layout, _token$layout$header, _token$layout2, _token$layout2$header;
  var isMobile = props.isMobile, fixedHeader = props.fixedHeader, propsClassName = props.className, style = props.style, collapsed = props.collapsed, prefixCls = props.prefixCls, onCollapse = props.onCollapse, layout = props.layout, headerRender3 = props.headerRender, headerContentRender = props.headerContentRender;
  var _useContext = useContext10(ProProvider), token2 = _useContext.token;
  var renderContent = useCallback6(function() {
    var isTop2 = layout === "top";
    var clearMenuData = clearMenuItem(props.menuData || []);
    var defaultDom = _jsx17(GlobalHeader, _objectSpread2(_objectSpread2({
      onCollapse
    }, props), {}, {
      menuData: clearMenuData,
      children: headerContentRender && headerContentRender(props, null)
    }));
    if (isTop2 && !isMobile) {
      defaultDom = _jsx17(TopNavHeader, _objectSpread2(_objectSpread2({
        mode: "horizontal",
        onCollapse
      }, props), {}, {
        menuData: clearMenuData
      }));
    }
    if (headerRender3 && typeof headerRender3 === "function") {
      return headerRender3(props, defaultDom);
    }
    return defaultDom;
  }, [
    headerContentRender,
    headerRender3,
    isMobile,
    layout,
    onCollapse,
    props
  ]);
  var needFixedHeader = fixedHeader || layout === "mix";
  var isTop = layout === "top";
  var baseClassName = "".concat(prefixCls, "-layout-header");
  var _useStyle = useStyle3(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var stylish = useStylish2("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    proLayoutCollapsedWidth: 64,
    stylish: props.stylish
  });
  var className = (0, import_classnames9.default)(propsClassName, hashId, baseClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-fixed-header"), needFixedHeader), _defineProperty(_classNames, "".concat(baseClassName, "-mix"), layout === "mix"), _defineProperty(_classNames, "".concat(baseClassName, "-fixed-header-action"), !collapsed), _defineProperty(_classNames, "".concat(baseClassName, "-top-menu"), isTop), _defineProperty(_classNames, "".concat(baseClassName, "-header"), true), _defineProperty(_classNames, "".concat(baseClassName, "-stylish"), !!props.stylish), _classNames));
  if (layout === "side" && !isMobile)
    return null;
  return stylish.wrapSSR(wrapSSR(_jsx17(_Fragment5, {
    children: _jsxs12(config_provider_default, {
      theme: {
        hashed: ((_process$env$NODE_ENV = "development") === null || _process$env$NODE_ENV === void 0 ? void 0 : _process$env$NODE_ENV.toLowerCase()) !== "test",
        components: {
          Layout: {
            colorBgHeader: "transparent",
            colorBgBody: "transparent"
          }
        }
      },
      children: [
        needFixedHeader && _jsx17(Header, {
          style: _objectSpread2({
            height: (token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$header = _token$layout.header) === null || _token$layout$header === void 0 ? void 0 : _token$layout$header.heightLayoutHeader) || 56,
            lineHeight: "".concat((token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$header = _token$layout2.header) === null || _token$layout2$header === void 0 ? void 0 : _token$layout2$header.heightLayoutHeader) || 56, "px"),
            backgroundColor: "transparent",
            zIndex: 19
          }, style)
        }),
        _jsx17(Header, {
          className,
          style,
          children: renderContent()
        })
      ]
    })
  })));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/en-US/settingDrawer.js
var settingDrawer_default = {
  "app.setting.pagestyle": "Page style setting",
  "app.setting.pagestyle.dark": "Dark Menu style",
  "app.setting.pagestyle.light": "Light Menu style",
  "app.setting.pagestyle.realdark": "Dark style (Beta)",
  "app.setting.content-width": "Content Width",
  "app.setting.content-width.fixed": "Fixed",
  "app.setting.content-width.fluid": "Fluid",
  "app.setting.themecolor": "Theme Color",
  "app.setting.themecolor.dust": "Dust Red",
  "app.setting.themecolor.volcano": "Volcano",
  "app.setting.themecolor.sunset": "Sunset Orange",
  "app.setting.themecolor.cyan": "Cyan",
  "app.setting.themecolor.green": "Polar Green",
  "app.setting.themecolor.techBlue": "Tech Blue (default)",
  "app.setting.themecolor.daybreak": "Daybreak Blue",
  "app.setting.themecolor.geekblue": "Geek Blue",
  "app.setting.themecolor.purple": "Golden Purple",
  "app.setting.sidermenutype": "SideMenu Type",
  "app.setting.sidermenutype-sub": "Classic",
  "app.setting.sidermenutype-group": "Grouping",
  "app.setting.navigationmode": "Navigation Mode",
  "app.setting.regionalsettings": "Regional Settings",
  "app.setting.regionalsettings.header": "Header",
  "app.setting.regionalsettings.menu": "Menu",
  "app.setting.regionalsettings.footer": "Footer",
  "app.setting.regionalsettings.menuHeader": "Menu Header",
  "app.setting.sidemenu": "Side Menu Layout",
  "app.setting.topmenu": "Top Menu Layout",
  "app.setting.mixmenu": "Mix Menu Layout",
  "app.setting.splitMenus": "Split Menus",
  "app.setting.fixedheader": "Fixed Header",
  "app.setting.fixedsidebar": "Fixed Sidebar",
  "app.setting.fixedsidebar.hint": "Works on Side Menu Layout",
  "app.setting.hideheader": "Hidden Header when scrolling",
  "app.setting.hideheader.hint": "Works when Hidden Header is enabled",
  "app.setting.othersettings": "Other Settings",
  "app.setting.weakmode": "Weak Mode",
  "app.setting.copy": "Copy Setting",
  "app.setting.loading": "Loading theme",
  "app.setting.copyinfo": "copy success\uFF0Cplease replace defaultSettings in src/models/setting.js",
  "app.setting.production.hint": "Setting panel shows in development environment only, please manually modify"
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/en-US.js
var en_US_default2 = _objectSpread2({}, settingDrawer_default);

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/it-IT/settingDrawer.js
var settingDrawer_default2 = {
  "app.setting.pagestyle": "Impostazioni di stile",
  "app.setting.pagestyle.dark": "Tema scuro",
  "app.setting.pagestyle.light": "Tema chiaro",
  "app.setting.content-width": "Largezza contenuto",
  "app.setting.content-width.fixed": "Fissa",
  "app.setting.content-width.fluid": "Fluida",
  "app.setting.themecolor": "Colore del tema",
  "app.setting.themecolor.dust": "Rosso polvere",
  "app.setting.themecolor.volcano": "Vulcano",
  "app.setting.themecolor.sunset": "Arancione tramonto",
  "app.setting.themecolor.cyan": "Ciano",
  "app.setting.themecolor.green": "Verde polare",
  "app.setting.themecolor.techBlue": "Tech Blu (default)",
  "app.setting.themecolor.daybreak": "Blu cielo mattutino",
  "app.setting.themecolor.geekblue": "Blu geek",
  "app.setting.themecolor.purple": "Viola dorato",
  "app.setting.navigationmode": "Modalit\xE0 di navigazione",
  "app.setting.sidemenu": "Menu laterale",
  "app.setting.topmenu": "Menu in testata",
  "app.setting.mixmenu": "Menu misto",
  "app.setting.splitMenus": "Menu divisi",
  "app.setting.fixedheader": "Testata fissa",
  "app.setting.fixedsidebar": "Menu laterale fisso",
  "app.setting.fixedsidebar.hint": "Solo se selezionato Menu laterale",
  "app.setting.hideheader": "Nascondi testata durante lo scorrimento",
  "app.setting.hideheader.hint": "Solo se abilitato Nascondi testata durante lo scorrimento",
  "app.setting.othersettings": "Altre impostazioni",
  "app.setting.weakmode": "Inverti colori",
  "app.setting.copy": "Copia impostazioni",
  "app.setting.loading": "Carico tema...",
  "app.setting.copyinfo": "Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js",
  "app.setting.production.hint": "Questo pannello \xE8 visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente"
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/it-IT.js
var it_IT_default2 = _objectSpread2({}, settingDrawer_default2);

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/ko-KR/settingDrawer.js
var settingDrawer_default3 = {
  "app.setting.pagestyle": "\uC2A4\uD0C0\uC77C \uC124\uC815",
  "app.setting.pagestyle.dark": "\uB2E4\uD06C \uBAA8\uB4DC",
  "app.setting.pagestyle.light": "\uB77C\uC774\uD2B8 \uBAA8\uB4DC",
  "app.setting.content-width": "\uCEE8\uD150\uCE20 \uB108\uBE44",
  "app.setting.content-width.fixed": "\uACE0\uC815",
  "app.setting.content-width.fluid": "\uD750\uB984",
  "app.setting.themecolor": "\uD14C\uB9C8 \uC0C9\uC0C1",
  "app.setting.themecolor.dust": "Dust Red",
  "app.setting.themecolor.volcano": "Volcano",
  "app.setting.themecolor.sunset": "Sunset Orange",
  "app.setting.themecolor.cyan": "Cyan",
  "app.setting.themecolor.green": "Polar Green",
  "app.setting.themecolor.techBlue": "Tech Blu (default)",
  "app.setting.themecolor.daybreak": "Daybreak Blue",
  "app.setting.themecolor.geekblue": "Geek Blue",
  "app.setting.themecolor.purple": "Golden Purple",
  "app.setting.navigationmode": "\uB124\uBE44\uAC8C\uC774\uC158 \uBAA8\uB4DC",
  "app.setting.regionalsettings": "\uC601\uC5ED\uBCC4 \uC124\uC815",
  "app.setting.regionalsettings.header": "\uD5E4\uB354",
  "app.setting.regionalsettings.menu": "\uBA54\uB274",
  "app.setting.regionalsettings.footer": "\uBC14\uB2E5\uAE00",
  "app.setting.regionalsettings.menuHeader": "\uBA54\uB274 \uD5E4\uB354",
  "app.setting.sidemenu": "\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58",
  "app.setting.topmenu": "\uBA54\uB274 \uC0C1\uB2E8 \uBC30\uCE58",
  "app.setting.mixmenu": "\uD63C\uD569\uD615 \uBC30\uCE58",
  "app.setting.splitMenus": "\uBA54\uB274 \uBD84\uB9AC",
  "app.setting.fixedheader": "\uD5E4\uB354 \uACE0\uC815",
  "app.setting.fixedsidebar": "\uC0AC\uC774\uB4DC\uBC14 \uACE0\uC815",
  "app.setting.fixedsidebar.hint": "'\uBA54\uB274 \uC0AC\uC774\uB4DC \uBC30\uCE58'\uB97C \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
  "app.setting.hideheader": "\uC2A4\uD06C\uB864 \uC911 \uD5E4\uB354 \uAC10\uCD94\uAE30",
  "app.setting.hideheader.hint": "'\uD5E4\uB354 \uAC10\uCD94\uAE30 \uC635\uC158'\uC744 \uC120\uD0DD\uD588\uC744 \uB54C \uB3D9\uC791\uD568",
  "app.setting.othersettings": "\uB2E4\uB978 \uC124\uC815",
  "app.setting.weakmode": "\uACE0\uB300\uBE44 \uBAA8\uB4DC",
  "app.setting.copy": "\uC124\uC815\uAC12 \uBCF5\uC0AC",
  "app.setting.loading": "\uD14C\uB9C8 \uB85C\uB529 \uC911",
  "app.setting.copyinfo": "\uBCF5\uC0AC \uC131\uACF5. src/models/settings.js\uC5D0 \uC788\uB294 defaultSettings\uB97C \uAD50\uCCB4\uD574 \uC8FC\uC138\uC694.",
  "app.setting.production.hint": "\uC124\uC815 \uD310\uB12C\uC740 \uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C\uB9CC \uBCF4\uC5EC\uC9D1\uB2C8\uB2E4. \uC9C1\uC811 \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uBC14\uB78D\uB2C8\uB2E4."
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/ko-KR.js
var ko_KR_default2 = _objectSpread2({}, settingDrawer_default3);

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/zh-CN/settingDrawer.js
var settingDrawer_default4 = {
  "app.setting.pagestyle": "\u6574\u4F53\u98CE\u683C\u8BBE\u7F6E",
  "app.setting.pagestyle.dark": "\u6697\u8272\u83DC\u5355\u98CE\u683C",
  "app.setting.pagestyle.light": "\u4EAE\u8272\u83DC\u5355\u98CE\u683C",
  "app.setting.pagestyle.realdark": "\u6697\u8272\u98CE\u683C(\u5B9E\u9A8C\u529F\u80FD)",
  "app.setting.content-width": "\u5185\u5BB9\u533A\u57DF\u5BBD\u5EA6",
  "app.setting.content-width.fixed": "\u5B9A\u5BBD",
  "app.setting.content-width.fluid": "\u6D41\u5F0F",
  "app.setting.themecolor": "\u4E3B\u9898\u8272",
  "app.setting.themecolor.dust": "\u8584\u66AE",
  "app.setting.themecolor.volcano": "\u706B\u5C71",
  "app.setting.themecolor.sunset": "\u65E5\u66AE",
  "app.setting.themecolor.cyan": "\u660E\u9752",
  "app.setting.themecolor.green": "\u6781\u5149\u7EFF",
  "app.setting.themecolor.techBlue": "\u79D1\u6280\u84DD\uFF08\u9ED8\u8BA4\uFF09",
  "app.setting.themecolor.daybreak": "\u62C2\u6653",
  "app.setting.themecolor.geekblue": "\u6781\u5BA2\u84DD",
  "app.setting.themecolor.purple": "\u9171\u7D2B",
  "app.setting.navigationmode": "\u5BFC\u822A\u6A21\u5F0F",
  "app.setting.sidermenutype": "\u4FA7\u8FB9\u83DC\u5355\u7C7B\u578B",
  "app.setting.sidermenutype-sub": "\u7ECF\u5178\u6A21\u5F0F",
  "app.setting.sidermenutype-group": "\u5206\u7EC4\u6A21\u5F0F",
  "app.setting.regionalsettings": "\u5185\u5BB9\u533A\u57DF",
  "app.setting.regionalsettings.header": "\u9876\u680F",
  "app.setting.regionalsettings.menu": "\u83DC\u5355",
  "app.setting.regionalsettings.footer": "\u9875\u811A",
  "app.setting.regionalsettings.menuHeader": "\u83DC\u5355\u5934",
  "app.setting.sidemenu": "\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40",
  "app.setting.topmenu": "\u9876\u90E8\u83DC\u5355\u5E03\u5C40",
  "app.setting.mixmenu": "\u6DF7\u5408\u83DC\u5355\u5E03\u5C40",
  "app.setting.splitMenus": "\u81EA\u52A8\u5206\u5272\u83DC\u5355",
  "app.setting.fixedheader": "\u56FA\u5B9A Header",
  "app.setting.fixedsidebar": "\u56FA\u5B9A\u4FA7\u8FB9\u83DC\u5355",
  "app.setting.fixedsidebar.hint": "\u4FA7\u8FB9\u83DC\u5355\u5E03\u5C40\u65F6\u53EF\u914D\u7F6E",
  "app.setting.hideheader": "\u4E0B\u6ED1\u65F6\u9690\u85CF Header",
  "app.setting.hideheader.hint": "\u56FA\u5B9A Header \u65F6\u53EF\u914D\u7F6E",
  "app.setting.othersettings": "\u5176\u4ED6\u8BBE\u7F6E",
  "app.setting.weakmode": "\u8272\u5F31\u6A21\u5F0F",
  "app.setting.copy": "\u62F7\u8D1D\u8BBE\u7F6E",
  "app.setting.loading": "\u6B63\u5728\u52A0\u8F7D\u4E3B\u9898",
  "app.setting.copyinfo": "\u62F7\u8D1D\u6210\u529F\uFF0C\u8BF7\u5230 src/defaultSettings.js \u4E2D\u66FF\u6362\u9ED8\u8BA4\u914D\u7F6E",
  "app.setting.production.hint": "\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6"
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/zh-CN.js
var zh_CN_default8 = _objectSpread2({}, settingDrawer_default4);

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/zh-TW/settingDrawer.js
var settingDrawer_default5 = {
  "app.setting.pagestyle": "\u6574\u9AD4\u98A8\u683C\u8A2D\u7F6E",
  "app.setting.pagestyle.dark": "\u6697\u8272\u83DC\u55AE\u98A8\u683C",
  "app.setting.pagestyle.realdark": "\u6697\u8272\u98A8\u683C(\u5B9E\u9A8C\u529F\u80FD)",
  "app.setting.pagestyle.light": "\u4EAE\u8272\u83DC\u55AE\u98A8\u683C",
  "app.setting.content-width": "\u5167\u5BB9\u5340\u57DF\u5BEC\u5EA6",
  "app.setting.content-width.fixed": "\u5B9A\u5BEC",
  "app.setting.content-width.fluid": "\u6D41\u5F0F",
  "app.setting.themecolor": "\u4E3B\u984C\u8272",
  "app.setting.themecolor.dust": "\u8584\u66AE",
  "app.setting.themecolor.volcano": "\u706B\u5C71",
  "app.setting.themecolor.sunset": "\u65E5\u66AE",
  "app.setting.themecolor.cyan": "\u660E\u9752",
  "app.setting.themecolor.green": "\u6975\u5149\u7DA0",
  "app.setting.themecolor.techBlue": "\u79D1\u6280\u84DD\uFF08\u9ED8\u8A8D\uFF09",
  "app.setting.themecolor.daybreak": "\u62C2\u66C9\u85CD",
  "app.setting.themecolor.geekblue": "\u6975\u5BA2\u85CD",
  "app.setting.themecolor.purple": "\u91AC\u7D2B",
  "app.setting.navigationmode": "\u5C0E\u822A\u6A21\u5F0F",
  "app.setting.sidemenu": "\u5074\u908A\u83DC\u55AE\u5E03\u5C40",
  "app.setting.topmenu": "\u9802\u90E8\u83DC\u55AE\u5E03\u5C40",
  "app.setting.mixmenu": "\u6DF7\u5408\u83DC\u55AE\u5E03\u5C40",
  "app.setting.splitMenus": "\u81EA\u52A8\u5206\u5272\u83DC\u5355",
  "app.setting.fixedheader": "\u56FA\u5B9A Header",
  "app.setting.fixedsidebar": "\u56FA\u5B9A\u5074\u908A\u83DC\u55AE",
  "app.setting.fixedsidebar.hint": "\u5074\u908A\u83DC\u55AE\u5E03\u5C40\u6642\u53EF\u914D\u7F6E",
  "app.setting.hideheader": "\u4E0B\u6ED1\u6642\u96B1\u85CF Header",
  "app.setting.hideheader.hint": "\u56FA\u5B9A Header \u6642\u53EF\u914D\u7F6E",
  "app.setting.othersettings": "\u5176\u4ED6\u8A2D\u7F6E",
  "app.setting.weakmode": "\u8272\u5F31\u6A21\u5F0F",
  "app.setting.copy": "\u62F7\u8C9D\u8A2D\u7F6E",
  "app.setting.loading": "\u6B63\u5728\u52A0\u8F09\u4E3B\u984C",
  "app.setting.copyinfo": "\u62F7\u8C9D\u6210\u529F\uFF0C\u8ACB\u5230 src/defaultSettings.js \u4E2D\u66FF\u63DB\u9ED8\u8A8D\u914D\u7F6E",
  "app.setting.production.hint": "\u914D\u7F6E\u6B04\u53EA\u5728\u958B\u767C\u74B0\u5883\u7528\u65BC\u9810\u89BD\uFF0C\u751F\u7522\u74B0\u5883\u4E0D\u6703\u5C55\u73FE\uFF0C\u8ACB\u62F7\u8C9D\u5F8C\u624B\u52D5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6"
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/zh-TW.js
var zh_TW_default2 = _objectSpread2({}, settingDrawer_default5);

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/locales/index.js
var locales = {
  "zh-CN": zh_CN_default8,
  "zh-TW": zh_TW_default2,
  "en-US": en_US_default2,
  "it-IT": it_IT_default2,
  "ko-KR": ko_KR_default2
};
var getLanguage = function getLanguage2() {
  if (!isBrowser())
    return "zh-CN";
  var lang = window.localStorage.getItem("umi_locale");
  return lang || window.g_locale || navigator.language;
};
var gLocaleObject = function gLocaleObject2() {
  var gLocale = getLanguage();
  return locales[gLocale] || locales["zh-CN"];
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/getPageTitle.js
var import_path_to_regexp = __toESM(require_path_to_regexp());
var matchParamsPath = function matchParamsPath2(pathname, breadcrumb, breadcrumbMap) {
  if (breadcrumbMap) {
    var pathKey = _toConsumableArray(breadcrumbMap.keys()).find(function(key) {
      return (0, import_path_to_regexp.default)(key).test(pathname);
    });
    if (pathKey) {
      return breadcrumbMap.get(pathKey);
    }
  }
  if (breadcrumb) {
    var _pathKey = Object.keys(breadcrumb).find(function(key) {
      return (0, import_path_to_regexp.default)(key).test(pathname);
    });
    if (_pathKey) {
      return breadcrumb[_pathKey];
    }
  }
  return {
    path: ""
  };
};
var getPageTitleInfo = function getPageTitleInfo2(props, ignoreTitle) {
  var _props$pathname = props.pathname, pathname = _props$pathname === void 0 ? "/" : _props$pathname, breadcrumb = props.breadcrumb, breadcrumbMap = props.breadcrumbMap, formatMessage = props.formatMessage, title = props.title, _props$menu = props.menu, menu = _props$menu === void 0 ? {
    locale: false
  } : _props$menu;
  var pageTitle = ignoreTitle ? "" : title || "";
  var currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap);
  if (!currRouterData) {
    return {
      title: pageTitle,
      id: "",
      pageName: pageTitle
    };
  }
  var pageName = currRouterData.name;
  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || "",
      defaultMessage: currRouterData.name
    });
  }
  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || "",
      pageName: pageTitle
    };
  }
  if (ignoreTitle || !title) {
    return {
      title: pageName,
      id: currRouterData.locale || "",
      pageName
    };
  }
  return {
    title: "".concat(pageName, " - ").concat(title),
    id: currRouterData.locale || "",
    pageName
  };
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/ProLayout.js
import { jsx as _jsx22, Fragment as _Fragment6, jsxs as _jsxs14 } from "react/jsx-runtime";

// node_modules/.pnpm/@umijs+route-utils@2.2.2/node_modules/@umijs/route-utils/es/transformRoute/transformRoute.js
var import_react22 = __toESM(require_react());

// node_modules/.pnpm/memoize-one@5.2.1/node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual3(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// node_modules/.pnpm/@qixian.cs+path-to-regexp@6.1.0/node_modules/@qixian.cs/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({
        type: "MODIFIER",
        index: i,
        value: str[i++]
      });
      continue;
    }
    if (char === "\\") {
      tokens.push({
        type: "ESCAPED_CHAR",
        index: i++,
        value: str[i++]
      });
      continue;
    }
    if (char === "{") {
      tokens.push({
        type: "OPEN",
        index: i,
        value: str[i++]
      });
      continue;
    }
    if (char === "}") {
      tokens.push({
        type: "CLOSE",
        index: i,
        value: str[i++]
      });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at " + i);
      tokens.push({
        type: "NAME",
        index: i,
        value: name
      });
      i = j;
      continue;
    }
    if (char === "(") {
      var count2 = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at ' + j);
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count2--;
          if (count2 === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count2++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at " + j);
          }
        }
        pattern += str[j++];
      }
      if (count2)
        throw new TypeError("Unbalanced pattern at " + i);
      if (!pattern)
        throw new TypeError("Missing pattern at " + i);
      tokens.push({
        type: "PATTERN",
        index: i,
        value: pattern
      });
      i = j;
      continue;
    }
    tokens.push({
      type: "CHAR",
      index: i,
      value: str[i++]
    });
  }
  tokens.push({
    type: "END",
    index: i,
    value: ""
  });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
    }
  }
  return path;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp2(path, keys, options).source;
  });
  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d;
  var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
  var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token2 = tokens_1[_i];
    if (typeof token2 === "string") {
      route += escapeString(encode(token2));
    } else {
      var prefix = escapeString(encode(token2.prefix));
      var suffix = escapeString(encode(token2.suffix));
      if (token2.pattern) {
        if (keys)
          keys.push(token2);
        if (prefix || suffix) {
          if (token2.modifier === "+" || token2.modifier === "*") {
            var mod = token2.modifier === "*" ? "?" : "";
            route += "(?:" + prefix + "((?:" + token2.pattern + ")(?:" + suffix + prefix + "(?:" + token2.pattern + "))*)" + suffix + ")" + mod;
          } else {
            route += "(?:" + prefix + "(" + token2.pattern + ")" + suffix + ")" + token2.modifier;
          }
        } else {
          route += "(" + token2.pattern + ")" + token2.modifier;
        }
      } else {
        route += "(?:" + prefix + suffix + ")" + token2.modifier;
      }
    }
  }
  if (end) {
    if (!strict)
      route += delimiter + "?";
    route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:" + delimiter + "(?=" + endsWith + "))?";
    }
    if (!isEndDelimited) {
      route += "(?=" + delimiter + "|" + endsWith + ")";
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp2(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}

// node_modules/.pnpm/@umijs+route-utils@2.2.2/node_modules/@umijs/route-utils/es/sha265.js
function rotateRight(n, x) {
  return x >>> n | x << 32 - n;
}
function choice(x, y, z) {
  return x & y ^ ~x & z;
}
function majority(x, y, z) {
  return x & y ^ x & z ^ y & z;
}
function sha256_Sigma0(x) {
  return rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x);
}
function sha256_Sigma1(x) {
  return rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x);
}
function sha256_sigma0(x) {
  return rotateRight(7, x) ^ rotateRight(18, x) ^ x >>> 3;
}
function sha256_sigma1(x) {
  return rotateRight(17, x) ^ rotateRight(19, x) ^ x >>> 10;
}
function sha256_expand(W, j) {
  return W[j & 15] += sha256_sigma1(W[j + 14 & 15]) + W[j + 9 & 15] + sha256_sigma0(W[j + 1 & 15]);
}
var K256 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
var ihash;
var count;
var buffer;
var sha256_hex_digits = "0123456789abcdef";
function safe_add(x, y) {
  var lsw = (x & 65535) + (y & 65535);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function sha256_init() {
  ihash = new Array(8);
  count = new Array(2);
  buffer = new Array(64);
  count[0] = count[1] = 0;
  ihash[0] = 1779033703;
  ihash[1] = 3144134277;
  ihash[2] = 1013904242;
  ihash[3] = 2773480762;
  ihash[4] = 1359893119;
  ihash[5] = 2600822924;
  ihash[6] = 528734635;
  ihash[7] = 1541459225;
}
function sha256_transform() {
  var a;
  var b;
  var c;
  var d;
  var e;
  var f;
  var g;
  var h;
  var T1;
  var T2;
  var W = new Array(16);
  a = ihash[0];
  b = ihash[1];
  c = ihash[2];
  d = ihash[3];
  e = ihash[4];
  f = ihash[5];
  g = ihash[6];
  h = ihash[7];
  for (var i = 0; i < 16; i++) {
    W[i] = buffer[(i << 2) + 3] | buffer[(i << 2) + 2] << 8 | buffer[(i << 2) + 1] << 16 | buffer[i << 2] << 24;
  }
  for (var j = 0; j < 64; j++) {
    T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
    if (j < 16)
      T1 += W[j];
    else
      T1 += sha256_expand(W, j);
    T2 = sha256_Sigma0(a) + majority(a, b, c);
    h = g;
    g = f;
    f = e;
    e = safe_add(d, T1);
    d = c;
    c = b;
    b = a;
    a = safe_add(T1, T2);
  }
  ihash[0] += a;
  ihash[1] += b;
  ihash[2] += c;
  ihash[3] += d;
  ihash[4] += e;
  ihash[5] += f;
  ihash[6] += g;
  ihash[7] += h;
}
function sha256_update(data, inputLen) {
  var i;
  var index;
  var curpos = 0;
  index = count[0] >> 3 & 63;
  var remainder = inputLen & 63;
  if ((count[0] += inputLen << 3) < inputLen << 3)
    count[1]++;
  count[1] += inputLen >> 29;
  for (i = 0; i + 63 < inputLen; i += 64) {
    for (var j = index; j < 64; j++) {
      buffer[j] = data.charCodeAt(curpos++);
    }
    sha256_transform();
    index = 0;
  }
  for (var _j = 0; _j < remainder; _j++) {
    buffer[_j] = data.charCodeAt(curpos++);
  }
}
function sha256_final() {
  var index = count[0] >> 3 & 63;
  buffer[index++] = 128;
  if (index <= 56) {
    for (var i = index; i < 56; i++) {
      buffer[i] = 0;
    }
  } else {
    for (var _i = index; _i < 64; _i++) {
      buffer[_i] = 0;
    }
    sha256_transform();
    for (var _i2 = 0; _i2 < 56; _i2++) {
      buffer[_i2] = 0;
    }
  }
  buffer[56] = count[1] >>> 24 & 255;
  buffer[57] = count[1] >>> 16 & 255;
  buffer[58] = count[1] >>> 8 & 255;
  buffer[59] = count[1] & 255;
  buffer[60] = count[0] >>> 24 & 255;
  buffer[61] = count[0] >>> 16 & 255;
  buffer[62] = count[0] >>> 8 & 255;
  buffer[63] = count[0] & 255;
  sha256_transform();
}
function sha256_encode_hex() {
  var output = new String();
  for (var i = 0; i < 8; i++) {
    for (var j = 28; j >= 0; j -= 4) {
      output += sha256_hex_digits.charAt(ihash[i] >>> j & 15);
    }
  }
  return output;
}
function digest(data) {
  sha256_init();
  sha256_update(data, data.length);
  sha256_final();
  return sha256_encode_hex();
}
var sha265_default = digest;

// node_modules/.pnpm/@umijs+route-utils@2.2.2/node_modules/@umijs/route-utils/es/transformRoute/transformRoute.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
var _excluded6 = [
  "pro_layout_parentKeys",
  "children",
  "icon",
  "flatMenu",
  "indexRoute",
  "routes"
];
function _slicedToArray2(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
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
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [
        null
      ];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var childrenPropsName = "routes";
function stripQueryStringAndHashFromPath(url) {
  return url.split("?")[0].split("#")[0];
}
var isUrl3 = function isUrl4(path) {
  if (!path.startsWith("http")) {
    return false;
  }
  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};
var getKeyByPath = function getKeyByPath2(item) {
  var path = item.path;
  if (!path || path === "/") {
    try {
      return "/".concat(sha265_default(JSON.stringify(item)));
    } catch (error) {
    }
  }
  return path ? stripQueryStringAndHashFromPath(path) : path;
};
var getItemLocaleName = function getItemLocaleName2(item, parentName) {
  var name = item.name, locale4 = item.locale;
  if ("locale" in item && locale4 === false || !name) {
    return false;
  }
  return item.locale || "".concat(parentName, ".").concat(name);
};
var mergePath = function mergePath2() {
  var path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var parentPath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "/";
  if (path.endsWith("/*")) {
    return path.replace("/*", "/");
  }
  if ((path || parentPath).startsWith("/")) {
    return path;
  }
  if (isUrl3(path)) {
    return path;
  }
  return "/".concat(parentPath, "/").concat(path).replace(/\/\//g, "/").replace(/\/\//g, "/");
};
var bigfishCompatibleConversions = function bigfishCompatibleConversions2(route, props) {
  var _route$menu = route.menu, menu = _route$menu === void 0 ? {} : _route$menu, indexRoute = route.indexRoute, _route$path = route.path, path = _route$path === void 0 ? "" : _route$path;
  var routerChildren = route.children || route[childrenPropsName];
  var _menu$name = menu.name, name = _menu$name === void 0 ? route.name : _menu$name, _menu$icon = menu.icon, icon = _menu$icon === void 0 ? route.icon : _menu$icon, _menu$hideChildren = menu.hideChildren, hideChildren = _menu$hideChildren === void 0 ? route.hideChildren : _menu$hideChildren, _menu$flatMenu = menu.flatMenu, flatMenu = _menu$flatMenu === void 0 ? route.flatMenu : _menu$flatMenu;
  var childrenList = indexRoute && Object.keys(indexRoute).join(",") !== "redirect" ? [
    _objectSpread({
      path,
      menu
    }, indexRoute)
  ].concat(routerChildren || []) : routerChildren;
  var result = _objectSpread({}, route);
  if (name) {
    result.name = name;
  }
  if (icon) {
    result.icon = icon;
  }
  if (childrenList && childrenList.length) {
    if (hideChildren) {
      delete result[childrenPropsName];
      delete result.children;
      return result;
    }
    var finalChildren = formatter(_objectSpread(_objectSpread({}, props), {}, {
      data: childrenList
    }), route);
    if (flatMenu) {
      return finalChildren;
    }
    result[childrenPropsName] = finalChildren;
  }
  return result;
};
var notNullArray = function notNullArray2(value) {
  return Array.isArray(value) && value.length > 0;
};
function formatter(props) {
  var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    path: "/"
  };
  var data = props.data, formatMessage = props.formatMessage, parentName = props.parentName, menuLocale = props.locale;
  if (!data || !Array.isArray(data)) {
    return [];
  }
  return data.filter(function(item) {
    if (!item)
      return false;
    if (notNullArray(item[childrenPropsName]))
      return true;
    if (notNullArray(item.children))
      return true;
    if (item.path)
      return true;
    if (item.originPath)
      return true;
    if (item.layout)
      return true;
    if (item.redirect)
      return false;
    if (item.unaccessible)
      return false;
    return false;
  }).filter(function(item) {
    var _item$menu, _item$menu2;
    if ((item === null || item === void 0 ? void 0 : (_item$menu = item.menu) === null || _item$menu === void 0 ? void 0 : _item$menu.name) || (item === null || item === void 0 ? void 0 : item.flatMenu) || (item === null || item === void 0 ? void 0 : (_item$menu2 = item.menu) === null || _item$menu2 === void 0 ? void 0 : _item$menu2.flatMenu)) {
      return true;
    }
    if (item.menu === false) {
      return false;
    }
    return true;
  }).map(function(finallyItem) {
    var item = _objectSpread({}, finallyItem);
    if (item.unaccessible) {
      delete item.name;
    }
    if (item.path === "*") {
      item.path = ".";
    }
    if (item.path === "/*") {
      item.path = ".";
    }
    if (!item.path && item.originPath) {
      item.path = item.originPath;
    }
    return item;
  }).map(function() {
    var item = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: "/"
    };
    var routerChildren = item.children || item[childrenPropsName];
    var path = mergePath(item.path, parent ? parent.path : "/");
    var name = item.name;
    var locale4 = getItemLocaleName(item, parentName || "menu");
    var localeName = locale4 !== false && menuLocale !== false && formatMessage && locale4 ? formatMessage({
      id: locale4,
      defaultMessage: name
    }) : name;
    var _parent$pro_layout_pa = parent.pro_layout_parentKeys, pro_layout_parentKeys = _parent$pro_layout_pa === void 0 ? [] : _parent$pro_layout_pa, children = parent.children, icon = parent.icon, flatMenu = parent.flatMenu, indexRoute = parent.indexRoute, routes = parent.routes, restParent = _objectWithoutProperties2(parent, _excluded6);
    var item_pro_layout_parentKeys = new Set([].concat(_toConsumableArray2(pro_layout_parentKeys), _toConsumableArray2(item.parentKeys || [])));
    if (parent.key) {
      item_pro_layout_parentKeys.add(parent.key);
    }
    var finallyItem = _objectSpread(_objectSpread(_objectSpread({}, restParent), {}, {
      menu: void 0
    }, item), {}, {
      path,
      locale: locale4,
      key: item.key || getKeyByPath(_objectSpread(_objectSpread({}, item), {}, {
        path
      })),
      pro_layout_parentKeys: Array.from(item_pro_layout_parentKeys).filter(function(key) {
        return key && key !== "/";
      })
    });
    if (localeName) {
      finallyItem.name = localeName;
    } else {
      delete finallyItem.name;
    }
    if (finallyItem.menu === void 0) {
      delete finallyItem.menu;
    }
    if (notNullArray(routerChildren)) {
      var formatterChildren = formatter(_objectSpread(_objectSpread({}, props), {}, {
        data: routerChildren,
        parentName: locale4 || ""
      }), finallyItem);
      if (notNullArray(formatterChildren)) {
        finallyItem[childrenPropsName] = formatterChildren;
        finallyItem.children = formatterChildren;
      }
    }
    return bigfishCompatibleConversions(finallyItem, props);
  }).flat(1);
}
var memoizeOneFormatter = memoize_one_esm_default(formatter, import_react22.default);
var defaultFilterMenuData = function defaultFilterMenuData2() {
  var menuData = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return menuData.filter(function(item) {
    return item && (item.name || notNullArray(item[childrenPropsName]) || notNullArray(item.children)) && !item.hideInMenu && !item.redirect;
  }).map(function(item) {
    var newItem = _objectSpread({}, item);
    var routerChildren = newItem.children || newItem[childrenPropsName];
    if (notNullArray(routerChildren) && !newItem.hideChildrenInMenu && routerChildren.some(function(child) {
      return child && !!child.name;
    })) {
      var _objectSpread22;
      var newChildren = defaultFilterMenuData2(routerChildren);
      if (newChildren.length)
        return _objectSpread(_objectSpread({}, newItem), {}, (_objectSpread22 = {}, _defineProperty2(_objectSpread22, childrenPropsName, newChildren), _defineProperty2(_objectSpread22, "children", newChildren), _objectSpread22));
    }
    return _objectSpread(_objectSpread({}, item), {}, _defineProperty2({}, childrenPropsName, void 0));
  }).filter(function(item) {
    return item;
  });
};
var RouteListMap = /* @__PURE__ */ function(_Map) {
  _inherits2(RouteListMap2, _Map);
  var _super = _createSuper2(RouteListMap2);
  function RouteListMap2() {
    _classCallCheck2(this, RouteListMap2);
    return _super.apply(this, arguments);
  }
  _createClass2(RouteListMap2, [
    {
      key: "get",
      value: function get2(pathname) {
        var routeValue;
        try {
          var _iterator = _createForOfIteratorHelper2(this.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _step$value = _slicedToArray2(_step.value, 2), key = _step$value[0], value = _step$value[1];
              var path = stripQueryStringAndHashFromPath(key);
              if (!isUrl3(key) && pathToRegexp2(path, []).test(pathname)) {
                routeValue = value;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } catch (error) {
          routeValue = void 0;
        }
        return routeValue;
      }
    }
  ]);
  return RouteListMap2;
}(/* @__PURE__ */ _wrapNativeSuper(Map));
var getBreadcrumbNameMap = function getBreadcrumbNameMap2(menuData) {
  var routerMap = new RouteListMap();
  var flattenMenuData = function flattenMenuData2(data, parent) {
    data.forEach(function(menuItem) {
      var routerChildren = menuItem.children || menuItem[childrenPropsName];
      if (notNullArray(routerChildren)) {
        flattenMenuData2(routerChildren, menuItem);
      }
      var path = mergePath(menuItem.path, parent ? parent.path : "/");
      routerMap.set(stripQueryStringAndHashFromPath(path), menuItem);
    });
  };
  flattenMenuData(menuData);
  return routerMap;
};
var memoizeOneGetBreadcrumbNameMap = memoize_one_esm_default(getBreadcrumbNameMap, import_react22.default);
var clearChildren = function clearChildren2() {
  var menuData = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return menuData.map(function(item) {
    var routerChildren = item.children || item[childrenPropsName];
    if (notNullArray(routerChildren)) {
      var newChildren = clearChildren2(routerChildren);
      if (newChildren.length)
        return _objectSpread(_objectSpread({}, item), {}, _defineProperty2({}, childrenPropsName, newChildren));
    }
    var finallyItem = _objectSpread({}, item);
    delete finallyItem[childrenPropsName];
    delete finallyItem.children;
    return finallyItem;
  }).filter(function(item) {
    return item;
  });
};
var transformRoute = function transformRoute2(routeList, locale4, formatMessage, ignoreFilter) {
  var originalMenuData = memoizeOneFormatter({
    data: routeList,
    formatMessage,
    locale: locale4
  });
  var menuData = ignoreFilter ? clearChildren(originalMenuData) : defaultFilterMenuData(originalMenuData);
  var breadcrumb = memoizeOneGetBreadcrumbNameMap(originalMenuData);
  return {
    breadcrumb,
    menuData
  };
};
var transformRoute_default = transformRoute;

// node_modules/.pnpm/@umijs+route-utils@2.2.2/node_modules/@umijs/route-utils/es/getFlatMenus/getFlatMenus.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getFlatMenus = function getFlatMenus2() {
  var menuData = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var menus = {};
  menuData.forEach(function(item) {
    if (!item || !item.key) {
      return;
    }
    var routerChildren = item.children || item[childrenPropsName];
    menus[stripQueryStringAndHashFromPath(item.path || item.key || "/")] = _objectSpread3({}, item);
    menus[item.key || item.path || "/"] = _objectSpread3({}, item);
    if (routerChildren) {
      menus = _objectSpread3(_objectSpread3({}, menus), getFlatMenus2(routerChildren));
    }
  });
  return menus;
};
var getFlatMenus_default = getFlatMenus;

// node_modules/.pnpm/@umijs+route-utils@2.2.2/node_modules/@umijs/route-utils/es/getMatchMenu/getMatchMenu.js
var getMenuMatches = function getMenuMatches2() {
  var flatMenuKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var path = arguments.length > 1 ? arguments[1] : void 0;
  var exact = arguments.length > 2 ? arguments[2] : void 0;
  return flatMenuKeys.filter(function(item) {
    if (item === "/" && path === "/") {
      return true;
    }
    if (item !== "/" && item !== "/*" && item && !isUrl3(item)) {
      var pathKey = stripQueryStringAndHashFromPath(item);
      try {
        if (exact) {
          if (pathToRegexp2("".concat(pathKey)).test(path)) {
            return true;
          }
        }
        if (pathToRegexp2("".concat(pathKey), []).test(path)) {
          return true;
        }
        if (pathToRegexp2("".concat(pathKey, "/(.*)")).test(path)) {
          return true;
        }
      } catch (error) {
      }
    }
    return false;
  }).sort(function(a, b) {
    if (a === path) {
      return 10;
    }
    if (b === path) {
      return -10;
    }
    return a.substr(1).split("/").length - b.substr(1).split("/").length;
  });
};
var getMatchMenu = function getMatchMenu2(pathname, menuData, fullKeys, exact) {
  var flatMenus = getFlatMenus_default(menuData);
  var flatMenuKeys = Object.keys(flatMenus);
  var menuPathKeys = getMenuMatches(flatMenuKeys, pathname || "/", exact);
  if (!menuPathKeys || menuPathKeys.length < 1) {
    return [];
  }
  if (!fullKeys) {
    menuPathKeys = [
      menuPathKeys[menuPathKeys.length - 1]
    ];
  }
  return menuPathKeys.map(function(menuPathKey) {
    var menuItem = flatMenus[menuPathKey] || {
      pro_layout_parentKeys: "",
      key: ""
    };
    var map = /* @__PURE__ */ new Map();
    var parentItems = (menuItem.pro_layout_parentKeys || []).map(function(key) {
      if (map.has(key)) {
        return null;
      }
      map.set(key, true);
      return flatMenus[key];
    }).filter(function(item) {
      return item;
    });
    if (menuItem.key) {
      parentItems.push(menuItem);
    }
    return parentItems;
  }).flat(1);
};
var getMatchMenu_default = getMatchMenu;

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/ProLayout.js
var import_classnames12 = __toESM(require_classnames());
var import_useMergedState2 = __toESM(require_useMergedState());
var import_warning = __toESM(require_warning());
import { useCallback as useCallback7, useContext as useContext12, useEffect as useEffect9, useMemo as useMemo9, useState as useState7 } from "react";

// node_modules/.pnpm/use-media-antd-query@1.1.0_react@18.2.0/node_modules/use-media-antd-query/es/index.js
import { useState as useState5, useEffect as useEffect6 } from "react";

// node_modules/.pnpm/use-media-antd-query@1.1.0_react@18.2.0/node_modules/use-media-antd-query/es/useMediaQuery.js
import { useLayoutEffect as useLayoutEffect2, useState as useState4 } from "react";
function _slicedToArray3(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function useMediaQuery(mediaQuery) {
  var isSsr = typeof window === "undefined";
  var _useState = useState4(function() {
    return isSsr ? false : window.matchMedia(mediaQuery).matches;
  }), _useState2 = _slicedToArray3(_useState, 2), matches = _useState2[0], setMatches = _useState2[1];
  useLayoutEffect2(function() {
    if (isSsr) {
      return;
    }
    var mediaQueryList = window.matchMedia(mediaQuery);
    var listener = function listener2(e) {
      return setMatches(e.matches);
    };
    mediaQueryList.addListener(listener);
    return function() {
      return mediaQueryList.removeListener(listener);
    };
  }, [
    mediaQuery
  ]);
  return matches;
}

// node_modules/.pnpm/use-media-antd-query@1.1.0_react@18.2.0/node_modules/use-media-antd-query/es/index.js
function _slicedToArray4(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
var MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: "(max-width: 575px)"
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: "(min-width: 576px) and (max-width: 767px)"
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: "(min-width: 768px) and (max-width: 991px)"
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: "(min-width: 992px) and (max-width: 1199px)"
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: "(min-width: 1200px) and (max-width: 1599px)"
  },
  xxl: {
    minWidth: 1600,
    matchMedia: "(min-width: 1600px)"
  }
};
var getScreenClassName = function getScreenClassName2() {
  var className = "md";
  if (typeof window === "undefined") {
    return className;
  }
  var mediaQueryKey = Object.keys(MediaQueryEnum).find(function(key) {
    var matchMedia = MediaQueryEnum[key].matchMedia;
    if (window.matchMedia(matchMedia).matches) {
      return true;
    }
    return false;
  });
  className = mediaQueryKey;
  return className;
};
var useMedia = function useMedia2() {
  var isMd = useMediaQuery(MediaQueryEnum.md.matchMedia);
  var isLg = useMediaQuery(MediaQueryEnum.lg.matchMedia);
  var isXxl = useMediaQuery(MediaQueryEnum.xxl.matchMedia);
  var isXl = useMediaQuery(MediaQueryEnum.xl.matchMedia);
  var isSm = useMediaQuery(MediaQueryEnum.sm.matchMedia);
  var isXs = useMediaQuery(MediaQueryEnum.xs.matchMedia);
  var _useState = useState5(getScreenClassName()), _useState2 = _slicedToArray4(_useState, 2), colSpan = _useState2[0], setColSpan = _useState2[1];
  useEffect6(function() {
    if (false) {
      setColSpan(process.env.USE_MEDIA || "xs");
      return;
    }
    if (isXxl) {
      setColSpan("xxl");
      return;
    }
    if (isXl) {
      setColSpan("xl");
      return;
    }
    if (isLg) {
      setColSpan("lg");
      return;
    }
    if (isMd) {
      setColSpan("md");
      return;
    }
    if (isSm) {
      setColSpan("sm");
      return;
    }
    if (isXs) {
      setColSpan("xs");
      return;
    }
    setColSpan("md");
  }, [
    isMd,
    isLg,
    isXxl,
    isXl,
    isSm,
    isXs
  ]);
  return colSpan;
};
var es_default3 = useMedia;

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/assert/Logo.js
import { jsx as _jsx18, jsxs as _jsxs13 } from "react/jsx-runtime";
var Logo = function Logo2() {
  return _jsxs13("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 200 200",
    children: [
      _jsxs13("defs", {
        children: [
          _jsxs13("linearGradient", {
            x1: "62.1023273%",
            y1: "0%",
            x2: "108.19718%",
            y2: "37.8635764%",
            id: "linearGradient-1",
            children: [
              _jsx18("stop", {
                stopColor: "#4285EB",
                offset: "0%"
              }),
              _jsx18("stop", {
                stopColor: "#2EC7FF",
                offset: "100%"
              })
            ]
          }),
          _jsxs13("linearGradient", {
            x1: "69.644116%",
            y1: "0%",
            x2: "54.0428975%",
            y2: "108.456714%",
            id: "linearGradient-2",
            children: [
              _jsx18("stop", {
                stopColor: "#29CDFF",
                offset: "0%"
              }),
              _jsx18("stop", {
                stopColor: "#148EFF",
                offset: "37.8600687%"
              }),
              _jsx18("stop", {
                stopColor: "#0A60FF",
                offset: "100%"
              })
            ]
          }),
          _jsxs13("linearGradient", {
            x1: "69.6908165%",
            y1: "-12.9743587%",
            x2: "16.7228981%",
            y2: "117.391248%",
            id: "linearGradient-3",
            children: [
              _jsx18("stop", {
                stopColor: "#FA816E",
                offset: "0%"
              }),
              _jsx18("stop", {
                stopColor: "#F74A5C",
                offset: "41.472606%"
              }),
              _jsx18("stop", {
                stopColor: "#F51D2C",
                offset: "100%"
              })
            ]
          }),
          _jsxs13("linearGradient", {
            x1: "68.1279872%",
            y1: "-35.6905737%",
            x2: "30.4400914%",
            y2: "114.942679%",
            id: "linearGradient-4",
            children: [
              _jsx18("stop", {
                stopColor: "#FA8E7D",
                offset: "0%"
              }),
              _jsx18("stop", {
                stopColor: "#F74A5C",
                offset: "51.2635191%"
              }),
              _jsx18("stop", {
                stopColor: "#F51D2C",
                offset: "100%"
              })
            ]
          })
        ]
      }),
      _jsx18("g", {
        stroke: "none",
        strokeWidth: 1,
        fill: "none",
        fillRule: "evenodd",
        children: _jsx18("g", {
          transform: "translate(-20.000000, -20.000000)",
          children: _jsx18("g", {
            transform: "translate(20.000000, 20.000000)",
            children: _jsxs13("g", {
              children: [
                _jsxs13("g", {
                  fillRule: "nonzero",
                  children: [
                    _jsxs13("g", {
                      children: [
                        _jsx18("path", {
                          d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                          fill: "url(#linearGradient-1)"
                        }),
                        _jsx18("path", {
                          d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                          fill: "url(#linearGradient-2)"
                        })
                      ]
                    }),
                    _jsx18("path", {
                      d: "M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z",
                      fill: "url(#linearGradient-3)"
                    })
                  ]
                }),
                _jsx18("ellipse", {
                  fill: "url(#linearGradient-4)",
                  cx: "100.519339",
                  cy: "100.436681",
                  rx: "23.6001926",
                  ry: "23.580786"
                })
              ]
            })
          })
        })
      })
    ]
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.js
import { jsx as _jsx19 } from "react/jsx-runtime";
var import_classnames10 = __toESM(require_classnames());
import { useEffect as useEffect7 } from "react";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/index.js
var proLayoutTitleHide = new Keyframes_default("antBadgeLoadingCircle", {
  "0%": {
    display: "none",
    opacity: 0
  },
  "80%": {
    display: "none",
    opacity: 0
  },
  "100%": {
    display: "unset",
    opacity: 1
  }
});
var genSiderMenuStyle3 = function genSiderMenuStyle4(token2) {
  var _token$layout, _token$layout$sider, _token$layout2, _token$layout2$sider, _token$layout3, _token$layout3$sider, _token$layout4, _token$layout4$sider, _$concat, _token$layout5, _token$layout5$sider, _token$layout6, _token$layout6$sider, _token$layout7, _token$layout7$sider, _token$layout8, _token$layout8$sider, _token$layout9, _token$layout9$sider, _token$layout10, _token$layout10$heade, _token$layout11, _token$layout11$heade, _token$layout12, _token$layout12$sider, _token$componentCls;
  return _defineProperty({}, token2.proComponentsCls, _defineProperty({}, "".concat(token2.proComponentsCls, "-layout"), _defineProperty({}, token2.componentCls, (_token$componentCls = {
    position: "relative",
    background: ((_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$sider = _token$layout.sider) === null || _token$layout$sider === void 0 ? void 0 : _token$layout$sider.colorMenuBackground) || "transparent",
    boxSizing: "border-box",
    "&-menu": {
      position: "relative",
      zIndex: 10,
      minHeight: "100%"
    },
    "&-fixed": {
      position: "fixed",
      insetBlockStart: 0,
      insetInlineStart: 0,
      zIndex: "100",
      height: "100%"
    }
  }, _defineProperty(_token$componentCls, "".concat(token2.antCls, "-layout-sider-children"), {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingInline: (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$sider = _token$layout2.sider) === null || _token$layout2$sider === void 0 ? void 0 : _token$layout2$sider.paddingInlineLayoutMenu,
    paddingBlock: (_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : (_token$layout3$sider = _token$layout3.sider) === null || _token$layout3$sider === void 0 ? void 0 : _token$layout3$sider.paddingBlockLayoutMenu,
    borderInlineEnd: "1px solid ".concat(token2.colorSplit)
  }), _defineProperty(_token$componentCls, "".concat(token2.antCls, "-menu"), (_$concat = {}, _defineProperty(_$concat, "".concat(token2.antCls, "-menu-item-group-title"), {
    fontSize: token2.fontSizeSM,
    paddingBottom: 4
  }), _defineProperty(_$concat, "".concat(token2.antCls, "-menu-item:hover"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout4 = token2.layout) === null || _token$layout4 === void 0 ? void 0 : (_token$layout4$sider = _token$layout4.sider) === null || _token$layout4$sider === void 0 ? void 0 : _token$layout4$sider.colorTextMenuItemHover
  }), _$concat)), _defineProperty(_token$componentCls, "&-logo", {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: 12,
    paddingBlock: 16,
    color: (_token$layout5 = token2.layout) === null || _token$layout5 === void 0 ? void 0 : (_token$layout5$sider = _token$layout5.sider) === null || _token$layout5$sider === void 0 ? void 0 : _token$layout5$sider.colorTextMenu,
    cursor: "pointer",
    borderBlockEnd: "1px solid ".concat((_token$layout6 = token2.layout) === null || _token$layout6 === void 0 ? void 0 : (_token$layout6$sider = _token$layout6.sider) === null || _token$layout6$sider === void 0 ? void 0 : _token$layout6$sider.colorMenuItemDivider),
    "> a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 22,
      fontSize: 22,
      "> img": {
        display: "inline-block",
        height: 22,
        verticalAlign: "middle"
      },
      "> h1": {
        display: "inline-block",
        height: 22,
        marginBlock: 0,
        marginInlineEnd: 0,
        marginInlineStart: 6,
        color: (_token$layout7 = token2.layout) === null || _token$layout7 === void 0 ? void 0 : (_token$layout7$sider = _token$layout7.sider) === null || _token$layout7$sider === void 0 ? void 0 : _token$layout7$sider.colorTextMenuTitle,
        fontWeight: 600,
        fontSize: 16,
        lineHeight: "22px",
        verticalAlign: "middle"
      }
    },
    "&-collapsed": _defineProperty({
      flexDirection: "column-reverse",
      margin: 0,
      padding: 12
    }, "".concat(token2.proComponentsCls, "-layout-apps-icon"), {
      marginBlockEnd: 8,
      fontSize: 16,
      transition: "font-size 0.2s ease-in-out,color 0.2s ease-in-out"
    })
  }), _defineProperty(_token$componentCls, "&-actions", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBlock: 4,
    marginInline: 0,
    color: (_token$layout8 = token2.layout) === null || _token$layout8 === void 0 ? void 0 : (_token$layout8$sider = _token$layout8.sider) === null || _token$layout8$sider === void 0 ? void 0 : _token$layout8$sider.colorTextMenu,
    "&-collapsed": {
      flexDirection: "column-reverse",
      paddingBlock: 0,
      paddingInline: 8,
      fontSize: 16,
      transition: "font-size 0.3s ease-in-out"
    },
    "&-list": {
      color: (_token$layout9 = token2.layout) === null || _token$layout9 === void 0 ? void 0 : (_token$layout9$sider = _token$layout9.sider) === null || _token$layout9$sider === void 0 ? void 0 : _token$layout9$sider.colorTextMenuSecondary,
      "&-collapsed": {
        marginBlockEnd: 8,
        animationName: "none"
      },
      "&-item": {
        paddingInline: 6,
        paddingBlock: 6,
        lineHeight: "16px",
        fontSize: 16,
        cursor: "pointer",
        borderRadius: token2.borderRadius,
        "&:hover": {
          background: token2.colorBgTextHover
        }
      }
    },
    "&-avatar": {
      fontSize: 14,
      paddingInline: 8,
      paddingBlock: 8,
      borderRadius: token2.borderRadius,
      "& *": {
        cursor: "pointer"
      },
      "&:hover": {
        background: token2.colorBgTextHover
      }
    }
  }), _defineProperty(_token$componentCls, "&-hide-menu-collapsed", {
    insetInlineStart: "-".concat(token2.proLayoutCollapsedWidth - 12, "px"),
    position: "absolute"
  }), _defineProperty(_token$componentCls, "&-mix", {
    height: "calc(100% - ".concat((token2 === null || token2 === void 0 ? void 0 : (_token$layout10 = token2.layout) === null || _token$layout10 === void 0 ? void 0 : (_token$layout10$heade = _token$layout10.header) === null || _token$layout10$heade === void 0 ? void 0 : _token$layout10$heade.heightLayoutHeader) || 56, "px)"),
    insetBlockStart: "".concat((token2 === null || token2 === void 0 ? void 0 : (_token$layout11 = token2.layout) === null || _token$layout11 === void 0 ? void 0 : (_token$layout11$heade = _token$layout11.header) === null || _token$layout11$heade === void 0 ? void 0 : _token$layout11$heade.heightLayoutHeader) || 56, "px")
  }), _defineProperty(_token$componentCls, "&-extra", {
    marginBlockEnd: 16,
    marginBlock: 0,
    marginInline: 16,
    "&-no-logo": {
      marginBlockStart: 16
    }
  }), _defineProperty(_token$componentCls, "&-links", {
    width: "100%",
    ul: {
      height: "auto"
    }
  }), _defineProperty(_token$componentCls, "&-link-menu", {
    border: "none",
    boxShadow: "none",
    background: "transparent"
  }), _defineProperty(_token$componentCls, "&-footer", {
    color: (_token$layout12 = token2.layout) === null || _token$layout12 === void 0 ? void 0 : (_token$layout12$sider = _token$layout12.sider) === null || _token$layout12$sider === void 0 ? void 0 : _token$layout12$sider.colorTextMenuSecondary,
    paddingBlockEnd: 16,
    fontSize: token2.fontSize,
    animationName: proLayoutTitleHide,
    animationDuration: ".3s",
    animationTimingFunction: "ease"
  }), _token$componentCls))));
};
function useStyle10(prefixCls, _ref2) {
  var proLayoutCollapsedWidth = _ref2.proLayoutCollapsedWidth;
  return useStyle("ProLayoutSiderMenu", function(token2) {
    var siderMenuToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth
    });
    return [
      genSiderMenuStyle3(siderMenuToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.js
var SiderMenuWrapper = function SiderMenuWrapper2(props) {
  var isMobile = props.isMobile, siderWidth = props.siderWidth, collapsed = props.collapsed, onCollapse = props.onCollapse, style = props.style, className = props.className, hide = props.hide, getContainer = props.getContainer, prefixCls = props.prefixCls;
  useEffect7(function() {
    if (isMobile === true) {
      onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
    }
  }, [
    isMobile
  ]);
  var omitProps = es_default2(props, [
    "className",
    "style"
  ]);
  var _useStyle = useStyle10("".concat(prefixCls, "-sider"), {
    proLayoutCollapsedWidth: 64
  }), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var siderClassName = (0, import_classnames10.default)("".concat(prefixCls, "-sider"), className, hashId);
  if (hide) {
    return null;
  }
  var drawerOpenProps = openVisibleCompatible(!collapsed, function() {
    return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
  });
  return wrapSSR(isMobile ? _jsx19(drawer_default, _objectSpread2(_objectSpread2({
    placement: "left",
    className: (0, import_classnames10.default)("".concat(prefixCls, "-drawer-sider"), className)
  }, drawerOpenProps), {}, {
    style: _objectSpread2({
      padding: 0,
      height: "100vh"
    }, style),
    closable: false,
    getContainer,
    width: siderWidth,
    bodyStyle: {
      height: "100vh",
      padding: 0,
      display: "flex",
      flexDirection: "row"
    },
    children: _jsx19(SiderMenu, _objectSpread2(_objectSpread2({}, omitProps), {}, {
      isMobile: true,
      className: siderClassName,
      collapsed: isMobile ? false : collapsed,
      splitMenus: false,
      originCollapsed: collapsed
    }))
  })) : _jsx19(SiderMenu, _objectSpread2(_objectSpread2({
    className: siderClassName,
    originCollapsed: collapsed
  }, omitProps), {}, {
    style
  })));
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/style/index.js
var getVersion3 = function getVersion4() {
  var _process, _process$env;
  if (typeof process === "undefined")
    return version_default;
  return ((_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.ANTD_VERSION) || version_default;
};
var compatibleStyle = function compatibleStyle2(token2) {
  var _getVersion, _token$layout, _token$layout$sider, _token$layout2, _token$layout2$sider, _token$layout3, _token$layout3$sider, _$concat, _token$layout4, _token$layout4$sider, _token$layout5, _token$layout5$sider, _token$layout6, _token$layout6$sider, _token$layout7, _token$layout7$sider, _token$layout8, _token$layout8$sider, _token$layout9, _token$layout9$sider, _$concat$concat, _token$layout10, _token$layout10$sider, _token$layout11, _token$layout11$sider, _token$layout12, _token$layout12$sider, _token$layout13, _token$layout13$sider, _token$layout14, _token$layout14$sider, _token$layout15, _token$layout15$heade, _token$layout16, _token$layout16$heade, _token$layout17, _token$layout17$heade, _token$layout18, _token$layout18$heade, _token$layout19, _token$layout19$heade, _$concat5, _$concat6, _token$layout20, _token$layout20$heade, _token$layout21, _token$layout21$heade, _token$layout22, _token$layout22$heade, _token$layout23, _token$layout23$heade, _token$layout24, _token$layout24$heade, _token$layout25, _token$layout25$heade, _$concat8, _$concat9, _token$componentCls, _token$layout26, _token$layout26$sider, _token$layout27, _token$layout27$sider, _token$layout28, _token$layout28$sider, _token$layout29, _token$layout29$sider, _token$layout30, _token$layout30$sider, _$concat$concat2, _$concat11, _ref;
  if ((_getVersion = getVersion3()) === null || _getVersion === void 0 ? void 0 : _getVersion.startsWith("5")) {
    return {};
  }
  return _ref = {}, _defineProperty(_ref, token2.proComponentsCls, {
    width: "100%",
    height: "100%"
  }), _defineProperty(_ref, token2.componentCls, (_token$componentCls = {
    width: "100%",
    height: "100%"
  }, _defineProperty(_token$componentCls, "".concat(token2.proComponentsCls, "-base-menu"), (_$concat6 = {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$sider = _token$layout.sider) === null || _token$layout$sider === void 0 ? void 0 : _token$layout$sider.colorTextMenu
  }, _defineProperty(_$concat6, "".concat(token2.antCls, "-menu-sub"), {
    backgroundColor: "transparent!important",
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout2 = token2.layout) === null || _token$layout2 === void 0 ? void 0 : (_token$layout2$sider = _token$layout2.sider) === null || _token$layout2$sider === void 0 ? void 0 : _token$layout2$sider.colorTextMenu
  }), _defineProperty(_$concat6, "& ".concat(token2.antCls, "-layout"), {
    backgroundColor: "transparent",
    width: "100%"
  }), _defineProperty(_$concat6, "".concat(token2.antCls, "-menu-submenu-expand-icon, ").concat(token2.antCls, "-menu-submenu-arrow"), {
    color: "inherit"
  }), _defineProperty(_$concat6, "&".concat(token2.antCls, "-menu"), (_$concat = {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout3 = token2.layout) === null || _token$layout3 === void 0 ? void 0 : (_token$layout3$sider = _token$layout3.sider) === null || _token$layout3$sider === void 0 ? void 0 : _token$layout3$sider.colorTextMenu
  }, _defineProperty(_$concat, "".concat(token2.antCls, "-menu-item"), {
    "*": {
      transition: "none !important"
    }
  }), _defineProperty(_$concat, "".concat(token2.antCls, "-menu-item a"), {
    color: "inherit"
  }), _$concat)), _defineProperty(_$concat6, "&".concat(token2.antCls, "-menu-inline"), _defineProperty({}, "".concat(token2.antCls, "-menu-selected::after,").concat(token2.antCls, "-menu-item-selected::after"), {
    display: "none"
  })), _defineProperty(_$concat6, "".concat(token2.antCls, "-menu-sub ").concat(token2.antCls, "-menu-inline"), {
    backgroundColor: "transparent!important"
  }), _defineProperty(_$concat6, "".concat(token2.antCls, "-menu-item:active, \n        ").concat(token2.antCls, "-menu-submenu-title:active"), {
    backgroundColor: "transparent!important"
  }), _defineProperty(_$concat6, "&".concat(token2.antCls, "-menu-light"), _defineProperty({}, "".concat(token2.antCls, "-menu-item:hover, \n            ").concat(token2.antCls, "-menu-item-active,\n            ").concat(token2.antCls, "-menu-submenu-active, \n            ").concat(token2.antCls, "-menu-submenu-title:hover"), _defineProperty({
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout4 = token2.layout) === null || _token$layout4 === void 0 ? void 0 : (_token$layout4$sider = _token$layout4.sider) === null || _token$layout4$sider === void 0 ? void 0 : _token$layout4$sider.colorTextMenuActive,
    borderRadius: token2.borderRadius
  }, "".concat(token2.antCls, "-menu-submenu-arrow"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout5 = token2.layout) === null || _token$layout5 === void 0 ? void 0 : (_token$layout5$sider = _token$layout5.sider) === null || _token$layout5$sider === void 0 ? void 0 : _token$layout5$sider.colorTextMenuActive
  }))), _defineProperty(_$concat6, "&".concat(token2.antCls, "-menu:not(").concat(token2.antCls, "-menu-horizontal)"), (_$concat$concat = {}, _defineProperty(_$concat$concat, "".concat(token2.antCls, "-menu-item-selected"), {
    backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout6 = token2.layout) === null || _token$layout6 === void 0 ? void 0 : (_token$layout6$sider = _token$layout6.sider) === null || _token$layout6$sider === void 0 ? void 0 : _token$layout6$sider.colorBgMenuItemSelected,
    borderRadius: token2.borderRadius
  }), _defineProperty(_$concat$concat, "".concat(token2.antCls, "-menu-item:hover, \n            ").concat(token2.antCls, "-menu-item-active,\n            ").concat(token2.antCls, "-menu-submenu-title:hover"), _defineProperty({
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout7 = token2.layout) === null || _token$layout7 === void 0 ? void 0 : (_token$layout7$sider = _token$layout7.sider) === null || _token$layout7$sider === void 0 ? void 0 : _token$layout7$sider.colorTextMenuActive,
    borderRadius: token2.borderRadius,
    backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout8 = token2.layout) === null || _token$layout8 === void 0 ? void 0 : (_token$layout8$sider = _token$layout8.sider) === null || _token$layout8$sider === void 0 ? void 0 : _token$layout8$sider.colorBgMenuItemHover
  }, "".concat(token2.antCls, "-menu-submenu-arrow"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout9 = token2.layout) === null || _token$layout9 === void 0 ? void 0 : (_token$layout9$sider = _token$layout9.sider) === null || _token$layout9$sider === void 0 ? void 0 : _token$layout9$sider.colorTextMenuActive
  })), _$concat$concat)), _defineProperty(_$concat6, "".concat(token2.antCls, "-menu-item-selected"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout10 = token2.layout) === null || _token$layout10 === void 0 ? void 0 : (_token$layout10$sider = _token$layout10.sider) === null || _token$layout10$sider === void 0 ? void 0 : _token$layout10$sider.colorTextMenuSelected
  }), _defineProperty(_$concat6, "".concat(token2.antCls, "-menu-submenu-selected"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout11 = token2.layout) === null || _token$layout11 === void 0 ? void 0 : (_token$layout11$sider = _token$layout11.sider) === null || _token$layout11$sider === void 0 ? void 0 : _token$layout11$sider.colorTextMenuSelected
  }), _defineProperty(_$concat6, "&".concat(token2.antCls, "-menu:not(").concat(token2.antCls, "-menu-inline) ").concat(token2.antCls, "-menu-submenu-open"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout12 = token2.layout) === null || _token$layout12 === void 0 ? void 0 : (_token$layout12$sider = _token$layout12.sider) === null || _token$layout12$sider === void 0 ? void 0 : _token$layout12$sider.colorTextMenuSelected
  }), _defineProperty(_$concat6, "&".concat(token2.antCls, "-menu-vertical"), _defineProperty({}, "".concat(token2.antCls, "-menu-submenu-selected"), {
    borderRadius: token2.borderRadius,
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout13 = token2.layout) === null || _token$layout13 === void 0 ? void 0 : (_token$layout13$sider = _token$layout13.sider) === null || _token$layout13$sider === void 0 ? void 0 : _token$layout13$sider.colorTextMenuSelected
  })), _defineProperty(_$concat6, "".concat(token2.antCls, "-menu-submenu:hover > ").concat(token2.antCls, "-menu-submenu-title > ").concat(token2.antCls, "-menu-submenu-arrow"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout14 = token2.layout) === null || _token$layout14 === void 0 ? void 0 : (_token$layout14$sider = _token$layout14.sider) === null || _token$layout14$sider === void 0 ? void 0 : _token$layout14$sider.colorTextMenuActive
  }), _defineProperty(_$concat6, "&".concat(token2.antCls, "-menu-horizontal"), (_$concat5 = {}, _defineProperty(_$concat5, "".concat(token2.antCls, "-menu-item:hover,\n          ").concat(token2.antCls, "-menu-submenu:hover,\n          ").concat(token2.antCls, "-menu-item-active,\n          ").concat(token2.antCls, "-menu-submenu-active"), {
    borderRadius: 4,
    transition: "none",
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout15 = token2.layout) === null || _token$layout15 === void 0 ? void 0 : (_token$layout15$heade = _token$layout15.header) === null || _token$layout15$heade === void 0 ? void 0 : _token$layout15$heade.colorTextMenuActive,
    backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout16 = token2.layout) === null || _token$layout16 === void 0 ? void 0 : (_token$layout16$heade = _token$layout16.header) === null || _token$layout16$heade === void 0 ? void 0 : _token$layout16$heade.colorBgMenuItemHover
  }), _defineProperty(_$concat5, "".concat(token2.antCls, "-menu-item-open,\n          ").concat(token2.antCls, "-menu-submenu-open,\n          ").concat(token2.antCls, "-menu-item-selected,\n          ").concat(token2.antCls, "-menu-submenu-selected"), _defineProperty({
    backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout17 = token2.layout) === null || _token$layout17 === void 0 ? void 0 : (_token$layout17$heade = _token$layout17.header) === null || _token$layout17$heade === void 0 ? void 0 : _token$layout17$heade.colorBgMenuItemSelected,
    borderRadius: token2.borderRadius,
    transition: "none",
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout18 = token2.layout) === null || _token$layout18 === void 0 ? void 0 : (_token$layout18$heade = _token$layout18.header) === null || _token$layout18$heade === void 0 ? void 0 : _token$layout18$heade.colorTextMenuSelected
  }, "".concat(token2.antCls, "-menu-submenu-arrow"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout19 = token2.layout) === null || _token$layout19 === void 0 ? void 0 : (_token$layout19$heade = _token$layout19.header) === null || _token$layout19$heade === void 0 ? void 0 : _token$layout19$heade.colorTextMenuSelected
  })), _defineProperty(_$concat5, "> ".concat(token2.antCls, "-menu-item, > ").concat(token2.antCls, "-menu-submenu"), {
    paddingInline: 16,
    marginInline: 4
  }), _defineProperty(_$concat5, "> ".concat(token2.antCls, "-menu-item::after, > ").concat(token2.antCls, "-menu-submenu::after"), {
    display: "none"
  }), _$concat5)), _$concat6)), _defineProperty(_token$componentCls, "".concat(token2.proComponentsCls, "-top-nav-header-base-menu"), (_$concat9 = {}, _defineProperty(_$concat9, "&".concat(token2.antCls, "-menu"), _defineProperty({
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout20 = token2.layout) === null || _token$layout20 === void 0 ? void 0 : (_token$layout20$heade = _token$layout20.header) === null || _token$layout20$heade === void 0 ? void 0 : _token$layout20$heade.colorTextMenu
  }, "".concat(token2.antCls, "-menu-item a"), {
    color: "inherit"
  })), _defineProperty(_$concat9, "&".concat(token2.antCls, "-menu-light"), (_$concat8 = {}, _defineProperty(_$concat8, "".concat(token2.antCls, "-menu-item:hover, \n            ").concat(token2.antCls, "-menu-item-active,\n            ").concat(token2.antCls, "-menu-submenu-active, \n            ").concat(token2.antCls, "-menu-submenu-title:hover"), _defineProperty({
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout21 = token2.layout) === null || _token$layout21 === void 0 ? void 0 : (_token$layout21$heade = _token$layout21.header) === null || _token$layout21$heade === void 0 ? void 0 : _token$layout21$heade.colorTextMenuActive,
    borderRadius: token2.borderRadius,
    transition: "none",
    backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout22 = token2.layout) === null || _token$layout22 === void 0 ? void 0 : (_token$layout22$heade = _token$layout22.header) === null || _token$layout22$heade === void 0 ? void 0 : _token$layout22$heade.colorBgMenuItemSelected
  }, "".concat(token2.antCls, "-menu-submenu-arrow"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout23 = token2.layout) === null || _token$layout23 === void 0 ? void 0 : (_token$layout23$heade = _token$layout23.header) === null || _token$layout23$heade === void 0 ? void 0 : _token$layout23$heade.colorTextMenuActive
  })), _defineProperty(_$concat8, "".concat(token2.antCls, "-menu-item-selected"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout24 = token2.layout) === null || _token$layout24 === void 0 ? void 0 : (_token$layout24$heade = _token$layout24.header) === null || _token$layout24$heade === void 0 ? void 0 : _token$layout24$heade.colorTextMenuSelected,
    borderRadius: token2.borderRadius,
    backgroundColor: token2 === null || token2 === void 0 ? void 0 : (_token$layout25 = token2.layout) === null || _token$layout25 === void 0 ? void 0 : (_token$layout25$heade = _token$layout25.header) === null || _token$layout25$heade === void 0 ? void 0 : _token$layout25$heade.colorBgMenuItemSelected
  }), _$concat8)), _$concat9)), _token$componentCls)), _defineProperty(_ref, "".concat(token2.antCls, "-menu-sub").concat(token2.antCls, "-menu-inline"), {
    backgroundColor: "transparent!important"
  }), _defineProperty(_ref, "".concat(token2.antCls, "-menu-submenu-popup"), (_$concat11 = {
    backgroundColor: "rgba(255, 255, 255, 0.42)",
    "-webkit-backdrop-filter": "blur(8px)",
    backdropFilter: "blur(8px)"
  }, _defineProperty(_$concat11, "".concat(token2.antCls, "-menu"), _defineProperty({
    background: "transparent !important",
    backgroundColor: "transparent !important"
  }, "".concat(token2.antCls, "-menu-item:active, \n        ").concat(token2.antCls, "-menu-submenu-title:active"), {
    backgroundColor: "transparent!important"
  })), _defineProperty(_$concat11, "".concat(token2.antCls, "-menu-item-selected"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout26 = token2.layout) === null || _token$layout26 === void 0 ? void 0 : (_token$layout26$sider = _token$layout26.sider) === null || _token$layout26$sider === void 0 ? void 0 : _token$layout26$sider.colorTextMenuSelected
  }), _defineProperty(_$concat11, "".concat(token2.antCls, "-menu-submenu-selected"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout27 = token2.layout) === null || _token$layout27 === void 0 ? void 0 : (_token$layout27$sider = _token$layout27.sider) === null || _token$layout27$sider === void 0 ? void 0 : _token$layout27$sider.colorTextMenuSelected
  }), _defineProperty(_$concat11, "".concat(token2.antCls, "-menu:not(").concat(token2.antCls, "-menu-horizontal)"), (_$concat$concat2 = {}, _defineProperty(_$concat$concat2, "".concat(token2.antCls, "-menu-item-selected"), {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: token2.borderRadius,
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout28 = token2.layout) === null || _token$layout28 === void 0 ? void 0 : (_token$layout28$sider = _token$layout28.sider) === null || _token$layout28$sider === void 0 ? void 0 : _token$layout28$sider.colorTextMenuSelected
  }), _defineProperty(_$concat$concat2, "".concat(token2.antCls, "-menu-item:hover, \n          ").concat(token2.antCls, "-menu-item-active,\n          ").concat(token2.antCls, "-menu-submenu-title:hover"), _defineProperty({
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout29 = token2.layout) === null || _token$layout29 === void 0 ? void 0 : (_token$layout29$sider = _token$layout29.sider) === null || _token$layout29$sider === void 0 ? void 0 : _token$layout29$sider.colorTextMenuActive,
    borderRadius: token2.borderRadius
  }, "".concat(token2.antCls, "-menu-submenu-arrow"), {
    color: token2 === null || token2 === void 0 ? void 0 : (_token$layout30 = token2.layout) === null || _token$layout30 === void 0 ? void 0 : (_token$layout30$sider = _token$layout30.sider) === null || _token$layout30$sider === void 0 ? void 0 : _token$layout30$sider.colorTextMenuActive
  })), _$concat$concat2)), _$concat11)), _ref;
};
var genProLayoutStyle = function genProLayoutStyle2(token2) {
  var _token$layout31, _token$layout31$pageC, _token$layout32, _token$layout32$pageC, _token$layout33, _token$layout33$pageC, _token$layout34, _$concat12, _token$proComponentsC;
  return _defineProperty({
    body: {
      paddingBlock: 0,
      paddingInline: 0,
      marginBlock: 0,
      marginInline: 0,
      fontFamily: token2.fontFamily
    }
  }, token2.proComponentsCls, (_token$proComponentsC = {}, _defineProperty(_token$proComponentsC, "".concat(token2.antCls, "-layout"), {
    backgroundColor: "transparent !important"
  }), _defineProperty(_token$proComponentsC, "& ".concat(token2.componentCls), (_$concat12 = {}, _defineProperty(_$concat12, "& ".concat(token2.antCls, "-layout"), {
    display: "flex",
    backgroundColor: "transparent",
    width: "100%"
  }), _defineProperty(_$concat12, "".concat(token2.componentCls, "-content"), {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: (token2 === null || token2 === void 0 ? void 0 : (_token$layout31 = token2.layout) === null || _token$layout31 === void 0 ? void 0 : (_token$layout31$pageC = _token$layout31.pageContainer) === null || _token$layout31$pageC === void 0 ? void 0 : _token$layout31$pageC.colorBgPageContainer) || "transparent",
    position: "relative",
    "*": {
      boxSizing: "border-box"
    },
    paddingBlock: token2 === null || token2 === void 0 ? void 0 : (_token$layout32 = token2.layout) === null || _token$layout32 === void 0 ? void 0 : (_token$layout32$pageC = _token$layout32.pageContainer) === null || _token$layout32$pageC === void 0 ? void 0 : _token$layout32$pageC.paddingBlockPageContainerContent,
    paddingInline: token2 === null || token2 === void 0 ? void 0 : (_token$layout33 = token2.layout) === null || _token$layout33 === void 0 ? void 0 : (_token$layout33$pageC = _token$layout33.pageContainer) === null || _token$layout33$pageC === void 0 ? void 0 : _token$layout33$pageC.paddingInlinePageContainerContent,
    "&-has-page-container": {
      padding: 0
    }
  }), _defineProperty(_$concat12, "".concat(token2.componentCls, "-container"), {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    minHeight: 0,
    backgroundColor: "transparent"
  }), _defineProperty(_$concat12, "".concat(token2.componentCls, "-bg-list"), {
    pointerEvents: "none",
    position: "fixed",
    overflow: "hidden",
    insetBlockStart: 0,
    insetInlineStart: 0,
    zIndex: 0,
    height: "100%",
    width: "100%",
    background: token2 === null || token2 === void 0 ? void 0 : (_token$layout34 = token2.layout) === null || _token$layout34 === void 0 ? void 0 : _token$layout34.bgLayout
  }), _$concat12)), _defineProperty(_token$proComponentsC, "".concat(token2.antCls, "-menu-submenu-popup"), {
    backgroundColor: "rgba(255, 255, 255, 0.42)",
    "-webkit-backdrop-filter": "blur(8px)",
    backdropFilter: "blur(8px)"
  }), _token$proComponentsC));
};
function useStyle11(prefixCls) {
  return useStyle("ProLayout", function(token2) {
    var proLayoutToken = _objectSpread2(_objectSpread2({}, token2), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [
      genProLayoutStyle(proLayoutToken),
      compatibleStyle(proLayoutToken)
    ];
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/utils/getBreadcrumbProps.js
var import_path_to_regexp4 = __toESM(require_path_to_regexp());
import { jsx as _jsx20 } from "react/jsx-runtime";

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/utils/pathTools.js
function urlToList(url) {
  if (!url || url === "/") {
    return [
      "/"
    ];
  }
  var urlList = url.split("/").filter(function(i) {
    return i;
  });
  return urlList.map(function(urlItem, index) {
    return "/".concat(urlList.slice(0, index + 1).join("/"));
  });
}

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/utils/getBreadcrumbProps.js
var defaultItemRender = function defaultItemRender2(route, _, routes) {
  var breadcrumbName = route.breadcrumbName, path = route.path;
  var last = routes.indexOf(route) === routes.length - 1;
  return last ? _jsx20("span", {
    children: breadcrumbName
  }) : _jsx20("a", {
    href: path,
    children: breadcrumbName
  });
};
var renderItemLocal = function renderItemLocal2(item, props) {
  var formatMessage = props.formatMessage, menu = props.menu;
  if (item.locale && formatMessage && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
    return formatMessage({
      id: item.locale,
      defaultMessage: item.name
    });
  }
  return item.name;
};
var getBreadcrumb = function getBreadcrumb2(breadcrumbMap, url) {
  var breadcrumbItem = breadcrumbMap.get(url);
  if (!breadcrumbItem) {
    var keys = Array.from(breadcrumbMap.keys()) || [];
    var targetPath = keys.find(function(path) {
      return (0, import_path_to_regexp4.default)(path.replace("?", "")).test(url);
    });
    if (targetPath)
      breadcrumbItem = breadcrumbMap.get(targetPath);
  }
  return breadcrumbItem || {
    path: ""
  };
};
var getBreadcrumbFromProps = function getBreadcrumbFromProps2(props) {
  var location = props.location, breadcrumbMap = props.breadcrumbMap;
  return {
    location,
    breadcrumbMap
  };
};
var conversionFromLocation = function conversionFromLocation2(routerLocation, breadcrumbMap, props) {
  var pathSnippets = urlToList(routerLocation === null || routerLocation === void 0 ? void 0 : routerLocation.pathname);
  var extraBreadcrumbItems = pathSnippets.map(function(url) {
    var currentBreadcrumb = getBreadcrumb(breadcrumbMap, url);
    var name = renderItemLocal(currentBreadcrumb, props);
    var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
    return name && !hideInBreadcrumb ? {
      path: url,
      breadcrumbName: name,
      component: currentBreadcrumb.component
    } : {
      path: "",
      breadcrumbName: ""
    };
  }).filter(function(item) {
    return item && item.path;
  });
  return extraBreadcrumbItems;
};
var genBreadcrumbProps = function genBreadcrumbProps2(props) {
  var _getBreadcrumbFromPro = getBreadcrumbFromProps(props), location = _getBreadcrumbFromPro.location, breadcrumbMap = _getBreadcrumbFromPro.breadcrumbMap;
  if (location && location.pathname && breadcrumbMap) {
    return conversionFromLocation(location, breadcrumbMap, props);
  }
  return [];
};
var getBreadcrumbProps = function getBreadcrumbProps2(props, layoutPros) {
  var breadcrumbRender = props.breadcrumbRender, propsItemRender = props.itemRender;
  var _ref = layoutPros.breadcrumbProps || {}, _ref$minLength = _ref.minLength, minLength = _ref$minLength === void 0 ? 2 : _ref$minLength;
  var routesArray = genBreadcrumbProps(props);
  var itemRender = propsItemRender || defaultItemRender;
  var routes = routesArray;
  if (breadcrumbRender) {
    routes = breadcrumbRender(routes) || [];
  }
  if (routes && routes.length < minLength || breadcrumbRender === false) {
    routes = void 0;
  }
  return {
    routes,
    itemRender
  };
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/utils/getMenuData.js
function fromEntries(iterable) {
  return _toConsumableArray(iterable).reduce(function(obj, _ref) {
    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], val = _ref2[1];
    obj[key] = val;
    return obj;
  }, {});
}
var getMenuData = function getMenuData2(routes, menu, formatMessage, menuDataRender) {
  var _transformRoute = transformRoute_default(routes, (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true), menuData = _transformRoute.menuData, breadcrumb = _transformRoute.breadcrumb;
  if (!menuDataRender) {
    return {
      breadcrumb: fromEntries(breadcrumb),
      breadcrumbMap: breadcrumb,
      menuData
    };
  }
  return getMenuData2(menuDataRender(menuData), menu, formatMessage, void 0);
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/utils/useCurrentMenuLayoutProps.js
import { useEffect as useEffect8, useState as useState6 } from "react";
var useCurrentMenuLayoutProps = function useCurrentMenuLayoutProps2(currentMenu) {
  var _useState = useState6({}), _useState2 = _slicedToArray(_useState, 2), currentMenuLayoutProps = _useState2[0], setCurrentMenuLayoutProps = _useState2[1];
  useEffect8(function() {
    setCurrentMenuLayoutProps(omitUndefined({
      layout: _typeof(currentMenu.layout) !== "object" ? currentMenu.layout : void 0,
      navTheme: currentMenu.navTheme,
      menuRender: currentMenu.menuRender,
      footerRender: currentMenu.footerRender,
      menuHeaderRender: currentMenu.menuHeaderRender,
      headerRender: currentMenu.headerRender,
      fixSiderbar: currentMenu.fixSiderbar
    }));
  }, [
    currentMenu.layout,
    currentMenu.navTheme,
    currentMenu.menuRender,
    currentMenu.footerRender,
    currentMenu.menuHeaderRender,
    currentMenu.headerRender,
    currentMenu.fixSiderbar
  ]);
  return currentMenuLayoutProps;
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/WrapContent.js
import { jsx as _jsx21 } from "react/jsx-runtime";
var import_classnames11 = __toESM(require_classnames());
import { useContext as useContext11 } from "react";
var WrapContent = function WrapContent2(props) {
  var _classNames;
  var _useContext = useContext11(ProProvider), hashId = _useContext.hashId;
  var style = props.style, prefixCls = props.prefixCls, children = props.children, _props$hasPageContain = props.hasPageContainer, hasPageContainer = _props$hasPageContain === void 0 ? 0 : _props$hasPageContain;
  var contentClassName = (0, import_classnames11.default)("".concat(prefixCls, "-content"), hashId, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-has-header"), props.hasHeader), _defineProperty(_classNames, "".concat(prefixCls, "-content-has-page-container"), hasPageContainer > 0), _classNames));
  var ErrorComponent = props.ErrorBoundary || ErrorBoundary;
  return props.ErrorBoundary === false ? _jsx21(layout_default.Content, {
    className: contentClassName,
    style,
    children
  }) : _jsx21(ErrorComponent, {
    children: _jsx21(layout_default.Content, {
      className: contentClassName,
      style,
      children
    })
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/ProLayout.js
var _excluded7 = [
  "id",
  "defaultMessage"
];
var _excluded23 = [
  "fixSiderbar",
  "navTheme",
  "layout"
];
var layoutIndex = 0;
var headerRender = function headerRender2(props, matchMenuKeys) {
  var _props$stylish;
  if (props.headerRender === false || props.pure) {
    return null;
  }
  return _jsx22(DefaultHeader, _objectSpread2(_objectSpread2({
    matchMenuKeys
  }, props), {}, {
    stylish: (_props$stylish = props.stylish) === null || _props$stylish === void 0 ? void 0 : _props$stylish.header
  }));
};
var footerRender = function footerRender2(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }
  if (props.footerRender) {
    return props.footerRender(_objectSpread2({}, props), _jsx22(DefaultFooter, {}));
  }
  return null;
};
var renderSiderMenu = function renderSiderMenu2(props, matchMenuKeys) {
  var _props$stylish3;
  var layout = props.layout, isMobile = props.isMobile, selectedKeys = props.selectedKeys, openKeys = props.openKeys, splitMenus = props.splitMenus, menuRender = props.menuRender;
  if (props.menuRender === false || props.pure) {
    return null;
  }
  var menuData = props.menuData;
  if (splitMenus && (openKeys !== false || layout === "mix") && !isMobile) {
    var _ref = selectedKeys || matchMenuKeys, _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
    if (key) {
      var _props$menuData, _props$menuData$find;
      menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 ? void 0 : (_props$menuData$find = _props$menuData.find(function(item) {
        return item.key === key;
      })) === null || _props$menuData$find === void 0 ? void 0 : _props$menuData$find.children) || [];
    } else {
      menuData = [];
    }
  }
  var clearMenuData = clearMenuItem(menuData || []);
  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && splitMenus) {
    return null;
  }
  if (layout === "top" && !isMobile) {
    var _props$stylish2;
    return _jsx22(SiderMenuWrapper, _objectSpread2(_objectSpread2({
      matchMenuKeys
    }, props), {}, {
      hide: true,
      stylish: (_props$stylish2 = props.stylish) === null || _props$stylish2 === void 0 ? void 0 : _props$stylish2.sider
    }));
  }
  var defaultDom = _jsx22(SiderMenuWrapper, _objectSpread2(_objectSpread2({
    matchMenuKeys
  }, props), {}, {
    menuData: clearMenuData,
    stylish: (_props$stylish3 = props.stylish) === null || _props$stylish3 === void 0 ? void 0 : _props$stylish3.sider
  }));
  if (menuRender) {
    return menuRender(props, defaultDom);
  }
  return defaultDom;
};
var defaultPageTitleRender = function defaultPageTitleRender2(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = getPageTitleInfo(pageProps);
  if (pageTitleRender === false) {
    return {
      title: props.title || "",
      id: "",
      pageName: ""
    };
  }
  if (pageTitleRender) {
    var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);
    if (typeof title === "string") {
      return _objectSpread2(_objectSpread2({}, pageTitleInfo), {}, {
        title
      });
    }
    (0, import_warning.default)(typeof title === "string", "pro-layout: renderPageTitle return value should be a string");
  }
  return pageTitleInfo;
};
var getpaddingInlineStart = function getpaddingInlineStart2(hasLeftPadding, collapsed, siderWidth) {
  if (hasLeftPadding) {
    return collapsed ? 60 : siderWidth;
  }
  return 0;
};
var BaseProLayout = function BaseProLayout2(props) {
  var _props$prefixCls, _classNames, _location$pathname, _token$layout, _token$layout$pageCon;
  var _ref3 = props || {}, children = _ref3.children, propsOnCollapse = _ref3.onCollapse, _ref3$location = _ref3.location, location = _ref3$location === void 0 ? {
    pathname: "/"
  } : _ref3$location, contentStyle = _ref3.contentStyle, route = _ref3.route, defaultCollapsed = _ref3.defaultCollapsed, style = _ref3.style, propsSiderWidth = _ref3.siderWidth, menu = _ref3.menu, siderMenuType = _ref3.siderMenuType, propsIsChildrenLayout = _ref3.isChildrenLayout, menuDataRender = _ref3.menuDataRender, actionRef = _ref3.actionRef, bgLayoutImgList = _ref3.bgLayoutImgList, propsFormatMessage = _ref3.formatMessage, loading = _ref3.loading;
  var siderWidth = useMemo9(function() {
    if (propsSiderWidth)
      return propsSiderWidth;
    if (props.layout === "mix")
      return 215;
    return 256;
  }, [
    props.layout,
    propsSiderWidth
  ]);
  var context = useContext12(config_provider_default.ConfigContext);
  var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls("pro");
  var _useMountMergeState = (0, import_useMergedState.default)(false, {
    value: menu === null || menu === void 0 ? void 0 : menu.loading,
    onChange: menu === null || menu === void 0 ? void 0 : menu.onLoadingChange
  }), _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2), menuLoading = _useMountMergeState2[0], setMenuLoading = _useMountMergeState2[1];
  var _useState = useState7(function() {
    layoutIndex += 1;
    return "pro-layout-".concat(layoutIndex);
  }), _useState2 = _slicedToArray(_useState, 1), defaultId = _useState2[0];
  var formatMessage = useCallback7(function(_ref4) {
    var id = _ref4.id, defaultMessage = _ref4.defaultMessage, restParams = _objectWithoutProperties(_ref4, _excluded7);
    if (propsFormatMessage) {
      return propsFormatMessage(_objectSpread2({
        id,
        defaultMessage
      }, restParams));
    }
    var locales2 = gLocaleObject();
    return locales2[id] ? locales2[id] : defaultMessage;
  }, [
    propsFormatMessage
  ]);
  var _useSWR = useSWR([
    defaultId,
    menu === null || menu === void 0 ? void 0 : menu.params
  ], /* @__PURE__ */ function() {
    var _ref6 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(_ref5) {
      var _menu$request;
      var _ref7, params, menuDataItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              _ref7 = _slicedToArray(_ref5, 2), params = _ref7[1];
              setMenuLoading(true);
              _context.next = 4;
              return menu === null || menu === void 0 ? void 0 : (_menu$request = menu.request) === null || _menu$request === void 0 ? void 0 : _menu$request.call(menu, params || {}, (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || []);
            case 4:
              menuDataItems = _context.sent;
              setMenuLoading(false);
              return _context.abrupt("return", menuDataItems);
            case 7:
            case "end":
              return _context.stop();
          }
      }, _callee);
    }));
    return function(_x) {
      return _ref6.apply(this, arguments);
    };
  }(), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    revalidateOnReconnect: false
  }), data = _useSWR.data, mutate2 = _useSWR.mutate;
  var _useSWRConfig = useSWRConfig(), cache2 = _useSWRConfig.cache;
  useEffect9(function() {
    return function() {
      if (cache2 instanceof Map)
        cache2.clear();
    };
  }, []);
  var menuInfoData = useMemo9(function() {
    return getMenuData(data || (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }, [
    formatMessage,
    menu,
    menuDataRender,
    data,
    route === null || route === void 0 ? void 0 : route.children,
    route === null || route === void 0 ? void 0 : route.routes
  ]);
  var _ref8 = menuInfoData || {}, _ref8$breadcrumb = _ref8.breadcrumb, breadcrumb = _ref8$breadcrumb === void 0 ? {} : _ref8$breadcrumb, breadcrumbMap = _ref8.breadcrumbMap, _ref8$menuData = _ref8.menuData, menuData = _ref8$menuData === void 0 ? [] : _ref8$menuData;
  if (actionRef && (menu === null || menu === void 0 ? void 0 : menu.request)) {
    actionRef.current = {
      reload: function reload() {
        mutate2();
      }
    };
  }
  var matchMenus = useMemo9(function() {
    return getMatchMenu_default(location.pathname || "/", menuData || [], true);
  }, [
    location.pathname,
    menuData
  ]);
  var matchMenuKeys = useMemo9(function() {
    return Array.from(new Set(matchMenus.map(function(item) {
      return item.key || item.path || "";
    })));
  }, [
    matchMenus
  ]);
  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = useCurrentMenuLayoutProps(currentMenu);
  var _props$currentMenuLay = _objectSpread2(_objectSpread2({}, props), currentMenuLayoutProps), fixSiderbar = _props$currentMenuLay.fixSiderbar, navTheme = _props$currentMenuLay.navTheme, propsLayout = _props$currentMenuLay.layout, rest = _objectWithoutProperties(_props$currentMenuLay, _excluded23);
  var colSize = es_default3();
  var isMobile = (colSize === "sm" || colSize === "xs") && !props.disableMobile;
  var hasLeftPadding = propsLayout !== "top" && !isMobile;
  var _useMergedState = (0, import_useMergedState2.default)(function() {
    if (defaultCollapsed !== void 0)
      return defaultCollapsed;
    if (false)
      return false;
    if (isMobile)
      return true;
    if (colSize === "md")
      return true;
    return false;
  }, {
    value: props.collapsed,
    onChange: propsOnCollapse
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), collapsed = _useMergedState2[0], onCollapse = _useMergedState2[1];
  var defaultProps = es_default2(_objectSpread2(_objectSpread2(_objectSpread2({
    prefixCls
  }, props), {}, {
    siderWidth
  }, currentMenuLayoutProps), {}, {
    formatMessage,
    breadcrumb,
    menu: _objectSpread2(_objectSpread2({}, menu), {}, {
      type: siderMenuType || (menu === null || menu === void 0 ? void 0 : menu.type),
      loading: menuLoading
    }),
    layout: propsLayout
  }), [
    "className",
    "style",
    "breadcrumbRender"
  ]);
  var pageTitleInfo = defaultPageTitleRender(_objectSpread2(_objectSpread2({
    pathname: location.pathname
  }, defaultProps), {}, {
    breadcrumbMap
  }), props);
  var breadcrumbProps = getBreadcrumbProps(_objectSpread2(_objectSpread2({}, defaultProps), {}, {
    breadcrumbRender: props.breadcrumbRender,
    breadcrumbMap
  }), props);
  var siderMenuDom = renderSiderMenu(_objectSpread2(_objectSpread2({}, defaultProps), {}, {
    menuData,
    onCollapse,
    isMobile,
    collapsed
  }), matchMenuKeys);
  var headerDom = headerRender(_objectSpread2(_objectSpread2({}, defaultProps), {}, {
    children: null,
    hasSiderMenu: !!siderMenuDom,
    menuData,
    isMobile,
    collapsed,
    onCollapse
  }), matchMenuKeys);
  var footerDom = footerRender(_objectSpread2({
    isMobile,
    collapsed
  }, defaultProps));
  var _useContext = useContext12(RouteContext), contextIsChildrenLayout = _useContext.isChildrenLayout;
  var isChildrenLayout = propsIsChildrenLayout !== void 0 ? propsIsChildrenLayout : contextIsChildrenLayout;
  var proLayoutClassName = "".concat(prefixCls, "-layout");
  var _useStyle = useStyle11(proLayoutClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
  var className = (0, import_classnames12.default)(props.className, hashId, "ant-design-pro", proLayoutClassName, (_classNames = {}, _defineProperty(_classNames, "screen-".concat(colSize), colSize), _defineProperty(_classNames, "".concat(proLayoutClassName, "-top-menu"), propsLayout === "top"), _defineProperty(_classNames, "".concat(proLayoutClassName, "-is-children"), isChildrenLayout), _defineProperty(_classNames, "".concat(proLayoutClassName, "-fix-siderbar"), fixSiderbar), _defineProperty(_classNames, "".concat(proLayoutClassName, "-").concat(propsLayout), propsLayout), _classNames));
  var leftSiderWidth = getpaddingInlineStart(!!hasLeftPadding, collapsed, siderWidth);
  var genLayoutStyle = {
    position: "relative"
  };
  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }
  useEffect9(function() {
    var _props$onPageChange;
    (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 ? void 0 : _props$onPageChange.call(props, props.location);
  }, [
    location.pathname,
    (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.search
  ]);
  var _useState3 = useState7(false), _useState4 = _slicedToArray(_useState3, 2), hasFooterToolbar = _useState4[0], setHasFooterToolbar = _useState4[1];
  var _useState5 = useState7(0), _useState6 = _slicedToArray(_useState5, 2), hasPageContainer = _useState6[0], setHasPageContainer = _useState6[1];
  useDocumentTitle(pageTitleInfo, props.title || false);
  var bgImgStyleList = useMemo9(function() {
    if (bgLayoutImgList && bgLayoutImgList.length > 0) {
      return bgLayoutImgList.map(function(item, index) {
        return _jsx22("img", {
          src: item.src,
          style: _objectSpread2({
            position: "absolute"
          }, item)
        }, index);
      });
    }
    return null;
  }, [
    bgLayoutImgList
  ]);
  var _useContext2 = useContext12(ProProvider), token2 = _useContext2.token;
  return wrapSSR(_jsx22(RouteContext.Provider, {
    value: _objectSpread2(_objectSpread2({}, defaultProps), {}, {
      breadcrumb: breadcrumbProps,
      menuData,
      isMobile,
      collapsed,
      hasPageContainer,
      setHasPageContainer,
      isChildrenLayout: true,
      title: pageTitleInfo.pageName,
      hasSiderMenu: !!siderMenuDom,
      hasHeader: !!headerDom,
      siderWidth: leftSiderWidth,
      hasFooter: !!footerDom,
      hasFooterToolbar,
      setHasFooterToolbar,
      pageTitleInfo,
      matchMenus,
      matchMenuKeys,
      currentMenu
    }),
    children: props.pure ? _jsx22(_Fragment6, {
      children
    }) : _jsxs14("div", {
      className,
      children: [
        _jsx22("div", {
          className: "".concat(proLayoutClassName, "-bg-list ").concat(hashId),
          children: bgImgStyleList
        }),
        _jsxs14(layout_default, {
          style: _objectSpread2({
            minHeight: "100%",
            flexDirection: siderMenuDom ? "row" : void 0
          }, style),
          children: [
            siderMenuDom,
            _jsxs14("div", {
              style: genLayoutStyle,
              className: "".concat(proLayoutClassName, "-container ").concat(hashId),
              children: [
                headerDom,
                _jsx22(WrapContent, _objectSpread2(_objectSpread2({
                  hasPageContainer,
                  isChildrenLayout
                }, rest), {}, {
                  hasHeader: !!headerDom,
                  prefixCls: proLayoutClassName,
                  style: contentStyle,
                  children: loading ? _jsx22(PageLoading, {}) : children
                })),
                footerDom,
                hasFooterToolbar && _jsx22("div", {
                  className: "".concat(proLayoutClassName, "-has-footer"),
                  style: {
                    height: 64,
                    marginBlockStart: token2 === null || token2 === void 0 ? void 0 : (_token$layout = token2.layout) === null || _token$layout === void 0 ? void 0 : (_token$layout$pageCon = _token$layout.pageContainer) === null || _token$layout$pageCon === void 0 ? void 0 : _token$layout$pageCon.paddingBlockPageContainerContent
                  }
                })
              ]
            })
          ]
        })
      ]
    })
  }));
};
BaseProLayout.defaultProps = _objectSpread2(_objectSpread2({
  logo: _jsx22(Logo, {})
}, defaultSettings), {}, {
  location: isBrowser() ? window.location : void 0
});
var ProLayout = function ProLayout2(props) {
  var colorPrimary = props.colorPrimary;
  var darkProps = props.navTheme !== void 0 ? {
    dark: props.navTheme === "realDark"
  } : {};
  return _jsx22(config_provider_default, {
    theme: colorPrimary ? {
      token: {
        colorPrimary
      }
    } : void 0,
    children: _jsx22(ProConfigProvider, _objectSpread2(_objectSpread2({
      autoClearCache: true
    }, darkProps), {}, {
      token: props.token,
      children: _jsx22(BaseProLayout, _objectSpread2({}, props))
    }))
  });
};

// node_modules/.pnpm/@ant-design+pro-layout@7.5.1_xkdntvt3sphixchsirkbxe2wm4/node_modules/@ant-design/pro-layout/es/index.js
var es_default4 = ProLayout;

// src/pages/layout.tsx
var InitForm = ({ setIsModalVisible }) => {
  const [form] = form_default.useForm();
  const { loading, request: initSend } = hooks_default(init);
  return /* @__PURE__ */ _jsx23(modal_default, {
    title: "\u7CFB\u7EDF\u521D\u59CB\u5316",
    open: true,
    onOk: async () => {
      form.validateFields().then(async (values) => {
        const data = {
          nacosServerAddr: `${values.IP}:${values.PORT}`
        };
        await initSend(data);
        setIsModalVisible(false);
      });
    },
    onCancel: () => setIsModalVisible(false),
    closable: false,
    keyboard: false,
    maskClosable: false,
    children: /* @__PURE__ */ _jsxs15(form_default, {
      layout: "vertical",
      labelAlign: "right",
      form,
      children: [
        /* @__PURE__ */ _jsx23(form_default.Item, {
          label: "\u8F93\u5165nacos\u5730\u5740",
          name: "IP",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165\u6709\u6548IP!",
              pattern: /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[0-9])\.((1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.){2}(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/
            }
          ],
          children: /* @__PURE__ */ _jsx23(input_default, {
            addonBefore: "IP:"
          })
        }),
        /* @__PURE__ */ _jsx23(form_default.Item, {
          name: "PORT",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165PORT!"
            }
          ],
          children: /* @__PURE__ */ _jsx23(input_number_default, {
            addonBefore: "PORT:",
            min: 0,
            max: 65535,
            style: {
              width: "100%"
            }
          })
        })
      ]
    })
  });
};
function Layout() {
  const location = useLocation();
  if ([
    "/login"
  ].includes(location.pathname)) {
    return /* @__PURE__ */ _jsx23(Outlet, {});
  }
  const [isModalVisible, setIsModalVisible] = useState8(false);
  const { request: getStatus } = hooks_default(queryInitStatus, {
    onSuccess: (data) => {
      setIsModalVisible(!data.status);
    }
  });
  const token2 = localStorage.getItem("token");
  useEffect10(() => {
    getStatus();
  }, []);
  return token2 && /* @__PURE__ */ _jsxs15(es_default4, {
    title: "Qing \u7F51\u5173",
    style: {
      minHeight: "100vh"
    },
    location: {
      pathname: location.pathname
    },
    logo: /* @__PURE__ */ _jsx23("img", {
      src: logo_default,
      alt: "logo"
    }),
    menuDataRender: () => asideMenuConfig,
    menuItemRender: (item, defaultDom) => {
      if (!item.path) {
        return defaultDom;
      }
      return /* @__PURE__ */ _jsx23(Link, {
        to: item.path,
        children: defaultDom
      });
    },
    footerRender: () => /* @__PURE__ */ _jsx23(DefaultFooter, {
      links: [
        {
          key: "qing-gateway",
          title: "qing-gateway",
          href: "https://github.com/conghuhu/qing-gateway"
        }
      ],
      copyright: "by conghuhu@sdu"
    }),
    children: [
      isModalVisible && /* @__PURE__ */ _jsx23(InitForm, {
        setIsModalVisible
      }),
      /* @__PURE__ */ _jsx23("div", {
        style: {
          minHeight: "60vh"
        },
        children: /* @__PURE__ */ _jsx23(Outlet, {})
      })
    ]
  });
}
var layout_default2 = Layout;
export {
  layout_default2 as default
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
