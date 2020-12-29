import mongoose from 'mongoose';

const ReviewSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const review = mongoose.model('Reviews', ReviewSchema);

export default review;