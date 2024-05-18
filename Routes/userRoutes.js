import express from "express";
import {
  createAccount,
  createPost,
  getAllUserPosts,
  updateProfile,
  userLogin
} from "../Controllers/userController.js";

const router = express.Router();
router.post("/create-account", createAccount);
router.post("/add-post", createPost);
router.get("/userlogin/", userLogin);
router.get("/all-posts", getAllUserPosts);
router.put("/edit-profile", updateProfile);
export default router;
