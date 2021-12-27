# YT02pt2

21.Dec.21

----

This folder is my workspace for going through the following youtube video:

"Implementing Proof-of-Work in Javascript" - https://www.youtube.com/watch?v=HneatE69814

Author: "Simply Explained", (Xavier)


----


Purpose:

    See a practical example of proof-of-work implementation.


----


Academic notes:

   
    Purpose of proof-of-work
        If you change contents of a block, and recalculate hashes of all subsequent blocks, then it can be validated.
        This is a security issue.
        Proof of work solves this.
    
    Bitcoin requires the hash of a block to start with a certain number of zeros.
    Have to try a lot of combinations to find a hash that fits - this is the difficulty.

    Mining = you have to prove that you put a lot of computing power into making the block.

    The difficulty is set so that there is a steady amount of new blocks.
    Bitcoin is one coin every ten minutes.
    If computers get faster over time, difficulty is increased.

    Use a while loop to keep creating the hash of the new block until difficulty number of zeros is met.
    Include an increasing nonce to get different hashes out to try.

----


Informal notes while doing:

    It is confusing when you add a block, it has not been mined yet.
    This makes sense though, because to add a block to a blockchain it is impossible to know the blocks hash, as we do not know the previous blocks hash to include (/ to link them together).
    

----
