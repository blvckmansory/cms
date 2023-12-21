/**
 * post controller
 */

import {factories} from '@strapi/strapi'
import {parseQueryParams} from "../../car/controllers/car";

export default factories.createCoreController('api::post.post', ({strapi}) => ({

    async random(ctx) {
        const queryParams = parseQueryParams(ctx.url)
        const excludeId = queryParams.get('id')

        const uid = "api::post.post" as const;

        const ids = (
            await strapi.db.connection
                .select("id")
                .from(strapi.getModel(uid).collectionName).whereNotIn("id", [excludeId])
                .orderByRaw("RANDOM()")
                .limit(2)
        ).map(it => it.id)

        const result = await strapi.entityService.findMany(uid, {
            populate: "cover",
            fields: ['title', 'content', 'description'],
            filters: {
                id: {
                    $in: ids
                }
            },
        });

        return result
    },
}));
