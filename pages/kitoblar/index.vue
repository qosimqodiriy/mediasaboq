<template>
  <div class="wrap">
    <div class="container p-0">
      <h1 class="title">Kutubxona</h1>
      <div class="grid">
        <nuxt-link
          class="link flex"
          :to="`/kitoblar/${item.id}`"
          v-for="item in list"
          :key="item.id"
          @click.native="scrollToTop"
        >
          <SecondCard :item="item" />
        </nuxt-link>
      </div>
      <div class="load">
        <button class="btn" v-if="offset < count - 8" @click="loadMedia">
          Boshqa kitoblar <img src="@/assets/img/refresh.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SecondCard from '@/components/SecondCard'
export default {
  name: 'BooksPage',

  components: {
    SecondCard,
  },

  data() {
    return {
      offset: 0,
      list: [],
      count: 0,
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    
    loadMedia() {
      this.offset = this.offset + 8
      if (this.offset < this.count) {
        this.getBooks()
      }
    },
    async getBooks() {
      const res = await axios.get('http://mediasaboq.uz/api/v1/books', {
        params: {
          size: 8,
          offset: this.offset,
          type: 4,
        },
      })
      // console.log(res.data.list);
      this.count = res.data.count
      this.list = [...this.list, ...res.data.list]
    },
  },

  mounted() {
    this.getBooks()
  },
}
</script>

<style scoped>
.wrap {
  min-height: 90vh;
}
.title {
  padding: 40px 0 20px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
