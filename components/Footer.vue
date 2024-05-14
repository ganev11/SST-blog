<template>
  <div class="large-screen-background">
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section logo-section">
          <logoNavMain class="logo" />
        </div>
        <div class="flex-columns">
          <div class="footer-section">
            <h4>Sports</h4>
            <ul>
              <li><a class="anchor" href="/blog/advanced-in-play-football-analytics-master-the-game-with-pro-dashboard-filters">Football Pro</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>ChatSST</h4>
            <ul>
              <li><a class="anchor" href="/blog/introducing-chatsst-the-future-of-sports-predictions">For Players</a></li>
              <li><a class="anchor" href="/blog/maximize-engagement-growth-ai-driven-chatbot-for-igaming-operators">For Bookmakers</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a class="anchor" href="/research/overview">Solutions</a></li>
              <li><a class="anchor" href="/blog/introducing-supersportsai-nexus-the-ultimate-telegram-bot-for-live-sports-predict">SuperSportsAI Nexus</a></li>
              <li><a class="anchor" href="/blog/sstraderassistant-ai-special-market-innovation-for-traders">SSTraderAssistant AI</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a class="anchor" href="/blog/pioneering-the-next-era-of-igaming-with-ai-at-sstrader-com">About</a></li>
              <li><a class="anchor" href="/blog/pioneering-the-next-era-of-igaming-with-ai-at-sstrader-com">Our Mission</a></li>
              <li><a class="anchor" href="/blog">Blog</a></li>
              <li><a class="anchor" href="/contact">Contact Us</a></li>
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
          <b>SSTrader © 2018-2024</b>
          <a class="anchor link-copyright" href="/terms-policies">Terms & policies</a>
          <a class="anchor link-copyright" href="/privacy-policy">Privacy policy</a>
        </div>
        <div class="social-links">
          <div class="flex-soc">
            <a class="anchor link-social" href="https://twitter.com/sstrader777">Twitter</a>
            <a class="anchor link-social" href="https://www.facebook.com/sstrader.official">Facebook</a>
            <a class="anchor link-social" href="https://www.youtube.com/@sstrader1023">YouTube</a>
            <a class="anchor link-social" href="https://www.linkedin.com/company/sstrader/">LinkedIn</a>
            <a class="anchor link-social" href="https://t.me/SSTraderAI">Telegram</a>
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
    return {}
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
