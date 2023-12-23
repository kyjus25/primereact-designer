<script setup>
const props = defineProps(['text']);
</script>
<template>
  <h1 className="text-black/50 text-lg mb-1 mt-4">{{ props.text }}</h1>
</template>
