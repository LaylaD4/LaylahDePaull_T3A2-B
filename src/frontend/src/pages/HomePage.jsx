import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import LinkButton from "../components/LinkButton";
import ProductList from "../components/ProductList";
import TextBanner from "../components/TextBanner";

export default function HomePage() {
    return(
        <div>
            <HeroSection />
            <TextBanner text="The Easy Way To Shop Face Paint. We Take All The Guess Work out. Take A Look At Some Of Our Kits We have On Offer..." />
            <ProductList showAddToCart={false} limit={3} gridCols="md:grid-cols-3" />
            <div className="flex justify-center mb-6">
                <LinkButton to="/shop" text="View More" />
            </div>
            <AboutSection />
        </div>
    )
}