// const Block = require("./block");

// // const block = new Block("timestamp", "last hash", "current hash", "data");
// // console.log(block.toString());
// // console.log(Block.genesis().toString());

// const firstBlock = Block.mineBlock(Block.genesis(), "first");
// console.log(firstBlock.toString());

const Blockchain = require("./blockchain");

const bc = new Blockchain;

for (let i=0; i<10; i++) {
    console.log(bc.addBlock(`Transaction ${i}`).toString());
}