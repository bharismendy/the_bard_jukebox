<template>
  <div class="sound-grid">
    <BaseTile v-for="sound in listOfSound" :key="sound.name" :sound />
  </div>
</template>

<script setup lang="ts">
import { listOfSound } from '@/constants/listOfSounds'
import BaseTile from '@/components/atoms/BaseTile.vue'

defineOptions({ name: 'soundGrid' })
</script>

<style scoped lang="scss">
.sound-grid {
  @include flex(row, flex-start, center, wrap, $spacing-xxl);
  width: 50vw;
}
</style>
