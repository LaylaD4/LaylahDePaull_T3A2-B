import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import Banner from "../components/Banner";
import CopyFooter from "../components/CopyFooter";

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
            <header className="relative w-full flex items-center p-2 bg-white px-6 my-2">

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

            </header>

            {/* Banner */}
            <Banner text="Orders Dashboard" />

            {/* Table container wrapper */}
            <div className="overflow-x-auto w-full flex-grow">

                {/* Table to display orders made */}
                <table className="w-4/5 max-w-5xl mx-auto mt-4 border-collapse">

                    {/* Table headings - order number, customer's name, order total, order date, order status (unfulfilled/fulfilled) */}
                    <thead>
                        <tr className="border-b-4 border-[#D9D9D9] text-[#868A97] font-ysabeau text-sm md:text-lg lg:text-xl p-4">
                            <th className="p-2 ">Order</th>
                            <th className="p-2 ">Name</th>
                            <th className="p-2 ">Total</th>
                            <th className="p-2 ">Date</th>
                            <th className="p-2 ">Status</th>
                        </tr>
                    </thead>

                    {/* Table body - order data rows */}
                    <tbody >
                        {/* Map orders */}
                        {orders.map((order) => (
                            <tr key={order._id} className="text-center font-medium text-sm md:text-md lg:text-lg border">

                               {/* Order number – link to page (/:id) that shows more detailed info about the order (eg; customer's email/address & itemised product list) */}
                                <td className="font-urbanist p-2 text-[#3f52bf] cursor-pointer border">
                                    <Link to={`/admin/orders/${order._id}`} className="hover:underline">
                                        #{order.orderNumber}
                                    </Link>
                                </td>

                                {/* Customers name */}
                                <td className="font-urbanist p-2 border">{order.name}</td>

                                {/* Order total */}
                                <td className="font-urbanist p-2 border ">${order.total.toFixed(2)}</td>

                               {/* Date order was created */}
                                <td className="font-urbanist p-2 border">{new Date(order.createdAt).toLocaleDateString()}</td>

                                {/* Order status button toggle (unfulfilled/fulfilled) */}
                                <td className="font-urbanist p-2 w-32">
                                    <button
                                        // When clicked, order status is changed
                                        onClick={() => changeOrderStatus(order._id)}
                                        // Use ternary to change background colour of button based on status (unfulfilled/fulfilled)
                                        className={`px-2 py-1 w-4/5 rounded-3xl text-black lg:w-full ${order.status === "fulfilled" ? "bg-[#E3F1ED]" : "bg-[#FFDEC4]"}`}>
                                        {order.status}
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* Small copyright footer */}
            <CopyFooter />

        </div>
    )
}