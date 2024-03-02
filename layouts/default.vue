<template>
  <div>
    <div v-if="isMobile">
      <navbar-mobile :menuItems="menuItems" />
    </div>
    <div v-else>
      <navbar-desktop :menuItems="menuItems" :isScrolled="isScrolled" />
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
          href: '/',
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'Sub-item 1', href: '/sub1' },
            { text: 'Sub-item 2', href: '/sub2' }
          ]
        },
        {
          text: 'API',
          href: '/',
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'Sub-item 1', href: '/sub1' },
            { text: 'Sub-item 2', href: '/sub2' }
          ]
        },
        {
          text: 'Chat GPT',
          href: '/',
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'Sub-item 1', href: '/sub1' },
            { text: 'Sub-item 2', href: '/sub2' }
          ]
        },
        { text: 'Safety', href: '/safety', hasArrow: false, isOpen: false },
        {
          text: 'Company',
          href: '/',
          hasArrow: true,
          isOpen: false,
          subItems: [
            { text: 'Sub-item 1', href: '/sub1' },
            { text: 'Sub-item 2', href: '/sub2' }
          ]
        }
      ]
    }
  },
  computed: {
    isMobile() {
      return this.screenWidth < 1200
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
