import mongoose from "mongoose";

const expendSchema = mongoose.Schema({
  creator: String,
  name: String,
  price: String,
  details: String,
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

var ExpendPost = mongoose.model("ExpendPost", expendSchema);
export default ExpendPost;
