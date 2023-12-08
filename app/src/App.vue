<template>
  <div :class="['app', route.name]">
    <!-- Global Header -->
    <the-header />

    <!-- Main Router View -->
    <RouterView />

    <!-- Overlays -->
    <global-overlay />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";

import TheHeader from "./components/TheHeader.vue";
import GlobalOverlay from "./components/GlobalOverlay.vue";

const route = useRoute();

// Scroll to the top of the page on url update
watch(
  route,
  () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
.app {
  &.trials,
  &.pdf,
  &.trial-card,
  &.not-found {
    color: $white;
    background: url("@/assets/backgrounds/trials.png");
    @include bg-cover();
  }
}
</style>
