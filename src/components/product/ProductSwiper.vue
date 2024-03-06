<script>
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation } from 'swiper/modules';
  import instance from "../../services/api";

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
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
    instance.get('products')
      .then(response => {
        this.info = response.data
        console.log(this.info)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }

  };

</script>


<template>
  <div class="product__swiper">

    <swiper
    :pagination="{
      type: 'fraction',
    }"
    :spaceBetween="5"
    :loop="true"
    :centeredSlides="true"
    :slidesPerView="3.9"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="el in info" >
      <img :src="el.images[0].match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)" :alt="el.title">

      <h3>{{ el.title }}</h3>
      <p>{{ el.description }}</p>
    </swiper-slide>
  </swiper> 

  </div>
</template>

<style scoped>
  .product__swiper{
    margin: 100px 0;
    position: relative;
    height: 600px;
  }
  .swiper {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 50%;
    transform: translateY(50%);
  }
  .swiper-slide {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    background-color: grey;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>