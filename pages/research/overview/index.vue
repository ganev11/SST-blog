<template>
  <Head>
    <Title>SSTrader: AI Infrastructure for Smarter Sports Betting </Title>
    <Meta name="description":content="'SSTrader helps sportsbooks and betting brands attract and retain players through AI-driven predictions, real-time insights, and personalized betting experiences.'" />
    <Meta name="og:image" :content="'https://www1.sstrader.com/_nuxt/Office%20empty%202.Cz0wayrX.png'" />
  </Head>
  <div class="main">
    <!-- LINKS START -->
    <div class="black"></div>
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
    <!-- TITLE SECTION START -->
    <div class="container">
      <div class="text">
        <h1> Empowering Sportsbooks with AI-Driven Insights </h1>
      </div>
      <div class="text">
        <p>
        SSTrader provides advanced AI tools that help sportsbooks and betting platforms
        deliver highly personalized and engaging betting experiences, boosting player retention and profitability.
        </p>
        <div class="flex-btns cta">
          <div class="view-research-index flex-text">
            <a href="/contact"> Contact sales </a>
          </div>

          <span class="underline">
            <a href="/"> Learn about us </a>
          </span>
        </div>
      </div>
    </div>
    <div class="img-wrap">
      <img src="~/assets/img/Office SST1.png" alt="Office" class="profile-image" loading="lazy" /> 
    </div>
    <!-- TITLE SECTION END -->
    <hr class="flex-line" />
    <div class="text-container">
      <p class="quote">
       ”Our mission is simple - make sports betting smarter and more personalized through accessible AI technology.
        It’s not just business, it’s our passion.” 
       </p>
      <div class="font-size-20">
        <span><b> SSTrader Team </b> </span>
        <br />
      
      </div>
    </div>
    <br />
    <br />
    <!-- FOCUS START -->
    <hr class="flex-line" />
    <div class="container">
      <div class="text">
        <div class="subtitle">Problems We Solve for Sportsbooks </div>
      </div>
       <div class="text">
        <ul>
          <li>Limited player engagement due to generic betting content.</li>
          <li>Difficulty retaining users without personalized experiences.</li>
          <li>Struggling to differentiate from competitors in a crowded market.</li>
        </ul>
      </div>
    </div>
    <!-- FOCUS END -->
    <!-- Text START -->
    <hr class="flex-line" />
    <div class="container">
      <div class="text">
        <h2>For Super Sports Traders </h2>
      </div>
      <div class="text">
        <span>
        Leverage detailed analytics and visualizations to gain deeper insights into every game, 
        enabling smarter trading decisions.
        </span>
      </div>
    </div>
    <ListOfArticlesThreeMax :bckgColor="'white'" :color="'#000'" :redirectUrl="'blog'" />
    <!-- Text END -->
    <!-- Image START -->
    <hr class="flex-line" />
    <div class="container">
      <div class="text">
        <h2>For Tipsters & Content Creators </h2>
      </div>
      <div class="text">
        <span>
         Enhance your audience’s experience with automated live predictions and advanced metrics, 
         keeping them engaged 24/7
        
    
        </span>
      </div>
    </div>
    <ListOfArticlesThreeMax
      :topicIDsArray="['S9HLumu1TQKcty1NCnnZ9g']"
      :bckgColor="'white'"
      :color="'#000'"
      :redirectUrl="'blog'"
    />
    <!-- Image END -->
    <!-- Audio START -->
    <hr class="flex-line" />
    <div class="container">
      <div class="text">
        <h2>For Super Bookmakers</h2>
      </div>
      <div class="text">
        <span>
         Transform your sportsbook into a leading brand with personalized betting content that boosts player loyalty and drives revenue growth.
        </span>
      </div>
    </div>
    <ListOfArticlesThreeMax
      :topicIDsArray="['Y88ajMn7TwyihvOb2Uxstg']"
      :bckgColor="'white'"
      :color="'#000'"
      :redirectUrl="'blog'"
    />
    <br />
    <img src="~/assets/img/Office empty 2.png" alt="Research" class="profile-image"loading="lazy" />
    <br />
    <br />
    <br />
    <br />
    <!-- Audio END -->
    <!-- Highlights START -->
    <hr class="flex-line" />
    <div class="container">
      <div class="text">
        <div class="subtitle">What's Next? </div>
      </div>
      <div class="text">
        <p>We're constantly evolving. New sports, deeper insights, and even smarter AI tools are coming soon.</p>
        <span class="underline">
          <a href="/"> Discover Upcoming Products </a>
        </span>
      </div>
    </div>
    <!-- Highlights END -->
    <!-- :topicIDsArray="['F40oLv3XSbaxpddA2i6SUQ']" -->
    <!-- <hr class="flex-line" /> -->
  </div>
  <Footer />
</template>

<script>
// "topics": [
//     {
//         "id": "S9HLumu1TQKcty1NCnnZ9g",
//         "topic": "Product"
//     },
//     {
//         "id": "F40oLv3XSbaxpddA2i6SUQ",
//         "topic": "Announcements"
//     },
//     {
//         "id": "Y88ajMn7TwyihvOb2Uxstg",
//         "topic": "Research"
//     },
//     {
//         "id": "XkzJQr4pR4OZpcwqzgDDbA",
//         "topic": "AI"
//     }
// ],

import play from '../../assets/svg/play.vue'
import pause from '../../assets/svg/pause.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    play,
    pause,
    Footer
  },
  data() {
    return {
      screenWidth: 0,
      isVideoPlaying: true // Assume video is playing initially because of the autoplay attribute
    }
  },
  computed: {
    mobile() {
      return this.screenWidth <= 550
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('resize', this.updateScreenWidth)
    }
    this.updateScreenWidth()
  },
  beforeUnmount() {
    if (process.client) {
      window.removeEventListener('resize', this.updateScreenWidth)
    }
  },
  methods: {
    redirect(url) {
      this.$router.push(url)
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth
    },
    toggleVideoPlayback() {
      const videoElement = this.$refs.videoElement
      if (videoElement) {
        if (this.isVideoPlaying) {
          videoElement.pause()
        } else {
          videoElement.play()
        }
        this.isVideoPlaying = !this.isVideoPlaying
      }
    },
    handleVideoEnd() {
      this.isVideoPlaying = false
    }
  }
}
</script>

<style scoped>
.profile-image {
  margin-top: 50px;
  height: auto; /* Maintains the aspect ratio of the image */
  object-fit: cover; /* Ensures the image covers the area without stretching */
}
.img-wrap {
  padding: 20px;
}
.container {
  padding: 0 20px 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.flex-btns {
  display: flex;
  gap: 20px;
  align-items: center;
}
.text {
  flex: 1; /* Adjust as needed */
  padding: 0 40px 10px 0px;
  /* background-color: red; */
  min-width: 300px;
}
.text p {
  margin-top: 0;
  font-size: 24px;
}
.text span {
  margin-top: 0;
  font-size: 18px;
}
.text-container {
  flex-basis: 50%; /* Takes up half the width of the container */
  margin: 40px;
  padding-right: 50px; /* Adds some space between the text and the image */
}

.quote {
  font-family: Signifier, ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
  font-weight: 400;
  font-size: 2.8em; /* Adjust the size as needed */
  margin-bottom: 1em; /* Spacing between quote and author */
  color: rgb(0, 0, 0);
}
.view-research-index {
  padding: 7px 13px 7px 13px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  cursor: pointer;
}
.view-research-index:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}
.view-research-index:hover a {
  color: rgb(255, 255, 255);
}
.view-research-index a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.underline a {
  color: rgb(0, 0, 0);
}
.underline {
  text-decoration: underline;
  text-underline-offset: 0.2em !important;
  cursor: pointer;
}
.underline a:hover {
  color: #737373;
}
.flex-btns {
  display: flex;
  gap: 20px;
  align-items: center;
}
.text h1 {
  margin-top: 0;
  font-size: 50px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.02em;
  font-family: Soehne, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif;
}
.text h2 {
  margin-top: 0;
  font-size: 30px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.02em;
  font-family: Soehne, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif;
}
.image {
  /* background-color: blue; */
  flex: 1; /* Adjust as needed */
  padding: 10px;
  min-width: 300px;
}

.main {
  height: calc(100% - 80px);
  background-color: rgb(255, 255, 255);
}
/* .black {
  background-color: black;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 1;
} */
.main-title {
  font-size: 3rem;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif, ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.01em;
}
@media screen and (max-width: 943px) {
  .subtitle-text {
    width: 100% !important;
  }
  .blue {
    width: 0 !important;
  }
  .title {
    max-width: 100%;
    font-size: 40px !important;
  }
  .quote {
    font-size: 2em; /* Adjust the size as needed */
  }
}
.font-size-20 {
  font-size: 20px;
  font-weight: 400;
}
.video-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  color: white;
}

.title {
  max-width: 750px;
  font-size: 4rem;
  color: white;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon {
  max-width: 15px;
}
.learn-more {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.learn-more:hover {
  background-color: white;
  color: black;
}

button {
  background: none;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: white;
  color: black;
}
.flex-between-video {
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 75px;
}
/* LINK: */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; /* Align items to the start of the container */
  padding: 40px 20px;
  background-color: rgb(255, 255, 255); /* Your container background color */
  color: rgb(0, 0, 0); /* Text color */
  justify-content: space-between;
}
.flex-item h2 {
  max-width: 350px;
  font-weight: 600;
}
.flex-item {
  color: rgb(0, 0, 0); /* Link color */
  cursor: pointer;
}

.flex-link {
  color: rgb(0, 0, 0); /* Link color */
  font-size: 1.2em;
  text-decoration: none;
  margin-top: 5px; /* Space between title and link */
  text-decoration: underline;
}

.flex-line {
  border: none;
  height: 1px;
  background-color: rgb(0, 0, 0); /* Line color */
  width: auto; /* Line full width */
  margin: 20px; /* Space between link and line */
}
.subtitle {
  color: rgb(0, 0, 0);
  font-size: 2.5rem;
  padding: 0 20px 20px 0px;
  font-family: Signifier, ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: -0.01em;
}
.flex-subtitle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.subtitle-text {
  display: flex;
  letter-spacing: -0.01em;
  font-size: 24px;
  flex-direction: column;
  width: 50%;
  color: rgb(0, 0, 0); /* Link color */
  padding: 20px;
}
.subtitle-text p {
  cursor: pointer;
  font-size: 21px;
}
.full-width-image {
  min-width: 99.49vw;
  max-width: 100%;
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Cover the area without stretching */
  margin-left: calc(-50vw + 50%); /* Center the image */
}
.quote-image-container {
  display: flex;
  justify-content: space-between; /* Puts maximum space between text and image */
  padding: 20px;
}

.author {
  font-weight: bold;
  color: white;
}

.image-container {
  flex-basis: 50%; /* Takes up the other half of the width of the container */
}

.profile-image {
  width: 100%; /* Makes the image responsive, adjusting to the width of its container */
  height: auto; /* Maintains the aspect ratio of the image */
  object-fit: cover; /* Ensures the image covers the area without stretching */
}
</style>
