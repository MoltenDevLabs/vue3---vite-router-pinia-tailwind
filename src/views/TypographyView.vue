<template>
  <div class="background">
    <div class="flex flex-col gap-2 px-8">
      <h1 class="on-background-text">This is display-large</h1>
      <h2 class="on-background-text">This is display-medium</h2>
      <h3 class="on-background-text">This is display-small</h3>
      <hr />
      <h4 class="on-background-text">This is headline-large</h4>
      <h5 class="on-background-text">This is headline-medium</h5>
      <h6 class="on-background-text">This is headline-small</h6>
      <hr />
      <hr />
      <p class="title-large on-background-text">This is title-large</p>
      <p class="title-medium on-background-text">This is title-medium</p>
      <p class="title-small on-background-text">This is title-small</p>
      <hr />
      <p class="body-large on-background-text">This is body-large</p>
      <p class="body-medium on-background-text">This is body-medium</p>
      <p class="body-small on-background-text">This is body-small</p>
      <hr />
      <p class="label-large on-background-text">This is label-large</p>
      <p class="label-medium on-background-text">This is label-medium</p>
      <p class="label-small on-background-text">This is label-small</p>
      <hr />
      <div class="flex flex-col gap-4 py-2 mb-2">
        <div class="flex gap-4">
          <button class="trial-button">Button</button>
        </div>
        <div class="flex gap-8">
          <button class="extended-fab-button">Button</button>
          <button class="fab-button">Button</button>
          <button class="filled-button ripple" @click="createRipple">Button</button>
        </div>
        <div class="flex gap-8">
          <button class="tonal-button">Button</button>
          <button class="elevated-button ripple" @click="createRipple">Button</button>
          <button class="outlined-button">Button</button>
        </div>
        <div class="flex gap-8">
          <button class="text-button">Button</button>
          <button class="segmented-button">Button</button>
          <button class="icon-button">Button</button>
        </div>
      </div>
    </div>
  </div>

  <div>
<h1 class=" background h-screen ripple" @click="createRipple">THE GREAT DIV</h1>
  </div>

</template>

<script>
import animationStore from '../stores/animationStore';
import { mapActions } from 'pinia';

export default {
  name: "TypographyView",
  methods: {
    ...mapActions(animationStore, ['attachRippleEffect'])
  },
  mounted() {
    this.attachRippleEffect();
  },
};
</script>
