<template>
  <div class="about">
    <h1>🎵 About The roll'n soundpad 🎲</h1>
    <p>
      Welcome to <strong>RPG Sound Board</strong>, a project designed to enhance
      your tabletop RPG sessions with immersive sounds and music! 🎶🔥
    </p>
    <h2>👨‍💻 Author</h2>
    <p>
      This project is developed and maintained by <strong>Bharis Mendy</strong>.
      🚀 Feel free to contribute or reach out for collaboration!
    </p>
    <h2>🔊 Sound Licenses</h2>
    <p>
      All sounds used in this project are sourced from
      <b>
        <a href="https://freesound.org/">Freesound</a>
      </b>
      and other platforms. Each sound has its respective license:
    </p>
    <ul>
      <li>
        🎹 <strong>Draft And Wind.Synth 1(2osc).wav</strong> by newlocknew —
        <a href="https://freesound.org/s/611258/">Link</a> — License:
        Attribution 4.0
      </li>
      <li>
        👣 <strong>Footsteps, Dry Leaves, E.wav</strong> by InspectorJ —
        <a href="https://freesound.org/s/329599/">Link</a> — License:
        Attribution 4.0
      </li>
      <li>
        💧 <strong>water_drip-echo2.wav</strong> by roscoetoon —
        <a href="https://freesound.org/s/27151/">Link</a> — License: Attribution
        3.0
      </li>
      <li>
        💧 <strong>Ewater_drip-echo.mp3</strong> by roscoetoon —
        <a href="https://freesound.org/s/26921/">Link</a> — License: Attribution
        3.0
      </li>
      <li>
        🔥 <strong>fire_cracking_01.mp3</strong> by bokal —
        <a href="https://freesound.org/s/559580/">Link</a> — License: Creative
        Commons 0
      </li>
      <li>
        🌊 <strong>Water stream 3</strong> by Kolezan —
        <a href="https://freesound.org/s/132046/">Link</a> — License:
        Attribution 4.0
      </li>
      <li>
        🔩 <strong>Metal warble</strong> by lori.mortimer —
        <a href="https://freesound.org/s/739385/">Link</a> — License: Creative
        Commons 0
      </li>
      <li>
        💥 <strong>quake and break.wav</strong> by cheetahzbrain —
        <a href="https://freesound.org/s/431859/">Link</a> — License: Creative
        Commons 0
      </li>
      <li>
        🏞 <strong>Rolling Rocks 06</strong> by Uminari —
        <a href="https://freesound.org/s/389724/">Link</a> — License:
        Attribution 4.0
      </li>
      <li>
        🚪 <strong>old door screeching.wav</strong> by Tomlija —
        <a href="https://freesound.org/s/98152/">Link</a> — License: Attribution
        3.0
      </li>
      <li>
        🚪 <strong>Opening a heavy door (and bounding in)</strong> by pfranzen —
        <a href="https://freesound.org/s/262705/">Link</a> — License:
        Attribution 4.0
      </li>
      <li>
        🏹 <strong>Arrow.mp3</strong> by thecrow_br —
        <a href="https://freesound.org/s/574044/">Link</a> — License: Creative
        Commons 0
      </li>
      <li>
        💥 <strong>Spiketrap.wav</strong> by Deathscyp —
        <a href="https://freesound.org/s/443806/">Link</a> — License: Creative
        Commons 0
      </li>
      <li>
        🔥 <strong>Hot Object Quench</strong> by DJT4NN3R —
        <a href="https://freesound.org/s/484158/">Link</a> — License:
        Attribution NonCommercial 4.0
      </li>
      <li>
        🐶 <strong>Distant howling pupper</strong> by sandboks —
        <a href="https://freesound.org/s/503516/">Link</a> — License: Creative
        Commons 0
      </li>
      <li>
        🎶 <strong>Mystery's Embrace</strong> by Universfield —
        <a href="https://freesound.org/s/754505/">Link</a> — License:
        Attribution 4.0
      </li>
      <li>
        🎵 <strong>Viking/Medieval Theme</strong> by M-Murray —
        <a href="https://freesound.org/s/723202/">Link</a> — License:
        Attribution NonCommercial 4.0
      </li>
      <li>
        ⚔️ <strong>Epoch of War 5</strong> by RAME - War Victory Fight Music
        Loop by RokZRooM — <a href="https://freesound.org/s/579300/">Link</a> —
        License: Attribution 4.0
      </li>
      <li>
        🥊 <strong>Punching and Uppercut.wav</strong> by 18hiltc —
        <a href="https://freesound.org/s/198610/">Link</a> — License:
        Attribution 4.0
      </li>
      <li>
        🥊 <strong>punch.wav</strong> by Ekokubza123 —
        <a href="https://freesound.org/s/104183/">Link</a> — License: Creative
        Commons 0
      </li>
      <li>
        🥊 <strong>punches_and_slaps.wav</strong> by Syna-Max —
        <a href="https://freesound.org/s/43586/">Link</a> — License: Attribution
        NonCommercial 4.0
      </li>
      <li>
        🍻 <strong>My Tavern 1.wav</strong> by ralexpdx —
        <a href="https://freesound.org/s/321220/">Link</a> — License:
        Attribution 4.0
      </li>
      <li>
        🏰 <strong>Medieval Tune - Knight's Castle.wav</strong> by
        gertraut_hecher — <a href="https://freesound.org/s/568776/">Link</a> —
        License: Attribution NonCommercial 4.0
      </li>
      <li>
        🔔 <strong>Old Church Bell.wav</strong> by dsp9000 —
        <a href="https://freesound.org/s/76405/">Link</a> — License: Creative
        Commons 0
      </li>
      <li>
        🎮 <strong>RPG Maker's Kit 1</strong> by TheAmbientFort —
        <a href="https://theambientfort.itch.io/rpgmakerskit1">Link</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: "aboutView" });
</script>

<style scoped lang="scss">
.about {
  @include flex(column, center, center, wrap, $spacing-xxl);
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: $background-color;
  color: $gray-light;
}
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}
p,
ul {
  font-size: 1.2rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
}
</style>
