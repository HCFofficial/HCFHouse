const main = async () => {

  const HCFH = await ethers.getContractFactory("HCFH");
  const hcfh = await HCFH.deploy();

  await hcfh.deployed()
  console.log("HCFH deployed to:", hcfh.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
