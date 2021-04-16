require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(317);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_34079a8a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(320);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(318)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-34079a8a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_34079a8a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\userregister\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34079a8a", Component.options)
  } else {
    hotAPI.reload("data-v-34079a8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 318:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_toast_toast__ = __webpack_require__(35);
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
      openId: '',
      phone: '',
      errormsg: '',
      code: '',
      time: 0,
      disabled: false,
      username: '',
      writename: '',
      password: '',
      comfirmpassword: '',
      realname: '',
      idcard: ''
    };
  },


  components: {},

  methods: {
    submit: function submit() {
      var _this = this;

      if (this.writename == '' || this.password == '' || this.comfirmpassword == '' || this.username == '') {
        Object(__WEBPACK_IMPORTED_MODULE_0__static_vant_dist_toast_toast__["a" /* default */])('请将必填项信息填写完整！');
      } else {
        if (this.password != this.comfirmpassword) {
          __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_toast_toast__["a" /* default */].fail("两次密码填写不一致！");
        } else {
          this.$https.request({
            url: this.$interfaces.register,
            data: {
              openid: this.$store.state.openId,
              writename: this.writename,
              password: this.password,
              realname: this.realname,
              idcard: this.idcard,
              username: this.username
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'post'
          }).then(function (res) {
            if (res.code == 0) {
              _this.$store.dispatch("setToken", res.token);
              __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_toast_toast__["a" /* default */].success(res.msg);
              wx.switchTab({
                url: "../view/main"
              });
            } else {
              __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_toast_toast__["a" /* default */].fail(res.msg);
            }
          });
        }
      }
    }
  },
  onLoad: function onLoad(option) {},
  created: function created() {}
});

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "register"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('van-cell-group', {
    staticClass: "areabox",
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "dobox"
  }, [_c('div', {
    staticClass: "boxBottom"
  }, [_c('span', [_c('i', [_vm._v("*")]), _vm._v("用户名")], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "inputitem",
    attrs: {
      "type": "text",
      "clearable": "",
      "label": "用户名",
      "placeholder": "请输入用户名",
      "error-message": _vm.errormsg,
      "border": true,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "dobox"
  }, [_c('div', {
    staticClass: "boxBottom"
  }, [_c('span', [_c('i', [_vm._v("*")]), _vm._v("笔名")], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.writename),
      expression: "writename"
    }],
    staticClass: "inputitem",
    attrs: {
      "type": "text",
      "clearable": "",
      "placeholder": "请输入笔名",
      "error-message": _vm.errormsg,
      "border": true,
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.writename)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.writename = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "dobox"
  }, [_c('div', {
    staticClass: "boxBottom"
  }, [_c('span', [_c('i', [_vm._v("*")]), _vm._v("密码")], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "inputitem",
    attrs: {
      "type": "password",
      "clearable": "",
      "placeholder": "请输入密码",
      "error-message": _vm.errormsg,
      "border": true,
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "dobox"
  }, [_c('div', {
    staticClass: "boxBottom"
  }, [_c('span', [_c('i', [_vm._v("*")]), _vm._v("确认密码")], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comfirmpassword),
      expression: "comfirmpassword"
    }],
    staticClass: "inputitem",
    attrs: {
      "type": "password",
      "clearable": "",
      "placeholder": "请再次输入密码",
      "error-message": _vm.errormsg,
      "border": true,
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.comfirmpassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comfirmpassword = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("以下内容只有管理员可见")]), _vm._v(" "), _c('van-cell-group', {
    staticClass: "areabox",
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "dobox"
  }, [_c('div', {
    staticClass: "boxBottom"
  }, [_c('span', [_vm._v("真实姓名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.realname),
      expression: "realname"
    }],
    staticClass: "inputitem",
    attrs: {
      "type": "text",
      "clearable": "",
      "placeholder": "请输入真实姓名",
      "error-message": _vm.errormsg,
      "border": true,
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.realname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.realname = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "dobox"
  }, [_c('div', {
    staticClass: "boxBottom"
  }, [_c('span', [_vm._v("身份证号")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.idcard),
      expression: "idcard"
    }],
    staticClass: "inputitem",
    attrs: {
      "type": "number",
      "clearable": "",
      "placeholder": "请输入身份证号码",
      "error-message": _vm.errormsg,
      "border": true,
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.idcard)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.idcard = $event.target.value
      }
    }
  })])])])], 1), _vm._v(" "), _c('button', {
    staticClass: "submitbtn",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '2'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topimg"
  }, [_c('div', {
    staticClass: "bgimg"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/regimg.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "usericon"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/usericon.jpeg",
      "alt": ""
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-34079a8a", esExports)
  }
}

/***/ })

},[316]);