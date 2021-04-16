require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(273);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a7d0d3a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(276);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(274)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a7d0d3a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a7d0d3a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mine\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7d0d3a2", Component.options)
  } else {
    hotAPI.reload("data-v-a7d0d3a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 274:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 275:
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
    return {};
  },

  computed: {
    user: function user() {
      return this.$store.state.user;
    },
    token: function token() {
      return this.$store.state.token;
    }
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {},

  components: {},

  methods: {
    exit: function exit() {
      var that = this;
      wx.showModal({
        title: '退出登录',
        content: '确定退出登录吗',
        success: function success(res) {
          if (res.confirm) {
            that.$store.dispatch("setToken", false);
            that.$store.dispatch("setUserId", '');
            wx.removeStorageSync('token');
            wx.removeStorageSync('userId');
            wx.removeStorageSync('user');
            wx.removeStorageSync('isAuthenticated');
          }
        }
      });
    },
    getUserInfo: function getUserInfo(e) {
      console.log(e);
      if (e.mp.detail.userInfo) {
        this.$store.dispatch("setUser", e.mp.detail.userInfo);
        wx.setStorageSync('user', e.mp.detail.userInfo);
        if (wx.getStorageSync("token") && wx.getStorageSync("isAuthenticated")) {
          wx.switchTab({
            url: '../view/main'
          });
        } else {
          this.$store.dispatch("setIsAuthenticated", true);
          wx.setStorageSync('isAuthenticated', true);

          this.toLogin();
        }
      }
    },
    toLogin: function toLogin() {
      var _this = this;

      wx.login({
        success: function success(res) {
          console.log(res.code);
          _this.getOpenid(res.code);
        }
      });
    },
    getOpenid: function getOpenid(code) {
      var that = this;
      this.$https.request({
        url: that.$interfaces.getOpenid,
        // url: "http://192.168.7.61:84/messageboard/miniprogramuserinterface/login",
        data: {
          code: code
        },
        method: 'post'
      }).then(function (res) {
        console.log(res);
        that.$store.dispatch("setOpenId", res.openid);
        if (res.code == -101) {
          wx.navigateTo({ url: '../register/main' });
        }
      }).catch(function (err) {
        console.log("error");
      });
    },
    clickMe: function clickMe(e) {
      console.log(e);
      switch (e) {
        case 'zf':
          console.log(123);
          break;

        case 'guide':
          wx.navigateTo({ url: '../lyzn/main' });
          break;

        case 'del':
          console.log('delete');
          // this.$store.dispatch("setToken",false)
          // wx.clearStorage()
          wx.removeStorageSync("search");
          wx.showModal({
            title: '提示',
            content: '缓存已全部清除',
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                console.log('点击确认回调');
              } else {
                console.log('点击取消回调');
              }
            }
          });

          break;

        case 'about':
          wx.navigateTo({ url: '../aboutus/main' });
          break;

        default:
          console.log('error');
          break;
      }
    },
    me: function me(e) {
      console.log(e);
      switch (e) {
        case 'lmsg':
          if (!this.$store.state.token) {
            wx.showModal({
              title: '提示',
              content: '请登陆后再点击查看~',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  console.log('点击确认回调');
                } else {
                  console.log('点击取消回调');
                }
              }
            });
          } else {
            wx.navigateTo({ url: '../myleavemessage/main' });
          }
          break;

        case 'focus':
          if (!this.$store.state.token) {
            wx.showModal({
              title: '提示',
              content: '请登陆后再点击查看~',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  console.log('点击确认回调');
                } else {
                  console.log('点击取消回调');
                }
              }
            });
          } else {
            wx.navigateTo({ url: '../focus/main' });
          }
          break;

        case 'msg':
          if (!this.$store.state.token) {
            wx.showModal({
              title: '提示',
              content: '请登陆后再点击查看~',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  console.log('点击确认回调');
                } else {
                  console.log('点击取消回调');
                }
              }
            });
          } else {
            wx.navigateTo({ url: '../wdxx/main' });
          }
          break;

        default:
          console.log('error');
          break;
      }
    },

    // log(){
    //   console.log('click');
    //   this.login = !this.login
    // },
    gotoPage: function gotoPage(e) {
      this.$store.state.lytype = e;
      if (e == 10) {
        wx.navigateTo({
          url: '../ybj/main?type=10'
        });
      } else {
        wx.navigateTo({
          url: '../myleavemessage/main?type=' + e
        });
      }
    },
    getData: function getData() {
      // 获取角标
      this.$https.request({
        url: this.$interfaces.jb,
        data: {},
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: wx.getStorageSync("token")
        },
        method: 'post'
      }).then(function (res) {
        // this.allnum=res.myThreadsTotalNum[5].total
        // this.dpjnum=res.myThreadsTotalNum[6].total
        // this.ypjnum=res.myThreadsTotalNum[4].total
      }).catch(function (err) {
        console.log(err);
      });
    },
    getybj: function getybj() {
      // 获取我的留言列表
      this.$https.request({
        url: this.$interfaces.ybj,
        data: {
          pageNum: 1,
          pageSize: this.pageSize,
          isAsc: 'desc',
          orderByColumn: 'create_time'
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        },
        method: 'post'
      }).then(function (res) {
        // this.ybjnum=res.total
      }).catch(function (err) {
        console.log(err);
      });
    }
  },

  created: function created() {}
});

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [(_vm.token) ? _c('div', {
    staticClass: "user"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatarUrl,
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.log
    }
  }), _c('span', [_vm._v(_vm._s(_vm.user.nickName))])]) : _c('div', {
    staticClass: "user"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/not_login.png",
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": _vm.log
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "login"
  }, [_c('button', {
    staticClass: "login",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '2'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("点击登录/注册")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "choose"
  }, [_c('div', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.me('lmsg')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/my_lmsg.png",
      "alt": ""
    }
  }), _vm._v("\n      我的留言\n    ")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.me('focus')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/my_focus.png",
      "alt": ""
    }
  }), _vm._v("\n      我的关注\n    ")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.me('msg')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/my_msg.png",
      "alt": ""
    }
  }), _vm._v("\n      我的消息\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "btm"
  }, [_c('div', {
    staticClass: "list",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.clickMe('zf')
      }
    }
  }, [_c('button', {
    staticClass: "share",
    attrs: {
      "open-type": "share"
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/images_pro/my_zf.png",
      "alt": ""
    }
  }), _vm._v("\n          分享小程序\n        ")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/images_pro/right.png",
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "list",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.clickMe('guide')
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/images_pro/right.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.clickMe('del')
      }
    }
  }, [_vm._m(1), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/images_pro/right.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.clickMe('about')
      }
    }
  }, [_vm._m(2), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/images_pro/right.png",
      "alt": ""
    }
  })])]), _vm._v(" "), (_vm.token) ? _c('button', {
    staticClass: "exit",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": function($event) {
        _vm.exit()
      }
    }
  }, [_vm._v("\n    退出登录\n  ")]) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cell"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/images_pro/my_guide.png",
      "alt": ""
    }
  }), _vm._v("\n        留言指南\n      ")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cell"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/images_pro/my_delete.png",
      "alt": ""
    }
  }), _vm._v("\n        清除缓存\n      ")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cell"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/images_pro/my_about.png",
      "alt": ""
    }
  }), _vm._v("\n        关于我们\n      ")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a7d0d3a2", esExports)
  }
}

/***/ })

},[272]);