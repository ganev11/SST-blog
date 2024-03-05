<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { marked } from 'marked'

const props = defineProps({
  postId: String
})
let rerender = ref(0)
console.log('object rerender :>> ', rerender)
let article = ref(null)
const fetchArticle = async postId => {
  const QUERY = ref(`
      {
        article(filter: { id: { eq: "${postId}" } }) {
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
  console.log('data.value.article :>> ', data.value.article)
  return data.value.article
}
watchEffect(async () => {
  if (props.postId) {
    article.value = await fetchArticle(props.postId)
    if (article.value && article.value.content) {
      article.value.content = marked(article.value.content)
    }
  }
})

const formatDate = dateString => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', options)
}
</script>

<template>
  <div :key="rerender">
    <ArticleContent :article="article" />
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
