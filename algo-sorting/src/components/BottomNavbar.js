import React from "react";

const BottomNavbar = () => {
    return (
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
            <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
            >
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <p className="nav-link">Home</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default BottomNavbar;
