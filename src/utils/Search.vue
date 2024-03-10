<script>
  export default {
    props: {
      isOpen() {
        required: true
      }
    }
  }

</script>

<template>
  <div :class="isOpen ? 'search__wrapper search-active' : 'search__wrapper'">
    <input type="text" placeholder="Search">

    <button>Search</button>
  </div>
</template>


<style lang="scss">
  .search__wrapper{
    position: fixed;
    top: 98px;
    left: 0;
    width: 0;
    padding: 3rem 2rem;
    z-index: 9999;
    background-color: var(--pl-color);
    display: flex;
    align-items: center;
    border-top: 1px solid #0005;
    gap: 2rem;
    transform: scaleX(0);
    transform-origin: left;
    transition: all .4s ease;

    input{
      flex: 1;
      height: 50px;
      font-size: 1rem;
      text-indent: 20px;
      outline: none;
      border: 1px solid #0005;
    }

    button{
      height: 50px;
      min-width: 100px;
      font-size: 1rem;
      background-color: var(--pd-color);
      border: none;
      color: var(--pl-color);
    }

  }

  .search-active{
    width: 100vw;
    transform: scaleX(1);
  }

</style>