<script>
  import "../Dashboard.scss";
  import Table from "../../../components/user-table/UserTable.vue";
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
    instance('users')
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
      <h2>Manage User</h2>

      <button>Create User</button>
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
      <tbody>
        <Table
            v-for="el in info"
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
</template>