#SmartContract02

24.Dec.21

----

This folder is my workspace for going through the following youtube video:

"Truffle Tutorial for Beginners | Compile, Test & Deploy Smart contracts to any EVM Blockchain" - https://www.youtube.com/watch?v=62f757RVEvU

Author: "EatTheBlocks"



----

Debugging:

    Could not run scripts when running `truffle version` or `truffle init` after installation.
    Open `Windows Powershell` with Admin priveledges, and run `set-executionpolicy remotesigned`.

Question:

    In `2_deploy_contracts.js`, why is there only one mneumonic phrase for 10 accounts?


----

Key steps:

    Run `truffle init` which creates some folders.
        In contracts we put the contracts.
        In migrations, we write files how to deploy smart contrats to the blockchain. (in node.js)
        In test you write the test files, some in Node.js, some in Solidity.
        In truffle-config you define deployment network for the smart contract. (eg version of solidity, which network to deploy to)
    
    Create smart contract in contracts.
    
    `truffle compile`

    Testing your SCs: see tests/simpleStorage.js

    Deploying to the blockchain
        First to local development blockchain, Ganache.




----


Informal notes while doing:

    Way easier to make blockchain app on truffle.

    Use on all EVM compatible blockchain:
        Ethereum, BSC, Polygon
    Originally just ethereum.

    For deployment, it runs on local development blockchain called `Ganache`.
    For testing the smart contract, it uses javascript framework called `Mocha`.

    Without truffle, need to create a lot of boilerplate code to integrate different tools together.

    Truffle is a command-line framework. 

    Truffle written in Node.js

    npm is Node Package Manager

    Migrations.sol (in contracts) is created on init and is used internally by truffle, so ignore.

    To recompile contracts, while deleting current build files:
        rm -rf build/

    SimpleStorage.json in the build/contracts/ folder contains rinfo the can be used by the front-end of an application to interact with the smart contract.

        Info about the compiler and the networks key.

    Every time you compile contracts it will update this json file, and on deployment it updates the network key field.



    Must fix bugs before deployment as cannot modify code, so run tests.


    Create migration file.

    Run `truffle develop`.

    We see the port where the blockchain is running.
        Generated 10 accounts, prefunded with 10ETH each.
        Also have associated private keys, and the mneumonic phrase used for generating all these acounts.
 
    Now our local dev blockchain is started, and we have a prompt connected to the blockchain.

    Can deploy the Smart Contract by running `migrate --reset`.


    

    Now we can see how to deploy to a public testnet.


----