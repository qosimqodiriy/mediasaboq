<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="top">
        <div class="better">
          <div class="brand">
            <nuxt-link to="/" @click.native="scrollToTop">
              <img src="@/assets/img/brand.svg" alt="" />
            </nuxt-link>
          </div>
          <div class="links">
            <nuxt-link class="link" to="/aboutAs" @click.native="scrollToTop">Biz haqimizda</nuxt-link>
            <nuxt-link class="link" to="/mualliflar" @click.native="scrollToTop">Mualliflar</nuxt-link>
          </div>
        </div>
        <div class="socs">
          <a target="_blank" :href="link.url" v-for="link in list" :key="link.id">
            <img class="soc" :src="`http://mediasaboq.uz/${link.icon}`" alt="" />
          </a>
        </div>
      </div>
      <div class="bottom">
        <p class="txt" v-if="copyRight.footer">{{ copyRight.footer.uz }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheFooter',

  data() {
    return {
      list: [],
      copyRight: ''
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async getSocials() {
    const res = await axios.get('http://mediasaboq.uz/api/v1/socials')
    const copy = await axios.get('http://mediasaboq.uz/api/v1/footer')
    this.list = res.data
    this.copyRight = copy.data
  }
  },

  mounted() {
    this.getSocials()
  },
}
</script>

<style scoped>
.wrap {
  background: var(--black);
  color: white;
  padding: 26px 0;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}
.better {
  display: flex;
  align-items: center;
  gap: 80px;
}
.link {
  color: white;
  margin-right: 40px;
}
.link:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}
.link:last-child {
  margin-right: 0;
}
.socs {
  gap: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.soc {
  width: 30px;
  height: 30px;
  object-fit: cover;
  object-position: center;
}
.txt {
  text-align: center;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 24px;
  margin-top: 20px;
}
@media screen and (max-width: 1024px) {
  .better,
  .top {
    flex-direction: column;
  }
  .better {
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  .link {
    margin-right: 0;
  }
}
</style>
