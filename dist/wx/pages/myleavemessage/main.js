require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(278);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_108a4e78_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(285);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(279)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-108a4e78"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_108a4e78_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myleavemessage\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-108a4e78", Component.options)
  } else {
    hotAPI.reload("data-v-108a4e78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 279:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mymsgList_index__ = __webpack_require__(281);
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
//
//
//
//
//
//
//
//
//
//
//

// import wdlyView from '../../components/wdlyview/index'



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      dataArr: [],
      dataArrs: [],
      nodatashow: false,
      user: '',
      threadState: '',
      handleState: '',
      listData: '',
      total: 0,
      type: '',
      blockData: [],
      pageSize: 10,
      domain: ''
    };
  },
  mounted: function mounted() {
    this.domain = this.$interfaces;
  },

  onPullDownRefresh: function onPullDownRefresh() {
    // 上拉刷新
    this.pageSize = 10;
    // this.dataArr = []
    // this.dataArrs = []
    this.getData();
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
      this.getData();
    }
  },
  onLoad: function onLoad(options) {
    if (this.nodatashow) {
      this.nodatashow = false;
    }
    this.type = 7;
    this.dataArr = [];
    this.dataArrs = [];
    this.getData();
    this.user = this.$store.state.user;
  },

  components: {
    mymsgList: __WEBPACK_IMPORTED_MODULE_1__components_mymsgList_index__["a" /* default */], wxParse: __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__["a" /* default */]
  },
  methods: {
    changeTil: function changeTil(e) {
      console.log(e.target.index);
      var type = e.target.index;
      switch (type) {
        case 0:
          this.nodatashow = false;
          this.dataArr = [];
          this.dataArrs = [];
          this.pageSize = 10;
          this.type = 7;
          this.getData();
          break;
        case 1:
          this.nodatashow = false;
          this.dataArr = [];
          this.dataArrs = [];
          this.pageSize = 10;
          this.type = 6;
          this.getData();
          break;
        case 2:
          this.nodatashow = false;
          this.dataArr = [];
          this.dataArrs = [];
          this.pageSize = 10;
          this.type = 9;
          console.log(this.type);
          this.getData();

          break;

        default:
          console.log("error");
          break;
      }
    },
    getData: function getData() {
      var _this = this;

      // 获取我的留言列表
      if (this.type == 7 || this.type == 6) {
        this.$https.request({
          url: this.$interfaces.myleavemessage,
          // url:'http://192.168.7.61:84/messageboard/internetUserInterface/selectThreadsByUser',
          data: {
            pageNum: 1,
            pageSize: this.pageSize,
            isAsc: 'desc',
            orderByColumn: 'create_time',
            type: this.type
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'post'
        }).then(function (res) {
          _this.total = res.total;
          res.rows.forEach(function (e) {
            console.log(e);
            // e.dateline = formatTime(new Date(e.dateline*1000))
            e.dateline = Object(__WEBPACK_IMPORTED_MODULE_2__static_js_date_js__["a" /* formatTime */])(new Date(e.dateline * 1000)).slice(0, 10);
          });
          // if(this.dataArr.length < 1){
          //   this.dataArr = res.rows
          // }else{
          //   this.dataArr.push(...res.rows)
          // }
          _this.dataArr = res.rows;
          console.log(res);
        }).catch(function (err) {
          console.log(err);
        });
      } else if (this.type == 9) {
        console.log(123);
        this.$https.request({
          url: this.$interfaces.ybj,
          // url:'http://192.168.7.61:84/messageboard/internetUserInterface/selectThreadsTrashByUser',
          data: {
            pageNum: 1,
            pageSize: this.pageSize,
            isAsc: 'desc',
            orderByColumn: 'create_time'
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'post'
        }).then(function (res) {
          console.log(res);
          _this.total = res.total;
          res.rows.forEach(function (e) {
            e.dateline = Object(__WEBPACK_IMPORTED_MODULE_2__static_js_date_js__["a" /* formatTime */])(new Date(e.dateline * 1000)).slice(0, 10);
          });
          // if(this.dataArrs == []){
          //   this.dataArrs = res.rows
          // }else{
          //   this.dataArrs.push(...res.rows)
          // }
          _this.dataArrs = res.rows;
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  },

  created: function created() {}
});

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4431de6a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(284);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(282)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4431de6a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4431de6a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\mymsgList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4431de6a", Component.options)
  } else {
    hotAPI.reload("data-v-4431de6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 282:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 283:
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


// import wxParse from 'mpvue-wxparse'
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    arr: Array
  },
  data: function data() {
    return {};
  },

  components: {
    // wxParse
  },
  mounted: function mounted() {},

  methods: {
    details: function details(e) {
      var _this = this;

      console.log(e);

      this.$https.request({
        url: this.$interfaces.contentDetails,
        data: {
          tid: e.queryCode
        },
        header: {

          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        },
        method: 'post'
      }).then(function (res) {
        if (res.code == 0) {
          _this.$store.dispatch('setWdlyItem', res.threadsObj);
          wx.navigateTo({
            url: '../wdlyxq/main?zt=self&tid=' + e.queryCode
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  computed: function computed() {},
  onLoad: function onLoad() {},
  onShow: function onShow() {},
  created: function created() {}
});

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, _vm._l((_vm.arr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "msg",
      class: {
        bangHei: index < 3 ? true : '', bangFir: index == 0 ? true : ''
      },
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.details(item)
        }
      }
    }, [_c('p', {
      staticClass: "title_s"
    }, [_c('span', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(item.subject)
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "content",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "btm"
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
     require("vue-hot-reload-api").rerender("data-v-4431de6a", esExports)
  }
}

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "{dataArr.length >0?main : main2}"
  }, [_c('van-tabs', {
    attrs: {
      "animated": "",
      "eventid": '0',
      "mpcomid": '13'
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
      "title": "办理中",
      "mpcomid": '3'
    }
  }, [(_vm.dataArr.length > 0 && _vm.type == 7) ? [_c('mymsgList', {
    attrs: {
      "arr": _vm.dataArr,
      "mpcomid": '0'
    }
  })] : [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/null.png",
      "alt": ""
    }
  })])]], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "部门回复",
      "mpcomid": '7'
    }
  }, [(_vm.dataArr.length > 0 && _vm.type == 6) ? [_c('mymsgList', {
    attrs: {
      "arr": _vm.dataArr,
      "mpcomid": '4'
    }
  })] : [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/null.png",
      "alt": ""
    }
  })])]], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "系统回复",
      "mpcomid": '12'
    }
  }, [(_vm.dataArrs.length > 0 && _vm.type == 9) ? [_c('div', {
    staticClass: "xthf"
  }, _vm._l((_vm.dataArrs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "msg",
      class: {
        bangHei: index < 3 ? true : '', bangFir: index == 0 ? true : ''
      }
    }, [_c('p', {
      staticClass: "title_s"
    }, [_c('span', {
      staticClass: "title"
    }, [_c('wxParse', {
      attrs: {
        "content": item.subject,
        "mpcomid": '8_' + index
      }
    })], 1)]), _vm._v(" "), _c('p', {
      staticClass: "content"
    }, [_c('wxParse', {
      attrs: {
        "content": item.content,
        "mpcomid": '9_' + index
      }
    })], 1), _vm._v(" "), _c('p', {
      staticClass: "btm"
    }, [_c('span', [_vm._v(_vm._s(item.nickName))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.dateline))])]), _vm._v(" "), _c('div', {
      staticClass: "system"
    }, [_c('span', [_vm._v("系统回复：")]), _vm._v(_vm._s(item.deleteInfo) + "  \n              ")])], 1)
  }))] : [_c('div', [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/null.png",
      "alt": ""
    }
  })])]], 2)], 1), _vm._v(" "), (_vm.nodatashow) ? _c('div', {
    staticClass: "nodata"
  }, [_vm._v("没有更多数据了")]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-108a4e78", esExports)
  }
}

/***/ })

},[277]);