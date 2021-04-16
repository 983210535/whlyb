require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([22],{

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(238);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7ae71eef_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(241);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(239)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ae71eef"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7ae71eef_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\lyDetails\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ae71eef", Component.options)
  } else {
    hotAPI.reload("data-v-7ae71eef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 239:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_toast_toast__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_wxparse__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      threads: {},
      orGz: false,
      mainIp: '',
      bigShow: false,
      currentImg: '',

      tid: '',
      userId: ""
    };
  },

  components: {
    wxParse: __WEBPACK_IMPORTED_MODULE_1_mpvue_wxparse__["a" /* default */]
  },
  computed: {
    token: function token() {
      return this.$store.state.token;
    }
  },
  onShow: function onShow() {
    this.bigShow = false;

    this.userId = this.$store.state.userId;
    console.log(this.userId);
    // console.log(option);
    // this.tid = option.tid
    this.tid = this.$store.getters.tid;

    this.getData();
  },
  onLoad: function onLoad() {
    // onLoad(option){
    this.threads = {};
    this.mainIp = this.$interfaces.mainIp;
  },

  methods: {
    getData: function getData() {
      var _this = this;

      var urls = '';
      if (this.userId) {
        console.log('now is login');
        urls = this.$interfaces.contentDetails;
      } else {
        console.log('now is not login');
        urls = this.$interfaces.contentDetail;
      }
      this.$https.request({
        url: urls,
        data: {
          tid: this.tid
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post'
      }).then(function (res) {
        console.log(res);
        if (res.code == 0) {
          _this.threads = res.threadsObj;
          _this.tid = res.threadsObj.tid;
          console.log(_this.threads);
        }
      }).catch(function (err) {});
    },
    showBig: function showBig(e) {
      this.currentImg = e;
      this.bigShow = true;
    },
    onClose: function onClose() {
      this.bigShow = false;
    },
    file: function file(url, name) {
      wx.downloadFile({
        url: url, //仅为示例，并非真实的资源
        filePath: wx.env.USER_DATA_PATH + '/' + name,
        success: function success(res) {
          console.log('========0', res);
          wx.openDocument({
            filePath: res.filePath,
            showMenu: true,
            success: function success(res) {
              console.log('打开文档成功');
            }
          });
        }
      });
    },
    BIG: function BIG(e, arr) {
      var _this2 = this;

      var urls = [];
      arr.forEach(function (item) {
        urls.push(_this2.mainIp + item.attachment);
      });
      wx.previewImage({
        current: e,
        urls: urls
      });
    },
    gz: function gz(focus) {
      var _this3 = this;

      console.log(focus);
      console.log(this.userId);
      if (this.userId) {
        this.$https.request({
          // url: 'http://192.168.7.61:84/messageboard/internetUserInterface/focusOnThreads',
          url: this.$interfaces.toFocus,
          data: {
            tid: this.tid,
            isfocusOn: focus,
            userId: this.userId

          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          methods: 'post'
        }).then(function (res) {
          console.log(res);
          _this3.threads.isFocusOn = focus;

          if (focus == 1) {
            __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_toast_toast__["a" /* default */].success("关注成功");
          } else {
            __WEBPACK_IMPORTED_MODULE_0__static_vant_dist_toast_toast__["a" /* default */].fail("关注取消");
          }
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        if (this.token) {
          wx.navigateTo({ url: '../register/main' });
        } else {
          console.log(this.token);
          var that = this;
          wx.showModal({
            title: '请先登录后再来关注哦',
            content: '是否立即登录',
            success: function success(res) {
              if (res.confirm) {
                that.$store.dispatch('setWantGz', true);
                wx.switchTab({
                  url: '../mine/main'
                });
                console.log('点击确认回调');
              } else {
                console.log('点击取消回调');
              }
            }
          });
        }
      }
      // this.orGz = !this.orGz 
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "xbox"
  }, [_c('div', {
    staticClass: "threads"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n          " + _vm._s(_vm.threads.subject) + "\n        ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.threads.nickName))]), _vm._v(" "), _c('p', [_c('span', [_vm._v("\n            " + _vm._s(_vm.threads.dateline_txt) + "\n          ")]), _vm._v(" "), _c('span', {
    staticClass: "seaTime"
  }, [_vm._v("\n            查询码：" + _vm._s(_vm.threads.queryCode) + "\n          ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "share"
  }, [(_vm.threads.isFocusOn == 0) ? [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/wgz.png",
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.gz(1)
      }
    }
  })] : [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/ygz.png",
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.gz(0)
      }
    }
  })], _vm._v("\n        关注\n        "), _c('button', {
    staticClass: "zf",
    attrs: {
      "open-type": "share"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "fx",
    attrs: {
      "src": "../../../static/images_pro/zf.png"
    }
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [(_vm.threads.content) ? _c('wxParse', {
    attrs: {
      "content": _vm.threads.content,
      "mpcomid": '2'
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.threads.attachementsList && _vm.threads.attachementsList != '') ? _c('div', {
    staticClass: "fjBox"
  }, [_c('div', {
    staticClass: "fjdesc"
  }, [_vm._v("留言附件：")]), _vm._v(" "), _c('div', {
    staticClass: "fjBox"
  }, [_c('ul', [_vm._l((_vm.threads.attachementsList), function(item, index) {
    return (item.isimage) ? _c('li', {
      key: index
    }, [_c('img', {
      attrs: {
        "src": _vm.mainIp + item.attachment,
        "alt": "",
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.BIG(_vm.mainIp + item.attachment, _vm.threads.attachementsList)
        }
      }
    })]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.threads.attachementsList), function(item, index) {
    return (!item.isimage) ? _c('p', {
      key: item.aid + 1,
      staticClass: "file",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.file(_vm.mainIp + item.attachment, item.fileName)
        }
      }
    }, [_vm._v(_vm._s(item.fileName))]) : _vm._e()
  })], 2)], 1)]) : _vm._e()]), _vm._v(" "), _c('div', _vm._l((_vm.threads.fid_txt), function(item, index3) {
    return _c('div', {
      key: index3
    }, [(item.handlestate == 0 || item.handlestate == -1 || item.handlestate == -2) ? _c('div', [_vm._m(0, true)]) : _vm._e(), _vm._v(" "), (item.handlestate == 1) ? _c('div', [_c('div', {
      staticClass: "answerBox"
    }, _vm._l((_vm.threads.answersList), function(answersItem, index6) {
      return _c('div', {
        key: index6
      }, [(item.forumUnid == answersItem.fid) ? _c('div', [_c('div', {
        staticClass: "answerContent"
      }, [_c('div', {
        staticClass: "topdesc"
      }, [_c('div', {
        staticClass: "dftitle"
      }, [_c('div', {
        staticClass: "dfwz"
      }, [_c('div', {
        staticClass: "da"
      }, [_vm._v("答")]), _vm._v(" "), (answersItem.organization && answersItem.organization != null) ? _c('div', [_vm._v(_vm._s(answersItem.organization))]) : _c('div', [_vm._v(_vm._s(item.organization))])]), _vm._v(" "), _c('p', {
        staticClass: "dfsj"
      }, [_vm._v(_vm._s(answersItem.dateline_txt))])], 1)]), _vm._v(" "), _c('div', {
        staticClass: "lyContent"
      }, [_c('div', {
        staticClass: "brnbsp",
        staticStyle: {
          "background": "#f5f5f5"
        },
        domProps: {
          "innerHTML": _vm._s((answersItem.asContent))
        }
      })]), _vm._v(" "), (answersItem.attachementsList && answersItem.attachementsList.length > 0) ? _c('div', [_c('div', {
        staticClass: "fjdesc titledesc fjtitlebox"
      }, [_vm._v("回复附件：")]), _vm._v(" "), _c('div', {
        staticClass: "fj"
      }, [_c('ul', [_vm._l((answersItem.attachementsList), function(answerfjitem, index) {
        return (answerfjitem.isimage == 1) ? _c('li', {
          key: answerfjitem.aid
        }, [_c('img', {
          attrs: {
            "src": _vm.mainIp + answerfjitem.thumb,
            "alt": "",
            "eventid": '4_' + index3 + '-' + index6 + '-' + index
          },
          on: {
            "click": function($event) {
              _vm.BIG(_vm.mainIp + answerfjitem.thumb, answersItem.attachementsList)
            }
          }
        })]) : _vm._e()
      }), _vm._v(" "), _vm._l((answersItem.attachementsList), function(answerfjitem, index) {
        return (answerfjitem.isimage == 0) ? _c('p', {
          key: index + 1,
          staticClass: "file",
          attrs: {
            "eventid": '5_' + index3 + '-' + index6 + '-' + index
          },
          on: {
            "click": function($event) {
              _vm.file(_vm.mainIp + answerfjitem.thumb, answerfjitem.fileName)
            }
          }
        }, [_vm._v(_vm._s(answerfjitem.fileName))]) : _vm._e()
      })], 2)], 1)]) : _vm._e(), _vm._v(" "), (answersItem.satisfaction > 0 && answersItem.fdid && answersItem.fdid != '') ? _c('div', {
        staticClass: "feedbackContent"
      }, [_c('div', {
        staticClass: "timepj"
      }, [(answersItem.secSatisfaction) ? _c('div', [(answersItem.satisfaction == 3) ? _c('span', {
        staticClass: "satisfaction"
      }, [_vm._v("\n                                  一次评价：满意\n                                ")]) : (answersItem.satisfaction == 7) ? _c('span', {
        staticClass: "satisfied"
      }, [_vm._v("\n                                  一次评价： 比较满意\n                                ")]) : _c('span', {
        staticClass: "dissatis"
      }, [_vm._v("\n                                  一次评价：不满意\n                                ")])]) : _c('div', [(answersItem.satisfaction == 3) ? _c('span', {
        staticClass: "satisfaction"
      }, [_vm._v("\n                                  评价： 满意\n                                ")]) : (answersItem.satisfaction == 7) ? _c('span', {
        staticClass: "satisfied"
      }, [_vm._v("\n                                  评价： 比较满意\n                                ")]) : _c('span', {
        staticClass: "dissatis"
      }, [_vm._v("\n                                  评价： 不满意\n                                ")])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(answersItem.feedbackCreateTime))])])]) : _vm._e()]), _vm._v(" "), (answersItem.satisfaction > 0) ? _c('div', [(answersItem.secondContent) ? _c('div', {
        staticClass: "answerContent"
      }, [_c('div', {
        staticClass: "dftitle"
      }, [_c('div', {
        staticClass: "dfwz"
      }, [_c('span', {
        staticClass: "da"
      }, [_vm._v("答")]), _vm._v(" "), (answersItem.organization && answersItem.organization != null) ? _c('span', [_vm._v("\n                                  " + _vm._s(answersItem.organization) + "二次回复\n                                ")]) : _vm._e()]), _vm._v(" "), _c('span', {
        staticClass: "dfsj"
      }, [_vm._v(_vm._s(answersItem.secanswerDatelineStr))])]), _vm._v(" "), _c('div', {
        staticClass: "lyContent"
      }, [_c('div', {
        staticClass: "brnbsp",
        staticStyle: {
          "background": "#f5f5f5"
        },
        domProps: {
          "innerHTML": _vm._s((answersItem.secondContent))
        }
      })]), _vm._v(" "), (answersItem.secondAttachementsList && answersItem.secondAttachementsList.length > 0) ? _c('div', [_c('div', {
        staticClass: "fjdesc titledesc fjtitlebox"
      }, [_vm._v("回复附件：")]), _vm._v(" "), _c('div', {
        staticClass: "fj"
      }, [_c('ul', [_vm._l((answersItem.secondAttachementsList), function(answerfjitem, index) {
        return (answerfjitem.isimage == 1) ? _c('li', {
          key: index
        }, [_c('img', {
          attrs: {
            "src": _vm.mainIp + answerfjitem.thumb,
            "alt": "",
            "eventid": '6_' + index3 + '-' + index6 + '-' + index
          },
          on: {
            "click": function($event) {
              _vm.BIG(_vm.mainIp + answerfjitem.thumb, answersItem.secondAttachementsList)
            }
          }
        })]) : _vm._e()
      }), _vm._v(" "), _vm._l((answersItem.secondAttachementsList), function(answerfjitem, index) {
        return (answerfjitem.isimage == 0) ? _c('p', {
          key: index + 1,
          staticClass: "file",
          attrs: {
            "eventid": '7_' + index3 + '-' + index6 + '-' + index
          },
          on: {
            "click": function($event) {
              _vm.file(_vm.mainIp + answerfjitem.thumb, answerfjitem.fileName)
            }
          }
        }, [_vm._v(_vm._s(answerfjitem.fileName))]) : _vm._e()
      })], 2)], 1)]) : _vm._e(), _vm._v(" "), (answersItem.secondContent && answersItem.handleState == 4 && answersItem.fdid && answersItem.fdid != '' && answersItem.isAutoFeedBack != 1) ? _c('div', {
        staticClass: "feedbackContent"
      }, [_c('div', {
        staticClass: "timepj"
      }, [(answersItem.secSatisfaction == 3) ? _c('span', {
        staticClass: "satisfaction"
      }, [_vm._v("\n                                  二次评价： 满意\n                                ")]) : (answersItem.secSatisfaction == 7) ? _c('span', {
        staticClass: "satisfied"
      }, [_vm._v("\n                                  二次评价： 比较满意\n                                ")]) : _c('span', {
        staticClass: "dissatis"
      }, [_vm._v("\n                                  二次评价： 不满意\n                                ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(answersItem.secFeedbackCreateTime))])])]) : _vm._e()]) : _vm._e()]) : _vm._e()]) : _vm._e()])
    }))]) : _vm._e()])
  })), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.bigShow,
      "eventid": '9',
      "mpcomid": '3'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('div', {
    staticClass: "bigImg"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentImg,
      "alt": "",
      "mode": "widthFix",
      "eventid": '8'
    },
    on: {
      "click": _vm.onClose
    }
  })])]), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '4'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "answerBox"
  }, [_c('div', {
    staticClass: "blzInfo"
  }, [_c('span', [_vm._v("办理中")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ae71eef", esExports)
  }
}

/***/ })

},[237]);