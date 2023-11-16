// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		serveStatic: true,
	},
	devtools: { enabled: true },
	app: {
		head: {
			title: 'AHS Microsite - Regeneron',
			link: [{ rel: 'icon', type: 'image/jpeg', href: '/favicon.jpeg' }],
		},
	},
	vite: {
		base: './',
	},
});
