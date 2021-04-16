import Vue from 'vue'
import App from './App'

import store from './store/index'
import interfaces from './utils/interfaces'
import https from './utils/https'

// import wxParse from 'mpvue-wxparse'

// Vue.component("wxParse",wxParse)

global.interfaces = interfaces
// import {formatDate} from '../static/js/date.js'


// Vue.prototype.formatDate1= function (value) {  

//     var date = new Date(value);
//     return formatDate(date, 'yyyy-MM-dd hh:mm');

// };

Vue.config._mpTrace = true

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$interfaces = interfaces
Vue.prototype.$https = https
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
