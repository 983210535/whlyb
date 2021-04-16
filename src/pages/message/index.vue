<template>
  <div class="main">
    <div class="rows">
      <div class="title">
        <span class="colon">*</span>标题:
      </div>
      <input @blur="lybtcompare" type="text" placeholder="不超过30个字，请勿填写特殊符号" v-model.lazy="lybt">
    </div>

    <div class="content_s">
      <div class="content">
        <div class="title">
          <span class="colon">*</span>内容:
        </div>
        
          <textarea class="txt"
            @blur="lynrcompare"
            disable-default-padding
            v-model.lazy="lynr"
            minlength=20
            maxlength=2000
            placeholder="请简要填写您要反映的问题，应包含时间、主体、事件描述三个要素，否则将无法为您及时处理。(字数控制在20-2000字之间)" />
      </div>
      <div class="imgBox">
        <div class="imgList" v-for="(item,index) in imgFilePaths" :key="index">
          <i class="delBtn"><van-icon @click="delFn(index)" name="clear" /></i>
          <img :src="item" alt="">
        </div>
      </div>
      <div class="imgUpload" v-show="uploadBtn" @click="imgUpload">
          <p>+</p>
          <p style="font-size:12px">上传图片</p>
      </div>
    </div>

    <!-- <div class="rows">
      <div class="title">
        <span class="colon">*</span>办理单位:
      </div>
      <input type="text" v-model="lywzText" placeholder="试试搜索：江岸区" disabled @click="lywzCheck">
    </div> -->
    
    <div class="rows">
      <div class="title">
        <span class="colon">*</span>联系人:
      </div>
      <input type="text" placeholder="请输入联系人" v-model.lazy="username">
    </div>
    
    <div class="rows">
      <div class="title">
        <span class="colon">*</span>电话:
      </div>
      <input type="number" placeholder="请输入联系电话" v-model.lazy="phone">
    </div>
    
    <div class="content_s">
      <div class="content">
        <div class="title">
          <span class="colon">*</span>地址:
        </div>
        <textarea class="txt2"
          disable-default-padding
          v-model.lazy="address"
          maxlength=50
          placeholder="请具体到事发地址附近小区、道路或标志建筑物" 
        />
        <van-button type="default" size="small" @click="toMap">
          获取定位
        </van-button>
        <!-- <textarea class="txt2"
          v-else
          disable-default-padding
          v-model.lazy="address" 
          maxlength=50
          placeholder="请具体到事发地址附近小区、道路或标志建筑物" 
        /> -->
      </div>
    </div>
        
      
    <div class="check">
      <input type="checkbox" @click="read">我已阅读并同意<span @click="treaty">《武汉城市留言板管理条约》</span>
    </div>
    

    <div class="btn">
      <!-- <van-button  color="#7232dd">确认无误&emsp;提交留言</van-button> -->
      <button @click="submintFn" value="true">确认无误&emsp;提交留言</button>
      <!-- <van-button color="#F54645">单色按钮</van-button> -->
    </div>

    <van-popup
      :show="zzshow"
      position="bottom"
      overlay="true"
      bind:close="onClose"
    >
      <van-picker 
      show-toolbar
      title="标题"
      :columns="columns" 
      @change="onChange" 
      @cancel="onCancel"
      @confirm="onConfirm" />
    </van-popup>
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
      isRead: false,
      iscall: true,
      lybt: '',
      username:'',
      phone: '',
      address: '',
      uploadBtn: 'true',
      zzshow: '',
      cities: {},
      columns: [
        // 第一列
        {
          values: []
        },
        // 第二列
        {
          values: []
        }
      ],
      lywzText:'',
      lywzId:'674221435723702272',
      imgFiles: [],
      imgFilePaths: [],
      tid:-1,
      anonymousState:0,
      mobile:1,
      count: ''
    }
  },
  components: {
    
  },
  onLoad(){
    this.isRead = false
    this.lybt=''
    this.lynr=''
    this.lywzText=''
    this.username=''
    this.phone=''
    this.address=''
    this.imgFilePaths=[]
    this.imgFiles=[]
    this.anonymousState=0
    this.uploadBtn = true
    this.count = 5
    // this.cities = {}

    this.$https.request({
      url: this.$interfaces.leavemessagePosition,
      data:{},
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      method:'post'
    })
    .then(res=>{
      console.log(res);
      if(!Object.keys(this.cities).length){
        for(var i=0;i<res.length;i++){
          this.cities[res[i].label]=new Array();
          for(var n=0;n<res[i].children.length;n++){
            this.cities[res[i].label].push({text:res[i].children[n].label,id:res[i].children[n].value})
          }
          this.columns[0].values.push({text:res[i].label,id:res[i].value})
        }
        for(var j=0;j<res[0].children.length;j++){
          this.columns[1].values.push({text:res[0].children[j].label,id:res[0].children[j].value})
        }
      }
      

      console.log(this.cities);
      // var _this = this
      // Object.keys(_this.cities).forEach(function(key){
      //   _this.columns[0].values.push({
      //     text:key,
      //     value:key
      //   })
      //   _this.columns[1].values=_this.cities[_this.columns[0].values[0].text]
      // })
    })
  },
  methods: {
    //前往条约页面
    treaty(){
      wx.navigateTo({url: '../sub/treaty/main'})
    },
    toMap(){
      var that = this
      // wx.navigateTo({url: '../map/main'})
      wx.chooseLocation({
        success: function (res) {
          console.log(res);
          that.address = res.name          
        },
        fail: function(err) {
          console.log(err);
          Notify({
            text: "获取定位失败",
            duration: 1000,
            selector: '#custom-selector',
            backgroundColor: '#f44'
          })
        }
      })
    },
     lywzCheck(){
      console.log(this.cities);
      this.zzshow = true
      for(var i = 0;i<this.cities.length;i++){
        this.columns[0].values.push({
          text:this.cities[i].label,
          id:this.cities[i].value
        })
      }
    },
    onChange(e){
      console.log(e);
      const { picker, value, index } = e.mp.detail;
      picker.setColumnValues(1, this.cities[value[0].text]);
    },
    onCancel(e){
      this.zzshow = false
      console.log(e);
      console.log(this.$store.state.lywzdata);
    },
    onConfirm(e){
      this.zzshow = false
      this.lywzText=e.mp.detail.value[1].text
      this.lywzId=e.mp.detail.value[1].id
      this.$store.dispatch('setCurrentLywz',e.mp.detail.value[1])

      console.log(this.lywzText,this.lywzId);
    },
    delFn(e){
      // 图片文件的删除方法
      for(var i=0;i<this.imgFiles.length;i++){
        if(i==e){
          this.imgFilePaths.splice(i,1)
          this.imgFiles.splice(i,1)
        }
      }
      if(this.imgFiles.length<5){
        this.uploadBtn=true
        this.count = 5 - this.imgFiles.length
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
    adress(){
      wx.navigateTo({ url: `../adress/main` });
    },
    imgUpload(){
      // 图片上传
      var _this=this
      console.log(_this.count);
      wx.chooseImage({
        count: _this.count, 
        success(res) {
          console.log(res)
          var curnum=_this.imgFiles.length
          if(res.tempFiles.length>(5-curnum)){
            Notify({
              text: "最多只能上传5张图片!",
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
          if(_this.imgFilePaths.length<5){
            _this.uploadBtn=true
            _this.count = 5 - _this.imgFilePaths.length
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
      if(this.lywzId==''||this.lybt==''||this.lynr==''||this.username==''||this.phone==''||this.address==''){
        Notify({
          text: '除图片附件其他均为必填项，请完善信息！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        })
        
      }else if(this.lybt.length>30){
        Notify({
          text: '标题请控制在30字以内！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        })
      }else if(this.lynr.length<20 || this.lynr.length > 2000){
        Notify({
          text: '内容不能少于20字，且不能超过2000字！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        })
      }else if(!this.isRead){
          Notify({
            text: '请先阅读并同意《武汉城市留言板管理条约》！',
            duration: 1000,
            selector: '#custom-selector',
            backgroundColor: '#f44'
          })
      }
      else{
        wx.showLoading({
            title:"加载中...",
            mask: true
        })
        var that = this
        wx.request({
            url:this.$interfaces.leavemessage,
            data:{
              fid:this.lywzId,
              typeId:635836920174825472,
              domainId:450,
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
            method:'post',
            success(res) {
              console.log(res);
              console.log(that);
              that.tid=res.data.tid
              var _this=that
              if(_this.imgFilePaths&&_this.imgFilePaths.length>0){
                let sum = 0
                for(var i=0;i<_this.imgFilePaths.length;i++){
                  console.log(222222)
                  console.log(_this.imgFilePaths[i])
                  wx.uploadFile({
                    url: _this.$interfaces.leavemessage, // 仅为示例，非真实的接口地址
                    filePath: _this.imgFilePaths[i],
                    name: 'fileList',
                    header:{
                      'content-type': 'application/x-www-form-urlencoded',
                      JwtAuthorization:_this.$store.state.token
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
                      anonymousState:_this.anonymousState,
                      mobile:_this.mobile
                    },
                    success(res) {
                      sum += 1
                      if(sum == _this.imgFilePaths.length){
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
                      
                    }
                  })
                }
              }else{
                console.log('xxxxxxxxxxxxxxxx');
                if(that.tid){
                  wx.hideLoading();
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
            }
        })
      }

    },
    read(){
      this.isRead = !this.isRead
      console.log(this.isRead);
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
    font-size: 12px;
  }
  .rows{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 343px;
    height: 54px;
    margin: auto;
    border-bottom: 1px solid #F2F2F2;
  }
  .content_s{
    width: 343px;
    margin: auto;
    border-bottom: 1px solid #F2F2F2;
  }
  .content{
    display: flex;
    justify-content: space-between;
    margin: 16px 0 0;
  }
  
  .title{
    font-size: 16px;
    color: #000;
    padding-right: 5px;
  }
  .colon{
    color: #FF1716;
  }
  .rows input,.txt,.txt2{
    margin: 0 16px;
    flex: 1;
  }
  .txt{
    height: 50px !important;
  }
  .txt2{
    height: 35px !important;
  }
  .imgBox{
    margin-right: 20px;
    padding-top: 8px;
    overflow: hidden;
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
  .imgUpload{
    width: 72px;
    height: 72px;
    border: 1px solid #DBDBDB;
    border-radius: 8px;
    font-size: 30px;
    color:#A0A0A0;
    /* line-height: 64px; */
    
    text-align: center;
    margin-bottom: 16px;
  }
  .check{
    margin: 30px 0;
    text-align: center;
    font-size: 10px;
    color: #9f9f9f;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .check span{
    color: #F54645;
  }
  .btn{
    padding: 0 16px;
  }
  .btn button{
    width: 100%;
    height: 36px;
    border-radius: 18px;
    background: #F54645;
    color: white;
    font-size: 14px;
  }
  
</style>
