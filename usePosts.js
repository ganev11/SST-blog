// usePosts.js (this is a composable)
import { ref } from 'vue'
import { useGraphqlQuery } from 'vue-apollo-composable'

const posts = ref([])

export function usePosts() {
  const QUERY = `
    {
      allPosts {
        id
        title
        text
      }
    }
  `

  const { result } = useGraphqlQuery({ query: QUERY })

  result.onResult(newResult => {
    posts.value = newResult.data.allPosts
  })

  return {
    posts
  }
}
