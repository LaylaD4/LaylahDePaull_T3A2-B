import { createContext, useContext, useEffect, useState } from "react";

// Create the CartContext to be used throughout the app (eg; ShopPage, CartPage, ProductPage, CheckoutPage)
export const CartContext = createContext();

export default function CartProvider({ children }) {

    // Initialise cart with data from local storage (for page refresh), or just start with an empty array
    const [cart, setCart] = useState(() => {
        const saveCart = localStorage.getItem("cart");
        // Use a ternary to check if a cart exists — parse it (convert string back to array) if it does, or return an empty array if it doesn't
        return saveCart ? JSON.parse(saveCart) : [];
    });

    // Save the cart to localStorage every time it updates
    useEffect(() => {
         // Convert the cart to a string, & save it to local storage (must be a string); runs whenever cart changes
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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

    // Function to remove a product from the cart by its id
    const removeFromCart = (id) => {
        // Remove the item from the cart by filtering out the one with the matching _id; will use when quantity = 1
        setCart((prev) => prev.filter((item) => item._id !== id));
    };

    // Function to update the quantity of a product already in the cart
    const updateQuantity = (id, newQuantity) => {
        // Update the quantity of a cart item by matching its _id & setting the new quantity
        setCart((prev) =>
            prev.map((item) =>
                item._id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Function to clear the cart & remove from localStorage
    const clearCart = () => {
        // Set cart as an empty array
        setCart([]);
        
        // Remove the cart from local storage (saved during CartPage use)
        localStorage.removeItem("cart");
        
        // Remove the latest order from local storage (saved at checkout)
        localStorage.removeItem("latestOrder");

    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
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
