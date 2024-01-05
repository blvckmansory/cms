/**
 * @implements `CarType` controller
 */

import { factories } from '@strapi/strapi'

const uid = 'api::car-type.car-type' as const

export default factories.createCoreController(uid, ({ strapi }) => ({
	async all(_ctx) {
		try {
			const data = await strapi.entityService.findMany(uid, {
				populate: {
					image: { fields: ['url'] },
				},
				fields: ['id', 'name'],
			})

			return { data }
		} catch (error) {
			return { data: null, error }
		}
	},
}))
