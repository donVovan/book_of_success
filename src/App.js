import React from "react";
import "./components/styles/App.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="wrapper">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
