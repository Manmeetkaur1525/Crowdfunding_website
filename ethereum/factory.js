import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
 "0xc3d193cdf7aeca26e690cf07e0aeb4ac82a47d46" // '0x7DED54B976288b9A165AF4b2Bc1E96FF8a8e442F'
);

export default instance;
