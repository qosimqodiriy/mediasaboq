<template>
  <div class="item">
    <p class="time">
      <img src="@/assets/icons/time.png" alt="" /> 6 soat avval
    </p>
    <p class="txt">
      Shavkat Mirziyoyev maktab bitiruvchilarini So‘nggi qo‘ng‘iroq bayrami
    </p>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  
  // props: {
  //   item: {
  //     required: true,
  //     type: Object,
  //   },
  // },
}
</script>

<style scoped>
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

