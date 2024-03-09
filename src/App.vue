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
      console.log()
    }
  }

</script>

<!-- html -->

<template>
  <Nav v-if="!$route.path?.includes('/dashboard')" />
  <RouterView/>
  <Footer v-if="!$route.path?.includes('/dashboard')" />
</template>

<!-- style -->

<style>
</style>
