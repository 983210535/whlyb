require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([30],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(106);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a57dc458_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(109);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a57dc458"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a57dc458_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\bang\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a57dc458", Component.options)
  } else {
    hotAPI.reload("data-v-a57dc458", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      lylarr: [],
      hflarr: [],
      hflvarr: [],
      mylvarr: []
    };
  },

  components: {},
  onLoad: function onLoad(option) {
    var _this = this;

    this.mylvarr = this.$store.state.mylvarr;
    // this.mylv()
    this.$https.request({
      url: this.$interfaces.fivefl,
      data: {
        type: 1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      method: 'post'
    }).then(function (res) {
      // var arr = res.forumList.sort((a,b)=>{
      //   var val1 = a.threadsNum
      //   var val2 = b.threadsNum
      //   return val2 - val1
      // }).slice(0,10)
      // console.log(res);
      console.log(res);
      _this.lylarr = res.phb.lylph;
      _this.hflarr = res.phb.hflph;
      _this.hflvarr = res.phb.hflvph;
      // this.myd = res.phb.lylph
      // console.log(res.forumList)
      // var arr = []
      // console.log(arr);
      // res.forumList.forEach(function(i,index){
      //     if(i.fup == 1){
      //     console.log(index+':'+i.name);
      //       i.percent = i.answersNum/i.threadsNum
      //       arr.push(i)
      //     }
      // })
      // console.log(arr);
      // var arr2 = arr.sort(function(obj1,obj2){
      //   var val1 = obj1.threadsNum
      //   var val2 = obj2.threadsNum
      //   return val2 - val1
      // }).slice(0,10)
      // console.log(arr2);
      // this.bang = arr2

      // var arr3 = arr.sort((obj1,obj2)=>{
      //   var val1 = obj1.percent
      //   var val2 = obj2.percent
      //   return val2 - val1
      // }).slice(0,10)

      // this.percent = arr3.map((i)=>{
      //   i.percent = parseInt(i.percent*100)+"%"
      //   return i
      // })

    }).catch(function (err) {});
  },

  methods: {
    mylv: function mylv() {
      var _this2 = this;

      this.$https.request({
        // url:'http://192.168.7.61:84/messageboard/internetUserInterface/fivemyfl',
        url: this.$interfaces.satisfaction,
        data: {
          type: 1
        },
        method: 'get'
      }).then(function (res) {
        console.log(res);
        _this2.mylvarr = res;
      }).catch(function (err) {});
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('van-tabs', {
    attrs: {
      "animated": "",
      "eventid": '0',
      "mpcomid": '20'
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
      "title": "留言排行",
      "mpcomid": '4'
    }
  }, _vm._l((_vm.lylarr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "bang",
      class: {
        bangHei: index < 3 ? true : '', bangFir: index == 0 ? true : ''
      }
    }, [(index == 0) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/first.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.message_num))])] : (index == 1) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/second.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.message_num))])] : (index == 2) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/third.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.message_num))])] : [_c('p', {
      staticClass: "rank_t"
    }, [_c('span', [_vm._v(_vm._s(index + 1))]), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.message_num))])]], 2)
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "回复排行",
      "mpcomid": '9'
    }
  }, _vm._l((_vm.hflarr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "bang",
      class: {
        bangHei: index < 3 ? true : '', bangFir: index == 0 ? true : ''
      }
    }, [(index == 0) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/first.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.answers_num))])] : (index == 1) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/second.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.answers_num))])] : (index == 2) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/third.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.answers_num))])] : [_c('p', {
      staticClass: "rank_t"
    }, [_c('span', [_vm._v(_vm._s(index + 1))]), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.answers_num))])]], 2)
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "回复率排行",
      "mpcomid": '14'
    }
  }, _vm._l((_vm.hflvarr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "bang",
      class: {
        bangHei: index < 3 ? true : '', bangFir: index == 0 ? true : ''
      }
    }, [(index == 0) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/first.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.rates))])] : (index == 1) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/second.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.rates))])] : (index == 2) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/third.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.rates))])] : [_c('p', {
      staticClass: "rank_t"
    }, [_c('span', [_vm._v(_vm._s(index + 1))]), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.rates))])]], 2)
  })), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "满意度排行",
      "mpcomid": '19'
    }
  }, _vm._l((_vm.mylvarr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "bang",
      class: {
        bangHei: index < 3 ? true : '', bangFir: index == 0 ? true : ''
      }
    }, [(index == 0) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/first.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.reates))])] : (index == 1) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/second.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.reates))])] : (index == 2) ? [_c('p', {
      staticClass: "rank"
    }, [_c('img', {
      attrs: {
        "src": "../../../static/images_pro/third.png",
        "alt": ""
      }
    }), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.reates))])] : [_c('p', {
      staticClass: "rank_t"
    }, [_c('span', [_vm._v(_vm._s(index + 1))]), _vm._v("\n                " + _vm._s(item.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.reates))])]], 2)
  }))], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a57dc458", esExports)
  }
}

/***/ })

},[105]);