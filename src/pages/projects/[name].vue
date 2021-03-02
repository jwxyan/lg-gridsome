<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header"><h1 class="project-title">Banana</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories"><span class="label">Categories</span>
                <span class="category">photography</span>
                <span class="category">pink</span>
              </div>
            </div>
            <div class="year-container"><span class="label">Year</span>
              <div>2019</div>
            </div>
          </div>
        </div>
        <div class="content">
          {{ $route.params.id }}
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
</page-query>

<script>
export default {
  name: "ProjectDetail",
};
</script>

<style>
</style>