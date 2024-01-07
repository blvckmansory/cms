/**
 * home-page controller
 */

import { factories } from '@strapi/strapi'

const uid = 'api::home-page.home-page' as const

type HomePageResponse = {
	cover: {
		id: string | number
		url: string
	}
	description: string
}

const converHomePageResponse = (singleType: HomePageResponse) => ({
	cover: {
		id: singleType.cover.id,
		url: singleType.cover.url,
	},
	description: singleType.description,
})

type HomePage = ReturnType<typeof converHomePageResponse>

export default factories.createCoreController(uid, ({ strapi }) => ({
	async custom(_ctx) {
		try {
			const data: HomePageResponse = await strapi.query(uid).findOne({
				populate: {
					cover: true,
				},
			})

			return { data: converHomePageResponse(data) }
		} catch (error) {
			return { data: null, error }
		}
	},
}))
