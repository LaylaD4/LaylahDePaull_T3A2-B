// OrderDetails component displays the customers name, email & address entered on the checkoutPage - order is passed as a prop to access those details.
export default function OrderDetails({ order }) {
    
    // If no order is found, show a loading message
    if (!order) {
        return <p className="text-center text-[#df396b]">Loading order details...</p>;
    }

    return (
        // Main conatainer for customers details
        <div className="w-4/5 mx-auto bg-white p-6 shadow-lg mb-4 text-left font-urbanist font-medium">
            
            {/* Heading */}
            <h3 className="text-2xl font-semibold font-ysabeau text-[#868A97] mb-4">Order Details</h3>
            
            {/* Customers name */}
            <p className="text-lg text-black"><strong className="text-[#868A97]">Name:</strong> {order.name}</p>
            
            {/* Customers email */}
            <p className="text-lg text-black"><strong className="text-[#868A97]">Email:</strong> {order.email}</p>
            
            {/* Customers address */}
            <p className="text-lg text-black"><strong className="text-[#868A97]">Address:</strong> {order.address}</p>

        </div>
    );
}