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
* {
  box-sizing: border-box;
}

body {
  --color-base: #fff;
  --color-base-1: #f3f3f3;
  --color-contrast: #000;
  --color-contrast-1: #2b2b2b;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

.layout.sticky-header {
  padding: 6rem 0 0;
}

.layout {
  padding: 0;
}

.nav__link {
  margin-left: 20px;
}

.header {
  position: relative;
  height: 6rem;
  z-index: 10;
}

.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.home-link {
  text-decoration: none;
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.logo {
  height: 1.5rem;
}

.nav > a {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}

.nav > :last-of-type {
  margin: 0;
}

.nav > .active,
.nav > a:hover {
  border-color: inherit;
}

.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>
