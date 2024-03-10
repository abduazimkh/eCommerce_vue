<!-- script -->

<script>
</script>


<!-- html -->

<template>
  <aside class="sidebar" >

    <router-link class="dashboard-logo" to="/" >
      Villebox
    </router-link>

    <ul>
      <li><router-link to="/dashboard" >Manage Product</router-link></li>
      <li><router-link to="/dashboard/categories" >Manage Categories</router-link></li>
      <li><router-link to="/dashboard/users" >Manage Users</router-link></li>
    </ul>

    <ul class="nav-media">
      <li><router-link to="/dashboard" >PP</router-link></li>
      <li><router-link to="/dashboard/categories" >CC</router-link></li>
      <li><router-link to="/dashboard/users" >UU</router-link></li>
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

    .nav-media{
      display: none;
    }

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




@media only screen and (max-width: 800px){  
  .sidebar{
    bottom: 0;
    left: 0;
    min-width: 100vw;
    width: 100vw;
    max-height: 80px;
    z-index: 9999;
    position: fixed;
    align-items: center;
    justify-content: center;
    .dashboard-logo{
      display: none;
    }

    ul{
      align-items: center;
      flex-direction: row;

      li{
        
        a{
          margin: 0;
          font-size: 1.1rem;
        }
      }
    }


  }
}



@media only screen and (max-width: 500px){
  .sidebar{
    ul{
      gap: 10px;
      li{
        a{
          gap: 0;
          font-size: 1rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 400px){
  .sidebar{
    height: 70px;
    .nav-media{
      a{
        display: inline-block;
      }
      gap: 3rem;
      display: flex !important;
    }
    ul{
      li{
        a{
          display: none;
        }
      }
    }
  }

}

</style>