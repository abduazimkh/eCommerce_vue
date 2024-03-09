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
    }
  }

</script>

<!-- html -->

<template>
  <Nav/>
  <RouterView/>
  <Footer/>
</template>

<!-- style -->

<style>
</style>
