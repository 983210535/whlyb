<template>
  <div class="main">
    <van-tabs v-model="active" animated @change="changeTil">
        <van-tab title='全部'>
          <template v-if="arr.length >0 && handleState == ''">
            <msgList :arr="arr"></msgList>
            <!-- <msgList v-for="(item,index) in arr" :item="item" :key="index"></msgList> -->
            <!-- <div v-for="(item,index) in arr" :key="index">
              <h1>{{index}}</h1>
              <p>{{item.subject}}</p>
              <p class="content">{{item.content}}</p>
              <p>{{item.nickName}}</p>
              <p>{{item.dateline}}</p>
            </div> -->
          </template>
          <template v-else>
            <div>
              <img src="../../../static/images_pro/null.png" alt="">
            </div>
          </template>
        </van-tab>
        <van-tab title='办理中'>
          <template v-if="arr.length >0 && handleState == 2">
            <msgList :arr="arr"></msgList>
          </template>
          <template v-else>
            <div>
              <img src="../../../static/images_pro/null.png" alt="">
            </div>
          </template>
        </van-tab>
        <van-tab title='已回复' >
          <template v-if="arr.length >0  && handleState == 3">
            <msgList :arr="arr"></msgList>
          </template>
          <template v-else>
            <div>
              <img src="../../../static/images_pro/null.png" alt="">
            </div>
          </template>
        </van-tab>
    </van-tabs>
    <div class="nodata" v-if="nodatashow">没有更多数据了</div>
    <div class="nodata" v-if="loadding">正在加载请稍后</div>
  </div>
</template>

<script>
import viewList from '../../components/view/index'
import msgList from '../../components/msgList/index'
import {formatDate , formatTime} from '../../../static/js/date.js'

export default {
  data () {
    return {
      arr:[],
      handleArr: '',
      handlesArr: '',
      fid: '',
      pageSize: 10,
      pageNum: 1,
      handleState: '',
      nodatashow: false,
      total: 0,
      loadding: false

    }
  },
  components: {
    viewList,msgList
  },
  
  onLoad(e){
    if(this.nodatashow){
      this.nodatashow=false
    }else if(this.loadding){
      this.loadding = false
    }

    this.arr = []
    this.pageNum = 1
    this.pageSize=10,
    this.handleState = ''
    console.log(e);
    this.fid = e.fid
    this.getLy()
  },
  onReachBottom(){
    // wx.stopPullDownRefresh()
    //触底刷新
    this.loadding = true
    // if(this.arr.length  <= this.pageSize ){
      this.pageSize=this.pageSize+10
      // this.getLy()
    // }
    console.log(this.pageSize);
    if((this.pageSize-10)>this.total){
      this.loadding = false
      this.nodatashow=true
    }else{
      this.nodatashow=false
      this.getLy()
    }
  },
  onPullDownRefresh: function(){
    // 下拉刷新
    // this.arr = []
    // this.pageNum = 1 
    // this.getLy()
    // wx.stopPullDownRefresh();
    this.pageSize=10
    this.getLy()
    // wx.stopPullDownRefresh()
  },
  methods: {
    getLy(){
      console.log(this.handleState);
      this.$https.request({
      url:this.$interfaces.arealeavemessage,
      data:{
        pageSize: this.pageSize,
        pageNum: this.pageNum,
        fid: this.fid,
        handleState: this.handleState,
        threadState: this.threadState
      },
      header:{
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      method:'post'
      })
      .then(res=>{
        // console.log(res)
        if(this.loadding){
          this.loadding = false
        }
        this.total = res.total
        // this.getDate(res.rows)
        res.rows.forEach((e,index) => {
            // console.log(e);
            // e.dateline = formatTime(new Date(e.dateline*1000))
            e.dateline = formatTime(new Date(e.dateline*1000)).slice(0,10)
            console.log(index,e.subject,e.content);
            e.subject = this.removeHtml(e.subject)
            e.content = this.removeHtml(e.content)
            console.log(index,e.subject,e.content);
        });
        this.arr = res.rows
        wx.stopPullDownRefresh();
        // if(this.handleState == 2){
        //   // if(this.arr.length != 0){
        //   //   this.arr.push(...res.rows)
        //   // }else{
        //     this.arr = res.rows
        //   // }
        // }else if(this.handleState == 3){
        //   // if(this.arr.length != 0){
        //   //   this.arr.push(...res.rows)
        //   // }else{
        //     this.arr = res.rows
        //   // }
        // }else{
        //   // if(this.arr.length != 0){
        //   //   this.arr.push(...res.rows)
        //   // }else{
        //     this.arr = res.rows
        //   // }
        // }
      })
      .catch(err=>{

      })
    },
    removeHtml(value){
      var value1 =  !value ? '' : String(value).replace(/&nbsp;/g, '').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "")
      return value1
    },
    getDate(e){
      e.map(i=>{
        var date = new Date(i.dateline * 1000)
        var b = date.toLocaleString().slice(0,10)
        i.dateline = b
        return i
      })
      return e
    },
    changeTil(e){
      var index = e.target.index + 1
      console.log(index);
      if(this.nodatashow){
        this.nodatashow=false
      }

      switch(index){
        case 1:
          this.handleState = ''
          this.pageSize = 10

            this.getLy()
          break; 

        case 2:
          this.handleState = index
          this.pageSize = 10

            this.getLy()
          break;

         case 3: 
            this.handleState = index
          this.pageSize = 10

            this.getLy()
            break;
         default:
           console.log("ERROR!!!"); 
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
  /* background: #F2F2F2 */
}
.nodata{
  text-align: center;
  margin-top: 8px;
}
img{
  width: 335px;
  height: 437px;
  margin: 70px 20px ;
}
.content{
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}


</style>
