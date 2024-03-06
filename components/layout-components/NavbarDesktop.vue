<template>
  <div :class="['navbar', { scrolled: isScrolled }]" class="general-navbar">
    <div class="left-side-nav">
      <logoNavMain class="logo" @click="redirect(`/`)" />
      <nav class="nav-menu">
        <span
          v-for="item in menuItems"
          :key="item.text"
          ref="navItems"
          @click="handleClick(item)"
          class="nav-item flex-text"
          :class="{ 'has-arrow': item.hasArrow, 'nav-item-open': item.isOpen }"
        >
          <span class="nav-item"> {{ item.text }}</span>

          <down class="arrow m-right" v-if="!item.isOpen && item.hasArrow" />
          <up class="arrow m-right" v-if="item.isOpen && item.hasArrow" />
          <!-- Dropdown Menu -->
          <div v-if="item.isOpen && item.subItems" class="dropdown-menu">
            <span
              v-for="(subItem, index) in item.subItems"
              :key="index"
              class="dropdown-item"
              @click="handleSubItemClick(subItem)"
            >
              {{ subItem.text }}
            </span>
          </div>
        </span>
      </nav>
    </div>
    <div class="right-side-nav">
      <div class="flex-text">
        <span class="nav-item" @click="redirect(`http://www.sst.com/login`)">Log in</span>
        <arrowSide class="arrow" />
      </div>
      <div class="try-chatgpt flex-text" @click="redirect(`/try`)">
        Try ChatGPT
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
  props: ['isScrolled', 'menuItems'],
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
    handleClick(item) {
      if (item.hasArrow) {
        item.isOpen = !item.isOpen
      }
    },
    sc() {
      console.log('scrolled')
    },
    handleClick(clickedItem) {
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
  padding: 7px 23px 7px 13px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.try-chatgpt:hover {
  background-color: white;
  color: black;
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
}

.nav-item {
  position: relative; /* Needed for absolute positioning of the dropdown */
}

/* Optional: Style for the dropdown items */
.dropdown-item {
  cursor: pointer;
  padding: 5px 10px;
}

.dropdown-item:hover {
  text-decoration: underline;
}
</style>
