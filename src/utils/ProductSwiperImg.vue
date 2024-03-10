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
    }
		"
		  :src="!imgs || errorPlaceholder ? 
        `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png` 
      : imgs"
    alt="cidsjfdsijn"
  />
</template>
