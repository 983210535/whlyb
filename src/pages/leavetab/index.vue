<template>
  <div class="main">
    <div class="tabBox">
      <div class="tabList">
        <div class="listBox topinput">
          <textarea
           @blur="lybtcompare"
           auto-height
           v-model.lazy="lybt"
           maxlength=30
           placeholder="请输入留言标题(不超过30个字)" />
        </div>
          <div class="listBox topinput">
            <textarea
            @blur="lynrcompare"
            auto-height
            v-model.lazy="lynr"
            minlength=20
            maxlength=2000
            placeholder="请输入留言内容(20-2000字)" />
          </div>
          <div class="title">图片上传</div>
          <div class="imgBox">
            <div class="imgList" v-for="(item,index) in imgFilePaths" :key="index">
              <i class="delBtn"><van-icon @click="delFn(index)" name="clear" /></i>
              <img :src="item" alt="">
            </div>
          </div>

          <div class="imgUpload" v-show="uploadBtn" @click="imgUpload">
            +
          </div>
          <div class="title">联系方式<i>以下内容仅供工作人员查看，不对外公开！</i></div>
          
          <input required class="inpBox" type="text" v-model.lazy="username" placeholder="请输入联系人">
          <input required class="inpBox" type="number" v-model.lazy="phone" placeholder="请输入手机号">
          <input required class="inpBox" type="text" v-model.lazy="address" placeholder="请输入地址">

          <!-- <div class="checkdiv">
            <span class="fll">
              
            </span>
            <span class="flr">
              <van-checkbox :value="iskey" @change="isKey"></van-checkbox>
            </span>
          </div> -->
      </div>
    </div>
    <button @click="submintFn">提交留言</button>
    <van-dialog id="van-dialog" />
    <van-notify id="custom-selector" />
  </div>
</template>

<script>
import Dialog from '../../../static/vant/dist/dialog/dialog';
import Notify from '../../../static/vant/dist/notify/notify';
export default {
  data () {
    return {
      iscall: true,
      iskey:false,
      user:'',
      lywzText:'',
      lywzId:'',
      zzshow:false,
      citys:'',
      list:[
        {
          name:'同意电话联系',
          value:1
        },
        {
          name:'匿名留言',
          value:1
        }
      ],
      result:[],
      columns: [
        {
          values: [],
          className: 'column1'
        },
        {
          values: [],
          className: 'column2',
          defaultIndex: 2
        }
      ],
      lybt:'',
      txtBox:'',
      lynr:'',
      imgFilePaths:[],
      imgFiles:[],
      uploadBtn:true,
      lylxid:'',
      lylyid:'',
      username:'',
      phone:'',
      address:'',
      tid:-1,
      anonymousState:0,
      mobile:1
    }
  },
  components: {
    
  },
  onLoad(){
    this.user=this.$store.state.user
    this.lylxid=this.$store.state.lylxid
    this.lylyid=this.$store.state.lylyid
    this.lywzId=this.$store.state.lywzid
    this.lybt=''
    this.lynr=''
    this.username=''
    this.phone=''
    this.address=''
    this.imgFilePaths=[]
    this.anonymousState=0
    this.mobile=1
  },
  methods: {
    delFn(e){
      // 图片文件的删除方法
      for(var i=0;i<this.imgFiles.length;i++){
        if(i==e){
          this.imgFilePaths.splice(i,1)
          this.imgFiles.splice(i,1)
        }
      }
      if(this.imgFiles.length<9){
        this.uploadBtn=true
      }
    },
    isCall(e){
      // 是否电话联系
      this.iscall=e.mp.detail
    },
    isKey(e){
      this.iskey=e.mp.detail
    },
    lynrcompare(){
      // 校验留言内容
      if(this.lynr.length<20||this.lynr.length>2000){
        Notify({
          text: "留言内容(20-2000字)!",
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        })
      }
    },
    lybtcompare(e){
      console.log(this.lybt)
      console.log(this.lybt.length)
      // 留言标题校验
      if(this.lybt==''||this.lybt.length>30){
        Notify({
          text: "留言标题(不超过30字)!",
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        })
      }
    },
    imgUpload(){
      // 图片上传
      var _this=this
      wx.chooseImage({
        success(res) {
          console.log(res)
          var curnum=_this.imgFiles.length
          if(res.tempFiles.length>(9-curnum)){
            Notify({
              text: "最多只能上传9张图片!",
              duration: 1000,
              selector: '#custom-selector',
              backgroundColor: '#f44'
            })
          }else{
            console.log(111111)
            for(var i=0;i<res.tempFilePaths.length;i++){
              _this.imgFiles.push(res.tempFiles[i])
              _this.imgFilePaths.push(res.tempFilePaths[i])

            }
          }
          console.log(_this.imgFilePaths)
          // _this.imgFilePaths=res.tempFilePaths
          if(_this.imgFilePaths.length<9){
            _this.uploadBtn=true
          }else{
            _this.uploadBtn=false
          }

        }
      })
    },
    submintFn(){
      // 提交留言
      if(this.iskey){
          this.anonymousState=1
      }else{
          this.anonymousState=0
      }
      // 是否电话联系
      if(this.iscall){
        this.mobile=1
      }else{
        this.mobile=0
      }
      if(this.lywzId==''||this.lylxid==''||this.lylyid==''||this.lybt==''||this.lynr==''||this.username==''||this.phone==''||this.address==''){
        Notify({
          text: '除图片附件其他均为必填项，请完善信息！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        })
        
      }else{
        // if(!(/^1[12345789]\d{9}$/.test(this.phone))){
        //   Notify({
        //     text: '手机号码有误，请重新填写！',
        //     duration: 1000,
        //     selector: '#custom-selector',
        //     backgroundColor: '#f44'
        //   })
        // }else{
        
        // }
        wx.showLoading({
            title:"加载中..."
        })
        this.$https.request({
            url:this.$interfaces.leavemessage,
            data:{
              fid:this.lywzId,
              typeId:this.lylxid,
              domainId:this.lylyid,
              subject:this.lybt,
              content:this.lynr,
              user_name:this.username,
              user_phone:this.phone,
              user_address:this.address,
              fileList:'',
              tid:'',
              anonymousState:this.anonymousState,
              mobile:this.mobile,
              source:15
            },
            header:{
              'content-type': 'application/x-www-form-urlencoded',
              JwtAuthorization:this.$store.state.token
            },
            method:'post'
        })
        .then(res=>{
          this.tid=res.tid
          var _this=this
          if(_this.imgFilePaths&&_this.imgFilePaths.length>0){
            for(var i=0;i<_this.imgFilePaths.length;i++){
              console.log(222222)
              console.log(_this.imgFilePaths[i])
              wx.uploadFile({
                url: this.$interfaces.leavemessage, // 仅为示例，非真实的接口地址
                filePath: _this.imgFilePaths[i],
                name: 'fileList',
                header:{
                  'content-type': 'application/x-www-form-urlencoded',
                  JwtAuthorization:this.$store.state.token
                },
                formData: {
                  fid:_this.lywzId,
                  typeId:_this.lylxid,
                  domainId:_this.lylyid,
                  subject:_this.lybt,
                  content:_this.lynr,
                  user_name:_this.username,
                  user_phone:_this.phone,
                  user_address:_this.address,
                  tid:_this.tid,
                  anonymousState:this.anonymousState,
                  mobile:this.mobile
                },
                success(res) {
                  var self=_this
                  wx.hideLoading();
                  Dialog.alert({
                    message: '留言成功！'
                  }).then(() => {
                    // on close
                    wx.switchTab({
                      url:"../mine/main"
                    })
                  })
                }
              })
            }
          }else{
            if(_this.tid){
              Dialog.alert({
                message: '留言成功！'
              }).then(() => {
                wx.switchTab({
                  url:"../mine/main"
                })
              });
            }else{
              Notify({
                text: res.data.msg,
                duration: 1000,
                selector: '#custom-selector',
                backgroundColor: '#f44'
              })
            }
          }
        })
        .catch(err=>{
          console.log(err)
        })
      }

    }
  },
  created () {
    
  }
}
</script>

<style scoped>
  page{
    background: #fff;
  }
  .main{
    width: 100%;
    height: 100%;
    background: #fff;
    font-size: 14px;
  }
  .tabBox{
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 0 10px 0 #e5e5e5;
    margin: 15px;
  }
  .title{
    padding: 5px 0 0;
    border-bottom: 1px dashed #e5e5e5;
  }
  .title i{
    display: inline;
    color: #c9c9c9;
    font-size: 12px;
    margin-left: 6px;
  }
  .tabList{
    overflow: hidden;
    line-height: 30px;
  }
  .listBox{
    padding: 10px 0;
  }
  .usericon{
    width: 52px;
    height: 52px;
    overflow: hidden;
    border-radius: 50%;
    background: pink;
    float: left;
  }
  .usericon img{
    width: 100%;
    height: 100%;
  }
  .depName{
    width: 52px;
    text-align: center;
    font-size: 12px;
    color: #999;
    line-height: 52px;
    float: left;
  }
  .list_l{
    float: left;
  }
  .list_r{
    float: right;
    color: #999;
    line-height: 52px;
    font-size: 12px;
  }
  .imgUpload{
    width: 64px;
    height: 64px;
    border: 1px dashed #61a8f1;
    border-radius: 6px;
    font-size: 18px;
    color: #61a8f1;
    line-height: 64px;
    text-align: center;
  }
  .imgList{
    width: 60px;
    height: 60px;
    float: left;
    margin: 0 15px 10px 0; 
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 #e5e5e5;
    position: relative;
  }
  .delBtn{
    position:absolute;
    top:-6px;
    right:0;
    color:#999;

  }
  .imgList img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .imgBox{
    margin-top: 20px;
    overflow: hidden;
  }
  button{
    width: 80%;
    background: #61a8f1;
    color: #fff;
    margin: 30px auto;
  }
  textarea{
    width: 100%;
  }
  .inpBox{
    padding: 8px 0;
    border-bottom: 1px dashed #e5e5e5;
  }
  .topinput{
    border-bottom: 1px dashed #e5e5e5;
  }
  .checkdiv{
    overflow: hidden;
    padding:5px 0;
    border-bottom:1px dashed #e5e5e5;

  }
  .checkdiv .fll{
    float: left;
  }
  .checkdiv .flr{
    float: right;
  }
</style>
