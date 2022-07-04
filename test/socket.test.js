const { createServer } = require("http");
const { io: Client } = require("socket.io-client");
const { Server } = require("socket.io");
const { assert } = require("chai");

describe("my awesome project", () => {
    let io, serverSocket, clientSocket;
    before((done) => {
        const httpServer = createServer();
        io = new Server(httpServer);
        httpServer.listen(() => {
            const port = 4002;
            clientSocket = new Client(`http://localhost:${port}`);
            io.on("connection", (socket) => {
                serverSocket = socket;
            });
            clientSocket.on("connect", done);
        });
    });

    after(() => {
        io.close();
        clientSocket.close();
    });

    it("should work", (done) => {
        clientSocket.on("ping", (arg) => {
            assert.equal(arg, "world");
            done();
        })
        clientSocket.emit("pong", "world");
    });
});