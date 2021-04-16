<template>
  <div class="main">
    <div v-for="(item,index) in arr" :key="index"  @click="details(item)" class="msg" :class="{bangHei:index<3?true:'',bangFir:index==0?true:''}">
      <p class="title_s">
        <span class="title" v-html=" item.subject">
          <!-- <wxParse :content='item.subject'></wxParse> -->
          <!-- {{ item.subject }} -->
        </span>
        <!-- <span class="handle handles" v-if="item.handleState">已回复</span>
        <span class="handle" v-else>办理中</span> -->
      </p>
      <p class="content" v-html=" item.content">
        <!-- {{ item.content }} -->
        <!-- <wxParse :content='item.content'></wxParse> -->
      </p>
      <p class="btm">
        <span>{{item.nickName}}</span>
        <span>{{ item.dateline }}</span>
      </p>
    </div> 
  </div>
</template>

<script>

// import wxParse from 'mpvue-wxparse'
export default {
  props:{
    arr:Array
  },
  data(){
    return{
      
    }
  },
  components: {
    // wxParse
  },
  mounted(){
  },
  methods: {
    details(e){
      console.log(e);

      this.$https.request({
          url:this.$interfaces.contentDetails,
          data:{
            tid:e.queryCode
          },
          header:{ 

            'content-type': 'application/x-www-form-urlencoded',
            JwtAuthorization:this.$store.state.token
          },
          method:'post'
        })
        .then(res=>{  
          if(res.code==0){
            this.$store.dispatch('setWdlyItem',res.threadsObj)
            wx.navigateTo({
              url:`../wdlyxq/main?zt=self&tid=${e.queryCode}`
            })
          }
        })
        .catch(err=>{
          console.log(err)
        })
    },
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
    background: #F2F2F2
  }
  .msg{
  /* height: 138px; */
  background: #fff;
  margin-bottom: 4px;;
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
  display: block;
  max-width: 270px;
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
.handle{
  font-size: 14px;
  color: #F54645;
}
.handles{
  color: #597BEB;
}

</style>
