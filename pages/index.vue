<template>
  <div>
    <div class="container p-0 relative">
      <div class="grid gap-5 pt-10 grid-cols-1 lg:grid-cols-3 items-start">
        
        <div v-if="isBig.category"  v-bind:class="{ 'lg:col-span-2': listTops.length > 0, 'lg:col-span-3': listTops.length === 0 }">
          <MainCard :item="isBig" />
        </div>
        
        <MainPopular :list="listTops"  v-if="listTops.length > 0" />
      </div>
      <MediaBlog v-if="listType1.length > 0" :list="listType1" />
      <MainEdu v-if="listType2.length > 0" :list="listType2" />
      <MediaLoyiha v-if="listType3.length > 0" :list="listType3" />
      <div class="load" v-if="listAll.length > 0">
        <nuxt-link class="btn"  to="/media-blog" @click.native="scrollToTop"> 
          Boshqa yangiliklar
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MainCard from '@/components/MainPage/MainCard.vue'
import MainPopular from '@/components/MainPage/MainPopular.vue'
import MediaBlog from '@/components/MainPage/MediaBlog.vue'
import MediaLoyiha from '@/components/MainPage/MediaLoyihalar.vue'
import MainEdu from '@/components/MainPage/MainEdu.vue'

const BaseUrl = import.meta.env.VITE_BASE_URL
export default {
  name: 'IndexPage',

  components: { MediaBlog, MainEdu, MediaLoyiha, MainPopular, MainCard },

  data() {
    return {
      isBig: {},
      listAll: [],
      listTops: [],
      listType1: [],
      listType2: [],
      listType3: [],
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async getBooks() {
      const res = await axios.get(`${BaseUrl}articles?mainPage=true`)
      this.listAll = res.data

      let index = 1
      this.listAll.forEach((item) => {
        if ((item.isMain === true || item.isTop === true) && index < 6) {
          if (index === 1) {
            if(item.type === 1) {
              item.to = `/media-blog/${item.category.slug}/${item.slug}`
            } else if (item.type === 2) {
              item.to = `/talim/${item.category.slug}/${item.slug}`
            } else if (item.type === 3) {
              item.to = `/media-loyihalar/${item.slug}`
            }
            this.isBig = item
            console.log(this.isBig);
          } else {
            if(item.type === 1) {
              item.to = `/media-blog/${item.category.slug}/${item.slug}`
            } else if (item.type === 2) {
              item.to = `/talim/${item.category.slug}/${item.slug}`
            } else if (item.type === 3) {
              item.to = `/media-loyihalar/${item.slug}`
            }
            this.listTops.push(item)
          }
        } else if (item.type === 1) {
          this.listType1.push(item)
        } else if (item.type === 2) {
          this.listType2.push(item)
        } else if (item.type === 3) {
          this.listType3.push(item)
        }
        index++
      })

      // console.log(this.listTops);
      // console.log(this.listType1);
      // console.log(this.listType2);
      // console.log(this.listType3);
    },
  },

  mounted() {
    this.getBooks()
  },
}
</script>




<style scoped>
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

@media screen and (max-width: 1024px) {
  .load {
    padding: 2rem 0;
  }
}
</style>
