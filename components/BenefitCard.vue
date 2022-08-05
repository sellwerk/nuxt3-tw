<template>
  <div class="flex flex-col justify-center items-center rounded shadow-lg p-4">
    <img class="m-0" :src="`/images/home/${props.icon}.svg`" />

    <h3>{{ props.title }}</h3>
    <p>{{ props.text }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});
</script>
