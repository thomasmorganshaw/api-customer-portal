import Mongoose from 'mongoose';

const BookingSchema = new Mongoose.Schema({
    bookingDate: Date,
    customerId: { type: Mongoose.Types.ObjectId, ref: 'Customer' }
});
export const Booking = Mongoose.model('Booking', BookingSchema);

const CustomerSchema = new Mongoose.Schema({
    firstname: String,
    surname: String
});
export const Customer = Mongoose.model('Customer', CustomerSchema);

const PropertySchema = new Mongoose.Schema({
    postcode: String,
    houseNumber: Number,
    propertyFeatures: Array,
    propertySales: Array
});
export const Property = Mongoose.model('Property', PropertySchema);

const PostcodeSchema = new Mongoose.Schema({
    Postcode: String,
    Latitude: Number,
    Longitude: Number,
});
export const Postcode = Mongoose.model('Postcode', PostcodeSchema);