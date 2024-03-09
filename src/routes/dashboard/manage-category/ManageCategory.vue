<script>
  import "../Dashboard.scss";
  import Table from "../../../components/category-table/CategoryTable.vue";
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
    instance('categories')
      .then(response => {
        this.info = response.data
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
      <h2>Manage Category</h2>

      <button>Add Category</button>
    </div>

    <div className="table-wrapper">
      <table className="dashboard-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Data</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <Table
            v-for="el in info"
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
</template>