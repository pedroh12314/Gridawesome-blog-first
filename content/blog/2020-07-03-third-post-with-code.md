---
slug: "third-post"
date: "2020-07-03"
title: "Code Coloring"
tags: ["FRONTED", "hipster"]
---

# This should be a heading 1

I'm baby chartreuse knausgaard gastropub deep v mlkshk pickled crucifix chicharrones meggings. Listicle jianbing tbh sriracha tofu, waistcoat post-ironic copper mug williamsburg scenester. Banh mi tilde swag beard. PBR&B disrupt affogato 8-bit fanny pack. Tacos fam brooklyn jean shorts. Taiyaki fam +1 tote bag chia palo santo.

**This is bold**

Banh mi authentic fashion axe affogato shoreditch umami bicycle rights keytar put a bird on it drinking vinegar pitchfork taxidermy. Synth pinterest bespoke, taiyaki williamsburg chambray cloud bread readymade.

```vue
<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-2">{{ $page.post.title }}</h1>
    <span class="font-light">{{ $page.post.date }}</span>
    <div class="mt-8 mb-16 markdown" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
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

<style src="../css/markdown.css" />
```

## This should be a heading 2

> This should be a block quote

Selvage twee viral, lyft chartreuse swag crucifix hexagon lo-fi meggings literally. Jianbing knausgaard vexillologist, sustainable yr twee tote bag cray keytar schlitz slow-carb DIY dreamcatcher brooklyn listicle. Chambray letterpress flexitarian meditation gentrify. Single-origin coffee lyft iPhone street art, hot chicken yr live-edge gentrify waistcoat.

_Source: [Hipster Ipsum](https://hipsum.co)_