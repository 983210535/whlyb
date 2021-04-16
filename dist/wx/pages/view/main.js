require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(322);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_608d23fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(325);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-608d23fe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_608d23fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\view\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-608d23fe", Component.options)
  } else {
    hotAPI.reload("data-v-608d23fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 323:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import viewList from '../../components/view/index'
// import blockView from '../../components/block/index.vue'
// import searchView from '../../components/searchview/index.vue'
// import dqList from '../../components/index/index'


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      dataArr: [],
      pageNo: 1
    };
  },

  computed: {
    token: function token() {
      return this.$store.state.token;
    }
  },
  components: {
    // viewList,blockView,searchView,dqList
  },
  mounted: function mounted() {},
  onLoad: function onLoad(option) {
    // console.log(1111 + this.$store.state.userId);
    // console.log(1111 + this.$store.state.token);
    this.mylv();

    this.getData();
    // this.type = 1
    // 获取用户信息、token、留言位置
    this.user = this.$store.getters.user;
    this.token = this.$store.getters.token;

    if (!wx.getStorageSync("search")) {
      console.log('kongde');
      wx.setStorageSync("search", []);
    } else {
      return;
    }
    // this.getUserId()
  },
  onShow: function onShow() {
    // this.getData()
    // 最新留言
  },

  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    this.pageNo = 1;
    this.dataArr = [];
    this.getData();
  },
  onReachBottom: function onReachBottom() {
    this.pageNo = this.pageNo + 1;
    this.getData();
  },

  methods: {
    getUserInfo: function getUserInfo(e) {
      console.log(e);
      if (e.mp.detail.userInfo) {
        this.$store.dispatch("setUser", e.mp.detail.userInfo);
        wx.setStorageSync('user', e.mp.detail.userInfo);
        if (wx.getStorageSync("token") && wx.getStorageSync("isAuthenticated")) {
          wx.switchTab({
            url: '../view/main'
          });
        } else {
          this.$store.dispatch("setIsAuthenticated", true);
          wx.setStorageSync('isAuthenticated', true);

          this.toLogin();
        }
      }
    },
    toLogin: function toLogin() {
      var _this = this;

      wx.login({
        success: function success(res) {
          console.log(res.code);
          _this.getOpenid(res.code);
        }
      });
    },
    getOpenid: function getOpenid(code) {
      var that = this;
      this.$https.request({
        url: that.$interfaces.getOpenid,
        // url: "http://192.168.7.61:84/messageboard/miniprogramuserinterface/login",
        data: {
          code: code
        },
        method: 'post'
      }).then(function (res) {
        console.log(res);
        that.$store.dispatch("setOpenId", res.openid);
        if (res.code == -101) {
          wx.navigateTo({ url: '../register/main' });
        }
      }).catch(function (err) {
        console.log("error");
      });
    },
    newDetail: function newDetail(e) {
      console.log(e);
      wx.navigateTo({ url: "../newDetails/main?docId=" + e });
    },
    getData: function getData() {
      var _this2 = this;

      this.$https.request({
        // url: 'http://192.168.7.160:81/wcmapi/service/getDocumentsByChannelId.xhtml',
        url: 'https://news.cjn.cn/wcmapi/service/getDocumentsByChannelId.xhtml',
        data: {
          model: 1,
          chnlId: 15886,
          pageNo: this.pageNo,
          pageSize: 5
        },
        header: {
          'content-type': 'application/x-www-form-urlended'
        },
        methosd: 'post'
      }).then(function (res) {
        _this2.getTime(res.rows);
        console.log(res.rows);
        wx.stopPullDownRefresh();
        if (_this2.dataArr !== []) {
          var _dataArr;

          (_dataArr = _this2.dataArr).push.apply(_dataArr, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.rows));
        } else {
          _this2.dataArr = res.rows;
        }
      }).catch(function (err) {
        console.log("error");
      });
    },
    getTime: function getTime(e) {
      e.map(function (item) {
        var year = item.DOCRELTIME.slice(0, 10);
        item.DOCRELTIME = year;
        return item;
      });
    },

    // getUserId(){
    //   console.log(this.$store.state.userId == '');
    //   if(this.$store.state.userId == ''){
    //     console.log("userId is not ,but now is add ");
    //     this.$store.dispatch("setUserId",wx.getStorageSync("userId"))
    //   }
    // },
    mylv: function mylv() {
      var _this3 = this;

      this.$https.request({
        // url:'http://192.168.7.61:84/messageboard/internetUserInterface/fivemyfl',
        url: this.$interfaces.satisfaction,
        data: {
          type: 1
        },
        method: 'get'
      }).then(function (res) {
        console.log(res);
        _this3.$store.dispatch("setMylv", res);
      }).catch(function (err) {});
    },
    toSearch: function toSearch() {
      wx.navigateTo({ url: "../search/main" });
    },
    goPeople: function goPeople() {
      wx.navigateTo({ url: "../people/main" });
    },
    getLeave: function getLeave() {
      var _this4 = this;

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
        _this4.dataArr = res.forumList;
        wx.stopPullDownRefresh();
      }).catch(function (err) {});
    },
    goLm: function goLm() {
      if (!this.$store.state.token) {
        wx.showModal({
          title: '提示',
          content: '登陆后才能留言哦~',
          showCancel: false,
          success: function success(res) {
            if (res.confirm) {
              console.log('点击确认回调');
            } else {
              console.log('点击取消回调');
            }
          }
        });
      } else {
        wx.navigateTo({ url: "../message/main" });
      }
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
    },
    setItem: function setItem(e) {}
  },
  onSearch: function onSearch(e) {
    // 搜索关键词改变触发
    this.value = e.mp.detail;
    if (this.value != '') {
      this.isSearch = true;
      this.searchfn(this.value);
    } else {
      this.isSearch = false;
      this.pageSize = 10;
      if (this.active == 0) {
        this.getnewleavemessage();
      } else if (this.active == 1) {
        this.getAreaLeaveMessage();
      }
    }
  },
  searchfn: function searchfn(e) {
    var _this5 = this;

    // 搜索
    this.$https.request({
      url: this.$interfaces.search,
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        JwtAuthorization: this.$store.state.token
      },
      data: {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        tid: '',
        fid: '',
        startTime: '',
        endTime: '',
        nickName: '',
        keywords: e
      }
    }).then(function (res) {
      _this5.total = res.data.rows.length;
      _this5.$store.dispatch('setSearchData', res.data.rows);
    }).catch(function (err) {
      console.log(err);
    });
  },
  created: function created() {}
});

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [(_vm.token) ? _c('div', {
    staticClass: "clickMe",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.goLm
    }
  }, [_vm._v("点我留言")]) : _c('button', {
    staticClass: "clickMe",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("点我留言")]), _vm._v(" "), _c('div', {
    staticClass: "good"
  }, [_c('p', [_vm._v("投诉 | 意见 | 建议 | 咨询 | 求助 | 点赞")]), _vm._v(" "), _c('div', {
    staticClass: "search",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.toSearch
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "可输入关键字或查询码搜索",
      "disabled": ""
    }
  }), _vm._v(" "), _vm._m(1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "content"
  }, _vm._l((_vm.dataArr), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.newDetail(item.DOCID)
        }
      }
    }, [(index == 0) ? [_c('div', {
      staticClass: "first"
    }, [(item.PICATTACH.length > 0 && item.PICATTACH[0].ABSURL) ? _c('img', {
      attrs: {
        "src": item.PICATTACH[0].ABSURL,
        "alt": ""
      }
    }) : _c('img', {
      attrs: {
        "src": "../../../static/images_pro/noPic.png",
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "mainNr"
    }, [_c('p', {
      staticClass: "titleBig source"
    }, [_vm._v(_vm._s(item.DOCTITLE))]), _vm._v(" "), _c('p', {
      staticClass: "abstract"
    }, [_vm._v(_vm._s(item.DOCABSTRACT))])], 1), _vm._v(" "), _c('div', {
      staticClass: "nameTime"
    }, [_c('span', [_vm._v(_vm._s(item.SOURCENAME) + " "), _c('span', {
      staticClass: "time"
    }, [_vm._v(" " + _vm._s(item.DOCRELTIME))])])])])] : (item.PICATTACH.length < 3) ? [_c('div', {
      staticClass: "second"
    }, [(item.PICATTACH.length > 0 && item.PICATTACH[0].ABSURL) ? _c('img', {
      attrs: {
        "src": item.PICATTACH[0].ABSURL,
        "alt": ""
      }
    }) : _c('img', {
      attrs: {
        "src": "../../../static/images_pro/noPics.png",
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "mainSec"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.DOCTITLE))]), _vm._v(" "), _c('div', {
      staticClass: "nameTimeSec"
    }, [_c('span', {
      staticClass: "source"
    }, [_vm._v(_vm._s(item.SOURCENAME) + " "), _c('span', {
      staticClass: "time"
    }, [_vm._v(" " + _vm._s(item.DOCRELTIME))])])])], 1)])] : void 0], 2)
  }))])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/banner.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images_pro/search.png",
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
     require("vue-hot-reload-api").rerender("data-v-608d23fe", esExports)
  }
}

/***/ })

},[321]);