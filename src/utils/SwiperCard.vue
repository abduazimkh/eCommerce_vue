<script>
  import ProductSwiperImg from "./ProductSwiperImg.vue";

  export default{
    components: {
      ProductSwiperImg,

    },
    props: {
      info: {
        required: true,
      },
      el: {
        required: true,
        type: Object,
      }
    }
  }

</script>

<!-- html -->

<template>
    <RouterLink :to="'/single/'+el?.id">
      <ProductSwiperImg
        :imgs="el?.images[0]"
      />
      <span>{{ el?.title }}</span>
      <p>{{ el?.description.length >= 100 ? el?.description.slice(0, 100) : el?.description }}</p>
            
      <div class="price-text">
        <strong>${{ el?.price }}</strong>
      </div>
    </RouterLink>
</template>

<!-- style -->

<style >
  .product__swiper{
    margin: 100px 0;
    position: relative;
    height: 700px; 

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
    a{
      color: #333;
    }

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
      height: 45px;
      left: 0;
      bottom: 0;
      background-color: var(--pl-color);
      padding-left: 1px;
      strong{
        font-size: 13px;
      }
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
    height: 630px;
    object-fit: cover;
    margin-bottom: .236rem;
    border: 1px solid grey;
  }

  @media only screen and (max-width: 1300px) {
    .product__swiper{
      height: 600px; 

    }
    .swiper-slide img {
      height: 530px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .product__swiper{
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
    .product__swiper{
      height: 460px; 

    }
    .swiper-slide img {
      height: 375px;
    }
  }
  @media only screen and (max-width: 500px) {
    .product__swiper{
      height: 460px; 

    }
    .swiper-slide img {
      height: 385px;
    }
  }

  @media only screen and (max-width: 280px) {
    .product__swiper{
      height: 300px;
    }
    .swiper-slide img {
      height: 220px;

    }
  }


</style>