const Block = require("./block");

// const block = new Block("timestamp", "last hash", "current hash", "data");
// console.log(block.toString());
// console.log(Block.genesis().toString());

const firstBlock = Block.mineBlock(Block.genesis(), "first");
console.log(firstBlock.toString());