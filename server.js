const http = require("http");

const server = http.createServer(function (req, res) {
    res.end("Hello World!");
})

server.listen(80, (err) => {
    if (!err) {
        console.log(`server is listening on 80`)
    }
})