<!-- script -->

<script>
  import instance from "../../../services/api";
import Container from "../../../utils/Container.vue";

  export default {
    components: {
      Container,
    },
    data () {
      return {
        info: null,
        loading: true,
        errored: false,
        previewImage: null,
        name: "",
        email: "",
        password: "",
        avatar: "",
      }
    },
    methods: {
      createUser(e){
        e.preventDefault();

        instance.post('auth/login', {
          email: this.email,
          password: this.password
        })
          .then(response => {
            this.info = response.data;
            if(response.status === 201){
              localStorage.setItem("access_token", btoa(JSON.stringify(response.data.access_token)));
              localStorage.setItem("refresh_token", btoa(JSON.stringify(response.data.access_token)));
              window.location = '/';
            }
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
        .finally(() => this.loading = false)

      }
    }

  }

</script>


<!-- html -->

<template>
  <Container>
    <div class="auth__wrapper">
    <form class="register__form" v-on:submit="createUser" >
      <h1>Login</h1>

      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">

      <button>Login</button>

      <small>If you have not an account yet, go to <router-link to="/register" >Sign Up</router-link> page</small>
    </form>
    </div>
  </Container>
</template>


<!-- style -->

<style lang="sass">
</style>