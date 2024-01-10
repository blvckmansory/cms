/**
 * @implements `Hint` controller
 */

import { factories } from '@strapi/strapi'

import { parseQueryParams } from '../../utils'

const uid = 'api::hint.hint' as const

type HintType = 'HINT' | 'INSTRUCTION' | 'FRIENDSHIP_RULE'

export default factories.createCoreController(uid, ({ strapi }) => ({
	async all(ctx) {
		try {
			const queryParams = parseQueryParams(ctx.url)
			const hintType = queryParams.get('type') as HintType

			const data = await strapi.entityService.findMany(uid, {
				fields: [
					'id',
					'title',
					'content',
					'videoURL',
					'hintType',
					'createdAt',
					'publishedAt',
				],
				sort: { createdAt: 'desc' },
				filters: {
					hintType: {
						$eq: hintType,
					},
				},
			})

			return { data }
		} catch (error) {
			return { data: null, error }
		}
	},
}))
