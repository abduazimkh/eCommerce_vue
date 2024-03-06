<!-- script -->

<script>
  import { RouterView } from 'vue-router';
  import Nav from "./layout/nav/Nav.vue"; 
  import 'primeicons/primeicons.css';

  export default {
    components: {
      Nav,
    }
  }

</script>

<!-- html -->

<template>
  <Nav/>
  <RouterView/>
</template>

<!-- style -->

<style>
</style>
