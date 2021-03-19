const SHA256 = require("crypto-js/sha256"); //accessing the SHA-256 func of crypto-js
const { DIFFICULTY, MINE_RATE } = require("../config"); //fetches the DIFFICULTY const from config.js file

class Block {
    constructor(timestamp, lastHash, hash, data, nonce, difficulty) {
        this.timestamp = timestamp;
        this.lastHash = lastHash; //last block hash
        this.hash = hash; //current block hash
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty || DIFFICULTY;
    }

    //to ease printing block data
    toString() {
        return `Block -
            Timestamp: ${this.timestamp}
            Last Block Hash: ${this.lastHash.substring(0, 10)}
            Current Block Hash: ${this.hash.substring(0, 10)}
            Nonce : ${this.nonce};
            Difficulty: ${this.difficulty};
            Data: ${this.data}`; //notice we are not return normal string but combining all these into one string using ES6 template string
    }

    //genesis block
    static genesis() {
        return new this("Genesis Time", "----------", "f1r57-h45h", [], 0, DIFFICULTY); // 0 - default nonce for genesis block
    }

    //mining block
    static mineBlock(lastBlock, data) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;
        do{
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty(lastBlock, timestamp);
            hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
        } while(hash.substring(0, difficulty) !== "0".repeat(difficulty));

        return new this(timestamp, lastHash, hash, data, nonce, difficulty);
    }

    //static hash func to generate unique hash
    static hash(timestamp, lastHash, data, nonce, difficulty) {
        return SHA256(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString(); //using es6 template string to combine all inputs since we need to hash all inputs to get the unique hash
    }

    static blockHash(block) {
        const {timestamp, lastHash, data, nonce, difficulty} = block;
        return Block.hash(timestamp, lastHash, data, nonce, difficulty);
    }

    static adjustDifficulty(lastBlock, currentTimestamp) {
        let { difficulty } = lastBlock;
        difficulty = lastBlock.timestamp+MINE_RATE > currentTimestamp ? difficulty+1 : difficulty-1
        return difficulty;
    }
}

module.exports = Block;