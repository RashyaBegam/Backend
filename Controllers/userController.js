import asyncHandler from "express-async-handler";
import User from "../Models/User.js";
import Post from "../Models/Post.js";

const createAccount = asyncHandler(async (req, res) => {
  const {
    user_name,
    user_image,
    user_age,
    user_mobileNo,
    user_email,
    user_password
  } = req.body;
  try {
    const userdata = new User({
      user_name: user_name,
      user_image: user_image,
      user_age: user_age,
      user_mobileNo: user_mobileNo,
      user_email: user_email,
      user_password: user_password
    });
    await userdata.save();
    res.status(201).json({
      message: "Account Created Successfully"
    });
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const getAllUserPosts = asyncHandler(async (req, res) => {
  const userData = await Post.find({});
  res.status(200).send(userData);
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.query;
  console.log(req.query);
  const user = await User.find({ user_email: email, user_password: password });
  if (user.length > 0) {
    return res.json({ status: 200, result: user });
  } else {
    return res.json({ status: 404, result: "invalid username or password" });
  }
});

const updateProfile = asyncHandler(async (req, res) => {
  const {
    id,
    user_name,
    user_image,
    user_age,
    user_mobileNo,
    user_password
  } = req.body;
  console.log(req.query);
  await User.updateOne(
    { _id: id },
    {
      $set: {
        user_name: user_name,
        user_image: user_image,
        user_age: user_age,
        user_mobileNo: user_mobileNo,
        user_password: user_password
      }
    }
  );
  res.json({ status: 200, message: "Profile Updated Successfully" });
});

const createPost = asyncHandler(async (req, res) => {
  const {
    user_id,
    post_text,
    post_url,
    post_addedTime,
    likes_count
  } = req.body;
  try {
    const postdata = new Post({
      user_id: user_id,
      post_text: post_text,
      post_url: post_url,
      post_addedTime: post_addedTime,
      likes_count: likes_count
    });
    await postdata.save();
    res.status(201).json({
      message: "Post Uploaded Successfully"
    });
  } catch (error) {
    console.error("Error uploading post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { createAccount, createPost, updateProfile, userLogin, getAllUserPosts };
