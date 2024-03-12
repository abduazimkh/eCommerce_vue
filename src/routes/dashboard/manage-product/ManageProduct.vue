<script>
  import "../Dashboard.scss";
  import Table from "../../../components/manage-table/ManageTable.vue";
  import instance from "../../../services/api"; 
  import Modal from "../../../utils/Modal.vue";

  export default {
    components: {
      Table,
      Modal
    },
    data () {
    return {
      input_value: "",
      info: null,
      categoryData: null,
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
      instance('products')
      .then(response => {
        this.info = response.data.filter(a => this.input_value ? a.title.toLowerCase().includes(this.input_value.toLowerCase()) : a )
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);
    },
    allCategoryData: function () {
      instance('categories')
      .then(response => {
        this.categoryData = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);
    },

    singleData(id){
      instance('products/'+ id)
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

      // console.log(this.category)

      instance.post('products', {
        title: this.title,
        price: this.price,
        description: this.description,
        categoryId: this.category,
        images: this.images.split(" ")

      })
        .then(response => {
          this.info = response;
          if(response.status === 201){
            this.isOpen = false;
            console.log(response.data)
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
      .finally(() => this.loading = false)
    },

    updateProduct(e){
      e.preventDefault();

      instance.put(`products/${this.productId}`, {
        title: this.title,
        price: this.price
      })
        .then(response => {
          if(response.status === 200){
            this.isEditOpen = false;
          }
          this.title = "";
          this.price = "";
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
        this.productId = e.target.dataset.productId
        this.singleData(this.productId)
      }
    }

  },
  mounted() {
    this.allData()
    this.allCategoryData()
  },
  updated() {
    this.allData()
  },
}


</script>



<template>
  <div class="manage__wrapper">
    <div class="table-search">
      <form  v-on:submit.prevent >
        <input v-model="input_value" type="text" placeholder="Search">
      </form>
    </div>
    <div class="manage-box">
      <h2>Manage Product</h2>

      <button @click="isOpen =! isOpen" >Create Product</button>
    </div>

    <div className="table-wrapper">
      <table className="dashboard-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Data</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody @click="handleClick" >
        <Table
            v-for="el in info"
            :id="el.id"
            :dataCell="el"
            :name="el?.title"
            :category="el?.category?.name"
            :price="el?.price"
            :imgs="el.images[0]"
            :created="el?.creationAt"
            :isEditOpen="isEditOpen"
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
      <input v-model="description" type="text" placeholder="description">
      <input v-model="price" type="number" placeholder="Price">
      <select v-model="category">
        <option v-for="el in categoryData" :value="el.id">{{ el.name }}</option>
      </select>
      <input v-model="images" type="text" placeholder="Images">

      <button>Create Product</button>
    </form>
  </Modal>


  <Modal
    :isEditOpen="isEditOpen"
  >
    <form v-on:submit="(e) => updateProduct(e)">
      <h2>Update Product</h2>
      <input v-model="title" type="text" placeholder="Title">
      <input v-model="price" type="number" placeholder="Price">

      <button>Update Product</button>
    </form>
  </Modal>

</template>