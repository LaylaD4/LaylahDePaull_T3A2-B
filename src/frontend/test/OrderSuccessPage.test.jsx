import { render, screen, waitFor } from "@testing-library/react";
import { test, expect } from "vitest";
import OrderSuccessPage from "../src/pages/OrderSuccessPage";
import { CartContext } from "../src/context/CartContext";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useState, useContext } from "react";

// Test order
const testOrder = {
    orderNumber: "2007",
    name: "Lucy Miller",
    email: "lucyM@email.com",
    address: "10 The Esplanade Cronulla",
    cartItems: [
        {
            _id: "123",
            title: "Rainbow Flower Kit",
            price: 109.95,
            quantity: 1,
        },
    ],
};

// Custom test provider that uses useState & clears the cart state & localStorage (ie; "cart" & "latestOrder") like in my app
function TestCartProvider({ children }) {
    const [cart, setCart] = useState(testOrder.cartItems);

    const clearCart = () => {
        // Reset the cart back to an empty array
        setCart([]);
        // Remove cart from localStorage
        localStorage.removeItem("cart");
        // Remove the latest order from localStorage
        localStorage.removeItem("latestOrder");
    };

    // Provide cart & clearCart through context so they can be used in the test
    return (
        <CartContext.Provider value={{ cart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Component to check the current length of the cart from context
function CartStateViewer() {
    // Get cart from context
    const { cart } = useContext(CartContext);
    // Retrun the carts length
    return <div data-testid="cart-length">{cart.length}</div>;
}

// INTEGRATION TEST: shows a successfully checked out orders details & clears the cart (state & local storage) when "Back Home" link is clicked
test("shows order details & clears cart when Back Home button is clicked", async () => {
    // Load localStorage with the testOrder
    localStorage.setItem("latestOrder", JSON.stringify(testOrder));
    localStorage.setItem("cart", JSON.stringify(testOrder.cartItems));

   // Render the OrderSuccessPage using custom test provider (for access to cart/clearCart) & memory router (i.e; Link), & include CartStateViewer to check if cart state is empty
    render(
        <TestCartProvider>
            <MemoryRouter>
                <OrderSuccessPage />
                <CartStateViewer />
            </MemoryRouter>
        </TestCartProvider>
    );

    // Check that the banner text displays the correct order number
    expect(await screen.findByText("Order #2007")).toBeInTheDocument();
    // Check that the customer's name is shown in the order details
    expect(screen.getByTestId("customer-name")).toHaveTextContent("Lucy Miller");
    // Check that the customer's email is shown in the order details
    expect(screen.getByTestId("customer-email")).toHaveTextContent("lucyM@email.com");
    // Check that the customer's address is shown in the order details
    expect(screen.getByTestId("customer-address")).toHaveTextContent("10 The Esplanade Cronulla");

    // Setup user
    const user = userEvent.setup();
    // Click the "Back Home" button (this should run clearCart)
    await user.click(screen.getByTestId("back-home-button"));

    await waitFor(() => {
        // Check that cart localStorage is cleared
        expect(localStorage.getItem("cart")).toBeNull();
        // Check that latestOrder localStorage is cleared
        expect(localStorage.getItem("latestOrder")).toBeNull();
        // Check that cart state is empty
        expect(screen.getByTestId("cart-length")).toHaveTextContent("0");
    });
});
