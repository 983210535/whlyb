require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([20],{

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(248);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ac83ddd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(251);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(249)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ac83ddd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ac83ddd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\lyzn\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ac83ddd", Component.options)
  } else {
    hotAPI.reload("data-v-4ac83ddd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 249:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      activeNames: ['1']
    };
  },


  components: {},

  methods: {
    onChange: function onChange(e) {
      // tab??????
      this.activeNames = e.mp.detail;
    }
  },
  onLoad: function onLoad(option) {},
  created: function created() {}
});

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": "",
      "bindscrolltoupper": "upper",
      "bindscrolltolower": "lower",
      "bindscroll": "scroll"
    }
  }, [_c('div', {
    staticClass: "xqbox"
  }, [_c('van-collapse', {
    attrs: {
      "value": _vm.activeNames,
      "eventid": '0',
      "mpcomid": '7'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-collapse-item', {
    attrs: {
      "title": "???????????????????????????",
      "name": "1",
      "mpcomid": '0'
    }
  }, [_vm._v("\n        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "???????????????????????????",
      "name": "2",
      "mpcomid": '1'
    }
  }, [_vm._v("\n        ??????????????????????????????????????????????????????????????????????????????\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "??????????????????????????????",
      "name": "3",
      "mpcomid": '2'
    }
  }, [_vm._v("\n        ????????????????????????????????????????????????????????????QQ???2410431154??????????????????????????????????????????\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "?????????????????????????????????????????????",
      "name": "4",
      "mpcomid": '3'
    }
  }, [_vm._v("\n        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "?????????????????????????????????",
      "name": "5",
      "mpcomid": '4'
    }
  }, [_vm._v("\n        ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "??????????????????",
      "name": "6",
      "mpcomid": '5'
    }
  }, [_vm._v("\n        ????????????????????????????????????????????????????????????????????????????????????????????????\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "??????????????????????????????",
      "name": "7",
      "mpcomid": '6'
    }
  }, [_vm._v("\n        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????QQ???2410431154???????????????\n      ")])], 1)], 1)])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topImg"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/mine_top.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ac83ddd", esExports)
  }
}

/***/ })

},[247]);