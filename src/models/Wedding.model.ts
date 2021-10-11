import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WeddingSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  fname: {
    type: String,
    required: false
  },
  lname: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  mobile: {
    type: String,
    required: false
  },
  bodyType: {
    type: String,
    required: false
  },

  height: {
    type: Number,
    required: false
  },
  image: {
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
  maritalStatus: {
    type: String,
    required: false
  },
  dob: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  nationality: {
    type: String,
    required: false
  },
  religion: {
    type: String,
    required: false
  },
  educationLevel: {
    type: String,
    required: false
  },
  job: {
    type: String,
    required: false
  },
  language: {
    type: String,
    required: false
  },
  lagnaya: {
    type: String,
    required: false
  },
  desc: {
    type: String,
    required: false
  }
})

const WeddingModel = mongoose.model('wedding', WeddingSchema)
export default WeddingModel;
