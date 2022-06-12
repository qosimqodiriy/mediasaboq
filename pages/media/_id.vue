<template>
  <div class="container">
    <div class="crumbs">
      <nuxt-link class="last-page" to="/"> Asosiy </nuxt-link>
      <nuxt-link class="last-page" to="/media">/ Media loyihalar </nuxt-link>
      <p class="this-page">
        / Shavkat Mirziyoyev maktab bitiruvchilarini tabrikladi
      </p>
    </div>
    <div class="row grid-cols-1 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <MainBannerSec />
        <div class="content">
          <p>
            Qadrli maktab bitiruvchilari!

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
        <div class="tags">
          <p>#bleach</p>
          <p>#onepiece</p>
          <p>#naruto</p>
        </div>
        <div class="author">
          <div class="person">
            <img src="@/assets/img/1.jpg" alt="" />
          </div>
          <div class="initials">
            <p class="name">Elnur Ismoilov</p>
            <p class="status">Muallif</p>
          </div>
        </div>
      </div>
      <div class="">
        <MainPopular />
      </div>
    </div>
  </div>
</template>

<script>
import MainBannerSec from '@/components/MainPage/MainBannerSec'
import MainPopular from '@/components/MainPage/MainPopular'
export default {
  name: 'NewsInner',

  components: {
    MainBannerSec,
    MainPopular,
  },
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
.person img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
}
.author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.name {
  font-size: var(--18px);
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.status {
  opacity: 0.6;
  font-size: var(--15px);
}
.tags {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 40px 0;
}
.tags p {
  color: #4d5674;
  text-decoration: underline;
}
.content {
  padding-top: 40px;
}
.content p {
  font-size: var(--18px);
  line-height: 30px;
  margin-bottom: 40px;
}
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
@media screen and (max-width: 1024px) {
 
}

@media screen and (max-width: 768px) {
  .left {
    padding-top: 40px;
  }
}
</style>
