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
      <h1>Login</h1>

      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">

      <button>Login</button>

      <small>If you have not an account yet, go to <router-link to="/register" >Sign Up</router-link> page</small>
    </form>
    </div>
  </Container>
</template>


<!-- style -->

<style lang="sass">
</style>