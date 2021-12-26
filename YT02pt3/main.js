/**
            In main.js we create class definitions for Block and Blockchain.
            Data is public and visible, but secure as can be verified.
            Includes function to check if blockchain is valid.
            Can print readable format of whole blockchain.
 */



const SHA256 = require('crypto-js/sha256');    //  "npm install --save crypto-js" to install node_modules 



class Block{

    constructor(index, timestamp, data, previousHash = ''){     // index tells us where the block sits on the chain
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).toString();
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined, hash used is: " + this.hash);
    }

}



class Blockchain{

    constructor(){
        this.chain = [this.createGenesisBlock()];     // an array that contains the genesis block.
        this.difficulty = 4;
    }

    createGenesisBlock(){
        return new Block(0, "21.12.21", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);                          //  in reality you cannot add a block so easily. There are numerous checks in place.
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if(currentBlock.hash != currentBlock.calculateHash()){      // this tests validity of the chain, but it changes the chain while you have done this.
                return false;       
            }
            if(currentBlock.previousHash != previousBlock.hash){
                return false;
            }
        }
        return true;
    }

}



let muffinCoin = new Blockchain();

console.log('Mining block 1...');
muffinCoin.addBlock(new Block(1, "23.12.21", {amount: 4}));      // previous hash instantiates at empty, and will update when block is added.

console.log('Mining block 2...');
muffinCoin.addBlock(new Block(2, "24.12.21", {amount: 10}));




