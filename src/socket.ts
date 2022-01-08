import { Server } from 'socket.io';

const messages: Array<any> = [];
const users: Array<any> = [];

function handleSocketIO(server: any) {
    const io = new Server(server);

    io.on('connection', (socket: any) => {
        console.log(`User ${socket.id} connected.`);

        users.push(socket.id);

        socket.emit('handshake', socket.id, messages, users);
        socket.broadcast.emit('userConnected', socket.id);

        socket.on('message', (message: any) => {
            messages.push(message);
            socket.broadcast.emit('message', message);
        });

        socket.on('disconnect', () => {
            console.log(`User ${socket.id} disconnected.`);

            users.splice(users.indexOf(socket.id), 1);
            socket.broadcast.emit('userDisconnected', socket.id);
        });
    });
}

export default handleSocketIO;