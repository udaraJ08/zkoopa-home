import React, {useState} from "react";

import Footer from "../../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {testReduxListen} from "../../redux/actions";

const Welcome = () => {

    const dispatch = useDispatch();
    const {num} = useSelector(state => state.appReducer);

    const testRedux = () => {
        dispatch(testReduxListen(num));
    }

    return <div
        className={`full-page center text-light flex-column overflow-hidden`}>
        <div style={{width: "150px", height: "150px"}} className="m-2 animate__bounce animate__animated z-index-top">
            <img className="object-fit" src={`https://avatars.dicebear.com/api/bottts/s.svg`}/>
        </div>
        <h1 className="main-topic animate__lightSpeedInLeft animate__animated ">ZKOOPA</h1>
        <h5 className="animate__lightSpeedInRight animate__animated sub-topic">custom avatar builder</h5>
        <button
            onClick={() => testRedux()}
            className="btn btn-danger mt-5 text-lg">LET'S GO MINTING
        </button>
    </div>
}

export default Welcome;