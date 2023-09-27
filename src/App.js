import React from "react";
import DayPage from "./components/containers/DayPage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <DayPage/>
            <Footer />
        </div>
    );
}

export default App;
