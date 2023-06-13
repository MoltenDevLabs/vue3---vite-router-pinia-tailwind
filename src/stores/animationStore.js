import { defineStore } from "pinia";

export default defineStore("animationStore", {
  state: () => ({}),
  actions: { //! this function doesn't work correctly, the ripple appears at the top-left of the box
    createRipple(e) {
      // Creation of the ripple effect
      const x = e.clientX - e.currentTarget.offsetLeft;
      const y = e.clientY - e.currentTarget.offsetTop;
      const ripples = document.createElement("span");
      ripples.className = `left-[${x}px] top-[${y}px] absolute bg-neutral-400 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple`;
      e.currentTarget.appendChild(ripples);
      setTimeout(() => ripples.remove(), 500);
    },
    attachRippleEffect() {
      // Attach 'click' to the selected class or tag
      const buttons = document.querySelectorAll(".ripple");
      buttons.forEach((btn) => {
        btn.addEventListener("click", this.createRipple);
      });
    },
  },
});
