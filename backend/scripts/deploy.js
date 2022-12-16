const hre = require("hardhat");

async function main() {
  const contractFactory = await hre.ethers.getContractFactory("Whitelist");
  const contract = await contractFactory.deploy(10);
  await contract.deployed();
  console.log("contract deployed to ", contract.address);
}

const runMain = (async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
