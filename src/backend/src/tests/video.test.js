const request = require("supertest")
const express = require("express") 
const mongoose = require("mongoose")
const videoRoutes = require("../routes/videoRoutes")
const { VideoModel } = require("../models/VideoModel") 
const { getVideos, createVideoSeed } = require("../controllers/videoController")

// Set up Express app and add video routes
const app = express()
app.use(express.json())
app.use("/api/videos", videoRoutes)

// Connect to test MongoDB database before all tests are run 
beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/video_test_db")
})

// Clear videos collection before each test
beforeEach(async () => {
  await VideoModel.deleteMany()
})

// Disconnect after all tests run
afterAll(async () => {
  await mongoose.connection.close()
})

describe("Video Routes", () => {
  //  Below are INTEGRATION TESTS using Supertest and video routes

  // Test - GET all videos returns an Array that is empty ([])
  test("GET /api/videos returns 200 and empty array", async () => {
    const response = await request(app).get("/api/videos")
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual([])
  })

  // Test - GET returns a video array with one video ("Rainbow Flower Kit")
  test("GET /api/videos returns video array", async () => {
    await VideoModel.create({
      title: "Rainbow Flower Kit",
      videoURL: "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    })

    const response = await request(app).get("/api/videos")
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBe(1)
    expect(response.body[0].title).toBe("Rainbow Flower Kit")
  })
})

describe("Video Controller", () => {
  // Below are UNIT TESTS for the controller functions

  // Test - getVideos returns array of videos
  test("getVideos returns array of videos", async () => {
    await VideoModel.create({
      title: "Rainbow Flower Kit",
      videoURL: "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    })

    let output
    const response = {
      json: (data) => {
        output = data
      }
    }

    await getVideos({}, response)
    expect(output).toBeInstanceOf(Array)
    expect(output.length).toBe(1)
  })

  // Test - createVideoSeed adds a new video to the database
  test("createVideoSeed creates a new video", async () => {
    const video = await createVideoSeed(
      "Rainbow Flower Kit",
      "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    )

    expect(video.title).toBe("Rainbow Flower Kit")

    const found = await VideoModel.findById(video._id)
    expect(found).not.toBeNull()
  })
})
