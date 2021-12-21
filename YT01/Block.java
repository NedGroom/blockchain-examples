/**
        In Block.java we construct one way of implementing a Block for a blockchain.
        To make a block, we must know the hash of the previous block, and our new transactions.
        With these we create our new hash for this new block, so that it can be used to create the next one.
 */


package YT01;

import java.util.Arrays;

public class Block {

    private int previousHash;
    private String[] transactions;           // each transaction is a string here. RW would be a specific object.
    private int blockHash;
    

    public Block(int previousHash, String[] transactions){
        this.previousHash = previousHash;
        this.transactions = transactions;

        Object[] contents = {Arrays.hashCode(transactions), previousHash};
        this.blockHash = Arrays.hashCode(contents);
    }
    
    public int getPreviousHash(){
        return previousHash;
    }
    public String[] getTransactions(){
        return transactions;
    }
    public int getBlockHash(){
        return this.blockHash;
    }
}
