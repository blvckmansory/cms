export default {
	routes: [
		{
			method: 'GET',
			path: '/cars/random',
			handler: 'car.random',
			config: {
				auth: false,
			},
		},
		{
			method: 'GET',
			path: '/cars',
			handler: 'car.all',
			config: {
				auth: false,
			},
		},
		{
			method: 'GET',
			path: '/cars/single',
			handler: 'car.single',
			config: {
				auth: false,
			},
		},
	],
}
