import { useCart } from "../context/CartContext";
import { showCartToast } from "../utils/toastUtils";
import CalculateOrder from "../utils/CalculateOrder";

// The CartTable component displays all the items in the cart in a simple table format
export default function CartTable({ items = null, text, showQuantityControls = true }) {

    // Get cart & functions from CartContext using the custom hook
    const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

    // Use items if passed in (eg; OrderSuccessPage), otherwise use the cart from context (eg; CartPage)
    const cartItems = items ? items : cart;

    // Function to decrease the quantity of a product in the cart — need to handle for when quantity reaches 0
    const handleCartDecrease = (item) => {
        if (item.quantity === 1) {
            removeFromCart(item._id);
            // Toastify message when the item is removed from the cart
            showCartToast(`${item.title} removed from cart`, "remove");
        } else {
            updateQuantity(item._id, item.quantity - 1);
        }
    };

    // Create a new CalculateOrder instance using the cart, & call getTotal() to calculate the orders total in cart
    const total = new CalculateOrder(cart).getTotal();

    return (

        // Main container that wraps the table, & centres it
        <div className="w-4/5 mx-auto m-5">

            {/* Cart table - tablet/desktop view, use border-collapse to create single border between cells */}
            <table className="hidden md:table w-full text-left border-collapse mt-8">

                {/* Use short-circuiting to only show the table headings if the cart is NOT empty */}
                {cartItems.length !== 0 && (
                    <thead>
                        <tr className="border-b-4 border-[#D9D9D9] text-[#868A97] font-ysabeau text-2xl">
                            <th className="p-3 font-semibold w-1/4">Name</th>
                            <th className="p-3 font-semibold w-1/4">Price</th>
                            <th className="p-3 font-semibold w-1/4">Quantity</th>
                            <th className="p-3 font-semibold w-1/4">Total</th>
                        </tr>
                    </thead>
                )}

                <tbody>
                    {/* Use a ternary to either show cart items in rows, or an empty cart message */}
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <tr key={index} className="border-b border-[#D9D9D9] font-urbanist text-sm md:text-md lg:text-lg">
                                <td className="p-3 w-1/4">{item.title}</td>
                                <td className="p-3 w-1/4">${item.price.toFixed(2)}</td>

                                {/* Add adjustable quantity control buttons here, using ternary to decide whether to use them or not */}
                                <td className="p-3 w-1/4">
                                    {showQuantityControls ? (
                                        <div className="flex items-center gap-2 border-2 border-[#bcbdc3] rounded overflow-hidden w-fit">
                                            {/* (-) button, call handleCartDecrease to decrease quantity (-1) or remove the item completely */}
                                            <button
                                                onClick={() => handleCartDecrease(item)}
                                                className="border-r-2 border-[#868A97] px-2 py-1 bg-white text-black hover:bg-[#c0747e]/40 transition">
                                                -
                                            </button>

                                            {/* Show the current quantity of the product in the cart */}
                                            <span className="text-lg font-medium px-1 w-4 text-center">{item.quantity}</span>

                                            {/* (+) button, adds the same product again (quantity + 1) */}
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="px-2 py-1 border-l-2 border-[#868A97] bg-white text-black hover:bg-[#6fad91]/40 transition">
                                                +
                                            </button>
                                        </div>
                                    ) : (
                                        // Just show the quantity number (NO + / - buttons) on pages like Checkout or OrderSuccess
                                        <span className="text-lg font-medium px-1 w-4 text-center">{item.quantity}</span>
                                    )}
                                </td>

                                <td className="p-3 w-1/4">${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        // If the cart is empty, show this message in one spanned cell (colSpan-4)
                        <tr>
                            <td colSpan="4" className="p-6 text-center text-[#da2a79] text-2xl font-ysabeau font-medium">Your Cart is Currently Empty.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Cart table mobile view */}
            <div className="md:hidden flex flex-col gap-6 mt-8">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="border-b pb-6 font-urbanist text-sm flex flex-col gap-3">

                            {/* Name & value rows */}
                            <div className="text-center">
                                <div className="text-[#868A97] font-ysabeau text-xl font-semibold">Name</div>
                                <div className="font-medium text-lg">{item.title}</div>
                            </div>

                            {/* Price, quantity, & total labels row */}
                            <div className="flex justify-between text-[#868A97] font-ysabeau text-xl font-semibold px-2">
                                <span>Price</span>
                                <span>Quantity</span>
                                <span>Total</span>
                            </div>

                            {/* Price, quantity, & total values row */}
                            <div className="flex justify-between items-center px-2">

                                {/* Price value */}
                                <span className="text-md font-medium">${item.price.toFixed(2)}</span>

                                {/* Quantity value */}
                                {showQuantityControls ? (
                                    <div className="flex items-center gap-2 border-2 border-[#bcbdc3] rounded overflow-hidden">
                                        <button
                                            onClick={() => handleCartDecrease(item)}
                                            className="border-r-2 border-[#868A97] px-2 py-1 bg-white text-black hover:bg-[#c0747e]/40 transition">
                                            -
                                        </button>

                                        {/* Quantity */}
                                        <span className="text-md font-medium px-1 text-center">{item.quantity}</span>

                                        <button
                                            onClick={() => addToCart(item)}
                                            className="border-l-2 border-[#868A97] px-2 py-1 bg-white text-black hover:bg-[#6fad91]/40 transition">
                                            +
                                        </button>
                                    </div>
                                ) : (
                                     // Just show the quantity number
                                    <span>{item.quantity}</span>
                                )}

                                {/* Total value*/}
                                <span className="text-md font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-[#da2a79] text-2xl font-ysabeau font-medium">Your Cart is Currently Empty.</div>
                )}
            </div>


            {/* Use short-circuiting to show the total at the bottom, if the cart has items */}
            {cartItems.length > 0 && (
                <div className="mt-6 flex justify-center md:justify-end text-xl font-semibold p-3">
                    <span>{text}</span>
                    <span data-testid="cart-subtotal" className="ml-4">${total}</span>
                </div>
            )}
        </div>
    );
}
