export default {
	routes: [
		{
			method: 'GET',
			path: '/slider',
			handler: 'slider.custom',
			config: {
				auth: false,
			},
		},
	],
}
