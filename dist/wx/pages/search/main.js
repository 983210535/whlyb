require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(307);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_30255504_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(310);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(308)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-30255504"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_30255504_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30255504", Component.options)
  } else {
    hotAPI.reload("data-v-30255504", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 308:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_searchview_index__ = __webpack_require__(55);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      value: '',
      isSearch: false,
      pageNum: 1,
      pageSize: 10,
      nodatashow: false,
      lsss: false,
      history: []
      // history: [
      //   "qwe","asdasdas","asdasczx","asdasdasd","asdasdas","qwerczxcx","1231dasda","weqwesv"
      // ]
    };
  },

  computed: {
    // history: function(){
    //   return wx.getStorageSync("search")
    // },
    // hisLength(){
    //   return wx.getStorageSync("search")
    // },
    // searchData(){
    //   return this.$store.getters.searchdata
    // }
  },
  onLoad: function onLoad() {
    this.value = '';
    this.$store.dispatch('setSearchData', []);

    this.isSearch = false;
    this.pageSize = 10;

    // this.searchfn()

    // console.log(this.hisLength);
    // console.log(this.searchData);
  },
  onShow: function onShow() {
    this.history = wx.getStorageSync("search");
    console.log(this.history);
    if (this.history.length > 0 && this.value == '') {
      this.lsss = true;
    } else {
      this.lsss = false;
    }
    // if(this.value !== ""){
    //   this.searchfn()
    // }else{
    //   this.isSearch = false
    // }
  },

  components: {
    searchView: __WEBPACK_IMPORTED_MODULE_0__components_searchview_index__["a" /* default */]
  },
  // onPullDownRefresh: function(){
  //   // 下拉刷新
  //     this.pageSize=5
  //     this.pageNum=1
  //     this.listData=[]
  //     this.searchfn()

  // },
  onReachBottom: function onReachBottom() {
    // 停止下拉刷新
    wx.stopPullDownRefresh();
    // 搜索状态
    this.pageSize = this.pageSize + 10;
    if (this.pageSize - 10 > this.total) {
      this.nodatashow = true;
    } else {
      this.nodatashow = false;
      this.searchfn(this.value);
    }
  },


  methods: {
    clear: function clear() {
      wx.removeStorageSync("search");
      // this.history = wx.getStorageSync("search")
      this.lsss = false;
    },
    goto: function goto(e) {
      console.log(e);
      var index = wx.getStorageSync("search").indexOf(e);
      // if(index == -1){
      //   wx.getStorageSync("search").unshift(e)
      // }else 
      if (index > 0) {
        var arr = wx.getStorageSync("search");
        arr.splice(index, 1);
        arr.unshift(e);
        wx.setStorageSync("search", arr);
        this.history = wx.getStorageSync("search");
        console.log(this.history);
      }
      this.value = e;
      this.isSearch = true;
      this.searchfn();
    },
    onSearch: function onSearch(e) {
      // 搜索关键词改变触发
      console.log(e);
      this.value = e.mp.detail;
      if (this.value != '') {
        this.lsss = false;
        this.isSearch = true;
        this.searchfn();
      } else {
        // this.$store.dispatch('setSearchData',[])
        this.isSearch = false;
        if (this.history.length > 0) {
          this.lsss = true;
        }
        this.pageSize = 10;

        // this.history = wx.getStorageSync("search")
      }
    },
    searchfn: function searchfn() {
      var _this = this;

      this.lsss = false;
      // 搜索
      var data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
        //纯数字就查询码查询，否则就关键字
      };if (isNaN(this.value)) {
        data.keywords = this.value;
      } else {
        data.queryCode = this.value;
      }
      this.$https.request({
        url: this.$interfaces.search,
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: data
      }).then(function (res) {
        console.log(res);
        // this.lsss = false
        _this.total = res.data.rows.length;
        _this.$store.dispatch('setSearchData', res.data.rows);
      }).catch(function (err) {
        console.log(err);
      });
    }
  },

  created: function created() {}
});

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('van-search', {
    attrs: {
      "placeholder": "请输入关键词或查询码进行查询",
      "use-action-slot": "",
      "custom-class": "key",
      "field-class": "keyInput",
      "background": "#fff",
      "focus": "",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onSearch
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  }), _vm._v(" "), (_vm.lsss) ? _c('div', {
    staticClass: "xbox"
  }, [_c('div', {
    staticClass: "clear"
  }, [_c('span', [_vm._v("历史搜索")]), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("清空")])]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, _vm._l((_vm.history), function(item, index) {
    return _c('span', {
      key: index,
      staticClass: "search",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.goto(item)
        }
      }
    }, [_vm._v("\n      " + _vm._s(item) + "\n    ")])
  }))]) : _vm._e(), _vm._v(" "), (_vm.isSearch) ? _c('div', [_c('searchView', {
    attrs: {
      "old": _vm.value,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nodatashow),
      expression: "nodatashow"
    }],
    staticClass: "nodata"
  }, [_vm._v("无更多数据")])], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30255504", esExports)
  }
}

/***/ })

},[306]);