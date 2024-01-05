export default {
    routes: [
        {
            method: 'GET',
            path: '/cars/randomW',
            handler: 'car.random',
            config: {
                auth: false,
            },
        },
    ],
};
