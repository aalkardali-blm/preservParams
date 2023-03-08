/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _preservparam_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preservparam.js */ \"./src/preservparam.js\");\n/* harmony import */ var _preservparam_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_preservparam_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://script-preservparam/./src/index.js?");

/***/ }),

/***/ "./src/preservparam.js":
/*!*****************************!*\
  !*** ./src/preservparam.js ***!
  \*****************************/
/***/ (() => {

eval("\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n    (function () {\n      console.log(\"scriptstarted\");\n      console.log(\"blabla\");\n      if (window.location.hostname === \"www.biovancia.com\") {\n        const urlParams = new URLSearchParams(window.location.search);\n  \n        // Récupérer le formulaire de recherche par sa classe\n        const searchForm = document.querySelector(\".elementor-search-form\");\n  \n        // Ajouter un écouteur d'événement sur la soumission du formulaire\n        searchForm.addEventListener(\"submit\", function (event) {\n          // Empêcher le formulaire de se soumettre normalement\n          event.preventDefault();\n  \n          // Mettre à jour la valeur du paramètre \"s\" avec la valeur saisie dans le formulaire de recherche\n  \n          urlParams.set(\n            \"s\",\n            searchForm.querySelector('input[type=\"search\"]').value\n          );\n  \n          // Construire la nouvelle URL avec les paramètres mis à jour\n          const newUrl = new URL(window.location.href);\n          newUrl.search = urlParams.toString();\n  \n          // Rediriger vers la nouvelle URL\n          window.location.href = newUrl;\n        });\n  \n        urlParams.delete(\"s\");\n  \n        const elementA = document.querySelectorAll(\"a\");\n        // Filtrage des éléments dont l'attribut href contient les domaines recherchés\n        const filteredElementA = Array.from(elementA).filter((link) => {\n          const href = link.getAttribute(\"href\");\n          return (\n            href.startsWith(\"https://www.biovancia.com\") ||\n            href.startsWith(\"https://vl.linkinfosante.com\") ||\n            href.startsWith(\"/produits/\") ||\n            href.startsWith(\"/institut-biovancia/\")\n          );\n        });\n        // for each filteredLinks check urlParams pour les mettre dans linkParams\n        filteredElementA.forEach((ele) => {\n          const url = new URL(ele.href); // Crée un nouvel objet URL\n          urlParams.forEach((value, key) => {\n            url.searchParams.set(key, value); // Met à jour les paramètres de l'objet URL avec ceux de urlParams\n          });\n          console.log(ele); //console de chaque href <a>\n  \n          if (\n            urlParams.has(\"lpid\") &&\n            urlParams.has(\"cpid\") &&\n            urlParams.get(\"la\") === \"SPP\" &&\n            url.origin == \"https://vl.linkinfosante.com\"\n          ) {\n            url.pathname = \"/click\";\n          }\n          ele.href = url.href; // Met à jour la valeur de l'attribut href de l'élément a avec la nouvelle valeur de l'objet URL\n        });\n  \n        //var scriptExecuted\n        var scriptExecuted = true;\n        // Ajouter la variable au dataLayer\n        dataLayer.push({\n          scriptExecuted: scriptExecuted,\n        });\n        console.log(\"scriptloaded\");\n      }\n    })();\n  });\n  \n\n//# sourceURL=webpack://script-preservparam/./src/preservparam.js?");

/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;