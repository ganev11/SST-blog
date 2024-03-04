<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section logo-section">
        <logoNavMain class="logo" />
      </div>
      <div class="flex-columns">
        <div class="footer-section">
          <h4>Research</h4>
          <ul>
            <li>Overview</li>
            <li>Index</li>
            <li>GPT-4</li>
            <li>DALL-E 3</li>
            <li>Sora</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>API</h4>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Docs</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>ChatGPT</h4>
          <ul>
            <li>Overview</li>
            <li>Team</li>
            <li>Enterprise</li>
            <li>Pricing</li>
            <li>Try ChatGPT</li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Charter</li>
            <li>Security</li>
            <li>Customer stories</li>
            <li>Safety</li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="flex-line" />
    <div class="footer-bottom">
      <div class="flex-ft-bt-social">
        <div class="copyright">
          OpenAI © 2015–2024
          <br />
          <span>Terms & policies</span>
          <span>Privacy policy</span>
          <span>Brand guidelines</span>
        </div>
        <div class="social-links">
          <div class="flex-soc">
            <p class="link-social" @click="redirect('ahoj')">Twitter</p>
            <p class="link-social" @click="redirect('#')">YouTube</p>
            <p class="link-social" @click="redirect('#')">GitHub</p>
            <p class="link-social" @click="redirect('#')">SoundCloud</p>
            <p class="link-social" @click="redirect('#')">LinkedIn</p>
          </div>
          <a href="#" @click.prevent="scrollToTop">Back to top ↑</a>
        </div>
      </div>
      <div class="back-to-top">
        <!-- <a href="#">Back to top ↑</a> -->
      </div>
    </div>
  </footer>
</template>
<script>
import logoNavMain from '../assets/svg/logoNavMain.vue'

export default {
  components: {
    logoNavMain
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    redirect(url) {
      window.location.href = url
    }
  }
}
</script>
<style scoped>
.footer {
  color: #fff;
  background-color: #000; /* Assuming a dark theme from the screenshot */
  font-family: Arial, sans-serif;
  padding: 2rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 300px;
}

.footer-section {
  margin-right: 2rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
  cursor: pointer;
}
.footer-section ul li:hover {
  text-decoration: underline;
}
.link-social {
  cursor: pointer;
}
.link-social:hover {
  text-decoration: underline;
}
.footer-section ul li:last-child {
  margin-bottom: 0;
}

.flex-line {
  border: none;
  height: 1px;
  background-color: #333; /* Lighter line for contrast */
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom .copyright,
.footer-bottom .social-links {
  display: flex;
  /* align-items: center; */
  flex-direction: column;
}

.footer-bottom .back-to-top a {
  font-size: 0.875rem;
}

.social-links a {
  color: white;
}

.flex-soc {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.footer-bottom .social-links {
  flex-wrap: wrap;
  color: white;
  flex-direction: column;
  width: 67%;
}
@media screen and (max-width: 1220px) {
  .flex-ft-bt-social {
    gap: 20px !important;
  }
  .footer-content {
    gap: 70px;
  }
}
.flex-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
}
.flex-ft-bt-social {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 200px;
}
</style>
