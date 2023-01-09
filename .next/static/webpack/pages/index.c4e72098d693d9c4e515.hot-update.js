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
  }, __jsx("img", {
    src: _assets_projects_img1_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "image1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: _assets_projects_img2_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "image2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx("div", {
    sx: styles.column,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.rescont,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Category 2")), __jsx("div", {
    sx: styles.column,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.rescont,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Category 3"))))), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 2
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Blogs/Blogs",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "blogs"), " "), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 3
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Features/Features",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 26
    }
  }, "Features")), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 3
    }
  }, " ", __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Testimonial/Testimonial",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 27
    }
  }, "Testimonial")), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 3
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Pricing/Pricing",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 26
    }
  }, "Pricing"))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
        lineNumber: 103,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0b2dnbGVIYW5kbGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJzdHlsZXMiLCJoYW5kbGVyIiwiaXNPcGVuIiwiZHJhd2VyIiwiY2xvc2UiLCJjb250ZW50IiwibWVudSIsIkhvbWUiLCJsaXN0ZCIsImxpbmtkcyIsImRyb3Bkb3duIiwiZHJvcGJ0biIsImNhcmV0ZG93biIsInJlc2Ryb3Bkb3duY29udGVudCIsInJvdyIsImNvbHVtbiIsImltYWdlMSIsImltYWdlMiIsInJlc2NvbnQiLCJtZW51Rm9vdGVyIiwibWFwIiwiaSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4U2hyaW5rIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiY3Vyc29yIiwiZmxleERpcmVjdGlvbiIsInB0IiwicGIiLCJweCIsImEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInB5IiwidGV4dERlY29yYXRpb24iLCJib3JkZXJCb3R0b20iLCJ0cmFuc2l0aW9uIiwiYm9yZGVyIiwibXQiLCJtciIsImJ1dHRvbiIsImZ3IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsTUFBTSxHQUFHLENBQ2I7QUFDRUMsTUFBSSxFQUFF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QUUsRUFMTjtBQU1KUyxRQUFFLEVBQUUsTUFOQTtBQU9KSCxnQkFBVSxFQUFFLFdBUFI7QUFRSlosWUFBTSxFQUFFLFNBUko7QUFTSixxQkFBZTtBQUNiZSxVQUFFLEVBQUU7QUFEUyxPQVRYO0FBWUosaUJBQVc7QUFDVFAsYUFBSyxFQUFFO0FBREU7QUFaUDtBQU5BLEdBOUVLO0FBc0diUSxRQUFNLEVBQUU7QUFDTlIsU0FBSyxFQUFFLE9BREQ7QUFFTkYsWUFBUSxFQUFFLE1BRko7QUFHTlcsTUFBRSxFQUFFLEtBSEU7QUFJTnZCLFVBQU0sRUFBRSxNQUpGO0FBS053QixnQkFBWSxFQUFFLEtBTFI7QUFNTmxCLFVBQU0sRUFBRSxTQU5GO0FBT05QLFNBQUssRUFBRSxNQVBEO0FBUU5KLFdBQU8sRUFBRSxNQVJIO0FBU05DLGNBQVUsRUFBRSxRQVROO0FBVU5DLGtCQUFjLEVBQUUsUUFWVjtBQVdOa0IsTUFBRSxFQUFFO0FBWEU7QUF0R0ssQ0FBZjtBQXFIZW5ELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM0ZTcyMDk4ZDY5M2Q5YzRlNTE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQnO1xuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCB7IEZhQ2FyZXREb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Nzcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IGltYWdlMSBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nMS5qcGcnO1xuaW1wb3J0IGltYWdlMiBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nMi5qcGcnO1xuaW1wb3J0IGltYWdlMyBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nMy5wbmcnO1xuaW1wb3J0IGltYWdlNCBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nNC5qcGcnO1xuaW1wb3J0IGltYWdlNSBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nNS5qcGcnO1xuaW1wb3J0IGltYWdlNiBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nNi5qcGcnO1xuaW1wb3J0IHtcbiAgRmFGYWNlYm9va0YsXG4gIEZhVHdpdHRlcixcbiAgRmFHaXRodWJBbHQsXG4gIEZhRHJpYmJibGUsXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuY29uc3Qgc29jaWFsID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGljb246IDxGYUdpdGh1YkFsdCAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFEcmliYmJsZSAvPixcbiAgfSxcbl07XG5cbmNvbnN0IE1vYmlsZURyYXdlciA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XG5cbiAgLy8gVG9nZ2xlIGRyYXdlclxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEUnLFxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuXG4gXG4gIHJldHVybiAoXG4gICAgPERyYXdlclxuICAgICAgd2lkdGg9XCIzMjBweFwiXG4gICAgICBkcmF3ZXJIYW5kbGVyPXtcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxuICAgICAgICAgIDxJb01kTWVudSBzaXplPVwiMjZweFwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgfVxuICAgICAgb3Blbj17c3RhdGUuaXNPcGVufVxuICAgICAgdG9nZ2xlSGFuZGxlcj17dG9nZ2xlSGFuZGxlcn1cbiAgICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDAwMDAwXCIgLz59XG4gICAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cbiAgICAgIGNsb3NlQnRuU3R5bGU9e3N0eWxlcy5jbG9zZX1cbiAgICA+XG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cbiAgICAgICAgICA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PjxMaW5rIHN4PXtzdHlsZXMubGlua2RzfSBocmVmPScvJz5Ib21lPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPXtIb21lLmRyb3Bkb3dufT5cbiAgICA8c3BhbiBjbGFzcz17SG9tZS5kcm9wYnRufT5wcm9qZWN0c1xuICAgIDxzcGFuIGNsYXNzTmFtZT17SG9tZS5jYXJldGRvd259PiAgIDxGYUNhcmV0RG93bj48L0ZhQ2FyZXREb3duPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICAgPGRpdiAgY2xhc3M9e0hvbWUucmVzZHJvcGRvd25jb250ZW50fT5cbiAgICAgIDxkaXYgY2xhc3M9e0hvbWUucm93fT5cbiAgICAgICAgPGRpdiBzeD17c3R5bGVzLmNvbHVtbn0gPlxuICAgICAgICA8aW1nICBzcmM9e2ltYWdlMX0gIGFsdD1cImltYWdlMVwiIC8+XG4gICAgICAgIDxpbWcgICBzcmM9e2ltYWdlMn0gYWx0PVwiaW1hZ2UyXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN4PXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtIb21lLnJlc2NvbnR9PkNhdGVnb3J5IDI8L2gzPlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3g9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0hvbWUucmVzY29udH0+Q2F0ZWdvcnkgMzwvaDM+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PjxMaW5rICBocmVmPScvQmxvZ3MvQmxvZ3MnIHN4PXtzdHlsZXMubGlua2RzfT5ibG9nczwvTGluaz4gPC9saT5cbiAgPGxpIGNsYXNzPXtIb21lLmxpc3RkfT48TGluayBocmVmPScvRmVhdHVyZXMvRmVhdHVyZXMnIHN4PXtzdHlsZXMubGlua2RzfT5GZWF0dXJlczwvTGluaz48L2xpPlxuICA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PiA8TGluayBocmVmPScvVGVzdGltb25pYWwvVGVzdGltb25pYWwnIHN4PXtzdHlsZXMubGlua2RzfT5UZXN0aW1vbmlhbDwvTGluaz48L2xpPlxuICA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PjxMaW5rIGhyZWY9Jy9QcmljaW5nL1ByaWNpbmcnIHN4PXtzdHlsZXMubGlua2RzfT5QcmljaW5nPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudUZvb3Rlcn0+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc29jaWFsfT5cbiAgICAgICAgICAgICAge3NvY2lhbC5tYXAoKHsgcGF0aCwgaWNvbiB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHRvPXtwYXRofT57aWNvbn08L0xpbms+ICovfVxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cGF0aH0+e2ljb259PC9hPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2Nyb2xsYmFycz5cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGFuZGxlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleFNocmluazogJzAnLFxuICAgIHdpZHRoOiAnMjZweCcsXG5cbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZGFyaycsXG4gIH0sXG5cbiAgY2xvc2U6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzI1cHgnLFxuICAgIHJpZ2h0OiAnMzBweCcsXG4gICAgekluZGV4OiAnMScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gIH0sXG5cbiAgY29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHB0OiAnMTAwcHgnLFxuICAgIHBiOiAnNDBweCcsXG4gICAgcHg6ICczMHB4JyxcbiAgfSxcblxuICBtZW51OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYToge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgY29sb3I6ICcjMjIyJyxcbiAgICAgIHB5OiAnMTVweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOidub25lJywgICAgICAgICAgICAgICBcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlNWU1JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGxpbmtkczp7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOidyZWQnXG4gIH0sXG5jb2x1bW46e1xuICB3aWR0aDonMTAwJScsXG4gYm9yZGVyOlwibm9uZVwiXG59LFxuXG4gIG1lbnVGb290ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJ2F1dG8nLFxuICB9LFxuXG4gIHNvY2lhbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblxuICAgIGljb246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtcjogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmdzogJzcwMCcsXG4gICAgaGVpZ2h0OiAnNDVweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHk6ICcwJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZURyYXdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=