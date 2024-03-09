<script>
  import ProductSwiper from "../../components/product/ProductSwiper.vue";
  import Products from "../../components/products/Products.vue";
  import instance from "../../services/api";

  export default {
    components: {
      Products,
      ProductSwiper,
    },
    data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
    mounted () {
    instance.get('products/'+ this.$route.params.id)
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() =>{
        this.loading = false
      })
  }
  }

</script>


<template>
  <div class="single__wrapper">
    <div class="single__content" v-for="el in info">
      <div class="single__swiper">

      </div>
      <div class="single__content--box">
        <h2> wldkncjdsk {{ el.title }}</h2>
        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, odio nemo dicta iste sequi sint voluptatem cupiditate eligendi laboriosam doloribus amet ipsum quo praesentium asperiores sunt maxime iure qui tempore!</p> -->
        
      
      </div>
    </div>

    <Products/>
    <!-- <ProductSwiper/> -->
  </div>
</template>

<style lang="scss">
  .single__wrapper{
    margin-top: 110px;
  }

  .single__content{
    background-color: red;
    padding: 1rem;
    color: #fff;
  }

</style>