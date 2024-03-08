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

      <span>{{ el.title }}</span>
      <p>{{ el.description.length >= 100 ? el.description.slice(0, 100) : el.description }}</p>

      <div class="price-text">
        <strong>${{ el.price }}</strong>
      </div>
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
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all .3s ease;


    span, strong{
      font-size: 14px;
      font-weight: 600;
    }

    p{
      font-size: 14px;
      font-weight: 600;
      color: grey;
      padding-bottom: 1rem;
      padding-left: 2px;
      visibility: hidden;
    }

    .price-text{
      transition: all .2s ease-in-out;
      position: absolute;
      width: 100%;
      height: 50px;
      left: 0;
      bottom: 0;
      background-color: var(--pl-color);
      padding-left: 1px;
      strong{
        font-size: 13px;
      }
    }

  }

  .swiper-slide:hover{
    p{
      visibility: visible;
    }
    .price-text{
      height: 0px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 520px;
    object-fit: cover;
    padding-bottom: 1rem;
  }
</style>