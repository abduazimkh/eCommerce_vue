<script>
  import "../Dashboard.scss";
  import Table from "../../../components/manage-table/ManageTable.vue";
  import instance from "../../../services/api"; 


  export default {
    components: {
      Table,

    },
    data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
    mounted () {
    instance('products')
      .then(response => {
        this.info = response.data
        console.log(this.info)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }

  }


</script>



<template>
  <div class="manage__wrapper">
    <div class="manage-box">
      <h2>Manage Product</h2>

      <button>Create Product</button>
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
      <tbody>
        <Table
            v-for="el in info"
            :name="el?.title"
            :category="el?.category.name"
            :price="el?.price"
            :imgs="el?.images[0]"
            :created="el?.creationAt"
          />
      </tbody>
      <tfoot></tfoot>
    </table>
    </div>
  </div>
</template>