import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"
import Banner from "../components/Banner";
import OrderDetails from "../components/OrderDetails";
import CartTable from "../components/CartTable";
import CopyFooter from "../components/CopyFooter";

// The AdminOrderDetailsPage displays a specific customer's order details, including their shipping info (OrderDetails) and the items they ordered (CartTable).
export default function AdminOrderDetailsPage() {
    // Get orderId from url params
    const { orderId } = useParams();

    // State to store the fetched order data
    const [order, setOrder] = useState(null);

    // Set up navigation for redirecting to /login (if no valid jwt)
    const navigate = useNavigate();

    // Function to get the order details from the backend using the orderId
    const fetchOrderDetails = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/orders/${orderId}`, {
                method: "GET",
                headers: { jwt: localStorage.getItem("adminToken") }
            });

            // Convert the response to a js object
            const data = await response.json();

            // Save order data to state
            setOrder(data);

        } catch (error) {
            console.error(error.message);
        }
    }

    // Check for jwt & fetch order details
    useEffect(() => {
        // Get jwt stored in local storage when logged in using key ("adminToken")
        const token = localStorage.getItem("adminToken")

        // If no token is found, redirect user to the login page
        if (!token) {
            navigate("/login");
            return;
        }

        // If token exists, fetch the order details
        fetchOrderDetails();

    }, [orderId]);

    return (
        // Main Container for page, with header, banner, customers order details, shopping cart & small footer
        <div className="flex flex-col min-h-screen">

            {/* Header */}
            <header className="fixed top-0 left-0 w-full flex justify-center items-center p-2 bg-white">
                <Link to="/" className="cursor-pointer z-50">
                    <img src="/lea-logo.png" alt="Leanne's Collection Logo" className="h-14 w-auto" />
                </Link>

                {/* Banner – use a ternary to show the order number if available, otherwise show Order */}
                <div className="fixed w-full mt-36">
                    <Banner text={order && order.orderNumber ? `Order #${order.orderNumber}` : "Order"} />
                </div>
            </header>

            {/* Order Details - use short circuiting to wait until name, email, & address are loaded  */}
            <div className="mt-40">
                {order && <OrderDetails order={order} />}
            </div>

            <hr className="border-black" />

            {/* Use short circuiting to wait until cartItems are loaded */}
            {order && order.cartItems && (
                <CartTable items={order.cartItems} showQuantityControls={false} text="Total Paid:" />
            )}


            <hr className="border-black" />

            {/* Link button to go back to the admin orders page */}
            <div className="flex justify-center md:justify-start m-8">
                <Link to="/admin/orders" className="px-4 md:px-6 py-2 bg-[#2D8993] font-urbanist text-white text-sm md:text-lg rounded-lg hover:bg-[#2e6598] transition">
                    Back to Orders
                </Link>
            </div>

            {/* Small copyright footer */}
            <CopyFooter />
        </div>
    )
}