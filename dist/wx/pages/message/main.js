require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(263);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26cd1841_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(266);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26cd1841"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26cd1841_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\message\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26cd1841", Component.options)
  } else {
    hotAPI.reload("data-v-26cd1841", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_vant_dist_dialog_dialog__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__ = __webpack_require__(18);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isRead: false,
      iscall: true,
      lybt: '',
      username: '',
      phone: '',
      address: '',
      uploadBtn: 'true',
      zzshow: '',
      cities: {},
      columns: [
      // 第一列
      {
        values: []
      },
      // 第二列
      {
        values: []
      }],
      lywzText: '',
      lywzId: '674221435723702272',
      imgFiles: [],
      imgFilePaths: [],
      tid: -1,
      anonymousState: 0,
      mobile: 1,
      count: ''
    };
  },

  components: {},
  onLoad: function onLoad() {
    var _this2 = this;

    this.isRead = false;
    this.lybt = '';
    this.lynr = '';
    this.lywzText = '';
    this.username = '';
    this.phone = '';
    this.address = '';
    this.imgFilePaths = [];
    this.imgFiles = [];
    this.anonymousState = 0;
    this.uploadBtn = true;
    this.count = 5;
    // this.cities = {}

    this.$https.request({
      url: this.$interfaces.leavemessagePosition,
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post'
    }).then(function (res) {
      console.log(res);
      if (!__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(_this2.cities).length) {
        for (var i = 0; i < res.length; i++) {
          _this2.cities[res[i].label] = new Array();
          for (var n = 0; n < res[i].children.length; n++) {
            _this2.cities[res[i].label].push({ text: res[i].children[n].label, id: res[i].children[n].value });
          }
          _this2.columns[0].values.push({ text: res[i].label, id: res[i].value });
        }
        for (var j = 0; j < res[0].children.length; j++) {
          _this2.columns[1].values.push({ text: res[0].children[j].label, id: res[0].children[j].value });
        }
      }

      console.log(_this2.cities);
      // var _this = this
      // Object.keys(_this.cities).forEach(function(key){
      //   _this.columns[0].values.push({
      //     text:key,
      //     value:key
      //   })
      //   _this.columns[1].values=_this.cities[_this.columns[0].values[0].text]
      // })
    });
  },

  methods: {
    //前往条约页面
    treaty: function treaty() {
      wx.navigateTo({ url: '../sub/treaty/main' });
    },
    toMap: function toMap() {
      var that = this;
      // wx.navigateTo({url: '../map/main'})
      wx.chooseLocation({
        success: function success(res) {
          console.log(res);
          that.address = res.name;
        },
        fail: function fail(err) {
          console.log(err);
          Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
            text: "获取定位失败",
            duration: 1000,
            selector: '#custom-selector',
            backgroundColor: '#f44'
          });
        }
      });
    },
    lywzCheck: function lywzCheck() {
      console.log(this.cities);
      this.zzshow = true;
      for (var i = 0; i < this.cities.length; i++) {
        this.columns[0].values.push({
          text: this.cities[i].label,
          id: this.cities[i].value
        });
      }
    },
    onChange: function onChange(e) {
      console.log(e);
      var _e$mp$detail = e.mp.detail,
          picker = _e$mp$detail.picker,
          value = _e$mp$detail.value,
          index = _e$mp$detail.index;

      picker.setColumnValues(1, this.cities[value[0].text]);
    },
    onCancel: function onCancel(e) {
      this.zzshow = false;
      console.log(e);
      console.log(this.$store.state.lywzdata);
    },
    onConfirm: function onConfirm(e) {
      this.zzshow = false;
      this.lywzText = e.mp.detail.value[1].text;
      this.lywzId = e.mp.detail.value[1].id;
      this.$store.dispatch('setCurrentLywz', e.mp.detail.value[1]);

      console.log(this.lywzText, this.lywzId);
    },
    delFn: function delFn(e) {
      // 图片文件的删除方法
      for (var i = 0; i < this.imgFiles.length; i++) {
        if (i == e) {
          this.imgFilePaths.splice(i, 1);
          this.imgFiles.splice(i, 1);
        }
      }
      if (this.imgFiles.length < 5) {
        this.uploadBtn = true;
        this.count = 5 - this.imgFiles.length;
      }
    },
    isCall: function isCall(e) {
      // 是否电话联系
      this.iscall = e.mp.detail;
    },
    isKey: function isKey(e) {
      this.iskey = e.mp.detail;
    },
    lynrcompare: function lynrcompare() {
      // 校验留言内容
      if (this.lynr.length < 20 || this.lynr.length > 2000) {
        Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
          text: "留言内容(20-2000字)!",
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      }
    },
    lybtcompare: function lybtcompare(e) {
      console.log(this.lybt);
      console.log(this.lybt.length);
      // 留言标题校验
      if (this.lybt == '' || this.lybt.length > 30) {
        Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
          text: "留言标题(不超过30字)!",
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      }
    },
    adress: function adress() {
      wx.navigateTo({ url: '../adress/main' });
    },
    imgUpload: function imgUpload() {
      // 图片上传
      var _this = this;
      console.log(_this.count);
      wx.chooseImage({
        count: _this.count,
        success: function success(res) {
          console.log(res);
          var curnum = _this.imgFiles.length;
          if (res.tempFiles.length > 5 - curnum) {
            Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
              text: "最多只能上传5张图片!",
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
          if (_this.imgFilePaths.length < 5) {
            _this.uploadBtn = true;
            _this.count = 5 - _this.imgFilePaths.length;
          } else {
            _this.uploadBtn = false;
          }
        }
      });
    },
    submintFn: function submintFn() {
      // 提交留言
      if (this.iskey) {
        this.anonymousState = 1;
      } else {
        this.anonymousState = 0;
      }
      // 是否电话联系
      if (this.iscall) {
        this.mobile = 1;
      } else {
        this.mobile = 0;
      }
      if (this.lywzId == '' || this.lybt == '' || this.lynr == '' || this.username == '' || this.phone == '' || this.address == '') {
        Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
          text: '除图片附件其他均为必填项，请完善信息！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      } else if (this.lybt.length > 30) {
        Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
          text: '标题请控制在30字以内！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      } else if (this.lynr.length < 20 || this.lynr.length > 2000) {
        Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
          text: '内容不能少于20字，且不能超过2000字！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      } else if (!this.isRead) {
        Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
          text: '请先阅读并同意《武汉城市留言板管理条约》！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      } else {
        wx.showLoading({
          title: "加载中...",
          mask: true
        });
        var that = this;
        wx.request({
          url: this.$interfaces.leavemessage,
          data: {
            fid: this.lywzId,
            typeId: 635836920174825472,
            domainId: 450,
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
          method: 'post',
          success: function success(res) {
            console.log(res);
            console.log(that);
            that.tid = res.data.tid;
            var _this = that;
            if (_this.imgFilePaths && _this.imgFilePaths.length > 0) {
              var i;

              (function () {
                var sum = 0;
                for (i = 0; i < _this.imgFilePaths.length; i++) {
                  console.log(222222);
                  console.log(_this.imgFilePaths[i]);
                  wx.uploadFile({
                    url: _this.$interfaces.leavemessage, // 仅为示例，非真实的接口地址
                    filePath: _this.imgFilePaths[i],
                    name: 'fileList',
                    header: {
                      'content-type': 'application/x-www-form-urlencoded',
                      JwtAuthorization: _this.$store.state.token
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
                      anonymousState: _this.anonymousState,
                      mobile: _this.mobile
                    },
                    success: function success(res) {
                      sum += 1;
                      if (sum == _this.imgFilePaths.length) {
                        wx.hideLoading();
                        __WEBPACK_IMPORTED_MODULE_1__static_vant_dist_dialog_dialog__["a" /* default */].alert({
                          message: '留言成功！'
                        }).then(function () {
                          // on close
                          wx.switchTab({
                            url: "../mine/main"
                          });
                        });
                      }
                    }
                  });
                }
              })();
            } else {
              console.log('xxxxxxxxxxxxxxxx');
              if (that.tid) {
                wx.hideLoading();
                __WEBPACK_IMPORTED_MODULE_1__static_vant_dist_dialog_dialog__["a" /* default */].alert({
                  message: '留言成功！'
                }).then(function () {
                  wx.switchTab({
                    url: "../mine/main"
                  });
                });
              } else {
                Object(__WEBPACK_IMPORTED_MODULE_2__static_vant_dist_notify_notify__["a" /* default */])({
                  text: res.data.msg,
                  duration: 1000,
                  selector: '#custom-selector',
                  backgroundColor: '#f44'
                });
              }
            }
          }
        });
      }
    },
    read: function read() {
      this.isRead = !this.isRead;
      console.log(this.isRead);
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "rows"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
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
      "type": "text",
      "placeholder": "不超过30个字，请勿填写特殊符号",
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
    staticClass: "content_s"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._m(1), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.lynr),
      expression: "lynr",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "txt",
    attrs: {
      "disable-default-padding": "",
      "minlength": "20",
      "maxlength": "2000",
      "placeholder": "请简要填写您要反映的问题，应包含时间、主体、事件描述三个要素，否则将无法为您及时处理。(字数控制在20-2000字之间)",
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
  }, [_c('p', [_vm._v("+")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("上传图片")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "rows"
  }, [_vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.username),
      expression: "username",
      modifiers: {
        "lazy": true
      }
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入联系人",
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "rows"
  }, [_vm._m(3), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.phone),
      expression: "phone",
      modifiers: {
        "lazy": true
      }
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入联系电话",
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "content_s"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._m(4), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.address),
      expression: "address",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "txt2",
    attrs: {
      "disable-default-padding": "",
      "maxlength": "50",
      "placeholder": "请具体到事发地址附近小区、道路或标志建筑物",
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
  }), _vm._v(" "), _c('van-button', {
    attrs: {
      "type": "default",
      "size": "small",
      "eventid": '7',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.toMap
    }
  }, [_vm._v("\n        获取定位\n      ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "check"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "eventid": '8'
    },
    on: {
      "click": _vm.read
    }
  }), _vm._v("我已阅读并同意"), _c('span', {
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.treaty
    }
  }, [_vm._v("《武汉城市留言板管理条约》")])]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    attrs: {
      "value": "true",
      "eventid": '10'
    },
    on: {
      "click": _vm.submintFn
    }
  }, [_vm._v("确认无误 提交留言")])], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.zzshow,
      "position": "bottom",
      "overlay": "true",
      "bind:close": "onClose",
      "mpcomid": '3'
    }
  }, [_c('van-picker', {
    attrs: {
      "show-toolbar": "",
      "title": "标题",
      "columns": _vm.columns,
      "eventid": '11',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.onChange,
      "cancel": _vm.onCancel,
      "confirm": _vm.onConfirm
    }
  })], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "custom-selector",
      "mpcomid": '5'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "colon"
  }, [_vm._v("*")]), _vm._v("标题:\n    ")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "colon"
  }, [_vm._v("*")]), _vm._v("内容:\n      ")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "colon"
  }, [_vm._v("*")]), _vm._v("联系人:\n    ")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "colon"
  }, [_vm._v("*")]), _vm._v("电话:\n    ")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "colon"
  }, [_vm._v("*")]), _vm._v("地址:\n      ")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26cd1841", esExports)
  }
}

/***/ })

},[262]);