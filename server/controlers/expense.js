import express from 'express';
import mongoose from 'mongoose';
import Expense from '../models/expense.js';

const router = express.Router();



export const getExpenses = async (req, res) => { 
    try {
        const expense= await Expense.find()
        res.status(200).json(expense);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getOwnExpenses = async (req, res) => { 
    const {myid } = req.params;

    try {
        const expense= await Expense.find({creator : myid})
        res.status(200).json(expense);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getExpense = async (req, res) => { 
    const { id } = req.params;

    try {
        const expense = await Expense.findById(id);
        res.status(200).json(expense);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createExpense = async (req, res) => {

    const expense = req.body;

    const newExpense = new Expense({ ...expense, creator: req.userId, updatedAt: new Date().toISOString() })

    try {
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateExpense = async (req, res) => {
    const { id } = req.params;
    const {name,cost,detail} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No expense with id: ${id}`);

        const updatedExpense = {name,cost,detail, _id: id, updatedAt: new Date().toISOString()};

    await Expense.findByIdAndUpdate(id, updatedExpense, { new: true });

    res.json(updatedExpense);
}

export const deleteExpense = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No expense with id: ${id}`);

    await Expense.findByIdAndRemove(id);

    res.json({ message: "Expense deleted successfully." });
}


export default router;
