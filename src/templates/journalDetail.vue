<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title-2">{{ $page.posts.edges[0].node.title }}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span
              ><span class="author-name">{{
                $page.posts.edges[0].node.author
              }}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{ $page.posts.edges[0].node.date }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span
              ><span>{{ $page.posts.edges[0].node.time }}</span>
            </div>
          </div>
        </div>
        <div class="journal-content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($type: String) {
  posts: allJournalLists(
    sortBy: "id"
    order: ASC
    filter: { linkUrl: { eq: $type } }
  ) {
    edges {
      node {
      id
      title
      author
      date
      time
      article
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "JournalDetail",
};
</script>

<style>
</style>