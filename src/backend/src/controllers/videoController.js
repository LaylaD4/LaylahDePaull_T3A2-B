const { VideoModel } = require("../models/VideoModel");

// Create a video for seeding
async function createVideoSeed(title, videoURL) {
    let video = await VideoModel.create({
        title: title,
        videoURL: videoURL
    });

    return video;
}

module.exports = {
    createVideoSeed
}