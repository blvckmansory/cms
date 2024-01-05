export default {
    routes: [
        {
            method: 'GET',
            path: '/car-types/all',
            handler: 'car-type.all',
            config: {
                auth: false,
            },
        },
    ],
};
