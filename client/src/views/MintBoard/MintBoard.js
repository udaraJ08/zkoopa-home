import React, {useEffect, useState} from "react";
import getWeb3 from "../../getWeb3";
import Zkoopa from "../../contracts/PreSale.json";
import Footer from "../../components/Footer";

const MintBoard = () => {

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

    return <div className="d-flex flex-column overflow-hidden">
    </div>
}

export default MintBoard;