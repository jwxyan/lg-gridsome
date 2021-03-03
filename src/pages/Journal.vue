<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header-1">a wise person once said...</h1>
      </div>
    </div>
    <g-link
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :to="'/journal/' + edge.node.linkUrl"
      class="journal-post"
    >
      <div class="container journal">
        <h2 class="journal-title-1">{{ edge.node.title }}</h2>
        <p class="journal-excerpt">
          {{ edge.node.excerpt }}
        </p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query {
  posts: allJournalLists(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
        linkUrl
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Journal",
  },
  name: "Journal",
};
</script>

<style>
</style>