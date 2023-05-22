import { defineStore } from "pinia";

export default defineStore("counterStore", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
});
