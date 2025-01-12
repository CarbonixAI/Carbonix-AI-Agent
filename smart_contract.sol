// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarbonCredit {
    mapping(address => uint256) public carbonCredits;

    event CarbonCreditTransferred(address indexed from, address indexed to, uint256 amount);

    function issueCarbonCredit(address _to, uint256 _amount) public {
        carbonCredits[_to] += _amount;
    }

    function transferCarbonCredit(address _to, uint256 _amount) public {
        require(carbonCredits[msg.sender] >= _amount, "Insufficient carbon credits");
        carbonCredits[msg.sender] -= _amount;
        carbonCredits[_to] += _amount;
        emit CarbonCreditTransferred(msg.sender, _to, _amount);
    }

    function getCarbonCredits(address _owner) public view returns (uint256) {
        return carbonCredits[_owner];
    }
}
