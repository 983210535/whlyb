require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(133);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5e6f10e1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(213);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e6f10e1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5e6f10e1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\hot2\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e6f10e1", Component.options)
  } else {
    hotAPI.reload("data-v-5e6f10e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_view_index__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_block_index_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_searchview_index_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index_index__ = __webpack_require__(209);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dataArr: [],
      type: 1,
      fivefl: [],
      fup: 1
    };
  },

  components: {
    viewList: __WEBPACK_IMPORTED_MODULE_0__components_view_index__["a" /* default */], blockView: __WEBPACK_IMPORTED_MODULE_1__components_block_index_vue__["a" /* default */], searchView: __WEBPACK_IMPORTED_MODULE_2__components_searchview_index_vue__["a" /* default */], dqList: __WEBPACK_IMPORTED_MODULE_3__components_index_index__["a" /* default */]
  },
  onLoad: function onLoad() {
    this.type = 1;
    // this.getLeave()
  },
  onShow: function onShow() {
    this.getLeave();
  },
  onReachBottom: function onReachBottom() {
    //触底刷新

  },

  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    this.getLeave();
  },
  methods: {
    getLeave: function getLeave() {
      var _this = this;

      this.$https.request({
        url: this.$interfaces.fivefl,
        data: {
          type: this.type
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post'
      }).then(function (res) {
        console.log(res);
        _this.dataArr = res.forumList;
        wx.stopPullDownRefresh();
      }).catch(function (err) {});
    },
    changeTil: function changeTil(e) {
      console.log(e.target.index + 1);
      var type = e.target.index + 1;
      this.fup = e.target.index + 1;
      switch (type) {
        case 1:
          this.type = 1;
          this.getLeave();
          break;
        case 2:
          this.type = 4;
          this.getLeave();
          break;
        case 3:
          this.type = 5;
          this.getLeave();
          break;
        case 4:
          this.type = 3;
          this.getLeave();
          break;
        case 5:
          this.type = 2;
          this.getLeave();
          break;

        default:
          console.log("error");
          break;
      }
    },
    toBang: function toBang() {
      wx.navigateTo({ url: '../bang/main' });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1dd3fec5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(205);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1dd3fec5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1dd3fec5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\block\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dd3fec5", Component.options)
  } else {
    hotAPI.reload("data-v-1dd3fec5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 203:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'blockview',
  props: {
    blockData: Array
  },
  data: function data() {
    return {
      tabledata: [],
      mainip: '',
      domain: ''
    };
  },

  computed: {},
  components: {
    wxParse: __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__["a" /* default */]
  },
  mounted: function mounted() {
    this.domain = this.$interfaces;
    // console.log(this.domain)
  },

  methods: {
    goToItem: function goToItem(e) {
      var _this = this;

      // 跳转详情页
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
          _this.$store.dispatch('setSingleItem', res.threadsObj);
          wx.navigateTo({
            url: '../lyxq/main?tid=' + e.queryCode
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  onLoad: function onLoad() {
    // 获取配置的文件地址
    this.mainip = this.$interfaces.newleavemessage;
  },
  onShow: function onShow() {},
  created: function created() {}
});

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.blockData || _vm.blockData.length < 1) ? _c('div', {
    staticClass: "searchitem"
  }, [_c('span', {
    staticClass: "nodata"
  }, [_vm._v("暂无数据")])]) : _c('div', [_c('div', {
    staticClass: "blockview"
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
    })], 1), _vm._v(" "), (item.handleState == 1 || item.handleState == 2) ? _c('span', {
      staticClass: "blzt"
    }, [_vm._v("已回复")]) : _c('span', {
      staticClass: "blzt"
    }, [_vm._v("办理中")])]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('span', [_c('van-icon', {
      staticClass: "iconimg",
      attrs: {
        "name": "clock-o",
        "mpcomid": '1_' + index
      }
    }), _vm._v("\n            " + _vm._s(item.dateline_txt) + "\n          ")], 1), _vm._v(" "), _c('span', [_c('van-icon', {
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
    }), _vm._v("\n            " + _vm._s(item.typeId_txt + '　' + item.domainId_txt) + "\n          ")], 1)])])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1dd3fec5", esExports)
  }
}

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9422de6c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(212);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(210)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9422de6c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9422de6c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9422de6c", Component.options)
  } else {
    hotAPI.reload("data-v-9422de6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 210:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 211:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    dataArr: Array
  },
  data: function data() {
    return {};
  },

  components: {},
  mounted: function mounted() {},

  methods: {
    enterView: function enterView(e) {
      console.log(e);
      wx.navigateTo({ url: '../messageList/main?fid=' + e });
    },
    toBang: function toBang() {
      wx.navigateTo({ url: '../bang/main' });
    },
    goPeople: function goPeople() {
      wx.navigateTo({ url: '../people/main' });
    }
  },
  computed: function computed() {},
  onLoad: function onLoad() {},
  onShow: function onShow() {},
  created: function created() {}
});

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "bang"
  }, [_c('div', {
    staticClass: "come",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toBang
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/bang.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("进入排行榜")])]), _vm._v(" "), _c('div', {
    staticClass: "qzdp",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.goPeople
    }
  }, [_vm._v("\n      群众点评\n    ")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._l((_vm.dataArr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "area",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.enterView(item.fid)
        }
      }
    }, [_c('span', {
      staticClass: "qymz"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "total"
    }, [_vm._v(_vm._s(item.tnumYear))]), _vm._v(" "), _c('span', {
      staticClass: "total total_t"
    }, [_vm._v(_vm._s(item.anumYear))])])
  })], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top"
  }, [_c('span', [_vm._v("区域")]), _vm._v(" "), _c('span', [_vm._v("留言量")]), _vm._v(" "), _c('span', [_vm._v("回复量")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9422de6c", esExports)
  }
}

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('van-tabs', {
    attrs: {
      "animated": "",
      "sticky": "",
      "swipe-threshold": "3",
      "color": "#F54645",
      "title-inactive-color": "#F54645",
      "eventid": '0',
      "mpcomid": '15'
    },
    on: {
      "change": _vm.changeTil
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "各区(功能区)",
      "mpcomid": '2'
    }
  }, [(_vm.type == 1) ? [_c('dqList', {
    attrs: {
      "dataArr": _vm.dataArr,
      "mpcomid": '0'
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "政府部门",
      "mpcomid": '5'
    }
  }, [(_vm.type == 4) ? [_c('dqList', {
    attrs: {
      "dataArr": _vm.dataArr,
      "mpcomid": '3'
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "法检及其他单位",
      "mpcomid": '8'
    }
  }, [(_vm.type == 5) ? [_c('dqList', {
    attrs: {
      "dataArr": _vm.dataArr,
      "mpcomid": '6'
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "群团",
      "mpcomid": '11'
    }
  }, [(_vm.type == 3) ? [_c('dqList', {
    attrs: {
      "dataArr": _vm.dataArr,
      "mpcomid": '9'
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "党委系统",
      "mpcomid": '14'
    }
  }, [(_vm.type == 2) ? [_c('dqList', {
    attrs: {
      "dataArr": _vm.dataArr,
      "mpcomid": '12'
    }
  })] : _vm._e()], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e6f10e1", esExports)
  }
}

/***/ })

},[132]);