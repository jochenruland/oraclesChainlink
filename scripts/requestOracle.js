//--------------------configuring web3 for rinkeby/mainnet---------------------------------------------------------------------------
// Read in mnemonic from file
const fs = require('fs');
const path = require('path');
const secretPath = path.resolve(__dirname, '..', '.secret');
const mnemonic = fs.readFileSync(secretPath, 'utf8').toString().trim();

// As we are not in the frontend application, we need the hdwallet-provider which provides some hdwallet features on top of the http protocol
// When we configure web3 for our frontend application we can use the http provider
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require("web3");
const compiledContractJson = require('../build/contracts/OraclesChainlink.json');

const provider =  new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/ab49b8e0ca2345558f49489dd6ed71f1` )
const web3 =  new Web3(provider);

const deploymentKey = Object.keys(compiledContractJson.networks)[0];
const contractInstance =  new web3.eth.Contract(compiledContractJson.abi, compiledContractJson.networks[deploymentKey].address);


const main = async () => {
  try {

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const usd_eth = await contractInstance.methods.getLatestPrice().call();
    console.log(usd_eth);
  
  } catch(err) {
    console.log(err);
  }

}

main()
