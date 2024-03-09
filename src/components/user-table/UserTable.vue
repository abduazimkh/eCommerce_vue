<!-- script -->

<script>

  export default { 
    components: {
      
    },
    data(){
      return{
  	    errorPlaceholder: false,
      }
    },
    props: {
      name: {
        required: true
      },
      category: {
        required: true
      },
      role: {
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
    } 
  }

</script>


<!-- html -->

<template>
  <tr>
    <td :data-cell="Object.keys(this.dataCell)[0]" >{{ name }}</td>
    <td :data-cell="Object.keys(this.dataCell)[3]" >
      <p className="table-variant__wrapper">
        <span >{{ category }}</span>
      </p>
    </td>
    <td :data-cell="Object.keys(this.dataCell)[4]" >{{ role }}</td>
    <td :data-cell="Object.keys(this.dataCell)[6]" >{{ created.slice(0, 10) }}</td>
    <td :data-cell="Object.keys(this.dataCell)[5]" >
      <span>
        <img
          :onError="(e, s) => {
				  	if (!s) {
				  		errorPlaceholder = true
				  	}
          }
				  "
				    :src="!imgs || errorPlaceholder ? `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png` : imgs"
            :alt="name"
        />
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