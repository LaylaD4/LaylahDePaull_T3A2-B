// The CheckoutForm component displays the input fields for name, email, & shipping address, uses props formData to hold onto the values input, handleChange to update them, & handleOrderSubmit to submit the order
export default function CheckoutForm({ formData, handleChange, handleOrderSubmit }) {
    return (
        // Form to collect customers order shipping details, gave it an id, so the submit button can be placed in CheckoutPage, where i need it, & still submit this form.
        <div className="mt-36">
            <div className="w-4/5 mx-auto bg-[#D9D9D9] p-6">
                <h2 className="text-xl text-[#656464] font-urbanist font-semibold text-center mb-4">Please Enter Your Shipping Information</h2>
                <form className="w-full" onSubmit={handleOrderSubmit} id="checkout-form">

                    {/* Name & email fields - stacked on mobile, side by side on tablet/desktop screens */}
                    <div className="flex flex-col md:flex-row gap-4">

                        {/* Name field */}
                        <div className="flex flex-col flex-1">
                            <label className="font-medium text-[#453F3F] mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="p-2 border border-[#9E9E9E] rounded w-full"
                                required
                            />
                        </div>

                        {/* Email field */}
                        <div className="flex flex-col flex-1">
                            <label className="font-medium text-[#453F3F] mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-2 border border-[#9E9E9E] rounded w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Shipping address field */}
                    <div className="flex flex-col mt-4">
                        <label className="font-medium text-[#453F3F] mb-1">Shipping Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="p-2 border border-[#9E9E9E] rounded w-full"
                            required
                        />

                    </div>
                </form>
            </div>
        </div>
    );
}
