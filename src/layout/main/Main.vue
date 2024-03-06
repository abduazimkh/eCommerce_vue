<!-- script -->

<script>
  import ProductSwiper from '../../components/product/ProductSwiper.vue';
  import Products from "../../components/products/Products.vue";
  import ProductsCards from "../../components/products-cards/ProductsCards.vue";
  import Product from "../../components/productt/Product.vue";
  import ProductCards from "../../components/product-cards/ProductCards.vue";
  import Muvie from "../../components/muvie/Muvie.vue";

  export default {
    components: {
      ProductSwiper,
      Products,
      ProductsCards,
      Product,
      ProductCards,
      Muvie,
    }
  }

</script>


<!-- html -->

<template>
  <main>
    <ProductSwiper/>
    <Products/>
    <ProductsCards/>
    <ProductSwiper/>
    <Muvie/>
    <Product/>
    <ProductCards/>

  </main>

</template>


<!-- style -->

<style lang="sass">
</style>