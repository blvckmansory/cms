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
            path: '/cars/ids',
            handler: 'car.allIDs',
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
        {
            method: 'GET',
            path: '/cars/brief',
            handler: 'car.singleBrief',
            config: {
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/cars/full',
            handler: 'car.singleFull',
            config: {
                auth: false,
            },
        },
    ],
}
