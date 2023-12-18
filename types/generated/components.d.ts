import type { Schema, Attribute } from '@strapi/strapi'

export interface CarInfoSideImage extends Schema.Component {
	collectionName: 'components_car_info_side_images'
	info: {
		displayName: 'sideImage'
		description: ''
	}
	attributes: {
		color: Attribute.String &
			Attribute.Required &
			Attribute.CustomField<'plugin::color-picker.color'>
		image: Attribute.Media & Attribute.Required
	}
}

export interface RateTypesDaysAndKms extends Schema.Component {
	collectionName: 'components_rate_types_days_and_kms'
	info: {
		displayName: 'daysAndKms'
		description: ''
	}
	attributes: {
		dayRate: Attribute.Float
		twoDaysRate: Attribute.Float
		threeDaysRate: Attribute.Float
		fiveDaysRate: Attribute.Float
		sevenDaysRate: Attribute.Float
		fourteenDaysRate: Attribute.Float
	}
}

export interface RateTypesHoursAndKms extends Schema.Component {
	collectionName: 'components_rate_types_hours_and_kms'
	info: {
		displayName: 'hoursAndKms'
		description: ''
	}
	attributes: {
		threeHoursRate: Attribute.Float
		sixHoursRate: Attribute.Float
		nineHoursRate: Attribute.Float
	}
}

export interface RateTypesMinutesAndKms extends Schema.Component {
	collectionName: 'components_rate_types_minutes_and_kms'
	info: {
		displayName: 'minutesAndKms'
		description: ''
	}
	attributes: {
		halfHourRate: Attribute.Float
		hourRate: Attribute.Float
		twoHoursRate: Attribute.Float
	}
}

export interface RateTypesMinutes extends Schema.Component {
	collectionName: 'components_rate_types_minutes'
	info: {
		displayName: 'minutes'
		description: ''
	}
	attributes: {
		minuteRate: Attribute.Float & Attribute.Required
		minuteRateParking: Attribute.Float & Attribute.Required
		isResident: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>
	}
}

export interface RatesInfoRateTypesWithConditions extends Schema.Component {
	collectionName: 'components_rates_info_rate_types_with_conditions'
	info: {
		displayName: 'rateTypesWithConditions'
	}
	attributes: {
		isResident: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>
		experienceMoreThanYear: Attribute.Boolean
		overTwentyThreeYears: Attribute.Boolean
		minutesAndKms: Attribute.Component<'rate-types.minutes-and-kms'>
		hoursAndKms: Attribute.Component<'rate-types.hours-and-kms'>
		daysAndKms: Attribute.Component<'rate-types.days-and-kms'>
	}
}

export interface SharedMetaSocial extends Schema.Component {
	collectionName: 'components_shared_meta_socials'
	info: {
		displayName: 'metaSocial'
		icon: 'project-diagram'
	}
	attributes: {
		socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> & Attribute.Required
		title: Attribute.String &
			Attribute.Required &
			Attribute.SetMinMaxLength<{
				maxLength: 60
			}>
		description: Attribute.String &
			Attribute.Required &
			Attribute.SetMinMaxLength<{
				maxLength: 65
			}>
		image: Attribute.Media
	}
}

export interface SharedSeo extends Schema.Component {
	collectionName: 'components_shared_seos'
	info: {
		displayName: 'seo'
		icon: 'search'
	}
	attributes: {
		metaTitle: Attribute.String &
			Attribute.Required &
			Attribute.SetMinMaxLength<{
				maxLength: 60
			}>
		metaDescription: Attribute.String &
			Attribute.Required &
			Attribute.SetMinMaxLength<{
				minLength: 50
				maxLength: 160
			}>
		metaImage: Attribute.Media
		metaSocial: Attribute.Component<'shared.meta-social', true>
		keywords: Attribute.Text
		metaRobots: Attribute.String
		structuredData: Attribute.JSON
		metaViewport: Attribute.String
		canonicalURL: Attribute.String
	}
}

declare module '@strapi/types' {
	export module Shared {
		export interface Components {
			'car-info.side-image': CarInfoSideImage
			'rate-types.days-and-kms': RateTypesDaysAndKms
			'rate-types.hours-and-kms': RateTypesHoursAndKms
			'rate-types.minutes-and-kms': RateTypesMinutesAndKms
			'rate-types.minutes': RateTypesMinutes
			'rates-info.rate-types-with-conditions': RatesInfoRateTypesWithConditions
			'shared.meta-social': SharedMetaSocial
			'shared.seo': SharedSeo
		}
	}
}
