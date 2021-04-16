<template>
  <div class="viewlist">
    <div class="listitem" @click="goToItem(singleItem)">
      <div class="itemicon" v-if="singleItem.userHead"><img :src="domain.usericon+singleItem.userHead" alt=""></div>
      <div class="itemicon" v-else><img :src="domain.defaltUsericon" alt=""></div>
      <div class="top">
        <span class="title">
          <wxParse :content="singleItem.subject"></wxParse>
        </span>
        
        <span class="blzt" v-if="singleItem.answer_num > 0">已回复</span>
        <span class="blzt" v-else>办理中</span>
      </div>
      <div class="desc">
        <span>
          <van-icon class="iconimg" name="clock-o"/>
          <!-- {{singleItem.createTime}} -->
          {{dotime}}
          
        </span>
        <span v-if="singleItem.anonymousState==1">
          <van-icon class="iconimg" name="user-circle-o"/>
          
        </span>
        <span v-else>
          <van-icon class="iconimg" name="user-circle-o"/>
          {{singleItem.nickName}}
        </span>
        <span>
          <van-icon class="iconimg" name="question-o"/>
          {{singleItem.typeName}}　{{singleItem.domainName}}
        </span>
        
      </div>
    </div>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import {formatTime} from '../../../static/js/date.js'

export default {
  props:{
    singleItem:Array
  },
  data(){
    return{
      tabledata:[],
      mainip:'',
      dotime:'',
      domain:''
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
          this.$store.dispatch('setSingleItem',res.threadsObj)
          wx.navigateTo({
            url:`../lyxq/main?tid=${e.tid}`
          })
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  computed(){
  },
  onLoad(){
    // 获取自定义文件路径
    this.mainip=this.$interfaces.newleavemessage
    this.dotime=formatTime(new Date(this.singleItem.createTime*1000))
  },
  onShow(){
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
  .listitem{
    padding: 10px 15px;
    background: #fff;
    font-size: 14px;
  }
  .top{
    font-size: 16px;
    line-height: 32px;
    border-bottom: 1px solid #f5f5f5;
    margin-left: 50px;
    height: 32px;
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
    margin-left: 50px;
    overflow: hidden;
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
    height: 32px;
    width: 252px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    float:left;
  }
</style>
