<template>
  <!-- <Head>
    <Title>{{ seoTitle }}</Title>
    <Meta name="description" :content="`${seoDescription}`" />
  </Head> -->
  <div v-if="article" class="main">
    <!-- TITLE SECTION START -->
    <div class="container">
      <div class="text">
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <div class="flex-btns cta">
          <div v-if="article.cta[0]" class="view-research-index flex-text">
            <!-- @click="redirect(`${article.cta[0].url}`)" -->
            <a :href="`${article.cta[0].url}`">
              {{ article.cta[0].title }}
            </a>
          </div>
          <span v-if="article.cta[1]" class="underline">
            <a :href="`${article.cta[1].url}`">{{ article.cta[1].title }} </a>
          </span>
        </div>
      </div>
      <div class="image">
        <img :src="article.featuredImage.url" alt="Image description" class="profile-image" />
      </div>
    </div>
    <!-- TITLE SECTION END -->
    <!-- CONTEN START -->
    <hr class="flex-line" />
    <div v-if="article">
      <div class="container-content">
        <div class="header-date">
          <span class="date">January 10, 2024</span>
        </div>
        <div class="header-author">
          <span class="categories"><b> Authors </b> {{ article.author[0].name }} </span>
        </div>
        <div class="header-tags">
          <span v-for="(topic, index) in article.topics" :key="index">
            <span class="topic"> {{ topic.topic }}, </span>
          </span>
        </div>
      </div>
      <div class="content-main" v-html="article.content"></div>
    </div>
    <!-- CONTEN END -->
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: ['article'],
  data() {
    return {}
  },
  computed: {
    seoDescription() {
      if (this.article && this.article.seo && this.article.seo.description) {
        return this.article.seo.description
      } else {
        return 'Reade the news about our AI'
      }
    },
    seoTitle() {
      if (this.article && this.article.seo && this.article.seo.title) {
        return this.article.seo.title
      } else {
        return 'Article'
      }
    }
  },
  methods: {
    seo() {
      console.log('article :>> ', this.article)
    },
    redirect(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.container-content {
  /* background-color: yellow; */
  display: flex;
}
.date {
  min-width: 150px;
}
.content-main {
  padding: 50px 30% 0 20%;
}

.header-date {
  width: calc(20% - 20px);
  margin-left: 20px;
}
.header-author {
  width: 40%;
}
.header-tags {
  width: 40%;
}
.categories {
  display: flex;
  flex-direction: column;
  min-width: 400px;
}
@media (max-width: 768px) {
  .header-author {
    margin-left: 20px !important;
  }
  .header-tags {
    margin-left: 20px;
  }
  .container-content {
    flex-direction: column;
  }
  .content-main {
    padding: 50px 15px 0 15px;
  }
  .header-author {
    margin: 20px 0;
  }
}
.container {
  padding: 0 20px 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.text {
  flex: 1; /* Adjust as needed */
  padding: 0 40px 10px 10px;
  /* background-color: red; */
  min-width: 300px;
}
.text h1 {
  margin-top: 0;
  font-size: 50px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.02em;
  font-family: Soehne, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif;
}
.text p {
  font-size: 24px;
}
.tags {
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
}
.topic {
  margin-right: 10px;
}
.underlight {
  text-decoration: underline;
  cursor: pointer;
}
.underlight:hover {
  color: #737373;
}
.image {
  /* background-color: blue; */
  flex: 1; /* Adjust as needed */
  padding: 10px;
  min-width: 300px;
}

.blog-title {
  margin-left: 10px;
  text-decoration: none;
  color: black; /* Your desired color */
}

.flex-line {
  border: none;
  height: 1px;
  background-color: rgb(0, 0, 0); /* Line color */
  width: auto; /* Line full width */
  margin: 20px; /* Space between link and line */
}
.blog-title:hover {
  text-decoration: underline;
}
.profile-image {
  width: 100%; /* Makes the image responsive, adjusting to the width of its container */
  aspect-ratio: 1/1;
  object-fit: cover; /* Ensures the image covers the area without stretching */
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
</style>
