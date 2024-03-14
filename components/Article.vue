<template>
  <!-- <Head>
    <Title>{{ seoTitle }}</Title>
    <Meta name="description" :content="`${seoDescription}`" />
  </Head> -->
  <div :key="rerender">
    <ArticleContent :article="article" />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { marked } from 'marked'
import { useHead } from '@vueuse/head'

const props = defineProps({
  postId: String,
  postSlug: String
})
let rerender = ref(0)
let article = ref(null)
const fetchArticle = async postSlug => {
  const QUERY = ref(`
  {
        article(filter: { slug: { eq: "${postSlug}" } }) {
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
    `)
  const { data } = await useGraphqlQuery({ query: QUERY.value })
  return data.value.article
}
watchEffect(async () => {
  if (props.postSlug) {
    article.value = await fetchArticle(props.postSlug)
    if (article.value && article.value.content) {
      article.value.content = marked(article.value.content)
    }
  }
  if (article && article.value && article.value.seo) {
    await setMeta()
  }
})

const formatDate = dateString => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', options)
}

// Computed properties for SEO metadata
// -------------------- DESCRIPTION START --------------------
const seoDescription = computed(() => {
  if (article.value && article.value.seo && article.value.seo.description) {
    return article.value.seo.description
  } else {
    return 'Read the news about our AI'
  }
})
// console.log('seoDescription :>> ', seoDescription.value)
// setTimeout(() => {
//   console.log('seoDescription :>> ', seoDescription.value)
// }, 1000)
// -------------------- DESCRIPTION END --------------------

// -------------------- TITLE START --------------------
const seoTitle = computed(() => {
  if (article.value && article.value.seo && article.value.seo.title) {
    return article.value.seo.title
  } else {
    return 'Article'
  }
})
// console.log('seoTitle :>> ', seoTitle.value)
// setTimeout(() => {
//   console.log('seoTitle :>> ', seoTitle.value)
// }, 1000)
// -------------------- TITLE END --------------------

const setMeta = async () => {
  console.log('setMeta :>> ', seoTitle.value)
  setTimeout(() => {
    useHead({
      title: seoTitle.value,
      meta: [{ name: 'description', content: 'My amazing site.' }],
      bodyAttrs: {
        class: 'test'
      },
      script: [{ innerHTML: "console.log('Hello world')" }]
    })
  }, 1000)
}

// setTimeout(() => {
//   useHead({
//     titleTemplate: seoTitle => {
//       // This function will be reactive and will update the title when seoTitle changes
//       return seoTitle ? `${seoTitle} - Site Title` : 'Site Title'
//     },
//     meta: [
//       {
//         name: 'description',
//         // This function will also be reactive and update the meta description content
//         // when seoDescription changes
//         content: seoDescription
//       }
//     ]
//   })
// }, 1000)

// onMounted(() => {
//   // This will set the initial head values when the component is mounted
//   useHead({
//     titleTemplate: () => (seoTitle.value ? `${seoTitle.value} - Site Title` : 'Site Title'),
//     meta: [
//       {
//         name: 'description',
//         content: seoDescription.value
//       }
//     ]
//   })

//   // Set up a watcher to update the head whenever the seoTitle or seoDescription change
//   watch(
//     [seoDescription, seoTitle],
//     () => {
//       useHead({
//         titleTemplate: () => (seoTitle.value ? `${seoTitle.value} - Site Title` : 'Site Title'),
//         meta: [
//           {
//             name: 'description',
//             content: seoDescription.value
//           }
//         ]
//       })
//     },
//     {
//       immediate: true // This ensures the watcher is run immediately on mount
//     }
//   )
// })
</script>

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
