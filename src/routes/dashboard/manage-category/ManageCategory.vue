<script>
  import "../Dashboard.scss";
  import Table from "../../../components/category-table/CategoryTable.vue";
  import instance from "../../../services/api"; 
  import Modal from "../../../utils/Modal.vue";

  export default {
    components: {
      Table,
      Modal

    },
    data () {
    return {
      info: null,
      loading: true,
      errored: false,
      isOpen: false,
      isEditOpen: false,
      title: "",
      description: "",
      price: Number,
      category: Number,
      images: null,
      productId: null,
    }
  },
  methods: {
    allData: function () {
      instance('categories')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);
    },

    singleData(id){
      instance('categories/'+ id)
      .then(response => {
        this.info = response.data
        this

        console.log(this.info)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);
    },

    createProduct(e){
      e.preventDefault();

      instance.post('categories', {
        name: this.title,
        image: this.images
      })
        .then(response => {
          this.info = response;
          if(response.status === 201){
            this.isOpen = false;

          }
          console.log(this.info)
          this.title = "";
          this.images = "";
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
      .finally(() => this.loading = false)
    },

    updateProduct(e){
      e.preventDefault();

      instance.put(`categories/${this.productId}`, {
        name: this.title,
      })
        .then(response => {
          if(response.status === 200){
            this.isEditOpen = false;

          }
          this.title = "";
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
        this.productId = e.target.dataset.id
        this.singleData(this.productId)
      }
    }

  },
  mounted() {
    this.allData()
  },
  updated() {
    this.allData()
  },

  }


</script>


<template>
  <div class="manage__wrapper">
    <div class="manage-box">
      <h2>Manage Category</h2>

      <button @click="isOpen =! isOpen" >Add Category</button>
    </div>

    <div className="table-wrapper">
      <table className="dashboard-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Category</th>
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
          :imgs="el?.image"
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
    <form v-on:submit="(e) => createProduct(e)">
      <h2>Create Product</h2>
      <input v-model="title" type="text" placeholder="Title">
      <input v-model="images" type="text" placeholder="Images">

      <button>Create Product</button>
    </form>
  </Modal>


  <Modal
    :isEditOpen="isEditOpen"
  >
    <form v-on:submit="(e) => updateProduct(e)">
      <h2>Update Category</h2>
      <input v-model="title" type="text" placeholder="Title">

      <button>Update Category</button>
    </form>
  </Modal>

</template>