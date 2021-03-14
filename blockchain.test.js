const Blockchain = require("./blockchain");
const Block = require("./block");

describe("Blockchain", () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain(); //ensures every iteration starts with a new slate
        bc2 = new Blockchain();
    });

    it("starts with genesis block", () => {
        expect(bc.chain[0]).toEqual(Block.genesis()); //check first block is the correct genesis block
    });

    it("adds a new block", () => {
        const data = "first"; //first block added and validated
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });

    it("validates a valid chain", () => {
        bc2.addBlock("second"); //second block added and validated
        expect(bc.checkChainValidity(bc2.chain)).toBe(true);
    });

    it("invalidates a chain with a corrupt genesis block", () => {
        bc2.chain[0].data = "corrupt data"; //genesis block data is corrupt
        expect(bc.checkChainValidity(bc2.chain)).toBe(false);
    });

    it("invalidates a corrupt chain", () => {
        bc2.addBlock("third");
        bc2.chain[1].data = "not third"; //data is tampered in the block
        expect(bc.checkChainValidity(bc2.chain)).toBe(false);
    });
});