import { defineStore } from "pinia";

export default defineStore("themeStore", {
  state: () => ({
    darkThemeApplied: true,
    lightThemeApplied: false
  }),
  actions: {
    toggleTheme() {
      this.darkThemeApplied = !this.darkThemeApplied;
      this.lightThemeApplied = !this.lightThemeApplied;
    },
  },
  getters: {

  },
});
