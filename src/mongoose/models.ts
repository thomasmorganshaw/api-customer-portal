import Mongoose from 'mongoose';
import { BookingSchema, CustomerSchema } from './schemas';

export const Booking = Mongoose.model('Booking', BookingSchema);

const Customer = Mongoose.model('Customer', CustomerSchema);