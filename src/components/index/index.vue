<template>
  <div class="container">
    <div class="bang">
      <div class="come" @click="toBang">
        <img src="../../../static/images_pro/bang.png" alt="">
        <span>进入排行榜</span>
      </div>
      <div class="qzdp" @click="goPeople">
        群众点评
      </div>
    </div>
    <div class="top">
      <span>区域</span>
      <span>留言量</span>
      <span>回复量</span>
    </div>

    <div class="area" v-for="(item,index) in dataArr" :key="index" @click="enterView(item.fid)">
      <span class="qymz">{{ item.name }}</span>
      <span class="total">{{ item.tnumYear }}</span>
      <span class="total total_t">{{ item.anumYear }}</span>
    </div>

    <!-- <div class="area" v-for="(item,index) in dataArr" :key="index" @click="enterView(item.fid)">
      <p>{{ item.name }}</p>
      <div class="bdr_btm">
        <span>年度合计留言量</span><span class="total">{{ item.tnumYear }}</span>
      </div>
      <div>
        <span>年度公开回复量</span><span class="total total_t">{{ item.anumYear }}</span>
      </div>
    </div> -->
  </div>
</template>

<script>


export default {
  props:{
    dataArr:Array
  },
  data(){
    return{
      
    }
  },
  components: {
  },
  mounted(){
  },
  methods: {
    enterView(e){
      console.log(e);
      wx.navigateTo({ url: `../messageList/main?fid=${e}` });
    },
    toBang(){
      wx.navigateTo({ url: '../bang/main' });
    },
    goPeople(){
      wx.navigateTo({ url: `../people/main` });
    }
  },
  computed(){
  },
  onLoad(){
    
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
  .top{
    font-size: 12px;
    color: #9F9F9F;
    display: flex;
    justify-content: space-between;
  }
  .top span,.area span{
    flex: 1 1 33.3%;
    text-align: center;
  }
  .top span:nth-child(1),.area span:nth-child(1){
    text-align: left;
  }
  .top span:nth-child(3){
    text-align: right;
    padding-right: 24px;
    box-sizing: border-box;
  }
  .area span:nth-child(3){
    box-sizing: border-box;
    padding-left: 30px;
  }
  .bang{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
    margin-bottom: 16px;
  }
  .come{
    display: flex;
    align-items: center;
  }
  .come span{
    font-size: 16px;
    color: #FF775D;
    margin-left: 8px;
  }
  .come img{
    width: 24px;
    height: 24px;
  }
  .qzdp{
    background: #FF775D;
    font-size: 12px;
    color: #fff;
    text-align: center;
    width: 80px;
    height: 25px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    line-height: 25px;
    margin: -16px;
  }
  /* .top p,.area p{
    width: 33.3%;
  }
  .top p:nth-child(2),.area p:nth-child(2){
    text-align: center;
  }
  .top p:nth-child(3),.area p:nth-child(3){
    text-align: right;
  }
  .area p:nth-child(3){
    box-sizing: border-box;
    padding-right: 18px;
  } */
  .container{
    /* text-align: center; */
    margin: 16px;
    /* display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #F2F2F2;
    margin-bottom: 16px; */
  }
  .area{
    font-size: 18px;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
  }
  /* .area{
    width: 163px;
    height: 138px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,.12);
    font-size: 10px;
    margin: 16px 0 0 16px;
  } */
  /* .area p{
    font-size: 16px;
    width: 80%;
    padding: 0 10%;
    color: #252525;
    text-align: center;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 16px 0;
  } */
  .area div{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .area .bdr_btm{
    border-bottom: 1px solid #F6F6F6;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  /* .area div span{
    font-size: 10px;
    color: #9F9F9F;
  } */
  .area .qymz{
    font-size: 16px;
    color: #252525;
    font-weight: bold;
  }
  .area .total{
    color: #F54645;
  }
  .area .total_t{
    color: #20A8D2;
  }
</style>
