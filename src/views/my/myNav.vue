<template>
  <div style="padding-top:44px">
    <van-nav-bar
      :title="$router.history.current.name"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>

    <div style="margin-top:100px">
      <img
        src="https://m.cdfgsanya.com/wap/resources/images/empty-warning/order@3x.8758d77b.png"
        width="100%"
        alt
      />
      <p style="text-align: center;color:#666;">暂无订单</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
