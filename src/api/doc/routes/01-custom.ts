export default {
	routes: [
		{
			method: 'GET',
			path: '/docs',
			handler: 'doc.all',
			config: {
				auth: false,
			},
		},
	],
}
