<script setup>
const QUERY = `
  {
    allPosts {
      id
      title
      text
      img {
        url
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
  <div v-for="(post, index) in data.allPosts" :key="index">
    <!-- Changed key to post.id for better key usage -->
    <h2>{{ post.title }}</h2>
    <!-- Use h2 for title for semantic HTML, you can change as needed -->
    <p>{{ post.text }}</p>
    {{ post.img.url }}
    <img :src="post.img.url" :alt="`Image for ${post.title}`" class="img" />
    <!-- Display the image -->
  </div>
</template>

<style scoped>
.img {
  width: 100%;
  max-width: 300px;
  height: auto;
}
</style>
