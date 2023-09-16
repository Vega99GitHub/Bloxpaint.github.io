const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Solicitud recibida desde Roblox!\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});