var presale = artifacts.require("./PreSale.sol");

module.exports = function(deployer) {
    deployer.deploy(presale, "trooples", "truffy", "ipfs://QmVtfo6ySwbrTcxjKJNFcC8D1M3gMAkzdLK6KMt1WgVTrT/", "ipfs://QmfU6PVVzz1gg1Dw6FzqnJoA97ftr5V2HoRnoHL9d1KboK/hidden.json");
};
