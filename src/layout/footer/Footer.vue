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
              <div class="checkbox-wrapper-37">
                <input type="checkbox" name="checkbox" id="terms-checkbox-37" />
                <label for="terms-checkbox-37" class="terms-label">
                  <svg
                    class="checkbox-svg"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_476_5-37" fill="white">
                      <rect width="200" height="200" />
                    </mask>
                    <rect
                      width="200"
                      height="200"
                      class="checkbox-box"
                      stroke-width="40"
                      mask="url(#path-1-inside-1_476_5-37)"
                    />
                    <path
                      class="checkbox-tick"
                      d="M52 111.018L76.9867 136L149 64"
                      stroke-width="15"
                    />
                  </svg>
                  <span class="label-text">I agree to the terms and conditions</span>
                </label>
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

        .checkbox-wrapper-37 input[type="checkbox"] {
          display: none;  
        }
        .checkbox-wrapper-37 .terms-label {
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .checkbox-wrapper-37 .terms-label .label-text {
          margin-left: 10px;
        }
        .checkbox-wrapper-37 .checkbox-svg {
          width: 25px;
          height: 25px;
          border: 1px solid #7777 !important;
        }
        .checkbox-wrapper-37 .checkbox-svg {
          border: 1px solid transparent;
        }
        .checkbox-wrapper-37 .checkbox-box {
          fill: #fff;
          // stroke: #ff7a00;
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          transition: stroke-dashoffset 0.6s ease-in;
        }
        
        .checkbox-wrapper-37 .checkbox-tick {
          stroke: #111;
          stroke-dasharray: 182;
          stroke-dashoffset: 182;
          transition: stroke-dashoffset 0.4s ease-in;
        }
        .checkbox-wrapper-37 input[type="checkbox"]:checked + .terms-label .checkbox-box,
        .checkbox-wrapper-37 input[type="checkbox"]:checked + .terms-label .checkbox-tick {
          stroke-dashoffset: 0;
        }

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
            padding-right: 10px;
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
