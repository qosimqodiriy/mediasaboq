<template>
  <div class="wrap">
    <div class="container">
      <div class="brand">
        <nuxt-link to="/">
          <img class="cursor-pointer" src="@/assets/img/brand.svg" alt="mediasaboq" />
        </nuxt-link>
      </div>

      <div class="show" ref="menu" :class="{ 'show-nav': isMenuOpen }">
        <div class="links">
          <nuxt-link class="link" @click.native="scrollToTop" to="/media-blog"> Media blog</nuxt-link>
          <nuxt-link class="link" @click.native="scrollToTop" to="/talim"> Ta’lim</nuxt-link>
          <nuxt-link class="link" @click.native="scrollToTop" to="/kutubxona"> Kutubxona</nuxt-link>
          <nuxt-link class="link" @click.native="scrollToTop" to="/media-loyihalar"> Media loyihalar</nuxt-link>
          <nuxt-link class="link" @click.native="scrollToTop" to="/online-darslar"> Onlayn darslar</nuxt-link>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <nuxt-link class="search" to="/qidiruv" @click.native="scrollToTop">
          <img src="@/assets/img/search.svg" alt="search" />
        </nuxt-link>
        
        <div class="burger" :class="{ 'toggle-x': isMenuOpen }" @click="isMenuOpen = !isMenuOpen">
          <div class="stick"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',

  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped>
.wrap {
  background: var(--black);
  padding: 22px 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99999999999999;
}
.input {
  background: transparent;
  border: none;
  color: white;
  transition: 0.3s;
  position: absolute;
  left: -150px;
  width: 150px;
}
.input:focus {
  outline: none;
  box-shadow: none;
  border-bottom: 1px solid white;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
.links,
.brand {
  display: flex;
  align-items: center;
}

.link {
  color: white;
  margin-right: 40px;
  font-size: var(--18px);
  position: relative;
}
.link:last-child {
  margin-right: 0;
}
.link:hover {
  text-decoration: none;
}
.label {
  border: none !important;
  cursor: pointer;
}
.search {
  display: flex;
  align-items: center;
  position: relative;
}
.nuxt-link-exact-active {
  color: var(--orange);
}
.stick {
  width: 25px;
  height: 2px;
  background: white;
  margin: 8px 0;
  position: relative;
  transition: 0.3s;
}
.stick::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 0;
  width: 25px;
  height: 2px;
  background: white;
  transition: 0.3s;
}
.stick::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  width: 25px;
  height: 2px;
  background: white;
}

.burger {
  display: none;
  z-index: 999999999999999;
}

@media screen and (max-width: 1024px) {
  .show {
    /* opacity: 0;
    visibility: hidden; */
    display: none !important;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .show-nav {
    display: flex !important;
    justify-content: center;
    background: rgba(0, 0, 0, 0.808);
    z-index: 999;
  }
  .links {
    flex-direction: column;
    gap: 1rem;
  }
  .link {
    margin-right: 0;
  }
  .brand img {
    width: 100px;
  }
  .burger {
    display: block;
  }
  .toggle-x .stick {
    transform: rotate(45deg);
  }
  .toggle-x .stick::after {
    transform: rotate(90deg);
    top: 0;
  }
  .toggle-x .stick::before {
    display: none;
  }
}
</style>
