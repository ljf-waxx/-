<template>
  <div class="banner">
    <h3>广告时间:{{ num }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
      timer: null
    };
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(function() {
      _this.num--;
      if (_this.num <= 0) {
        _this.$router.push("/home");
      }
      // console.log(_this.num)
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 100%;
  min-width: 320px;
  max-width: 640px;
  position: fixed;
  top: 0;
  bottom: 0;
  background: url(../assets/img/gao.jpg) no-repeat center center;
  background-size: 100%;
}
h3 {
  margin: 15px;
  color: #fff;
  font-weight: 500;
}
</style>
