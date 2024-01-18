export default ({ env }) => ({
	host: env('STRAPI_DOMAIN', '127.0.0.1'),
	port: env.int('STRAPI_PORT', 1337),
	app: {
		keys: env.array('APP_KEYS'),
	},
	webhooks: {
		populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
	},
	url: env('STRAPI_URL'),
})
