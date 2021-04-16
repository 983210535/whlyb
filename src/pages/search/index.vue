<template>
  <div class="main">
    <van-search
      v-model="value"
      placeholder="请输入关键词或查询码进行查询"
      use-action-slot
      @change="onSearch"
      custom-class="key"
      field-class="keyInput"
      background="#fff"
      focus
    >
    </van-search>

    
    <div class="xbox" v-if="lsss">
      <div class="clear">
        <span>历史搜索</span>
        <span @click="clear">清空</span>
      </div>
      <div class="box">
        <span class="search" v-for="(item,index) in history" :key="index" @click="goto(item)">
        {{ item }}
      </span>
      </div>
    </div>

    <div  v-if="isSearch">
      <searchView :old="value"></searchView>
      <div class="nodata" v-show="nodatashow">无更多数据</div>
    </div>
  </div>
</template>

<script>
import searchView from '../../components/searchview/index'
export default {
  data () {
    return {
      value: '',
      isSearch: false,
      pageNum: 1,
      pageSize: 10,
      nodatashow: false,
      lsss: false,
      history: []
      // history: [
      //   "qwe","asdasdas","asdasczx","asdasdasd","asdasdas","qwerczxcx","1231dasda","weqwesv"
      // ]
    }
  },
  computed: {
    // history: function(){
    //   return wx.getStorageSync("search")
    // },
    // hisLength(){
    //   return wx.getStorageSync("search")
    // },
    // searchData(){
    //   return this.$store.getters.searchdata
    // }
  },
  onLoad(){
    this.value = ''
    this.$store.dispatch('setSearchData',[])

    this.isSearch = false
    this.pageSize = 10

    // this.searchfn()

    // console.log(this.hisLength);
    // console.log(this.searchData);
  },
  onShow(){
    this.history = wx.getStorageSync("search")
    console.log(this.history);
    if(this.history.length > 0 && this.value == ''){
      this.lsss = true
    }else{
      this.lsss = false
    }
    // if(this.value !== ""){
    //   this.searchfn()
    // }else{
    //   this.isSearch = false
    // }
  },
  components: {
    searchView
  },
  // onPullDownRefresh: function(){
  //   // 下拉刷新
  //     this.pageSize=5
  //     this.pageNum=1
  //     this.listData=[]
  //     this.searchfn()
    
  // },
  onReachBottom(){
    // 停止下拉刷新
    wx.stopPullDownRefresh()    
      // 搜索状态
    this.pageSize=this.pageSize+10
    if((this.pageSize-10)>this.total){
      this.nodatashow=true
    }else{
      this.nodatashow=false
      this.searchfn(this.value)
    }
  },

  methods: {
    clear(){
      wx.removeStorageSync("search")
      // this.history = wx.getStorageSync("search")
      this.lsss = false
    },
    goto(e){
      console.log(e);
      var index = wx.getStorageSync("search").indexOf(e)
      // if(index == -1){
      //   wx.getStorageSync("search").unshift(e)
      // }else 
      if(index >0 ){
        var arr = wx.getStorageSync("search")
        arr.splice(index,1)
        arr.unshift(e)
        wx.setStorageSync("search",arr)
        this.history = wx.getStorageSync("search")
        console.log(this.history);
      }
      this.value = e
      this.isSearch = true
      this.searchfn()
    },
    onSearch(e){
      // 搜索关键词改变触发
      console.log(e);
      this.value=e.mp.detail
      if(this.value!=''){
        this.lsss = false
        this.isSearch=true
        this.searchfn()
      }else{
        // this.$store.dispatch('setSearchData',[])
        this.isSearch = false
        if(this.history.length > 0){
          this.lsss = true
        }
        this.pageSize = 10

        // this.history = wx.getStorageSync("search")
      }
    },
    searchfn(){
      this.lsss = false
      // 搜索
      let data = {
        pageNum:this.pageNum,
        pageSize:this.pageSize
      }
      //纯数字就查询码查询，否则就关键字
      if(isNaN(this.value)){
        data.keywords = this.value
      }else{
        data.queryCode = this.value
      }
      this.$https.request({
        url:this.$interfaces.search,
        method:'post',
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        data
      })
      .then(res=>{
        console.log(res);
        // this.lsss = false
        this.total=res.data.rows.length
        this.$store.dispatch('setSearchData',res.data.rows)
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
    /* overflow: hidden; */
    color: #3D3D3D;
  }
  .search{
    display: inline-block;
    line-height: 25px;
    background: #F7F7F7;
    color: #3D3D3D;
    font-size: 12px;
    border-radius: 14px;
    padding: 0 16px;
    margin-right: 12px;
  }
  .clear{
    display: flex;
    justify-content: space-between;
    margin: 16px 0 12px;
  }
  .clear span:nth-child(1){
    font-size: 14px;
    color: #252525;
  }
  .clear span:nth-child(2){
    font-size: 12px;
    color: #9F9F9F;
  }
  .xbox{
    padding: 0 16px;
  }
  .box{
    height: 62px;
    overflow: hidden;
  }
  .nodata{
    text-align: center;
    margin-top: 8px;
  }
</style>

