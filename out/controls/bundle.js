/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./BotIframe.tsx"
/*!***********************!*\
  !*** ./BotIframe.tsx ***!
  \***********************/
(__unused_webpack_module, exports, __webpack_require__) {

eval("{\n\n// BotIframe.tsx\n// React component for the Copilot Website channel iframe.\n// Monochrome design: white background, black text, 1px borders, NO shadows.\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  var desc = Object.getOwnPropertyDescriptor(m, k);\n  if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n    desc = {\n      enumerable: true,\n      get: function get() {\n        return m[k];\n      }\n    };\n  }\n  Object.defineProperty(o, k2, desc);\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\nvar __importStar = this && this.__importStar || function () {\n  var _ownKeys = function ownKeys(o) {\n    _ownKeys = Object.getOwnPropertyNames || function (o) {\n      var ar = [];\n      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n      return ar;\n    };\n    return _ownKeys(o);\n  };\n  return function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k = _ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n    __setModuleDefault(result, mod);\n    return result;\n  };\n}();\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BotIframeComponent = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar BotIframeComponent = _ref => {\n  var {\n    botUrl\n  } = _ref;\n  var [isLoading, setIsLoading] = React.useState(!!botUrl);\n  var [hasError, setHasError] = React.useState(!botUrl);\n  React.useEffect(() => {\n    if (botUrl) {\n      setIsLoading(true);\n      setHasError(false);\n    } else {\n      setIsLoading(false);\n      setHasError(true);\n    }\n  }, [botUrl]);\n  var handleLoad = () => {\n    setIsLoading(false);\n    if (botUrl) {\n      setHasError(false);\n    }\n  };\n  var handleError = () => {\n    setIsLoading(false);\n    setHasError(true);\n  };\n  return React.createElement(\"div\", {\n    className: \"bot-iframe-container\"\n  }, React.createElement(\"div\", {\n    className: \"bot-iframe-header\"\n  }, React.createElement(\"span\", {\n    className: \"bot-iframe-title\"\n  }, \"Embedded Copilot (Website Channel)\"), React.createElement(\"span\", {\n    className: \"bot-iframe-source\"\n  }, \"Source: EV__BOT_URL\")), React.createElement(\"div\", {\n    className: \"bot-iframe-content\"\n  }, React.createElement(\"iframe\", {\n    className: \"bot-iframe\",\n    src: botUrl || \"about:blank\",\n    title: \"Embedded Copilot (Website Channel)\",\n    sandbox: \"allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts\",\n    referrerPolicy: \"no-referrer\",\n    allow: \"clipboard-read; clipboard-write\",\n    onLoad: handleLoad,\n    onError: handleError\n  })), isLoading && React.createElement(\"div\", {\n    className: \"bot-iframe-loading\",\n    role: \"status\",\n    \"aria-live\": \"polite\"\n  }, \"Connecting...\"), hasError && !isLoading && React.createElement(\"div\", {\n    className: \"bot-iframe-error\",\n    role: \"status\",\n    \"aria-live\": \"polite\"\n  }, \"Bot unreachable. Check EV__BOT_URL or network.\"));\n};\nexports.BotIframeComponent = BotIframeComponent;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./BotIframe.tsx?\n}");

/***/ },

/***/ "./index.ts"
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
(__unused_webpack_module, exports, __webpack_require__) {

eval("{\n\n// index.ts\n// PCF React control that renders a sandboxed <iframe> for the Copilot Website channel.\n// Styling is monochrome. URL is supplied through the bound \"botUrl\" property.\n//\n// Security posture:\n// - sandbox attribute limits the iframe's capabilities\n// - referrerpolicy=no-referrer\n// - no tokens/secrets in code\n//\n// UX posture:\n// - visible, simple error banner when the iframe cannot load (CSP/frame-ancestor/misconfig)\n// - container stretches to fill parent (height controlled by Canvas container)\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  var desc = Object.getOwnPropertyDescriptor(m, k);\n  if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n    desc = {\n      enumerable: true,\n      get: function get() {\n        return m[k];\n      }\n    };\n  }\n  Object.defineProperty(o, k2, desc);\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\nvar __importStar = this && this.__importStar || function () {\n  var _ownKeys = function ownKeys(o) {\n    _ownKeys = Object.getOwnPropertyNames || function (o) {\n      var ar = [];\n      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n      return ar;\n    };\n    return _ownKeys(o);\n  };\n  return function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k = _ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n    __setModuleDefault(result, mod);\n    return result;\n  };\n}();\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BotIframe = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar BotIframe_1 = __webpack_require__(/*! ./BotIframe */ \"./BotIframe.tsx\");\nclass BotIframe {\n  init(_context, _notifyOutputChanged, _state) {\n    // No initialization needed for this control\n  }\n  updateView(context) {\n    var _a;\n    // Get the bot URL from the bound property\n    var botUrl = ((_a = context.parameters.botUrl) === null || _a === void 0 ? void 0 : _a.raw) || \"\";\n    // Return the React component\n    return React.createElement(BotIframe_1.BotIframeComponent, {\n      botUrl: botUrl\n    });\n  }\n  getOutputs() {\n    // No outputs – hosting only.\n    return {};\n  }\n  destroy() {\n    // React cleanup is handled automatically by the framework.\n  }\n}\nexports.BotIframe = BotIframe;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./index.ts?\n}");

/***/ },

/***/ "react"
/*!***************************!*\
  !*** external "Reactv16" ***!
  \***************************/
(module) {

module.exports = Reactv16;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('Company.Demo.BotIframe', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.BotIframe);
} else {
	var Company = Company || {};
	Company.Demo = Company.Demo || {};
	Company.Demo.BotIframe = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.BotIframe;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}