<template>
  <div class="container">
    <div class="crumbs">
      <nuxt-link class="last-page" to="/"> Asosiy </nuxt-link>
      <nuxt-link class="last-page" to="/kitoblar">/ Kutubxona </nuxt-link>
      <p class="this-page">/ Diqqat</p>
    </div>
    <div class="row grid-cols-1 lg:grid-cols-2">
      <div class="">
        <MainBannerThird />
      </div>
      <div class="">
        <div class="content">
          <p class="lil-title">Kitob haqida</p>
          <p>Qadrli maktab bitiruvchilari!

            Sizlarni maktab ta’limini muvaffaqiyatli tugatib, mustaqil hayotga –
            umringizning yanada go‘zal va mas’uliyatli bosqichiga qadam
            qo‘yayotganingiz bilan chin qalbimdan samimiy tabriklayman.
            
            Mamlakatimizdagi barcha umumta’lim dargohlarida “so‘nggi
            qo‘ng‘iroq”lar yangrab, qadrdon maktabingiz, mehribon ustozlaringiz
            bilan xayrlashuv tadbirlari o‘tkazilayotgan ushbu quvonchli va
            g‘oyat hayajonli damlarda hammangizga kelgusi hayotda ulkan yutuq va
            omadlar tilayman.

            Umid va ishonch ramzi bo‘lgan yetuklik shahodatnomalari barchangizga
            muborak bo‘lsin!
            
            Bu yil respublikamizda 390 ming nafardan ziyod o‘quvchi yoshlar
            umumta’lim maktablarini bitirmoqda. Hech shubhasiz, o‘z bilim va
            iste’dodini Vatanimiz va xalqimizga munosib farzand bo‘lishdek
            olijanob maqsadlarga sarflashga chog‘lanib turgan sizdek tirishqoq
            va intiluvchan farzandlarimiz – bizning ishonchimiz va tayanchimiz,
            Yangi O‘zbekistonning oltin fondi, bebaho xazinasidir.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBannerThird from '@/components/MainPage/MainBannerThird.vue'
export default {
  name: 'BookInner',
  components: { MainBannerThird },
}
</script>

<style scoped>
.container {
  padding-bottom: 80px !important;
}
.row {
  gap: 20px;
  display: grid;
}
.content p {
  font-size: var(--18px);
  line-height: 30px;
}
.crumbs {
  display: flex;
  align-items: center;
  padding: 40px 0 !important;
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
.lil-title {
  font-weight: 600;
  line-height: 32px !important;
  font-size: 23px !important;
  margin-bottom: 10px !important;
}

@media screen and (max-width: 1024px) {
  .container {
    padding-bottom: 60px !important;
  }
}

@media screen and (max-width: 768px) {
  .left {
    margin-top: 20px;
  }
}
</style>
