import { APIGatewayEvent } from 'aws-lambda';
import mongoose from 'mongoose';
import { Booking } from '../../mongoose/models';

/* Localhost */
const connectionString = 'mongodb://host.docker.internal:27017/customer-portal'
const customerId = '6307f4ad76d3e0d85735eced'

/*
========================
    TODO
========================
> Extract mongo connection to service class
> Extract CRUD operations to IRepository
> Read customerId from HEADER
> Pagination for results

*/


export const handler = async (event: APIGatewayEvent) => {
    console.log('incoming event is', JSON.stringify(event));

    mongoose.connect(connectionString)
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Mongoose connected successfully");
    });






    const bookings = await Booking.find({ customerId: new mongoose.Types.ObjectId(customerId) });
    console.log(bookings);




    let response = {
        statusCode: 200,
        body: JSON.stringify({ mongoConnection: connectionString, bookings: bookings })
    };
    return response;
};
