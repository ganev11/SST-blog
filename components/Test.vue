<script setup>
const QUERY = `
  {
    allPosts {
      id
      title
      text
    }
  }
`;
const { data } = await useGraphqlQuery({ query: QUERY });
console.log("data :>> ", data.value.allPosts);
</script>
<template>
  <div v-for="(post, index) in data.allPosts" :key="index">
    title {{ post.title }}
    <br />
    text {{ post.text }}
  </div>
</template>
<style scoped></style>
