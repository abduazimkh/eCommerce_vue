<!-- script -->

<script>
  import Header from '../../components/header/Header.vue';
  import Main from "../../layout/main/Main.vue";
  import Footer from "../../layout/footer/Footer.vue";

  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }

</script>


<!-- html -->

<template>
  <div class="home">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>


<!-- style -->

<style lang="scss">
  .home{
    margin-top: 100px;
  }
</style>