// Import emailjs service to send my forms data as an email
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { showCartToast } from "../utils/toastUtils";

// Contact component that displays a contact section with a form & other contact info 
export default function Contact() {
    // useRef hook to reference form element so emailjs can access its values
    const formRef = useRef();

    // Function to handle the contact forms submission
    const handleSendEmail = async (event) => {
        // Stop page refresh
        event.preventDefault();

        // Get the form input fields (name, email, message) from the formRef
        const { name, email, message } = formRef.current;

        // Check if any field is empty, after trimming blank spaces
        if (!name.value.trim()) {
            showCartToast("Please enter your name.", "emailError");
            return;
        }
        if (!email.value.trim()) {
            showCartToast("Please enter your email address.", "emailError");
            return;
        }
        if (!message.value.trim()) {
            showCartToast("Please enter your message.", "emailError");
            return;
        }

        try {
            // This sends the forms details to emailjs using its method .sendForm()
            await emailjs.sendForm(
                'service_btzkc0o', // emailjs Service id
                'template_pgc8om4', // emailjs Template id
                formRef.current, // reference to form input, with the user input
                'O88oDbNQKz0tyZVC0' // emailjs public key
            );

            // Toast notification when email sent
            showCartToast('Message sent successfully!', 'emailSuccess');
            // Clears the form fields when email is sent
            formRef.current.reset();

        } catch (error) {
            console.error(error.message);
            // Toast notication is email is NOT sent
            showCartToast('Failed to send message. Please try again.', 'emailError');

        }
    };


    return (
        // Main container, centres content horizontally & vertically
        <div className="w-full flex justify-center items-center px-4">

            {/* Content wrapper with white background, with responsive layout, left & right stacks for mobile, while sitting side by side for tablet/dektop screens */}
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-stretch bg-[#FFFFFF] shadow-lg p-4 md:p-8 gap-4 border-x-2 border-[#868A97]/30">

                {/* Left Side - contact form  */}
                <div className="flex-1 flex flex-col justify-center p-6 border-4 border-[#f6dcc4] bg-[#FFEAD6] shadow-xl">

                    {/* Heading */}
                    <h3 className="text-center text-lg md:text-xl font-semibold text-[#453F3F] mb-4">Send Me A Message</h3>

                    {/* Form with fields for name, email, message, with submit button, have used EmailJS, and added focus styles to highlight input fields when clicked */}
                    <form ref={formRef} onSubmit={handleSendEmail} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name" // emailjs reference for name field
                            placeholder="Name"
                            className="w-full p-3 border border-[#868A97]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D8ABD]"
                        />
                        <input
                            type="email"
                            name="email" // emailjs reference for email field
                            placeholder="Email"
                            className="w-full p-3 border border-[#868A97]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D8ABD]"
                        />
                        <textarea
                            name="message" // emailjs reference for message field
                            placeholder="Message..."
                            rows="4"
                            className="w-full p-3 border border-[#868A97]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D8ABD]"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-fit mx-auto bg-[#868A97] text-white text-sm md:text-lg font-medium py-2 px-6 rounded-md hover:bg-[#2e6598] transition">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side - Contact info text */}
                <div className="flex-1 flex flex-col justify-center items-center p-6 border-4 bg-[#FFEAD6] border-[#f6dcc4] shadow-lg">

                    {/* Main heading */}
                    <h3 className="text-center text-lg md:text-xl font-semibold text-[#453F3F] p-4 mb-2">For Information About Bookings, Masterclasses, & General Enquiries...</h3>

                    {/* Info section with email, phone, & social media links in a container with a white background */}
                    <div className="bg-[#FFFFFF] border border-[#868A97]/30 shadow-md py-16 px-4 rounded-lg text-center w-full font-medium">

                        {/* Sub-heading */}
                        <p className="text-lg text-[#7D8ABD] font-semibold mb-2">Please Contact Me On:</p>

                        {/* Wrapper to align contact details to the left inside the centred container */}
                        <div className="w-fit mx-auto text-left">

                            {/* Email link */}
                            <p className="text-md text-[#453F3F] font-urbanist mb-1"><b>Email: </b>
                                <a href="mailto:leannesrainbow@gmail.com" className="hover:text-[#2e6598]">leannesrainbow@gmail.com</a>
                            </p>

                            {/* Phone number link */}
                            <p className="text-md text-[#453F3F] font-urbanist mb-1"><b>Phone: </b>
                                <a href="tel:0400123346" className="hover:text-[#2e6598]">0400 123 346</a>
                            </p>

                            {/* Social media links */}
                            <p className="text-md text-[#453F3F] font-urbanist"><b>Socials:</b>
                                <a href="https://www.facebook.com/p/Leanne-Courtney-Fun-Faces-4-Kids-100072407674366/" target="_blank" className="hover:text-[#2e6598]"> Facebook</a>,
                                <a href="https://www.instagram.com/leannesrainbow/?hl=en" target="_blank" className="hover:text-[#2e6598]"> Instagram </a>,
                                <a href="https://www.tiktok.com/@leannesrainbow" target="_blank" className="hover:text-[#2e6598]">TikTok </a> &
                                <a href="https://www.youtube.com/@leannesrainbowcollection7377" target="_blank" className="hover:text-[#2e6598]"> YouTube</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}