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
  <div class="cards-content">
    <div class="header cards1">
      <div class="hero">
        <p>THE GRAPHENE T SHIRT</p>
        <h2>WE’VE USED THE LIGHTEST MATERIAL ON EARTH TO MAKE THE LIGHTEST T SHIRT WE’VE EVER BUILT</h2>
        <ul>
          <i class="bi bi-caret-right-fill"></i>
          <li>Join the waiting list</li>
        </ul>
      </div>
  </div>
  <div class="header cards2">
      <div class="hero">
        <p>THE GRAPHENE T SHIRT</p>
        <h2>WE’VE USED THE LIGHTEST MATERIAL ON EARTH TO MAKE THE LIGHTEST T SHIRT WE’VE EVER BUILT</h2>
        <ul>
          <i class="bi bi-caret-right-fill"></i>
          <li>Join the waiting list</li>
        </ul>
      </div>
  </div>
  </div>
</template>


<!-- style -->

<style lang="scss">
  .cards-content{
    width: 100%;
    position: relative;
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

  }

  .cards1{
    background-image: url("../../assets/images/banner1.webp");
  }
  .cards2{
    background-image: url("../../assets/images/banner2.webp");
  }

</style>