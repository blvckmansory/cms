/**
 * social-media controller
 */

import { factories } from '@strapi/strapi'

const uid = 'api::social-media.social-media' as const

export default factories.createCoreController(uid, ({ strapi }) => ({
	async all(_ctx) {
		try {
			const data = await strapi.entityService.findMany(uid, {
				populate: {
					icon: { fields: ['url'] },
				},
				fields: ['id', 'name', 'href'],
			})

			return { data }
		} catch (error) {
			return { data: null, error }
		}
	},
}))
