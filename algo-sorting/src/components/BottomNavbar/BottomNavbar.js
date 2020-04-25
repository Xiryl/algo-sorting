import React from "react";

import "./BottomNavbar.css";

const BottomNavbar = () => {
    return (
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bgColor">
            <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
            >
                <p className="text txtCenter">
                    Sorting Visualizer
                    <br />
                    fabio@chiarani.it ~ github.com/Xiryl
                </p>
            </div>
        </nav>
    );
};

export default BottomNavbar;
