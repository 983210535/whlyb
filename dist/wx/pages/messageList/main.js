require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(268);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4767e47f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(271);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(269)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4767e47f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4767e47f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\messageList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4767e47f", Component.options)
  } else {
    hotAPI.reload("data-v-4767e47f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 269:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_view_index__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_msgList_index__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_date_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      arr: [],
      handleArr: '',
      handlesArr: '',
      fid: '',
      pageSize: 10,
      pageNum: 1,
      handleState: '',
      nodatashow: false,
      total: 0,
      loadding: false

    };
  },

  components: {
    viewList: __WEBPACK_IMPORTED_MODULE_0__components_view_index__["a" /* default */], msgList: __WEBPACK_IMPORTED_MODULE_1__components_msgList_index__["a" /* default */]
  },

  onLoad: function onLoad(e) {
    if (this.nodatashow) {
      this.nodatashow = false;
    } else if (this.loadding) {
      this.loadding = false;
    }

    this.arr = [];
    this.pageNum = 1;
    this.pageSize = 10, this.handleState = '';
    console.log(e);
    this.fid = e.fid;
    this.getLy();
  },
  onReachBottom: function onReachBottom() {
    // wx.stopPullDownRefresh()
    //触底刷新
    this.loadding = true;
    // if(this.arr.length  <= this.pageSize ){
    this.pageSize = this.pageSize + 10;
    // this.getLy()
    // }
    console.log(this.pageSize);
    if (this.pageSize - 10 > this.total) {
      this.loadding = false;
      this.nodatashow = true;
    } else {
      this.nodatashow = false;
      this.getLy();
    }
  },

  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    // this.arr = []
    // this.pageNum = 1 
    // this.getLy()
    // wx.stopPullDownRefresh();
    this.pageSize = 10;
    this.getLy();
    // wx.stopPullDownRefresh()
  },
  methods: {
    getLy: function getLy() {
      var _this = this;

      console.log(this.handleState);
      this.$https.request({
        url: this.$interfaces.arealeavemessage,
        data: {
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          fid: this.fid,
          handleState: this.handleState,
          threadState: this.threadState
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        method: 'post'
      }).then(function (res) {
        // console.log(res)
        if (_this.loadding) {
          _this.loadding = false;
        }
        _this.total = res.total;
        // this.getDate(res.rows)
        res.rows.forEach(function (e, index) {
          // console.log(e);
          // e.dateline = formatTime(new Date(e.dateline*1000))
          e.dateline = Object(__WEBPACK_IMPORTED_MODULE_2__static_js_date_js__["a" /* formatTime */])(new Date(e.dateline * 1000)).slice(0, 10);
          console.log(index, e.subject, e.content);
          e.subject = _this.removeHtml(e.subject);
          e.content = _this.removeHtml(e.content);
          console.log(index, e.subject, e.content);
        });
        _this.arr = res.rows;
        wx.stopPullDownRefresh();
        // if(this.handleState == 2){
        //   // if(this.arr.length != 0){
        //   //   this.arr.push(...res.rows)
        //   // }else{
        //     this.arr = res.rows
        //   // }
        // }else if(this.handleState == 3){
        //   // if(this.arr.length != 0){
        //   //   this.arr.push(...res.rows)
        //   // }else{
        //     this.arr = res.rows
        //   // }
        // }else{
        //   // if(this.arr.length != 0){
        //   //   this.arr.push(...res.rows)
        //   // }else{
        //     this.arr = res.rows
        //   // }
        // }
      }).catch(function (err) {});
    },
    removeHtml: function removeHtml(value) {
      var value1 = !value ? '' : String(value).replace(/&nbsp;/g, '').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, "");
      return value1;
    },
    getDate: function getDate(e) {
      e.map(function (i) {
        var date = new Date(i.dateline * 1000);
        var b = date.toLocaleString().slice(0, 10);
        i.dateline = b;
        return i;
      });
      return e;
    },
    changeTil: function changeTil(e) {
      var index = e.target.index + 1;
      console.log(index);
      if (this.nodatashow) {
        this.nodatashow = false;
      }

      switch (index) {
        case 1:
          this.handleState = '';
          this.pageSize = 10;

          this.getLy();
          break;

        case 2:
          this.handleState = index;
          this.pageSize = 10;

          this.getLy();
          break;

        case 3:
          this.handleState = index;
          this.pageSize = 10;

          this.getLy();
          break;
        default:
          console.log("ERROR!!!");
      }
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('van-tabs', {
    attrs: {
      "animated": "",
      "eventid": '0',
      "mpcomid": '12'
    },
    on: {
      "change": _vm.changeTil
    },
    model: {
      value: (_vm.active),
      callback: function($$v) {
        _vm.active = $$v
      },
      expression: "active"
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "全部",
      "mpcomid": '3'
    }
  }, [(_vm.arr.length > 0 && _vm.handleState == '') ? [_c('msgList', {
    attrs: {
      "arr": _vm.arr,
      "mpcomid": '0'
    }
  })] : [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/null.png",
      "alt": ""
    }
  })])]], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "办理中",
      "mpcomid": '7'
    }
  }, [(_vm.arr.length > 0 && _vm.handleState == 2) ? [_c('msgList', {
    attrs: {
      "arr": _vm.arr,
      "mpcomid": '4'
    }
  })] : [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/null.png",
      "alt": ""
    }
  })])]], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "已回复",
      "mpcomid": '11'
    }
  }, [(_vm.arr.length > 0 && _vm.handleState == 3) ? [_c('msgList', {
    attrs: {
      "arr": _vm.arr,
      "mpcomid": '8'
    }
  })] : [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/null.png",
      "alt": ""
    }
  })])]], 2)], 1), _vm._v(" "), (_vm.nodatashow) ? _c('div', {
    staticClass: "nodata"
  }, [_vm._v("没有更多数据了")]) : _vm._e(), _vm._v(" "), (_vm.loadding) ? _c('div', {
    staticClass: "nodata"
  }, [_vm._v("正在加载请稍后")]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4767e47f", esExports)
  }
}

/***/ })

},[267]);