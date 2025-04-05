import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import CartPage from "../src/pages/CartPage";
import { CartContext } from "../src/context/CartContext";
import { MemoryRouter } from "react-router-dom";

// Test product in cart
const testCartItem = {
  _id: "123",
  title: "Rainbow Flower Kit",
  price: 109.95,
  quantity: 1,
};

// UNIT TEST 1: shows empty cart message when there are no items in the cart
test("shows empty cart message when cart is empty", () => {

  // Render CartPage with a mocked empty cart
  render(
    <CartContext.Provider value={{ cart: [] }}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </CartContext.Provider>
  );


  // Check that the empty cart message is shown (in both desktop & mobile views)
  const messages = screen.getAllByText("Your Cart is Currently Empty.");
  expect(messages.length).toBeGreaterThanOrEqual(1);
});

// UNIT TEST 2: renders CartPage with 1 item in the cart, & shows the title, subtotal, & the checkout button
test("shows item in cart, subtotal & checkout button", () => {

  // Render CartPage with a mocked cart containing 1 item
  render(
    <CartContext.Provider value={{ cart: [testCartItem] }}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </CartContext.Provider>
  );

  // Check that the product title is displayed (in both desktop & mobile views)
  const titles = screen.getAllByText("Rainbow Flower Kit");
  expect(titles.length).toBeGreaterThanOrEqual(1);

  // Check that the cart subtotal is correct
  expect(screen.getByTestId("cart-subtotal")).toHaveTextContent("$109.95");

  // Check that the checkout button is visible 
  expect(screen.getByText("Checkout")).toBeInTheDocument();
});
