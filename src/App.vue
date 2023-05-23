<template>
  <header>
    <NavbarSection />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterSection />
  </footer>
</template>

<script>
import { RouterView } from "vue-router";
import NavbarSection from "./components/NavbarSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    RouterView,
    NavbarSection,
    FooterSection,
  },
};
</script>
