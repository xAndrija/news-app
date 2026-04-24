import React from "react";
import "./Footer.css";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <p>
                &copy; {currentYear} News App. Sva prava zadržana.
            </p>
        </footer>
    );
}

export default Footer