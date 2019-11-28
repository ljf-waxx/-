<template>
  <div style="height:100%;">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"> 
          <img
            src="../assets/img/yd2.jpg"
            class="animated jello animate-duration: 0.5s;"
            v-show="isshow"
            alt
          />
          <h3 v-show="isshow" class="animated jello animate-duration: 0.5s;">安全，可靠，优质</h3>
        </div>
        <div class="swiper-slide">
          <img
            src="../assets/img/yd3.jpg"
            class="animated jello animate-duration: 0.5s;"
            v-show="isshow"
            alt
          />
          <h3 v-show="isshow" class="animated jello animate-duration: 0.5s;">健康，美丽，气质</h3>
        </div>
        <div class="swiper-slide">
          <img
            src="../assets/img/yd4.jpg"
            class="animated jello animate-duration: 0.5s;"
            width="100%"
            v-show="isshow"
            alt
          />
          <h3 v-show="isshow" class="animated jello animate-duration: 0.5s;">安全，可靠，优质</h3>
        </div>
        <div class="swiper-slide wrapper">
          <img src="../assets/img/yd6.jpg" class="animated zoomIn" alt  v-show="isshow" />
          <br />
          <van-button type="primary" class="btn animated zoomIn" @click="go" v-show="isshow">立即开启</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate";
import swiper from "swiper";
export default {
  data() {
    return {
      isshow: true
    };
  },
  methods: {
    go() {
      this.$router.push("/home");
    }
  },
  mounted() {
    let _this = this;
    new swiper(".swiper-container", {
      on: {
        slideChangeTransitionStart: function() {
          _this.isshow = false;
        },
        slideChangeTransitionEnd: function() {
          _this.isshow = true;
        }
      }
    });
  }
};
</script>

<style lang="less" scoped>
.swiper-wrapper{
  position: fixed;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-bottom: 200px;
  box-sizing: border-box;
  
  img {
    margin-top: 6.25rem;
    width: 75%;
  }
  h3 {
    text-align: center;
    font-size: 1.25rem;
    margin-top: 1.875rem;
    color: darkolivegreen;
  }
}
// .swiper-container {
//   position: fixed;
//   top:0;
//   height: 100%;
//   // background-color: #586a6a7d;
// }

// img {
//   font-size: 0;
//   display: block;
//   width: 100%;
// }
.wrapper {
  .btn {
    width: 36%;
    margin-left: -18%;
    position: absolute;
    // bottom: -60%;
    margin-top: 35px;
    z-index: 6666;
  }
}
.swiper-container {
  // margin: auto 0;
}
</style>
