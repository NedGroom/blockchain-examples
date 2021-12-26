const SimpleStorage = artifacts.require('SimpleStorage.sol');

module.exports = function (deployer) {      // export a function
    deployer.deploy(SimpleStorage);         // can pass arguments to the SC constructor  `deployer.deploy(SimpleStorage, 'eeq', 'eqqe')`;
};

/**
        We see the port where the blockchain is running.
        Generated 10 accounts prefunded with 10ETH each.
        Also have associated private keys, and the mneumonic phrase used for generating all these acounts.
 */


        