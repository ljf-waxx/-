<template>
  <div style="padding-top:44px">
    <van-nav-bar
      :title="$router.history.current.name"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>

    <!-- <div style="margin-top:100px">
      <img
        src="https://m.cdfgsanya.com/wap/resources/images/empty-warning/order@3x.8758d77b.png"
        width="100%"
        alt
      />
      <p style="text-align: center;color:#666;">暂无订单</p>
    </div>-->
    <div>
      <van-collapse v-model="activeNames" accordion>
        <!-- <van-collapse-item title="标题1" name="1">内容</van-collapse-item> -->
        <van-collapse-item v-for="(value,i) in title" :key="i" :title="value.title" :name="i">{{value.tip}}</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
              activeNames: ['1'],
              title:[
                  {title:"Q：购买时间有什么要求吗？",tip:"🙃🙃🙃🙃🙃"},
                  {title:"Q：购买时间有什么要求吗？",tip:"🙃🙃🙃🙃🙃"},
                  {title:"Q：购买时间有什么要求吗？",tip:"🙃🙃🙃🙃🙃"},
                  {title:"Q：购买时间有什么要求吗？",tip:"🙃🙃🙃🙃🙃"},
                  {title:"Q：购买时间有什么要求吗？",tip:"🙃🙃🙃🙃🙃"},
                  {title:"Q：购买时间有什么要求吗？",tip:"🙃🙃🙃🙃🙃"},
                  {title:"Q：购买时间有什么要求吗？",tip:"🙃🙃🙃🙃🙃"},
                  {title:"Q：购买时间有什么要求吗？",tip:"🙃🙃🙃🙃🙃"}
              ]
        }
    },
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
