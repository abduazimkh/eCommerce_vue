<!-- script -->

<script>
import instance from '../../services/api'


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
    methods: {
      deletePtoduct() {
        const a = confirm("Are you sure to delete thi product")
        if(a){
          instance.delete('products/' + this.dataCell.id)
          .then(response => {
              console.log(response) 
          })
          .catch(error => {
            console.log(error)
          })
          .finally((err) => console.log(err))
        }
      }
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
        <img
          :onError="(e, s) => {
				  	if (!s) {
				  		errorPlaceholder = true
				  	}
          }
				  "
            v-for="el in dataCell.images"
				    :src="!el || errorPlaceholder ? `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png` : el"
            :alt="name"
        />
      </span>
    </td>
    <td :data-cell="'Actions'" >
      <div className="table-action__wrapper">
        <button class="link btn-warning">Edit</button>
        <button @click="deletePtoduct" class="link btn-danger">Delete</button>
      </div>
    </td>
  </tr>
</template>


<!-- style -->

<style scoped lang="scss">

</style>