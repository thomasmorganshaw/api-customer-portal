import MongooseService from '../../mongoose/service';
import { APIGatewayEvent } from 'aws-lambda';
import { Property, Postcode } from '../../mongoose/models';
import { ok } from '../../helpers/responses';

export const handler = async (event: APIGatewayEvent) => {

    const _postcode = event.pathParameters['postcode']

    MongooseService.connect()

    let searchQuery = Property.aggregate([
        {
            $match: {
                postcode: _postcode
            }
        },
        {
            $lookup: {
                from: "propertySales",
                localField: "_id",
                foreignField: "propertyId",
                pipeline: [
                    { $sort: { dateOfSale: -1 } },
                    { $limit: 1 },
                    { $project: { _id: 0, propertyId: 0 } }
                ],
                as: "latestPropertySale"
            }
        },
        {
            $project: {
                postcode: 1,
                houseNumber: 1,
                houseName: 1,
                addressLine1: 1,
                addressLine2: 1,
                addressLine3: 1,
                town: 1,
                county: 1,
                epcRating: 1,
                propertyFeatures: 1,
                latestPropertySale: 1
            }
        }
    ])

    let postcodeSearch = Postcode.findOne(
        { Postcode: _postcode },
        { _id: 0, Postcode: 1, Latitude: 1, Longitude: 1 }
    )

    let promiseResult = await Promise.all([
        postcodeSearch,
        searchQuery
    ])

    return ok({
        postcodeLocation: promiseResult[0],
        propertySales: promiseResult[1]
    });

};
