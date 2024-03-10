<!-- script -->

<script>
  import Container from "../../../utils/Container.vue";

  export default {
    components: {
      Container,
    }
  }

</script>


<!-- html -->

<template>
  <Container>
    <div class="auth__wrapper">
    <form class="register__form">
      <h1>Sign Up</h1>

      <input type="text" placeholder="First name">
      <input type="text" placeholder="Last Name">
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <input type="file" accept=".png" placeholder="Image">

      <button>Sign Up</button>

      <small>If you are already registered, go to <router-link to="/login" >Login</router-link> page</small>
    </form>
    </div>
  </Container>
</template>


<!-- style -->

<style lang="scss">
  .auth__wrapper{
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .register__form{
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background-color: #3333;
    padding: 20px 10px;

    h1{
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    input, button{
      border: none;
      outline: none;

      height: 35px;
      text-indent: 10px;
    }

    button{
      color: var(--pl-color);      
      background-color: blueviolet;
    }

    small{
      padding-top: 10px;
      a{
        color: blue;
      }
    }

  }

</style>