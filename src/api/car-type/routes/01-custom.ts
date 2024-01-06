export default {
	routes: [
		{
			method: 'GET',
			path: '/car-type/all',
			handler: 'car-type.all',
			config: {
				auth: false,
			},
		},
	],
}
