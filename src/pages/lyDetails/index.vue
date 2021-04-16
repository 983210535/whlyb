<template>
  <div class="main">
    <div class="xbox">
      <!-- 标题部分 -->
      <div class="threads">
        <div class="head">
          <div class="title">
            <!-- <wxParse :content="threads.subject" /> -->
            {{ threads.subject }}
          </div>
          <p>{{ threads.nickName }}</p>
          <p>
            <span>
              {{ threads.dateline_txt }}
            </span>
            <span  class="seaTime">
              查询码：{{threads.queryCode}}
            </span>
          </p>
        </div>
        <div class="share">
          <template v-if="threads.isFocusOn == 0">
            <img src="../../../static/images_pro/wgz.png" alt="" @click="gz(1)">
          </template>
          <template v-else>
            <img src="../../../static/images_pro/ygz.png" alt="" @click="gz(0)">
          </template>
          关注
          <button open-type="share" class="zf" ></button>
          <img src='../../../static/images_pro/zf.png' class="fx">

        </div>
      </div>

      <!-- 留言内容 -->
      <div class="content">
        <wxParse v-if="threads.content" :content="threads.content" />
            <!-- {{ threads.subject }} -->
      </div>

      <div class="fjBox" v-if="threads.attachementsList&&threads.attachementsList!=''">
        <div class="fjdesc">留言附件：</div>
        <div class="fjBox">
          <ul>
            <li v-for="(item,index) in threads.attachementsList" :key="index" v-if="item.isimage">
              <img :src="mainIp+item.attachment" alt="" @click="BIG(mainIp+item.attachment,threads.attachementsList)">
            </li>
            <p v-for="(item,index) in threads.attachementsList" v-if="!item.isimage" :key="item.aid+1" class="file" @click="file(mainIp+item.attachment,item.fileName)">{{ item.fileName }}</p>
          </ul>
        </div>
      </div>

      <!-- <div v-if="(!threads.answersList || threads.answersList.length < 1)&&threads.threadState==1&&threads.fidsNum>0 " >
        <div class="answer" v-for="(item,index2) in threads.fid_txt" :key="index2">
          <div class="answerBox">
              <div class="blzInfo">
                <span>{{item.organization}}正在办理中</span><i class="isanswer zzblz"></i>
                
              </div>
            </div>
        </div>
      </div> -->

    </div>

        

        <div >  
          <div  v-for="(item,index3) in threads.fid_txt" :key="index3">
            <!-- 根据机构对应的handlestate判断是否回复，0代表办理中，1代表已回复，-2代表回复审核中 -->
            <div v-if="item.handlestate==0||item.handlestate==-1||item.handlestate==-2">
              <div class="answerBox">
                <div class="blzInfo">
                  <span>办理中</span>
                </div>
              </div>
            </div>

            <div v-if="item.handlestate==1">
              <div class="answerBox">
                <div  v-for="(answersItem,index6) in threads.answersList" :key="index6">
                  <div v-if="item.forumUnid == answersItem.fid">
                          <div class="answerContent">
                            <div class="topdesc">
                              <div class="dftitle">
                                <div class="dfwz">
                                  <div class="da">答</div>
                                  <div v-if="answersItem.organization&&answersItem.organization!=null">{{answersItem.organization}}</div>
                                  <div v-else>{{item.organization}}</div>
                                </div>
                                <p class="dfsj">{{ answersItem.dateline_txt }}</p>

                              </div>
                            </div>
                            <div class="lyContent">
                              <div class="brnbsp" style="background:#f5f5f5;" v-html="(answersItem.asContent)">
                              </div>
                            </div>
                            
                            <!-- 回复附件 -->
                            <div v-if="answersItem.attachementsList&&answersItem.attachementsList.length>0">
                              <div class="fjdesc titledesc fjtitlebox">回复附件：</div>
                              <div class="fj">
                                <ul>
                                  <li v-for="(answerfjitem,index) in answersItem.attachementsList" v-if="answerfjitem.isimage==1" :key="answerfjitem.aid" >
                                    <img :src="mainIp+answerfjitem.thumb" alt=""  @click="BIG(mainIp+answerfjitem.thumb,answersItem.attachementsList)">
                                  </li>
                                  <p v-for="(answerfjitem,index) in answersItem.attachementsList" v-if="answerfjitem.isimage==0" :key="index+1" class="file" @click="file(mainIp+answerfjitem.thumb,answerfjitem.fileName)">{{ answerfjitem.fileName }}</p>
                                </ul>
                              </div>
                            </div>
                            <!-- 一次评价 -->
                            <div class="feedbackContent" v-if="answersItem.satisfaction>0&&answersItem.fdid&&answersItem.fdid!=''">
                              <div class="timepj">
                                <div v-if="answersItem.secSatisfaction">
                                  <span v-if="answersItem.satisfaction == 3" class="satisfaction">
                                    一次评价：满意
                                  </span>
                                  <span v-else-if="answersItem.satisfaction == 7" class="satisfied">
                                    一次评价： 比较满意
                                  </span> 
                                  <span v-else class="dissatis">
                                    一次评价：不满意
                                  </span>
                                </div>
                                <div v-else>
                                  <span v-if="answersItem.satisfaction == 3" class="satisfaction">
                                    评价： 满意
                                  </span>
                                  <span v-else-if="answersItem.satisfaction == 7" class="satisfied">
                                    评价： 比较满意
                                  </span>
                                  <span v-else class="dissatis">
                                    评价： 不满意
                                  </span>
                                </div>
                                <span>{{ answersItem.feedbackCreateTime }}</span>
                              </div>
                              <!-- 一次评价内容 -->
                              <!-- <div class="onepj" v-if="answersItem.feedbackContent">
                                {{ answersItem.feedbackContent }}
                              </div> -->
                            </div>

                          </div>
                                    

                          

                          <!-- 二次评价 -->
                          <div v-if="answersItem.satisfaction>0">
                            <div class="answerContent" v-if="answersItem.secondContent">
                              <div class="dftitle">
                                <div class="dfwz">
                                  <span class="da">答</span>
                                  <span v-if="answersItem.organization&&answersItem.organization!=null">
                                    {{answersItem.organization}}二次回复
                                  </span>
                                </div>
                                <span class="dfsj">{{answersItem.secanswerDatelineStr}}</span>

                              </div>
                              <div class="lyContent">
                                <div class="brnbsp" style="background:#f5f5f5;" v-html="(answersItem.secondContent)"></div>
                              </div>
                              <!-- <div>
                                <span class="itemTil">官方二次回复:</span>
                                <div  class="brnbsp" v-html="answersItem.secondContent">{{answersItem.secondContent}}</div>
                              </div> -->
                              <div v-if="answersItem.secondAttachementsList&&answersItem.secondAttachementsList.length>0">
                                <div class="fjdesc titledesc fjtitlebox">回复附件：</div>
                                <div class="fj">
                                  <ul>
                                    <li v-for="(answerfjitem,index) in answersItem.secondAttachementsList" v-if="answerfjitem.isimage==1" :key="index">
                                      <img :src="mainIp+answerfjitem.thumb" alt=""  @click="BIG(mainIp+answerfjitem.thumb,answersItem.secondAttachementsList)">
                                    </li>
                                    <p v-for="(answerfjitem,index) in answersItem.secondAttachementsList" v-if="answerfjitem.isimage==0" :key="index+1" class="file" @click="file(mainIp+answerfjitem.thumb,answerfjitem.fileName)">{{ answerfjitem.fileName }}</p>
                                  </ul>
                                </div>
                              </div>

                              <!-- 二次评价 -->
                              <div class="feedbackContent" v-if="answersItem.secondContent&&answersItem.handleState==4&&answersItem.fdid&&answersItem.fdid!=''&&answersItem.isAutoFeedBack!=1">
                                <div class="timepj">
                                  <span v-if="answersItem.secSatisfaction == 3" class="satisfaction">
                                    二次评价： 满意
                                  </span>
                                  <span v-else-if="answersItem.secSatisfaction == 7" class="satisfied">
                                    二次评价： 比较满意
                                  </span>
                                  <span v-else class="dissatis">
                                    二次评价： 不满意
                                  </span>
                                  <span>{{ answersItem.secFeedbackCreateTime }}</span>
                                </div>
                              <!-- 二次评价内容 -->
                                <!-- <div class="onepj" v-if="answersItem.secFeedbackContent">
                                  {{ answersItem.secFeedbackContent }}
                                </div> -->

                                <!-- <span class="itemTil">满意度：</span>
                                <span class="myd" v-if="answersItem.satisfaction==3">满意</span>
                                <span class="myd" v-if="answersItem.satisfaction==7">比较满意</span>
                                <span class="myd" v-if="answersItem.satisfaction==9">不满意</span><br> -->
                              </div>
                              
                            </div>

                          </div>
                        </div>
                </div>
               

              </div>
            </div>
          </div>          
        </div>



    

    <van-popup :show="bigShow" @close="onClose">
      <div class="bigImg">
        <img :src="currentImg" alt="" mode="widthFix" @click="onClose">
      </div>
    </van-popup>
    <van-toast id="van-toast" />

  </div>
</template>

<script>
import Toast from '../../../static/vant/dist/toast/toast';
import wxParse from 'mpvue-wxparse'
export default {
  data () {
    return {
      threads: {},
      orGz: false,
      mainIp: '',
      bigShow: false,
      currentImg: '',

      tid: '',
      userId: ""
    }
  },
  components: {
    wxParse
  },
  computed: {
    token(){
      return this.$store.state.token
    }
  },
  onShow(){
    this.bigShow=false
    
    this.userId = this.$store.state.userId
    console.log(this.userId);
    // console.log(option);
    // this.tid = option.tid
    this.tid = this.$store.getters.tid

    this.getData()
  },
  onLoad(){
  // onLoad(option){
    this.threads = {}
    this.mainIp = this.$interfaces.mainIp
    
  },
  methods: {
    getData(){
      let urls = ''
      if(this.userId){
        console.log('now is login');
        urls = this.$interfaces.contentDetails
      }else{
        console.log('now is not login');
        urls = this.$interfaces.contentDetail
      }
        this.$https.request({
        url:urls,
        data:{
          tid:this.tid
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:'post'
      })
      .then(res=>{
        console.log(res);
        if(res.code == 0){
          this.threads = res.threadsObj
          this.tid = res.threadsObj.tid
          console.log(this.threads);
        }
      })
      .catch(err=>{

      })
    },
    showBig(e){
      this.currentImg = e
      this.bigShow = true
    },
    onClose(){
      this.bigShow = false
    },
    file(url,name){
      wx.downloadFile({
            url: url, //仅为示例，并非真实的资源
            filePath: wx.env.USER_DATA_PATH + '/' + name,
            success(res) {
                console.log('========0', res)
                wx.openDocument({
                    filePath: res.filePath,
                    showMenu: true,
                    success: function (res) {
                        console.log('打开文档成功')
                    }
                })
            }
        })
    },
    BIG(e,arr){
      var urls = []
      arr.forEach(item => {
        urls.push(this.mainIp + item.attachment)
      })
       wx.previewImage({
        current: e,
        urls
      })
    },
    gz(focus){
      console.log(focus);
      console.log(this.userId);
      if(this.userId){
        this.$https.request({
        // url: 'http://192.168.7.61:84/messageboard/internetUserInterface/focusOnThreads',
          url: this.$interfaces.toFocus,
          data: {
            tid: this.tid,
            isfocusOn : focus,
            userId: this.userId

          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          methods: 'post'
        })
        .then(res=>{
          console.log(res);
          this.threads.isFocusOn = focus
          
          if(focus == 1){
            Toast.success("关注成功")
          }else{
            Toast.fail("关注取消")
          }
        })
        .catch(err=>{
          console.log(err);
        })
      }else{
        if(this.token){
          wx.navigateTo({url: '../register/main'})
        }else{
          console.log(this.token);
          var that = this
          wx.showModal({
            title: '请先登录后再来关注哦',
            content: '是否立即登录',
            success: function (res) {
              if (res.confirm) {  
                that.$store.dispatch('setWantGz', true)
                wx.switchTab({
                  url: '../mine/main'
                })
                console.log('点击确认回调')
              } else {   
                console.log('点击取消回调')
              }
            }
          })
        }
      }
      // this.orGz = !this.orGz 
      
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
}
.xbox{
  padding: 16px 16px 24px;
  font-size: 14px;
  border-bottom: 6px solid #F3F3F3;
}
.threads{
  display: flex;
  justify-content: space-between;
  color: #828282;
}
.head{
  width: 289px;
  /* margin-bottom: 4px; */
}
.title{
  display: block;
  overflow: hidden;
  font-size: 18px;
  color: #252525;
  font-weight: bold;
  margin-bottom: 8px;
}
.seaTime{
  margin-left: 16px;
}
.share{
  width: 30px;
  height: 80px;
  text-align: center;
  font-size: 10px;
  position: relative;
}
.fx{
  position: absolute;
  bottom: 0px;
  left: 0;
  z-index: -1;
}
.share img{
  width: 30px;
  height: 30px;
}
.zf{
  width: 30px;
  height: 30px;
  background: transparent;
  position: absolute;
  bottom: 0;
}
.zf::after{
  border: none;
}
.content{
  color: #B9B9B9;
  margin-top: 24px;
  font-size: 16px;
}
.fjdesc{
  margin-top: 10px;
  font-size: 14px;
  border-top: 1px dashed #e5e5e5;
  line-height: 32px;
}
.fj,.fjtitlebox{
  margin: 0 40px;
}
.fjBox li,.fj li{
  width: 40px;
  height: 40px;
  padding: 6px;
  border:1px solid #e5e5e5;
  border-radius: 4px;
  display: inline-block;
  margin: 6px 6px 0 0;
}
.fjBox li img,.fj li img{
  width: 100%;
  height: 100%;
  display: block;
}
.file{
  text-decoration: underline;
  font-size: 14px;
  margin: 4px auto 16px;
}
.bigImg img{
  display: block;
}
.blzInfo{
  font-size: 14px;
  display: inline-block;
  line-height: 28px;
  background: #F54645;
  color: white;
  padding: 0 8px;
  /* margin-left: 16px; */
  /* border-top-left-radius:15px; */
  border-bottom-right-radius: 15px;
  margin-top: 16px;
}
.da{
  display: inline-block;
  /* width: 28px; */
  height: 25px;;
  padding: 0 8px;
  line-height: 25px;
  text-align: center;
  background: #F54645;
  color: #fff;
  border-bottom-right-radius: 12px;
  margin-right: 12px;
  font-size: 12px;
  flex-shrink: 0;
}
.dfwz{
  font-size: 18px;
  color: #252525;
  font-weight: bold;
  display: flex;
}
.dfsj{
  margin-right: 40px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  color: #9F9F9F;
  flex-shrink: 0;
}
.dftitle{
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px
}

.answerContent{
  padding-top: 24px;
  /* border-top: 6px solid #F3F3F3; */
  border-bottom: 6px solid #F3F3F3;
  /* box-shadow: 0 0 6px rgba(0,0,0,.1); */
  /* border-radius: 12px; */
}
.lyContent{
  padding: 16px 0;
  margin: 0 40px;
  font-size: 16px;
  color: #3D3D3D;
  /* border-bottom: 1px solid #F2F2F2; */
  border-top: 1px solid #F2F2F2;

}
.searchMa{
  margin-left: 16px;
}
.satisfaction{
  color: #597BEB;
  font-size: 16px;
}
.satisfied{
  color: #FF9823;
  font-size: 16px;
}
.dissatis{
  color: #F54645;
  font-size: 16px;
}
.feedbackContent{
  /* height: 54p;
  line-height: 54px; */
  padding: 16px 0;
  margin: 0 40px;
  font-size: 12px;
  color: #9F9F9F;
  border-top: 1px solid #F2F2F2;
  
  /* box-shadow: 0 0 6px rgba(0,0,0,.1); */
  /* border-radius: 12px; */
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
}
.onepj{
  margin-top: 14px;
  font-size: 16px;
  color: #828282;
}
.timepj{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
