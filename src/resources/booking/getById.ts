import Mongoose from 'mongoose';
import MongooseService from '../../mongoose/service';
import { APIGatewayEvent } from 'aws-lambda';
import { Booking } from '../../mongoose/models';

export const handler = async (event: APIGatewayEvent) => {

    let bookingId = event.pathParameters['bookingId']

    MongooseService.connect()

    const booking = await Booking
        .find({ _id: new Mongoose.Types.ObjectId(bookingId) })
        .populate({
            path: 'customerId',
            select: 'firstname surname'
        })

    let response = {
        statusCode: 200,
        body: JSON.stringify({
            mongoConnection: MongooseService.connectionString,
            bookingId: bookingId,
            booking: booking
        })
    };

    return response;
};
