<template>
  <div class="main">
    <div class="xbox">
      <div class="threads">
        <div class="head">
          <div class="title">
          {{viewxq.subject}}
            <!-- <wxParse :content="viewxq.subject"></wxParse> -->
          </div>
          <p>{{ viewxq.nickName }}  </p>
          <p>
            <span>
              {{ viewxq.dateline_txt }}
            </span>
            <span  class="seaTime">
              查询码：{{viewxq.queryCode}}
            </span>
          </p>
          <!-- <p>{{ viewxq.dateline_txt }}</p> -->
        </div>

        <div class="share">
          <!-- <template v-if="viewxq.isFocusOn == 0">
            <img src="../../../static/images_pro/wgz.png" alt="" @click="gz(1)">
          </template>
          <template v-else>
            <img src="../../../static/images_pro/ygz.png" alt="" @click="gz(0)">
          </template>
          关注 -->
          <button open-type="share" class="zf" ></button>
          <img src='../../../static/images_pro/zf.png' class="fx">

        </div>

      </div>

      <div class="content">
        <!-- {{viewxq.content}} -->
        <wxParse v-if="viewxq.content" :content="viewxq.content"></wxParse>
      </div>

      <div class="fjBox" v-if="viewxq.attachementsList&&viewxq.attachementsList!=''">
        <div class="fjdesc">留言附件：</div>
        <div class="fjBox">
          <ul>
            <li v-for="(item,index) in viewxq.attachementsList" :key="index" v-if="item.isimage">
              <img :src="mainIp+item.attachment" alt="" @click="BIG(mainIp+item.attachment,viewxq.attachementsList)">
            </li>
            <p v-for="(item,index) in viewxq.attachementsList" v-if="!item.isimage" :key="item.aid+1" class="file" @click="file(mainIp+item.attachment,item.fileName)">{{ item.fileName }}</p>

          </ul>
        </div>
      </div>
      <!-- <div v-if="lytype==10">
        <div class="bjyy">
          系统回复：
          <wxParse :content="viewxq.deleteInfo"></wxParse>
          <div v-if="viewxq.forbidAttachementsList&&viewxq.forbidAttachementsList.length>0">
            <div class="fjdesc titledesc fjtitlebox">回复附件：</div>
            <div class="fj">
              <ul>
                <li v-for="(forbiditem,forbidindex) in viewxq.forbidAttachementsList" v-if="forbiditem.isimage==1" :key="forbidindex" >
                  <img :src="mainIp+forbiditem.attachment" alt="" @click="BIG(mainIp+forbiditem.attachment,viewxq.forbidAttachementsList)">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div v-else-if="(!viewxq.answersList || viewxq.answersList.length < 1)&&viewxq.threadState==1&&viewxq.fidsNum>0 ">
        <div class="answer">
            <div class="answer" v-for="(fid_txtitem,index2) in viewxq.fid_txt" :key="index2">
              <div class="answerBox">
                  <div class="blzInfo">
                    <span>{{fid_txtitem.organization}}正在办理中</span><i class="isanswer zzblz"></i>
                    
                  </div>
              </div>
            </div>
        </div>
     </div> -->

  </div>  




          <div>  
            <div  v-for="(item,index3) in viewxq.fid_txt" :key="index3">
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
                  <div  v-for="(answersItem,index6) in viewxq.answersList" :key="index6">
                    <div v-if="item.forumUnid == answersItem.fid">
                          <div class="answerContent">
                            <div class="topdesc">
                              <div class="dftitle">
                                <div class="dfwz">
                                  <div class="da">答</div>
                                  <div v-if="answersItem.organization&&answersItem.organization!=null">{{answersItem.organization}}</div>
                                  <div v-else>{{item.organization}}</div>
                                </div>
                                <span class="dfsj">{{answersItem.dateline_txt}}</span>

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
                                <li class="img" v-for="(answerfjitem,index) in answersItem.attachementsList" v-if="answerfjitem.isimage" :key="answerfjitem.aid">
                                  <img :src="mainIp+answerfjitem.thumb" @click="BIG(mainIp+answerfjitem.thumb,answersItem.attachementsList)" alt="">
                                </li>
                                <!-- <li v-for="(answerfjitem,index) in answersItem.attachementsList" v-if="!answerfjitem.isimage" :key="answerfjitem.aid+1"> -->
                                  <!-- <img :src="mainIp+answerfjitem.thumb" @click="BIG(mainIp+answerfjitem.thumb,answersItem.attachementsList)" alt=""> -->
                                  <p v-for="(answerfjitem,index) in answersItem.attachementsList" v-if="!answerfjitem.isimage" :key="answerfjitem.aid+1" class="file" @click="file(mainIp+answerfjitem.thumb,answerfjitem.fileName)">{{ answerfjitem.fileName }}</p>
                                <!-- </li> -->
                              </ul>
                            </div>
                          </div>
                          <div class="dycpj"  v-if="answersItem.satisfaction!=3&&answersItem.satisfaction!=7&&answersItem.satisfaction!=9">
                            <!-- <span class="commentBtn" @click="commentFn(answersItem)">评价</span> -->
                            <div class="satis">
                              <div class="comment">
                                <van-radio-group v-model="radio" @change="onChange" direction="horizontal" class="myditem">
                                    <van-radio  name="3" checked-color="#F54645">满意</van-radio>
                                    <van-radio  name="7" checked-color="#F54645">比较满意</van-radio>
                                    <van-radio  name="9" checked-color="#F54645">不满意</van-radio>
                                </van-radio-group>
                                <p>请评价：</p>
                                <textarea class="comments" v-model="message" name="" id="" cols="30" rows="10" :placeholder="placeholder"></textarea>
                                <!-- <div class="btn">
                                  <button class="sure" @click="sure">确认</button>
                                  <button class="cancel" @click="cancel">取消</button>
                                </div> -->

                              </div>
                              

                              <!-- <button @click="pj(answersItem,9)">不满意</button> -->
                            </div>

                            <button class="pj_btn" @click="pj(answersItem)">评价</button>

                          </div>
                          <!-- 一次评价 -->
                          <div class="feedbackContent" v-if="answersItem.satisfaction>0&&answersItem.fdid&&answersItem.fdid!=''">
                            <div class="timepj">
                              <div v-if="answersItem.secSatisfaction">
                                <span v-if="answersItem.satisfaction == 3" class="satisfaction">
                                  一次评价： 满意
                                </span>
                                <span v-else-if="answersItem.satisfaction == 7" class="satisfied">
                                  一次评价： 比较满意
                                </span> 
                                <span v-else class="dissatis">
                                  一次评价： 不满意
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

                            <div class="onepj" v-if="answersItem.feedbackContent">
                              {{ answersItem.feedbackContent }}
                            </div>
                            <!-- <span class="itemTil" v-if="answersItem.feedbackContent">一次评价：</span> -->
                            <!-- <span class="pjnr" v-if="answersItem.feedbackContent!=null">
                              {{answersItem.feedbackContent}}
                            </span> -->
                          </div>
                          </div>
                          
                      <!-- </div> -->


                            <!-- 二次评价 -->
                            <div v-if="answersItem.satisfaction>0">
                              <div class="answerContent" v-if="answersItem.secondContent">
                                <div class="dftitle">
                                  <div class="dfwz">
                                    <div class="da">答</div>
                                    <div v-if="answersItem.organization&&answersItem.organization!=null">
                                      {{answersItem.organization}}二次回复
                                    </div>
                                  </div>
                                  <div class="dfsj">{{answersItem.secanswerDatelineStr}}</div>

                                </div>
                                <div class="lyContent">
                                  <div class="brnbsp" style="background:#f5f5f5;" v-html="(answersItem.secondContent)"></div>
                                </div>

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
                                <div class="onepj" v-if="answersItem.secFeedbackContent">
                                  {{ answersItem.secFeedbackContent }}
                                </div>
                              </div>

                              <div class="dycpj" v-if="answersItem.secondState>0&&answersItem.secondContent&&answersItem.handleState==3">
                               
                                <!-- <span class="commentBtn" @click="commentFn(answersItem)">评价</span> -->
                                <!-- <div class="satis"> -->
                                  <!-- <button @click="pj(answersItem,3,second)">满意</button>
                                  <button @click="pj(answersItem,9,second)">不满意</button> -->
                                  <!-- <button @click="pj(answersItem,second)">评价</button> -->
                                <!-- </div> -->

                                <div class="satis">
                                  <div class="comment">
                                    <van-radio-group v-model="radio" @change="onChange" direction="horizontal" class="myditem">
                                        <van-radio  name="3" checked-color="#F54645">满意</van-radio>
                                        <van-radio  name="7" checked-color="#F54645">比较满意</van-radio>
                                        <van-radio  name="9" checked-color="#F54645">不满意</van-radio>
                                    </van-radio-group>
                                    <p>请评价：</p>
                                    <textarea class="comments" v-model="message" name="" id="" cols="30" rows="10" :placeholder="placeholder"></textarea>
                                    <!-- <div class="btn">
                                      <button class="sure" @click="sure">确认</button>
                                      <button class="cancel" @click="cancel">取消</button>
                                    </div> -->
                                  </div>
                                <!-- <button @click="pj(answersItem,9)">不满意</button> -->
                                </div>

                                <button class="pj_btn" @click="pj(answersItem, second)">评价</button>
                                

                              </div>
                              </div>

                            </div>
                            </div>
                          </div>
                  </div>
                 
                </div>
            </div>          
      <comment :tid='keytid'></comment>
         
    </div>
    <!-- <van-popup
      :show="show"
      position="bottom"
      overlay="true"
      round
      @close="onClose"
    >
      <div class="comment">
        <van-radio-group v-model="radio" @change="onChange" direction="horizontal" class="myditem">
            <van-radio  name="3" checked-color="#F54645">满意</van-radio>
            <van-radio  name="7" checked-color="#F54645">比较满意</van-radio>
            <van-radio  name="9" checked-color="#F54645">不满意</van-radio>
        </van-radio-group>
        <p>请评价：</p>
        <textarea class="comments" v-model="message" name="" id="" cols="30" rows="10" :placeholder="placeholder"></textarea>
        <div class="btn">
          <button class="sure" @click="sure">确认</button>
          <button class="cancel" @click="cancel">取消</button>
        </div>
      </div>
    </van-popup> -->
    
    
    <!-- <van-popup :show="bigshow" @close="onClose">
      <div class="bigImg">
        <img :src="currentImg" alt="" mode="widthFix" @click="onClose">
      </div>
      
    </van-popup> -->
    <!-- <van-popup :show="pjshow" @close="onClose">
        <div class="myd">
            <van-radio-group :value="radio" @change="onChange">
                <van-radio class="myditem" name="3">满意</van-radio>
                <van-radio class="myditem" name="7">比较满意</van-radio>
                <van-radio class="myditem" name="9">不满意</van-radio>
            </van-radio-group>
        </div>

        <div class="pjcontent">
                <textarea
                bindblur="bindTextAreaBlur"
                placeholder-class="pjyy"
                height=100
                v-model="message"
                maxlength=500
                placeholder="请输入评论内容" />
        </div>
        <div class="ecbl" v-if="viewxq.isShowSecondHand==1">
            <van-checkbox class="myditem" :value="checked" @change="allowecbl">同意二次办理</van-checkbox>
        </div>

        <div class="btnBox">
            <span @click="onClosePj">取消</span>
            <span class="sureBtn" @click="surePj">确认</span>
        </div>
    </van-popup> -->
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import Toast from '../../../static/vant/dist/toast/toast';
import {formatTime} from '../../../static/js/date.js'
import comment from '@/components/comment/index'

export default {
 
  data () {
    return {
      pjshow:false,
      mainIp:'',
      viewxq:{},
      bigshow:false,
      currentImg:'',
      checked: false,
      message:'',
      radio:'',
      secondaryState:0,
      fdid:'',
      pjitem:'',
      keytid:'',
      newtime:'',
      show: false,
      satis: 3,
      obj: '',
      newtime: '',
      second: false,
      placeholder: '输入评价内容',

      userId: ''
    }
  },
  computed:{
    lytype:{
      get(){
        return this.$store.state.lytype
      },
      set(){}
    }
  },
  components: {
    wxParse, comment
  },
  onLoad(option){
    // 初始化
    this.radio = '3'
    this.placeholder = "输入评价内容"
    this.userId = this.$store.state.userId
    this.keytid=option.tid
    console.log('keytid:' + this.keytid);
    // this.show=false
    this.viewxq=this.$store.getters.wdlyitem
    this.mainIp=this.$interfaces.mainIp
    if(this.lytype==10){
      this.getitemybj(this.keytid)
    }
    this.newtime=formatTime(new Date(this.viewxq.lastupdate*1000))
  },
  onShow(){
    this.show=false
    this.bigshow=false
    // this.radio = 3
    // this.satis = 3
  },

  methods: {
    gz(focus){
      console.log(focus);
      console.log(this.userId);
      this.$https.request({
      // url: 'http://192.168.7.61:84/messageboard/internetUserInterface/focusOnThreads',
        url: this.$interfaces.toFocus,
        data: {
          tid: this.keytid,
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
      
      // this.orGz = !this.orGz 
      
    },
    sure(){
      if(this.radio == 9 && this.message.length < 10){
        Toast.fail("不满意原因不能少于10个字")
      }else{
        // console.log("success");
        this.sure1()
      }

    },
    sure1(){
      var e = this.obj
      console.log(e.asid);
      var data = {}
      if(this.second){
        data={
          tid:e.tid,
          asid:e.asid,
          fdid:e.fdid,
          satisfaction:this.radio,
          fdContent:this.message,
          secondaryState:this.secondaryState
        }
      }else{
        data = {
          tid:e.tid,
          asid:e.asid,
          fdid:'',
          satisfaction:Number(this.radio),
          fdContent:this.message,
          secondaryState:this.secondaryState
        }
      }
      this.show = false
      this.$https.request({
        url:this.$interfaces.comment,
        data,
        header:{
        'content-type': 'application/x-www-form-urlencoded'
        },
        method:'post'
    })
    .then(res=>{
        if(res.code==0){
            this.getitemdata(e.queryCode)
            this.pjshow=false
            this.message=''
        }
    })
    .catch(err=>{
      console.log(err)
    })

    },
    cancel(){
      this.show = false
    },
    pj(e,sec){
      if(sec){
        this.second = true
      }else{
        this.second = false
      }
      console.log(e.asid);
      this.obj = e
      // this.satis = num
      // this.show = true
      console.log(this.satis);
      this.sure()
    },
    allowecbl(e){
      // 是否同意二次办理
      this.checked=e.mp.detail
    },
    onChange(event) {
      // 满意度选择
      this.radio=event.mp.detail
      // this.satis = event.mp.detail
      console.log(this.satis);

      if(event.mp.detail != 9){
        this.placeholder = "输入评价内容"
      }else{
        this.placeholder = "请说明不满意原因，最低不少于10个字..."
      }
    },
    secondPj(myd,e){
      // 二次评价
      // if(this.checked){
      //     this.secondaryState=1
      // }else{
      //     this.secondaryState=0
      // }
      // 提交评价
      this.$https.request({
          url:this.$interfaces.comment,
          data:{
              tid:e.tid,
              asid:e.asid,
              fdid:e.fdid,
              satisfaction:myd,
              fdContent:'',
              secondaryState:this.secondaryState
          },
          header:{
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization:this.$store.state.token
          },
          method:'post'
      })
      .then(res=>{
          if(res.code==0){
              this.getitemdata(e.queryCode)
              this.pjshow=false
              this.radio='3'
              this.message=''
              this.secondaryState=0
          }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    submitPj(e){
      // 提交评价
      this.$https.request({
          url:this.$interfaces.comment,
          data:{
              tid:e.tid,
              asid:e.asid,
              fdid:'',
              satisfaction:Number(this.radio),
              fdContent:this.message,
              secondaryState:this.secondaryState
          },
          header:{
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization:this.$store.state.token
          },
          method:'post'
      })
      .then(res=>{
          if(res.code==0){
            this.getitemdata(e.queryCode)
            this.pjshow=false
            this.radio='3'
            this.message=''
            this.secondaryState=0
          }
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getUserInfo(event) {
      // 获取用户信息
    },
    surePj(){
      // 确认评价
      if(this.radio=='9'){
        // 当选择不满意时必须填写内容
          this.submitPj(this.pjitem)
      }else{
        this.submitPj(this.pjitem)
      }
    },
    onClosePj() {
      // 评价遮罩关闭
      this.pjshow=false
    },
    commentFn(e){
      // 评论
      this.pjitem=e
      this.pjshow=false
      this.pjshow=true
    },
    showbig(e){
      // 显示大图
      this.currentImg=e
      this.bigshow=true
    },
    file(url,name){
      console.log(url,name);
          
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
      // wx.downloadFile({//下载对应文件
      //   url,
      //   // filePath: wx.env.USER_DATA_PATH + '/' + name,
      //   success: function (res) {    
      //     var filePath = res.tempFilePath;//文件路径    
      //     wx.openDocument({
      //       filePath: filePath,   // 装载对应文件的路径
      //       // fileType: 'docx',   // 指定打开的文件类型
      //       // showMenu: true,       // 右上角的菜单转发分享操作
      //       success: function (res) {
      //         console.log("打开成功");
      //       },
      //       fail: function (res) {
      //         console.log(res);
      //       }
      //     })   
      //   },
      //   fail: function (res) {
      //     console.log(res);
      //   }
      // })       
    },
    BIG(e,arr){
      var urls = []
      arr.forEach(item => {
        if(item.isimage){
          urls.push(this.mainIp + item.attachment)
        }
      })
       wx.previewImage({
        current: e,
        urls
      })
    },
    onClose(){
      // 关闭图片遮罩
      console.log(123);
      this.show = false
      // this.bigshow=false
    },
    getitemdata(keytid){
      // 获取详情
      this.$https.request({
        url:this.$interfaces.contentDetails,
        data:{
          tid:this.keytid
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization:this.$store.state.token
        },
        method:'post'
      })
      .then(res=>{
        if(res.code==0){
          this.viewxq=res.threadsObj
          console.log(this.viewxq)
          this.$store.dispatch('setWdlyItem',res.threadsObj)
        }
      })
      .catch(err=>{

      })
    },
    getitemybj(keytid){
      // 获取详情
      this.$https.request({
        url:this.$interfaces.selectTrashThreadsOneByUser,
        data:{
          tid:this.keytid
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization:this.$store.state.token
        },
        method:'post'
      })
      .then(res=>{
        if(res.code==0){
          this.viewxq=res.threadsObj
          
          this.$store.dispatch('setWdlyItem',res.threadsObj)
        }
      })
      .catch(err=>{

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
  }
  .xbox{
  padding: 16px 16px 24px;
  font-size: 14px;
  border-bottom: 6px solid #F3F3F3;
}
/* button{
  height: 32px;
  line-height: 32px;
  font-size: 14px;
} */
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
  text-align: center;
  font-size: 10px;
  position: relative;
}
.fx{
  position: absolute;
  top: 0;
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
  height: 25px;
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
  border-bottom: 6px solid #F3F3F3;
}
.lyContent{
  padding: 16px 0 24px;
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
/* .feedbackContent{
  height: 54p;
  line-height: 54px;
  padding-left: 24px;
  font-size: 16px;
  box-shadow: 0 0 6px rgba(0,0,0,.1);
  border-radius: 27px;
  margin-top: 16px;
} */
.comment{
  padding: 16px 24px;
  border: 1px solid #F3F3F3;
  background-color: #FBFBFB;
}
.comment p{
  font-size: 16px;
  color: #252525;
  font-weight: bold;
  margin: 16px 0;
}
.comments{
  width: 295px;
  height: 144px;
  background: #F2F2F2;
  margin: 16px 0 0;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 12px;
  box-sizing: border-box;
}
.btn,.satis{
  /* width : 50%; */
  display: flex;
  justify-content: space-between;
}
.satis{
  /* margin: 16px 0 0; */
  padding-left: 16px;
}
button::after{
  border: none;
}
.btn button:nth-child(1){
  width: 155px;
  line-height: 36px;
  font-size: 14px;
  background: #F54645;
  border-radius: 19px;
  color: #fff;
}
.btn button:nth-child(2){
  width: 155px;
  line-height: 36px;
  font-size: 14px;
  background: #fff;
  border-radius: 19px;
  color: #9F9F9F;
  border: 1px solid #9F9F9F;
}
.pj_btn{
  width: 295px;
  line-height: 38px;
  background: #F54645;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  margin: 16px auto;
}
.satis button:nth-child(2){
  width: 163px;
  line-height: 32px;
  background: #fff;
  border-radius: 17px;
  color: #9F9F9F;
  border: 1px solid #9F9F9F;
  font-size: 14px;
}
.feedbackContent{
  /* height: 54p;
  line-height: 54px; */
  padding: 16px 0;
  margin: 0 40px;
  border-top: 1px solid #F2F2F2;
  font-size: 12px;
  color: #9F9F9F;
  /* border-radius: 12px; */
  
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
.myditem{
  display: flex;
  justify-content: space-between;
}
</style>
