<script>
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import SwiperCard from "../../utils/SwiperCard.vue";
import instance from '../../services/api';

export default {
  components: {
    Swiper,
    SwiperSlide,
    SwiperCard
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
  methods: {
    getAllData() {
      instance('products')
        .then(response => {
          this.addData(response.data)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    },
    addData(info) {
      this.$store.commit("allProductsData", info)
      this.info = info
      console.log("asdds", this.$store.state)
    },
  },
  mounted() {
    this.getAllData()
  },
  updated() {
    this.getAllData()
  },
};

</script>


<template>
  <div class="product__swiper">

    <swiper :breakpoints="{
      120: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      14000: {
        slidesPerView: 4,
      },
    }" :pagination="{
      type: 'fraction',
    }" :spaceBetween="5" :loop="true" :slidesPerView="3.9" :navigation="true" :modules="modules" class="mySwiper">

      <swiper-slide v-for="el in info">
        <SwiperCard :key="el?.id" :el="el" :info="info" />
      </swiper-slide>
    </swiper>

  </div>
</template>

<style scoped>
.product__swiper {
  margin: 100px 0;
  position: relative;
  height: 700px;

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

  a {
    color: #333;
  }

  span,
  strong {
    font-size: 14px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    color: grey;
    padding-bottom: 1rem;
    padding-left: 2px;
    visibility: hidden;
  }

  .price-text {
    transition: all .2s ease-in-out;
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 0;
    background-color: var(--pl-color);
    padding-left: 1px;

    strong {
      font-size: 13px;
    }
  }

}

.swiper-slide:hover {
  p {
    visibility: visible;
  }

  .price-text {
    height: 0px;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 630px;
  object-fit: cover;
  margin-bottom: .236rem;
  border: 1px solid grey;
}

@media only screen and (max-width: 1300px) {
  .product__swiper {
    height: 600px;

  }

  .swiper-slide img {
    height: 530px;
  }
}

@media only screen and (max-width: 1000px) {
  .product__swiper {
    height: 500px;

  }

  .swiper-slide img {
    height: 430px;
  }
}

@media only screen and (max-width: 915px) {
  .swiper-slide img {
    height: 395px;
  }
}

@media only screen and (max-width: 700px) {
  .product__swiper {
    height: 460px;

  }

  .swiper-slide img {
    height: 375px;
  }
}

@media only screen and (max-width: 500px) {
  .product__swiper {
    height: 460px;

  }

  .swiper-slide img {
    height: 385px;
  }
}

@media only screen and (max-width: 280px) {
  .product__swiper {
    height: 300px;
  }

  .swiper-slide img {
    height: 220px;

  }
}
</style>