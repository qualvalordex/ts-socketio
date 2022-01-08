import http from 'http';

import app from './app';
import handleSocketIO from './socket';

const PORT = process.env.PORT || 3030;

const server = http.createServer(app);
handleSocketIO(server);

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});