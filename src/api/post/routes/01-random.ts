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
    ],
};
