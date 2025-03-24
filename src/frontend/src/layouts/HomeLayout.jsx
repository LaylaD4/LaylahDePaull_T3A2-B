import { Outlet } from "react-router-dom"; 
import Header from "../components/Header";

export default function HomeLayout() {
    return (
        // Layout with Header at top and page content below, taking up the full screen height. Footer will be added later at the bottom.
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    );
}