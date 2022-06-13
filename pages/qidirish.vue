<template>
  <div class="container">
    <form>   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-3 items-center">
                <img src="../assets/img/search.svg" alt="">
            </div>
            <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Mockups, Logos..." required>
            <div class="flex items-center absolute inset-y-0 right-3">
                <img class="cursor-pointer" src="../assets/icons/close.png" alt="">
            </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'QidirishOynasi',
}
</script>


<style scoped>
.container {
  padding: 40px 0 !important;
}
.search {
  width: 100%;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 27px;
  color: #010e38;
  /* opacity: 0.5; */
  border: 1px solid #E5E5E5;
  outline: none;
}

input::before {
  content: '💔';
  line-height: 1;
  vertical-align: top;
  position: relative;
  left: -1.5em;
}
</style>