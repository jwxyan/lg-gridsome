<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title-1">{{ $page.posts.edges[0].node.title }}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span class="category">{{
                  $page.posts.edges[0].node.categories[0]
                }}</span>
                <span class="category">{{
                  $page.posts.edges[0].node.categories[1]
                }}</span>
              </div>
            </div>
            <div class="year-container">
              <span class="label">Year</span>
              <div>{{ $page.posts.edges[0].node.year }}</div>
            </div>
          </div>
        </div>
        <div class="content" v-html="$page.posts2.edges[0].node.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
# Write your query or mutation here
query($type: String) {
  posts: allGraphLists(
    sortBy: "id"
    order: ASC
    filter: { linkUrl: { eq: $type } }
  ) {
    edges {
      node {
        id
        title
        linkUrl
        categories
        year
      }
    }
  }
  posts2: allPArticlePost(filter: { fileInfo: { name: { eq: $type } } }) {
    edges {
      node {
        content
      }
    }
  }
}

</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.posts.edges[0].node.title,
    };
  },
  name: "ProjectDetail",
};
</script>

<style>
</style>