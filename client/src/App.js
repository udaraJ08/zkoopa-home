import React, {useEffect, useState} from "react";
import "./assets/css/theme.css"
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Welcome from "./views/Welcome/Welcome";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Minter from "./views/Minter/Minter";
import getWeb3 from "./getWeb3";
import {loadWeb3Account, loadWeb3Contract} from "./utils/web3connecter";
import {useDispatch, useSelector} from "react-redux";
import {connectWeb3Listen} from "./redux/actions";
import MainLoading from "./components/MainLoading";

const App = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.appReducer);

    useEffect(() => {
        dispatch(connectWeb3Listen());
        console.log(loading);
    }, [loading]);

    if (loading) return <MainLoading/>
    else {
        return <div>
            <BrowserRouter>
                <Welcome/>
                <NavBar/>
                <div className="w-100 center">
                    <div style={{marginTop: "100px", width: "95%"}}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/minter" element={<Minter/>}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    }
}

export default App;
