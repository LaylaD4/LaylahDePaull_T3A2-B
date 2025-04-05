// Component to embed and style a products video (Youtube URL) tutorial, passing in videoURL and bgColour (to match the product's background colour, passed from Link state)
export default function VideoEmbed({ videoURL, bgColour }) {
    
    // Function to convert a YouTube link into an embeddable link for iframe
    const getEmbedURL = (url) => {
        // Gets the part after 'v=' (ie; video id)
        const videoId = url.split("v=")[1];
        // Embeddable URL
        return `https://www.youtube.com/embed/${videoId}`;
    };

    // If no videoURL prop was passed
    if (!videoURL) {
        return <p className="text-center text-[#961e78]">No video available for this product</p>;
    }

    return (
        // Main container with plain white background, content centred horizontally and vertically
        <div className="w-full flex justify-center items-center p-6 bg-[#FFFFFF] mt-10 mb-10">
            
           {/* Video container with coloured background (bgColour prop passed) */}
            <div className={`w-4/5 max-w-md ${bgColour} p-6 shadow-md flex flex-col items-center`}> 
                <div className="w-full max-w-md flex justify-center ">
                    <iframe
                        src={getEmbedURL(videoURL)}
                        title="Product Tutorial"
                        className="w-full h-[140px] md:h-[220px] object-contain"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}