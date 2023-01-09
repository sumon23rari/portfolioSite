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
    className: _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.imgd,
    src: _assets_projects_img1_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "image1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx("img", {
    className: _public_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.imgd,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0b2dnbGVIYW5kbGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJzdHlsZXMiLCJoYW5kbGVyIiwiaXNPcGVuIiwiZHJhd2VyIiwiY2xvc2UiLCJjb250ZW50IiwibWVudSIsIkhvbWUiLCJsaXN0ZCIsImxpbmtkcyIsImRyb3Bkb3duIiwiZHJvcGJ0biIsImNhcmV0ZG93biIsInJlc2Ryb3Bkb3duY29udGVudCIsInJvdyIsImNvbHVtbiIsImltZ2QiLCJpbWFnZTEiLCJpbWFnZTIiLCJyZXNjb250IiwibWVudUZvb3RlciIsIm1hcCIsImkiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFNocmluayIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImN1cnNvciIsImZsZXhEaXJlY3Rpb24iLCJwdCIsInBiIiwicHgiLCJhIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJweSIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyQm90dG9tIiwidHJhbnNpdGlvbiIsImJvcmRlciIsIm10IiwibXIiLCJidXR0b24iLCJmdyIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLE1B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QUFFSkMsZ0JBQVUsRUFBRSxRQUZSO0FBR0pDLG9CQUFjLEVBQUUsUUFIWjtBQUlKaUIsV0FBSyxFQUFFLE1BSkg7QUFLSkYsY0FBUSxFQUFFLEVBTE47QUFNSlMsUUFBRSxFQUFFLE1BTkE7QUFPSkgsZ0JBQVUsRUFBRSxXQVBSO0FBUUpaLFlBQU0sRUFBRSxTQVJKO0FBU0oscUJBQWU7QUFDYmUsVUFBRSxFQUFFO0FBRFMsT0FUWDtBQVlKLGlCQUFXO0FBQ1RQLGFBQUssRUFBRTtBQURFO0FBWlA7QUFOQSxHQTlFSztBQXNHYlEsUUFBTSxFQUFFO0FBQ05SLFNBQUssRUFBRSxPQUREO0FBRU5GLFlBQVEsRUFBRSxNQUZKO0FBR05XLE1BQUUsRUFBRSxLQUhFO0FBSU52QixVQUFNLEVBQUUsTUFKRjtBQUtOd0IsZ0JBQVksRUFBRSxLQUxSO0FBTU5sQixVQUFNLEVBQUUsU0FORjtBQU9OUCxTQUFLLEVBQUUsTUFQRDtBQVFOSixXQUFPLEVBQUUsTUFSSDtBQVNOQyxjQUFVLEVBQUUsUUFUTjtBQVVOQyxrQkFBYyxFQUFFLFFBVlY7QUFXTmtCLE1BQUUsRUFBRTtBQVhFO0FBdEdLLENBQWY7QUFxSGVwRCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOGRkMjMwNzhiNTczZGIyZGEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL2RyYXdlcic7XG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0JztcbmltcG9ydCB7IElvTWRDbG9zZSwgSW9NZE1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgeyBGYUNhcmV0RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcbmltcG9ydCBIb21lIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9jc3MvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBpbWFnZTEgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzEuanBnJztcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzIuanBnJztcbmltcG9ydCBpbWFnZTMgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzMucG5nJztcbmltcG9ydCBpbWFnZTQgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzQuanBnJztcbmltcG9ydCBpbWFnZTUgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzUuanBnJztcbmltcG9ydCBpbWFnZTYgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzYuanBnJztcbmltcG9ydCB7XG4gIEZhRmFjZWJvb2tGLFxuICBGYVR3aXR0ZXIsXG4gIEZhR2l0aHViQWx0LFxuICBGYURyaWJiYmxlLFxufSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmNvbnN0IHNvY2lhbCA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhRHJpYmJibGUgLz4sXG4gIH0sXG5dO1xuXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVE9HR0xFJyxcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cblxuIFxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHdpZHRoPVwiMzIwcHhcIlxuICAgICAgZHJhd2VySGFuZGxlcj17XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oYW5kbGVyfT5cbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIH1cbiAgICAgIG9wZW49e3N0YXRlLmlzT3Blbn1cbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwMFwiIC8+fVxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XG4gICAgPlxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgPGxpIGNsYXNzPXtIb21lLmxpc3RkfT48TGluayBzeD17c3R5bGVzLmxpbmtkc30gaHJlZj0nLyc+SG9tZTwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz17SG9tZS5kcm9wZG93bn0+XG4gICAgPHNwYW4gY2xhc3M9e0hvbWUuZHJvcGJ0bn0+cHJvamVjdHNcbiAgICA8c3BhbiBjbGFzc05hbWU9e0hvbWUuY2FyZXRkb3dufT4gICA8RmFDYXJldERvd24+PC9GYUNhcmV0RG93bj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICAgIDxkaXYgIGNsYXNzPXtIb21lLnJlc2Ryb3Bkb3duY29udGVudH0+XG4gICAgICA8ZGl2IGNsYXNzPXtIb21lLnJvd30+XG4gICAgICAgIDxkaXYgc3g9e3N0eWxlcy5jb2x1bW59ID5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e0hvbWUuaW1nZH0gc3JjPXtpbWFnZTF9ICBhbHQ9XCJpbWFnZTFcIiAvPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17SG9tZS5pbWdkfSAgc3JjPXtpbWFnZTJ9IGFsdD1cImltYWdlMlwiIC8+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzeD17c3R5bGVzLmNvbHVtbn0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17SG9tZS5yZXNjb250fT5DYXRlZ29yeSAyPC9oMz5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN4PXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtIb21lLnJlc2NvbnR9PkNhdGVnb3J5IDM8L2gzPlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gPGxpIGNsYXNzPXtIb21lLmxpc3RkfT48TGluayAgaHJlZj0nL0Jsb2dzL0Jsb2dzJyBzeD17c3R5bGVzLmxpbmtkc30+YmxvZ3M8L0xpbms+IDwvbGk+XG4gIDxsaSBjbGFzcz17SG9tZS5saXN0ZH0+PExpbmsgaHJlZj0nL0ZlYXR1cmVzL0ZlYXR1cmVzJyBzeD17c3R5bGVzLmxpbmtkc30+RmVhdHVyZXM8L0xpbms+PC9saT5cbiAgPGxpIGNsYXNzPXtIb21lLmxpc3RkfT4gPExpbmsgaHJlZj0nL1Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsJyBzeD17c3R5bGVzLmxpbmtkc30+VGVzdGltb25pYWw8L0xpbms+PC9saT5cbiAgPGxpIGNsYXNzPXtIb21lLmxpc3RkfT48TGluayBocmVmPScvUHJpY2luZy9QcmljaW5nJyBzeD17c3R5bGVzLmxpbmtkc30+UHJpY2luZzwvTGluaz48L2xpPlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKCh7IHBhdGgsIGljb24gfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIga2V5PXtpfSBzeD17c3R5bGVzLnNvY2lhbC5pY29ufT5cbiAgICAgICAgICAgICAgICAgIHsvKiA8TGluayB0bz17cGF0aH0+e2ljb259PC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BhdGh9PntpY29ufTwvYT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1Njcm9sbGJhcnM+XG4gICAgPC9EcmF3ZXI+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhhbmRsZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhTaHJpbms6ICcwJyxcbiAgICB3aWR0aDogJzI2cHgnLFxuXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcblxuICBkcmF3ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmsnLFxuICB9LFxuXG4gIGNsb3NlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcyNXB4JyxcbiAgICByaWdodDogJzMwcHgnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxuXG4gIGNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwdDogJzEwMHB4JyxcbiAgICBwYjogJzQwcHgnLFxuICAgIHB4OiAnMzBweCcsXG4gIH0sXG5cbiAgbWVudToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIGNvbG9yOiAnIzIyMicsXG4gICAgICBweTogJzE1cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjonbm9uZScsICAgICAgICAgICAgICAgXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U4ZTVlNScsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBsaW5rZHM6e1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjoncmVkJ1xuICB9LFxuY29sdW1uOntcbiAgd2lkdGg6JzEwMCUnLFxuIGJvcmRlcjpcIm5vbmVcIlxufSxcblxuICBtZW51Rm9vdGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbXQ6ICdhdXRvJyxcbiAgfSxcblxuICBzb2NpYWw6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cbiAgICBpY29uOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBtcjogJzE1cHgnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICc6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgbXI6ICcwJyxcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGJ1dHRvbjoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgZnc6ICc3MDAnLFxuICAgIGhlaWdodDogJzQ1cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHB5OiAnMCcsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVEcmF3ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9