import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  cType: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  },
  desc: {
    type: String,
    required: false
  },
  displayNumber: {
    type: String,
    required: false
  },
  sellerName: {
    type: String,
    required: false
  },

  sellerContact: {
    type: String,
    required: false
  },
  images: {
    type: String,
    required: false
  },
  approved: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false
  },
  sellerVerified: {
    type: String,
    required: false
  },
  attribute: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  }
})

const PostModel = mongoose.model('post', PostSchema)
export default PostModel;
