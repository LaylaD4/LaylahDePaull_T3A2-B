import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import TextBanner from "../components/TextBanner";

export default function HomePage() {
    return(
        <div>
            <HeroSection />
            <TextBanner text="The Easy Way To Shop Face Paint. We Take All The Guess Work out. Take A Look At Some Of Our Kits We have On Offer..." />
            <AboutSection />
        </div>
    )
}