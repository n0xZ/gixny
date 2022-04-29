import * as path from 'path'
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	test: { globals: true, environment: 'jsdom' },
	plugins: [vue()],
	resolve:{
		alias:{
			'@': path.resolve(__dirname, 'src')
		}
	}
});
