// The VideoCard component displays a video and it's title, each VideoCard gets the same background colour (bgColour - passed in as a prop) as it's matching product.
export default function VideoCard({ video, bgColour }) {

    // Need to convert a YouTube link stored in database to an embeddable format for iframes
    const getEmbedURL = (url) => {
        // Need to split the YouTube URL at "v=" and get the video's ID (in second part)
        const videoId = url.split("v=")[1];
        // Return a new embed URL using the extracted video ID
        return `https://www.youtube.com/embed/${videoId}`;
    }

    return (
        // Main container limits max-width of card to 280px, & vertically stacks content
        <div className="w-full max-w-[280px] flex flex-col items-center">

            {/* Video section, uses the background colour passed as a prop */}
            <div className={`${bgColour} w-full h-full flex items-center justify-center shadow-md p-6`}>
            <div className="w-full aspect-video">
                <iframe
                    // Use the converted embed link for the YouTube video
                    src={getEmbedURL(video.videoURL)}
                    title={video.title}
                    className="w-full h-full"
                    // Allows the user to view video in full screen
                    allowFullScreen
                />
                </div>
            </div>

            {/* Text Section, shows the video title below the video */}
            <div className="w-full text-center mt-2 font-urbanist">
                <h2 className="text-lg">{video.title}</h2>
            </div>
        </div>
    );
}