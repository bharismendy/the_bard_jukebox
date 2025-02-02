<template>
  <div class="about">
    <div class="about__tilte">
      <RouterLink to="/" class="about__tilte__back">
        <i class="fa-solid fa-arrow-left"></i>
      </RouterLink>
      <MainTitle title="About The roll'n soundpad" />
    </div>

    <p>
      Welcome to <strong>🎲 RPG Sound Board 🎲</strong>, a project designed to
      enhance your tabletop RPG sessions with immersive sounds and music! 🎶🔥
    </p>
    <h2>👨‍💻 Author</h2>
    <p>
      This project is developed and maintained by
      <strong>Brice Harismendy</strong>.
    </p>
    <p>🚀 Feel free to contribute or reach out for collaboration!</p>
    <h2>🔊 Sound Licenses</h2>
    <p>
      All sounds used in this project are sourced from
      <b>
        <a href="https://freesound.org/">Freesound</a>
      </b>
      and other platforms. Each sound has its respective license:
    </p>
    <ul>
      <li v-for="(licence, index) in soundLicenses" :key="index">
        <LicenceRow :licence />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: "aboutView" });
import LicenceRow from "@/components/atoms/LicenceRow.vue";
import { soundLicenses } from "@/constants/LicenceList";
import MainTitle from "@/components/atoms/MainTitle.vue";
</script>

<style scoped lang="scss">
.about {
  &__tilte {
    @include flex(row, center, center, wrap, $spacing-xxl);
    &__back {
      @include flex(row, center, center, wrap, $spacing-xxl);
      width: $spacing-xxxl * 2;
      height: $spacing-xxxl * 2;
      border: $border-sm solid $gray-light;
      border-radius: $border-xxxl * 4;
    }
  }

  @include flex(column, center, center, wrap, $spacing-xxl);
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: $background-color;
  color: $gray-light;
}
h1 {
  font-size: $spacing-xxxl;
  margin: $spacing-md 0;
}
h2 {
  font-size: $spacing-xl;
  margin-top: $spacing-xl;
}
p,
ul {
  font-size: $spacing-lg;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: $spacing-xs 0;
}
</style>
