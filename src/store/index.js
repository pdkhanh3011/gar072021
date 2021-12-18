import { createStore } from "vuex";

export default createStore({
  state: {
    champions: [],
  },
  mutations: {
      getChampionsListFromApi(state, payload) {
        state.champions = payload
      },
  },
  actions: {
    
  },
  modules: {

  },
  getters: {
    sortAbc(state) {
        return state.champions.sort((a,b)=>{
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
          })
    }
  }
});
