<template>
  <div class="top-nav">
    <small>Free worldwide shipping and free returns</small>
  </div>
</template>

<style scoped lang="scss">
  .top-nav{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--pd-color);
    color: var(--pl-color);
    padding: 7px 0;
  }

  
  @media only screen and (max-width: 350px) {
    .top-nav {
      small{
        font-size: 10px;
      }
    }
  }

</style>