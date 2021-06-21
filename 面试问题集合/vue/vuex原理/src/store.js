import Vue from 'vue';
import Vuex from './vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
  modules:{
    student:{
      modules:{
        a:{
          state:{
            name:'llshi'
          }
        },
      },
      state:{
        num:100,
      },
      getters:{
        numDouble(state,getters,rootState,rootGetters){
          console.log(state,getters,rootState,rootGetters);
          return state.num * 2;
        },
        test(){
          return 10;
        }
      }
    }
  },
  state:{
    desc:'test'
  },
  getters:{
    printDesc(state,getters){
      return `description:${state.desc}`;
    }
  }
})
export default store;