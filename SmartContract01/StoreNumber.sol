/**
    Contracts are published, then created.
        Constructor function called on creation.
 
*/

pragma solidity ^0.4.0;

contract StoreNumber{

    uint number;

    //  this is called whenever the contract is deployed and initiated once.
    function StoreNumber(){
        number = 420;
    }

    function incrementTheNumber(){
        number = number + 1;
    }

    function decrementTheNumber(){
        number = number - 1;
    }

    function fetchTheNumber() constant returns (uint) {
        return number;
    }

    function setNumber(uint theNewValue){
        number = theNewValue;
    }

}