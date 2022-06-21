<template>
  <div v-if="list.length !== 0" class="wrap py-5">
    <div class="container">
      <h1 class="title">Ta’lim </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
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

  head: {
    title: 'Talim',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Talim - buu ...'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'talim, oqitish',
      },
      {
        hid: 'og_description',
        property: 'og:description',
        content: 'Talim - buu ...',
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: '/talim',
      },
    ],
  },

  components: { EduMainCard },

  data() {
    return {
      list: [],
    }
  },

  methods: {
    async getEducation() {
      const res = await axios.get(`https://mediasaboq.uz/api/v1/categories?type=2&lang=uz`)
      this.list = res.data.list
    },
  },

  mounted() {
    this.getEducation()
  },
}
</script>

<style scoped>
.wrap {
  min-height: calc(100vh - 140px);
}
</style>
