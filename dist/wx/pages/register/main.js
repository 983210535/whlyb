require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(302);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2c5a5802_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(305);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(303)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c5a5802"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2c5a5802_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\register\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c5a5802", Component.options)
  } else {
    hotAPI.reload("data-v-2c5a5802", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 303:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 304:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      openId: '',
      tid: '',
      want: false
    };
  },

  components: {},
  computed: {
    // tid(){
    //   return this.$store.getters.tid
    // }
  },
  onLoad: function onLoad() {
    this.tid = this.$store.state.tid;
    this.want = this.$store.state.wantGz;
    if (!this.$store.state.openId) {
      this.isOpenId();
    }
  },

  methods: {
    isOpenId: function isOpenId() {
      var that = this;
      wx.login({
        success: function success(res) {
          console.log(res.code);
          that.$https.request({
            url: that.$interfaces.getOpenid,
            // url: "http://192.168.7.61:84/messageboard/miniprogramuserinterface/login",
            data: {
              code: res.code
            },
            method: 'post'
          }).then(function (ress) {
            console.log(ress);
            if (ress.code == -101) {
              // wx.navigateTo({url: '../register/main'})
              that.$store.dispatch("setOpenId", ress.openid);
            }
          }).catch(function (err) {
            console.log("error");
          });
        }
      });
    },
    toPhone: function toPhone() {
      wx.navigateTo({ url: '../phone/main' });
    },
    getPhoneNumber: function getPhoneNumber(e) {
      var _this = this;

      console.log(e);
      // 获取电话号码传给后台-存储token
      this.$https.request({
        url: this.$interfaces.bindaccount,
        // url:'http://192.168.7.61:84/messageboard/miniprogramuserinterface/bindaccount',
        data: {
          openid: this.$store.state.openId,
          iv: e.mp.detail.iv,
          encryptedData: e.mp.detail.encryptedData
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post'
      }).then(function (res) {
        console.log(_this.$store.state.openId);
        console.log(res);
        if (res.code == 0) {
          _this.$store.dispatch("setToken", res.token);
          _this.$store.dispatch("setUserId", res.userId);
          wx.setStorageSync('token', res.token);
          wx.setStorageSync('userId', res.userId);
          // 如果从留言详情登录的，登录完跳回到详情页
          if (_this.tid && _this.want) {
            // console.log(this.$store.state.wantGz);
            _this.$store.dispatch('setWantGz', false);
            wx.redirectTo({
              url: "../lyDetails/main"
              // delta: 1
            });
          } else {
            wx.redirectTo({
              url: "../message/main"
            });
          }
        } else if (res.code == -101) {
          wx.navigateTo({
            url: "../userregister/main"
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "btoBtn"
  }, [_c('button', {
    staticClass: "sqBtn",
    attrs: {
      "open-type": "getPhoneNumber",
      "eventid": '0'
    },
    on: {
      "getphonenumber": _vm.getPhoneNumber
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/wechat.png",
      "alt": ""
    }
  }), _vm._v("微信授权登录")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topImg"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/welcome.png",
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
     require("vue-hot-reload-api").rerender("data-v-2c5a5802", esExports)
  }
}

/***/ })

},[301]);