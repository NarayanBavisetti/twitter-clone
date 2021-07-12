const express = require("express");
const { isLoggedIn } = require("../../middleware");
const router = express.Router()
const Post = require("../../models/post");

// to get all posts
router.get("/api/post",isLoggedIn, async(req,res) => {
    const posts = await Post.find({});
    res.json(posts)
})

//to add new posts
router.get("/api/post",isLoggedIn,async(req,res) => {
   console.log(req.body);
   res.json("Hello from backend")
    // const post= {
    //     content:req.body,content,
    //     postedBy: req.user.username
    // }

    // const newPost = await Post.create(post)
    // res.json(newPost);
})

module.exports= router;