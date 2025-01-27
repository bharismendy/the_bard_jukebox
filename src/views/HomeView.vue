<template>
  <div class="home-view">
    <SoundpadLayout />
  </div>
</template>

<script setup lang="ts">
import SoundpadLayout from '@/layout/SoundpadLayout.vue'
</script>

<style scoped lang="scss">
.home-view {
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: $background-color;
  padding: $spacing-xxxl;
}
</style>
