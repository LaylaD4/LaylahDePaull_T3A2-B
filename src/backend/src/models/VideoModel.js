const mongoose = require("mongoose");

// Create Video Schema Using Mongoose
const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    videoURL: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

// Video Model based on schema
const VideoModel = mongoose.model("Video", VideoSchema)

// Export Video Model
module.exports = { VideoModel }