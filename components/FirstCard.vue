<template>
  <div class="whole">
    <!-- <nuxt-link class="link" to="/news-inner" @click.native="scrollToTop"> -->
    <div class="img">
      <img src="@/assets/img/1.jpg" alt="" class="pic" />
    </div>
    <div class="asap">
      <div class="mid">
        <p class="name">Kategoriya nomi</p>
        <p class="time"><img src="../assets/icons/time.png" alt=""> 6 soat avval</p>
      </div>
      <div class="bottom">
        <p class="title__lil">
          Abituriyentlarni nimalar kutyapti? - imtihonlar bo‘yicha asosiy
          yangiliklar
        </p>
        <p class="txt">
          DTMning ma’lum qilishicha, test sinovlarini o‘tkazish uchun binolar
          ro‘yxati 2 xil variantda shakllantirilgan. Agar pand...
        </p>
      </div>
    </div>
    <!-- </nuxt-link> -->
  </div>
</template>

<script>
export default {
  name: 'FirstCard',
  
  // props: {
  //   item: {
  //     required: true,
  //     type: Object,
  //   },
  // },
}
</script>

<style scoped>
.whole {
  border: 2px solid var(--black);
  box-shadow: var(--shadow-sec);
  /* background-color: red; */
}
.asap {
  padding: 20px;
}
.pic {
  height: 259px;
  width: 100%;
  object-fit: cover;
}
.time {
  font-size: var(--12px);
  opacity: 0.6;
  display: flex;
  align-items: center;
  column-gap: 5px;
}
.link {
  color: black;
}
.link:hover {
  text-decoration: none;
}
.mid {
  padding: 0 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name {
  color: var(--orange);
  font-weight: 500;
  font-size: var(--12px);
  text-transform: uppercase;
}
.title__lil {
  font-size: var(--18px);
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.txt {
  font-size: var(--12px);
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
