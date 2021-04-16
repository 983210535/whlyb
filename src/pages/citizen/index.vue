<template>
  <div class="main">
    <!-- <van-search
      placeholder="请输入搜索关键词"
      use-action-slot
      @change="onSearch"
      custom-class="key"
      field-class="keyInput"
      background="#fff"
    >
    </van-search> -->

    <div class="content">
      <div v-for="(item,index) in dataArr" :key="index" @click="newDetail(item.DOCID)">
        <template v-if="index == 0">
          <div class="first">
            <img v-if="item.PICATTACH.length > 0 &&item.PICATTACH[0].ABSURL" :src="item.PICATTACH[0].ABSURL" alt="">
            <img v-else src="../../../static/images_pro/noPic.png" alt="">
            <div class="mainNr">
              <p class="titleBig source">{{ item.DOCTITLE }}</p>
              <p class="abstract">{{ item.DOCABSTRACT }}</p>
            </div>
            <div class="nameTime">
              <span>{{ item.SOURCENAME }} <span class="time"> {{ item.DOCRELTIME }}</span></span>
              <!-- <span class="top">置顶</span> -->
            </div>
          </div>
        </template>

        <template v-else-if="item.PICATTACH.length<3">
          <div class="second">
            <img v-if="item.PICATTACH.length > 0 &&item.PICATTACH[0].ABSURL" :src="item.PICATTACH[0].ABSURL" alt="">
            <img v-else src="../../../static/images_pro/noPics.png" alt="">
            <div class="mainSec">
              <p class="title">{{ item.DOCTITLE }}</p>
              <div class="nameTimeSec">
                <span class="source">{{ item.SOURCENAME }} <span class="time"> {{ item.DOCRELTIME }}</span></span>
                <!-- <span class="top">置顶</span> -->
              </div>
            </div>
          </div>
          
        </template>

        <template v-else>
          <!-- <div class="third">
            <img :src="item.PICATTACH[0].ABSURL" alt="">
            <img :src="item.PICATTACH[1].ABSURL" alt="">
            <img :src="item.PICATTACH[2].ABSURL" alt="">
            <div class="mainSec">
              <p class="title">{{ item.DOCTITLE }}</p>
              <div class="nameTimeSec">
                <span class="source">{{ item.SOURCENAME }} <span class="time"> {{ item.DOCRELTIME }}</span></span>
              </div>
            </div>
          </div> -->
        </template>
        
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataArr: [],
      pageNo: 1
    }
  },
  components: {
    
  },
  onLoad(){
    this.getData()
  },
  onReachBottom(){
    //触底刷新
    this.pageNo = this.pageNo +1
    this.getData()
  },
  onPullDownRefresh: function(){
    // 下拉刷新
    this.pageNo = 1
    this.dataArr = []
    this.getData()
  },
  methods: {
    newDetail(e){
      console.log(e);
      wx.navigateTo({ url: `../newDetails/main?docId=${e}` });
    },
    getData(){
      this.$https.request({
        // url: 'http://192.168.7.160:81/wcmapi/service/getDocumentsByChannelId.xhtml',
        url: 'https://news.cjn.cn/wcmapi/service/getDocumentsByChannelId.xhtml',
        data: {
          model: 1,
          chnlId: 16504,
          pageNo: this.pageNo,
          pageSize: 5
        },
        header: {
          'content-type': 'application/x-www-form-urlended'
        },
        methosd: 'post'
      })
      .then(res=>{
        this.getTime(res.rows)
        console.log(res.rows);
        wx.stopPullDownRefresh();
        if(this.dataArr !== []){
          this.dataArr.push(...res.rows)
        }else{
          this.dataArr = res.rows
        }
      })
      .catch(err=>{
        console.log("error");
      })
    },
    getTime(e){
      e.map(item=>{
        var year = item.DOCRELTIME.slice(0,10)
        item.DOCRELTIME = year
        return item
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
  color: #828282;
  font-size: 14px;
}
.content{
  /* padding: 16px; */
  height: 300px;
}
.first,.second,.third{
  /* border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,.1); */
  /* margin-bottom: 16px; */
}
.first{
  /* border-radius: 12px; */
  padding: 16px;
  border-bottom: 6px solid #f6f6f6;
}
.first img{
  width: 100%;
  height: 190px;
  /* border-top-left-radius: 12px;
  border-top-right-radius: 12px; */
  display: block;
}
.mainNr{
  /* padding: 12px 16px 16px 16px; */
  padding: 12px 0 16px;
}
.titleBig{
  margin: 8px 0 12px;
  font-size: 18px;
  color: #252525;
  font-weight: bold;
}
.title{
  width: 194px;
  font-size: 16px;
  color: #252525;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.source{
  /* width: 88%; */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.abstract{
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.nameTime{
  display: flex;
  justify-content: space-between;
  /* padding: 0 16px 16px; */
  padding-bottom: 0 16px 16px;
}
.top{
  color: #E11D1C;
}
.second{
  display: flex;
  margin-left: 16px; 
  padding: 16px 16px 16px 0;
  border-bottom: 1px solid #f6f6f6;
}
.second img{
  width: 125px;
  height: 79px;
  display: block;
  margin-right: 16px;
  /* border-radius: 6px; */
}
.nameTimeSec{
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
}
.mainSec{
  /* width: 231px; */
  position: relative;
}
.time{
  margin-left: 8px;
}

</style>
