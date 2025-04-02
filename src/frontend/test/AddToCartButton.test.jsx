import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import AddToCartButton from "../src/components/AddToCartButton";
import CartProvider from "../src/context/CartContext";
import { CartContext } from "../src/context/CartContext";

// Test product
const testProduct = {
    _id: "123",
    title: "Rainbow Flower Kit",
    price: 109.95,
    quantity: 1,
};

// UNIT TEST 1: checks if the "Add to Cart" button renders when product is not in the cart
test("renders 'Add to Cart' button if product not in cart", () => {
    render(
        // CartProvider starts with an empty cart, so testProduct isn't in the cart yet — the button should be visible since it hasn't been clicked by the user
        <CartProvider>
            <AddToCartButton product={testProduct} />
        </CartProvider>
    );

    // Check if the add to cart button is visible, as there is no product in the cart
    expect(screen.getByTestId("add-to-cart-button")).toBeInTheDocument();
});

// UNIT TEST 2: shows quantity & quanity controls (+/-) if the test product is already in the cart
test("renders quantity & quantity controls if a product is already in the cart", () => {
    
    // Provide a cart that already has testProduct in it
    render(
      <CartContext.Provider value={{ cart: [testProduct] }}>
        <AddToCartButton product={testProduct} />
      </CartContext.Provider>
    );
    
    // Check that the add to cart button is NOT shown
    expect(screen.queryByTestId("add-to-cart-button")).not.toBeInTheDocument();
    
    // Check that the quantity is shown as 1 
    expect(screen.getByText("1")).toBeInTheDocument();
    
    // Check that the decrement symbol - is shown
    expect(screen.getByText("-")).toBeInTheDocument();

    // Check that the increment symbol + is shown
    expect(screen.getByText("+")).toBeInTheDocument();
  });

// INTEGRATION TEST: simulates clicking the "Add to Cart" button, which adds the test product to the cart & hides the button
test("clicking 'Add to Cart' button hides it", async () => {
    // Setup a user to click button
    const user = userEvent.setup();

    // Render AddToCartButton with CartProvider
    render(
        <CartProvider>
            <AddToCartButton product={testProduct} />
        </CartProvider>
    );

    // Check button is initially shown
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    expect(addToCartButton).toBeInTheDocument();

    // Simulate the user clicking the button
    await user.click(addToCartButton);

    // Check that the button is now gone
    expect(screen.queryByTestId("add-to-cart-button")).not.toBeInTheDocument();
});
