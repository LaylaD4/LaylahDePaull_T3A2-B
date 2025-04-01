import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import AddToCartButton from "../src/components/AddToCartButton";
import { CartContext } from "../src/context/CartContext";


// Test product
const testProduct = {
    _id: "123",
    title: "Rainbow Flower Kit",
    price: 109.95,
    quantity: 1,
};

// UNIT TEST: render the AddToCartButton using real CartContext with an empty cart
test("shows 'Add to Cart' button when no products are in the cart", () => {
    // Render AddToCartButton inside CartContext with an empty cart to check if just the button shows
    render(
        <CartContext.Provider value={{ cart: [] }}>
            <AddToCartButton product={testProduct} />
        </CartContext.Provider>
    );

    // Check that the "Add to Cart" button appears
    expect(screen.getByTestId("add-to-cart-button")).toBeInTheDocument();
});