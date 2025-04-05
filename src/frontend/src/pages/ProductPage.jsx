import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import SingleProduct from "../components/SingleProduct";
import VideoEmbed from "../components/VideoEmbed";

export default function ProductPage() {
    // Get the products id from the URL params
    const { id } = useParams();

    // Used to access the bgColour passed using Link's state (from ProductCard on previous page) to set the product’s background colour
    const location = useLocation();

    // Set up state to store the product
    const [product, setProduct] = useState(null);

    // Get the bgColour from location.state (use optional chaining ?; (in case it's null or undefined), or use a default if nothing was passed
    const bgColour = location.state?.bgColour || "bg-[#F5F5F5]/70";

    // Fetch product data when the page loads, or when the id changes
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Fetch the product details from backend API
                const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/products/${id}`);
                const data = await response.json();

                // Save the products data to state
                setProduct(data);

            } catch (error) {
                console.error(error.message);
            }
        };
        fetchProduct();
    }, [id]);

    // Loading message while product is being fetched
    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {/* Banner with products name */}
            <div className="mt-20">
                <Banner text={product.title} />
            </div>

            {/* Component used to display and style a single product's details; both the product and its background colour are passed in as props */}
            <SingleProduct product={product} bgColour={bgColour} />

            {/* Banner for Video */}
            <Banner text="How To Use The Kit" />
            {/* Component used to embed and style the product's video tutorial, both the video URL and background colour are passed as props */}
            <VideoEmbed videoURL={product.videoURL} bgColour={bgColour} />
        </div>
    );
}