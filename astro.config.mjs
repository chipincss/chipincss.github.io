// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://chipincss.ttnrtsite.io",
	integrations: [
		starlight({
			title: 'ChipinCSS documentation',
			description: 'Our website and documentation on our CSS framework!',
			social: {
				github: 'https://github.com/chipincss',
			},
			logo: {
				src: './src/assets/logo.png'
			},
			editLink: {
				baseUrl: "https://github.com/chipincss/chipincss.github.io/edit/main/"
			},
			sidebar: [
			],
		}),
	],
});
