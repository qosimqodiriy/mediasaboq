<template>
  <div>
    <div class="wrap">
      <div class="container p-0">
        <div class="top">
          <h3 class="title">Media loyihalar</h3>
        </div>
        <div class="grid">
          <nuxt-link
            to="`/media/${item.id}`"
            v-for="item in list"
            :key="item.id"
            @click.native="scrollToTop"
            class="link"
          >
            <FirstCard />
          </nuxt-link>
        </div>
        <div class="load">
          <button class="btn" v-if="offset < count - 6" @click="loadMedia">
            Boshqa yangiliklar <img src="@/assets/img/refresh.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import FirstCard from '../../components/FirstCard.vue'

export default {
  name: 'MediaProjekts',

  components: {
    FirstCard,
  },

  data() {
    return {
      offset: 0,
      list: [],
      count: 0
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    loadMedia() {
      this.offset = this.offset + 6
      if (this.offset < this.count) {
        this.getMedia()
      }
    },
    async getMedia() {
    const res = await axios.get('http://mediasaboq.uz/api/v1/articles', {
      params: {
        size: 6,
        offset: this.offset,
        type: 4
      }
    })
    // console.log(res.data.list);
    this.count = res.data.count
    this.list = [
        ...this.list,
        ...res.data.list
    ]
    // console.log(this.list)
  }
  },

  mounted() {
    this.getMedia()
  },
}
</script>

<style scoped>
.wrap {
  min-height: 70vh;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 20px 0;
}
.next {
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  font-weight: 500;
  font-size: var(--18px);
  position: relative;
  transition: 0.3s;
}
.next::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 75%;
  height: 2px;
  background: black;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
}
.next:hover {
  text-decoration: none !important;
}
.next:hover.next::after {
  opacity: 1;
  visibility: visible;
}
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
.btn img {
  transition: 1s;
}
.btn:hover img {
  transform: rotate(-360deg);
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
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
