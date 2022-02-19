import React, {useState} from "react";
import '../assets/css/navbar.css'
import {Menu} from 'react-feather';
import NavComp from "./NavComp";

const NavBar = () => {

    const [hidden, isHidden] = useState(true);

    return <div className="top-stick">
        <div className="w-100 d-flex flex-column center">
            <nav className="navbar p-3 pt-4">
                <h2 className="font-alba nav-brand">ZKOOPA</h2>
                <div className="text-light">
                    <div className="collapse-menu">
                        <h4 className="mr-2 font-lobster nav-item clickable">Home</h4>
                        <h4 className="mr-2 font-lobster nav-item">Minter</h4>
                        <h4 className="mr-2 font-lobster nav-item">Showcase</h4>
                        <h4 className="mr-2 font-lobster nav-item">About Us</h4>
                        <h4 className="mr-2 font-lobster nav-item">Contact</h4>
                    </div>
                    <Menu onClick={() => isHidden(!hidden)} className="hamburger pb-2" size="40"/>
                </div>
            </nav>
            <NavComp hidden={hidden}/>
        </div>
    </div>
}

export default NavBar;