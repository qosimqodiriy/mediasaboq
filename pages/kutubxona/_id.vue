<template>
  <div v-if="model.title" class="container">
    <div class="crumbs">
      <nuxt-link class="last-page" to="/"> Asosiy </nuxt-link>
      <nuxt-link class="last-page" to="/kutubxona">/ Kutubxona </nuxt-link>
      <h1 class="this-page">/ {{model.name}}</h1>
    </div>
    <div class="grid gap-5">
      <div class="">
        <MainBannerThird :item="model" />
      </div>
      <div class="">
        <div class="content">
          <p class="lil-title">Kitob haqida</p>
          <p v-html="model.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MainBannerThird from '@/components/MainPage/MainBannerThird.vue'

export default {
  name: 'BookInner',

  data() {
    return {
      slug: '',
      model: {},
      title: 'Kutubxona',
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  components: { MainBannerThird },

  methods: {
    async getModel() {
      await axios.get(`https://mediasaboq.uz/api/v1/book?slug=${this.slug}`).then(response => {
        this.model = response.data
        this.title = response.data.name
      })
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
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 1024px) {
  .container {
    padding-bottom: 60px !important;
  }
}

@media screen and (max-width: 900px) {
  .left {
    margin-top: 20px;
    }
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
