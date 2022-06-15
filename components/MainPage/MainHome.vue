<template>
  <div class="container p-0">
    <div class="row grid-cols-1 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <div class="wrap">
          <nuxt-link class="link" to="/yangiliklar">
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
      </div>
      <div class="wrapBottom space-y-10">
        <h3 class="title">Mashhur bloglar</h3>
        <BlogCard v-for="item in isTop" :key="item" />
      </div>
    </div>
  </div>
</template>

<script>

import BlogCard from '@/components/BlogCard.vue'
// import MainBanner from '@/components/MainPage/MainBanner'

export default {
  name: 'MainHome',

  components: {
    // MainBanner,
    BlogCard
  },
  
  props: {
    list: {
      required: true,
      type: Array,
      default: () => []
    },
  },

  data() {
    return {
      isBig: {},
      isTop: [],
    }
  },

  methods: {
    getItems() {
      if(this.list.length > 0) {
        console.log(this.list.length);
        let index = 1;
        this.list.forEach( item => {
          if (index === 1) {
            this.isBig = item
          } else {
            this.isTop.push(item)
          }
          index ++;
        })
      } else {
        setTimeout(() => {this.getItems()}, 100)
      }
    },
  },

  mounted() {
    this.getItems()
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
.row {
  gap: 20px;
  display: grid;
  padding-top: 40px !important;
}
.wrapBottom {
  padding: 20px;
  border: 2px solid var(--black);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: var(--24px);
  font-weight: 600;
  line-height: 32px;
}

@media screen and (max-width: 1024px) {
  .txt {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
