/**
 * @implements `Post` controller
 */

import { factories } from '@strapi/strapi'

import { parseQueryParams } from '../../utils'

const uid = 'api::post.post' as const

export default factories.createCoreController(uid, ({ strapi }) => ({
	async ids(_ctx) {
		try {
			const data = await strapi.db.connection
				.select('id')
				.from(strapi.getModel(uid).collectionName)

			return { data }
		} catch (error) {
			return { data: null, error }
		}
	},

	async single(ctx) {
		try {
			const queryParams = parseQueryParams(ctx.url)
			const id = Number.parseInt(queryParams.get('id') || '0')

			const data = await strapi.entityService.findOne(uid, id, {
				populate: {
					cover: { fields: ['url'] },
				},
				fields: ['id', 'title', 'description', 'content', 'createdAt', 'publishedAt'],
			})

			return {
				data,
			}
		} catch (error) {
			return { data: null, error }
		}
	},

	async preview(ctx) {
		try {
			const queryParams = parseQueryParams(ctx.url)

			const limit = Number.parseInt(queryParams.get('limit') || '2')
			const start = Number.parseInt(queryParams.get('start') || '0')
			const end = start + limit

			const total = await strapi.entityService.count(uid)

			const pagination = { limit, start, end: end > total ? total : end } as const

			const data = await strapi.entityService.findMany(uid, {
				...pagination,
				fields: ['id', 'title', 'description'],
				sort: { publishedAt: 'desc' },
				populate: {
					cover: { fields: ['url'] },
				},
			})

			return {
				data,
				meta: {
					pagination: {
						...pagination,
						total,
					},
				},
			}
		} catch (error) {
			return { data: null, error }
		}
	},

	async random(ctx) {
		try {
			const queryParams = parseQueryParams(ctx.url)
			const excludeId = queryParams.get('id') || 0
			const limit = Number.parseInt(queryParams.get('limit') || '2')

			const ids = (
				await strapi.db.connection
					.select('id')
					.from(strapi.getModel(uid).collectionName)
					.whereNotIn('id', [excludeId])
					.orderByRaw('RANDOM()')
					.limit(limit)
			).map((it) => it.id)

			const data = await strapi.entityService.findMany(uid, {
				populate: {
					cover: { fields: ['url'] },
				},
				fields: ['id', 'title', 'description'],
				filters: {
					id: {
						$in: ids,
					},
				},
			})

			return { data }
		} catch (error) {
			return { data: null, error }
		}
	},
}))
