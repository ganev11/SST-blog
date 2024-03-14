<template>
  <div class="main">
    <!-- LINKS START -->
    <div class="black"></div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="bread-crumb">
      <p>
        <a href="/blog" class="blog-title">Blog</a>
      </p>
    </div>
    <Article :postId="postId" :postSlug="postSlug" />
    <hr class="flex-line" />
    <div class="subtitle">Research</div>
    <ListOfArticles
      :amount="4"
      :bckgColor="'white'"
      :color="'#000'"
      :topicIDsArray="['Y88ajMn7TwyihvOb2Uxstg']"
      :redirectUrl="'blog'"
    />
  </div>
  <Footer />
</template>

<script>
import play from '../../assets/svg/play.vue'
import pause from '../../assets/svg/pause.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    ListOfArticles: () => import('~/components/ListOfArticles.vue'),
    play,
    pause,
    Footer
  },
  data() {
    return {
      screenWidth: 0,
      postId: null, // Initialize postId to null
      postSlug: null, // Initialize postSlug to null
      isVideoPlaying: true // Assume video is playing initially because of the autoplay attribute
    }
  },
  computed: {
    mobile() {
      return this.screenWidth <= 550
    }
  },
  mounted() {
    this.postId = this.$route.query.postId // Access postId from the query
    // console.log('this.$route :>> ', this.$route.params._post)
    this.postSlug = this.$route.params._post // Access postSlug from the query

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
.blog-title {
  text-decoration: none;
  margin-left: 12px;
  font-size: 1.1rem;
  font-weight: 500;
  color: black; /* Your desired color */
}

.blog-title:hover {
  text-decoration: underline;
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
.bread-crumb {
  padding: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: black; /* Your desired color */
}
.bread-crumb p {
  margin-bottom: 0;
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
