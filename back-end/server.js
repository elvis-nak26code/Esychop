// importation du module http
const http = require('http');
// importation de l'app express
const app = require('./app');

// cette fonction verifi si le port est valide
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');
// definition du port d'ecoute de l'app
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
    throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
    default:
        throw error;
    }
};

// creation du derver qui utiluse l'app express
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

// ecoute du server
server.listen(port);
