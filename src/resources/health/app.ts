import { APIGatewayEvent } from 'aws-lambda';
import MongooseService from '../../mongoose/service';

export const handler = async (event: APIGatewayEvent) => {
    console.log('incoming event is', JSON.stringify(event));
    let response = {
        statusCode: 200,
        body: JSON.stringify({
            mongoConnection: MongooseService.connectionString,
            message: 'Healthy'
        })
    };
    return response;
};
