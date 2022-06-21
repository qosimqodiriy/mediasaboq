<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="top">
        <h3 class="title">Ta’lim</h3>
        <nuxt-link class="next" to="/talim" @click.native="scrollToTop">
          Barchasi <img src="../../assets/icons/arrow.png" alt="">
        </nuxt-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <nuxt-link class="flex" :to="`/talim/${item.category.slug}/${item.id}`" v-for="item in list" :key="item.id" @click.native="scrollToTop">
          <FirstCard :show="true" :item="item" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import FirstCard from '@/components/FirstCard'
export default {
  name: 'MainEdu',

  components: {
    FirstCard,
  },
  
  props: {
    list: {
      required: true,
      type: Array,
    },
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  }
}
</script>

<style scoped>
.wrap {
  padding-top: 40px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}
.next {
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  font-weight: 500;
  font-size: var(--18px);
  position: relative;
  transition: 0.3s;
}
.next::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 75%;
  height: 2px;
  background: black;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
}
.next:hover {
  text-decoration: none !important;
}
.next:hover.next::after {
  opacity: 1;
  visibility: visible;
}

</style>
