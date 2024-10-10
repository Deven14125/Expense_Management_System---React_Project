const Expense  = require('../Models/Expense');

const getExpense = async (req, res) => {
    try {
        const expense = await Expense.find();
        res.status(200).json(expense); // Use json() for sending response as JSON
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const  createExpense = async (req,res) => {
    const {productId,productName,price,imageUrl,description} = req.body;
    
    if (!productId || !productName || !price || !imageUrl || !description) {
        return res.status(400).send("All fields are required");
    }
    
    const expense = new Expense({productId,productName,price,imageUrl,description});
    
    try {
        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    } catch (error) {
        console.error("Error creating Expense:", error); 
        res.status(500).send("Internal Server Error");
    }
}


const updateExpense = async (req, res) => {
    try {
        const findExpense = await Expense.findOne({ productId: req.params.productId });

        if (!findExpense) {
            return res.status(404).send('No Expense found with that Name');
        }
        
        const upExpense = await Expense.updateOne({ productId: req.params.productId }, { $set: req.body });
        res.status(200).json({ message: "Expense Updated Successfully", upExpense });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

// Delete expense
const deleteExpense = async (req, res) => {
    try {
        const findExpense = await Expense.findOneAndDelete({ productId: req.params.productId });
        if (!findExpense) {
            return res.status(404).send('No Expense found with that Name');
        }

        res.status(200).json({ message: "Expense Deleted Successfully", findExpense });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};



module.exports = {getExpense,createExpense, updateExpense, deleteExpense};