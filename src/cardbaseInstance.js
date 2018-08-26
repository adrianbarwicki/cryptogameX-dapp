import Web3 from "web3";

import abi from "./abi";
import contractAddress from "./contractAddress";

/**
let socketsWeb3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/v3/4bc7b00850ef4dceb8a527b094e65953'));
 */

if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));
}


let defaultAddress, defaultTx;

/*
const privateKey = '6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1';
const account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
web3.eth.accounts.wallet.add(account);
*/

web3.eth.getAccounts().then(e => { 
  defaultAddress = e[0];
  defaultTx = {
    from: defaultAddress,
    // gas: 500000,
    // gasPrice: web3.utils.toWei("20", "gwei")
  };
 }) 

const cardbaseInstance = new web3.eth.Contract(abi, contractAddress);

export const getDefaultAddress = () => {
    return defaultAddress;
}

 export const get = () => {
    return cardbaseInstance;
 };
