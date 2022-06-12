<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="top">
        <h3 class="title">Media blog</h3>
        <nuxt-link class="next" to="/">
          Barchasi <img src="../../assets/icons/arrow.png" alt="">
        </nuxt-link>
      </div>
      <div class="grid">
        <FirstCard />
        <FirstCard />
        <FirstCard />
        <FirstCard />
      </div>
    </div>
  </div>
</template>

<script>
import FirstCard from '@/components/FirstCard'
export default {
  name: 'MediaBlog',

  components: {
    FirstCard,
  },
}
</script>

<style scoped>
.wrap {
  padding: 40px 0;
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

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
