import { useCart } from "../context/CartContext";

// AddToCartButton component adds a product to the cart when clicked
export default function AddToCartButton({ product }) {
    
    // Get addToCart function from the CartContext using the custom hook
    const { addToCart } = useCart();

    // When the button is clicked, add the product to the cart with quantity value of 1
    const handleCart = () => {
        addToCart({...product, quantity: 1});
    }

    return (
        // Button wrapper
        <div className="mt-2 flex items-center gap-2">
            {/* When the button is clicked, handleCart runs & adds the product to the cart */}
            <button onClick={handleCart} className="px-3 py-1 bg-[#868A97] text-white font-urbanist text-sm md:text-base rounded hover:bg-[#2e6598] transition">Add to Cart</button>
        </div>
    );
}
