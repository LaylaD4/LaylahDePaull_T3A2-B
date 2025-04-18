import ProductList from "../components/ProductList";
import Banner from "../components/Banner";

// ShopPage – displays a banner and a list of all the products available for sale on the website
export default function ShopPage() {
    return (
        <div>
            <div className="mt-20">
                <Banner text="Shop Our Range Of Kits" />
            </div>
            {/* Only want to show products in 2 columns on tablets (md) for this page */}
            <ProductList gridCols="md:grid-cols-2" />
        </div>
    )
}