<template>
  <div class="flex flex-col min-h-screen">
    <TheNavbar />
    <div class="flex-auto">
      <transition>
      <nuxt />
    </transition>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
  name: 'DefaultPage',

  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>