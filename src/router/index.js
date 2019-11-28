import Vue from "vue";
import VueRouter from "vue-router";
import swiper from "../views/swiper.vue";
import gg from "../views/gg.vue";
import home from "../views/Home.vue";
import my from "../views/my.vue";
import brand from "../views/brand.vue";
import select from "../views/select.vue";
import shopping from "../views/shopping-bar.vue";
import byuing from "../views/buying.vue";
import login from "../views/login.vue";
import search from "../views/search.vue";
import youhui from "../views/youhui.vue";
import city from "../views/city.vue";
import addCity from "../views/addCity.vue";
import filght from "../views/my/filght.vue";
import collect from "../views/my/collect.vue";
import record from "../views/my/record.vue";
import anquan from "../views/my/anquan.vue";
import lianxi from "../views/my/lianxi.vue";
import help from "../views/my/help.vue";
import helpContent from "../views/my/helpContent.vue";
import mynav from "../views/my/myNav.vue";
import wenti from "../views/wenti.vue"
import rankingList from "../views/rankingLIst.vue"
import recity from "../views/recity"
import checkOut from "../views/checkOut"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "swiper",
    component: swiper
  },
  {
    path: "/gg",
    name: "广告",
    component: gg
  },
  {
    path: "/home",
    name: "home",
    component: home,
    children: [
      {
        path: "/home/buying",
        name: "买买买",
        component: byuing
      }
    ]
  },
  {
    path: "/select",
    name: "select",
    component: select
  },
  {
    path: "/shopping",
    name: "shopping",
    component: shopping
  },
  {
    path: "/brand",
    name: "brand",
    component: brand
  },
  {
    path: "/my",
    name: "brand",
    component: my
  },
  {
    path: "/buying",
    // name:"买!",
    component: byuing
  },
  {
    path: "/login",
    name: "注册",
    component: login
  },
  {
    path: "/search",
    name: "搜索",
    component: search
  },
  {
    path: "/youhui",
    name: "优惠",
    component: youhui
  },
  {
    path: "/city",
    name: "地址",
    component: city
    // children: []
  },
  {
    path: "/addCity",
    name: "地址",
    component: addCity
  },
  {
    path: "/filght",
    name: "地址",
    component: filght
  },
  {
    path: "/collect",
    name: "地址",
    component: collect
  },
  {
    path: "/record",
    name: "浏览记录",
    component: record
  },
  {
    path: "/dingdan",
    name: "全部订单",
    component: record
  },
  {
    path: "/anquan",
    name: "安全",
    component: anquan
  },
  {
    path: "/lianxi",
    name: "联系",
    component: lianxi
  },
  {
    path: "/help",
    name: "帮助",
    component: help
  },
  {
    path: "/helpContent",
    name: "帮助",
    component: helpContent
  },
  {
    path: "/zhifu",
    name: "待支付",
    component: mynav
  },
  {
    path: "/wancehng",
    name: "待完成",
    component: mynav
  },
  {
    path: "/tihuo",
    name: "代提货",
    component: mynav
  },
  {
    path: "/quxiao",
    name: "已取消",
    component: mynav
  },{
    path:"/wenti",
    name:"问题",
    component : wenti
  },{
    path:"/rankingList",
    name:"排行榜",
    component : rankingList
  },{
    path:"/recity",
    name:"排行榜",
    component : recity
  },{
    path:"/checkOut",
    name:"支付中心",
    component : checkOut
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
