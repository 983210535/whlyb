<template>
  <div class="main">
    <div class="box">
      <div class="title">
        {{ data.DOCTITLE }}
      </div>
      <div class="author">
        <p>
          {{ data.SOURCENAME }}
          <span class="time">{{ data.DOCRELTIME }}</span>
        </p>
        <div class="share">
          <button open-type="share" class="zf" ></button>
          <img src='../../../static/images_pro/zf.png' class="fx">
        </div>
      </div>
      <div class="content" >
        <wxParse v-if="data.DOCHTMLCON" :content="data.DOCHTMLCON"></wxParse>
      </div>
      <!-- <div v-else>
        <a :href="data.DOCPUBURL">点击查看</a>
        <web-view :src="data.DOCPUBURL"></web-view>
      </div> -->
    </div>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
export default {
  data () {
    return {
      docId: '',
      data: {}
    }
  },
  components: {
    wxParse
  },
  onLoad(e){
    console.log(e);
    this.data = {}
    this.docId = e.docId
    this.getData()
  },
  methods: {
    newDetail(e){
      console.log(e);
    },
    getData(){
      this.$https.request({
        // url: 'http://192.168.7.160:81/wcmapi/service/getDocumentById.xhtml',
        url: 'https://news.cjn.cn/wcmapi/service/getDocumentById.xhtml',
        data: {
          model: 1,
          docId: this.docId
        },
        header: {
          'content-type': 'application/x-www-form-urlended'
        },
        methosd: 'post'
      })
      .then(res=>{
        console.log(res);
        console.log(res.data.DOCHTMLCON);
        this.data = res.data
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
  color: #3D3D3D;
  font-size: 16px;
}
.box{
  padding: 16px;
}
.title{
  color: #252525;
  font-size: 20px;
  font-weight: bold;
}
.author{
  color: #9F9F9F;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 16px;
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
}
.share{
  width: 30px;
  text-align: center;
  font-size: 10px;
  position: relative;
}
.zf{
  width: 30px;
  height: 30px;
  background: transparent;
}
.zf::after{
  border: none;
}
.fx{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}



</style>


