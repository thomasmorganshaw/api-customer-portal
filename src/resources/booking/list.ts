import Mongoose from 'mongoose';
import MongooseService from '../../mongoose/service';
import { APIGatewayEvent } from 'aws-lambda';
import { Booking } from '../../mongoose/models';

export const handler = async (event: APIGatewayEvent) => {

    let authToken = event.headers['X-Auth']

    MongooseService.connect()

    const bookings = await Booking
        .find({ customerId: new Mongoose.Types.ObjectId(authToken) })

    let response = {
        statusCode: 200,
        body: JSON.stringify({
            mongoConnection: MongooseService.connectionString,
            customerId: authToken,
            bookings: bookings
        })
    };

    return response;
};
