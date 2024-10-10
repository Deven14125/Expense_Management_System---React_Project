const express = require('express');
const router = express.Router();

const {getExpense,createExpense,updateExpense,deleteExpense} = require('../Controller/ExpenseController');

router.get('/getExpense',getExpense);

router.post('/addExpense', createExpense);

// Update an existing event

router.patch('/updateExpense/:productId', updateExpense);

// Delete an existing event

router.delete('/deleteExpense/:productId', deleteExpense);

module.exports = router;
