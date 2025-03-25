import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

// The VideoList component shows a list of VideoCards, props control how many videos are shown (limit - for HomePage, only shows 3), how many columns to show (eg; grid-cols; 3 on tablet (md) screen for HomePage, will be 2 for TutorialsPage)
export default function VideoList({ limit = null, gridCols }) {
    
    // UseState to store list of videos
    const [videos, setVideos] = useState([]);

    // Function to fetch videos from the backend
    const fetchVideos = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/videos`);
            let data = await response.json();

            // Conditional logic used to limit videos for HomePage to just 3 videos
            if (limit) {
                data = data.slice(0, limit);
            }

            // Save the video data to state
            setVideos(data);

        } catch (error) {
            console.error(error.message);
        }
    };

    // List of different background colours for each video - each video gets a different one based on its index - same as it's corresponding product.
    const backgroundColours = [
        "bg-[#EDF7FF]/70",
        "bg-[#F4E6E6]/60",
        "bg-[#F3F5DD]/70",
        "bg-[#E3F1ED]/70",
        "bg-[#F5F5F5]/70",
        "bg-[#FFDEC4]/40"
    ];

    // Run fetchVideos function when this component loads
    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        // Container for the video cards – using grid to make it responsive on different screen sizes
        <div className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 ${gridCols} lg:grid-cols-3 gap-8 p-4 place-items-center m-4`}>
             {/* Loop through videos to show a VideoCard for each one, and assign the videos background colour based on its index */}
            {videos.map((video, index) => (
                <div key={video._id} className="w-full sm:w-[80%] md:w-[70%] lg:w-[80%] flex justify-center">
                    <VideoCard video={video} bgColour={backgroundColours[index]} />
                </div>
            ))}
        </div>
    );
}