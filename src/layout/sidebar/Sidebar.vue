<!-- script -->

<script>
</script>


<!-- html -->

<template>
  <aside class="sidebar" >

    <router-link to="/" >
      Villebox
    </router-link>

    <ul>
      <li><router-link to="/dashboard" >Manage Product</router-link></li>
      <li><router-link to="/dashboard/categories" >Manage Categories</router-link></li>
      <li><router-link to="/dashboard/users" >Manage Users</router-link></li>
    </ul>
  </aside>
</template>


<!-- style -->

<style lang="scss">
  .sidebar{
    padding: 1rem;
    min-width: 300px;
    max-width: 300px;
    height: 100vh;
    background-color: #111;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;

    a{
      font-size: 2.5rem;
      color: #fff;
      margin-bottom: 2rem
    }

    ul{
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      li{
        a{
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.3rem;
        }
      }
    }

  }

</style>