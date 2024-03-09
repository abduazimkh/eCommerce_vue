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
      },
      dataCell: {
        required: true
      }
    },
    mounted(){
      console.log(Object.keys(this.dataCell))
    }
  }

</script>


<!-- html -->

<template>
  <tr>
    <td :data-cell="Object.keys(this.dataCell)[1]" >{{ name }}</td>
    <td :data-cell="Object.keys(this.dataCell)[7]">
      <p className="table-variant__wrapper">
        <span >{{ category }}</span>
      </p>
    </td>
    <td :data-cell="Object.keys(this.dataCell)[2]" >${{ price }}</td>
    <td :data-cell="Object.keys(this.dataCell)[5]" >{{ created.slice(0, 10) }}</td>
    <td :data-cell="Object.keys(this.dataCell)[4]" >
      <span>
        <img :src="imgs" :alt="name" />
      </span>
    </td>
    <td :data-cell="'Actions'" >
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