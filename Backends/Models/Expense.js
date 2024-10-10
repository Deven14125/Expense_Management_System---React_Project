const mongoose = require('mongoose');

// Define the schema for expenses
const expenseSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,  // Ensures the productId is unique
        trim: true     // Removes extra spaces
    },
    productName: {
        type: String,
        required: true,
        trim: true     // Removes extra spaces
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,   // Optional image URL
    },
    description: {
        type: String,   // Optional description
    }
});

// Create the Expense model
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
