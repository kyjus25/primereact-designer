import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Lara from 'primevue/passthrough/tailwind';

export default (app: App) => {
  app.use(PrimeVue);
};
