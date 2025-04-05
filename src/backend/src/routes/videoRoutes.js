const express = require("express");
const { getVideos } = require("../controllers/videoController");

// Create a router to define video route
const router = express.Router();

// GET /api/videos - route to get all videos
router.get("/", getVideos);

module.exports = router;

