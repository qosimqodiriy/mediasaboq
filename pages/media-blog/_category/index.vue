<template>
  <div v-if="category.slug" class="wrapper">
    <div class="container">
      <div class="crumbs">
        <nuxt-link class="last-page" to="/"> Asosiy </nuxt-link>
        <nuxt-link class="last-page" to="/media-blog">/ Media Blog </nuxt-link>
        <h1 class="this-page">/ {{ this.categoryName }}</h1>
      </div>
      <div class="grid">
        <nuxt-link class="flex" :to="`/media-blog/${category.slug}/${item.slug}`" v-for="item in list" :key="item.id" @click.native="scrollToTop">
          <FirstCard :show="true" :item="item" />
        </nuxt-link>
      </div>
      <div class="load">
        <button class="btn" v-if="offset < count - 6" @click="loadMedia">
          Boshqa yangiliklar
          <img src="@/assets/img/refresh.svg" alt="refresh" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FirstCard from '@/components/FirstCard'

export default {
  name: 'MediaBlogCategory',

  data() {
    return {
      category: {},
      categoryName: '',
      categoryId: null,
      title: 'Media Blog',
      slug: '',
      offset: 0,
      list: [],
      count: 0,
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  components: {
    FirstCard,
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },

    loadMedia() {
      this.offset = this.offset + 6
      if (this.offset < this.count) {
        this.getArticles()
      }
    },

    async getCategory() {
     
      await axios.get(`https://mediasaboq.uz/api/v1/category?slug=${this.slug}`).then(response =>{
         this.category = response.data
         this.categoryName = this.category.name
         this.categoryId = this.category.id
         this.title = this.category.name
         this.getArticles()
      })
    },

    async getArticles() {
      const response = await axios.get(`https://mediasaboq.uz/api/v1/articles?category=${this.categoryId}`, { params: { size: 6,  offset: this.offset }})
      this.count = response.data.count
      this.list = [
        ...this.list,
        ...response.data.list
      ]
    }
  },

  mounted() {
    this.slug = this.$route.params.category
    this.getCategory()
  },
}
</script>

<style>
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
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.load {
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 392px;
  padding: 20px 0;
  background: var(--orange);
  gap: 10px;
  color: white;
  font-weight: 500;
  font-size: 15px;
  border-radius: 0;
  box-shadow: var(--shadow);
}
/* .btn img {
  transition: 1s;
}
.btn:hover img {
  transform: rotate(-360deg);
} */
.card {
  border: none;
}
.card-body {
  padding: 0;
}
.nav-link {
  font-size: var(--18px);
  color: black;
  padding: 10px 0;
}
.nav-link:hover {
  border: none !important;
  color: black;
  border-color: transparent;
}
.card-header {
  background: transparent;
  padding: 0 10px;
}
.nav-link.active {
  font-size: var(--24px);
  font-weight: 600;
  border-bottom: 2px solid var(--orange) !important;
  border: none;
}
.nav {
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}
@media screen and (max-width: 1024px) {
  .load {
    padding: 2rem 0;
  }
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
