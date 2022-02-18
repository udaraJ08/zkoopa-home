import React, {useEffect, useState} from "react";
import getWeb3 from "../../getWeb3";
import Zkoopa from "../../contracts/PreSale.json";
import '../../assets/css/home.css';
const Home = () => {

    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);

    useEffect(async () => {
        const web3 = await getWeb3();
        await loadWeb3Contract(web3);
        await loadWeb3Account(web3);
    }, []);

    const loadWeb3Account = async (web3) => {
        const accounts = await web3.eth.getAccounts();
        if (accounts) setAccount(accounts[0]);
    }

    const loadWeb3Contract = async (web3) => {
        const netID = await web3.eth.net.getId();
        const networkData = Zkoopa.networks[netID];

        if (networkData) {
            const abi = Zkoopa.abi;
            const address = networkData.address;
            const contract = new web3.eth.Contract(abi, address);
            setContract(contract)
            return contract;
        }
    }

    return <div className="d-flex flex-column overflow-hidden container-fluid" style={{marginTop: "100px", width:"95%"}}>
        <h1 className="text-center text-warning font-bangers welcome-topic text-shadow">1. WHO ARE THE <span
            className="text-primary">ZKOOPAS...</span>?</h1>
        <div className="text-whitesmoke text-center">
            <h6 className="mt-4 ">WE ARE A GROUP OF <span className="text-primary">#PASSIONATE </span>
                AND <span className="text-danger">#SKILLFUL</span> INDIVIDUALS WHO EVEN DREAM IN NFT. <br/>
                WE <span className="text-danger">#DESIGN</span>. WE <span className="text-success">#GENERATE</span>.
                WE<span className="text-primary"> #DEVELOP</span> ANY NFT RELATED WORK.</h6> <br/> <br/>
            <h6 className="">EVERY DESIGN WE DESIGN, EVERY WEBSITE WE DEVELOP WILL ALWAYS BE
                <span className="text-danger"> #UNIQUE.</span></h6> <br />
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
        <div className="text-center" style={{marginTop:"100px"}}>
            <h1 className="text-success font-bangers welcome-topic text-shadow">2. WHAT WE DO ?</h1>
            <div className="w-100 d-flex justify-content-between mt-5 wht-we-do-inner ">
                <div className="w-30 gen-art card-custom p-1">
                    <div className="card-header">
                        <h2 className="text-primary font-bangers text-shadow">GENERATE ART COLLECTIONS</h2>
                    </div>
                    <div className="card-body">
                        <img width="100%" height="300px" className="object-fit" src="https://cdn.substack.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fpbs.substack.com%2Fmedia%2FE-EIV8ZUYAIOg5a.jpg"/>
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
                        <br />
                        <h6 className="text-danger font-bold text-shadow">***ALWAYS FIRST 100 is free as samples***</h6>
                    </div>
                </div>
                <br />
                <div className="w-30 design-art card-custom p-1">
                    <div className="card-header">
                        <h2 className="text-orange font-bangers text-shadow">NFT DESIGNING</h2>
                    </div>
                    <div className="card-body">
                        <img width="100%" height="300px" className="object-fit" src="https://lh3.googleusercontent.com/l8urWboxhOpmpje2NTX6ekWf80WW3P2WQxLL1KycIAsM40g2zkAGFNpa9bKi_v8UeX6u1g4mThMeer9CdAz5pw7pj9hKhxtKCshc=w600"/>
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
                <br />
                <div className="w-30 web-art card-custom p-1">
                    <div className="card-header">
                        <h2 className="text-danger font-bangers text-shadow">NFT WEBSITES</h2>
                    </div>
                    <div className="card-body">
                        <img width="100%" height="300px" className="object-fit" src="https://cdn.dribbble.com/users/1684108/screenshots/16656542/media/7598522f4725512d0537723e9fe857d6.png?compress=1&resize=400x300"/>
                    </div>
                    <div className="card-desc text-danger font-monrope">
                        <p>We also develop NFT <span className="text-warning font-bold"> showcases</span>
                            <span className="text-info font-bold">{" "}pre sale minters</span>
                            <span className="text-orange font-bold"> marketplaces like opensea</span> etc.
                            Good NFT project must have a website for pre sale, minting etc. So whenever you feel like
                        you want to bring your beloved NFT project to the next level
                            <span className="text-success font-bold"> ZKOOPAs </span> are here for you !</p>
                        <h6 className="text-shadow font-bold" style={{letterSpacing:"1px"}}>***ALSO PROVIDE AN ADMIN DASHBOARD TO CONTROL THE SMART CONTRACT***</h6>
                    </div>
                </div>
                <br />
            </div>
            <div className="mt-5 center flex-column z-index-0">
                <div style={{width: "100px", height: "100px"}} className="m-2 mt-5">
                    <img className="object-fit z-index-0" src={`https://avatars.dicebear.com/api/bottts/zkoopa.svg`}/>
                </div>
                <h4 className="text-whitesmoke font-bangers" style={{letterSpacing:"1px"}}>"YOU KNOW WHAT...? TODAY IS A GOOD DAY TO START SOMETHING GREAT !"</h4>
                <h6 className="text-warning font-lobster">-ZKOOPA-</h6>
            </div>
        </div>
        <div className="w-100" style={{marginTop:"100px"}}>
            <h1 className="font-bangers text-danger text-center">LET'S PLAY WITH SOME SMART CONTRACTS</h1>
            <div className="mt-5 center">
                <div className="btn btn-outline-primary center flex-column">
                    <div style={{width: "100px", height: "100px"}} className="m-2 mt-5 animate__bounce animate__animated z-index-top">
                        <img className="object-fit" src={`https://avatars.dicebear.com/api/bottts/alien.svg`}/>
                    </div>
                    <h5>PLAY WITH MINTER</h5>
                </div>
                <div className="btn btn-outline-success center flex-column">
                    <div style={{width: "100px", height: "100px"}} className="m-2 mt-5 animate__bounce animate__animated z-index-top">
                        <img className="object-fit" src={`https://avatars.dicebear.com/api/bottts/black.svg`}/>
                    </div>
                    <h5>COMING SOON</h5>
                </div>
                <div className="btn btn-outline-success center flex-column">
                    <div style={{width: "100px", height: "100px"}} className="m-2 mt-5 animate__bounce animate__animated z-index-top">
                        <img className="object-fit" src={`https://avatars.dicebear.com/api/bottts/black.svg`}/>
                    </div>
                    <h5>COMING SOON</h5>
                </div>
            </div>
        </div>
    </div>
}

export default Home;