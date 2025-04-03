import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import Banner from "../components/Banner";
import CopyFooter from "../components/CopyFooter";
import OrderTable from "../components/OrderTable";


export default function AdminOrdersPage() {
    // Set up state to store orders
    const [orders, setOrders] = useState([]);

    // Set up navigation for redirecting to /login (after logout or if no valid jwt)
    const navigate = useNavigate();

    useEffect(() => {
        // Get jwt stored in local storage when logged in using key ("adminToken")
        const token = localStorage.getItem("adminToken")

        // If no token, redirect user to login page
        if (!token) {
            navigate("/login");
            return;
        }

        // If token, run getOrders
        getOrders();
    }, []);

    // Function to get orders
    const getOrders = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/orders`, {
                method: "GET",
                headers: { jwt: localStorage.getItem("adminToken") }
            });

            // Convert the response to a js object
            const data = await response.json();

            // Set order data in state
            setOrders(data);

        } catch (error) {
            console.error(error.message);
        }
    }

    // Function to change an orders status
    const changeOrderStatus = async (orderId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/orders/${orderId}/status`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json", jwt: localStorage.getItem("adminToken") }
            });

            const updatedOrder = await response.json();

            // Update orders in state
            setOrders((prevOrders) =>
                // map through all orders
                prevOrders.map((order) =>
                    // Use ternary to find order by id, then update status, or leave order as is
                    order._id === updatedOrder._id ? { ...order, status: updatedOrder.status } : order
                )
            )

        } catch (error) {
            console.error(error.message);

        }
    }

    // Function to Logout
    const handleLogout = () => {
        // Remove jwt from local storage
        localStorage.removeItem("adminToken");
        // Redirect user back to login page (when Logout button clicked)
        navigate("/login");
    }

    return (
        // Main Container for page, with header, logout button, banner, order table, & footer
        <div className="flex flex-col min-h-screen">
            {/* Header with Logo & Logout Button */}
            <header className="fixed top-0 left-0 w-full flex items-center p-2 bg-white px-6 my-2 z-50">

                {/* Centered Logo */}
                <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
                    <img src="/lea-logo.png" alt="Leanne's Collection Logo" className="h-14 w-auto" />
                </Link>

                {/* Logout Button - Keep it on the Right */}
                <button
                    onClick={handleLogout}
                    className="ml-auto w-42 md:w-48 px-4 py-2 bg-[#2D8993] text-white rounded-lg font-medium hover:bg-[#2e6598] transition">
                    Logout
                </button>

                {/* Banner */}
                <div className="fixed left-0 w-full mt-36">
                    <Banner text="Orders Dashboard" />
                </div>

            </header>
            {/* 
           
            {/* Order table to display all orders */}
            <OrderTable orders={orders} changeOrderStatus={changeOrderStatus} />

            {/* Small copyright footer */}
            <CopyFooter />

        </div>
    )
}