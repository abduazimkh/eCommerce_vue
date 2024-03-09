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
  <Container>
    <div class="muvie-banner">
      <video height="1000" autoplay muted src="../../assets/images/video.mp4"></video>

      <div class="muvie-content">
        <span>MATERIAL TECHNOLOGY</span>
        <h3>SEE HOW WE’RE USING MATERIAL TECHNOLOGY TO BUILD THE FUTURE</h3>
        <p>Today we work with the most advanced materials in the world. Some started their life at NASA. Others started their life in nature.</p>
        <RouterLink to="/" >Read more</RouterLink>
      </div>
    </div>
  </Container>
</template>


<!-- style -->

<style lang="scss">
  .muvie-banner{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: start;
    gap: 100px;
    margin-bottom: 200px;
    justify-content: space-between;
    video{
      width: 100%;
      place-self: start;
      height: 100%;
    }

  }

  .muvie-content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    a{
      color: var(--pd-color);
    }
    h3{
      font-size: 2.5rem;
      font-family: var(--staatliches-font);
      letter-spacing: 2px;
      max-width: 400px;
    }
    p{
      font-size: 1.1rem;
      max-width: 500px;
    }
  }

  @media only screen and (max-width: 1250px) {
    .muvie-banner{
      place-items: center;
    }
  }

  @media only screen and (max-width: 800px) {
    .muvie-banner{
      grid-template-columns: 1fr !important;
    }
  }

  @media only screen and (max-width: 500px) {
    .muvie-content{
      a{
        font-size: 13px;
      }
      h3{
        font-size: 1.2rem;
      }
      p{
        font-size: 13px;
      }
    }
  }

</style>