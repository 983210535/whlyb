<template>
  <div class="main">
    <div class="topImg">
      <img src="../../../static/images_pro/welcome.png" alt="">
    </div>
    <div class="btoBtn">
      <button class="sqBtn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"><img src="../../../static/images_pro/wechat.png" alt="">微信授权登录</button> 
      <!-- <button class="sqBtn sqBtn_s" @click="toPhone"><img src="../../../static/images_pro/phone.png" alt="" @click="toPhone">手机快捷登录</button> -->
    </div> 
  </div>
</template>

<script>
export default {
  data  () {
    return {
      openId:'',
      tid: '',
      want: false
    }
  },
  components: {
    
  },
  computed: {
    // tid(){
    //   return this.$store.getters.tid
    // }
  },
  onLoad(){
    this.tid = this.$store.state.tid
    this.want = this.$store.state.wantGz
    if(!this.$store.state.openId){
      this.isOpenId()
    }
  },
  methods: {
    isOpenId(){
      var that = this
      wx.login({
        success: res => {
          console.log(res.code);
          that.$https.request({
            url: that.$interfaces.getOpenid,
            // url: "http://192.168.7.61:84/messageboard/miniprogramuserinterface/login",
            data: {
              code : res.code
            },
            method: 'post'
          })
          .then(ress=>{
            console.log(ress);
            if(ress.code == -101){
              // wx.navigateTo({url: '../register/main'})
              that.$store.dispatch("setOpenId",ress.openid)
            }
          })
          .catch(err=>{
            console.log("error");
          })
        }
      })
    },
    toPhone(){
      wx.navigateTo({url: '../phone/main'})
    },
    getPhoneNumber(e){
      console.log(e);
      // 获取电话号码传给后台-存储token
      this.$https.request({
        url:this.$interfaces.bindaccount,
        // url:'http://192.168.7.61:84/messageboard/miniprogramuserinterface/bindaccount',
        data:{
          openid:this.$store.state.openId,
          iv:e.mp.detail.iv,
          encryptedData:e.mp.detail.encryptedData
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:'post'
      })
      .then(res=>{
        console.log(this.$store.state.openId);
        console.log(res);
        if(res.code==0){
          this.$store.dispatch("setToken",res.token)
          this.$store.dispatch("setUserId",res.userId)
          wx.setStorageSync('token', res.token);
          wx.setStorageSync('userId', res.userId);
          // 如果从留言详情登录的，登录完跳回到详情页
          if(this.tid && this.want){
            // console.log(this.$store.state.wantGz);
            this.$store.dispatch('setWantGz', false)
            wx.redirectTo({
              url:"../lyDetails/main"
              // delta: 1
            })
          }else{
            wx.redirectTo({
              url:"../message/main"
            })
          }
        }else if(res.code==-101){
          wx.navigateTo({
            url:"../userregister/main"
          })
        }
      })
      .catch(err=>{
        console.log(err);
      })
    },
  },
  
  created () {
    
  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
    position: relative;
  }
  .topImg{
    width:100%;
    position:absolute;
    top: 132px;
    text-align:center;
  }
  .topImg img{
    width: 258px;
    height: 49px;
  }
  .btoBtn{
    width: 100%;
    position: absolute;
    top: 379px;
  }
  .sqBtn{
    width: 327px;
    height: 49px;
    border-radius: 34px;
    background: #F54645;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sqBtn_s{
    background:#fff;
    margin-top: 24px;
    border: 1px solid #F54645;
    color: #F54645;
  }
  .sqBtn img{
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
</style>
