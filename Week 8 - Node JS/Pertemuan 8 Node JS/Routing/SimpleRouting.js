const routeResponseMap = {
    "/info": "<h1>Halaman Info</h1>",
    "/contact": "<h1>Kontak Kami</h1>",
    "/about": "<h1>Tentang Kami</h1>",
    "/hello": "<h1>Email</h1>",
    "/error": "<h1>Apa yang kamu cari, tidak ada disini :(</h1>"
};

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
        } else {
            res.end("<h1>Halooo</h1>");
        }

    });

    app.listen(port);

console.log(`The server has started and is listening on port number:? ${port}`);

