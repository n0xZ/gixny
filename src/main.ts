import { createApp } from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import App from './App.vue';
import { router } from './routes';

createApp(App)
	.use(PiniaVuePlugin)
	.use(createPinia())
	.use(router)

	.mount('#app');
