import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import CartPage from "../src/pages/CartPage";
import { CartContext } from "../src/context/CartContext";
import { MemoryRouter } from "react-router-dom";

// test product in cart
const testCartItem = {
  _id: "123",
  title: "Rainbow Flower Kit",
  price: 109.95,
  quantity: 1,
};

// UNIT TEST: renders CartPage with 1 item in the cart, & checks that the items title, subtotal, & the checkout button are displayed correctly.
test("shows item in cart, subtotal & checkout button", () => {
    // Render CartPage with a mocked cart & MemoryRouter so cart data & links work
    render(
    <CartContext.Provider value={{ cart: [testCartItem] }}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </CartContext.Provider>
  );

  // Check that the product title is displayed
  expect(screen.getByText("Rainbow Flower Kit")).toBeInTheDocument();

  // Check that the cart subtotal is correct
  expect(screen.getByTestId("cart-subtotal")).toHaveTextContent("$109.95");

  // Check that the checkout button is visible when cart has items an item in it
  expect(screen.getByText("Checkout")).toBeInTheDocument();
});
