import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      data: [],
    }
  },
  mutations: {
    productsData (state, action) {
      state.data = [...state.data, action]
    },
    removeProductsData (state, action) {
      const data = state.data?.filter((item) => item?.id !== action?.id);
      state.data = data;
    }
  },
  
})

export default store;