import MongooseService from '../../mongoose/service';
import { APIGatewayEvent } from 'aws-lambda';
import { Property } from '../../mongoose/models';

export const handler = async (event: APIGatewayEvent) => {

    MongooseService.connect()

    let results = await Property.aggregate([
        {
            $match: {
                postcode: "SK8 5RX"
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
                propertyFeatures: 1,
                latestPropertySale: 1
            }
        }
    ])

    let response = {
        statusCode: 200,
        body: JSON.stringify(results)
    };

    return response;
};
