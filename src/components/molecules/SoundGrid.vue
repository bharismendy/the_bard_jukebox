<template>
  <div class="sound-grid">
    <BaseTile v-for="sound in listOfSound" :key="sound.name" :sound />
  </div>
</template>

<script setup lang="ts">
import { listOfSound } from "@/constants/ListOfSounds";
import BaseTile from "@/components/atoms/BaseTile.vue";

defineOptions({ name: "soundGrid" });
</script>

<style scoped lang="scss">
.sound-grid {
  width: 80%;
  @include grid(
    repeat(auto-fit, minmax(200px, 1fr)),
    repeat(auto-fit, minmax(calc(100% / 5), 1fr)),
    $spacing-xxl,
    center,
    center,
    center,
    center
  );
}
</style>
