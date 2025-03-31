// AboutMe component displays an introductory section with an image & background info about Lea from Leanne's Collection
export default function AboutMe() {
    return (
        // Main container, that centres the content vertically & horizonally
        <div className="w-full flex justify-center items-center px-4">

            {/* Content wrapper container that sets the background colour & handles responsive layout – stacks vertically on mobile/tablet, side by side on desktop screens */}
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-stretch gap-0 bg-[#BCA6A6]/50 p-4 md:p-8">

                {/* Left Side - image section */}
                <div className="w-full lg:w-1/2 flex justify-center items-stretch p-4">
                    
                    {/* Inner wrapper - white background container */}
                    <div className="bg-[#FFFFFF] p-6 md:p-12 shadow-lg flex flex-col justify-center items-center text-center w-full sm:max-w-[500px] lg:w-full h-full">

                        {/* Heading */}
                        <h3 className="text-xl md:text-2xl font-urbanist text-[#2D8993] font-medium">Hi, I'm Lea</h3>

                        {/* Image - Lea */}
                        <img
                            src="/lea-convention.png"
                            alt="Lea Courtney"
                            className="w-[80%] max-w-[350px] md:w-full lg:w-[90%] mt-4 shadow-md"
                        />

                        {/* Heading - below */}
                        <p className="mt-4 text-lg font-urbanist text-[#2D8993] font-medium">The Creator of Leanne's Collection</p>

                    </div>
                </div>

                {/* Right Side - text section */}
                <div className="w-full lg:w-1/2 flex justify-center items-stretch p-4">
                    
                    {/* Inner wrapper - white background container */}
                    <div className="bg-white p-6 md:p-12 shadow-lg w-full sm:max-w-[500px] lg:w-full h-full flex flex-col justify-center items-center text-left">

                        {/* Heading */}
                        <h2 className="text-2xl text-center md:text-3xl font-semibold text-[#7D8ABD] font-ysabeau">How It All Started...</h2>

                        {/* Paragraph text */}
                        <p className="text-sm w-[98%] max-w-[350px] md:w-full lg:w-[95%] lg:text-base text-[#453F3F] font-urbanist p-4">
                            My face painting journey began unexpectedly when I filled in for an artist at my husband's workplace. From that moment, I became obsessed with paint, colour, and creating unique combinations, leading to the one-stroke. While raising three young kids, I practised constantly, turning weekend party gigs into a career. Eventually, I partnered with Fusion to design my own palettes, brushes, and stencils. Now, I teach worldwide, attend conventions, and host masterclasses; sharing the joy of face painting with everyone. I love helping fellow art and paint enthusiasts, which is why I created these kits to make it easy for anyone to get started.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}