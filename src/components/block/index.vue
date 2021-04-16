<template>
  <div>
    <div class="searchitem" v-if="!blockData||blockData.length<1">
      <span class="nodata">暂无数据</span>
    </div>
    <div v-else>
      <div class="blockview">
        <div  class="cradBox" v-for="(item,index) in blockData" :key="index" @click="goToItem(item)">
          <div class="itemicon" v-if="item.userHead"><img :src="domain.usericon+item.userHead" alt=""></div>
          <div class="itemicon" v-else><img :src="domain.defaltUsericon" alt=""></div>
          <div class="top">
            <span class="title">
              <wxParse :content="item.subject"></wxParse>
            </span>
            <span class="blzt" v-if="item.handleState==1||item.handleState==2">已回复</span>
            <span class="blzt" v-else>办理中</span>
          </div>
          <div class="desc">
            <span>
              <van-icon class="iconimg" name="clock-o"/>
              {{item.dateline_txt}}
            </span>
            <span>
              <van-icon class="iconimg" name="user-circle-o"/>
              <span v-if="item.anonymousState==1"></span>
              <span v-else>{{item.nickName}}</span>
            </span>
            <span>
              <van-icon class="iconimg" name="question-o"/>
              {{item.typeId_txt+'　'+item.domainId_txt}}
            </span>
          </div>
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
    blockData:Array
  },
  data(){
    return{
      tabledata:[],
      mainip:'',
      domain:''
    }
  },
  computed:{
    
  },
  components: {
    wxParse
  },
  mounted(){
    this.domain=this.$interfaces
    // console.log(this.domain)
  },
  methods: {
    goToItem(e){
      // 跳转详情页
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
            url:`../lyxq/main?tid=${e.queryCode}`
          })
        }
      })
      .catch(err=>{
        console.log(err)
      })      
    }
  },
  onLoad(){
    // 获取配置的文件地址
    this.mainip=this.$interfaces.newleavemessage
    
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
  }
  .blzt{
    color: #ffd497;
    float: right;
    font-size: 12px;
  }
  .desc{
    color: #c9c9c9;
    line-height: 18px;
    padding: 10px 0 0;
    font-size: 14px;
    padding-left: 55px;
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
    margin-bottom: 10px;
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
    width: 252px;
    height: 32px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    float:left;
  }
  .title .wxParse{
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    float:left;
    width:504rpx;
  }
  .nodata{
    text-align: center;
    line-height: 52px;
    color: #e5e5e5;
    display: block;
    font-size: 14px;
  }
</style>
