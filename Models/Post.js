import mongoose from "mongoose";
const postData = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  post_text: {
    type: String,
    required: true
  },
  post_url: {
    type: String,
    required: true
  },
  post_addedTime: {
    type: String,
    required: true
  },
  likes_count: {
    type: String,
    required: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const Post = mongoose.model("posts", postData);

export default Post;
