const SHA256 = require("crypto-js/sha256"); //accessing the SHA-256 func of crypto-js

class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash; //last block hash
        this.hash = hash; //current block hash
        this.data = data;
    }

    //to ease printing block data
    toString() {
        return `Block -
            Timestamp: ${this.timestamp}
            Last Block Hash: ${this.lastHash.substring(0, 10)}
            Current Block Hash: ${this.hash.substring(0, 10)}
            Data: ${this.data}`; //notice we are not return normal string but combining all these into one string using ES6 template string
    }

    //genesis block
    static genesis() {
        return new this("Genesis Time", "----------", "f1r57-h45h", []);
    }

    //mining block
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);
    }

    //static hash func to generate unique hash
    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString(); //using es6 template string to combine all inputs since we need to hash all inputs to get the unique hash
    }
}

module.exports = Block;