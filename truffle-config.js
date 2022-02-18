var HDWalletProvider = require("truffle-hdwallet-provider");
const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 7545
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider("<YOUR MNEMONIC>", "https://rinkeby.infura.io/v3/85f4c60d08704034aaf13dbff98eac69");
      },
      network_id: 4,
      gas: 5000000,
      gasPrice: 10000000000,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: true
      }
    }
  }
};
