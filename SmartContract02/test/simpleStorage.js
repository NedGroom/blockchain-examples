const SimpleStorage = artifacts.require('SimpleStorage.sol'); // import the contract artifact

contract('SimpleStorage', () => {                   // define contract block to put tests inside
    it('Should update data', async () => {          // async because inside the callback function we have the wait keyword.
        const storage = await SimpleStorage.new();  // deploy smart contract on truffle-managed ganache blockchain.
                                                    // storage is a pointer to the smart contract instance
        await storage.updateData(10);               // await for the transaction updateData to be MINED.
        const data = await storage.readData();      
        assert(data.toString() === '10');           // as numbers in a smart contract can be much larger than max in JS, we get it as BNJS in data.
    });                                             // we stringify it to compare to the number 10.
});


