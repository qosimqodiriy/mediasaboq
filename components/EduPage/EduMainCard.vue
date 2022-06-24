<template>
  <div class="cardo">
    <img :src="`https://mediasaboq.uz/${item.image}`" class="pic" :alt="item.name" />
    <div class="content">
      <p class="txt">{{ item.name }}</p>
      <p class="arrow">
        <img src="../../assets/icons/arrowUp.png" width="27" height="27" alt="arrowDown">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EduMainCard',

  props: {
    item: {
      required: true,
      type: Object,
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
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: top center;
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
  /* transform: rotate(45deg); */
  transition: 0.3s;
}
.cardo:hover .arrow {
  transform: translateY(-5px) translateX(5px);
}
</style>