
const hre = require("hardhat");

async function main() {
  const PunksNFT = await hre.ethers.getContractFactory("PunksNFT");
  const punksNFT = await PunksNFT.deploy();

  await punksNFT.deployed();PunksNFT
  console.log("PunksNFT deployed to:", punksNFT.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
