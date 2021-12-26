/**
     
    Write, test, and deploy smart contrcts with truffle. n

*/

pragma solidity ^0.8.10;

contract SimpleStorage {

    uint data;

    function updateData(uint _data) external {
        data = _data;
    }  

    function readData() external view returns(uint) {
        return data;
    }

}