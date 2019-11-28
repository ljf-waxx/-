<template>
  <div style="padding-bottom:60px; ">
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="go"
      class="top-bar"
    />
    
    <div class="top-banner" style="width:100%;heoght:360px">
      <img :src="listsData[listIndex].bannerList[key].path" alt width="100%" height="360px" />
    </div>
    <div class="product-info">
      <span class="price-up">
        
       <span style="font-size:30px; margin-right:10px;
    font-weight: bolder;"> <span style="font-size:20px" >￥</span>{{ listsData[listIndex].bannerList[key].price }}</span>
      </span>
      <span class="price-down">
        <small>￥</small>
        {{listsData[listIndex].bannerList[key].priceNot }}
      </span>
      <h3 class="title2">{{ listsData[listIndex].bannerList[key].tip }}</h3>
    </div>
    
    <!-- {{list[$route.query.index].num}} -->
    <!-- <h3>index={{$route.query.index}}</h3>1 -->

    <van-row class="cell-box">
      <van-col span="22">
        <span style="display:inline-block; padding-right:10px;">促销</span>
        <span class="cell-text"
          >&nbsp;&nbsp;[7折] &nbsp;&nbsp;&nbsp;莱珀妮单品专享7折</span
        >
      </van-col>
      <van-col span="2">
        <van-icon name="arrow" />
      </van-col>
    
      <van-col span="1">
      </van-col>
      <van-col span="21" style="font-size:12px;line-height:26px;padding:8px 6px;">
        <p><strong style="font-wight:bord;">三亚</strong>: 三亚凤凰机场离岛，至少提前6小时下单</p>
        <p>海口: 海口美兰机场离岛，至少提前1天下单</p>
        <p>注：购买时间视下单时段而定，具体说明请查看详情。</p>
      </van-col>
      <van-col span="2">
        
      </van-col>

      <!-- <van-col span="24" style="height:26px"></!--> 

      <van-col span="24" style="padding:0px 0px 15px 0px;">
        <van-col span="22" class="shuxiao">
          <span class="shuxiao-sub">说明：</span>
          <span class="cell-text"
            >*&nbsp;&nbsp;</span
          ><span class="cell-text">每件商品限购两件</span>
        </van-col>
        <van-col span="2">
          <van-icon name="arrow" />
        </van-col>
      </van-col>
    </van-row>
<!-- {{listsData[key].bannerList[index]}} -->
    <!-- 底部banner -->
    <van-tabs v-model="active" style="border-top:14px solid #eee; line-height:16px;">
      <van-tab title="相关搭配推荐">
        <!-- <banenrLiner ></banenrLiner> -->
        <bannerLiner :lists="list1" :index="2"></bannerLiner>
      </van-tab>
      <van-tab title="同类热销排行">
        <bannerLiner :lists="list" :index="3"></bannerLiner>
      </van-tab>
    </van-tabs>

    <!-- 底部banner end -->
    <!-- {{key}} -->
<!-- {{list1}} -->
    <!-- 底部 -->

   
    <van-goods-action class="pad">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        @click="gobuy($route.query.index)"
        :info="listsData[listIndex].bannerList[key].num"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
        style="border-radius: 0;    background: #333;"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        style="border-radius: 0;background: #b81c22;"
        @click="gobuy($route.query.index,$route.query.list)"
      />
    </van-goods-action>
  </div>
</template>

<script>
import banenrLiner from "../components/bannerLiner";
import { mapState } from "vuex";
export default {
  data() {
    return {
      key: this.$route.query.index,
      listIndex:this.$route.query.list,
      ischecked: this.ispush,
      active: 1
    };
  },
  components: {
    bannerLiner: banenrLiner
  },
  methods: {
    go() {
      // this.$router.go(-1);
      this.$router.push("/home")
    },
    gobuy(index,listID) {
      if (this.ispushList.length >= 0) {
        // this.$store.state.shoppingCar.lists.push(this.list[index]);
        this.$store.commit("jiayi",[ this.$route.query.list,this.$route.query.index ]);
        this.$store.commit("isfals");
        this.$store.commit('pushIndex',[ this.$route.query.list,this.$route.query.index ])
      }
      this.$router.push({
        path: `shopping?index=${index}&list=${listID}`
      });
    },
    onClickButton() {
      // console.log(this.$route.query.list)
      this.$store.commit('pushIndex',[ this.$route.query.list,this.$route.query.index ])
      this.$store.commit("add", [ this.$route.query.list,this.$route.query.index ]);
    } 
  },
  created() {
      // console.log(this.$route.query)
  },
  watch: {},
  computed: {
    ...mapState({
      list: state => state.bannerLiner.list,
      list1: state => state.bannerLiner.list1,
      ispush: state => state.shoppingCar.ispush,
      ispushList: state => state.shoppingCar.ispushList,
      ispushList1: state => state.shoppingCar.ispushList2,
      listsData: state => state.bannerLiner.dataList
    })
  }
};
</script>

<style lang="less" scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.cell-box {
  margin-top: 0.5rem;
  padding: 0px 8px;
  font-size: 14px;
  .cell-text {
    color: #ff9b9f;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
}
.top-banner {
  padding-top: 5.125rem;
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    margin-top: -60px;
    // height: 15.375rem;
    // height: 16.75rem;
  }
}
.product-info {
  box-sizing: border-box;
  padding: 8px 12px;

  h3.title2 {
    color: #333;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
  }
  .price-up {
    color: #b81c22;
  }
  .price-down {
    font-size: 10px;
    color: #999;
    text-decoration: line-through;
  }
}
.pad {
  // padding: 0.5rem;
  z-index: 999;
}
.shuxiao{
  line-height: 20px;
  font-size: 12px;
 
}
.product-info{
  // background-color: #999;
  .price-up{
    line-height: 30px;
  }
  .price-down{}
  .van-goods-action{
    padding: 0;
  }
  .van-goods-action-button--warning{
    background-color: #b81c22;
  }
}
</style>
