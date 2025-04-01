import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import AddToCartButton from "../src/components/AddToCartButton";
import CartProvider from "../src/context/CartContext";

// Test product
const testProduct = {
  _id: "123",
  title: "Rainbow Flower Kit",
  price: 109.95,
  quantity: 1,
};


// INTEGRATION TEST: renders AddToCartButton, first checks that the "Add to Cart" button is visible, & then verifies it disappears after the testProduct is added (clicked)
test("clicking 'Add to Cart' button hides it", async () => {
  // Setup a user to click button
  const user = userEvent.setup();

  // Render AddToCartButton with CartProvider
  render(
    <CartProvider>
      <AddToCartButton product={testProduct} />
    </CartProvider>
  );

  // Check the button is initially visible
  const addToCartButton = screen.getByTestId("add-to-cart-button");
  expect(addToCartButton).toBeInTheDocument();

  // Simulate the user clicking the "Add to Cart" button (adds testProduct to cart)
  await user.click(addToCartButton);

  // Check that the "Add to Cart" button is now gone
  expect(screen.queryByTestId("add-to-cart-button")).not.toBeInTheDocument();
});