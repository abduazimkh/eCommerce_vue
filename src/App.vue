<!-- script -->

<script>
  import { RouterView } from 'vue-router';
  import Nav from "./layout/nav/Nav.vue"; 
  import Footer from "./layout/footer/Footer.vue"; 
  import 'primeicons/primeicons.css';

  export default {
    components: {
      Nav,
      Footer
    },
    mounted(){
      const a = JSON.parse(atob(localStorage.getItem("access_token")))
      if(!a){
        window.location = "/"

      }
    },
    updated(){
      const a = JSON.parse(atob(localStorage.getItem("access_token")))
      if(!a){
        window.location = "/"

      }
    }
  }

</script>

<!-- html -->

<template>
  <Nav v-if="!$route.path?.includes('/dashboard') && !$route.path?.includes('/register') && !$route.path?.includes('/login')" />
  <RouterView/>
  <Footer v-if="!$route.path?.includes('/dashboard') && !$route.path?.includes('/register') && !$route.path?.includes('/login')" />
</template>

<!-- style -->

<style>
</style>
