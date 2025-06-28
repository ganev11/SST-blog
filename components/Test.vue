<script setup>
const QUERY = `
{
  allArticles(first: 4) {
    id
    title
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
`
const { data } = await useGraphqlQuery({ query: QUERY })
// console.log('data :>> ', data.value.allPosts)

const logScrollPosition = () => {
  const verticalPosition = window.scrollY
  console.log(`Vertical scroll position: ${verticalPosition}`)
}
const handleClick = () => {
  console.log('Button was clicked')
  const verticalPosition = window.scrollY
  console.log(`Vertical scroll position: ${verticalPosition}`)
}
</script>

<template>
  <div class="test" v-for="(post, index) in data.allArticles" :key="index">
    <!-- Changed key to post.id for better key usage -->
    <h2>{{ post.title }}</h2>
    <!-- Use h2 for title for semantic HTML, you can change as needed -->
    <p>{{ post.description }}</p>
    {{ post.content }}
    <NuxtImg
      :src="post.featuredImage.url"
      :alt="`Image for ${post.title}`"
      class="img"
      width="600"
      sizes="sm:100vw md:50vw lg:400px"
      format="webp"
    />
    <!-- Display the image -->
  </div>
</template>

<style scoped>
.img {
  width: 100%;
  max-width: 300px;
  height: auto;
}
.test {
  color: white;
}
</style>
