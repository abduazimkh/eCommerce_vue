<script>
  import "../Dashboard.scss";
  import Table from "../../../components/user-table/UserTable.vue";
  import instance from "../../../services/api"; 
import Modal from "../../../utils/Modal.vue";


  export default {
    components: {
      Table,
      Modal,
    },
    data () {
    return {
      info: null,
      singleUser: null,
      loading: true,
      errored: false,
      isOpen: false,
      isEditOpen: false,
      username: "",
      email: "",
      password: "",
      images: null,
      userId: null,
    }
  },
  methods: {
    allUsers: function () {
      instance('users')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);
    },

    // singleUser(id){
    //   instance('users/'+ id)
    //   .then(response => {
    //     this.singleUser = response.data
    //     console.log(this.info)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     this.errored = true
    //   })
    //   .finally(() => this.loading = false);
    // },

    createUser(e){
      e.preventDefault();

      instance.post('users/', {
        name: this.username,
        email: this.email,
        password: this.password,
        avatar: this.images

      })
        .then(response => {
          this.info = response;
          console.log(response.data)
          if(response.status === 201){
            this.isOpen = false;
          }
          this.username = "",
          this.email = "",
          this.password = "",
          this.images = null
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
      .finally(() => this.loading = false)
    },

    updateUser(e){
      e.preventDefault();

      instance.put(`users/${this.userId}`, {
        email: this.email,
        name: this.username
      })
        .then(response => {
          if(response.status === 200){
            this.isEditOpen = false;
          }
          this.email = "";
          this.name = "";
          this.info = response.data;
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
      .finally(() => this.loading = false)
    },

    handleClick(e){
      if(e.target.closest(".btn-warning")){
        this.isEditOpen =! this.isEditOpen 
        this.userId = e.target.dataset.id
        // this.singleUser(this.userId)
      }
    }

  },
  mounted() {
    this.allUsers()
  },
  updated() {
    this.allUsers()
  },

  }


</script>



<template>
  <div class="manage__wrapper">
    <div class="manage-box">
      <h2>Manage User</h2>

      <button @click="isOpen =! isOpen"  > Create User</button>
    </div>

    <div className="table-wrapper">
      <table className="dashboard-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Role</th>
          <th>Data</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody  @click="handleClick" >
        <Table
            v-for="el in info"
            :id="el.id"
            :dataCell="el"
            :name="el?.id"
            :category="el?.name"
            :role="el?.role"
            :imgs="el?.avatar"
            :created="el?.creationAt"
          />
      </tbody>
      <tfoot></tfoot>
    </table>
    </div>
  </div>
  <Modal 
   :isOpen="isOpen"
  >
    <form  v-on:submit="(e) => createUser(e)">
      <h2>Create user</h2>
      <input v-model="username" type="text" placeholder="Name">
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="text" placeholder="Password">
      <input v-model="images" type="text" placeholder="Images">

      <button>Create user</button>
    </form>
  </Modal>


  <Modal
    :isEditOpen="isEditOpen"
  >
    <form v-on:submit="(e) => updateUser(e)">
      <h2>Update User</h2>
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="username" type="text" placeholder="Name">

      <button>Update User</button>
    </form>
  </Modal>





</template>