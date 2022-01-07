# YT02pt4
27.Dec.21

----

This folder is my workspace for going through the following youtube video:

"Signing transactions - Blockchain in Javascript Part 4" - https://www.youtube.com/watch?v=kWQ84S13-hw

Author: "Simply Explained", (Xavier)


----


Purpose:

    Now, anyone can add transactions with any addresses.
    We will make it mandatory for transactions to be signed with a private and public key. (you can only spend coins from a wallet if you have its private key)

    Clean up main.js file. Move classes into blockchain.js.

----


Informal notes while doing:

    Classes moved to blockchain.js
    Modules are exported from here
        module.exports.Blockchain = Blockchain;
        module.exports.Transaction = Transaction;  
    They are imported in main.js
        const {Blockchain, Transaction} = require('./blockchain');


    New file needed to generate private/public key pairs, to represent a wallet.
    keygenerator.js


    `const EC = require('elliptic').ec;`
    has methods to create key pair, sign something, and to verify a signature.
    `npm install elliptic`

    `secp265k1` is the algorithm (/elliptic curve) that is the basis for bitcoin wallet.

    



----
