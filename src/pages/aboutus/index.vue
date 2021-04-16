<template>
  <div class="main">
    <div class="topImg"><img src="../../../static/images/mine_top.png" alt=""></div>
    <div class="xqbox">
      <div class="logoimg">
        <img src="../../../static/images_pro/header.png" alt="">
      </div>
      <div class="desc">
        长江网武汉城市留言板，是武汉市网上群众工作部官方互联网平台，由中央网信办批准的全国重点新闻网站长江网（www.cjn.cn）负责运营。投诉、建议、求助、咨询、点赞等，这里连通武汉各级党委政府，您留言，马上办！
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeNames: ['1']
    }
  },

  components: {
    
  },

  methods: {
    
  },
  onLoad(option){
    
  },
  created () {
    
  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
  }
  .xqbox{
    margin: 15px;
    box-shadow: 0 0 10px 0 #e5e5e5;
    border-radius: 10px;
    padding: 15px;
    position: relative;
    background: rgba(255, 255, 255, 1);
  }
  .topImg{
    width: 100%;
    position: absolute;
    z-index: 0;
  }
  .topImg img{
    width: 100%;
  }
  .logoimg{
    width: 279px;
    height: 114px;
    margin: 20px auto;
    overflow: hidden;
  }
  .logoimg img{
    width: 70%;
    height: 70%;
    display: block;
    margin: 30px auto 10px;
  }
  .desc{
    font-size: 14px;
    color: #666;
    line-height: 24px;
    text-indent: 2em;
  }
</style>
