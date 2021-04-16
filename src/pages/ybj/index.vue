<template>
  <div class="main">
    <div class="topImg"><img src="../../../static/images/mine_top.png" alt=""></div>
    <div class="cardBox">
      <div class="desc">
        <div class="title">
        </div>
      </div>
      <div class="list">
        <van-row>
          <van-col span="12" @click="gotoPage('threadState',1)">
            <div class="imgicon"><img :src="user.avatarUrl" alt=""></div>
            <div class="icondesc">{{user.nickName}}</div>
          </van-col>
          <van-col span="12" @click="gotoPage('handleState',1)">
            <div class="imgicon">
              <!-- <van-icon size="32px" color="#61a8f1" name="checked" :info="total" /> -->
              <span v-if="total>99">
                <van-icon size="32px" color="#61a8f1" name="checked" v-if="total>99" info="99+" />
              </span>
              <span v-else>
                <span v-if="total<1">
                  <van-icon size="32px" color="#61a8f1" name="checked"/>
                </span>
                <span v-else>
                  <van-icon size="32px" color="#61a8f1" name="checked" :info="total" />
                </span>
              </span>
            </div>
            <div class="icondesc">系统回复</div>
          </van-col>
        </van-row>
      </div>

      
    </div>
    <div class="nodata" v-if="total<1">暂无数据</div>
    <div class="switchlist">
      <!-- 我的留言列表 -->
      <wdly-view :blockData="blockData" :leaveType="type" :singleItem="item"></wdly-view>
    </div>
    <div class="nodata" v-if="nodatashow">没有更多数据</div>
  </div>
</template>

<script>
import wdlyView from '../../components/wdlyview/index'
export default {
  data () {
    return {
      nodatashow:false,
      user:'',
      threadState:'',
      handleState:'',
      listData:'',
      total:0,
      type:'',
      blockData:[],
      pageSize:10
    }
  },
  onPullDownRefresh: function(){
    // 上拉刷新
    this.pageSize=10
    this.getData()
  },
  onReachBottom(){
    // 停止下拉刷新
    // wx.stopPullDownRefresh()
    this.pageSize=this.pageSize+10
    if((this.pageSize-10)>this.total){
      this.nodatashow=true
    }else{
      this.nodatashow=false
      this.getData()
    }
  },
  onLoad(options){
    this.type=options.type
    this.$store.state.lytype=this.type
    this.getData()
    this.user=this.$store.state.user
  },
  components: {
    wdlyView
  },
  methods: {
    getData(){
      // 获取我的留言列表
      this.$https.request({
        url:this.$interfaces.ybj,
          data:{
            pageNum:1,
            pageSize:this.pageSize,
            isAsc:'desc',
            orderByColumn:'create_time'
          },
          header:{
            'content-type': 'application/x-www-form-urlencoded',
            JwtAuthorization:this.$store.state.token
          },
          method:'post'
      })
      .then(res=>{
        this.listData=res.rows
        this.blockData=res.rows
        this.total=res.total
        wx.stopPullDownRefresh()
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
  .main{
    width: 100%;
    height: 100%;
  }
  .cardBox{
    margin: 30px 15px 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px 0 #e5e5e5;
    padding: 20px;
    background: #fff;
  }
  .usericon{
    width: 80px;
    height: 80px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
  }
  .usericon img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .desc .title{
    text-align: center;
    font-size: 14px;
  }
  .info{
    text-align: center;
    font-size: 12px;
    color: #999;
  }
  .imgicon{
    width: 40px;
    height: 40px;
    margin: 0 auto;
    text-align: center;
  }
  .imgicon img{
    width: 100%;
    height: 100%;
    display:block;
    border-radius: 50%;
  }
  .icondesc{
    font-size: 12px;
    text-align: center;
  }
  .list{
    margin: 15px 0 0;
  }
  .outLogin{
    text-align: center;
    color: #d5d5d5;
    font-size: 14px;
    margin-top: 30px;
  }
  .topImg{
    width: 100%;
    position: absolute;
    z-index: -1;
    top: -100px;
  }
  .topImg img{
    width: 100%;
  }
  .cradBox{
    margin: 15px;
    border-radius:10px;
    border:1px dashed #d5d5d5;
    overflow:hidden;
  }
  .nodata{
    text-align:center;
    font-size:14px;
    color:#999;
    line-height:36px;
  }
</style>
