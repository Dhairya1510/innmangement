import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  hotel: String,
  room: String,
  room_type: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    default: 0,
  },
  availsbility: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
