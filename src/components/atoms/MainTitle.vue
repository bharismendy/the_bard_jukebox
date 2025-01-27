<template>
  <div class="main-title">
    <h1 class="main-title__title">{{ title }}</h1>
    <span class="main-title__description">{{ description }}</span>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'MainTitle' })
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
<style scoped lang="scss">
$color-main-title: #eab308;
.main-title {
  @include prevent-select();
  @include flex(column, center, center);
  font-family: 'MedievalSharp', cursive;
  color: $color-main-title;
  font-weight: bold;
  &__title {
    font-size: $spacing-xxxl * 3;
  }
  &__description {
    font-size: $spacing-xxxl * 1.5;
  }
}
</style>
