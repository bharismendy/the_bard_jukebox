<template>
  <div class="soundpad-layout">
    <MainTitle
      title="The Bard’s Jukebox"
      description="Enhance your adventure"
    />
    <SoundGrid />
  </div>
</template>

<script lang="ts" setup>
import MainTitle from "@/components/atoms/MainTitle.vue";
import SoundGrid from "@/components/molecules/SoundGrid.vue";

defineOptions({ name: "SoundpadLayout" });
</script>

<style scoped lang="scss">
.soundpad-layout {
  width: 100%;
  @include flex(column, center, center, nowrap, $spacing-xxxl * 3);
}
</style>
