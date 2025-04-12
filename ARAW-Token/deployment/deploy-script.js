// Example Hardhat deploy script (optional)
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const ARAWToken = await ethers.getContractFactory("ARAWToken");
  const token = await ARAWToken.deploy();
  console.log("ARAW Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
