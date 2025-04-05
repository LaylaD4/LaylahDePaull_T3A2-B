import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Banner from "../components/Banner";
import CopyFooter from "../components/CopyFooter";
import { showCartToast } from "../utils/toastUtils";


// LoginPage allows an admin to create (register) an admin account (limit of 2 accounts only, enforced by backend)
export default function LoginPage() {
    // Set up state to save email 
    const [email, setEmail] = useState("");

    // Set up state to save password
    const [password, setPassword] = useState("");

    // Set up state to toggle between registering/logging into an account (show login as default view)
    const [isRegistering, setIsRegistering] = useState(false);

    // Set up navigation for when navigating after login to admin order dashboard
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        // Stop the page from refreshing when the form is submitted
        event.preventDefault();

        // Use ternary to decide which api endpoint to fetch, either; /register or /login
        const endpoint = isRegistering ? `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/register` : `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/login`;

        // Send POST request with endpoint (route), to either register account or login to account
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            // Convert the response to a js object
            const data = await response.json();

            // Show error message from backend if registration is closed (ie; already 2 admin users)
            if (!response.ok) {
                alert(data.message);
                return;
            }

            // Use conditional to check if registering or logging in; need to create token
            if (!isRegistering) {
                // If login; store jwt (already a string) generated after login in local storage
                localStorage.setItem("adminToken", data.token);

                // Toastify message on successful login
                showCartToast("Login successful!", "login");

                // Navigate to admin order dashboard
                navigate("/admin/orders")
            } else {
                // If register; set state for isRegistering back to false to login user
                alert("Registration successful! You can now login to your account")
                setIsRegistering(false);
            }

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        // Main container for page, header, banner form & footer
        <div className="flex flex-col min-h-screen">

            {/* Header with Logo */}
            <header className=" fixed top-0 left-0 w-full flex justify-center items-center p-2 bg-white">
                <Link to="/" className="cursor-pointer z-50">
                    <img src="/lea-logo.png" alt="Leanne's Collection Logo" className="h-14 w-auto" />
                </Link>
                {/* Banner; login or register (use ternary to decide text) */}
                <div className="fixed w-full mt-36">
                    <Banner text={isRegistering ? "Register" : "Login"} />
                </div>
            </header>


            {/* Container that wraps form for login/register */}
            <div className="mt-36">
                <div className="flex justify-center bg-[#BCA6A6]/40 items-center mx-8 md:mx-20 shadow-md">
                    <div className="w-[70%] max-w-lg p-6">

                        {/* Form for login/register */}
                        <form onSubmit={handleSubmit} className="space-y-4 font-urbanist">

                            {/* Email field */}
                            <div>
                                <label className="block text-[#453F3F] text-sm md:text-md lg:text-lg font-medium text-center">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="w-full p-2 border rounded"
                                    data-testid="email-input"
                                    required
                                />
                            </div>

                            {/* Password field */}
                            <div>
                                <label className="block text-[#453F3F] text-sm md:text-md lg:text-lg font-medium text-center">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="w-full p-2 border rounded"
                                    data-testid="password-input"
                                    required
                                />
                            </div>

                            {/* Form submit button */}
                            <div className="flex justify-center">
                                <button type="submit" data-testid="submit-button" className="w-48 p-2 bg-[#2D8993] text-white rounded font-urbanist mt-2 hover:bg-[#2e6598] transition">
                                    {/* Use ternary to decide text on submit button; register/login */}
                                    {isRegistering ? "Register" : "Login"}
                                </button>
                            </div>
                        </form>

                        {/* Button to toggle backend endpoint & text shown; register/login here */}
                        <button
                            onClick={() => setIsRegistering(!isRegistering)}
                            data-testid="toggle-button"
                            className="w-full mt-4 text-md md:text-lg font-ysabeau font-medium text-[#080be6e3] hover:underline">
                            {isRegistering ? "Login Here" : "Register Here"}
                        </button>
                    </div>
                </div>
            </div>

            <hr className="border-black" />

            {/* Small copyright footer */}
            <CopyFooter />

        </div>
    )
}