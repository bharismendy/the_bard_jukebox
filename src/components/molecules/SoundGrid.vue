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
  @include grid(
    repeat(6, calc(100% / 6)),
    repeat(4, calc(100% / 5)),
    $spacing-xxl
  );
}
</style>
