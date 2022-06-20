import express from "express";
import mongoose from "mongoose";
import ExpendPost from "../models/postExpend.js";

const router = express.Router();



export const getExpends = async (req, res) => {
  try {
    const ExpendPost = await ExpendPost.find();
    res.status(200).json(ExpendPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getOwnExpends = async (req, res) => {
  const { myid } = req.params;

  try {
    const ExpendPost = await ExpendPost.find({ creator: myid });
    res.status(200).json(ExpendPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getExpend = async (req, res) => {
  const { id } = req.params;

  try {
    const expend = await ExpendPost.findById(id);
    res.status(200).json(expend);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExpend = async (req, res) => {
  const expend = req.body;

  const newExpendPost = new ExpendPost({
    ...expend,
    creator: req.userId,
    updatedAt: new Date().toISOString(),
  });

  try {
    await newExpendPost.save();
    res.status(201).json(newExpendPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const updateExpend = async (req, res) => {
  const { id } = req.params;
  const { name, price, details } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No expend with id: ${id}`);

  const updatedExpend = {
    name,
    price,
    details,
    _id: id,
    updatedAt: new Date().toISOString(),
  };

  await ExpendPost.findByIdAndUpdate(id, updatedExpend, { new: true });

  res.json(updatedExpend);
};



export const deleteExpend = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No expend with id: ${id}`);

  await ExpendPost.findByIdAndRemove(id);

  res.json({ message: "Expend deleted successfully." });
};

export default router;
