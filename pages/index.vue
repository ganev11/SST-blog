<template>
  <div class="main">
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
    <!-- Rest of your content -->

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

<script>
import play from '../assets/svg/play.vue'
import pause from '../assets/svg/pause.vue'

export default {
  components: {
    play,
    pause
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
  },
  beforeUnmount() {
    if (process.client) {
      window.removeEventListener('resize', this.updateScreenWidth)
    }
  },
  methods: {
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
}
</style>
