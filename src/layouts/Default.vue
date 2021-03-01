<template>
  <div class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link to="/" aria-current="page" class="home-link">
            <g-image src="/img/logo.svg" alt="" class="logo" />
          </g-link>
        </div>
        <nav class="nav right">
          <g-link to="/journal" class="nav__link" active-class="active"
            >Journal</g-link
          >
          <g-link to="/contact" class="nav__link" active-class="active"
            >Say Hi!</g-link
          >
        </nav>
      </div>
    </header>
    <slot />
    <footer class="footer">
      <div class="container">
        <span>Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
