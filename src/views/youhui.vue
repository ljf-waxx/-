<template>
  <div>
    <van-nav-bar
      title="我的优惠劵"
      left-text="返回"
      left-arrow
      @click-left="go"
    ></van-nav-bar>

    <van-tabs v-model="active">
      <van-tab title="可用优惠劵">
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
        />
        <van-popup v-model="showList" position="bottom">
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
      </van-tab>
      <van-tab title="已用优惠卷">
          <div class="box-content" style="margin-top:50px;">
            <img src="../assets/img/youhui.png" alt="" width="100%">
            <h4 style="margin:10px 0px; text-align:center;color:#666;"> 暂无优惠卷</h4>
          </div>
      </van-tab>
      <van-tab title="过期优惠劵">
          <div class="box-content" style="margin-top:50px;">
            <img src="../assets/img/youhui.png" alt="" width="100%">
            <h4 style="margin:10px 0px; text-align:center;color:#666;"> 暂无优惠卷</h4>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  data() {
    return {
      active: 0,
      showList: false,
      chosenCoupon: -1,
      emptyImage: "https://img.yzcdn.cn/vant/coupon-empty.png",
      showExchangeBar: true,
      exchangeMinLength: 6,
      disabledCoupons: [coupon],
      coupons: [
        {
          id: "1",
          name: "美妆体验区",
          available: 1,
          condition: "无使用门槛\n最多优惠120元",
          reason: "",
          value: 2000,
          startAt: 1489100000,
          endAt: 1514592000,
          valueDesc: "20",
          unitDesc: "元"
        }
      ]
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      console.log(code);
      this.coupons.push(coupon);
    }
  }
};
</script>

<style lang="scss" scoped></style>
