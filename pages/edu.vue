<template>
  <div class="wrap">
    <div class="container p-0">
      <h1 class="title">Ta’lim</h1>
      <div class="grid">
        <EduMainCard :title="title" />
        <EduMainCard :title="title" />
        <EduMainCard :title="title" />
        <!-- <div class="cardo">
          <nuxt-link class="link" to="/edu-inner">
            <img src="@/assets/img/card-1.jpg" class="pic" alt="" />
            <div class="content">
              <p class="txt">Medisavodxonlik</p>
              <p class="arrow">
                <i class="bx bx-up-arrow-alt"></i>
              </p>
            </div>
          </nuxt-link>
        </div>
        <div class="cardo">
          <nuxt-link class="link" to="/edu-inner">
            <img src="@/assets/img/card-2.jpg" class="pic" alt="" />
            <div class="content">
              <p class="txt">Video-o’yinlar savodxonligi</p>
              <p class="arrow">
                <i class="bx bx-up-arrow-alt"></i>
              </p>
            </div>
          </nuxt-link>
        </div>
        <div class="cardo">
          <nuxt-link class="link" to="/edu-inner">
            <img src="@/assets/img/card-3.jpg" class="pic" alt="" />
            <div class="content">
              <p class="txt">Reklama savodxonligi</p>
              <p class="arrow">
                <i class="bx bx-up-arrow-alt"></i>
              </p>
            </div>
          </nuxt-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import EduMainCard from '../components/EduPage/EduMainCard.vue'
export default {
  name: 'EducationPage',

  components: { EduMainCard },

  data() {
    return {
      title: 'Example blog post',
    }
  },
}
</script>

<style scoped>
.wrap {
  padding: 40px 0;
  min-height: 85vh;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px 0 0;
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
