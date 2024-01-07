/**
 * business-page controller
 */

import { factories } from '@strapi/strapi'

const uid = 'api::business-page.business-page' as const

type BusinessPageResponse = {
	cover: {
		id: string | number
		url: string
	}
	contract: {
		id: string | number
		url: string
	}
}

const convertBusinessPageResponse = (singleType: BusinessPageResponse) => ({
	cover: {
		id: singleType.cover.id,
		url: singleType.cover.url,
	},
	contract: {
		id: singleType.contract.id,
		url: singleType.contract.url,
	},
})

type BusinessPage = ReturnType<typeof convertBusinessPageResponse>

export default factories.createCoreController(uid, ({ strapi }) => ({
	async custom(_ctx) {
		try {
			const data: BusinessPageResponse = await strapi.query(uid).findOne({
				populate: {
					cover: true,
					contract: true,
				},
			})

			return { data: convertBusinessPageResponse(data) }
		} catch (error) {
			return { data: null, error }
		}
	},
}))
