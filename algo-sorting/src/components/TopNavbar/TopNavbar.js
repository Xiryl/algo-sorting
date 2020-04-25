import React from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
            >
                <p className="txtCenter">
                    Generate a random array and choose and algorithm to sort it!
                </p>
            </div>
        </nav>
    );
};

export default TopNavbar;
