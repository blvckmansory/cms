export default {
	routes: [
		{
			method: 'GET',
			path: '/car-type',
			handler: 'car-type.all',
			config: {
				auth: false,
			},
		},
	],
}
