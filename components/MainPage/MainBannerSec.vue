<template>
  <div class="wrap">
    <div class="category">
      <p class="name">{{ item.category.name }}</p>
    </div>
    <div class="img"><img :src="`https://mediasaboq.uz/${item.image}`" :alt="item.title" class="pic" /></div>
    <div class="content">
      <div class="mid">
        <p class="time"><img src="@/assets/icons/time.png" width="18" height="18" alt="clock"> 6 soat avval</p>
        <p class="seen"> <img src="@/assets/img/eye.svg" width="18" height="18" alt="eye" /> {{ item.hit }} </p>
      </div>
      <h3 class="txt">{{ item.title }}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainBanner',
  
  props: {
    item: {
      // required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
.wrap {
  position: relative;
  border: 2px solid var(--black);
  filter: var(--shadow);
}
.category {
  top: 0px;
  right: 0px;
  position: absolute;
  padding: 10px 20px;
  background: white;
  border-bottom: 2px solid var(--orange);
}
.img,
.seen,
.time {
  gap: 5px;
  display: flex;
  align-items: center;
}
.pic {
  width: 100%;
  height: 540px;
  object-fit: cover;
}
.seen,
.time {
  opacity: 0.6;
}
.content {
  background: transparent;
  /* backdrop-filter: blur(15px); */
  padding: 20px;
  width: 100%;
  color: black;
}
.txt {
  font-size: var(--30px);
  font-weight: 600;
  line-height: 44px;
}
.link {
  color: black;
}
.link:hover {
  color: black;
}
.mid {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 0 10px 0;
}
@media screen and (max-width: 1024px) {
  .txt {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
