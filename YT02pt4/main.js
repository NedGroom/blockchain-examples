const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;  // has methods to create key pair, sign something, and to verify a signature.
                                    // npm install elliptic
const ec = new EC('secp256k1');     // choose your elliptic curve.

const myKey = ec.keyFromPrivate('28e06010be677fe8e26750b4944356b62ff3bdc67ef51948595c76828f95c53e');
const myWalletAddress = myKey.getPublic('hex');

let muffinCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 124);
tx1.signTransaction(myKey);
muffinCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
muffinCoin.minePendingTransaction(myWalletAddress);

console.log('\n neds balance is ' + muffinCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid: ', muffinCoin.isChainValid());

muffinCoin.chain[1].transactions[0].amount = 2;

console.log('Is chain valid: ', muffinCoin.isChainValid());
