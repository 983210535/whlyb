require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([20],{

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(248);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ac83ddd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(251);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(249)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ac83ddd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ac83ddd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\lyzn\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ac83ddd", Component.options)
  } else {
    hotAPI.reload("data-v-4ac83ddd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 249:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 250:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      activeNames: ['1']
    };
  },


  components: {},

  methods: {
    onChange: function onChange(e) {
      // tab切换
      this.activeNames = e.mp.detail;
    }
  },
  onLoad: function onLoad(option) {},
  created: function created() {}
});

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": "",
      "bindscrolltoupper": "upper",
      "bindscrolltolower": "lower",
      "bindscroll": "scroll"
    }
  }, [_c('div', {
    staticClass: "xqbox"
  }, [_c('van-collapse', {
    attrs: {
      "value": _vm.activeNames,
      "eventid": '0',
      "mpcomid": '7'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-collapse-item', {
    attrs: {
      "title": "我如何登录留言板？",
      "name": "1",
      "mpcomid": '0'
    }
  }, [_vm._v("\n        点击页面左上方“点我留言”按钮，确认“微信授权登录”，允许微信绑定手机号码，即可完成登录。\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "如何发表您的留言？",
      "name": "2",
      "mpcomid": '1'
    }
  }, [_vm._v("\n        填写留言标题，正文等相关信息，点击“提交留言”即可。\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "如何删除自己的留言？",
      "name": "3",
      "mpcomid": '2'
    }
  }, [_vm._v("\n        如留言尚未回复，留言用户可联系留言板客服QQ：2410431154，提交所需的证明后给予撤诉。\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "我如何对官方给我的回复发表评价",
      "name": "4",
      "mpcomid": '3'
    }
  }, [_vm._v("\n        留言办理单位对留言做出回复后，留言用户登录后可以点击留言正文后“点击评价”按钮，并选择满意度。确认无误后，点击“提交”即可。\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "为什么我的留言没有显示",
      "name": "5",
      "mpcomid": '4'
    }
  }, [_vm._v("\n        根据《武汉城市留言板管理条例》，对适当的留言选择公开。注册用户可登录后通过“我的留言”查看留言处理进展。\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "如何使用查询",
      "name": "6",
      "mpcomid": '5'
    }
  }, [_vm._v("\n        在首页搜索框，输入查询的关键字，就可以检索到留言板中的相关留言。\n      ")]), _vm._v(" "), _c('van-collapse-item', {
    attrs: {
      "title": "我如何编辑自己的留言",
      "name": "7",
      "mpcomid": '6'
    }
  }, [_vm._v("\n        《武汉城市留言板》目前未开通用户对留言内容进行二次编辑功能。留言用户如需补充或修改留言要素，可在留言未回复前，联系留言板客服QQ：2410431154申请修改。\n      ")])], 1)], 1)])], 1)
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
     require("vue-hot-reload-api").rerender("data-v-4ac83ddd", esExports)
  }
}

/***/ })

},[247]);