// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Whitelist {
    // max # of whitelisted addresses 
    uint256 public maxWhitelistedAddresses;
    mapping(address=>bool) public whitelistedAddresses;
    uint8 public numAddressesWhitelisted;

    constructor(uint256 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses=_maxWhitelistedAddresses;
    }

    function addAddressToWhitelist() public {
        require(!whitelistedAddresses[msg.sender], "You are already whitelisted");
        require(numAddressesWhitelisted<maxWhitelistedAddresses);
        numAddressesWhitelisted += 1;
        whitelistedAddresses[msg.sender] = true;
    }
}
