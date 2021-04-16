require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([24],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(225);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    config: {}
});

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_767a660c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(231);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(226)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-767a660c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_767a660c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\leavemessage\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-767a660c", Component.options)
  } else {
    hotAPI.reload("data-v-767a660c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 226:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      lylx: '',
      lyly: '',
      lylxId: '',
      lylyId: '',
      lylxshow: false,
      lylyshow: false,
      lylxcolumns: [],
      lylycolumns: [],
      citys: '',
      lywz: '',
      zzshow: false,
      lywzText: '',
      lywzId: '',
      columns: [{
        values: [],
        className: 'column1'
      }, {
        values: [],
        className: 'column2',
        defaultIndex: 2
      }]
    };
  },

  components: {},
  onShow: function onShow() {
    this.lylxId = '';
    this.lylyId = '';
    this.lywzId = '';
    this.lywzText = '';
    this.lylx = '';
    this.lyly = '';
    this.getlylx();
    this.getlyly();
    this.citys = this.$store.state.lywzdata;
    var _this = this;
    // 区域列表渲染
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(_this.citys).forEach(function (key) {
      _this.columns[0].values.push({
        text: key,
        value: key
      });

      _this.columns[1].values = _this.citys[_this.columns[0].values[0].text];
    });
    // _this.lywzText=_this.columns[1].values[0].text
    // _this.lywzId=_this.columns[1].values[0].id
    _this.$store.dispatch('setCurrentLywz', _this.columns[1].values[0]);
    _this.lylxId = '';
    _this.lylyId = '';
    _this.lywzId = '';
    _this.lywzText = '';
    _this.lylx = '';
    _this.lyly = '';
  },
  onLoad: function onLoad(options) {
    this.getlylx();
    this.getlyly();
    this.citys = this.$store.state.lywzdata;
    var _this = this;
    // 区域列表渲染
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(_this.citys).forEach(function (key) {
      _this.columns[0].values.push({
        text: key,
        value: key
      });

      _this.columns[1].values = _this.citys[_this.columns[0].values[0].text];
    });
    // _this.lywzText=_this.columns[1].values[0].text
    // _this.lywzId=_this.columns[1].values[0].id
    _this.$store.dispatch('setCurrentLywz', _this.columns[1].values[0]);
    _this.lylxId = '';
    _this.lylyId = '';
    _this.lywzId = '';
    _this.lywzText = '';
    _this.lylx = '';
    _this.lyly = '';
  },

  methods: {
    lywzCheck: function lywzCheck() {
      // 选择留言位置
      this.zzshow = true;
      for (var i = 0; i < this.citys.length; i++) {
        this.columns[0].values.push({ text: this.citys[i].label, id: this.citys[i].value });
      }
    },
    onChange: function onChange(event) {
      // 标题栏列change事件
      var _event$mp$detail = event.mp.detail,
          picker = _event$mp$detail.picker,
          value = _event$mp$detail.value,
          index = _event$mp$detail.index;

      picker.setColumnValues(1, this.citys[value[0].text]);
    },
    onConfirm: function onConfirm(event) {
      // 留言位置确认事件
      this.zzshow = false;
      this.lywzText = event.mp.detail.value[1].text;
      this.lywzId = event.mp.detail.value[1].id;
      this.$store.dispatch('setCurrentLywz', event.mp.detail.value[1]);
    },
    onCancel: function onCancel(event) {
      // 留言位置取消事件
      this.zzshow = false;
    },
    getlylx: function getlylx() {
      var _this2 = this;

      // 获取留言类型
      this.$https.request({
        url: this.$interfaces.leavemessageType,
        data: {},
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        }
      }).then(function (res) {
        var _this = _this2;
        res.forEach(function (item) {
          _this.lylxcolumns.push({
            text: item.label,
            value: item.value
          });
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    getlyly: function getlyly() {
      var _this3 = this;

      // 获取留言领域
      this.$https.request({
        url: this.$interfaces.leavemessageArea,
        data: {},
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        }
      }).then(function (res) {
        var _this = _this3;
        // Object.keys(res).forEach(function(key){
        //   _this.lylycolumns.push({
        //     text:res[key],
        //     value:key
        //   })
        // })

        res.forEach(function (item) {
          _this.lylycolumns.push({
            text: item.label,
            value: item.value
          });
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    lylxCheck: function lylxCheck() {
      // 留言类型遮罩层弹出
      this.lylxshow = true;
    },
    lylxOnConfirm: function lylxOnConfirm(e) {
      // 留言类型确认
      this.lylx = e.mp.detail.value.text;
      this.lylxId = e.mp.detail.value.value;
      this.lylxshow = false;
    },
    lylxOnCancel: function lylxOnCancel() {
      // 留言类型取消
      this.lylxshow = false;
    },
    lylyCheck: function lylyCheck() {
      // 留言领域弹窗显示
      this.lylyshow = true;
    },
    lylyOnConfirm: function lylyOnConfirm(e) {
      // 留言领域确认
      this.lyly = e.mp.detail.value.text;
      this.lylyId = e.mp.detail.value.value;
      this.lylyshow = false;
    },
    lylyOnCancel: function lylyOnCancel() {
      // 留言领域取消
      this.lylyshow = false;
    },
    switchToLeaveTab: function switchToLeaveTab() {
      // tab切换
      if (this.lylxId != '' && this.lylyId != '' && this.lywzId != '') {
        this.$store.dispatch('setLylxId', this.lylxId);
        this.$store.dispatch('setLylyId', this.lylyId);
        this.$store.dispatch('setLywzId', this.lywzId);
        this.lylxId = '';
        this.lylyId = '';
        this.lywzId = '';
        this.lywzText = '';
        this.lylx = '';
        this.lyly = '';
        wx.navigateTo({
          url: '../leavetab/main'
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__["a" /* default */])({
          text: '请选择对应信息！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
      }
    }
  },

  created: function created() {}
});

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "top"
  }, [_vm._v("请选择留言种类")]), _vm._v(" "), _c('div', {
    staticClass: "leaveBox"
  }, [_c('div', {
    staticClass: "inputBox"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.lylx,
      "required": "",
      "clearable": "",
      "label": "留言类型",
      "readonly": "",
      "placeholder": "请选择",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.lylxCheck
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.lyly,
      "label": "留言领域",
      "readonly": "",
      "placeholder": "请选择",
      "required": "",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.lylyCheck
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.lywzText,
      "label": "留言位置",
      "readonly": "",
      "placeholder": "请选择",
      "required": "",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.lywzCheck
    }
  })], 1), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.switchToLeaveTab
    }
  }, [_vm._v("下一步")])], 1)]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.lylxshow,
      "position": "bottom",
      "overlay": "true",
      "bind:close": "onClose",
      "mpcomid": '5'
    }
  }, [_c('van-picker', {
    attrs: {
      "show-toolbar": "",
      "title": "留言类型",
      "default-index": 0,
      "columns": _vm.lylxcolumns,
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "cancel": _vm.lylxOnCancel,
      "confirm": _vm.lylxOnConfirm
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.lylyshow,
      "position": "bottom",
      "overlay": "true",
      "bind:close": "onClose",
      "mpcomid": '7'
    }
  }, [_c('van-picker', {
    attrs: {
      "show-toolbar": "",
      "title": "留言领域",
      "default-index": 0,
      "columns": _vm.lylycolumns,
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "cancel": _vm.lylyOnCancel,
      "confirm": _vm.lylyOnConfirm
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.zzshow,
      "position": "bottom",
      "overlay": "true",
      "bind:close": "onClose",
      "mpcomid": '9'
    }
  }, [_c('van-picker', {
    attrs: {
      "show-toolbar": "",
      "title": "留言位置",
      "columns": _vm.columns,
      "eventid": '6',
      "mpcomid": '8'
    },
    on: {
      "change": _vm.onChange,
      "cancel": _vm.onCancel,
      "confirm": _vm.onConfirm
    }
  })], 1), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "custom-selector",
      "mpcomid": '10'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/leave_bg.jpg",
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
     require("vue-hot-reload-api").rerender("data-v-767a660c", esExports)
  }
}

/***/ })

},[224]);