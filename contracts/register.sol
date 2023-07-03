// SPDX-License-Identifier: MIT 
pragma solidity =0.8.20;

contract Register {
    struct Referral {
        address Address;
        string String;
    }

    string public github;
    address public owner;
    Referral[] public referrals;

    constructor(string memory githubName) {
        github = githubName;
        owner = msg.sender;
    }

    function addReferral(address referralAddress, string memory referralString) public {
        require(msg.sender == owner);
        Referral memory newReferral = Referral(referralAddress, referralString);
        referrals.push(newReferral);
    }

    function totalReferrals() public view returns (uint) {
        return referrals.length;
    }
}