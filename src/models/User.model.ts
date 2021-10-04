import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  contact: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  roll: {
    type: String,
    required: false
  }
})

const UserModel = mongoose.model('user', UserSchema)
export default UserModel;
