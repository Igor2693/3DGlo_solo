/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_reg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules//reg */ \"./src/modules/reg.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('1 august 2025')\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_reg__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\n\n//# sourceURL=webpack://3dglo_solo/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const links = menu.querySelectorAll('ul > li > a')\r\n\r\n\r\n    const menuActive = () => {\r\n        if (!menu.style.transform) {\r\n            document.body.style.overflow = 'hidden'\r\n            menu.style.transform = `translateX(50%)`\r\n        } else {\r\n            menu.style.transform = ''\r\n            document.body.style.overflow = ''\r\n        }\r\n    }\r\n\r\n    menuBtn.addEventListener('click', menuActive)\r\n\r\n    closeBtn.addEventListener('click', menuActive)\r\n\r\n    links.forEach(function (link) {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n\r\n            if (!menu.style.transform) {\r\n                document.body.style.overflow = 'hidden'\r\n                menu.style.transform = `translateX(50%)`\r\n            } else {\r\n                menu.style.transform = ''\r\n                document.body.style.overflow = ''\r\n            }\r\n            const block = event.target.getAttribute('href').substr(1)\r\n\r\n            document.getElementById(block).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            })\r\n\r\n        })\r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo_solo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst popup = () => {\r\n    const links = document.querySelectorAll('.popup-btn')\r\n    const modal = document.querySelector('.popup')\r\n    const closeBtn = modal.querySelector('.popup-close')\r\n\r\n    const media = window.matchMedia('(min-width: 768px)')\r\n    console.log(media);\r\n\r\n\r\n\r\n\r\n    let count = 0\r\n    let idAnimation\r\n\r\n    if (media.matches) {\r\n        links.forEach(function (item) {\r\n            item.addEventListener('click', () => {\r\n\r\n                const modalOn = () => {\r\n                    count++\r\n                    idAnimation = requestAnimationFrame(modalOn)\r\n                    console.log(count);\r\n                    modal.style.display = 'block'\r\n\r\n                    if (count < 100) {\r\n                        modal.style.opacity = count * 2 + '%'\r\n                        console.log(count);\r\n\r\n                    } else {\r\n                        cancelAnimationFrame(idAnimation)\r\n                    }\r\n                }\r\n                modalOn()\r\n            })\r\n        })\r\n\r\n\r\n        closeBtn.addEventListener('click', () => {\r\n\r\n\r\n            const modalOff = () => {\r\n                count--\r\n                idAnimation = requestAnimationFrame(modalOff)\r\n                console.log(count);\r\n\r\n\r\n                if (count > 0) {\r\n                    modal.style.opacity = count + '%'\r\n                    console.log(count);\r\n\r\n                } else {\r\n                    cancelAnimationFrame(idAnimation)\r\n                    modal.style.display = 'none'\r\n\r\n                }\r\n            }\r\n            modalOff()\r\n\r\n        })\r\n\r\n\r\n    } else {\r\n        links.forEach(function (btn) {\r\n            btn.addEventListener('click', () => {\r\n                if (modal.style.display = 'none') {\r\n                    modal.style.display = 'block'\r\n                }\r\n            })\r\n\r\n        })\r\n\r\n        closeBtn.addEventListener('click', () => {\r\n            modal.style.display = 'none'\r\n        })\r\n\r\n\r\n    }\r\n\r\n    // links.forEach(function (item) {\r\n    //     item.addEventListener('click', () => {\r\n\r\n    //         const modalOn = () => {\r\n    //             count++\r\n    //             idAnimation = requestAnimationFrame(modalOn)\r\n    //             console.log(count);\r\n    //             modal.style.display = 'block'\r\n\r\n    //             if (count < 100) {\r\n    //                 modal.style.opacity = count * 2 + '%'\r\n    //                 console.log(count);\r\n\r\n    //             } else {\r\n    //                 cancelAnimationFrame(idAnimation)\r\n    //             }\r\n    //         }\r\n    //         modalOn()\r\n    //     })\r\n    // })\r\n\r\n    // closeBtn.addEventListener('click', () => {\r\n\r\n\r\n    //     const modalOff = () => {\r\n    //         count--\r\n    //         idAnimation = requestAnimationFrame(modalOff)\r\n    //         console.log(count);\r\n\r\n\r\n    //         if (count > 0) {\r\n    //             modal.style.opacity = count + '%'\r\n    //             console.log(count);\r\n\r\n    //         } else {\r\n    //             cancelAnimationFrame(idAnimation)\r\n    //             modal.style.display = 'none'\r\n\r\n    //         }\r\n    //     }\r\n    //     modalOff()\r\n\r\n\r\n\r\n    //     // modal.style.display = 'none'\r\n    // })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://3dglo_solo/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/reg.js":
/*!****************************!*\
  !*** ./src/modules/reg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst reg = () => {\r\n    const inputItem = document.querySelectorAll('input.calc-item')\r\nconst selectItem = document.querySelector('select.calc-item')\r\n\r\nconst formName = document.querySelectorAll('[name=user_name]')\r\nconst formEmail = document.querySelectorAll('[name=user_email]')\r\nconst formPhone = document.querySelectorAll('[name=user_phone]')\r\n\r\ninputItem.forEach(function(item) {\r\n    item.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d]/g, '')\r\n    })\r\n})\r\n\r\nselectItem.addEventListener('input', () => {\r\n    console.log(selectItem.options[selectItem.selectedIndex].textContent);\r\n})\r\n\r\nformName.forEach(function(name){\r\n    name.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-я\\s\\-]/gi, '')\r\n    })\r\n})\r\nformEmail.forEach(function(email){\r\n    email.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\w\\d\\@\\-\\_\\.\\!\\~\\*\\']/gi, '')\r\n    })\r\n})\r\nformPhone.forEach(function(phone){\r\n    phone.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-]/g, '')\r\n    })\r\n})\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reg);\n\n//# sourceURL=webpack://3dglo_solo/./src/modules/reg.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst scroll = () => {\r\n\r\n    const scrollLink = document.getElementById('scroll_link')\r\n\r\n\r\n    scrollLink.addEventListener('click', (event) => {\r\n        event.preventDefault()\r\n\r\n        const block = event.target.getAttribute('href').substr(1)\r\n\r\n        document.getElementById(block).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n\r\n    })\r\n\r\n\r\n\r\n    // const scrollImg = document.querySelector('.img_scroll')\r\n    // let count = 0\r\n    // let idAnimation\r\n\r\n    // попытка через requestAnimationFrame\r\n\r\n    // const animationScroll = () => {\r\n    //     count++\r\n    //     idAnimation = requestAnimationFrame(animationScroll)\r\n\r\n    //     if (document.documentElement.scrollTop <= 776) {\r\n\r\n    //         document.documentElement.scrollTop = (count * 10)\r\n    //     } else {\r\n    //         cancelAnimationFrame(idAnimation)\r\n    //         count = 0\r\n\r\n    //     }\r\n\r\n    // }\r\n\r\n    // Через scrollTo\r\n\r\n    // scrollImg.addEventListener('click', () => {\r\n    //     // animationScroll()\r\n    //     window.scrollTo({\r\n    //         top: 776,\r\n    //         left: 0,\r\n    //         behavior: \"smooth\"\r\n    //     })\r\n\r\n\r\n    // })\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://3dglo_solo/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline) => {\r\n    let hoursTimer = document.getElementById('timer-hours')\r\n    let minutesTimer = document.getElementById('timer-minutes')\r\n    let secondsTimer = document.getElementById('timer-seconds')\r\n    let daysTimer = document.getElementById('timer-days')\r\n\r\n\r\n    let idInterval\r\n    let zero = '0'\r\n\r\n    const logger = () => {\r\n        let dedline = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let dateTimer = (dedline - dateNow) / 1000\r\n        // console.log(dateTimer);\r\n\r\n        let seconds = Math.floor(dateTimer % 60)\r\n        let minutes = Math.floor((dateTimer / 60) % 60)\r\n        let hours = Math.floor((dateTimer / 60 / 60) % 24)\r\n        let days = Math.floor((dateTimer / 60 / 60 / 24))\r\n        // console.log(days);\r\n\r\n        return { dateTimer, days, hours, minutes, seconds }\r\n\r\n        // secondsTimer.textContent = seconds\r\n        // minutesTimer.textContent = minutes\r\n        // hoursTimer.textContent = hours\r\n        // daysTimer.textContent = days\r\n\r\n        if (secondsTimer.textContent.length === 1) {\r\n            secondsTimer.textContent = zero + seconds\r\n        }\r\n        if (minutesTimer.textContent.length === 1) {\r\n            minutesTimer.textContent = zero + minutes\r\n        }\r\n        if (hoursTimer.textContent.length === 1) {\r\n            hoursTimer.textContent = zero + hours\r\n        }\r\n        if (daysTimer.textContent.length === 1) {\r\n            daysTimer.textContent = zero + days\r\n        }\r\n\r\n        if (dedline < dateNow) {\r\n            clearInterval(idInterval)\r\n            secondsTimer.textContent = '00'\r\n            minutesTimer.textContent = '00'\r\n            hoursTimer.textContent = '00'\r\n        }\r\n\r\n    }\r\n\r\n\r\n    const countTimer = () => {\r\n        const getTime = logger()\r\n\r\n        secondsTimer.textContent = getTime.seconds\r\n        minutesTimer.textContent = getTime.minutes\r\n        hoursTimer.textContent = getTime.hours\r\n        daysTimer.textContent = getTime.days\r\n\r\n\r\n        if (secondsTimer.textContent.length === 1) {\r\n            secondsTimer.textContent = '0' + getTime.seconds\r\n        }\r\n        if (minutesTimer.textContent.length === 1) {\r\n            minutesTimer.textContent = '0' + getTime.minutes\r\n        }\r\n        if (hoursTimer.textContent.length === 1) {\r\n            hoursTimer.textContent = '0' + getTime.hours\r\n        }\r\n        if (daysTimer.textContent.length === 1) {\r\n            daysTimer.textContent = '0' + getTime.days\r\n        }\r\n\r\n        if (getTime.dateTimer < 0) {\r\n            clearInterval(idInterval)\r\n            secondsTimer.textContent = '00'\r\n            minutesTimer.textContent = '00'\r\n            hoursTimer.textContent = '00'\r\n        }\r\n\r\n        idInterval = setInterval(countTimer, 1000)\r\n    }\r\n    countTimer()\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3dglo_solo/./src/modules/timer.js?");

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