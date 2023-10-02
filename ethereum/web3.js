import Web3 from 'web3';

let web3;

if(typeof window!=='undefined'&& typeof window.web3!=='undefined'){
  web3 = new Web3(window.web3.currentProvider);
}else{
  const MaticMumbaiTestnet = "https://rpc-mumbai.maticvigil.com/v1/a5b9cec7f0a013f76b8bfc20875fb40fb0ff89c0"
  const provider = new Web3.providers.HttpProvider(MaticMumbaiTestnet);

  // wss://winter-twilight-mountain.matic.discover.quiknode.pro/0cc526b0ccc2af2392dded34bc38492138095ce0/
  // https://mainnet.infura.io/v3/e50a312cedbe4118bc558640a48f1955
  // sRPC="http://localhost:26657/"
// daRPC="wss://kate.avail.tools:443/ws"
// exRPC="http://localhost:8545/" # execution layer rpc
// exRPC="https://rpc-mumbai.maticvigil.com/v1/a5b9cec7f0a013f76b8bfc20875fb40fb0ff89c0"
// exRPC="http://34.131.229.220:8545/"
// "https://rpc-mumbai.maticvigil.com/v1/a5b9cec7f0a013f76b8bfc20875fb40fb0ff89c0"

  web3 = new Web3(provider);
}
export default web3;
