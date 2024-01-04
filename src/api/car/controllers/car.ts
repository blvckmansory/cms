/**
 * @implements `Car` controller
 */

import { URLSearchParams } from 'node:url'

import { factories } from '@strapi/strapi'

const uid = 'api::car.car' as const

export const parseQueryParams = (url: string): URLSearchParams => {
	const queryString = url.split('?').at(-1) || ''
	return new URLSearchParams(queryString)
}

export default factories.createCoreController(uid, ({ strapi }) => ({
	async random(ctx) {
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

		const result = await strapi.entityService.findMany(uid, {
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

		return result
	},

	async all(_ctx) {
		try {
			const ids = await strapi.db.connection
				.select('id')
				.from(strapi.getModel(uid).collectionName)

			console.log(ids)

			const result = await strapi.entityService.findMany(uid, {
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
						$in: [1],
					},
				},
			})

			return { data: result }
		} catch (error) {
			return { error }
		}
	},
}))
