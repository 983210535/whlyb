<template>
  <div class="searchview">
    <div v-if="!searchdata||searchdata.length<1">
      <span class="nodata">无符合条件的结果</span>
    </div>
    <div v-else>
      <div class="searchitem" v-for="(item,index) in searchdata" :key="index">
        <div class="listitem" @click="goToItem(item.source.queryCode)">
          <div class="top">
            <div class="title" v-if="item.highlight.subject" v-html="item.highlight.subject"></div>
              <!-- <wxParse v-if="item.highlight.subject" :content="item.highlight.subject"></wxParse>
              <wxParse v-else :content="item.source.subject"></wxParse> -->
            <div class="title" v-else v-html="item.source.subject"></div>
            <span class="date">{{ item.source.dateline }}</span>
            <!-- <span class="handle handles" v-if="item.source.handleState">已回复</span>
            <span class="handle" v-else>办理中</span> -->
          </div>

          <div class="content">
            <!-- {{ item.content }} -->
            
            <!-- <wxParse v-if="item.highlight.content" :content="item.highlight.content"></wxParse>
            <wxParse v-else :content="item.source.content"></wxParse> -->
            <div class="content2" v-if="item.highlight.content" v-html="item.highlight.content"></div>
            <div class="content2" v-else v-html="item.source.content"></div>
            <!-- <mpHtml :content='item.highlight.content'></mpHtml> -->
          </div>

          <!-- <p class="btm">
            <span>{{ item.source.nickName }}</span>
            <span>{{ item.source.dateline }}</span>
          </p> -->
          <!-- <div class="desc">
            <span>
              <van-icon class="iconimg" name="clock-o"/>
              {{item.source.dateline}}
            </span>
            <span v-if="item.source.anonymousState==1">
              <van-icon class="iconimg" name="user-circle-o"/>
              
            </span>
            <span v-else>
              <van-icon class="iconimg" name="user-circle-o"/>
              {{item.source.nickName}}
            </span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import wxParse from 'mpvue-wxparse'
// import mpHtml from '../../../node_modules/mp-html/dist/uni-app/components/mp-html'
export default {
  props:{
    title:String,
    blzt:String,
    time:String,
    user:String,
    lylx:String,
    userHead:String,
    singleItem:Array,
    date:[],
    old:''
  },
  data(){
    return{
      tabledata:[],
      mainip:''
    }
  },
  components: {
    // wxParse
  },
  mounted(){},
  methods: {
    goToItem(e){
      console.log(this.old);


      var index = wx.getStorageSync("search").indexOf(this.old)
      console.log(index);
      if(index == -1){
        var arr = wx.getStorageSync('search')
        arr.unshift(this.old)
        wx.setStorageSync("search",arr)
        console.log(wx.getStorageSync("search"));
      }else if(index >0 ){
        var arr = wx.getStorageSync("search")
        arr.splice(index,1)
        arr.unshift(this.old)
        wx.setStorageSync("search",arr)
        console.log(wx.getStorageSync("search"));
      }
      // 跳转到详情页
      // this.$https.request({
      //   url:this.$interfaces.contentDetail,
      //   data:{
      //     tid:e.source.queryCode
      //   },
      //   header:{
      //     'content-type': 'application/x-www-form-urlencoded'
      //   },
      //   method:'post'
      // })
      // .then(res=>{
      //   if(res.code==0){
          this.$store.dispatch('setTid',e)
          wx.navigateTo({
            url:`../lyDetails/main?tid=${e}`
          })
      //   }
      // })
      // .catch(err=>{
      //   console.log(err)
      // })
    },
    toDate(number){
      // 时间格式转化
      var n=number * 1000;
      var date = new Date(n);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = date.getDate()<10 ? '0'+date.getDate() : date.getDate();
      return (Y+M+D)
    }
  },
  computed:{
    searchdata: {
      get(){
        // 获取搜索到的结果列表
        var alldata=this.$store.getters.searchdata
        for(var i=0;i<alldata.length;i++){
          alldata[i].source.dateline=this.toDate(alldata[i].source.dateline)
        }
        return alldata
      },
      set(){
        
      }
    }
  },
  onLoad(){
    // 获取定义的文件地址
    this.mainip=this.$interfaces.newleavemessage
  },
  onShow(){},
  created(){

  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
  }
  .listitem{
    padding: 16px;
    background: #fff;
    font-size: 14px;
  }
  .top{
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
  }
  .blzt{
    color: #ffd497;
    float: right;
    font-size: 12px;
  }
  .desc{
    color: #c9c9c9;
    line-height: 18px;
    padding: 10px 0 6px;
    overflow: hidden;
  }
  .desc span{
    margin-right: 20px;
    display: inline-block;
    overflow: hidden;
    float: left;
    line-height: 24px;
  }
  .iconimg{
    float: left;
    margin: 2px 6px 0 0;
  }
  .itemicon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }
  .itemicon img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .title{
    max-width: 250px;
    color: #252525;
    font-weight: bold;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 限制在一个块元素显示的文本的行数 */
    -webkit-box-orient: vertical; /* 垂直排列 */
    word-break: break-all;
  }
  /* .title,.content{
    text-overflow: ellipsis;
    overflow: hidden;
  } */
  .content{
    color: #828282;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    
  }
  .searchtil{
    font-size: 16px;
    text-align: center;
    line-height: 46px;
  }
  .searchitem{
    border-bottom: 4px solid #F2F2F2;
  }
  .searchview .title view{
    display: inline;
  }
  .highLightKeywords{
    display: inline;
    color: rgb(212, 48, 48);
  }
  .date{
    color: #828282;
    font-size: 14px;
  }
  .btm{
    color: #828282;
    font-size: 14px;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
  }
  .nodata{
    text-align: center;
    line-height: 52px;
    color: #e5e5e5;
    display: block;
    font-size: 14px;
  }
  .handle{
    font-size: 14px;
    color: #F54645;
  }
  .handles{
    color: #597BEB;
  }
  .content view{
    color: blue;
  }
</style>
