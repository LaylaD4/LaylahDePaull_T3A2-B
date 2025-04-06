import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import LinkButton from "../components/LinkButton";
import ProductList from "../components/ProductList";
import TextBanner from "../components/TextBanner";
import VideoList from "../components/VideoList";

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
            <TextBanner text="Take A Look At Our Video Tutorials. Learn How To Use Each Kit, & Pick Up Some Handy Hints..." />
            <VideoList limit={3} gridCols="md:grid-cols-3" />
            <div className="flex justify-center mb-6">
                <LinkButton to="/tutorials" text="View More" />
            </div>
        </div>
    )
}