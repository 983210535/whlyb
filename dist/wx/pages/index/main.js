require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([25],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(220);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7c4ceb0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(223);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c4ceb0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7c4ceb0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c4ceb0c", Component.options)
  } else {
    hotAPI.reload("data-v-7c4ceb0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_notify_notify__ = __webpack_require__(18);
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
    return {};
  },

  components: {},
  methods: {
    getuserInfo: function getuserInfo(e) {
      // 判断授权是否成功

      if (e.mp.detail.userInfo) {
        this.$store.dispatch("setUser", e.mp.detail.userInfo);
        wx.setStorageSync('user', e.mp.detail.userInfo);
        if (wx.getStorageSync("token") && wx.getStorageSync("isAuthenticated")) {
          wx.switchTab({
            url: '../view/main'
          });
        } else {
          // 存储到vuex
          this.$store.dispatch("setIsAuthenticated", true);
          wx.setStorageSync('isAuthenticated', true);

          // 获取code
          this.getCode();
        }
      }
    },
    getCode: function getCode() {
      var _this = this;

      // 全局小程序对象wx
      wx.login({
        success: function success(res) {
          if (res.code) {
            _this.getOpenid(res.code);
          } else {
            console.log('登录失败！');
          }
        }
      });
    },
    getOpenid: function getOpenid(code) {
      // 三个参数appid secret  code

      var self = this;
      self.$https.request({
        url: self.$interfaces.getOpenid,
        data: {
          code: code
        },
        method: 'post'
      }).then(function (res) {
        // 将openid存到vuex中
        self.$store.dispatch('setOpenId', res.openid);
        if (res.code == -101) {
          wx.navigateTo({
            url: '../register/main'
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getuserInfo
    }
  }, [_vm._v("我要留言")]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("一块帮老百姓办事的留言板")])], 1), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "custom-selector",
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/main_bg_b.png",
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
     require("vue-hot-reload-api").rerender("data-v-7c4ceb0c", esExports)
  }
}

/***/ })

},[219]);