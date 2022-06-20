<template>
  <div v-if="list.body" class="container">
    <h1 class="title">Biz haqimizda</h1>
    <p class="text">{{ list.body.uz }}</p>
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
            alt=""
          />
        </div>
        <p class="link__title">{{ link.name }}</p>
        <p class="link__url">{{ link.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AboutPage',

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