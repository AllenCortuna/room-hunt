import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
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

var Expense = mongoose.model('Expense', expenseSchema);
export default Expense;
