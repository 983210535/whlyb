require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([23],{

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(233);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_64241dcc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(236);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(234)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-64241dcc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_64241dcc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\leavetab\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64241dcc", Component.options)
  } else {
    hotAPI.reload("data-v-64241dcc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 234:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_dialog_dialog__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__ = __webpack_require__(18);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      iscall: true,
      iskey: false,
      user: '',
      lywzText: '',
      lywzId: '',
      zzshow: false,
      citys: '',
      list: [{
        name: '??????????????????',
        value: 1
      }, {
        name: '????????????',
        value: 1
      }],
      result: [],
      columns: [{
        values: [],
        className: 'column1'
      }, {
        values: [],
        className: 'column2',
        defaultIndex: 2
      }],
      lybt: '',
      txtBox: '',
      lynr: '',
      imgFilePaths: [],
      imgFiles: [],
      uploadBtn: true,
      lylxid: '',
      lylyid: '',
      username: '',
      phone: '',
      address: '',
      tid: -1,
      anonymousState: 0,
      mobile: 1
    };
  },

  components: {},
  onLoad: function onLoad() {
    this.user = this.$store.state.user;
    this.lylxid = this.$store.state.lylxid;
    this.lylyid = this.$store.state.lylyid;
    this.lywzId = this.$store.state.lywzid;
    this.lybt = '';
    this.lynr = '';
    this.username = '';
    this.phone = '';
    this.address = '';
    this.imgFilePaths = [];
    this.anonymousState = 0;
    this.mobile = 1;
  },

  methods: {
    delFn: function delFn(e) {
      // ???????????????????????????
      for (var i = 0; i < this.imgFiles.length; i++) {
        if (i == e) {
          this.imgFilePaths.splice(i, 1);
          this.imgFiles.splice(i, 1);
        }
      }
      if (this.imgFiles.length < 9) {
        this.uploadBtn = true;
      }
    },
    isCall: function isCall(e) {
      // ??????????????????
      this.iscall = e.mp.detail;
    },
    isKey: function isKey(e) {
      this.iskey = e.mp.detail;
    },
    lynrcompare: function lynrcompare() {
      // ??????????????????
      if (this.lynr.length < 20 || this.lynr.length > 2000) {
        Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__["a" /* default */])({
          text: "????????????(20-2000???)!",
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      }
    },
    lybtcompare: function lybtcompare(e) {
      console.log(this.lybt);
      console.log(this.lybt.length);
      // ??????????????????
      if (this.lybt == '' || this.lybt.length > 30) {
        Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__["a" /* default */])({
          text: "????????????(?????????30???)!",
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      }
    },
    imgUpload: function imgUpload() {
      // ????????????
      var _this = this;
      wx.chooseImage({
        success: function success(res) {
          console.log(res);
          var curnum = _this.imgFiles.length;
          if (res.tempFiles.length > 9 - curnum) {
            Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__["a" /* default */])({
              text: "??????????????????9?????????!",
              duration: 1000,
              selector: '#custom-selector',
              backgroundColor: '#f44'
            });
          } else {
            console.log(111111);
            for (var i = 0; i < res.tempFilePaths.length; i++) {
              _this.imgFiles.push(res.tempFiles[i]);
              _this.imgFilePaths.push(res.tempFilePaths[i]);
            }
          }
          console.log(_this.imgFilePaths);
          // _this.imgFilePaths=res.tempFilePaths
          if (_this.imgFilePaths.length < 9) {
            _this.uploadBtn = true;
          } else {
            _this.uploadBtn = false;
          }
        }
      });
    },
    submintFn: function submintFn() {
      var _this2 = this;

      // ????????????
      if (this.iskey) {
        this.anonymousState = 1;
      } else {
        this.anonymousState = 0;
      }
      // ??????????????????
      if (this.iscall) {
        this.mobile = 1;
      } else {
        this.mobile = 0;
      }
      if (this.lywzId == '' || this.lylxid == '' || this.lylyid == '' || this.lybt == '' || this.lynr == '' || this.username == '' || this.phone == '' || this.address == '') {
        Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__["a" /* default */])({
          text: '?????????????????????????????????????????????????????????',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      } else {
        // if(!(/^1[12345789]\d{9}$/.test(this.phone))){
        //   Notify({
        //     text: '???????????????????????????????????????',
        //     duration: 1000,
        //     selector: '#custom-selector',
        //     backgroundColor: '#f44'
        //   })
        // }else{

        // }
        wx.showLoading({
          title: "?????????..."
        });
        this.$https.request({
          url: this.$interfaces.leavemessage,
          data: {
            fid: this.lywzId,
            typeId: this.lylxid,
            domainId: this.lylyid,
            subject: this.lybt,
            content: this.lynr,
            user_name: this.username,
            user_phone: this.phone,
            user_address: this.address,
            fileList: '',
            tid: '',
            anonymousState: this.anonymousState,
            mobile: this.mobile,
            source: 15
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            JwtAuthorization: this.$store.state.token
          },
          method: 'post'
        }).then(function (res) {
          _this2.tid = res.tid;
          var _this = _this2;
          if (_this.imgFilePaths && _this.imgFilePaths.length > 0) {
            for (var i = 0; i < _this.imgFilePaths.length; i++) {
              console.log(222222);
              console.log(_this.imgFilePaths[i]);
              wx.uploadFile({
                url: _this2.$interfaces.leavemessage, // ???????????????????????????????????????
                filePath: _this.imgFilePaths[i],
                name: 'fileList',
                header: {
                  'content-type': 'application/x-www-form-urlencoded',
                  JwtAuthorization: _this2.$store.state.token
                },
                formData: {
                  fid: _this.lywzId,
                  typeId: _this.lylxid,
                  domainId: _this.lylyid,
                  subject: _this.lybt,
                  content: _this.lynr,
                  user_name: _this.username,
                  user_phone: _this.phone,
                  user_address: _this.address,
                  tid: _this.tid,
                  anonymousState: _this2.anonymousState,
                  mobile: _this2.mobile
                },
                success: function success(res) {
                  var self = _this;
                  wx.hideLoading();
                  __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_dialog_dialog__["a" /* default */].alert({
                    message: '???????????????'
                  }).then(function () {
                    // on close
                    wx.switchTab({
                      url: "../mine/main"
                    });
                  });
                }
              });
            }
          } else {
            if (_this.tid) {
              __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_dialog_dialog__["a" /* default */].alert({
                message: '???????????????'
              }).then(function () {
                wx.switchTab({
                  url: "../mine/main"
                });
              });
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__["a" /* default */])({
                text: res.data.msg,
                duration: 1000,
                selector: '#custom-selector',
                backgroundColor: '#f44'
              });
            }
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "tabBox"
  }, [_c('div', {
    staticClass: "tabList"
  }, [_c('div', {
    staticClass: "listBox topinput"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.lybt),
      expression: "lybt",
      modifiers: {
        "lazy": true
      }
    }],
    attrs: {
      "auto-height": "",
      "maxlength": "30",
      "placeholder": "?????????????????????(?????????30??????)",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.lybt)
    },
    on: {
      "blur": _vm.lybtcompare,
      "change": function($event) {
        _vm.lybt = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "listBox topinput"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.lynr),
      expression: "lynr",
      modifiers: {
        "lazy": true
      }
    }],
    attrs: {
      "auto-height": "",
      "minlength": "20",
      "maxlength": "2000",
      "placeholder": "?????????????????????(20-2000???)",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.lynr)
    },
    on: {
      "blur": _vm.lynrcompare,
      "change": function($event) {
        _vm.lynr = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("????????????")]), _vm._v(" "), _c('div', {
    staticClass: "imgBox"
  }, _vm._l((_vm.imgFilePaths), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "imgList"
    }, [_c('i', {
      staticClass: "delBtn"
    }, [_c('van-icon', {
      attrs: {
        "name": "clear",
        "eventid": '2_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.delFn(index)
        }
      }
    })], 1), _vm._v(" "), _c('img', {
      attrs: {
        "src": item,
        "alt": ""
      }
    })], 1)
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.uploadBtn),
      expression: "uploadBtn"
    }],
    staticClass: "imgUpload",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.imgUpload
    }
  }, [_vm._v("\n          +\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("????????????"), _c('i', [_vm._v("?????????????????????????????????????????????????????????")])], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.username),
      expression: "username",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "inpBox",
    attrs: {
      "required": "",
      "type": "text",
      "placeholder": "??????????????????",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "change": function($event) {
        _vm.username = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.phone),
      expression: "phone",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "inpBox",
    attrs: {
      "required": "",
      "type": "number",
      "placeholder": "??????????????????",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "change": function($event) {
        _vm.phone = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.address),
      expression: "address",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "inpBox",
    attrs: {
      "required": "",
      "type": "text",
      "placeholder": "???????????????",
      "eventid": '6'
    },
    domProps: {
      "value": (_vm.address)
    },
    on: {
      "change": function($event) {
        _vm.address = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.submintFn
    }
  }, [_vm._v("????????????")]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "custom-selector",
      "mpcomid": '2'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-64241dcc", esExports)
  }
}

/***/ })

},[232]);