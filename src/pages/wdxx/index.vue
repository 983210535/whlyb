<template>
  <div class="main">
    <template v-if="newsData.length > 0">
      <div class="box" v-for="(item,index) in newsData" :key="index" @click="toDetails(item)">
        <!-- <div class="isRead"></div> -->
        <p class="content">{{ item.content }}</p>
        <p class="time">{{ item.createTime }}</p>
      </div>
      <!-- <p class="isRead" v-if="read">一键已读</p> -->
      <!-- <p class="none">暂无数据</p> -->
      <div class="nodata" v-show="nodatashow">没有更多数据了</div>
    </template>
    <template v-else>
      <div>
        <img src="../../../static/images_pro/null.png" alt="">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsData:[],
      userId: '',
      pageSize: 10,
      pageNum: 1,
      nodatashow: false,
      total: 0
    }
  },
  components: {
    
  },
  mounted(){
    
  },
  onLoad(option){
    // 初始化获取用户信息和token值
    this.userId = this.$store.state.userId
    this.user=this.$store.getters.user
    this.token=this.$store.getters.token
    this.pageSize = 10
    this.getnews()
  },
  onShow(){
    
  },
  onPullDownRefresh(){
    this.pageSize = 10
    this.getnews()
    wx.stopPullDownRefresh()    
  },
  onReachBottom(){
    // 停止下拉刷新
    wx.stopPullDownRefresh()    
    this.pageSize=this.pageSize+10
    if((this.pageSize-10)>this.total){
      this.nodatashow=true
    }else{
      this.nodatashow=false
      this.getnews()
    }
  },
  methods: {
    // toDetails(e){
    //   wx.navigateTo({ url: `../lyDetails/main?tid=${e.id}` });

    // },
    itemconten(e){
      // 存储最新消息数值
      this.$store.dispatch('setNewContent',e)
      this.setread(e.id) 
    },
    setread(e){
      // 设置已读
      this.$https.request({
          url:this.$interfaces.setread,
          data:{
              messageIds:e
          },
          header:{
          'content-type': 'application/x-www-form-urlencoded',
          JwtAuthorization:this.$store.state.token
          },
          method:'post'
      })
      .then(res=>{
          wx.navigateTo({
              url:"../news/main?id="+e
          })
      })
      .catch(err=>{

      })
    },
    getnews(){
      // 获取我的消息
      this.$https.request({
        url:this.$interfaces.myMsg,
        // url:'http://192.168.7.61:84/messageboard/newsText/list',
        data:{
          // isRead:-1
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          creatorId: this.userId
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:'post'
      })
      .then(res=>{
        this.newsData=res.rows
        this.total = res.total
        console.log(res);
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  created () {
    
  }
}
</script>

<style scoped>
  page{
    background: #fff;
    height: 100%;
  }
  .main{
    width: 100%;
    background: #fff;
    padding: 20px 0;
  }
  img{
    width: 335px;
    height: 437px;
    margin: 70px 20px ;
  } 
  .isRead{
    margin: 16px 16px;
    color: #828282;
    font-size: 14px;
    text-align: right;
  }
  .none{
    text-align: center;
  }
   .box{
    margin: 8px 16px;
    border-bottom: 1px solid #F2F2F2;
    font-size: 14px;
    color: #828282;
    position: relative;
  }
  .content{
    /* text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; */
    margin: 16px 0 6px;
  }
  .time{
    text-align: right;
    margin-bottom: 16px;
  }
  .isRead{
    width: 8px;
    height: 8px;
    background: #F54645;
    border-radius: 50%;
    position: absolute;
    top: -18px;
    left: -20px;
  }
  .nodata{
    text-align: center;
    margin-top: 8px;
  }

</style>
