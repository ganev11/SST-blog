<template>
  <div>
    <div v-if="isMobile">
      <navbar-mobile />
    </div>
    <div v-else>
      <navbar-desktop :isScrolled="isScrolled" />
    </div>
    <slot />
  </div>
</template>

<script>
import NavbarMobile from '@/components/layout-components/NavbarMobile.vue'
import NavbarDesktop from '@/components/layout-components/NavbarDesktop.vue'

export default {
  components: {
    NavbarMobile,
    NavbarDesktop
  },
  data() {
    return {
      screenWidth: 0,
      isScrolled: false // Track if user has scrolled
    }
  },
  computed: {
    isMobile() {
      return this.screenWidth < 1000
    }
  },
  mounted() {
    if (process.client) {
      this.updateScreenWidth()
      window.addEventListener('resize', this.updateScreenWidth)
      window.addEventListener('scroll', this.handleScroll) // Listen for scroll events
    }
  },
  beforeUnmount() {
    if (process.client) {
      window.removeEventListener('resize', this.updateScreenWidth)
      window.removeEventListener('scroll', this.handleScroll) // Remove scroll event listener
    }
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth
    },
    handleScroll() {
      console.log('window.scrollY :>> ', window.scrollY)
      this.isScrolled = window.scrollY > 0 // Update isScrolled based on scroll position
    }
  }
}
</script>
