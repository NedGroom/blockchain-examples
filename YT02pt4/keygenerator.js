const EC = require('elliptic').ec;  // has methods to create key pair, sign something, and to verify a signature.
                                    // npm install elliptic

const ec = new EC('secp256k1');     // choose your elliptic curve.

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private key: ', privateKey);

console.log();
console.log('Public key: ', publicKey);
