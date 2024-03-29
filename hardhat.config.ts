import { HardhatUserConfig } from "hardhat/config";
import "hardhat-gas-reporter";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from 'dotenv';
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      gas: 'auto',
    },
    mainnet:{
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_MAINNET_API_KEY as string}`,
      accounts: [process.env.MAINNET_PRIVATE_KEY as string]
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_GOERLI_API_KEY}`,
      accounts: [process.env.GOERLI_PRIVATE_KEY as string]
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHER_SCAN_KEY as string
    }
  },
  gasReporter: {
    enabled: false,
    // outputFile: "gas-report.txt",
    // noColors: true
  }
};

export default config;
