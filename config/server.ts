export default ({ env }) => ({
	host: env('STRAPI_DOMAIN', '0.0.0.0'),
	port: env.int('STRAPI_PORT', 1337),
	app: {
		keys: env.array('APP_KEYS'),
	},
	webhooks: {
		populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
	},
})
