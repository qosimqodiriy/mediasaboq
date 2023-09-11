<template>
  <div class="container flex flex-col">
    <form class="form">
      <label for="search" class="text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
      <div class="relative px-2">
        <!-- <input id="search" v-model="InputValue" v-on:keypress.enter.prevent="ClickSearch" placeholder="Qidiruv..." class="search block w-full relative outline-none text-center" /> -->
        <input type="search" name="search" v-model="InputValue" @input="ClickSearch" placeholder="Qidiruv..." class="search block w-full relative outline-none text-center">
        <!-- <div v-if="InputValue.length !== 0" @click="DeleteValue" class="flex items-center absolute inset-y-0 right-3 close">
          <img class="cursor-pointer" src="../assets/icons/close.png" alt="close" />
        </div> -->
      </div>
    </form>
    <div v-if="!isTrue || InputValue == ''" class="flex-auto w-full h-full flex items-center justify-center pb-10">
      <p class="search-title">Kerakli maqolangizga tegishli kalit so‘zni kiriting!!!!</p>
    </div>
    <div v-if="isTrue">
      <div class="tabs flex flex-col md:flex-row items-center justify-center md:gap-10">
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(1)" v-bind:class="{ 'font-normal': openTab !== 1, 'font-semibold border-active': openTab === 1,}">Media blog      <span v-bind:class="{ 'countFalseBg': openTab !== 1, 'countTrueBg': openTab === 1 }" v-if="count1" class="count">{{count1}}</span></p>
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(2)" v-bind:class="{ 'font-normal': openTab !== 2, 'font-semibold border-active': openTab === 2,}">Ta‘lim          <span v-bind:class="{ 'countFalseBg': openTab !== 2, 'countTrueBg': openTab === 2 }" v-if="count2" class="count">{{count2}}</span></p>
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(3)" v-bind:class="{ 'font-normal': openTab !== 3, 'font-semibold border-active': openTab === 3,}">Kutubxona       <span v-bind:class="{ 'countFalseBg': openTab !== 3, 'countTrueBg': openTab === 3 }" v-if="count3" class="count">{{count3}}</span></p>
        <p class="cursor-pointer text-center md:text-start inline pb-1 pt-1.5 md:pb-3.5 md:pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(4)" v-bind:class="{ 'font-normal': openTab !== 4, 'font-semibold border-active': openTab === 4,}">Media loyihalar <span v-bind:class="{ 'countFalseBg': openTab !== 4, 'countTrueBg': openTab === 4 }" v-if="count4" class="count">{{count4}}</span></p>
      </div>
      <div class="pt-10">
        <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link class="flex" :to="`/media-blog/${item.category.slug}/${item.slug}`" v-for="(item, index) in mediaBlog" :key="index">
              <FirstCard :show="true" :item="item" />
            </nuxt-link>
          </div>
          <div class="load">
            <button class="btn" v-if="offset1 < count1 - 6" @click="loadMedia">
              Boshqa maqolalar <img src="@/assets/img/refresh.svg" alt="resfesh" />
            </button>
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <nuxt-link class="flex" :to="`/talim/${item.category.slug}/${item.slug}`" v-for="(item, index) in talim" :key="index">
              <FirstCard :show="true" :item="item" />
            </nuxt-link>
          </div>
          <div class="load">
            <button class="btn" v-if="offset2 < count2 - 6" @click="loadTalim">
              Boshqa maqolalar <img src="@/assets/img/refresh.svg" alt="resfesh" />
            </button>
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
          <div class="gridBooks gap-5">
            <nuxt-link class="flex" :to="`/kutubxona/${item.slug}`" v-for="(item, index) in kitoblar" :key="index">
              <SecondCard :item="item" />
            </nuxt-link>
          </div>
          <div class="load">
            <button class="btn" v-if="offset3 < count3 - 8" @click="loadBook">
              Boshqa maqolalar <img src="@/assets/img/refresh.svg" alt="resfesh" />
            </button>
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <nuxt-link class="flex" :to="`/media-loyahalar/${item.slug}`" v-for="(item, index) in mediaLoyihalar" :key="index">
              <FirstCard :show="false" :item="item"/>
            </nuxt-link>
          </div>
          <div class="load">
            <button class="btn" v-if="offset4 < count4 - 6" @click="loadMediaLoyiha">
              Boshqa maqolalar <img src="@/assets/img/refresh.svg" alt="resfesh" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SecondCard from '@/components/SecondCard'
import FirstCard from '@/components/FirstCard'

export default {
  name: 'QidirishOynasi',

  head: {
    title: 'Qidiruv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Qidiruv - buu ...'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'qidiruv',
      },
      {
        hid: 'og_description',
        property: 'og:description',
        content: 'Qidiruv - buu ...',
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: '/qidiruv',
      },
    ],
  },

  components: {
    SecondCard,
    FirstCard
  },

  data() {
    return {
      get: true,
      openTab: 1,
      isTrue: false,
      InputValue: '',
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      offset1: 0,
      offset2: 0,
      offset3: 0,
      offset4: 0,
      mediaBlog: [],
      talim: [],
      kitoblar: [],
      mediaLoyihalar: [],
    }
  },

  methods: {
    DeleteValue(event) {
      event.preventDefault();
      this.InputValue = ''
    },
    

    ClickSearch(event) {
      // this.openTab = 1
      if(this.InputValue.length > 0) {
        this.isTrue = true
        this.mediaBlog = []
        this.talim = []
        this.kitoblar = []
        this.mediaLoyihalar = []

        this.getMediaBlog()
        this.getTalim()
        this.getBooks()
        this.getMediaLoyiha()
      } else {
        this.isTrue = false
      }
    },

    // check() {
    //   if (this.InputValue.length < 3) {
    //     this.isTrue = false

    //     this.mediaBlog = []
    //     this.talim = []
    //     this.kitoblar = []
    //     this.mediaLoyihalar = []
    //   }
    //   setTimeout(() => { this.check() }, 100);
    // },
    
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

    loadBook() {
      this.offset3 = this.offset3 + 8
      if (this.offset3 < this.count3) {
        this.getBooks()
      }
    },

    loadMediaLoyiha() {
      this.offset4 = this.offset4 + 6
      if (this.offset4 < this.count4) {
        this.getMediaLoyiha()
      }
    },
    
    async getMediaBlog() {
      const res1 = await axios.get(`https://mediasaboq.uz/api/v1/articles?search=${this.InputValue}&type=1`, {
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
    },

    async getTalim() {
      const res2 = await axios.get(`https://mediasaboq.uz/api/v1/articles?search=${this.InputValue}&type=2`, {
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
    },

    async getBooks() {
        const res3 = await axios.get(`https://mediasaboq.uz/api/v1/books?search=${this.InputValue}`, {
          params: {
            size: 8,
            offset: this.offset3,
          }
        })
        this.count3 = res3.data.count
        this.kitoblar = [
          ...this.kitoblar,
          ...res3.data.list
        ]
    },

    async getMediaLoyiha() {
        const res4 = await axios.get(`https://mediasaboq.uz/api/v1/articles?search=${this.InputValue}&type=3`, {
          params: {
            size: 6,
            offset: this.offset4,
          }
        })
        this.count4 = res4.data.count
        this.mediaLoyihalar = [
          ...this.mediaLoyihalar,
          ...res4.data.list
        ]
    },
  },

  mounted() {
    // this.check()
  },
}
</script>


<style scoped>
.container {
  padding-top: 40px !important;
  min-height: calc(100vh - 140px);
}
.form {
  margin-bottom: 40px;
}
.search {
  padding: 10px 5px;
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
.gridBooks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.load {
  padding: 40px 0;
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
  margin: 40px 0;
}

@media screen and (max-width: 1024px) {
  .gridBooks {
    grid-template-columns: repeat(3, 1fr);
  }
  .load {
    padding: 2rem 0;
  }
}

@media screen and (max-width: 900px) {
  .gridBooks {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .gridBooks {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
