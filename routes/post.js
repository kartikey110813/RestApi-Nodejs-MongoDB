const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//GETTING ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

//POSTING THE POSTS
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPosts = await post.save();
    res.json(savedPosts);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET THE SPECIFIC POSTS
router.get("/:postId", async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.postId);
    res.json(specificPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//DELETE THE SPECIFIC POST
router.delete("/:postId", async (req, res) => {
  try {
    const deletedPost = await Post.remove({ _id: req.params.postId });
    res.json(deletedPost);
  } catch (error) {
    res.json({ message: err });
  }
});

//Update a POST

router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body, title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: err });
  }
});

module.exports = router;
