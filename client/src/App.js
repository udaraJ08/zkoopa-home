import React from "react";
import "./assets/css/theme.css"

import "./App.css";
import MintBoard from "./views/MintBoard/MintBoard";
import Welcome from "./views/Welcome/Welcome";
import Footer from "./components/Footer";

const App = () => {

    return <div>
        <Welcome/>
        <MintBoard/>
        <Footer/>
    </div>
}

export default App;
