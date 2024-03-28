import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { createPortal } from 'react-dom';

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = React,
    k = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    m = Object.prototype.hasOwnProperty,
    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function q(c, a, g) {
    var b,
      d = {},
      e = null,
      h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return {
      $$typeof: k,
      type: c,
      key: e,
      ref: h,
      props: d,
      _owner: n.current
    };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function () {

      var React$1 = React;

      // ATTENTION
      // When adding new symbols to this file,
      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
      // The Symbol used to tag the ReactElement-like types.
      var REACT_ELEMENT_TYPE = Symbol.for('react.element');
      var REACT_PORTAL_TYPE = Symbol.for('react.portal');
      var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
      var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
      var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
      var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
      var REACT_CONTEXT_TYPE = Symbol.for('react.context');
      var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
      var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
      var REACT_MEMO_TYPE = Symbol.for('react.memo');
      var REACT_LAZY_TYPE = Symbol.for('react.lazy');
      var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning('error', format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame.getStackAddendum();
          if (stack !== '') {
            format += '%s';
            args = args.concat([stack]);
          } // eslint-disable-next-line react-internal/safe-string-coercion

          var argsWithFormat = args.map(function (item) {
            return String(item);
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }

      // -----------------------------------------------------------------------------

      var enableScopeAPI = false; // Experimental Create Event Handle API.
      var enableCacheElement = false;
      var enableTransitionTracing = false; // No known bugs, but needs performance testing

      var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
      // stuff. Intended to enable React core members to more easily debug scheduling
      // issues in DEV builds.

      var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
      }
      function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') {
          return true;
        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (_typeof(type) === 'object' && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
          // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || '';
        return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
      } // Keep in sync with react-reconciler/getComponentNameFromFiber

      function getContextName(type) {
        return type.displayName || 'Context';
      } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

      function getComponentNameFromType(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }
        {
          if (typeof type.tag === 'number') {
            error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
          }
        }
        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }
        if (typeof type === 'string') {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment';
          case REACT_PORTAL_TYPE:
            return 'Portal';
          case REACT_PROFILER_TYPE:
            return 'Profiler';
          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';
          case REACT_SUSPENSE_TYPE:
            return 'Suspense';
          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }
        if (_typeof(type) === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || 'Memo';
            case REACT_LAZY_TYPE:
              {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }

            // eslint-disable-next-line no-fallthrough
          }
        }
        return null;
      }
      var assign = Object.assign;

      // Helpers to patch console.logs to avoid logging during side-effect free
      // replaying on render function. This currently only patches the object
      // lazily which won't cover if the log function was extracted eagerly.
      // We could also eagerly patch the method.
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {}
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
            /* eslint-enable react-internal/no-production-logging */
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
            /* eslint-enable react-internal/no-production-logging */
          }
          if (disabledDepth < 0) {
            error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === undefined) {
            // Extract the VM specific prefix used by each line.
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || '';
            }
          } // We use the prefix to ensure our stacks line up with native stack frames.

          return '\n' + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) {
          return '';
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== undefined) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
          // for warnings.

          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          // This should throw.
          if (construct) {
            // Something should be setting the props in the constructor.
            var Fake = function Fake() {
              throw Error();
            }; // $FlowFixMe

            Object.defineProperty(Fake.prototype, 'props', {
              set: function set() {
                // We use a throwing setter instead of frozen or non-writable props
                // because that won't throw in a non-strict mode function.
                throw Error();
              }
            });
            if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect.construct) {
              // We construct a different control for this case to include any extra
              // frames added by the construct call.
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          // This is inlined manually because closure doesn't do it for us.
          if (sample && control && typeof sample.stack === 'string') {
            // This extracts the first frame from the sample that isn't also in the control.
            // Skipping one frame that we assume is the frame that calls the two.
            var sampleLines = sample.stack.split('\n');
            var controlLines = control.stack.split('\n');
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              // We expect at least one stack frame to be shared.
              // Typically this will be the root most one. However, stack frames may be
              // cut off due to maximum stack limits. In this case, one maybe cut off
              // earlier than the other. We assume that the sample is longer or the same
              // and there for cut off earlier. So we should find the root most frame in
              // the sample somewhere in the control.
              c--;
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              // Next we find the first one that isn't the same which should be the
              // frame that called our sample function and the control.
              if (sampleLines[s] !== controlLines[c]) {
                // In V8, the first line is describing the message but other VMs don't.
                // If we're about to return the first line, and the control is also on the same
                // line, that's a pretty good indicator that our sample threw at same line as
                // the control. I.e. before we entered the sample frame. So we ignore this result.
                // This can happen if you passed a class to function component, or non-function.
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--; // We may still have similar intermediate frames from the construct call.
                    // The next one that isn't the same should be our match though.

                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                      var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                      // but we have a user-provided "displayName"
                      // splice it in to make the stack more readable.

                      if (fn.displayName && _frame.includes('<anonymous>')) {
                        _frame = _frame.replace('<anonymous>', fn.displayName);
                      }
                      {
                        if (typeof fn === 'function') {
                          componentFrameCache.set(fn, _frame);
                        }
                      } // Return the line we found.

                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.

        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        {
          if (typeof fn === 'function') {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return '';
        }
        if (typeof type === 'function') {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === 'string') {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame('Suspense');
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame('SuspenseList');
        }
        if (_typeof(type) === 'object') {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              // Memo may contain any component type so we recursively resolve it.
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
              {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  // Lazy may contain any component type so we recursively resolve it.
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
              }
          }
        }
        return '';
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          // $FlowFixMe This is okay but Flow doesn't know it.
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.

              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                  // eslint-disable-next-line react-internal/prod-error-codes
                  var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                  err.name = 'Invariant Violation';
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _typeof(error$1));
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

      function isArray(a) {
        return isArrayImpl(a);
      }

      /*
       * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
       * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
       *
       * The functions in this module will throw an easier-to-understand,
       * easier-to-debug exception with a clear errors message message explaining the
       * problem. (Instead of a confusing exception thrown inside the implementation
       * of the `value` object).
       */
      // $FlowFixMe only called in DEV, so void return is not possible.
      function typeName(value) {
        {
          // toStringTag is needed for namespaced types like Temporal.Instant
          var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
          return type;
        }
      } // $FlowFixMe only called in DEV, so void return is not possible.

      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return '' + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function warnAboutAccessingKey() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function warnAboutAccessingRef() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */

      var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          }); // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      /**
       * https://github.com/reactjs/rfcs/pull/107
       * @param {*} type
       * @param {object} props
       * @param {string} key
       */

      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName; // Reserved names are extracted

          var props = {};
          var key = null;
          var ref = null; // Currently, key can be spread in as a prop. This causes a potential
          // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
          // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
          // but as an intermediary step, we will use jsxDEV for everything except
          // <div {...props} key="Hi" />, because we aren't currently able to tell if
          // key is explicitly declared to be undefined or not.

          if (maybeKey !== undefined) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = '' + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = '' + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          } // Remaining properties are added to a new props object

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          } // Resolve default props

          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        {
          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }
          return '';
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
          }
          return '';
        }
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */

      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */

      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.

          var childOwner = '';
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            // Give the component that originally created this child.
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */

      function validateChildKeys(node, parentType) {
        {
          if (_typeof(node) !== 'object') {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') {
              // Entry iterators used to provide implicit keys,
              // but now we print a separate warning for them later.
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */

      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }
          var propTypes;
          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
          // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

            var _name = getComponentNameFromType(type);
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
          }
          if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
            error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */

      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.

          if (!validType) {
            var info = '';
            if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = 'null';
            } else if (isArray(type)) {
              typeString = 'array';
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = _typeof(type);
            }
            error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }
          var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.

          if (element == null) {
            return element;
          } // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)

          if (validType) {
            var children = props.children;
            if (children !== undefined) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      } // These two functions exist to still get child warnings in dev
      // even with the prod transform. This means that jsxDEV is purely
      // opt-in behavior for better messages but that we won't stop
      // giving you warnings if you use production apis.

      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
      // for now we can ship identical prod functions

      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}
var jsxRuntimeExports = jsxRuntime.exports;

function prefix(name) {
    return (str)=>'Practx-' + name + str;
}
function combineClass(...args) {
    const output = [];
    for(let i = 0; i < args.length; i++){
        if (args[i] === null || args[i] === undefined) continue;
        if (typeof args[i] === 'string') {
            output.push(args[i]);
        } else if (typeof args[i] === 'object') {
            const o = args[i];
            const key = Object.keys(o)[0];
            if (o[key]) {
                output.push(key);
            }
        } else if (typeof args[i] === 'number' || typeof args[i] === 'boolean') {
            output.push(String(args[i]));
        }
    }
    return output.join(' ');
}

const THEME$a = {
    primary: 'var(--primary, #ffb74d)',
    onPrimary: 'var(--on-primary, #1c2025)'
};
const px$b = prefix('Badge');

const BadgeBox = styled.span.attrs({
    className: px$b('Box')
})`
  position: relative;
  display: inline-block;
  width: fit-content;
  height: fit-content;
`;
const BadgeRoot = styled.span.attrs({
    className: px$b('Root')
})`
  position: absolute;
  flex-flow: row nowrap;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${({ theme })=>{
    var _a;
    return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$a.primary;
}};
  color: ${({ theme })=>{
    var _a;
    return (_a = theme.onPrimary) !== null && _a !== void 0 ? _a : THEME$a.onPrimary;
}};

  // show
  display: ${({ $show })=>$show ? 'flex' : 'none'};

  // variant
  ${(props)=>{
    if (props.$variant === 'standard') return css`
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.75rem;
      `;
    else return css`
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.25rem;
      `;
}}

  // vertical | horizontal
  transform: ${({ $vertical, $horizontal })=>{
    if ($vertical === 'top') return $horizontal === 'right' ? 'translate(50%, -50%)' : 'translate(-50%, -50%)';
    else return $horizontal === 'right' ? 'translate(50%, 50%)' : 'translate(-50%, 50%)';
}};
  top: ${({ $vertical })=>$vertical === 'top' ? '0' : 'auto'};
  bottom: ${({ $vertical })=>$vertical === 'bottom' ? '0' : 'auto'};
  right: ${({ $horizontal })=>$horizontal === 'right' ? '0' : 'auto'};
  left: ${({ $horizontal })=>$horizontal === 'left' ? '0' : 'auto'};
`;
BadgeRoot.defaultProps = {
    $variant: 'standard',
    $vertical: 'top',
    $show: true,
    $horizontal: 'right',
    theme: THEME$a
};

const Badge = /*#__PURE__*/ React.forwardRef(function Badge(props, forwardRef) {
    const { children, className, content, horizontal = 'right', max = 99, show = true, variant = 'standard', vertical = 'top' } = props, others = __rest(props, [
        "children",
        "className",
        "content",
        "horizontal",
        "max",
        "show",
        "variant",
        "vertical"
    ]);
    return jsxRuntimeExports.jsxs(BadgeBox, {
        children: [
            children,
            jsxRuntimeExports.jsx(BadgeRoot, Object.assign({
                "$variant": variant,
                "$show": show,
                "$vertical": vertical,
                "$horizontal": horizontal,
                className: className,
                ref: forwardRef
            }, others, {
                children: variant === 'standard' ? typeof content === 'number' && content > max ? `${max}+` : content !== null && content !== void 0 ? content : '' : null
            }))
        ]
    });
});
const MemoizedBadge = /*#__PURE__*/ React.memo(Badge);
MemoizedBadge.Box = BadgeBox;
MemoizedBadge.Root = BadgeRoot;

const THEME$9 = {
    primary: 'var(--primary, #ffb74d)',
    onPrimary: 'var(--on-primary, #1c2025)',
    primaryHover: 'var(--primary-hover, #b28035)',
    disabled: {
        light: 'var(--disabled, #0000001E)',
        dark: 'var(--disabled, #FFFFFF1E)'
    },
    onDisabled: {
        light: 'var(--on-disabled, #00000042)',
        dark: 'var(--on-disabled, #FFFFFF4C)'
    }
};
const px$a = prefix('Button');

const ButtonRoot = styled.button.attrs({
    className: px$a('Root')
})`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  &:hover {
    border-color: transparent;
  }
  &:focus {
    outline: none;
  }

  // fullWidth
  width: ${({ $fullWidth })=>$fullWidth === true ? '100%' : 'auto'};

  // variant
  ${({ $variant })=>{
    switch($variant){
        case 'fill':
            return css`
          border-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$9.primary;
            }};
          background-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$9.primary;
            }};
          color: ${({ theme })=>{
                var _a;
                return (_a = theme.onPrimary) !== null && _a !== void 0 ? _a : THEME$9.onPrimary;
            }};
          &:not(:disabled):hover {
            border-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primaryHover) !== null && _a !== void 0 ? _a : THEME$9.primaryHover;
            }};
            background-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primaryHover) !== null && _a !== void 0 ? _a : THEME$9.primaryHover;
            }};
          }
        `;
        case 'line':
            return css`
          border-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$9.primary;
            }};
          background-color: transparent;
          color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$9.primary;
            }};
          &:not(:disabled):hover {
            border-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primaryHover) !== null && _a !== void 0 ? _a : THEME$9.primaryHover;
            }};
            color: ${({ theme })=>{
                var _a;
                return (_a = theme.primaryHover) !== null && _a !== void 0 ? _a : THEME$9.primaryHover;
            }};
          }
        `;
        case 'text':
        default:
            return css`
          border-color: transparent;
          color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$9.primary;
            }};
          background-color: transparent;
          &:not(:disabled):hover {
            color: ${({ theme })=>{
                var _a;
                return (_a = theme.primaryHover) !== null && _a !== void 0 ? _a : THEME$9.primaryHover;
            }};
          }
        `;
    }
}}

  // disabled
  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      ${({ $variant, theme })=>{
    var _a, _b;
    return $variant !== 'text' && css`
          border-color: transparent;
          background-color: ${(_a = theme.disabled.light) !== null && _a !== void 0 ? _a : (_b = THEME$9.disabled) === null || _b === void 0 ? void 0 : _b.light};
        `;
}}
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.onDisabled.light) !== null && _a !== void 0 ? _a : (_b = THEME$9.onDisabled) === null || _b === void 0 ? void 0 : _b.light;
}};
    }

    @media (prefers-color-scheme: dark) {
      ${({ $variant, theme })=>{
    var _a, _b;
    return $variant !== 'text' && css`
          border-color: transparent;
          background-color: ${(_a = theme.disabled.dark) !== null && _a !== void 0 ? _a : (_b = THEME$9.disabled) === null || _b === void 0 ? void 0 : _b.dark};
        `;
}}
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.onDisabled.dark) !== null && _a !== void 0 ? _a : (_b = THEME$9.onDisabled) === null || _b === void 0 ? void 0 : _b.dark;
}};
    }
  }
`;
ButtonRoot.defaultProps = {
    $variant: 'fill',
    $fullWidth: false,
    disabled: false,
    theme: THEME$9
};

const Button = /*#__PURE__*/ React.forwardRef(function Button(props, forwardRef) {
    const { children, className, disabled = false, fullWidth = false, variant = 'fill' } = props, others = __rest(props, [
        "children",
        "className",
        "disabled",
        "fullWidth",
        "variant"
    ]);
    return jsxRuntimeExports.jsx(ButtonRoot, Object.assign({
        "$variant": variant,
        "$fullWidth": fullWidth,
        disabled: disabled,
        className: className,
        ref: forwardRef
    }, others, {
        children: children
    }));
});
const MemoizedButton = /*#__PURE__*/ React.memo(Button);
MemoizedButton.Root = ButtonRoot;

const THEME$8 = {
    primary: 'var(--primary, #ffb74d)',
    default: {
        light: 'var(--default, #00000099)',
        dark: 'var(--default, #FFFFFFB2)'
    },
    disabled: {
        light: 'var(--disabled, #00000042)',
        dark: 'var(--disabled, #FFFFFF4C)'
    }
};
const px$9 = prefix('Check');

// noinspection CssUnknownProperty
const CheckBox = styled.label.attrs({
    className: px$9('Box')
})`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`;
const CheckRoot = styled.input.attrs({
    className: px$9('Root')
})`
  display: none;
`;
const CheckMark = styled.div.attrs({
    className: px$9('Mark')
})`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  user-select: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({ theme })=>{
    var _a;
    return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$8.primary;
}};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.default.light) !== null && _a !== void 0 ? _a : (_b = THEME$8.default) === null || _b === void 0 ? void 0 : _b.light;
}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.default.dark) !== null && _a !== void 0 ? _a : (_b = THEME$8.default) === null || _b === void 0 ? void 0 : _b.dark;
}};
    }
  }
  input:disabled + & {
    @media (prefers-color-scheme: light) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.disabled.light) !== null && _a !== void 0 ? _a : (_b = THEME$8.disabled) === null || _b === void 0 ? void 0 : _b.light;
}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.disabled.dark) !== null && _a !== void 0 ? _a : (_b = THEME$8.disabled) === null || _b === void 0 ? void 0 : _b.dark;
}};
    }
  }

  input:not(:checked) + & path {
    d: path(
      'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
    );
  }
  input:checked + & path {
    d: path(
      'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
    );
  }
  input[multiple]:checked + & path {
    d: path(
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z'
    );
  }
`;
CheckRoot.defaultProps = {
    type: 'checkbox'
};
CheckMark.defaultProps = {
    theme: THEME$8
};

const Check = /*#__PURE__*/ React.forwardRef(function Checkbox(props, forwardRef) {
    const { children, className, theme, style } = props, others = __rest(props, [
        "children",
        "className",
        "theme",
        "style"
    ]);
    return jsxRuntimeExports.jsxs(CheckBox, {
        className: className,
        style: style,
        ref: forwardRef,
        children: [
            jsxRuntimeExports.jsx(CheckRoot, Object.assign({
                type: 'checkbox'
            }, others)),
            jsxRuntimeExports.jsx(CheckMark, {
                theme: theme,
                children: jsxRuntimeExports.jsx("svg", {
                    focusable: 'false',
                    "aria-hidden": 'true',
                    viewBox: '0 0 24 24',
                    children: jsxRuntimeExports.jsx("path", {
                        fill: 'currentColor'
                    })
                })
            }),
            children
        ]
    });
});
const MemoizedCheck = /*#__PURE__*/ React.memo(Check);
MemoizedCheck.Box = CheckBox;
MemoizedCheck.Root = CheckRoot;
MemoizedCheck.Mark = CheckMark;

const THEME$7 = {
    primary: 'var(--primary, #ffb74d)',
    onPrimary: 'var(--on-primary, #1c2025)'
};
const px$8 = prefix('Chip');

const ChipRoot = styled.span.attrs({
    className: px$8('Root')
})`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  width: fit-content;
  border: 0.0625rem solid transparent;
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 0.5rem 1rem;
  border-radius: 3rem;

  ${({ $variant })=>{
    switch($variant){
        case 'fill':
            return css`
          border-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$7.primary;
            }};
          background-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$7.primary;
            }};
          color: ${({ theme })=>{
                var _a;
                return (_a = theme.onPrimary) !== null && _a !== void 0 ? _a : THEME$7.onPrimary;
            }};
        `;
        case 'line':
            return css`
          border-color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$7.primary;
            }};
          background-color: transparent;
          color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$7.primary;
            }};
        `;
        case 'text':
        default:
            return css`
          color: ${({ theme })=>{
                var _a;
                return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$7.primary;
            }};
          border-color: transparent;
          background-color: transparent;
        `;
    }
}}
`;
ChipRoot.defaultProps = {
    $variant: 'fill',
    theme: THEME$7
};

const Chip = /*#__PURE__*/ React.forwardRef(function Chip(props, forwardRef) {
    const { children, className, variant = 'fill' } = props, others = __rest(props, [
        "children",
        "className",
        "variant"
    ]);
    return jsxRuntimeExports.jsx(ChipRoot, Object.assign({
        "$variant": variant,
        className: className,
        ref: forwardRef
    }, others, {
        children: children
    }));
});
const MemoizedChip = /*#__PURE__*/ React.memo(Chip);
MemoizedChip.Root = ChipRoot;

const THEME$6 = {
    primary: 'var(--primary, #ffb74d)',
    border: {
        light: 'var(--border, #0000003A)',
        dark: 'var(--border, #ffffff3a)'
    },
    invalid: {
        light: 'var(--invalid, #d32f2f)',
        dark: 'var(--invalid, #f44336)'
    },
    placeholder: 'var(--placeholder, #6B7A90)',
    disabled: {
        light: 'var(--disabled, #00000042)',
        dark: 'var(--disabled, #FFFFFF4C)'
    }
};
const px$7 = prefix('Input');

const InputBox = styled.label.attrs({
    className: px$7('Box')
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;

  border: 0.0625rem solid transparent;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;

  &:has(:focus) {
    border-color: ${({ theme })=>{
    var _a;
    return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$6.primary;
}};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.border.light) !== null && _a !== void 0 ? _a : (_b = THEME$6.border) === null || _b === void 0 ? void 0 : _b.light;
}};
      &:has(:invalid) {
        border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.invalid.light) !== null && _a !== void 0 ? _a : (_b = THEME$6.invalid) === null || _b === void 0 ? void 0 : _b.light;
}};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.border.dark) !== null && _a !== void 0 ? _a : (_b = THEME$6.invalid) === null || _b === void 0 ? void 0 : _b.dark;
}};
      &:has(:invalid) {
        border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.invalid.dark) !== null && _a !== void 0 ? _a : (_b = THEME$6.invalid) === null || _b === void 0 ? void 0 : _b.dark;
}};
      }
    }
  }
`;
const InputRoot = styled.input.attrs({
    className: px$7('Root')
})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
  border: none;
  padding: 0;

  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.disabled.light) !== null && _a !== void 0 ? _a : (_b = THEME$6.disabled) === null || _b === void 0 ? void 0 : _b.light;
}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.disabled.dark) !== null && _a !== void 0 ? _a : (_b = THEME$6.disabled) === null || _b === void 0 ? void 0 : _b.dark;
}};
    }
  }
  &::placeholder {
    color: ${({ theme })=>theme.placeholder};
  }

  &:focus {
    border: none;
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-clear-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
InputBox.defaultProps = {
    theme: THEME$6
};
InputRoot.defaultProps = {
    type: 'text',
    theme: THEME$6
};

const Input = /*#__PURE__*/ React.forwardRef(function Input(props, forwardRef) {
    const { className, type = 'text', theme } = props, others = __rest(props, [
        "className",
        "type",
        "theme"
    ]);
    return jsxRuntimeExports.jsx(InputBox, {
        theme: theme,
        children: jsxRuntimeExports.jsx(InputRoot, Object.assign({
            className: className,
            type: type,
            theme: theme,
            ref: forwardRef
        }, others))
    });
});
const MemoizedInput = /*#__PURE__*/ React.memo(Input);
MemoizedInput.Box = InputBox;
MemoizedInput.Root = InputRoot;

const THEME$5 = {
    backdrop: 'var(--backdrop, #0000007F)',
    surface: 'var(--surface, #fff)',
    shadow: 'var(--shadow, #00000099)'
};
const px$6 = prefix('Modal');

const ModalBackdrop = styled.div.attrs({
    className: px$6('Backdrop')
})`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme })=>{
    var _a;
    return (_a = theme.backdrop) !== null && _a !== void 0 ? _a : THEME$5.backdrop;
}};
  z-index: 1000;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;
const ModalRoot = styled.div.attrs({
    className: px$6('Root')
})`
  min-width: 20rem;
  min-height: 16rem;
  background-color: ${({ theme })=>{
    var _a;
    return (_a = theme.surface) !== null && _a !== void 0 ? _a : THEME$5.surface;
}};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 1rem 0 ${({ theme })=>{
    var _a;
    return (_a = theme.shadow) !== null && _a !== void 0 ? _a : THEME$5.shadow;
}};
`;
ModalBackdrop.defaultProps = {
    theme: THEME$5
};
ModalRoot.defaultProps = {
    theme: THEME$5
};

function useScrollBlock(trigger, style) {
    useEffect(()=>{
        var _a;
        const idx = (_a = document.body.getAttribute('data-index')) !== null && _a !== void 0 ? _a : '0';
        const index = Number(idx);
        const sbWidth = window.innerWidth - document.documentElement.clientWidth;
        if (trigger) {
            if (index === 0) {
                document.body.setAttribute('style', style !== null && style !== void 0 ? style : `overflow: hidden; padding-right: ${sbWidth}px`);
                document.body.setAttribute('data-index', '1');
            } else {
                document.body.setAttribute('data-index', (index + 1).toString());
            }
        } else {
            if (index <= 1) {
                document.body.removeAttribute('style');
                document.body.removeAttribute('data-index');
            } else {
                document.body.setAttribute('data-index', (index - 1).toString());
            }
        }
    }, [
        trigger,
        style
    ]);
}

const Modal = /*#__PURE__*/ React.forwardRef(function Modal(props, forwardRef) {
    const { open, onClickAway, className, children, theme } = props, others = __rest(props, [
        "open",
        "onClickAway",
        "className",
        "children",
        "theme"
    ]);
    useScrollBlock(open);
    const backdropRef = React.useRef(null);
    const _onClickAway = React.useCallback((e)=>{
        if (e.target === backdropRef.current) {
            onClickAway && onClickAway();
        }
    }, [
        onClickAway
    ]);
    return open ? /*#__PURE__*/ createPortal(jsxRuntimeExports.jsx(ModalBackdrop, {
        ref: backdropRef,
        onClick: _onClickAway,
        theme: theme,
        children: jsxRuntimeExports.jsx(ModalRoot, Object.assign({
            ref: forwardRef,
            className: className,
            theme: theme
        }, others, {
            children: children
        }))
    }), document.body) : null;
});
const MemoizedModal = /*#__PURE__*/ React.memo(Modal);
MemoizedModal.Backdrop = ModalBackdrop;
MemoizedModal.Root = ModalRoot;
MemoizedModal.Hook = useScrollBlock;

const THEME$4 = {
    primary: 'var(--primary, #ffb74d)',
    default: {
        light: 'var(--default, #00000099)',
        dark: 'var(--default, #ffffffb2)'
    },
    disabled: {
        light: 'var(--disabled, #00000042)',
        dark: 'var(--disabled, #ffffff4c)'
    }
};
const px$5 = prefix('Radio');

const RadioBox = styled.label.attrs({
    className: px$5('Box')
})`
  display: inline-flex;
  flex-flow: row nowrap;
  gap: 0.25rem;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`;
const RadioRoot = styled.input.attrs({
    className: px$5('Root')
})`
  display: none;
`;
const RadioMark = styled.div.attrs({
    className: px$5('Mark')
})`
  position: relative;
  display: inline-flex;
  user-select: none;
  width: 1.5rem;
  height: 1.5rem;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({ theme })=>{
    var _a;
    return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME$4.primary;
}};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.default) !== null && _a !== void 0 ? _a : (_b = THEME$4.default) === null || _b === void 0 ? void 0 : _b.light;
}};
      input:disabled + & {
        color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.disabled) !== null && _a !== void 0 ? _a : (_b = THEME$4.disabled) === null || _b === void 0 ? void 0 : _b.light;
}};
      }
    }
    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.default) !== null && _a !== void 0 ? _a : (_b = THEME$4.default) === null || _b === void 0 ? void 0 : _b.dark;
}};
      input:disabled + & {
        color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.disabled) !== null && _a !== void 0 ? _a : (_b = THEME$4.disabled) === null || _b === void 0 ? void 0 : _b.dark;
}};
      }
    }
  }

  & > svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
  }
  & > svg:first-of-type {
    transform: scale(1);
  }
  & > svg:last-of-type {
    transform: scale(0);
    position: absolute;
    left: 0;
    transition: transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms;
  }
  input:not(:disabled):checked + & > svg:last-of-type {
    transform: scale(1);
  }
`;
RadioRoot.defaultProps = {
    type: 'radio'
};
RadioMark.defaultProps = {
    theme: {
        primary: 'var(--primary, #ffb74d)',
        default: {
            light: 'var(--default, #00000099)',
            dark: 'var(--default, #ffffffb2)'
        },
        disabled: {
            light: 'var(--disabled, #00000042)',
            dark: 'var(--disabled, #ffffff4c)'
        }
    }
};

const Radio = /*#__PURE__*/ React.forwardRef(function Radio(props, forwardRef) {
    const { children, className, theme, style } = props, inputProps = __rest(props, [
        "children",
        "className",
        "theme",
        "style"
    ]);
    return jsxRuntimeExports.jsxs(RadioBox, {
        className: className,
        style: style,
        ref: forwardRef,
        children: [
            jsxRuntimeExports.jsx(RadioRoot, Object.assign({
                type: 'radio'
            }, inputProps)),
            jsxRuntimeExports.jsxs(RadioMark, {
                theme: theme,
                children: [
                    jsxRuntimeExports.jsx("svg", {
                        focusable: 'false',
                        "aria-hidden": 'true',
                        viewBox: '0 0 24 24',
                        children: jsxRuntimeExports.jsx("path", {
                            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
                            fill: 'currentColor'
                        })
                    }),
                    jsxRuntimeExports.jsx("svg", {
                        focusable: 'false',
                        "aria-hidden": 'true',
                        viewBox: '0 0 24 24',
                        children: jsxRuntimeExports.jsx("path", {
                            d: 'M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z',
                            fill: 'currentColor'
                        })
                    })
                ]
            }),
            children
        ]
    });
});
const MemoizedRadio = /*#__PURE__*/ React.memo(Radio);
MemoizedRadio.Box = RadioBox;
MemoizedRadio.Root = RadioRoot;
MemoizedRadio.Mark = RadioMark;

const px$4 = prefix('Scrollview');

const ScrollviewRoot = styled.div.attrs({
    className: px$4('Root')
})`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  box-sizing: border-box;
`;

const ScrollView = /*#__PURE__*/ React.forwardRef(function ScrollView(props, forwardRef) {
    const { children, className } = props, others = __rest(props, [
        "children",
        "className"
    ]);
    return jsxRuntimeExports.jsx(ScrollviewRoot, Object.assign({
        className: className,
        ref: forwardRef
    }, others, {
        children: children
    }));
});
const MemoizedScrollView = /*#__PURE__*/ React.memo(ScrollView);
MemoizedScrollView.Root = ScrollviewRoot;

const THEME$3 = {
    placeholder: 'var(--placeholder, #6B7A90)',
    surface: {
        light: 'var(--surface, #f1f1f2)',
        dark: 'var(--surface, #242424)'
    },
    border: {
        light: 'var(--border, #0000003A)',
        dark: 'var(--border, #FFFFFF3A)'
    }
};
const px$3 = prefix('Select');

const SelectForm = styled.div.attrs({
    className: px$3('Form')
})`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`;
const SelectField = styled.div.attrs({
    className: px$3('Field')
})`
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid transparent;
  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.surface.light) !== null && _a !== void 0 ? _a : (_b = THEME$3.surface) === null || _b === void 0 ? void 0 : _b.light;
}};
      border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.border.light) !== null && _a !== void 0 ? _a : (_b = THEME$3.border) === null || _b === void 0 ? void 0 : _b.light;
}};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.surface.dark) !== null && _a !== void 0 ? _a : (_b = THEME$3.surface) === null || _b === void 0 ? void 0 : _b.dark;
}};
      border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.border.dark) !== null && _a !== void 0 ? _a : (_b = THEME$3.border) === null || _b === void 0 ? void 0 : _b.dark;
}};
    }
  }
`;
const SelectPlaceholder = styled.span.attrs({
    className: px$3('Placeholder')
})`
  color: ${({ theme })=>{
    var _a;
    return (_a = theme.placeholder) !== null && _a !== void 0 ? _a : THEME$3.placeholder;
}};
`;
const SelectContoller = styled.input`
  display: none;
`;
const SelectBox = styled.ul.attrs({
    className: px$3('Box')
})`
  position: absolute;
  top: ${({ $top })=>$top !== null && $top !== void 0 ? $top : 'calc(100% + 0.5rem)'};
  left: 0;
  right: 0;
  z-index: 1;
  display: ${({ $open })=>!$open ? 'none' : 'flex'};
  flex-flow: column nowrap;
  border-radius: 0.25rem;
  border: 0.0625rem solid transparent;
  padding: 0;
  margin: 0;

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.surface.light) !== null && _a !== void 0 ? _a : (_b = THEME$3.surface) === null || _b === void 0 ? void 0 : _b.light;
}};
      border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.border.light) !== null && _a !== void 0 ? _a : (_b = THEME$3.border) === null || _b === void 0 ? void 0 : _b.light;
}};
    }
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.surface.dark) !== null && _a !== void 0 ? _a : (_b = THEME$3.surface) === null || _b === void 0 ? void 0 : _b.dark;
}};
      border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.border.dark) !== null && _a !== void 0 ? _a : (_b = THEME$3.border) === null || _b === void 0 ? void 0 : _b.dark;
}};
    }
  }
`;
const SelectItem = styled.li.attrs({
    className: px$3('Item')
})`
  list-style: none;
`;
SelectField.defaultProps = {
    theme: THEME$3
};
SelectPlaceholder.defaultProps = {
    theme: THEME$3
};
SelectBox.defaultProps = {
    theme: THEME$3
};

function useClickAway(setOpen, forwardRef) {
    const formRef = React.useRef(null);
    React.useImperativeHandle(forwardRef, ()=>formRef.current);
    React.useEffect(()=>{
        const clickAway = (event)=>{
            var _a;
            if (!((_a = formRef === null || formRef === void 0 ? void 0 : formRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setOpen(false);
            }
        };
        document.addEventListener('click', clickAway);
        return ()=>{
            document.removeEventListener('click', clickAway);
        };
    }, []);
    return formRef;
}
// const formRef = React.useRef<HTMLDivElement>(null);
// React.useImperativeHandle(forwardRef, () => formRef.current!);
// React.useEffect(() => {
//   const clickAway = (event: MouseEvent) => {
//     if (!formRef?.current?.contains(event.target as HTMLElement)) {
//       setOpen(false);
//     }
//   };
//
//   document.addEventListener('click', clickAway);
//   return () => {
//     document.removeEventListener('click', clickAway);
//   };
// }, []);
function useSelectValue(defaultValue, multiple, setOpen, onChange) {
    const [inputValue, setInputValue] = React.useState(defaultValue);
    const onClickItem = React.useCallback((item)=>{
        var _a;
        if (!multiple) {
            setInputValue(((_a = item.value) !== null && _a !== void 0 ? _a : '').toString());
            setOpen(false);
        } else {
            setInputValue((prev)=>{
                var _a, _b;
                const values = prev.length > 0 ? prev.split(',') : [];
                const inputs = ((_a = item.value) !== null && _a !== void 0 ? _a : '').toString();
                const fIndex = values.findIndex((v)=>v === inputs);
                if (fIndex > -1) {
                    values.splice(fIndex, 1);
                } else {
                    values.push(((_b = item.value) !== null && _b !== void 0 ? _b : '').toString());
                }
                return values.join(',');
            });
        }
    }, [
        inputValue
    ]);
    React.useEffect(()=>{
        onChange && onChange(inputValue);
    }, [
        inputValue
    ]);
    return {
        inputValue,
        onClickItem
    };
} // const [inputValue, setInputValue] = React.useState(defaultValue ?? '');
 // const _onClickItem = React.useCallback(
 //   (item: SelectItemType) => {
 //     if (!multiple) {
 //       setInputValue((item.value ?? '').toString());
 //       setOpen(false);
 //     } else {
 //       setInputValue((prev) => {
 //         const values = prev.length > 0 ? prev.split(',') : [];
 //         const inputs = (item.value ?? '').toString();
 //
 //         const fIndex = values.findIndex((v) => v === inputs);
 //         if (fIndex > -1) {
 //           values.splice(fIndex, 1);
 //         } else {
 //           values.push((item.value ?? '').toString());
 //         }
 //
 //         return values.join(',');
 //       });
 //     }
 //   },
 //   [inputValue],
 // );
 //
 // React.useEffect(() => {
 //   onChange && onChange(inputValue);
 // }, [inputValue]);

const Select = /*#__PURE__*/ React.forwardRef(function Select(props, forwardRef) {
    const { // open,
    items, multiple, placeholder, theme, top, children, className, onChange, defaultValue } = props, others = __rest(props, [
        "items",
        "multiple",
        "placeholder",
        "theme",
        "top",
        "children",
        "className",
        "onChange",
        "defaultValue"
    ]);
    const [open, setOpen] = React.useState(false);
    const onFieldClick = React.useCallback(()=>{
        setOpen(!open);
    }, [
        open
    ]);
    const formRef = useClickAway(setOpen, forwardRef);
    const { inputValue, onClickItem } = useSelectValue(defaultValue !== null && defaultValue !== void 0 ? defaultValue : '', multiple !== null && multiple !== void 0 ? multiple : false, setOpen, onChange);
    return jsxRuntimeExports.jsxs(SelectForm, Object.assign({
        ref: formRef,
        className: className
    }, others, {
        children: [
            jsxRuntimeExports.jsxs(SelectField, {
                theme: theme,
                onClick: onFieldClick,
                children: [
                    inputValue.length > 0 ? children : jsxRuntimeExports.jsx(SelectPlaceholder, {
                        theme: theme,
                        children: placeholder !== null && placeholder !== void 0 ? placeholder : 'Please select value.'
                    }),
                    jsxRuntimeExports.jsx(SelectContoller, {
                        readOnly: true,
                        value: inputValue
                    })
                ]
            }),
            jsxRuntimeExports.jsx(SelectBox, {
                theme: theme,
                "$top": top,
                "$open": open,
                children: items === null || items === void 0 ? void 0 : items.map((v, i)=>{
                    var _a;
                    return jsxRuntimeExports.jsx(SelectItem, {
                        onClick: ()=>{
                            onClickItem(v);
                        },
                        children: (_a = v.label) !== null && _a !== void 0 ? _a : v.value
                    }, `${v.value}_${i}`);
                })
            })
        ]
    }));
});
const MemoizedSelect = /*#__PURE__*/ React.memo(Select);
MemoizedSelect.Form = SelectForm;
MemoizedSelect.Field = SelectField;
MemoizedSelect.Placeholder = SelectPlaceholder;
MemoizedSelect.Box = SelectBox;
MemoizedSelect.Item = SelectItem;

const THEME$2 = {
    surface: {
        light: 'var(--surface, rgba(0, 0, 0, 0.11))',
        dark: 'var(--surface, rgba(255, 255, 255, 0.13))'
    }
};
const px$2 = prefix('Skeleton');

const SkeletonRoot = styled.span.attrs({
    className: px$2('Root')
})`
  display: block;
  min-width: 1rem;
  min-height: 1rem;
  animation: animation-skeleton 2s ease-in-out 0.5s infinite;

  ${({ $varient })=>{
    switch($varient){
        case 'text':
            return css`
          border-radius: 0.25rem;
          transform-origin: 0 55%;
          transform: scale(1, 0.6);
        `;
        case 'circle':
            return css`
          border-radius: 50%;
        `;
        case 'paragraph':
        default:
            return css`
          border-radius: 0.25rem;
        `;
    }
}}

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme })=>{
    var _a, _b, _c;
    return (_b = (_a = theme.surface) === null || _a === void 0 ? void 0 : _a.light) !== null && _b !== void 0 ? _b : (_c = THEME$2.surface) === null || _c === void 0 ? void 0 : _c.light;
}};
    }

    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme })=>{
    var _a, _b, _c;
    return (_b = (_a = theme.surface) === null || _a === void 0 ? void 0 : _a.dark) !== null && _b !== void 0 ? _b : (_c = THEME$2.surface) === null || _c === void 0 ? void 0 : _c.dark;
}};
    }
  }

  &:empty::before {
    display: inline-block;
    content: ' ';
    min-height: 1rem;
  }

  @keyframes animation-skeleton {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
SkeletonRoot.defaultProps = {
    theme: THEME$2
};

const Skeleton = /*#__PURE__*/ React.forwardRef(function Skeleton(props, forwardRef) {
    const { varient, className } = props, other = __rest(props, [
        "varient",
        "className"
    ]);
    return jsxRuntimeExports.jsx(SkeletonRoot, Object.assign({
        ref: forwardRef,
        "$varient": varient,
        className: className
    }, other));
});
const MemoizedSkeleton = /*#__PURE__*/ React.memo(Skeleton);
MemoizedSkeleton.Root = SkeletonRoot;

const THEME$1 = {
    border: 'var(--border, #6B7A90)'
};
const px$1 = prefix('Table');

const TableContainer = styled.div.attrs({
    className: px$1('Container')
})`
  display: flex;
  flex-flow: column nowrap;
`;
const TableRow = styled.div.attrs({
    className: px$1('Row')
})`
  display: grid;
  gap: 0.5rem;
  &[data-head='true'] {
    font-weight: 700;
    border-bottom: 0.0625rem solid
      ${({ theme })=>{
    var _a;
    return (_a = theme.border) !== null && _a !== void 0 ? _a : THEME$1.border;
}};
  }
`;
const TableCell = styled.div.attrs({
    className: px$1('Cell')
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 0.5rem;
  box-sizing: border-box;

  &[data-type='number'] {
    justify-content: flex-end;
  }
  &[data-type='string'] {
    justify-content: flex-start;
  }
`;
TableRow.defaultProps = {
    theme: THEME$1
};

const Table = /*#__PURE__*/ React.forwardRef(function Table(props, forwardRef) {
    const { columns, rows, theme, className } = props, others = __rest(props, [
        "columns",
        "rows",
        "theme",
        "className"
    ]);
    return jsxRuntimeExports.jsxs(TableContainer, Object.assign({
        ref: forwardRef,
        className: className
    }, others, {
        children: [
            jsxRuntimeExports.jsx(TableRow, {
                className: combineClass(px$1('Header')),
                "data-head": true,
                theme: theme,
                children: columns.map((v)=>{
                    var _a;
                    return jsxRuntimeExports.jsx(TableCell, {
                        "data-field": v.field,
                        "data-type": (_a = v.type) !== null && _a !== void 0 ? _a : 'string',
                        className: combineClass(px$1('Head')),
                        style: {
                            width: v.width
                        },
                        children: v.headerName
                    }, v.field);
                })
            }),
            rows.map((v, i)=>jsxRuntimeExports.jsx(TableRow, {
                    "data-index": i,
                    className: combineClass(px$1('Body')),
                    children: columns.map((c, l)=>{
                        var _a, _b, _c;
                        return jsxRuntimeExports.jsx(TableCell, {
                            "data-field": c.field,
                            "data-type": (_a = c.type) !== null && _a !== void 0 ? _a : 'string',
                            className: combineClass(px$1('Data')),
                            style: {
                                width: c.width
                            },
                            children: (_c = (_b = c.valueGetter && c.valueGetter(v)) !== null && _b !== void 0 ? _b : v[c.field]) !== null && _c !== void 0 ? _c : ''
                        }, `${i}-${l}`);
                    })
                }, `row-${i}`))
        ]
    }));
});
const MemoizedTable = /*#__PURE__*/ React.memo(Table);
MemoizedTable.Container = TableContainer;
MemoizedTable.Row = TableRow;
MemoizedTable.Cell = TableCell;

const THEME = {
    primary: 'var(--primary, #ffb74d)',
    placeholder: 'var(--placeholder, #6B7A90)',
    border: {
        light: 'var(--border, #0000003A)',
        dark: 'var(--border, #ffffff3a)'
    },
    invalid: {
        light: 'var(--invalid, #d32f2f)',
        dark: 'var(--invalid, #f44336)'
    },
    disabled: {
        light: 'var(--disabled, #00000042)',
        dark: 'var(--disabled, #FFFFFF4C)'
    }
};
const px = prefix('Textarea');

const TextareaBox = styled.label.attrs({
    className: px('Box')
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;

  border: 0.0625rem solid transparent;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;

  &:has(:focus) {
    border-color: ${({ theme })=>{
    var _a;
    return (_a = theme.primary) !== null && _a !== void 0 ? _a : THEME.primary;
}};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.border) !== null && _a !== void 0 ? _a : (_b = THEME.border) === null || _b === void 0 ? void 0 : _b.light;
}};
      &:has(:invalid) {
        border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.invalid) !== null && _a !== void 0 ? _a : (_b = THEME.invalid) === null || _b === void 0 ? void 0 : _b.light;
}};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.border) !== null && _a !== void 0 ? _a : (_b = THEME.border) === null || _b === void 0 ? void 0 : _b.dark;
}};
      &:has(:invalid) {
        border-color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.invalid) !== null && _a !== void 0 ? _a : (_b = THEME.invalid) === null || _b === void 0 ? void 0 : _b.dark;
}};
      }
    }
  }
`;
const TextareaRoot = styled.textarea.attrs({
    className: px('Root')
})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
  border: none;
  padding: 0;
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: ${({ theme })=>{
    var _a;
    return (_a = theme.placeholder) !== null && _a !== void 0 ? _a : THEME.placeholder;
}};
  }
  &:disabled {
    @media (prefers-color-scheme: light) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.disabled.light) !== null && _a !== void 0 ? _a : (_b = THEME.disabled) === null || _b === void 0 ? void 0 : _b.light;
}};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme })=>{
    var _a, _b;
    return (_a = theme.disabled.dark) !== null && _a !== void 0 ? _a : (_b = THEME.disabled) === null || _b === void 0 ? void 0 : _b.dark;
}};
    }
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
TextareaBox.defaultProps = {
    theme: THEME
};
TextareaRoot.defaultProps = {
    rows: 1,
    theme: THEME
};

function useTextareaAutoResize(internalRef, autoResize, maxHeight, onChange) {
    const resizeInChange = React.useCallback((e)=>{
        const textarea = internalRef.current;
        if (autoResize && textarea) {
            textarea.style.height = 'auto';
            const newHeight = maxHeight ? Math.min(textarea.scrollHeight, maxHeight) : textarea.scrollHeight;
            textarea.style.height = newHeight + 'px';
            if (maxHeight === undefined) textarea.style.overflowY = 'hidden';
            else {
                textarea.style.overflowY = e.target.value.length > 0 && textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
            }
        }
        onChange && onChange(e);
    }, [
        autoResize,
        maxHeight,
        onChange
    ]);
    return {
        resizeInChange
    };
}

const Textarea = /*#__PURE__*/ React.forwardRef(function Textarea(props, forwardRef) {
    const { className, rows = 1, onChange, theme, autoResize = true, maxHeight } = props, other = __rest(props, [
        "className",
        "rows",
        "onChange",
        "theme",
        "autoResize",
        "maxHeight"
    ]);
    const internalRef = React.useRef(null);
    React.useImperativeHandle(forwardRef, ()=>internalRef.current);
    const { resizeInChange } = useTextareaAutoResize(internalRef, autoResize, maxHeight, onChange);
    return jsxRuntimeExports.jsx(TextareaBox, {
        theme: theme,
        children: jsxRuntimeExports.jsx(TextareaRoot, Object.assign({
            className: className,
            rows: rows,
            theme: theme,
            ref: internalRef,
            onChange: resizeInChange
        }, other))
    });
});
const MemoizedTextarea = /*#__PURE__*/ React.memo(Textarea);
MemoizedTextarea.Box = TextareaBox;
MemoizedTextarea.Root = TextareaRoot;

export { MemoizedBadge as Badge, MemoizedButton as Button, MemoizedCheck as Check, MemoizedChip as Chip, MemoizedInput as Input, MemoizedModal as Modal, MemoizedRadio as Radio, MemoizedScrollView as ScrollView, MemoizedSelect as Select, MemoizedSkeleton as Skeleton, MemoizedTable as Table, MemoizedTextarea as Textarea, useClickAway, useScrollBlock, useSelectValue, useTextareaAutoResize };
