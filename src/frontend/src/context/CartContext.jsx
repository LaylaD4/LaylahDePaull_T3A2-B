import { createContext, useContext, useState } from "react";

// Create the CartContext to be used throughout the app (eg; ShopPage, CartPage, ProductPage, CheckoutPage)
const CartContext = createContext();

export default function CartProvider({ children }) {

    // Initialise cart as an empty array
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart, or increase its quantity if it already exists
    const addToCart = (product) => {
        setCart((prev) => {

            // Check if the product is already in the cart by matching its _id
            const existingItem = prev.find((item) => item._id === product._id);

            // If the product is already in the cart
            if (existingItem) {
                // Map through the cart & increase the quantity of the matching item
                return prev.map((item) =>
                    // Use ternary to update the matching item, or return the item unchanged
                    // When matching, use the spread operator to copy all properties (_id, title, price), & overwrite the quantity with the new value.
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            // If the product was not in the cart, add it with quantity value of 1
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook to get cart data and functions
export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        console.log("useCart must be used within a CartProvider");
    }

    return context;
}
