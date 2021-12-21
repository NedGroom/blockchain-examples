package YT01;

import java.util.ArrayList;

public class Main {

    public int movingOn = 1;
    
    /**
        Each block will contain:
            - list of transactions
            - previous hash
            - own hash
    */

    ArrayList<Block> blockchain = new ArrayList<>();

    public static void main(String[] args) {

        String[] genesisTransactions = {"Satoshi sent Ned 10 bitcoin", "Max sent Ned 4 bitcoin"};
        Block genesisBlock = new Block(0, genesisTransactions);

        String[] block2Transactions = {"Ned sent Max 7 bitcoin", "Max sent Amazon 3 bitcoin"};
        Block block2 = new Block(genesisBlock.getBlockHash(), block2Transactions);

        String[] block3Transactions = {"Ned sent his mother 300 bitcoin"};
        Block block3 = new Block(block2.getBlockHash(), block3Transactions);

        System.out.println("Hash of genesis block:");
        System.out.println(genesisBlock.getBlockHash());
        System.out.println("Hash of block 2:");
        System.out.println(block2.getBlockHash());
        System.out.println("Hash of block 3:");
        System.out.println(block3.getBlockHash());

        // Both hashes are completely different if any previous value is changed
        // The change will propogate through the blockchain

    }

}




/**     Example of hashes
 * 
 *      String[] list1 = {"a","b","c"};
        String[] list2 = {"aa","b","c"};

        System.out.println(Arrays.hashCode(list1));
        System.out.println(Arrays.hashCode(list2));
 * 
 */