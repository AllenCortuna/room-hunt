import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
    name: String,
    cost: String,
    creator: String,
    updatedAt: {
        type: Date,
        default: new Date(),
    },

});

var Expense = mongoose.model('Expense', expenseSchema);
export default Expense;
