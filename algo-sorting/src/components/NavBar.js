import React from "react";

const navBar = () => {
    return (
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Algo-Sorting
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default navBar;
