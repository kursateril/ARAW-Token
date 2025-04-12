// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ARAWToken is ERC20 {
    constructor() ERC20("ARAW", "ARAW") {
        _mint(msg.sender, 15000000000000000 * 10 ** decimals());
    }
}
