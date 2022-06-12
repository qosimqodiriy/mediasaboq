<template>
  <div class="cardo">
    <nuxt-link class="link" to="/edu-inner">
      <img src="@/assets/img/card-1.jpg" class="pic" alt="" />
      <div class="content">
        <p class="txt">{{ title }}</p>
        <p class="arrow">
          <i class="bx bx-up-arrow-alt"></i>
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'EduMainCard',

  props: ['title'],

  data() {
    return {
      description: 'A blog post about some stuff',
    }
  },
  
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description },
      ],
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>


<style scoped>
.cardo {
  border: 2px solid black;
  position: relative;
}
.pic {
  height: 220px;
  object-fit: cover;
  width: 100%;
}
.content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  background: rgba(255, 255, 255, 0.75);
  border: 2px solid #ffffff;
  backdrop-filter: blur(15px);
  padding: 20px;
}
.link {
  display: flex;
}
.txt {
  color: black;
  font-weight: 600;
  font-size: var(--18px);
}
.arrow {
  color: black;
  font-size: 28px;
  transform: rotate(45deg);
  transition: 0.3s;
}
.cardo:hover .arrow {
  transform: translateY(-5px) translateX(5px) rotate(45deg);
}
</style>