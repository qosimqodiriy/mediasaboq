<template>
  <div class="container p-0 flex flex-col">
    <h1 class="title mb-5"># {{ this.tag }}</h1>
    <div class="pb-10">
      <div class="tabs flex flex-col md:flex-row items-center justify-center md:gap-10">
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(1)" v-bind:class="{ 'font-normal': openTab !== 1, 'font-semibold border-active': openTab === 1,}">Media blog      <span v-bind:class="{ 'countFalseBg': openTab !== 1, 'countTrueBg': openTab === 1 }" v-if="mediaBlog.count" class="count">{{mediaBlog.count}}</span></p>
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(2)" v-bind:class="{ 'font-normal': openTab !== 2, 'font-semibold border-active': openTab === 2,}">Ta‘lim          <span v-bind:class="{ 'countFalseBg': openTab !== 2, 'countTrueBg': openTab === 2 }" v-if="talim.count" class="count">{{talim.count}}</span></p>
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(3)" v-bind:class="{ 'font-normal': openTab !== 3, 'font-semibold border-active': openTab === 3,}">Media loyihalar <span v-bind:class="{ 'countFalseBg': openTab !== 3, 'countTrueBg': openTab === 3 }" v-if="mediaLoyihalar.count" class="count">{{mediaLoyihalar.count}}</span></p>
      </div>
      <div class="pt-10">
        <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link :to="`/media-blog/${item.category.slug}/${item.slug}`" v-for="(item, index) in mediaBlog.list" :key="index">
              <FirstCard :item="item" />
            </nuxt-link>
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link :to="`/talim/${item.category.slug}/${item.slug}`" v-for="(item, index) in talim.list" :key="index">
              <FirstCard :item="item" />
            </nuxt-link>
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link :to="`/media-loyahalar/${item.slug}`" v-for="(item, index) in mediaLoyihalar.list" :key="index">
              <FirstCard :item="item"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FirstCard from '@/components/FirstCard'

export default {
  name: 'TagsPage',

  components: {
    FirstCard
  },

  data() {
    return {
      tag: '',
      count1: 0,
      count2: 0,
      count3: 0,
      offset1: 0,
      offset2: 0,
      offset3: 0,
      openTab: 1,
      talim: [],
      mediaBlog: [],
      mediaLoyihalar: [],
    }
  },

  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },

    loadMediaBlog() {
      this.offset1 = this.offset1 + 6
      if (this.offset1 < this.count1) {
        this.getEducation()
      }
    },
    
    async getMediaBlog() {
        const res1 = await axios.get(`http://mediasaboq.uz/api/v1/articles?tag=${this.tag}&type=1&lang=uz`)
        this.mediaBlog = res1.data
    },
    async getMediaBlog() {
        const res2 = await axios.get(`http://mediasaboq.uz/api/v1/articles?tag=${this.tag}&type=2&lang=uz`)
        this.talim = res2.data
    },
    async getMediaBlog() {
        const res3 = await axios.get(`http://mediasaboq.uz/api/v1/articles?tag=${this.tag}&type=3&lang=uz`)
        this.mediaLoyihalar = res3.data
    },
  },

  mounted() {
    this.openTab = 1
    this.tag = this.$route.params.list
    this.getMediaBlog()
  },
}
</script>


<style scoped>
.container {
  padding: 40px 0 !important;
  min-height: calc(100vh - 140px);
}
.form {
  margin-bottom: 40px;
}
.search {
  padding: 10px 0;
  font-size: 18px;
  line-height: 27px;
  color: #010e38;
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e5e5;
}
.search-title {
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #e5e5e5;
  max-width: 804px;
}
.tabs {
  top: -2px;
  position: relative;
  border-bottom: 2px solid #e5e5e5;
}
.border-active {
  top: 2px;
  z-index: 2;
  position: relative;
  border-bottom: 2px solid #ff6300;
}
.count {
  font-size: 15px;
  line-height: 27px;
  padding: 2px 12px;
  color: #010E38;
  /* background: #FF6300; */
  border-radius: 13.5px;
}
.countFalseBg {
  background: #E5E5E5;
}
.countTrueBg {
  color: white;
  font-weight: 400;
  background: #FF6300;
}
</style>