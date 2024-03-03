<template>
  <div :class="['navbar', { scrolled: isScrolled }]" class="general-navbar">
    <div class="left-side-nav">
      <logoNavMain class="logo" />
    </div>
    <div class="right-side-nav font-size-mobile" @click="toggleMobileMenu">
      {{ mobileMenuOpen ? 'Close' : 'Menu' }}
    </div>
    <transition name="fade">
      <div class="mobile-nav-menu" v-if="mobileMenuOpen">
        <div class="line"></div>
        <span v-for="item in menuItems" :key="`mobile-${item.text}`" class="mobile-nav-item">
          <div @click="toggleSubItems(item)" class="flex-text flex-between">
            <span class="nav-item">{{ item.text }}</span>
            <plus class="arrow" v-if="!item.isOpen && item.hasArrow" />
            <minus class="arrow" v-if="item.isOpen && item.hasArrow" />
            <right class="arrow" v-if="!item.hasArrow" />
          </div>
          <div v-if="item.isOpen" class="sub-items">
            <span v-for="subItem in item.subItems" :key="subItem.text">
              {{ subItem.text }}
            </span>
          </div>
          <div class="line"></div>
        </span>

        <span class="mobile-nav-item" @click="redirect(`http://www.sst.com/login`)">
          <div class="flex-text flex-between">
            <span class="nav-item">Log in</span>
            <arrowSide class="arrow" />
          </div>
          <div class="line"></div>
        </span>
        <span class="mobile-nav-item" @click="redirect(`/try`)">
          <div class="flex-text flex-between">
            <span class="nav-item">Try ChatGPT</span>
            <arrowSide class="arrow" />
          </div>
          <div class="line"></div>
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import arrowSide from '../assets/svg/arrowSide.vue'
import up from '../assets/svg/up.vue'
import down from '../assets/svg/down.vue'
import logoNavMain from '../assets/svg/logoNavMain.vue'
import plus from '../assets/svg/plus.vue'
import minus from '../assets/svg/minus.vue'
import right from '../assets/svg/right.vue'

export default {
  props: ['isScrolled', 'menuItems'],
  data() {
    return {
      hasScrolled: false,
      mobileMenuOpen: false // Controls the visibility of the mobile menu
    }
  },
  methods: {
    toggleSubItems(clickedItem) {
      this.menuItems.forEach(item => {
        if (item === clickedItem) {
          item.isOpen = !item.isOpen
        } else {
          item.isOpen = false // Ensure only one dropdown can be open at a time
        }
      })
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    redirect(url) {
      window.location.href = url
    },
    handleSubItemClick(subItem) {
      // Example of navigation with Vue Router
      this.$router.push(subItem.href)
    },
    handleMobileItemClick(item) {
      // Implement navigation or other logic for mobile menu item click
      if (item.hasArrow) {
        // Toggle sub-items if any, or navigate
        item.isOpen = !item.isOpen // Example toggle, adjust based on your needs
      } else {
        // Example navigation
        this.$router.push(item.href)
        this.mobileMenuOpen = false // Close menu after selection
      }
    }
  },
  components: {
    up,
    down,
    plus,
    minus,
    right,
    logoNavMain,
    arrowSide
  },
  mounted() {
    if (process.client) {
      //   window.addEventListener('scroll', this.onScroll)
      document.addEventListener('click', this.handleDocumentClick)
    }
  },
  beforeUnmount() {
    // updated from beforeDestroy as it's the correct lifecycle hook name in Vue 3
    if (process.client) {
      //   window.removeEventListener('scroll', this.onScroll)
      document.removeEventListener('click', this.handleDocumentClick)
    }
  }
}
</script>

<style>
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
  padding: 0 40px;
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
.sub-items {
  padding: 20px 0; /* Indent sub-items */
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
}
.logo {
  max-width: 120px;
  max-height: 55px;
}
.font-size-mobile {
  font-size: 16px !important;
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
/* ---------------------------- MOBILE STYLES ---------------------------- */
.general-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: black; /* Or any color based on your design */
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
}

.left-side-nav .logo {
  max-width: 120px;
  max-height: 55px;
}

.right-side-nav {
  cursor: pointer;
  font-size: 20px;
}

.mobile-nav-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 100%; /* Position right below the navbar */
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: black; /* Match the navbar color */
  color: white;
  padding: 20px 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 20;
  position: absolute;
  min-width: 300px;
  min-height: 300px;
}
.flex-between {
  max-width: 270px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 430px) {
  .mobile-nav-menu {
    width: calc(100% - 30px);
  }
  .flex-between {
    min-width: calc(100% - 30px);
  }
}
.mobile-nav-item {
  display: flex;
  flex-direction: column;
  padding: 2px 0;
  border-bottom: 1px solid rgb(0, 0, 0); /* Optional for styling */
  cursor: pointer;
}
.line {
  border-bottom: 1px solid white;
  margin: 10px 0 5px 0;
  width: calc(100% - 30px);
}
/* Simple transition for the mobile menu dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
