import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      data: [],
    }
  },
  mutations: {
    cartData (state, action) {
      state.data = [...state.data, action]
    },
    removeCartData (state, action) {
      const data = state.data.findIndex((product) => product.id === action?.id);
      let removeditem = state.data.filter((_, index) => index !== data);
      state.data = removeditem;
    }
  },
  
})

export default store;