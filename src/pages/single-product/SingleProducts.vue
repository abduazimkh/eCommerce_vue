<script>
import ProductSwiper from "../../components/product/ProductSwiper.vue";
import Products from "../../components/products/Products.vue";
import instance from "../../services/api";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BackToTop from 'vue-backtotop';
import SingleProductSwiperImg from "../../utils/SingleProductSwiperImg.vue";

export default {
  components: {
    Products,
    ProductSwiper,
    Swiper,
    SwiperSlide,
    BackToTop,
    SingleProductSwiperImg
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      errorPlaceholder: false,
      info: null,
      loading: true,
      errored: false,
      imgs: null,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    singleData() {
      instance('products/' + this.$route.params.id)
        .then(response => {
          this.info = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => {
          this.loading = false
        })
    },
    saved(el) {
      this.imgs = el
    },
    addProduct: function (el) {
      this.$store.commit("cartData", el, el.count = 1)
    },
    removeProduct: function (el) {
      this.$store.commit("removeCartData", el)
    },
  },
  mounted() {
    this.scrollToTop(),
      this.singleData();
  },
  updated() {
    this.singleData();
  },


}
</script>

<template>
  <div class="single__wrapper">
    <div class="single__content">
      <div class="single__swiper">
        <swiper :pagination="{
          type: 'fraction',
        }" :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="el in info?.images">
            <SingleProductSwiperImg :imgs="el.images" :el="el" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="qqq">
        <div class="single__content--box">
          <h2> {{ info?.title }}</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam earum dolor vero.</p>

          <strong>${{ info?.price }}</strong>

          <div class="single-images">
            <img :onError="(e, s) => {
          if (!s) {
            errorPlaceholder = true
          }
        }
          " v-for="el in info?.images" @click="saved(el)"
              :src="!el || errorPlaceholder ? `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png` : el"
              :alt="info?.title" />
          </div>

          <div class="size">
            <ul>
              <small>Size: </small>
              <li>Size Suide</li>
            </ul>

            <ul class="size-item">
              <li>S</li>
              <li>XS</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>

            <p>Model is 6ft 4 / 193cm with a 42 inch / 106.7cm chest, and wears size XL.</p>
          </div>

          <button v-if="$store.state.cart_data.findIndex((product) => product.id === info?.id) === -1"
            @click="addProduct(info)" class="single-btn">Add to cart</button>

          <button v-else @click="removeProduct(info)" class="single-btn">Remove from Cart</button>

          <ul class="single-list">
            <li>Three layer material built with 65% copper</li>
            <li>Soft and malleable</li>
            <li>Highly waterproof and breathable</li>
          </ul>

          <div class="single-description">
            <p>{{ info?.description }}</p>
            <p>With over 11 kilometres of copper in every jacket, the Full Metal Jacket is designed to help us pioneer
              the future of intelligent and disease resistant clothing. Copper is one of the most advanced materials in
              our solar system. Thrown out of supernovas billions of years ago, it became central to the rise of
              civilisation, creating tools and sterilising water, before enabling modern day communication, transport,
              and electrical power.</p>
            <p>{{ info?.description }}</p>
          </div>

        </div>
      </div>
    </div>

    <Products />
    <ProductSwiper />
  </div>
  <back-to-top text="Back to top" visibleoffset="500"></back-to-top>
</template>

<style lang="scss">
.single__wrapper {
  margin-top: 130px;
}

.single__content {
  min-height: calc(100vh);
  margin-bottom: 100px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.qqq {
  width: 50%;
}

.single__content--box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  top: 0;
  position: sticky;


  &::-webkit-scrollbar {
    display: none;
  }

  h2 {
    margin-top: 1rem;
    font-size: 2.5rem;
    font-family: var(--staatliches-font);
    letter-spacing: 2px;
    font-weight: 600;
    max-width: 85%;
  }

  p {
    font-size: 1rem;
    color: #5559;
  }

  strong {
    font-size: 1rem;
  }

  .size {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .size-item {
      max-width: 60%;
    }
  }

  .single-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem;
    width: 85%;
    border: none;
    outline: none;
    background-color: #111;
    color: var(--pl-color);
    font-size: 1rem;
    margin: 1.5rem 0;
    display: inline-block;
  }

  .single-list {
    max-width: 85%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 3px;

    li {
      color: var(--pd-color);
      opacity: .8;
      font-size: 14px;
      list-style-type: disc !important;
    }
  }

  .single-description {
    max-width: 85%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

}

.single-images {
  width: 85%;
  margin-top: 2.5rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 75px;
    height: 85px;
    cursor: pointer;
  }
}

.single__swiper {
  width: 42%;
  height: calc(100vh - 170px);

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid grey;
  }

}


@media only screen and (max-width: 1000px) {
  .single__content {

    .qqq,
    .single__swiper {
      width: 100%;
    }

    flex-direction: column;
  }
}

@media only screen and (max-width: 400px) {
  .single__swiper {
    width: 42%;
    height: calc(100vh - 270px);

    .swiper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>