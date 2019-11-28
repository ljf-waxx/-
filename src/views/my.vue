<template>
  <div>
    <div class="header">
      <div class="user">
        <div class="btn">
          <img :src="img" class="use" alt @click="login" />
        </div>
        <div>{{ name }}</div>
      </div>
    </div>
    <!-- 订单 -->
    <div class="order">
      <div class="order-bar" @click="$router.push('/dingdan')"  >
        <div class="order-list-left">
          <span class="iconfont icon-single"></span> 全部订单
        </div>
        <div class="order-list-right">
          查看全部订单
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <!-- 订单 end-->
    <!-- 宫格 -->
    <van-grid icon-size="20px" style="border-bottom:15px solid #eee; width:100%;">
      <van-grid-item
        icon="balance-pay"
        text="待支付"
        @click="$router.push('/zhifu')"
      />
      <van-grid-item
        icon="logistics"
        text="代提货"
        @click="$router.push('/tihuo')"
      />
      <van-grid-item
        icon="gift-o"
        text="待完成"
        @click="$router.push('/wancehng')"
      />
      <van-grid-item
        icon="clock-o"
        text="已取消"
        @click="$router.push('/quxiao')"
      />
    </van-grid>
    <!-- 宫格 end -->
    <!-- bar_tool  -->
    <van-row class="bar-tool">
      <van-col span="1"></van-col>
      <van-col span="21" @click="go">我的优惠劵</van-col>
      <van-col span="2">
        <van-icon name="arrow" color="#ccc" />
      </van-col>
    </van-row>
    <van-row class="bar-tool">
      <van-col span="1"></van-col>
      <van-col span="21" @click="$router.push('/collect')">我的收藏</van-col>
      <van-col span="2">
        <van-icon name="arrow" color="#ccc" />
      </van-col>
    </van-row>
    <van-row class="bar-tool" style="border-bottom:15px solid #eee">
      <van-col span="1"></van-col>
      <van-col span="21" @click="$router.push('/record')">浏览记录</van-col>
      <van-col span="2">
        <van-icon name="arrow" color="#ccc" />
      </van-col>
    </van-row>
    <van-row class="bar-tool">
      <van-col span="1"></van-col>
      <van-col span="21" @click="goCity">我的提货人</van-col>
      <van-col span="2">
        <van-icon name="arrow" color="#ccc" />
      </van-col>
    </van-row>
    <van-row style="border-bottom:15px solid #eee">
      <van-col span="1"></van-col>
      <van-col span="21" @click="$router.push('/anquan')">账户安全</van-col>
      <van-col span="2">
        <van-icon name="arrow" color="#ccc" />
      </van-col>
    </van-row>
    <van-row class="bar-tool">
      <van-col span="1"></van-col>
      <van-col span="21" @click="goFilght">航班/火车票信息更变</van-col>
      <van-col span="2">
        <van-icon name="arrow" color="#ccc" />
      </van-col>
    </van-row>
    <van-row class="bar-tool">
      <van-col span="1"></van-col>
      <van-col span="21" @click="$router.push('/lianxi')">联系我们</van-col>
      <van-col span="2">
        <van-icon name="arrow" color="#ccc" />
      </van-col>
    </van-row>
    <van-row class="bar-tool">
      <van-col span="1"></van-col>
      <van-col span="21" @click="$router.push('/help')">帮助中心</van-col>
      <van-col span="2">
        <van-icon name="arrow" color="#ccc" />
      </van-col>
    </van-row>
    <!-- bar_tool end -->
  </div>
</template>

<script>
// import youhui from '../views/youhui'
export default {
  data() {
    return {
      img: require("../assets/img/user.png"),
      name: "注册/登录"
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    go() {
      this.$router.push("/youhui");
    },
    goCity() {
      this.$router.push("/city");
    },

    goFilght() {
      this.$router.push("/filght");
    }
  },
  created() {
    if(localStorage.user){
      this.name = localStorage.user
      this.img = require('../assets/img/user.jpg')

    }
    // console.log(localStorage.user,localStorage.password)
    if (!localStorage.login) {
      // this.$router.push("/login");
    } else {
      this.$axios
        .get("getdata", {
          params: {
            token: localStorage.login
          }
        })
        .then(req => {
          // console.log(req.data.result);
          this.img = req.data.result.img;
          this.name = req.data.result.name;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.bor-bar {
  border-bottom: 15px solid #eee;
  color: #666;
}
.header {
  height: 10rem;
  position: relative;
  background: url(../assets/img/background.jpg) no-repeat center center;
  background-size: 100%;
  .user {
    width: 100%;
    position: absolute;
    top: 4.25rem;
    text-align: center;
    .use {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    .btn {
      text-align: center;
      font-size: 20px;
    }
    > div {
      font-size: 0.75rem;

      color: #fff;
    }
  }
}
.order {
  box-sizing: border-box;
  padding: 4px 12px;
  width: 100%;
  border-top: 0.625rem solid #f8f8f8;
  line-height: 2.8125rem;
  font-size: 20px;
  clear: both;

  border-bottom: 1px solid #eee;
  .order-bar {
    height: 2.5rem;
  }
  .order-list-left {
    i {
      font-size: 20px;
      line-height: 20px;
    }
    float: left;
    font-size: 14px;
    font-weight: 400;
    color: #999;
  }
  .order-list-right {
    float: right;
    font-size: 10px;
    color: #999;
  }
}
.van-grid.van-hairline--top {
  border: none;
}
.bar-tool {
  border-bottom: 1px solid #eee;
}
.van-col {
  line-height: 3rem;
  color: #666;
  font-size: 14px;
}
</style>
