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
          text: 'Research',
          href: false,
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'Overview', href: '/research/overview' },
            { text: 'Index', href: '/sub2' },
            { text: 'GPT-4', href: '/sub4' },
            { text: 'DALL·E', href: '/sub5' },
            { text: 'Sora', href: '/sub6' }
          ]
        },
        {
          text: 'API',
          href: false,
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'Overview', href: '/sub1' },
            { text: 'Pricing', href: '/sub2' },
            { text: 'Docs', href: '/sub3' }
          ]
        },
        {
          text: 'Chat GPT',
          href: false,
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'Overview', href: '/sub1' },
            { text: 'Team', href: '/sub2' },
            { text: 'Enterprise', href: '/sub3' },
            { text: 'Pricing', href: '/sub4' },
            { text: 'Try ChatGPT', href: '/sub5' }
          ]
        },
        { text: 'Safety', href: '/safety', hasArrow: false, isOpen: false },
        {
          text: 'Company',
          href: false,
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'About', href: '/sub1' },
            { text: 'Blog', href: '/blog' },
            { text: 'Careers', href: '/sub3' },
            { text: 'Residency', href: '/sub4' },
            { text: 'Charter', href: '/sub5' },
            { text: 'Security', href: '/sub6' },
            { text: 'Customer stories', href: '/sub7' }
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
