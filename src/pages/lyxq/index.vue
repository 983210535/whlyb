<template>
  <div class="main">
    <div class="topImg"><img src="../../../static/images/mine_top.png" alt=""></div>
    <div class="xqbox">
      <div class="top">
        <div class="title">
          <wxParse :content="lyxqData.subject" />
        </div>
      </div>
      
      <div class="desc">
        <span v-if="lyxqData.anonymousState==1">
          <van-icon class="iconimg" name="user-circle-o"/>
          
        </span>
        <span v-else>
          <van-icon class="iconimg" name="user-circle-o"/>
          {{lyxqData.nickName}}
        </span>

        <span>
          <van-icon class="iconimg" name="clock-o"/>
          {{lyxqData.dateline_txt}}
        </span>

        <p style="overflow:hidden;">
          <van-icon class="iconimg" name="question-o"/>
          <span style="float:left;">
            {{lyxqData.domainId_txt+'　'+lyxqData.typeId_txt}}
          </span>
          <span style="float:left;">
            查询码：{{lyxqData.queryCode}}
          </span>
        </p>
      </div>

      <div class="mainbox">
        <div class="nr">
          <wxParse :content="lyxqData.content" />
        </div>

        <div class="fjBox" v-if="lyxqData.attachementsList&&lyxqData.attachementsList!=''">
          <div class="fjdesc">留言附件：</div>
          <div class="fjBox">
            <ul>
              <li v-for="(item,index) in lyxqData.attachementsList" :key="index" @click="showbig(mainIp+item.attachment)">
                <img :src="mainIp+item.attachment" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <!-- <div class="answer" v-for="(item,index1) in lyxqData.answersList" :key="index1"> -->

        <div v-if="(!viewxq.answersList || viewxq.answersList.length < 1)&&viewxq.threadState==1&&viewxq.fidsNum>0 " >
          <!-- v-if="viewxq.threadState==1&&viewxq.fidsNum>0" -->
          <div class="answer" v-for="(item,index2) in viewxq.fid_txt" :key="index2">
            <div class="answerBox">
                <div class="blzInfo">
                  <span>{{item.organization}}正在办理中...</span><i class="isanswer zzblz"></i>
                  
                </div>
              </div>
          </div>
        </div>

        <div v-else>  
          <div  v-for="(item,index3) in viewxq.fid_txt" :key="index3">
            <!-- 根据机构对应的handlestate判断是否回复，0代表办理中，1代表已回复，-2代表回复审核中 -->
            <div v-if="item.handlestate==0||item.handlestate==-1">
              <div class="answerBox">
                <div class="blzInfo">
                  <span>{{item.organization}}正在办理中</span><i class="isanswer zzblz" style="display:inline-block;color:#ff9b00;"></i>...
                </div>
              </div>
            </div>

            <div v-if="item.handlestate==1">
              <div class="answerBox">
                <div  v-for="(answersItem,index6) in viewxq.answersList" :key="index6">
                  <div v-if="item.forumUnid == answersItem.fid">
                          <div class="answerContent">
                            <div class="topdesc">
                              <span class="itemTil">官方回复
                                <!-- <i class="isanswer" style="display:inline-block;color:#ff9b00;" v-if="answersItem.handleState==3">【待评价】</i> -->
                                <!-- <i class="isanswer" style="display:inline-block;color:#ff9b00;" v-if="answersItem.handleState==4">【已评价】</i> -->
                              </span>
                              <div>
                                <span class="itemTil">回复单位：</span>
                                <span v-if="answersItem.organization&&answersItem.organization!=null">{{answersItem.organization}}</span>
                                <span v-else>{{item.organization}}</span> 
                                　　
                              </div>
                              <div class="hfsj">
                                <span class="itemTil">回复时间：</span>
                                {{answersItem.dateline_txt}}
                              </div>
                            </div>
                            <div>
                              <span class="itemTil">回复内容：</span>
                              <div class="brnbsp" style="background:#f5f5f5;" v-html="(answersItem.asContent)">
                              </div>
                            </div>
                            
                            
                          </div>
                          <!-- 回复附件 -->
                          <div v-if="answersItem.attachementsList&&answersItem.attachementsList.length>0">
                            <div class="titledesc fjtitlebox">回复附件：</div>
                            <div class="fj">
                              <ul>
                                <li v-for="(answerfjitem,index) in answersItem.attachementsList" v-if="answerfjitem.isimage==1" :key="answerfjitem.aid"   @click='showbig(mainIp+answerfjitem.attachment)'>
                                  <img :src="mainIp+answerfjitem.thumb" alt="">
                                </li>

                                <!-- <li v-for="(bjfjitem,index) in answersItem.attachementsList" :key="index" style="width:100%;display:block;margin-bottom:0;">
                                  <span v-if="bjfjitem.fileType!='JPG'&&bjfjitem.fileType!='PNG'">
                                    <a style="color:#333;line-height:36px;text-decoration:underline;" target="_blank" :href="mainIp+bjfjitem.attachment">{{bjfjitem.fileName}}</a>
                                  </span>
                                </li> -->

                                <!-- <div class="fj">
                                  <ul>
                                    <li v-for="(answerfjitem,index) in item.attachementsList" :key="answerfjitem.aid"   @click='openzz(index,answersItem.attachementsList,"hffj")' v-if="answerfjitem.fileType=='JPG'||answerfjitem.fileType=='PNG'">
                                      <img v-if="answerfjitem.fileType=='JPG'||answerfjitem.fileType=='PNG'" :src="mainIp+answerfjitem.thumb" alt="">
                                    </li>
                                  </ul>
                                </div> -->

                              </ul>
                            </div>
                          </div>
                          <!-- <div class="dycpj" v-if="answersItem.handleState==3">
                            <span class="commentBtn" @click="commentFn(answersItem)">评价</span>
                          </div> -->
                          <!-- 一次评价 -->
                          <div class="feedbackContent" v-if="answersItem.satisfaction>0&&answersItem.fdid&&answersItem.fdid!=''">
                            <div v-if="(answersItem.secondState==0&&!answersItem.secondContent)||(!answersItem.secondState&&!answersItem.secondContent)||answersItem.secondState==1||answersItem.secondState==2">
                              <span class="itemTil">满意度：</span>
                              <span class="myd" v-if="answersItem.satisfaction==3">满意</span>
                              <span class="myd" v-if="answersItem.satisfaction==7">比较满意</span>
                              <span class="myd" v-if="answersItem.satisfaction==9">不满意</span><br>
                            </div>
                            <!-- <span class="itemTil" v-if="answersItem.feedbackContent">一次评价：</span>
                            <span class="pjnr" v-if="answersItem.feedbackContent!=null">
                              {{answersItem.feedbackContent}}
                            </span> -->
                          </div>

                          <!-- <div class="feedbackContent" v-if="item.satisfaction>0">
                            <div class='mydbox' v-if="(item.secondState == 0&&!item.secondContent)||item.secondState==1||item.secondState==2">
                              <span class="itemTil">满意度：</span>
                              <span class="myd" v-if="item.satisfaction==3">满意</span>
                              <span class="myd" v-if="item.satisfaction==7">比较满意</span>
                              <span class="myd" v-if="item.satisfaction==9">不满意</span><br>
                            </div>
                          </div> -->

                          <!-- 二次评价 -->
                          <div v-if="answersItem.satisfaction>0">
                            <div class="answerContent" v-if="answersItem.secondContent">
                              
                              <div>
                                  <span class="itemTil">二次回复时间：</span>
                                  <!-- <span v-html="formatDate(answersItem.lastupdate*1000)"></span> -->
                                  <!-- {{answersItem.lastupdate*1000 | formatDate}} <br> -->
                                  <span>{{newtime}}</span>
                              </div>
                              <div>
                                <span class="itemTil">官方二次回复:</span>
                                <div  class="brnbsp" v-html="answersItem.secondContent">{{answersItem.secondContent}}</div>
                              </div>
                              
                            </div>

                            <div v-if="answersItem.secondAttachementsList&&answersItem.secondAttachementsList.length>0">
                              <div class="titledesc fjtitlebox">回复附件：</div>
                              <div class="fj">
                                <ul>
                                  <li v-for="(answerfjitem,index) in answersItem.secondAttachementsList" v-if="answerfjitem.isimage==1" :key="index" @click='showbig(mainIp+answerfjitem.attachment)'>
                                    <img :src="mainIp+answerfjitem.thumb" alt="">
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <!-- 二次评价 -->
                            <div class="feedbackContent" v-if="answersItem.secondContent&&answersItem.handleState==4&&answersItem.fdid&&answersItem.fdid!=''">
                              <span class="itemTil">满意度：</span>
                              <span class="myd" v-if="answersItem.satisfaction==3">满意</span>
                              <span class="myd" v-if="answersItem.satisfaction==7">比较满意</span>
                              <span class="myd" v-if="answersItem.satisfaction==9">不满意</span><br>
                            </div>

                            <!-- <div class="plbox" v-if="answersItem.secondState>0&&answersItem.secondContent&&answersItem.handleState==3">
                              <div class="comment">
                                
                                <ul>
                                  <li @click="secondPj(3,answersItem)">满意</li>
                                  <li @click="secondPj(7,answersItem)">比较满意</li>
                                  <li @click="secondPj(9,answersItem)">不满意</li>
                                </ul>
                              </div>

                            </div> -->
                          </div>
                        </div>
                </div>
                <!-- <div class="">
                  <span class="itemTil">回复单位：</span>
                  {{item.organization}}
                </div>
                <span><span class="itemTil">回复时间：</span>{{item.dateline_txt}}</span>
                
                <div class="answerContent">
                  <span class="itemTil">回复内容：</span>
                  <span v-html="item.asContent">
                    {{item.asContent}}
                  </span>
                  
                </div> -->
                <!-- 回复附件 -->
                <!-- <div v-if="item.attachementsList&&item.attachementsList.length>0">
                  <div class="fjdesc">回复附件：</div>
                  <div class="fj">
                    <ul>
                      <li v-for="(answerfjitem,index) in item.attachementsList" :key="answerfjitem.aid"   @click='openzz(index,answersItem.attachementsList,"hffj")' v-if="answerfjitem.fileType=='JPG'||answerfjitem.fileType=='PNG'">
                        <img v-if="answerfjitem.fileType=='JPG'||answerfjitem.fileType=='PNG'" :src="mainIp+answerfjitem.thumb" alt="">
                      </li>
                    </ul>
                  </div>
                </div> -->
                <!-- 一次评价 -->
                <!-- <div class="feedbackContent" v-if="item.satisfaction>0">
                  <div class='mydbox' v-if="(item.secondState == 0&&!item.secondContent)||item.secondState==1||item.secondState==2">
                    <span class="itemTil">满意度：</span>
                    <span class="myd" v-if="item.satisfaction==3">满意</span>
                    <span class="myd" v-if="item.satisfaction==7">比较满意</span>
                    <span class="myd" v-if="item.satisfaction==9">不满意</span><br>
                  </div>
                </div> -->
                <!-- 二次评价 -->
                <!-- <div v-if="item.satisfaction>0">
                  <div class="answerContent" v-if="item.secondContent">
                    <div>
                      <span class="itemTil">二次回复：</span>
                      {{item.secondContent}}
                    </div>
                  </div>

                  <div v-if="item.secondAttachementsList&&item.secondAttachementsList.length>0">
                    <div class="fjdesc">回复附件：</div>
                    <div class="fj">
                      <ul>
                        <li v-for="(answerfjitem,index) in item.secondAttachementsList" :key="index" @click='showbig(mainIp+answerfjitem.attachment)'>
                          <img :src="mainIp+answerfjitem.thumb" alt="">
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="feedbackContent mydbox" v-if="item.secondContent&&item.handleState==4">
                    <span class="itemTil">满意度：</span>
                    <span class="myd" v-if="item.satisfaction==3">满意</span>
                    <span class="myd" v-if="item.satisfaction==7">比较满意</span>
                    <span class="myd" v-if="item.satisfaction==9">不满意</span><br>
                  </div>
                </div> -->

              </div>
            </div>
          </div>          
        </div>

      <!-- </div> -->
      


              
    </div>
    <van-popup :show="bigshow" @close="onClose">
      <div class="bigImg">
        <img :src="currentImg" alt="">
      </div>
      
    </van-popup>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import {formatDate , formatTime} from '../../../static/js/date.js'
export default {
  data () {
    return {
      mainIp:'',
      lyxqData:{},
      viewxq:{},
      bigshow:false,
      currentImg:'',
      newtime:''
    }
  },

  components: {
    wxParse
  },

  methods: {
    showbig(e){
      // 查看大图
      this.currentImg=e
      this.bigshow=true
    },
    onClose(){
      // 关闭遮罩
      this.bigshow=false
    }
  },
  onShow(){
    this.bigshow=false
  },
  onLoad(option){
    // 获取图片文件地址、留言详情
    this.lyxqData=this.$store.getters.singleItem
    this.viewxq=this.$store.getters.singleItem
    this.newtime=formatTime(new Date(this.lyxqData.lastupdate*1000))
    this.mainIp=this.$interfaces.mainIp
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
  }
  .xqbox{
    padding: 15px;
    position: relative;
    background: rgba(255, 255, 255, 1);
    background: url('../../../static/images/xwater.png');
    background-color: #fff;

  }
  .top{
    display: block;
    overflow: hidden;
  }
  .title{
    font-size: 16px;
    display: block;
    overflow: hidden;
  }
  .desc{
    color: #c9c9c9;
    line-height: 18px;
    padding: 8px 0 6px;
    font-size: 14px;
    overflow: hidden;
  }
  .desc span{
    margin-right: 20px;
    display: inline-block;
    overflow: hidden;
  }
  .iconimg{
    float: left;
    margin: 2px 6px 0 0;
  }
  .nr{
    /* font-size: 14px; */
    line-height: 24px;
    padding: 10px 0;
  }
  .blzt{
    font-size: 14px;
    color: rgb(255, 163, 87);
    display: inline;
  }
  .topImg{
    width: 100%;
    position: absolute;
    z-index: 0;
    top: -100px;
  }
  .topImg img{
    width: 100%;
  }
  .fjdesc{
    margin-top: 10px;
    font-size: 14px;
    border-top: 1px dashed #e5e5e5;
    line-height: 32px;
  }
  .fjBox li{
    width: 40px;
    height: 40px;
    padding: 6px;
    border:1px solid #e5e5e5;
    border-radius: 4px;
    display: inline-block;
    margin: 6px 6px 0 0;
  }
  .fjBox li img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .bigImg img{
    display: block;
  }
  .answer{
    font-size: 14px;
  }
  .answerBox{
    border-radius:4px;
    border:1px dashed #d5d5d5;
    padding:10px;
    margin:10px 0;
  }
  .mydbox{
    color: #fff;
    background:  rgb(255, 163, 87);
    display:initial;
  }
  .fj li{
    width:80rpx;
    height:80rpx;
    padding:12rpx;
    border:2rpx solid #e5e5e5;
    border-radius:8rpx;
    display:inline-block;
    margin-right:12rpx;
  }
  .fj li img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .hffjtil{
    line-height: 32px;
  }
  .mainbox{
    border: 1px dashed #d5d5d5;
    border-radius: 6px;
    padding: 0 10px 10px;
  }
  .answerContent{
    line-height: 32px;
  }
  .brnbsp{
    display: block;
    background: #f5f5f5;
  }
  
</style>
