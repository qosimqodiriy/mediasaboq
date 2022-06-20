<template>
  <div class="container flex flex-col">
    <h1 class="title mb-5"># {{ this.tag }}</h1>
    <div class="pb-10">
      <div class="tabs flex flex-col md:flex-row items-center justify-center md:gap-10">
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(1)" v-bind:class="{ 'font-normal': openTab !== 1, 'font-semibold border-active': openTab === 1,}">Media blog      <span v-bind:class="{ 'countFalseBg': openTab !== 1, 'countTrueBg': openTab === 1 }" v-if="count1" class="count">{{ count1 }}</span></p>
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(2)" v-bind:class="{ 'font-normal': openTab !== 2, 'font-semibold border-active': openTab === 2,}">Ta‘lim          <span v-bind:class="{ 'countFalseBg': openTab !== 2, 'countTrueBg': openTab === 2 }" v-if="count2" class="count">{{ count2 }}</span></p>
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(3)" v-bind:class="{ 'font-normal': openTab !== 3, 'font-semibold border-active': openTab === 3,}">Media loyihalar <span v-bind:class="{ 'countFalseBg': openTab !== 3, 'countTrueBg': openTab === 3 }" v-if="count3" class="count">{{ count3 }}</span></p>
      </div>
      <div class="pt-10">
        <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link class="flex" :to="`/media-blog/${item.category.slug}/${item.slug}`" v-for="(item, index) in mediaBlog" :key="index">
              <FirstCard :item="item" />
            </nuxt-link>
          </div>
          <div class="load">
            <button class="btn" v-if="offset1 < count1 - 6" @click.native="loadMedia">
              Boshqa yangiliklar <img src="@/assets/img/refresh.svg" alt="" />
            </button>
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link class="flex" :to="`/talim/${item.category.slug}/${item.slug}`" v-for="(item, index) in talim" :key="index">
              <FirstCard :item="item" />
            </nuxt-link>
          </div>
          <div class="load">
            <button class="btn" v-if="offset2 < count2 - 6" @click.native="loadTalim">
              Boshqa yangiliklar <img src="@/assets/img/refresh.svg" alt="" />
            </button>
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link class="flex" :to="`/media-loyahalar/${item.slug}`" v-for="(item, index) in mediaLoyihalar" :key="index">
              <FirstCard :item="item"/>
            </nuxt-link>
          </div>
          <div class="load">
            <button class="btn" v-if="offset3 < count3 - 6" @click.native="loadMediaLoyiha">
              Boshqa yangiliklar <img src="@/assets/img/refresh.svg" alt="" />
            </button>
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

    loadMedia() {
      this.offset1 = this.offset1 + 6
      if (this.offset1 < this.count1) {
        this.getMediaBlog()
      }
    },

    loadTalim() {
      this.offset2 = this.offset2 + 6
      if (this.offset2 < this.count2) {
        this.getTalim()
      }
    },

    loadMediaLoyiha() {
      this.offset3 = this.offset3 + 6
      if (this.offset3 < this.count3) {
        this.getMediaLoyiha()
      }
    },
    
    async getMediaBlog() {
        const res1 = await axios.get(`https://mediasaboq.uz/api/v1/articles?tag=${this.tag}&type=1&lang=uz`, {
          params: {
            size: 6,
            offset: this.offset1,
          }
        })
        this.count1 = res1.data.count
        this.mediaBlog = [
          ...this.mediaBlog,
          ...res1.data.list
        ]
        console.log(this.mediaBlog);
    },
    async getTalim() {
        const res2 = await axios.get(`https://mediasaboq.uz/api/v1/articles?tag=${this.tag}&type=2&lang=uz`, {
          params: {
            size: 6,
            offset: this.offset2,
          }
        })
        this.count2 = res2.data.count
        this.talim = [
          ...this.talim,
          ...res2.data.list
        ]
        console.log(this.talim);
    },
    async getMediaLoyiha() {
        const res3 = await axios.get(`https://mediasaboq.uz/api/v1/articles?tag=${this.tag}&type=3&lang=uz`, {
          params: {
            size: 6,
            offset: this.offset3,
          }
        })
        this.count3 = res3.data.count
        this.mediaLoyihalar = [
          ...this.mediaLoyihalar,
          ...res3.data.list
        ]
        console.log(this.mediaLoyihalar);
    },
  },

  mounted() {
    this.openTab = 1
    this.tag = this.$route.params.list
    console.log(this.tag);
    this.getMediaBlog()
    this.getTalim()
    this.getMediaLoyiha()
  },
}
</script>


<style scoped>
.container {
  padding: 40px 10px !important;

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