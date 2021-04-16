<template>
  <div class="main">
    <div class="login">
      <img src="/static/images/main_bg_b.png" alt="">
    </div>
    <div class="bottom">
      <button open-type="getUserInfo" @getuserinfo="getuserInfo">我要留言</button>
      <p class="desc">一块帮老百姓办事的留言板</p>
    </div>
    <van-notify id="custom-selector" />
  </div>
</template>

<script>
import Notify from '../../../static/vant/dist/notify/notify';
export default {
  data () {
    return {
      
    }
  },
  components: {
    
  },
  methods: {
    getuserInfo(e){
      // 判断授权是否成功
      
        if(e.mp.detail.userInfo) {
          this.$store.dispatch("setUser",e.mp.detail.userInfo)
          wx.setStorageSync('user', e.mp.detail.userInfo);
          if(wx.getStorageSync("token")&&wx.getStorageSync("isAuthenticated")){
            wx.switchTab({
              url: '../view/main'
            })
          }else{
              // 存储到vuex
              this.$store.dispatch("setIsAuthenticated",true)
              wx.setStorageSync('isAuthenticated', true);
              
              // 获取code
              this.getCode()
          }
        }
      
    },
    getCode(){
      // 全局小程序对象wx
      wx.login({
        success:res =>{
          if(res.code){
            this.getOpenid(res.code)
          }else{
            console.log('登录失败！')
          }
        }
      })
    },
    getOpenid(code){
      // 三个参数appid secret  code

      var self=this
      self.$https.request({
        url:self.$interfaces.getOpenid,
        data:{
          code:code
        },
        method:'post'
      })
      .then(res=>{
        // 将openid存到vuex中
        self.$store.dispatch('setOpenId',res.openid)
        if(res.code==-101){
          wx.navigateTo({
            url: '../register/main'
          })
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  created () {
    
  }
}
</script>

<style scoped>
  .main,.login{
    width: 100%;
    height: 100%;
  }
  .login{
    position: absolute;
    z-index: -1;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .bottom{
    position: absolute;
    bottom: 100px;
    width: 100%;
    text-align: center;
  }
  button{
    width: 80%;
    background: #61a8f1;
    color: #fff;
  }
  p{
    font-size: 26rpx;
    color: #999;
    line-height: 52rpx;
  }
</style>
