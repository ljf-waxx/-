<template>
  <div>
    <van-col span="4" class="top-left">
      <img src="../assets/img/logo1.png" alt />
    </van-col>
    <van-col span="20">
      <form action="/" class="search">
        <van-search
          placeholder="搜索：分类 品牌 系列 商品"
          show-action:true
          input-align:center
        />
      </form>
    </van-col>

    <!-- select box -->
    <div>
      <van-tree-select
        :items="items"
        :main-active-index.sync="activeIndex"
        height="100%"
        class="wrapp-select"
        @click-nav="add"
      >
        <template slot="content">
          <!-- <van-image
            v-if="activeIndex === 1"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          /> -->
          <!-- <selsctBox
            v-if="activeIndex === 0"
            :list="list1[0]"
            class="secletBox"
          ></selsctBox> -->
          <selsctBox
          v-for="(value,i) in list1" :key="i"
            v-show="activeIndex === i"
            :list="list1[i]"
            class="secletBox"
          ></selsctBox>
        
          <!-- <selsctBox
          v-for="(value,i) in list1.lists" :key="i"
            v-show="activeIndex === i"
            :list=" list1"
            class="secletBox"
          ></selsctBox> -->
        </template>
      </van-tree-select>
    </div>
    <!-- select box end -->
  </div>
</template>

<script>
import selsctBox from "../components/cselectTool";
import { mapState } from "vuex";
export default {
  data() {
    return {
      items: [
        { text: "美妆" },
        { text: "香水" },
        { text: "腕表" },
        { text: "箱包" },
        { text: "配饰" },
        { text: "鞋帽" },
        { text: "生活" }
      ],
      activeId: 1,
      activeIndex: 0
    };
  },
  methods: {
    add(i) {
      console.log(i);
    }
  },
  components: {
    selsctBox
  },
  computed: {
    ...mapState({
      list1: state => state.selectBox.lists
    })
  }
};
</script>

<style lang="less" scoped>
.wrapp-select {
  max-width: 640px;
  min-width: 320px;
  position: fixed;
  top: 3.375rem;
  height: auto;
  bottom: 2.5rem;
}
.wrapper-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 44px;
  overflow: hidden;
}
.swiper {
  margin-top: 44px;
  overflow: hidden;
}
.van-search {
}
.top-left {
  padding: 8px;
  box-sizing: border-box;
}

img {
  width: 100%;
  display: block;
  font-size: 0;
}
.van-notice-bar {
  font-size: 12px !important;
  height: 1.8rem !important;
}
.van-tree-select {
  width: 100%;
}
.secletBox {
  padding: 0.5rem;
  box-sizing: border-box;
  .title {
    padding: 15px 4px;
    .subTitle {
      color: #666;
      font-size: 12px;
      font-weight: 400;
    }
    .look {
      color: #ff9b9f;
      font-size: 12px;
      float: right;
      display: block;
    }
  }
}
.van-col {
  line-height: 13px;
}
.van-tree-select__content {
  flex: 4;
}
.van-grid-item__icon {
  font-size: 2.75rem !important;
}
</style>
