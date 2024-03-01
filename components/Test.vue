<script setup>
import { onMounted, onUnmounted } from 'vue'
const QUERY = `
  {
    allPosts {
      id
      title
      text
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
// // Make sure to add and remove the event listener
// onMounted(() => {
//   window.addEventListener('scroll', logScrollPosition)
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll', logScrollPosition)
// })
</script>

<template>
  <div v-for="(post, index) in data.allPosts" :key="index">
    title {{ post.title }}
    <br />
    text {{ post.text }}
  </div>

  <!-- <button @click="handleClick">Click me</button> -->
</template>
