<template>
  <div>
    <van-row class="wrapper-top">
      <van-col span="5" class="top-left">
        <!-- <img src="../assets/img/logo.png" alt=""> -->
      </van-col>
      <van-col span="19">
        <form action="/" class="search">
          <van-search
            v-model="value"
            placeholder="搜索：分类 品牌 系列 商品"
            show-action:true
            input-align:center
            background="#b81c22"
            @click="goSearch"
          />
        </form>
      </van-col>
      <!-- header end -->
    </van-row>
    <!-- swiper  -->
    <van-swipe :autoplay="3000" indicator-color="#4079ce" class="swiper">
      <van-swipe-item>
        <img src="../assets/img/banner1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner3.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner4.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- swiper end -->
    <van-notice-bar
      background="#333"
      color="#fff"
      text="三亚、海口、博鳌机场、海口轮渡、海口火车站提货"
      left-icon="volume-o"
    />

    <!-- 宫格 -->
    <van-grid :column-num="5">
      <van-grid-item
        icon="https://pic.cdfgsanya.com/assets/upload/img/03deae7c51a68e9272490b4e001034b2.png"
        text="排行榜"
        @click="$router.push('/rankingLIst')"
      />
      <van-grid-item icon="todo-list-o" text="我的订单" @click="$router.push('/dingdan')" />
      <van-grid-item icon="balance-pay" text="优惠劵" @click="$router.push('/youhui')" />
      <van-grid-item icon="after-sale" text="购物流程" @click="$router.push('/help')" />
      <van-grid-item icon="contact" text="常见问题" @click="$router.push('/wenti')" />
      <!-- <span class="iconfont  icon-6"></span> -->
    </van-grid>
    <!-- 宫格 end -->
    <!-- pic -->
    <van-row>
      <van-col span="12" style="padding-right:4px">
        <img src="../assets/img/pic1.jpg" alt @click="go(1)" />
      </van-col>
      <van-col span="12" style="padding-left:4px">
        <img src="../assets/img/pic3.jpg" alt @click="go(2)" />
      </van-col>
      <van-col span="24" class="pic-bot">
        <img src="../assets/img/pic2.jpg" alt @click="go(3)" />
      </van-col>
    </van-row>

    <div v-for="(value,i) in dataList" :key="i">
      <!-- {{dataList[3].bannerList}} -->
      <plateNav :plateDatas="value.titleBox" :index="i"></plateNav>
      <bannerLiner :lists="value.bannerList" :index="i"></bannerLiner>
    </div>
    <!-- {{dataList[2].bannerList[1]}} -->
    <van-list v-model="loading" :finished="finished" @load="onLoad(1)">
      <!-- <van-cell v-for="item in list" :key="item" :title="item + ''" /> -->
      <div v-for="(value,i) in list" :key="i">
        <!-- {{value}} -->
      <plateNav :plateDatas="value.titleBox" :index="2"></plateNav>
      <bannerLiner :lists="value.bannerList" :index="2"></bannerLiner>

      </div>
    </van-list>
<GoTop></GoTop>
    <router-view></router-view>
  </div>
</template>

<script>
import "../assets/font/iconfont.css";
import bannerLiner from "../components/bannerLiner";
import plateNav from "../components/plate-nav";
import { mapState } from "vuex";
import GoTop from '../components/GoTop'
export default {
  data() {
    return {
      value: "",
      list: [],
       loading: false,
      finished: false
    };
  },
  methods: {
    go(index) {
      this.$router.push({ path: `/buying?index=${index}&list=${0}` });
    },
    goSearch() {
      this.$router.push("/search");
    },
    onLoad(item) {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          this.list.push(this.dataList[item]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 30) {
          this.finished = true;
        }
      }, 2000);
    }
  },
  components: { bannerLiner, plateNav ,GoTop},
  computed: {
    ...mapState({
      dataList: state => state.bannerLiner.dataList
    })
  },
  created() {
    // console.log(this.$store.state);
  }
};
</script>

<style lang="less" scoped>
.wrapper-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  max-width: 640px;
  background-color: #b81c22;
  height: 44px;
  overflow: hidden;
}
.swiper {
  margin-top: 44px;
  overflow: hidden;
  height: 10rem;
  // margin-bottom: 1px;
}
.van-search {
  // padding: 0px;
  padding: 0.3125rem 0.9375rem 0px 0px;
}
.top-left {
  height: 100%;
  background: url(../assets/img/logo.png) no-repeat center;
  background-size: 75% 75%;
}

img {
  width: 100%;
  height: 13.5rem;
  display: block;
  font-size: 0;
}
.van-notice-bar {
  font-size: 12px !important;
  height: 1.8rem !important;
}
.pic-bot {
  margin: 6px 0px 0px 0px;
}
.year {
}
</style>
