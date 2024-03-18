<template>
  <Head>
    <Title v-if="seoTitle">{{ seoTitle }}</Title>
    <Meta
      v-if="seoDescription"
      name="description"
      :content="`${seoDescription}`"
    />
    <!-- <Meta
      v-if="seoImage"
      property="og:image"
      content="https://www.datocms-assets.com/120012/1710688597-sstrader29_detailed_futuristic_and_super_realistic_soccer_stadi_6639aab0-7f96-4fbb-b983-266a14efb7d4.png"
    /> -->
  </Head>
  <!-- https://www.datocms-assets.com/120012/1710688597-sstrader29_detailed_futuristic_and_super_realistic_soccer_stadi_6639aab0-7f96-4fbb-b983-266a14efb7d4.png -->
  <div class="main">
    <!-- LINKS START -->
    <div class="black margin-bot-110"></div>

    <div class="bread-crumb">
      <p>
        <a href="/blog" class="blog-title">Blog</a>
      </p>
    </div>

    <!-- <img
      class="full-width-image"
      src="https://www.datocms-assets.com/120012/1710688597-sstrader29_detailed_futuristic_and_super_realistic_soccer_stadi_6639aab0-7f96-4fbb-b983-266a14efb7d4.png"
      alt="soccer stadium"
    /> -->

    <!-- <Article :postId="postId" :postSlug="postSlug" /> -->
    <div :key="rerender">
      <ArticleContent :article="article" />
    </div>
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

<script setup>
import { ref, onMounted, computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import play from "../../assets/svg/play.vue";
import pause from "../../assets/svg/pause.vue";
import { marked } from "marked";
import Footer from "~/components/Footer.vue";
import { useHead } from "@vueuse/head";

const route = useRoute();
const router = useRouter();

const postId = ref(null);
const postSlug = ref(null);
let rerender = ref(0);
let article = ref(null);

postId.value = route.query.postId; // Access postId from the query
postSlug.value = route.params._post; // Access postSlug from the route params

const fetchArticle = async (postSlug) => {
  console.log("postSlug :>> ", postSlug.value);
  const QUERY = ref(`
  {
        article(filter: { slug: { eq: "${postSlug.value}" } }) {
        id
        slug
        topics {
          id
          topic
        }
        cta {
          title
          url
        }
        title
        _updatedAt
        description
        content
        seo {
          description
          noIndex
          title
          twitterCard
        }
        featuredImage {
          url
        }
        author {
          id
          name
        }
      }
    }
    `);
  const { data } = await useGraphqlQuery({ query: QUERY.value });
  // setMeta();
  return data.value.article;
};
article.value = await fetchArticle(postSlug);

// Computed properties for SEO metadata
// Expanded SEO setup
const seo = computed(() => {
  if (article.value && article.value.seo) {
    return {
      description: article.value.seo.description,
      title: article.value.seo.title,
      image: article.value.seo.image.url,
      noIndex: article.value.seo.noIndex,
      twitterCard: article.value.seo.twitterCard,
    };
  } else {
    return {
      description: null,
      title: null,
      image: null,
      noIndex: false,
      twitterCard: null,
    };
  }
});
// -------------------- DESCRIPTION START --------------------
const seoImage = computed(() => {
  if (
    article.value &&
    article.value.seo &&
    article.value.seo.image &&
    article.value.seo.image.url
  ) {
    return article.value.seo.image.url;
  } else {
    return null;
  }
});
// -------------------- DESCRIPTION END --------------------
// -------------------- DESCRIPTION START --------------------
const seoDescription = computed(() => {
  if (article.value && article.value.seo && article.value.seo.description) {
    return article.value.seo.description;
  } else {
    return null;
  }
});
// -------------------- DESCRIPTION END --------------------

// -------------------- TITLE START --------------------
const seoTitle = computed(() => {
  if (article.value && article.value.seo && article.value.seo.title) {
    return article.value.seo.title;
  } else {
    return null;
  }
});
// -------------------- TITLE END --------------------
watchEffect(async () => {
  if (postSlug) {
    article.value = await fetchArticle(postSlug);
    if (article.value && article.value.content) {
      article.value.content = marked(article.value.content);
    }
  }
});
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
const redirect = (url) => {
  router.push(url);
};
</script>

<style scoped>
.margin-bot-110 {
  margin-bottom: 110px;
}
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

.text-container {
  flex-basis: 50%; /* Takes up half the width of the container */
  padding-right: 50px; /* Adds some space between the text and the image */
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

.image-container {
  flex-basis: 50%; /* Takes up the other half of the width of the container */
}

.profile-image {
  width: 100%; /* Makes the image responsive, adjusting to the width of its container */
  height: auto; /* Maintains the aspect ratio of the image */
  object-fit: cover; /* Ensures the image covers the area without stretching */
}
</style>
