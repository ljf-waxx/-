<template>
  <div>
    <van-nav-bar title="全部品牌" height="40px" @click-right="goSearch">
      <van-icon name="search" slot="right" @click="goSearch" />
    </van-nav-bar>
    <!-- <van-row>
      <van-col span="12">
        <img src="../assets/img/brand1.jpg" alt />
      </van-col>
      <van-col span="12">
        <img src="../assets/img/brand2.jpg" alt />
      </van-col>
    </van-row>-->

    <van-row>
      <van-col span="12" v-for="index in picList" :key="index">
        <img :src="index" alt />
      </van-col>
    </van-row>

    <!-- list-pic -->

    <!-- select tool -->
    <!-- <van-index-bar  >
      <van-index-anchor index="A" />
      <van-cell title="APM MONACO" />
      <van-cell title="A.H.C爱和纯" />
      <van-cell title="ANNA SUI安娜苏" />
      <van-cell title="Ascara阿卡兰" />
      <van-cell title="ATELIER COLOGNE 欧珑" />
      <van-cell title="Avene 雅漾" />

      <van-index-anchor index="B" />
      <van-cell title="benefit贝玲妃" />
      <van-cell title="BIOTHERM 碧欧泉" />
      <van-cell title="BOBBI BROWN 苗比波朗" />
      <van-cell title="BRAUN 博朗" />
      <van-cell title="Breo倍轻松" />
      <van-cell title="BURBERRY 博柏利" />
      <van-cell title="BVLGARI 宝格丽" />

      <van-index-anchor index="C" />
      <van-cell title="benefit贝玲妃" />
      <van-cell title="BIOTHERM 碧欧泉" />
      <van-cell title="BOBBI BROWN 苗比波朗" />
      <van-cell title="BRAUN 博朗" />
      <van-cell title="Breo倍轻松" />
      <van-cell title="BURBERRY 博柏利" />
      <van-cell title="BVLGARI 宝格丽" />

       <van-index-anchor index="D" />
      <van-cell title="benefit贝玲妃" />
      <van-cell title="BIOTHERM 碧欧泉" />
      <van-cell title="BOBBI BROWN 苗比波朗" />
      <van-cell title="BRAUN 博朗" />
      <van-cell title="Breo倍轻松" />
      <van-cell title="BURBERRY 博柏利" />
      <van-cell title="BVLGARI 宝格丽" />
    </van-index-bar>-->

    <!-- select tool end-->

    <!-- <van-sticky :offset-top="50"> -->
      <!-- <van-button type="info">吸顶距离</van-button> -->
      <van-divider>全部品牌</van-divider>
      <div :style="{height:windowHeight}">
        <cube-index-list :data="cityData1">
          <cube-index-list-group v-for="(group, index) in cityData1" :key="index" :group="group">
            <cube-index-list-item
              v-for="(item, index) in group.items"
              :key="index"
              :item="item"
            >
              <div class="custom-item">
                <!-- <img
                style="width: 36px; height: 36px; vertical-align: middle; margin-right: 10px"
                src="http://e.hiphotos.baidu.com/image/pic/item/d788d43f8794a4c2f12be52b00f41bd5ad6e39a1.jpg"
                />-->
                {{item.name}}
              </div>
            </cube-index-list-item>
          </cube-index-list-group>
        </cube-index-list>
      </div>
    <!-- </van-sticky> -->
  </div>
</template>

<script>
const cityData = [
  {
    name: "A",
    items: [
      {
        name: "APM MONACO",
        value: 1
      },
      {
        name: "A.H.C爱和纯",
        value: 2
      },
      {
        name: "ANNA SUI安娜苏",
        value: 3
      },
      {
        name: "Ascara阿卡兰",
        value: 4
      },
      {
        name: "ATELIER COLOGNE 欧珑",
        value: 5
      },
      {
        name: "Avene雅漾",
        value: 6
      }
    ]
  },
  {
    name: "B",
    items: [
      {
        name: "benefit 贝玲妃",
        value: 7
      },
      {
        name: "BIOTHERM碧欧泉",
        value: 8
      },
      {
        name: "BOBBI BROWN 芭比波朗",
        value: 9
      },
      {
        name: "BRAUN 博朗",
        value: 10
      },
      {
        name: "Breo倍轻松",
        value: 11
      },
      {
        name: "BURBERRY 博柏利",
        value: 12
      },
      {
        name: "",
        value: 13
      },
      {
        name: "BVLGARI 宝格丽",
        value: 14
      }
    ]
  },
  {
    name: "C",
    items: [
      {
        name: "COCCINELLE",
        value: 15
      },
      {
        name: "CASIO卡西欧",
        value: 16
      },
      {
        name: "Caudalie 欧缇丽",
        value: 17
      },
      {
        name: "CHANEL香奈儿",
        value: 18
      },
      {
        name: "Chloe 蔻依",
        value: 19
      },
      {
        name: "Chopard 萧邦",
        value: 20
      },
      {
        name: "CITIZEN西铁城",
        value: 21
      },
      {
        name: "CLARINS娇韵诗",
        value: 22
      },
      {
        name: "Clarisonic 科莱丽",
        value: 23
      },
      {
        name: "CLINIQUE倩碧",
        value: 24
      },
      {
        name: "Cle de Peau Beaute 肌肤之钥",
        value: 25
      }
    ]
  },
  {
    name: "D",
    items: [
      {
        name: "Dr.Arrivo",
        value: 26
      },
      {
        name: "Daniel Wellington",
        value: 27
      },
      {
        name: "丹尼尔惠灵顿",
        value: 28
      },
      {
        name: "delonghi德龙",
        value: 29
      },
      {
        name: " DIOR Sunglasses",
        value: 30
      },
      {
        name: "迪奥太阳镜DIOR",
        value: 31
      },
      {
        name: "迪奥diptyque ",
        value: 32
      },
      {
        name: "蒂普提克DKNY",
        value: 33
      },
      {
        name: " 唐可娜儿",
        value: 34
      },
      {
        name: " Dr.Jart+蒂佳婷",
        value: 35
      }
    ]
  },
  {
    name: "E",
    items: [
      {
        name: "Elizabeth Arden",
        value: 9
      },
      {
        name: " 雅顿EMPORIO  ARMANI ",
        value: 10
      },
      {
        name: " 安普里臭阿玛尼Ermenegildo  Zegna",
        value: 10
      },
      {
        name: " Zegna 杰尼亚",
        value: 10
      },
      {
        name: "  Ermo Laszlo 奥伦纳素",
        value: 10
      },
      {
        name: " Estee Lauder 雅诗兰黛",
        value: 10
      }
    ]
  },
  {
    name: "F",
    items: [
      {
        name: "FOREO",
        value: 11
      },
      {
        name: "FENDI芬迪",
        value: 12
      },
      {
        name: "FILORGA 菲洛嘉",
        value: 12
      },
      {
        name: "FIYTA飞亚达",
        value: 12
      },
      {
        name: "FOR BELOVED ONE 宠爱之名",
        value: 12
      },
      {
        name: " Fresh 馥苗诗",
        value: 12
      }
     
    ]
  },
  {
    name: "g",
    items: [
      {
        name: "E23232",
        value: 13
      },
      {
        name: "Eeerrrrr",
        value: 14
      }
    ]
  }
];
export default {
  data() {
    return {
      title: "Current City: BEIJING",
      cityData1: cityData,
      windowHeight: window.innerHeight-100 + "px",
      picList: [
        require("../assets/img/brand1.jpg"),
        require("../assets/img/brand2.jpg"),
        require("../assets/img/brand3.jpg"),
        require("../assets/img/brand4.jpg"),
        require("../assets/img/brand5.jpg"),
        require("../assets/img/brand6.jpg"),
        require("../assets/img/brand7.jpg"),
        require("../assets/img/brand8.jpg"),
        require("../assets/img/brand9.jpg"),
        require("../assets/img/brand10.jpg")
      ]
    };
  },
  methods: {
    goSearch() {
      this.$router.push("/search");
    },
    // selectItem(item) {
    //   console.log(item.name);
    // },
    // clickTitle(title) {
    //   console.log(title);
    // }
  }
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
}
.van-col--12 {
  padding: 4px;
}
.van-nav-bar {
  line-height: 2.5rem;
  height: 2.5rem;
}

// =====
.custom-item {
  position: relative;
  height: 70px;
  line-height: 70px;
  padding: 0 16px;
}
.cube-index-list-content {
  background-color: rgb(255, 255, 255);
  color: #4b4b4b;
  font-size: 1rem;
}
.cube-index-list-anchor {
  background-color: #eeeeee;
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 20px;
}
.cube-index-list-nav {
  padding: 20px 0;
  border-radius: 10px;
  background: rgba(167, 167, 167, 1);
}
.cube-index-list-nav > ul > li.active {
  color: rgba(53, 22, 255, 0.99);
}
</style>
