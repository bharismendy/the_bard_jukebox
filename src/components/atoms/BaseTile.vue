<template>
  <div :class="computedClass" @click.stop="handlePlaySound">
    <div class="base-tile__name">
      <i :class="iconName"></i>
      <h2>{{ sound.name }}</h2>
    </div>
    <input
      v-model="soundVolume"
      type="range"
      min="0"
      max="1"
      step="0.01"
      @click.stop="handleVolumeUpdate"
      @inout.stop="handleVolumeUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISound } from "@/interfaces/sound.interface";
import {
  computed,
  ref,
  onMounted,
  onUnmounted,
  type PropType,
  type Ref,
  type ModelRef,
} from "vue";

defineOptions({ name: "BaseTile" });

const props = defineProps({
  sound: {
    type: Object as PropType<ISound>,
    required: true,
  },
});

const soundVolume: ModelRef<number> = defineModel("soundVolume", {
  required: false,
  default: 0,
});
const soundPath = new URL(
  `../../assets/sounds/${props.sound.soundName}`,
  import.meta.url
).href;
const audio = new Audio(soundPath);
const isAudioPlaying: Ref<boolean> = ref(false);

const iconName = computed(() => `fa-solid ${props.sound.iconName}`);
const computedClass = computed(() => {
  return {
    "base-tile": true,
    "base-tile--activated": isAudioPlaying.value,
  };
});

function handlePlaySound() {
  if (isAudioPlaying.value === true) {
    audio.pause();
    audio.currentTime = 0;
    toggleIsAudioPlaying();
    return;
  }
  toggleIsAudioPlaying();
  handleVolumeUpdate();
  audio.play();
  if (props.sound.shouldRepeat) {
    audio.loop = true;
  }
}

function toggleIsAudioPlaying() {
  isAudioPlaying.value = !isAudioPlaying.value;
}

function handleAudioEnded() {
  if (!props.sound.shouldRepeat) {
    toggleIsAudioPlaying();
  }
}

function handleVolumeUpdate() {
  const newVolume = Math.max(0, Math.min(1, soundVolume.value));
  audio.volume = newVolume;
}

onMounted(() => {
  audio.addEventListener("ended", handleAudioEnded);
  if (props.sound.soundVolume !== undefined) {
    soundVolume.value = props.sound.soundVolume;
  }
});

onUnmounted(() => {
  audio.removeEventListener("ended", handleAudioEnded);
});
</script>

<style scoped lang="scss">
$size-tile-width: 200px;
$size-tile-height: 110px;

.base-tile {
  &__name {
    width: 100%;
    padding: 0 $spacing-sm;
    @include flex(row, space-between, center, nowrap, $spacing-sm);
  }
  @include prevent-select();
  @include flex(column, center, center, nowrap, $spacing-sm);
  text-align: center;
  i {
    font-size: $spacing-xxxl;
  }

  h2 {
    font-size: $spacing-lg;
  }

  width: $size-tile-width;
  height: $size-tile-height;
  border: $border-xs solid #003049;
  background-color: $background-tile-color;
  padding: $spacing-md;
  color: $gray-light;
  box-shadow: #669bbc33 calc(-1 * $spacing-sm) $spacing-sm 0px 0px;

  &--activated {
    color: $gray-light;
    background-color: $background-tile-activated-color;
  }
}
</style>
