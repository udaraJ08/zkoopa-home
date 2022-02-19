import React from 'react';
import {Youtube} from "react-feather";

const Minter = () => {
    return <div>
        <div>
            <h1 className="text-center font-bangers text-warning">WELCOME TO ZKOOPA MINTER</h1>
            <div className="text-center mt-5 font-monrope">
                <h5 className="text-danger">***THIS IS A DEMO MINTER***</h5>
                <br/>
                <h6 className="text-whitesmoke" style={{lineHeight: "25px"}}>This is not a real NFT minter linked with
                    the mainnet.<br/>
                    Purpose of this minter is to letting the clients to simulate the minting process in a test
                    environment.
                    <br/>
                    <br/>
                    With this our clients can have an understand and play around with our test NFTs.
                    <br/>
                    <br/>
                    Steps to start minting will be shown below.
                    <br/>
                    <br/>
                    <span className="text-danger text-shadow">*** SO HAPPY MINTING ***</span>
                </h6>
                <div className="w-100 center">
                    <div style={{width: "100px", height: "100px"}}
                         className="m-2 mt-5">
                        <img className="object-fit play-img" src={`https://avatars.dicebear.com/api/bottts/mint.svg`}/>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "100px"}}>
                <h1 className="text-warning text-center font-bangers">STEPS TO USE THE TEST MINTER</h1>
                <div style={{fontSize: "17px"}} className="text-whitesmoke text-center mt-5 font-monrope">
                    <p>1. First let's install <a href="https://metamask.io/" target="_blank">metamask</a></p>
                    <p>2. Let's connect to the <span className="text-danger">rinkeby test network</span>.</p>
                    <p>3. Have some free eth from the <a
                        target="_blank"
                        href="https://faucets.chain.link/rinkeby">chain link rinkeby faucet</a>.</p>
                    <p>4. Now if you done all this correctly you must have an account on <span
                        className="text-danger">metamask </span>
                        which was connected to the <br/> <span className="text-warning"> rinkeby netwok </span>
                        and should have some <span className="text-orange"> free test eth </span>.</p>
                    <p>5. Let's go to the <a
                        target="_blank"
                        href="https://testnets.opensea.io/">testnets.opensea.io </a>
                        (This is not the actual opensea marketplace)</p>
                    <p>6. With the help of the opensea testnets we can now <span className="text-danger">simulate</span> our NFT base activities on here.
                    </p>
                    <p>7. If you done those steps correctly, now whenever you'd mint a ZKOOPA, you will be able to see that NFT on your opensea test account.</p>
                    <p className="text-danger text-shadow">*** important:- Always remember to connect on rinkeby testnet ***</p>
                </div>
                <div className="mt-5">
                    <h2 className="text-center text-shadow text-success font-bangers">TUTORIAL COMING SOON<Youtube className="text-danger ml-2" size={40}/> </h2>
                </div>
            </div>
            <div className="w-100 center mt-5 flex-column">
                <button
                    className="btn btn-danger mt-5 mb-2 text-lg">LET'S GO MINTING (0.05 eth)
                </button>
                <p className="text-whitesmoke">You need to connect to the rinkeby network before do the transaction</p>
                <p className="text-danger text-shadow">(Since you are connected to rinkeby, don't worry your mainnet won't be effected)</p>
            </div>
        </div>
    </div>
}

export default Minter;