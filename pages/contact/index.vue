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
      <div class="box-left">
        <h1>Contact our sales team</h1>
        <p>
          We’re happy to answer questions and get you acquainted with OpenAI,
          including connecting you with helpful resources, exploring use cases
          for your team, and discussing packaging options.
        </p>
      </div>
      <div class="box-right">
        <img
          src="~/assets/img/contact.webp"
          alt="Research"
          class="profile-image"
        />
      </div>
    </div>
    <!-- TITLE SECTION END -->

    <!-- FOCUS START -->
    <hr class="flex-line" />
    <div class="container">
      <div class="text">
        <div class="subtitle">Contact</div>
      </div>
      <div class="form-right">
        <form @submit.prevent="submitForm">
          <label for="name">First name *</label>
          <input type="text" name="name" v-model="name" />
          <label for="email">Email *</label>
          <input type="email" name="email" v-model="email" />
          <label for="message">Message *</label>
          <textarea name="message" v-model="message"></textarea>
          <button class="submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <!-- FOCUS END -->
  </div>
  <Footer />
</template>

<script>
import Footer from "~/components/Footer.vue";
const WEB3FORMS_ACCESS_KEY = "73b7d4c5-6e49-42ea-83fd-ba1d78f01c60";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      screenWidth: 0,
      name: "",
      email: "",
      message: "",
    };
  },
  computed: {
    mobile() {
      return this.screenWidth <= 550;
    },
  },
  mounted() {
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
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
      }
    },
    redirect(url) {
      this.$router.push(url);
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.submit {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}
.submit:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}
.profile-image {
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
.box-left {
  flex: 1; /* Adjust as needed */
  padding: 0 40px 10px 0px;
  /* background-color: red; */
  min-width: 300px;
}
.box-right {
  flex: 1; /* Adjust as needed */
  /* background-color: red; */
  min-width: 300px;
}
.form-right {
  flex: 1; /* Adjust as needed */
  /* background-color: red; */
  min-width: 300px;
}
.form-right form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.box-left p {
  margin-top: 0;
  font-size: 34px;
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
  font-family: Signifier, ui-serif, Georgia, Cambria, Times New Roman, Times,
    serif;
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
  font-family: Soehne, system-ui, -apple-system, Helvetica Neue, Arial,
    sans-serif;
}
.text h2 {
  margin-top: 0;
  font-size: 30px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.02em;
  font-family: Soehne, system-ui, -apple-system, Helvetica Neue, Arial,
    sans-serif;
}
.box-left h1 {
  margin-top: 0;
  font-size: 60px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.02em;
  font-family: Soehne, system-ui, -apple-system, Helvetica Neue, Arial,
    sans-serif;
}
.box-left h2 {
  margin-top: 0;
  font-size: 40px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.02em;
  font-family: Soehne, system-ui, -apple-system, Helvetica Neue, Arial,
    sans-serif;
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
  font-family: Arial, Helvetica, sans-serif, ui-serif, Georgia, Cambria,
    Times New Roman, Times, serif;
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
