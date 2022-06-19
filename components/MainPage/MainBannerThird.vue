<template>
  <div v-if="item.title" class="card">
    <div class="img">
      <img :src="`http://mediasaboq.uz/${item.image}`" alt="" class="pic" />
    </div>
    <div class="content">
      <div class="mid">
        <p class="time">{{ item.bookAuthor }}</p>
      </div>
      <h4 class="txt">{{ item.title }}</h4>
      <div class="download">
        <a :href="`http://mediasaboq.uz/${item.url}`" download class="btn">
          Yuklab olish <img src="../../assets/icons/download.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookBanner',
  
  props: {
    item: {
      // required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
.card {
  position: relative;
  border: 2px solid var(--black);
  filter: var(--shadow);
}
.category {
  position: absolute;
  right: 0px;
  top: 0px;
  background: white;
  border-bottom: 2px solid var(--orange);
  padding: 10px 20px;
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
  border-bottom: 2px solid black;
}
.seen,
.time {
  opacity: 0.6;
}
.content {
  background: transparent;
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
.btn {
  background: var(--orange);
  color: white;
  font-size: var(--12px);
  /* width: 240px; */
  padding: 1rem 60px;
  border-radius: 0;
  margin-top: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
}
.btn:hover img {
  transform: rotate(0deg);
}
.btn:focus {
  box-shadow: none;
}
@media screen and (max-width: 1024px) {
  .txt {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
