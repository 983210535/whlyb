<template>
  <div class="main">
    <template v-if="arrData.length<1">
      <img src="../../../static/images_pro/null.png" alt="">
    </template>

    <template v-else>
      <msgList :arr="arrData"></msgList>

    </template>      
    <div class="nodata" v-if="nodatashow">没有更多数据了</div>


  </div>
</template>

<script>
import msgList from '../../components/msgList/index'
import {formatDate , formatTime} from '../../../static/js/date.js'
export default {
  data () {
    return {
      arrData: '',
      pageSize: 10,
      total: 0,
      nodatashow:false,
    }
  },
  components: {
    msgList
  },
  onLoad(){
    this.pageSize = 10
    this.getData()
  },
  onShow(){
    // this.getData()
  },
  onPullDownRefresh: function(){
    // 下拉刷新
    this.pageSize = 10
    // this.arrData = []
    this.getData()
    wx.stopPullDownRefresh()
  },
  onReachBottom(){
    //触底刷新
    wx.stopPullDownRefresh()
    this.pageSize=this.pageSize+10
    if((this.pageSize-10)>this.total){
      this.nodatashow=true
    }else{
      this.nodatashow=false
      this.getData()
    }


},
  methods: {
    newDetail(e){
      console.log(e);
      wx.navigateTo({ url: `../newDetails/main?docId=${e}` });
    },
    getData(){
      console.log(123);
       this.$https.request({
        // url:'http://192.168.7.61:84/messageboard/internetUserInterface/selectThreadsUserFavorite',
        url:this.$interfaces.focus,
          data:{
            pageNum:1,
            pageSize:this.pageSize,
            isAsc:'desc',
            orderByColumn:'create_time'
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
          console.log(e);
          // e.dateline = formatTime(new Date(e.dateline*1000))
          e.dateline = formatTime(new Date(e.dateline*1000)).slice(0,10)
        });
        this.arrData = res.rows
        // if(this.arrData.length != 0){
        //   this.arrData.push(...res.rows)
        // }else{
        //   this.arrData = res.rows
        // }
        // this.listData=res.rows
        // this.blockData=res.rows
        // this.total=res.total
        // wx.stopPullDownRefresh()
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
  /* height: 100%; */
  /* color: #828282; */
  /* font-size: 12px; */
  /* text-align: center; */
}
img{
  width: 335px;
  height: 437px;
  margin: 70px 20px ;
}
.nodata{
  text-align: center;
  margin-top: 8px;
}



</style>
