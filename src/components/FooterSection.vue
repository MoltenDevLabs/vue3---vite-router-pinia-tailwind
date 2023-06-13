<template>
  <hr />
  <div class="flex justify-between text-center px-8 background">
    <div class="flex items-center">
      <i class="material-icons-outlined border-4 rounded-full on-background-text p-1 scale-125 my-4"
        >circle</i>
    </div>
    <div class="flex my-4">
      <nav class="flex items-center gap-4">
        <RouterLink class="on-background-text" to="/">Home</RouterLink>
        <RouterLink class="on-background-text" to="/about">About</RouterLink>
        <RouterLink class="on-background-text" to="/contact">Contact</RouterLink>
        <RouterLink class="on-background-text" to="/palette">Palette</RouterLink>
        <RouterLink class="on-background-text" to="/typography">Typography</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
