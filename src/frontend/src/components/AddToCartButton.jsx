// The Add to Cart button component - no functionality added yet
export default function AddToCartButton() {
    return (
        // Button wrapper
        <div className="mt-2 flex items-center gap-2">
            {/* Button styling, gray with blue hover */}
            <button className="px-3 py-1 bg-[#868A97] text-white font-urbanist text-sm md:text-base rounded hover:bg-[#2e6598] transition">Add to Cart</button>
        </div>
    );
}
