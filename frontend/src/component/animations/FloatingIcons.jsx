import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./FloatingIcons.css";

const FloatingIcons = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* WhatsApp Icon */}
            <a
  href="https://wa.me/91937"
  className="floating-icon whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-whatsapp"></i>
</a>

{showButton && (
  <button className="floating-icon back-to-top" onClick={scrollToTop}>
    <i className="fas fa-caret-up"></i>
  </button>
)}

        </>
    );
};

export default FloatingIcons;
