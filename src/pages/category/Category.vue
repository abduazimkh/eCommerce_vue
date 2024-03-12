<script>
  import instance from '../../services/api';
  import ProductSwiperImg from "../../utils/ProductSwiperImg.vue";;
  import Container from "../../utils/Container.vue";


  export default {
    components: {
      ProductSwiperImg,
      Container,
    },
    data () {
      return {
        info: null,
        loading: true,
        errored: false,
        isActive: false,
        first: null,
        second: null
      }
    },
    methods: {
      singleCategoryAllProducts(){
        instance(`categories/${this.$route.params.id}/products`)
        .then(response => {
          this.info = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
      },
      scrollToTop() {
        window.scrollTo(0,0);
      },
      imageChange(e){
        if(e.target.dataset.id){
          this.info.filter(a => {
            if(a.id == +e.target.dataset.id){
              this.first = a.images[1]
            }
          })
        }
      }
    },
    mounted(){
      this.singleCategoryAllProducts()
      this.scrollToTop()
    },
    updated(){
      this.singleCategoryAllProducts()
    },
    unmounted(){
      this.scrollToTop()
    }
  }

</script>


<template>
  <Container>
    <div class="category__wrapper">
    <div class="category__top--content">
      <h1 v-if="info" >{{ info[0]?.category?.name }}</h1>
      <p>From chillout hoodies for Mars, 100 Year Hoodies designed to outlive you, and Indestructible Sweatpants that can withstand 75kmph falls, we make the most advanced hoodies and sweats anywhere on Earth and beyond. </p>
    </div>

    <div class="category__cards">
      <div @mouseover="imageChange" v-if="info" class="category-card" v-for="el in info">
        <ProductSwiperImg
          @mouseover="isActive = true"
          @mouseleave="isActive = false"
          :active="isActive"
          :el="el.id"
          :first="first"
          :imgs="el?.images[0]"
        />
        <span >{{ el.title }}</span>
        <small>{{ el.description.length > 100 ? el.description.slice(0, 100) : el.description }}</small>

        <div class="price">
          <strong>${{ el.price }}</strong>
        </div>
      </div>
    </div>

  </div>
  </Container>
</template>


<style>
  .category__wrapper{
    margin-top: 130px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 100px;
  }

  .category__top--content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #1111113f;
    font-family: var(--pontano-font);
    margin: 2rem 0;
    padding-bottom: 3rem;
    h1{
      font-size: 3rem;
    }
    p{
      font-size: 1.1rem;
      max-width: 750px;
      color: #1119;
      margin-right: 150px;
    }
    
  }

  .category__cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 5px;
  }

  .category-card{
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-height: 800px;
    position: relative;
    overflow: hidden;
    span{
      margin-bottom: 10px;
    }

    .price{
      width: 100%;
      height: 90px;
      background-color: #fff;
      position: absolute;
      left: 0;
      bottom: -100%;
      transition: all .4s ease-in-out;
      strong{
        font-size: .9rem;
      }
    }

    img{
      width: 100%;
      aspect-ratio: 1/1.1;
    }
  }

  .category-card:hover{
    .price{
      bottom: 0;
      
    }
  }

</style>