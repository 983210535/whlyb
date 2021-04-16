require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([29],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(111);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f5d3e33c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f5d3e33c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f5d3e33c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\citizen\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f5d3e33c", Component.options)
  } else {
    hotAPI.reload("data-v-f5d3e33c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

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
      dataArr: [],
      pageNo: 1
    };
  },

  components: {},
  onLoad: function onLoad() {
    this.getData();
  },
  onReachBottom: function onReachBottom() {
    //触底刷新
    this.pageNo = this.pageNo + 1;
    this.getData();
  },

  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    this.pageNo = 1;
    this.dataArr = [];
    this.getData();
  },
  methods: {
    newDetail: function newDetail(e) {
      console.log(e);
      wx.navigateTo({ url: '../newDetails/main?docId=' + e });
    },
    getData: function getData() {
      var _this = this;

      this.$https.request({
        // url: 'http://192.168.7.160:81/wcmapi/service/getDocumentsByChannelId.xhtml',
        url: 'https://news.cjn.cn/wcmapi/service/getDocumentsByChannelId.xhtml',
        data: {
          model: 1,
          chnlId: 16504,
          pageNo: this.pageNo,
          pageSize: 5
        },
        header: {
          'content-type': 'application/x-www-form-urlended'
        },
        methosd: 'post'
      }).then(function (res) {
        _this.getTime(res.rows);
        console.log(res.rows);
        wx.stopPullDownRefresh();
        if (_this.dataArr !== []) {
          var _dataArr;

          (_dataArr = _this.dataArr).push.apply(_dataArr, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.rows));
        } else {
          _this.dataArr = res.rows;
        }
      }).catch(function (err) {
        console.log("error");
      });
    },
    getTime: function getTime(e) {
      e.map(function (item) {
        var year = item.DOCRELTIME.slice(0, 10);
        item.DOCRELTIME = year;
        return item;
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "content"
  }, _vm._l((_vm.dataArr), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.newDetail(item.DOCID)
        }
      }
    }, [(index == 0) ? [_c('div', {
      staticClass: "first"
    }, [(item.PICATTACH.length > 0 && item.PICATTACH[0].ABSURL) ? _c('img', {
      attrs: {
        "src": item.PICATTACH[0].ABSURL,
        "alt": ""
      }
    }) : _c('img', {
      attrs: {
        "src": "../../../static/images_pro/noPic.png",
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "mainNr"
    }, [_c('p', {
      staticClass: "titleBig source"
    }, [_vm._v(_vm._s(item.DOCTITLE))]), _vm._v(" "), _c('p', {
      staticClass: "abstract"
    }, [_vm._v(_vm._s(item.DOCABSTRACT))])], 1), _vm._v(" "), _c('div', {
      staticClass: "nameTime"
    }, [_c('span', [_vm._v(_vm._s(item.SOURCENAME) + " "), _c('span', {
      staticClass: "time"
    }, [_vm._v(" " + _vm._s(item.DOCRELTIME))])])])])] : (item.PICATTACH.length < 3) ? [_c('div', {
      staticClass: "second"
    }, [(item.PICATTACH.length > 0 && item.PICATTACH[0].ABSURL) ? _c('img', {
      attrs: {
        "src": item.PICATTACH[0].ABSURL,
        "alt": ""
      }
    }) : _c('img', {
      attrs: {
        "src": "../../../static/images_pro/noPics.png",
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "mainSec"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.DOCTITLE))]), _vm._v(" "), _c('div', {
      staticClass: "nameTimeSec"
    }, [_c('span', {
      staticClass: "source"
    }, [_vm._v(_vm._s(item.SOURCENAME) + " "), _c('span', {
      staticClass: "time"
    }, [_vm._v(" " + _vm._s(item.DOCRELTIME))])])])], 1)])] : void 0], 2)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f5d3e33c", esExports)
  }
}

/***/ })

},[110]);