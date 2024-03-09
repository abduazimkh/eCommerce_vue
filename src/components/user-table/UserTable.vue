<!-- script -->

<script>

  export default { 
    components: {
      
    },
    props: {
      name: {
        required: true
      },
      category: {
        required: true
      },
      price: {
        required: true
      },
      imgs: {
        required: true
      },
      created: {
        required: true
      }
    }
  }

</script>


<!-- html -->

<template>
  <tr>
    <td>{{ name }}</td>
    <td>
      <p className="table-variant__wrapper">
        <span >{{ category }}</span>
      </p>
    </td>
    <td>${{ price }}</td>
    <td>{{ created.slice(0, 10) }}</td>
    <td>
      <img :src="imgs" :alt="name" />
    </td>
    <td>
      <div className="table-action__wrapper">
        <button class="link btn-warning">Edit</button>
        <button class="link btn-danger">Delete</button>
      </div>
    </td>
  </tr>
</template>


<!-- style -->

<style scoped lang="scss">

</style>