<template>
  <div class="container p-0 flex flex-col">
    <form class="form">
      <label
        for="default-search"
        class="text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >Search</label
      >
      <div class="relative">
        <input
          id="default-search"
          class="search block w-full relative outline-none text-center"
          v-model="InputValue"
          placeholder="Qidiruv..."
        />
        <div
          v-if="InputValue.length !== 0"
          @click="DeleteValue"
          class="flex items-center absolute inset-y-0 right-2.5 close"
        >
          <img class="cursor-pointer" src="../assets/icons/close.png" alt="" />
        </div>
      </div>
    </form>
    <div v-if="InputValue.length < 3" class="flex-auto w-full h-full flex items-center justify-center pb-10">
      <p class="search-title">Kerakli maqolangizga tegishli kalit so‘zni kiriting!!!!</p>
    </div>
    <div v-if="InputValue.length > 2" class="pb-10">
      <div class="tabs flex items-center justify-center gap-10">
        <p class="pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(1)" v-bind:class="{ 'font-normal': openTab !== 1, 'font-semibold border-active': openTab === 1,}">Media blog      <span v-bind:class="{ 'countFalseBg': openTab !== 1, 'countTrueBg': openTab === 1 }" v-if="mediaBlog.count" class="count">{{mediaBlog.count}}</span></p>
        <p class="pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(2)" v-bind:class="{ 'font-normal': openTab !== 2, 'font-semibold border-active': openTab === 2,}">Ta‘lim          <span v-bind:class="{ 'countFalseBg': openTab !== 2, 'countTrueBg': openTab === 2 }" v-if="talim.count" class="count">{{talim.count}}</span></p>
        <p class="pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(3)" v-bind:class="{ 'font-normal': openTab !== 3, 'font-semibold border-active': openTab === 3,}">Kutubxona       <span v-bind:class="{ 'countFalseBg': openTab !== 3, 'countTrueBg': openTab === 3 }" v-if="kitoblar.count" class="count">{{kitoblar.count}}</span></p>
        <p class="pb-3.5 border-b-2 text-lg" v-on:click="toggleTabs(4)" v-bind:class="{ 'font-normal': openTab !== 4, 'font-semibold border-active': openTab === 4,}">Media loyihalar <span v-bind:class="{ 'countFalseBg': openTab !== 4, 'countTrueBg': openTab === 4 }" v-if="mediaLoyihalar.count" class="count">{{mediaLoyihalar.count}}</span></p>
      </div>
      <div class="pt-10">
        <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FirstCard v-for="(item, index) in mediaBlog.list" :key="index" :item="item" />
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FirstCard v-for="(item, index) in talim.list" :key="index" :item="item" />
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <SecondCard v-for="(item, index) in kitoblar.list" :key="index" :item="item" />
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FirstCard v-for="(item, index) in mediaLoyihalar.list" :key="index" :item="item"/>
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

  components: {
    SecondCard,
    FirstCard
  },

  data() {
    return {
      isTrue: 0,
      openTab: 1,
      InputValue: '',
      changeValue: 1,
      mediaBlog: [],
      talim: [],
      kitoblar: [],
      mediaLoyihalar: [],
    }
  },

  methods: {
    DeleteValue() {
      this.InputValue = ''
    },
    
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },

    Check() {
      if(this.changeValue !== this.InputValue) {
        this.getData();
        this.changeValue = this.InputValue
      }
      if(this.InputValue.length > 0) {
        this.isTrue = 1
      }
      setTimeout(() => {this.Check()}, 100)
    },
    
    async getData() {
      if(this.InputValue.length > 2 ) {
        const res1 = await axios.get(`http://mediasaboq.uz/api/v1/articles?search=${this.InputValue}&type=1`)
        const res2 = await axios.get(`http://mediasaboq.uz/api/v1/articles?search=${this.InputValue}&type=2`)
        const res3 = await axios.get(`http://mediasaboq.uz/api/v1/books?search=${this.InputValue}`)
        const res4 = await axios.get(`http://mediasaboq.uz/api/v1/articles?search=${this.InputValue}&type=4`)

        // console.log(res1.data)
        // console.log(res2.data)
        // console.log(res3.data)
        // console.log(res4.data)

        this.mediaBlog = res1.data
        this.talim = res2.data
        this.kitoblar = res3.data
        this.mediaLoyihalar = res4.data
      }
      if(this.InputValue.length < 3 && this.isTrue === 1) {
        this.mediaBlog = []
        this.talim = []
        this.kitoblar = []
        this.mediaLoyihalar = []

        this.openTab = 1
      }
    },
  },

  mounted() {
    this.Check()
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