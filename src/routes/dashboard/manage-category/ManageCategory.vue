<script>
  import "../Dashboard.scss";
  import Table from "../../../components/manage-table/ManageTable.vue";

  export default {
    components: {
      Table,

    },

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
          <th>Name</th>
          <th>Name</th>
          <th>Name</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <Table

        />
      </tbody>
      <tfoot></tfoot>
    </table>
    </div>
  </div>
</template>