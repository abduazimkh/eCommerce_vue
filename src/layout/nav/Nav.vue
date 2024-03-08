<!-- script -->

<script>
  import { RouterLink } from "vue-router";
  import Container from "../../utils/Container.vue";
  import Button from "../../utils/Button.vue";
  import TopNavigation from "../../components/top-navigation/TopNavigation.vue";

  export default {
    components: {
      Container,
      Button,
      TopNavigation,

    }
  }


</script>


<!-- html -->

<template>
  <div class="navigation">
    <TopNavigation/>
    <Container>
      <nav>
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

        <h1>vollebak</h1>

        <ul class="nav-btns" >
          <Button><span class="pi pi-search"></span></Button>
          <Button><i class="bi bi-person"></i></Button>
          <Button><i class="bi bi-bag"></i></Button>
        </ul>
      </nav>
    </Container>
  </div>
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
      span{
        font-size: 1rem;
      }
      i{
        font-size: 1.2rem;
      }
    }
  }

</style>