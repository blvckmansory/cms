/**
 * @implements `Slider` controller
 */

import { factories } from '@strapi/strapi'

const uid = 'api::slider.slider'

type SlideResponse = {
	first: {
		id: string | number
		url: string
	}
	second: {
		id: string | number
		url: string
	}
	third: {
		id: string | number
		url: string
	}
}

const convertSliderResponse = (singleType: SlideResponse) => ({
	first: {
		id: singleType.first.id,
		url: singleType.first.url,
	},

	second: {
		id: singleType.second.id,
		url: singleType.second.url,
	},
	third: {
		id: singleType.third.id,
		url: singleType.third.url,
	},
})

type Slider = ReturnType<typeof convertSliderResponse>

export default factories.createCoreController(uid, ({ strapi }) => ({
	async custom(_ctx) {
		try {
			const data: SlideResponse = await strapi.query(uid).findOne({
				populate: {
					first: true,
					second: true,
					third: true,
				},
			})

			return { data: convertSliderResponse(data) }
		} catch (error) {
			return { data: null, error }
		}
	},
}))
