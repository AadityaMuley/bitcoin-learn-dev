const Websocket = require("ws");

const P2P_PORT = process.env.P2P_PORT || 5001; // ws://localhost:5001
const peers = process.env.PEERS ? process.env.PEERS.split(",") : []; //if PEERS variable is present in the input then separate all peers using the "," else leave it blank
// $ HTTP_PORT=3002 P2P_PORT=5003 PEERS=ws://localhost:5001,ws://localhost:5002 npm run dev

class P2pServer {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.socket = []; //array of sockets - list of connected websocket servers that connect to this socket
    }

    //listen() will start up the server and create it first
    listen() {
        const server = new Websocket.Server({ port: P2P_PORT });

        //event listener - listens for incomming messages sent to websocket server
        server.on("connection", socket => this.connectSocket(socket)); //we have used the connection event here - we can fire specific code when a new socket connects to this server

        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }

    //actually does the job of pushing the new socket to our array of sockets
    connectSocket(socket) {
        this.socket.push(socket);
        console.log("Socket connected");
    }
}