const express = require("express");
const router = express.Router();
const app = express();

// Requiring Models
const Post = require("../models/post");

// Requiring the dotenv module
require("dotenv").config();

// Main routers class
const PostRoutes = require("./post/api.routes");

// Instantiating the RoutersClass
const postRoutes = new PostRoutes(router, {
  models: {
    POST: Post,
  },
});

// Search results page
postRoutes.postResults();

// Get tags
postRoutes.getTags();

module.exports = router;
