<template>
  <div>
    <TheNavbar />
    <transition>
      <nuxt />
    </transition>
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