<template>
  <div class="home-view">
    <SoundpadLayout />
    <div class="home-view__link">
      <RouterLink to="about"> <u>🚀 About</u> </RouterLink>
      <a href="https://github.com/bharismendy/rpg_sound_booard">
        <u><i class="fa-brands fa-github"></i> Github</u>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import SoundpadLayout from "@/layout/SoundpadLayout.vue";
</script>

<style scoped lang="scss">
.home-view {
  @include flex(column, space-between, center, wrap, $spacing-xxl);
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: $background-color;
  color: $gray-light;
  padding: $spacing-xxxl;
  &__link {
    @include flex(row, center, center, wrap, $spacing-xxxl);
    padding-top: $spacing-xxxl;
    width: 50vw;
  }
}
</style>
