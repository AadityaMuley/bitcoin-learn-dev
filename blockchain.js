const Block = require("./block");

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {
        //const lastBlock = this.chain[this.chain.length-1]; //getting last element from chain array - ie getting last block
        //const block = Block.mineBlock(lastBlock, data); //calculate new hash

        const block = Block.mineBlock(this.chain[this.chain.length-1], data); //this is condensed version of previous 2 lines
        this.chain.push(block); //push new block onto blockchain

        return block;
    }
}

module.exports = Blockchain;