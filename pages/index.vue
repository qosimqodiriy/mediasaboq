<template>
  <div>
    <div class="container p-0">
      <div class="row grid-cols-1 lg:grid-cols-3">

        <div v-if="isBig" class="lg:col-span-2">
          <div class="wrap">
            <nuxt-link class="link" to="/yangiliklar" >

              <div class="category"><p class="name">{{ isBig.category }}</p></div>
              <div class="img"><img :src="isBig && `http:mediasaboq.uz/${isBig.image}`" alt="" class="pic" /></div>
              <div class="content"><h4 class="txt">{{isBig.title}}</h4></div>

            </nuxt-link>
          </div>
        </div>
        
        <div class="wrapBottom space-y-10">
          <h3 class="title">Mashhur bloglar</h3>

          <!-- <BlogCard v-for="item in listTops" :key="item.id" :item="item" /> -->
          <div v-for="item in listTops" :key="item.id" class="item">
            <p class="time"><img src="@/assets/icons/time.png" alt="" /> 6 soat avval </p>
            <p class="txtCard">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <MediaBlog :list="listType1" />
    <MediaLoyiha :list="listType2" />
    <MainEdu :list="listType4" />
  </div>
</template>

<script>
import axios from 'axios'
import MediaBlog from '@/components/MainPage/MediaBlog.vue'
import MediaLoyiha from '@/components/MainPage/MediaLoyihalar.vue'
import MainEdu from '@/components/MainPage/MainEdu.vue'


export default {
  name: 'IndexPage',

  components: { MediaBlog, MainEdu, MediaLoyiha },

  data() {
    return {
      listAll: [],
      listTops: [],
      listType1: [],
      listType2: [],
      listType4: [],

      isBig: {},
      // isTop: [],
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    async getBooks() {
      const res = await axios.get('http://mediasaboq.uz/api/v1/articles?mainPage=true')
      // console.log(res.data)
      this.listAll = res.data

      let index = 1
      this.listAll.forEach((item) => {
        if ((item.isMain === true || item.isTop === true) && index < 6) {
          if (index === 1) {
            this.isBig = item
            console.log(this.isBig);
          } else {
            this.listTops.push(item)
          }
        } else if (item.type === 1) {
          this.listType1.push(item)
        } else if (item.type === 2) {
          this.listType2.push(item)
        } else if (item.type === 4) {
          this.listType4.push(item)
        }
        index++
      })

      // console.log(this.listTops);
      // console.log(this.listType1);
      // console.log(this.listType2);
      // console.log(this.listType4);
    },
  },

  mounted() {
    this.getBooks()
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

.time {
  font-size: var(--12px);
  opacity: 0.6;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  column-gap: 5px;
}
.txtCard {
  font-size: var(--18px);
  font-weight: 500;
  line-height: 27px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 1024px) {
  .txt {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
