import { createApp } from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import Toast from 'vue-toastification';
import App from './App.vue';
import { router } from './routes';

createApp(App)
	.use(PiniaVuePlugin)
	.use(createPinia())
	.use(router)
	.use(Toast)
	.mount('#app');
