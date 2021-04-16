<template>
  <div class="main">
    <div class="user" v-if="token" >
      <img @click="log"  :src="user.avatarUrl" alt="" ><span>{{user.nickName}}</span>
    </div>
    <div class="user" v-else >
      <img  @click="log" src="../../../static/images_pro/not_login.png" alt="" >
      <div class="login">
        <button open-type='getUserInfo' @getuserinfo='getUserInfo' class="login">点击登录/注册</button>
      </div>
    </div>

    <div class="choose">
      <div @click="me('lmsg')">
        <img src="../../../static/images_pro/my_lmsg.png" alt="">
        我的留言
      </div>
      <div @click="me('focus')">
        <img src="../../../static/images_pro/my_focus.png" alt="">
        我的关注
      </div>
      <div @click="me('msg')">
        <img src="../../../static/images_pro/my_msg.png" alt="">
        我的消息
      </div>
      
    </div>

    <div class="btm">
      <div class="list" @click="clickMe('zf')">
        <button open-type="share" class="share">
          <div class="cell">
            <img class="icon" src="../../../static/images_pro/my_zf.png" alt="">
            分享小程序
          </div>
          <img src="../../../static/images_pro/right.png" alt="" >
        </button>
      </div>
      
      <div class="list" @click="clickMe('guide')">
        <div class="cell">
          <img class="icon" src="../../../static/images_pro/my_guide.png" alt="">
          留言指南
        </div>
        <img src="../../../static/images_pro/right.png" alt="" >
      </div>

      <div class="list" @click="clickMe('del')">
        <div class="cell">
          <img class="icon" src="../../../static/images_pro/my_delete.png" alt="">
          清除缓存
        </div>
        <img src="../../../static/images_pro/right.png" alt="" >
      </div>

      <div class="list" @click="clickMe('about')">
        <div class="cell">
          <img class="icon" src="../../../static/images_pro/my_about.png" alt="">
          关于我们
        </div>
        <img src="../../../static/images_pro/right.png" alt="" >
      </div>

    </div>

    <button class="exit" v-if="token" @click="exit()">
      退出登录
    </button>

    
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    token(){
      return this.$store.state.token
    }
  },
  onLoad(){
    
  },
  onShow(){
   
  },
  components: {
    
  },

  methods: {
    exit(){
      var that = this
      wx.showModal({
        title: '退出登录',
        content: '确定退出登录吗',
        success(res) {
          if(res.confirm){
            that.$store.dispatch("setToken",false)
            that.$store.dispatch("setUserId",'')
            wx.removeStorageSync('token')
            wx.removeStorageSync('userId')
            wx.removeStorageSync('user')
            wx.removeStorageSync('isAuthenticated')
          }
        }  
      })
    },
    getUserInfo(e){
      console.log(e);
      if(e.mp.detail.userInfo){
        this.$store.dispatch("setUser",e.mp.detail.userInfo)
        wx.setStorageSync('user', e.mp.detail.userInfo);
        if(wx.getStorageSync("token") && wx.getStorageSync("isAuthenticated")){
          wx.switchTab({
            url: '../view/main'
          })
        }else{
          this.$store.dispatch("setIsAuthenticated",true)
          wx.setStorageSync('isAuthenticated', true);

          this.toLogin()

        }
      }
    },
    toLogin(){
      wx.login({
        success: res=>{
          console.log(res.code);
          this.getOpenid(res.code)
        }
      })
    },
    getOpenid(code){
      var that = this
      this.$https.request({
        url: that.$interfaces.getOpenid,
        // url: "http://192.168.7.61:84/messageboard/miniprogramuserinterface/login",
        data: {
          code : code
        },
        method: 'post'
      })
      .then(res=>{
        console.log(res);
        that.$store.dispatch("setOpenId",res.openid)
        if(res.code == -101){
          wx.navigateTo({url: '../register/main'})
        }
      })
      .catch(err=>{
        console.log("error");
      })
    },
    clickMe(e){
      console.log(e);
      switch (e) {
        case 'zf':
          console.log(123);
          break;

        case 'guide':
          wx.navigateTo({url: '../lyzn/main'})
          break;

        case 'del':
          console.log('delete');
          // this.$store.dispatch("setToken",false)
          // wx.clearStorage()
          wx.removeStorageSync("search")
          wx.showModal({
              title: '提示',
              content: '缓存已全部清除',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {  
                  console.log('点击确认回调')
                } else {   
                  console.log('点击取消回调')
                }
              }
            })

          break;
          
        case 'about':
          wx.navigateTo({url: '../aboutus/main'})  
          break;

        default:
          console.log('error');
          break;
      }
    },
    me(e){
      console.log(e);
      switch (e) {
        case 'lmsg':
          if(!this.$store.state.token){
            wx.showModal({
              title: '提示',
              content: '请登陆后再点击查看~',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {  
                  console.log('点击确认回调')
                } else {   
                  console.log('点击取消回调')
                }
              }
            })
          }else{
            wx.navigateTo({url: '../myleavemessage/main'})
          }
          break;

        case 'focus':
          if(!this.$store.state.token){
            wx.showModal({
              title: '提示',
              content: '请登陆后再点击查看~',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {  
                  console.log('点击确认回调')
                } else {   
                  console.log('点击取消回调')
                }
              }
            })
          }else{
            wx.navigateTo({url: '../focus/main'})
          }
          break;

        case 'msg':
          if(!this.$store.state.token){
            wx.showModal({
              title: '提示',
              content: '请登陆后再点击查看~',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {  
                  console.log('点击确认回调')
                } else {   
                  console.log('点击取消回调')
                }
              }
            })
          }else{
            wx.navigateTo({url: '../wdxx/main'})
          }
          break;
          
        default:
          console.log('error');
          break;
      }
    },
    // log(){
    //   console.log('click');
    //   this.login = !this.login
    // },
    gotoPage(e){
      this.$store.state.lytype=e
      if(e==10){
        wx.navigateTo({
          url:`../ybj/main?type=10`
        })
      }else{
        wx.navigateTo({
          url:`../myleavemessage/main?type=${e}`
        })
      }
      
    },
    getData(){
      // 获取角标
      this.$https.request({
        url:this.$interfaces.jb,
          data:{
          },
          header:{
            'content-type': 'application/x-www-form-urlencoded',
            JwtAuthorization:wx.getStorageSync("token")
          },
          method:'post'
      })
      .then(res=>{
        // this.allnum=res.myThreadsTotalNum[5].total
        // this.dpjnum=res.myThreadsTotalNum[6].total
        // this.ypjnum=res.myThreadsTotalNum[4].total
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getybj(){
      // 获取我的留言列表
      this.$https.request({
        url:this.$interfaces.ybj,
          data:{
            pageNum:1,
            pageSize:this.pageSize,
            isAsc:'desc',
            orderByColumn:'create_time'
          },
          header:{
            'content-type': 'application/x-www-form-urlencoded',
            JwtAuthorization:this.$store.state.token
          },
          method:'post'
      })
      .then(res=>{
        // this.ybjnum=res.total
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
  .main{
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #3D3D3D;
    position: relative;
  }
  .user{
    margin: 16px;
    display: flex;
    align-items: center;
    font-size: 24px;
  }
  .user img{
    border-radius: 50%;
    width: 64px;
    height: 64px;
    margin-right: 24px;
    display: inline-block;
  }
  .choose{
    margin: 8px 16px 16px;
    /* border: 1px solid rgba(0, 0, 0, .11); */
    box-shadow: 0 3px 6px rgba(0,0,0,.11);
    border-radius: 12px;
    padding: 16px 0;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
  }
  .choose div{
    width: 52px;
    height: 52px;
    text-align: center;
  }
  .choose img{
    width: 32px;
    height: 32px;
    padding-bottom: 4px;
    display: block;
    margin: auto;
  }
  .btm{
    margin: 0 16px;
    font-size: 14px;
    color: #252525;
  }
  .list{
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
  }
  
  .list img{
    width: 6px;
    height: 11px;
  }
  .list .icon{
    width: 26px;
    height: 26px;
    margin-right: 8px;
  }
  .cell{
    display: flex;
    align-items: center;
  }
  .login{
    /* width: 150px; */
    font-size: 24px;
  }
  .login button{
    background: #fff;
  }
  .login button::after{
    display: none;
  }
  .share{
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0;
    font-size: 14px;
    color: #252525;
    background: #fff;
  }
  .share::after{
    border: none;
  }
  .exit{
    width: 279px;
    height: 36px;
    background: #F6F5F5;
    color: #AFAFAF;
    font-size: 14px;
    border-radius: 6px;
    /* margin-top: 58px; */
    position: absolute;
    left: 48px;
    bottom: 35px;
  }
  .exit::after{
    border: none;
  }
</style>
