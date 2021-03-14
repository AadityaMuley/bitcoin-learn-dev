const Block = require("./block");

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    //add a new block to the Blockchain
    addBlock(data) {
        //const lastBlock = this.chain[this.chain.length-1]; //getting last element from chain array - ie getting last block
        //const block = Block.mineBlock(lastBlock, data); //calculate new hash

        const block = Block.mineBlock(this.chain[this.chain.length-1], data); //this is condensed version of previous 2 lines
        this.chain.push(block); //push new block onto blockchain

        return block;
    }

    //check validity of the block being added
    checkChainValidity(chain) {
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        }

        for(let i=1; i<chain.length; i++) {
            const block = chain[i];
            const lastBlock = chain[i-1];

            if(block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Blockchain;