import express from "express";
import mongoose from "mongoose";
import Expenses from "../models/expense.js";

const router = express.Router();



export const getExpenses = async (req, res) => {
  try {
    const Expenses = await Expenses.find();
    res.status(200).json(Expenses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getOwnExpenses = async (req, res) => {
  const { myid } = req.params;

  try {
    const Expenses = await Expenses.find({ creator: myid });
    res.status(200).json(Expenses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const expend = await Expenses.findById(id);
    res.status(200).json(expend);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  const expend = req.body;

  const newExpensePost = new Expenses({
    ...expend,
    // creator: req.userId,
    updatedAt: new Date().toISOString(),
  });

  try {
    await newExpensePost.save();
    res.status(201).json(newExpensePost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { name, price, details } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No expend with id: ${id}`);

  const updatedExpense = {
    name,
    price,
    details,
    _id: id,
    updatedAt: new Date().toISOString(),
  };

  await Expenses.findByIdAndUpdate(id, updatedExpense, { new: true });

  res.json(updatedExpense);
};



export const deleteExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No expend with id: ${id}`);

  await Expenses.findByIdAndRemove(id);

  res.json({ message: "Expense deleted successfully." });
};

export default router;
