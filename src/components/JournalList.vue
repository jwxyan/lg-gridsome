<template>
  <div>
    <div class="latest-journals-heading container">
      <span class="label">Latest and greatest</span>
    </div>
    <div class="latest-journals">
      <div class="container">
        <g-link
          :to="'/journal' + edge.node.linkUrl"
          class="journal"
          v-for="edge in $static.posts.edges"
          :key="edge.node.id"
          ><h3 class="journal-title">{{ edge.node.title }}</h3>
        </g-link>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allJournalLists(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
        linkUrl
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "JournalList",
};
</script>

<style>
</style>