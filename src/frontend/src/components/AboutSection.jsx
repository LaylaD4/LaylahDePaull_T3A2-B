import LinkButton from "./LinkButton";

// This is the AboutSection component that is on the HomePage, giving a quick intro about Lea
export default function AboutSection() {
    return (
        // Main Container set to full width of screen, that holds all content & centres it, with border at top.
        <div className="w-full flex justify-center items-center border-t-2 border-[#868A97] px-4">
            
            {/* Content wrapper for both the image and the text sections, stacks left & right sides when on mobile screen, and side by side on tablet & desktops screens */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-stretch gap-0">

                {/* Left Side - image container section */}
                <div className="w-full md:w-1/2 flex flex-col bg-[#FFDEC4]/60 justify-center items-center text-center p-6 md:p-12">

                    {/* Heading above image*/}
                    <h3 className="text-lg md:text-xl font-urbanist text-[#453F3F] font-medium">The Face Behind Leanne's Collection</h3>

                    {/* Image of Lea */}
                    <img
                        src="/lea-pic.png"
                        alt="Lea Courtney"
                        className="w-[80%] max-w-[350px] md:w-[250px] lg:w-[300px] mt-4 shadow-md"
                    />
                    {/* Name below image */}
                    <p className="mt-4 text-lg font-urbanist text-[#453F3F] font-medium">Lea Courtney</p>
                </div>

                {/* Right Side - text container section */}
                <div className="w-full md:w-1/2 bg-[#FFDEC4]/60 flex flex-col justify-center items-center p-6 md:p-12 text-left">

                    {/* Heading */}
                    <h2 className="text-2xl text-center md:text-3xl font-semibold text-[#7D8ABD] font-ysabeau mt-2 mb-4">About The Artist</h2>

                    {/* Paragraph text */}
                    <p className="text-sm w-[80%] max-w-[350px] md:w-[300px] lg:w-[350px] lg:text-base text-[#453F3F] font-urbanist">
                        Leanne is a professional face and body paint artist from Sydney, Australia.
                        Renowned worldwide for her skills and artistry, she has been a much-loved and
                        celebrated trailblazer in the face painting industry over the past 15 years.
                        Not only is Leanne admired for her dazzling designs, but also for her dedication
                        to innovation and unique paint combinations, showcased in her signature collection:
                        'Leanne's Collection' in collaboration with Fusion. As one of the most highly
                        sought-after artists in the industry, she is regularly invited to attend conventions
                        and host masterclasses worldwide. Leanne's passion is making face painting accessible
                        to everyone, sharing her love for colour and
                        creativity with the world.
                    </p>

                    {/* Call to action 'Learn More' LinkButton */}
                    <div className="flex justify-center mt-6">
                        <LinkButton to="/about" text="Learn More" />
                    </div>
                </div>
            </div>
        </div>
    );
}