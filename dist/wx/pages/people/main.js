require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(297);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e1c925aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(300);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(298)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e1c925aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e1c925aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\people\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1c925aa", Component.options)
  } else {
    hotAPI.reload("data-v-e1c925aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 298:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_date_js__ = __webpack_require__(8);
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

// import wxParse from 'mpvue-wxparse'

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      pageNum: 1,
      pageSize: 10,
      dataArr: []
    };
  },

  components: {
    // wxParse
  },
  onLoad: function onLoad() {
    this.dataArr = [];
    this.pageSize = 10;
    this.getData();
  },
  onReachBottom: function onReachBottom() {
    //触底刷新
    wx.stopPullDownRefresh();
    this.pageSize += 10;
    this.getData();
  },

  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    // this.dataArr= []
    this.pageSize = 10;
    // this.pageNum = 1
    this.getData();
    // wx.stopPullDownRefresh()
  },
  methods: {
    newDetail: function newDetail(e) {
      console.log(e);
      // this.$store.commit('setMass',this.dataArr[e])
      wx.navigateTo({ url: '../massDetails/main?tid=' + e });
    },
    getData: function getData() {
      var _this = this;

      this.$https.request({
        // url: 'http://192.168.7.61:83/messageboard/threads/dz/list',
        url: this.$interfaces.peopleDz,
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        },
        method: 'get'
      }).then(function (res) {
        console.log(res.rows);
        res.rows.forEach(function (e) {
          console.log(e);
          e.dateline = Object(__WEBPACK_IMPORTED_MODULE_0__static_js_date_js__["a" /* formatTime */])(new Date(e.dateline * 1000)).slice(0, 10);
          e.subject = _this.removeHtml(e.subject);
          e.content = _this.removeHtml(e.content);
        });
        _this.dataArr = res.rows;
        wx.stopPullDownRefresh();
        // if(this.dataArr.length == 0){
        //   this.dataArr = res.rows
        // }else{
        //   this.dataArr.push(...res.rows)
        // }
      }).catch(function (err) {
        console.log("error");
      });
    },
    getDate: function getDate(e) {
      e.map(function (i) {
        var date = new Date(i.dateline * 1000);
        var b = date.toLocaleString().slice(0, 9);
        i.dateline = b;
        return i;
      });
      return e;
    },
    removeHtml: function removeHtml(value) {
      var value1 = !value ? '' : String(value).replace(/&nbsp;/g, '').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, "");
      return value1;
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, _vm._l((_vm.dataArr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "container",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.newDetail(item.queryCode)
        }
      }
    }, [_c('p', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(item.subject)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "content",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "time"
    }, [_c('span', [_vm._v(_vm._s(item.nickName))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.dateline))])])], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e1c925aa", esExports)
  }
}

/***/ })

},[296]);