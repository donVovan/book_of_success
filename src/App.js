import React from "react";
import DayPage from "./components/containers/DayPage";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <DayPage/>
        </div>
    );
}

export default App;
