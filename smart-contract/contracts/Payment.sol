// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 < 0.9.0;

contract PaymentGateway {
    address payable  owner ;
    constructor()
    {
        owner = payable (msg.sender);
    }
    function Payment ( address payable reciver) public  payable {
        require(reciver != address(0) , "Please provide an amount to transfer . ");
        reciver.transfer(msg.value);
    }
}