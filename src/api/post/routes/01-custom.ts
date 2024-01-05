export default {
	routes: [
		{
			method: 'GET',
			path: '/posts/random',
			handler: 'post.random',
			config: {
				auth: false,
			},
		},
		{
			method: 'GET',
			path: '/posts/preview',
			handler: 'post.preview',
			config: {
				auth: false,
			},
		},
		{
			method: 'GET',
			path: '/posts/single',
			handler: 'post.single',
			config: {
				auth: false,
			},
		},
	],
}
