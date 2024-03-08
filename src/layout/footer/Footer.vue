<!-- script -->

<script>
  import { RouterLink } from "vue-router";
  import Container from "../../utils/Container.vue";
  import instance from "../../services/api";

  export default {
    components: {
      Container
    },
    data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
    mounted () {
    instance.get('categories')
      .then(response => {
        this.info = response.data
        console.log(this.info)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
  }

</script>


<!-- html -->

<template>
  <footer>
    <Container>
      <div class="footer__content">
        <h2>Shop</h2>

        <div class="shop-cards">
          <RouterLink :to="'/'+el.name"  class="shop-card"  v-for="el in info" >
            <RouterLink :to="'/'+el.name" >{{ el.name }}</RouterLink>
          </RouterLink>
        </div>
      </div>
    </Container>

    <div class="footer__bottom--nav">
      <Container>
        <div class="footer-nav">
          <div class="footer__nav--form__wrapper">
            <h3>SIGN UP FOR ADVANCE ACCESS TO EVERY NEW RELEASE</h3>

            <form>
              <div class="sumition">
                <input type="text" placeholder="Enter email address">
                <button>Sign Up</button>
              </div>
              <div class="checkbox-item">
                <input type="checkbox">
                <label for="">I agree to the terms and conditions</label>
              </div>
            </form>
          </div>
          <ul class="footer__nav--list">
            <ul>
              <li> <RouterLink to="/">Shopping</RouterLink> </li>
              <li> <RouterLink to="/">Returns</RouterLink> </li>
              <li> <RouterLink to="/">FAQs</RouterLink> </li>
              <li> <RouterLink to="/">Guarantee</RouterLink> </li>
              <li> <RouterLink to="/">Contact Us</RouterLink> </li>
              <li> <RouterLink to="/">Size Guide</RouterLink> </li>
            </ul>
            <ul>
              <li> <RouterLink to="/">Terms and Conditions</RouterLink> </li>
              <li> <RouterLink to="/">Privacy Policy</RouterLink> </li>
            </ul>
          </ul>
        </div>
      </Container>
    </div>

    <Container>
      <div class="footer-rights">
        <small>© Vollebak 2024 All rights reserved</small>
      </div>
    </Container>

  </footer>
</template>


<!-- style -->

<style lang="scss">
  .footer__content{
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    h2{
      font-size: 2.5rem;
      font-family: var(--staatliches-font);
      font-weight: 500;
    }
  }

  .shop-cards{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
    margin-bottom: 50px; 

    .shop-card{
      transition: all .2s ease-in;
      padding: 1.5rem 0;
      border-bottom: 1px solid lightgrey;
      a{
        transition: all .2s ease-in;
        color: var(--pd-color);
        font-size: 1rem;
        opacity: .8;
        text-transform: uppercase;
      } 
    }

    .shop-card:hover{
      border-bottom: 1px solid #333;
      a{
        padding-left: 2rem
      } 
    }
  }


  .footer__bottom--nav{
    padding: 80px 0 80px 0;
    border-top: 1px solid #4445;
    border-bottom: 1px solid #4445;
    .footer-nav{
      display: flex;
      gap: 2rem;
      
      h3{
        font-size: 3rem;
        font-family: var(--staatliches-font);
        font-weight: 500;
        max-width: 760px;
      }

      .footer__nav--form__wrapper{
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
      }

      form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        height: 100px;

        .sumition{
          height: 70px;
          border-bottom: 1px solid grey;
          display: flex;
          align-items: center;
          input{
            font-size: 1rem;
            height: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            flex: 1;
          }

          &:has(> input:focus){
            border-bottom: 1px solid blue;
          }

          button{
            font-size: 1rem;
            background-color: transparent;
            border: none;
            outline: none;

          }

        }

      }


      .footer__nav--list{
        width: 40%;
        justify-content: space-around;
        display: flex;
        gap: 1rem;

        ul{
          display: flex;
          flex-direction: column;
          gap: 1.3rem;

          li a{
            color: #3339;
            &:hover{
              color: #222;
            }
          }
        }
      }

    }
  }


  .footer-rights{
    padding: 2rem 0;
  }



</style>