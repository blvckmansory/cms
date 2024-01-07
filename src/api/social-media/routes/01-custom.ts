export default {
	routes: [
		{
			method: 'GET',
			path: '/socials',
			handler: 'social-media.all',
			config: {
				auth: false,
			},
		},
	],
}
