<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="top">
        <div class="better">
          <div class="brand">
            <nuxt-link to="/">
              <img src="@/assets/img/brand.svg" alt="" />
            </nuxt-link>
          </div>
          <div class="links">
            <nuxt-link class="link" to="/">Biz haqimizda</nuxt-link>
            <nuxt-link class="link" to="/authors">Mualliflar</nuxt-link>
          </div>
        </div>
        <div class="socs">
          <a href="#" class="soc"><i class="bx bxl-youtube"></i></a>
          <a href="#" class="soc"><i class="bx bxl-telegram"></i></a>
          <a href="#" class="soc"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="soc"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="soc"><i class="bx bxl-instagram"></i></a>
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
export default {
  name: 'TheFooter',
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
  color: white;
  font-size: 28px;
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
