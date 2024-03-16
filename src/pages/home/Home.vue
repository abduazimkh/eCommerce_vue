<!-- script -->

<script>
  import Header from '../../components/header/Header.vue';
  import Main from "../../layout/main/Main.vue";
  import BackToTop from 'vue-backtotop';

  export default {
    components: {
      Header,
      Main,
      BackToTop
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },
    mounted () {
      this.scrollToTop()
    },
    updated(){
      this.scrollToTop()
    }
  }

</script>


<!-- html -->

<template>
  <div class="home">
    <Header/>
    <Main/>
    <back-to-top text="Back to top" ></back-to-top>
  </div>
</template>


<!-- style -->

<style lang="scss">
  .home{
    margin-top: 100px;
  }

</style>