<template>
  <div class="large-screen-background">
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section logo-section">
          <logoNavMain class="logo" />
        </div>
        <div class="flex-columns">
          <div class="footer-section">
            <h4>Research</h4>
            <ul>
              <li><a class="anchor" :href="`${baseUrl}research/overview`">Overview</a></li>
              <li><a class="anchor" :href="`${baseUrl}research/index`">Index</a></li>
              <li><a class="anchor" :href="`${baseUrl}research/gpt-4`">GPT-4</a></li>
              <li><a class="anchor" :href="`${baseUrl}research/dall-e-3`">DALL-E 3</a></li>
              <li><a class="anchor" :href="`${baseUrl}research/sora`">Sora</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>API</h4>
            <ul>
              <li><a class="anchor" :href="`${baseUrl}api/overview`">Overview</a></li>
              <li><a class="anchor" :href="`${baseUrl}api/pricing`">Pricing</a></li>
              <li><a class="anchor" :href="`${baseUrl}api/docs`">Docs</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>ChatGPT</h4>
            <ul>
              <li><a class="anchor" :href="`${baseUrl}chatgpt/overview`">Overview</a></li>
              <li><a class="anchor" :href="`${baseUrl}chatgpt/team`">Team</a></li>
              <li><a class="anchor" :href="`${baseUrl}chatgpt/enterprise`">Enterprise</a></li>
              <li><a class="anchor" :href="`${baseUrl}chatgpt/pricing`">Pricing</a></li>
              <li><a class="anchor" :href="`${baseUrl}chatgpt/try-chatgpt`">Try ChatGPT</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a class="anchor" :href="`${baseUrl}company/about`">About</a></li>
              <li><a class="anchor" :href="`${baseUrl}company/blog`">Blog</a></li>
              <li><a class="anchor" :href="`${baseUrl}company/careers`">Careers</a></li>
              <li><a class="anchor" :href="`${baseUrl}company/charter`">Charter</a></li>
              <li><a class="anchor" :href="`${baseUrl}company/security`">Security</a></li>
              <li>
                <a class="anchor" :href="`${baseUrl}company/customer-stories`">Customer stories</a>
              </li>
              <li><a class="anchor" :href="`${baseUrl}company/safety`">Safety</a></li>
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
          <b>OpenAI © 2015–2024</b>
          <a class="anchor link-copyright" :href="`${baseUrl}terms-policies`">Terms & policies</a>
          <a class="anchor link-copyright" :href="`${baseUrl}privacy-policy`">Privacy policy</a>
          <a class="anchor link-copyright" :href="`${baseUrl}brand-guidelines`">Brand guidelines</a>
        </div>
        <div class="social-links">
          <div class="flex-soc">
            <a class="anchor link-social" :href="`${baseUrl}twitter`">Twitter</a>
            <a class="anchor link-social" :href="`${baseUrl}youtube`">YouTube</a>
            <a class="anchor link-social" :href="`${baseUrl}github`">GitHub</a>
            <a class="anchor link-social" :href="`${baseUrl}soundcloud`">SoundCloud</a>
            <a class="anchor link-social" :href="`${baseUrl}linkedin`">LinkedIn</a>
          </div>
          <a class="anchor link-social" href="#" @click.prevent="scrollToTop">Back to top ↑</a>
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
  </div>
</template>
<script>
import logoNavMain from '../assets/svg/logoNavMain.vue'

export default {
  data() {
    return {
      baseUrl: 'https://sst-blog.vercel.app/'
    }
  },
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
  padding: 2rem calc((100vw - 1560px) / 2);
}
li {
  margin-top: 7px !important;
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
  font-size: 1.1rem;
}
.link-copyright {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
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
.copyright b {
  margin-bottom: 10px;
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
  .flex-columns {
    width: 100%;
  }
}
@media screen and (max-width: 1600px) {
  .footer {
    color: #fff;
    background-color: #000; /* Assuming a dark theme from the screenshot */
    font-family: Arial, sans-serif;
    padding: 2rem;
  }
}

.flex-ft-bt-social {
  display: flex;
  flex-direction: row;
}
.large-screen-background {
  position: relative;
  min-width: 100%;
}
</style>
