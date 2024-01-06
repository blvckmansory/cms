/**
 * @implements `Car` controller
 */

import {factories} from '@strapi/strapi'

import {parseQueryParams} from '../../utils'

const uid = 'api::car.car' as const

export default factories.createCoreController(uid, ({strapi}) => ({
    async random(ctx) {
        try {
            const queryParams = parseQueryParams(ctx.url)
            const excludeId = queryParams.get('id') || 0

            const ids = (
                await strapi.db.connection
                    .select('id')
                    .from(strapi.getModel(uid).collectionName)
                    .whereNotIn('id', [excludeId])
                    .orderByRaw('RANDOM()')
                    .limit(3)
            ).map((it) => it.id)

            const data = await strapi.entityService.findMany(uid, {
                populate: {
                    carType: {
                        fields: ['id', 'name'],
                    },
                    previewImage: {
                        fields: ['url', 'alternativeText'],
                    },
                },
                fields: ['name', 'minMinuteRate', 'isWrapped'],
                filters: {
                    id: {
                        $in: ids,
                    },
                },
            })

            return {data}
        } catch (error) {
            return {data: null, error}
        }
    },

    async all(_ctx) {
        try {
            const data = await strapi.entityService.findMany(uid, {
                populate: {
                    carType: {
                        fields: ['id', 'name'],
                    },
                    previewImage: {
                        fields: ['id', 'url'],
                    },
                },
                fields: ['name', 'minMinuteRate', 'isHot', 'isNew', 'isWrapped'],
            })

            return {data}
        } catch (error) {
            return {data: null, error}
        }
    },

    async single(ctx) {
        try {
            const queryParams = parseQueryParams(ctx.url)
            const id = queryParams.get('id')

            if (!id) {
                throw new Error('NOT_FOUND')
            }

            const data = await strapi.entityService.findOne(uid, id, {
                populate: {
                    carType: {
                        fields: ['id', 'name'],
                    },
                    previewImage: {
                        fields: ['id', 'url'],
                    },
                    sideImages: {
                        populate: {},
                    },
                    rate: {
                        populate: {
                            ratesWithConditions: true,
                        },
                    },
                },
            })

            return {data}
        } catch (error) {
            return {data: null, error}
        }
    },

    async allIDs(_ctx) {
        try {
            const data = await strapi.entityService.findMany(uid, {
                fields: ['id'],
            })
            return {data}
        } catch (error) {
            return {data: null, error}
        }
    },

    async singleBrief(ctx) {
        try {
            const queryParams = parseQueryParams(ctx.url)
            const id = queryParams.get('id') || 0

            const data = await strapi.entityService.findOne(uid, id, {
                populate: {
                    carType: {
                        fields: ['id', 'name'],
                    },
                    previewImage: {
                        fields: ['id', 'url'],
                    },
                },
                fields: ['name', 'minMinuteRate'],
            })

            return {data}
        } catch (error) {
            return {data: null, error}
        }
    },

    async singleFull(ctx) {
        try {
            const queryParams = parseQueryParams(ctx.url)
            const id = queryParams.get('id') || 0

            const data = await strapi.entityService.findOne(uid, id, {
                populate: {
                    previewImage: {
                        fields: ['id', 'url'],
                    },
                    sideImages: {
                        fields: ['id', 'color'],
                        populate: {image: {fields: ['id', 'url']}},
                    },
                    minutes: {
                        fields: ['id', 'minuteRate', 'minuteRateParking', 'isResident'],
                    },
                    rate: {
                        fields: ['id', 'name'],
                        populate: {
                            ratesWithConditions: {
                                on: {
                                    'rate-types.minutes-and-kms': {
                                        fields: ['id', 'halfHourRate', 'hourRate', 'twoHoursRate'],
                                        populate: {
                                            conditions: {
                                                fields: [
                                                    'id',
                                                    'isResident',
                                                    'experienceMoreThanYear',
                                                    'overTwentyThreeYears',
                                                ],
                                            },
                                        },
                                    },
                                    'rate-types.hours-and-kms': {
                                        fields: ['id', 'threeHoursRate', 'sixHoursRate', 'nineHoursRate'],
                                        populate: {
                                            conditions: {
                                                fields: [
                                                    'id',
                                                    'isResident',
                                                    'experienceMoreThanYear',
                                                    'overTwentyThreeYears',
                                                ],
                                            },
                                        },
                                    },
                                    'rate-types.days-and-kms': {
                                        fields: ['id', 'dayRate', 'twoDaysRate', 'threeDaysRate', 'fiveDaysRate',
                                            'sevenDaysRate', 'fourteenDaysRate'],
                                        populate: {
                                            conditions: {
                                                fields: [
                                                    'id',
                                                    'isResident',
                                                    'experienceMoreThanYear',
                                                    'overTwentyThreeYears',
                                                ],
                                            },
                                        },
                                    },
                                },
                                fields: ['id'],
                            }
                        }
                    },
                    characteristics: {
                        fields: ['id'],
                        populate: {
                            mainFeatures: {
                                fields: ['id', 'name', 'description'],
                                populate: {icon: {fields: ['id', 'url']}},
                            },
                            otherFeatures: {fields: ['id', 'name']},
                        },
                    },
                    carType: {
                        fields: ['id', 'name'],
                    },
                },
                fields: ['name', 'minMinuteRate', 'isNew', 'isWrapped', 'isHot', 'kmCost'],
            })

            return {data}
        } catch (error) {
            return {data: null, error}
        }
    },
}))
