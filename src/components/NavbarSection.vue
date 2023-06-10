<template>
  <div class="my-4">
    <nav class="flex gap-4 px-8">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
    <hr />
  </div>
</template>

<script>
export default {
  name: "NavbarSection",
};
</script>
