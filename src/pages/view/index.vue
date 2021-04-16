<template>
  <div class="main">
    <div class="nav">
      <img src="../../../static/images_pro/banner.png" alt="">
    </div>
    
    <div class="message">
        <div class="clickMe" @click="goLm" v-if="token">点我留言</div>
        <button class="clickMe"  v-else open-type='getUserInfo' @getuserinfo='getUserInfo'>点我留言</button>

        <div class="good">
          <p>投诉 | 意见 | 建议 | 咨询 | 求助 | 点赞</p>
          <div class="search" @click="toSearch">
            <input type="text" placeholder="可输入关键字或查询码搜索" disabled>
            <div class="img">
              <img src="../../../static/images_pro/search.png" alt="">
            </div>
          </div>
        </div>
     
    </div>
    <div class="main">

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


    <!-- <van-tabs @change="changeTil" animated sticky swipe-threshold=3  color="#F54645" title-inactive-color="#F54645" > 
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
    </van-tabs> -->
  </div>
</template>

<script>
// import viewList from '../../components/view/index'
// import blockView from '../../components/block/index.vue'
// import searchView from '../../components/searchview/index.vue'
// import dqList from '../../components/index/index'


export default {
  
  data () {
    return {
      dataArr: [],
      pageNo: 1
    }
  },
  computed: {
    token(){
      return this.$store.state.token
    }
  },
  components: {
    // viewList,blockView,searchView,dqList
  },
  mounted(){
    
  },
  onLoad(option){
    // console.log(1111 + this.$store.state.userId);
    // console.log(1111 + this.$store.state.token);
    this.mylv()

    this.getData()
    // this.type = 1
    // 获取用户信息、token、留言位置
    this.user=this.$store.getters.user
    this.token=this.$store.getters.token

    if(!wx.getStorageSync("search")){
      console.log('kongde');
      wx.setStorageSync("search",[])
    }else{
      return
    }
    // this.getUserId()

  },
  onShow(){
    // this.getData()
    // 最新留言
  },
  onPullDownRefresh: function(){
    // 下拉刷新
    this.pageNo = 1
    this.dataArr = []
    this.getData()
  },
  onReachBottom(){
    this.pageNo = this.pageNo +1
    this.getData()
  },
  methods: {
    getUserInfo(e){
      console.log(e);
      if(e.mp.detail.userInfo){
        this.$store.dispatch("setUser",e.mp.detail.userInfo)
        wx.setStorageSync('user', e.mp.detail.userInfo);
        if(wx.getStorageSync("token") && wx.getStorageSync("isAuthenticated")){
          wx.switchTab({
            url: '../view/main'
          })
        }else{
          this.$store.dispatch("setIsAuthenticated",true)
          wx.setStorageSync('isAuthenticated', true);

          this.toLogin()

        }
      }
    },
    toLogin(){
      wx.login({
        success: res=>{
          console.log(res.code);
          this.getOpenid(res.code)
        }
      })
    },
    getOpenid(code){
      var that = this
      this.$https.request({
        url: that.$interfaces.getOpenid,
        // url: "http://192.168.7.61:84/messageboard/miniprogramuserinterface/login",
        data: {
          code : code
        },
        method: 'post'
      })
      .then(res=>{
        console.log(res);
        that.$store.dispatch("setOpenId",res.openid)
        if(res.code == -101){
          wx.navigateTo({url: '../register/main'})
        }
      })
      .catch(err=>{
        console.log("error");
      })
    },
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
          chnlId: 15886,
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
    },
    // getUserId(){
    //   console.log(this.$store.state.userId == '');
    //   if(this.$store.state.userId == ''){
    //     console.log("userId is not ,but now is add ");
    //     this.$store.dispatch("setUserId",wx.getStorageSync("userId"))
    //   }
    // },
    mylv(){
      this.$https.request({
        // url:'http://192.168.7.61:84/messageboard/internetUserInterface/fivemyfl',
        url:this.$interfaces.satisfaction,
        data:{
          type:1
        },
        method:'get'
      })
      .then(res=>{
        console.log(res);
        this.$store.dispatch("setMylv",res)
      })
      .catch(err=>{

      })
    },
    toSearch(){
      wx.navigateTo({url: `../search/main`})
    },
    goPeople(){
      wx.navigateTo({ url: `../people/main` });
    },
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
    goLm(){
      if(!this.$store.state.token){
            wx.showModal({
              title: '提示',
              content: '登陆后才能留言哦~',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {  
                  console.log('点击确认回调')
                } else {   
                  console.log('点击取消回调')
                }
              }
            })
          }else{
            wx.navigateTo({ url: `../message/main` });
          }
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
    setItem(e){
      
    },
  },
  onSearch(e){
    // 搜索关键词改变触发
    this.value=e.mp.detail
    if(this.value!=''){
      this.isSearch=true
      this.searchfn(this.value)
    }else{
      this.isSearch=false
      this.pageSize=10
      if(this.active==0){
        this.getnewleavemessage()
      }else if(this.active==1){
        this.getAreaLeaveMessage()
      }
    }
  },
  searchfn(e){
    // 搜索
    this.$https.request({
      url:this.$interfaces.search,
      method:'post',
      header:{
        'content-type': 'application/x-www-form-urlencoded',
        JwtAuthorization:this.$store.state.token
      },
      data:{
        pageNum:this.pageNum,
        pageSize:this.pageSize,
        tid:'',
        fid:'',
        startTime:'',
        endTime:'',
        nickName:'',
        keywords:e
      }
    })
    .then(res=>{
      this.total=res.data.rows.length
      this.$store.dispatch('setSearchData',res.data.rows)
    })
    .catch(err=>{
      console.log(err)
    })
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
    padding: 0;
    margin: 0;
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
  .main{
  width: 100%;
  height: 100%;
  color: #828282;
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
  /* justify-content: space-between; */
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
