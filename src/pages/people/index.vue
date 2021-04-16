<template>
  <div class="main">
    <div class="container" v-for="(item,index) in dataArr" :key="index" @click="newDetail(item.queryCode)">
      <p class="title" v-html="item.subject">
        <!-- {{ item.subject }} -->
        <!-- <wxParse :content="item.subject"></wxParse> -->
      </p>
      <div class="content" v-html="item.content">
        <!-- {{ item.content }} -->
        <!-- <wxParse :content="item.content"></wxParse> -->
      </div>
      <p class="time">
        <span>{{ item.nickName }}</span>
        <span>{{ item.dateline }}</span>
      </p>
    </div>

    
  </div>
</template>

<script>
// import wxParse from 'mpvue-wxparse'
import {formatDate , formatTime} from '../../../static/js/date.js'
export default {
  data () {
    return {
      pageNum: 1,
      pageSize: 10,
      dataArr: []
    }
  },
  components: {
    // wxParse
  },
  onLoad(){
    this.dataArr = []
    this.pageSize = 10 
    this.getData()
  },
  onReachBottom(){
    //触底刷新
    wx.stopPullDownRefresh()
    this.pageSize += 10
    this.getData()
  },
  onPullDownRefresh: function(){
    // 下拉刷新
    // this.dataArr= []
    this.pageSize = 10
    // this.pageNum = 1
    this.getData()
    // wx.stopPullDownRefresh()
  },
  methods: {
    newDetail(e){
      console.log(e);
      // this.$store.commit('setMass',this.dataArr[e])
      wx.navigateTo({ url: `../massDetails/main?tid=${e}`});
    },
    getData(){
      this.$https.request({
        // url: 'http://192.168.7.61:83/messageboard/threads/dz/list',
        url: this.$interfaces.peopleDz,
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        },
        method: 'get'
      })
      .then(res=>{
        console.log(res.rows);
        res.rows.forEach(e => {
          console.log(e);
          e.dateline = formatTime(new Date(e.dateline*1000)).slice(0,10)
          e.subject = this.removeHtml(e.subject)
          e.content = this.removeHtml(e.content)
        });
        this.dataArr = res.rows
        wx.stopPullDownRefresh()
        // if(this.dataArr.length == 0){
        //   this.dataArr = res.rows
        // }else{
        //   this.dataArr.push(...res.rows)
        // }
        
      })
      .catch(err=>{
        console.log("error");
      })
    },
    getDate(e){
      e.map(i=>{
        var date = new Date(i.dateline * 1000)
        var b = date.toLocaleString().slice(0,9)
        i.dateline = b
        return i
      })
      return e
    },
    removeHtml(value){
      var value1 =  !value ? '' : String(value).replace(/&nbsp;/g, '').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "")
      return value1
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
  background: #F2F2F2;
  font-size: 14px;
  color: #828282;
}
.container{
  padding: 16px;
  background: #fff;
  margin-bottom: 4px;
}
.title{
  font-size: 16px;
  color: #252525;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient: vertical; /* 垂直排列 */
  word-break: break-all;
}
.content{
  width: 100%;
  /* padding-top: 8px; */
  margin: 8px 0 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.time{
  display: flex;
  justify-content: space-between;
}

</style>
