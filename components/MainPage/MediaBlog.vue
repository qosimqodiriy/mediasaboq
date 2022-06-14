<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="top">
        <h3 class="title">Media blog</h3>
        <nuxt-link class="next" to="/media-blog" @click.native="scrollToTop">
          Barchasi <img src="../../assets/icons/arrow.png" alt="">
        </nuxt-link>
      </div>
      <div class="grid">
        <nuxt-link :to="`/media-blog/${item.id}`" v-for="item in list" :key="item.id" @click.native="scrollToTop">
          <FirstCard :item="item" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FirstCard from '@/components/FirstCard'

export default {
  name: 'MediaBlog',

  components: {
    FirstCard,
  },

  data() {
    return {
      list: [],
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },

    async getMediaBlog() {
      const res = await axios.get(
        'http://mediasaboq.uz/api/v1/articles?type=1&size=3'
      )
      // console.log(res.data.list)
      this.list = res.data.list
      // console.log(this.list)
    },
  },

  mounted() {
    this.getMediaBlog()
  },
}
</script>

<style scoped>
.wrap {
  padding: 40px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
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
