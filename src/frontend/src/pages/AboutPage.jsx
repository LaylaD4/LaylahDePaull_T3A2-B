import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import NewRelease from "../components/NewRelease";

export default function AboutPage() {
    return (
        <div>
            <Banner text="A Little About Me" />
            <AboutMe />
            <Banner text="How To Get In Touch" />
            <Contact />
            <Banner text="Check Out What's New" />
            <NewRelease />
        </div>
    )
}