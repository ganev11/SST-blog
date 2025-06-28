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
          Let's discuss how our AI features can make your igaming business
          a leader in innovation and set you apart from the competition.
          
        </p>
      </div>
      <div class="box-right">
        <NuxtImg
          src="/assets/img/2.png"
          alt="Research"
          class="profile-image"
          width="600"
          format="webp"
        />
      </div>
    </div>
    <!-- TITLE SECTION END -->

    <!-- FOCUS START -->
    <hr class="flex-line" />
    <div class="container" v-if="!isSubmittedSuccessfully">
      <div class="text">
        <div class="subtitle">Contact</div>
      </div>
      <div class="form-right">
        <form @submit.prevent="submitForm">
          <!-- First Name -->
          <label for="firstName">First Name *</label>
          <input
            type="text"
            name="firstName"
            v-model="firstName"
            @blur="validateFirstName"
            class="input-field"
          />
          <p v-if="firstNameError" class="error-message">
            {{ firstNameError }}
          </p>

          <!-- Last Name -->
          <label for="lastName">Last Name *</label>
          <input
            type="text"
            name="lastName"
            v-model="lastName"
            @blur="validateLastName"
            class="input-field"
          />
          <p v-if="lastNameError" class="error-message">{{ lastNameError }}</p>

          <!-- Business Email -->
          <label for="businessEmail">Business Email *</label>
          <input
            type="email"
            name="businessEmail"
            v-model="businessEmail"
            @blur="validateBusinessEmail"
            class="input-field"
          />
          <p v-if="businessEmailError" class="error-message">
            {{ businessEmailError }}
          </p>

          <!-- Company Website -->
          <label for="companyWebsite">Company Website*</label>
          <input
            type="text"
            name="companyWebsite"
            v-model="companyWebsite"
            @blur="validateCompanyWebsite"
            class="input-field"
          />
          <p v-if="companyWebsiteError" class="error-message">
            {{ companyWebsiteError }}
          </p>

          <!-- Message -->
          <label for="message">Message *</label>
          <textarea
            name="message"
            v-model="message"
            @blur="validateMessage"
            class="input-field-text-area"
          ></textarea>
          <p v-if="messageError" class="error-message">{{ messageError }}</p>

          <!-- Submit Button -->
          <button class="submit-button" type="submit" :disabled="!isFormValid">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <div v-else class="container success-message">
      <h2>Thank you for reaching out!</h2>
      <p>
        Your message has been successfully sent. We will get back to you
        shortly.
      </p>
    </div>
    <!-- FOCUS END -->
  </div>
  <Footer />
</template>

<script>
import Footer from "~/components/Footer.vue";
const WEB3FORMS_ACCESS_KEY = "cc7c5ee6-458b-48c1-9bce-2224cbcb24a1";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      screenWidth: 0,
      // form fields
      firstName: "",
      lastName: "",
      businessEmail: "",
      companyWebsite: "",
      message: "",
      // validation errors
      firstNameError: "",
      lastNameError: "",
      businessEmailError: "",
      companyWebsiteError: "",
      messageError: "",
      isSubmittedSuccessfully: false,
    };
  },
  computed: {
    mobile() {
      return this.screenWidth <= 550;
    },

    isFormValid() {
      // Checks for the presence of error messages
      return (
        !this.firstNameError &&
        !this.lastNameError &&
        !this.businessEmailError &&
        !this.companyWebsiteError &&
        !this.messageError
      );
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
      // Validate all fields before attempting to submit
      this.validateFirstName();
      this.validateLastName();
      this.validateBusinessEmail();
      this.validateCompanyWebsite();
      this.validateMessage();
      // Check if form is still valid after validations
      if (this.isFormValid) {
        const formData = {
          access_key: WEB3FORMS_ACCESS_KEY,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.businessEmail,
          companyWebsite: this.companyWebsite,
          message: this.message,
        };

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (result.success) {
          // console.log("success", result.success);
          this.isSubmittedSuccessfully = true;
        }
      }
    },
    validateFirstName() {
      this.firstNameError =
        this.firstName.trim().length > 0 ? "" : "First name is required.";
    },
    validateLastName() {
      this.lastNameError =
        this.lastName.trim().length > 0 ? "" : "Last name is required.";
    },
    validateBusinessEmail() {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      this.businessEmailError = regex.test(this.businessEmail)
        ? ""
        : "A valid business email is required.";
    },
    validateCompanyWebsite() {
      const regex =
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      if (this.companyWebsite === "") {
        this.companyWebsiteError = "Company website is required.";
      } else if (!regex.test(this.companyWebsite)) {
        this.companyWebsiteError = "A valid URL is required.";
      } else {
        this.companyWebsiteError = "";
      }
    },
    validateMessage() {
      this.messageError =
        this.message.trim().length > 0 ? "" : "Message is required.";
    },
    redirect(url) {
      this.$router.push(url);
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  watch: {
    firstName(newVal) {
      if (newVal !== "") this.validateFirstName();
    },
    lastName(newVal) {
      if (newVal !== "") this.validateLastName();
    },
    businessEmail(newVal) {
      if (newVal !== "") this.validateBusinessEmail();
    },
    companyWebsite(newVal) {
      if (newVal !== "") this.validateCompanyWebsite();
    },
    message(newVal) {
      if (newVal !== "") this.validateMessage();
    },
  },
};
</script>
<style scoped>
.success-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center !important;
  gap: 20px;
  padding: 100px 20px 180px 20px !important;
  align-content: center;
}
.input-field {
  min-height: 40px; /* Adjust as needed */
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 10px;
  width: calc(100% - 19px);
  font-size: 14px;
}
.input-field:focus {
  outline: none;
  border-color: #000;
  background-color: #e0e0e0;
}
.input-field-text-area {
  min-height: 100px; /* Adjust as needed */
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 10px;
  width: calc(100% - 19px);
  font-size: 14px;
}
.input-field-text-area:focus {
  outline: none;
  border-color: #000;
  background-color: #e0e0e0;
}

p.error-message {
  color: red;
  font-size: 14px;
  margin-top: 0px !important;
}
/* Additional styling for labels if needed */
label {
  font-size: 18px;
}
.submit-button {
  background-color: #000 !important;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  min-height: 53px !important;
  border-radius: 4px;
  margin: 10px 0;
}
.submit-button:hover {
  background-color: #fff !important;
  min-height: 53px !important;
  color: #000;
  border-radius: 4px;
  border: 1px solid #000;
}
.submit-button:disabled {
  background-color: #ccc !important;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>

<style scoped>
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
