import { Link } from "react-router-dom";

// Reusable LinkButton created with default styles, also accepts props for text, route, and extra class styles.
export default function LinkButton({ to, text, className }) {
    return (
        <Link 
            to={to} 
            className={`px-4 md:px-6 py-2 bg-[#868A97] font-urbanist text-white text-sm md:text-lg rounded-lg hover:bg-[#2e6598] transition ${className}`}>
            {text}
        </Link>
    );
}