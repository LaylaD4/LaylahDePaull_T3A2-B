import { Link } from "react-router-dom";

export default function OrderTable({ orders, changeOrderStatus }) {
    return (
        <div className="mt-40">
            {/* Container for tablet/desktop view  */}
            <div className="overflow-x-auto w-full flex-grow">

                {/* Table to display orders made */}
                <table className="hidden md:table w-4/5 max-w-5xl mx-auto mt-4 border-collapse">

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
                                        className={`px-2 py-1 w-full rounded-3xl text-black ${order.status === "fulfilled" ? "bg-[#E3F1ED]" : "bg-[#FFDEC4]"}`}>
                                        {order.status}
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* Container for mobile view */}
            <div className="md:hidden flex flex-col gap-6 mt-8 px-4">
                {orders.map((order) => (
                    <div key={order._id} className="border-b pb-6 font-urbanist text-md flex flex-col gap-3">

                        {/* Order number centred with value below */}
                        <div className="text-center">
                            <div className="text-[#868A97] font-ysabeau text-xl font-semibold">Order</div>
                            <Link to={`/admin/orders/${order._id}`} className="font-medium text-lg text-[#3f52bf] mt-1 hover:underline block">
                                #{order.orderNumber}
                            </Link>
                        </div>

                        {/* Name, total, and date labels row */}
                        <div className="grid grid-cols-3 text-center text-[#868A97] font-ysabeau text-xl font-semibold">
                            <div>Name</div>
                            <div>Total</div>
                            <div>Date</div>
                        </div>

                        {/* Name, total, and date values row */}
                        <div className="grid grid-cols-3 text-center text-md font-medium">
                            <div>{order.name}</div>
                            <div>${order.total.toFixed(2)}</div>
                            <div>{new Date(order.createdAt).toLocaleDateString()}</div>
                        </div>

                        {/* Status toggle button centered */}
                        <div className="flex justify-center pt-2">
                            <button
                                onClick={() => changeOrderStatus(order._id)}
                                className={`px-4 py-1 rounded-3xl text-black text-md font-medium ${order.status === "fulfilled" ? "bg-[#E3F1ED]" : "bg-[#FFDEC4]"}`}>
                                {order.status}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}