/**
            In main.js we create class definitions for Block and Blockchain.
            Data is public and visible, but secure as can be verified.
            Includes function to check if blockchain is valid.
            Can print readable format of whole blockchain.
 */



const SHA256 = require('crypto-js/sha256');    //  "npm install --save crypto-js" to install node_modules 


class Transaction{

    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    
}


class Block{

    constructor(timestamp, transactions, previousHash = ''){     // index tells us where the block sits on the chain
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).toString();
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
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(){
        return new Block("27.12.21", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    minePendingTransaction(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock.hash); // again, will not be adding all pending transactions.
        block.mineBlock(this.difficulty);
        console.log('Block successfully mined!');
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if (trans.fromAddress === address){
                    balance -= trans.amount;
                }
                if (trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }

        return balance;
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

muffinCoin.createTransaction( new Transaction('address1', 'address2', 100));  // addresses are the public keys of someones wallet.
muffinCoin.createTransaction( new Transaction('address2', 'address1', 27));

console.log('\n Starting the miner...');
muffinCoin.minePendingTransaction('neds address');

console.log('\n neds balance is ' + muffinCoin.getBalanceOfAddress('neds address'));

console.log('\n Starting the miner...');
muffinCoin.minePendingTransaction('neds address');

console.log('\n neds balance is ' + muffinCoin.getBalanceOfAddress('neds address'));
