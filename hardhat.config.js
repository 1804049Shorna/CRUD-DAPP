require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },

};

// 0xD3D2517e31893aB68806A0e383842688312f1a12
// npx hardhat ignition deploy ignition/modules/deploy.js --network sepolia 
//0xF83F28e186920184E4FEDf52a97fb25563cBF178
// 0x5e59b8A43FF9212B0F25cD52D1ED3FcF4a001539