# YT01

21.Dec.21

----

This folder is my workspace for going through the following youtube video:

"Building a Blockchain in Under 15 Minutes" - https://www.youtube.com/watch?v=baJYhYsHkLM

Author: "Ivan on Tech"


----


Conlclusion notes:

    If I tell everyone Satoshi gave me 100 bitcoins and here is the blockchain that confirms that.
    They will look at it and say they have their own versions of the blockchain and say the digital signatures are completely different.
    Practicalities of confirmations coming later.

    Contents
        Basics of hashing
        Linking blocks together by their hashes


----


Informal notes while doing:

    Blockchain itself is a simple data structure at its core.
    

----


Academic notes from video:

    A blockchain is a list of blocks, and each block holds the digital signiture of the previous block, and this `last-hash` is included in the hash of this block.

    Each block will contain
        list of transaction that happened in that block     -   What transactions are included in the same block? What determines which block a particular tranaction is included in?
        hash of previous block
        own hash

    Each blockcahain needs a genesis block that is hard coded


    Principle: Hashing algorithms are very hard to crack

    Every block created above Block X acts as another confirmation of all transactions in Block X.
        AKA they each act as another confirmation of the legitimacy of Block X. 


----


Academic notes that I am familiar with, mainly through 7 terms of study during `Computer Science BA, University of Cambridge`:

    A hash is basically a digital signature of a piece of data.
        Uniquely related to the original data.
        Unable to reconstruct original data from the hash, without the reverse hashing function.

    The reverse hashing fucntion is not yet proven to be impossible.
        The assumption of its safety is the basis of all public key cryptography.


----