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
  }, "Category 2"))))), __jsx("li", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ0b2dnbGVIYW5kbGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJzdHlsZXMiLCJoYW5kbGVyIiwiaXNPcGVuIiwiZHJhd2VyIiwiY2xvc2UiLCJjb250ZW50IiwibWVudSIsIkhvbWUiLCJsaXN0ZCIsImxpbmtkcyIsImRyb3Bkb3duIiwiZHJvcGJ0biIsImNhcmV0ZG93biIsInJlc2Ryb3Bkb3duY29udGVudCIsInJvdyIsImNvbHVtbiIsInJlc2NvbnQiLCJtZW51Rm9vdGVyIiwibWFwIiwiaSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4U2hyaW5rIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiY3Vyc29yIiwiZmxleERpcmVjdGlvbiIsInB0IiwicGIiLCJweCIsImEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInB5IiwidGV4dERlY29yYXRpb24iLCJib3JkZXJCb3R0b20iLCJ0cmFuc2l0aW9uIiwiYm9yZGVyIiwibXQiLCJtciIsImJ1dHRvbiIsImZ3IiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsTUFBTSxHQUFHLENBQ2I7QUFDRUMsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxF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ZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41N2M0ZTg2ZTc0ZTk2NGJhZjdmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL2RyYXdlcic7XG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0JztcbmltcG9ydCB7IElvTWRDbG9zZSwgSW9NZE1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgeyBGYUNhcmV0RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcbmltcG9ydCBIb21lIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9jc3MvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBpbWFnZTEgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzEuanBnJztcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzIuanBnJztcbmltcG9ydCBpbWFnZTMgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzMucG5nJztcbmltcG9ydCBpbWFnZTQgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzQuanBnJztcbmltcG9ydCBpbWFnZTUgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzUuanBnJztcbmltcG9ydCBpbWFnZTYgZnJvbSAnLi4vLi4vYXNzZXRzL3Byb2plY3RzL2ltZzYuanBnJztcbmltcG9ydCB7XG4gIEZhRmFjZWJvb2tGLFxuICBGYVR3aXR0ZXIsXG4gIEZhR2l0aHViQWx0LFxuICBGYURyaWJiYmxlLFxufSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmNvbnN0IHNvY2lhbCA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgaWNvbjogPEZhRHJpYmJibGUgLz4sXG4gIH0sXG5dO1xuXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xuXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVE9HR0xFJyxcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cblxuIFxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHdpZHRoPVwiMzIwcHhcIlxuICAgICAgZHJhd2VySGFuZGxlcj17XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oYW5kbGVyfT5cbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIH1cbiAgICAgIG9wZW49e3N0YXRlLmlzT3Blbn1cbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwMDAwMFwiIC8+fVxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XG4gICAgPlxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgPGxpIGNsYXNzPXtIb21lLmxpc3RkfT48TGluayBzeD17c3R5bGVzLmxpbmtkc30gaHJlZj0nLyc+SG9tZTwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz17SG9tZS5kcm9wZG93bn0+XG4gICAgPHNwYW4gY2xhc3M9e0hvbWUuZHJvcGJ0bn0+cHJvamVjdHNcbiAgICA8c3BhbiBjbGFzc05hbWU9e0hvbWUuY2FyZXRkb3dufT4gICA8RmFDYXJldERvd24+PC9GYUNhcmV0RG93bj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICAgIDxkaXYgIGNsYXNzPXtIb21lLnJlc2Ryb3Bkb3duY29udGVudH0+XG4gICAgICA8ZGl2IGNsYXNzPXtIb21lLnJvd30+XG4gICAgICAgIDxkaXYgc3g9e3N0eWxlcy5jb2x1bW59ID5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17SG9tZS5yZXNjb250fT5DYXRlZ29yeSAyPC9oMz5cbiAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PjxMaW5rICBocmVmPScvQmxvZ3MvQmxvZ3MnIHN4PXtzdHlsZXMubGlua2RzfT5ibG9nczwvTGluaz4gPC9saT5cbiAgPGxpIGNsYXNzPXtIb21lLmxpc3RkfT48TGluayBocmVmPScvRmVhdHVyZXMvRmVhdHVyZXMnIHN4PXtzdHlsZXMubGlua2RzfT5GZWF0dXJlczwvTGluaz48L2xpPlxuICA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PiA8TGluayBocmVmPScvVGVzdGltb25pYWwvVGVzdGltb25pYWwnIHN4PXtzdHlsZXMubGlua2RzfT5UZXN0aW1vbmlhbDwvTGluaz48L2xpPlxuICA8bGkgY2xhc3M9e0hvbWUubGlzdGR9PjxMaW5rIGhyZWY9Jy9QcmljaW5nL1ByaWNpbmcnIHN4PXtzdHlsZXMubGlua2RzfT5QcmljaW5nPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudUZvb3Rlcn0+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc29jaWFsfT5cbiAgICAgICAgICAgICAge3NvY2lhbC5tYXAoKHsgcGF0aCwgaWNvbiB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHRvPXtwYXRofT57aWNvbn08L0xpbms+ICovfVxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cGF0aH0+e2ljb259PC9hPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2Nyb2xsYmFycz5cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGFuZGxlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleFNocmluazogJzAnLFxuICAgIHdpZHRoOiAnMjZweCcsXG5cbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZGFyaycsXG4gIH0sXG5cbiAgY2xvc2U6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzI1cHgnLFxuICAgIHJpZ2h0OiAnMzBweCcsXG4gICAgekluZGV4OiAnMScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gIH0sXG5cbiAgY29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHB0OiAnMTAwcHgnLFxuICAgIHBiOiAnNDBweCcsXG4gICAgcHg6ICczMHB4JyxcbiAgfSxcblxuICBtZW51OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYToge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgY29sb3I6ICcjMjIyJyxcbiAgICAgIHB5OiAnMTVweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOidub25lJywgICAgICAgICAgICAgICBcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlNWU1JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGxpbmtkczp7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOidyZWQnXG4gIH0sXG5jb2x1bW46e1xuICB3aWR0aDonMTAwJScsXG4gYm9yZGVyOlwibm9uZVwiXG59LFxuXG4gIG1lbnVGb290ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJ2F1dG8nLFxuICB9LFxuXG4gIHNvY2lhbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblxuICAgIGljb246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtcjogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmdzogJzcwMCcsXG4gICAgaGVpZ2h0OiAnNDVweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHk6ICcwJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZURyYXdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=