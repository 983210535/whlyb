<template>
  <van-tabs @change="changeTil" animated sticky swipe-threshold=3  color="#F54645" title-inactive-color="#F54645" > 
    <van-tab  title="各区(功能区)">
      <template v-if="type == 1">
        <dqList :dataArr="dataArr"></dqList>
      </template>
    </van-tab>
      <van-tab  title="政府部门">
      <template v-if="type == 4">
        <dqList :dataArr="dataArr"></dqList>
      </template>
    </van-tab>
      <van-tab  title="法检及其他单位">
      <template v-if="type == 5">
        <dqList :dataArr="dataArr"></dqList>
      </template>
    </van-tab>
      <van-tab  title="群团">
      <template v-if="type == 3">
        <dqList :dataArr="dataArr"></dqList>
      </template>
    </van-tab>
      <van-tab  title="党委系统">
      <template v-if="type == 2">
        <dqList :dataArr="dataArr"></dqList>
      </template>
    </van-tab>
  </van-tabs>
</template>

<script>
import viewList from '../../components/view/index'
import blockView from '../../components/block/index.vue'
import searchView from '../../components/searchview/index.vue'
import dqList from '../../components/index/index'
export default {
  data () {
    return {
      dataArr:[],
      type:1,
      fivefl:[],
      fup:1
    }
  },
  components: {
    viewList,blockView,searchView,dqList
  },
  onLoad(){
    this.type = 1
    // this.getLeave()
  },
  onShow(){
    this.getLeave()
  },
  onReachBottom(){
    //触底刷新
    
  },
  onPullDownRefresh: function(){
    // 下拉刷新
    this.getLeave()
  },
  methods: {
    getLeave(){
      this.$https.request({
        url:this.$interfaces.fivefl,
        data:{
          type:this.type
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:'post'
      })
      .then(res=>{
        console.log(res)
        this.dataArr = res.forumList
        wx.stopPullDownRefresh()
      })
      .catch(err=>{

      })
    },
    changeTil(e){
      console.log(e.target.index + 1);
      var type = e.target.index + 1
      this.fup = e.target.index + 1
      switch (type) {
        case 1:
          this.type = 1
          this.getLeave()
          break;
        case 2:
          this.type = 4
          this.getLeave()
          break;
        case 3:
          this.type = 5
          this.getLeave()
          break;
        case 4:
          this.type = 3
          this.getLeave()
          break;
        case 5:
          this.type = 2
          this.getLeave()
          break;      
      
        default:
          console.log("error");
          break;
      }
    },
    toBang(){
      wx.navigateTo({ url: '../bang/main' });
    },
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
  div{
    box-sizing: border-box;
  }
  .main{
    width: 100%;
    background: #fff;
  }
  .nav{
    position: relative;
  }
  .nav > img{
    width: 100%;
    height:69px;
  }
  .nav .search{
    width: 100%;
    position: absolute;
    bottom: 16px;
    /* left: 16px;
    right: 16px; */
    opacity: .4;
  }
  /* .nav .search img{
    width: 16.37px;
    height: 17.33px;
    position: absolute;
    left: 24px;
    top: 6px;
  }
  .search input{
    width: 343px;
    height: 30px;
    border-radius: 27px;
    background-color: rgba(0,0,0,.12);
    font-size: 12px;
    
    padding-left: 48px;
    box-sizing: border-box;
  } */
  .message{
    height: 48px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin: 16px 16px;

    /* justify-content: space-around; */
  }
  
  /* .message div{
    width: 50px;
    height: 50px;
    float: left;
    text-align: center;
    font-size: 12px;
    box-sizing: border-box;
    color: white;
  } */
  .message .allChoose{
    display: flex;
    width: 200px;
  }
  .allChoose .choose{
    width: 105px;
    background:rgb(255,236,222);
    color: #F85C37;
    font-size: 10px;
    border: 2px solid #F85C37;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .allChoose .choose p:nth-child(1){
    margin-top: 9px;
  }
  .allChoose .choose p:nth-child(2){
    /* margin-top: 4px; */
  }
  .clickMe{
    box-sizing: border-box;
    width: 100px;
    height: 48px;
    line-height: 42px;
    border: 2px solid #F54645;
    border-radius: 4px;
    font-size: 20px;
    text-align: center;
    color: #F54645;
    /* border-top-right-radius: 8px;
    border-bottom-right-radius: 8px; */
  }
  .good{
    width: 223px;
  }
  .good p{
    font-size: 12px;
    color: #3D3D3D;
    text-align: center;
  }
  .good .search{
    margin-top: 7px;
    border: 1px solid #EFEFEF;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .good .search input{
    width: 191px;
    height: 14px;
    font-size: 10px;
    padding-left: 8px;
    box-sizing: border-box;
  }
  .good .search .img{
    width: 32px;
    height: 16px;
    border-left: 1px solid #3D3D3D;
    box-sizing: border-box;
    text-align: center;
  }
  .good .search img{
    width: 16px;
    height: 16px;
  }
  .look,.comment{
    padding: 9px 0px;
    border-radius: 8px;
    background: #40BD87;
  }
  .comment{
    background: #3F8ABD;
  }
</style>

 