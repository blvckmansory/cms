export default {
	routes: [
		{
			method: 'GET',
			path: '/hints',
			handler: 'hint.all',
			config: {
				auth: false,
			},
		},
	],
}
