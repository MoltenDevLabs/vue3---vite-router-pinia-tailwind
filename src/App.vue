<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
  },
};
</script>
