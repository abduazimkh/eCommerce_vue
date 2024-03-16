<script>
import Container from "../../utils/Container.vue";
import ProductSwiperImg from "../../utils/ProductSwiperImg.vue";

export default {
  components: {
    Container,
    ProductSwiperImg,

  },
  methods: {
    IncrementProduct(el) {
      this.$store.commit("Increment", el)
    },
    DecrementProduct(el) {
      this.$store.commit("Decrement", el)
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
  mounted() {
    this.scrollToTop()
  }
}

</script>

<template>
  <div v-if="$store.state.cart_data?.length == 0" class="wishlist-empty">
    <Container>
      <div>
        <h1>Empty Wishlist</h1>
      </div>
    </Container>
  </div>

  <div v-else class="cart__wrapper">
    <Container>
      <h1>Wishlist</h1>
      <div class="added-products">
        <div v-for="el in $store.state.cart_data" class="cart-item">
          {{ el }}
          <ProductSwiperImg :imgs="el?.images[0]" />
          <h2>{{ el.title }}</h2>
          <p>{{ el.description.length > 35 ? el.description.split(" ").join(" ").slice(0, 50) : el.description }}</p>
          <div class="cart-price">
            <strong>${{ el.price }}</strong>

            <button @click="IncrementProduct(el)">+</button>
            {{ el.count }}
            <button @click="DecrementProduct(el)">-</button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style lang="scss">
.wishlist-empty {
  margin-top: 130px;
  min-height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart__wrapper {
  margin-top: 100px;
  min-height: 100vh;
  padding-top: 2rem;
}

h1 {
  margin: 1rem 0;
}

.added-products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;
}

.cart-item {
  border: 1px solid grey;
  padding: 1rem;

  img {
    width: 100%;
    aspect-ratio: 1/1;
  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 5px;
  }

  .cart-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 0 0;

    strong {
      font-size: 1rem;
    }

    button {
      border: none;
      color: #fff;
      background-color: #111;
      padding: 12px 20px;
    }

  }


}
</style>