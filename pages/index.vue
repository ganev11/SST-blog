<template>
  <div class="main">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Test />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>adsf</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style scoped>
.main {
  padding-top: 80px;
  height: calc(100% - 80px);
}
</style>

<script>
export default {
  data() {
    return {
      isScrolled: false // Track if user has scrolled
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll) // Listen for scroll events
    }
  },
  beforeUnmount() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll) // Remove scroll event listener
    }
  },
  methods: {
    handleScroll() {
      console.log('window.scrollY :>> ', window.scrollY)
      this.isScrolled = window.scrollY > 0 // Update isScrolled based on scroll position
    }
  }
}
</script>
