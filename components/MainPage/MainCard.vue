<template>
    <div v-if="item !== {}" class="mainBlock">
        <nuxt-link class="link" :to="item.to" >
            <div class="category absolute top-0 right-0 bg-white"><p class="name">{{ item.category.name }}</p></div>
            <div class="img">
              <img :src="`https://mediasaboq.uz/${item.image}`" alt="" class="pic" />
            </div>
            <div class="content"><h4 class="txt">{{item.title}}</h4></div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'MainCard',
  
  props: {
    item: { required: true, type: Object },
  },
}
</script>


<style scoped>

.mainBlock {
  width: 100%;
  position: relative;
  border: 2px solid var(--black);
  filter: var(--shadow);
}
.category {
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
.row {
  gap: 20px;
  display: grid;
  padding-top: 40px !important;
}

@media screen and (max-width: 1024px) {
  .txt {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>