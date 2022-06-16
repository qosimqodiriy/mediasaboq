<template>
  <div class="wrap">
    <div class="container p-0">
      <h1 class="title">Ta’lim</h1>
      <div class="grid">
        <nuxt-link
          v-for="item in list"
          :key="item.id"
          :to="`/talim/${item.slug}`"
        >
          <EduMainCard :item="item" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import EduMainCard from '@/components/EduPage/EduMainCard.vue'
export default {
  name: 'EducationPage',

  components: { EduMainCard },

  data() {
    return {
      list: [],
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },

    async getEducation() {
      const res = await axios.get(
        'http://mediasaboq.uz/api/v1/categories?type=2&lang=uz'
      )
      // console.log(res.data.list)
      this.list = res.data.list
      // console.log(this.list)
    },
  },

  mounted() {
    this.getEducation()
  },
}
</script>

<style scoped>
.wrap {
  padding: 40px 0;
  min-height: 90vh;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px 0 0;
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
