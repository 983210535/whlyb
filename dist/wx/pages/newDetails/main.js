require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(287);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5a932a44_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(290);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(288)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a932a44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5a932a44_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\newDetails\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a932a44", Component.options)
  } else {
    hotAPI.reload("data-v-5a932a44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 288:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__ = __webpack_require__(9);
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
      docId: '',
      data: {}
    };
  },

  components: {
    wxParse: __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__["a" /* default */]
  },
  onLoad: function onLoad(e) {
    console.log(e);
    this.data = {};
    this.docId = e.docId;
    this.getData();
  },

  methods: {
    newDetail: function newDetail(e) {
      console.log(e);
    },
    getData: function getData() {
      var _this = this;

      this.$https.request({
        // url: 'http://192.168.7.160:81/wcmapi/service/getDocumentById.xhtml',
        url: 'https://news.cjn.cn/wcmapi/service/getDocumentById.xhtml',
        data: {
          model: 1,
          docId: this.docId
        },
        header: {
          'content-type': 'application/x-www-form-urlended'
        },
        methosd: 'post'
      }).then(function (res) {
        console.log(res);
        console.log(res.data.DOCHTMLCON);
        _this.data = res.data;
      }).catch(function (err) {
        console.log("error");
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n      " + _vm._s(_vm.data.DOCTITLE) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_c('p', [_vm._v("\n        " + _vm._s(_vm.data.SOURCENAME) + "\n        "), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.data.DOCRELTIME))])]), _vm._v(" "), _c('div', {
    staticClass: "share"
  }, [_c('button', {
    staticClass: "zf",
    attrs: {
      "open-type": "share"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "fx",
    attrs: {
      "src": "../../../static/images_pro/zf.png"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [(_vm.data.DOCHTMLCON) ? _c('wxParse', {
    attrs: {
      "content": _vm.data.DOCHTMLCON,
      "mpcomid": '0'
    }
  }) : _vm._e()], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a932a44", esExports)
  }
}

/***/ })

},[286]);