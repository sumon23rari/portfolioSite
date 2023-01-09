webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var _contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/drawer/drawer.context */ "./src/contexts/drawer/drawer.context.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/css/Home.module.css */ "./public/css/Home.module.css");
/* harmony import */ var _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_projects_img1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/projects/img1.jpg */ "./src/assets/projects/img1.jpg");
/* harmony import */ var _assets_projects_img1_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_projects_img1_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_projects_img2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/projects/img2.jpg */ "./src/assets/projects/img2.jpg");
/* harmony import */ var _assets_projects_img2_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_projects_img2_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_projects_img3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/projects/img3.png */ "./src/assets/projects/img3.png");
/* harmony import */ var _assets_projects_img3_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_projects_img3_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_projects_img4_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/projects/img4.jpg */ "./src/assets/projects/img4.jpg");
/* harmony import */ var _assets_projects_img4_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_projects_img4_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_projects_img5_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/projects/img5.jpg */ "./src/assets/projects/img5.jpg");
/* harmony import */ var _assets_projects_img5_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_projects_img5_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_projects_img6_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/projects/img6.jpg */ "./src/assets/projects/img6.jpg");
/* harmony import */ var _assets_projects_img6_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_projects_img6_jpg__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\HP\\Desktop\\005-agency-modern-next\\src\\components\\header\\mobile-drawer.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var social = [{
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaGithubAlt"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaDribbble"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })
}];

var MobileDrawer = function MobileDrawer() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdMenu"], {
      size: "26px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdClose"], {
      size: "24px",
      color: "#000000",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    sx: styles.linkds,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 34
    }
  }, "Home")), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.dropdown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("span", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.dropbtn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, "projects", __jsx("span", {
    className: _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.caretdown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, "   ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCaretDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }))), __jsx("div", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.resdropdowncontent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("div", {
    sx: styles.column,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.rescont,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "Category 2"), __jsx("img", {
    src: _assets_projects_img1_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "image1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: _assets_projects_img2_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "image2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })), __jsx("div", {
    sx: styles.column,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.rescont,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "Category 2")), __jsx("div", {
    sx: styles.column,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.rescont,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Category 3"))))), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 2
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Blogs/Blogs",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, "blogs"), " "), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 3
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Features/Features",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 26
    }
  }, "Features")), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 3
    }
  }, " ", __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Testimonial/Testimonial",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 27
    }
  }, "Testimonial")), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 3
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Pricing/Pricing",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 26
    }
  }, "Pricing"))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, social.map(function (_ref, i) {
    var path = _ref.path,
        icon = _ref.icon;
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "span",
      key: i,
      sx: styles.social.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 19
      }
    }, icon));
  }))))));
};

_s(MobileDrawer, "OqcrJSEs/Z0UdNNMJwJDY0ChobM=");

_c = MobileDrawer;
var styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#222',
      py: '15px',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  linkds: {
    textDecoration: "none",
    color: 'red'
  },
  column: {
    width: '100%',
    border: "none"
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

var _c;

$RefreshReg$(_c, "MobileDrawer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0b2dnbGVIYW5kbGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJzdHlsZXMiLCJoYW5kbGVyIiwiaXNPcGVuIiwiZHJhd2VyIiwiY2xvc2UiLCJjb250ZW50IiwibWVudSIsIkhvbWUiLCJsaXN0ZCIsImxpbmtkcyIsImRyb3Bkb3duIiwiZHJvcGJ0biIsImNhcmV0ZG93biIsInJlc2Ryb3Bkb3duY29udGVudCIsInJvdyIsImNvbHVtbiIsInJlc2NvbnQiLCJpbWFnZTEiLCJpbWFnZTIiLCJtZW51Rm9vdGVyIiwibWFwIiwiaSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4U2hyaW5rIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiY3Vyc29yIiwiZmxleERpcmVjdGlvbiIsInB0IiwicGIiLCJweCIsImEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInB5IiwidGV4dERlY29yYXRpb24iLCJib3JkZXJCb3R0b20iLCJ0cmFuc2l0aW9uIiwiYm9yZGVyIiwibXQiLCJtciIsImJ1dHRvbiIsImZ3IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsTUFBTSxHQUFHLENBQ2I7QUFDRUMsTUFBSSxFQUFF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O0FBRUpDLGdCQUFVLEVBQUUsUUFGUjtBQUdKQyxvQkFBYyxFQUFFLFFBSFo7QUFJSmlCLFdBQUssRUFBRSxNQUpIO0FBS0pGLGNBQVEsRUFBRSxFQUxOO0FBTUpTLFFBQUUsRUFBRSxNQU5BO0FBT0pILGdCQUFVLEVBQUUsV0FQUjtBQVFKWixZQUFNLEVBQUUsU0FSSjtBQVNKLHFCQUFlO0FBQ2JlLFVBQUUsRUFBRTtBQURTLE9BVFg7QUFZSixpQkFBVztBQUNUUCxhQUFLLEVBQUU7QUFERTtBQVpQO0FBTkEsR0E5RUs7QUFzR2JRLFFBQU0sRUFBRTtBQUNOUixTQUFLLEVBQUUsT0FERDtBQUVORixZQUFRLEVBQUUsTUFGSjtBQUdOVyxNQUFFLEVBQUUsS0FIRTtBQUlOdkIsVUFBTSxFQUFFLE1BSkY7QUFLTndCLGdCQUFZLEVBQUUsS0FMUjtBQU1ObEIsVUFBTSxFQUFFLFNBTkY7QUFPTlAsU0FBSyxFQUFFLE1BUEQ7QUFRTkosV0FBTyxFQUFFLE1BUkg7QUFTTkMsY0FBVSxFQUFFLFFBVE47QUFVTkMsa0JBQWMsRUFBRSxRQVZWO0FBV05rQixNQUFFLEVBQUU7QUFYRTtBQXRHSyxDQUFmO0FBcUhlbkQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmM2Y2M5MmRkYzdiNWYwZjA5ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dCc7XG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgRmFDYXJldERvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvY3NzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgaW1hZ2UxIGZyb20gJy4uLy4uL2Fzc2V0cy9wcm9qZWN0cy9pbWcxLmpwZyc7XG5pbXBvcnQgaW1hZ2UyIGZyb20gJy4uLy4uL2Fzc2V0cy9wcm9qZWN0cy9pbWcyLmpwZyc7XG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uLy4uL2Fzc2V0cy9wcm9qZWN0cy9pbWczLnBuZyc7XG5pbXBvcnQgaW1hZ2U0IGZyb20gJy4uLy4uL2Fzc2V0cy9wcm9qZWN0cy9pbWc0LmpwZyc7XG5pbXBvcnQgaW1hZ2U1IGZyb20gJy4uLy4uL2Fzc2V0cy9wcm9qZWN0cy9pbWc1LmpwZyc7XG5pbXBvcnQgaW1hZ2U2IGZyb20gJy4uLy4uL2Fzc2V0cy9wcm9qZWN0cy9pbWc2LmpwZyc7XG5pbXBvcnQge1xuICBGYUZhY2Vib29rRixcbiAgRmFUd2l0dGVyLFxuICBGYUdpdGh1YkFsdCxcbiAgRmFEcmliYmJsZSxcbn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5jb25zdCBzb2NpYWwgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhR2l0aHViQWx0IC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGljb246IDxGYURyaWJiYmxlIC8+LFxuICB9LFxuXTtcblxuY29uc3QgTW9iaWxlRHJhd2VyID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEcmF3ZXJDb250ZXh0KTtcblxuICAvLyBUb2dnbGUgZHJhd2VyXG4gIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRScsXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG5cbiBcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGFuZGxlcn0+XG4gICAgICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICB9XG4gICAgICBvcGVuPXtzdGF0ZS5pc09wZW59XG4gICAgICB0b2dnbGVIYW5kbGVyPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgY2xvc2VCdXR0b249ezxJb01kQ2xvc2Ugc2l6ZT1cIjI0cHhcIiBjb2xvcj1cIiMwMDAwMDBcIiAvPn1cbiAgICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxuICAgICAgY2xvc2VCdG5TdHlsZT17c3R5bGVzLmNsb3NlfVxuICAgID5cbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgIDxsaSBjbGFzcz17SG9tZS5saXN0ZH0+PExpbmsgc3g9e3N0eWxlcy5saW5rZHN9IGhyZWY9Jy8nPkhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9e0hvbWUuZHJvcGRvd259PlxuICAgIDxzcGFuIGNsYXNzPXtIb21lLmRyb3BidG59PnByb2plY3RzXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtIb21lLmNhcmV0ZG93bn0+ICAgPEZhQ2FyZXREb3duPjwvRmFDYXJldERvd24+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8ZGl2ICBjbGFzcz17SG9tZS5yZXNkcm9wZG93bmNvbnRlbnR9PlxuICAgICAgPGRpdiBjbGFzcz17SG9tZS5yb3d9PlxuICAgICAgICA8ZGl2IHN4PXtzdHlsZXMuY29sdW1ufSA+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e0hvbWUucmVzY29udH0+Q2F0ZWdvcnkgMjwvaDM+XG4gICAgICAgIDxpbWcgIHNyYz17aW1hZ2UxfSAgYWx0PVwiaW1hZ2UxXCIgLz5cbiAgICAgICAgPGltZyAgIHNyYz17aW1hZ2UyfSBhbHQ9XCJpbWFnZTJcIiAvPlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3g9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0hvbWUucmVzY29udH0+Q2F0ZWdvcnkgMjwvaDM+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzeD17c3R5bGVzLmNvbHVtbn0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17SG9tZS5yZXNjb250fT5DYXRlZ29yeSAzPC9oMz5cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuIDxsaSBjbGFzcz17SG9tZS5saXN0ZH0+PExpbmsgIGhyZWY9Jy9CbG9ncy9CbG9ncycgc3g9e3N0eWxlcy5saW5rZHN9PmJsb2dzPC9MaW5rPiA8L2xpPlxuICA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PjxMaW5rIGhyZWY9Jy9GZWF0dXJlcy9GZWF0dXJlcycgc3g9e3N0eWxlcy5saW5rZHN9PkZlYXR1cmVzPC9MaW5rPjwvbGk+XG4gIDxsaSBjbGFzcz17SG9tZS5saXN0ZH0+IDxMaW5rIGhyZWY9Jy9UZXN0aW1vbmlhbC9UZXN0aW1vbmlhbCcgc3g9e3N0eWxlcy5saW5rZHN9PlRlc3RpbW9uaWFsPC9MaW5rPjwvbGk+XG4gIDxsaSBjbGFzcz17SG9tZS5saXN0ZH0+PExpbmsgaHJlZj0nL1ByaWNpbmcvUHJpY2luZycgc3g9e3N0eWxlcy5saW5rZHN9PlByaWNpbmc8L0xpbms+PC9saT5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51Rm9vdGVyfT5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWx9PlxuICAgICAgICAgICAgICB7c29jaWFsLm1hcCgoeyBwYXRoLCBpY29uIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGtleT17aX0gc3g9e3N0eWxlcy5zb2NpYWwuaWNvbn0+XG4gICAgICAgICAgICAgICAgICB7LyogPExpbmsgdG89e3BhdGh9PntpY29ufTwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwYXRofT57aWNvbn08L2E+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TY3JvbGxiYXJzPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoYW5kbGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgd2lkdGg6ICcyNnB4JyxcblxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrJyxcbiAgfSxcblxuICBjbG9zZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMjVweCcsXG4gICAgcmlnaHQ6ICczMHB4JyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcblxuICBjb250ZW50OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcHQ6ICcxMDBweCcsXG4gICAgcGI6ICc0MHB4JyxcbiAgICBweDogJzMwcHgnLFxuICB9LFxuXG4gIG1lbnU6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBjb2xvcjogJyMyMjInLFxuICAgICAgcHk6ICcxNXB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdGV4dERlY29yYXRpb246J25vbmUnLCAgICAgICAgICAgICAgIFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGlua2RzOntcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6J3JlZCdcbiAgfSxcbmNvbHVtbjp7XG4gIHdpZHRoOicxMDAlJyxcbiBib3JkZXI6XCJub25lXCJcbn0sXG5cbiAgbWVudUZvb3Rlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG10OiAnYXV0bycsXG4gIH0sXG5cbiAgc29jaWFsOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXG4gICAgaWNvbjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbXI6ICcxNXB4JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgIG1yOiAnMCcsXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBidXR0b246IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZ3OiAnNzAwJyxcbiAgICBoZWlnaHQ6ICc0NXB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBweTogJzAnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==