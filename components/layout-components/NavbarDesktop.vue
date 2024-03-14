<template>
  <div
    :class="[{ navbar: isMainPage }, { scrolled: isScrolled }, { navbarBlack: !isMainPage }]"
    class="general-navbar"
  >
    <div class="left-side-nav">
      <a class="logo-anchor" href="/">
        <logoNavMain class="logo" />
      </a>
      <nav class="nav-menu">
        <span
          v-for="item in menuItems"
          :key="item.text"
          ref="navItems"
          @click="handleClick(item)"
          class="nav-item flex-text"
          :class="{ 'has-arrow': item.hasArrow, 'nav-item-open': item.isOpen }"
        >
          <span v-if="item.href">
            <a class="anchor relative-top-7" :href="`${item.href}`">
              {{ item.text }}
            </a>
          </span>
          <span v-else class="nav-item"> {{ item.text }}</span>

          <down class="arrow relative-top-5 m-right" v-if="!item.isOpen && item.hasArrow" />
          <up class="arrow relative-top-5 m-right" v-if="item.isOpen && item.hasArrow" />
          <!-- Dropdown Menu -->
          <div
            v-if="item.isOpen && item.subItems"
            class="dropdown-menu"
            :class="{ 'transparent-bg': isMainPage && !isScrolled }"
          >
            <span v-for="(subItem, index) in item.subItems" :key="index" class="dropdown-item">
              <!-- @click="handleSubItemClick(subItem)" -->
              <a class="anchor" :href="`${subItem.href}`">
                {{ subItem.text }}
              </a>
            </span>
          </div>
        </span>
      </nav>
    </div>
    <div class="right-side-nav">
      <div class="flex-text-mid">
        <span class="nav-item">
          <a class="anchor" :href="`/login`"> Log in </a>
        </span>
        <arrowSide class="arrow" />
      </div>
      <div class="try-chatgpt flex-text-mid">
        <span class="nav-item-try">
          <a class="anchor" :href="`/try`">Try ChatGPT</a>
        </span>
        <arrowSide class="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import arrowSide from '../assets/svg/arrowSide.vue'
import up from '../assets/svg/up.vue'
import down from '../assets/svg/down.vue'
import logoNavMain from '../assets/svg/logoNavMain.vue'

export default {
  props: ['isScrolled', 'menuItems', 'isMainPage'],
  data() {
    return {
      hasScrolled: false
    }
  },
  components: {
    up,
    down,
    logoNavMain,
    arrowSide
  },
  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.onScroll)
      document.addEventListener('click', this.handleDocumentClick)
    }
  },
  beforeUnmount() {
    // updated from beforeDestroy as it's the correct lifecycle hook name in Vue 3
    if (process.client) {
      window.removeEventListener('scroll', this.onScroll)
      document.removeEventListener('click', this.handleDocumentClick)
    }
  },
  methods: {
    onScroll() {
      this.hasScrolled = window.scrollY > 0
    },
    sc() {
      console.log('scrolled')
    },
    handleClick(clickedItem) {
      if (!clickedItem.subItem) {
        console.log('object :>> ')
      }
      if (clickedItem.hasArrow) {
        this.menuItems.forEach(item => {
          if (item === clickedItem) {
            item.isOpen = !item.isOpen
          } else {
            item.isOpen = false
          }
        })
      }
    },
    redirect(url) {
      window.location.href = url
    },
    handleSubItemClick(subItem) {
      // Example of navigation with Vue Router
      this.$router.push(subItem.href)
    },
    handleDocumentClick(e) {
      if (!this.$refs.navItems) return

      const isClickInsideNav = this.$refs.navItems.some(refItem => refItem.contains(e.target))

      if (!isClickInsideNav) {
        this.menuItems.forEach(item => {
          item.isOpen = false
        })
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  transition: background-color 0.3s;
  background-color: transparent;
  z-index: 10;
  color: white;
}
.navbarBlack {
  background-color: black;
}
.navbar.scrolled {
  background-color: black;
}

.nav-menu {
  margin-left: 100px;
  white-space: nowrap;
  display: flex;
  gap: 30px;
  /* font-size: 18px; */
}
.general-navbar {
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}
.left-side-nav {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
}
.m-right {
  margin-right: 10px;
}
.right-side-nav {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 80px;
  gap: 30px;
}
.try-chatgpt {
  padding: 3px 7px 5px 8px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  /* transition: background-color 0.3s; */
  font-size: 18px;
}
.try-chatgpt:hover {
  background-color: white;
}
.try-chatgpt:hover {
  color: black;
  text-decoration: none;
}

.nav-item-try .anchor:hover {
  color: black !important;
  text-decoration: none !important;
}
.logo {
  max-width: 120px;
  max-height: 55px;
}
.nav-item {
  cursor: pointer;
}
.flex {
  display: flex;
  align-items: center;
}
.flex-text {
  white-space: nowrap;
}
.flex-text-mid {
  white-space: nowrap;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.nav-item:hover {
  text-decoration: underline;
}
.nav-item-open {
  text-decoration: underline;
}
.arrow {
  margin-left: 5px;
  max-width: 15px;
  transition: transform 0.3s;
}

.arrow.up {
  transform: rotate(180deg);
}
/* ---------------------------- DROP DOWN MENU STYLES ---------------------------- */
.dropdown-menu {
  position: absolute;
  left: 0;
  background-color: black; /* Match the navbar's scrolled state */
  color: white;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px; /* Adjust as needed */
  transition: background-color 0.3s;
}
.dropdown-menu.transparent-bg {
  transition: background-color 0.3s;
  background-color: transparent;
}
.nav-item {
  position: relative; /* Needed for absolute positioning of the dropdown */
}

/* Optional: Style for the dropdown items */
.dropdown-item {
  cursor: pointer;
  padding: 5px 10px;
}
.relative-top-5 {
  position: relative;
  top: 5px;
}
.relative-top-7 {
  position: relative;
  top: 7px;
}
.dropdown-item:hover {
  text-decoration: underline;
}
</style>
