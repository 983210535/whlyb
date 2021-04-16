<template>
  <div class="main">
    <div class="newitem">
        <div class="left">
            <img src="/static/images/usericon.jpeg" alt="">
        </div>
        <div class="right">
            <div class="title1">
              <!-- 标题 -->
              <span class="title">{{newcontent.title}}</span>
            </div>
            <!-- 时间 -->
            <div class="time">{{newcontent.createTime}}</div>
            <!-- 内容 -->
            <div class="content">{{newcontent.content}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data  () {
    return {
      openId:'',
      newcontent:''
    }
  },
  components: {
    
  },
  methods: {
    getnewscontent(e){
      // 翻页准备-获取新闻列表的数量
      this.$https.request({
        url:this.$interfaces.newcontent+'/'+e,
        data:{
            
        },
        header:{
        'content-type': 'application/x-www-form-urlencoded',
        JwtAuthorization:this.$store.state.token
        },
        method:'get'
      })
      .then(res=>{
          // console.log(e)
      })
      .catch(err=>{

      })
    }
  },
  onLoad(option){
    var _this=this
    _this.newcontent=_this.$store.getters.newcontent
  },
  created () {
    
  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    background: #fff;
    padding: 20px 0;
  }
  .newitem{
      font-size: 14px;
      padding: 15px 0;
      margin:0 15px;
  }
  .title1{
      overflow: hidden;
  }
  .title{
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 240px;
    float: left;
  }
  .content{
    color:#999;
    padding:10px;
    border:1px dashed #e5e5e5;
    border-radius:6px;
    margin-top:16px;
    max-height: 400px;
    overflow-y: auto;
  }
  .read{
    float:right;
    font-size:12px;
    padding:2px 10px;
    background:#f5f5f5;
    border-radius:21px;
  }
  .isread{
      background: rgb(245, 194, 100);
      color: #fff;
  }
  .time{
      color: #999;
  }
  .left{
    float:left;
    width:44px;
    height:44px;
    overflow:hidden;
    border-radius:50%;
    margin-right:10px;
  }
  .left img{
      width: 100%;
      height: 100%;
      display: block;
  }
</style>
