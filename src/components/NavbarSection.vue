<template>
  <div class="flex justify-between text-center px-8 background">
    <div class="flex my-4">
      <nav class="flex items-center gap-4">
        <RouterLink class="on-background-text" to="/">Home</RouterLink>
        <RouterLink class="on-background-text" to="/about">About</RouterLink>
        <RouterLink class="on-background-text" to="/contact">Contact</RouterLink>
        <RouterLink class="on-background-text" to="/palette">Palette</RouterLink>
        <RouterLink class="on-background-text" to="/typography">Typography</RouterLink>
      </nav>
    </div>
    <div v-if="darkThemeApplied" class="flex items-center">
      <i
        @click="toggleTheme"
        class="material-icons-outlined border-4 rounded-full on-background-text p-1 scale-125 cursor-pointer my-4"
        >light_mode</i
      >
    </div>
    <div v-if="lightThemeApplied" class="flex items-center">
      <i
        @click="toggleTheme"
        class="material-icons-outlined border-4 rounded-full on-background-text p-1 scale-125 cursor-pointer my-4"
        >dark_mode</i
      >
    </div>
  </div>
  <hr />
</template>

<script>
import themeStore from "../stores/themeStore";
import { mapActions, mapState } from "pinia";

export default {
  name: "NavbarSection",
  methods: {
    ...mapActions(themeStore, ["toggleTheme"]),
  },
  computed: {
    ...mapState(themeStore, ["darkThemeApplied", "lightThemeApplied"])
  },
};
</script>
