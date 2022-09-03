import Mongoose from 'mongoose';
import MongooseService from '../../mongoose/service';
import { APIGatewayEvent } from 'aws-lambda';
import { Booking } from '../../mongoose/models';

export const handler = async (event: APIGatewayEvent) => {

    let customerId = event.headers['X-Auth']

    MongooseService.connect()

    const bookings = await Booking
        .find({ customerId: new Mongoose.Types.ObjectId(customerId) })

    let response = {
        statusCode: 200,
        body: JSON.stringify({
            mongoConnection: MongooseService.connectionString,
            customerId: customerId,
            bookings: bookings
        })
    };

    return response;
};
