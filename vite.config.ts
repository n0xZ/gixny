import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno } from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetIcons from '@unocss/preset-icons'
// https://vitejs.dev/config/
export default defineConfig({
	// test: { globals: true, environment: 'jsdom' },
	plugins: [
		vue(),
		Unocss({
			presets: [
				presetUno(),
				presetWebFonts({
					provider: 'google',
					fonts: {
						inter: 'Inter',
						lato: 'Lato',
						nanumGothic: 'Nanum Gothic',
						barlow: 'Barlow',
					},
				}),
				presetIcons(),
			],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
