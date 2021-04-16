<template>
  <div class="main">
    <div class="box">
      <div class="title" v-html="data.subject">
        <!-- {{ data.subject }} -->
        <!-- <wxParse :content="data.subject"></wxParse> -->
      </div>
      <div class="author">
        <p>
          {{ data.nickName }}
        </p>
        <p>
          {{ data.dateline_txt }}
        </p>
        <!-- <img src='../../../static/images_pro/zf.png'> -->
      </div>
      <div class="content" v-html="data.content">
        <!-- <wxParse :content="data.content"></wxParse> -->
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate , formatTime} from '../../../static/js/date.js'
// import wxParse from 'mpvue-wxparse'
export default {
  data () {
    return {
      tid: '',
      data: {}
    }
  },
  computed: {
    massData(){
      return this.$store.state.mass
    }
  },
  components: {
    // wxParse
  },
  onLoad(e){
    // console.log(this.$store.state.mass);
    console.log(e);
    this.tid = e.tid
    this.getData()
  },
  methods: {
    getData(){
      this.$https.request({
        // url: 'http://192.168.7.160:81/wcmapi/service/getDocumentById.xhtml',
        url: this.$interfaces.contentDetail,
        data: {
          tid: this.tid,
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        methods: 'post'
      })
      .then(res=>{
        console.log(res);
        // res.threadsObj.dateline = formatTime(new Date(res.threadsObj.dateline*1000))
        this.data = res.threadsObj
      })
      .catch(err=>{
        console.log("error");
      })
    },
  },
  created () {
    
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100%;
  /* color: #252525;
  font-size: 20px; */
}
.box{
  padding: 16px;
}
.title{
  color: #252525;
  font-size: 18px;
  font-weight: bold;
  /* line-height: 16px; */
}
.author{
  color: #828282;
  font-size: 14px;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  margin: 8px 0 24px;
}
.author p:nth-child(2){
  margin-top: 4px;
}
.author img{
  width: 26px;
  height: 26px;
}
.time{
  margin-left: 16px;
}
.content{
  overflow: hidden;
  color: #3D3D3D;
  font-size: 16px;
}


</style>
