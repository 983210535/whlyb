<template>
  <div class="main">
    <div class="topImg"><img src="../../../static/images/mine_top.png" alt=""></div>
    <scroll-view
      scroll-y
      style="height: 100%;"
      bindscrolltoupper="upper"  
      bindscrolltolower="lower"
      bindscroll="scroll"
    >
    <div class="xqbox">
      <van-collapse :value="activeNames" @change="onChange">
        <van-collapse-item title="我如何登录留言板？" name="1">
          点击页面左上方“点我留言”按钮，确认“微信授权登录”，允许微信绑定手机号码，即可完成登录。
        </van-collapse-item>
        <van-collapse-item title="如何发表您的留言？" name="2">
          填写留言标题，正文等相关信息，点击“提交留言”即可。
        </van-collapse-item>
        <!-- <van-collapse-item title="如何编辑自己的留言？" name="2">
          《武汉市城市留言板》目前未开通用户对留言内容进行二次编辑功能。
        </van-collapse-item> -->
        <van-collapse-item title="如何删除自己的留言？" name="3">
          如留言尚未回复，留言用户可联系留言板客服QQ：2410431154，提交所需的证明后给予撤诉。
        </van-collapse-item>
        <van-collapse-item title="我如何对官方给我的回复发表评价" name="4">
          留言办理单位对留言做出回复后，留言用户登录后可以点击留言正文后“点击评价”按钮，并选择满意度。确认无误后，点击“提交”即可。
        </van-collapse-item>
        <van-collapse-item title="为什么我的留言没有显示" name="5">
          根据《武汉城市留言板管理条例》，对适当的留言选择公开。注册用户可登录后通过“我的留言”查看留言处理进展。
        </van-collapse-item>
        <van-collapse-item title="如何使用查询" name="6">
          在首页搜索框，输入查询的关键字，就可以检索到留言板中的相关留言。
        </van-collapse-item>
        <van-collapse-item title="我如何编辑自己的留言" name="7">
          《武汉城市留言板》目前未开通用户对留言内容进行二次编辑功能。留言用户如需补充或修改留言要素，可在留言未回复前，联系留言板客服QQ：2410431154申请修改。
        </van-collapse-item>
        <!-- <van-collapse-item title="如何联系管理员？" name="6">
          您可联系我们的在线客服QQ：2410431154。
        </van-collapse-item> -->
      </van-collapse>
    </div>
    </scroll-view>
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
    onChange(e) {
      // tab切换
      this.activeNames=e.mp.detail
    }
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
</style>
