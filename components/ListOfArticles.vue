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
    ${props.amount ? `first: ${props.amount},` : ''}
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
  router.push(`${props.redirectUrl}/${post.id}`)
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
  gap: 40px;
}

.article-card {
  width: 320px;
  /* background-color: #1a1a1a00;  */
  margin-bottom: 20px;
  /* border-radius: 8px; */
  overflow: hidden;
  cursor: pointer;
}

.image-container {
  width: 100%;
  height: 300px; /* Adjust height as needed */
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
  font-size: 1.2em;
}

.article-date {
  color: #a8a8a8;
  margin-top: 8px;
  font-size: 0.9em;
}
</style>
