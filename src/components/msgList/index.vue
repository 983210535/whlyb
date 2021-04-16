<template>
  <div class="main">
    <div v-for="(item,index) in arr" :key="index"  @click="details(item.queryCode)" class="msg" >
    <!-- <div class="msg"> -->
      <div class="title_s">
        <span class="title" v-html=" item.subject">
          <!-- <wxParse :content='item.subject'></wxParse> -->
          <!-- {{ removeHtml(item.subject) }} -->
          <!-- {{ item.subject }} -->
          <!-- <i v-html="item.subject"></i> -->
          <!-- {{ subject }} -->
        </span>
        <span class="handle handles" v-if="item.handleState">已回复</span>
        <span class="handle" v-else>办理中</span>
      </div>
      <p class="content"  v-html="item.content">
        <!-- {{ removeHtml(item.content) }} -->
        <!-- <wxParse :content='item.content'></wxParse> -->
        <!-- {{ content }} -->
        <!-- {{ item.content }} -->
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
    item:Object,
    arr: Array
  },
  data(){
    return{
      
    }
  },
  computed: {
    subject(){
      // return this.item.subject =  !this.item.subject ? '' : String(this.item.subject).replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "")
    },
    content(){
      // return this.item.content =  !this.item.content ? '' : String(this.item.content).replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "")
      
    }
  },
  components: {
    // wxParse
  },
  mounted(){
  },
  methods: {
    removeHtml(value){
      var value1 =  !value ? value : String(value).replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "")
      return 432
    },
    details(e){
      console.log(e);
      this.$store.dispatch("setTid",e)
      wx.navigateTo({ url: `../lyDetails/main` });
    },
  },
  onLoad(){
    
  },
  onShow(){
    console.log('onshow');
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
  margin: 0 16px;
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
