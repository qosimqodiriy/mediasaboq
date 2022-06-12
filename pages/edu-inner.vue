<template>
  <div class="wrapper">
    <div class="container p-0">
      <div class="crumbs">
        <nuxt-link class="last-page" to="/"> Asosiy </nuxt-link>
        <nuxt-link class="last-page" to="/edu">/ Ta’lim </nuxt-link>
        <p class="this-page">/ Video-o‘yinlar savodxonligi</p>
      </div>
      <div class="grid">
        <FirstCard />
        <FirstCard />
        <FirstCard />
        <FirstCard />
      </div>
      <div class="load">
        <button class="btn">
          Boshqa yangiliklar
          <img src="@/assets/img/refresh.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FirstCard from '@/components/FirstCard'

export default {
  name: 'EducationInner',

  components: {
    FirstCard,
  },
}
</script>

<style>
.crumbs {
  padding: 40px 0;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: var(--18px);
}
.last-page {
  color: black;
  opacity: 0.7;
}
.this-page {
  font-weight: 600;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
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
.card {
  border: none;
}
.card-body {
  padding: 0;
}
.nav-link {
  font-size: var(--18px);
  color: black;
  padding: 10px 0;
}
.nav-link:hover {
  border: none !important;
  color: black;
  border-color: transparent;
}
.card-header {
  background: transparent;
  padding: 0 10px;
}
.nav-link.active {
  font-size: var(--24px);
  font-weight: 600;
  border-bottom: 2px solid var(--orange) !important;
  border: none;
}
.nav {
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}
@media screen and (max-width: 1024px) {
  .load {
    padding: 2rem 0;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
