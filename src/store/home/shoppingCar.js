export default {
  state: {
    money: 0,
    ispush: true,
    lists: [],
    ispushList: [],
    ispushList2: []
  },
  mutations: {
    isfals(state) {
      // console.log('false');
      state.ispush = false;
    },
    pushIndex(state, arr) {
      state.ispush = true;
      let index1 = arr[0];
      let index2 = arr[1];
      if ((state.ispushList.indexOf(index1)==-1) || (state.ispushList2.indexOf(index2)==-1)) {
        state.ispushList.push(index1);
        state.ispushList2.push(index2);
      }
      // console.log(state.ispushList)
    },

    redel(state, i) {
      state.ispushList.splice(i, 1);
      state.ispushList2.splice(i, 1);
    },
    isdisp(state) {
      state.ispush = true;
      state.ispushList = [];
    },
    tijiao(state, money1) {
      // state.ispushList = []
      // state.ispushList2 = []
      // state.ispush = false
      state.money = money1;
    },
    reset(state) {
      state.ispushList = [];
      state.ispushList2 = [];
    }
  },
  actions: {},
  modules: {}
};