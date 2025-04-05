import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext";
import Banner from "../components/Banner";
import OrderDetails from "../components/OrderDetails";
import CartTable from "../components/CartTable";

export default function OrderSuccessPage() {
    // Set up state to store the order just made
    const [order, setOrder] = useState(null);

    // To clear the cart & local storage when user navigates back home
    const { clearCart } = useCart();

    useEffect(() => {
        // Retrieve the order made from local storage (saved under the key "latestOrder")
        const storedOrder = localStorage.getItem("latestOrder");

        // If the order exists
        if (storedOrder) {
            // Convert the string back to an object & save it to state, to access order
            setOrder(JSON.parse(storedOrder))
        }
    }, [])

    return (
        <div>
            {/* Header with Logo */}
            <header className=" fixed top-0 left-0 w-full flex justify-center items-center p-2 bg-white">
                {/* Also clears cart from context & local storage if user clicks the logo to head back home */}
                <Link to="/" className="cursor-pointer" onClick={clearCart}>
                    <img src="/lea-logo.png" alt="Leanne's Collection Logo" className="h-14 w-auto" />
                </Link>

                {/* Use ternary to check for both order & order number, if there use that as text, otherwise "Processing..." message */}
                <div className="fixed left-0 w-full mt-36">
                    <Banner text={order && order.orderNumber ? `Order #${order.orderNumber}` : "Processing..."} />
                </div>
            </header>

            {/* Order Confrmation message to customer (personalised 1st name) */}
            <h2 className="text-center font-medium font-urbanist p-4 mt-40 mb-4">
                {order && order.orderNumber ? `Congratulations ${order.name.split(" ")[0]}, your order #${order.orderNumber} was successful!` : "Processing..."}
            </h2>

            {/* Customers order details ie; name, email, address */}
            <OrderDetails order={order} />

            <hr className="border-black" />

            {/* Use a ternary to check if order & cartItems exist, if so display the cart items from the order (saved in local storage), or show message. */}
            {order && order.cartItems ? (
                <CartTable items={order.cartItems} text="Total Paid:" showQuantityControls={false} />
            ) : (
                <p className="text-center text-[#df396b]">No items found in your order.</p>
            )}

            <hr className="border-black" />

            {/* Back Home Button with clearCart */}
            <div className="flex justify-center md:justify-start m-8">
                <Link to="/"
                    data-testid="back-home-button"
                    className="px-4 md:px-6 py-2 bg-[#868A97] font-urbanist text-white text-sm md:text-lg rounded-lg hover:bg-[#2e6598] transition"
                    // When user clicks, clears cart from context & local storage
                    onClick={clearCart}>Back Home</Link>
            </div>
        </div>
    )
}