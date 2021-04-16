<template>
  <div>
    <div class="wdlyview" v-if="lytype=='6'">
      <div  class="cradBox" v-for="(item,index) in blockData" :key="index" @click="goToItem(item)">
        <div class="itemicon" v-if="item.userHead"><img :src="domain.usericon+item.userHead" alt=""></div>
        <div class="itemicon" v-else><img :src="domain.defaltUsericon" alt=""></div>
        <div class="top">
          <span class="title">
            <!-- {{item.subject}} -->
            <wxParse :content="item.subject"></wxParse>
          </span>
        </div>
        <div class="desc">
          <span>
            <!-- 时间 -->
            <van-icon class="iconimg" name="clock-o"/>
            {{item.dateline_txt}}
          </span>
          <span>
            <van-icon class="iconimg" name="user-circle-o"/>
            <!-- 笔名 -->
            <span v-if="item.anonymousState==1"></span>
            <span v-else>{{item.nickName}}</span>
          </span>
          <span>
            <van-icon class="iconimg" name="question-o"/>
            <!-- 问题类型 -->
            {{item.typeId_txt+'　'+item.domainId_txt}}
          </span>
        </div>
      </div>
    </div>
    <div class="wdlyview" v-else>
      <div  class="cradBox" v-for="(item,index) in blockData" :key="index" @click="goToItem(item)">
        <div class="itemicon" v-if="item.userHead"><img :src="domain.usericon+item.userHead" alt=""></div>
        <div class="itemicon" v-else><img :src="domain.defaltUsericon" alt=""></div>
        <div class="top">
          <span class="title">
            <wxParse :content="item.subject"></wxParse>
          </span>
        </div>
        <div class="desc">
          <span>
            <!-- 时间 -->
            <van-icon class="iconimg" name="clock-o"/>
            {{item.dateline_txt}}
          </span>
          <span>
            <van-icon class="iconimg" name="user-circle-o"/>
            <!-- 笔名 -->
            <span v-if="item.anonymousState==1"></span>
            <span v-else>{{item.nickName}}</span>
          </span>
          <span>
            <van-icon class="iconimg" name="question-o"/>
            <!-- 问题类型 -->
            {{item.typeId_txt+'　'+item.domainId_txt}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
export default {
  name: 'blockview',
  props:{
    title:String,
    blzt:String,
    time:String,
    user:String,
    lylx:String,
    singleItem:Array,
    blockData:Array,
    leaveType:Number
  },
  data(){
    return{
      tabledata:[],
      mainip:'',
      domain:this.$interfaces
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
    wxParse
  },
  mounted(){
    this.domain=this.$interfaces
  },
  methods: {
    goToItem(e){
      if(this.lytype=='10'){
        wx.navigateTo({
          url:`../wdlyxq/main?tid=${e.queryCode}`
        })
      }else{
        // 跳转到详情页
        this.$https.request({
          url:this.$interfaces.contentDetail,
          data:{
            tid:e.queryCode
          },
          header:{
            'content-type': 'application/x-www-form-urlencoded',
            JwtAuthorization:this.$store.state.token
          },
          method:'post'
        })
        .then(res=>{
          if(res.code==0){
            this.$store.dispatch('setWdlyItem',res.threadsObj)
            wx.navigateTo({
              url:`../wdlyxq/main?zt=self&tid=${e.queryCode}`
            })
          }
        })
        .catch(err=>{
          console.log(err)
        })
      }
    }
  },
  onLoad(){
    // 获取自定义文件路径
    this.mainip=this.$interfaces.newleavemessage
  },
  onShow(){
    
  },
  created () {
    // console.log(this.$store.state.lytype)
  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
  }
  .listitem{
    padding: 10px 6px;
    background: #fff;
    font-size: 14px;
  }
  .top{
    font-size: 16px;
    line-height: 32px;
    border-bottom: 1px solid #f5f5f5;
    margin-left: 55px;
    height: 32px;
    overflow: hidden;
  }
  .blzt{
    color: #ffd497;
    float: right;
    font-size: 12px;
  }
  .desc{
    color: #c9c9c9;
    line-height: 18px;
    padding: 10px 0 6px;
    font-size: 14px;
    padding-left: 55px;
  }
  .desc span{
    margin-right: 20px;
    display: inline-block;
    overflow: hidden;
    float: left;
    line-height: 24px;
    
  }
  .iconimg{
    float: left;
    margin: 2px 6px 0 0;
  }
  .usericon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }
  .usericon img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .cradBox{
    overflow:hidden;
    background: #fff;
    border-bottom: 10px solid #f7f7f7;
    padding: 10px 15px;
  }
  .itemicon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }
  .itemicon img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .title{
    width: 243px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    float:left;
  }
</style>
