import mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
    bookingDate: Date,
    customerId: mongoose.Types.ObjectId
});