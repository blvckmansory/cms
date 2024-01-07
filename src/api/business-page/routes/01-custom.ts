export default {
	routes: [
		{
			method: 'GET',
			path: '/business-page',
			handler: 'business-page.custom',
			config: {
				auth: false,
			},
		},
	],
}
