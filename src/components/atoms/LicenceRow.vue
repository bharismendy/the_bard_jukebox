<template>
  {{ licence.icon }} <strong>{{ licence.name }}</strong> by
  {{ licence.author }} — <a :href="licence.url" target="_blank">Link</a> —
  License:
  {{ licence.license }}
</template>

<script setup lang="ts">
import type { ISoundLicence } from "@/interfaces/soundLicence.interface";
import type { PropType } from "vue";

defineOptions({ name: "LicenceRow" });
defineProps({
  licence: {
    type: Object as PropType<ISoundLicence>,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
