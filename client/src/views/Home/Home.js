import React from "react";
import '../../assets/css/home.css';
import spy from "../../assets/images/red.png";
import {useNavigate} from "react-router";

const Home = () => {

    const navigate = useNavigate();

    return <div className="d-flex flex-column overflow-hidden container-fluid">
        <h1 className="text-center text-warning font-bangers welcome-topic text-shadow">1. WHO ARE THE <span
            className="text-primary">ZKOOPAS...</span>?</h1>
        <div className="text-whitesmoke text-center">
            <h6 className="mt-4 ">WE ARE A GROUP OF <span className="text-primary">#PASSIONATE </span>
                AND <span className="text-danger">#SKILLFUL</span> INDIVIDUALS WHO EVEN DREAM IN NFT. <br/>
                WE <span className="text-danger">#DESIGN</span>. WE <span className="text-success">#GENERATE</span>.
                WE<span className="text-primary"> #DEVELOP</span> ANY NFT RELATED WORK.</h6> <br/> <br/>
            <h6 className="">EVERY DESIGN WE DESIGN, EVERY WEBSITE WE DEVELOP WILL ALWAYS BE
                <span className="text-danger"> #UNIQUE.</span></h6> <br/>
            <h6 className="">SO FEEL FREE TO LOOK AROUND. AND ALSO EAT
                <span className="text-warning"> #HEALTHY</span></h6>
            <h6 className="">IF YOU <span className="text-danger">#LIKE</span> OUR WORK. JUST GIVE A
                <span className="text-danger"> #HOOT</span>
            </h6>
            <div>
                <button
                    className="btn btn-outline-primary mt-3 text-lg mr-2">LEARN MORE ABOUT US
                </button>
                <button
                    className="btn btn-outline-danger mt-3 text-lg">CONTACT US
                </button>
            </div>
        </div>
        <div className="text-center" style={{marginTop: "100px"}}>
            <h1 className="text-success font-bangers welcome-topic text-shadow">2. WHAT WE DO ?</h1>
            <div className="w-100 d-flex justify-content-between mt-5 wht-we-do-inner ">
                <div className="w-30 gen-art card-custom p-1">
                    <div className="card-header">
                        <h2 className="text-primary font-bangers text-shadow">GENERATE ART COLLECTIONS</h2>
                    </div>
                    <div className="card-body">
                        <img width="100%" height="300px" className="object-fit"
                             src="https://cdn.substack.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fpbs.substack.com%2Fmedia%2FE-EIV8ZUYAIOg5a.jpg"/>
                    </div>
                    <div className="card-desc text-info font-monrope">
                        <p>We can support you with generating
                            <span className="text-warning font-bold"> 1k</span>
                            <span className="text-primary font-bold"> 5k</span>
                            <span className="text-success font-bold"> 10k</span> or
                            <span className="text-orange font-bold"> any custom size </span>
                            collection for you.
                            Each art piece will be 100% unique and will be in high quality.
                            <span className="text-danger"> We also support complex rarities.</span></p>
                        <br/>
                        <h6 className="text-danger font-bold text-shadow">***ALWAYS FIRST 100 is free as samples***</h6>
                    </div>
                </div>
                <br/>
                <div className="w-30 design-art card-custom p-1">
                    <div className="card-header">
                        <h2 className="text-orange font-bangers text-shadow">NFT DESIGNING</h2>
                    </div>
                    <div className="card-body">
                        <img width="100%" height="300px" className="object-fit"
                             src="https://lh3.googleusercontent.com/l8urWboxhOpmpje2NTX6ekWf80WW3P2WQxLL1KycIAsM40g2zkAGFNpa9bKi_v8UeX6u1g4mThMeer9CdAz5pw7pj9hKhxtKCshc=w600"/>
                    </div>
                    <div className="card-desc text-orange font-monrope">
                        <p>We can design you
                            <span className="text-info font-bold"> high detailed </span>
                            <span className="text-whitesmoke font-bold"> creative </span>
                            , HD 2d unique NFT designs.
                            You can request the traits and the designs to make your dream NFT come true
                        </p>
                    </div>
                </div>
                <br/>
                <div className="w-30 web-art card-custom p-1">
                    <div className="card-header">
                        <h2 className="text-danger font-bangers text-shadow">NFT WEBSITES</h2>
                    </div>
                    <div className="card-body">
                        <img width="100%" height="300px" className="object-fit"
                             src="https://cdn.dribbble.com/users/1684108/screenshots/16656542/media/7598522f4725512d0537723e9fe857d6.png?compress=1&resize=400x300"/>
                    </div>
                    <div className="card-desc text-danger font-monrope">
                        <p>We also develop NFT <span className="text-warning font-bold"> showcases</span>
                            <span className="text-info font-bold">{" "}pre sale minters</span>
                            <span className="text-orange font-bold"> marketplaces like opensea</span> etc.
                            Good NFT project must have a website for pre sale, minting etc. So whenever you feel like
                            you want to bring your beloved NFT project to the next level
                            <span className="text-success font-bold"> ZKOOPAs </span> are here for you !</p>
                        <h6 className="text-shadow font-bold" style={{letterSpacing: "1px"}}>***ALSO PROVIDE AN ADMIN
                            DASHBOARD TO CONTROL THE SMART CONTRACT***</h6>
                    </div>
                </div>
                <br/>
            </div>
            <div className="mt-5 center flex-column">
                <div style={{width: "100px", height: "100px"}} className="m-2 mt-5">
                    <img className="object-fit z-index-0" src={`https://avatars.dicebear.com/api/bottts/zkoopa.svg`}/>
                </div>
                <h4 className="text-whitesmoke font-bangers" style={{letterSpacing: "1px"}}>"YOU KNOW WHAT...? TODAY IS
                    A GOOD DAY TO START SOMETHING GREAT !"</h4>
                <h6 className="text-warning font-lobster">-ZKOOPA-</h6>
            </div>
        </div>
        <div style={{marginTop: "100px", marginBottom: "70px"}} className="bg-dark b-radius-10 prof-sect">
            <h1 className="font-bangers text-center text-primary p-3">WHY YOU NEED THE SUPPORT OF PROFESSIONALS ?</h1>
            <div className="w-100 prof-inner overflow-hidden">
                <div className=" d-flex prof-img">
                    <img width="70%" className="scalable" src={spy}/>
                </div>
                <div className="text-whitesmoke mt-3 p-3 prof-desc">
                    <h6 className="font-monrope" style={{lineHeight: "25px"}}>Nowadays NFT market is one of the
                        most <span className="text-danger">competitive</span> markets in crypto
                        world.
                        Everyone trying to get a piece of NFTs. So everyone trying to get
                        into this NFT war but only few survives <span
                            className="text-warning">(R.I.P to the fallen).</span>
                        <br/>
                        <br/>
                        The reason for that is before you get
                        into the NFT world, you must have a vast knowledge about current
                        <span className="text-info"> market state,</span>
                        <span className="text-success font-bold"> gas fees,</span>
                        <span className="text-warning"> trends,</span>
                        <span className="text-orange"> marketing </span>
                        and blah blah so much boring things. But those boring things
                        are the ones which can make sure that you <span
                            className="text-danger font-bold">survive </span>
                        in this new world.
                        <br/>
                        <br/>
                        That when the <span className="text-orange font-bold"> ZKOOPA</span> comes into the picture (The
                        chosen one). <br/>
                        With the help of our team you can get those boring data without reinventing the wheel. Not only
                        the data,
                        we can feed you with
                        <span className="text-info"> latest NFT designs and trends,</span>
                        <span className="text-warning"> optimized smart contracts (i like this one a lot),</span>

                        <br/>
                        <br/>
                        <span className="text-orange">
                            And of course we also provide our services with developing
                            <span className="text-danger"> marketplaces like opensea,</span>
                            <span className="text-info"> pre salers,</span>
                            <span className="text-warning"> minters, </span>
                        showcases and of course with a custom admin board for handling your smart contract
                        </span>
                        <br/>
                        <br/>
                        <span className="text-danger text-shadow">So I think...let's start to build something <span
                            className="font-bold">great</span> together !!!</span>
                    </h6>
                </div>
            </div>
        </div>
        <div className="w-100" style={{marginTop: "100px"}}>
            <h1 className="font-bangers text-danger text-center">LET'S PLAY WITH SOME SMART CONTRACTS</h1>
            <div className="mt-5 center btn-ground">
                <div
                    onClick={() => navigate("/minter")}
                    className="btn play-smart btn-outline-primary center flex-column">
                    <div style={{width: "100px", height: "100px"}}
                         className="m-2 mt-5">
                        <img className="object-fit play-img z-index-0" src={`https://avatars.dicebear.com/api/bottts/alien.svg`}/>
                    </div>
                    <h5>PLAY WITH MINTER</h5>
                </div>
                <div className="btn play-smart btn-outline-success center flex-column">
                    <div style={{width: "100px", height: "100px"}}
                         className="m-2 mt-5">
                        <img className="object-fit play-img" src={`https://avatars.dicebear.com/api/bottts/black.svg`}/>
                    </div>
                    <h5>COMING SOON</h5>
                </div>
                <div className="btn play-smart btn-outline-success center flex-column">
                    <div style={{width: "100px", height: "100px"}}
                         className="m-2 mt-5">
                        <img className="object-fit play-img" src={`https://avatars.dicebear.com/api/bottts/black.svg`}/>
                    </div>
                    <h5>COMING SOON</h5>
                </div>
            </div>
        </div>
        <div style={{marginTop:"100px"}}>
            <h1 className="font-bangers text-center text-orange">UPCOMING EVENTS</h1>
            <h5 className="text-whitesmoke text-center mt-5 font-alba">MORE COMING ON THE WAY...</h5>
        </div>
    </div>
}

export default Home;