class Block {
    constructor(timestamp, lastBlockHash, currentBlockHash, data) {
        this.timestamp = timestamp;
        this.lastBlockHash = lastBlockHash;
        this.currentBlockHash = currentBlockHash;
        this.data = data;
    }

    toString() {
        return `Block -
            Timestamp: ${this.timestamp}
            Last Block Hash: ${this.lastBlockHash.substring(0, 10)}
            Current Block Hash: ${this.currentBlockHash.substring(0, 10)}
            Data: ${this.data}`;
    }

    static genesis() {
        return new this("Genesis Time", "----------", "f1r57-h45h", []);
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.currentBlockHash;
        const hash = "todo-hash";

        return new this(timestamp, lastHash, hash, data);
    }
}

module.exports = Block;