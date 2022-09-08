import Mongoose from 'mongoose';
import {
    BookingSchema,
    CustomerSchema,
    PropertySchema
} from './schemas';

export const Booking = Mongoose.model('Booking', BookingSchema);

export const Customer = Mongoose.model('Customer', CustomerSchema);

export const Property = Mongoose.model('Property', PropertySchema);