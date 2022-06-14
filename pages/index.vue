<template>
  <div>
    <MainHome />
    <MediaBlog />
    <MainEdu />
  </div>
</template>

<script>
import MainHome from '../components/MainPage/MainHome.vue'
import MediaBlog from '../components/MainPage/MediaBlog.vue'
import MainEdu from '../components/MainPage/MainEdu.vue'

export default {
  name: 'IndexPage',

  components: { MainHome, MediaBlog, MainEdu },

}
</script>
