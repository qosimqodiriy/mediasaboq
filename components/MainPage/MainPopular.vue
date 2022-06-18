<template>
    <div v-if="list.length > 0" class="wrapBottom space-y-10">
          <h3 class="title">Mashhur bloglar</h3>

          <div v-for="item in list" :key="item.id">
            <nuxt-link :to="item.to">
              <p class="time"><img src="@/assets/icons/time.png" alt="" /> 6 soat avval </p>
              <p class="txtCard">{{ item.title }}</p>
            </nuxt-link>
          </div>

        </div>
</template>

<script>
export default {
  name: 'MainPopular',

  data() {
    return {
      to: '',
    }
  },
  
  props: {
    list: {
    //   required: true,
      type: Array,
    },
  },
}
</script>


<style scoped>

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
</style>

