import Banner from "../components/Banner";
import VideoList from "../components/VideoList";

export default function TutorialsPage() {
    return (
        <div>
            <div className="mt-20">
                <Banner text="Video Tutorials For Our Kits" />
            </div>
            <VideoList gridCols="md:grid-cols-2" />
        </div>
    )
}