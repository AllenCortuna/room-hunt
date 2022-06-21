import mongoose from "mongoose";

const expendSchema = mongoose.Schema({
  id: String, 
  creator: String,
  name: String,
  price: Number,
  details: String,
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

var ExpendPost = mongoose.model("ExpendPost", expendSchema);
export default ExpendPost;
