export default {
	routes: [
		{
			method: 'GET',
			path: '/post/ids',
			handler: 'post.ids',
			config: {
				auth: false,
			},
		},
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
			path: '/posts',
			handler: 'post.preview',
			config: {
				auth: false,
			},
		},
		{
			method: 'GET',
			path: '/post',
			handler: 'post.single',
			config: {
				auth: false,
			},
		},
	],
}
