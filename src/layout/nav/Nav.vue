<!-- script -->

<script>
  import { RouterLink } from "vue-router";
  import Container from "../../utils/Container.vue";
  import Button from "../../utils/Button.vue";
  import TopNavigation from "../../components/top-navigation/TopNavigation.vue";
  import Search from "../../utils/Search.vue";

  export default {
    components: {
      Container,
      Button,
      TopNavigation,
      Search,

    },
    data(){
      return {
        isOpen: false,
      }
    },
    // methods() {
    //   console.log(this.isOpen)
    // }

  }


</script>


<!-- html -->

<template>
  <div class="navigation">
    <TopNavigation/>
    <Container>
      <nav>
        <button class="open">Open</button>
        <ul class="nav-list">
          <li>
            <RouterLink to="/">Shop</RouterLink>
          </li>
          <li>
            <RouterLink to="/">Ranges</RouterLink>
          </li>
          <li>
            <RouterLink to="/">Mission</RouterLink>
          </li>
          <li>
            <RouterLink to="/">About Us</RouterLink>
          </li>
        </ul>

        <h1><RouterLink to="/" >vollebak</RouterLink></h1>

        <ul class="nav-btns" >
          <Button @click="isOpen =! isOpen" ><span class="pi pi-search"></span></Button>
          <Button>
            <RouterLink to="/register" ><i class="bi bi-person"></i></RouterLink>
          </Button>
          <Button><RouterLink to="cart"><i class="bi bi-bag"></i></RouterLink></Button>
        </ul>

        <Button class="cart" ><RouterLink to="cart"><i class="bi bi-bag"></i></RouterLink></Button>
      </nav>
    </Container>
  </div>
  <Search :isOpen="isOpen" v-if="isOpen" />
</template>


<!-- style -->

<style lang="scss">
  .navigation{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    background-color: #fff;
    // box-shadow: 0 0 5px 1px grey;
  }
  nav{
    padding: 14px 0;
    display: flex;
    align-items: center;
    .open, .cart{
      display: none;
    }

    a{
      color: var(--pd-color);
    }
    
    h1{
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2rem;
      font-family: var(--league-font);
      letter-spacing: .7rem;
      flex: 1;
    } 
  }
  .nav-list{
    display: flex;
    align-items: center;
    gap: 0 2rem;
    flex: 1;
  }
  .nav-btns{
    display: flex;
    align-items: center;
    gap: 1rem;
    button{
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #111;

      cursor: pointer;
      a{
        color: #111;
      }
      span{
        font-size: 1rem;
        color: #111;

      }
      i{
        font-size: 1.2rem;
        color: #111;

      }
    }
  }


  @media only screen and (max-width: 850px) {
    nav{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;

      .open, .cart{
        display: block;
      }

      .nav-list, .nav-btns{
        display: none;
      }

      .open{
        max-width: 50px;
        height: 30px;
      }

      .cart{
        place-self: end;
      }

      h1{
        place-self: center;
      }

    }
  }

  @media only screen and (max-width: 400px) {
    nav{
      grid-template-columns: 1fr;
      place-items: center;
      gap: 10px;
      
      .cart{
        place-self: center;
      }

      h1{
        font-size: 1.4rem;
        place-self: center;
      }

    }
  }

</style>