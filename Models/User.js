import mongoose from "mongoose";
const userData = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  user_image: {
    type: String,
    required: true
  },
  user_age: {
    type: String,
    required: true
  },
  user_mobileNo: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    required: true
  },
  user_password: {
    type: String,
    required: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const User = mongoose.model("users", userData);

export default User;
