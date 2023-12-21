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
    ],
};
