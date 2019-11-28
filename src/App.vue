<template>
  <div id="app">
    <router-view />

    <van-tabbar v-model="active" v-show="display" style="max-width:640px">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="label" to="/brand">品牌</van-tabbar-item>
      <van-tabbar-item icon="bars" to="select">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="shopping"
        >购物袋</van-tabbar-item
      >
      <van-tabbar-item icon="manager" to="my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import "vant/lib/icon/local.css";
export default {
  data() {
    return {
      active: 0,
      display: false
    };
  },
  created() {
    if (localStorage.one) {
      this.$router.push("/gg");
    } else {
      localStorage.one = true;
    }
  },
  watch: {
    "$route.path": function(newvalule) {
      switch (newvalule) {
        case "/home":
          this.active = 0;
          // console.log("0")
          break;
        case "/brand":
          this.active = 1;
          break;
        case "/select":
          this.active = 2;
          break;
        case "/shopping":
          this.active = 3;
          break;
        case "/my":
          this.active = 4;
          break;
      }

      // console.log(rankingLIst)
      if (
        newvalule == "/" ||
        newvalule == "/gg" ||
        newvalule == "/buying" ||
        newvalule == "/filght" ||
        newvalule == "/record" ||
        newvalule == "/lianxi" ||
        newvalule == "/helpContent" ||
        newvalule == "/wenti" ||
        newvalule == "/dingdan" ||
        newvalule == "/youhui" ||
        newvalule == "/rankingLIst" ||
        newvalule == "/collect"
      ) {
        this.display = false;
      } else {
        this.display = true;
      }
    }
  }
};
</script>

<style lang="less">
html,
body {
  padding: 0;
  min-width: 320px;
  max-width: 640px;
  margin: 0;
  // overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  min-width: 320px;
  max-width: 640px;
  padding-bottom: 3.125rem;
}
</style>
