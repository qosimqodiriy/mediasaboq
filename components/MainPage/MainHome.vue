<template>
  <div class="container p-0">
    <div class="row grid-cols-1 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <MainBanner />
      </div>
      <div class="">
        <MainPopular />
      </div>
    </div>
  </div>
</template>

<script>
import MainBanner from '@/components/MainPage/MainBanner'
import MainPopular from '@/components/MainPage/MainPopular'

export default {
  name: 'MainHome',

  components: {
    MainBanner,
    MainPopular,
  },
}
</script>

<style scoped>
.row {
  gap: 20px;
  display: grid;
  padding-top: 40px !important;
}
</style>
