// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract MyToken is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 public mintRate = 0.000001 ether;    
    uint256 MAX_SUPPLY = 40;
    string private extension = ".json";
    string private base_uri = "ipfs://QmSSAvQfq5QPMGcwqVu3xGQfLXNaYkTPKjRKcn3PAL3HjG/";
    string private token_uri;

    constructor() ERC721("Super Hat Club", "SHAC"){
        _tokenIdCounter.increment();
    }

    function safeMint(address to) public payable {
        uint256 tokenId = _tokenIdCounter.current();
        require(tokenId <= MAX_SUPPLY, "Sorry, all NFTs have been minted!");
        require(msg.value >= mintRate, "Not enough ether");
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        token_uri = tokenURI_Set(tokenId, base_uri, extension);
        _setTokenURI(tokenId, token_uri);
    }

    // The following functions are overrides required by Solidity.
    function setBaseUri() public returns(string memory){

    }

    function tokenURI_Set(uint256 tokenId, string memory baseUri, string memory extension) private returns (string memory){
        return string.concat(string.concat(baseUri, Strings.toString(tokenId)), extension);
    }
    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function withdraw() public onlyOwner {
        require(address(this).balance > 0, "Balance is 0");
        payable(owner()).transfer(address(this).balance);
    }
}