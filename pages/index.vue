<template>
  <Head>
    <Title>SSTrader – Revolutionizing Sports Betting with AI </Title>
    <Meta name="description":content="'SSTrader delivers powerful AI solutions for sportsbooks, operators, and bettors—creating personalized, engaging, and data-driven sports betting experiences.'" />
    <Meta name="og:image" :content="'https://sstrader.com/_nuxt/Office%20empty%202.Cz0wayrX.png'" />
  </Head>

  <!-- VIDEO START -->
  <div class="video-background">
    <video
      playsinline
      autoplay
      muted
      loop
      ref="videoElement"
      @ended="handleVideoEnd"
      preload="auto"
    >
      <source
        ref="videoSource"
        src="../assets/videos/sst-video.mp4"
        type="video/mp4"
      />
    </video>
    <div class="content">
      <div class="container-title">
        <div class="blue"></div>
        <div class="yellow">
          <div class="title">ChatSST: AI Sports Betting Insights, Simplified</div>
          <div class="flex-between-video">
            <span>
              <a href="/blog/introducing-chatsst-the-future-of-sports-predictions" class="learn-more">Learn more about ChatSST</a>
            </span>
            <span>
              <button class="play-stop" @click="toggleVideoPlayback">
                <span class="icon-wrapper">
                  <play class="icon" v-if="isVideoPlaying" />
                  <pause class="icon" v-if="!isVideoPlaying" />
                  <span v-if="!mobile">
                    {{ isVideoPlaying ? "Pause video" : "Play video" }}
                  </span>
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- VIDEO END -->
  <div class="main">
    <!-- LINKS START -->
    <div class="flex-container">
      <div class="flex-item">
        <h2> Advanced AI Football Predictions Platform </h2>
        <a class="anchor-content mg-top-20" :href="`/blog/advanced-in-play-football-analytics-master-the-game-with-pro-dashboard-filters`">
          Discover Football Pro
        </a>
      </div>
      <div class="flex-item">
        <h2>Boost Your Sportsbook Engagement </h2>
        <p class="flex-link"></p>
        <a class="anchor-content mg-top-20" :href="`/blog/maximize-engagement-growth-ai-driven-chatbot-for-igaming-operators`">
          Integrate ChatSST
        </a>
      </div>
      <div class="flex-item">
        <h2> AI Live Betting Agent API Real-Time Insights </h2>
        <a class="anchor-content mg-top-20" :href="`/blog/ai-live-tipster-24-7-api-personalized-sports-predictions-and-insights`">
          Join the AI Revolution
        </a>
      </div>
    </div>
    <hr class="flex-line" />
    <!-- LINKS END -->
    <!-- UPDATES START -->
    <div class="subtitle">Latest updateds</div>
    <ListOfArticles
      :amount="4"
      :redirectUrl="'blog'"
      :topicIDsArray="['F40oLv3XSbaxpddA2i6SUQ']"
    />
    <hr class="flex-line" />
    <!-- UPDATES END -->
    <!-- SAFETY START -->
    <div class="flex-subtitle">
      <div class="subtitle">Our Mission </div>
      <div class="subtitle-text">
        <div>
          SSTrader empowers every stakeholder in sports betting — players,
          sportsbooks, and traders, with intuitive AI tools for smarter decisions.
        </div>
        <a class="anchor-content mg-top-20" :href="`/blog/pioneering-the-next-era-of-igaming-with-ai-at-sstrader-com`"
          >More about our mission </a
        >
      </div>
    </div>
    <br />
    <br />
    <img
      src="../assets/img/Robot.png"
      alt="Safety Image"
      class="full-width-image"
      loading="lazy"
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr class="flex-line" />
    <!-- SAFETY END -->
    <!-- RESEARCH START -->
    <div class="flex-subtitle">
      <div class="subtitle">Solutions</div>
      <div class="subtitle-text">
        <div>
        We create innovative AI-powered betting solutions that transform user
        engagement and boost operational efficiency.
        </div>
        <a class="anchor-content mg-top-20" :href="`research/overview`"
          >Explore Our Solution </a
        >
      </div>
    </div>
    <br />
    <br />
    <ListOfArticles
      :amount="4"
      :redirectUrl="'blog'"
      :topicIDsArray="['Y88ajMn7TwyihvOb2Uxstg']"
    />
    <hr class="flex-line" />
    <!-- RESEARCH END -->
    <!-- PRODUCTS START -->
    <div class="flex-subtitle">
      <div class="subtitle">Products</div>
      <div class="subtitle-text">
        <div>
          Easily build and customize your sports prediction strategies with our
          advanced AI-driven platform.
        </div>
        <a class="anchor-content mg-top-20" :href="`/blog/advanced-in-play-football-analytics-master-the-game-with-pro-dashboard-filters`"
          >Explore Football Pro </a
        >
      </div>
    </div>
    <br />
    <br />
    <ListOfArticles
      :amount="4"
      :redirectUrl="'blog'"
      :topicIDsArray="['S9HLumu1TQKcty1NCnnZ9g']"
    />
    <hr class="flex-line" />
    <!-- PRODUCTS END -->
    <!-- CAREERS START -->
    <div class="flex-subtitle">
      <div class="subtitle">Powerful API for Developers</div>
      <div class="subtitle-text">
        <div>
          Scalable API delivering personalized AI
          insights for sports betting apps.
        </div>
        <a class="anchor-content mg-top-20" :href="`/blog/ai-live-tipster-24-7-api-personalized-sports-predictions-and-insights`">Explore API Now
</a>
      </div>
    </div>
    <br />
    <br />
    <img
      src="../assets/img/Office empty 2.png"
      alt="Safety Image"
      class="full-width-image"
      loading="lazy"
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr class="flex-line" />
    <!-- CAREERS END -->
    <!-- TESTIMONY START -->
    <div class="quote-image-container">
      <div class="text-container">
        <p class="quote">
          “Our vision is simple: Provide scalable AI infrastructure 
           empowering anyone to build smarter betting agents and chatbots
           powering intelligent sports betting experiences.”
        </p>
        <p class="author">SSTrader Team <br </p>
      </div>
      <div class="image-container">
        <img
          src="../assets/img/3.png"
          alt="SSTrader"
          class="profile-image"
          loading="lazy"
        />
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- TESTIMONY END -->
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

import play from "../assets/svg/play.vue";
import pause from "../assets/svg/pause.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    play,
    pause,
    Footer,
  },
  data() {
    return {
      screenWidth: 0,
      isVideoPlaying: true, // Assume video is playing initially because of the autoplay attribute
    };
  },
  computed: {
    mobile() {
      return this.screenWidth <= 550;
    },
  },
  mounted() {
    this.$refs.videoElement.play();
    if (process.client) {
      window.addEventListener("resize", this.updateScreenWidth);
    }
    this.updateScreenWidth();
  },
  beforeUnmount() {
    if (process.client) {
      window.removeEventListener("resize", this.updateScreenWidth);
    }
  },
  methods: {
    redirect(url) {
      this.$router.push(url);
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    toggleVideoPlayback() {
      const videoElement = this.$refs.videoElement;
      if (videoElement) {
        if (this.isVideoPlaying) {
          videoElement.pause();
        } else {
          videoElement.play();
        }
        this.isVideoPlaying = !this.isVideoPlaying;
      }
    },
    handleVideoEnd() {
      this.isVideoPlaying = false;
    },
  },
};
</script>

<style scoped>
.main {
  height: calc(100% - 80px);
  background-color: black;
}
.video-background {
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: auto;
  height: 100vh; /* Adjust the height as needed */
  /* overflow: hidden; */
}

.video-background video {
  max-width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100vh; /* Adjust the height as needed */
  height: 100vh; /* Adjust the height as needed */
  width: auto;
  z-index: 0;
  object-fit: cover;
}
.margin-for-video {
  margin-top: 300px;
}
.container-title {
  width: 100%;
  display: flex;
}
.blue {
  /* background-color: blue; */
  width: 25%;
  height: 270px;
}
.yellow {
  /* background-color: yellow; */
  width: 100%;
  height: 270px;
  display: flex;
  padding-right: 25px;

  flex-direction: column;
  justify-content: space-between;
}

.video-background .content {
  /* background-color: seagreen; */
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 2;
  flex-direction: column-reverse;
  padding-left: 20px;
  width: calc(100vw - 60px) !important;
  max-width: 90vw;
  bottom: 5vh !important;
}
@media (min-width: 1024px) {
  .video-background .content {
    bottom: 450px;
    max-width: 1600px; /* Adjust this value as needed */
    margin: 0 auto; /* Centers the element horizontally */
  }
  .full-width-image {
    min-width: 5vw !important;
    width: 100%;
    object-fit: cover; /* Cover the area without stretching */
  }
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
  .yellow {
    padding-right: 50px;
  }
  .video-background .content {
    width: 100% !important;
  }
  .quote-image-container {
    flex-direction: column;
  }
}
.play-stop .icon {
  fill: white; /* Set default color to white */
}
.play-stop:hover .icon {
  fill: black; /* Change color to black on hover */
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
.play-stop {
  display: inline-block;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: rgb(0, 0, 0);
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.play-stop:hover {
  border: 1px solid rgb(255, 255, 255);

  background-color: white;
  color: black;
}
/* Tablets */
@media (max-width: 768px) and (max-width: 1223px) {
  .profile-image {
    width: 100% !important;
    height: auto; /* Maintain aspect ratio */
  }
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
  height: 60px;
}
/* LINK: */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; /* Align items to the start of the container */
  padding: 40px 20px;
  background-color: black; /* Your container background color */
  color: white; /* Text color */
  justify-content: space-between;
}
.flex-item h2 {
  max-width: 350px;
  font-weight: 600;
}
.flex-item {
  color: white; /* Link color */
  cursor: pointer;
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
  margin: 20px; /* Space between link and line */
}
.subtitle {
  color: white;
  font-size: 2.5rem;
  padding: 20px;
  font-family: Signifier, ui-serif, Georgia, Cambria, Times New Roman, Times,
    serif;
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
  color: white; /* Link color */
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
}
.quote-image-container {
  display: flex;
  justify-content: space-between; /* Puts maximum space between text and image */
  padding: 20px;
  gap: 40px;
}

/* .text-container {
}
.image-container {
} */
.profile-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  height: 100%;
  object-fit: cover;
}
.quote {
  font-family: Signifier, ui-serif, Georgia, Cambria, Times New Roman, Times,
    serif;
  font-weight: 400;
  font-size: 2.5em; /* Adjust the size as needed */
  margin-bottom: 0.5em; /* Spacing between quote and author */
  color: white;
}

.author {
  font-weight: bold;
  color: white;
}
</style>
