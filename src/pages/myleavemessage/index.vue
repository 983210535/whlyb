<template>
  <div class="{dataArr.length >0?main : main2}">
    <van-tabs v-model="active" animated @change="changeTil">
        <van-tab title='办理中'>
          <template v-if="dataArr.length >0 && type == 7">
            <mymsgList :arr="dataArr"></mymsgList>
          </template>
          <template v-else>
            <div>
              <img src="../../../static/images_pro/null.png" alt="">
            </div>
          </template>
        </van-tab>
        <van-tab title='部门回复'>
          <template v-if="dataArr.length > 0&& type == 6">
            <mymsgList :arr="dataArr"></mymsgList>
          </template>
          <template v-else>
            <div>
              <img src="../../../static/images_pro/null.png" alt="">
            </div>
          </template>

        </van-tab>
        <van-tab title='系统回复' >
          <template v-if="dataArrs.length > 0&& type == 9 ">
            <div class="xthf">
              <div v-for="(item,index) in dataArrs" :key="index"  class="msg" :class="{bangHei:index<3?true:'',bangFir:index==0?true:''}">
                <p class="title_s">
                  <span class="title">
                    <wxParse :content='item.subject'></wxParse>
                  </span>
                </p>
                <p class="content">
                  <wxParse :content='item.content'></wxParse>
                </p>
                <p class="btm">
                  <span>{{item.nickName}}</span>
                  <span>{{ item.dateline }}</span>
                </p>
                <div class="system">
                  <span>系统回复：</span>{{ item.deleteInfo }}  
                </div>  
              </div> 
            </div>
          </template>
          <template v-else>
            <div>
              <img src="../../../static/images_pro/null.png" alt="">
            </div>
          </template>
        </van-tab>
    </van-tabs>
    
    <div class="nodata" v-if="nodatashow">没有更多数据了</div>
  </div>
</template>

<script>
// import wdlyView from '../../components/wdlyview/index'
import wxParse from 'mpvue-wxparse'
import mymsgList from '../../components/mymsgList/index'
import {formatDate , formatTime} from '../../../static/js/date.js'
export default {
  data () {
    return {
      dataArr: [],
      dataArrs: [],
      nodatashow:false,
      user:'',
      threadState:'',
      handleState:'',
      listData:'',
      total:0,
      type:'',
      blockData:[],
      pageSize:10,
      domain:''
    }
  },
  mounted(){
    this.domain=this.$interfaces
  },
  onPullDownRefresh: function(){
    // 上拉刷新
    this.pageSize=10
    // this.dataArr = []
    // this.dataArrs = []
    this.getData()
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
      this.getData()
    }
  },
  onLoad(options){
    if(this.nodatashow){
      this.nodatashow=false
    }
    this.type = 7
    this.dataArr =[]
    this.dataArrs = []
    this.getData()
    this.user=this.$store.state.user
  },
  components: {
    mymsgList,wxParse
  },
  methods: {
     changeTil(e){
      console.log(e.target.index);
      var type = e.target.index
      switch (type) {
        case 0:
        this.nodatashow=false
          this.dataArr = []
          this.dataArrs = []
          this.pageSize = 10
          this.type = 7
          this.getData()
          break;
        case 1:
        this.nodatashow=false
          this.dataArr = []
          this.dataArrs = []
          this.pageSize = 10
          this.type = 6
          this.getData()
          break;
        case 2:
        this.nodatashow=false
          this.dataArr = []
          this.dataArrs = []
          this.pageSize = 10
          this.type = 9
          console.log(this.type);
          this.getData()

          break;
       
        default:
          console.log("error");
          break;
      }

    },
    getData(){
      // 获取我的留言列表
      if(this.type == 7 || this.type == 6){
        this.$https.request({
        url:this.$interfaces.myleavemessage,
        // url:'http://192.168.7.61:84/messageboard/internetUserInterface/selectThreadsByUser',
          data:{
            pageNum:1,
            pageSize:this.pageSize,
            isAsc:'desc',
            orderByColumn:'create_time',
            type:this.type
          },
          header:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          method:'post'
        })
        .then(res=>{
          this.total = res.total
          res.rows.forEach(e => {
            console.log(e);
            // e.dateline = formatTime(new Date(e.dateline*1000))
            e.dateline = formatTime(new Date(e.dateline*1000)).slice(0,10)
          });
          // if(this.dataArr.length < 1){
          //   this.dataArr = res.rows
          // }else{
          //   this.dataArr.push(...res.rows)
          // }
          this.dataArr = res.rows
          console.log(res);
        })
        .catch(err=>{
          console.log(err)
        })
      }else if(this.type == 9){
        console.log(123);
        this.$https.request({
          url:this.$interfaces.ybj,
            // url:'http://192.168.7.61:84/messageboard/internetUserInterface/selectThreadsTrashByUser',
            data:{
              pageNum:1,
              pageSize:this.pageSize,
              isAsc:'desc',
              orderByColumn:'create_time',
            },
            header:{
              'content-type': 'application/x-www-form-urlencoded'
            },
            method:'post'
        })
        .then(res=>{
          console.log(res);
          this.total = res.total
          res.rows.forEach(e => {
            e.dateline = formatTime(new Date(e.dateline*1000)).slice(0,10)
          });
          // if(this.dataArrs == []){
          //   this.dataArrs = res.rows
          // }else{
          //   this.dataArrs.push(...res.rows)
          // }
          this.dataArrs = res.rows
        })
        .catch(err=>{
          console.log(err)
        })
      }
      
    }
  },

  created () {
    
  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    /* height: 100%; */
  }
  img{
    width: 335px;
    height: 437px;
    margin: 70px 20px;
  }
  .msg{
    margin-bottom: 4px;
    background: #fff;
  }
  .msg p{
  
  width: 343px;
  margin: auto;
}
.title_s{
  display: flex;
  justify-content: space-between;
  padding: 15px 0 8px 0;
}
.title{
  display :block;
  width: 270px;
  white-space: nowrap;
  color: #252525;
  font-weight: bold;
}

.title,.content{
  text-overflow: ellipsis;
  overflow: hidden;
}
.content{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
}
.content,.btm{
  color: #828282;
  font-size: 14px;
}
.btm{
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
}
.system{
  border-top: 1px solid #f2f2f2;
  margin: 0 16px;
  padding: 16px 0;
}
.system span{
  color: #F54645;
}
.nodata{
  text-align: center;
  margin-top: 8px;
}
.xthf{
  background: #F2F2F2;
  padding-bottom: 4px;
}
</style>
