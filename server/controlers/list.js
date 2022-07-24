import express from "express";
import mongoose from "mongoose";
import Lists from "../models/list.js";

const router = express.Router();



export const getLists = async (req, res) => {
  try {
    const lists = await Lists.find();
    res.status(200).json(lists);
    console.log("getLists ok");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getOwnLists = async (req, res) => {
  const { myid } = req.params;

  try {
    const lists = await Lists.find({ creator: myid });
    res.status(200).json(lists);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

 
export const getList = async (req, res) => {
  const { id } = req.params;

  try {
    const list = await Lists.findById(id);
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });

  }
};

export const createList = async (req, res) => {
  const list = req.body;

  const newListPost = new Lists({
    ...list,
    creator: req.userId,
    updatedAt: new Date().toISOString(),
  });

  try {
    await newListPost.save();
    res.status(201).json(newListPost);
    console.log("create ok");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const updateList = async (req, res) => {
  const { id } = req.params;
  const { name, price, details } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No list with id: ${id}`);

  const updatedList = {
    name,
    price,
    details,
    _id: id,
    updatedAt: new Date().toISOString(),
  };

  await Lists.findByIdAndUpdate(id, updatedList, { new: true });

  res.json(updatedList);
};



export const deleteList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No list with id: ${id}`);

  await Lists.findByIdAndRemove(id);

  res.json({ message: "List deleted successfully." });
};

export default router;
