import { useCart } from "../context/CartContext";

// AddToCartButton component adds a product to the cart when clicked
export default function AddToCartButton({ product }) {

    // Get cart, & functions from CartContext using the custom hook
    const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

    // Find the product in the cart, by checking each items id, & if found save it in cartItem (used primarily to show quantity and adjust it with + / - toggle)
    const cartItem = cart.find((item) => item._id === product._id);

    // Function to decrease the quantity of a product in the cart — need to handle for when quantity reaches 0
    const handleCartDecrease = () => {
        // First check if the product's quantity is equal to 1
        if (cartItem.quantity === 1) {
            // If there's only 1 of that product left, completely remove it from the cart
            removeFromCart(product._id);
        } else {
            // Otherwise, decrease the quantity by 1 
            updateQuantity(product._id, cartItem.quantity - 1);
        }
    };

    return (
        // Main container that holds either the Add to Cart button or the quantity controls (+ & -)
        <div className="mt-2 flex items-center gap-2">
            
            {/* Use ternary to check if the product is already in the cart, if so show quantity controls, if not show the add to cart button */}
            {cartItem ? (
                // Quantity control buttons below (+ & -)
                <div className="flex items-center gap-2 border-2 border-[#868A97] bg-[#FFFFFF] overflow-hidden rounded">
                    
                    {/* (-) button, call handleCartDecrease to decrease quantity (-1) or remove the item completely */}
                    <button
                        onClick={handleCartDecrease}
                        className="border-r-2 border-[#868A97] px-2 py-1 bg-white text-black hover:bg-[#c0747e]/40 transition">
                        -
                    </button>

                    {/* Show the current quantity of the product in the cart */}
                    <span className="text-lg font-medium px-1 w-4 text-center">{cartItem.quantity}</span>
                    
                    {/* (+) button, adds the same product again (quantity + 1) */}
                    <button
                        onClick={() => addToCart(product)}
                        className="px-2 py-1 border-l-2 border-[#868A97] bg-white text-black hover:bg-[#6fad91]/40 transition">
                        +
                    </button>

                </div>
            ) : (
                // If the product is NOT already in the cart, just show the Add to Cart button
                <button
                    onClick={() => addToCart(product)}
                    className="px-3 py-1 bg-[#868A97] text-[#FFFFFF] font-urbanist text-sm md:text-base rounded hover:bg-[#2e6598] transition">
                    Add to Cart
                </button>
            )}
        </div>
    );
}
