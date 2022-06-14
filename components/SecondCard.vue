<template>
  <div class="whole w-full">
    <div>
      <div  class="imgBox">
        <div class="imgDown"></div>
        <img src="../assets/img/book2.png" alt="" class="pic" />
      </div>
    </div>
    <div>
      <!-- <div class="mid">
          <p class="name">Kategoriya nomi</p>
        </div> -->
      <div class="asap">
        <div class="bottom">
          <p class="title__lil">{{ item.description }}</p>
          <p class="txt">{{ item.bookAuthor }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondCard',
  
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
.whole {
  border: 2px solid var(--black);
  box-shadow: var(--shadow-sec);
  /* background-color: green; */
}
.asap {
  padding: 20px;
}
.imgBox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

@keyframes identifier {
  0% {
    opacity: 0.1;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.pic {
  height: 259px;
  width: 100%;
  object-fit: cover;
}
.time {
  font-size: var(--12px);
  opacity: 0.6;
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.txt {
  font-size: var(--12px);
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
