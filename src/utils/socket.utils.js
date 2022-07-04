module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`new client connected ${new Date()}`);
        socket.emit('ping', "world");

        socket.on('pong', (data) => {
            console.log(data);
        });

        socket.on('disconnect', () => {
            console.log(`client disconnected ${new Date()}`);
        });
    });
};