import Banner from "../components/Banner";
import CartTable from "../components/CartTable";
import LinkButton from "../components/LinkButton";
import { useCart } from "../context/CartContext";

// This page shows the user's shopping cart & a checkout button if the cart isn't empty
export default function CartPage() {
    
    // Get the cart from context to check if it's empty (for showing/hiding the checkout button)
    const { cart } = useCart();
    
    return (
        <div>
            <Banner text="Shopping Cart" />
            <CartTable text="Subtotal:" />
            <hr className="border-black" />
            <div className=" flex justify-between items-center m-8">
                <LinkButton text="Continue Shopping" to="/shop" className="w-40 text-center md:w-52" />
                {/* Only show the checkout button if cart is not empty (using short-circuiting) */}
                {cart.length !== 0 && (
                    <LinkButton text="Checkout" to="/checkout" className="w-40 text-center bg-[#2D8993] md:w-52" />
                )}
            </div>
        </div>
    )
}