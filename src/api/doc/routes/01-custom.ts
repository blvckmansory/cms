export default {
    routes: [
        {
            method: 'GET',
            path: '/docs/all',
            handler: 'doc.all',
            config: {
                auth: false,
            },
        },
    ],
};
