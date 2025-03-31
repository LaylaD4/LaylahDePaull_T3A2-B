import LinkButton from "./LinkButton";

export default function HeroSection() {
    return (
        // div container is full-width, has a border at top, centres the content
        <div className="w-full flex justify-center items-center border-t-2 border-[#868A97] px-4">

            {/* Wrapper that limits max width of content, and stacks image and text containers vertically when on mobile screen, and left & right on tablet and desktop screens */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-0">

                {/* Left side: image container takes full width on mobile, half width on larger screens, height adjusts for consistent layout across all screen sizes */}
                <div className="w-full md:w-1/2 h-[500px] md:h-[700px] lg:h-[800px] flex-shrink-0">
                    <img
                        src="/elise.png"
                        alt="Face Paint Picture"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right side: text container takes full width on mobile, half on tablet/desktop, matches image container size for a more consistent layout */}
                <div className="w-full md:w-1/2 h-[500px] md:h-[700px] lg:h-[800px] bg-[#BCA6A6]/40 flex flex-col justify-center items-center p-6 md:p-12 text-center">

                    <h1 className="relative w-[85%] max-w-[230px] h-24 font-ysabeau text-4xl md:w-full md:h-full md:text-5xl md:max-h-28 md:max-w-[90%] lg:text-6xl text-[#7D8ABD] font-semibold lg:max-h-36 lg:max-w-[85%] mb-8">

                        {/* Split heading, top-left: 'Leanne's' */}
                        <span className="absolute top-0 left-0">Leanne's</span>

                        {/* Split heading, Bottom-right: 'Collection' */}
                        <span className="absolute bottom-0 right-0">Collection</span>
                    </h1>


                    {/* Paragraph text within text container */}
                    <p className="text-base max-w-[85%] leading-[1.75] mb-6 md:text-lg lg:text-xl text-[#453F3F] font-urbanist md:mb-8 lg:mb-12 md:leading-[1.75] lg:leading-[1.75]">
                        Shop high-quality, and expertly crafted Face Paint Kits, that provide you with
                        everything you need to create stunning face paint designs - for beginners and
                        professionals alike.
                    </p>

                    {/* Call to action 'Shop Now' LinkButton */}
                    <LinkButton to="/shop" text="Shop Now" />

                </div>
            </div>
        </div>
    );
}