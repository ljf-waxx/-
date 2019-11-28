<template>
  <div style="padding-top:44px">
    <van-nav-bar
      :title="$route.query.name"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>

    <van-row style="margin-top:1rem; margin-bottom:30px;">
      <van-col span="2"></van-col>
      <van-col
        span="20"
        @click="$router.push('/search')"
        class="search-txt"
        style="text-align:center; display:block; background-color:#f7f7f7; padding:4px 0px; font-size:12px;"
      >
        <span> <van-icon name="search" />有问题？点我搜搜看吧~ </span>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <!-- 表格 -->

    <van-row class="content-box" @click="$router.push('/helpContent')">
      <van-col span="8" style="line-height:30px;border-right:1px solid #ccc;">
        <van-icon name="completed" class="icon" />
        <br />
        <span style="font-size:10px; color: #ff9b9f ;">新手指南</span>
      </van-col>
      <van-col span="16" style="padding:0px 12px;">
        <van-col span="12" class="text-sub" style="line-height:30px;">
          <span>免税政策</span>
        </van-col>
        <van-col span="12" class="text-sub" style="line-height:30px;">
          <span>会员须知</span>
        </van-col>
        <van-col span="12" class="text-sub notbor" style="line-height:30px; ">
          <span style="border:none;">支付方式</span>
        </van-col>
        <van-col span="12" class="text-sub notbor" style="line-height:30px; ">
          <span style="border:none;">购物流程</span>
        </van-col>
      </van-col>
    </van-row>
    <van-row class="content-box" @click="$router.push('/helpContent')">
      <van-col span="8" style="line-height:30px;border-right:1px solid #ccc;">
        <van-icon name="bulb-o" class="icon" />
        <br />
        <span style="font-size:10px; color: #ff9b9f ;">售后服务</span>
      </van-col>
      <van-col
        span="16"
        style="padding:0px 12px;"
        @click="$router.push('/helpContent')"
      >
        <van-col span="12" class="text-sub" style="line-height:60px;">
          <span style="border:none;">免税政策</span>
        </van-col>
        <van-col span="12" class="text-sub" style="line-height:60px;">
          <span style="border:none;">会员须知</span>
        </van-col>
      </van-col>
    </van-row>

    <!-- === -->
    <van-row class="content-box" @click="$router.push('/helpContent')">
      <van-col span="8" style="line-height:30px;border-right:1px solid #ccc;">
        <van-icon name="after-sale" class="icon" />
        <br />
        <span style="font-size:10px; color: #ff9b9f ;">常见问题</span>
      </van-col>
      <van-col span="16" style="padding:0px 12px;">
        <van-col span="12" class="text-sub" style="line-height:30px;">
          <span>免税政策</span>
        </van-col>
        <van-col span="12" class="text-sub" style="line-height:30px;">
          <span>会员须知</span>
        </van-col>
        <van-col span="12" class="text-sub notbor" style="line-height:30px; ">
          <span style="border:none;">支付方式</span>
        </van-col>
        <van-col span="12" class="text-sub notbor" style="line-height:30px; ">
          <span style="border:none;">购物流程</span>
        </van-col>
      </van-col>
    </van-row>
    <van-row class="content-box" @click="$router.push('/helpContent')">
      <van-col span="8" style="line-height:30px;border-right:1px solid #ccc;">
        <van-icon name="contact" class="icon" />
        <br />
        <span style="font-size:10px; color: #ff9b9f ;">关于我们</span>
      </van-col>
      <van-col span="16" style="padding:0px 12px;">
        <van-col span="12" class="text-sub" style="line-height:30px;">
          <span>免税政策</span>
        </van-col>
        <van-col span="12" class="text-sub" style="line-height:30px;">
          <span>会员须知</span>
        </van-col>
        <van-col span="12" class="text-sub notbor" style="line-height:30px; ">
          <span style="border:none;">支付方式</span>
        </van-col>
        <van-col span="12" class="text-sub notbor" style="line-height:30px; ">
          <span style="border:none;">购物流程</span>
        </van-col>
      </van-col>
    </van-row>
    <!-- 表格 end -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    go() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState({
      list: state => state.bannerLiner.list
    })
  },
  created() {
    // console.log(this.$router.history.current.name);

  }
};
</script>

<style lang="less" scoped>
.search-txt {
  color: #666;
  i {
    display: inline-block;
    vertical-align: middle;
    margin-right: 2px;
  }
}
.content-box {
  //   margin-top: 3.125rem;
  text-align: center;
  padding-top: 4px;
  border-top: 1px solid #ccc;
  //   padding: 20px 0px;
  .icon {
    font-size: 25px;
    color: #ff9b9f;
    padding: 10px 0px;
  }
  .text-sub {
    font-size: 12px;
    color: #666;
    padding: 5px 0px;

    span {
      display: block;
      margin: 0px 10px;
      border-bottom: 1px dotted #ccc;
    }
    .notbor {
      border-bottom: 0px;
    }
  }
}
</style>
