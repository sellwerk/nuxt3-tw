<template>
  <button v-bind="$attrs" :class="classes"><slot /></button>
</template>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    validator(value: string) {
      return ["outlined", "text"].includes(value);
    },
  },
  size: {
    type: String,
    validator(value: string) {
      return ["sm", "lg"].includes(value);
    },
  },
});

const classes = computed(() => ({
  "rounded font-medium tracking-wide": true,
  "bg-primary-500 text-white hover:bg-primary-400 focus:bg-primary-600 ":
    !props.variant,
  "text-primary-500 hover:bg-primary-100 ": props.variant === "text",
  "border border-primary-500 text-primary-500 hover:border-primary-400 hover:bg-primary-100 ":
    props.variant === "outlined",
  "py-2 px-4": !props.size,
  "py-3 px-5": props.size === "lg",
}));
</script>
