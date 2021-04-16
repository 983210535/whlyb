require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(352);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_364b3c8a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(359);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(353)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-364b3c8a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_364b3c8a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\ybj\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-364b3c8a", Component.options)
  } else {
    hotAPI.reload("data-v-364b3c8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 353:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_wdlyview_index__ = __webpack_require__(355);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      nodatashow: false,
      user: '',
      threadState: '',
      handleState: '',
      listData: '',
      total: 0,
      type: '',
      blockData: [],
      pageSize: 10
    };
  },

  onPullDownRefresh: function onPullDownRefresh() {
    // 上拉刷新
    this.pageSize = 10;
    this.getData();
  },
  onReachBottom: function onReachBottom() {
    // 停止下拉刷新
    // wx.stopPullDownRefresh()
    this.pageSize = this.pageSize + 10;
    if (this.pageSize - 10 > this.total) {
      this.nodatashow = true;
    } else {
      this.nodatashow = false;
      this.getData();
    }
  },
  onLoad: function onLoad(options) {
    this.type = options.type;
    this.$store.state.lytype = this.type;
    this.getData();
    this.user = this.$store.state.user;
  },

  components: {
    wdlyView: __WEBPACK_IMPORTED_MODULE_0__components_wdlyview_index__["a" /* default */]
  },
  methods: {
    getData: function getData() {
      var _this = this;

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
        _this.listData = res.rows;
        _this.blockData = res.rows;
        _this.total = res.total;
        wx.stopPullDownRefresh();
      }).catch(function (err) {
        console.log(err);
      });
    }
  },

  created: function created() {}
});

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6618869d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(358);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(356)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6618869d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6618869d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\wdlyview\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6618869d", Component.options)
  } else {
    hotAPI.reload("data-v-6618869d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 356:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'blockview',
  props: {
    title: String,
    blzt: String,
    time: String,
    user: String,
    lylx: String,
    singleItem: Array,
    blockData: Array,
    leaveType: Number
  },
  data: function data() {
    return {
      tabledata: [],
      mainip: '',
      domain: this.$interfaces
    };
  },

  computed: {
    lytype: {
      get: function get() {
        return this.$store.state.lytype;
      },
      set: function set() {}
    }
  },
  components: {
    wxParse: __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__["a" /* default */]
  },
  mounted: function mounted() {
    this.domain = this.$interfaces;
  },

  methods: {
    goToItem: function goToItem(e) {
      var _this = this;

      if (this.lytype == '10') {
        wx.navigateTo({
          url: '../wdlyxq/main?tid=' + e.queryCode
        });
      } else {
        // 跳转到详情页
        this.$https.request({
          url: this.$interfaces.contentDetail,
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
    }
  },
  onLoad: function onLoad() {
    // 获取自定义文件路径
    this.mainip = this.$interfaces.newleavemessage;
  },
  onShow: function onShow() {},
  created: function created() {
    // console.log(this.$store.state.lytype)
  }
});

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.lytype == '6') ? _c('div', {
    staticClass: "wdlyview"
  }, _vm._l((_vm.blockData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "cradBox",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToItem(item)
        }
      }
    }, [(item.userHead) ? _c('div', {
      staticClass: "itemicon"
    }, [_c('img', {
      attrs: {
        "src": _vm.domain.usericon + item.userHead,
        "alt": ""
      }
    })]) : _c('div', {
      staticClass: "itemicon"
    }, [_c('img', {
      attrs: {
        "src": _vm.domain.defaltUsericon,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "top"
    }, [_c('span', {
      staticClass: "title"
    }, [_c('wxParse', {
      attrs: {
        "content": item.subject,
        "mpcomid": '0_' + index
      }
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('span', [_c('van-icon', {
      staticClass: "iconimg",
      attrs: {
        "name": "clock-o",
        "mpcomid": '1_' + index
      }
    }), _vm._v("\n          " + _vm._s(item.dateline_txt) + "\n        ")], 1), _vm._v(" "), _c('span', [_c('van-icon', {
      staticClass: "iconimg",
      attrs: {
        "name": "user-circle-o",
        "mpcomid": '2_' + index
      }
    }), _vm._v(" "), (item.anonymousState == 1) ? _c('span') : _c('span', [_vm._v(_vm._s(item.nickName))])], 1), _vm._v(" "), _c('span', [_c('van-icon', {
      staticClass: "iconimg",
      attrs: {
        "name": "question-o",
        "mpcomid": '3_' + index
      }
    }), _vm._v(" "), _vm._v("\n          " + _vm._s(item.typeId_txt + '　' + item.domainId_txt) + "\n        ")], 1)])])
  })) : _c('div', {
    staticClass: "wdlyview"
  }, _vm._l((_vm.blockData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "cradBox",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.goToItem(item)
        }
      }
    }, [(item.userHead) ? _c('div', {
      staticClass: "itemicon"
    }, [_c('img', {
      attrs: {
        "src": _vm.domain.usericon + item.userHead,
        "alt": ""
      }
    })]) : _c('div', {
      staticClass: "itemicon"
    }, [_c('img', {
      attrs: {
        "src": _vm.domain.defaltUsericon,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "top"
    }, [_c('span', {
      staticClass: "title"
    }, [_c('wxParse', {
      attrs: {
        "content": item.subject,
        "mpcomid": '4_' + index
      }
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('span', [_c('van-icon', {
      staticClass: "iconimg",
      attrs: {
        "name": "clock-o",
        "mpcomid": '5_' + index
      }
    }), _vm._v("\n          " + _vm._s(item.dateline_txt) + "\n        ")], 1), _vm._v(" "), _c('span', [_c('van-icon', {
      staticClass: "iconimg",
      attrs: {
        "name": "user-circle-o",
        "mpcomid": '6_' + index
      }
    }), _vm._v(" "), (item.anonymousState == 1) ? _c('span') : _c('span', [_vm._v(_vm._s(item.nickName))])], 1), _vm._v(" "), _c('span', [_c('van-icon', {
      staticClass: "iconimg",
      attrs: {
        "name": "question-o",
        "mpcomid": '7_' + index
      }
    }), _vm._v(" "), _vm._v("\n          " + _vm._s(item.typeId_txt + '　' + item.domainId_txt) + "\n        ")], 1)])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6618869d", esExports)
  }
}

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cardBox"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "12",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": function($event) {
        _vm.gotoPage('threadState', 1)
      }
    }
  }, [_c('div', {
    staticClass: "imgicon"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatarUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "icondesc"
  }, [_vm._v(_vm._s(_vm.user.nickName))])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "12",
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "click": function($event) {
        _vm.gotoPage('handleState', 1)
      }
    }
  }, [_c('div', {
    staticClass: "imgicon"
  }, [(_vm.total > 99) ? _c('span', [(_vm.total > 99) ? _c('van-icon', {
    attrs: {
      "size": "32px",
      "color": "#61a8f1",
      "name": "checked",
      "info": "99+",
      "mpcomid": '1'
    }
  }) : _vm._e()], 1) : _c('span', [(_vm.total < 1) ? _c('span', [_c('van-icon', {
    attrs: {
      "size": "32px",
      "color": "#61a8f1",
      "name": "checked",
      "mpcomid": '2'
    }
  })], 1) : _c('span', [_c('van-icon', {
    attrs: {
      "size": "32px",
      "color": "#61a8f1",
      "name": "checked",
      "info": _vm.total,
      "mpcomid": '3'
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "icondesc"
  }, [_vm._v("系统回复")])])], 1)], 1)]), _vm._v(" "), (_vm.total < 1) ? _c('div', {
    staticClass: "nodata"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "switchlist"
  }, [_c('wdly-view', {
    attrs: {
      "blockData": _vm.blockData,
      "leaveType": _vm.type,
      "singleItem": _vm.item,
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), (_vm.nodatashow) ? _c('div', {
    staticClass: "nodata"
  }, [_vm._v("没有更多数据")]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topImg"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/mine_top.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-364b3c8a", esExports)
  }
}

/***/ })

},[351]);