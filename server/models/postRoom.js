import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    hotelName: String,
    name: String,
    price: String,
    creator: String,
    category: [String],
    image: { type: [String], required: true },
    roomStatus: {
        type: Boolean,
        default: false
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },

});

var RoomPost = mongoose.model('RoomPost', roomSchema);
export default RoomPost;
