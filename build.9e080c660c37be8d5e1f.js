/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nbody {\n  padding: 32px 24px 48px 24px;\n}\n\nh1 {\n  text-align: center;\n  padding: 0px 0 48px 0;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.body-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.showcase {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.showcase-row {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(768px / 2), 1fr));\n  row-gap: 40px;\n}\n\n.showcase-item {\n  display: grid;\n  place-items: center;\n}\n\n.container {\n  width: 100%;\n}\n\n.container > * {\n  text-align: center;\n  margin: 0 auto;\n}\n\n/* Dropdown */\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown-1 {\n  width: 300px;\n  display: flex;\n  align-items: center;\n  background-color: rgb(51, 154, 240);\n  color: white;\n  font-weight: 500;\n  padding: 16px 24px;\n  cursor: pointer;\n}\n\n.dropdown .arrow {\n  margin-left: auto;\n  font-size: 1.4rem;\n}\n\n.dropdown-menu {\n  width: 100%;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  z-index: 1;\n}\n\n.dropdown-menu-1 {\n  top: calc(100% + 8px);\n}\n\n.dropdown-menu-animated {\n  transition: all;\n  transform: translateY(-60px);\n  visibility: hidden;\n  opacity: 0;\n}\n\n.dropdown-menu-animated.open {\n  transform: translateY(0px);\n  opacity: 1;\n  visibility: visible;\n}\n\n.dropdown-menu-1 li {\n  font-weight: normal;\n  background-color: white;\n  color: rgb(150, 150, 150);\n  padding: 18px 24px 18px 20px;\n  border-left: 4px solid transparent;\n}\n\n.dropdown-menu-1 li.current,\n.dropdown-menu-1 li:hover {\n  border-color: rgb(51, 154, 240);\n  color: rgb(90, 90, 90);\n}\n\n.dropdown-menu-1 li:not(:last-child) {\n  border-bottom: 1px solid rgb(198, 198, 198);\n}\n\n/* Mobile Menu */\n\n.current-selected {\n  color: rgb(85, 85, 85);\n  margin-bottom: 8px;\n}\n\n.mobile-menu {\n  width: 80%;\n  background-color: white;\n}\n\n.mobile-menu > ul {\n  display: flex;\n  align-items: stretch;\n  border: 1px solid rgb(210, 210, 210);\n}\n\n.mobile-menu li {\n  padding: 12px 24px;\n  color: rgb(85, 85, 85);\n  cursor: pointer;\n  flex: 1;\n  text-align: center;\n  background-color: white;\n}\n\n.mobile-menu li:hover {\n  background-color: rgb(210, 210, 210);\n}\n\n.mobile-menu .more {\n  padding-right: 18px;\n}\n\n.mobile-menu .text {\n  display: flex;\n}\n\n.mobile-menu .down {\n  padding-left: 8px;\n  margin-left: auto;\n}\n\n.dropdown-menu-2 {\n  top: calc(100% + 8px);\n}\n\n.dropdown-menu-2 li {\n  color: rgb(150, 150, 150);\n}\n\n.dropdown-menu-2 li:hover {\n  color: inherit;\n}\n\n.dropdown-menu-2 li:not(:last-child) {\n  border-bottom: 1px solid rgb(198, 198, 198);\n}\n\n/* Carousel */\n\n.carousel {\n  position: relative;\n  overflow: hidden;\n}\n\n.carousel .image-container {\n  display: flex;\n  transition: transform 2s ease-in-out;\n}\n\n.carousel img {\n  width: 100%;\n}\n\n.carousel .arrow {\n  --padding-top: 19px;\n  --padding-bottom: 18px;\n  --padding-inner: 3px;\n  --padding-outer: 1px;\n  position: absolute;\n  background-color: rgba(220, 220, 220, 0.6);\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.carousel .arrow-left {\n  padding: var(--padding-top) var(--padding-inner) var(--padding-bottom)\n    var(--padding-outer);\n  left: 0;\n}\n\n.carousel .arrow-right {\n  padding: var(--padding-top) var(--padding-outer) var(--padding-bottom)\n    var(--padding-inner);\n  right: 0;\n}\n\n.carousel .navigation {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  bottom: 16px;\n  padding: 4px;\n  color: rgb(150, 150, 150);\n}\n\n.carousel .navigation li {\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE;wEACsE;AACxE;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,qEAAqE;EACrE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA,aAAa;;AAEb;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mCAAmC;EACnC,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,4CAA4C;EAC5C,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;;EAEE,+BAA+B;EAC/B,sBAAsB;AACxB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA,gBAAgB;;AAEhB;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,OAAO;EACP,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA,aAAa;;AAEb;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,0CAA0C;EAC1C,QAAQ;EACR,2BAA2B;EAC3B,eAAe;EACf,eAAe;AACjB;;AAEA;EACE;wBACsB;EACtB,OAAO;AACT;;AAEA;EACE;wBACsB;EACtB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nbody {\n  padding: 32px 24px 48px 24px;\n}\n\nh1 {\n  text-align: center;\n  padding: 0px 0 48px 0;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.body-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.showcase {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.showcase-row {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(768px / 2), 1fr));\n  row-gap: 40px;\n}\n\n.showcase-item {\n  display: grid;\n  place-items: center;\n}\n\n.container {\n  width: 100%;\n}\n\n.container > * {\n  text-align: center;\n  margin: 0 auto;\n}\n\n/* Dropdown */\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown-1 {\n  width: 300px;\n  display: flex;\n  align-items: center;\n  background-color: rgb(51, 154, 240);\n  color: white;\n  font-weight: 500;\n  padding: 16px 24px;\n  cursor: pointer;\n}\n\n.dropdown .arrow {\n  margin-left: auto;\n  font-size: 1.4rem;\n}\n\n.dropdown-menu {\n  width: 100%;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  z-index: 1;\n}\n\n.dropdown-menu-1 {\n  top: calc(100% + 8px);\n}\n\n.dropdown-menu-animated {\n  transition: all;\n  transform: translateY(-60px);\n  visibility: hidden;\n  opacity: 0;\n}\n\n.dropdown-menu-animated.open {\n  transform: translateY(0px);\n  opacity: 1;\n  visibility: visible;\n}\n\n.dropdown-menu-1 li {\n  font-weight: normal;\n  background-color: white;\n  color: rgb(150, 150, 150);\n  padding: 18px 24px 18px 20px;\n  border-left: 4px solid transparent;\n}\n\n.dropdown-menu-1 li.current,\n.dropdown-menu-1 li:hover {\n  border-color: rgb(51, 154, 240);\n  color: rgb(90, 90, 90);\n}\n\n.dropdown-menu-1 li:not(:last-child) {\n  border-bottom: 1px solid rgb(198, 198, 198);\n}\n\n/* Mobile Menu */\n\n.current-selected {\n  color: rgb(85, 85, 85);\n  margin-bottom: 8px;\n}\n\n.mobile-menu {\n  width: 80%;\n  background-color: white;\n}\n\n.mobile-menu > ul {\n  display: flex;\n  align-items: stretch;\n  border: 1px solid rgb(210, 210, 210);\n}\n\n.mobile-menu li {\n  padding: 12px 24px;\n  color: rgb(85, 85, 85);\n  cursor: pointer;\n  flex: 1;\n  text-align: center;\n  background-color: white;\n}\n\n.mobile-menu li:hover {\n  background-color: rgb(210, 210, 210);\n}\n\n.mobile-menu .more {\n  padding-right: 18px;\n}\n\n.mobile-menu .text {\n  display: flex;\n}\n\n.mobile-menu .down {\n  padding-left: 8px;\n  margin-left: auto;\n}\n\n.dropdown-menu-2 {\n  top: calc(100% + 8px);\n}\n\n.dropdown-menu-2 li {\n  color: rgb(150, 150, 150);\n}\n\n.dropdown-menu-2 li:hover {\n  color: inherit;\n}\n\n.dropdown-menu-2 li:not(:last-child) {\n  border-bottom: 1px solid rgb(198, 198, 198);\n}\n\n/* Carousel */\n\n.carousel {\n  position: relative;\n  overflow: hidden;\n}\n\n.carousel .image-container {\n  display: flex;\n  transition: transform 2s ease-in-out;\n}\n\n.carousel img {\n  width: 100%;\n}\n\n.carousel .arrow {\n  --padding-top: 19px;\n  --padding-bottom: 18px;\n  --padding-inner: 3px;\n  --padding-outer: 1px;\n  position: absolute;\n  background-color: rgba(220, 220, 220, 0.6);\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.carousel .arrow-left {\n  padding: var(--padding-top) var(--padding-inner) var(--padding-bottom)\n    var(--padding-outer);\n  left: 0;\n}\n\n.carousel .arrow-right {\n  padding: var(--padding-top) var(--padding-outer) var(--padding-bottom)\n    var(--padding-inner);\n  right: 0;\n}\n\n.carousel .navigation {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  bottom: 16px;\n  padding: 4px;\n  color: rgb(150, 150, 150);\n}\n\n.carousel .navigation li {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mdi/font/css/materialdesignicons.css */ "./node_modules/@mdi/font/css/materialdesignicons.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var tz_dui_components_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tz-dui-components/components/Dropdown */ "./node_modules/tz-dui-components/components/Dropdown.js");
/* harmony import */ var tz_dui_components_components_CollapsibleMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tz-dui-components/components/CollapsibleMenu */ "./node_modules/tz-dui-components/components/CollapsibleMenu.js");
/* harmony import */ var tz_dui_components_components_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tz-dui-components/components/Carousel */ "./node_modules/tz-dui-components/components/Carousel.js");
/* harmony import */ var _images_planet_jck5d_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/planet-jck5d.jpg */ "./src/images/planet-jck5d.jpg");
/* harmony import */ var _images_planet_jck5d_2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/planet-jck5d-2.jpg */ "./src/images/planet-jck5d-2.jpg");
/* harmony import */ var _images_landscape_darkmoon_art_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/landscape-darkmoon-art.jpg */ "./src/images/landscape-darkmoon-art.jpg");
/* harmony import */ var _images_lake_elg21_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/lake-elg21.jpg */ "./src/images/lake-elg21.jpg");











const dropdown = document.querySelector('.dropdown-1');
const dropdownText = dropdown.querySelector('.text');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

new tz_dui_components_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"](dropdown, dropdownMenu, {
  open: 'open',
  current: 'current',
  onSelect: (selected) => {
    dropdownText.textContent = selected.textContent;
  },
  animationDuration: '300ms',
});

const mobileMenu = document.querySelector('.mobile-menu');
const selection = document.querySelector('.selection');

const onMenuSelect = (selected) => {
  selection.textContent = selected.textContent;
};

new tz_dui_components_components_CollapsibleMenu__WEBPACK_IMPORTED_MODULE_4__["default"](mobileMenu, {
  more: 'more',
  dropdown: 'dropdown-menu dropdown-menu-animated dropdown-menu-2',
  onSelect: onMenuSelect,
  onResize: (dropdown, dropdownMenu) => {
    new tz_dui_components_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"](dropdown, dropdownMenu, {
      open: 'open',
      animationDuration: '300ms',
      onSelect: onMenuSelect,
    });
  },
});

const carousel = document.querySelector('.carousel');
new tz_dui_components_components_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"](carousel, [
  _images_planet_jck5d_jpg__WEBPACK_IMPORTED_MODULE_6__,
  _images_lake_elg21_jpg__WEBPACK_IMPORTED_MODULE_9__,
  _images_planet_jck5d_2_jpg__WEBPACK_IMPORTED_MODULE_7__,
  _images_landscape_darkmoon_art_jpg__WEBPACK_IMPORTED_MODULE_8__,
], {
  leftArrow: 'arrow-left',
  rightArrow: 'arrow-right',
  nav: 'navigation',
  navItem: 'mdi mdi-checkbox-blank-circle-outline',
  navCurrent: 'mdi mdi-checkbox-blank-circle',
});


/***/ }),

/***/ "./src/images/lake-elg21.jpg":
/*!***********************************!*\
  !*** ./src/images/lake-elg21.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lake-elg21.jpg";

/***/ }),

/***/ "./src/images/landscape-darkmoon-art.jpg":
/*!***********************************************!*\
  !*** ./src/images/landscape-darkmoon-art.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "landscape-darkmoon-art.jpg";

/***/ }),

/***/ "./src/images/planet-jck5d-2.jpg":
/*!***************************************!*\
  !*** ./src/images/planet-jck5d-2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "planet-jck5d-2.jpg";

/***/ }),

/***/ "./src/images/planet-jck5d.jpg":
/*!*************************************!*\
  !*** ./src/images/planet-jck5d.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "planet-jck5d.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"build": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktop_dynamic_ui"] = self["webpackChunktop_dynamic_ui"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_mdi_font_css_materialdesignicons_css-node_modules_normalize_css_normaliz-005875"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtZHluYW1pYy11aS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvcC1keW5hbWljLXVpLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b3AtZHluYW1pYy11aS8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9wLWR5bmFtaWMtdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLWR5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b3AtZHluYW1pYy11aS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtZHluYW1pYy11aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLWR5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtZHluYW1pYy11aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1keW5hbWljLXVpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLWR5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLWR5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLWR5bmFtaWMtdWkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1keW5hbWljLXVpL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLWR5bmFtaWMtdWkvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC1keW5hbWljLXVpL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMzJweCAyNHB4IDQ4cHggMjRweDtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDAgNDhweCAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9keS13cmFwIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zaG93Y2FzZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uc2hvd2Nhc2Utcm93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2FsYyg3NjhweCAvIDIpLCAxZnIpKTtcXG4gIHJvdy1nYXA6IDQwcHg7XFxufVxcblxcbi5zaG93Y2FzZS1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyID4gKiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogRHJvcGRvd24gKi9cXG5cXG4uZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcGRvd24tMSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTU0LCAyNDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duIC5hcnJvdyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LTEge1xcbiAgdG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudS1hbmltYXRlZCB7XFxuICB0cmFuc2l0aW9uOiBhbGw7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwcHgpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtYW5pbWF0ZWQub3BlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudS0xIGxpIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICBwYWRkaW5nOiAxOHB4IDI0cHggMThweCAyMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtMSBsaS5jdXJyZW50LFxcbi5kcm9wZG93bi1tZW51LTEgbGk6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNTEsIDE1NCwgMjQwKTtcXG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LTEgbGk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5OCwgMTk4LCAxOTgpO1xcbn1cXG5cXG4vKiBNb2JpbGUgTWVudSAqL1xcblxcbi5jdXJyZW50LXNlbGVjdGVkIHtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5tb2JpbGUtbWVudSB7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2JpbGUtbWVudSA+IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcXG59XFxuXFxuLm1vYmlsZS1tZW51IGxpIHtcXG4gIHBhZGRpbmc6IDEycHggMjRweDtcXG4gIGNvbG9yOiByZ2IoODUsIDg1LCA4NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2JpbGUtbWVudSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxufVxcblxcbi5tb2JpbGUtbWVudSAubW9yZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUgLnRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vYmlsZS1tZW51IC5kb3duIHtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kcm9wZG93bi1tZW51LTIge1xcbiAgdG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudS0yIGxpIHtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LTIgbGk6aG92ZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LTIgbGk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5OCwgMTk4LCAxOTgpO1xcbn1cXG5cXG4vKiBDYXJvdXNlbCAqL1xcblxcbi5jYXJvdXNlbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmltYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2Fyb3VzZWwgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmFycm93IHtcXG4gIC0tcGFkZGluZy10b3A6IDE5cHg7XFxuICAtLXBhZGRpbmctYm90dG9tOiAxOHB4O1xcbiAgLS1wYWRkaW5nLWlubmVyOiAzcHg7XFxuICAtLXBhZGRpbmctb3V0ZXI6IDFweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAyMjAsIDIyMCwgMC42KTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLmFycm93LWxlZnQge1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3ApIHZhcigtLXBhZGRpbmctaW5uZXIpIHZhcigtLXBhZGRpbmctYm90dG9tKVxcbiAgICB2YXIoLS1wYWRkaW5nLW91dGVyKTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5jYXJvdXNlbCAuYXJyb3ctcmlnaHQge1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy10b3ApIHZhcigtLXBhZGRpbmctb3V0ZXIpIHZhcigtLXBhZGRpbmctYm90dG9tKVxcbiAgICB2YXIoLS1wYWRkaW5nLWlubmVyKTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLm5hdmlnYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBib3R0b206IDE2cHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLm5hdmlnYXRpb24gbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5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InNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAzMnB4IDI0cHggNDhweCAyNHB4O1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMCA0OHB4IDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5ib2R5LXdyYXAge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNob3djYXNlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5zaG93Y2FzZS1yb3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjYWxjKDc2OHB4IC8gMiksIDFmcikpO1xcbiAgcm93LWdhcDogNDBweDtcXG59XFxuXFxuLnNob3djYXNlLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIgPiAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBEcm9wZG93biAqL1xcblxcbi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wZG93bi0xIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTQsIDI0MCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHJvcGRvd24gLmFycm93IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5kcm9wZG93bi1tZW51IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtMSB7XFxuICB0b3A6IGNhbGMoMTAwJSArIDhweCk7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LWFuaW1hdGVkIHtcXG4gIHRyYW5zaXRpb246IGFsbDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjBweCk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudS1hbmltYXRlZC5vcGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LTEgbGkge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG4gIHBhZGRpbmc6IDE4cHggMjRweCAxOHB4IDIwcHg7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudS0xIGxpLmN1cnJlbnQsXFxuLmRyb3Bkb3duLW1lbnUtMSBsaTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHJnYig1MSwgMTU0LCAyNDApO1xcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtMSBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk4LCAxOTgsIDE5OCk7XFxufVxcblxcbi8qIE1vYmlsZSBNZW51ICovXFxuXFxuLmN1cnJlbnQtc2VsZWN0ZWQge1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLm1vYmlsZS1tZW51IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vYmlsZS1tZW51ID4gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUgbGkge1xcbiAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vYmlsZS1tZW51IGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG59XFxuXFxuLm1vYmlsZS1tZW51IC5tb3JlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XFxufVxcblxcbi5tb2JpbGUtbWVudSAudGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUgLmRvd24ge1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtMiB7XFxuICB0b3A6IGNhbGMoMTAwJSArIDhweCk7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LTIgbGkge1xcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtMiBsaTpob3ZlciB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtMiBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk4LCAxOTgsIDE5OCk7XFxufVxcblxcbi8qIENhcm91c2VsICovXFxuXFxuLmNhcm91c2VsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jYXJvdXNlbCAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJvdXNlbCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJvdXNlbCAuYXJyb3cge1xcbiAgLS1wYWRkaW5nLXRvcDogMTlweDtcXG4gIC0tcGFkZGluZy1ib3R0b206IDE4cHg7XFxuICAtLXBhZGRpbmctaW5uZXI6IDNweDtcXG4gIC0tcGFkZGluZy1vdXRlcjogMXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjYpO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbCAuYXJyb3ctbGVmdCB7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRvcCkgdmFyKC0tcGFkZGluZy1pbm5lcikgdmFyKC0tcGFkZGluZy1ib3R0b20pXFxuICAgIHZhcigtLXBhZGRpbmctb3V0ZXIpO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLmNhcm91c2VsIC5hcnJvdy1yaWdodCB7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXRvcCkgdmFyKC0tcGFkZGluZy1vdXRlcikgdmFyKC0tcGFkZGluZy1ib3R0b20pXFxuICAgIHZhcigtLXBhZGRpbmctaW5uZXIpO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5jYXJvdXNlbCAubmF2aWdhdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIGJvdHRvbTogMTZweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcblxcbi5jYXJvdXNlbCAubmF2aWdhdGlvbiBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnQG1kaS9mb250L2Nzcy9tYXRlcmlhbGRlc2lnbmljb25zLmNzcyc7XG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3R6LWR1aS1jb21wb25lbnRzL2NvbXBvbmVudHMvRHJvcGRvd24nO1xuaW1wb3J0IENvbGxhcHNpYmxlTWVudSBmcm9tICd0ei1kdWktY29tcG9uZW50cy9jb21wb25lbnRzL0NvbGxhcHNpYmxlTWVudSc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAndHotZHVpLWNvbXBvbmVudHMvY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgcGxhbmV0SW1nIGZyb20gJy4vaW1hZ2VzL3BsYW5ldC1qY2s1ZC5qcGcnO1xuaW1wb3J0IHBsYW5ldEltZzIgZnJvbSAnLi9pbWFnZXMvcGxhbmV0LWpjazVkLTIuanBnJztcbmltcG9ydCBsYW5kc2NhcGVJbWcgZnJvbSAnLi9pbWFnZXMvbGFuZHNjYXBlLWRhcmttb29uLWFydC5qcGcnO1xuaW1wb3J0IGxha2VJbWcgZnJvbSAnLi9pbWFnZXMvbGFrZS1lbGcyMS5qcGcnO1xuXG5jb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi0xJyk7XG5jb25zdCBkcm9wZG93blRleHQgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xuY29uc3QgZHJvcGRvd25NZW51ID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKTtcblxubmV3IERyb3Bkb3duKGRyb3Bkb3duLCBkcm9wZG93bk1lbnUsIHtcbiAgb3BlbjogJ29wZW4nLFxuICBjdXJyZW50OiAnY3VycmVudCcsXG4gIG9uU2VsZWN0OiAoc2VsZWN0ZWQpID0+IHtcbiAgICBkcm9wZG93blRleHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcbiAgfSxcbiAgYW5pbWF0aW9uRHVyYXRpb246ICczMDBtcycsXG59KTtcblxuY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudScpO1xuY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbicpO1xuXG5jb25zdCBvbk1lbnVTZWxlY3QgPSAoc2VsZWN0ZWQpID0+IHtcbiAgc2VsZWN0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XG59O1xuXG5uZXcgQ29sbGFwc2libGVNZW51KG1vYmlsZU1lbnUsIHtcbiAgbW9yZTogJ21vcmUnLFxuICBkcm9wZG93bjogJ2Ryb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1hbmltYXRlZCBkcm9wZG93bi1tZW51LTInLFxuICBvblNlbGVjdDogb25NZW51U2VsZWN0LFxuICBvblJlc2l6ZTogKGRyb3Bkb3duLCBkcm9wZG93bk1lbnUpID0+IHtcbiAgICBuZXcgRHJvcGRvd24oZHJvcGRvd24sIGRyb3Bkb3duTWVudSwge1xuICAgICAgb3BlbjogJ29wZW4nLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICczMDBtcycsXG4gICAgICBvblNlbGVjdDogb25NZW51U2VsZWN0LFxuICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XG5uZXcgQ2Fyb3VzZWwoY2Fyb3VzZWwsIFtcbiAgcGxhbmV0SW1nLFxuICBsYWtlSW1nLFxuICBwbGFuZXRJbWcyLFxuICBsYW5kc2NhcGVJbWcsXG5dLCB7XG4gIGxlZnRBcnJvdzogJ2Fycm93LWxlZnQnLFxuICByaWdodEFycm93OiAnYXJyb3ctcmlnaHQnLFxuICBuYXY6ICduYXZpZ2F0aW9uJyxcbiAgbmF2SXRlbTogJ21kaSBtZGktY2hlY2tib3gtYmxhbmstY2lyY2xlLW91dGxpbmUnLFxuICBuYXZDdXJyZW50OiAnbWRpIG1kaS1jaGVja2JveC1ibGFuay1jaXJjbGUnLFxufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1aWxkXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvcF9keW5hbWljX3VpXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvcF9keW5hbWljX3VpXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21kaV9mb250X2Nzc19tYXRlcmlhbGRlc2lnbmljb25zX2Nzcy1ub2RlX21vZHVsZXNfbm9ybWFsaXplX2Nzc19ub3JtYWxpei0wMDU4NzVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=