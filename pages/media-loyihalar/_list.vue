<template>
  <div v-if="model.slug" class="container">
    <div class="crumbs">
      <nuxt-link class="last-page" to="/"> Asosiy </nuxt-link>
      <nuxt-link class="last-page" to="/media-loyihalar">/ Media loyihalar </nuxt-link>
      <h1 class="this-page"> / {{ model.title }}</h1>
    </div>
    <div class="row grid-cols-1 lg:grid-cols-3">
      <div class="lg:col-span-2">  <!-- v-bind:class="{ 'lg:col-span-2': model.suggests.length > 0, 'lg:col-span-3': model.suggests.length === 0 }"-->
        <MainBannerSec :item="model" />
        <div class="content">
          <div class="text_editor_inner" v-html="model.body"></div>
        </div>
        <div v-if="model.tags" class="tags">
          <nuxt-link :to="`/tag/${tag.name}`" v-for="tag in model.tags" :key="tag.id" @click.native="scrollToTop">#{{ tag.name }}</nuxt-link>
        </div>
        <nuxt-link :to="`/mualliflar/${model.author.username}`" class="inline-flex items-center gap-2.5" @click.native="scrollToTop">
          <div class="person overflow-hidden rounded-full object-cover">
            <img :src="`https://mediasaboq.uz/${model.author.image}`" :alt="model.author.name" />
          </div>
          <div class="initials">
            <p class="name">{{ model.author.name }}</p>
            <p class="status">{{ model.author.username }}</p>
          </div>
        </nuxt-link>
      </div>
      <div v-if="model.suggests.length > 0">
        <SimilarCard :item="model.suggests" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MainBannerSec from '@/components/MainPage/MainBannerSec'
import SimilarCard from '@/components/SimilarCard.vue'

export default {
  name: 'NewsInner',

  components: {
    MainBannerSec,
    SimilarCard,
  },

  data() {
    return {
      slug: '',
      model: {},
      title: 'Media Loyihalar'
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },

    async getModel() {
      await axios.get(`https://mediasaboq.uz/api/v1/article?slug=${this.slug}`).then( response => {
        response.data.tags = response.data.tags.filter(tag => (tag.id !== 0 && tag.id !== null))
        this.model = response.data
        this.title = response.data.title
      })
    },
  },

  mounted() {
    this.slug = this.$route.params.list;
    this.getModel()
  },
}
</script>

<style scoped>
.container {
  padding-bottom: 80px !important;
}
.row {
  gap: 20px;
  display: grid;
}
.person img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
}
.name {
  font-size: var(--18px);
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.status {
  opacity: 0.6;
  font-size: var(--15px);
}
.tags {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 40px 0;
}
.tags p {
  color: #4d5674;
  text-decoration: underline;
}
.content {
  padding-top: 40px;
}
.crumbs {
  padding: 40px 0;
  display: flex;
  align-items: center;
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

@media screen and (max-width: 768px) {
  .left {
    padding-top: 40px;
  }
}
</style>
