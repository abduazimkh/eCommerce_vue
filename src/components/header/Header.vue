<script>
  import Container from "../../utils/Container.vue";


  export default {
    components: {
      Container,
    }
  }

</script>


<template>
  <div class="header">
    <Container>
      <div class="hero">
        <p>THE GRAPHENE T SHIRT</p>
        <h2>WE’VE USED THE LIGHTEST MATERIAL ON EARTH TO MAKE THE LIGHTEST T SHIRT WE’VE EVER BUILT</h2>
        <ul>
          <i class="bi bi-caret-right-fill"></i>
          <li>Join the waiting list</li>
        </ul>
      </div>
    </Container>
  </div>
</template>


<style>
  .header{
    position: relative;
    background-image: url("../../assets//images/hero.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh + 200px);
    transition: all .7s ease;
  }

  .hero{
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 1rem 1rem 2rem 2rem;
    color: var(--pl-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p{
      z-index: 2

    }

    h2{
      font-family: var(--staatliches-font);
      font-size: 1.7rem;
      font-weight: 500;
      letter-spacing: 3px;
      max-width: 960px;
      z-index: 2;
    }

    ul{
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--pl-color);
      font-size: 1.1rem;
      i{
        display: none;
      }
    }
  }
  
  .hero::after{
    transform-origin: bottom;
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-bottom: .5px solid #bdbdbda1;
    transform: scaleY(0);
    transition: all .3s ease;
  }

  .header:hover {
    .hero{
      color: var(--pd-color);
      ul{
        color: var(--pd-color);
        i{
          display: block;
        }
      }
    }
  }
  
  .header:hover  .hero::after{
    transform: scaleY(1);
  }

  @media only screen and (max-width: 900px) {
    .header{
      height: 70vh;
      /* background-position: calc(30%); */
    }
    .hero{
      h2{
        font-size: 1.5rem;
        max-width: 460px;
      }
    }
  
  }

  @media only screen and (max-width: 600px) {
    .header{
      height: calc(100vh + 200px);
      background-position: calc(100% - 70%);
    }

    .hero{
      width: 100vw;
      p{
        font-size: 13px;
      }
      h2{
        max-width: 580px;
        font-size: 1rem !important;
      }

      i{
        font-size: 12px;
      }

      li{
        font-size: 13px;
      }
    }

    .header {
    .hero{
      color: var(--pd-color);
      ul{
        color: var(--pd-color);
        i{
          display: block;
        }
      }
    }
    .hero::after{
      transform: scaleY(1);
      background-color: #fff;
      width: 100%;
      height: 100%;
      border-bottom: .5px solid #bdbdbda1;
    }
  }
  
  }

  @media only screen and (max-width: 600px) {
    .header{
      height: calc(60vh); 
      background-position: calc(100% - 70%);
    }
  }

  @media only screen and (max-width: 600px) {
    .header{
      margin-top: 200px;
      height: calc(60vh); 
      background-position: calc(100% - 70%);
    }
  }


</style>