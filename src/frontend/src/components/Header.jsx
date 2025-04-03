import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Header will be used across most pages on the website, and so will add to HomeLayout to wrap those other pages.
export default function Header() {
    // Track if mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Get cart from context 
    const { cart } = useCart();

    // Count items in cart
    let cartCounter = 0;
    for (const item of cart) {
        cartCounter += item.quantity;
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-[#FFFFFF] p-4 py-2 border-b-2 border-[#868A97] z-40">
            {/* Main container for the navbar */}
            <div className="max-w-6xl mx-auto flex justify-between items-center h-16">

                {/* Hamburger menu icon for only mobile screens (sm) */}
                <div className="md:hidden">
                    {/* Change state when a menu icon is clicked */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img
                            // Use ternary to select correct icon
                            src={isMenuOpen ? "/menu-close-icon.png" : "/menu-open-icon.png"}
                            alt="Menu Icon"
                            className="h-12 w-12"
                        />
                    </button>

                </div>

                {/* Lea-logo is centered when in mobile screen (sm), and is on the left for desktop (lg) & tablet (md) screens. */}
                {/* Need to centre the logo on mobile using absolute positioning, but go back to left side (static) on tablet and desktop screens. */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-50">
                    <Link to="/" className="cursor-pointer block" onClick={() => setIsMenuOpen(false)}>
                        <img src="/lea-logo.png" alt="Leanne's Collection Logo" className="h-14 w-auto block" />
                    </Link>
                </div>

                {/* Navigation links shown in tablet (md) and desktop (lg) screen sizes, and hidden in mobile screen */}
                <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2 w-full">
                    <nav className="flex gap-12 font-urbanist text-black">
                        <Link to="/" className="text-xl md:text-2xl lg:text-3xl hover:underline decoration-[#7D8ABD]">Home</Link>
                        <Link to="/shop" className="text-xl md:text-2xl lg:text-3xl hover:underline decoration-[#7D8ABD]">Shop</Link>
                        <Link to="/about" className="text-xl md:text-2xl lg:text-3xl hover:underline decoration-[#7D8ABD]">About</Link>
                        <Link to="/tutorials" className="text-xl md:text-2xl lg:text-3xl hover:underline decoration-[#7D8ABD]">Tutorials</Link>
                    </nav>
                </div>

                {/* Shopping cart is always on the right */}
                <div className="flex flex-grow justify-end">
                    
                    {/* Wrapped cart icon in Link to CartPage */}
                    <Link to="/cart" className="cursor-pointer block z-50" onClick={() => setIsMenuOpen(false)} >

                        {/* Container to wrap cart icon image & display count */}
                        <div className="relative p-1">

                            {/* Cart icon */}
                            <img src="/cart-icon.png" alt="Shopping Cart Icon" className="h-12 w-12 block" />

                            {/* Count - display number of items in cart at right corner of icon, & use short-circuiting to ensure the number is only shown if > 0 */}
                            {cartCounter > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#d93772] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCounter}
                                </span>
                            )}
                        </div>

                    </Link>
                </div>
            </div>

            {/* Show mobile dropdown menu only when isMenuOpen is true (using short-circuit && rendering) */}
            {isMenuOpen && (
                // Position mobile navbar below menu icons using absolute positioning
                <div className="md:hidden absolute left-0 w-full bg-[#FFFFFF] shadow-lg z-50 mt-2 pt-6">
                    <nav className="flex flex-col items-center gap-6 font-urbanist text-black">
                        <Link to="/" className="text-2xl p-4" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/shop" className="text-2xl p-4" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link to="/about" className="text-2xl p-4" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/tutorials" className="text-2xl p-4" onClick={() => setIsMenuOpen(false)}>Tutorials</Link>
                    </nav>
                </div>
            )}
        </div>
    );
}