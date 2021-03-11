const Block = require("./block");

describe("Block", () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = "someRandomData";
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    //data is special variable put in `....`
    it("sets the `data` to match the input", () => {
        expect(block.data).toEqual(data);
    }); 

    it("sets the `lastHash` to match the hash of last block", () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
});