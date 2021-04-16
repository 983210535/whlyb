<template>
  <div>
    <!-- <map name="" :latitude='latitude' :longitude='longitude'>

    </map> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      latitude: '',
      longitude: ''
    }
  },
  onLoad(){
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
      }
    })

  }
}
</script>

<style scoped>
  map{
    width: 100%;
    height: 549px;
  }
</style>