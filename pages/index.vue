<template>
  <div>
    <MainHome :list="listTops" />
    <MediaBlog :list="listType1" />
    <MediaLoyiha :list="listType2" />
    <MainEdu :list="listType4" />
  </div>
</template>

<script>
import axios from 'axios'
import MainHome from '@/components/MainPage/MainHome.vue'
import MediaBlog from '@/components/MainPage/MediaBlog.vue'
import MediaLoyiha from '@/components/MainPage/MediaLoyihalar.vue'
import MainEdu from '@/components/MainPage/MainEdu.vue'

export default {
  name: 'IndexPage',

  components: { MainHome, MediaBlog, MainEdu, MediaLoyiha },

  data() {
    return {
      listAll: [],
      listTops: [],
      listType1: [],
      listType2: [],
      listType4: [],
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async getBooks() {
      const res = await axios.get(
        'http://mediasaboq.uz/api/v1/articles?mainPage=true'
      )
      // console.log(res.data)
      this.listAll = res.data

      let index = 1
      this.listAll.forEach((item) => {
        if ((item.isMain === true || item.isTop === true) && index < 6) {
          this.listTops.push(item)
        } else if (item.type === 1) {
          this.listType1.push(item)
        } else if (item.type === 2) {
          this.listType2.push(item)
        } else if (item.type === 4) {
          this.listType4.push(item)
        }
        index++
      })

      // console.log(this.listTops);
      // console.log(this.listType1);
      // console.log(this.listType2);
      // console.log(this.listType4);
    },
  },

  mounted() {
    this.getBooks()
  },
}
</script>
