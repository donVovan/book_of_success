import React from "react";
import DayPage from "./components/containers/DayPage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <div className="header"><Header/></div>
            <div className="content"><DayPage/></div>
            <div className="footer"><Footer/></div>
        </div>
    );
}

export default App;
