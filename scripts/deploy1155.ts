// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require("hardhat");

async function main() {
  const baseURI = "https://raw.githubusercontent.com/soul-note/soulpaint-metadata/master/AP/metadata/{id}.json";
  const SoulPaintContractFactory = await ethers.getContractFactory('SoulPaintAP');
  const token = await SoulPaintContractFactory.deploy(baseURI);

  console.log("Token address:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});