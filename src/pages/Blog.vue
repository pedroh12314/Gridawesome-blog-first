<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-5">Blog Posts</h1>
    
    <ul class="list-outside list-disc">
      <li v-for="post in $page.posts.edges" :key="post.path" class="mt-3">
        <g-link :to="post.node.path">{{ post.node.title }} – {{post.node.date}}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        date (format: "MMMM D, Y")
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog Posts'
  }
}
</script>