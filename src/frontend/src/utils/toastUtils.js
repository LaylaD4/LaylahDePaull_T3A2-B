import { toast } from "react-toastify";

export const showCartToast = (message, type) => {
    // Default colour
    let backgroundColour = "#c389c5";

    if (type === "remove") {
        backgroundColour = "#e57373";
    } else if (type === "success") {
        backgroundColour = "#5ac3b5";
    }

    toast(message, {
        style: {
            background: backgroundColour,
            color: "#ffffff",
            fontFamily: "'Ysabeau Office', sans-serif",
            padding: "8px 12px",
            fontSize: "18px",
            borderRadius: "4px",
        },
        hideProgressBar: true,
        autoClose: 2500,
        position: "top-right",
        icon: false,
    });
};
