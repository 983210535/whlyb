<template>
  <div class="main">
    <div class="bg">
      <img src="../../../static/images/leave_bg.jpg" alt="">
    </div>
    <div class="top">请选择留言种类</div>
    <div class="leaveBox">
      <div class="inputBox">
        <van-cell-group>
          <van-field
            :value="lylx"
            required
            clearable
            label="留言类型"
            readonly
            placeholder="请选择"
            @click="lylxCheck"
          />

          <van-field
            :value="lyly"
            label="留言领域"
            readonly
            placeholder="请选择"
            @click="lylyCheck"
            required
          />

          <van-field
            :value="lywzText"
            label="留言位置"
            readonly
            placeholder="请选择"
            @click="lywzCheck"
            required
          />
        </van-cell-group>
        <button @click="switchToLeaveTab">下一步</button>
      </div>
    </div>
    
    <van-popup
      :show="lylxshow"
      position="bottom"
      overlay="true"
      bind:close="onClose"
    >
      <van-picker
        show-toolbar
        title="留言类型"
        :default-index="0"
        :columns="lylxcolumns"
        @cancel="lylxOnCancel"
        @confirm="lylxOnConfirm"
      />
    </van-popup>

    <van-popup
      :show="lylyshow"
      position="bottom"
      overlay="true"
      bind:close="onClose"
    >
      <van-picker
        show-toolbar
        title="留言领域"
        :default-index="0"
        :columns="lylycolumns"
        @cancel="lylyOnCancel"
        @confirm="lylyOnConfirm"
      />
    </van-popup>

    <van-popup
      :show="zzshow"
      position="bottom"
      overlay="true"
      bind:close="onClose"
    >
      <van-picker 
      show-toolbar
      title="留言位置"
      :columns="columns" 
      @change="onChange" 
      @cancel="onCancel"
      @confirm="onConfirm" />
    </van-popup>
    <!-- 提示组件 -->
    <van-notify id="custom-selector" />
  </div>
</template>

<script>
import Notify from '../../../static/vant/dist/notify/notify';
export default {
  data () {
    return {
      lylx:'',
      lyly:'',
      lylxId:'',
      lylyId:'',
      lylxshow:false,
      lylyshow:false,
      lylxcolumns: [],
      lylycolumns: [],
      citys:'',
      lywz:'',
      zzshow:false,
      lywzText:'',
      lywzId:'',
      columns: [
        {
          values: [],
          className: 'column1'
        },
        {
          values: [],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    }
  },
  components: {
    
  },
  onShow(){
    this.lylxId=''
    this.lylyId=''
    this.lywzId=''
    this.lywzText=''
    this.lylx=''
    this.lyly=''
    this.getlylx()
    this.getlyly()
    this.citys=this.$store.state.lywzdata
    var _this=this
    // 区域列表渲染
    Object.keys(_this.citys).forEach(function(key){
          _this.columns[0].values.push({
            text:key,
            value:key
          })

          _this.columns[1].values=_this.citys[_this.columns[0].values[0].text]
    })
    // _this.lywzText=_this.columns[1].values[0].text
    // _this.lywzId=_this.columns[1].values[0].id
    _this.$store.dispatch('setCurrentLywz',_this.columns[1].values[0])
    _this.lylxId=''
    _this.lylyId=''
    _this.lywzId=''
    _this.lywzText=''
    _this.lylx=''
    _this.lyly=''
  },
  onLoad(options){
    this.getlylx()
    this.getlyly()
    this.citys=this.$store.state.lywzdata
    var _this=this
    // 区域列表渲染
    Object.keys(_this.citys).forEach(function(key){
          _this.columns[0].values.push({
            text:key,
            value:key
          })

          _this.columns[1].values=_this.citys[_this.columns[0].values[0].text]
    })
    // _this.lywzText=_this.columns[1].values[0].text
    // _this.lywzId=_this.columns[1].values[0].id
    _this.$store.dispatch('setCurrentLywz',_this.columns[1].values[0])
    _this.lylxId=''
    _this.lylyId=''
    _this.lywzId=''
    _this.lywzText=''
    _this.lylx=''
    _this.lyly=''
  },
  methods: {
    lywzCheck(){
      // 选择留言位置
      this.zzshow=true
      for(var i=0;i<this.citys.length;i++){
        this.columns[0].values.push({text:this.citys[i].label,id:this.citys[i].value})
      }
      
    },
    onChange(event) {
      // 标题栏列change事件
      const { picker, value, index } = event.mp.detail;
      picker.setColumnValues(1, this.citys[value[0].text]);
    },
    onConfirm(event) {
      // 留言位置确认事件
      this.zzshow=false
      this.lywzText=event.mp.detail.value[1].text
      this.lywzId=event.mp.detail.value[1].id
      this.$store.dispatch('setCurrentLywz',event.mp.detail.value[1])
    },

    onCancel(event) {
      // 留言位置取消事件
      this.zzshow=false
    },
    getlylx(){
      // 获取留言类型
      this.$https.request({
        url:this.$interfaces.leavemessageType,
        data:{},
        method:'post',
        header:{
          'content-type': 'application/x-www-form-urlencoded',
            JwtAuthorization:this.$store.state.token
        }
      })
      .then(res=>{
        var _this=this
        res.forEach(item => {
          _this.lylxcolumns.push({
            text:item.label,
            value:item.value
          })
        })
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getlyly(){
      // 获取留言领域
      this.$https.request({
        url:this.$interfaces.leavemessageArea,
        data:{},
        method:'post',
        header:{
          'content-type': 'application/x-www-form-urlencoded',
            JwtAuthorization:this.$store.state.token
        }
      })
      .then(res=>{
        var _this=this
        // Object.keys(res).forEach(function(key){
        //   _this.lylycolumns.push({
        //     text:res[key],
        //     value:key
        //   })
        // })

        res.forEach(item => {
          _this.lylycolumns.push({
            text:item.label,
            value:item.value
          })
        })

      })
      .catch(err=>{
        console.log(err)
      })
    },
    lylxCheck(){
      // 留言类型遮罩层弹出
      this.lylxshow=true
    },
    lylxOnConfirm(e){
      // 留言类型确认
      this.lylx=e.mp.detail.value.text
      this.lylxId=e.mp.detail.value.value
      this.lylxshow=false
    },
    lylxOnCancel(){
      // 留言类型取消
      this.lylxshow=false
    },
    lylyCheck(){
      // 留言领域弹窗显示
      this.lylyshow=true
    },
    lylyOnConfirm(e){
      // 留言领域确认
      this.lyly=e.mp.detail.value.text
      this.lylyId=e.mp.detail.value.value
      this.lylyshow=false
    },
    lylyOnCancel(){
      // 留言领域取消
      this.lylyshow=false
    },
    switchToLeaveTab(){
      // tab切换
      if(this.lylxId!=''&&this.lylyId!=''&&this.lywzId!=''){
        this.$store.dispatch('setLylxId',this.lylxId)
        this.$store.dispatch('setLylyId',this.lylyId)
        this.$store.dispatch('setLywzId',this.lywzId)
        this.lylxId=''
        this.lylyId=''
        this.lywzId=''
        this.lywzText=''
        this.lylx=''
        this.lyly=''
        wx.navigateTo({
          url: '../leavetab/main'
        })
      }else{
        Notify({
          text: '请选择对应信息！',
          duration: 1000,
          selector: '#custom-selector',
          backgroundColor: '#f44'
        })
      }
      
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
    background: #fff;
    overflow: hidden;
    font-size: 14px;
  }
  .leaveBox{
    width: 80%;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #e5e5e5;
    padding: 15px 15px 30px;
    background: rgba(255, 255, 255, 0.7);
    position: relative;
    z-index: 2;
  }
  .top{
    width: 80%;
    margin: 80px auto 0;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    position: relative;
    z-index: 3;
  }
  button{
    width: 100%;
    background: #61a8f1;
    color: #fff;
    margin-top: 30px;
  }
  .bg{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
  .bg img{
    width: 100%;
    height: 100%;
  }
</style>
