require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([21],{

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(243);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0bd9e93c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(246);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0bd9e93c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0bd9e93c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\lyxq\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0bd9e93c", Component.options)
  } else {
    hotAPI.reload("data-v-0bd9e93c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 244:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_date_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      mainIp: '',
      lyxqData: {},
      viewxq: {},
      bigshow: false,
      currentImg: '',
      newtime: ''
    };
  },


  components: {
    wxParse: __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__["a" /* default */]
  },

  methods: {
    showbig: function showbig(e) {
      // 查看大图
      this.currentImg = e;
      this.bigshow = true;
    },
    onClose: function onClose() {
      // 关闭遮罩
      this.bigshow = false;
    }
  },
  onShow: function onShow() {
    this.bigshow = false;
  },
  onLoad: function onLoad(option) {
    // 获取图片文件地址、留言详情
    this.lyxqData = this.$store.getters.singleItem;
    this.viewxq = this.$store.getters.singleItem;
    this.newtime = Object(__WEBPACK_IMPORTED_MODULE_1__static_js_date_js__["a" /* formatTime */])(new Date(this.lyxqData.lastupdate * 1000));
    this.mainIp = this.$interfaces.mainIp;
  },
  created: function created() {}
});

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "xqbox"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('wxParse', {
    attrs: {
      "content": _vm.lyxqData.subject,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [(_vm.lyxqData.anonymousState == 1) ? _c('span', [_c('van-icon', {
    staticClass: "iconimg",
    attrs: {
      "name": "user-circle-o",
      "mpcomid": '1'
    }
  })], 1) : _c('span', [_c('van-icon', {
    staticClass: "iconimg",
    attrs: {
      "name": "user-circle-o",
      "mpcomid": '2'
    }
  }), _vm._v("\n        " + _vm._s(_vm.lyxqData.nickName) + "\n      ")], 1), _vm._v(" "), _c('span', [_c('van-icon', {
    staticClass: "iconimg",
    attrs: {
      "name": "clock-o",
      "mpcomid": '3'
    }
  }), _vm._v("\n        " + _vm._s(_vm.lyxqData.dateline_txt) + "\n      ")], 1), _vm._v(" "), _c('p', {
    staticStyle: {
      "overflow": "hidden"
    }
  }, [_c('van-icon', {
    staticClass: "iconimg",
    attrs: {
      "name": "question-o",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "float": "left"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.lyxqData.domainId_txt + '　' + _vm.lyxqData.typeId_txt) + "\n        ")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "float": "left"
    }
  }, [_vm._v("\n          查询码：" + _vm._s(_vm.lyxqData.queryCode) + "\n        ")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mainbox"
  }, [_c('div', {
    staticClass: "nr"
  }, [_c('wxParse', {
    attrs: {
      "content": _vm.lyxqData.content,
      "mpcomid": '5'
    }
  })], 1), _vm._v(" "), (_vm.lyxqData.attachementsList && _vm.lyxqData.attachementsList != '') ? _c('div', {
    staticClass: "fjBox"
  }, [_c('div', {
    staticClass: "fjdesc"
  }, [_vm._v("留言附件：")]), _vm._v(" "), _c('div', {
    staticClass: "fjBox"
  }, [_c('ul', _vm._l((_vm.lyxqData.attachementsList), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.showbig(_vm.mainIp + item.attachment)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.mainIp + item.attachment,
        "alt": ""
      }
    })])
  }))], 1)]) : _vm._e()]), _vm._v(" "), ((!_vm.viewxq.answersList || _vm.viewxq.answersList.length < 1) && _vm.viewxq.threadState == 1 && _vm.viewxq.fidsNum > 0) ? _c('div', _vm._l((_vm.viewxq.fid_txt), function(item, index2) {
    return _c('div', {
      key: index2,
      staticClass: "answer"
    }, [_c('div', {
      staticClass: "answerBox"
    }, [_c('div', {
      staticClass: "blzInfo"
    }, [_c('span', [_vm._v(_vm._s(item.organization) + "正在办理中...")]), _c('i', {
      staticClass: "isanswer zzblz"
    })], 1)])])
  })) : _c('div', _vm._l((_vm.viewxq.fid_txt), function(item, index3) {
    return _c('div', {
      key: index3
    }, [(item.handlestate == 0 || item.handlestate == -1) ? _c('div', [_c('div', {
      staticClass: "answerBox"
    }, [_c('div', {
      staticClass: "blzInfo"
    }, [_c('span', [_vm._v(_vm._s(item.organization) + "正在办理中")]), _c('i', {
      staticClass: "isanswer zzblz",
      staticStyle: {
        "display": "inline-block",
        "color": "#ff9b00"
      }
    }), _vm._v("...\n              ")], 1)])]) : _vm._e(), _vm._v(" "), (item.handlestate == 1) ? _c('div', [_c('div', {
      staticClass: "answerBox"
    }, _vm._l((_vm.viewxq.answersList), function(answersItem, index6) {
      return _c('div', {
        key: index6
      }, [(item.forumUnid == answersItem.fid) ? _c('div', [_c('div', {
        staticClass: "answerContent"
      }, [_c('div', {
        staticClass: "topdesc"
      }, [_c('span', {
        staticClass: "itemTil"
      }, [_vm._v("官方回复\n                              ")]), _vm._v(" "), _c('div', [_c('span', {
        staticClass: "itemTil"
      }, [_vm._v("回复单位：")]), _vm._v(" "), (answersItem.organization && answersItem.organization != null) ? _c('span', [_vm._v(_vm._s(answersItem.organization))]) : _c('span', [_vm._v(_vm._s(item.organization))])]), _vm._v(" "), _c('div', {
        staticClass: "hfsj"
      }, [_c('span', {
        staticClass: "itemTil"
      }, [_vm._v("回复时间：")]), _vm._v("\n                              " + _vm._s(answersItem.dateline_txt) + "\n                            ")])]), _vm._v(" "), _c('div', [_c('span', {
        staticClass: "itemTil"
      }, [_vm._v("回复内容：")]), _vm._v(" "), _c('div', {
        staticClass: "brnbsp",
        staticStyle: {
          "background": "#f5f5f5"
        },
        domProps: {
          "innerHTML": _vm._s((answersItem.asContent))
        }
      })])]), _vm._v(" "), (answersItem.attachementsList && answersItem.attachementsList.length > 0) ? _c('div', [_c('div', {
        staticClass: "titledesc fjtitlebox"
      }, [_vm._v("回复附件：")]), _vm._v(" "), _c('div', {
        staticClass: "fj"
      }, [_c('ul', _vm._l((answersItem.attachementsList), function(answerfjitem, index) {
        return (answerfjitem.isimage == 1) ? _c('li', {
          key: answerfjitem.aid,
          attrs: {
            "eventid": '1_' + index3 + '-' + index6 + '-' + index
          },
          on: {
            "click": function($event) {
              _vm.showbig(_vm.mainIp + answerfjitem.attachment)
            }
          }
        }, [_c('img', {
          attrs: {
            "src": _vm.mainIp + answerfjitem.thumb,
            "alt": ""
          }
        })]) : _vm._e()
      }))], 1)]) : _vm._e(), _vm._v(" "), (answersItem.satisfaction > 0 && answersItem.fdid && answersItem.fdid != '') ? _c('div', {
        staticClass: "feedbackContent"
      }, [((answersItem.secondState == 0 && !answersItem.secondContent) || (!answersItem.secondState && !answersItem.secondContent) || answersItem.secondState == 1 || answersItem.secondState == 2) ? _c('div', [_c('span', {
        staticClass: "itemTil"
      }, [_vm._v("满意度：")]), _vm._v(" "), (answersItem.satisfaction == 3) ? _c('span', {
        staticClass: "myd"
      }, [_vm._v("满意")]) : _vm._e(), _vm._v(" "), (answersItem.satisfaction == 7) ? _c('span', {
        staticClass: "myd"
      }, [_vm._v("比较满意")]) : _vm._e(), _vm._v(" "), (answersItem.satisfaction == 9) ? _c('span', {
        staticClass: "myd"
      }, [_vm._v("不满意")]) : _vm._e(), _c('br')], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), (answersItem.satisfaction > 0) ? _c('div', [(answersItem.secondContent) ? _c('div', {
        staticClass: "answerContent"
      }, [_c('div', [_c('span', {
        staticClass: "itemTil"
      }, [_vm._v("二次回复时间：")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.newtime))])]), _vm._v(" "), _c('div', [_c('span', {
        staticClass: "itemTil"
      }, [_vm._v("官方二次回复:")]), _vm._v(" "), _c('div', {
        staticClass: "brnbsp",
        domProps: {
          "innerHTML": _vm._s(answersItem.secondContent)
        }
      }, [_vm._v(_vm._s(answersItem.secondContent))])])]) : _vm._e(), _vm._v(" "), (answersItem.secondAttachementsList && answersItem.secondAttachementsList.length > 0) ? _c('div', [_c('div', {
        staticClass: "titledesc fjtitlebox"
      }, [_vm._v("回复附件：")]), _vm._v(" "), _c('div', {
        staticClass: "fj"
      }, [_c('ul', _vm._l((answersItem.secondAttachementsList), function(answerfjitem, index) {
        return (answerfjitem.isimage == 1) ? _c('li', {
          key: index,
          attrs: {
            "eventid": '2_' + index3 + '-' + index6 + '-' + index
          },
          on: {
            "click": function($event) {
              _vm.showbig(_vm.mainIp + answerfjitem.attachment)
            }
          }
        }, [_c('img', {
          attrs: {
            "src": _vm.mainIp + answerfjitem.thumb,
            "alt": ""
          }
        })]) : _vm._e()
      }))], 1)]) : _vm._e(), _vm._v(" "), (answersItem.secondContent && answersItem.handleState == 4 && answersItem.fdid && answersItem.fdid != '') ? _c('div', {
        staticClass: "feedbackContent"
      }, [_c('span', {
        staticClass: "itemTil"
      }, [_vm._v("满意度：")]), _vm._v(" "), (answersItem.satisfaction == 3) ? _c('span', {
        staticClass: "myd"
      }, [_vm._v("满意")]) : _vm._e(), _vm._v(" "), (answersItem.satisfaction == 7) ? _c('span', {
        staticClass: "myd"
      }, [_vm._v("比较满意")]) : _vm._e(), _vm._v(" "), (answersItem.satisfaction == 9) ? _c('span', {
        staticClass: "myd"
      }, [_vm._v("不满意")]) : _vm._e(), _c('br')], 1) : _vm._e()]) : _vm._e()]) : _vm._e()])
    }))]) : _vm._e()])
  }))]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.bigshow,
      "eventid": '3',
      "mpcomid": '6'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('div', {
    staticClass: "bigImg"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentImg,
      "alt": ""
    }
  })])])], 1)
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
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0bd9e93c", esExports)
  }
}

/***/ })

},[242]);