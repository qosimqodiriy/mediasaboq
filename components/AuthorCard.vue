<template>
  <div class="whole flex w-full">
    <!-- <nuxt-link class="link" to="/" @click.native="scrollToTop"> -->
      <div class="asap">
        <img :src="`https://mediasaboq.uz/${item.image}`" :alt="item.name" class="pic" />
        <div class="bottom">
          <h2 class="title__lil">{{ item.name }}</h2>
          <p class="txt flex-auto">{{ item.description }}</p>
        </div>
      </div>
    <!-- </nuxt-link> -->
  </div>
</template>

<script>

export default {
  name: 'AuthorCard',

  props: {
    item: {
      required: true,
      type: Object,
    }
  },
}
</script>

<style scoped>
.whole {
  border: 2px solid var(--black);
  box-shadow: var(--shadow-sec);
}
.asap {
  padding: 20px;
}
.pic {
  height: 140px;
  width: 140px;
  object-fit: cover;
  border: 2px solid #010E38;
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
  margin-top: 20px;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.txt {
  font-size: var(--12px);
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
