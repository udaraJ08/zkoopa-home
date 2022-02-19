import React from "react";
import {Facebook, Instagram, Mail, Youtube} from "react-feather";
import "../assets/css/footer.css";

const Footer = () => {

    return <div className="footer center mt-5 pt-3 w-100 bg-dark d-flex flex-column font-lobster justify-content-around">
        <div className="center flex-column">
            <h6 className="text-whitesmoke">
                Connect with us
            </h6>
            <div className="d-flex w-100 center mt-2">
                <Facebook className="footer-icon fc-icon mr-2"/>
                <Instagram className="ig-icon footer-icon mr-2"/>
                <Youtube className="yt-icon footer-icon mr-2"/>
                <Mail className="ml-icon footer-icon"/>
            </div>
            <h6 className="text-whitesmoke mt-3">Mail us: <span className="text-warning">bigzkoop@gmail.com</span></h6>
            <h6 className="text-whitesmoke">Whatsapp us: <span className="text-success">+94 78 320 81 11</span></h6>
        </div>
        <div>
            <h6 className="footer-font text-grey">Copyright © {new Date().getFullYear()}. All the rights reserved by
                BiG_ZKOOP</h6>
        </div>
    </div>
}

export default Footer;