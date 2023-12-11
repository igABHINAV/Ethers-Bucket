// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
// contract address :0x4E3c25d92e9e949D04df942010F87FC5036De126
const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.getContractFactory("PaymentGateway"); 
  const dep = await contract.deploy();
  console.log(`contract is deployed at an address ${dep.address} !`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
