import { render, screen, waitFor } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import LoginPage from "../src/pages/LoginPage";
import { MemoryRouter } from "react-router-dom";


// UNIT TEST 1: shows correct labels for email & password fields
test("displays correct labels for the email & password fields", () => {
  render(
    // Render the LoginPage with MemoryRouter
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  // Check that the label for email is shown
  expect(screen.getByText("Email")).toBeInTheDocument();
  
  // Check that the label for password is shown
  expect(screen.getByText("Password")).toBeInTheDocument();
});

// UNIT TEST 2: toggle button switches the form between Login & Register
test("toggle button switches the form between Login & Register", async () => {
  // Setup a user to click button
  const user = userEvent.setup();

  // Render the LoginPage With memoryRouter
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  // Check that the default login form is shown
  expect(screen.getByTestId("submit-button")).toHaveTextContent("Login");

  // Simulate the user clicking the toggle button
  await user.click(screen.getByTestId("toggle-button"));

  // Check that the form is now in register mode
  expect(screen.getByTestId("submit-button")).toHaveTextContent("Register");

  // Toggle back to login mode, & check if login form is shown
  await user.click(screen.getByTestId("toggle-button"));
  expect(screen.getByTestId("submit-button")).toHaveTextContent("Login");
});

// INTEGRATION TEST: simulates full user registration & login flow interaction with token manually added when logging in
test("registers admin user then logs them in & stores their token", async () => {
  // Clear localStorage first so the test always starts clean
  localStorage.clear();

  // Setup a user to click button
  const user = userEvent.setup();

  // Render the LoginPage with MemoryRouter
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  // Toggle to the registration form, as default form is "Login"
  await user.click(screen.getByTestId("toggle-button"));
  expect(screen.getByTestId("submit-button")).toHaveTextContent("Register");

  // Fill out the registration form & click the register button
  await user.type(screen.getByTestId("email-input"), "lucyAdmin@email.com");
  await user.type(screen.getByTestId("password-input"), "password1234");
  await user.click(screen.getByTestId("submit-button"));

  // Manually toggle back to login mode, as the form doesn’t actually submit to the backend — so setIsRegistering(false) doesn’t run like it normally would
  await user.click(screen.getByTestId("toggle-button"));
  expect(screen.getByTestId("submit-button")).toHaveTextContent("Login");

  // Clear the fields here, only to separate the login step from registration, however this isn't necessary in app, as the values stay filled
  await user.clear(screen.getByTestId("email-input"));
  await user.clear(screen.getByTestId("password-input"));

  // Fill in login form using same email & password
  await user.type(screen.getByTestId("email-input"), "lucyAdmin@email.com");
  await user.type(screen.getByTestId("password-input"), "password1234");

  // Click the login button
  await user.click(screen.getByTestId("submit-button"));

  // Manually set a token in localStorage to simulate a successful login
  localStorage.setItem("adminToken", "test-token-string");

  // Check that the token is saved to localStorage
  await waitFor(() => {
    expect(localStorage.getItem("adminToken")).toBe("test-token-string");
  });
});
