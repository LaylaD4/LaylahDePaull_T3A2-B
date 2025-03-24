export default function TextBanner({ text }) {
    return (
        // Reusable TextBanner component that displays important quick info, text is centred with styled with black borders top and bottom.
        <div className="bg-[#FFFFFF] border-t-2 border-b-2 border border-[#868A97] p-5 text-center">
            <h1 className="text-md md:text-xl lg:text-2xl font-urbanist text-[#000000] px-6 md:px-12 max-w-[90%] md:max-w-[80%] mx-auto">
                {text}
            </h1>
        </div>
    );
}