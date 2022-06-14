<template>
  <div class="container p-0 flex flex-col">
    <form class="form">   
        <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative">
            <input id="default-search" class="search block w-full relative outline-none text-center" v-model="InputValue" placeholder="Qidiruv...">
            <div v-if="InputValue.length !== 0" @click="DeleteValue" class="flex items-center absolute inset-y-0 right-2.5 close">
                <img class="cursor-pointer" src="../assets/icons/close.png" alt="">
            </div>
        </div>
    </form>
    <div class="flex-auto w-full h-full flex items-center justify-center pb-10">
      <p class="search-title">Kerakli maqolangizga tegishli kalit so‘zni kiriting!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QidirishOynasi',

  data() {
    return {
      InputValue: "",
    }
  },

  methods: {
    DeleteValue() {
      this.InputValue = ''
    }
  }
}
</script>


<style scoped>
.container {
  padding: 40px 0 !important;
  height: calc(100vh - 140px);
}
.form {
  margin-bottom: 40px
}
.search {
  padding: 10px 0;
  font-size: 18px;
  line-height: 27px;
  color: #010e38;
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e5e5;
}
.search-title {
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #E5E5E5;
  max-width: 804px;
}

</style>