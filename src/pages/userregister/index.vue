<template>
  <div class="main">
    <div class="register">
      <div class="topimg">
        <div class="bgimg">
          <img src="/static/images/regimg.png" alt="">
        </div>
        <div class="usericon">
          <img src="/static/images/usericon.jpeg" alt="">
        </div>
        
      </div>
      <div class="box">
        <van-cell-group class="areabox">

          <div class="dobox">
            <div class="boxBottom">
              <span><i>*</i>用户名</span>
              <input
              class="inputitem"
              type="text"
              v-model="username"
              clearable
                label="用户名"
                placeholder="请输入用户名"
                :error-message="errormsg"
                :border="true"
              >
            </div>
          </div>

          <div class="dobox">
            <div class="boxBottom">
              <span><i>*</i>笔名</span>
              <input
              class="inputitem"
              type="text"
              v-model="writename"
              clearable
                placeholder="请输入笔名"
                :error-message="errormsg"
                :border="true"
              >
            </div>
          </div>

          <div class="dobox">
            <div class="boxBottom">
              <span><i>*</i>密码</span>
              <input
              class="inputitem"
              type="password"
              v-model="password"
              clearable
                placeholder="请输入密码"
                :error-message="errormsg"
                :border="true"
              >
            </div>
          </div>

          <div class="dobox">
            <div class="boxBottom">
              <span><i>*</i>确认密码</span>
              <input
              class="inputitem"
              type="password"
              v-model="comfirmpassword"
              clearable
                placeholder="请再次输入密码"
                :error-message="errormsg"
                :border="true"
              >
            </div>
          </div>
        </van-cell-group>
        <div class="desc">以下内容只有管理员可见</div>
        <van-cell-group class="areabox">
          <div class="dobox">
            <div class="boxBottom">
              <span>真实姓名</span>
              <input
              class="inputitem"
              type="text"
              v-model="realname"
              clearable
                placeholder="请输入真实姓名"
                :error-message="errormsg"
                :border="true"
              >
            </div>
          </div>

          <div class="dobox">
            <div class="boxBottom">
              <span>身份证号</span>
              <input
              class="inputitem"
              type="number"
              v-model="idcard"
              clearable
                placeholder="请输入身份证号码"
                :error-message="errormsg"
                :border="true"
              >
            </div>
          </div>
        </van-cell-group>
      </div>

      <button class="submitbtn" @click="submit">提交</button>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Toast from '../../../static/vant/dist/toast/toast';
export default {
  data  () {
    return {
      openId:'',
      phone:'',
      errormsg:'',
      code:'',
      time:0,
      disabled:false,
      username:'',
      writename:'',
      password:'',
      comfirmpassword:'',
      realname:'',
      idcard:''
    }
  },

  components: {
    
  },

  methods: {
    submit(){
        if(this.writename==''||this.password==''||this.comfirmpassword==''||this.username==''){
          Toast('请将必填项信息填写完整！')
        }else{
          if(this.password!=this.comfirmpassword){
            Toast.fail("两次密码填写不一致！");
          }else{
            this.$https.request({
              url:this.$interfaces.register,
              data:{
                openid:this.$store.state.openId,
                writename:this.writename,
                password:this.password,
                realname:this.realname,
                idcard:this.idcard,
                username:this.username
              },
              header:{
                'content-type': 'application/x-www-form-urlencoded'
              },
              method:'post'
            })
            .then(res=>{
              if(res.code==0){
                this.$store.dispatch("setToken",res.token)
                Toast.success(res.msg)
                wx.switchTab({
                  url:"../view/main"
                })
              }else{
                Toast.fail(res.msg)
              }
            })
          }
          
        } 
    }
  },
  onLoad(option){
    
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
    background: #f7f7f7;
  }
  .topimg{
    height: 150px;
    background: #fff;
  }
  .register{
    overflow: hidden;
  }
  .areabox{
    display: block;
  }
  .inpitem{
    height: 42px;
    border-radius: 30px;
    background: #fff;
    padding-left: 15px;
    font-size: 14px;
  }
  .desc{
    font-size: 14px;
    line-height: 32px;
    margin-top: 10px;
    padding-left: 10px;
    color:#999;
  }
  .topimg .bgimg{
    width: 100%;
    height: 100%;
  }
  .topimg .bgimg img{
    display: block;
    width: 100%;
    height: 70%;
  }
  .usericon{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -50px;
    border: 2px solid #fff;
  }
  .usericon img{
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 50%;
    margin: 10px;
  }
  .inputitem{
    height: 42px;
    font-size: 13px;
    
  }
  .dobox{
    background: #fff;
    padding-left: 8px;
    line-height: 42px;
    font-size: 13px;
    
  }
  .dobox span{
    width: 90px;
    display: inline;
    float: left;
    
  }
  .dobox i{
    display: inline;
    color: #f54c4c;
  }
  .boxBottom{
    border-bottom: 1px solid #f7f7f7;
    position: relative;
  }
  .yzmbtn{
    position: absolute;
    right: 15px;
    top: 0px;
  }
  .yzm{
    width: 160px;
  }
  .submitbtn{
    background: rgb(255, 195, 65);
    color: #fff;
    margin: 20px;
    font-size: 14px;
  }
  .yzmbtn{
    background: rgb(255, 195, 65);
    height: 30px;
    font-size: 12px;
    margin-top: 6px;
    color: #fff;
  }
</style>
