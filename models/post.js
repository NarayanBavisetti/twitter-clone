const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        trim:true,
    },
    postedBy:{
        type:String,
        required:true,
        trim:true,
    }
})

const Post = mongoose.model("twitter-posts",postSchema)

module.exports = Post;