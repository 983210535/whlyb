require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_interfaces__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_https__ = __webpack_require__(70);







// import wxParse from 'mpvue-wxparse'

// Vue.component("wxParse",wxParse)

global.interfaces = __WEBPACK_IMPORTED_MODULE_3__utils_interfaces___default.a;
// import {formatDate} from '../static/js/date.js'


// Vue.prototype.formatDate1= function (value) {  

//     var date = new Date(value);
//     return formatDate(date, 'yyyy-MM-dd hh:mm');

// };

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config._mpTrace = true;

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$interfaces = __WEBPACK_IMPORTED_MODULE_3__utils_interfaces___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$https = __WEBPACK_IMPORTED_MODULE_4__utils_https__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(36)))

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(63);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1e0b8fa", Component.options)
  } else {
    hotAPI.reload("data-v-d1e0b8fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getters__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(68);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
var state = {
    isAuthenticated: wx.getStorageSync("isAuthenticated"), //????????????
    user: wx.getStorageSync("user"),
    openId: '',
    userId: wx.getStorageSync("userId"),
    tabledata: [],
    token: wx.getStorageSync("token"),
    singleItem: '',
    lylxid: '',
    lylyid: '',
    lywzdata: '',
    listdata: '',
    newcontent: '',
    wdlyitem: '',
    currentLywz: '',
    lywzid: '',
    searchdata: [],
    lytype: '',
    mass: {},
    mylvarr: [],
    tid: '',
    wantGz: ''
};
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: state,
    getters: __WEBPACK_IMPORTED_MODULE_2__getters__,
    mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__,
    actions: __WEBPACK_IMPORTED_MODULE_4__actions__
}));

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthenticated", function() { return isAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userId", function() { return userId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openId", function() { return openId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabledata", function() { return tabledata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "token", function() { return token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleItem", function() { return singleItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lylxid", function() { return lylxid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lylyid", function() { return lylyid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lywzid", function() { return lywzid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lywzdata", function() { return lywzdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listdata", function() { return listdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newcontent", function() { return newcontent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wdlyitem", function() { return wdlyitem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentLywz", function() { return currentLywz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchdata", function() { return searchdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tid", function() { return tid; });
var isAuthenticated = function isAuthenticated(state) {
  return state.isAuthenticated;
};
var user = function user(state) {
  return state.user;
};
var userId = function userId(state) {
  return state.userId;
};
var openId = function openId(state) {
  return state.openId;
};
var tabledata = function tabledata(state) {
  return state.openId;
};
var token = function token(state) {
  return state.token;
};
var singleItem = function singleItem(state) {
  return state.singleItem;
};
var lylxid = function lylxid(state) {
  return state.lylxid;
};
var lylyid = function lylyid(state) {
  return state.lylyid;
};
var lywzid = function lywzid(state) {
  return state.lywzid;
};
var lywzdata = function lywzdata(state) {
  return state.lywzdata;
};
var listdata = function listdata(state) {
  return state.listdata;
};
var newcontent = function newcontent(state) {
  return state.newcontent;
};
var wdlyitem = function wdlyitem(state) {
  return state.wdlyitem;
};
var currentLywz = function currentLywz(state) {
  return state.currentLywz;
};
var searchdata = function searchdata(state) {
  return state.searchdata;
};
var tid = function tid(state) {
  return state.tid;
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsAuthenticated", function() { return setIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenId", function() { return setOpenId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserId", function() { return setUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTid", function() { return setTid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWantGz", function() { return setWantGz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMylv", function() { return setMylv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabData", function() { return setTabData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSingleItem", function() { return setSingleItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLylxId", function() { return setLylxId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLylyId", function() { return setLylyId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLywzId", function() { return setLywzId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLywzData", function() { return setLywzData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setListData", function() { return setListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewContent", function() { return setNewContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWdlyItem", function() { return setWdlyItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentLywz", function() { return setCurrentLywz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchData", function() { return setSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMass", function() { return setMass; });
var setIsAuthenticated = function setIsAuthenticated(state, data) {
    state.isAuthenticated = data;
};

var setUser = function setUser(state, data) {
    state.user = data;
};

var setOpenId = function setOpenId(state, data) {
    state.openId = data;
};

var setUserId = function setUserId(state, data) {
    state.userId = data;
};

var setTid = function setTid(state, data) {
    state.tid = data;
};
var setWantGz = function setWantGz(state, data) {
    state.wantGz = data;
};

var setMylv = function setMylv(state, data) {
    state.mylvarr = data;
};

var setTabData = function setTabData(state, data) {
    state.tabledata = data;
};

var setToken = function setToken(state, data) {
    state.token = data;
};

var setSingleItem = function setSingleItem(state, data) {
    state.singleItem = data;
};

var setLylxId = function setLylxId(state, data) {
    state.lylxid = data;
};

var setLylyId = function setLylyId(state, data) {
    state.lylyid = data;
};

var setLywzId = function setLywzId(state, data) {
    state.lywzid = data;
};

var setLywzData = function setLywzData(state, data) {
    state.lywzdata = data;
};

var setListData = function setListData(state, data) {
    state.listdata = data;
};

var setNewContent = function setNewContent(state, data) {
    state.newcontent = data;
};

var setWdlyItem = function setWdlyItem(state, data) {
    state.wdlyitem = data;
};

var setCurrentLywz = function setCurrentLywz(state, data) {
    state.currentLywz = data;
};

var setSearchData = function setSearchData(state, data) {
    state.searchdata = data;
};

var setMass = function setMass(state, data) {
    state.mass = data;
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsAuthenticated", function() { return setIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenId", function() { return setOpenId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserId", function() { return setUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMylv", function() { return setMylv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabData", function() { return setTabData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTid", function() { return setTid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWantGz", function() { return setWantGz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSingleItem", function() { return setSingleItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLylxId", function() { return setLylxId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLylyId", function() { return setLylyId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLywzId", function() { return setLywzId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLywzData", function() { return setLywzData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setListData", function() { return setListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewContent", function() { return setNewContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWdlyItem", function() { return setWdlyItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentLywz", function() { return setCurrentLywz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchData", function() { return setSearchData; });
var setIsAuthenticated = function setIsAuthenticated(_ref, data) {
    var commit = _ref.commit;

    commit('setIsAuthenticated', data);
};

var setUser = function setUser(_ref2, data) {
    var commit = _ref2.commit;

    commit('setUser', data);
};

var setOpenId = function setOpenId(_ref3, data) {
    var commit = _ref3.commit;

    commit('setOpenId', data);
};

var setUserId = function setUserId(_ref4, data) {
    var commit = _ref4.commit;

    commit('setUserId', data);
};

var setMylv = function setMylv(_ref5, data) {
    var commit = _ref5.commit;

    commit('setMylv', data);
};

var setTabData = function setTabData(_ref6, data) {
    var commit = _ref6.commit;

    commit('setTabData', data);
};

var setTid = function setTid(_ref7, data) {
    var commit = _ref7.commit;

    commit('setTid', data);
};
var setWantGz = function setWantGz(_ref8, data) {
    var commit = _ref8.commit;

    commit('setWantGz', data);
};

var setToken = function setToken(_ref9, data) {
    var commit = _ref9.commit;

    commit('setToken', data);
};

var setSingleItem = function setSingleItem(_ref10, data) {
    var commit = _ref10.commit;

    commit('setSingleItem', data);
};

var setLylxId = function setLylxId(_ref11, data) {
    var commit = _ref11.commit;

    commit('setLylxId', data);
};

var setLylyId = function setLylyId(_ref12, data) {
    var commit = _ref12.commit;

    commit('setLylyId', data);
};

var setLywzId = function setLywzId(_ref13, data) {
    var commit = _ref13.commit;

    commit('setLywzId', data);
};

var setLywzData = function setLywzData(_ref14, data) {
    var commit = _ref14.commit;

    commit('setLywzData', data);
};

var setListData = function setListData(_ref15, data) {
    var commit = _ref15.commit;

    commit('setListData', data);
};

var setNewContent = function setNewContent(_ref16, data) {
    var commit = _ref16.commit;

    commit('setNewContent', data);
};

var setWdlyItem = function setWdlyItem(_ref17, data) {
    var commit = _ref17.commit;

    commit('setWdlyItem', data);
};

var setCurrentLywz = function setCurrentLywz(_ref18, data) {
    var commit = _ref18.commit;

    commit('setCurrentLywz', data);
};

var setSearchData = function setSearchData(_ref19, data) {
    var commit = _ref19.commit;

    commit('setSearchData', data);
};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

var domain = "https://liuyan-api.cjn.cn/";
var domain1 = "http://pic.liuyan.cjn.cn/";

var domain = "http://www.cnhcit.com:84/";
var domain1 = "http://pic.liuyan.cjn.cn/";

// var domain="http://221.232.78.61:84"
// var domain1="http://221.232.78.61:84"


// var domain="https://192.168.7.61:84/"
// var domain1="https://192.168.7.61:84/"
// var domain = "http://192.168.7.61:84/"
// var domain1 = "http://192.168.7.61:84/"
// var domain = "http://172.16.11.183:84/"
// var domain1 = "http://172.16.11.183:84/"


var interfaces = {
    usericon: domain,
    defaltUsericon: domain1 + '/files/usericon/usericon.jpeg',
    getOpenid: domain + '/messageboard/miniprogramuserinterface/login', //??????openid?????????
    bindaccount: domain + '/messageboard/miniprogramuserinterface/bindaccount',
    fivefl: domain + '/messageboard/internetUserInterface/fivefl', //????????????
    leavemessagePosition: domain + '/messageboard/internetUserInterface/selectForum', //????????????
    leavemessageIndex: domain + '/messageboard/internetUserInterface/selectIndexForum', //??????index API
    newleavemessage: domain + '/messageboard/miniprogramuserinterface/selectThreadsMinProgram', //????????????
    arealeavemessage: domain + '/messageboard/internetUserInterface/selectThreadsByGroup', //???????????????fid??????????????????
    myleavemessage: domain + '/messageboard/internetUserInterface/selectThreadsByUser', //????????????
    leavemessageArea: domain + '/messageboard/internetUserInterface/selectThreadsDomain', //????????????
    leavemessageType: domain + '/messageboard/internetUserInterface/selectThreadsType', //????????????
    leavemessage: domain + '/messageboard/internetUserInterface/leavemessage', //??????
    mainIp: domain1 + '/files/attachment/', //??????????????????
    search: domain + '/messageboard/api/essearch/querySearchMapByPage', //??????
    contentDetail: domain + '/messageboard/internetUserInterface/selectThreadsOne', //????????????
    contentDetails: domain + '/messageboard/internetUserInterface/selectThreadsOneByUser', //????????????????????????
    selectTrashThreadsOneByUser: domain + '/messageboard/internetUserInterface/selectTrashThreadsOneByUser', //????????????????????????
    unreadData: domain + '/inbox/message/getunreadmessagelist', //?????????-????????????????????????
    setread: domain + '/inbox/message/updatemessagesread', //????????????????????????
    newcontent: domain + '/inbox/message/show', //??????????????????
    comment: domain + '/messageboard/internetUserInterface/feedbackThreads', //??????
    sendCode: domain + '/messageboard/netuserinterface/sendSms', //?????????????????????
    register: domain + '/messageboard/miniprogramuserinterface/register', //??????
    jb: domain + '/messageboard/internetUserInterface/getMyThreadsTotalNumber', //??????????????????
    ybj: domain + '/messageboard/internetUserInterface/selectThreadsTrashByUser', //?????????

    myMsg: domain + '/messageboard/newsText/list', //????????????
    peopleDz: domain + '/messageboard/threads/dz/list', //????????????
    focus: domain + '/messageboard/internetUserInterface/selectThreadsUserFavorite', //????????????
    satisfaction: domain + '/messageboard/internetUserInterface/fivemyfl', //?????????--?????????
    toFocus: domain + '/messageboard/internetUserInterface/focusOnThreads', //??????

    valuate: domain + '/messageboard/threadsComment/add', //??????
    getvalueate: domain + '/messageboard/threadsComment/listComments' //????????????


};

module.exports = interfaces;

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

var https = {
    request: function request() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = options.url,
            data = options.data,
            header = options.header,
            method = options.method,
            params = options.params;
        // ????????????

        wx.showLoading({
            title: "?????????..."
        });
        var headerdata;
        if (header) {
            headerdata = {
                'content-type': 'application/x-www-form-urlencoded',
                JwtAuthorization: wx.getStorageSync("token")
            };
        } else {
            headerdata = '';
        }
        return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
            wx.request({
                url: url,
                data: data,
                header: headerdata,
                method: method,
                params: params,
                success: function success(res) {
                    wx.hideLoading();

                    // ????????????
                    if (res.statusCode == 404) {
                        reject();
                        return false;
                    } else if (res.statusCode != 200) {
                        wx.showToast({
                            title: '??????????????????????????????',
                            icon: 'none'
                        });

                        wx.redirectTo({
                            url: "/pages/register/main"
                        });

                        // wx.clearStorage()
                        // return false;
                    }
                    // ??????????????????
                    resolve(res.data);
                },
                fail: function fail(err) {
                    wx.hideLoading();
                    reject(err);
                },
                complete: function complete() {
                    wx.hideLoading();
                }
            });
        });
    }
};
/* harmony default export */ __webpack_exports__["a"] = (https);

/***/ })

},[60]);