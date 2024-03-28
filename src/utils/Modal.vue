<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    isEditOpen: {
      type: Boolean,
      required: true,
    }
  }
}

</script>

<template>
  <div v-if="isOpen || isEditOpen" class="modal__wrapper">
    <button @click="isOpen = false || (isEditOpen = false)" class="close-btn">x</button>
    <div class="modal">
      <slot />
    </div>
  </div>
  <div v-else></div>
</template>

<style lang="scss">
.modal__wrapper {
  background-color: #000000d7;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: none;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    height: 100%;

    input,
    select {
      height: 40px;
      text-indent: 20px;
      font-size: 1rem;
      outline: none;
      border: 1px solid #111;
      background-color: transparent;

      &::-webkit-inner-spin-button {
        display: none;
      }
    }

    input:focus {
      color: #fff;
      border: none;
      box-shadow: inset 0 0 90px 1px rgb(0, 0, 0);

      &::placeholder {
        color: #fff;
      }
    }

    button {
      width: 100%;
      position: absolute;
      height: 45px;
      border: none;
      background-color: #111;
      color: #fff;
      font-size: 1rem;
      left: 0;
      bottom: 0;
    }


  }

}

.modal {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 550px;
  height: 100%;
  background-color: #fff;
}
</style>