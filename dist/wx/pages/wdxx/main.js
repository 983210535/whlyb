require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(347);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_301c0fe9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(350);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(348)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-301c0fe9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_301c0fe9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\wdxx\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-301c0fe9", Component.options)
  } else {
    hotAPI.reload("data-v-301c0fe9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 348:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 349:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      newsData: [],
      userId: '',
      pageSize: 10,
      pageNum: 1,
      nodatashow: false,
      total: 0
    };
  },

  components: {},
  mounted: function mounted() {},
  onLoad: function onLoad(option) {
    // 初始化获取用户信息和token值
    this.userId = this.$store.state.userId;
    this.user = this.$store.getters.user;
    this.token = this.$store.getters.token;
    this.pageSize = 10;
    this.getnews();
  },
  onShow: function onShow() {},
  onPullDownRefresh: function onPullDownRefresh() {
    this.pageSize = 10;
    this.getnews();
    wx.stopPullDownRefresh();
  },
  onReachBottom: function onReachBottom() {
    // 停止下拉刷新
    wx.stopPullDownRefresh();
    this.pageSize = this.pageSize + 10;
    if (this.pageSize - 10 > this.total) {
      this.nodatashow = true;
    } else {
      this.nodatashow = false;
      this.getnews();
    }
  },

  methods: {
    // toDetails(e){
    //   wx.navigateTo({ url: `../lyDetails/main?tid=${e.id}` });

    // },
    itemconten: function itemconten(e) {
      // 存储最新消息数值
      this.$store.dispatch('setNewContent', e);
      this.setread(e.id);
    },
    setread: function setread(e) {
      // 设置已读
      this.$https.request({
        url: this.$interfaces.setread,
        data: {
          messageIds: e
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        },
        method: 'post'
      }).then(function (res) {
        wx.navigateTo({
          url: "../news/main?id=" + e
        });
      }).catch(function (err) {});
    },
    getnews: function getnews() {
      var _this = this;

      // 获取我的消息
      this.$https.request({
        url: this.$interfaces.myMsg,
        // url:'http://192.168.7.61:84/messageboard/newsText/list',
        data: {
          // isRead:-1
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          creatorId: this.userId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post'
      }).then(function (res) {
        _this.newsData = res.rows;
        _this.total = res.total;
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [(_vm.newsData.length > 0) ? [_vm._l((_vm.newsData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "box",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetails(item)
        }
      }
    }, [_c('p', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _c('p', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.createTime))])], 1)
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nodatashow),
      expression: "nodatashow"
    }],
    staticClass: "nodata"
  }, [_vm._v("没有更多数据了")])] : [_vm._m(0)]], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/null.png",
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
     require("vue-hot-reload-api").rerender("data-v-301c0fe9", esExports)
  }
}

/***/ })

},[346]);