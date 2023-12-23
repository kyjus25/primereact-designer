<script setup>
import { usePrimeVue } from 'primevue/config';
import Button from 'primevue/button';
import Lara from 'primevue/passthrough/tailwind';
const primevue = usePrimeVue();
primevue.config.pt = Lara;
</script>
<template>
  <Button label="Submit" />
</template>
