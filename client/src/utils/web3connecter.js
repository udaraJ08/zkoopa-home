import Zkoopa from "../contracts/PreSale.json";

export const loadWeb3Account = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    if (accounts) return (accounts[0]);
}

export const loadWeb3Contract = async (web3) => {
    const netID = await web3.eth.net.getId();
    const networkData = Zkoopa.networks[netID];

    if (networkData) {
        const abi = Zkoopa.abi;
        const address = networkData.address;
        const contract = new web3.eth.Contract(abi, address);
        return contract;
    }
}