/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'); */\n\nhtml,\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  /* font-family: 'Quicksand', 'Courier New', Courier, monospace; */\n}\n\nbody {\n  background: #fafafa;\n}\n\nh5,\nh4 {\n  padding: 0;\n  margin: 0;\n}\n\nh2 {\n  text-align: center;\n}\n\np {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.container {\n  height: 100vh;\n  max-width: 60rem;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\n  gap: 0.125rem 0.0125rem;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. header .'\n    '. main .'\n    '. footer .';\n}\n\nheader {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-bottom: 2px #dbdbdb solid;\n  color: #333;\n  height: 100px;\n  /* background: no-repeat center/100% url('./assets/cookBanner3.jpg'); */\n}\n\nfooter {\n  grid-area: footer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-top: 2px #dbdbdb solid;\n}\n\nmain {\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 0.5rem 0.5rem;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. . .'\n    '. . .'\n    '. . .';\n  grid-area: main;\n}\n\n.logo {\n  display: flex;\n  margin: 5px;\n  align-items: center;\n}\n\n.logo * {\n  padding: 10px;\n  margin: 0;\n  font-family: 'Brush Script MT', cursive;\n}\n\n.nav-bar-list {\n  padding: 0;\n  list-style: none;\n  display: flex;\n}\n\nli {\n  margin-left: 5rem;\n  cursor: pointer;\n}\n\nli:hover {\n  border-bottom: 2px solid #333;\n  font-weight: bold;\n}\n\n.selected {\n  font-weight: bold;\n  border-bottom: 2px solid #333;\n}\n\n/* card foods styles */\n\n.card-food {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr 0.6fr;\n  grid-template-rows: 2fr 0.4fr 0.2fr;\n  gap: 0;\n  grid-template-areas:\n    'card-img card-img card-img'\n    'card-title card-title card-title'\n    'btn-recipe . btn-liked';\n  border: #dbdbdb 1px solid;\n}\n\n.card-img {\n  overflow: hidden;\n  box-sizing: border-box;\n  grid-area: card-img;\n}\n\n.img-food {\n  width: 100%;\n  min-height: 250px;\n  object-fit: cover;\n}\n\n.card-title {\n  grid-area: card-title;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0.2rem;\n}\n\n.btn-recipe {\n  background: rgb(221, 21, 21);\n  border: none;\n  color: white;\n  font-weight: bold;\n  padding: 0.1rem 0.4rem;\n  cursor: pointer;\n}\n\n.btn-liked {\n  cursor: pointer;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-around;\n  background: white;\n  border: none;\n  color: rgb(221, 21, 21);\n  font-weight: bold;\n  font-size: 0.8em;\n  padding: 0.1rem 0.2rem;\n}\n\n.no-grid {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.hiden {\n  display: none !important;\n}\n\n.popuptext {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  background-color: #f6e0c0;\n  color: #333;\n  border-radius: 6px;\n  padding: 8px 0;\n}\n\n.popuptext button {\n  cursor: pointer;\n  align-self: flex-end;\n  margin: 10px 20px;\n  padding: 5px;\n  font-weight: bold;\n  background-color: #f6e0c0;\n  color: #333;\n  border: none;\n  font-size: xx-large;\n}\n\n.show {\n  animation: fadeIn 1s;\n}\n\n.recipe {\n  height: 140px;\n  overflow-y: scroll;\n}\n\n.mesgFormContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mesgContent {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.mesgContent input,\n.mesgContent textarea {\n  margin-bottom: 10px;\n  color: #333;\n  border-radius: 6px;\n  font-size: medium;\n}\n\n.mesgContent input[type='button'] {\n  background-color: #f6e0c0;\n  border: 1px solid #333;\n  font-weight: bold;\n  padding: 5px;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n.mesgContent div {\n  width: 100%;\n}\n\n.aligCener {\n  align-self: center;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f3d4a6;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #333;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Add animation (fade in the popup) */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  header {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'); */\n\nhtml,\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  /* font-family: 'Quicksand', 'Courier New', Courier, monospace; */\n}\n\nbody {\n  background: #fafafa;\n}\n\nh5,\nh4 {\n  padding: 0;\n  margin: 0;\n}\n\nh2 {\n  text-align: center;\n}\n\np {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.container {\n  height: 100vh;\n  max-width: 60rem;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\n  gap: 0.125rem 0.0125rem;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. header .'\n    '. main .'\n    '. footer .';\n}\n\nheader {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-bottom: 2px #dbdbdb solid;\n  color: #333;\n  height: 100px;\n  /* background: no-repeat center/100% url('./assets/cookBanner3.jpg'); */\n}\n\nfooter {\n  grid-area: footer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-top: 2px #dbdbdb solid;\n}\n\nmain {\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 0.5rem 0.5rem;\n  grid-auto-flow: row;\n  grid-template-areas:\n    '. . .'\n    '. . .'\n    '. . .';\n  grid-area: main;\n}\n\n.logo {\n  display: flex;\n  margin: 5px;\n  align-items: center;\n}\n\n.logo * {\n  padding: 10px;\n  margin: 0;\n  font-family: 'Brush Script MT', cursive;\n}\n\n.nav-bar-list {\n  padding: 0;\n  list-style: none;\n  display: flex;\n}\n\nli {\n  margin-left: 5rem;\n  cursor: pointer;\n}\n\nli:hover {\n  border-bottom: 2px solid #333;\n  font-weight: bold;\n}\n\n.selected {\n  font-weight: bold;\n  border-bottom: 2px solid #333;\n}\n\n/* card foods styles */\n\n.card-food {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr 0.6fr;\n  grid-template-rows: 2fr 0.4fr 0.2fr;\n  gap: 0;\n  grid-template-areas:\n    'card-img card-img card-img'\n    'card-title card-title card-title'\n    'btn-recipe . btn-liked';\n  border: #dbdbdb 1px solid;\n}\n\n.card-img {\n  overflow: hidden;\n  box-sizing: border-box;\n  grid-area: card-img;\n}\n\n.img-food {\n  width: 100%;\n  min-height: 250px;\n  object-fit: cover;\n}\n\n.card-title {\n  grid-area: card-title;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0.2rem;\n}\n\n.btn-recipe {\n  background: rgb(221, 21, 21);\n  border: none;\n  color: white;\n  font-weight: bold;\n  padding: 0.1rem 0.4rem;\n  cursor: pointer;\n}\n\n.btn-liked {\n  cursor: pointer;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-around;\n  background: white;\n  border: none;\n  color: rgb(221, 21, 21);\n  font-weight: bold;\n  font-size: 0.8em;\n  padding: 0.1rem 0.2rem;\n}\n\n.no-grid {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.hiden {\n  display: none !important;\n}\n\n.popuptext {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n  background-color: #f6e0c0;\n  color: #333;\n  border-radius: 6px;\n  padding: 8px 0;\n}\n\n.popuptext button {\n  cursor: pointer;\n  align-self: flex-end;\n  margin: 10px 20px;\n  padding: 5px;\n  font-weight: bold;\n  background-color: #f6e0c0;\n  color: #333;\n  border: none;\n  font-size: xx-large;\n}\n\n.show {\n  animation: fadeIn 1s;\n}\n\n.recipe {\n  height: 140px;\n  overflow-y: scroll;\n}\n\n.mesgFormContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.mesgContent {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.mesgContent input,\n.mesgContent textarea {\n  margin-bottom: 10px;\n  color: #333;\n  border-radius: 6px;\n  font-size: medium;\n}\n\n.mesgContent input[type='button'] {\n  background-color: #f6e0c0;\n  border: 1px solid #333;\n  font-weight: bold;\n  padding: 5px;\n}\n\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n.mesgContent div {\n  width: 100%;\n}\n\n.aligCener {\n  align-self: center;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f3d4a6;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #333;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Add animation (fade in the popup) */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  header {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/createPopup.js":
/*!***************************************!*\
  !*** ./src/components/createPopup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getItemData)
/* harmony export */ });
/* harmony import */ var _hidenItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hidenItems.js */ "./src/components/hidenItems.js");
/* harmony import */ var _displayComents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComents.js */ "./src/components/displayComents.js");
/* harmony import */ var _newComent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newComent.js */ "./src/components/newComent.js");




const mainCont = document.querySelector('.container-food-cards');

const closePopup = (elem) => {
  mainCont.classList.toggle('no-grid');
  (0,_hidenItems_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  mainCont.removeChild(elem);
};

// function to display popup
const createPopup = (details, msgDat) => {
  const myPopup = document.createElement('div');
  const popupButon = document.createElement('button');
  const itemdata = document.createElement('div');
  itemdata.classList.add('mesgFormContainer');
  const messageContainer = document.createElement('div');
  messageContainer.id = 'mesgContainer';
  messageContainer.classList.add('mesgFormContainer');
  const newMessCont = document.createElement('div');
  newMessCont.classList.add('mesgFormContainer');
  (0,_displayComents_js__WEBPACK_IMPORTED_MODULE_1__.displayComents)(msgDat, messageContainer);
  (0,_newComent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newMessCont, details.idMeal);

  itemdata.innerHTML = `<img src="${details.strMealThumb}" width="250px"><h2>${details.strMeal}</h2><h4>Ingredients:</h4><p>${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ${details.strIngredient4}, ${details.strIngredient5}</p><h4>Recipe:</h4>
  <p class="recipe">${details.strInstructions}</p>`;
  itemdata.id = details.idMeal;
  myPopup.id = 'myPopup';
  popupButon.innerHTML = 'X';
  popupButon.addEventListener('click', () => closePopup(myPopup));
  myPopup.classList.add('popuptext');
  myPopup.classList.toggle('show');
  mainCont.classList.toggle('no-grid');
  myPopup.appendChild(popupButon);
  myPopup.appendChild(itemdata);
  myPopup.appendChild(messageContainer);
  myPopup.appendChild(newMessCont);
  mainCont.appendChild(myPopup);
};

// function to get each element data
const getItemData = async (id) => {
  const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const request = new Request(foodItemDataURL + id);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals[0];

  const messageData = await (0,_displayComents_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id);

  createPopup(responsInfo, messageData);
};




/***/ }),

/***/ "./src/components/displayComents.js":
/*!******************************************!*\
  !*** ./src/components/displayComents.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countComment": () => (/* binding */ countComment),
/* harmony export */   "displayComents": () => (/* binding */ displayComents),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const countComment = (arr, title) => {
  const counter = ` (${arr.length})`;
  title.innerHTML += counter;
};

const displayComents = (arr, container) => {
  container.innerHTML = '';
  const title = document.createElement('h3');
  title.innerHTML = 'Comments';
  container.appendChild(title);
  const messageData = document.createElement('div');
  messageData.classList.add('mesgContent');
  if (!arr.error) {
    countComment(arr, title);
    arr.forEach((element) => {
      const messItem = document.createElement('div');
      messItem.innerHTML = `
      <span>${element.creation_date} - <strong>${element.username}:</strong> ${element.comment}</span><hr/>`;
      messageData.appendChild(messItem);
    });
  } else {
    title.innerText += ' (0)';
    messageData.innerHTML = '<span>Any Comments Yet</span><hr width="250px">';
  }
  container.appendChild(messageData);
};

// function to get all messages
const getComments = async (id) => {
  const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments?item_id=';
  const request = new Request(getMessagesLink + id);
  const response = await fetch(request);
  const responseJson = await response.json();
  return responseJson;
};



/***/ }),

/***/ "./src/components/getDataFood.js":
/*!***************************************!*\
  !*** ./src/components/getDataFood.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAllData),
/* harmony export */   "displayCounter": () => (/* binding */ displayCounter)
/* harmony export */ });
/* harmony import */ var _createPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopup.js */ "./src/components/createPopup.js");
/* harmony import */ var _hidenItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidenItems.js */ "./src/components/hidenItems.js");
/* harmony import */ var _likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeDataApi.js */ "./src/components/likeDataApi.js");




// function display an array of objects
const displayData = (arr) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';
  arr.forEach((food) => {
    const item = document.createElement('article');
    item.id = food.idMeal;

    item.classList.add('card-food');
    item.innerHTML = `
        <div class="card-title">
          <h5>${food.strMeal}</h5>
        </div>        
        <button type="button" class="btn-recipe">Recipe</button>
        <div>        
        </div>
        <div class="btn-liked">
          Like
        </div>
        <div class="card-img">
         <img src="${food.strMealThumb}" class="img-food">        
        </div>     
    `;

    const btnRecipeElement = item.querySelector('.btn-recipe');
    const btnLikedElement = item.querySelector('.btn-liked');
    const printLike = (data) => {
      const likesReturned = data.find(
        // eslint-disable-next-line comma-dangle
        (element) => element.item_id === food.idMeal
      );
      // eslint-disable-next-line operator-linebreak
      btnLikedElement.innerHTML =
        likesReturned !== undefined
          ? `<i class="fas fa-heart"></i> (${likesReturned.likes})`
          : '<i class="far fa-heart"></i> (0)';
    };
    (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikesToItems)()
      .then(printLike)
      .catch((e) => console.log(e));

    btnRecipeElement.addEventListener('click', () => {
      (0,_createPopup_js__WEBPACK_IMPORTED_MODULE_0__["default"])(food.idMeal);
      (0,_hidenItems_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
    btnLikedElement.addEventListener('click', () => {
      (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.addLikeToItem)(food.idMeal);
      (0,_likeDataApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikesToItems)()
        .then(printLike)
        .catch((e) => console.log(e));
    });
    board.appendChild(item);
  });
};

const displayCounter = (typeFoodSelected, count) => {
  typeFoodSelected.innerHTML = `${typeFoodSelected.textContent} (${count})`;
};

// function to get images and title
const getAllData = async (url, typeFoodSelected) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responseInfo = responseJson.meals;
  displayCounter(typeFoodSelected, responseInfo.length);
  displayData(responseInfo);
};




/***/ }),

/***/ "./src/components/hidenItems.js":
/*!**************************************!*\
  !*** ./src/components/hidenItems.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hidenItems)
/* harmony export */ });
const hidenItems = () => {
  const items = document.querySelectorAll('.card-food');
  items.forEach((e) => {
    e.classList.toggle('hiden');
  });
};



/***/ }),

/***/ "./src/components/likeDataApi.js":
/*!***************************************!*\
  !*** ./src/components/likeDataApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLikeToItem": () => (/* binding */ addLikeToItem),
/* harmony export */   "getLikesToItems": () => (/* binding */ getLikesToItems)
/* harmony export */ });
// link to likes and message store api
const projectID = 'cq8n4ydnTGepOHztUKmY';
const likesLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${projectID}/likes/`;

const addLikeToItem = async (itemId) => {
  const request = new Request(likesLink);
  const response = await fetch(request, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    body: JSON.stringify({ item_id: `${itemId}` }),
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

const getLikesToItems = async () => {
  const response = await fetch(likesLink);
  const data = await response.json();
  return data;
};


/***/ }),

/***/ "./src/components/newComent.js":
/*!*************************************!*\
  !*** ./src/components/newComent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newMessageForm)
/* harmony export */ });
/* harmony import */ var _displayComents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComents.js */ "./src/components/displayComents.js");


// function to post element
const postNewMessage = async (id, name, text) => {
  const postMessageLink =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments';
  const request = new Request(postMessageLink);
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: text,
    }),
  };

  await fetch(request, data);
  const arr = await (0,_displayComents_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);
  const container = document.getElementById('mesgContainer');
  (0,_displayComents_js__WEBPACK_IMPORTED_MODULE_0__.displayComents)(arr, container);
};

const newMessage = (id, user, message) => {
  if (user.value !== '' && message.value !== '') {
    postNewMessage(id, user.value, message.value);
    user.value = '';
    message.value = '';
  }
};

const newMessageForm = (container, itemId) => {
  const formNewMessage = document.createElement('div');
  formNewMessage.innerHTML = '<h3 class="aligCener">Add a Comment</h3>';
  formNewMessage.classList.add('mesgContent');
  const userName = document.createElement('input');
  userName.type = 'text';
  userName.name = 'username';
  userName.placeholder = 'Your name';
  const textMessage = document.createElement('textarea');
  textMessage.name = 'comment';
  textMessage.rows = '4';
  textMessage.cols = '30';
  textMessage.placeholder = 'Your comment';
  const button = document.createElement('input');
  button.type = 'button';
  button.value = 'Comment';
  button.addEventListener('click', () =>
    newMessage(itemId, userName, textMessage)
  );
  formNewMessage.appendChild(userName);
  formNewMessage.appendChild(textMessage);
  formNewMessage.appendChild(button);

  container.appendChild(formNewMessage);
};




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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/getDataFood.js */ "./src/components/getDataFood.js");

// import logoBack from './assets/cookBanner3.jpg';


// eslint-disable-next-line operator-linebreak
const [liBeefElement, liPastaElement, liSeafoodElement] =
  document.querySelectorAll('li');
let typeFoodSelected = liBeefElement;

// links to get data from food api
const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const allPastaURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta`;
const allSeafoodURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

liBeefElement.addEventListener('click', () => {
  typeFoodSelected = liBeefElement;
  liBeefElement.classList.add('selected');
  liPastaElement.classList.remove('selected');
  liSeafoodElement.classList.remove('selected');
  typeFoodSelected.textContent = 'Beef';
  liPastaElement.textContent = 'Pasta';
  liSeafoodElement.textContent = 'Seafood';
  (0,_components_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allBeefURL, typeFoodSelected);
});

liPastaElement.addEventListener('click', () => {
  typeFoodSelected = liPastaElement;
  liPastaElement.classList.add('selected');
  liBeefElement.classList.remove('selected');
  liSeafoodElement.classList.remove('selected');
  typeFoodSelected.textContent = 'Pasta';
  liBeefElement.textContent = 'Beef';
  liSeafoodElement.textContent = 'Seafood';
  (0,_components_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allPastaURL, typeFoodSelected);
});

liSeafoodElement.addEventListener('click', () => {
  typeFoodSelected = liSeafoodElement;
  liSeafoodElement.classList.add('selected');
  liBeefElement.classList.remove('selected');
  liPastaElement.classList.remove('selected');
  typeFoodSelected.textContent = 'Seafood';
  liBeefElement.textContent = 'Beef';
  liPastaElement.textContent = 'Pasta';
  (0,_components_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allSeafoodURL, typeFoodSelected);
});

(0,_components_getDataFood_js__WEBPACK_IMPORTED_MODULE_1__["default"])(allBeefURL, typeFoodSelected);

// logo immage create
// const logoImage = new Image();
// logoImage.src = logoBack;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZ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OztBQUVELHNFQUFVOztBQUVWO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlUG9wdXAuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5Q29tZW50cy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9jb21wb25lbnRzL2dldERhdGFGb29kLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvaGlkZW5JdGVtcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9jb21wb25lbnRzL2xpa2VEYXRhQXBpLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvbmV3Q29tZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpOyAqL1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcblxcbmg1LFxcbmg0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgMi40ZnIgMC4zZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDIuNGZyIDAuM2ZyO1xcbiAgZ2FwOiAwLjEyNXJlbSAwLjAxMjVyZW07XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJy4gaGVhZGVyIC4nXFxuICAgICcuIG1haW4gLidcXG4gICAgJy4gZm9vdGVyIC4nO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4ICNkYmRiZGIgc29saWQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGhlaWdodDogMTAwcHg7XFxuICAvKiBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyLzEwMCUgdXJsKCcuL2Fzc2V0cy9jb29rQmFubmVyMy5qcGcnKTsgKi9cXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAycHggI2RiZGJkYiBzb2xpZDtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogMC41cmVtIDAuNXJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnLiAuIC4nXFxuICAgICcuIC4gLidcXG4gICAgJy4gLiAuJztcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28gKiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdCcnVzaCBTY3JpcHQgTVQnLCBjdXJzaXZlO1xcbn1cXG5cXG4ubmF2LWJhci1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xcbn1cXG5cXG4vKiBjYXJkIGZvb2RzIHN0eWxlcyAqL1xcblxcbi5jYXJkLWZvb2Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNGZyIDAuNmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMC40ZnIgMC4yZnI7XFxuICBnYXA6IDA7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnY2FyZC1pbWcgY2FyZC1pbWcgY2FyZC1pbWcnXFxuICAgICdjYXJkLXRpdGxlIGNhcmQtdGl0bGUgY2FyZC10aXRsZSdcXG4gICAgJ2J0bi1yZWNpcGUgLiBidG4tbGlrZWQnO1xcbiAgYm9yZGVyOiAjZGJkYmRiIDFweCBzb2xpZDtcXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZ3JpZC1hcmVhOiBjYXJkLWltZztcXG59XFxuXFxuLmltZy1mb29kIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBjYXJkLXRpdGxlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4uYnRuLXJlY2lwZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjIxLCAyMSwgMjEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwLjFyZW0gMC40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWxpa2VkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYigyMjEsIDIxLCAyMSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBwYWRkaW5nOiAwLjFyZW0gMC4ycmVtO1xcbn1cXG5cXG4ubm8tZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGlkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucG9wdXB0ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZlMGMwO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA4cHggMDtcXG59XFxuXFxuLnBvcHVwdGV4dCBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZTBjMDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuLnNob3cge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxufVxcblxcbi5yZWNpcGUge1xcbiAgaGVpZ2h0OiAxNDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm1lc2dGb3JtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lc2dDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5tZXNnQ29udGVudCBpbnB1dCxcXG4ubWVzZ0NvbnRlbnQgdGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbi5tZXNnQ29udGVudCBpbnB1dFt0eXBlPSdidXR0b24nXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZlMGMwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubWVzZ0NvbnRlbnQgZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWxpZ0NlbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjNkNGE2O1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG59XFxuXFxuLyogQWRkIGFuaW1hdGlvbiAoZmFkZSBpbiB0aGUgcG9wdXApICovXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICBoZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZHQUE2Rzs7QUFFN0c7O0VBRUUsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUVBQWlFO0FBQ25FOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztB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LG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHNDQUFzQztBQUN0QztFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7ICovXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLyogZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7ICovXFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG59XFxuXFxuaDUsXFxuaDQge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAyLjRmciAwLjNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgMi40ZnIgMC4zZnI7XFxuICBnYXA6IDAuMTI1cmVtIDAuMDEyNXJlbTtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnLiBoZWFkZXIgLidcXG4gICAgJy4gbWFpbiAuJ1xcbiAgICAnLiBmb290ZXIgLic7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBib3JkZXItYm90dG9tOiAycHggI2RiZGJkYiBzb2xpZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIC8qIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvMTAwJSB1cmwoJy4vYXNzZXRzL2Nvb2tCYW5uZXIzLmpwZycpOyAqL1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDJweCAjZGJkYmRiIHNvbGlkO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAwLjVyZW0gMC41cmVtO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICcuIC4gLidcXG4gICAgJy4gLiAuJ1xcbiAgICAnLiAuIC4nO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyAqIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ0JydXNoIFNjcmlwdCBNVCcsIGN1cnNpdmU7XFxufVxcblxcbi5uYXYtYmFyLWxpc3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5saSB7XFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XFxufVxcblxcbi8qIGNhcmQgZm9vZHMgc3R5bGVzICovXFxuXFxuLmNhcmQtZm9vZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS40ZnIgMC42ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAwLjRmciAwLjJmcjtcXG4gIGdhcDogMDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdjYXJkLWltZyBjYXJkLWltZyBjYXJkLWltZydcXG4gICAgJ2NhcmQtdGl0bGUgY2FyZC10aXRsZSBjYXJkLXRpdGxlJ1xcbiAgICAnYnRuLXJlY2lwZSAuIGJ0bi1saWtlZCc7XFxuICBib3JkZXI6ICNkYmRiZGIgMXB4IHNvbGlkO1xcbn1cXG5cXG4uY2FyZC1pbWcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBncmlkLWFyZWE6IGNhcmQtaW1nO1xcbn1cXG5cXG4uaW1nLWZvb2Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBncmlkLWFyZWE6IGNhcmQtdGl0bGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcblxcbi5idG4tcmVjaXBlIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMjEsIDIxLCAyMSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tbGlrZWQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDIyMSwgMjEsIDIxKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XFxufVxcblxcbi5uby1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oaWRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wb3B1cHRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWdyb3c6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmUwYzA7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbn1cXG5cXG4ucG9wdXB0ZXh0IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZlMGMwO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG59XFxuXFxuLnJlY2lwZSB7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubWVzZ0Zvcm1Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVzZ0NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm1lc2dDb250ZW50IGlucHV0LFxcbi5tZXNnQ29udGVudCB0ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuXFxuLm1lc2dDb250ZW50IGlucHV0W3R5cGU9J2J1dHRvbiddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmUwYzA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzLFxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5tZXNnQ29udGVudCBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hbGlnQ2VuZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDVweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICNmM2Q0YTY7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbn1cXG5cXG4vKiBBZGQgYW5pbWF0aW9uIChmYWRlIGluIHRoZSBwb3B1cCkgKi9cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGhpZGVuSXRlbXMgZnJvbSAnLi9oaWRlbkl0ZW1zLmpzJztcbmltcG9ydCB7IGRpc3BsYXlDb21lbnRzLCBnZXRDb21tZW50cyB9IGZyb20gJy4vZGlzcGxheUNvbWVudHMuanMnO1xuaW1wb3J0IG5ld01lc3NhZ2VGb3JtIGZyb20gJy4vbmV3Q29tZW50LmpzJztcblxuY29uc3QgbWFpbkNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZvb2QtY2FyZHMnKTtcblxuY29uc3QgY2xvc2VQb3B1cCA9IChlbGVtKSA9PiB7XG4gIG1haW5Db250LmNsYXNzTGlzdC50b2dnbGUoJ25vLWdyaWQnKTtcbiAgaGlkZW5JdGVtcygpO1xuICBtYWluQ29udC5yZW1vdmVDaGlsZChlbGVtKTtcbn07XG5cbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgcG9wdXBcbmNvbnN0IGNyZWF0ZVBvcHVwID0gKGRldGFpbHMsIG1zZ0RhdCkgPT4ge1xuICBjb25zdCBteVBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBvcHVwQnV0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgaXRlbWRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbWRhdGEuY2xhc3NMaXN0LmFkZCgnbWVzZ0Zvcm1Db250YWluZXInKTtcbiAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlQ29udGFpbmVyLmlkID0gJ21lc2dDb250YWluZXInO1xuICBtZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lc2dGb3JtQ29udGFpbmVyJyk7XG4gIGNvbnN0IG5ld01lc3NDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld01lc3NDb250LmNsYXNzTGlzdC5hZGQoJ21lc2dGb3JtQ29udGFpbmVyJyk7XG4gIGRpc3BsYXlDb21lbnRzKG1zZ0RhdCwgbWVzc2FnZUNvbnRhaW5lcik7XG4gIG5ld01lc3NhZ2VGb3JtKG5ld01lc3NDb250LCBkZXRhaWxzLmlkTWVhbCk7XG5cbiAgaXRlbWRhdGEuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkZXRhaWxzLnN0ck1lYWxUaHVtYn1cIiB3aWR0aD1cIjI1MHB4XCI+PGgyPiR7ZGV0YWlscy5zdHJNZWFsfTwvaDI+PGg0PkluZ3JlZGllbnRzOjwvaDQ+PHA+JHtkZXRhaWxzLnN0ckluZ3JlZGllbnQxfSwgJHtkZXRhaWxzLnN0ckluZ3JlZGllbnQyfSwgJHtkZXRhaWxzLnN0ckluZ3JlZGllbnQzfSwgJHtkZXRhaWxzLnN0ckluZ3JlZGllbnQ0fSwgJHtkZXRhaWxzLnN0ckluZ3JlZGllbnQ1fTwvcD48aDQ+UmVjaXBlOjwvaDQ+XG4gIDxwIGNsYXNzPVwicmVjaXBlXCI+JHtkZXRhaWxzLnN0ckluc3RydWN0aW9uc308L3A+YDtcbiAgaXRlbWRhdGEuaWQgPSBkZXRhaWxzLmlkTWVhbDtcbiAgbXlQb3B1cC5pZCA9ICdteVBvcHVwJztcbiAgcG9wdXBCdXRvbi5pbm5lckhUTUwgPSAnWCc7XG4gIHBvcHVwQnV0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZVBvcHVwKG15UG9wdXApKTtcbiAgbXlQb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cHRleHQnKTtcbiAgbXlQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIG1haW5Db250LmNsYXNzTGlzdC50b2dnbGUoJ25vLWdyaWQnKTtcbiAgbXlQb3B1cC5hcHBlbmRDaGlsZChwb3B1cEJ1dG9uKTtcbiAgbXlQb3B1cC5hcHBlbmRDaGlsZChpdGVtZGF0YSk7XG4gIG15UG9wdXAuYXBwZW5kQ2hpbGQobWVzc2FnZUNvbnRhaW5lcik7XG4gIG15UG9wdXAuYXBwZW5kQ2hpbGQobmV3TWVzc0NvbnQpO1xuICBtYWluQ29udC5hcHBlbmRDaGlsZChteVBvcHVwKTtcbn07XG5cbi8vIGZ1bmN0aW9uIHRvIGdldCBlYWNoIGVsZW1lbnQgZGF0YVxuY29uc3QgZ2V0SXRlbURhdGEgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZm9vZEl0ZW1EYXRhVVJMID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JztcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGZvb2RJdGVtRGF0YVVSTCArIGlkKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCByZXNwb25zSW5mbyA9IHJlc3BvbnNlSnNvbi5tZWFsc1swXTtcblxuICBjb25zdCBtZXNzYWdlRGF0YSA9IGF3YWl0IGdldENvbW1lbnRzKGlkKTtcblxuICBjcmVhdGVQb3B1cChyZXNwb25zSW5mbywgbWVzc2FnZURhdGEpO1xufTtcblxuZXhwb3J0IHsgZ2V0SXRlbURhdGEgYXMgZGVmYXVsdCB9O1xuIiwiY29uc3QgY291bnRDb21tZW50ID0gKGFyciwgdGl0bGUpID0+IHtcbiAgY29uc3QgY291bnRlciA9IGAgKCR7YXJyLmxlbmd0aH0pYDtcbiAgdGl0bGUuaW5uZXJIVE1MICs9IGNvdW50ZXI7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29tZW50cyA9IChhcnIsIGNvbnRhaW5lcikgPT4ge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGUuaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29uc3QgbWVzc2FnZURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVzc2FnZURhdGEuY2xhc3NMaXN0LmFkZCgnbWVzZ0NvbnRlbnQnKTtcbiAgaWYgKCFhcnIuZXJyb3IpIHtcbiAgICBjb3VudENvbW1lbnQoYXJyLCB0aXRsZSk7XG4gICAgYXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtZXNzSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8c3Bhbj4ke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gLSA8c3Ryb25nPiR7ZWxlbWVudC51c2VybmFtZX06PC9zdHJvbmc+ICR7ZWxlbWVudC5jb21tZW50fTwvc3Bhbj48aHIvPmA7XG4gICAgICBtZXNzYWdlRGF0YS5hcHBlbmRDaGlsZChtZXNzSXRlbSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ICs9ICcgKDApJztcbiAgICBtZXNzYWdlRGF0YS5pbm5lckhUTUwgPSAnPHNwYW4+QW55IENvbW1lbnRzIFlldDwvc3Bhbj48aHIgd2lkdGg9XCIyNTBweFwiPic7XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VEYXRhKTtcbn07XG5cbi8vIGZ1bmN0aW9uIHRvIGdldCBhbGwgbWVzc2FnZXNcbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzTGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9jcThuNHlkblRHZXBPSHp0VUttWS9jb21tZW50cz9pdGVtX2lkPSc7XG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChnZXRNZXNzYWdlc0xpbmsgKyBpZCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlDb21lbnRzLCBnZXRDb21tZW50cywgY291bnRDb21tZW50IH07IiwiaW1wb3J0IGdldEl0ZW1EYXRhIGZyb20gJy4vY3JlYXRlUG9wdXAuanMnO1xuaW1wb3J0IGhpZGVuSXRlbXMgZnJvbSAnLi9oaWRlbkl0ZW1zLmpzJztcbmltcG9ydCB7IGFkZExpa2VUb0l0ZW0sIGdldExpa2VzVG9JdGVtcyB9IGZyb20gJy4vbGlrZURhdGFBcGkuanMnO1xuXG4vLyBmdW5jdGlvbiBkaXNwbGF5IGFuIGFycmF5IG9mIG9iamVjdHNcbmNvbnN0IGRpc3BsYXlEYXRhID0gKGFycikgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZm9vZC1jYXJkcycpO1xuICBib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgYXJyLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGl0ZW0uaWQgPSBmb29kLmlkTWVhbDtcblxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZC1mb29kJyk7XG4gICAgaXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgPGg1PiR7Zm9vZC5zdHJNZWFsfTwvaDU+XG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXJlY2lwZVwiPlJlY2lwZTwvYnV0dG9uPlxuICAgICAgICA8ZGl2PiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWxpa2VkXCI+XG4gICAgICAgICAgTGlrZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1nXCI+XG4gICAgICAgICA8aW1nIHNyYz1cIiR7Zm9vZC5zdHJNZWFsVGh1bWJ9XCIgY2xhc3M9XCJpbWctZm9vZFwiPiAgICAgICAgXG4gICAgICAgIDwvZGl2PiAgICAgXG4gICAgYDtcblxuICAgIGNvbnN0IGJ0blJlY2lwZUVsZW1lbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmVjaXBlJyk7XG4gICAgY29uc3QgYnRuTGlrZWRFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYnRuLWxpa2VkJyk7XG4gICAgY29uc3QgcHJpbnRMaWtlID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGxpa2VzUmV0dXJuZWQgPSBkYXRhLmZpbmQoXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21tYS1kYW5nbGVcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuaXRlbV9pZCA9PT0gZm9vZC5pZE1lYWxcbiAgICAgICk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb3BlcmF0b3ItbGluZWJyZWFrXG4gICAgICBidG5MaWtlZEVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICAgbGlrZXNSZXR1cm5lZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBgPGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+ICgke2xpa2VzUmV0dXJuZWQubGlrZXN9KWBcbiAgICAgICAgICA6ICc8aSBjbGFzcz1cImZhciBmYS1oZWFydFwiPjwvaT4gKDApJztcbiAgICB9O1xuICAgIGdldExpa2VzVG9JdGVtcygpXG4gICAgICAudGhlbihwcmludExpa2UpXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcblxuICAgIGJ0blJlY2lwZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnZXRJdGVtRGF0YShmb29kLmlkTWVhbCk7XG4gICAgICBoaWRlbkl0ZW1zKCk7XG4gICAgfSk7XG4gICAgYnRuTGlrZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYWRkTGlrZVRvSXRlbShmb29kLmlkTWVhbCk7XG4gICAgICBnZXRMaWtlc1RvSXRlbXMoKVxuICAgICAgICAudGhlbihwcmludExpa2UpXG4gICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xuICAgIH0pO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5Q291bnRlciA9ICh0eXBlRm9vZFNlbGVjdGVkLCBjb3VudCkgPT4ge1xuICB0eXBlRm9vZFNlbGVjdGVkLmlubmVySFRNTCA9IGAke3R5cGVGb29kU2VsZWN0ZWQudGV4dENvbnRlbnR9ICgke2NvdW50fSlgO1xufTtcblxuLy8gZnVuY3Rpb24gdG8gZ2V0IGltYWdlcyBhbmQgdGl0bGVcbmNvbnN0IGdldEFsbERhdGEgPSBhc3luYyAodXJsLCB0eXBlRm9vZFNlbGVjdGVkKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHJlc3BvbnNlSW5mbyA9IHJlc3BvbnNlSnNvbi5tZWFscztcbiAgZGlzcGxheUNvdW50ZXIodHlwZUZvb2RTZWxlY3RlZCwgcmVzcG9uc2VJbmZvLmxlbmd0aCk7XG4gIGRpc3BsYXlEYXRhKHJlc3BvbnNlSW5mbyk7XG59O1xuXG5leHBvcnQgeyBnZXRBbGxEYXRhIGFzIGRlZmF1bHQgfTtcbiIsImNvbnN0IGhpZGVuSXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZm9vZCcpO1xuICBpdGVtcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlbicpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGhpZGVuSXRlbXMgYXMgZGVmYXVsdCB9OyIsIi8vIGxpbmsgdG8gbGlrZXMgYW5kIG1lc3NhZ2Ugc3RvcmUgYXBpXG5jb25zdCBwcm9qZWN0SUQgPSAnY3E4bjR5ZG5UR2VwT0h6dFVLbVknO1xuY29uc3QgbGlrZXNMaW5rID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7cHJvamVjdElEfS9saWtlcy9gO1xuXG5leHBvcnQgY29uc3QgYWRkTGlrZVRvSXRlbSA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGxpa2VzTGluayk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBgJHtpdGVtSWR9YCB9KSxcbiAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGlrZXNUb0l0ZW1zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpa2VzTGluayk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCB7IGRpc3BsYXlDb21lbnRzLCBnZXRDb21tZW50cyB9IGZyb20gJy4vZGlzcGxheUNvbWVudHMuanMnO1xuXG4vLyBmdW5jdGlvbiB0byBwb3N0IGVsZW1lbnRcbmNvbnN0IHBvc3ROZXdNZXNzYWdlID0gYXN5bmMgKGlkLCBuYW1lLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHBvc3RNZXNzYWdlTGluayA9XG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2NxOG40eWRuVEdlcE9IenRVS21ZL2NvbW1lbnRzJztcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHBvc3RNZXNzYWdlTGluayk7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIGNvbW1lbnQ6IHRleHQsXG4gICAgfSksXG4gIH07XG5cbiAgYXdhaXQgZmV0Y2gocmVxdWVzdCwgZGF0YSk7XG4gIGNvbnN0IGFyciA9IGF3YWl0IGdldENvbW1lbnRzKGlkKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc2dDb250YWluZXInKTtcbiAgZGlzcGxheUNvbWVudHMoYXJyLCBjb250YWluZXIpO1xufTtcblxuY29uc3QgbmV3TWVzc2FnZSA9IChpZCwgdXNlciwgbWVzc2FnZSkgPT4ge1xuICBpZiAodXNlci52YWx1ZSAhPT0gJycgJiYgbWVzc2FnZS52YWx1ZSAhPT0gJycpIHtcbiAgICBwb3N0TmV3TWVzc2FnZShpZCwgdXNlci52YWx1ZSwgbWVzc2FnZS52YWx1ZSk7XG4gICAgdXNlci52YWx1ZSA9ICcnO1xuICAgIG1lc3NhZ2UudmFsdWUgPSAnJztcbiAgfVxufTtcblxuY29uc3QgbmV3TWVzc2FnZUZvcm0gPSAoY29udGFpbmVyLCBpdGVtSWQpID0+IHtcbiAgY29uc3QgZm9ybU5ld01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybU5ld01lc3NhZ2UuaW5uZXJIVE1MID0gJzxoMyBjbGFzcz1cImFsaWdDZW5lclwiPkFkZCBhIENvbW1lbnQ8L2gzPic7XG4gIGZvcm1OZXdNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc2dDb250ZW50Jyk7XG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdXNlck5hbWUudHlwZSA9ICd0ZXh0JztcbiAgdXNlck5hbWUubmFtZSA9ICd1c2VybmFtZSc7XG4gIHVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gIGNvbnN0IHRleHRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dE1lc3NhZ2UubmFtZSA9ICdjb21tZW50JztcbiAgdGV4dE1lc3NhZ2Uucm93cyA9ICc0JztcbiAgdGV4dE1lc3NhZ2UuY29scyA9ICczMCc7XG4gIHRleHRNZXNzYWdlLnBsYWNlaG9sZGVyID0gJ1lvdXIgY29tbWVudCc7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gIGJ1dHRvbi52YWx1ZSA9ICdDb21tZW50JztcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICBuZXdNZXNzYWdlKGl0ZW1JZCwgdXNlck5hbWUsIHRleHRNZXNzYWdlKVxuICApO1xuICBmb3JtTmV3TWVzc2FnZS5hcHBlbmRDaGlsZCh1c2VyTmFtZSk7XG4gIGZvcm1OZXdNZXNzYWdlLmFwcGVuZENoaWxkKHRleHRNZXNzYWdlKTtcbiAgZm9ybU5ld01lc3NhZ2UuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybU5ld01lc3NhZ2UpO1xufTtcblxuZXhwb3J0IHsgbmV3TWVzc2FnZUZvcm0gYXMgZGVmYXVsdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IGxvZ29CYWNrIGZyb20gJy4vYXNzZXRzL2Nvb2tCYW5uZXIzLmpwZyc7XG5pbXBvcnQgZ2V0QWxsRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvZ2V0RGF0YUZvb2QuanMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb3BlcmF0b3ItbGluZWJyZWFrXG5jb25zdCBbbGlCZWVmRWxlbWVudCwgbGlQYXN0YUVsZW1lbnQsIGxpU2VhZm9vZEVsZW1lbnRdID1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbmxldCB0eXBlRm9vZFNlbGVjdGVkID0gbGlCZWVmRWxlbWVudDtcblxuLy8gbGlua3MgdG8gZ2V0IGRhdGEgZnJvbSBmb29kIGFwaVxuY29uc3QgYWxsQmVlZlVSTCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPUJlZWYnO1xuY29uc3QgYWxsUGFzdGFVUkwgPSBgXG4gIGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2M9cGFzdGFgO1xuY29uc3QgYWxsU2VhZm9vZFVSTCA9IGBcbiAgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz1TZWFmb29kYDtcblxubGlCZWVmRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdHlwZUZvb2RTZWxlY3RlZCA9IGxpQmVlZkVsZW1lbnQ7XG4gIGxpQmVlZkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgbGlQYXN0YUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgbGlTZWFmb29kRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB0eXBlRm9vZFNlbGVjdGVkLnRleHRDb250ZW50ID0gJ0JlZWYnO1xuICBsaVBhc3RhRWxlbWVudC50ZXh0Q29udGVudCA9ICdQYXN0YSc7XG4gIGxpU2VhZm9vZEVsZW1lbnQudGV4dENvbnRlbnQgPSAnU2VhZm9vZCc7XG4gIGdldEFsbERhdGEoYWxsQmVlZlVSTCwgdHlwZUZvb2RTZWxlY3RlZCk7XG59KTtcblxubGlQYXN0YUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHR5cGVGb29kU2VsZWN0ZWQgPSBsaVBhc3RhRWxlbWVudDtcbiAgbGlQYXN0YUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgbGlCZWVmRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICBsaVNlYWZvb2RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIHR5cGVGb29kU2VsZWN0ZWQudGV4dENvbnRlbnQgPSAnUGFzdGEnO1xuICBsaUJlZWZFbGVtZW50LnRleHRDb250ZW50ID0gJ0JlZWYnO1xuICBsaVNlYWZvb2RFbGVtZW50LnRleHRDb250ZW50ID0gJ1NlYWZvb2QnO1xuICBnZXRBbGxEYXRhKGFsbFBhc3RhVVJMLCB0eXBlRm9vZFNlbGVjdGVkKTtcbn0pO1xuXG5saVNlYWZvb2RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0eXBlRm9vZFNlbGVjdGVkID0gbGlTZWFmb29kRWxlbWVudDtcbiAgbGlTZWFmb29kRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICBsaUJlZWZFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIGxpUGFzdGFFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIHR5cGVGb29kU2VsZWN0ZWQudGV4dENvbnRlbnQgPSAnU2VhZm9vZCc7XG4gIGxpQmVlZkVsZW1lbnQudGV4dENvbnRlbnQgPSAnQmVlZic7XG4gIGxpUGFzdGFFbGVtZW50LnRleHRDb250ZW50ID0gJ1Bhc3RhJztcbiAgZ2V0QWxsRGF0YShhbGxTZWFmb29kVVJMLCB0eXBlRm9vZFNlbGVjdGVkKTtcbn0pO1xuXG5nZXRBbGxEYXRhKGFsbEJlZWZVUkwsIHR5cGVGb29kU2VsZWN0ZWQpO1xuXG4vLyBsb2dvIGltbWFnZSBjcmVhdGVcbi8vIGNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpO1xuLy8gbG9nb0ltYWdlLnNyYyA9IGxvZ29CYWNrO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9