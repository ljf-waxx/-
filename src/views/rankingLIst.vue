<template>
  <div style="padding-top:44px">
    <!-- <van-nav-bar
      :title="$router.history.current.name"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>-->
    <van-nav-bar
      title="标题"
      left-text="返回"
      @click-left="go"
      style="position: fixed; top:0; width:100%; z-index:333;"
      left-arrow
      @click-right="$router.push('/search')"
    >
      <van-icon name="search" slot="right" />
    </van-nav-bar>

    <img
      class="img"
      ng-src="https://pic.cdfgsanya.com/assets/upload/img/7081e6b4f14452c743e946c522a7e7b1.jpg"
      src="https://pic.cdfgsanya.com/assets/upload/img/7081e6b4f14452c743e946c522a7e7b1.jpg"
      style="width:100%"
    />

    <!-- tab -->
    <van-tabs v-model="active">
      <van-tab title="BEST">
        <!-- <div>
          <van-card
            v-for="(value, i) in list1"
            :key="i"
            :num="value.num <= 0 ? 1 : value.num"
            :price="value.price"
            :desc="value.tip"
            :title="value.title"
            :thumb="value.path"
            @click="$router.push(`/buying?index=${i}&list=${2}`)"
          />
        </div> -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad(3)" class="listTab">
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
          <div v-for="(value,i) in list" :key="i" style="width:100%;">
            <van-row @click="$router.push(`/buying?index=1&list=${i}`)">
              <van-col span="8"> <img :src="value.path" alt width="100%" /></van-col>
              <van-col span="14"><span class="title-span">{{value.title}} </span> <br><span class="title-2">{{value.tip}}</span></van-col>
              <van-col span="2"></van-col>
            </van-row>
            <!-- {{value.path}} -->
          </div>
        </van-list>
      </van-tab>
      <van-tab title="热门搜索">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad(1)" class="listTab">
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
          <div v-for="(value,i) in list" :key="i" style="width:100%;">
            <van-row @click="$router.push(`/buying?index=1&list=${i}`)">
              <van-col span="8"> <img :src="value.path" alt width="100%" /></van-col>
              <van-col span="14"><span class="title-span">{{value.title}} </span> <br><span class="title-2">{{value.tip}}</span></van-col>
              <van-col span="2"></van-col>
            </van-row>
            <!-- {{value.path}} -->
          </div>
        </van-list>
      </van-tab>
      <van-tab title="热门品牌">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad(2)" class="listTab">
          <div v-for="(value,i) in list" :key="i" style="width:100%;">
            <van-row @click="$router.push(`/buying?index=1&list=${i}`)">
              <van-col span="8"> <img :src="value.path" alt width="100%" /></van-col>
              <van-col span="14"><span class="title-span">{{value.title}} </span> <br><span class="title-2">{{value.tip}}</span></van-col>
              <van-col span="2"></van-col>
            </van-row>
            <!-- {{value.path}} -->
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
    <!-- tab end -->
    <!-- {{$router}} -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    onLoad(item) {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 2; i++) {
          this.list.push(this.listsData[item].bannerList[i]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    }
  },
  computed: {
    ...mapState({
      list1: state => state.bannerLiner.list,
      listsData: state => state.bannerLiner.dataList
    })
  },

  created() {}
};
</script>

<style lang="less" scoped>
.listTab{
  margin-top: 1.875rem;
}
  .title-span{
    font-size: 14px;
    line-height: 18px;
    color: #666;
    font-weight: 444;
  }
  .title-2{
    font-size: 12px;
    color: #999;
    line-height: 22px;
    font-weight: 300;
  }
  .van-tabs__content{
    margin-top: 30px;
  }
</style>
