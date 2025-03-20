const { VideoModel } = require("../models/VideoModel");

// Create a video for seeding
async function createVideoSeed(title, videoURL) {
    let video = await VideoModel.create({
        title: title,
        videoURL: videoURL
    });

    return video;
}

// Get all videos
const getVideos = async (request, response) => {
    try {
        // Get all videos from collection
        const videos = await VideoModel.find();
        
        if (!videos.length) {
            console.log("No videos found in the database!")
        }

        // Return videos
        response.json(videos);

    } catch (error) {
        response
        .status(500)
        .json({ message: error.message });
    }
}

module.exports = {
    createVideoSeed,
    getVideos
}