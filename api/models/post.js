const mongoose = require("mongoose");
const Post = new mongoose.Schema({
  name: String,
  surname: String,
  img: String,
  text: String,
  postImg: String,
  datePosted: { type: Date, default: Date.now },
  numOfComments: Number,
  likes: [String],
  tags: [String],
  comments: [
    {
      name: String,
      comment:
        String,
    },
  ],
});

const PostModel = mongoose.model("Post", Post);
module.exports = PostModel;
