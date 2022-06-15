<template>
  <div class="wrap space-y-10">
    <h3 class="title">O'xshash bloglar</h3>
    <BlogCard />
    <BlogCard />
    <BlogCard />
  </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'
export default {
  name: 'SimilarCard',

  components: {BlogCard}
}
</script>

<style scoped>
.wrap {
  background-color: rgb(33, 221, 242);
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
</style>
