<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="top">
        <h3 class="title">Ta’lim</h3>
        <nuxt-link class="next" to="/edu">
          Barchasi <img src="../../assets/icons/arrow.png" alt="">
        </nuxt-link>
      </div>
      <div class="grid">
        <FirstCard />
        <FirstCard />
        <FirstCard />
        <FirstCard />
        <FirstCard />
      </div>
      <div class="load">
        <nuxt-link class="btn"  to="/media-blog">
          Boshqa yangiliklar
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import FirstCard from '@/components/FirstCard'
export default {
  name: 'MainEdu',

  components: {
    FirstCard,
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-top: 40px;
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
  padding: 20px 0;
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
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .load {
    padding: 2rem 0;
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
