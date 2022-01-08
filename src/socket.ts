import { Server } from 'socket.io';


function handleSocketIO(server: any) {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log(`User ${socket.id} connected.`);

        socket.on('disconnect', () => {
            console.log(`User ${socket.id} disconnected.`);
        });
    });
}

export default handleSocketIO;