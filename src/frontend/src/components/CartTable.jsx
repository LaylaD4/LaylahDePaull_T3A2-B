import { useCart } from "../context/CartContext";

// The CartTable component displays all the items in the cart in a simple table format
export default function CartTable({ text }) {

    // Get cart & functions from CartContext using the custom hook
    const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

    // Function to decrease the quantity of a product in the cart — need to handle for when quantity reaches 0
    const handleCartDecrease = (item) => {
        if (item.quantity === 1) {
            removeFromCart(item._id);
        } else {
            updateQuantity(item._id, item.quantity - 1);
        }
    };

    // Calculate the total amount by adding up (price * quantity) for each item 
    let subtotal = 0;
    for (let item of cart) {
        subtotal += item.price * item.quantity;
    }

    // Format the total to always only show 2 decimal places
    const total = subtotal.toFixed(2);

    return (

        // Main container that wraps the table, & centres it
        <div className="w-4/5 mx-auto m-5">

            {/* Cart table - use border-collapse to create single border between cells */}
            <table className="w-full text-left border-collapse mt-8">

                {/* Use short-circuiting to only show the table headings if the cart is NOT empty */}
                {cart.length !== 0 && (
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
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <tr key={index} className="border-b border-[#D9D9D9] font-urbanist text-sm md:text-md lg:text-lg">
                                <td className="p-3 w-1/4">{item.title}</td>
                                <td className="p-3 w-1/4">${item.price.toFixed(2)}</td>
                                
                                {/* Add adjustable quantity control buttons here */}
                                <td className="p-3 w-1/4">
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

            {/* Use short-circuiting to show the total at the bottom, if the cart has items */}
            {cart.length > 0 && (
                <div className="mt-6 flex justify-center md:justify-end text-xl font-semibold p-3">
                    <span>{text}</span>
                    <span className="ml-4">${total}</span>
                </div>
            )}
        </div>
    );
}
