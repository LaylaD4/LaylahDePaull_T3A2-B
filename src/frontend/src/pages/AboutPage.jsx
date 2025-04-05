import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import NewRelease from "../components/NewRelease";

export default function AboutPage() {
    return (
        <div>
            <div className="mt-20">
                <Banner text="A Little About Me" />
            </div>
            <AboutMe />
            <Banner text="How To Get In Touch" />
            <Contact />
            <Banner text="Check Out What's New" />
            <NewRelease />
        </div>
    )
}