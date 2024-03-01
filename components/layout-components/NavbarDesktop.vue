<template>
  <div :class="['navbar', { scrolled: isScrolled }]" class="general-navbar">
    <div class="logo">
      <!-- Your logo here -->
      <button @click="sc">sc</button>
    </div>
    <nav class="nav-menu">
      <!-- Navigation links go here -->
      <a
        v-for="item in menuItems"
        :key="item.text"
        :href="item.href"
        @click="handleClick(item)"
        class="nav-item"
        :class="{ 'has-arrow': item.hasArrow }"
      >
        {{ item.text }}
        {{ isScrolled }}
        <span v-if="item.hasArrow" class="arrow" :class="{ up: item.isOpen }"></span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['isScrolled'],
  data() {
    return {
      hasScrolled: false,
      menuItems: [
        { text: 'Home', href: '/', hasArrow: false, isOpen: false }
        // Add more items with hasArrow set to true if needed
      ]
    }
  },

  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  beforeUnmount() {
    // updated from beforeDestroy as it's the correct lifecycle hook name in Vue 3
    if (process.client) {
      window.removeEventListener('scroll', this.onScroll)
    }
  },
  methods: {}
}
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  transition: background-color 0.3s;
  background-color: transparent;
  z-index: 10;
}

.navbar.scrolled {
  background-color: black;
}
/*
.logo {
  Style your logo here 
}

 .nav-menu {
   Style your nav menu here
 } */
.general-navbar {
  min-height: 80px;
}
.nav-item {
  /* Style your nav items here */
  cursor: pointer;
}

.nav-item:hover {
  text-decoration: underline;
}

.arrow {
  /* Style your arrow here */
  transition: transform 0.3s;
}

.arrow.up {
  transform: rotate(180deg);
}
</style>
