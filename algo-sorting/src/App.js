import React from "react";

import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Dashboard from "./containers/Dashboard/Dashboard";

import "./App.css";

function App() {
    return (
        <>
            <TopNavbar />
            <Dashboard />
            <BottomNavbar />
        </>
    );
}

export default App;
