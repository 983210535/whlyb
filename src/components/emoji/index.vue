<template>
  <div class="ebox">
    <div v-for="(item, index) in list" :key="index" class="emoji">
      <div v-for="(imgSrc, index2) in item" :key="index2+1">
        <img :src="imgSrc" alt="" @click="addEmoji(index,index2)">
      </div>
    </div>
  </div>
</template>

<script>
import Emotion from '../Emotion/index'
export default {
  props: {
    height: {
      type: Number,
      default: 200,
    }
  },
  data () {
    return {
      list: [
        ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴'],
        ['睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过'],
        ['酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢'],
        ['饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂'],
        ['疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见'],
        ['擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠'],
        ['鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀'],
        ['西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰',],
        ['凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀'],
        ['足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强'],
        ['弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你'],
        ['NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈'],
        ['磕头', '回头', '跳绳', '挥手', '激动', '街舞', '左太极', '右太极'],
      ],
      emoji: [
        ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴'],
        ['睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过'],
        ['酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢'],
        ['饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂'],
        ['疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见'],
        ['擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠'],
        ['鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀'],
        ['西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰',],
        ['凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀'],
        ['足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强'],
        ['弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你'],
        ['NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈'],
        ['磕头', '回头', '跳绳', '挥手', '激动', '街舞', '左太极', '右太极'],
      ],
    }
  },
  methods: {
    clickHandler (i) {
      var emotion = `#${i};`
      this.$emit('emotion', emotion)
    },
    addEmoji(index, index2){
      console.log(this.emoji[index][index2]);
      var emoji = this.emoji[index][index2]
      this.$emit('emoji', `#${emoji};`)
    }
  },
  components: {
    Emotion
  },
  created(){
    this.list.forEach((ele, index) => {
      ele.forEach((ele2, index2) => {
        if(index < 1){
          this.list[index][index2] = `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index + index2}.gif`
        }else{
          this.list[index][index2] = `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index*8 + index2}.gif`
        }
      })
    });
  }
}
</script>
<style scoped>
  .ebox{
    border: 1px solid #ddd;
    background: #fff;
  }
  .emoji img{
    width: 24px;
    height: 24px;
    padding: 6px;
  }
  .emoji{
    display: flex;
    justify-content: space-between;
  }
</style>