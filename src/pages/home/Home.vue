<!-- script -->

<script>
  import Header from '../../components/header/Header.vue';
  import Main from "../../layout/main/Main.vue";

  export default {
    components: {
      Header,
      Main,
    }
  }

</script>


<!-- html -->

<template>
  <div class="home">
    <Header/>
    <Main/>
  </div>
</template>


<!-- style -->

<style lang="scss">
  .home{
    margin-top: 100px;
  }
</style>