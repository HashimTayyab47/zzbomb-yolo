
const { ethers }  = require("hardhat");
const { expect }  = require("chai");

describe("MyToken", function () {
  let MyToken;
  let myToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    MyToken = await ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy();
    [owner, addr1, addr2] = await ethers.getSigners();
  });

  describe("Deployment", function () {
    it("Should set the correct name and symbol", async function () {
      expect(await myToken.name()).to.equal("Super Hat Club");
      expect(await myToken.symbol()).to.equal("SHAC");
    });

    it("Should show current supply 0", async function () {
      expect(await myToken.totalSupply()).to.equal(0);
    });
  });

  describe("Minting", function () {
    it("Should mint a new token when called by owner", async function () {
      await myToken.connect(owner).safeMint(addr1.address, { value: ethers.utils.parseEther("0.000001") });
      expect(await myToken.balanceOf(addr1.address)).to.equal(1);
    });

    it("Should not mint a new token when the maximum supply has been reached", async function () {
        const maxSupply = 40;
        for (let i = 0; i < maxSupply; i++) {
          await myToken.connect(owner).safeMint(addr1.address, 
            { value: ethers.utils.parseEther("0.000001") });
        }
        await expect(myToken.connect(owner).safeMint(addr1.address, 
            { value: ethers.utils.parseEther("0.000001") }))
            .to.be.revertedWith("Sorry, all NFTs have been minted!");
        });
    it("Should update the tokenURI when minting a new token", async function () {
        await myToken.connect(owner).safeMint(addr1.address, { value: ethers.utils.parseEther("0.000001") });
        // await myToken.connect(owner).safeMint(addr1.address, { value: ethers.utils.parseEther("0.000001") });
        const tokenId = await myToken.tokenOfOwnerByIndex(addr1.address, 0);
        const tokenURI = await myToken.tokenURI(tokenId);
        expect(tokenURI).to.equal("ipfs://QmSSAvQfq5QPMGcwqVu3xGQfLXNaYkTPKjRKcn3PAL3HjG/1.json");
        });


    });
  

});