<template>
  <div style="padding-top:44px">
    <van-nav-bar
      title="结算中心"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>
    <!-- {{cityList[id].tel}} -->
    
    <van-panel title="订单信息" desc="请确认订单信息" style="    background: #dcdcdc;">
    <div class="addUser">
      <h3>收货人:<span style="color:skybule;">{{cityList[id].name}}</span></h3>
       <h3>手机号码:<span style="color:skybule;">{{cityList[id].tel}}</span></h3>
      <h3 >离岛方式: <span style="color:skybule;">{{tip}}</span></h3>
    </div>
</van-panel>
    <van-cell title="修改收货人信息" is-link @click="addUser" style="margin-top:20px;" />
    <van-cell title="选择离岛方式" is-link style="margin-top:20px;" />
    <van-row>
      <van-col span="8" style="text-align:center;padding:10px 16px;" @click="tip='轮渡'">
        <img src="../assets/img/lunchuan.png" width="60%" alt />
        <br />
        <span class="bur" style="font-size:16px;line-height:20px;">
          选择乘坐
          <br />轮渡离岛
        </span>
      </van-col>
      <van-col span="8" style="text-align:center;padding:10px 16px;" @click="tip='火车'">
        <img src="../assets/img/huoche.png" width="60%" alt />
        <br />
        <span class="bur" style="font-size:16px;line-height:20px;">
          选择乘坐
          <br />火车离岛
        </span>
      </van-col>
      <van-col span="8" style="text-align:center;padding:10px 16px;" @click="tip='飞机'">
        <img src="../assets/img/feiji.png" width="60%" alt />
        <br />
        <span class="bur" style="font-size:16px;line-height:20px;">
          选择乘坐
          <br />飞机离岛
        </span>
      </van-col>
    </van-row>
    <!-- {{id}}
    {{cityList}}
    {{money}}-->
    <van-submit-bar :price="money" button-text="结算 " @submit="onSubmit">
      <span slot="tip">
        请确认收货人为:
        <span
          style="color:#333;"
        >&nbsp;&nbsp;{{this.$store.state.city.cityList[$store.state.city.id].name}}</span>,
        <span style="color:#00b5ffcf;" @click="goCity">点击确认</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import { Notify } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tip: "轮船"
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    addUser() {
      this.$router.push("/city");
    },
    onSubmit() {
      Notify({ type: "success", message: `结账成功,共消费${this.money}` });
      this.$router.go(-1);
      this.$store.commit("quanling", this.ispushList);
      this.$store.commit("reset",);
    },
    goCity() {
      this.$router.push("/city");
    }
  },
  computed: {
    ...mapState({
      id: state => state.city.id,
      cityList: state => state.city.cityList,
      money: state => state.shoppingCar.money,
      ispushList: state => state.shoppingCar.ispushList
    })
  }
};
</script>

<style lang="less" scoped>
.addUser {
  width: 100%;
  height: 120px;
  // text-align: center;
  box-sizing: border-box;
  // padding: 6px 0px ;
    font-size: 14px;

  
  span {
    // color: #ddd;
    color: #373c3d;
  }
  .van-col span{
    color: red;
  }
}
h3 {
  padding-left: 3.75rem;
  border-bottom: 1px solid #efe7e7;
  background-color: #fff;

    line-height: 40px;
    // text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: #666;
  }
</style>
