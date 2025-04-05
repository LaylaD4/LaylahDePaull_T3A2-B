// New release component that displays a section about a newly released product that includes an image & a video
export default function NewRelease() {
    return (
        // Main container that centres the content horizontally & vertically
        <div className="w-full flex justify-center items-center px-4">
            
            {/* Content wrapper with responsive layout, left & right stacks for mobile, while sitting side by side for tablet/dektop screens */}
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-stretch gap-0">

                {/* Left side - image section */}
                <div className="w-full md:w-1/2 flex">
                    <img 
                        src="/lea-elise.png" 
                        alt="Leanne & Elise showcasing Petal Palette" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right side - video section (with coloured background) */}
                <div className="bg-[#E3F1ED] w-full md:w-1/2 flex justify-center items-center p-6">
                    
                    {/* Video container with white background */}
                    <div className="bg-[#FFFFFF] p-4 shadow-xl w-full max-w-sm text-center">
                        
                        {/* Heading */}
                        <h3 className="text-md md:text-lg font-semibold text-[#7D8ABD] p-1 mb-4">New Release: Petal Palette</h3>

                        {/* Video (aspect keeps video proportional in size) */}
                        <div className="w-full overflow-hidden p-1">
                            <iframe 
                                src="https://www.youtube.com/embed/FzuSaFUlWlY" 
                                title="Petal Palette Demo"
                                allowFullScreen
                                className="w-full aspect-video">
                            </iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
