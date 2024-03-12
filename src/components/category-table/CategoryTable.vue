<!-- script -->

<script>
import instance from '../../services/api'
import ProductSwiperImg from '../../utils/ProductSwiperImg.vue'


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
      imgs: {
        required: true
      },
      created: {
        required: true
      },
      dataCell: {
        required: true
      },
      id: {
        require: true
      }
    },
    methods: {
      deletePtoduct() {
        const a = confirm("Are you sure to delete thi category")
        if(a){
          instance.delete('categories/' + this.dataCell.id)
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
    <td :data-cell="Object.keys(this.dataCell)[0]" >{{ name }}</td>
    <td :data-cell="Object.keys(this.dataCell)[1]" >
      <p className="table-variant__wrapper">
        <span >{{ category }}</span>
      </p>
    </td>
    <td :data-cell="Object.keys(this.dataCell)[3]" >{{ created?.slice(0, 10) }}</td>
    <td :data-cell="Object.keys(this.dataCell)[2]" >
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
        <button :data-id="id" class="link btn-warning">Edit</button>
        <button @click="deletePtoduct" class="link btn-danger">Delete</button>
      </div>
    </td>
  </tr>
</template>


<!-- style -->

<style scoped lang="scss">

</style>