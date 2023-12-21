/**
 * car controller
 */

import {factories} from '@strapi/strapi'
import {URLSearchParams} from "node:url";

export const parseQueryParams = (url: string): URLSearchParams => {
    const queryString = url.split('?').at(-1) || ''
    return new URLSearchParams(queryString)
}

export default factories.createCoreController('api::car.car', ({strapi}) => ({

    async random(ctx) {
        const queryParams = parseQueryParams(ctx.url)
        const excludeId = queryParams.get('id')

        const uid = "api::car.car" as const;

        const ids = (
            await strapi.db.connection
                .select("id")
                .from(strapi.getModel(uid).collectionName).whereNotIn("id", [excludeId])
                .orderByRaw("RANDOM()")
                .limit(3)
        ).map(it => it.id)

        const result = await strapi.entityService.findMany(uid, {
            populate: "previewImage",
            fields: ['name', 'minMinuteRate'],
            filters: {
                id: {
                    $in: ids
                }
            },
        });

        return result
    },
}));
