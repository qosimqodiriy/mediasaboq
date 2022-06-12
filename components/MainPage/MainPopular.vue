<template>
  <div class="wrap">
    <h3 class="title">Mashhur bloglar</h3>
    <div class="items">
      <div class="item">
        <nuxt-link to="/">
          <p class="time"><img src="../../assets/icons/time.png" alt=""> 6 soat avval</p>
          <p class="txt">
            Shavkat Mirziyoyev maktab bitiruvchilarini So‘nggi qo‘ng‘iroq
            bayrami
          </p>
        </nuxt-link>
      </div>
      <div class="item">
        <nuxt-link to="/">
          <p class="time"><img src="../../assets/icons/time.png" alt=""> 6 soat avval</p>
          <p class="txt">
            Shavkat Mirziyoyev maktab bitiruvchilarini So‘nggi qo‘ng‘iroq
            bayrami
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPopular',
}
</script>

<style scoped>
.wrap {
  background-color: rgb(33, 221, 242);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: var(--24px);
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
}
.wrap {
  border: 2px solid var(--black);
  padding: 20px;
  /* height: 100%; */
}
.item {
  margin-bottom: 40px;
}
.item a {
  color: black;
}
.item a:hover {
  text-decoration: none;
}
.time {
  font-size: var(--12px);
  opacity: 0.6;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 5px;
}
.txt {
  font-size: var(--18px);
  font-weight: 500;
  line-height: 27px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
