<template>
  <div v-if="model.id" class="container">
    <div class="crumbs">
      <nuxt-link class="last-page" to="/"> Asosiy </nuxt-link>
      <nuxt-link class="last-page" to="/media-blog">/ Media Blog </nuxt-link>
      <nuxt-link class="last-page" :to="`/media-blog/${this.category}`">/ {{this.categoryName}}</nuxt-link>
      <h1 class="this-page"> / {{ model.title }} </h1>
    </div>

    <div class="row grid-cols-1 lg:grid-cols-3">
      <div class="lg:col-span-2">  <!-- v-bind:class="{ 'lg:col-span-2': model.suggests.length > 0, 'lg:col-span-3': model.suggests.length === 0 }"-->
        <MainBannerSec :item="model" />
        <div class="content">
          <p v-html="model.body"></p>
        </div>
        <div v-if="model.tags" class="tags">
          <nuxt-link :to="`/tag/${tag.name}`" v-for="tag in model.tags" :key="tag.id" v-show="tag.id" @click.native="scrollToTop">#{{ tag.name }}</nuxt-link>
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
import SimilarCard from '@/components/SimilarCard.vue'
import MainBannerSec from '@/components/MainPage/MainBannerSec'

export default {
  name: 'MediaBlogPost',

  components: {
    SimilarCard,
    MainBannerSec,
  },

  data() {
    return {
      slug: null,
      category: null,
      categoryName: '',
      title: 'Category',
      model: {},
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
      const response = await axios.get(`https://mediasaboq.uz/api/v1/article?slug=${this.slug}`)
      this.model = response.data
      this.title = response.data.title
      this.categoryName = this.model.category.name
    },

    async getTag() {

    }

  },

  mounted() {
    this.slug = this.$route.params.id;
    this.category = this.$route.params.category
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
  background-position: center;
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
.content p {
  font-size: var(--18px);
  line-height: 30px;
  margin-bottom: 40px;
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
