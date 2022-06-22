<template>
  <div v-if="user.name" class="container">
    <div class="author-box">
      <div class="img-box">
        <img class="w-full h-full object-cover" :src="`https://mediasaboq.uz/${user.image}`" :alt="user.name" />
      </div>
      <div class="max-w-sm text-center md:text-left">
        <h1 class="author-name">{{ user.name }}</h1>
        <p class="author-title">{{ user.description }}</p>
      </div>
    </div>
    <div v-if="user.description">
      <div class="tabs flex flex-col md:flex-row items-center justify-center md:gap-10">
        <p class="cursor-pointer text-center md:text-left inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(1)" v-bind:class="{ 'font-normal': openTab !== 1, 'font-semibold border-active': openTab === 1 }"> Media blog       <span v-bind:class="{ 'countFalseBg': openTab !== 1, 'countTrueBg': openTab === 1 }" v-if="mediaBlog.count" class="count">{{mediaBlog.count}}</span></p>
        <p class="cursor-pointer text-center md:text-left inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(2)" v-bind:class="{ 'font-normal': openTab !== 2, 'font-semibold border-active': openTab === 2 }"> Ta‘lim           <span v-bind:class="{ 'countFalseBg': openTab !== 2, 'countTrueBg': openTab === 2 }" v-if="talim.count" class="count">{{talim.count}}</span></p>
        <p class="cursor-pointer text-center md:text-left inline pb-1 pt-1.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(3)" v-bind:class="{ 'font-normal': openTab !== 3, 'font-semibold border-active': openTab === 3 }"> Media loyihalar  <span v-bind:class="{ 'countFalseBg': openTab !== 3, 'countTrueBg': openTab === 3 }" v-if="mediaLoyiha.count" class="count">{{mediaLoyiha.count}}</span></p>
      </div>

      <div class="pt-10">

        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link class="flex" :to="`/media-blog/${item.category.slug}/${item.slug}`" v-for="item in mediaBlog.list" :key="item.id">
              <FirstCard :show="true" :item="item" />
            </nuxt-link>
          </div>
        </div>

        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link class="flex" :to="`/talim/${item.category.slug}/${item.slug}`" v-for="item in talim.list" :key="item.id">
              <FirstCard :show="true" :item="item" />
            </nuxt-link>
          </div>
        </div>

        <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link class="flex" :to="`/media-loyihalar/${item.slug}`" v-for="item in mediaLoyiha.list" :key="item.id">
              <FirstCard :show="false" :item="item" />
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MualliflarHaqida',
  
  data() {
    return {
      slug: '',
      title: 'Mualliflar',
      user: {},
      openTab: 1,
      mediaBlog: [],
      talim: [],
      mediaLoyiha: [],
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },

    async getAuthor() {
      await axios.get(`https://mediasaboq.uz/api/v1/author?username=${this.slug}`).then(response =>{
        this.user = response.data
        this.title = response.data.name
        this.getCategory()
      })
    },

    async getCategory() {
  
      const res1 = await axios.get(`https://mediasaboq.uz/api/v1/articles?author=${this.user.id}&type=1`)
      const res2 = await axios.get(`https://mediasaboq.uz/api/v1/articles?author=${this.user.id}&type=2`)
      const res3 = await axios.get(`https://mediasaboq.uz/api/v1/articles?author=${this.user.id}&type=3`)

      this.mediaBlog = res1.data
      this.talim = res2.data
      this.mediaLoyiha = res3.data
    }
  },

  mounted() {
    this.slug = this.$route.params.id
    this.getAuthor()
  },
}
</script>

<style scoped>
.container {
  padding: 80px 10px !important;
  min-height: 80vh;
}
.author-box {
  gap: 20px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
}
.img-box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.author-name {
  font-weight: 600;
  font-size: 23px;
  line-height: 34px;
  color: #010e38;
}
.author-title {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #010e38;
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

@media screen and (max-width: 1024px) {
  .load {
    padding: 2rem 0;
  }
}

@media screen and (max-width: 768px) {
  .author-box {
    gap: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
}
</style>