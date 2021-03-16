const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("../blockchain");
const P2pServer = require("./p2p-server");

const HTTP_PORT = process.env.HTTP_PORT || 3001;
//process.env.HTTP_PORT is used to get port number from the user instead of default 3001
//this is required when we want to run multiple instances of the same app so every instance must run on a different port
//terminal command to specify port number:
// $ HTTP_PORT=3002 npm run dev

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.use(bodyParser.json());

//GET request which returens all blocks to display all current blocks to user - /blocks is the endpoint we want the API to expose
app.get("/blocks", (request, response) => {
    response.json(bc.chain);
});

//POST request to add a new block and then display the Blockchain with the newly added block
app.post("/mine", (request, response) => {
    const block = bc.addBlock(request.body.data);
    console.log(`New block added: ${block.toString()}`);

    p2pServer.syncChains(); //sync the original and new blockchain and update every node or instance with the longest one

    response.redirect("/blocks");
});

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
p2pServer.listen();