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
            <nuxt-link class="link" to="/authors" @click.native="scrollToTop">Mualliflar</nuxt-link>
          </div>
        </div>
        <div class="socs">
          <a href="#" v-for="link in list" :key="link.id"> <img class="soc" :src="`http://mediasaboq.uz/${link.icon}`" alt="" /> </a>
          <!-- <a href="#" class="soc"> <img src="../assets/icons/telegram.png" alt="" /> </a>
          <a href="#" class="soc"> <img src="../assets/icons/facebook.png" alt="" /> </a>
          <a href="#" class="soc"> <img src="../assets/icons/twitter.png" alt="" /> </a>
          <a href="#" class="soc"> <img src="../assets/icons/instagram.png" alt="" /> </a> -->
        </div>
      </div>
      <div class="bottom">
        <p class="txt">
          To use messages on the site, you must obtain written consent of the
          BioGeoKim <br />
          2017-2022
        </p>
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
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async getSocials() {
    const res = await axios.get('http://mediasaboq.uz/api/v1/socials')
    // console.log(res.data);
    this.list = [
        ...res.data
    ]
    // console.log(this.list)
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
  width: 24px;
  height: 24px;
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
