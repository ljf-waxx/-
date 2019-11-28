<template>
  <div>
    <van-nav-bar
      title="我的提货人"
      left-text="返回"
      left-arrow
      @click-left="go"
    ></van-nav-bar>

    <van-address-edit
  :area-list="areaList"
  :address-info	 = "list[$route.query.id]"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
/>
<!-- {{list[$route.query.id]}} -->
    <addCity v-show="!show" :show="show" @show="showfun"></addCity>
  </div>
</template>

<script>
import addCity from "../views/addCity";
import arealist from "../assets/js/area";
import { Toast } from "vant";
export default {
  data() {
    return {
      show: true,
        areaList:arealist,
      chosenAddressId: "1",
      list: this.$store.state.city.cityList
    };
  },
  components: { addCity },
  methods: {
    go() {
      this.$router.go(-1);
    },
    onAdd() {
      Toast("新增地址");
    
    },

    onEdit(item, index) {
      Toast("编辑地址尚未开放:" + index);
    },
    showfun(value, objData) {
      window.console.log(value,objData);
      this.show = true;
      this.list.push({
        id: objData.id,
        name: objData.name,
        tel: objData.tel,
        address: objData.address
      });
    },
    select() {
      Toast("地址切换成功");
      this.$router.go(-1)
    },
    onSave(data){
        // console.log(data)
        // console.log(this.$store.state.city.cityList)
        this.$router.go(-1)
        let obj = {
            id:this.$route.query.id,
            data : data
        }
        this.$store.commit("getAddCity",obj)
    }
  },
  created(){
      // console.log(this.$route)
  }
  
};
</script>

<style lang="scss" scoped></style>
