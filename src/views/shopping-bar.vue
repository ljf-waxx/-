<template>
  <div class="pad-bot" style="max-width:640px;">
    <div v-if="!ispush1">
      <van-nav-bar title="我的购物袋" heighe:2.5rem />
      <div class="br-bor"></div>
      <div class="warm-prompt ng-binding" ng-bind-html="ctrl.data.reminder[0]">
        温馨提示
        :三亚机场出发，至少于起飞前6小时完成购买；海口美兰、琼海博鳌机场、火车站出发，至少离岛前一天内完成购买，如有疑问，请致电400-699-6956。
      </div>
      <div class="box-bottom">
        <div class="tip">您的购物袋内还没有任何商品 ……</div>
        <span class="btn" @click="go">去逛逛</span>
      </div>
    </div>

    <div v-if="ispush1">
      <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="go" />

      <!-- <van-card
        v-for="(value,i) in ispushList"
        :key="i"
        :num="listData[value].num"
        :price="listData[value].price"
        :desc="listData[value].tip"
        title="商品名称"
        :thumb="listData[value].path"
      />-->

      <!-- {{listAllData[$route.query.index].bannerList[$route.query.list]}} -->

      <div v-for="(value, i) in ispushList" :key="i">
        <!-- {{value}}{{ispushList1[i]}} -->
        <van-card
          :num="listAllData[value].bannerList[ispushList1[i]].num"
          :price="listAllData[value].bannerList[ispushList1[i]].price"
          :desc="listAllData[value].bannerList[ispushList1[i]].tip"
          title="商品名称"
          :thumb="listAllData[value].bannerList[ispushList1[i]].path"
        >
          <div slot="footer">
            <van-button size="mini" @click="add1(value,ispushList1[i])">+</van-button>
            {{ listAllData[value].bannerList[ispushList1[i]].num }}
            <van-button size="mini" @click="jian(value,ispushList1[i])">-</van-button>

            <div style="margin-top:1rem;">
              <van-button
                round
                type="danger"
                size="mini"
                @click="redel(i,value,ispushList1[cityId])"
              >删除</van-button>
            </div>
          </div>
        </van-card>
      </div>
      <!-- {{$store.state.city.id}} -->
      <!-- {{money}} -->
      <van-popup v-model="show">{{price1}}</van-popup>
      <van-submit-bar :price="price1" button-text="结算 " @submit="onSubmit(ispushList)">
        <span slot="tip">
          请确认收货人为:
          <span
            style="color:#333;"
          >&nbsp;&nbsp;{{this.$store.state.city.cityList[$store.state.city.id].name}}</span>,
          <span style="color:#00b5ffcf;" @click="goCity">修改地址</span>
        </span>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { Notify } from "vant";
export default {
  data() {
    return {
      checked: 1,
      price: 1,
      display: this.ispush,
      dataList: [],
      money: this.price1,
      show: false
    };
  },
  methods: {
    go() {
      this.$router.push("/home");
    },
    go1() {
      this.$router.go(-1);
    },
    goCity() {
      this.$router.push("/city");
    },
    onSubmit() {
      //  this.show = true;
      this.$router.push("/checkOut");
      this.$store.commit("tijiao", this.price1);
      // this.$store.commit("quanling", arr);

      // this.display = this.ispush;
    },
    add1(index1, index2) {
      let arr = [index1, index2];
      this.$store.commit("add1", arr);
    },
    jian(index1, index2) {
      let arr = [index1, index2];
      this.$store.commit("jian", arr);
    },
    redel(i, value, id) {
      this.$store.commit("redel", i);
      let arr = [value, id];
      this.$store.commit("guiling", arr);
    }
  },
  created() {
    // console.log(this.ispush);
    // console.log(this.ispush)
  },
  computed: {
    ...mapState({
      listData: state => state.bannerLiner.list,
      ispush: state => state.shoppingCar.ispush,
      ispushList: state => state.shoppingCar.ispushList,
      ispushList1: state => state.shoppingCar.ispushList2,
      listAllData: state => state.bannerLiner.dataList
    }),
    price1: function() {
      var num = 0;
      // this.ispushList.forEach(value => {
      //    num += this.listAllData[value].bannerList[2].price * this.listAllData[value].bannerList[2].num * 100
      // });
      var _this = this;
      this.ispushList.forEach(function(value, i) {
        let index = _this.ispushList1[i];
        num +=
          _this.listAllData[value].bannerList[index].price *
          _this.listAllData[value].bannerList[index].num *
          100;
      });
      return num;
    },
    ispush1: function() {
      if (this.ispushList.length !== 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.pad-bot {
  min-width: 320px;
  max-width: 640px;
  width: 100%;
  padding-bottom: 5rem;
}
.van-nav-bar {
  height: 2.5rem;
}
.br-bor {
  width: 100%;
  height: 1rem;
  background-color: #f7f7f7;
}
.van-card {
  margin-top: 1rem;
}
.warm-prompt {
  box-sizing: border-box;
  padding: 1.225rem;
  color: #666;
  font-size: 12px;
  background: url(../assets/img/shopping-bg.png) no-repeat center center;
  background-size: 80%;
  position: fixed;
  top: 2.8rem;
  bottom: 0;
  height: auto;
}
.box-bottom {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 20%;
  > div {
    width: 100%;
  }
}
.btn {
  display: inline-block;
  height: 2.1875rem;
  line-height: 2.1875rem;
  color: #fff;
  background-color: #b81c22;
  width: 80%;
  margin-top: 10px;
  border-radius: 0.375rem;
}
.van-submit-bar {
  bottom: 50px;
}
</style>
