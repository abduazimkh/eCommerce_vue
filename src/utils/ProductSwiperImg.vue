<script>
export default {
  data() {
    return {
      errorPlaceholder: false,
    }
  },
  props: {
    imgs: {
      required: true,
    },
    active: {
      required: true,
    },
    el: {
      required: true,
    }
  }
}
</script>

<template>
  <img :data-id="el" :onError="(e, s) => {
    if (!s) {
      errorPlaceholder = true
    }
  }
    " :src="!imgs || errorPlaceholder ?
    `https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png`
    : imgs" alt="product image" />
</template>

<style>
img {
  width: 100%;
}
</style>
