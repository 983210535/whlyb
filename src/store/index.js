import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)
const state = {
    isAuthenticated: wx.getStorageSync("isAuthenticated"), //是否认证
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
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})