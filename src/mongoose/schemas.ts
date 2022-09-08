import Mongoose from 'mongoose';

export const BookingSchema = new Mongoose.Schema({
    bookingDate: Date,
    customerId: { type: Mongoose.Types.ObjectId, ref: 'Customer' }
});

export const CustomerSchema = new Mongoose.Schema({
    firstname: String,
    surname: String
});

export const PropertySchema = new Mongoose.Schema({
    postcode: String,
    houseNumber: Number,
    propertyFeatures: Array,
    propertySales: Array
});