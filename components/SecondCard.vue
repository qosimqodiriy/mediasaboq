<template>
  <div class="whole w-full">
    <div>
      <div  class="imgBox">
        <img :src="`https://mediasaboq.uz/${item.image}`" :alt="item.title" class="pic" />
      </div>
    </div>
    <div>
      <!-- <div class="mid">
          <p class="name">Kategoriya nomi</p>
        </div> -->
      <div class="asap">
        <div class="bottom">
          <h3 class="title__lil">{{ item.name }}</h3>
          <p class="txt">{{ item.bookAuthor }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondCard',
  
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
.whole {
  border: 2px solid var(--black);
  box-shadow: var(--shadow-sec);
  /* background-color: green; */
}
.asap {
  padding: 20px;
}
.imgBox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.pic {
  height: 259px;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}
.time {
  font-size: var(--12px);
  opacity: 0.6;
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.txt {
  font-size: var(--12px);
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
