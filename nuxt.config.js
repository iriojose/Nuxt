
export default {
	mode: 'universal',
	head: {
		titleTemplate: '%s',
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: { color: '#fff' },
	css: [
	],
	buildModules: [
		'@nuxtjs/vuetify'
	],
	vuetify: {
		customVariables: ['~/assets/variables.scss']
	},
	modules: [
	],
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
  	}
}
