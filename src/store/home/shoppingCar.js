export default {
    state: {
        ispush: true,
        lists: [

        ],
        ispushList: []
    },
    mutations: {
        isfals(state) {
            state.ispush = false
        },
        pushIndex(state, index) {
            if (state.ispushList.indexOf(index) == -1) {
                state.ispushList.push(index)
            }
        },
        redel(state,i){

            state.ispushList.splice(i,1)
          },

    isdisp(state){
      state.ispush = true;
      state.ispushList = []
    }
    },
    actions: {},
    modules: {}
}