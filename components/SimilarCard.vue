<template>
  <div class="wrap space-y-10">
    <h3 class="title">O'xshash bloglar</h3>
    
    <div v-for="blog in item" :key="blog.id">
      <nuxt-link v-if="blog.type === 1" :to="`/media-blog/${blog.category.slug}/${blog.slug}`" >
        <p class="time">
          <img src="@/assets/icons/time.png" alt="time" /> 
          <span>
            {{ getHours(item.date).value }} 
            {{ getHours(item.date).type }} avval
          </span>
        </p>
        <h3 class="txt">{{ blog.title }}</h3>
      </nuxt-link>

      <nuxt-link v-if="blog.type === 2" :to="`/talim/${blog.category.slug}/${blog.slug}`" >
        <p class="time">
          <img src="@/assets/icons/time.png" alt="time" /> 
          <span>
            {{ getHours(item.date).value }} 
            {{ getHours(item.date).type }} avval
          </span>
        </p>
        <h3 class="txt">{{ blog.title }}</h3>
      </nuxt-link>

      <nuxt-link v-if="blog.type === 3" :to="`/media-loyihalar/${blog.slug}`" >
        <p class="time">
          <img src="@/assets/icons/time.png" alt="time" /> 
          <span>
            {{ getHours(item.date).value }} 
            {{ getHours(item.date).type }} avval
          </span>
        </p>
        <h3 class="txt">{{ blog.title }}</h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarCard',

  props: {
    item: {
      // required: true,
      type: Array,
    },
  },

  methods: {
    getHours(timestamp) {
      const now = Date.now()
      const date = new Date(timestamp)
      const diff = now - date

      if (diff / 1000 / 60 / 60 / 24 / 31 > 12) {
        return {
          type: 'yil',
          value: Math.round(diff / 1000 / 60 / 60 / 24 / 31 / 12),
        }
      } else if (diff / 1000 / 60 / 60 / 24 > 31) {
        return {
          type: 'oy',
          value: Math.round(diff / 1000 / 60 / 60 / 24 / 31),
        }
      } else if (diff / 1000 / 60 / 60 > 24) {
        return {
          type: 'kun',
          value: Math.round(diff / 1000 / 60 / 60 / 24),
        }
      } else if (diff / 1000 / 60 / 60 > 1) {
        return {
          type: 'soat',
          value: Math.round(diff / 1000 / 60 / 60 / 24),
        }
      } else {
        return {
          type: 'minut',
          value: Math.round(diff / 1000 / 60),
        }
      }
    },
  },
}
</script>

<style scoped>
.wrap {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: var(--24px);
  font-weight: 600;
  line-height: 32px;
}
.wrap {
  border: 2px solid var(--black);
  padding: 20px;
}
.time {
  font-size: var(--12px);
  opacity: 0.6;
  margin-bottom: 5px;
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
