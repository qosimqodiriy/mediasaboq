<template>
  <div v-if="list.body" class="container">
    <h1 class="title">Biz haqimizda</h1>
    <p class="text" v-html="list.body.uz"></p>
    <div class="space-y-2.5">
      <div
        v-for="(link, index) in list.contacts"
        :key="index"
        class="flex items-center gap-2.5"
      >
        <div class="icon__div">
          <img
            class="max-w-6 max-h-6 object-cover object-center"
            :src="`https://mediasaboq.uz/${link.icon}`"
            :alt="link.name"
          />
        </div>
        <p class="link__title">{{ link.name }}</p>
        <a :href="link.contact" class="link__url">{{ link.contact }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AboutPage',

  head: {
    title: 'Biz haqimizda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Biz - buu ...'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'media saboq',
      },
      {
        hid: 'og_description',
        property: 'og:description',
        content: 'Biz - buu ...',
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: '/biz-haqimizda',
      },
    ],
  },

  data() {
    return {
      list: [],
    }
  },

  methods: {
    async getAbout() {
      const res = await axios.get(`https://mediasaboq.uz/api/v1/aboutUs`)
      this.list = res.data
    },
  },

  mounted() {
    this.getAbout()
  },
}
</script>

<style scoped>
.container {
  min-height: calc(100vh - 67px);
  padding: 40px 10px 80px 10px !important;
}
.title {
  font-weight: 600;
  font-size: 23px;
  line-height: 32px;
  color: #010e38;
}
.text {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #010e38;
  margin-top: 20px;
  margin-bottom: 40px;
}
.icon__div {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link__title {
  font-size: 15px;
  line-height: 22px;
  color: #4d5674;
}
.link__url {
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #010e38;
}

@media screen and (max-width: 700px) {
}
</style>