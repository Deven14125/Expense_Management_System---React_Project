const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const BodyParser = require('body-parser')
const ExpenseRoutes = require('./Routes/ExpenseRoutes')

require('dotenv').config();

const app = express();
app.use(cors());

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

const PORT = process.env.MONGO_PORT;

const connectionString = "mongodb+srv://"+process.env.MONGO_USERNAME+":"+process.env.MONGO_PASSWORD+"@deven.bppkn.mongodb.net/Expense_System";

mongoose.connect(connectionString).then(()=>{
    console.log("Connected to MongoDB Database SuccessFully");
    
    app.use('/expense',ExpenseRoutes)
    
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})