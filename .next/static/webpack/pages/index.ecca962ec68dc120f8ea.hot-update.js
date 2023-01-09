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
  })))), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 2
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Blogs/Blogs",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, "blogs"), " "), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Features/Features",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 26
    }
  }, "Features")), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 3
    }
  }, " ", __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Testimonial/Testimonial",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 27
    }
  }, "Testimonial")), __jsx("li", {
    "class": _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 3
    }
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/Pricing/Pricing",
    sx: styles.linkds,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 26
    }
  }, "Pricing"))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0b2dnbGVIYW5kbGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJzdHlsZXMiLCJoYW5kbGVyIiwiaXNPcGVuIiwiZHJhd2VyIiwiY2xvc2UiLCJjb250ZW50IiwibWVudSIsIkhvbWUiLCJsaXN0ZCIsImxpbmtkcyIsImRyb3Bkb3duIiwiZHJvcGJ0biIsImNhcmV0ZG93biIsInJlc2Ryb3Bkb3duY29udGVudCIsInJvdyIsImNvbHVtbiIsIm1lbnVGb290ZXIiLCJtYXAiLCJpIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhTaHJpbmsiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJjdXJzb3IiLCJmbGV4RGlyZWN0aW9uIiwicHQiLCJwYiIsInB4IiwiYSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwicHkiLCJ0ZXh0RGVjb3JhdGlvbiIsImJvcmRlckJvdHRvbSIsInRyYW5zaXRpb24iLCJib3JkZXIiLCJtdCIsIm1yIiwiYnV0dG9uIiwiZnciLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxNQUFJLEVBQUUsR0FEUjtBQUVFQyxNQUFJLEVBQUUsTUFBQyww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LFVBQU0sRUFBQztBQUZELEdBakVRO0FBc0ViM0IsWUFBVSxFQUFFO0FBQ1ZPLFNBQUssRUFBRSxNQURHO0FBRVZKLFdBQU8sRUFBRSxNQUZDO0FBR1ZZLGlCQUFhLEVBQUUsUUFITDtBQUlWWCxjQUFVLEVBQUUsUUFKRjtBQUtWd0IsTUFBRSxFQUFFO0FBTE0sR0F0RUM7QUE4RWJ4RCxRQUFNLEVBQUU7QUFDTm1DLFNBQUssRUFBRSxNQUREO0FBRU5KLFdBQU8sRUFBRSxNQUZIO0FBR05DLGNBQVUsRUFBRSxRQUhOO0FBSU5DLGtCQUFjLEVBQUUsUUFKVjtBQU1OL0IsUUFBSSxFQUFFO0FBQ0o2QixhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSxFQUFFLFFBRlI7QUFHSkMsb0JBQWMsRUFBRSxRQUhaO0FBSUppQixXQUFLLEVBQUUsTUFKSDtBQUtKRixjQUFRLEVBQUUsRUFMTjtBQU1KUyxRQUFFLEVBQUUsTUFOQTtBQU9KSCxnQkFBVSxFQUFFLFdBUFI7QUFRSlosWUFBTSxFQUFFLFNBUko7QUFTSixxQkFBZTtBQUNiZSxVQUFFLEVBQUU7QUFEUyxPQVRYO0FBWUosaUJBQVc7QUFDVFAsYUFBSyxFQUFFO0FBREU7QUFaUDtBQU5BLEdBOUVLO0FBc0diUSxRQUFNLEVBQUU7QUFDTlIsU0FBSyxFQUFFLE9BREQ7QUFFTkYsWUFBUSxFQUFFLE1BRko7QUFHTlcsTUFBRSxFQUFFLEtBSEU7QUFJTnZCLFVBQU0sRUFBRSxNQUpGO0FBS053QixnQkFBWSxFQUFFLEtBTFI7QUFNTmxCLFVBQU0sRUFBRSxTQU5GO0FBT05QLFNBQUssRUFBRSxNQVBEO0FBUU5KLFdBQU8sRUFBRSxNQVJIO0FBU05DLGNBQVUsRUFBRSxRQVROO0FBVU5DLGtCQUFjLEVBQUUsUUFWVjtBQVdOa0IsTUFBRSxFQUFFO0FBWEU7QUF0R0ssQ0FBZjtBQXFIZWhELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjY2E5NjJlYzY4ZGMxMjBmOGVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQnO1xuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCB7IEZhQ2FyZXREb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Nzcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IGltYWdlMSBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nMS5qcGcnO1xuaW1wb3J0IGltYWdlMiBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nMi5qcGcnO1xuaW1wb3J0IGltYWdlMyBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nMy5wbmcnO1xuaW1wb3J0IGltYWdlNCBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nNC5qcGcnO1xuaW1wb3J0IGltYWdlNSBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nNS5qcGcnO1xuaW1wb3J0IGltYWdlNiBmcm9tICcuLi8uLi9hc3NldHMvcHJvamVjdHMvaW1nNi5qcGcnO1xuaW1wb3J0IHtcbiAgRmFGYWNlYm9va0YsXG4gIEZhVHdpdHRlcixcbiAgRmFHaXRodWJBbHQsXG4gIEZhRHJpYmJibGUsXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuY29uc3Qgc29jaWFsID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGljb246IDxGYUdpdGh1YkFsdCAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFEcmliYmJsZSAvPixcbiAgfSxcbl07XG5cbmNvbnN0IE1vYmlsZURyYXdlciA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XG5cbiAgLy8gVG9nZ2xlIGRyYXdlclxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEUnLFxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuXG4gXG4gIHJldHVybiAoXG4gICAgPERyYXdlclxuICAgICAgd2lkdGg9XCIzMjBweFwiXG4gICAgICBkcmF3ZXJIYW5kbGVyPXtcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxuICAgICAgICAgIDxJb01kTWVudSBzaXplPVwiMjZweFwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgfVxuICAgICAgb3Blbj17c3RhdGUuaXNPcGVufVxuICAgICAgdG9nZ2xlSGFuZGxlcj17dG9nZ2xlSGFuZGxlcn1cbiAgICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDAwMDAwXCIgLz59XG4gICAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cbiAgICAgIGNsb3NlQnRuU3R5bGU9e3N0eWxlcy5jbG9zZX1cbiAgICA+XG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cbiAgICAgICAgICA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PjxMaW5rIHN4PXtzdHlsZXMubGlua2RzfSBocmVmPScvJz5Ib21lPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPXtIb21lLmRyb3Bkb3dufT5cbiAgICA8c3BhbiBjbGFzcz17SG9tZS5kcm9wYnRufT5wcm9qZWN0c1xuICAgIDxzcGFuIGNsYXNzTmFtZT17SG9tZS5jYXJldGRvd259PiAgIDxGYUNhcmV0RG93bj48L0ZhQ2FyZXREb3duPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICAgPGRpdiAgY2xhc3M9e0hvbWUucmVzZHJvcGRvd25jb250ZW50fT5cbiAgICAgIDxkaXYgY2xhc3M9e0hvbWUucm93fT5cbiAgICAgICAgPGRpdiBzeD17c3R5bGVzLmNvbHVtbn0gPlxuICAgXG4gICAgICBcbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gPGxpIGNsYXNzPXtIb21lLmxpc3RkfT48TGluayAgaHJlZj0nL0Jsb2dzL0Jsb2dzJyBzeD17c3R5bGVzLmxpbmtkc30+YmxvZ3M8L0xpbms+IDwvbGk+XG4gIDxsaSBjbGFzcz17SG9tZS5saXN0ZH0+PExpbmsgaHJlZj0nL0ZlYXR1cmVzL0ZlYXR1cmVzJyBzeD17c3R5bGVzLmxpbmtkc30+RmVhdHVyZXM8L0xpbms+PC9saT5cbiAgPGxpIGNsYXNzPXtIb21lLmxpc3RkfT4gPExpbmsgaHJlZj0nL1Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsJyBzeD17c3R5bGVzLmxpbmtkc30+VGVzdGltb25pYWw8L0xpbms+PC9saT5cbiAgPGxpIGNsYXNzPXtIb21lLmxpc3RkfT48TGluayBocmVmPScvUHJpY2luZy9QcmljaW5nJyBzeD17c3R5bGVzLmxpbmtkc30+UHJpY2luZzwvTGluaz48L2xpPlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKCh7IHBhdGgsIGljb24gfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIga2V5PXtpfSBzeD17c3R5bGVzLnNvY2lhbC5pY29ufT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8TGluayB0bz17cGF0aH0+e2ljb259PC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BhdGh9PntpY29ufTwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1Njcm9sbGJhcnM+XG4gICAgPC9EcmF3ZXI+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhhbmRsZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhTaHJpbms6ICcwJyxcbiAgICB3aWR0aDogJzI2cHgnLFxuXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmsnLFxuICB9LFxuXG4gIGNsb3NlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcyNXB4JyxcbiAgICByaWdodDogJzMwcHgnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxuXG4gIGNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwdDogJzEwMHB4JyxcbiAgICBwYjogJzQwcHgnLFxuICAgIHB4OiAnMzBweCcsXG4gIH0sXG5cbiAgbWVudToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIGNvbG9yOiAnIzIyMicsXG4gICAgICBweTogJzE1cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjonbm9uZScsICAgICAgICAgICAgICAgXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U4ZTVlNScsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBsaW5rZHM6e1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjoncmVkJ1xuICB9LFxuY29sdW1uOntcbiAgd2lkdGg6JzEwMCUnLFxuIGJvcmRlcjpcIm5vbmVcIlxufSxcblxuICBtZW51Rm9vdGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbXQ6ICdhdXRvJyxcbiAgfSxcblxuICBzb2NpYWw6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cbiAgICBpY29uOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBtcjogJzE1cHgnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICc6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgbXI6ICcwJyxcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1dHRvbjoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgZnc6ICc3MDAnLFxuICAgIGhlaWdodDogJzQ1cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHB5OiAnMCcsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVEcmF3ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9