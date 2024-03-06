<!-- script -->

<script>
</script>


<!-- html -->

<template>
  <button class="btn">
    <slot/>
  </button>
</template>


<!-- style -->

<style lang="scss">
  .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    color: var(--pd-color);
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
  }
</style>