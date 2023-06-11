<template>
  <div class="my-4">
    <hr />
    <nav class="flex gap-4 px-8">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/palette">Palette</RouterLink>
      <RouterLink to="/typography">Typography</RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
