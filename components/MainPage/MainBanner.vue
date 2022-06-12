<template>
  <div class="wrap">
    <nuxt-link class="link" to="/news-inner">
      <div class="category">
        <p class="name">Kategoriya</p>
      </div>
      <div class="img">
        <img src="@/assets/img/aka.jpg" alt="" class="pic" />
      </div>
      <div class="content">
        <h4 class="txt">
          Shavkat Mirziyoyev maktab bitiruvchilarini So‘nggi qo‘ng‘iroq bayrami
          bilan tabrikladi
        </h4>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MainBanner',
}
</script>

<style scoped>
.wrap {
  position: relative;
  border: 2px solid var(--black);
  filter: var(--shadow);
}
.category {
  position: absolute;
  right: 0;
  top: 0;
  background: white;
  border-bottom: 2px solid var(--orange);
  padding: 10px 20px;
}
.img {
  display: flex;
  align-items: center;
}
.pic {
  width: 100%;
  height: 540px;
  object-fit: cover;
}

.content {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  width: 100%;
  color: white;
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
@media screen and (max-width: 1024px) {
  .txt {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
