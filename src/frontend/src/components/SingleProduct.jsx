import AddToCartButton from "./AddToCartButton";

// SingleProduct component displays an individual product with image, description, price, and add to cart button
export default function SingleProduct({ product, bgColour }) {
    return (
        // Main container with responsive layout, image on the left & description on the right for tablet/desktop, stacked vertically on mobile, with background colour (specific to the product) is passed in as a prop.
        <div className={`max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-stretch min-h-[500px] ${bgColour}`}>

            {/* Left Side – Product image section */}
            <div className="flex-1 flex justify-center items-center p-6">
                <img
                    // The product image is stored in public backend folder, need to get image URL path to load the image; as {product.image} only fetches the filename.
                    src={`${import.meta.env.VITE_BACKEND_API_URL}/${product.image}`}
                    alt={product.title}
                    className="max-w-[400px] min-w-[300px] w-[80%] h-auto shadow-xl object-contain "
                />
            </div>

            {/* Right Side – Product description, price, and add to cart button */}
            <div className="flex-1 flex flex-col justify-center items-center p-6">
                <div className="w-full max-w-[450px] text-left p-6">

                    {/* Product description heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#868A97] text-center mb-4">Description</h2>

                    {/* Product description */}
                    <p className="text-md text-[#453F3F] font-urbanist mb-4">{product.description}</p>

                    {/* Product price */}
                    <p className="text-xl font-medium text-[#453F3F] text-center mb-4">${product.price}</p>

                    {/* Add to cart button - centred, pass the product as prop, so it can be added to the cart */}
                    <div className="flex justify-center">
                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}