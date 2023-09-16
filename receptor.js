const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const dataToSend = {
        message: "¡Hola, Roblox!",
        score: 100
    };
    const jsonData = JSON.stringify(dataToSend);
    res.end(jsonData);
});

const port = 3000;
server.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
