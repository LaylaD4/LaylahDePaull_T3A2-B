import Banner from "../components/Banner";
import VideoList from "../components/VideoList";

export default function TutorialsPage() {
    return (
        <div>
            <Banner text="Video Tutorials For Our Kits" />
            <VideoList gridCols="md:grid-cols-2" />
        </div>
    )
}