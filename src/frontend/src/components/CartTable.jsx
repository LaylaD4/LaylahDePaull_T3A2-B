import { useCart } from "../context/CartContext";

// The CartTable component displays all the items in the cart in a simple table format
export default function CartTable({ text }) {
    
    // Need to get the cart array from context
    const { cart } = useCart();

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
                                <td className="p-3 w-1/4">{item.quantity}</td>
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
