<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  redirectUrl: String,
  topicIDsArray: {
    type: Array,
    default: () => []
  },
  amount: {
    type: Number,
    default: null
  },
  bckgColor: {
    type: String,
    default: '#000'
  },
  color: {
    type: String,
    default: '#fff'
  }
})

// Computed property to construct the filter part of the GraphQL query
const filterTopicIDsArray = computed(() => {
  return props.topicIDsArray.length > 0
    ? `filter: {topics: {allIn: ${JSON.stringify(props.topicIDsArray)} }}`
    : ''
})

const router = useRouter()

const QUERY = ref(`
{
  allArticles(
    first: 3,
    ${filterTopicIDsArray.value}
  ) {
    id
    slug
    topics {
      id
      topic
    }
    title
    _updatedAt
    description
    content
    featuredImage {
      url
    }
    author {
      id
      name
    }
  }
}
`)

const { data } = await useGraphqlQuery({ query: QUERY.value })

const formatDate = dateString => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', options)
}
const handleClick = post => {
  router.push({
    path: `/${props.redirectUrl}/${post.slug}`
    // query: { postId: post.id }
  })
}
</script>

<template>
  <div
    class="articles-container"
    :style="`background-color: ${props.bckgColor}`"
    v-if="data && data.allArticles"
  >
    <div class="article-card" v-for="post in data.allArticles" :key="post.id" @click="handleClick(post)">
      <div class="image-container">
        <img :src="post.featuredImage.url" :alt="`Image for ${post.title}`" class="article-image" />
      </div>
      <div class="article-info">
        <h2 class="article-title" :style="`color:  ${props.color}`">{{ post.title }}</h2>
        <p class="article-date">{{ formatDate(post._updatedAt) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  width: 100%;
  max-width: 300px;
  height: auto;
}

/* ARTICLE STYLING */
.articles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  justify-content: flex-start;
  gap: 35px;
}

.article-card {
  width: auto;
  /* background-color: #1a1a1a00;  */
  /* border-radius: 8px; */
  overflow: hidden;
  cursor: pointer;
}
/* Desktops */
@media (min-width: 1224px) {
  .articles-container {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 30px;
  }
  .article-card {
    flex: 0 0 calc(35% - 45px); /* adjust spacing to match the gap */
  }
}

/* Tablets */
@media (min-width: 768px) and (max-width: 1223px) {
  .articles-container {
    justify-content: space-between;
  }
  .article-card {
    flex: 0 0 calc(50% - 18px); /* adjust spacing to match the gap */
  }
}

/* Mobile */
@media (max-width: 767px) {
  .articles-container {
    flex-direction: column;
    align-items: center;
  }
  .article-card {
    width: 100%;
  }
}

.image-container {
  width: 100%;
  overflow: hidden;
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area without distortion */
}

.article-info {
  padding: 16px 0;
}

.article-title {
  color: #fff;
  margin: 0;
  font-size: 1em;
}
.article-title:hover {
  color: #fff;
  text-decoration: underline;
}
.article-date {
  color: #a8a8a8;
  margin-top: 8px;
  font-size: 0.9em;
}
</style>
