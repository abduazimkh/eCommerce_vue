<script>
  import "./Dashboard.scss";
  import Sidebar from "../../layout/sidebar/Sidebar.vue";

  export default {
    components: {
      Sidebar,

    }
  }

</script>

<template>
  <div class="dashboard__wrapper">
    <Sidebar/>
    <div class="outlet">
      <router-view />
    </div>
  </div>
</template>