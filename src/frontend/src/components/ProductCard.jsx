import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";

// The ProductCard component displays a product's title, image, and price, & when on the ShopPage shows an add to cart button, each card gets a unique background colour (bgColour) passed in as a prop.
export default function ProductCard({ product, showAddToCart, bgColour }) {
    return (

        // Main container limits max-width of card to 280px, & vertically stacks content
        <div className="w-full max-w-[280px] flex flex-col items-center">

            {/* Wrapping ProductCard with Link to navigate to the ProductPage for the product clicked, also passing bgColour using Link's state to keep the background colour the same */}
            <Link to={`/product/${product._id}`} state={{ bgColour }} className="w-full flex flex-col items-center no-underline">
                
                {/* Image section, background colour is unique to product, colour passed as prop */}
                <div className={`${bgColour} w-full h-4/5 flex items-center justify-center shadow-md overflow-hidden`}>
                    <img
                        // The product image is stored in public backend folder, need to get image URL path to load the image; as {product.image} only fetches the filename.
                        src={`${import.meta.env.VITE_BACKEND_API_URL}/${product.image}`}
                        alt={product.title}
                        className="w-[95%] h-auto max-h-[80%] object-contain"
                    />
                </div>

                {/* Title & price section */}
                <div className="w-full text-center mt-2 font-urbanist">
                    <h2 className="text-lg">{product.title}</h2>
                    <p className="font-urbanist">${product.price}</p>
                </div>
            </Link>

            {/* Add to Cart Button - only shown if showAddToCart is true, ie; for the ShopPage, false for HomePage */}
            {showAddToCart && <AddToCartButton />}

        </div>
    );
}