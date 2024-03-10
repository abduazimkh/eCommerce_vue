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

    }
  },
  methods: {
    allData: function () {
      instance('products')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false);
    },

    createProduct(e){
      e.preventDefault();

      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("price", this.price);
      formData.append("category", this.category);
      formData.append("images", ["https://api.360tv.ru/get_resized/B6xgwEwtWMG0lFu1jzGBY2Nquv0=/1080x607/filters:focal(0.5:0.5):format(webp)/YXJ0aWNsZXMvaW1hZ2UvMjAyMy81L3RhZHpoaWstcG9ldC5qcGc.webp"]);

      instance.post('products', formData)
        .then(response => {
          this.info = response;
          console.log(this.info)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
      .finally(() => this.loading = false)
    },

    createProduct(e){
      e.preventDefault();

      instance.put('products', {
        title: this.title,
        price: this.price
      })
        .then(response => {
          this.info = response;
          console.log(this.info)
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
      }
    }

  },
  mounted() {
    this.allData()
  },
}


</script>



<template>
  <div class="manage__wrapper">
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
            :dataCell="el"
            :name="el?.title"
            :category="el?.category.name"
            :price="el?.price"
            :imgs="el?.images[0]"
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
      <input v-model="category" type="number" placeholder="Category">
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