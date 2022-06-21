<template>
  <div v-if="item.category" class="whole w-full">
    <div class="img">
      <img :src="`https://mediasaboq.uz/${item.image}`" alt="" class="pic" />
    </div>
    <div class="asap">
      <div class="mid">
        <p class="name" v-if="show !== false">{{ item.category.name }}</p>
        <p class="time">
          <img src="../assets/icons/time.png" alt=""> 
          <span>
            {{ getHours(151616546465465).value }} 
            {{ getHours(151616546465465).type }} avval
          </span> 
        </p>
      </div>
      <div class="bottom">
        <p class="title__lil">{{ item.title }}</p>
        <p class="txt">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FirstCard',

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
  
  props: {
    item: {
      required: true,
      type: Object,
    },
    show: {
      required: false,
      type: Boolean,
    }
  },

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
