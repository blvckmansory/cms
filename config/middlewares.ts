export default [
	'strapi::errors',
	'strapi::security',
	'strapi::cors',
	'strapi::logger',
	'strapi::query',
	{
		name: "strapi::body",
		config: {
			formLimit: "100mb", // modify form body
			jsonLimit: "100mb", // modify JSON body
			textLimit: "100mb", // modify text body
			formidable: {
				maxFileSize: 100 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
			},
		},
	},
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
]
