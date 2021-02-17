<template>
  <Layout>
    <h1 class="text-3xl font-semibold mb-2">{{ $page.post.title }}</h1>
    <p class="font-light mb-4 text-gray-700">{{ $page.post.date }}</p>
    <div class="flex flex-wrap mb-4 text-sm">
      <g-link
        :to="tag.path"
        v-for="tag in $page.post.tags"
        :key="tag.id"
        class="bg-gray-300 rounded-full px-2 py-1 mr-4 mb-4 text-gray-700 hover:text-gray-300 hover:bg-gray-700">
        {{ tag.title }}
      </g-link>
    </div>
    <div class="mb-16 markdown" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
}
</script>