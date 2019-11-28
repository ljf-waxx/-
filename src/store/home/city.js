export default {
  state: {
    id: 0,
    cityList: [{
        id: "1",
        name: "张三aaa",
        tel: "13000000000",
        address: "浙江省杭州市西湖区文三路 "
      },
      {
        id: "2",
        name: "李四",
        tel: "1310000000",
        address: "浙江省杭州市拱墅区莫干山路 50 号"
      }
    ],
  },
  mutations: {
    addCity(state, obj) {
      // console.log(obj)
      let id = obj.id
      state.cityList[id] = obj.data
    },
    setId(state, id) {
      // console.log(state, id)
      state.id = id
    },
    getAddCity(state, obj) {
      console.log(obj.city)
      let str = obj.data.city
      str += obj.data.county
      str += obj.data.addressDetail
      state.cityList[obj.id].name = obj.data.name
      state.cityList[obj.id].tel = obj.data.tel
      state.cityList[obj.id].address =str
      console.log(state.cityList)
    }
  },
  actions: {},
  modules: {}
};