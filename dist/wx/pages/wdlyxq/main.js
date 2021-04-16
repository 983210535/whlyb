require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(327);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_744b132f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(345);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(328)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-744b132f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_744b132f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\wdlyxq\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-744b132f", Component.options)
  } else {
    hotAPI.reload("data-v-744b132f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 328:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_wxparse__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_vant_dist_toast_toast__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_js_date_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_comment_index__ = __webpack_require__(333);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      pjshow: false,
      mainIp: '',
      viewxq: {},
      bigshow: false,
      currentImg: '',
      checked: false,
      message: '',
      radio: '',
      secondaryState: 0,
      fdid: '',
      pjitem: '',
      keytid: '',
      newtime: '',
      show: false,
      satis: 3,
      obj: ''
    }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'newtime', ''), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'second', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'placeholder', '输入评价内容'), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'userId', ''), _ref;
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
    wxParse: __WEBPACK_IMPORTED_MODULE_1_mpvue_wxparse__["a" /* default */], comment: __WEBPACK_IMPORTED_MODULE_4__components_comment_index__["a" /* default */]
  },
  onLoad: function onLoad(option) {
    // 初始化
    this.radio = '3';
    this.placeholder = "输入评价内容";
    this.userId = this.$store.state.userId;
    this.keytid = option.tid;
    console.log('keytid:' + this.keytid);
    // this.show=false
    this.viewxq = this.$store.getters.wdlyitem;
    this.mainIp = this.$interfaces.mainIp;
    if (this.lytype == 10) {
      this.getitemybj(this.keytid);
    }
    this.newtime = Object(__WEBPACK_IMPORTED_MODULE_3__static_js_date_js__["a" /* formatTime */])(new Date(this.viewxq.lastupdate * 1000));
  },
  onShow: function onShow() {
    this.show = false;
    this.bigshow = false;
    // this.radio = 3
    // this.satis = 3
  },


  methods: {
    gz: function gz(focus) {
      var _this = this;

      console.log(focus);
      console.log(this.userId);
      this.$https.request({
        // url: 'http://192.168.7.61:84/messageboard/internetUserInterface/focusOnThreads',
        url: this.$interfaces.toFocus,
        data: {
          tid: this.keytid,
          isfocusOn: focus,
          userId: this.userId

        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        methods: 'post'
      }).then(function (res) {
        console.log(res);
        _this.threads.isFocusOn = focus;

        if (focus == 1) {
          __WEBPACK_IMPORTED_MODULE_2__static_vant_dist_toast_toast__["a" /* default */].success("关注成功");
        } else {
          __WEBPACK_IMPORTED_MODULE_2__static_vant_dist_toast_toast__["a" /* default */].fail("关注取消");
        }
      }).catch(function (err) {
        console.log(err);
      });

      // this.orGz = !this.orGz 
    },
    sure: function sure() {
      if (this.radio == 9 && this.message.length < 10) {
        __WEBPACK_IMPORTED_MODULE_2__static_vant_dist_toast_toast__["a" /* default */].fail("不满意原因不能少于10个字");
      } else {
        // console.log("success");
        this.sure1();
      }
    },
    sure1: function sure1() {
      var _this2 = this;

      var e = this.obj;
      console.log(e.asid);
      var data = {};
      if (this.second) {
        data = {
          tid: e.tid,
          asid: e.asid,
          fdid: e.fdid,
          satisfaction: this.radio,
          fdContent: this.message,
          secondaryState: this.secondaryState
        };
      } else {
        data = {
          tid: e.tid,
          asid: e.asid,
          fdid: '',
          satisfaction: Number(this.radio),
          fdContent: this.message,
          secondaryState: this.secondaryState
        };
      }
      this.show = false;
      this.$https.request({
        url: this.$interfaces.comment,
        data: data,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post'
      }).then(function (res) {
        if (res.code == 0) {
          _this2.getitemdata(e.queryCode);
          _this2.pjshow = false;
          _this2.message = '';
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    cancel: function cancel() {
      this.show = false;
    },
    pj: function pj(e, sec) {
      if (sec) {
        this.second = true;
      } else {
        this.second = false;
      }
      console.log(e.asid);
      this.obj = e;
      // this.satis = num
      // this.show = true
      console.log(this.satis);
      this.sure();
    },
    allowecbl: function allowecbl(e) {
      // 是否同意二次办理
      this.checked = e.mp.detail;
    },
    onChange: function onChange(event) {
      // 满意度选择
      this.radio = event.mp.detail;
      // this.satis = event.mp.detail
      console.log(this.satis);

      if (event.mp.detail != 9) {
        this.placeholder = "输入评价内容";
      } else {
        this.placeholder = "请说明不满意原因，最低不少于10个字...";
      }
    },
    secondPj: function secondPj(myd, e) {
      var _this3 = this;

      // 二次评价
      // if(this.checked){
      //     this.secondaryState=1
      // }else{
      //     this.secondaryState=0
      // }
      // 提交评价
      this.$https.request({
        url: this.$interfaces.comment,
        data: {
          tid: e.tid,
          asid: e.asid,
          fdid: e.fdid,
          satisfaction: myd,
          fdContent: '',
          secondaryState: this.secondaryState
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        },
        method: 'post'
      }).then(function (res) {
        if (res.code == 0) {
          _this3.getitemdata(e.queryCode);
          _this3.pjshow = false;
          _this3.radio = '3';
          _this3.message = '';
          _this3.secondaryState = 0;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    submitPj: function submitPj(e) {
      var _this4 = this;

      // 提交评价
      this.$https.request({
        url: this.$interfaces.comment,
        data: {
          tid: e.tid,
          asid: e.asid,
          fdid: '',
          satisfaction: Number(this.radio),
          fdContent: this.message,
          secondaryState: this.secondaryState
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        },
        method: 'post'
      }).then(function (res) {
        if (res.code == 0) {
          _this4.getitemdata(e.queryCode);
          _this4.pjshow = false;
          _this4.radio = '3';
          _this4.message = '';
          _this4.secondaryState = 0;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    getUserInfo: function getUserInfo(event) {
      // 获取用户信息
    },
    surePj: function surePj() {
      // 确认评价
      if (this.radio == '9') {
        // 当选择不满意时必须填写内容
        this.submitPj(this.pjitem);
      } else {
        this.submitPj(this.pjitem);
      }
    },
    onClosePj: function onClosePj() {
      // 评价遮罩关闭
      this.pjshow = false;
    },
    commentFn: function commentFn(e) {
      // 评论
      this.pjitem = e;
      this.pjshow = false;
      this.pjshow = true;
    },
    showbig: function showbig(e) {
      // 显示大图
      this.currentImg = e;
      this.bigshow = true;
    },
    file: function file(url, name) {
      console.log(url, name);

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
      // wx.downloadFile({//下载对应文件
      //   url,
      //   // filePath: wx.env.USER_DATA_PATH + '/' + name,
      //   success: function (res) {    
      //     var filePath = res.tempFilePath;//文件路径    
      //     wx.openDocument({
      //       filePath: filePath,   // 装载对应文件的路径
      //       // fileType: 'docx',   // 指定打开的文件类型
      //       // showMenu: true,       // 右上角的菜单转发分享操作
      //       success: function (res) {
      //         console.log("打开成功");
      //       },
      //       fail: function (res) {
      //         console.log(res);
      //       }
      //     })   
      //   },
      //   fail: function (res) {
      //     console.log(res);
      //   }
      // })       
    },
    BIG: function BIG(e, arr) {
      var _this5 = this;

      var urls = [];
      arr.forEach(function (item) {
        if (item.isimage) {
          urls.push(_this5.mainIp + item.attachment);
        }
      });
      wx.previewImage({
        current: e,
        urls: urls
      });
    },
    onClose: function onClose() {
      // 关闭图片遮罩
      console.log(123);
      this.show = false;
      // this.bigshow=false
    },
    getitemdata: function getitemdata(keytid) {
      var _this6 = this;

      // 获取详情
      this.$https.request({
        url: this.$interfaces.contentDetails,
        data: {
          tid: this.keytid
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        },
        method: 'post'
      }).then(function (res) {
        if (res.code == 0) {
          _this6.viewxq = res.threadsObj;
          console.log(_this6.viewxq);
          _this6.$store.dispatch('setWdlyItem', res.threadsObj);
        }
      }).catch(function (err) {});
    },
    getitemybj: function getitemybj(keytid) {
      var _this7 = this;

      // 获取详情
      this.$https.request({
        url: this.$interfaces.selectTrashThreadsOneByUser,
        data: {
          tid: this.keytid
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization: this.$store.state.token
        },
        method: 'post'
      }).then(function (res) {
        if (res.code == 0) {
          _this7.viewxq = res.threadsObj;

          _this7.$store.dispatch('setWdlyItem', res.threadsObj);
        }
      }).catch(function (err) {});
    }
  },

  created: function created() {}
});

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6aa326d7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(344);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(334)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6aa326d7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\comment\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6aa326d7", Component.options)
  } else {
    hotAPI.reload("data-v-6aa326d7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 334:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_index__ = __webpack_require__(336);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // props: ['tid'],
  data: function data() {
    var _ref;

    return _ref = {
      pldata: '',
      total: '',
      pageSize: 10,
      pageNum: 1,
      secondFloor: ''
    }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'total', ''), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'domain', ''), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'secondShow', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'firstShow', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'secondtextarea', ''), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'content', ''), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'showEmoji', false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'list', ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']), _ref;
  },

  components: {
    Emoji: __WEBPACK_IMPORTED_MODULE_2__emoji_index__["a" /* default */]
  },
  onShow: function onShow() {
    this.content = '';
    this.showEmoji = false;
  },
  onLoad: function onLoad(option) {
    console.log('comment tid:' + option.tid);
    this.domain = this.$interfaces;
    // console.log(this.tid);
    this.tid = option.tid;
    this.getplmessage();
  },

  computed: {
    isLogin: function isLogin() {
      return this.$store.state.token;
    },
    lyxq: function lyxq() {
      return this.$store.state.wdlyitem;
    },
    userId: function userId() {
      return this.$store.state.userId;
    },
    userinfo: function userinfo() {
      return this.$store.state.user;
    }
  },
  methods: {
    emoji: function emoji(str) {
      console.log('aaaaaaaaaaaa: ' + str);
      var word = str.replace(/\#|\;/gi, '');
      var index = that.list.indexOf(word);
      return '<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + index + '.gif" align="middle">';
    },
    addEmoji: function addEmoji(newval) {
      console.log('from son: ' + newval);
      if (this.content.length < 140) {
        this.content += newval;
      }
    },
    emojiShow: function emojiShow() {
      this.showEmoji = !this.showEmoji;
      console.log(this.showEmoji);
    },

    //发送评论
    submit: function submit(content) {
      var _this = this;

      this.$https.request({
        method: 'post',
        url: this.$interfaces.valuate,
        data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
          tid: this.lyxq.tid,
          overt: 0,
          userId: this.userId,
          nickName: this.userinfo.nickName,
          content: content,
          toUserId: this.userId,
          toNickName: this.userinfo.nickName
        }, 'overt', 0),
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res);
        Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_dist_notify_notify__["a" /* default */])({
          text: "评论成功",
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        });
        _this.content = '';
        _this.showEmoji = false;
        _this.getplmessage();
      });
    },

    //获取评论的列表
    getplmessage: function getplmessage() {
      var _this2 = this;

      this.$https.request({
        method: 'post',
        url: this.$interfaces.getvalueate,
        data: {
          tid: this.tid,
          overt: 1,
          pageSize: this.pageSize,
          pageNum: this.pageNum
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        console.log(res.data);
        var that = _this2;
        res.data.forEach(function (ele) {
          var test = ele.content.replace(/\#(([\u4E00-\u9FA5]{1,3})|.{2})\;/gi, function (str) {
            // console.log(str);
            var word = str.replace(/\#|\;/gi, '');
            var index = that.list.indexOf(word);
            console.log(index);
            return '<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + index + '.gif" style="vertical-align:middle">';
          });
          ele.content = test;
        });
        _this2.pldata = res.data;
        _this2.secondFloor = res.data.secondFloor;
        _this2.total = res.total;
      });
    }
  }
});

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1956273e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(343);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(337)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1956273e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1956273e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\emoji\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1956273e", Component.options)
  } else {
    hotAPI.reload("data-v-1956273e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 337:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Emotion_index__ = __webpack_require__(339);
//
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
    height: {
      type: Number,
      default: 200
    }
  },
  data: function data() {
    return {
      list: [['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴'], ['睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过'], ['酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢'], ['饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂'], ['疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见'], ['擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠'], ['鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀'], ['西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰'], ['凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀'], ['足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强'], ['弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你'], ['NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈'], ['磕头', '回头', '跳绳', '挥手', '激动', '街舞', '左太极', '右太极']],
      emoji: [['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴'], ['睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过'], ['酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢'], ['饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂'], ['疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见'], ['擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠'], ['鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀'], ['西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰'], ['凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀'], ['足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强'], ['弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你'], ['NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈'], ['磕头', '回头', '跳绳', '挥手', '激动', '街舞', '左太极', '右太极']]
    };
  },

  methods: {
    clickHandler: function clickHandler(i) {
      var emotion = '#' + i + ';';
      this.$emit('emotion', emotion);
    },
    addEmoji: function addEmoji(index, index2) {
      console.log(this.emoji[index][index2]);
      var emoji = this.emoji[index][index2];
      this.$emit('emoji', '#' + emoji + ';');
    }
  },
  components: {
    Emotion: __WEBPACK_IMPORTED_MODULE_0__Emotion_index__["a" /* default */]
  },
  created: function created() {
    var _this = this;

    this.list.forEach(function (ele, index) {
      ele.forEach(function (ele2, index2) {
        if (index < 1) {
          _this.list[index][index2] = 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + (index + index2) + '.gif';
        } else {
          _this.list[index][index2] = 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + (index * 8 + index2) + '.gif';
        }
      });
    });
  }
});

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58c04db3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(342);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(340)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58c04db3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58c04db3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Emotion\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58c04db3", Component.options)
  } else {
    hotAPI.reload("data-v-58c04db3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 340:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ly-emotion',
  mounted: function mounted() {
    var _this = this;

    var name = this.$el.innerHTML;
    var list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'];
    var index = list.indexOf(name);
    var imgHTML = '<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + index + '.gif">';
    this.$nextTick(function () {
      _this.$el.innerHTML = imgHTML;
    });
  }
});

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ly-emotion"
  }, [_vm._t("default", null, {
    mpcomid: '0'
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58c04db3", esExports)
  }
}

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ebox"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "emoji"
    }, _vm._l((item), function(imgSrc, index2) {
      return _c('div', {
        key: index2 + 1
      }, [_c('img', {
        attrs: {
          "src": imgSrc,
          "alt": "",
          "eventid": '0_' + index + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.addEmoji(index, index2)
          }
        }
      })])
    }))
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1956273e", esExports)
  }
}

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "valueate"
  }, [_c('div', {
    staticClass: "pjtop"
  }, [_c('div', {
    staticClass: "inpbox"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    staticClass: "comments",
    attrs: {
      "maxlength": "140",
      "name": "",
      "id": "",
      "cols": "30",
      "rows": "10",
      "placeholder": "请输入评论内容140字以内",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "topBottom"
  }, [_c('div', [_c('span', {
    staticClass: "pltotal"
  }, [_vm._v("评论 · " + _vm._s(_vm.total) + " 条")]), _vm._v(" "), _c('span', {
    staticClass: "smile",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.emojiShow
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "smile-o",
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), (_vm.isLogin) ? _c('button', {
    staticClass: "submit",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.submit(_vm.content)
      }
    }
  }, [_vm._v("提交")]) : _c('button', {
    staticClass: "submit",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.outsubmit
    }
  }, [_vm._v("提交2")])], 1), _vm._v(" "), (_vm.showEmoji) ? _c('Emoji', {
    attrs: {
      "eventid": '4',
      "mpcomid": '1'
    },
    on: {
      "emoji": _vm.addEmoji
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.pldata.length > 0) ? _c('div', {
    staticClass: "floor"
  }, _vm._l((_vm.pldata), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "listbox"
    }, [(!item.userHead || item.userHead == null) ? _c('div', [_c('img', {
      attrs: {
        "src": _vm.domain.defaltUsericon,
        "alt": ""
      }
    })]) : _c('div', {
      staticClass: "usericon"
    }, [_c('img', {
      attrs: {
        "src": _vm.domain.userIcon + item.userHead,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "rBox"
    }, [_c('div', {
      staticClass: "desctop"
    }, [(_vm.lyxq.userId == item.userId) ? _c('span', {
      staticClass: "userself"
    }, [_vm._v("作者")]) : _c('span', [_vm._v(_vm._s(item.nickName))]), _vm._v(" "), (item.datelineStr) ? _c('span', [_vm._v(_vm._s(item.datelineStr))]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "content",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "pl",
      attrs: {
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.secondPl(item.cid, $event, 'firstShow')
        }
      }
    }, [_c('span', {
      staticClass: "smile"
    }, [_c('van-icon', {
      attrs: {
        "name": "more-o",
        "mpcomid": '2_' + index
      }
    })], 1), _vm._v("\n                评论\n              ")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.cid == _vm.currentpjtid),
        expression: "item.cid==currentpjtid"
      }]
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.firstShow),
        expression: "firstShow"
      }],
      staticClass: "inpbox"
    }, [_c('textarea', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.secondtextarea),
        expression: "secondtextarea"
      }],
      staticClass: "comments",
      attrs: {
        "maxlength": "140",
        "name": "",
        "id": "",
        "cols": "30",
        "rows": "10",
        "placeholder": "请输入评论内容140字以内",
        "eventid": '6_' + index
      },
      domProps: {
        "value": (_vm.secondtextarea)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.secondtextarea = $event.target.value
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "topBottom"
    }, [_c('span', {
      staticClass: "mark pcbox"
    }, [_vm._v("网友评论仅供其表达个人看法")]), _vm._v(" "), _c('span', {
      staticClass: "mark phonebox"
    }, [_vm._v("评论仅代表个人看法")]), _vm._v(" "), _c('span', {
      staticClass: "smile",
      attrs: {
        "eventid": '7_' + index
      },
      on: {
        "click": _vm.sencondSmileShowFn
      }
    }, [_c('i', {
      staticClass: "fa fa-smile-o"
    })], 1), _vm._v(" "), (_vm.isLogin == 'true') ? _c('span', {
      staticClass: "submint",
      attrs: {
        "eventid": '9_' + index
      },
      on: {
        "click": function($event) {
          _vm.submit(item.tid, _vm.userinfo.userId, _vm.userinfo.nickName, _vm.secondtextarea, item.userId, item.nickName, item.cid, _vm.userinfo.userHeadImagePath, item.cid)
        }
      }
    }, [_vm._v("提交")]) : _c('span', {
      staticClass: "submint",
      attrs: {
        "eventid": '8_' + index
      },
      on: {
        "click": _vm.outsubmit
      }
    }, [_vm._v("提交")])])])]), _vm._v(" "), (item.secondFloor && item.secondFloor.length > 0) ? _c('div', {
      staticClass: "secondFloor"
    }, _vm._l((item.secondFloor), function(seconditem, indexq1) {
      return _c('div', {
        key: indexq1,
        staticClass: "secondlist"
      }, [_c('span', [(_vm.lyxq.userId == seconditem.userId) ? _c('span', {
        staticClass: "userself"
      }, [_vm._v("作者")]) : _c('span', {
        staticClass: "pluser"
      }, [_vm._v(_vm._s(seconditem.nickName))])]), _vm._v(" "), _c('span', {
        staticClass: "toanswer"
      }, [_vm._v("回复")]), _vm._v(" "), _c('span', [(_vm.lyxq.userId == seconditem.toUserId) ? _c('span', {
        staticClass: "userself"
      }, [_vm._v("作者")]) : _c('span', {
        staticClass: "pluser"
      }, [_vm._v(_vm._s(seconditem.toNickName))])]), _vm._v("\n                      \n                      ：\n                      "), _vm._v(" "), _c('span', {
        domProps: {
          "innerHTML": _vm._s(seconditem.content)
        }
      }), _vm._v(" "), _c('span', {
        attrs: {
          "id": seconditem.cid,
          "eventid": '10_' + index + '-' + indexq1
        },
        on: {
          "click": function($event) {
            _vm.secondPl(seconditem.cid, $event, 'secondShow')
          }
        }
      }, [_vm._v("评论")]), _vm._v(" "), _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (seconditem.cid == _vm.currentpjtid),
          expression: "seconditem.cid==currentpjtid"
        }]
      }, [_c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (_vm.secondShow),
          expression: "secondShow"
        }],
        staticClass: "inpbox"
      }, [_c('el-input', {
        staticClass: "pj",
        attrs: {
          "type": "textarea",
          "rows": 3,
          "placeholder": "请输入评论内容140字以内",
          "maxlength": "140",
          "show-word-limit": "",
          "eventid": '11_' + index + '-' + indexq1,
          "mpcomid": '3_' + index + '-' + indexq1
        },
        model: {
          value: (_vm.secondtextarea),
          callback: function($$v) {
            _vm.secondtextarea = $$v
          },
          expression: "secondtextarea"
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "topBottom"
      }, [_c('span', {
        staticClass: "mark pcbox"
      }, [_vm._v("网友评论仅供其表达个人看法")]), _vm._v(" "), _c('span', {
        staticClass: "mark phonebox"
      }, [_vm._v("评论仅代表个人看法")]), _vm._v(" "), _c('span', {
        staticClass: "smile",
        attrs: {
          "eventid": '12_' + index + '-' + indexq1
        },
        on: {
          "click": _vm.threeSmileShowFn
        }
      }, [_c('van-icon', {
        attrs: {
          "name": "smile-o",
          "mpcomid": '4_' + index + '-' + indexq1
        }
      })], 1), _vm._v(" "), (_vm.isLogin) ? _c('span', {
        staticClass: "submint",
        attrs: {
          "eventid": '14_' + index + '-' + indexq1
        },
        on: {
          "click": function($event) {
            _vm.submit(seconditem.tid, _vm.userinfo.userId, _vm.userinfo.nickName, _vm.secondtextarea, seconditem.userId, seconditem.nickName, seconditem.cid, _vm.userinfo.userHeadImagePath, item.cid)
          }
        }
      }, [_vm._v("提交")]) : _c('span', {
        staticClass: "submint",
        attrs: {
          "eventid": '13_' + index + '-' + indexq1
        },
        on: {
          "click": _vm.outsubmit
        }
      }, [_vm._v("提交")])])], 1)])])
    })) : _vm._e()])])])
  })) : _vm._e()]), _vm._v(" "), _c('van-notify', {
    attrs: {
      "id": "custom-selector",
      "mpcomid": '5'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6aa326d7", esExports)
  }
}

/***/ }),

/***/ 345:
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
  }, [_vm._v("\n        " + _vm._s(_vm.viewxq.subject) + "\n          ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.viewxq.nickName) + "  ")]), _vm._v(" "), _c('p', [_c('span', [_vm._v("\n            " + _vm._s(_vm.viewxq.dateline_txt) + "\n          ")]), _vm._v(" "), _c('span', {
    staticClass: "seaTime"
  }, [_vm._v("\n            查询码：" + _vm._s(_vm.viewxq.queryCode) + "\n          ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "share"
  }, [_c('button', {
    staticClass: "zf",
    attrs: {
      "open-type": "share"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "fx",
    attrs: {
      "src": "../../../static/images_pro/zf.png"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [(_vm.viewxq.content) ? _c('wxParse', {
    attrs: {
      "content": _vm.viewxq.content,
      "mpcomid": '0'
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.viewxq.attachementsList && _vm.viewxq.attachementsList != '') ? _c('div', {
    staticClass: "fjBox"
  }, [_c('div', {
    staticClass: "fjdesc"
  }, [_vm._v("留言附件：")]), _vm._v(" "), _c('div', {
    staticClass: "fjBox"
  }, [_c('ul', [_vm._l((_vm.viewxq.attachementsList), function(item, index) {
    return (item.isimage) ? _c('li', {
      key: index
    }, [_c('img', {
      attrs: {
        "src": _vm.mainIp + item.attachment,
        "alt": "",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.BIG(_vm.mainIp + item.attachment, _vm.viewxq.attachementsList)
        }
      }
    })]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.viewxq.attachementsList), function(item, index) {
    return (!item.isimage) ? _c('p', {
      key: item.aid + 1,
      staticClass: "file",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.file(_vm.mainIp + item.attachment, item.fileName)
        }
      }
    }, [_vm._v(_vm._s(item.fileName))]) : _vm._e()
  })], 2)], 1)]) : _vm._e()]), _vm._v(" "), _c('div', [_vm._l((_vm.viewxq.fid_txt), function(item, index3) {
    return _c('div', {
      key: index3
    }, [(item.handlestate == 0 || item.handlestate == -1 || item.handlestate == -2) ? _c('div', [_vm._m(0, true)]) : _vm._e(), _vm._v(" "), (item.handlestate == 1) ? _c('div', [_c('div', {
      staticClass: "answerBox"
    }, _vm._l((_vm.viewxq.answersList), function(answersItem, index6) {
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
      }, [_vm._v("答")]), _vm._v(" "), (answersItem.organization && answersItem.organization != null) ? _c('div', [_vm._v(_vm._s(answersItem.organization))]) : _c('div', [_vm._v(_vm._s(item.organization))])]), _vm._v(" "), _c('span', {
        staticClass: "dfsj"
      }, [_vm._v(_vm._s(answersItem.dateline_txt))])])]), _vm._v(" "), _c('div', {
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
        return (answerfjitem.isimage) ? _c('li', {
          key: answerfjitem.aid,
          staticClass: "img"
        }, [_c('img', {
          attrs: {
            "src": _vm.mainIp + answerfjitem.thumb,
            "alt": "",
            "eventid": '2_' + index3 + '-' + index6 + '-' + index
          },
          on: {
            "click": function($event) {
              _vm.BIG(_vm.mainIp + answerfjitem.thumb, answersItem.attachementsList)
            }
          }
        })]) : _vm._e()
      }), _vm._v(" "), _vm._l((answersItem.attachementsList), function(answerfjitem, index) {
        return (!answerfjitem.isimage) ? _c('p', {
          key: answerfjitem.aid + 1,
          staticClass: "file",
          attrs: {
            "eventid": '3_' + index3 + '-' + index6 + '-' + index
          },
          on: {
            "click": function($event) {
              _vm.file(_vm.mainIp + answerfjitem.thumb, answerfjitem.fileName)
            }
          }
        }, [_vm._v(_vm._s(answerfjitem.fileName))]) : _vm._e()
      })], 2)], 1)]) : _vm._e(), _vm._v(" "), (answersItem.satisfaction != 3 && answersItem.satisfaction != 7 && answersItem.satisfaction != 9) ? _c('div', {
        staticClass: "dycpj"
      }, [_c('div', {
        staticClass: "satis"
      }, [_c('div', {
        staticClass: "comment"
      }, [_c('van-radio-group', {
        staticClass: "myditem",
        attrs: {
          "direction": "horizontal",
          "eventid": '4_' + index3 + '-' + index6,
          "mpcomid": '4_' + index3 + '-' + index6
        },
        on: {
          "change": _vm.onChange
        },
        model: {
          value: (_vm.radio),
          callback: function($$v) {
            _vm.radio = $$v
          },
          expression: "radio"
        }
      }, [_c('van-radio', {
        attrs: {
          "name": "3",
          "checked-color": "#F54645",
          "mpcomid": '1_' + index3 + '-' + index6
        }
      }, [_vm._v("满意")]), _vm._v(" "), _c('van-radio', {
        attrs: {
          "name": "7",
          "checked-color": "#F54645",
          "mpcomid": '2_' + index3 + '-' + index6
        }
      }, [_vm._v("比较满意")]), _vm._v(" "), _c('van-radio', {
        attrs: {
          "name": "9",
          "checked-color": "#F54645",
          "mpcomid": '3_' + index3 + '-' + index6
        }
      }, [_vm._v("不满意")])], 1), _vm._v(" "), _c('p', [_vm._v("请评价：")]), _vm._v(" "), _c('textarea', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (_vm.message),
          expression: "message"
        }],
        staticClass: "comments",
        attrs: {
          "name": "",
          "id": "",
          "cols": "30",
          "rows": "10",
          "placeholder": _vm.placeholder,
          "eventid": '5_' + index3 + '-' + index6
        },
        domProps: {
          "value": (_vm.message)
        },
        on: {
          "input": function($event) {
            if ($event.target.composing) { return; }
            _vm.message = $event.target.value
          }
        }
      })], 1)]), _vm._v(" "), _c('button', {
        staticClass: "pj_btn",
        attrs: {
          "eventid": '6_' + index3 + '-' + index6
        },
        on: {
          "click": function($event) {
            _vm.pj(answersItem)
          }
        }
      }, [_vm._v("评价")])], 1) : _vm._e(), _vm._v(" "), (answersItem.satisfaction > 0 && answersItem.fdid && answersItem.fdid != '') ? _c('div', {
        staticClass: "feedbackContent"
      }, [_c('div', {
        staticClass: "timepj"
      }, [(answersItem.secSatisfaction) ? _c('div', [(answersItem.satisfaction == 3) ? _c('span', {
        staticClass: "satisfaction"
      }, [_vm._v("\n                                一次评价： 满意\n                              ")]) : (answersItem.satisfaction == 7) ? _c('span', {
        staticClass: "satisfied"
      }, [_vm._v("\n                                一次评价： 比较满意\n                              ")]) : _c('span', {
        staticClass: "dissatis"
      }, [_vm._v("\n                                一次评价： 不满意\n                              ")])]) : _c('div', [(answersItem.satisfaction == 3) ? _c('span', {
        staticClass: "satisfaction"
      }, [_vm._v("\n                                评价： 满意\n                              ")]) : (answersItem.satisfaction == 7) ? _c('span', {
        staticClass: "satisfied"
      }, [_vm._v("\n                                评价： 比较满意\n                              ")]) : _c('span', {
        staticClass: "dissatis"
      }, [_vm._v("\n                                评价： 不满意\n                              ")])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(answersItem.feedbackCreateTime))])]), _vm._v(" "), (answersItem.feedbackContent) ? _c('div', {
        staticClass: "onepj"
      }, [_vm._v("\n                            " + _vm._s(answersItem.feedbackContent) + "\n                          ")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), (answersItem.satisfaction > 0) ? _c('div', [(answersItem.secondContent) ? _c('div', {
        staticClass: "answerContent"
      }, [_c('div', {
        staticClass: "dftitle"
      }, [_c('div', {
        staticClass: "dfwz"
      }, [_c('div', {
        staticClass: "da"
      }, [_vm._v("答")]), _vm._v(" "), (answersItem.organization && answersItem.organization != null) ? _c('div', [_vm._v("\n                                    " + _vm._s(answersItem.organization) + "二次回复\n                                  ")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
            "eventid": '7_' + index3 + '-' + index6 + '-' + index
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
            "eventid": '8_' + index3 + '-' + index6 + '-' + index
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
      }, [_vm._v("\n                                  二次评价： 不满意\n                                ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(answersItem.secFeedbackCreateTime))])]), _vm._v(" "), (answersItem.secFeedbackContent) ? _c('div', {
        staticClass: "onepj"
      }, [_vm._v("\n                                " + _vm._s(answersItem.secFeedbackContent) + "\n                              ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (answersItem.secondState > 0 && answersItem.secondContent && answersItem.handleState == 3) ? _c('div', {
        staticClass: "dycpj"
      }, [_c('div', {
        staticClass: "satis"
      }, [_c('div', {
        staticClass: "comment"
      }, [_c('van-radio-group', {
        staticClass: "myditem",
        attrs: {
          "direction": "horizontal",
          "eventid": '9_' + index3 + '-' + index6,
          "mpcomid": '8_' + index3 + '-' + index6
        },
        on: {
          "change": _vm.onChange
        },
        model: {
          value: (_vm.radio),
          callback: function($$v) {
            _vm.radio = $$v
          },
          expression: "radio"
        }
      }, [_c('van-radio', {
        attrs: {
          "name": "3",
          "checked-color": "#F54645",
          "mpcomid": '5_' + index3 + '-' + index6
        }
      }, [_vm._v("满意")]), _vm._v(" "), _c('van-radio', {
        attrs: {
          "name": "7",
          "checked-color": "#F54645",
          "mpcomid": '6_' + index3 + '-' + index6
        }
      }, [_vm._v("比较满意")]), _vm._v(" "), _c('van-radio', {
        attrs: {
          "name": "9",
          "checked-color": "#F54645",
          "mpcomid": '7_' + index3 + '-' + index6
        }
      }, [_vm._v("不满意")])], 1), _vm._v(" "), _c('p', [_vm._v("请评价：")]), _vm._v(" "), _c('textarea', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (_vm.message),
          expression: "message"
        }],
        staticClass: "comments",
        attrs: {
          "name": "",
          "id": "",
          "cols": "30",
          "rows": "10",
          "placeholder": _vm.placeholder,
          "eventid": '10_' + index3 + '-' + index6
        },
        domProps: {
          "value": (_vm.message)
        },
        on: {
          "input": function($event) {
            if ($event.target.composing) { return; }
            _vm.message = $event.target.value
          }
        }
      })], 1)]), _vm._v(" "), _c('button', {
        staticClass: "pj_btn",
        attrs: {
          "eventid": '11_' + index3 + '-' + index6
        },
        on: {
          "click": function($event) {
            _vm.pj(answersItem, _vm.second)
          }
        }
      }, [_vm._v("评价")])], 1) : _vm._e()]) : _vm._e()]) : _vm._e()]) : _vm._e()])
    }))]) : _vm._e()])
  }), _vm._v(" "), _c('comment', {
    attrs: {
      "tid": _vm.keytid,
      "mpcomid": '9'
    }
  })], 2), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '10'
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
     require("vue-hot-reload-api").rerender("data-v-744b132f", esExports)
  }
}

/***/ })

},[326]);