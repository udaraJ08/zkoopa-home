import React from "react";
import "./assets/css/theme.css"
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Welcome from "./views/Welcome/Welcome";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Minter from "./views/Minter/Minter";

const App = () => {

    return <div>
        <BrowserRouter>
        <Welcome/>
        <NavBar/>
        <div className="w-100 center">
            <div style={{marginTop: "100px", width: "95%"}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/minter" element={<Minter />} />
                    </Routes>
            </div>
        </div>
        <Footer/>
        </BrowserRouter>
    </div>
}

export default App;
