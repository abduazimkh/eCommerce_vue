<script>
  import "./Dashboard.scss";
  import Sidebar from "../../layout/sidebar/Sidebar.vue";

  export default {
    components: {
      Sidebar,

    },
    data() {
      return {
        user: null,
      }
    },
    mounted() {
      this.user = JSON.parse(atob(JSON.parse(atob(localStorage.getItem("access_token"))).split(".")[1])).exp < (new Date().getTime() + 1) / 1000
    
      if(this.user === true){
        window.location = "/"
      }
    },
    updated(){
      if(this.user === true){
        window.location = "/"
      }
    }
  }

</script>

<template>
  <div  v-if="user !== true" class="dashboard__wrapper">
    <Sidebar/>
    <div class="outlet">
      <router-view />
    </div>
  </div>

</template>