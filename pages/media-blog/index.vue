<template>
  <div class="wrap  py-5">
    <div class="container">
      <h1 class="title">Media Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        <nuxt-link
          v-for="item in list"
          :key="item.id"
          :to="`/media-blog/${item.slug}`"
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
  name: 'MediaBlog',

  head: {
    title: 'Media Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Media Blog - buu ...'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'media, blog',
      },
      {
        hid: 'og_description',
        property: 'og:description',
        content: 'Media blog - buu ...',
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: '/media-blog',
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
    async getMediaBlog() {
      const res = await axios.get(`https://mediasaboq.uz/api/v1/categories?type=1&lang=uz`)
      this.list = res.data.list
      // console.log(this.list);
    },
  },

  mounted() {
    this.getMediaBlog()
  },
}
</script>

<style scoped>
.wrap {
  min-height: calc(100vh - 140px);
}
</style>
