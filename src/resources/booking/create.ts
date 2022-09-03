import Mongoose from 'mongoose';
import MongooseService from '../../mongoose/service';
import { APIGatewayEvent } from 'aws-lambda';
import { Booking } from '../../mongoose/models';

export const handler = async (event: APIGatewayEvent) => {

    let body = JSON.parse(event.body)

    MongooseService.connect()

    let newBooking = new Booking(body);
    await newBooking.save()

    let response = {
        statusCode: 200,
        body: JSON.stringify({
            mongoConnection: MongooseService.connectionString,
            body: body,
            newBookingId: newBooking._id
        })
    };

    return response;
};
