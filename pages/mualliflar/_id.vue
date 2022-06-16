<template>
  <div class="container">
    <div class="author-box">
      <div class="img-box">
        <img class="max-w-full max-h-full" src="../../assets/img/aka.jpg" alt=""/>
      </div>
      <div class="max-w-sm">
        <p class="author-name">Sardor Ergashev</p>
        <p class="author-title">
          Standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to
        </p>
      </div>
    </div>
    <div>
      <div class="tabs flex items-center justify-center gap-10">
        <p
          class="pb-3.5 border-b-2 text-lg"
          v-on:click="toggleTabs(1)"
          v-bind:class="{
            'font-normal': openTab !== 1,
            'font-semibold border-active': openTab === 1,
          }"
        >
          Media blog
        </p>
        <p
          class="pb-3.5 border-b-2 text-lg"
          v-on:click="toggleTabs(2)"
          v-bind:class="{
            'font-normal': openTab !== 2,
            'font-semibold border-active': openTab === 2,
          }"
        >
          Ta‘lim
        </p>

        <p
          class="pb-3.5 border-b-2 text-lg"
          v-on:click="toggleTabs(3)"
          v-bind:class="{
            'font-normal': openTab !== 3,
            'font-semibold border-active': openTab === 3,
          }"
        >
          Media loyihalar
        </p>
      </div>
      <div class="pt-10">
        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FirstCard v-for="item in mediaBlog" :key="item.id" :item="item" />
          </div>
        </div>
        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FirstCard v-for="item in talim" :key="item.id" :item="item" />
          </div>
        </div>
        <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FirstCard v-for="item in mediaLoyiha" :key="item.id" :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import FirstCard from '../../components/FirstCard.vue'

export default {
  name: 'pink-tabs',
  
  data() {
    return {
      id: null,
      user: {},
      openTab: 1,
      mediaBlog: [],
      talim: [],
      mediaLoyiha: [],
    }
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
    async getAuthor() {
      const getUser = await axios.get(`http://mediasaboq.uz/api/v1/author?id=${this.id}`)
      const res1 = await axios.get(`http://mediasaboq.uz/api/v1/articles?author=${this.id}&type=1`)
      const res2 = await axios.get(`http://mediasaboq.uz/api/v1/articles?author=${this.id}&type=2`)
      const res3 = await axios.get(`http://mediasaboq.uz/api/v1/articles?author=${this.id}&type=4`)

    //   console.log(res1.data.list)
    //   console.log(res2.data.list)
    //   console.log(res3.data.list)

      this.mediaBlog = res1.data.list
      this.talim = res2.data.list
      this.mediaLoyiha = res3.data.list
      this.user = getUser
      // console.log(this.list)
    },
  },

  mounted() {
    this.getAuthor()

    this.id = this.$route.params.id
    // this.name = this.$route.query.category
    // this.slug = this.$route.params.list

    // console.log(this.$route.query)
    // console.log(this.$route.params.id);
  },
}
</script>

<style scoped>
.container {
  padding: 80px 0 !important;
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

@media screen and (max-width: 1024px) {
  .load {
    padding: 2rem 0;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .author-box {
    gap: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>