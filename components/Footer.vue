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
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr class="flex-line" />
    <div class="flex-ft-bt-social">
      <div class="copyright">
        <b> OpenAI © 2015–2024 </b>
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
        <p class="link-social" href="#" @click.prevent="scrollToTop">Back to top ↑</p>
      </div>
    </div>
    <div>
      <!-- <a href="#">Back to top ↑</a> -->
    </div>
    <br />
    <br />
    <br />
    <br />
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
}

.footer-section {
  margin-right: 2rem;
}

.footer-section h4 {
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.footer-section ul {
  margin-top: 5px;
  list-style: none;
  font-size: 1.1rem;
  padding: 0;
}

.footer-section ul li {
  cursor: pointer;
}
.footer-section ul li:hover {
  text-decoration: underline;
}
.link-social {
  margin: 0 15px 30px 0;
  cursor: pointer;
  font-size: 1.1rem;
}
.link-social:hover {
  text-decoration: underline;
}
.footer-section ul li:last-child {
  margin-bottom: 0;
}

.flex-link {
  color: white; /* Link color */
  font-size: 1.2em;
  text-decoration: none;
  margin-top: 5px; /* Space between title and link */
  text-decoration: underline;
}

.flex-line {
  border: none;
  height: 1px;
  background-color: white; /* Line color */
  width: auto; /* Line full width */
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
  flex-direction: column;
}
.logo-section {
  width: 35%;
  margin: 0;
}
.copyright {
  display: flex;
  flex-direction: column;
  width: 35%;
}
.social-link {
  width: 65%;
}
.flex-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 65%;
}
.back-to-top {
  font-size: 1.1rem;
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
    flex-direction: column !important;
    gap: 20px;
  }
  .footer-content {
    flex-direction: column;
  }
}

.flex-ft-bt-social {
  display: flex;
  flex-direction: row;
}
</style>
