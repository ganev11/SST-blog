<template>
  <!-- <div style="background-color: black"> -->
  <div :style="`background-color: ${bckgrndColor}`">
    <div v-if="isMobile">
      <navbar-mobile :menuItems="menuItems" :isScrolled="isScrolled" :isMainPage="isMainPage" />
    </div>
    <div v-else>
      <navbar-desktop :menuItems="menuItems" :isScrolled="isScrolled" :isMainPage="isMainPage" />
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
      isScrolled: false,
      menuItems: [
        {
          text: 'Sports',
          href: false,
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'Football Pro', href: '/blog/advanced-in-play-football-analytics-master-the-game-with-pro-dashboard-filters' },
          ]
        },
        {
          text: 'ChatSST',
          href: false,
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'For Players', href: '/blog/introducing-chatsst-the-future-of-sports-predictions' },
            { text: 'For Bookmakers', href: '/blog/maximize-engagement-growth-ai-driven-chatbot-for-igaming-operators' },
          ]
        },
        { text: 'Blog', href: '/blog', hasArrow: false, isOpen: false },
        {
          text: 'Company',
          href: false,
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'About', href: '/blog/pioneering-the-next-era-of-igaming-with-ai-at-sstrader-com' },
            { text: 'Contact Us', href: '/contact' },
          ]
        }
      ]
    }
  },
  computed: {
    isMobile() {
      return this.screenWidth < 1200
    },
    bckgrndColor() {
      return this.isMainPage ? 'black' : 'white'
    },
    isMainPage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
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
    xxx() {
      console.log('bckgrndColor', this.bckgrndColor)
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0 // Update isScrolled based on scroll position
    }
  }
}
</script>

<style scoped></style>
