<template>
  <div class="main">
    <van-tabs v-model="active" animated>
        <van-tab title='留言排行'>
            <div v-for="(item,index) in lylarr" :key="index" class="bang" :class="{bangHei:index<3?true:'',bangFir:index==0?true:''}">
              <template v-if="index == 0">
                <p class="rank">
                  <img src="../../../static/images_pro/first.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.message_num}}</span>

              </template>
              <template v-else-if="index == 1">
                <p class="rank">
                  <img src="../../../static/images_pro/second.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.message_num}}</span>
              </template>
              <template v-else-if="index == 2">
                <p class="rank">
                  <img src="../../../static/images_pro/third.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.message_num}}</span>
              </template>
              <template v-else>
                <p class="rank_t">
                  <span>{{index + 1}}</span>
                  {{item.name}}
                </p>
                <span>{{item.message_num}}</span>
              </template>
            </div> 
        </van-tab>
        <van-tab title='回复排行'>
            <div v-for="(item,index) in hflarr" :key="index" class="bang" :class="{bangHei:index<3?true:'',bangFir:index==0?true:''}">
              <template v-if="index == 0">
                <p class="rank">
                  <img src="../../../static/images_pro/first.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.answers_num}}</span>

              </template>
              <template v-else-if="index == 1">
                <p class="rank">
                  <img src="../../../static/images_pro/second.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.answers_num}}</span>
              </template>
              <template v-else-if="index == 2">
                <p class="rank">
                  <img src="../../../static/images_pro/third.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.answers_num}}</span>
              </template>
              <template v-else>
                <p class="rank_t">
                  <span>{{index + 1}}</span>
                  {{item.name}}
                </p>
                <span>{{item.answers_num}}</span>
              </template>
            </div>  
        </van-tab>
        <van-tab title='回复率排行'>
            <div v-for="(item,index) in hflvarr" :key="index" class="bang" :class="{bangHei:index<3?true:'',bangFir:index==0?true:''}">
              <template v-if="index == 0">
                <p class="rank">
                  <img src="../../../static/images_pro/first.png" alt="">
                  {{item.name}}
                </p>
                <span>{{ item.rates  }}</span>

              </template>
              <template v-else-if="index == 1">
                <p class="rank">
                  <img src="../../../static/images_pro/second.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.rates }}</span>
              </template>
              <template v-else-if="index == 2">
                <p class="rank">
                  <img src="../../../static/images_pro/third.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.rates }}</span>
              </template>
              <template v-else>
                <p class="rank_t">
                  <span>{{index + 1}}</span>
                  {{item.name}}
                </p>
                <span>{{item.rates }}</span>
              </template>
            </div>  
        </van-tab>
        <van-tab title='满意度排行'>
            <div v-for="(item,index) in mylvarr" :key="index" class="bang" :class="{bangHei:index<3?true:'',bangFir:index==0?true:''}">
              <template v-if="index == 0">
                <p class="rank">
                  <img src="../../../static/images_pro/first.png" alt="">
                  {{item.name}}
                </p>
                <span>{{ item.reates  }}</span>

              </template>
              <template v-else-if="index == 1">
                <p class="rank">
                  <img src="../../../static/images_pro/second.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.reates }}</span>
              </template>
              <template v-else-if="index == 2">
                <p class="rank">
                  <img src="../../../static/images_pro/third.png" alt="">
                  {{item.name}}
                </p>
                <span>{{item.reates }}</span>
              </template>
              <template v-else>
                <p class="rank_t">
                  <span>{{index + 1}}</span>
                  {{item.name}}
                </p>
                <span>{{item.reates }}</span>
              </template>
            </div>  
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lylarr: [],
      hflarr:[],
      hflvarr:[],
      mylvarr:[]
    }
  },
  components: {
    
  },
  onLoad(option){
    this.mylvarr = this.$store.state.mylvarr
    // this.mylv()
    this.$https.request({
      url:this.$interfaces.fivefl,
      data:{
        type:1
      },
      header:{
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      method:'post'
    })
    .then(res=>{
      // var arr = res.forumList.sort((a,b)=>{
      //   var val1 = a.threadsNum
      //   var val2 = b.threadsNum
      //   return val2 - val1
      // }).slice(0,10)
      // console.log(res);
      console.log(res);
      this.lylarr = res.phb.lylph
      this.hflarr = res.phb.hflph
      this.hflvarr = res.phb.hflvph
      // this.myd = res.phb.lylph
      // console.log(res.forumList)
      // var arr = []
      // console.log(arr);
      // res.forumList.forEach(function(i,index){
      //     if(i.fup == 1){
      //     console.log(index+':'+i.name);
      //       i.percent = i.answersNum/i.threadsNum
      //       arr.push(i)
      //     }
      // })
      // console.log(arr);
      // var arr2 = arr.sort(function(obj1,obj2){
      //   var val1 = obj1.threadsNum
      //   var val2 = obj2.threadsNum
      //   return val2 - val1
      // }).slice(0,10)
      // console.log(arr2);
      // this.bang = arr2

      // var arr3 = arr.sort((obj1,obj2)=>{
      //   var val1 = obj1.percent
      //   var val2 = obj2.percent
      //   return val2 - val1
      // }).slice(0,10)

      // this.percent = arr3.map((i)=>{
      //   i.percent = parseInt(i.percent*100)+"%"
      //   return i
      // })

      
    })
    .catch(err=>{

    })
  },
  methods: {
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
        this.mylvarr = res
      })
      .catch(err=>{

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
}
.bang{
  border-bottom: 1px solid #F2F2F2;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  height: 54px;
  color: #3D3D3D;
  text-align: center;
}
.bangHei{
  height: 64px;
  font-weight: bold;
  font-size: 18px;
  color: #252525;
}
.bangHei span{
  color: #F54645;
}
.rank{
  display: flex;
  align-items: center;
}
.rank img{
  width: 32px;
  height: 32px;
  padding-right: 16px;
}  
.rank_t{
  text-align: center;
  display: flex;
  /* justify-content: space-between; */
}
.rank_t span{
  /* padding: 0 26px 0 12px; */
  display: inline-block;
  width: 32px;
  height: 32px;
  padding-right: 16px;
}
.bangFir{
  margin-top: 16px;
}
</style>
