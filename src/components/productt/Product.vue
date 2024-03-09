<!-- script -->

<script>
  import Container from "../../utils/Container.vue";

  export default {
    components: {
      Container
    }
  }

</script>


<!-- html -->

<template>
  <div class="header banner2">
    <Container>
      <div class="hero">
        <p>THE GRAPHENE T SHIRT</p>
        <h2>WE’VE USED THE LIGHTEST MATERIAL ON EARTH TO MAKE THE LIGHTEST T SHIRT WE’VE EVER BUILT</h2>
        <ul>
          <i class="bi bi-caret-right-fill"></i>
          <li>Join the waiting list jjj</li>
        </ul>
      </div>
    </Container>
  </div>
</template>


<!-- style -->

<style lang="scss">
  .banner2{
    background-image: url("../../assets//images/banner3.webp");
  }

  @media only screen and (max-width: 500px) {
    .banner2{
      background-position: center;
    }
  }

</style>