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
    methods:{
      uploadImage(e){
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e =>{
          this.previewImage = e.target.result;

        };
      },
      createUser(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("password", this.password);
        formData.append("avatar", this.avatar);

        instance.post('users', formData)
          .then(response => {
            this.info = response.data;
            if(response.status === 201){
              window.location = '/login';
            }
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
        .finally(() => this.loading = false)

      }
      // saveChanges(){
      //   const formData = new FormData();
      //   formData.append("name", "Aaaa");
      //   formData.append("email", "Abbb@gmail.com");
      //   formData.append("password", "Accch");
      //   formData.append("avatar", "");

      //   instance.post('users', formData)
      //     .then(response => {
      //       this.info = response
      //       console.log(this.info)
      //     })
      //     .catch(error => {
      //       console.log(error)
      //       this.errored = true
      //     })
      //   .finally(() => this.loading = false)
      // },
    }
  }

</script>


<!-- html -->

<template>
  <Container>
    <div class="auth__wrapper">
    <form class="register__form" v-on:submit="createUser" >
      <h1>Sign Up</h1>

      <input v-model="name" type="text" placeholder="First name">
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <input v-model="avatar" type="text" placeholder="Image">
      <!-- <input @change="uploadImage" type="file" accept="image/*" placeholder="Image"> -->

      <button >Sign Up</button>

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