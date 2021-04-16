require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([28],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(120);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_168f70dc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-168f70dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_168f70dc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\focus\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-168f70dc", Component.options)
  } else {
    hotAPI.reload("data-v-168f70dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_msgList_index__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_date_js__ = __webpack_require__(8);
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
      arrData: '',
      pageSize: 10,
      total: 0,
      nodatashow: false
    };
  },

  components: {
    msgList: __WEBPACK_IMPORTED_MODULE_0__components_msgList_index__["a" /* default */]
  },
  onLoad: function onLoad() {
    this.pageSize = 10;
    this.getData();
  },
  onShow: function onShow() {
    // this.getData()
  },

  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    this.pageSize = 10;
    // this.arrData = []
    this.getData();
    wx.stopPullDownRefresh();
  },
  onReachBottom: function onReachBottom() {
    //触底刷新
    wx.stopPullDownRefresh();
    this.pageSize = this.pageSize + 10;
    if (this.pageSize - 10 > this.total) {
      this.nodatashow = true;
    } else {
      this.nodatashow = false;
      this.getData();
    }
  },

  methods: {
    newDetail: function newDetail(e) {
      console.log(e);
      wx.navigateTo({ url: '../newDetails/main?docId=' + e });
    },
    getData: function getData() {
      var _this = this;

      console.log(123);
      this.$https.request({
        // url:'http://192.168.7.61:84/messageboard/internetUserInterface/selectThreadsUserFavorite',
        url: this.$interfaces.focus,
        data: {
          pageNum: 1,
          pageSize: this.pageSize,
          isAsc: 'desc',
          orderByColumn: 'create_time'
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post'
      }).then(function (res) {
        console.log(res);
        _this.total = res.total;
        res.rows.forEach(function (e) {
          console.log(e);
          // e.dateline = formatTime(new Date(e.dateline*1000))
          e.dateline = Object(__WEBPACK_IMPORTED_MODULE_1__static_js_date_js__["a" /* formatTime */])(new Date(e.dateline * 1000)).slice(0, 10);
        });
        _this.arrData = res.rows;
        // if(this.arrData.length != 0){
        //   this.arrData.push(...res.rows)
        // }else{
        //   this.arrData = res.rows
        // }
        // this.listData=res.rows
        // this.blockData=res.rows
        // this.total=res.total
        // wx.stopPullDownRefresh()
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [(_vm.arrData.length < 1) ? [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/null.png",
      "alt": ""
    }
  })] : [_c('msgList', {
    attrs: {
      "arr": _vm.arrData,
      "mpcomid": '0'
    }
  })], _vm._v(" "), (_vm.nodatashow) ? _c('div', {
    staticClass: "nodata"
  }, [_vm._v("没有更多数据了")]) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-168f70dc", esExports)
  }
}

/***/ })

},[119]);