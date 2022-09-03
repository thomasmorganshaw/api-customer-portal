import { BookingSchema } from './schemas';
import mongoose from 'mongoose';

export const Booking = mongoose.model('booking', BookingSchema);