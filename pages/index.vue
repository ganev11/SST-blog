<template>
  <div class="main">
    <!-- VIDEO START -->
    <div class="video-background">
      <video autoplay muted loop ref="videoElement" @ended="handleVideoEnd">
        <source src="../assets/videos/paper-planes.mp4" type="video/mp4" />
      </video>
      <div class="content">
        <div class="container-title">
          <div class="blue"></div>
          <div class="yellow">
            <div class="title">Introducing Sora: Creating video from text</div>
            <div class="flex-between-video">
              <span>
                <a href="#" class="learn-more">Learn more about Sora</a>
              </span>
              <span>
                <button class="play-stop" @click="toggleVideoPlayback">
                  <span class="icon-wrapper">
                    <play class="icon" v-if="isVideoPlaying" />
                    <pause class="icon" v-if="!isVideoPlaying" />
                    <span v-if="!mobile">
                      {{ isVideoPlaying ? 'Pause video' : 'Play video' }}
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
    <!-- LINKS START -->
    <div class="flex-container">
      <div class="flex-item" @click="redirect(`/research/overview`)">
        <h2>Pioneering research on the path to AGI</h2>
        <p class="flex-link">Learn about our research</p>
      </div>
      <div class="flex-item" @click="redirect(`/product`)">
        <h2>Transforming work and creativity with AI</h2>
        <p class="flex-link">Explore our products</p>
      </div>
      <div class="flex-item" @click="redirect(`/careers`)">
        <h2>Join us in shaping the future of technology</h2>
        <p class="flex-link">View careers</p>
      </div>
    </div>
    <hr class="flex-line" />
    <!-- LINKS END -->
    <!-- UPDATES START -->
    <div class="subtitle">Latest updateds</div>
    <ListOfArticles :redirectUrl="'blog'" :topic="'Product'" />
    <hr class="flex-line" />
    <!-- UPDATES END -->
    <!-- SAFETY START -->
    <div class="flex-subtitle">
      <div class="subtitle">Safety & responsibility</div>
      <div class="subtitle-text">
        <div>
          Our work to create safe and beneficial AI requires a deep understanding of the potential risks and
          benefits, as well as careful consideration of the impact.
        </div>
        <p class="flex-link" @click="redirect(`/safety`)">Learn about safety</p>
      </div>
    </div>
    <br />
    <br />
    <img src="../assets/img/image_five_bg.webp" alt="Safety Image" class="full-width-image" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr class="flex-line" />
    <!-- SAFETY END -->
    <!-- RESEARCH START -->
    <div class="flex-subtitle">
      <div class="subtitle">Research</div>
      <div class="subtitle-text">
        <div>We research generative models and how to align them with human values.</div>
        <p class="flex-link" @click="redirect(`/safety`)">Learn about our research</p>
      </div>
    </div>
    <br />
    <br />
    <ListOfArticles :redirectUrl="'blog'" :topic="'Product'" />
    <hr class="flex-line" />
    <!-- RESEARCH END -->
    <!-- PRODUCTS START -->
    <div class="flex-subtitle">
      <div class="subtitle">Products</div>
      <div class="subtitle-text">
        <div>Our API platform offers our latest models and guides for safety best practices.</div>
        <p class="flex-link" @click="redirect(`/safety`)">Explore our products</p>
      </div>
    </div>
    <br />
    <br />
    <ListOfArticles :redirectUrl="'blog'" :topic="'Product'" />
    <hr class="flex-line" />
    <!-- PRODUCTS END -->
    <!-- CAREERS START -->
    <div class="flex-subtitle">
      <div class="subtitle">Careers at OpenAI</div>
      <div class="subtitle-text">
        <div>
          Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.
        </div>
        <p class="flex-link" @click="redirect(`/safety`)">View careers</p>
      </div>
    </div>
    <br />
    <br />
    <img src="../assets/img/image_bg_thirteen.avif" alt="Safety Image" class="full-width-image" />
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
          “I encourage my team to keep learning. Ideas in different topics or fields can often inspire new
          ideas and broaden the potential solution space.”
        </p>
        <p class="author">Lilian Weng<br />Applied AI at OpenAI</p>
      </div>
      <div class="image-container">
        <img src="../assets/img/image_portrait_alex_w.webp" alt="Lilian Weng" class="profile-image" />
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
    <Footer />
    <!-- TESTIMONY END -->
  </div>
</template>

<script>
import play from '../assets/svg/play.vue'
import pause from '../assets/svg/pause.vue'
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
.main {
  height: calc(100% - 80px);
  background-color: black;
}
.video-background {
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100vh; /* Adjust the height as needed */
  overflow: hidden;
}

.video-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the color and opacity as needed */
  z-index: 1;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
}

.container-title {
  width: 100%;
  display: flex;
  padding-bottom: 20px;
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
  flex-direction: column;
  justify-content: space-between;
}
.video-background .content {
  /* background-color: seagreen; */
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  flex-direction: column-reverse;
  padding: 20px;
  width: calc(100vw - 60px);
  /*
  bottom: 200px;
  */
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
  margin-left: calc(-50vw + 50%); /* Center the image */
}
.quote-image-container {
  display: flex;
  justify-content: space-between; /* Puts maximum space between text and image */
  padding: 20px;
}

.text-container {
  flex-basis: 50%; /* Takes up half the width of the container */
  padding-right: 50px; /* Adds some space between the text and the image */
}

.quote {
  font-family: Signifier, ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
  font-weight: 400;
  font-size: 2.5em; /* Adjust the size as needed */
  margin-bottom: 0.5em; /* Spacing between quote and author */
  color: white;
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
