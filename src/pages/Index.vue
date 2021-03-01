<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <div
          class="project"
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
        >
          <g-link :to="'/projects' + edge.node.linkUrl" class="project-link">
            <g-image
              :src="edge.node.image"
              class="thumbnail g-image g-image--loaded"
              width="2560"
              :alt="edge.node.title"
            />
            <noscript
              ><img
                :src="edge.node.image"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                :alt="edge.node.title"
            /></noscript>
            <h3 class="project-title">{{ edge.node.title }}</h3>
            <div class="categories">
              <span class="category">photography</span
              ><span class="category">{{ edge.node.color }}</span>
            </div></g-link
          >
        </div>
      </div>
    </div>
    <JournalList />
  </Layout>
</template>


<page-query>
query {
  posts: allGraphLists(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
        color
        linkUrl
        image
      }
    }
  }
}
</page-query>

<script>
import JournalList from "~/components/JournalList.vue";

export default {
  metaInfo: {
    title: "Portfolio",
  },
  components: {
    JournalList,
  },
};
</script>

<style>
</style>
