<script>
  export default {
    data () {
      return {
  	    errorPlaceholder: false,
      }
    },
    props: {
      imgs: {
        required: true,
      },
      el: {
        required: true,
      }
    }
  }
</script>

<template>
  <img
    :onError="(e, s) => {
			if (!s) {
				errorPlaceholder = true
			}
    }"
		:src="!el || errorPlaceholder ? `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png` : imgs?.length > 0 ? this.imgs : el  "
    :alt="el?.title"
  />
</template>

<style>
  img{
    width: 100%;
  }
</style>
