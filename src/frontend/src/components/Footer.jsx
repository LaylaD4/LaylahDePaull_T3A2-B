// This is the Footer component to be used at the bottom of most pages on the website, will be used in HomeLayout that wraps those pages.
export default function Footer() {
    return (
        // Main container for footer that creates the background colour, centres the text, with a border at top border
        <div className="bg-[#2D8993]/30 text-center border-t-2 border-[#868A97] py-6">

            {/* Shipping info Section */}
            <div className="flex justify-center items-center gap-1 font-bold text-[#CB0707] text-sm md:text-lg lg:text-xl">
                <span>FREE EXPRESS SHIPPING ON ORDERS OVER $200</span>
                <img src="/shipping-icon.png" alt="Shipping Icon" className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9" />
            </div>

            {/* Email info section */}
            <div className="mt-10 text-sm md:text-lg lg:text-xl">
                <p className="p-2">For All Face Painting Enquiries Contact Me On:</p>
                <p>
                    {/* Email link */}
                    <a href="mailto:leannesrainbow@gmail.com" className="text-[#008D9D] font-semibold hover:underline">leannesrainbow@gmail.com</a>
                </p>
            </div>

            {/* Social media info section - with icons as links that open new tabs */}
            <div className="mt-10">
                
                <p className="text-sm md:text-lg lg:text-xl font-ysabeau font-semibold text-[#453F3F]">Follow My Work Through My Socials</p>

                <div className="flex justify-center gap-4 mt-2">
                    {/* Link to instagram */}
                    <a href="https://www.instagram.com/leannesrainbow/?hl=en" target="_blank">
                        <img src="/instagram-icon.png" alt="Instagram" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                    </a>
                    {/* Link to facbook */}
                    <a href="https://www.facebook.com/p/Leanne-Courtney-Fun-Faces-4-Kids-100072407674366/" target="_blank">
                        <img src="/facebook-icon.png" alt="Facebook" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                    </a>
                    {/* Link to tiktok */}
                    <a href="https://www.tiktok.com/@leannesrainbow" target="_blank">
                        <img src="/tiktok-icon.png" alt="TikTok" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                    </a>
                    {/* Link to youtube */}
                    <a href="https://www.youtube.com/@leannesrainbowcollection7377" target="_blank">
                        <img src="/youtube-icon.png" alt="Youtube" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                    </a>
                </div>

            </div>

            {/* Copyright info section - displays the current year automatically */}
            <p className="mt-4 text-sm"> Leanne's Collection &copy; Copyright {new Date().getFullYear()}</p>

        </div>
    );
}