<template>
  <div class="wrap">
    <div class="container p-0">
      <h1 class="title">Mualliflar</h1>
      <div class="grid">
        <nuxt-link
          :to="`/authors/${item.username}`"
          class="link flex"
          v-for="item in data.list"
          :key="item.id"
          @click.native="scrollToTop"
        >
          <AuthorCard :item="item" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AuthorCard from '@/components/AuthorCard'

export default {
  name: 'BooksPage',

  async asyncData() {
    const post = await axios.get(`https://mediasaboq.uz/api/v1/authors`)
    const data = post.data
    return { data }
  },

  components: {
    AuthorCard,
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style scoped>
.wrap {
  min-height: 80vh;
  padding-bottom: 80px;
}
.title {
  padding: 40px 0 20px 0;
}
.grid {
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
