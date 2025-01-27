<template>
  <div :class="computedClass" @click="handlePlaySound">
    <i :class="iconName"></i>
    <h2>{{ sound.name }}</h2>
  </div>
</template>

<script setup lang="ts">
import type { ISound } from '@/interfaces/sound.interface'
import { computed, ref, type PropType, type Ref } from 'vue'

defineOptions({ name: 'BaseTile' })

const props = defineProps({
  sound: {
    type: Object as PropType<ISound>,
    required: true,
  },
})
const soundPath = new URL(`../../assets/sounds/${props.sound.soundName}`, import.meta.url).href
const audio = new Audio(soundPath)
const isAudioPlaying: Ref<boolean> = ref(false)
const iconName = computed(() => `fa-solid ${props.sound.iconName}`)
const computedClass = computed(() => {
  return {
    'base-tile': true,
    'base-tile--activated': isAudioPlaying.value,
  }
})
function handlePlaySound() {
  if (isAudioPlaying.value === true) {
    audio.pause()
    audio.currentTime = 0
    toggleIsAudioPlaying()
    return
  }
  toggleIsAudioPlaying()
  audio.play()
  if (props.sound.shouldRepeat) {
    audio.loop = true
  }
}

function toggleIsAudioPlaying() {
  isAudioPlaying.value = !isAudioPlaying.value
}
</script>

<style scoped lang="scss">
$size-tile: 112px;
.base-tile {
  @include prevent-select();
  @include flex(column, center, center, nowrap, $spacing-sm);
  i {
    font-size: $spacing-xxxl;
  }
  h2 {
    font-size: $spacing-lg;
    @include ellipsis();
  }
  width: $size-tile;
  height: $size-tile;
  border-radius: $border-xxl * 2;
  background-color: $background-tile-color;

  padding: $spacing-md;
  color: $gray-light;
  &--activated {
    color: $gray-light;
    background-color: $background-tile-activated-color;
  }
}
</style>
