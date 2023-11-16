// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			title: 'AHS Microsite - Regeneron',
			link: [{ rel: 'icon', type: 'image/jpeg', href: '/favicon.jpeg' }],
		},
	},
});
