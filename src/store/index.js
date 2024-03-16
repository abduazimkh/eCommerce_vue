import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      data: [],
      cart_data: [],
      liked_data: [],
    }
  },
  mutations: {
    allProductsData(store, action){
      store.data = action
    },
    cartData (state, action) {
      state.cart_data = [...state.cart_data, action]
    },
    Increment (state, action){
      let product_index = state.cart_data.findIndex((product) => product.id === action.id);
      let addedcart = state.cart_data.map((product, index) => {
        if (index === product_index) {
          product.count = product.count + 1
        }
        return product;
      });
      addedcart = state.cart_data.filter(product => product.count > 0)
      state.cart_data =  addedcart
    },
    Decrement (state, action) {
      function checkDecrement(count){
        if(count >= 1){
          return count - 1
        }
        return count
      }
      let product_index = state.cart_data.findIndex((product) => product.id === action.id);
      let addedcart = state.cart_data.map((product, index) => {
        if (index === product_index) {
          product.count = checkDecrement(product.count)
        }
        return product;
      });
      addedcart = state.cart_data.filter(product => product.count > 0)
      state.cart_data =  addedcart
    },
    removeCartData (state, action) {
      const data = state.cart_data.findIndex((product) => product.id === action?.id);
      let removeditem = state.cart_data.filter((_, index) => index !== data);
      state.cart_data = removeditem;
    }
  },
  
})


export default store;