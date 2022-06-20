<template>
  <div v-if="model.title" class="container">
    <div class="crumbs">
      <nuxt-link class="last-page" to="/"> Asosiy </nuxt-link>
      <nuxt-link class="last-page" to="/kitoblar">/ Kutubxona </nuxt-link>
      <p class="this-page">/ {{model.name}}</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div class="">
        <MainBannerThird :item="model" />
      </div>
      <div class="">
        <div class="content">
          <p class="lil-title">Kitob haqida</p>
          <p>{{model.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MainBannerThird from '@/components/MainPage/MainBannerThird.vue'

const BaseUrl = import.meta.env.VITE_BASE_URL
export default {
  name: 'BookInner',
  components: { MainBannerThird },

  data() {
    return {
      slug: '',
      model: {},
    }
  },

  methods: {
    async getModel() {
      const response = await axios.get(`${BaseUrl}book?slug=${this.slug}`)
      this.model = response.data
      // console.log(this.model);
    },
  },

  mounted() {
    this.slug = this.$route.params.id;
    this.getModel()
  }
}
</script>

<style scoped>
.container {
  padding-bottom: 80px !important;
}
.content p {
  font-size: var(--18px);
  line-height: 30px;
}
.crumbs {
  display: flex;
  align-items: center;
  padding: 40px 0 !important;
  gap: 5px;
  font-size: var(--18px);
}
.last-page {
  color: black;
  opacity: 0.7;
}
.this-page {
  font-weight: 600;
}
.lil-title {
  font-weight: 600;
  line-height: 32px !important;
  font-size: 23px !important;
  margin-bottom: 10px !important;
}

@media screen and (max-width: 1024px) {
  .container {
    padding-bottom: 60px !important;
  }
}

@media screen and (max-width: 768px) {
  .left {
    margin-top: 20px;
  }
}
</style>
