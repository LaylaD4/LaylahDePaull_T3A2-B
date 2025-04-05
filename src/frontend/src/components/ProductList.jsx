import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import backgroundColours from "../utils/backgroundColours";

// The ProductList component shows the list of ProductCards, props control if the Add to Cart button is shown, how many products shown (limit - for HomePage, only shows 3), how many columns to show (eg; grid-cols; 3 on tablet (md) screen for HomePage, will be 2 for ShopPage)
export default function ProductList({ showAddToCart = true, limit = null, gridCols }) {

    // UseState to store list of Products
    const [products, setProducts] = useState([])

    // Function to fetch products from the backend
    const fetchProducts = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/products`);
            let data = await response.json();

            // If a value for limit is given, only show that number of products (eg; 3 on HomePage)
            if (limit) {
                data = data.slice(0, limit);
            }

            // Save the product data to state
            setProducts(data);

        } catch (error) {
            console.error(error.message);
        }
    }


    // Run fetchProducts function when this component loads
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        // Container for the product cards – using grid to make it responsive on different screen sizes
        <div className={`max-w-7xl mx-auto grid grid-cols-1 ${gridCols} lg:grid-cols-3 gap-8 p-4 place-items-center m-4`}>
            
            {/* Loop through products to show a ProductCard for each one, and assign the products background colour based on its index */}
            {products.map((product, index) => (
                <div
                    key={product._id}
                    className="w-full sm:w-[80%] md:w-[70%] lg:w-[90%] flex justify-center">

                    <ProductCard
                        key={product._id}
                        product={product}
                        bgColour={backgroundColours[index]}
                        showAddToCart={showAddToCart} />
                </div>
            ))}
        </div>
    );
}