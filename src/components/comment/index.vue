<template>
  <div class="valueate">
    <div class="pjtop">
      <div class="inpbox">
        <textarea class="comments" maxlength="140" v-model="content" name="" id="" cols="30" rows="10" placeholder="请输入评论内容140字以内"></textarea>
        <div class="topBottom">
            <div>
              <span class="pltotal">评论 · {{total}} 条</span> 
              <span class="smile" @click="emojiShow">
                <van-icon name="smile-o" />
              </span>
            </div>
            <button class="submit" v-if="isLogin" @click="submit(content)">提交</button>
            <button class="submit" v-else @click="outsubmit">提交2</button>
        </div>

        <Emoji v-if="showEmoji" @emoji="addEmoji"></Emoji>
      </div>
      <!-- <div class="smileBox" v-if="smileShow">
          <emotion @emotion="handleEmotion" :height="200" ></emotion>
      </div> -->
      <div class="floor" v-if="pldata.length > 0">
        <div class="listbox" v-for="(item, index) in pldata" :key="index">
          <div v-if="!item.userHead || item.userHead==null">
            <img :src="domain.defaltUsericon" alt="">
          </div>
          <div class="usericon" v-else>
            <img :src="domain.userIcon+item.userHead" alt="">
          </div>

          <div class="rBox">
            <div class="desctop">
                <span class="userself" v-if="lyxq.userId==item.userId">作者</span>
                <span v-else>{{item.nickName}}</span>
                <span v-if="item.datelineStr">{{item.datelineStr}}</span>
            </div>
            <div class="content">
                <!-- {{item.content}} -->
                <div class="content" v-html="item.content"></div>
                <!-- <span :id="item.cid"   @click="secondPl(item.cid,$event,'firstShow')">评论</span>  -->
                <span class="pl" @click="secondPl(item.cid,$event,'firstShow')">
                  <span class="smile">
                    <van-icon name="more-o" />
                  </span>
                  评论
                </span>
                <div  v-show="item.cid==currentpjtid">
                    <div class="inpbox" v-show="firstShow">
                      <textarea class="comments" maxlength="140" v-model="secondtextarea" name="" id="" cols="30" rows="10" placeholder="请输入评论内容140字以内"></textarea>
                        <div class="topBottom">
                            <span class="mark pcbox">网友评论仅供其表达个人看法</span>
                            <span class="mark phonebox">评论仅代表个人看法</span>
                            <!-- <span  class="fa fa-commenting">评论 · 6</span>  -->
                            <span class="smile" @click="sencondSmileShowFn"><i class="fa fa-smile-o"></i></span>
                            <span class="submint" v-if="isLogin=='true'" @click="submit(item.tid,userinfo.userId,userinfo.nickName,secondtextarea,item.userId,item.nickName,item.cid,userinfo.userHeadImagePath,item.cid)">提交</span>
                            <span class="submint" v-else @click="outsubmit">提交</span>
                        </div>
                    </div>

                    <!-- <div class="smileBox" v-if="sencondSmileShow" style="width:40%;">
                        <emotion @emotion="handleEmotion2" :height="200" ></emotion>
                    </div> -->
                </div>
                <div class="secondFloor" v-if="item.secondFloor&&item.secondFloor.length>0">
                    <div class="secondlist" v-for="(seconditem,indexq1) in item.secondFloor" :key="indexq1">
                        <span>
                            <span class="userself" v-if="lyxq.userId==seconditem.userId">作者</span>
                            <span class="pluser" v-else>{{seconditem.nickName}}</span>
                        </span>
                        
                        <span class="toanswer">回复</span>

                        <span>
                            <span class="userself" v-if="lyxq.userId==seconditem.toUserId">作者</span>
                            <span class="pluser" v-else>{{seconditem.toNickName}}</span>
                        </span>
                        
                        ：
                        <!-- {{seconditem.content}} -->
                        <span v-html="seconditem.content"></span>
                        <span :id="seconditem.cid"  @click="secondPl(seconditem.cid,$event,'secondShow')">评论</span> 

                        <div v-show="seconditem.cid==currentpjtid">
                            <div class="inpbox" v-show="secondShow">
                                <el-input
                                class="pj"
                                type="textarea"
                                :rows="3"
                                placeholder="请输入评论内容140字以内"
                                maxlength="140"
                                show-word-limit
                                v-model="secondtextarea">
                                </el-input>
                                <div class="topBottom">
                                    <span class="mark pcbox">网友评论仅供其表达个人看法</span>
                                    <span class="mark phonebox">评论仅代表个人看法</span>
                                    <span class="smile" @click="threeSmileShowFn"><van-icon name="smile-o" /></span>
                                    <!-- <span  class="fa fa-commenting">评论 · 6</span>  -->
                                    <span class="submint" v-if="isLogin" @click="submit(seconditem.tid,userinfo.userId,userinfo.nickName,secondtextarea,seconditem.userId,seconditem.nickName,seconditem.cid,userinfo.userHeadImagePath,item.cid)">提交</span>
                                    <span class="submint" v-else @click="outsubmit">提交</span>
                                </div>
                            </div>
                            <!-- <div class="smileBox" v-if="threeSmileShow">
                                <emotion @emotion="handleEmotion3" :height="200" ></emotion>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
      
    </div>  
    <van-notify id="custom-selector" />
  </div>
</template>

<script>
import Notify from '../../../static/vant/dist/notify/notify';
import Emoji from '../emoji/index';
export default {
  // props: ['tid'],
  data(){
    return {
      pldata: '',
      total: '',
      pageSize: 10,
      pageNum: 1,
      secondFloor: '',
      total: '',
      domain: '',
      secondShow: false,
      firstShow: false,
      secondtextarea: '',
      content: '',
      showEmoji: false,
      list:['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
    }
  },
  components: {
    Emoji
  },
  onShow(){
    this.content = ''
    this.showEmoji = false
  },
  onLoad(option){
    console.log('comment tid:' + option.tid);
    this.domain = this.$interfaces
    // console.log(this.tid);
    this.tid = option.tid
    this.getplmessage()
  },
  computed: {
    isLogin(){
      return this.$store.state.token
    },
    lyxq(){
      return this.$store.state.wdlyitem
    },
    userId(){
      return this.$store.state.userId
    },
    userinfo(){
      return this.$store.state.user
    }

  },
  methods: {
    emoji(str){
      console.log(`aaaaaaaaaaaa: ${str}`);
      var word = str.replace(/\#|\;/gi,'')
      var index = that.list.indexOf(word)
      return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`   
    },
    addEmoji(newval){
      console.log(`from son: ${newval}`);
      if(this.content.length < 140){
        this.content += newval
      }
    },
    emojiShow(){
      this.showEmoji = !this.showEmoji
      console.log(this.showEmoji);
    },
    //发送评论
    submit(content){
      this.$https.request({
        method: 'post',
        url: this.$interfaces.valuate,
        data: {
          tid: this.lyxq.tid,
          overt: 0,
          userId: this.userId,
          nickName :this.userinfo.nickName,
          content,
          toUserId: this.userId,
          toNickName: this.userinfo.nickName,
          overt:0,
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
      }).then(res => {
        console.log(res);
        Notify({
          text: "评论成功",
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        })
        this.content = ''
        this.showEmoji = false
        this.getplmessage()
      })
    },
    //获取评论的列表
    getplmessage(){
      this.$https.request({
        method: 'post',
        url: this.$interfaces.getvalueate,
        data: {
          tid: this.tid,
          overt: 1,
          pageSize: this.pageSize,
          pageNum:this.pageNum
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
      }).then(res => {
        console.log(res.data);
        var that = this
        res.data.forEach(ele => {
          let test= ele.content.replace(/\#(([\u4E00-\u9FA5]{1,3})|.{2})\;/gi, function(str){
            // console.log(str);
            var word = str.replace(/\#|\;/gi,'')
            var index = that.list.indexOf(word)
            console.log(index);
            return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" style="vertical-align:middle">`      
          })
          ele.content = test
        })
        this.pldata = res.data
        this.secondFloor=res.data.secondFloor
        this.total=res.total
      })
    }
  }
}
</script>

<style>
  .pjtop{
    padding: 8px 16px;
  }
  .inpbox{
    padding: 0 24px;
    border: 1px solid #F3F3F3;
    background-color: #FBFBFB;   
  }
  .comments{
    width: 295px;
    height: 90px;
    background: #F2F2F2;
    margin: 16px 0 0;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 12px;
    box-sizing: border-box;
  }
  .topBottom{
    margin: 8px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .smile{
    vertical-align: middle;
    margin-left: 12px;
  }
  .submit{
    width: 70px;
    line-height: 25px;
    background: #F54645;
    border-radius: 20px;
    color: #fff;
    font-size: 14px;
    margin-right: 0;
  }
  .floor img{
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
  .userself{
    font-weight: bold;
    color: #c80007;
  }
  .userself{
    font-weight: bold;
    color: #c80007;
  }
  .listbox{
    margin-top: 20px;
    display: flex;
  }
  .content rich-text{
    margin-top: 6px;
    display: inline-block;
    word-break: break-all;
    white-space: pre-wrap;
  }
  .pl{
    /* flex-shrink: 1; */
    color: #bdbdbd;
  }
</style>