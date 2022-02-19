import React from "react";
import "./assets/css/theme.css"

import "./App.css";
import Home from "./views/Home/Home";
import Welcome from "./views/Welcome/Welcome";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {

    return <div>
        <Welcome/>
        <NavBar />
        <Home/>
        <Footer/>
    </div>
}

export default App;
