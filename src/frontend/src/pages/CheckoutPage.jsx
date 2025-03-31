import { Link, useNavigate } from "react-router-dom"
import { showCartToast } from "../utils/toastUtils";
import Banner from "../components/Banner"
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import CartTable from "../components/CartTable";
import LinkButton from "../components/LinkButton";

// CheckoutPage – displays a banner, a form for customer to fill out their order shipping details, & an itemised list of products they're purchasing (CartTable)
export default function CheckoutPage() {

    // Get the cart from CartContext
    const { cart } = useCart();

    // To navigate to the order success page
    const navigate = useNavigate();

    // Set up state to store the values input in the form (CheckoutForm)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: ""
    });

    // Update the form fields (name, email & address) as the user types
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Function to handle order submission
    const handleOrderSubmit = async (event) => {
        // stop page refreshing when form submits
        event.preventDefault();

        // Don't submit the form if any field is empty or the cart is empty (using trim to remove extra spaces)
        if (
            formData.name.trim() === "" ||
            formData.email.trim() === "" ||
            formData.address.trim() === "" ||
            cart.length === 0
        ) {
            return;
        }

        // Calculate the total amount for 'total'
        let subtotal = 0;
        for (let item of cart) {
            subtotal += item.price * item.quantity;
        }

        // Format the total to always only show 2 decimal places
        const total = subtotal.toFixed(2);

        // Create the order object to send
        const order = {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            cartItems: cart,
            total: total
        }

        try {
            // Send POST request to backend
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/orders`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order) // The backend like local storage also expects data to be in string format
            });

            const data = await response.json();


            // Save order in localStorage, & include the order number
            localStorage.setItem("latestOrder", JSON.stringify({ ...order, orderNumber: data.orderNumber }));

            // Toastify message on successful order submission
            showCartToast("Order submitted successfully!", "success");

            // Navigate to success page
            navigate("/success");

        } catch (error) {
            console.error(error.message);
        }


    }



    return (
        <div>
            {/* Header with Logo */}
            <header className="w-full flex justify-center items-center p-2 bg-white">
                <Link to="/" className="cursor-pointer">
                    <img src="/lea-logo.png" alt="Leanne's Collection Logo" className="h-14 w-auto" />
                </Link>
            </header>

            {/* Banner */}
            <Banner text="Checkout" />

            {/* Checkout Form - with styling */}
            <div className="w-4/5 mx-auto bg-[#D9D9D9] p-6 ">
                <h2 className="text-xl text-[#453F3F] font-urbanist font-semibold text-center mb-4">Please Enter Your Shipping Information</h2>
                <CheckoutForm formData={formData} handleChange={handleChange} handleOrderSubmit={handleOrderSubmit} />
            </div>

            <hr className="border-black" />

            {/* Cart Table, remove buttons that adjust quantity (+ & -) */}
            <CartTable text="Total:" showQuantityControls={false}/>

            <hr className="border-black" />

            {/* Buttons */}
            <div className="flex justify-between items-center m-8 md:mx-20">

                {/* Back to Cart link button */}
                <LinkButton text="Back To Cart" to="/cart" className="w-40 text-center md:w-52" />

                {/* Submit order button, linked using the forms id to submit it*/}
                <button
                    type="submit"
                    form="checkout-form"
                    className="w-40 text-center font-urbanist md:w-52 px-4 py-2 rounded-lg bg-[#2D8993] text-white hover:bg-[#21677A] transition">
                    Submit Payment
                </button>

            </div>
        </div>
    )
}